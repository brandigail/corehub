export type ProjectKind = 'WEB' | 'MOBILE'

export type ProjectStatus = 'LIVE' | 'IN_PROGRESS' | 'PLANNED'

export interface Project {
  slug: string
  name: string
  kind: ProjectKind
  pitch: string
  stack: string[]
  liveUrl: string | null
  repoUrl: string | null
  screenshots: string[]
  demoBullets: string[]
  architecture?: string[]
  status: ProjectStatus
}
