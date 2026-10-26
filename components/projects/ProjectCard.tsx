import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { statusLabels } from "@/lib/projects";
import type { Project } from "@/types";

const linkClass =
  "inline-flex items-center gap-1 font-medium text-accent transition-colors hover:text-accent-hover";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface">
      <div
        aria-hidden
        className="flex h-32 items-center justify-center bg-accent-soft text-5xl font-semibold text-accent"
      >
        {project.name.charAt(0)}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold">
            <Link href={`/projects/${project.slug}`} className="hover:text-accent">
              {project.name}
            </Link>
          </h3>
          <span className="shrink-0 rounded-full bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent">
            {statusLabels[project.status]}
          </span>
        </div>
        <p className="text-sm leading-6 text-muted">{project.pitch}</p>
        <ul className="flex flex-wrap gap-1.5" aria-label="Tech stack">
          {project.stack.slice(0, 5).map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-border px-2 py-0.5 text-xs text-muted"
            >
              {tech}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex flex-wrap gap-4 pt-2 text-sm">
          {project.liveUrl ? (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
              Live demo <ExternalLink size={14} aria-hidden />
            </a>
          ) : (
            <span className="text-muted">Coming soon</span>
          )}
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
              Code <ExternalLink size={14} aria-hidden />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
