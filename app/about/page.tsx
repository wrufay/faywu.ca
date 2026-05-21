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
        description: (
          <>
            resident of the
            <a
              href="https://www.google.com/search?q=nova+scotia&oq=nova+scotia&gs_lcrp=EgZjaHJvbWUqDAgAECMYJxiABBiKBTIMCAAQIxgnGIAEGIoFMg8IARAuGBQYhwIYsQMYgAQyBggCECMYJzIPCAMQABhDGLEDGIAEGIoFMg8IBBAAGEMYsQMYgAQYigUyFQgFEC4YFBjHARiHAhixAxjRAxiABDIGCAYQRRhBMgYIBxBFGEHSAQgxMDYzajBqN6gCALACAA&sourceid=chrome&ie=UTF-8"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-67 hover:opacity-100 coding-regular text-[var(--crimson-red)]"
            >
              {" "}
              big NS{" "}
            </a>
            (home is where the heart is)
          </>
        ),

        year: "Jun 2007",
      },
      {
        description:
          "started an art youtube channel, quit after 200+ subscribers",
        year: "Dec 2017",
      },
      {
        description: (
          <>
            started a
            <a
              href="https://codepen.io/collection/ZQLJbJ"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-67 hover:opacity-100 coding-regular text-[var(--crimson-red)]"
            >
              {" "}
              collection{" "}
            </a>
            of mini HTML, CSS & JS projects
          </>
        ),

        year: "Jun 2020",
      },
      {
        description: "binged watched 1000+ episodes of One Piece",
        year: "Aug 2021",
      },
      {
        description: (
          <>
            became an
            <a
              href="https://www.nsisp.ca/our_programs/nova_scotia_student_ambassadors_program"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-67 hover:opacity-100 coding-regular text-[var(--crimson-red)]"
            >
              {" "}
              NSISP ambassador{" "}
            </a>
            for international students
          </>
        ),
        year: "May 2023",
      },
      {
        description: (
          <>
            started{" "}
            <a
              href="https://hfxcodecircle.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-67 hover:opacity-100 coding-regular text-[var(--crimson-red)]"
            >
              Halifax Code Circle
            </a>{" "}
            &{" "}
            <a
              href="https://hfxlanguages.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-67 hover:opacity-100 coding-regular text-[var(--crimson-red)]"
            >
              Halifax Language Exchange
            </a>
          </>
        ),
        year: "Nov 2024",
      },

      {
        description: (
          <>
            won 3rd at
            <a
              href="https://www.youtube.com/live/14qxzaPh_ME?si=ZLDmthqI6U2gizWK&t=18532"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-67 hover:opacity-100 coding-regular text-[var(--crimson-red)]"
            >
              {" "}
              Robofest{" "}
            </a>
            Acadia, attended worlds @ LTU
          </>
        ),
        year: "March 2025",
      },
    ],
  },
  {
    title: "present",
    imgLink: "/icons/present.png",
    bgColour: "rgba(239, 95, 51, 0.08)",
    descriptions: [
      {
        description: "research assistant @ DFO",
        tags: ["full-stack swe", "ux", "data viz"],
        year: "May 2026",
      },
      {
        description: "cooking @ University of Waterloo",
        tags: ["uwccf", "watonomous", "dsa"],
        year: "Sep 2025",
      },
    ],
  },
  {
    title: "future",
    imgLink: "/icons/future.png",
    bgColour: "rgba(241, 196, 15, 0.08)",
    descriptions: "",
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
