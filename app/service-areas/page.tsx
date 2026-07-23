import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";
import { buildMetadata, buildPageTitle } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { MapPin } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: buildPageTitle("Service Areas in Florida"),
  description:
    "Handyman Pros Florida serves Tampa, Orlando, Miami, Jacksonville, Fort Lauderdale, and 15+ more cities. Find handyman, painting, and fence services near you.",
  path: "/service-areas",
  keywords: ["handyman near me Florida", "service areas", "Florida cities served"],
});

export default function ServiceAreasPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Service Areas" }]} />
      <section className="section-padding">
        <div className="container-site">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold">Florida Service Areas</h1>
            <p className="text-lg text-[hsl(var(--muted-foreground))]">
              Handyman Pros Florida provides professional handyman, painting, and fence services across the Sunshine State. Don&apos;t see your city? Call us — we likely serve your area.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {siteConfig.serviceAreas.map((city) => (
              <div key={city} className="card flex items-center gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-[hsl(var(--primary))]" />
                <div>
                  <h2 className="font-semibold">{city}</h2>
                  <p className="text-xs text-[hsl(var(--muted-foreground))]">Florida</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-12 max-w-2xl text-center">
            <p className="text-[hsl(var(--muted-foreground))]">
              We&apos;re constantly expanding our service areas. Contact us at{" "}
              <a href={`tel:${siteConfig.phoneTel}`} className="font-semibold text-[hsl(var(--primary))]">
                {siteConfig.phone}
              </a>{" "}
              to confirm availability in your area.
            </p>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
