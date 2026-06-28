import ProjectCard from "@/components/ProjectCard";

export default function About() {
  const collections = [
    {
      title: "koinYou",
      description:
        "the bible is better together, and there's no koinonia without you.",
      tags: ["typescript", "mern-stack", "tailwindcss"],
      image: "/projectpics/koinyou.png",
      logo: "/projectlogos/koinyoulogo.png",
      projectLink: "https://koinyou.com/",
      githubLink: "https://github.com/wrufay/koinyou",
      // demoVideo: "/demos/projectoriginlow.mp4",
      insideDesc: "Open source project + a work in progress :)",
      date: "jan. 2026",
    },
    {
      title: "project origin",
      description:
        "culture-focused duolingo in real life, reconnecting with your lost identity",
      tags: ["typescript", "react native", "mongodb"],
      image: "/projectpics/best.png",
      logo: "/projectlogos/projectoriginlogo.png",
      githubLink: "https://github.com/wrufay/project_origin",
      demoVideo: "/demos/projectoriginlow.mp4",
      insideDesc:
        "Project submitted to UofTHacks13. Built first mobile app, learning how to use Blender to create 3d models and implement them into the UI",
      date: "jan. 2026",
    },
    {
      title: "uw sleeper",
      description:
        "so uw students can find the best napping spots on campus suited to their needs",
      tags: ["typescript", "spring boot", "react"],
      image: "/projectpics/uwsleeper.png",
      logo: "/projectlogos/uwsleeperlogo.png",
      projectLink: "https://uwsleeper.vercel.app/",
      githubLink: "https://github.com/wrufay/uwsleeper",
      demoVideo: "/demos/uwsleeper.mp4",
      linkedinLink:
        "https://www.linkedin.com/feed/update/urn:li:activity:7413275582198853634/",
      insideDesc:
        "Built full-stack React, Typescript application styled with TailwindCSS, calling Spring Boot REST API with PostgreSQL database, deployed end-to-end using Vercel and Railway. Bridging the gap between Waterloo students and sleep - because sleep is your superpower.",
      date: "dec. 2025",
    },
    {
      title: "coco",
      description:
        "track, organize and plan your job applications with ai, all in one place",
      tags: ["javascript", "html", "tailwindcss"],
      image: "/projectpics/coco.png",
      logo: "/projectlogos/cocologo.png",
      projectLink:
        "https://chromewebstore.google.com/detail/coco-%E0%B3%80%E2%8B%86%EF%BD%A1%CB%9A/ochcceodajaggjehdmifggimjmffbapc",
      githubLink: "https://github.com/wrufay/coco",
      demoVideo: "/demos/coco.mp4",
      linkedinLink:
        "https://www.linkedin.com/feed/update/urn:li:activity:7410149681709756418/",
      insideDesc:
        "Facilitate co-op application tracking with Coco, an HTML and Vanilla JS Chrome extension styled with TailwindCSS. Uses Anthropic API to power various AI features such as autofill, resume analysis and sort-by-role folder organization. Currently working on implementing a backend to improve security and user experience!",
      date: "dec. 2025",
    },
    {
      title: "firstloved",
      description:
        "user-centered bible search tool with a llm chat for on-demand scripture commentary",
      tags: ["python", "streamlit", "supabase"],
      image: "/projectpics/firstloved.png",
      logo: "/projectlogos/flowerlogo.png",
      projectLink: "https://firstloved.cc/",
      githubLink: "https://github.com/wrufay/firstlovedbible",
      demoVideo: "/demos/firstloved.mp4",
      insideDesc: `Reducing Bible study friction through Python application made with Streamlit using Anthropic API and Supabase data storage, containerized with Docker, deployed on Render. No more opening a hundred tabs for a Bible study - everything's in one place with FirstLoved.`,
      date: "nov. 2025",
    },
    {
      title: "clearpharma",
      description:
        "facilitating communication betwen pharmacists and their patients in healthcare",
      tags: ["javascript", "html/css", "firebase"],
      image: "/projectpics/clearpharma.png",
      logo: "/projectlogos/search.svg",
      projectLink: "https://wrufay.github.io/clearpharma/",
      githubLink: "https://github.com/wrufay/clearpharma",
      demoVideo: "/demos/clearpharmabest.mp4",
      insideDesc:
        "Allowing patients and pharmacists to communicate transparently with our HTML, CSS and Javascript web application, built in 36 hours for UW's Technology in Pharmacy hackathon. Featuring a dual-dashboard display, securely storing sensitive data in Firebase.",
      date: "nov. 2025",
      linkedinLink:
        "https://www.linkedin.com/feed/update/urn:li:activity:7398514348320620544/",
    },
  ];

  return (
    <main className="flex flex-grow py-10">
      <section className="flex flex-col items-center justify-center">
        {/* p text at the top of page */}
        <p className="mb-8 text-sm sm:text-base">
          <span className="font-bold">trinkets. </span>
          click on one to see the{" "}
          <span className="border-b border-gray-300">
            backstory behind the build
          </span>
        </p>

        {/* grid of project cards */}
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

        {/* for the text at the bottom */}

        {/* p text at the bottom of page - consistent class styling but mb is mt. */}
        <p className="mt-8 text-sm sm:text-base">
          replacing <span className="font-bold">perfect</span> with{" "}
          <span className="font-bold">progress</span> through flops and reps ⚙
        </p>
      </section>
    </main>
  );
}
