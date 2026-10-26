import type { KindFilter } from "@/lib/projects";

interface ProjectFiltersProps {
  kind: KindFilter;
  tag: string | null;
  tags: string[];
  onKindChange: (kind: KindFilter) => void;
  onTagChange: (tag: string | null) => void;
}

const kinds: { value: KindFilter; label: string }[] = [
  { value: "ALL", label: "All" },
  { value: "WEB", label: "Web" },
  { value: "MOBILE", label: "Mobile" },
];

const chipBase =
  "rounded-full border px-4 py-2 text-sm font-medium transition-colors";
const chipOn = "border-accent bg-accent text-accent-foreground";
const chipOff = "border-border bg-surface text-muted hover:border-accent hover:text-accent";

export function ProjectFilters({
  kind,
  tag,
  tags,
  onKindChange,
  onTagChange,
}: ProjectFiltersProps) {
  return (
    <div className="space-y-4">
      <div role="group" aria-label="Filter by type" className="flex flex-wrap gap-2">
        {kinds.map((item) => (
          <button
            key={item.value}
            type="button"
            aria-pressed={kind === item.value}
            onClick={() => onKindChange(item.value)}
            className={`${chipBase} ${kind === item.value ? chipOn : chipOff}`}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div role="group" aria-label="Filter by technology" className="flex flex-wrap gap-2">
        {tags.map((item) => (
          <button
            key={item}
            type="button"
            aria-pressed={tag === item}
            onClick={() => onTagChange(tag === item ? null : item)}
            className={`${chipBase} py-1.5 ${tag === item ? chipOn : chipOff}`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
