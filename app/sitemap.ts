import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { siteUrl } from "@/lib/site";

const staticPaths = ["", "/skills", "/cv", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticPaths.map((path) => ({ url: `${siteUrl}${path}` })),
    ...projects.map((project) => ({ url: `${siteUrl}/projects/${project.slug}` })),
  ];
}
