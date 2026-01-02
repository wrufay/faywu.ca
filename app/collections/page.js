import ProjectCard from "@/components/ProjectCard";

export default function About() {
  const collections = [
    {
      title: "uw sleeper",
      description: "",
      image: "/uwsleeper.png",
      link: "#",
    },
    {
      title: "coco the co-op coordinator",
      description: "",
      image: "/coco.png",
      link: "#",
    },
    {
      title: "firstloved bible",
      description: "",
      image: "/firstloved.png",
      link: "#",
    },
    {
      title: "clearpharma",
      description: "",
      image: "/clearpharma.png",
      link: "#",
    },
  ];

  return (
    <main className="flex flex-grow">
      <section className="flex flex-col items-center justify-center px-4 py-8">
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
