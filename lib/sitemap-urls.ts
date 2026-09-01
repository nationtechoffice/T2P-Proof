import { siteConfig } from "./site-config";
import { getAllServiceSlugs } from "./services";
import { getAllBlogSlugs } from "./blog-posts";
import { allLocationLinks } from "./location-silos";
import { coreServices, targetLocations } from "./programmatic";

export function getAllSiteUrls(): string[] {
  const baseUrl = siteConfig.url;

  const staticPages = [
    baseUrl,
    `${baseUrl}/services`,
    `${baseUrl}/services/handyman`,
    `${baseUrl}/services/painting`,
    `${baseUrl}/services/fence`,
    `${baseUrl}/blog`,
    `${baseUrl}/about`,
    `${baseUrl}/contact`,
    `${baseUrl}/service-areas`,
    `${baseUrl}/locations`,
  ];

  const coreServicePages = coreServices.map((service) => `${baseUrl}/services/${service.slug}`);
  const cityPages = targetLocations.map((location) => `${baseUrl}/locations/${location.slug}`);

  const locationPages = allLocationLinks
    .map((link) => `${baseUrl}${link.href}`)
    .filter(
      (url) =>
        !url.endsWith("/handyman-westchase-fl") &&
        !url.endsWith("/handyman-oldsmar-fl") &&
        !url.endsWith("/handyman-town-n-country-fl")
    );

  const nestedServicePages = getAllServiceSlugs()
    .filter(
      ({ category, slug }) =>
        !(category === "handyman" && ["tv-mounting", "furniture-assembly", "drywall-repair"].includes(slug))
    )
    .map(({ category, slug }) => `${baseUrl}/services/${category}/${slug}`);

  const blogPages = getAllBlogSlugs().map((slug) => `${baseUrl}/blog/${slug}`);

  return [...new Set([...staticPages, ...coreServicePages, ...cityPages, ...locationPages, ...nestedServicePages, ...blogPages])];
}

export function sitemapPriority(url: string): number {
  if (url === siteConfig.url) return 1.0;
  if (url.endsWith("/locations/westchase-fl") || url.endsWith("/locations/tampa-fl")) return 0.95;
  if (url.includes("/locations/")) return 0.9;
  if (url.endsWith("/services/tv-wall-mounting") || url.endsWith("/services/drywall-repair")) return 0.9;
  if (coreServices.some((service) => url.endsWith(`/services/${service.slug}`))) return 0.88;
  if (url.endsWith("/services") || url.endsWith("/services/handyman") || url.endsWith("/locations")) return 0.9;
  if (url.includes("/handyman-") && url.endsWith("-fl")) return 0.8;
  if (url.includes("/services/")) return 0.7;
  if (url.includes("/blog/")) return 0.65;
  return 0.75;
}
