import HoverImage from "@/components/HoverImage";

export default function Work() {
  return (
    <main className="flex flex-grow flex-col gap-16 items-start justify-start py-10 max-w-3xl mx-auto w-full">
      <section
        className="w-full flex flex-col mt-8 fade-in"
        style={{ animationDelay: "0s" }}
      >
        <h2 className="serif-regular text-gray-200 tracking-tight text-6xl text-right">
          professional
        </h2>

        {/* todo: make spacing consistent */}
        <div className="flex flex-col gap-2 sm:gap-4">
          <div>
            <h2 className="serif-bold text-gray-600 text-left text-lg">
              Research Assistant Intern
            </h2>
            <p className="text-sm coding-regular text-gray-400 text-left flex items-center border-b border-gray-300">
              Fisheries and Oceans Canada | May 2026 - Present
            </p>
          </div>

          <p className="text-sm text-left flex items-center justify-between gap-2">
            <span>
              Building software for federally-funded research projects at DFO.
            </span>
            <span className="flex gap-2 shrink-0">
              {["full-stack development", "product design"].map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] serif-regular border rounded-full px-2 py-0.5"
                >
                  {tag}
                </span>
              ))}
            </span>
          </p>

          {/* screenshots */}
          <div className="grid grid-cols-2 gap-3">
            <HoverImage
              src="/demos/toolfront.webp"
              alt="map user interface screenshot"
              href="/work/marinepact"
              label="see case study"
              caption="(1) Data visualization tool for ship traffic and ocean layers"
              className="rounded-lg w-full object-cover fade-in-bounce hover:scale-102 active:scale-98"
              style={{ animationDelay: "0.2s" }}
              external={false}
            />
            <HoverImage
              src="/demos/wireframefront.webp"
              alt="wireframe image"
              href=""
              label="case study in progress"
              caption="(2) User interface to communicate pile driving noise impact"
              className="rounded-lg w-full object-cover fade-in-bounce hover:scale-102 active:scale-98"
              style={{ animationDelay: "0.4s" }}
            />
          </div>
        </div>
      </section>

      <section
        className="w-full flex flex-col mt-8 fade-in"
        style={{ animationDelay: "0.5s" }}
      >
        <h2 className="serif-regular text-gray-200 tracking-tight text-6xl text-right">
          community
        </h2>

        {/* todo: make spacing consistent */}
        <div className="flex flex-col gap-2 sm:gap-4">
          <div>
            <h2 className="serif-bold text-gray-600 text-left text-lg">
              Founder
            </h2>
            <p className="text-sm coding-regular text-gray-400 text-left border-b border-gray-300">
              Halifax Code Circle, Halifax Language Exchange | November 2024 -
              June 2025
            </p>
          </div>

          <p className="text-sm text-left flex items-center justify-between gap-2">
            <span>
              50+ members, 500+ volunteer hours, 70+ meetups over 8 months.
            </span>
            <span className="flex gap-2 shrink-0">
              <span className="text-[10px] serif-regular border rounded-full px-2 py-0.5">
                web development
              </span>
              <a
                href="https://drive.google.com/drive/u/2/folders/1Rv7DUqPjIlFByNf473ejKTx7Rx3Ofb4j"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] serif-regular border rounded-full px-2 py-0.5 hover:border-[var(--aritzia-blue)] hover:text-[var(--aritzia-blue)] active:scale-98"
              >
                graphic design
              </a>
            </span>
          </p>

          {/* screenshots */}
          <div className="grid grid-cols-2 gap-3">
            <HoverImage
              src="/demos/community1.webp"
              alt="halifax code circle screenshot"
              href="https://hfxcodecircle.ca/"
              label="hfxcodecircle.ca"
              caption="(1) Community of high-school builders who love math & code"
              className="rounded-lg w-full object-cover fade-in-bounce hover:scale-102 active:scale-98"
              style={{ animationDelay: "0.2s" }}
            />
            <HoverImage
              src="/demos/hfxlangfront.webp"
              alt="halifax language exchange screenshot"
              href="https://drive.google.com/drive/u/2/folders/1Rv7DUqPjIlFByNf473ejKTx7Rx3Ofb4j"
              label="hfxlanguages.ca"
              caption="(2) Learning languages together through activites and curricula"
              className="rounded-lg w-full object-cover fade-in-bounce hover:scale-102 active:scale-98"
              style={{ animationDelay: "0.4s" }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
