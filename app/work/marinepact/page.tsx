import Image from "next/image";
import ImageCarousel from "@/components/ImageCarousel";
import Link from "next/link";

export default function Marinepact() {
  return (
    <main className="text-left flex flex-grow flex-col items-start justify-start py-10 max-w-2xl mx-auto w-full">
      <div className="relative w-full fade-in">
        <img
          src="/demos/coverpage.png"
          alt=""
          className="w-full h-56 sm:h-72 rounded-t-lg object-cover select-none"
        />
        <img
          src="/demos/canada.jpeg"
          alt=""
          className="absolute -bottom-8 left-6 sm:left-8 w-12 sm:w-18 object-cover border rounded-full border-gray-200 select-none"
        />
      </div>

      <div className="w-full rounded-b-lg bg-white shadow-sm flex flex-col gap-32">
        {/* header */}
        <section className="px-6 sm:px-8 pt-10 sm:pt-12 flex flex-col w-full">
          <h1 className="serif-bold italic text-xl sm:text-2xl text-gray-700 text-left mb-6">
            designing software for federally-funded research projects
          </h1>

          <div className="flex flex-col gap-1">
            {[
              { label: "timeline", value: "3 months" },
              { label: "role", value: "software developer, UX designer" },
              { label: "team", value: "1 manager" },
            ].map((row) => (
              <div
                key={row.label}
                className="flex flex-row items-center gap-0 sm:gap-3 py-1 sm:py-1.5"
              >
                <span className="text-gray-400 text-xs sm:text-sm w-18 sm:w-24 flex items-center gap-2 shrink-0">
                  {row.label}
                </span>
                <span className="text-gray-800 text-xs sm:text-sm">
                  {row.value}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* first section */}
        <section className="px-8 flex flex-col gap-16 w-full">
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
              development life cycle - from data to deployment.
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
              The problem: no existing tool could visualize the scientists' vessel
              and noise data in a way that was interactive, customizable, and
              presentation-ready.
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
        <section className="px-8 flex flex-col gap-16 w-full">
          <div className="flex flex-col gap-4">
            <h2 className="w-fit mb-2 pen-regular text-4xl underline">
              design decisions: v1
            </h2>

            <div className="flex gap-2 flex-col">
              <Image
                src="/demos/prototype.webp"
                className="w-full object-cover rounded-lg"
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
        <section className="px-8 pb-8 flex flex-col gap-16 w-full">
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
