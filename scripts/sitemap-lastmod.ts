// Writes lib/sitemap-lastmod.json (sitemap path -> YYYY-MM-DD) from RENDERED content,
// not from source-file dates. Run after a local `next build`:
//   npx tsx scripts/sitemap-lastmod.ts          bump only URLs whose rendered page changed
//   npx tsx scripts/sitemap-lastmod.ts --seed   record hashes for the current build, keep dates
// A page's fingerprint is its built HTML with scripts and build-specific asset paths removed,
// so title, meta, canonical, visible copy and the link set all count; a template edit that
// does not change a page's output leaves that page's lastmod alone.
// Hostinger builds only read the JSON (no git or build output needed there).
import { createHash } from "node:crypto";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { getAllSiteUrls } from "@/lib/sitemap-urls";

const LASTMOD = "lib/sitemap-lastmod.json";
const HASHES = "scripts/sitemap-content-hashes.json";
const seed = process.argv.includes("--seed");

const paths = getAllSiteUrls().map((url) => new URL(url).pathname.replace(/\/$/, "") || "/");
const readJson = (f: string): Record<string, string> => (existsSync(f) ? JSON.parse(readFileSync(f, "utf8")) : {});
const dates = readJson(LASTMOD);
const hashes = readJson(HASHES);

function today(): string {
  const d = new Date();
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

export function fingerprint(html: string): string {
  const normalized = html
    .replace(/<script\b([^>]*)>[\s\S]*?<\/script>/g, (tag, attrs: string) =>
      attrs.includes("application/ld+json") ? tag : "",
    )
    .replace(/<link\b[^>]*\/_next\/[^>]*>/g, "")
    .replace(/\/_next\/static\/[^"'\s)]+/g, "")
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/\s+/g, " ");
  return createHash("sha256").update(normalized).digest("hex").slice(0, 16);
}

const out: Record<string, string> = {};
const outHashes: Record<string, string> = {};
const bumped: string[] = [];
for (const path of paths) {
  const file = `.next/server/app/${path === "/" ? "index" : path.slice(1)}.html`;
  if (!existsSync(file)) throw new Error(`no built HTML for ${path} (${file}); run next build first`);
  const hash = fingerprint(readFileSync(file, "utf8"));
  outHashes[path] = hash;
  if (!seed && (hashes[path] !== hash || !dates[path])) {
    out[path] = today();
    bumped.push(path);
  } else {
    if (!dates[path]) throw new Error(`no lastmod to keep for ${path}`);
    out[path] = dates[path];
  }
}
writeFileSync(LASTMOD, JSON.stringify(out, null, 2) + "\n");
writeFileSync(HASHES, JSON.stringify(outHashes, null, 2) + "\n");
console.log(`[sitemap-lastmod] ${paths.length} paths, ${bumped.length} bumped${seed ? " (seed)" : ""}`);
for (const p of bumped) console.log(`  bumped ${p}`);
