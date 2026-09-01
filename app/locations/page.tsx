import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";
import { HqDispatch } from "@/components/hq-dispatch";
import { JsonLd, breadcrumbSchema } from "@/lib/json-ld";
import { targetLocations } from "@/lib/programmatic";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { MapPin } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Handyman Locations in Tampa Bay",
  description:
    "Handyman Pros FL covers Tampa, Clearwater, Westchase, Palm Harbor, Oldsmar and more from one Westchase headquarters. Call (656) 205-3185.",
  path: "/locations",
  keywords: ["handyman Tampa Bay", "handyman locations", "Westchase handyman"],
});

export default function LocationsIndexPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Locations", url: `${siteConfig.url}/locations` },
        ])}
      />
      <Breadcrumbs items={[{ label: "Locations" }]} />
      <section className="section-padding">
        <div className="container-site">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold">Handyman Locations in Tampa Bay, FL</h1>
            <p className="text-lg text-[hsl(var(--muted-foreground))]">
              One Tampa headquarters. These city pages are service areas we drive to — not extra branches.
            </p>
          </div>
          <div className="mb-10">
            <HqDispatch />
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {targetLocations.map((location) => (
              <Link
                key={location.slug}
                href={`/locations/${location.slug}`}
                className="card flex items-start gap-3 hover:border-[hsl(var(--accent))]"
              >
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-[hsl(var(--accent))]" />
                <div>
                  <h2 className="font-bold">Handyman in {location.displayName}</h2>
                  <p className="text-sm text-[hsl(var(--muted-foreground))]">
                    {location.county} · {location.zipHint}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
