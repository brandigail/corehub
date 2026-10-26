export interface CvProfile {
  name: string
  title: string
  summary: string
  email: string
  github: string
  location: string
}

export interface CvEntry {
  role: string
  company: string
  from: string
  to: string | null
  bullets: string[]
}

export interface CvEducation {
  institution: string
  credential: string
  date: string
}

export interface CvSkillGroup {
  label: string
  items: string[]
}
