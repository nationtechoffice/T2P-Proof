import { siteConfig } from "./site-config";
import { getAllServiceSlugs } from "./services";
import { getAllBlogSlugs } from "./blog-posts";
import { allLocationLinks } from "./location-silos";

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

  return [...staticPages, ...locationPages, ...servicePages, ...blogPages];
}

export function sitemapPriority(url: string): number {
  if (url === siteConfig.url) return 1.0;
  if (url.endsWith("/handyman-westchase-fl")) return 0.95;
  if (url.endsWith("/services") || url.endsWith("/services/handyman")) return 0.9;
  if (url.includes("/handyman-") && url.endsWith("-fl")) return 0.85;
  if (url.endsWith("/services/drywall-repair-tampa")) return 0.85;
  if (url.includes("/services/")) return 0.7;
  if (url.includes("/blog/")) return 0.6;
  return 0.75;
}
