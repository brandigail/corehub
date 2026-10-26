import { cvProfile } from "@/data/cv";

export default function Home() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-24 sm:px-6">
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{cvProfile.name}</h1>
      <p className="mt-3 text-lg text-muted">{cvProfile.title}</p>
    </section>
  );
}
