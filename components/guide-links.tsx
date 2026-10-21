import Link from "next/link";
import { getBlogPost } from "@/lib/blog-posts";

/** Add-only "Guides" links from service pages and /locations/tampa to matching blog posts. */
const guidesByPage: Record<string, string[]> = {
  "drywall-repair": ["drywall-repair-cost-guide-florida", "handyman-cost-tampa-2026"],
  "tv-wall-mounting": ["tv-mounting-cost-tampa", "tv-mounting-over-fireplace-tampa", "tv-mounting-tips-florida-homes"],
  "door-repair": ["door-repair-florida-humidity-tampa", "hurricane-prep-home-maintenance-florida"],
  "same-day-handyman": ["same-day-handyman-tampa-bay", "handyman-cost-tampa-2026", "does-a-handyman-need-a-license-florida"],
  "electrical-fixture-installation": ["handyman-electrical-plumbing-tampa", "does-a-handyman-need-a-license-florida"],
  "plumbing-fixture-repair": ["handyman-electrical-plumbing-tampa", "does-a-handyman-need-a-license-florida"],
  "furniture-assembly": ["how-to-choose-handyman-florida", "handyman-cost-tampa-2026"],
  "tile-installation": ["how-to-choose-handyman-florida", "handyman-cost-tampa-2026"],
  "flooring-installation": ["how-to-choose-handyman-florida", "handyman-cost-tampa-2026"],
  "gutter-installation": ["hurricane-prep-home-maintenance-florida"],
  "weatherstripping-caulking": ["hurricane-prep-home-maintenance-florida", "door-repair-florida-humidity-tampa"],
  "door-installation": ["door-repair-florida-humidity-tampa"],
  "ceiling-repair": ["drywall-repair-cost-guide-florida"],
  "deck-repair": ["best-exterior-paint-florida-climate", "hurricane-prep-home-maintenance-florida"],
  fence: ["fence-buying-guide-florida-homeowners"],
  "drywall-guide": ["drywall-repair-cost-guide-florida"],
  "license-guide": ["does-a-handyman-need-a-license-florida"],
  painting: ["best-exterior-paint-florida-climate"],
  handyman: ["how-to-choose-handyman-florida", "handyman-cost-tampa-2026", "does-a-handyman-need-a-license-florida"],
  tampa: ["handyman-cost-tampa-2026", "same-day-handyman-tampa-bay", "how-to-choose-handyman-florida"],
};

export function GuideLinks({ pageKey }: { pageKey: string }) {
  const posts = (guidesByPage[pageKey] ?? []).map(getBlogPost).filter((p) => p !== undefined);
  if (posts.length === 0) return null;
  return (
    <section className="section-padding pt-0">
      <div className="container-site mx-auto max-w-3xl">
        <h2 className="mb-4 text-2xl font-bold">Guides</h2>
        <ul className="list-disc space-y-2 pl-6">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="font-medium text-[hsl(var(--primary))] hover:underline">
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
