export default function Work() {
  return (
    <main className="flex flex-grow flex-col gap-16 items-start justify-start py-10 max-w-3xl mx-auto w-full">
      <section className="w-full flex flex-col gap-8 mt-8">
      <h1 className="coding-bold text-gray-300 text-5xl text-left">professional exp.</h1>
      
        <div className="flex flex-col">
          <h2 className="text-lg coding-regular text-gray-300 text-left flex items-center">
            Fisheries and Oceans Canada | May 2026 - Present
          </h2>

          <div className="flex flex-col gap-3">
            <p className="serif-bold text-gray-600 text-left sm:text-lg flex items-center gap-2">
              software developer ⚓︎ internship
            </p>
            <div>
              <p className="text-sm text-left border-b border-gray-400 mb-4">
                Building geo-spatial software assisting research projects within
                the federal government of Canada.
              </p>
              <p className="text-sm text-left pen-regular text-xl italic text-gray-400">
                ✧ SCOTIANWATCH
              </p>
              <p className="text-sm text-left  text-gray-400">
                ↳ React.js + TypeScript user interface to visualize Scotian
                Shelf ship traffic.
              </p>

              <p className="text-sm text-left  text-gray-400">
                ↳ 40M rows of AIS data ingested into Docker-containerized
                PostgreSQL database
              </p>
              <p className="text-sm text-left  text-gray-400">
                ↳ 8k vessels served on FastAPI backend running Python scripts
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 mt-1">
              <img
                src="/demos/work1.png"
                className="rounded-lg w-full object-cover"
                alt="work screenshot 1"
              />
              <img
                src="/demos/work2.png"
                className="rounded-lg w-full object-cover"
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
            {["Python3", "Linux", "SQL", "Matplotlib"].map((tag) => (
              <span
                key={tag}
                className="text-[10px] coding-regular text-gray-500 border border-gray-200 rounded-full px-2 py-0.5"
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
                className="text-[10px] coding-regular text-gray-500 border border-gray-200 rounded-full px-2 py-0.5"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-16 mb-16"><h1 className="coding-bold text-gray-300 text-5xl text-left">design work - stay tuned.</h1></section>
    </main>
  );
}
