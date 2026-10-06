import assert from "node:assert/strict";
import test from "node:test";
import nextConfig from "../next.config";
import {
  alternateLocationSlug,
  assertLocationRedirectsFit,
  canonicalLocationPath,
  canonicalLocationUrl,
  locationAlternatePaths,
  locationAlternateRedirects,
} from "./location-redirects";
import { getLlmsFullTxt, getLlmsTxt } from "./llms-content";
import { targetLocations } from "./programmatic";
import { buildMetadata } from "./seo";
import { siteConfig } from "./site-config";
import { assertSitemapDocument, buildSitemapEntries, pageLocs, renderSitemapXml } from "./sitemap-document";
import { getAllSiteUrls } from "./sitemap-urls";

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

test("every hub redirects its alternate form, including a trailing slash", () => {
  const rules = locationAlternateRedirects();
  assert.equal(rules.length, targetLocations.length * 2);
  assert.equal(new Set(targetLocations.map((location) => location.slug)).size, targetLocations.length);

  for (const location of targetLocations) {
    const destination = canonicalLocationPath(location.slug);
    const alternate = canonicalLocationPath(alternateLocationSlug(location.slug));
    const pair = rules.filter((rule) => rule.destination === destination);
    assert.deepEqual(
      pair.map((rule) => rule.source).sort(),
      [alternate, `${alternate}/`].sort(),
    );
    for (const rule of pair) assert.equal(rule.permanent, true);
    assert.equal(canonicalLocationUrl(location.slug), `${siteConfig.url}${destination}`);
  }
});

test("config redirects keep legacy rules and do not loop or collide", async () => {
  assert.equal(typeof nextConfig.redirects, "function");
  const rules = await nextConfig.redirects();
  const sources = rules.map((rule) => rule.source);
  const duplicates = sources.filter((source, index) => sources.indexOf(source) !== index);
  assert.deepEqual(duplicates, []);

  const bySource = new Map(rules.map((rule) => [rule.source, rule.destination]));

  function follow(path: string): string {
    const seen = new Set<string>();
    let current = path;
    for (let hop = 0; hop < 6; hop += 1) {
      if (seen.has(current)) throw new Error(`loop at ${current} from ${path}`);
      seen.add(current);
      const next = bySource.get(current);
      if (!next) return current;
      current = next.startsWith("http") ? new URL(next).pathname : next;
    }
    throw new Error(`too many hops from ${path}`);
  }

  for (const location of targetLocations) {
    const canonical = canonicalLocationPath(location.slug);
    const alternate = canonicalLocationPath(alternateLocationSlug(location.slug));
    assert.equal(follow(alternate), canonical);
    assert.equal(follow(`${alternate}/`), canonical);
    assert.equal(follow(canonical), canonical);
    assert.equal(bySource.has(canonical), false);
    assert.equal(bySource.get(alternate), canonical);
  }

  assert.equal(bySource.get("/handyman-plant-city-fl"), "/locations/plant-city");
  assert.equal(bySource.get("/handyman-westchase-fl"), "/locations/westchase-fl");
  assert.equal(bySource.get("/handyman-brandon-fl"), "/locations/brandon");
  assert.equal(bySource.get("/locations/greater-carrollwood"), "/locations/carrollwood");
  assert.equal(bySource.get("/locations/greater-carrollwood-fl"), "/locations/carrollwood");
  assert.equal(bySource.get("/handyman-greater-carrollwood-fl"), "/locations/carrollwood");
  assert.equal(bySource.get("/services/tv-mounting"), "/services/tv-wall-mounting");
  assert.equal(bySource.get("/locations/valrico-fl"), "/locations/valrico");
  assert.equal(bySource.get("/locations/apollo-beach-fl"), "/locations/apollo-beach");
  assert.equal(bySource.get("/locations/gulfport-fl"), "/locations/gulfport");
  assert.equal(bySource.get("/locations/westchase"), "/locations/westchase-fl");
  assert.equal(bySource.get("/locations/palm-harbor"), "/locations/palm-harbor-fl");
  assert.equal(bySource.get("/locations/holiday-fl/"), "/locations/holiday");

  const legacy = rules.filter((rule) => !rule.source.startsWith("/locations/") || rule.source.includes("greater-carrollwood"));
  assertLocationRedirectsFit(legacy, locationAlternateRedirects());
});

test("hub metadata canonical and og:url use the live slug", () => {
  for (const location of targetLocations) {
    const expected = canonicalLocationUrl(location.slug);
    const meta = buildMetadata({
      title: "Handyman",
      description: "Licensed handyman service.",
      path: canonicalLocationPath(location.slug),
      exactTitle: true,
    });
    assert.equal(meta.alternates?.canonical, expected);
    assert.equal(meta.openGraph?.url, expected);
  }
});

test("sitemap and llms files list canonical hub URLs only", () => {
  const urls = new Set(getAllSiteUrls());
  const xml = renderSitemapXml(buildSitemapEntries());
  assertSitemapDocument(xml);
  const locs = new Set(pageLocs(xml));
  const llms = `${getLlmsTxt()}\n${getLlmsFullTxt()}`;

  for (const location of targetLocations) {
    const canonical = canonicalLocationUrl(location.slug);
    assert.equal(urls.has(canonical), true, canonical);
    assert.equal(locs.has(canonical), true, canonical);
    assert.match(llms, new RegExp(escapeRegExp(canonical)));
  }

  for (const path of locationAlternatePaths()) {
    const url = `${siteConfig.url}${path}`;
    assert.equal(urls.has(url), false, url);
    assert.equal(locs.has(url), false, url);
    assert.equal(new RegExp(`${escapeRegExp(url)}(?![-a-z0-9])`).test(llms), false, url);
  }
});
