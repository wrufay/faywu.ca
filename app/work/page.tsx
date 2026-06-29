export default function Work() {
  return (
    <main className="flex flex-grow flex-col gap-16 items-start justify-start py-10 max-w-3xl mx-auto w-full">
      <section
        className="w-full flex flex-col gap-8 mt-8 fade-in"
        style={{ animationDelay: "0s" }}
      >
        <h1 className="coding-bold text-gray-300 text-5xl text-left">
          professional exp.
        </h1>

        {/* todo: make spacing consistent */}
        <div className="flex flex-col mb-0 sm:mb-0">
          <h2 className="text-lg coding-regular text-gray-300 text-left flex items-center mb-2">
            Fisheries and Oceans Canada | May 2026 - Present
          </h2>

          <div className="flex flex-col gap-3">
            <p className="serif-bold text-gray-600 text-left text-lg flex items-center gap-2">
              software developer ⚓︎ internship
            </p>
            <div>
              <p className="text-sm text-left border-b border-gray-400 mb-8 sm:mb-10">
                Building geo-spatial software assisting research projects within
                the federal government of Canada.
              </p>
              <p className="text-sm text-left pen-regular text-xl italic text-[var(--sunny-yellow)]">
                ★{" "}
                <a
                  href="https://github.com/wrufay/ais_vessels"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--aritzia-blue)] opacity-67 hover:opacity-100"
                >
                  SCOTIANWATCH
                </a>
              </p>
              <p className="text-sm text-left  text-gray-400">
                ↳ React.js + TypeScript user interface to visualize Scotian
                Shelf ship traffic.
              </p>
              <p className="text-sm text-left  text-gray-400">
                ↳ 40M rows of AIS data ingested into containerized PostgreSQL
                database
              </p>
              <p className="text-sm text-left  text-gray-400">
                ↳ 8k vessels served on FastAPI backend
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 mt-1">
              <img
                src="/demos/work1.png"
                className="rounded-lg w-full object-cover fade-in-bounce"
                style={{ animationDelay: "0.2s" }}
                alt="work screenshot 1"
              />
              <img
                src="/demos/work2.png"
                className="rounded-lg w-full object-cover fade-in-bounce"
                style={{ animationDelay: "0.4s" }}
                alt="work screenshot 2"
              />
            </div>
          </div>
        </div>

        {/* skills tags */}
        <div>
          <div className="flex flex-wrap gap-2 mb-2">
            <span className="coding-bold text-xs text-gray-500 uppercase">
              technologies ·
            </span>
            {["Python3", "Linux", "SQL", "Matplotlib", "Docker"].map((tag) => (
              <span
                key={tag}
                className="text-[10px] coding-regular text-[var(--crimson-red)] border border-[var(--crimson-red)]/67 rounded-full px-2 py-0.5"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="coding-bold text-xs text-gray-500 uppercase">
              skills ·
            </span>
            {[
              "Databases",
              "User interface design",
              "Full-stack development",
            ].map((tag) => (
              <span
                key={tag}
                className="text-[10px] coding-regular text-[var(--crimson-red)] border border-[var(--crimson-red)]/67 rounded-full px-2 py-0.5"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section
        className="mt-16 mb-16 fade-in"
        style={{ animationDelay: "0.3s" }}
      >
        <h1 className="coding-bold text-gray-300 text-5xl text-left">
          design work - stay tuned
        </h1>
      </section>
    </main>
  );
}
