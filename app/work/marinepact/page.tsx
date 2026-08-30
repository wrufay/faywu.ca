import ImageCarousel from "@/components/ImageCarousel";
import NotionToggle from "@/components/NotionToggle";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MarinePact",
  description:
    "Case study: designing MarinePact for Fisheries and Oceans Canada.",
};

export default function Marinepact() {
  return (
    <main className="text-left flex flex-grow flex-col items-start justify-start py-10 max-w-2xl mx-auto w-full">
      {/* <div className="relative w-full fade-in">
        <img
          src="/demos/cover.webp"
          alt=""
          className="w-full h-56 sm:h-72 object-cover select-none shadow-sm dark:brightness-75"
        />
      </div> */}

      <div className="w-full flex flex-col gap-32">
        {/* header */}
        <section className="px-6 sm:px-8 pt-10 sm:pt-12 flex flex-col w-full">
          <h1 className="serif-bold italic text-xl sm:text-2xl text-gray-700 dark:text-gray-400 text-left mb-6">
            bringing interactivity to research workflows at DFO
          </h1>

          <div className="flex flex-col gap-1">
            {[
              { label: "timeline", value: "3 months" },
              { label: "role", value: "Research assistant" },
              {
                label: "worked with",
                value: "1 manager, 1 associate scientist",
              },
            ].map((row) => (
              <div
                key={row.label}
                className="flex flex-row items-center gap-0 sm:gap-3 py-1 sm:py-1.5"
              >
                <span className="text-gray-400 dark:text-gray-500 text-xs sm:text-sm w-18 sm:w-24 flex items-center gap-2 shrink-0">
                  {row.label}
                </span>
                <span className="text-gray-800 dark:text-gray-300 text-xs sm:text-sm">
                  {row.value}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* context */}
        <section className="px-6 sm:px-8 flex flex-col gap-10 sm:gap-16 w-full fade-in">
          <div className="flex flex-col gap-4">
            <div>
              <h2 className="w-fit mb-2 pen-regular text-2xl sm:text-4xl">
                <span className="bg-[color-mix(in_srgb,var(--sunny-yellow)_21%,transparent)]">
                  what i did
                </span>
                , in a nutshell.
              </h2>
              <p className="tracking-tight text-sm sm:text-base">
                I executed the{" "}
                <span className="coding-regular">design & development</span> of
                a research tool used within DFO, shipping an end-to-end demo to
                stakeholders in <span className="font-bold">30 days</span>.
              </p>
            </div>

            <p className="tracking-tight text-sm sm:text-base">
              Being the <span className="font-bold">sole developer</span> of
              this tool, I owned the entire software development life cycle -
              from data to deployment.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <h2 className="w-fit mb-2 pen-regular text-2xl sm:text-4xl">
                the problem:{" "}
                <span className="bg-[color-mix(in_srgb,var(--aritzia-blue)_21%,transparent)]">
                  lack of interactivity.
                </span>
              </h2>
              <p className="tracking-tight text-sm sm:text-base">
                Fisheries and Oceans Canada is researching the impacts of
                potential offshore wind energy development on the Scotian Shelf.
              </p>
            </div>

            <p className="tracking-tight text-sm sm:text-base">
              The problem: no existing tool could visualize the scientists'
              vessel and noise data in a way that was{" "}
              <span className="font-bold">
                interactive, customizable, and presentation-ready
              </span>
              .
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <h2 className="w-fit mb-2 pen-regular text-2xl sm:text-4xl">
                <span className="bg-[color-mix(in_srgb,var(--crimson-red)_21%,transparent)]">
                  understanding
                </span>{" "}
                the users.
              </h2>
              <p className="tracking-tight text-sm sm:text-base">
                Two primary users: DFO scientists who need to iterate on data
                quickly without running models manually, and stakeholders who
                need clear, shareable results to inform decisions.
              </p>
            </div>

            <p className="tracking-tight text-sm sm:text-base">
              Both groups prioritize presentable results and use efficiency over
              a perfect product.
            </p>
          </div>

          {/* <div className="flex flex-col gap-4">
            <div>
              <h2 className="w-fit mb-2 pen-regular text-2xl sm:text-4xl">
                <span className="underline">speaking</span> to users.
              </h2>
              <p className="tracking-tight text-sm sm:text-base">
                My supervisor relayed pain points from scientists and other
                research groups already relying on similar tools - mainly around{" "}
                <span className="font-bold">speed and flexibility</span>.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border border-gray-200 dark:border-stone-600 rounded-lg p-4 flex flex-col gap-1">
                <p className="coding-bold text-sm">speed</p>
                <p className="tracking-tight text-sm text-gray-600 dark:text-gray-400">
                  Existing tools like{" "}
                  <span className="coding-regular">OceanNavigator</span> took
                  too long to process and return data - nobody wants to wait 10+
                  minutes to see a result.
                </p>
              </div>
              <div className="border border-gray-200 dark:border-stone-600 rounded-lg p-4 flex flex-col gap-1">
                <p className="coding-bold text-sm">customizability</p>
                <p className="tracking-tight text-sm text-gray-600 dark:text-gray-400">
                  Every user has different preferences, and no single default
                  view works for everyone - the interface needed to offer
                  choice, not one fixed way of doing things.
                </p>
              </div>
            </div>
          </div> */}
        </section>

        <section className="px-6 sm:px-8 flex flex-col gap-5 sm:gap-8 w-full">
          <p className="text-3xl pen-regular text-center text-[var(--aritzia-blue)] ">
            <span className="text-[var(--crimson-red)]">! </span>oh no, this
            story is under construction
          </p>
          <p>
            I'm currently working hard on this project summary. Check back to
            see the final result and impact made ☺︎ 
          </p>
        </section>

        {/* design decisions */}
        {/* <section className="px-6 sm:px-8 flex flex-col gap-10 sm:gap-16 w-full"> */}

        {/* <div className="flex flex-col gap-4">
            <h2 className="w-fit mb-2 pen-regular text-2xl sm:text-4xl underline">
              version one: prototype
            </h2>
            <NotionToggle
              summary={
                <>
                  A simple interface built around one function: turning millions
                  of raw <span className="coding-regular">AIS</span> vessel
                  points into something a user could actually see and interact
                  with.
                </>
              }
            >
              <video
                src="/demos/v1.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full object-cover shadow-sm dark:brightness-75"
              />
              <p className="tracking-tight text-sm sm:text-base">
                Prior to even having any interface, 3 weeks of work was solely
                comparing <span className="coding-regular">AIS decoders</span>,
                writing ingestion scripts and getting a pipeline deployed - no
                design decisions yet.
              </p>
            </NotionToggle>
          </div> */}

        {/* <div className="flex flex-col gap-4">
            <h2 className="w-fit mb-2 pen-regular text-2xl sm:text-4xl underline">
              version 2: skeleton
            </h2>
            <NotionToggle
              summary={
                <>
                  All primary features - regions, overlays, vessel viewing and
                  moorings - became their own side panels, alongside a new base
                  map and a redesigned UI.
                </>
              }
            >
              <ImageCarousel
                items={[
                  { src: "/demos/v2-vessels.webp", label: "vessels" },
                  { src: "/demos/v2-moorings.webp", label: "moorings" },
                  { src: "/demos/v2-regions.webp", label: "regions" },
                ]}
              />
              <p className="tracking-tight text-sm sm:text-base">
                Functionally, the interface could have been put to a pause here.
                However, there were a few UX flaws that I couldn't overlook, and
                had to address.
              </p>
              <p className="tracking-tight text-sm sm:text-base">
                Firstly, the largest issue was the flow of the{" "}
                <span className="coding-regular">draw region - analysis</span>{" "}
                function. It was unclear where to click to proceed, and repeated
                icons made functions seem ambiguous -{" "}
                <span className="italic">
                  I caught myself clicking the wrong buttons during my own
                  stakeholder demo
                </span>
                .
              </p>
              <img
                src="/demos/flow1.png"
                alt="before: draw region flow"
                className="w-full object-contain shadow-sm dark:brightness-75"
              />
              <video
                src="/demos/uxfix.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full object-cover shadow-sm dark:brightness-75"
              />
              <p className="tracking-tight text-sm sm:text-base">
                How I addressed it: the draw tool moved into the regions panel
                itself, so a drawn region behaves like any other region - it
                persists in a list instead of disappearing after one use.
              </p>
              <p className="tracking-tight text-sm sm:text-base">
                Clicking a region's name toggles its visibility; clicking it on
                the map selects it for analysis. Splitting{" "}
                <span className="italic">"view"</span> from{" "}
                <span className="italic">"analyze"</span> got rid of the
                button-that-changes-meaning problem entirely.
              </p>
              <p className="tracking-tight text-sm sm:text-base">
                Secondly, the buttons and panels didn't have enough description.
                This played a role in the confusion and mixups. I addressed this
                by changing the left button bar to have a small label for each
                button instead of showing its function on hover.
              </p>
              <p className="tracking-tight text-sm sm:text-base">
                It was also difficult to customize the visuals. For instance -
                there was no way to hide moorings unless you changed the time
                frame. And for vessels, you couldn't even hide a track after
                showing it.
              </p>
              <p className="tracking-tight text-sm sm:text-base">
                It seemed as if each feature was separate, not part of a bigger
                tool. Not great for the user to have to refresh the page each
                time they wanted to toggle a feature. I had the logic to display
                the data, but UX decisions were needed to make all the functions
                cohesive.
              </p>
            </NotionToggle>
          </div> */}

        {/* <div className="flex flex-col gap-4">
            <h2 className="w-fit mb-2 pen-regular text-2xl sm:text-4xl underline">
              version 3: final
            </h2>
            <NotionToggle
              summary={
                <>
                  The final weeks were about polish - a coherent colour scheme,
                  consistent typography, and layout that matched how the tool
                  was actually used. Notion-style toggles and more customization
                  tied it together, and the draw-region flow finally worked
                  cleanly.
                </>
              }
            >
              <img
                src="/demos/flow2.png"
                alt="after: draw region flow"
                className="w-full object-contain shadow-sm dark:brightness-75"
              />
              <video
                src="/demos/drawupdated.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full object-cover shadow-sm dark:brightness-75"
              />
              <p className="tracking-tight text-sm sm:text-base">
                There were many hiccups in between each iteration - for
                instance, when implementing the{" "}
                <span className="coding-regular">'see all traffic'</span>{" "}
                feature, I wasn't sure where to place the buttons to choose how
                the vessels were distinguished by colour.
              </p>
              <p className="tracking-tight text-sm sm:text-base">
                Initially, clicking see all vessel traffic would also allow you
                to hover over a filtered list in the vessels panel to see that
                particular vessel highlighted.
              </p>
              <p className="tracking-tight text-sm sm:text-base">
                However, it wasn't very useful and was{" "}
                <span className="italic">
                  even confusing to my supervisor when testing it
                </span>{" "}
                - he couldn't get to where he wanted without me showing him how
                first. That signalled a real flaw in the UX.
              </p>
              <p className="tracking-tight text-sm sm:text-base">
                So, I removed that ability to focus on vessels when displaying
                in a region, since it was too messy to combine both panels in
                one feature.
              </p>
              <p className="tracking-tight text-sm sm:text-base">
                Letting users switch base maps mattered{" "}
                <span className="font-bold">
                  functionally, not just aesthetically
                </span>{" "}
                - bathymetry reads clearly on the dark map, while the noise
                layer, a different type of overlay, doesn't.
              </p>
              <p className="tracking-tight text-sm sm:text-base">
                Notion-style toggles, originally built just to resize labels,
                got extended to the vessel list after my supervisor tried them
                and asked for the same on that panel - since only one vessel is
                selected at a time, it never needed to show a long list. He said{" "}
                <span className="italic">"make it smaller,"</span> so I made it
                adjustable.
              </p>
            </NotionToggle>
          </div> */}
        {/* </section> */}

        {/* reflections and wrapup */}
        {/* <section className="px-6 sm:px-8 flex flex-col gap-10 sm:gap-16 w-full">
          <div className="flex flex-col gap-4">
            <video
              src="/demos/updatecustomize.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full object-cover shadow-sm dark:brightness-75"
            />
            <p className="tracking-tight text-sm sm:text-base">
              Currently, this is where we're leaving this user interface - at
              least the design portion. My job was to create the{" "}
              <span className="font-bold">foundational architecture</span> for
              other co-op students and developers to build upon in the future.
            </p>
            <p className="tracking-tight text-sm sm:text-base">
              Hence, I've been picking away at documentation, file organization,
              and other chore-type tasks related to the data pipeline - overall,
              making sure the tool fulfills its purpose of supporting scientists
              in their research.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <h2 className="w-fit mb-2 pen-regular text-2xl sm:text-4xl">
                <span className="underline">demo</span> time
              </h2>
              <p className="tracking-tight text-sm sm:text-base">
                Presented a demo of the completed tool to a group of 15+,
                involving research scientists, stakeholders and marine
                regulators.{" "}
                <span className="italic">
                  The unspoken cues revealed the most about where friction lived
                </span>{" "}
                - when someone couldn't navigate from one place to another, that
                was my sign to iterate.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border border-gray-200 dark:border-stone-600 rounded-lg p-4 flex flex-col gap-1">
                <p className="coding-bold text-sm text-[var(--crimson-red)]">
                  design isn't just code
                </p>
                <p className="tracking-tight text-sm text-gray-600 dark:text-gray-400">
                  I started this project the way I start everything - with code.
                  Running into real UX friction taught me the{" "}
                  <span className="italic">
                    difference between fixing a problem and preventing it
                  </span>{" "}
                  in the first place.
                </p>
              </div>
              <div className="border border-gray-200 dark:border-stone-600 rounded-lg p-4 flex flex-col gap-1">
                <p className="coding-bold text-sm text-[var(--aritzia-blue)]">
                  you're not the user
                </p>
                <p className="tracking-tight text-sm text-gray-600 dark:text-gray-400">
                  You can't build a real product only from your own lens.
                  Understanding how users actually think, and translating that
                  into pixels, was the steepest part of this project -{" "}
                  <span className="font-bold">
                    harder than any technical challenge
                  </span>
                  .
                </p>
              </div>
              <div className="border border-gray-200 dark:border-stone-600 rounded-lg p-4 flex flex-col gap-1">
                <p className="coding-bold text-sm text-[var(--crimson-red)]">
                  wearing every hat
                </p>
                <p className="tracking-tight text-sm text-gray-600 dark:text-gray-400">
                  A friend once joked that I was the{" "}
                  <span className="italic">"SWE, PM and client"</span> of my own
                  work. That's the best part - I get to try things I've never
                  done, on builds that have a real impact for research I care
                  about.
                </p>
              </div>
              <div className="border border-gray-200 dark:border-stone-600 rounded-lg p-4 flex flex-col gap-1">
                <p className="coding-bold text-sm text-[var(--aritzia-blue)]">
                  give people choice
                </p>
                <p className="tracking-tight text-sm text-gray-600 dark:text-gray-400">
                  People change their minds - that's exactly why you build in
                  flexibility. Letting users adjust styles, change properties,
                  and toggle elements made all the difference, even without a
                  rigid plan going in.
                </p>
              </div>
            </div>
          </div>
        </section> */}

        {/* next steps */}
        {/* <section className="px-6 sm:px-8 pb-8 flex flex-col gap-10 sm:gap-16 w-full">
          <div className="flex flex-col gap-4">
            <h2 className="w-fit mb-2 pen-regular text-2xl sm:text-4xl">
              <span className="underline">next</span> steps
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border border-gray-200 dark:border-stone-600 rounded-lg p-4 flex flex-col gap-1">
                <p className="coding-bold text-sm">VesselViz</p>
                <p className="tracking-tight text-sm text-gray-600 dark:text-gray-400">
                  The first of two tools I'm building for this research
                  initiative. It fills a gap other marine data tools can't -
                  tailored to diagnose vessel and noise patterns in designated
                  areas.
                </p>
              </div>
              <div className="border border-gray-200 dark:border-stone-600 rounded-lg p-4 flex flex-col gap-1">
                <p className="coding-bold text-sm">what's next</p>
                <p className="tracking-tight text-sm text-gray-600 dark:text-gray-400">
                  A tool for{" "}
                  <span className="font-bold">
                    directly measuring offshore wind impacts
                  </span>
                  , giving tangible results to inform mitigation decisions. It
                  has a more defined problem, scope and user group - so I'm
                  investing more upfront in speaking with users and wireframing
                  (low-fi done, high-fi next).
                </p>
              </div>
            </div>
          </div>
        </section> */}
      </div>

      <Link
        href="/work"
        className="mt-16 mx-auto text-base sm:text-lg serif-regular text-gray-500 hover:opacity-67 py-0.5 px-2 border border-gray-500 rounded-full"
      >
        ⇠
      </Link>
    </main>
  );
}
