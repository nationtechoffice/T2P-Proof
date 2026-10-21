// Writes lib/sitemap-lastmod.json: sitemap path -> date (YYYY-MM-DD) of the last git
// commit that touched that page's own source files. Run locally before committing
// page changes: `npx tsx scripts/sitemap-lastmod.ts`. Hostinger builds read the JSON
// (no git history needed there), so lastmod stays stable between deploys.
import { execFileSync } from "node:child_process";
import { existsSync, readFileSync, writeFileSync } from "node:fs";

import { getAllSiteUrls } from "@/lib/sitemap-urls";

const paths = getAllSiteUrls().map((url) => new URL(url).pathname.replace(/\/$/, "") || "/");

const has = (file: string, needle: string) => existsSync(file) && readFileSync(file, "utf8").includes(`"${needle}"`);

function sources(path: string): string[] {
  const segs = path.split("/").filter(Boolean);
  const last = segs[segs.length - 1];
  const dir = path === "/" ? "app" : `app${path}`;
  if (existsSync(`${dir}/page.tsx`)) return [`${dir}/page.tsx`, `${dir}/data.json`].filter(existsSync);
  if (segs[0] === "blog") return ["app/blog/[slug]/page.tsx", "lib/blog-posts.ts", "lib/blog-faqs.ts"];
  if (segs[0] === "locations" && segs.length === 3)
    return ["app/locations/[city]/[service]/page.tsx", "components/city-service-page.tsx", "lib/city-service-pages.ts"];
  if (segs[0] === "locations") return ["app/locations/[city]/page.tsx", "components/location-city-landing.tsx", "lib/programmatic.ts"];
  if (segs[0] === "services" && segs.length === 3) return ["app/services/[category]/[slug]/page.tsx", "lib/services.ts"];
  if (segs[0] === "services") {
    if (has("lib/brief-service-pages.ts", last))
      return ["app/services/[category]/page.tsx", "components/brief-service-landing.tsx", "lib/brief-service-pages.ts"];
    if (["handyman", "painting", "fence"].includes(last)) return ["app/services/[category]/page.tsx", "lib/services.ts"];
    return ["app/services/[category]/page.tsx", "components/core-service-landing.tsx", "lib/programmatic.ts"];
  }
  throw new Error(`no source mapping for ${path}`);
}

const out: Record<string, string> = {};
for (const path of paths) {
  const files = sources(path).filter(existsSync);
  const date = execFileSync("git", ["log", "-1", "--format=%cs", "--", ...files], { encoding: "utf8" }).trim();
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) throw new Error(`no git date for ${path}`);
  out[path] = date;
}
writeFileSync("lib/sitemap-lastmod.json", JSON.stringify(out, null, 2) + "\n");
console.log(`[sitemap-lastmod] ${paths.length} paths`);
