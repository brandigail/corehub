export interface NavItem {
  label: string;
  href: string;
}

export const siteName = "CoreHub";

export const navItems: NavItem[] = [
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/skills" },
  { label: "CV", href: "/cv" },
  { label: "Contact", href: "/contact" },
];
