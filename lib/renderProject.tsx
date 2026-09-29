import { notFound } from "next/navigation";
import { getProject } from "@/lib/projects";
import ProjectPageBody from "@/components/writeups/ProjectPageBody";
import ProjectModalContent from "@/components/writeups/ProjectModalContent";
import ProjectsGrid from "@/components/ProjectsGrid";
import RouteModal from "@/components/RouteModal";
import WriteupOverlay from "@/components/WriteupOverlay";

// shared rendering logic for both the full-page route and the intercepted
// modal route. each project's slug now backs its own literal route folder
// (see app/<slug>/page.tsx and app/@modal/(.)<slug>/page.tsx) instead of a
// single dynamic [slug] segment - a dynamic catch-all at the app root would
// also intercept navigation to sibling static routes like /projects, /work,
// /about (since "projects" matches the [slug] pattern just as validly as a
// real project does), which broke client-side nav to those pages entirely.

export function renderProjectFullPage(slug: string) {
  const project = getProject(slug);
  if (!project) notFound();

  if (project.writeup) {
    const Writeup = project.writeup;
    return <Writeup />;
  }

  // every project shows the grid behind it whether you clicked through from
  // /projects or landed here directly (a fresh load has no /projects page
  // behind it to pop back to, so closeTo tells the modal to navigate there
  // instead of using router.back()) - fullPage projects get the big
  // page-styled overlay, everyone else gets the compact centered modal
  if (project.fullPage) {
    return (
      <>
        <ProjectsGrid />
        <WriteupOverlay closeTo="/projects?noanim=1">
          <ProjectPageBody project={project} />
        </WriteupOverlay>
      </>
    );
  }

  const Content = project.modalContent ?? ProjectModalContent;

  return (
    <>
      <ProjectsGrid />
      <RouteModal closeTo="/projects?noanim=1">
        <Content project={project} />
      </RouteModal>
    </>
  );
}

export function renderProjectModal(slug: string) {
  const project = getProject(slug);
  if (!project) return null;

  if (project.fullPage) {
    return (
      <WriteupOverlay>
        <ProjectPageBody project={project} />
      </WriteupOverlay>
    );
  }

  const Content = project.modalContent ?? ProjectModalContent;

  return (
    <RouteModal>
      <Content project={project} />
    </RouteModal>
  );
}
