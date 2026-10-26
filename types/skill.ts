export type SkillCategory = 'FRONTEND' | 'BACKEND' | 'DATA' | 'TOOLING'

export type SkillLevel = 1 | 2 | 3 | 4 | 5

export interface Skill {
  name: string
  category: SkillCategory
  level: SkillLevel
  projects: string[]
}
