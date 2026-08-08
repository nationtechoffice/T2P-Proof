import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

const disallowApi = ["/api/", "/_next/"];

/** Allow major search + AI answer-engine crawlers to index public pages. */
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
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/llms.txt"],
        disallow: disallowApi,
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/api/"],
      },
      ...aiUserAgents.map((userAgent) => ({
        userAgent,
        allow: ["/", "/llms.txt", "/sitemap.xml"],
        disallow: ["/api/"],
      })),
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
