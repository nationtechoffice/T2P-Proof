import { siteConfig } from "./site-config";
import { getAllServiceSlugs } from "./services";
import { getAllBlogSlugs } from "./blog-posts";
import { allLocationLinks } from "./location-silos";

const REDIRECTED_OR_PARAM_PATHS = new Set([
  "/llms.txt",
  "/home",
  "/index.html",
  "/search",
]);

export function getAllSiteUrls(): string[] {
  const baseUrl = siteConfig.url;

  const staticPages = [
    baseUrl,
    `${baseUrl}/services`,
    `${baseUrl}/services/handyman`,
    `${baseUrl}/services/painting`,
    `${baseUrl}/services/fence`,
    `${baseUrl}/services/drywall-repair-tampa`,
    `${baseUrl}/blog`,
    `${baseUrl}/about`,
    `${baseUrl}/contact`,
    `${baseUrl}/service-areas`,
  ];

  const locationPages = allLocationLinks.map((link) => `${baseUrl}${link.href}`);

  const servicePages = getAllServiceSlugs().map(
    ({ category, slug }) => `${baseUrl}/services/${category}/${slug}`
  );

  const blogPages = getAllBlogSlugs().map((slug) => `${baseUrl}/blog/${slug}`);

  return [...staticPages, ...locationPages, ...servicePages, ...blogPages].filter((url) => {
    const path = url.replace(baseUrl, "") || "/";
    return !REDIRECTED_OR_PARAM_PATHS.has(path);
  });
}

export function getUrlPriority(url: string): number {
  if (url === siteConfig.url) return 1;
  if (
    url.endsWith("/services") ||
    url.endsWith("/services/handyman") ||
    url.endsWith("/services/drywall-repair-tampa") ||
    url.endsWith("/handyman-westchase-fl")
  ) {
    return 0.9;
  }
  if (url.includes("/services/painting") || url.includes("/services/fence") || url.includes("/handyman-")) {
    return 0.8;
  }
  if (url.includes("/blog/")) return 0.6;
  return 0.7;
}
