import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export default function ProjectsGrid() {
  return (
    <main className="flex flex-grow py-10">
      <section className="flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.slug}
              slug={project.slug}
              title={project.title}
              description={project.description}
              image={project.image}
              delay={i * 300}
              tags={project.tags}
              logo={project.logo}
              date={project.date}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
