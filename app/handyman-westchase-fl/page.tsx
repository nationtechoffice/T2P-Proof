import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";
import { FAQSection } from "@/components/faq-section";
import { JsonLd, breadcrumbSchema, faqSchema, speakableSchema } from "@/lib/json-ld";
import { westchaseFaqs } from "@/lib/local-faqs";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { CheckCircle, MapPin, Phone } from "lucide-react";

const pagePath = "/handyman-westchase-fl";
const pageUrl = `${siteConfig.url}${pagePath}`;

export const metadata: Metadata = buildMetadata({
  title: `Handyman Near Me in Westchase FL ${siteConfig.primaryZip} | ${siteConfig.shortName}`,
  description:
    "Looking for a handyman near me in Westchase? Handyman Pros FL handles Westchase home repairs, fixture installation, and local handyman 33626 jobs 24/7. Call for a free estimate.",
  path: pagePath,
  keywords: [
    "handyman near me",
    "Westchase home repairs",
    "fixture installation",
    "local handyman 33626",
    "handyman Westchase FL",
  ],
});

export default function HandymanWestchasePage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Service Areas", url: `${siteConfig.url}/service-areas` },
            { name: "Handyman Westchase FL", url: pageUrl },
          ]),
          faqSchema(westchaseFaqs),
          speakableSchema(pageUrl, [".location-intro", ".location-body"]),
        ]}
      />
      <Breadcrumbs
        items={[
          { label: "Service Areas", href: "/service-areas" },
          { label: "Handyman Westchase FL" },
        ]}
      />

      <article className="section-padding relative">
        <div className="container-site">
          <div className="mx-auto max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[hsl(var(--accent))]">
              Westchase · ZIP {siteConfig.primaryZip}
            </p>
            <h1 className="mb-4 text-4xl font-bold">
              Handyman Near Me in Westchase, FL
            </h1>
            <p className="location-intro mb-8 text-xl leading-relaxed text-[hsl(var(--muted-foreground))]">
              When you need a reliable local handyman 33626 homeowners trust, Handyman Pros FL is right in your neighborhood — ready for Westchase home repairs, fixture installation, and same-day fixes.
            </p>

            <div className="location-body prose-content space-y-5 text-base leading-relaxed text-[hsl(var(--foreground))]">
              <p>
                Searching for a handyman near me should not mean waiting days for someone to call you back.
                Handyman Pros FL is based in Westchase at {siteConfig.address.street}, so we already know the
                streets, HOA standards, and Florida humidity challenges that affect homes across ZIP {siteConfig.primaryZip}.
                From Tuscany Bay to the Westchase Golf Club neighborhoods, we show up prepared with tools on the truck
                and clear pricing before work begins.
              </p>
              <p>
                Everyday Westchase home repairs are our specialty. Loose cabinet hinges, sticky doors, damaged baseboards,
                dripping fixtures, and worn weatherstripping add up quickly in busy households. We handle punch-list
                projects after renovations, rental turnovers, and those odd jobs that never make it to the top of a
                general contractor&apos;s schedule. If a repair can be completed safely in a single visit, we aim to finish
                it that day so you can get back to normal.
              </p>
              <p>
                Fixture installation is another frequent request from Westchase residents. Whether you need a new vanity
                light, towel bars, curtain rods, shelving, or a replacement faucet that arrived from an online order, our
                team installs hardware cleanly and levels everything for a finished look. We also assist with TV mounting,
                smart-home device placement, and minor electrical fixture swaps when existing wiring supports the upgrade.
              </p>
              <p>
                As your local handyman 33626 option, we prioritize communication and job-site respect. That means shoe
                covers indoors, careful dust control during patch work, and a walkthrough before we leave. Neighbors in
                Westchase often call us after a storm for fence boards, screen repairs, and outdoor fixture resets — and
                many stay with us for ongoing seasonal maintenance. Open 24/7, we are available when a weekend leak or
                evening emergency cannot wait until Monday.
              </p>
              <p>
                Looking for a handyman near me who also covers nearby Citrus Park, Carrollwood, and greater Tampa?
                Start with Westchase home repairs, then keep our number saved for the next fixture installation or
                honey-do list. Call{" "}
                <a href={`tel:${siteConfig.phoneTel}`} className="font-semibold text-[hsl(var(--accent))] hover:underline">
                  {siteConfig.phone}
                </a>{" "}
                for a free estimate, or{" "}
                <Link href="/contact" className="font-semibold text-[hsl(var(--primary))] hover:underline">
                  request service online
                </Link>
                . Licensed, insured, and neighborhood-focused — that is how Handyman Pros FL serves Westchase.
              </p>
            </div>

            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {[
                "Same-day Westchase home repairs",
                "Fixture installation & hardware",
                "Local handyman 33626 coverage",
                "Licensed & insured technicians",
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
              <Link href="/services/drywall-repair-tampa" className="btn-secondary inline-flex items-center justify-center">
                Drywall Repair in Tampa
              </Link>
            </div>
          </div>

          <section className="mx-auto mt-16 max-w-4xl" aria-labelledby="westchase-map-heading">
            <div className="mb-4 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-[hsl(var(--accent))]" />
              <h2 id="westchase-map-heading" className="text-2xl font-bold">
                Westchase Service Area Map
              </h2>
            </div>
            <p className="mb-4 text-sm text-[hsl(var(--muted-foreground))]">
              Explore the Westchase neighborhood we serve — including ZIP {siteConfig.primaryZip} and nearby Tampa communities.
            </p>
            <div className="overflow-hidden rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--muted))] shadow-sm">
              <iframe
                title="Google Map of Westchase, Florida"
                src="https://maps.google.com/maps?q=Westchase%2C%20FL%2033626&z=13&output=embed"
                className="h-[320px] w-full border-0 md:h-[420px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </section>
        </div>
      </article>

      <FAQSection faqs={westchaseFaqs} title="Westchase Handyman FAQ" />
      <CTASection
        title="Need a Handyman Near Me in Westchase?"
        description="Call Handyman Pros FL for Westchase home repairs, fixture installation, and local handyman 33626 service — open 24/7."
      />
    </>
  );
}
