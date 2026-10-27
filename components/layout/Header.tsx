import Link from "next/link";
import { navItems, siteName } from "@/lib/site";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="print:hidden sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between px-4 py-2 sm:h-16 sm:flex-nowrap sm:px-6 sm:py-0">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          {siteName}
          <span className="text-accent">.</span>
        </Link>
        <nav
          aria-label="Main"
          className="order-last flex w-full items-center justify-between sm:order-none sm:ml-auto sm:w-auto sm:gap-3"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-muted transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
