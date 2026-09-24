import { Metadata } from "next";
import { getProject } from "@/lib/projects";
import { renderProjectFullPage } from "@/lib/renderProject";

const SLUG = "coco";

export function generateMetadata(): Metadata {
  const project = getProject(SLUG);
  if (!project) return {};
  return { title: project.title, description: project.description };
}

export default function Page() {
  return renderProjectFullPage(SLUG);
}
