import type { MetadataRoute } from "next";
import { getAllSiteUrls, sitemapPriority } from "@/lib/sitemap-urls";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return getAllSiteUrls().map((url) => ({
    url,
    lastModified: now,
    changeFrequency: url.includes("/blog/")
      ? "weekly"
      : url.includes("/services/")
        ? "monthly"
        : "weekly",
    priority: sitemapPriority(url),
  }));
}
