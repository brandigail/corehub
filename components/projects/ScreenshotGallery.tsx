import Image from "next/image";

interface ScreenshotGalleryProps {
  name: string;
  screenshots: string[];
}

export function ScreenshotGallery({ name, screenshots }: ScreenshotGalleryProps) {
  if (screenshots.length === 0) {
    return (
      <div
        role="img"
        aria-label={`Screenshot of ${name} coming soon`}
        className="mt-8 flex aspect-video items-center justify-center rounded-2xl border border-dashed border-border bg-accent-soft text-sm text-muted"
      >
        Screenshots coming soon
      </div>
    );
  }

  return (
    <ul className="mt-8 grid gap-4 sm:grid-cols-2" aria-label={`${name} screenshots`}>
      {screenshots.map((src, index) => (
        <li key={src} className="overflow-hidden rounded-2xl border border-border bg-surface">
          <Image
            src={src}
            alt={`${name} screenshot ${index + 1}`}
            width={1280}
            height={800}
            sizes="(min-width: 640px) 50vw, 100vw"
            className="h-auto w-full"
          />
        </li>
      ))}
    </ul>
  );
}
