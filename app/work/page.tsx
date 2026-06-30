export default function Work() {
  return (
    <main className="flex flex-grow flex-col gap-16 items-start justify-start py-10 max-w-3xl mx-auto w-full">
      <section
        className="w-full flex flex-col gap-8 mt-8 fade-in"
        style={{ animationDelay: "0s" }}
      >
        <h2 className="serif-regular text-gray-200 tracking-tight text-5xl text-left border-b border-gray-200">
          recently
        </h2>

        {/* todo: make spacing consistent */}
        <div className="flex flex-col gap-2 sm:gap-4">
          <div>
            <h2 className="serif-bold text-gray-600 text-left text-lg">
              software developer + user interface designer
            </h2>
            <p className="text-sm coding-regular text-gray-400 text-left flex items-center">
              Fisheries and Oceans Canada · Internship
            </p>
          </div>

          <p className="text-sm text-left">
            Building geo-spatial software assisting research projects within the
            federal government of Canada.
          </p>

          {/* screenshots */}
          <div className="grid grid-cols-2 gap-3">
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

        {/* skills tags */}
        {/* <div>
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
        </div> */}
      </section>

      {/* <section
        className="mt-16 mb-16 fade-in"
        style={{ animationDelay: "0.3s" }}
      >
        <h1 className="coding-bold text-gray-300 text-5xl text-left">
          design work - stay tuned
        </h1>
      </section> */}
    </main>
  );
}
