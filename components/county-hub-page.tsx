import Link from "next/link";
import { MarketingPageView } from "@/components/marketing-page";
import type { CountyHub } from "@/lib/seo-plan/county-hubs";
import { latestGuidesBlock } from "@/lib/seo-plan/directory-links";

export function CountyHubPage({ hub }: { hub: CountyHub }) {
  const guides = latestGuidesBlock();
  const pageWithLinks: CountyHub = {
    ...hub,
    childLinks: [
      ...(hub.childLinks ?? []),
      ...hub.serviceLinks.map((l) => ({ href: l.href, label: l.label })),
    ],
    childLinksTitle: "Popular services and nearby hubs",
  };

  return (
    <>
      <MarketingPageView page={pageWithLinks} />
      <section className="section-padding border-t border-[hsl(var(--border))] bg-[hsl(var(--muted))]/20">
        <div className="container-site">
          <h2 className="mb-4 text-2xl font-bold">Areas we serve — {hub.countyName} County</h2>
          <ul className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {hub.cityLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="font-semibold text-[hsl(var(--primary))] hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <h2 className="mb-4 mt-10 text-2xl font-bold">Latest guides</h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {guides.map((g) => (
              <li key={g.href}>
                <Link
                  href={g.href}
                  className="block rounded-xl border border-[hsl(var(--border))] px-4 py-3 hover:bg-[hsl(var(--muted))]/30"
                >
                  <span className="font-semibold text-[hsl(var(--primary))]">{g.label}</span>
                  <p className="mt-1 text-sm text-[hsl(var(--muted-foreground))]">{g.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
