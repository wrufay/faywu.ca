import Link from "next/link";
import GitHubStatus from "@/components/GitHubStatus";

export default function Home() {
  return (
    <main className="flex flex-grow flex-col gap-6 sm:gap-10 items-center justify-center">
      {/*main title text section*/}
      <div className="fade-in">
        <img
          src="/designs/frontfay.png"
          className="w-30 h-15 sm:w-50 sm:h-25 object-cover mx-auto opacity-86 animate-float"
          alt="colourful hand-drawn logo that says fay wu"
        />
      </div>
      <div className="max-w-md flex flex-col gap-4 sm:gap-6">
        <h1 className="text-3xl sm:text-5xl font-semibold text-gray-900 typing-animation">
          hi there! I'm
          <span className="pen-regular">
            {" "}
            Fay ☺︎
            {/* <a href="https://swwd.vercel.app" target="_blank" className="inline-block align-top -translate-y-2">
              <img
                src="/icons/dawg.png"
                className="w-10 h-10 sm:w-14 sm:h-14 hover:animate-float transition-transform cursor-pointer"
                alt="dawg"
              />
            </a> */}
          </span>
        </h1>

        {/* star bullets and lines */}
        <div className="text-sm sm:text-lg text-gray-600 flex flex-col items-center fade-in delay-1 gap-0.5 sm:gap-1">
          <GitHubStatus />

          <p className="flex flex-row gap-1 sm:gap-2 items-center">
            <img src="/icons/star.png" className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
            <span>
              computer science @{" "}
              <a
                className="hover:text-[var(--crimson-red)] hover:opacity-100"
                target="_blank"
                href="https://uwaterloo.ca/about"
              >
                <span className="pen-regular">University of Waterloo</span>
              </a>
            </span>
          </p>

          <p className="flex flex-row gap-1 sm:gap-2 items-center">
            <img src="/icons/star.png" className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
            <span>
              software developer ⚓︎{" "}
              <a
                className="hover:text-[var(--crimson-red)] hover:opacity-100"
                target="_blank"
                href="https://www.dfo-mpo.gc.ca/index-eng.html"
              >
                <span className="pen-regular">Government of Canada</span>
              </a>{" "}
            </span>
          </p>
        </div>

        {/*buttons*/}
        <div className="flex flex-row gap-2 sm:gap-3 justify-center items-center coding-regular fade-in-bounce-delayed text-xs sm:text-base">
          <a
            href="https://www.linkedin.com/in/fayranw/"
            target="_blank"
            className="px-3 py-2 sm:px-4 sm:py-2 bg-white hover:translate-y-[-2px] transition-transform border border-gray-300 text-gray-800 rounded-lg hover:bg-gray-100/50"
          >
            let's{" "}
            <span className="text-[var(--aritzia-blue)] coding-bold">
              connect!
            </span>
          </a>

          <Link
            href="/work"
            className="px-3 py-2 sm:px-4 sm:py-2 bg-white hover:translate-y-[-2px] transition-transform border border-gray-300 text-gray-800 rounded-lg hover:bg-gray-100/50"
          >
            see{" "}
            <span className="text-[var(--aritzia-blue)] coding-bold">
              my work
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}
