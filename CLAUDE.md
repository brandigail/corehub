# CoreHub: Developer Portfolio Showcase

Read the portfolio-root `CLAUDE.md` first for global rules. This file is the brief for this project.

## What it is
The front door for recruiters. It showcases all 20 projects with screenshots, live links and architecture notes, plus a dynamic CV viewer, skills matrix and contact portal. Built last, once the other apps have live URLs.

## Stack
Next.js (App Router), TypeScript strict, Tailwind CSS, Framer Motion, @react-pdf/renderer or print-styled CV page for PDF, Netlify Forms or a Netlify Function (email via a free provider) for contact. Hosted on Netlify. No Vercel. No Supabase, no Vercel, no Gemini/OpenAI.

## MVP (build first)
1. Home with hero and a filterable project grid (web/mobile, tech tags) driven by one typed `projects.ts` data file with live and GitHub links.
2. Project detail pages with screenshots, stack, architecture deep-dive and "what to demo" bullets.
3. CV page: on-screen viewer plus downloadable PDF, and an interactive skills matrix.

## Phase 2
Contact form with spam protection, Blog/case studies (MDX), Embedded live-demo iframes where allowed, Analytics via a privacy-friendly free option.

## Data model (put in `types/`)
```ts
export interface Project { slug: string; name: string; kind: 'WEB' | 'MOBILE'; pitch: string; stack: string[]; liveUrl: string | null; repoUrl: string | null; screenshots: string[]; demoBullets: string[]; status: 'LIVE' | 'IN_PROGRESS' | 'PLANNED' }
export interface Skill { name: string; category: 'FRONTEND' | 'BACKEND' | 'DATA' | 'TOOLING'; level: 1 | 2 | 3 | 4 | 5; projects: string[] }
export interface CvEntry { role: string; company: string; from: string; to: string | null; bullets: string[] }
```

## Rules specific to this project
- Source of truth for links is the root `LINKS.md`; copy values into `projects.ts` only once each app is deployed. Show "Coming soon" for missing ones, never fake URLs.
- Screenshots are stored under `/public/screenshots` (optimised); never hotlink.
- Respect `prefers-reduced-motion` for Framer Motion animations.
- Lighthouse targets: performance, accessibility and SEO all above 90; add Open Graph metadata.
- Ask me for CV content and contact details instead of inventing them.
- Seed realistic demo data so the app looks alive on first load without sign-up.

## Start here
1. Ask me for my CV text, contact email, photo and preferred accent colour.
2. Scaffold Next.js + Tailwind + Framer Motion, commit.
3. Work through `PLAN.md` from step 2.
