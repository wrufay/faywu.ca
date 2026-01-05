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
    imgLink: "past.png",
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
              className="opacity-67 hover:opacity-100 text-[var(--crimson-red)]"
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
        description: "became a nova scotia international student ambassador",
        year: "may 2023",
      },
      {
        description:
          "bench pressed 75lbs for the first time; felt proud of myself",
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
              className="opacity-67 hover:opacity-100 text-[var(--crimson-red)]"
            >
              halifax code circle
            </a>{" "}
            &{" "}
            <a
              href="https://hfxlanguages.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-67 hover:opacity-100 text-[var(--crimson-red)]"
            >
              halifax language exchange
            </a>
          </>
        ),
        year: "nov 2024",
      },

      {
        description:
          "attended robofest robotics world championships in detroit",
        year: "may 2025",
      },
      {
        description:
          "got accepted into uw cs, changing the trajectory of my life.",
        year: "may 2025",
      },
    ],
  },
  {
    title: "present",
    imgLink: "present.png",
    bgColour: "rgba(239, 95, 51, 0.08)",
    descriptions: [
      {
        description: "cooking @ university of waterloo",
        tags: ["cs136", "math136", "math138"],
        year: "sep 2025",
      },
      {
        description: "incoming @ ???",
        tags: ["next.js", "flow state"],
        year: "jan 2026",
      },
    ],
  },
  {
    title: "future",
    imgLink: "future.png",
    bgColour: "rgba(241, 196, 15, 0.08)",
    descriptions: "incoming @ ??? summer '26 co-op pending",
  },
];

export default function About() {
  return (
    <main className="flex flex-grow flex-col gap-4 sm:gap-10 items-center justify-center py-10">
      {/* intro text */}
      <p className="px-10 serif-bold text-gray-700">
        a bit about my life, if you care to stalk.
      </p>
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
