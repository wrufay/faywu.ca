import ArtCard from "@/components/ArtCard";

// separate the year
export default function About() {
  const artwork = [
    {
      description:
        "2024, acrylic on canson acrylic/oil paper, for my grandmother.",
      image: "/grandma.png",
    },
    {
      description: "2021, oil pastel on canson watercolour paper",
      image: "/colby.png",
    },
    {
      description:
        "2022, oil pastel on canson mi-teintes, made in an hour on NYE.",
      image: "/cats.png",
    },
    {
      description:
        "2023, acrylic on strathmore mixed media 300 series, sketch from life",
      image: "/hand1.png",
    },
    {
      description: "2024, acrylic on muji sketchbook, japan.",
      image: "/japan.png",
    },
  ];

  return (
    <main className="flex flex-grow">
      <section className="flex flex-col items-center justify-center px-4 py-16">
        <div className="columns-2 sm:columns-3 md:columns-4 gap-8 space-y-8">
          {artwork.map((item, i) => (
            <ArtCard
              key={i}
              description={item.description}
              image={item.image}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
