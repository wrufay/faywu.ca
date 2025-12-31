import ProjectCard from "@/components/ProjectCard";

export default function About() {
  const collections = [
    {
      title: "projects",
      description: "mostly solving problems and designing ui/ux.",
      image: "/projects.png",
    },
    {
      title: "art",
      description: "finally putting my creative past on display.",
      image: "/art.png",
    },
    {
      title: "writing",
      description: "words, but sometimes coherently put together.",
      image: "/Writing.png",
    },
    {
      title: "experience",
      description: "unemployed to date but full of joy and stories to tell.",
      image: "/experience.png",
    },
  ];

  return (
    <main className="flex flex-grow">
      <section className="flex flex-col items-center justify-center px-4 py-16">
        <div className="">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {collections.map((item, i) => (
              <ProjectCard
                key={i}
                title={item.title}
                description={item.description}
                image={item.image}
                delay={i * 300}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
