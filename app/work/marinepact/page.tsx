import ImageCarousel from "@/components/ImageCarousel";
import NotionToggle from "@/components/NotionToggle";
import Link from "next/link";

export default function Marinepact() {
  return (
    <main className="text-left flex flex-grow flex-col items-start justify-start py-10 max-w-2xl mx-auto w-full">
      <div className="relative w-full fade-in">
        <img
          src="/demos/cover.webp"
          alt=""
          className="w-full h-56 sm:h-72 rounded-t-lg object-cover select-none"
        />
      </div>

      <div className="w-full rounded-b-lg bg-white shadow-sm flex flex-col gap-32">
        {/* header */}
        <section className="px-6 sm:px-8 pt-10 sm:pt-12 flex flex-col w-full">
          <h1 className="serif-bold italic text-xl sm:text-2xl text-gray-700 text-left mb-6">
            software for federally-funded research projects
          </h1>

          <div className="flex flex-col gap-1">
            {[
              { label: "timeline", value: "3 months" },
              { label: "role", value: "software developer, UI designer" },
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
              The problem: no existing tool could visualize the scientists'
              vessel and noise data in a way that was interactive, customizable,
              and presentation-ready.
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
              version one: prototype
            </h2>
            <NotionToggle label="read more">
              <video
                src="/demos/v1.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full object-cover rounded-lg"
              />
              <p className="tracking-tight">
                A simple user interface with a singular function: display AIS
                data into the UI, allowing users to interact with it.
              </p>
              <p className="tracking-tight">
                Prior to even having any interface, 3 weeks of work was solely
                comparing AIS decoders, writing ingestion scripts and getting a
                pipeline deployed - no design decisions yet.
              </p>
            </NotionToggle>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="w-fit mb-2 pen-regular text-4xl underline">
              version 2: skeleton
            </h2>
            <NotionToggle label="read more">
              <ImageCarousel
                items={[
                  { src: "/demos/v2-vessels.webp", label: "vessels" },
                  { src: "/demos/v2-moorings.webp", label: "moorings" },
                  { src: "/demos/v2-regions.webp", label: "regions" },
                ]}
              />
              <p className="tracking-tight">
                All the primary features - regions, overlays, vessel viewing and
                moorings are now implemented as separate side panels.
              </p>
              <p className="tracking-tight">
                The base map has changed, and there have been significant
                changes to the UI design, iterated over 3 weeks.
              </p>
              <p className="tracking-tight">
                Functionally, the interface could have been put to a pause here.
                However, there were a few UX flaws that I couldn't overlook, and
                had to address.
              </p>
              <p className="tracking-tight">
                Firstly, the largest issue was the flow of the draw region -
                analysis function. It was unclear where to click to proceed, and
                repeated icons made functions seem ambiguous. This friction
                point stood out to me most clearly during the stakeholder
                presentation where I did a 2 minute demo of this iteration, and
                found myself clicking the wrong buttons when navigating this
                feature.
              </p>
              <img
                src="/demos/flow-before.svg"
                alt="before: draw region flow"
                className="w-full object-contain rounded-lg border border-gray-200"
              />
              <video
                src="/demos/uxfix.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full object-cover rounded-lg"
              />
              <p className="tracking-tight">
                How I addressed it: *long story, good ux story*
              </p>
              <p className="tracking-tight">
                Secondly, the buttons and panels didn't have enough description.
                This played a role in the confusion and mixups. I addressed this
                by changing the left button bar to have a small label for each
                button instead of showing its function on hover.
              </p>
              <p className="tracking-tight">
                It was also difficult to customize the visuals. For instance -
                there was no way to hide moorings unless you changed the time
                frame. And for vessels, you couldn't even hide a track after
                showing it. It seemed as if each feature was separate, not part
                of a bigger tool. Definitley not great for the user to have to
                refresh the page each time they wanted to toggle a feature. I
                had the logic to display the data, but UX decisions were needed
                to make all the functions cohesive.
              </p>
            </NotionToggle>
          </div>

          {/* MORE RANDOM TEXT THAT COULD BE USED */}
          <p>
            When learning about the direction for this project from my manager,
            a few pain points surfaced: - Existing software (such as
            OceanNavigator) were **slow** in running data and relaying it back
            to the user. This kinda defeats the point of having a user interface
            in part, since nobody wants to wait 10+ minutes to see a result. -
            Presentability was an issue with this software. * actually i kinda
            forget what the main point was… supervisor mentioned google earth.
            so i dont wanna speak too quick on stuff i don’t know coreectly lol
            - User customizability was important - since that’s one of the main
            purposes of having a user interface, is that different users have
            different preferences, and it’s not possible to cater to everyone’s
            preferences which is why we give options for them to choose from. -
            Design decisions that stemmed from this idea: - Allowing the user to
            choose a base map. Realized that different maps could also benefit
            different viewing purposes, like for example it’s really easy to see
            the bathymetry layer in contrast with the dark map - whereas the
            noise layer doesn’t look the best on the dark map since it’s a
            different type of overlay a bit - so more than just aesthetics, they
            have a functional use as well. - Allow user to change the size of
            the side panel as well as how large the content inside actually
            spans. And, some notion-style toggles which were initially only for
            the size adjust labels but my supervisor liked it upon use,
            suggested expanding it to the vessels sidebar section as well -
            since you can only select one vessel at a time anyways so you don’t
            need to see a large list usually! Supervisor said to “make it
            smaller” so I allowed the adjustability. - More… remind me to add
            more because there were a lot more. - The purpose of this tool is
            not directly for the research we are working on, but more-so as the
            foundation, architecture and concept wise. It’s going to be used
            primarily for diagnosis - to be able to see which vessels are where,
            at a given time. This was what I presented to the stakeholder
            meeting, and got positive feedback although it was just a short demo
            and hopefully we will have more time to discuss in depth.
          </p>

          <div className="flex flex-col gap-4">
            <h2 className="w-fit mb-2 pen-regular text-4xl underline">
              version 3: final
            </h2>
            <NotionToggle label="read more">
              <p className="tracking-tight">
                A lot of tweaking, testing and iterating on feedback happened
                during the final few weeks of the user interface polishing. A
                coherent colour scheme, consistent typography and placement of
                elements that made sense with the flow.
              </p>
              <p className="tracking-tight">
                The main game changer was adding notion-like toggles for certain
                information, and more customization including base map and
                size/opacity of data points. The draw region and analysis flow
                also worked cleanly now, despite still not being perfect.
              </p>
              <img
                src="/demos/flow-after.svg"
                alt="after: draw region flow"
                className="w-full object-contain rounded-lg border border-gray-200"
              />
              <video
                src="/demos/drawupdated.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full object-cover rounded-lg"
              />
              <p className="tracking-tight">
                There were many hiccups in between each iteration - for
                instance, when implementing the 'see all traffic' feature, I
                wasn't sure where to place the buttons to choose how the vessels
                were distinguised by colour.
              </p>
              <p className="tracking-tight">
                Initially, clicking see all vessel traffic would also allow you
                to hover over a filtered list in the vessels panel to see that
                particular vessel highlighted. However, it wasn't very useful
                and was even confusing to my supervisor when testing it - he
                couldn't get to where he wanted without me showing him how
                first. That signalled a real flaw in the UX. So, I removed that
                ability to focus on vessels when displaying in a region, since
                it was too messy to combine both panels in one feature.
              </p>

              <p className="tracking-tight">
                Notion-style toggles, originally built just to resize labels,
                got extended to the vessel list after my supervisor tried them
                and asked for the same on that panel — since only one vessel is
                selected at a time, it never needed to show a long list.
              </p>
            </NotionToggle>
          </div>
        </section>

        {/* reflections and wrapup */}
        <section className="px-8 flex flex-col gap-16 w-full">
          <div className="flex flex-col gap-4">
            <video
              src="/demos/updatecustomize.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full object-cover rounded-lg"
            />
            <p className="tracking-tight">
              Currently, this is where we're leaving this user interface - at
              least the design portion. My job was to create the foundational
              architecture for other co-op students and developers to build upon
              in the future. Hence, I've been picking away at documentation,
              file organization, and other chore-type tasks related to the data
              pipeline. Overall, making sure the tool fulfills its purpose of
              supporting scientists in their research.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <p className="tracking-tight">
              Despite this not being a typical product design focused project
              and being a wearer of many hats, the most important lesson I
              learned is why design even exists. I started by approaching this
              project the way I do any other, which is with the code. However,
              running into real UX friction showed me not only how to fix these
              issues, but to prevent them, which is the real design aspect.
            </p>

            <p className="tracking-tight">
              After overcoming technical challenges related to deployment,
              databases and debugging, design was honestly the hardest. I
              learned that you can't expect to make a real product if you're
              only viewing the problem from your lens. To experienced designers
              - I see how this is obvious. But to someone who has always relied
              on personal artistic judgement rather than a holistic approach,
              the challenges in this project were very eye-opening. I learned
              that so many aspects of the user group(s) need to be taken into
              account, beyond just their role, background, or experience. Good
              products have layers of digging into how their users think. And
              understanding that, and being able to translate it into pixels.
              That's why, for the follow-up user interface in this series of
              tools, I'm not jumping into the code like I did before. My friend
              once joked that I was the "SWE, PM and client" of my work - and
              I'm starting to see it. But that's the best part. I get to try new
              things, in an environment where my builds are having a real impact
              for research I care about.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <p className="tracking-tight">
              The next interface I'm building has a more defined problem, scope
              and user group. Because of this, I plan on taking more efforts to
              speaking with users and wireframing in both low-fidelity (done)
              and high-fidelity. Happy to be here on this journey.
            </p>
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
