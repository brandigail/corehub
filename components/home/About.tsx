import { cvProfile } from "@/data/cv";
import { projects } from "@/data/projects";

export function About() {
  const web = projects.filter((p) => p.kind === "WEB").length;
  const mobile = projects.filter((p) => p.kind === "MOBILE").length;
  const live = projects.filter((p) => p.liveUrl).length;
  const stats = [
    { label: "Web apps", value: web },
    { label: "Mobile apps and PWAs", value: mobile },
    { label: "Live right now", value: live },
  ];

  return (
    <section
      aria-labelledby="about-heading"
      className="border-y border-border bg-surface"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-[2fr_1fr]">
        <div>
          <h2 id="about-heading" className="text-2xl font-semibold tracking-tight">
            About me
          </h2>
          <p className="mt-4 leading-8 text-muted">{cvProfile.summary}</p>
        </div>
        <dl className="grid grid-cols-3 gap-4 md:grid-cols-1">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl bg-accent-soft p-4"
            >
              <dd className="text-3xl font-semibold text-accent">{stat.value}</dd>
              <dt className="text-sm text-muted">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
