import { cvProfile } from "@/data/cv";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>© {cvProfile.name}</p>
        <a
          href={cvProfile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-accent"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}
