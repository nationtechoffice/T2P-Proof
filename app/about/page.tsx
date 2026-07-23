import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";
import { buildMetadata, buildLocalTitle } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { formatFullAddress } from "@/lib/local-seo";
import { Shield, Users, Award, Heart, MapPin } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: buildLocalTitle("About Us"),
  description:
    `Handyman Pros FL is based at ${formatFullAddress()} in Westchase, Tampa. Licensed handyman, painting & fence services open 24/7 across Hillsborough County & Tampa Bay.`,
  path: "/about",
  keywords: ["about handyman pros Tampa", "Westchase handyman", "Tampa handyman company", "33626 handyman"],
});

const values = [
  { icon: Shield, title: "Licensed & Insured", description: "Fully licensed and insured for every job in Hillsborough County and Tampa Bay." },
  { icon: Users, title: "Local Tampa Team", description: "Based in Westchase — we know Tampa homes, Florida weather, and neighborhood needs." },
  { icon: Award, title: "Quality Craftsmanship", description: "We take pride in every repair, paint job, and fence installation." },
  { icon: Heart, title: "Open 24/7", description: "Call anytime. We're available around the clock for Tampa Bay homeowners." },
];

export default function AboutPage() {
  const fullAddress = formatFullAddress();

  return (
    <>
      <Breadcrumbs items={[{ label: "About" }]} />
      <section className="section-padding">
        <div className="container-site">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold">About Handyman Pros FL — Tampa</h1>
            <p className="text-lg text-[hsl(var(--muted-foreground))]">
              Your trusted local handyman based in Westchase, serving Tampa and all surrounding counties.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[hsl(var(--muted))]/50">
        <div className="container-site">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-2xl font-bold">Who We Are</h2>
            <div className="space-y-4 text-[hsl(var(--muted-foreground))] leading-relaxed">
              <p>
                Handyman Pros FL is a licensed, insured home services company headquartered at {fullAddress} in the Westchase area of Tampa. We built our business on fast response, honest pricing, and quality work on every job.
              </p>
              <p>
                Our mobile team serves homeowners across Hillsborough, Pinellas, Pasco, Polk, Hernando, and Manatee counties — including Westchase, Carrollwood, Citrus Park, Town &apos;n&apos; Country, Brandon, Riverview, St. Petersburg, and Clearwater.
              </p>
              <p>
                From furniture assembly and drywall repair to interior painting and fence installation, we offer 60+ services and are open 24 hours a day, 7 days a week. Call {siteConfig.phone} anytime for a free estimate.
              </p>
            </div>
            <div className="mt-8 flex items-start gap-3 rounded-xl border border-[hsl(var(--border))] bg-white/80 p-6">
              <MapPin className="mt-1 h-6 w-6 shrink-0 text-[hsl(var(--accent))]" />
              <div>
                <p className="font-semibold">Our Tampa Location</p>
                <address className="mt-1 not-italic text-[hsl(var(--muted-foreground))]">{fullAddress}</address>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site">
          <h2 className="mb-12 text-center text-2xl font-bold">Our Core Values</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, description }) => (
              <div key={title} className="card text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[hsl(var(--primary))]/10">
                  <Icon className="h-7 w-7 text-[hsl(var(--primary))]" />
                </div>
                <h3 className="mb-2 font-bold">{title}</h3>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Tampa's Trusted Handyman — Open 24/7" />
    </>
  );
}
