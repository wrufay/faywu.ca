import SkillTooltip from "@/components/SkillTooltip";
import Image from "next/image";
import ImageCarousel from "@/components/ImageCarousel";
import Link from "next/link";

export default function Marinepact() {
  return (
    <main className="text-left flex flex-grow flex-col items-start justify-start pb-10 max-w-2xl mx-auto w-full">
      {/* HERO */}

      {/* change min-h-screen for something else here, later. */}

      <div className="relative w-full flex flex-col items-center justify-center gap-4 text-center min-h-screen">
        <img
          src="/demos/marinepactbg.png"
          alt=""
          aria-hidden
          className="w-xs sm:w-lg h-32 sm:h-48 shadow-sm object-cover opacity-[0.67] mb-4 pointer-events-none rounded-lg select-none"
        />
        <h1 className="slide-up-delayed serif-regular text-gray-800 text-6xl sm:text-8xl leading-none tracking-tight">
          marinepact
        </h1>
        <p className="slide-up-delayed-2 text-sm sm:w-full max-w-xs sm:text-base coding-regular text-gray-700 sm:max-w-sm">
          all-in-one mapping tool for DFO scientists
        </p>

        {/* meta row */}
        <section className="max-w-lg w-full grid grid-cols-3 text-center">
          <div className="flex flex-col text-gray-700">
            <p className="pen-regular underline text-lg">Timeline</p>
            <div className="flex flex-col text-xs coding-regular">
              <p>1 month</p>
              <p>June 2026</p>
            </div>
          </div>
          <div className="flex flex-col text-gray-700">
            <p className="pen-regular underline text-lg">Team</p>
            <div className="flex flex-col text-xs coding-regular">
              <p>1 manager</p>
              <p>1 dev (me!)</p>
            </div>
          </div>
          <div className="flex flex-col text-gray-700">
            <p className="pen-regular underline text-lg">Skills</p>
            <div className="flex flex-col text-xs coding-regular">
              <p>Full-stack</p>
              <p>UX design</p>
            </div>
          </div>
        </section>
      </div>

      {/* three children inside this div. could bring some styles out into a class later to be less redundant*/}
      <div className="flex flex-col gap-32">
        {/* first section */}
        <section className="px-8 py-8 flex flex-col gap-16 w-full border rounded-lg border-gray-300">
          <div className="flex flex-col gap-4">
            <div>
              <h2 className="w-fit mb-2 pen-regular text-4xl">
                <span className="bg-[var(--sunny-yellow)]/21">what i did</span>,{" "}
                in a nutshell.
              </h2>
              <p className="tracking-tight">
                I executed the{" "}
                <span className="coding-regular">design & development</span> of
                a research tool used within DFO, shipping an end-to-end demo to
                stakeholders in 30 days.
              </p>
            </div>

            <p className="tracking-tight">
              Being the sole developer of this tool, I owned the entire software
              development life cycle - from data processing, to design
              decisions, to deployment.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <h2 className="w-fit mb-2 pen-regular text-4xl">
                the problem:{" "}
                <span className="bg-[var(--aritzia-blue)]/21">
                  lack of interactivity.
                </span>
              </h2>
              <p className="tracking-tight">
                Fisheries and Oceans Canada is researching the impacts of
                potential offshore wind energy development on the Scotian Shelf.
              </p>
            </div>

            <p className="tracking-tight">
              The problem: no existing tool could visualize the team's vessel
              and noise data in a way that was interactive, customizable, and
              presentation-ready for stakeholders.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <h2 className="w-fit mb-2 pen-regular text-4xl">
                <span className="bg-[var(--crimson-red)]/21">
                  understanding
                </span>{" "}
                the users.
              </h2>
              <p className="tracking-tight">
                Two primary users: DFO scientists who need to iterate on data
                quickly without running models manually, and stakeholders who
                need clear, shareable results to inform decisions.
              </p>
            </div>

            <p className="tracking-tight">
              Both groups prioritize presentable results and use efficiency over
              a perfect product.
            </p>
          </div>
        </section>

        {/* second section: design decisions - bulk */}
        <section className="px-8 py-8 flex flex-col gap-16 w-full border rounded-lg border-gray-300">
          <div className="flex flex-col gap-4">
            <h2 className="w-fit mb-2 pen-regular text-4xl underline">
              design decisions: v1
            </h2>

            <div className="flex gap-2 flex-col">
              <Image
                src="/demos/prototype.webp"
                className="w-full object-cover rounded-lg shadow-sm"
                width={1664}
                height={1086}
                alt=""
              />
              <p className="tracking-tight">
                A prototype that solves a singular objective: translating
                millions of vessel data on the DFO Linux remote into a visual
                the user can interact with..
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="w-fit mb-2 pen-regular text-4xl underline">
              design decisions: v2
            </h2>

            <div className="flex gap-2 flex-col">
              <ImageCarousel
                items={[
                  { src: "/demos/moorings.webp" },
                  { src: "/demos/startend.webp" },
                  { src: "/demos/regions.webp" },
                ]}
              />
              <p className="tracking-tight">
                The second stage of design involved iterating upon feedback. I
                carefully translated incoming ideas into coherent features
                incorporated into the user flow; all while observing how users
                interacted with each one, live.
              </p>
            </div>
          </div>
        </section>

        {/* section 3 - same style as the first */}

        <section className="px-8 py-8 flex flex-col gap-16 w-full border rounded-lg border-gray-300">
          <div className="flex flex-col gap-4">
            <div>
              <h2 className="w-fit mb-2 pen-regular text-4xl">
                <span className="underline">demo</span> time
              </h2>
              <p className="tracking-tight">
                Presented a demo of the completed tool to a group of 15+,
                involving research scientists, stakeholders and marine
                regulators.
              </p>
            </div>

            <p className="tracking-tight">
              The unspoken cues revealed the most about which places held
              friction. When a user couldn't navigate from one place to another,
              this was my sign to question and iterate.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <h2 className="w-fit mb-2 pen-regular text-4xl">
                learnings, & <span className="italic">takeaways.</span>
              </h2>
              <p className="tracking-tight">
                People change their minds, which is why you allow them choice.
                Providing user freedom to adjust styles, change properties, and
                toggle elements made all the difference.
              </p>
            </div>

            <p className="tracking-tight">
              Without a plan, there is no process. Jumping into building was
              tempting, but slowing down to think through a design choice was
              never a regret.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <h2 className="w-fit mb-2 pen-regular text-4xl">
                <span className="underline">next</span> steps
              </h2>
              <p className="tracking-tight">
                VesselViz is the first of two tools I'm building for this
                research initiative. It fills the gaps other marine data
                visualizing software can't - tailored to diagnose patterns in
                designated areas.
              </p>
            </div>

            <p className="tracking-tight">
              The next software I'll be building involves directly measuring
              offshore wind realization impacts, providing tangible results used
              to inform mitigation decisions.{" "}
              <span className="coding-regular">▷ Marinepact </span>
            </p>
          </div>
        </section>
      </div>

      <Link
        href="/work"
        className="mt-16 mx-auto text-sm coding-regular text-gray-500 hover:opacity-67"
      >
        ◀︎ back to work
      </Link>
    </main>
  );
}
