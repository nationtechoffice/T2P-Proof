import type { MetadataRoute } from "next";
import { getAllSiteUrls, sitemapPriority } from "@/lib/sitemap-urls";
import { siteConfig } from "@/lib/site-config";
import { workPhotos } from "@/lib/work-showcase";
import { galleryForPath } from "@/lib/service-galleries";
import { recentWorkPhotos } from "@/lib/recent-work";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const recentImages = recentWorkPhotos.map((photo) => `${siteConfig.url}${photo.webp}`);
  const workImages = [...workPhotos.map((photo) => `${siteConfig.url}${photo.src}`), ...recentImages];
  const homeImages = [
    `${siteConfig.url}/images/work/service-van-tampa.jpg`,
    `${siteConfig.url}/images/work/fence-repair.jpg`,
    `${siteConfig.url}/images/work/drywall-finish-ladder.jpg`,
    `${siteConfig.url}/images/work/porcelain-tile-install.jpg`,
    ...recentImages,
  ];

  return getAllSiteUrls().map((url) => {
    const path = url.replace(siteConfig.url, "") || "/";
    const serviceImages = galleryForPath(path).map((photo) => `${siteConfig.url}${photo.src}`);
    const images =
      url === siteConfig.url ? homeImages : url === `${siteConfig.url}/work` ? workImages : serviceImages;

    return {
      url,
      lastModified: now,
      changeFrequency: url.includes("/blog/")
        ? "weekly"
        : url.includes("/services/")
          ? "monthly"
          : "weekly",
      priority: sitemapPriority(url),
      ...(images.length > 0 ? { images } : {}),
    };
  });
}
