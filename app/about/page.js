import AboutCard from "@/components/AboutCard";

const timeline = [
  {
    title: "past",
    descriptions: [
      {
        description: "became a resident of halifax, nova scotia for 18 years",
        year: "jun 2007",
      },
      {
        description: (
          <>
            started a collection of mini html, css & js projects on
            <a
              href="https://codepen.io/collection/ZQLJbJ"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-67"
            >
              {" "}
              codepen
            </a>
          </>
        ),

        year: "jun 2020",
      },
      {
        description: "watched 1000+ episodes of one piece over a few months",
        year: "aug 2021",
      },
      {
        description: "became a nova scotia international student ambassador",
        year: "may 2023",
      },
      {
        description: (
          <>
            founded{" "}
            <a
              href="https://hfxcodecircle.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-67"
            >
              halifax code circle
            </a>{" "}
            &{" "}
            <a
              href="https://hfxlanguages.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-67"
            >
              halifax language exchange
            </a>
          </>
        ),
        year: "nov 2024",
      },
      {
        description: "attended robofest world championships in detroit",
        year: "may 2025",
      },
    ],
  },
  {
    title: "present",
    descriptions: [
      {
        description: "cooking @ university of waterloo",
        year: "sep 2025",
      },
      // {
      //   description: " web dev @ watonomous",
      //   year: "jan 2026",
      // },
    ],
  },
  {
    title: "future",
    descriptions: "incoming @ ??? summer '26 co-op pending",
  },
];

export default function About() {
  return (
    <main className="flex flex-grow items-center justify-center px-4">
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {timeline.map((item, i) => (
          <AboutCard
            key={i}
            title={item.title}
            descriptions={item.descriptions}
            delay={i * 300}
          />
        ))}
      </section>
    </main>
  );
}
