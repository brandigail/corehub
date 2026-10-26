import type { Project, ProjectKind, ProjectStatus } from "@/types";

export type KindFilter = ProjectKind | "ALL";

export const statusLabels: Record<ProjectStatus, string> = {
  LIVE: "Live",
  IN_PROGRESS: "In progress",
  PLANNED: "Planned",
};

export function getTopTags(projects: Project[], minCount = 2): string[] {
  const counts = new Map<string, number>();
  for (const project of projects) {
    for (const tag of project.stack) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }
  return [...counts.entries()]
    .filter(([, count]) => count >= minCount)
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([tag]) => tag);
}

export function filterProjects(
  projects: Project[],
  kind: KindFilter,
  tag: string | null,
): Project[] {
  return projects.filter(
    (project) =>
      (kind === "ALL" || project.kind === kind) &&
      (tag === null || project.stack.includes(tag)),
  );
}
