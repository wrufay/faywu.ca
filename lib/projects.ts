import { ComponentType } from "react";
import PaintAPintModal from "@/components/writeups/PaintAPintModal";

export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  logo: string;
  date: string;
  projectLink?: string;
  githubLink?: string;
  linkedinLink?: string;
  demoVideo?: string;
  insideDesc?: string;
  // custom modal body for this project - when set, both the popup modal and
  // the /[slug] fallback render this instead of the generic video+desc+links
  // layout. use this to write freeform text/sections for one project without
  // touching the shared ProjectModalContent used by everyone else.
  modalContent?: ComponentType<{ project: Project }>;
  // full case-study component (e.g. app/work/marinepact/page.tsx style) - when
  // set, /[slug] renders this instead of modalContent/the generic content.
  // leave unset until a project actually gets a longer write-up.
  writeup?: ComponentType;
  // true = card links straight to the full /[slug] page instead of opening
  // the popup modal - use once a project's write-up is long enough that a
  // full-screen page reads better than a cramped modal box.
  fullPage?: boolean;
}

export const projects: Project[] = [
  {
    slug: "paint",
    title: "paint-a-pint",
    description:
      "a room to paint in - anytime, anywhere. made for joy of creation, without the friction",
    tags: ["html/css", "javascript", "three.js"],
    image: "/projectpics/paintapint.webp",
    logo: "/projectlogos/paintapintlogo.webp",
    projectLink: "https://www.paint-a-pint.com/",
    githubLink: "https://github.com/wrufay/paint-a-pint",
    linkedinLink: "https://lnkd.in/p/dzx_y28v",
    demoVideo: "/demos/paintapint.mp4",
    insideDesc:
      "Hack the North 2026 semi-finalist (top 10%)! Digital simulation of acrylic painting made for avid makers, minus the hassle and fumes. Built with HTML/CSS and Three.js + WebGL for 3D models and Spectral.js for mixing as pigments; keeping the artist in me alive.",
    date: "Sept. 2026",
    modalContent: PaintAPintModal,
    fullPage: true,
  },
  {
    slug: "origin",
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
      "A cultural language-learning app (React Native) that turns the world around you Chinese. Project Origin uses a spaced-repetition-like algorithm to adjust to your current level, and stores all information locally in SQLite as you pick up more words. Submitted to UofTHacks13!",
    date: "Jan. 2026",
  },
  {
    slug: "sleeper",
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
      "A React.js + TypeScript web app that calls a Spring Boot REST API - to bridge the gap between Waterloo students and sleep. Styled with Tailwind, data stored in PostgreSQL, and deployed end-to-end on Vercel and Railway.",
    date: "Dec. 2025",
  },
  {
    slug: "coco",
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
      "A 'smart' job tracker living inside Chrome that provides metadata auto-fill, organization by folders, and resume analysis. Created using HTML, Tailwind CSS, JavaScript, Claude API and deployed on the Chrome Store 🧸",
    date: "Dec. 2025",
  },
  {
    slug: "bible",
    title: "firstloved",
    description:
      "user-centered bible search tool with a llm chat for on-demand scripture commentary",
    tags: ["python", "streamlit", "supabase"],
    image: "/projectpics/firstloved.webp",
    logo: "/projectlogos/flowerlogo.png",
    projectLink: "https://firstloved.cc/",
    githubLink: "https://github.com/wrufay/firstlovedbible",
    demoVideo: "/demos/firstloved.mp4",
    insideDesc: `A Python application (Streamlit) to reduce friction in scripture reading through a Claude API integration. Created user auth using Supabase, and deployed on Render. No more opening a hundred tabs for a Bible study - everything's in one place :)`,
    date: "Nov. 2025",
  },
  {
    slug: "clearpharma",
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
      "A healthcare application facilitating patient-pharmacist communication. Led the design and implementation of a dual-dashboard interface + the Firebase backend. Submitted to UW Technology in Pharmacy Hackathon '25!",
    date: "Nov. 2025",
    linkedinLink:
      "https://www.linkedin.com/feed/update/urn:li:activity:7398514348320620544/",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
