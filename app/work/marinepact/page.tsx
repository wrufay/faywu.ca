import Link from "next/link";
import Image from "next/image";
import SkillTooltip from "@/components/SkillTooltip";

export default function DFO() {
  return (
    <main className="text-left flex flex-grow flex-col items-start justify-start pb-10 max-w-2xl mx-auto w-full">
      {/* hero */}
      <div className="relative w-full flex flex-col items-center justify-center min-h-[calc(100vh-240px)] gap-4 text-center">
        <img
          src="/demos/marinepactbg.png"
          alt=""
          aria-hidden
          className=" w-screen h-48 sm:h-64  shadow-sm object-cover opacity-[0.67] mb-4 pointer-events-none select-none"
        />

        <h1 className="slide-up-delayed serif-regular text-gray-800 text-6xl sm:text-8xl leading-none tracking-tight">
          marinepact
        </h1>
        <p className="slide-up-delayed-2 text-base coding-regular text-gray-700 max-w-sm">
          a suite of tools built for a federally funded research initiative @
          DFO
        </p>
        <div className="group flex flex-col items-center gap-2">
          <p className="text-xs coding-regular text-gray-400 cursor-default">
            full-stack development{" "}
            <span className="text-[var(--aritzia-blue)]">✿</span> user interface
            design
          </p>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <SkillTooltip
              logos={[
                { name: "PostgreSQL", src: "/icons/postgres.svg" },
                { name: "Docker", src: "/icons/docker.svg" },
                { name: "FastAPI", src: "/icons/fastapi.svg" },
                { name: "Python", src: "/icons/python.svg" },
                { name: "TypeScript", src: "/icons/typescript.svg" },
                { name: "React", src: "/icons/react.svg" },
                { name: "Figma", src: "/icons/figma.svg" },
              ]}
            />
          </div>
        </div>
      </div>

      {/* problem */}
      <section className="w-full flex flex-col gap-6 mb-20">
        <p className="serif-bold text-gray-800 text-2xl sm:text-3xl leading-snug">
          Offshore wind energy development on the Scotian Shelf poses a risk to
          marine life.
        </p>
        <div className="flex flex-col gap-3 pl-5 border-l border-gray-200">
          <p className="text-sm leading-relaxed text-gray-500">
            As research increases, so does the need to make complex data
            accessible. I'm here to build the tools to help scientists and
            stakeholders understand and act on it.
          </p>
        </div>
      </section>

      {/* <section>
        <h1 className="">tool #1 - vessel traffic visualizer</h1>
      </section> */}

      <section className="w-full flex flex-col gap-4 mb-20 bg-[var(--sunny-yellow)]/10 border border-[var(--sunny-yellow)]/30 rounded-2xl px-7 py-8">
        {/* <p className="serif-bold text-gray-800 text-3xl sm:text-4xl leading-tight">
          bridging the gap between{" "}
          <span className="italic text-[var(--aritzia-blue)]">acoustics</span>{" "}
          and{" "}
          <span className="italic text-[var(--aritzia-blue)]">audience.</span>
        </p> */}
        <p className="serif-bold text-gray-800 text-3xl sm:text-4xl leading-tight">
          page under development -{" "}
          <span className="italic text-[var(--aritzia-blue)]">more soon.</span>
        </p>
        {/* <p className="text-sm leading-relaxed text-gray-500">
          Building a user interface that displays noise impact maps based on
          user input through integrating a calculation-heavy and noise modelling
          pipeline.
        </p> */}
      </section>
    </main>
  );
}
