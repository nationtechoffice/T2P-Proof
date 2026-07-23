import type { MetadataRoute } from "next";
import { getAllSiteUrls } from "@/lib/sitemap-urls";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return getAllSiteUrls().map((url, index) => ({
    url,
    lastModified: now,
    changeFrequency: url.includes("/blog/") ? "weekly" : url.includes("/services/") ? "monthly" : "weekly",
    priority: index === 0 ? 1.0 : url.endsWith("/services") || url.includes("/services/handyman") ? 0.9 : 0.7,
  }));
}
