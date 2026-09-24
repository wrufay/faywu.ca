import { Project } from "@/lib/projects";
import ProjectModalContent from "@/components/writeups/ProjectModalContent";

export default function ProjectPageBody({ project }: { project: Project }) {
  const Content = project.modalContent ?? ProjectModalContent;

  return (
    <>
      <h1 className="serif-bold italic text-xl sm:text-2xl text-gray-700 dark:text-gray-400 mb-6">
        {project.title}
      </h1>
      <Content project={project} />
    </>
  );
}
