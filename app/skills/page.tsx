import type { Metadata } from "next";
import { SkillsMatrix } from "@/components/skills/SkillsMatrix";
import { skills } from "@/data/skills";

export const metadata: Metadata = {
  title: "Skills | CoreHub",
  description: "Interactive skills matrix: frontend, backend, data and tooling, with the projects that use each skill.",
};

export default function SkillsPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Skills</h1>
      <p className="mt-3 max-w-2xl text-lg leading-7 text-muted">
        Filter by area. Where a skill shows up in one of my projects, you can jump straight to it.
      </p>
      <div className="mt-8">
        <SkillsMatrix skills={skills} />
      </div>
    </div>
  );
}
