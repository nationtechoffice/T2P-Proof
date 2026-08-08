import { siteConfig } from "./site-config";
import { getAllServiceSlugs } from "./services";
import { getAllBlogSlugs } from "./blog-posts";

export function getAllSiteUrls(): string[] {
  const baseUrl = siteConfig.url;

  const staticPages = [
    baseUrl,
    `${baseUrl}/services`,
    `${baseUrl}/services/handyman`,
    `${baseUrl}/services/painting`,
    `${baseUrl}/services/fence`,
    `${baseUrl}/services/drywall-repair-tampa`,
    `${baseUrl}/handyman-westchase-fl`,
    `${baseUrl}/handyman-carrollwood-fl`,
    `${baseUrl}/blog`,
    `${baseUrl}/about`,
    `${baseUrl}/contact`,
    `${baseUrl}/service-areas`,
    `${baseUrl}/llms.txt`,
  ];

  const servicePages = getAllServiceSlugs().map(
    ({ category, slug }) => `${baseUrl}/services/${category}/${slug}`
  );

  const blogPages = getAllBlogSlugs().map((slug) => `${baseUrl}/blog/${slug}`);

  return [...staticPages, ...servicePages, ...blogPages];
}
