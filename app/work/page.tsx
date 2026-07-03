import HoverImage from "@/components/HoverImage";

export default function Work() {
  return (
    <main className="flex flex-grow flex-col gap-16 items-start justify-start py-10 max-w-3xl mx-auto w-full">
      <section
        className="w-full flex flex-col gap-8 mt-8 fade-in"
        style={{ animationDelay: "0s" }}
      >
        <h2 className="serif-regular text-gray-200 tracking-tight text-5xl text-left border-b border-gray-200">
          currently
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
            <div className="group flex flex-col gap-1">
              <img
                src="/demos/work1.png"
                alt="work screenshot 1"
                className="rounded-lg w-full object-cover fade-in-bounce hover:scale-102 transition-transform"
                style={{ animationDelay: "0.2s" }}
              />
              <p className="text-xs coding-regular text-gray-400 text-center mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                presented demo to 15+ scientists & stakeholders
              </p>
            </div>
            <HoverImage
              src="/demos/work2.png"
              alt="work screenshot 2"
              href="https://github.com/wrufay/ais_vessels"
              label="building on github!"
              caption="full-stack React, FastAPI, Postgres project"
              className="rounded-lg w-full object-cover fade-in-bounce hover:scale-102 active:scale-98"
              style={{ animationDelay: "0.4s" }}
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

      <section
        className="w-full flex flex-col gap-8 mt-8 fade-in"
        style={{ animationDelay: "0.5s" }}
      >
        <h2 className="serif-regular text-gray-200 tracking-tight text-5xl text-left border-b border-gray-200">
          previously
        </h2>

        {/* todo: make spacing consistent */}
        <div className="flex flex-col gap-2 sm:gap-4">
          <div>
            <h2 className="serif-bold text-gray-600 text-left text-lg">
              founder
            </h2>
            <p className="text-sm coding-regular text-gray-400 text-left">
              <a
                href="https://hfxcodecircle.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-gray-200"
              >
                Halifax Code Circle
              </a>
              {" / "}
              <a
                href="https://hfxlanguages.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-gray-200"
              >
                Halifax Language Exchange
              </a>
              {" · Community"}
            </p>
          </div>

          <p className="text-sm text-left">
            Organized 2 non-profit communities in STEM foreign language, for
            high-school students in Halifax.
          </p>

          {/* screenshots */}
          <div className="grid grid-cols-2 gap-3">
            <div className="group flex flex-col gap-1">
              <img
                src="/demos/community1.png"
                alt="community screenshot 1"
                className="rounded-lg w-full object-cover fade-in-bounce hover:scale-102 transition-transform"
                style={{ animationDelay: "0.2s" }}
              />
              <p className="text-xs coding-regular text-gray-400 text-center mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                built with HTML/CSS/JS & lots of love ≺3
              </p>
            </div>
            <HoverImage
              src="/demos/community2.png"
              alt="community screenshot 2"
              href="https://drive.google.com/drive/u/2/folders/1Rv7DUqPjIlFByNf473ejKTx7Rx3Ofb4j"
              label="see my (100+) designs!"
              caption="50+ members, 500+ volunteer hours, 70+ meetups"
              className="rounded-lg w-full object-cover fade-in-bounce hover:scale-102 active:scale-98"
              style={{ animationDelay: "0.4s" }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
