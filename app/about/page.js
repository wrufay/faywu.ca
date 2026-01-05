import AboutCard from "@/components/AboutCard";

const timeline = [
  {
    title: "past",
    descriptions: [
      "resident @ halifax nova scotia of 18 years.",
      "halifax code circle",
    ],
  },
  {
    title: "present",
    descriptions: [
      "cooking @ university of waterloo",
      "currently taking math 136, math 138, cs136, econ101, earth122",
      "web dev @ watonomous",
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
