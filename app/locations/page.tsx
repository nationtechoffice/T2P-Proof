import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";
import { HqDispatch } from "@/components/hq-dispatch";
import { JsonLd, breadcrumbSchema } from "@/lib/json-ld";
import { targetLocations } from "@/lib/programmatic";
import { locationTitle, locationDescription } from "@/lib/instant-estimate";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { MapPin } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: locationTitle("Tampa Bay"),
  description: locationDescription("Tampa Bay"),
  path: "/locations",
  exactTitle: true,
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
            <h1 className="mb-4 text-4xl font-bold">Handyman in Tampa Bay, FL</h1>
            <p className="text-lg text-[hsl(var(--muted-foreground))]">
              Instant phone estimates and same-day dispatch from one Westchase headquarters. These city pages are service areas we drive to — not extra branches. Pinellas stops include{" "}
              <Link href="/locations/oldsmar-fl" className="font-medium text-[hsl(var(--primary))] hover:underline">
                Oldsmar
              </Link>
              ,{" "}
              <Link href="/locations/clearwater" className="font-medium text-[hsl(var(--primary))] hover:underline">
                Clearwater
              </Link>
              ,{" "}
              <Link href="/locations/safety-harbor-fl" className="font-medium text-[hsl(var(--primary))] hover:underline">
                Safety Harbor
              </Link>
              , and{" "}
              <Link href="/locations/palm-harbor-fl" className="font-medium text-[hsl(var(--primary))] hover:underline">
                Palm Harbor
              </Link>
              . East and south Hillsborough hubs include{" "}
              <Link href="/locations/brandon" className="font-medium text-[hsl(var(--primary))] hover:underline">
                Brandon
              </Link>
              ,{" "}
              <Link href="/locations/riverview" className="font-medium text-[hsl(var(--primary))] hover:underline">
                Riverview
              </Link>
              , and{" "}
              <Link href="/locations/plant-city" className="font-medium text-[hsl(var(--primary))] hover:underline">
                Plant City
              </Link>
              . North of headquarters:{" "}
              <Link href="/locations/carrollwood" className="font-medium text-[hsl(var(--primary))] hover:underline">
                Carrollwood
              </Link>
              ,{" "}
              <Link href="/locations/lutz" className="font-medium text-[hsl(var(--primary))] hover:underline">
                Lutz
              </Link>
              ,{" "}
              <Link href="/locations/wesley-chapel" className="font-medium text-[hsl(var(--primary))] hover:underline">
                Wesley Chapel
              </Link>
              , and{" "}
              <Link href="/locations/land-o-lakes" className="font-medium text-[hsl(var(--primary))] hover:underline">
                Land O&apos; Lakes
              </Link>
              . Pinellas adds{" "}
              <Link href="/locations/largo" className="font-medium text-[hsl(var(--primary))] hover:underline">
                Largo
              </Link>
              ,{" "}
              <Link href="/locations/pinellas-park" className="font-medium text-[hsl(var(--primary))] hover:underline">
                Pinellas Park
              </Link>
              , and{" "}
              <Link href="/locations/seminole" className="font-medium text-[hsl(var(--primary))] hover:underline">
                Seminole
              </Link>
              .{" "}
              <Link href="/locations/spring-hill" className="font-medium text-[hsl(var(--primary))] hover:underline">
                Spring Hill
              </Link>{" "}
              is the Hernando stop, still dispatched from Westchase.
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
                    Instant phone estimates · {location.county}
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
