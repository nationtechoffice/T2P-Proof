import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";
import { FAQSection } from "@/components/faq-section";
import { RelatedContent } from "@/components/related-content";
import { EntityFacts } from "@/components/entity-facts";
import { JsonLd, breadcrumbSchema, faqSchema, serviceSchema, speakableSchema } from "@/lib/json-ld";
import { drywallTampaFaqs } from "@/lib/local-faqs";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { siteImages } from "@/lib/images";
import { CheckCircle, Phone } from "lucide-react";

const pagePath = "/services/drywall-repair-tampa";
const pageUrl = `${siteConfig.url}${pagePath}`;

export const metadata: Metadata = buildMetadata({
  title: "Drywall Repair Tampa, FL | Same-Day Patch | Handyman Pros FL",
  description:
    "Drywall patch & ceiling texture repair in Tampa, Westchase & Carrollwood. Licensed wall repair, 24/7. Call (656) 205-3185.",
  path: pagePath,
  keywords: [
    "drywall patch Tampa",
    "ceiling texture repair",
    "wall repair contractor",
    "drywall repair Tampa",
  ],
});

export default function DrywallRepairTampaPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Services", url: `${siteConfig.url}/services` },
            { name: "Drywall Repair Tampa", url: pageUrl },
          ]),
          serviceSchema({
            name: "Drywall Repair",
            description:
              "Professional drywall patch Tampa service including ceiling texture repair and wall repair contractor work across Tampa Bay.",
            url: pageUrl,
            category: "Drywall Repair",
          }),
          faqSchema(drywallTampaFaqs),
          speakableSchema(pageUrl, [".service-definition", ".service-description"]),
        ]}
      />
      <Breadcrumbs
        items={[
          { label: "Services", href: "/services" },
          { label: "Drywall Repair Tampa" },
        ]}
      />

      <article className="section-padding relative">
        <div className="container-site">
          <div className="mx-auto max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[hsl(var(--accent))]">
              Drywall · Tampa Bay
            </p>
            <h1 className="mb-4 text-4xl font-bold">Drywall Repair in Tampa, FL</h1>
            <p className="service-definition entity-definition mb-8 text-xl leading-relaxed text-[hsl(var(--muted-foreground))]">
              Handyman Pros FL is a licensed and insured mobile handyman provider based in Westchase, Tampa, FL offering 24/7 emergency repairs, drywall patching, painting, and fence contracting. From a clean drywall patch Tampa residents can barely see, to full ceiling texture repair, we are the wall repair contractor neighborhoods rely on.
            </p>

            <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src={siteImages.drywallRepair.src}
                alt={siteImages.drywallRepair.alt}
                width={1280}
                height={720}
                sizes="(max-width: 768px) 100vw, 768px"
                className="h-full w-full object-cover"
                priority
                fetchPriority="high"
                loading="eager"
              />
            </div>

            <div className="service-description space-y-5 text-base leading-relaxed text-[hsl(var(--foreground))]">
              <p>
                Holes, cracks, and water stains make rooms feel unfinished — and in Florida&apos;s climate, moisture can turn a
                small blemish into a larger repair if ignored. Handyman Pros FL specializes in drywall patch Tampa projects of
                every size: nail pops from settling, doorknob dents, TV-mount holes, and sections cut out for plumbing or
                electrical work. We cut clean edges, install backing when needed, tape seams, and feather compound so the
                repair blends with the surrounding wall.
              </p>
              <p>
                Ceiling texture repair requires a careful eye. Popcorn, knockdown, orange peel, and smooth finishes each need
                a different approach. Our team matches existing texture as closely as possible, then primes and paints so the
                ceiling does not advertise where the damage used to be. Whether a roof leak left a brown ring or furniture
                scraped a hallway during a move, we restore the surface and help you plan any follow-up painting.
              </p>
              <p>
                Homeowners searching for a wall repair contractor often want more than a quick putty job. We evaluate the
                cause — impact damage, moisture, poor previous patches, or fastener failure — before we close the wall.
                When water damage is present, we advise on drying and material replacement so mold risk stays low. For rental
                turnovers and pre-listing prep in Westchase, Carrollwood, Citrus Park, and greater Tampa, invisible drywall
                work makes a measurable difference in first impressions.
              </p>
              <p>
                A professional drywall patch Tampa service also includes sanding control and cleanup. We protect floors and
                furniture, contain dust when practical, and leave you with surfaces ready for paint. Prefer us to handle the
                finish coat too? Pair drywall work with our painting services for a single coordinated visit. We also connect
                drywall fixes with related handyman tasks like trim replacement, outlet cover resets, and fixture reinstalls
                after wall work is complete.
              </p>
              <p>
                Need ceiling texture repair this week, or a wall repair contractor for a longer punch list? Call{" "}
                <a href={`tel:${siteConfig.phoneTel}`} className="font-semibold text-[hsl(var(--accent))] hover:underline">
                  {siteConfig.phone}
                </a>{" "}
                for a free estimate. Handyman Pros FL is open 24/7 and proudly serves Tampa, Westchase, Carrollwood, and ZIP{" "}
                {siteConfig.primaryZip}.{" "}
                <Link href="/handyman-westchase-fl" className="font-semibold text-[hsl(var(--primary))] hover:underline">
                  Book Westchase service
                </Link>{" "}
                or{" "}
                <Link href="/handyman-carrollwood-fl" className="font-semibold text-[hsl(var(--primary))] hover:underline">
                  Carrollwood service
                </Link>{" "}
                today and get drywall that looks like it was never damaged.
              </p>
            </div>

            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {[
                "Drywall patch Tampa specialists",
                "Ceiling texture repair matching",
                "Experienced wall repair contractor",
                "Paint-ready finishes & cleanup",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--accent))]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={`tel:${siteConfig.phoneTel}`} className="btn-accent inline-flex items-center justify-center gap-2" aria-label="Call Handyman Pros Florida Now">
                <Phone className="h-4 w-4" />
                Call Now {siteConfig.phone}
              </a>
              <Link href="/services/handyman/drywall-repair" className="btn-secondary inline-flex items-center justify-center">
                Related Drywall Services
              </Link>
            </div>
            <EntityFacts compact city="Tampa, FL" />
          </div>
        </div>
      </article>

      <FAQSection faqs={drywallTampaFaqs} title="Drywall Repair Tampa FAQ" />
      <RelatedContent category="handyman" slug="drywall-repair" />
      <CTASection
        title="Need a Drywall Patch in Tampa?"
        description="Call our wall repair contractor team for drywall patch Tampa jobs and ceiling texture repair — free estimates, open 24/7."
      />
    </>
  );
}
