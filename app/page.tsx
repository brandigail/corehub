import { About } from "@/components/home/About";
import { Hero } from "@/components/home/Hero";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ProjectGrid projects={projects} />
    </>
  );
}
