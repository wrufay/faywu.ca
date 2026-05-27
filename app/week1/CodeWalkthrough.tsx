"use client";

import { useState } from "react";

interface Annotation {
  label: string;
  body: string;
}

interface Snippet {
  id: string;
  file: string;
  fn: string;
  description: string;
  code: string;
  annotations: Annotation[];
}

const snippets: Snippet[] = [
  {
    id: "symlink",
    file: "pipeline/ingest.py",
    fn: "ingest_ccg()",
    description: "The .nm4 symlink trick — forcing aisdb to treat CCG files as raw NMEA",
    code: `csv_files = glob.glob(f"{CCG_DIR}/CCG_AIS_UTC_Log_*.csv")

with tempfile.TemporaryDirectory() as tmpdir:
    nm4_files = []
    for csv_path in csv_files:
        stem = Path(csv_path).stem
        nm4_path = os.path.join(tmpdir, f"{stem}.nm4")
        os.symlink(os.path.abspath(csv_path), nm4_path)  # ← the trick
        nm4_files.append(nm4_path)

    with get_aisdb_conn() as dbconn:
        aisdb.decode_msgs(
            filepaths=nm4_files,
            dbconn=dbconn,
            source="CCG_terrestrial",
            type_preference="nmea",  # ← force NMEA decoding
        )`,
    annotations: [
      {
        label: "Why symlink instead of rename?",
        body: "The raw files live in a shared directory we don't own. Renaming them would affect other users on the lab machine. A symlink creates a temporary alias in a temp folder with the right extension — aisdb sees a .nm4 file, reads the original .csv content, and the original is untouched.",
      },
      {
        label: "Why does the extension matter?",
        body: "aisdb uses the file extension to decide how to parse the file. A .csv file is expected to be a decoded tabular spreadsheet with a header row. A .nm4 file is treated as raw NMEA sentences. The CCG files are raw NMEA saved with a .csv extension — so without the symlink, aisdb would look for a header row, fail immediately, and decode nothing.",
      },
      {
        label: "type_preference='nmea'",
        body: "Even with the .nm4 extension, passing type_preference='all' (the default) produced 0 rows in testing. Explicitly passing 'nmea' tells aisdb to only look for NMEA message types, skipping the decoded-CSV parser entirely.",
      },
    ],
  },
  {
    id: "trim",
    file: "pipeline/ingest.py",
    fn: "trim_ccg_to_scotian_shelf()",
    description: "Post-decode spatial filter — deleting global CCG data outside the Scotian Shelf",
    code: `# Step 1: remove position pings outside bounding box
cur = conn.execute(f"""
    DELETE FROM ais_202503_dynamic
    WHERE latitude  NOT BETWEEN {YMIN} AND {YMAX}
       OR longitude NOT BETWEEN {XMIN} AND {XMAX}
""")
# → removed 14,621,654 rows

# Step 2: cascade delete vessel metadata with no remaining pings
cur = conn.execute("""
    DELETE FROM ais_202503_static
    WHERE mmsi NOT IN (
        SELECT DISTINCT mmsi FROM ais_202503_dynamic
    )
""")
# → removed 1,020,499 rows

conn.commit()

# Step 3: reclaim disk space
# SQLite marks deleted rows as free pages but does NOT shrink the file.
# VACUUM rewrites the entire database compactly.
# sqlite3 data/ais.db "VACUUM;"
# 2.3 GB → 213 MB`,
    annotations: [
      {
        label: "Why can't we filter during decode?",
        body: "aisdb's decode_msgs() has no bounding box parameter — it decodes every message in the file and writes all of it to the database. The Scotian Shelf is one small region of the global data that CCG shore stations pick up (Vancouver, Montreal, St. Lawrence, etc. all end up in the same tables). The only option is to decode everything first, then delete what we don't need.",
      },
      {
        label: "Why cascade delete the static table?",
        body: "After removing out-of-bounds position pings from ais_202503_dynamic, the static table still has vessel metadata (names, ship types) for vessels that no longer have any pings on the shelf. Those entries are useless — the API would show vessel names with no route data. Deleting them keeps the vessel list clean.",
      },
      {
        label: "Why VACUUM?",
        body: "SQLite's DELETE statement marks rows as free space but does not actually shrink the file. The database file stays at 2.3 GB with mostly empty pages. VACUUM rewrites the entire database into a new compact file. This is a full rewrite operation and takes a few minutes, but the result is a 213 MB file that is small enough for Git LFS and practical to deploy.",
      },
    ],
  },
  {
    id: "duckdb",
    file: "pipeline/ingest.py",
    fn: "ingest_satellite()",
    description: "DuckDB filter — streaming 160M satellite rows, keeping only Scotian Shelf",
    code: `for zip_path in zip_files:
    # DuckDB 1.5 can't read .zip natively — extract to temp first
    with zipfile.ZipFile(zip_path) as z:
        csv_name = z.namelist()[0]
        extracted = os.path.join(tmpdir, csv_name)
        z.extract(csv_name, tmpdir)

    con = duckdb.connect()
    df = con.execute(f"""
        SELECT
            TRY_CAST(MMSI AS BIGINT)     AS mmsi,
            Time                          AS time,
            TRY_CAST(Longitude AS DOUBLE) AS longitude,
            TRY_CAST(Latitude  AS DOUBLE) AS latitude,
            TRY_CAST(SOG AS DOUBLE)       AS sog,
            TRY_CAST(COG AS DOUBLE)       AS cog,
            Vessel_Name                   AS vessel_name,
            Ship_Type                     AS ship_type
        FROM read_csv('{extracted}', header=true, ignore_errors=true)
        WHERE
            TRY_CAST(Latitude  AS DOUBLE) BETWEEN 42.0 AND 47.0
            AND TRY_CAST(Longitude AS DOUBLE) BETWEEN -66.0 AND -57.0
            AND TRY_CAST(MMSI AS BIGINT) IS NOT NULL
    """).df()

    os.remove(extracted)  # ← clean up before next file`,
    annotations: [
      {
        label: "Why DuckDB over pandas?",
        body: "pandas would call pd.read_csv() which loads the entire 6.4 million row file into RAM before any filtering. DuckDB is columnar — when filtering by Latitude and Longitude, it reads only those two columns and skips the other 117. Rows outside the bounding box never enter Python memory. Result: a fraction of the RAM usage and significantly faster.",
      },
      {
        label: "Why TRY_CAST everywhere?",
        body: "Real satellite CSVs from exactEarth contain occasional malformed values — blank cells where a number is expected, or stray text in numeric columns. Regular CAST would raise an error and crash the query. TRY_CAST returns NULL for any unparseable value instead of crashing. ignore_errors=true handles rows where the entire line is malformed.",
      },
      {
        label: "Result",
        body: "62,673 Scotian Shelf records across 24 zip files — extracted from approximately 160 million global rows. The unfiltered global dataset would have been unusable.",
      },
    ],
  },
  {
    id: "vessels",
    file: "main.py",
    fn: "GET /api/vessels",
    description: "Listing all vessels — and why we query the static table, not the dynamic one",
    code: `@app.get("/api/vessels")
def get_vessels():
    with get_db() as conn:

        # Query static table (one row per vessel) — NOT dynamic
        # Dynamic has 1.4M rows with no MMSI index → full table scan → timeout
        ccg = conn.execute("""
            SELECT s.mmsi, s.vessel_name, s.ship_type, 'CCG' AS source
            FROM ais_202503_static s
            WHERE s.mmsi IS NOT NULL
            GROUP BY s.mmsi
        """).fetchall()

        sat = conn.execute("""
            SELECT DISTINCT mmsi, vessel_name, ship_type, 'satellite' AS source
            FROM ais_satellite
            WHERE mmsi IS NOT NULL
        """).fetchall()

    # Deduplicate: CCG takes priority if MMSI appears in both sources
    seen = set()
    vessels = []
    for row in list(ccg) + list(sat):
        if row["mmsi"] not in seen:
            seen.add(row["mmsi"])
            vessels.append({ ... })

    return {"vessels": vessels, "count": len(vessels)}`,
    annotations: [
      {
        label: "Why not query ais_202503_dynamic?",
        body: "The dynamic table has 1.4 million position pings. A SELECT DISTINCT mmsi on a table with no MMSI index causes a full table scan — reading every single row to build the unique set. In testing this timed out on every request. The static table has one row per vessel and is already grouped by MMSI, so the same query returns instantly.",
      },
      {
        label: "Why deduplicate in Python?",
        body: "The same vessel (same MMSI) can appear in both the CCG and satellite datasets. A SQL UNION DISTINCT would work but is harder to control the priority. Doing it in Python lets us explicitly prefer CCG data (which has vessel names more reliably) when a vessel appears in both sources.",
      },
    ],
  },
  {
    id: "route",
    file: "main.py",
    fn: "GET /api/vessel/{mmsi}/route",
    description: "Merging CCG and satellite tracks — handling two completely different time formats",
    code: `@app.get("/api/vessel/{mmsi}/route")
def get_vessel_route(mmsi: int, start: str = None, end: str = None):

    # ── CCG: time stored as Unix epoch integer ──────────────────────────
    ccg_query = """
        SELECT time, longitude, latitude, NULL as sog
        FROM ais_202503_dynamic WHERE mmsi = ?
    """
    if start:
        ccg_query += " AND time >= strftime('%s', ?)"  # convert ISO → epoch
    if end:
        ccg_query += " AND time <= strftime('%s', ?)"

    # ── Satellite: time stored as compact ISO string ─────────────────────
    # e.g.  "20251201T035835Z"  (no dashes, no colons)
    sat_query = """
        SELECT time, longitude, latitude, sog
        FROM ais_satellite WHERE mmsi = ?
    """
    if start:
        sat_query += " AND time >= ?"
        # "2025-03-11T00:00:00" → "20250311T000000"
        sat_params.append(
            start.replace("-","").replace(":","").replace(" ","T")
        )

    # ── Merge and sort both sources by time ──────────────────────────────
    points.sort(key=lambda p: str(p["time"]))`,
    annotations: [
      {
        label: "Why are the time formats different?",
        body: "The CCG tables were created by aisdb, which stores Unix epoch integers (seconds since 1970-01-01). The satellite table was created by our own DuckDB ingestion script, which preserved the original exactEarth time format — a compact ISO string like 20251201T035835Z. Two different tools, two different conventions.",
      },
      {
        label: "strftime('%s', ?)",
        body: "SQLite's strftime('%s', value) converts an ISO datetime string to a Unix epoch integer, making it comparable to the CCG timestamps. So we pass '2025-03-11T00:00:00' and SQLite converts it to 1741651200 before comparing.",
      },
      {
        label: "Why sort by str(time)?",
        body: "We can't sort numerically because the two time formats are different types — an integer and a string. Sorting both as strings works because the satellite ISO format (20251201T035835Z) sorts correctly lexicographically, and Unix epoch integers also sort correctly as strings since they're all the same length. It's a pragmatic workaround for a mixed-type merge.",
      },
    ],
  },
];

