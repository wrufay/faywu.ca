import ProjectCard from "@/components/ProjectCard";

export default function About() {
  const collections = [
    {
      title: "projects",
      description: "love to solve problems and design interfaces.",
      image: "/projects.png",
      link: "#",
    },
    {
      title: "art",
      description: "finally putting my creative past on display.",
      image: "/art.png",
      link: "#",
    },
    {
      title: "writing",
      description: "words - sometimes coherently put together.",
      image: "/Writing.png",
      link: "#",
    },
    {
      title: "experience",
      description: "unemployed but full of joy and stories to tell.",
      image: "/experience.png",
      link: "#",
    },
  ];

  return (
    <main className="flex flex-grow">
      <section className="flex flex-col items-center justify-center px-4 py-16">
        <div className="">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {collections.map((item, i) => (
              <ProjectCard
                key={i}
                title={item.title}
                description={item.description}
                image={item.image}
                link={item.link}
                delay={i * 300}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
