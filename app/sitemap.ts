import type { MetadataRoute } from "next";
import { site } from "@/data/site";

const sitemap = (): MetadataRoute.Sitemap => [
  {
    url: site.url,
    lastModified: "2026-11-20",
    changeFrequency: "monthly",
    priority: 1,
  },
];

export default sitemap;
