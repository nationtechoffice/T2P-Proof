import { existsSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { assertSitemapDocument, buildSitemapEntries, pageLocs, renderSitemapXml } from "@/lib/sitemap-document";

const OUTPUT = join(process.cwd(), "public", "sitemap.xml");

function main() {
  if (process.argv.includes("--clean")) {
    if (existsSync(OUTPUT)) rmSync(OUTPUT);
    console.log("[sitemap] removed public/sitemap.xml");
    return;
  }

  // No app/sitemap route. hcdn serves this public file before Node, so a cold
  // start cannot 500 /sitemap.xml. The URL set is the same in-memory canonical list.
  const xml = renderSitemapXml(buildSitemapEntries());
  assertSitemapDocument(xml);
  mkdirSync(join(process.cwd(), "public"), { recursive: true });
  writeFileSync(OUTPUT, xml.endsWith("\n") ? xml : `${xml}\n`);
  const urlCount = xml.match(/<url\b/g)?.length ?? pageLocs(xml).length;
  console.log(`[sitemap] wrote public/sitemap.xml (${urlCount} URLs)`);
}

main();
