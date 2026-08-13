import ProjectCard from "@/components/ProjectCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Fun trinkets and side projects made by Fay Wu.",
};

export default function About() {
  const collections = [
    {
      title: "koinYou",
      description:
        "the bible is better together, and there's no koinonia without you.",
      tags: ["typescript", "mern stack", "tailwindcss"],
      image: "/projectpics/koinyou.webp",
      logo: "/projectlogos/koinyoulogo.png",
      projectLink: "https://koinyou.com/",
      githubLink: "https://github.com/wrufay/koinyou",
      // demoVideo: "/demos/projectoriginlow.mp4",
      insideDesc: "Currently under construction",
      date: "Jan. 2026",
    },
    {
      title: "project origin",
      description:
        "culture-focused duolingo in real life, reconnecting with your lost identity",
      tags: ["expo-go", "react native", "sqlite"],
      image: "/projectpics/best.webp",
      logo: "/projectlogos/projectoriginlogo.png",
      githubLink: "https://github.com/wrufay/project_origin",
      demoVideo: "/demos/projectoriginlow.mp4",
      linkedinLink:
        "https://www.linkedin.com/posts/fayranw_putting-8-years-of-duolingo-to-good-use-ugcPost-7484461245916610560-wBAO/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFTLLZMBwj9B99bWccqeEF7cPqdop2hUCQ4",
      insideDesc:
        "Project submitted to UofTHacks13. Built my first mobile app with React Native!",
      date: "Jan. 2026",
    },
    {
      title: "uw sleeper",
      description:
        "so uw students can find the best napping spots on campus suited to their needs",
      tags: ["typescript", "spring boot", "react"],
      image: "/projectpics/uwsleeper.webp",
      logo: "/projectlogos/uwsleeperlogo.png",
      projectLink: "https://uwsleeper.vercel.app/",
      githubLink: "https://github.com/wrufay/uwsleeper",
      demoVideo: "/demos/uwsleeper.mp4",
      linkedinLink:
        "https://www.linkedin.com/feed/update/urn:li:activity:7413275582198853634/",
      insideDesc:
        "Built a Spring Boot REST API and React front-end styled with Tailwind. First time fiddling with databases, learned Postgres and deployed the app end-to-end. Bridging the gap between Waterloo students and sleep - because sleep is your superpower.",
      date: "Dec. 2025",
    },
    {
      title: "coco",
      description:
        "track, organize and plan your job applications with ai, all in one place",
      tags: ["javascript", "html", "tailwindcss"],
      image: "/projectpics/coco.webp",
      logo: "/projectlogos/cocologo.png",
      projectLink:
        "https://chromewebstore.google.com/detail/coco-%E0%B3%80%E2%8B%86%EF%BD%A1%CB%9A/ochcceodajaggjehdmifggimjmffbapc",
      githubLink: "https://github.com/wrufay/coco",
      demoVideo: "/demos/coco.mp4",
      linkedinLink:
        "https://www.linkedin.com/feed/update/urn:li:activity:7410149681709756418/",
      insideDesc:
        "Dabbled with Claude API to make a 'smart' job application tracker. Built with HTML, Tailwind CSS, JavaScript and deployed as a Chrome extension.",
      date: "Dec. 2025",
    },
    {
      title: "firstloved",
      description:
        "user-centered bible search tool with a llm chat for on-demand scripture commentary",
      tags: ["python", "streamlit", "supabase"],
      image: "/projectpics/firstloved.webp",
      logo: "/projectlogos/flowerlogo.png",
      projectLink: "https://firstloved.cc/",
      githubLink: "https://github.com/wrufay/firstlovedbible",
      demoVideo: "/demos/firstloved.mp4",
      insideDesc: `Made a Python application reducing scripture reading friction on Streamlit. Used Supabase to create a SQL database schema for user auth, deployed using Docker & Render. No more opening a hundred tabs for a Bible study - everything's in one place with FirstLoved.`,
      date: "Nov. 2025",
    },
    {
      title: "clearpharma",
      description:
        "facilitating communication betwen pharmacists and their patients in healthcare",
      tags: ["javascript", "html/css", "firebase"],
      image: "/projectpics/clearpharma.webp",
      logo: "/projectlogos/search.svg",
      projectLink: "https://wrufay.github.io/clearpharma/",
      githubLink: "https://github.com/wrufay/clearpharma",
      demoVideo: "/demos/clearpharmabest.mp4",
      insideDesc:
        "Led the design for a healthcare application faciliating patient-pharmacist communication. Created a dual-dashboard interface and integrated Firebase for real-time data sync. Built in 36 hours, submitted to HackRX '25.",
      date: "Nov. 2025",
      linkedinLink:
        "https://www.linkedin.com/feed/update/urn:li:activity:7398514348320620544/",
    },
  ];

  return (
    <main className="flex flex-grow py-10">
      <section className="flex flex-col items-center justify-center">
        {/* p text at the top of page */}
        {/* <p className="mb-8 text-sm sm:text-base">
          <span className="font-bold">trinkets! </span>try
          {" "}
          <span className="border-b border-gray-300">
            clicking on one
          </span>
        </p> */}

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
        {/* <p className="mt-8 text-sm sm:text-base">
          replacing perfect with progress through flops and reps
        </p> */}
      </section>
    </main>
  );
}
