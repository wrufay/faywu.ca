import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Fun trinkets and side projects made by Fay Wu.",
};

export default function About() {
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

        {/* for the text at the bottom */}

        {/* p text at the bottom of page - consistent class styling but mb is mt. */}
        {/* <p className="mt-8 text-sm sm:text-base">
          replacing perfect with progress through flops and reps
        </p> */}
      </section>
    </main>
  );
}
