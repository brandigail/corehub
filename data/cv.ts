import type { CvEducation, CvEntry, CvProfile, CvSkillGroup } from '@/types'

export const cvProfile: CvProfile = {
  name: 'Brandon Myers',
  title: 'Software & Product Developer',
  summary:
    'Adaptable and solutions-driven developer with hands-on experience across full-stack web applications, AI-assisted development workflows, low-code/no-code platforms, and hardware/product prototyping. Builds functional products, from web platforms like Homeschool Vault to interactive hardware like Zappit Racer, using VS Code, Claude Code, Xano, WeWeb and KiCad. Actively building and pushing code daily to public repositories.',
  email: 'Brandonfmyerslego@gmail.com',
  github: 'https://github.com/brandigail',
  location: 'Pinetown, South Africa',
}

export const cvExperience: CvEntry[] = [
  {
    role: 'Developer / Intern Developer',
    company: 'Dappit',
    from: 'July 2024',
    to: 'October 2026',
    bullets: [
      'Homeschool Vault: developed features and logic for web application tools using WeWeb on the frontend and scalable Xano backend endpoints.',
      'Zappit Racer: assisted with hardware and product design, physical assembly, rapid prototyping, and circuit layout and panelization using KiCad and KiKit.',
      'AI-driven development: accelerated software workflows and custom script development with Visual Studio Code, Claude Code and AI development assistants.',
      'Full-lifecycle prototyping: collaborated on troubleshooting, testing and project execution in a dynamic development environment.',
    ],
  },
  {
    role: 'Deli Associate',
    company: 'Publix',
    from: 'May 2021',
    to: 'March 2024',
    bullets: [
      'Provided high-quality customer service, managed product preparation, and kept to strict food safety and operational guidelines.',
      'Managed multiple tasks efficiently while troubleshooting everyday operational challenges in a fast-paced retail environment.',
    ],
  },
  {
    role: 'Shift Manager',
    company: "McDonald's",
    from: 'June 2019',
    to: 'May 2021',
    bullets: [
      'Supervised shift staff, balanced daily cash drawers, monitored stock levels and trained incoming personnel.',
      'Enforced health and workplace safety standards while maintaining high customer satisfaction.',
    ],
  },
  {
    role: 'Sales Representative / Balloon Salesman',
    company: 'Disney',
    from: 'September 2018',
    to: 'October 2020',
    bullets: [
      'Engaged guests and drove retail sales across Disney World resort locations using strong interpersonal and problem-solving skills.',
    ],
  },
]

export const cvEducation: CvEducation[] = [
  { institution: 'Liberty High School', credential: 'High School Diploma', date: 'May 2018' },
  { institution: 'Alison', credential: 'Introduction to C# Programming Certificate', date: 'July 2024' },
  { institution: 'Alison', credential: 'Basics of Computers and Code in iOS', date: 'June 2024' },
  { institution: 'Alison', credential: 'Introduction to Microsoft Certificate', date: 'May 2024' },
  { institution: 'Alison', credential: 'Introduction to Payroll Accounting Certificate', date: 'July 2024' },
  { institution: 'Alison', credential: 'Introduction to Public Relations Certificate', date: 'May 2024' },
]

export const cvSkillGroups: CvSkillGroup[] = [
  { label: 'Development & Low-Code', items: ['JavaScript', 'HTML/CSS', 'Xano (backend, database, APIs)', 'WeWeb (frontend UI)'] },
  { label: 'AI & IDE Tools', items: ['Visual Studio Code', 'Claude Code', 'Claude AI'] },
  { label: 'Hardware & Design', items: ['KiCad & KiKit (PCB design and panelization)', '3D modelling and prototyping'] },
  {
    label: 'Core Competencies',
    items: ['Technical troubleshooting', 'Version control (Git/GitHub)', 'Rapid prototyping', 'Database management', 'Team collaboration'],
  },
]
