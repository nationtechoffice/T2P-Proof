import { existsSync, mkdirSync, readFileSync, readdirSync, rmSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { assertSitemapDocument, buildSitemapEntries, renderSitemapXml } from "@/lib/sitemap-document";

const OUTPUT = join(process.cwd(), "public", "sitemap.xml");

function walk(dir: string, found: string[] = []): string[] {
  if (!existsSync(dir)) return found;
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    let info;
    try {
      info = statSync(path);
    } catch {
      continue;
    }
    if (info.isDirectory()) walk(path, found);
    else if (name === "sitemap.xml.body" || name === "sitemap.xml") found.push(path);
  }
  return found;
}

/** Next's prerendered body, when the metadata route was statically built. */
function readPrerenderedSitemap(): string | null {
  const direct = [
    join(process.cwd(), ".next", "server", "app", "sitemap.xml.body"),
    join(process.cwd(), ".next", "server", "app", "sitemap.xml", "route.js.body"),
  ];
  for (const path of direct) {
    if (!existsSync(path)) continue;
    const xml = readFileSync(path, "utf8").trim();
    if (xml.startsWith("<?xml") || xml.startsWith("<urlset")) return xml.startsWith("<?xml") ? xml : `<?xml version="1.0" encoding="UTF-8"?>\n${xml}`;
  }
  for (const path of walk(join(process.cwd(), ".next", "server"))) {
    if (!path.endsWith("sitemap.xml.body")) continue;
    const xml = readFileSync(path, "utf8").trim();
    if (xml.includes("<urlset")) return xml.startsWith("<?xml") ? xml : `<?xml version="1.0" encoding="UTF-8"?>\n${xml}`;
  }
  return null;
}

function main() {
  if (process.argv.includes("--clean")) {
    if (existsSync(OUTPUT)) rmSync(OUTPUT);
    console.log("[sitemap] removed public/sitemap.xml before next build");
    return;
  }

  const prerendered = readPrerenderedSitemap();
  const xml = prerendered ?? renderSitemapXml(buildSitemapEntries());
  assertSitemapDocument(xml);
  mkdirSync(join(process.cwd(), "public"), { recursive: true });
  writeFileSync(OUTPUT, xml.endsWith("\n") ? xml : `${xml}\n`);
  const source = prerendered ? "Next prerender" : "in-memory renderer";
  console.log(`[sitemap] wrote public/sitemap.xml from ${source}`);
}

main();
