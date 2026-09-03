import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

/**
 * Allow Googlebot / Bingbot / Yandex to fetch HTML and /_next/static JS+CSS.
 * Never disallow /_next/ — that was the Semrush blocked-resource crawl issue.
 * /api/ is the only blocked path (admin indexing endpoints).
 */
const disallow = ["/api/"];
const staticAllow = ["/", "/_next/static/", "/sitemap.xml", "/llms.txt", "/llms-full.txt", "/key.txt"];

const searchBots = ["Googlebot", "Googlebot-Image", "Bingbot", "Yandex", "YandexBot"];

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
        allow: staticAllow,
        disallow,
      },
      ...searchBots.map((userAgent) => ({
        userAgent,
        allow: staticAllow,
        disallow,
      })),
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
