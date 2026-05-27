"use client";

import { useState } from "react";
import Modal from "@/components/Modal";
import CodeWalkthrough from "./CodeWalkthrough";

interface Node {
  id: string;
  label: string;
  sublabel: string;
  tag: string;
  tagColor: string;
  sections: { heading: string; body: string; code?: string }[];
  note?: string;
}

const nodes: Node[] = [
  {
    id: "ccg",
    label: "CCG Terrestrial",
    sublabel: "Raw NMEA sentences disguised as .csv",
    tag: "Data Source",
    tagColor: "bg-blue-50 text-blue-500 border-blue-200",
    sections: [
      {
        heading: "What it is",
        body: "Canadian Coast Guard shore stations along the Canadian coastline pick up AIS radio signals from nearby ships. This gives dense, high-frequency coverage close to shore — exactly what the Scotian Shelf needs.",
      },
      {
        heading: "The problem",
        body: "Each file is ~4.2 GB with roughly 26 million messages. Despite the .csv extension, these are NOT spreadsheets — they're raw binary-packed NMEA sentences, one per line. There is no header row, no columns, just encoded ship data that looks like this:",
        code: "\\s:Harrington,c:1741649400*0C\\!AIVDO,1,1,,A,4030pI1vTmGMssgckdLqH7G00D00,0*24",
      },
      {
        heading: "The old approach (discarded)",
        body: "A pre-existing Python script decoded these files into NetCDF — a scientific array format designed for oceanographic data. NetCDF cannot be queried with SQL, so FastAPI can't use it as a database. We ditched it entirely.",
      },
    ],
  },
  {
    id: "satellite",
    label: "exactEarth Satellite",
    sublabel: "Pre-decoded tabular CSVs inside .zip files",
    tag: "Data Source",
    tagColor: "bg-blue-50 text-blue-500 border-blue-200",
    sections: [
      {
        heading: "What it is",
        body: "Satellites pick up AIS signals globally, including offshore where shore stations can't reach. exactEarth is DFO's existing satellite AIS data partner — the data was already available on the lab machine.",
      },
      {
        heading: "The scale problem",
        body: "24 zip files. Each contains a decoded tabular CSV with ~6.4 million rows and 119 columns. That's roughly 160 million rows globally — way too much to load into memory.",
      },
      {
        heading: "Why not pandas?",
        body: "pandas loads the entire file into RAM before filtering. At 6.4 million rows per file, that's slow and memory-intensive. We need something that filters while reading.",
      },
    ],
  },
  {
    id: "aisdb",
    label: "aisdb",
    sublabel: "Rust-core Python library — decodes and stores in one step",
    tag: "Ingestion",
    tagColor: "bg-amber-50 text-amber-600 border-amber-200",
    sections: [
      {
        heading: "What it does",
        body: "aisdb is built at Dalhousie University in Halifax — the same waters we're working with. It reads raw NMEA messages, unpacks the binary encoding, validates checksums, and writes everything directly into SQLite tables it creates itself. It handles both decoding AND storage in a single step.",
      },
      {
        heading: "Output tables",
        body: "aisdb creates two tables automatically:",
        code: "ais_202503_dynamic  — position pings (MMSI, time, lat, lon, SOG, COG)\nais_202503_static   — vessel metadata (MMSI, name, ship type, call sign)",
      },
      {
        heading: "The file extension trick",
        body: "aisdb detects format by file extension. A .csv file is treated as a decoded tabular spreadsheet — which crashes immediately on raw NMEA. The fix: symlink each .csv to a .nm4 filename in a temp directory before passing it to aisdb, and pass",
        code: "type_preference='nmea'",
      },
      {
        heading: "Performance",
        body: "The Rust core decodes ~68,000 messages per second. Each 4.2 GB CCG file takes about 4 minutes.",
      },
    ],
    note: "aisdb has no spatial filter option — it decodes everything globally. Scotian Shelf filtering is handled as a separate step after decoding.",
  },
  {
    id: "duckdb",
    label: "DuckDB",
    sublabel: "SQL directly on compressed files — no memory overhead",
    tag: "Ingestion",
    tagColor: "bg-amber-50 text-amber-600 border-amber-200",
    sections: [
      {
        heading: "What it does",
        body: "DuckDB runs a SQL WHERE clause directly on the CSV while reading it — rows outside the Scotian Shelf bounding box are discarded before Python even sees them. It never loads the full file into memory.",
      },
      {
        heading: "The filter query",
        body: "The bounding box is lat 42–47°N, lon -66–-57°W:",
        code: "SELECT TRY_CAST(MMSI AS BIGINT), Time,\n       TRY_CAST(Longitude AS DOUBLE),\n       TRY_CAST(Latitude AS DOUBLE), SOG, COG,\n       Vessel_Name, Ship_Type\nFROM read_csv(file, header=true, ignore_errors=true)\nWHERE TRY_CAST(Latitude  AS DOUBLE) BETWEEN 42.0 AND 47.0\n  AND TRY_CAST(Longitude AS DOUBLE) BETWEEN -66.0 AND -57.0",
      },
      {
        heading: "TRY_CAST everywhere",
        body: "Real satellite CSVs contain occasional malformed values — blank cells, stray text in numeric columns. TRY_CAST returns NULL instead of crashing. ignore_errors=true handles rows where the entire line is unparseable.",
      },
      {
        heading: "Result",
        body: "62,673 Scotian Shelf records extracted from ~160 million global rows across 24 files.",
      },
    ],
    note: "DuckDB 1.5 cannot read .zip files natively. Fix: use Python's zipfile module to extract each zip to a temp directory, run DuckDB on the plain CSV, then delete it before moving to the next file.",
  },
  {
    id: "filter",
    label: "Scotian Shelf Filter",
    sublabel: "lat 42–47°N · lon -66–-57°W",
    tag: "Data Reduction",
    tagColor: "bg-green-50 text-green-600 border-green-200",
    sections: [
      {
        heading: "Why filter at all",
        body: "The raw CCG data is global — shore stations across Canada pick up signals from Vancouver, Montreal, the St. Lawrence, everywhere. Without filtering, the database is enormous, queries are slow, and the UI is full of irrelevant vessels.",
      },
      {
        heading: "Satellite — filtered at ingest time",
        body: "DuckDB's WHERE clause runs during the file read. Rows outside the bounding box never enter the database. This is the clean approach.",
      },
      {
        heading: "CCG — filtered after decoding",
        body: "aisdb has no bounding box parameter, so it dumps everything globally into SQLite first. Then we run a DELETE pass:",
        code: "DELETE FROM ais_202503_dynamic\nWHERE latitude  NOT BETWEEN 42.0 AND 47.0\n   OR longitude NOT BETWEEN -66.0 AND -57.0",
      },
      {
        heading: "Cascade and VACUUM",
        body: "After removing out-of-bounds pings, the static table still has metadata for vessels with no remaining pings. Those are removed too. Then SQLite's VACUUM rewrites the file compactly — SQLite does not shrink the file automatically after DELETE.",
        code: "-- cascade delete orphaned vessel metadata\nDELETE FROM ais_202503_static\nWHERE mmsi NOT IN (SELECT DISTINCT mmsi FROM ais_202503_dynamic)\n\n-- reclaim disk space\nVACUUM;",
      },
    ],
    note: "Before: ~2.3 GB, ~16M dynamic rows, ~4,500 vessels. After VACUUM: 213 MB, ~1.4M rows, 680 vessels — all Scotian Shelf.",
  },
  {
    id: "sqlite",
    label: "SQLite",
    sublabel: "data/ais.db · 213 MB · 3 tables",
    tag: "Database",
    tagColor: "bg-purple-50 text-purple-500 border-purple-200",
    sections: [
      {
        heading: "Why not Postgres?",
        body: "Postgres was the goal. But the DFO/university lab network blocks all outbound TCP connections except ports 80 and 443. Railway Postgres runs on port 17765. Neon Postgres runs on port 5432. Both are unreachable from the lab machine where the data lives. SQLite is a local file — no network required.",
      },
      {
        heading: "Three tables",
        body: "The database contains:",
        code: "ais_202503_dynamic  — CCG position pings (unix epoch timestamps)\nais_202503_static   — CCG vessel metadata\nais_satellite       — Satellite data (ISO timestamp strings, e.g. 20251201T035835Z)",
      },
      {
        heading: "The production blocker",
        body: "SQLite is tied to one machine. If the lab machine is wiped, the data is gone. It also can't handle many concurrent users. The code already supports Postgres via a DATABASE_URL environment variable — it's a one-line swap. The blocker is purely the DFO firewall, which is a network policy problem, not a technical one.",
      },
    ],
    note: "Committed to Git via LFS (Git Large File Storage) since the 213 MB file exceeds GitHub's 100 MB per-file limit. Railway does not support Git LFS — it pulls the pointer file instead of the real database, which is the current production deployment blocker.",
  },
  {
    id: "postgres-goal",
    label: "Postgres (Goal)",
    sublabel: "Why this matters at scale",
    tag: "Target Database",
    tagColor: "bg-violet-50 text-violet-500 border-violet-200",
    sections: [
      {
        heading: "Why Postgres over SQLite",
        body: "SQLite is a file on one machine. Postgres is a server — data lives in the cloud, survives machine failures, and multiple users can query simultaneously without locking each other out.",
      },
      {
        heading: "PostGIS",
        body: "Postgres has a PostGIS extension that adds native geospatial indexing. Bounding box queries like 'all vessels within this polygon' and ship route lookups become extremely fast even at massive scale — hundreds of millions of AIS pings.",
      },
      {
        heading: "The scale argument",
        body: "The current dataset is test data — 2 CCG files and 24 satellite zips. The full dataset is much larger. Postgres with proper indexing and table partitioning by month handles this. SQLite does not.",
      },
      {
        heading: "The actual blocker",
        body: "The scale problem is solvable. The real blocker is the DFO firewall. Railway Postgres (port 17765) and Neon (port 5432) are both unreachable from the lab machine. Neon's HTTP API uses port 443 but requires rewriting all database access to use HTTP requests instead of a standard driver — significant extra complexity for a workaround. Resolution: either IT opens a port, or the ingest runs from a machine outside the DFO network.",
      },
    ],
    note: "Working code. Real data. Right architecture. Needs cloud DB and the full dataset instead of test files.",
  },
  {
    id: "fastapi",
    label: "FastAPI",
    sublabel: "Python · 3 endpoints · deployed on Railway",
    tag: "Backend",
    tagColor: "bg-orange-50 text-orange-500 border-orange-200",
    sections: [
      {
        heading: "Why FastAPI",
        body: "The entire data stack — aisdb, DuckDB, sqlite3 — is Python, so Python is the natural backend choice. FastAPI is async, fast, and auto-generates OpenAPI docs. CORS middleware allows the Vercel-hosted frontend to call the Railway-hosted API.",
      },
      {
        heading: "Endpoints",
        body: "Three endpoints:",
        code: "GET /api/vessels\n  → All unique vessels (MMSI, name, ship type, source)\n\nGET /api/vessels/area?min_lat&max_lat&min_lon&max_lon\n  → Vessels with pings inside a drawn bounding box\n\nGET /api/vessel/{mmsi}/route?start&end\n  → Ordered position track, CCG + satellite merged by time",
      },
      {
        heading: "Time format quirk",
        body: "CCG stores timestamps as Unix epoch integers. Satellite stores them as compact ISO strings:",
        code: "-- CCG\ntime = 1741649400\n\n-- Satellite\ntime = '20251201T035835Z'",
      },
    ],
    note: "The /api/vessels endpoint originally queried ais_202503_dynamic with SELECT DISTINCT — a full table scan across 1.4M rows with no index. It timed out on every request. Fixed by querying ais_202503_static instead, which has one row per vessel and is far smaller.",
  },
  {
    id: "frontend",
    label: "React + OpenLayers",
    sublabel: "Vite · Tailwind CSS · deployed on Vercel",
    tag: "Frontend",
    tagColor: "bg-teal-50 text-teal-600 border-teal-200",
    sections: [
      {
        heading: "Why OpenLayers",
        body: "OpenLayers gives full control over custom vector layers, feature styling, and map interactions — more powerful than Leaflet for this use case. Routes are rendered as LineString geometries; individual AIS pings are Point features.",
      },
      {
        heading: "Speed coloring",
        body: "Each ping point is colored by speed over ground (SOG):",
        code: "sog > 10  →  red    #e63946  (fast)\nsog 3–10  →  orange #f4a261  (moderate)\nsog < 3   →  green  #2a9d8f  (anchored / slow)",
      },
      {
        heading: "Filter by Area",
        body: "Uses OpenLayers' Draw interaction with createBox(). The user drags a rectangle on the map — the box extent is transformed from web mercator (EPSG:3857) to lon/lat (EPSG:4326) and sent to /api/vessels/area, replacing the full vessel list with only vessels that had pings inside the drawn area.",
      },
    ],
    note: "Tailwind v4 and Vite v8 both use native Rust bindings that failed on the DFO Linux lab machine. Resolved by downgrading to Tailwind v3 and Vite v5.",
  },
];

