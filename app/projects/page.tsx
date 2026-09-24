import ProjectsGrid from "@/components/ProjectsGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "projects",
  description: "fun trinkets and weekend projects.",
};

export default function About() {
  return <ProjectsGrid />;
}
