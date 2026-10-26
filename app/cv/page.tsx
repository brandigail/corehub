import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { PrintButton } from "@/components/cv/PrintButton";
import { cvEducation, cvExperience, cvProfile, cvSkillGroups } from "@/data/cv";

export const metadata: Metadata = {
  title: "CV | CoreHub",
  description: `${cvProfile.name}, ${cvProfile.title}: experience, skills and certifications.`,
};

const headingClass = "mb-4 border-b border-border pb-2 text-xl font-semibold tracking-tight";

export default function CvPage() {
  return (
    <article className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 print:max-w-none print:px-0 print:py-0">
      <header className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{cvProfile.name}</h1>
          <p className="mt-1 text-lg text-accent">{cvProfile.title}</p>
          <p className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted">
            <a href={`mailto:${cvProfile.email}`} className="inline-flex items-center gap-1 hover:text-accent">
              <Mail size={14} aria-hidden /> {cvProfile.email}
            </a>
            <a href={cvProfile.github} className="hover:text-accent">
              {cvProfile.github.replace("https://", "")}
            </a>
            <span>{cvProfile.location}</span>
          </p>
        </div>
        <PrintButton />
      </header>

      <section className="mt-10" aria-labelledby="cv-summary">
        <h2 id="cv-summary" className={headingClass}>Professional summary</h2>
        <p className="leading-7">{cvProfile.summary}</p>
      </section>

      <section className="mt-10" aria-labelledby="cv-experience">
        <h2 id="cv-experience" className={headingClass}>Professional experience</h2>
        <ol className="space-y-8">
          {cvExperience.map((entry) => (
            <li key={`${entry.company}-${entry.from}`} className="break-inside-avoid">
              <h3 className="font-semibold">
                {entry.company} <span className="font-normal text-muted">— {entry.role}</span>
              </h3>
              <p className="text-sm italic text-muted">
                {entry.from} – {entry.to ?? "Present"}
              </p>
              <ul className="mt-2 list-disc space-y-1.5 pl-5 leading-7 marker:text-accent">
                {entry.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-10 break-inside-avoid" aria-labelledby="cv-skills">
        <h2 id="cv-skills" className={headingClass}>Technical skills and tools</h2>
        <dl className="space-y-2 leading-7">
          {cvSkillGroups.map((group) => (
            <div key={group.label}>
              <dt className="inline font-semibold">{group.label}: </dt>
              <dd className="inline">{group.items.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-10 break-inside-avoid" aria-labelledby="cv-education">
        <h2 id="cv-education" className={headingClass}>Certifications and education</h2>
        <ul className="space-y-1.5 leading-7">
          {cvEducation.map((item) => (
            <li key={item.credential}>
              <span className="font-semibold">{item.institution}</span> — {item.credential}{" "}
              <span className="text-muted">({item.date})</span>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
