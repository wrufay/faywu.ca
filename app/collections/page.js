import ProjectCard from "@/components/ProjectCard";

export default function About() {
  const collections = [
    {
      title: "projects",
      description:
        "ft. my obsession with solving silly problems and meticulously designing interfaces",
      image: "/projects.png",
      link: "#",
    },
    {
      title: "art",
      description: "once an artist, always an artist",
      image: "/art.png",
      link: "#",
    },
    {
      title: "writing",
      description: "words - sometimes coherently put together",
      image: "/Writing.png",
      link: "#",
    },
    {
      title: "experience",
      description:
        "resume coming soon. in the meantime, go enjoy the sunset with someone you love",
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