const Arrow = () => (
  <div className="flex flex-col items-center my-1">
    <div className="w-px h-5 bg-gray-200" />
    <span className="text-gray-300 text-xs">↓</span>
  </div>
);

const TwoArrows = () => (
  <div className="flex items-start justify-center gap-16 sm:gap-32 my-1">
    {[0, 1].map((i) => (
      <div key={i} className="flex flex-col items-center">
        <div className="w-px h-5 bg-gray-200" />
        <span className="text-gray-300 text-xs">↓</span>
      </div>
    ))}
  </div>
);

const MergeArrow = () => (
  <div className="flex flex-col items-center my-1">
    <div className="flex items-end justify-center gap-16 sm:gap-32">
      <div className="w-px h-5 bg-gray-200" />
      <div className="w-px h-5 bg-gray-200" />
    </div>
    <div className="relative flex items-center justify-center w-24 sm:w-48">
      <div className="w-full h-px bg-gray-200" />
    </div>
    <div className="w-px h-4 bg-gray-200" />
    <span className="text-gray-300 text-xs">↓</span>
  </div>
);

interface NodeCardProps {
  node: Node;
  onClick: () => void;
  wide?: boolean;
}

const NodeCard = ({ node, onClick, wide }: NodeCardProps) => (
  <button
    onClick={onClick}
    className={`bg-white border border-gray-100 rounded-lg px-4 py-3 shadow-sm hover:shadow-md hover:translate-y-[-2px] text-left cursor-pointer ${wide ? "w-full max-w-xs" : "w-full max-w-[180px] sm:max-w-[210px]"}`}
  >
    <span className={`text-[10px] coding-regular border rounded-full px-2 py-0.5 ${node.tagColor}`}>
      {node.tag}
    </span>
    <p className="text-sm text-gray-800 mt-2 serif-regular">{node.label}</p>
    <p className="text-[11px] coding-regular text-gray-400 mt-1 leading-tight">{node.sublabel}</p>
  </button>
);

