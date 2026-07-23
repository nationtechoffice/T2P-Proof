import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";
import { buildMetadata, buildLocalTitle } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { MapPin } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: buildLocalTitle("Tampa Bay Service Areas"),
  description:
    `Handyman Pros FL serves Tampa from ${siteConfig.address.street}, Westchase 33626. Westchase, Carrollwood, Citrus Park, Brandon, Hillsborough, Pinellas, Pasco & all surrounding counties. Open 24/7.`,
  path: "/service-areas",
  keywords: ["handyman near me Tampa", "handyman Westchase 33626", "Tampa Bay service areas", "Hillsborough County handyman"],
});

export default function ServiceAreasPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Service Areas" }]} />
      <section className="section-padding relative">
        <div className="container-site">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[hsl(var(--accent))]">
              Tampa Bay Coverage
            </p>
            <h1 className="mb-4 text-4xl font-bold">Tampa & Surrounding Counties</h1>
            <p className="text-lg text-[hsl(var(--muted-foreground))]">
              Handyman Pros FL is based in Tampa and serves homeowners across the entire Bay area. Don&apos;t see your neighborhood? Call us — we likely serve your area.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="mb-6 text-center text-2xl font-bold">Counties We Serve</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {siteConfig.counties.map((county) => (
                <div key={county} className="card text-center">
                  <MapPin className="mx-auto mb-2 h-8 w-8 text-[hsl(var(--accent))]" />
                  <h3 className="text-lg font-bold">{county}</h3>
                  <p className="text-sm text-[hsl(var(--muted-foreground))]">Full coverage</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-6 text-center text-2xl font-bold">Cities & Neighborhoods</h2>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {siteConfig.serviceAreas.map((city) => (
                <div key={city} className="card flex items-center gap-3">
                  <MapPin className="h-5 w-5 shrink-0 text-[hsl(var(--primary))]" />
                  <div>
                    <h3 className="font-semibold">{city}</h3>
                    <p className="text-xs text-[hsl(var(--muted-foreground))]">Tampa Bay Area</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-2xl text-center">
            <p className="text-[hsl(var(--muted-foreground))]">
              Call{" "}
              <a href={`tel:${siteConfig.phoneTel}`} className="font-semibold text-[hsl(var(--primary))]">
                {siteConfig.phone}
              </a>{" "}
              to confirm service in your area. Same-day availability for Tampa, Westchase, Carrollwood, and Citrus Park.
            </p>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
