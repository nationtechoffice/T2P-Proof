import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";
import { FAQSection } from "@/components/faq-section";
import { GoogleReviews } from "@/components/google-reviews";
import { HqDispatch } from "@/components/hq-dispatch";
import { JsonLd, breadcrumbSchema, faqSchema, speakableSchema, serviceSchema } from "@/lib/json-ld";
import { carrollwoodFaqs } from "@/lib/local-faqs";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { CheckCircle, MapPin, Phone } from "lucide-react";

const pagePath = "/handyman-carrollwood-fl";
const pageUrl = `${siteConfig.url}${pagePath}`;

export const metadata: Metadata = buildMetadata({
  title: "Carrollwood Handyman",
  description:
    "Trusted Carrollwood home maintenance and local handyman service. Ceiling fan installation, repairs, and punch-list projects across Carrollwood, FL. Call for a free estimate.",
  path: pagePath,
  keywords: [
    "Carrollwood home maintenance",
    "local handyman service",
    "ceiling fan installation",
    "handyman Carrollwood FL",
  ],
});

export default function HandymanCarrollwoodPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Service Areas", url: `${siteConfig.url}/service-areas` },
            { name: "Handyman Carrollwood FL", url: pageUrl },
          ]),
          faqSchema(carrollwoodFaqs),
          serviceSchema({
            name: "Handyman service",
            description:
              "Carrollwood home maintenance dispatched from Handyman Pros FL's only Tampa / Westchase headquarters.",
            url: pageUrl,
            category: "Handyman",
            areaName: "Carrollwood, FL",
          }),
          speakableSchema(pageUrl, [".location-intro", ".location-body"]),
        ]}
      />
      <Breadcrumbs
        items={[
          { label: "Service Areas", href: "/service-areas" },
          { label: "Handyman Carrollwood FL" },
        ]}
      />

      <article className="section-padding relative">
        <div className="container-site">
          <div className="mx-auto max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[hsl(var(--accent))]">
              Carrollwood · Tampa Bay
            </p>
            <h1 className="mb-4 text-4xl font-bold">
              Local Handyman Service in Carrollwood, FL
            </h1>
            <p className="location-intro mb-8 text-xl leading-relaxed text-[hsl(var(--muted-foreground))]">
              Handyman Pros FL delivers dependable Carrollwood home maintenance — from ceiling fan installation to everyday repairs — with the care of a true local handyman service.
            </p>

            <div className="location-body prose-content space-y-5 text-base leading-relaxed text-[hsl(var(--foreground))]">
              <p>
                Carrollwood homes blend established neighborhoods with busy family schedules, which means maintenance
                rarely waits for a perfect weekend. Handyman Pros FL provides Carrollwood home maintenance that keeps
                kitchens, bathrooms, lanais, and living spaces working smoothly. We travel from our Westchase base into
                Carrollwood Village, Northdale-adjacent streets, and surrounding blocks with a fully stocked truck so most
                common jobs start as soon as we arrive.
              </p>
              <p>
                Choosing a local handyman service means you get someone who understands Florida construction details —
                stucco touch-ups, humidity-swollen doors, patio screen tears, and the wear that afternoon storms leave on
                outdoor hardware. We help homeowners tackle deferred maintenance before small issues become expensive
                repairs. Cabinet adjustments, drywall touch-ups, caulking, door closer replacements, and garage storage
                installs are all part of a typical Carrollwood visit.
              </p>
              <p>
                Ceiling fan installation is one of our most requested Carrollwood services. Proper mounting, electrical
                connections, and blade balancing keep rooms cooler and quieter through Tampa Bay summers. We replace older
                fixtures, upgrade to modern remote-control fans, and confirm the electrical box can support the fan&apos;s
                weight. If you already purchased a fan online, we bring the ladders, voltage testers, and mounting hardware
                needed for a clean install without the DIY guesswork.
              </p>
              <p>
                Residents also call our local handyman service for furniture assembly, TV mounting, grab-bar installation,
                and seasonal punch lists before holidays or home sales. Carrollwood home maintenance works best when it is
                proactive: tighten loose railings, reseal bathrooms, refresh weatherstripping, and keep exterior lights
                reliable. We provide upfront quotes, show up on time, and leave work areas neat — the basics every
                neighborhood deserves.
              </p>
              <p>
                Ready for ceiling fan installation or a longer Carrollwood home maintenance list? Call{" "}
                <a href={`tel:${siteConfig.phoneTel}`} className="font-semibold text-[hsl(var(--accent))] hover:underline">
                  {siteConfig.phone}
                </a>{" "}
                anytime — we are open 24/7 — or{" "}
                <Link href="/contact" className="font-semibold text-[hsl(var(--primary))] hover:underline">
                  send a service request
                </Link>
                . Handyman Pros FL is the local handyman service Carrollwood homeowners keep on speed dial for quality work
                without the runaround.
              </p>
            </div>

            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {[
                "Carrollwood home maintenance plans",
                "Ceiling fan installation & balancing",
                "Trusted local handyman service",
                "Same-day and 24/7 availability",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--accent))]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={`tel:${siteConfig.phoneTel}`} className="btn-accent inline-flex items-center justify-center gap-2">
                <Phone className="h-4 w-4" />
                Call {siteConfig.phone}
              </a>
              <Link href="/handyman-westchase-fl" className="btn-secondary inline-flex items-center justify-center">
                Also Serving Westchase
              </Link>
            </div>
            <div className="mt-8">
              <HqDispatch area="Carrollwood, FL" />
            </div>
          </div>

          <section className="mx-auto mt-16 max-w-4xl" aria-labelledby="carrollwood-map-heading">
            <div className="mb-4 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-[hsl(var(--accent))]" />
              <h2 id="carrollwood-map-heading" className="text-2xl font-bold">
                Carrollwood Service Area Map
              </h2>
            </div>
            <p className="mb-4 text-sm text-[hsl(var(--muted-foreground))]">
              See the Carrollwood neighborhood where our local handyman service completes home maintenance and ceiling fan installation jobs.
            </p>
            <div className="overflow-hidden rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--muted))] shadow-sm">
              <iframe
                title="Google Map of Carrollwood, Florida"
                src="https://maps.google.com/maps?q=Carrollwood%2C%20Tampa%2C%20FL&z=13&output=embed"
                className="h-[320px] w-full border-0 md:h-[420px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </section>
        </div>
      </article>

      <GoogleReviews />
      <FAQSection faqs={carrollwoodFaqs} title="Carrollwood Handyman FAQ" />
      <CTASection
        title="Need Carrollwood Home Maintenance Help?"
        description="Book our local handyman service for ceiling fan installation, repairs, and punch-list projects across Carrollwood, FL."
      />
    </>
  );
}
