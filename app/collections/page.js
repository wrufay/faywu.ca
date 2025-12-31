import ProjectCard from "@/components/ProjectCard";

export default function About() {
  const collections = [
    {
      title: "projects",
      description:
        "a chrome extension that helps you organize job applications",
      image: "",
    },
    {
      title: "art",
      description: "a beautiful and simple bible reading application",
      image: "",
    },
    {
      title: "writing",
      description: "bridging the gap between uwaterloo students and sleep",
      image: "",
    },
    {
      title: "experience",
      description: "bridging the gap between uwaterloo students and sleep",
      image: "",
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
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
