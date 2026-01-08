import AboutCard from "@/components/AboutCard";
import { ReactNode } from "react";

interface Description {
  description: string | ReactNode;
  year: string;
  tags?: string[];
}

interface TimelineItem {
  title: string;
  imgLink: string;
  bgColour: string;
  descriptions: Description[] | string;
}

const timeline: TimelineItem[] = [
  {
    title: "past",
    imgLink: "/icons/past.png",
    bgColour: "rgba(241, 196, 15, 0.08)",
    descriptions: [
      {
        description:
          "was born in halifax, nova scotia. lived there for 18 years",
        year: "jun 2007",
      },
      {
        description:
          "started an art youtube channel, got 200+ subscribers but quit",
        year: "dec 2017",
      },
      {
        description: (
          <>
            started a
            <a
              href="https://codepen.io/collection/ZQLJbJ"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-67 hover:opacity-100 text-[var(--aritzia-blue)]"
            >
              {" "}
              codepen collection{" "}
            </a>
            of mini html, css & javascript projects
          </>
        ),

        year: "jun 2020",
      },
      {
        description: "binged watched 1000+ episodes of one piece in 8th grade",
        year: "aug 2021",
      },
      {
        description: (
          <>
            became a nova scotia
            <a
              href="https://www.nsisp.ca/our_programs/nova_scotia_student_ambassadors_program"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-67 hover:opacity-100 text-[var(--aritzia-blue)]"
            >
              {" "}
              student ambassador{" "}
            </a>
            for the nsisp
          </>
        ),
        year: "may 2023",
      },
      {
        description: "bench pressed 75lbs for the first time and felt proud",
        year: "aug 2024",
      },
      {
        description: (
          <>
            founded{" "}
            <a
              href="https://hfxcodecircle.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-67 hover:opacity-100 text-[var(--aritzia-blue)]"
            >
              halifax code circle
            </a>{" "}
            &{" "}
            <a
              href="https://hfxlanguages.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-67 hover:opacity-100 text-[var(--aritzia-blue)]"
            >
              halifax language exchange
            </a>
          </>
        ),
        year: "nov 2024",
      },

      {
        description: (
          <>
            won 3rd at
            <a
              href="https://www.youtube.com/live/14qxzaPh_ME?si=ZLDmthqI6U2gizWK&t=18532"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-67 hover:opacity-100 text-[var(--aritzia-blue)]"
            >
              {" "}
              robofest robotics{" "}
            </a>
            acadia, attended worlds @ ltu
          </>
        ),
        year: "march 2025",
      },
      {
        description: "got accepted into university of waterloo's cs program.",
        year: "may 2025",
      },
    ],
  },
  {
    title: "present",
    imgLink: "/icons/present.png",
    bgColour: "rgba(239, 95, 51, 0.08)",
    descriptions: [
      {
        description: "cooking @ university of waterloo",
        tags: ["cs136", "math136", "math138"],
        year: "sep 2025",
      },
      {
        description: "incoming web dev @ watonomous",
        tags: ["locked in", "next.js"],
        year: "jan 2026",
      },
    ],
  },
  {
    title: "future",
    imgLink: "/icons/future.png",
    bgColour: "rgba(241, 196, 15, 0.08)",
    descriptions: "incoming @ ??? summer '26 co-op pending",
  },
];

export default function About() {
  return (
    <main className="flex flex-grow flex-col gap-4 sm:gap-10 items-center justify-center py-10">
      {/* intro text */}
      <p className="px-10 serif-bold text-gray-700">a bit about my life.</p>
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* about/timeline cards */}
        {timeline.map((item, i) => (
          <AboutCard
            key={i}
            title={item.title}
            descriptions={
              Array.isArray(item.descriptions)
                ? item.descriptions.map((desc) => ({
                    description:
                      typeof desc.description === "string"
                        ? desc.description
                        : desc.description,
                    year: desc.year,
                    tags: desc.tags,
                  }))
                : []
            }
            delay={i * 300}
            imgLink={item.imgLink}
            bgColour={item.bgColour}
          />
        ))}
      </section>
    </main>
  );
}