interface SnippetCardProps {
  snippet: Snippet;
}

function SnippetCard({ snippet }: SnippetCardProps) {
  const [open, setOpen] = useState(false);
  const [activeAnnotation, setActiveAnnotation] = useState<number | null>(null);

  return (
    <div className="bg-white border border-gray-100 rounded-lg shadow-sm overflow-hidden w-full">
      {/* header */}
      <button
        onClick={() => { setOpen(o => !o); setActiveAnnotation(null); }}
        className="w-full text-left px-5 py-4 flex items-start justify-between gap-4 hover:bg-gray-50/50 cursor-pointer"
      >
        <div className="flex flex-col gap-1">
          <span className="coding-regular text-[10px] text-gray-400">{snippet.file}</span>
          <span className="serif-regular text-sm text-gray-800">{snippet.fn}</span>
          <span className="coding-regular text-xs text-gray-400 leading-snug">{snippet.description}</span>
        </div>
        <span className="text-gray-300 text-sm mt-0.5 flex-shrink-0">{open ? "↑" : "↓"}</span>
      </button>

      {open && (
        <div className="border-t border-gray-100">
          {/* code block */}
          <pre className="bg-gray-50 px-5 py-4 text-[11px] coding-regular text-gray-600 overflow-x-auto whitespace-pre leading-relaxed">
            {snippet.code}
          </pre>

          {/* annotations */}
          <div className="px-5 py-4 flex flex-col gap-2 border-t border-gray-100">
            <p className="coding-regular text-[10px] text-gray-300 uppercase tracking-widest mb-1">
              Annotations
            </p>
            {snippet.annotations.map((a, i) => (
              <div key={i}>
                <button
                  onClick={() => setActiveAnnotation(activeAnnotation === i ? null : i)}
                  className="text-left w-full flex items-start gap-2 group cursor-pointer"
                >
                  <span className="coding-regular text-[10px] text-amber-400 mt-0.5 flex-shrink-0">
                    {activeAnnotation === i ? "▾" : "▸"}
                  </span>
                  <span className="text-sm serif-regular text-gray-600 group-hover:text-gray-800">
                    {a.label}
                  </span>
                </button>
                {activeAnnotation === i && (
                  <div className="ml-4 mt-2 mb-1 pl-3 border-l-2 border-amber-100">
                    <p className="text-sm serif-regular text-gray-500 leading-relaxed">
                      {a.body}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function CodeWalkthrough() {
  return (
    <div className="w-full max-w-2xl mt-16 mb-4 text-left">
      <div className="text-center mb-8 text-center">
        <p className="coding-regular text-[10px] text-gray-300 uppercase tracking-widest mb-2">
          Code Walkthrough
        </p>
        <h2 className="serif-bold text-gray-800 text-lg">The key scripts</h2>
        <p className="text-sm serif-regular text-gray-400 mt-1">
          Click a snippet to expand — then click the annotations to understand each decision
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {snippets.map(s => (
          <SnippetCard key={s.id} snippet={s} />
        ))}
      </div>
    </div>
  );
}
