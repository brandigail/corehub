import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { ProjectActions } from "@/components/projects/ProjectActions";
import { ProjectSection } from "@/components/projects/ProjectSection";
import { ScreenshotGallery } from "@/components/projects/ScreenshotGallery";
import { projects, getProject } from "@/data/projects";
import { statusLabels } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata(props: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.name} | CoreHub`,
    description: project.pitch,
    openGraph: { title: project.name, description: project.pitch, type: "article" },
  };
}

export default async function ProjectPage(props: PageProps<"/projects/[slug]">) {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent-hover"
      >
        <ArrowLeft size={16} aria-hidden /> All projects
      </Link>

      <header className="mt-6">
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{project.name}</h1>
          <span className="rounded-full bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent">
            {statusLabels[project.status]}
          </span>
          <span className="rounded-full border border-border px-2.5 py-1 text-xs text-muted">
            {project.kind === "WEB" ? "Web app" : "Mobile / PWA"}
          </span>
        </div>
        <p className="mt-3 max-w-2xl text-lg leading-7 text-muted">{project.pitch}</p>
        <ProjectActions project={project} />
      </header>

      <ScreenshotGallery name={project.name} screenshots={project.screenshots} />

      <ProjectSection title="Stack">
        <ul className="flex flex-wrap gap-2" aria-label="Tech stack">
          {project.stack.map((tech) => (
            <li key={tech} className="rounded-md border border-border px-2.5 py-1 text-sm text-muted">
              {tech}
            </li>
          ))}
        </ul>
      </ProjectSection>

      <ProjectSection title="What to demo">
        <ol className="list-decimal space-y-2 pl-5 leading-7 marker:text-accent">
          {project.demoBullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ol>
      </ProjectSection>

      <ProjectSection title="Architecture">
        {project.architecture ? (
          <ul className="list-disc space-y-3 pl-5 leading-7 marker:text-accent">
            {project.architecture.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        ) : (
          <p className="text-muted">Architecture notes will be added once this project is built.</p>
        )}
      </ProjectSection>
    </div>
  );
}
