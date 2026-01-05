import ProjectCard from "@/components/ProjectCard";

export default function About() {
  const collections = [
    {
      title: "uw sleeper",
      description:
        "so uw students can find the best napping spots on campus suited to their needs",
      tags: ["typescript", "spring boot", "react"],
      image: "/uwsleeper.png",
      logo: "/uwsleeperlogo.png",
      projectLink: "https://uwsleeper.vercel.app/",
      insideDesc: "hi",
    },
    {
      title: "coco",
      description:
        "track, organize and plan your job applications with ai, all in one place",
      tags: ["javascript", "html", "tailwindcss"],
      image: "/coco.png",
      logo: "/cocologo.png",
      projectLink: "https://github.com/wrufay/coco",
      insideDesc: "",
    },
    {
      title: "firstloved",
      description:
        "user-centered bible search tool with a llm chat for on-demand scripture commentary",
      tags: ["python", "streamlit", "supabase"],
      image: "/firstloved.png",
      logo: "/flowerlogo.png",
      projectLink: "https://github.com/wrufay/firstlovedbible",
      insideDesc: "",
    },
    {
      title: "clearpharma",
      description:
        "facilitating communication betwen pharmacists and their patients in healthcare",
      tags: ["javascript", "html", "css"],
      image: "/clearpharma.png",
      logo: "/search.svg",
      projectLink: "https://github.com/wrufay/clearpharma",
      insideDesc: "",
    },
  ];

  return (
    <main className="flex flex-grow">
      <section className="flex flex-col items-center justify-center py-8">
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
                tags={item.tags}
                projectLink={item.projectLink}
                insideDesc={item.insideDesc}
                logoLink={item.logo}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
