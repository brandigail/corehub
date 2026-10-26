"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { filterProjects, getTopTags, type KindFilter } from "@/lib/projects";
import type { Project } from "@/types";
import { ProjectCard } from "./ProjectCard";
import { ProjectFilters } from "./ProjectFilters";

export function ProjectGrid({ projects }: { projects: Project[] }) {
  const [kind, setKind] = useState<KindFilter>("ALL");
  const [tag, setTag] = useState<string | null>(null);
  const tags = useMemo(() => getTopTags(projects), [projects]);
  const visible = useMemo(() => filterProjects(projects, kind, tag), [projects, kind, tag]);

  return (
    <section id="projects" aria-labelledby="projects-heading" className="scroll-mt-16">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <h2 id="projects-heading" className="text-2xl font-semibold tracking-tight">
          Projects
        </h2>
        <p className="mt-2 text-muted">
          Filter by type or technology. Apps without a link are still being built.
        </p>
        <div className="mt-6">
          <ProjectFilters
            kind={kind}
            tag={tag}
            tags={tags}
            onKindChange={setKind}
            onTagChange={setTag}
          />
        </div>
        <p aria-live="polite" className="mt-6 text-sm text-muted">
          Showing {visible.length} of {projects.length} projects
        </p>
        <ul className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <motion.li
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.2 }}
              >
                <ProjectCard project={project} />
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
        {visible.length === 0 && (
          <p className="mt-8 text-center text-muted">No projects match these filters.</p>
        )}
      </div>
    </section>
  );
}
