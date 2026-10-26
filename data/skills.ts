import type { Skill } from '@/types'

// Levels are a first-pass self-assessment: review before publishing.
export const skills: Skill[] = [
  { name: 'JavaScript', category: 'FRONTEND', level: 3, projects: [] },
  { name: 'HTML/CSS', category: 'FRONTEND', level: 4, projects: [] },
  { name: 'TypeScript', category: 'FRONTEND', level: 3, projects: [] },
  { name: 'React', category: 'FRONTEND', level: 3, projects: [] },
  { name: 'Next.js', category: 'FRONTEND', level: 3, projects: ['corehub'] },
  { name: 'Tailwind CSS', category: 'FRONTEND', level: 4, projects: ['corehub'] },
  { name: 'WeWeb', category: 'FRONTEND', level: 4, projects: [] },
  { name: 'Xano', category: 'BACKEND', level: 4, projects: [] },
  { name: 'Netlify Functions', category: 'BACKEND', level: 3, projects: ['apex-voice'] },
  { name: 'REST APIs', category: 'BACKEND', level: 3, projects: [] },
  { name: 'Database management', category: 'DATA', level: 4, projects: [] },
  { name: 'Neon Postgres', category: 'DATA', level: 3, projects: ['apex-voice'] },
  { name: 'Git/GitHub', category: 'TOOLING', level: 4, projects: [] },
  { name: 'Claude Code', category: 'TOOLING', level: 4, projects: [] },
  { name: 'VS Code', category: 'TOOLING', level: 4, projects: [] },
  { name: 'KiCad & KiKit', category: 'TOOLING', level: 3, projects: [] },
]
