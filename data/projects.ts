import type { Project } from '@/types'
import { mobileProjects } from './projects-mobile'
import { webProjects } from './projects-web'

export const projects: Project[] = [...webProjects, ...mobileProjects]

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}
