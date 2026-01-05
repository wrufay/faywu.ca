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
      githubLink: "https://github.com/wrufay/uwsleeper",
      demoVideo: "/uwsleeper.mp4",
      linkedinLink:
        "https://www.linkedin.com/feed/update/urn:li:activity:7413275582198853634/",
      insideDesc:
        "bridging the gap between uw students and sleep - because sleep is your superpower, more than a human necessity. take a rest, uwsleeper. you deserve it. ♡",
      date: "dec 2025",
    },
    {
      title: "coco",
      description:
        "track, organize and plan your job applications with ai, all in one place",
      tags: ["javascript", "html", "tailwindcss"],
      image: "/coco.png",
      logo: "/cocologo.png",
      projectLink: "",
      githubLink: "https://github.com/wrufay/coco",
      demoVideo: "/coco.mp4",
      linkedinLink:
        "https://www.linkedin.com/feed/update/urn:li:activity:7410149681709756418/",
      insideDesc:
        "keeping track of hundreds of job apps as an incoming co-op student? ... no thank you, i'll let coco work things out for me.",
      date: "dec 2025",
    },
    {
      title: "firstloved",
      description:
        "user-centered bible search tool with a llm chat for on-demand scripture commentary",
      tags: ["python", "streamlit", "supabase"],
      image: "/firstloved.png",
      logo: "/flowerlogo.png",
      projectLink: "https://firstloved.cc/",
      githubLink: "https://github.com/wrufay/firstlovedbible",
      demoVideo: "",
      insideDesc: `"bible study" and "browser with 100 tabs open" shouldn't go together. fret no more, with first loved bible's all-in-one simple search & llm powered commentary tools, picking up your bible has never been easier.`,
      date: "nov 2025",
    },
    {
      title: "clearpharma",
      description:
        "facilitating communication betwen pharmacists and their patients in healthcare",
      tags: ["javascript", "html", "css"],
      image: "/clearpharma.png",
      logo: "/search.svg",
      projectLink: "https://wrufay.github.io/clearpharma/",
      githubLink: "https://github.com/wrufay/clearpharma",
      demoVideo: "",
      insideDesc:
        "lack of communication & transparency in healthcare is far too prevalent. but with clearpharma, pharmacists and patients have a way to be on the same page.",
      date: "nov 2025",
    },
  ];

  return (
    <main className="flex flex-grow py-10">
      <section className="flex flex-col items-center justify-center">
        <div className="">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {collections.map((item, i) => (
              <ProjectCard
                key={i}
                title={item.title}
                description={item.description}
                image={item.image}
                delay={i * 300}
                tags={item.tags}
                projectLink={item.projectLink}
                githubLink={item.githubLink}
                demoVideo={item.demoVideo}
                logoLink={item.logo}
                insideDesc={item.insideDesc}
                linkedinLink={item.linkedinLink}
                date={item.date}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
