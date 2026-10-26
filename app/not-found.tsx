import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto w-full max-w-xl px-4 py-24 text-center sm:px-6">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Page not found</h1>
      <p className="mt-3 text-lg text-muted">That page doesn&apos;t exist, or it has moved.</p>
      <Link
        href="/#projects"
        className="mt-8 inline-flex rounded-lg bg-accent px-5 py-2.5 font-medium text-accent-foreground transition-colors hover:bg-accent-hover"
      >
        Browse projects
      </Link>
    </div>
  );
}
