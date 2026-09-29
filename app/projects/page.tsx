import ProjectsGrid from "@/components/ProjectsGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "projects",
  description: "fun trinkets and weekend projects.",
};

export default async function About({
  searchParams,
}: {
  searchParams: Promise<{ noanim?: string }>;
}) {
  const { noanim } = await searchParams;
  return <ProjectsGrid animate={!noanim} />;
}
