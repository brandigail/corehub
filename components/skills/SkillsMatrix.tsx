"use client";

import Link from "next/link";
import { useState } from "react";
import { getProject } from "@/data/projects";
import type { Skill, SkillCategory } from "@/types";

type CategoryFilter = SkillCategory | "ALL";

const categories: { value: CategoryFilter; label: string }[] = [
  { value: "ALL", label: "All" },
  { value: "FRONTEND", label: "Frontend" },
  { value: "BACKEND", label: "Backend" },
  { value: "DATA", label: "Data" },
  { value: "TOOLING", label: "Tooling" },
];

const levelLabels = ["Beginner", "Working", "Confident", "Strong", "Expert"];

const chipBase = "rounded-full border px-4 py-2 text-sm font-medium transition-colors";
const chipOn = "border-accent bg-accent text-accent-foreground";
const chipOff = "border-border bg-surface text-muted hover:border-accent hover:text-accent";

function LevelDots({ level }: { level: number }) {
  return (
    <span
      role="img"
      aria-label={`Level ${level} of 5, ${levelLabels[level - 1]}`}
      className="flex gap-1"
    >
      {[1, 2, 3, 4, 5].map((dot) => (
        <span
          key={dot}
          aria-hidden
          className={`h-2.5 w-2.5 rounded-full ${dot <= level ? "bg-accent" : "bg-border"}`}
        />
      ))}
    </span>
  );
}

export function SkillsMatrix({ skills }: { skills: Skill[] }) {
  const [category, setCategory] = useState<CategoryFilter>("ALL");
  const visible = skills.filter((skill) => category === "ALL" || skill.category === category);

  return (
    <div>
      <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2">
        {categories.map((item) => (
          <button
            key={item.value}
            type="button"
            aria-pressed={category === item.value}
            onClick={() => setCategory(item.value)}
            className={`${chipBase} ${category === item.value ? chipOn : chipOff}`}
          >
            {item.label}
          </button>
        ))}
      </div>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {visible.map((skill) => {
          const used = skill.projects.flatMap((slug) => getProject(slug) ?? []);
          return (
            <li key={skill.name} className="rounded-2xl border border-border bg-surface p-4">
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-medium">{skill.name}</h3>
                <LevelDots level={skill.level} />
              </div>
              <p className="mt-1 text-sm text-muted">{levelLabels[skill.level - 1]}</p>
              {used.length > 0 && (
                <p className="mt-3 flex flex-wrap items-center gap-2 text-sm text-muted">
                  Used in
                  {used.map((project) => (
                    <Link
                      key={project.slug}
                      href={`/projects/${project.slug}`}
                      className="rounded-md bg-accent-soft px-2 py-0.5 text-accent hover:text-accent-hover"
                    >
                      {project.name}
                    </Link>
                  ))}
                </p>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
