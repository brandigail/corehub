import { ExternalLink } from "lucide-react";
import type { Project } from "@/types";

const primary =
  "inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-hover";
const secondary =
  "inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-accent-soft";

export function ProjectActions({ project }: { project: Project }) {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-3">
      {project.liveUrl ? (
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={primary}>
          Open live demo <ExternalLink size={16} aria-hidden />
        </a>
      ) : (
        <span className="rounded-lg border border-dashed border-border px-4 py-2 text-sm text-muted">
          Live demo coming soon
        </span>
      )}
      {project.repoUrl && (
        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className={secondary}>
          View code <ExternalLink size={16} aria-hidden />
        </a>
      )}
    </div>
  );
}