export default function Week1() {
  const [active, setActive] = useState<Node | null>(null);

  const get = (id: string) => nodes.find((n) => n.id === id)!;

  return (
    <>
      <main className="flex flex-grow flex-col items-center py-10 w-full">
        <div className="fade-in-bounce max-w-lg w-full text-center mb-12">
          <p className="coding-regular text-xs text-gray-400 mb-2">Week 1 · DFO Internship</p>
          <h1 className="text-2xl serif-bold text-gray-800">
            Scotian Shelf AIS Vessel Tracker
          </h1>
          <p className="text-sm text-gray-500 mt-2 serif-regular">
            Architecture proposal — click any node to learn why
          </p>
        </div>

        <div className="flex flex-col items-center w-full fade-in-bounce gap-0">

          <p className="text-[10px] coding-regular text-gray-300 mb-2 tracking-widest uppercase">Raw Data</p>
          <div className="flex gap-4 sm:gap-8 justify-center">
            <NodeCard node={get("ccg")} onClick={() => setActive(get("ccg"))} />
            <NodeCard node={get("satellite")} onClick={() => setActive(get("satellite"))} />
          </div>

          <TwoArrows />

          <p className="text-[10px] coding-regular text-gray-300 mb-2 tracking-widest uppercase">Ingestion</p>
          <div className="flex gap-4 sm:gap-8 justify-center">
            <NodeCard node={get("aisdb")} onClick={() => setActive(get("aisdb"))} />
            <NodeCard node={get("duckdb")} onClick={() => setActive(get("duckdb"))} />
          </div>

          <MergeArrow />

          <p className="text-[10px] coding-regular text-gray-300 mb-2 tracking-widest uppercase">Filter</p>
          <NodeCard node={get("filter")} onClick={() => setActive(get("filter"))} wide />

          <Arrow />

          <p className="text-[10px] coding-regular text-gray-300 mb-2 tracking-widest uppercase">Database (Current)</p>
          <NodeCard node={get("sqlite")} onClick={() => setActive(get("sqlite"))} wide />

          <Arrow />

          <p className="text-[10px] coding-regular text-gray-300 mb-2 tracking-widest uppercase">Database (Goal)</p>
          <NodeCard node={get("postgres-goal")} onClick={() => setActive(get("postgres-goal"))} wide />

          <Arrow />

          <p className="text-[10px] coding-regular text-gray-300 mb-2 tracking-widest uppercase">Backend</p>
          <NodeCard node={get("fastapi")} onClick={() => setActive(get("fastapi"))} wide />

          <Arrow />

          <p className="text-[10px] coding-regular text-gray-300 mb-2 tracking-widest uppercase">Frontend</p>
          <NodeCard node={get("frontend")} onClick={() => setActive(get("frontend"))} wide />

        </div>

        <p className="text-xs text-gray-300 coding-regular mt-12">
          Working prototype · Test data only · Pending cloud DB migration
        </p>

        <CodeWalkthrough />
      </main>

      <Modal isOpen={!!active} onClose={() => setActive(null)}>
        {active && (
          <div className="flex flex-col gap-6">
            <div>
              <span className={`text-[10px] coding-regular border rounded-full px-2 py-0.5 ${active.tagColor}`}>
                {active.tag}
              </span>
              <h2 className="text-xl serif-bold text-gray-800 mt-3">{active.label}</h2>
              <p className="coding-regular text-xs text-gray-400 mt-1">{active.sublabel}</p>
            </div>

            {active.sections.map((s, i) => (
              <div key={i} className="flex flex-col gap-2">
                <p className="text-xs coding-regular text-gray-400 uppercase tracking-widest">{s.heading}</p>
                <p className="text-sm serif-regular text-gray-700 leading-relaxed">{s.body}</p>
                {s.code && (
                  <pre className="bg-gray-50 border border-gray-100 rounded-lg px-4 py-3 text-xs coding-regular text-gray-600 overflow-x-auto whitespace-pre leading-relaxed">
                    {s.code}
                  </pre>
                )}
              </div>
            ))}

            {active.note && (
              <div className="bg-amber-50/60 border border-amber-100 rounded-lg px-4 py-3 flex flex-col gap-1">
                <p className="text-xs coding-regular text-amber-500 uppercase tracking-widest">Note</p>
                <p className="text-sm serif-regular text-gray-600 leading-relaxed">{active.note}</p>
              </div>
            )}
          </div>
        )}
      </Modal>
    </>
  );
}
