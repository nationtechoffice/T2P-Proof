import type { MetadataRoute } from "next";
import { getAllSiteUrls, getUrlPriority } from "@/lib/sitemap-urls";

const LASTMOD = new Date("2026-08-18T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  return getAllSiteUrls().map((url) => ({
    url,
    lastModified: LASTMOD,
    changeFrequency: url.includes("/blog/")
      ? "weekly"
      : url.includes("/services/")
        ? "monthly"
        : "weekly",
    priority: getUrlPriority(url),
  }));
}
