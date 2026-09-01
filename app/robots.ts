import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

/**
 * Do not block /_next/ — Next.js CSS/JS live under /_next/static/.
 * Blocking those resources is the Semrush "blocked internal resources"
 * warning and stops crawlers from rendering pages.
 */
const disallow = ["/api/"];

const aiUserAgents = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "anthropic-ai",
  "PerplexityBot",
  "Google-Extended",
  "Applebot-Extended",
  "Bytespider",
  "meta-externalagent",
  "CCBot",
  "Amazonbot",
  "YouBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/llms.txt", "/llms-full.txt", "/sitemap.xml", "/_next/static/"],
        disallow,
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow,
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow,
      },
      ...aiUserAgents.map((userAgent) => ({
        userAgent,
        allow: ["/", "/llms.txt", "/llms-full.txt", "/sitemap.xml"],
        disallow,
      })),
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
