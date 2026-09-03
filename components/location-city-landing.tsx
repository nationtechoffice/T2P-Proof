import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FAQSection } from "@/components/faq-section";
import { HqDispatch } from "@/components/hq-dispatch";
import { GoogleListingCta } from "@/components/google-listing-cta";
import { QuoteForm } from "@/components/quote-form";
import { TrustBadges } from "@/components/trust-badges";
import { PhoneEstimateCta } from "@/components/phone-estimate-cta";
import { JsonLd, breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/json-ld";
import { coreServices, type TargetLocation } from "@/lib/programmatic";
import { instantEstimate, serviceH1 } from "@/lib/instant-estimate";
import { siteConfig } from "@/lib/site-config";
import { CheckCircle } from "lucide-react";

export function LocationCityLanding({ location }: { location: TargetLocation }) {
  const pageUrl = `${siteConfig.url}/locations/${location.slug}`;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Locations", url: `${siteConfig.url}/locations` },
            { name: `Handyman ${location.city}`, url: pageUrl },
          ]),
          serviceSchema({
            name: "Handyman service",
            description: location.intro,
            url: pageUrl,
            category: "Handyman",
            areaName: location.displayName,
          }),
          faqSchema(location.faqs),
        ]}
      />
      <Breadcrumbs
        items={[
          { label: "Locations", href: "/locations" },
          { label: `Handyman ${location.city}` },
        ]}
      />
      <article className="section-padding">
        <div className="container-site grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[hsl(var(--accent))]">
              Instant Phone Estimates · {location.county}
            </p>
            <h1 className="mb-4 text-4xl font-bold">{serviceH1("Handyman", location.city)}</h1>
            <p className="mb-4 text-xl font-semibold text-[hsl(var(--primary))]">{instantEstimate.heroHeadline}</p>
            <p className="mb-6 text-xl leading-relaxed text-[hsl(var(--muted-foreground))]">{location.intro}</p>
            <div className="mb-6">
              <TrustBadges />
            </div>
            <div className="mb-8 flex flex-col gap-3 sm:flex-row">
              <PhoneEstimateCta />
              <Link href="#instant-quote" className="btn-secondary inline-flex items-center justify-center">
                Or send job details
              </Link>
            </div>
            <div className="space-y-4 leading-relaxed text-[hsl(var(--muted-foreground))]">
              {location.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
            <h2 className="mt-10 mb-4 text-2xl font-bold">
              Home repairs we handle in {location.city}, FL
            </h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {coreServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="flex items-start gap-2 rounded-xl border border-[hsl(var(--border))] bg-white/70 px-4 py-3 text-sm font-medium hover:border-[hsl(var(--accent))]"
                  >
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--accent))]" />
                    {service.name} in {location.city}
                  </Link>
                </li>
              ))}
            </ul>
            <h2 className="mt-10 mb-3 text-2xl font-bold">{location.city} neighborhoods we visit</h2>
            <p className="mb-3 text-sm text-[hsl(var(--muted-foreground))]">
              Dispatched from our only Tampa / Westchase headquarters.
            </p>
            <ul className="flex flex-wrap gap-2 text-sm">
              {location.neighborhoods.map((item) => (
                <li key={item} className="rounded-full bg-white px-3 py-1.5 shadow-sm">
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <HqDispatch area={location.displayName} />
            </div>
            <div className="mt-6">
              <GoogleListingCta />
            </div>
          </div>
          <div id="instant-quote" className="lg:sticky lg:top-24 h-fit">
            <QuoteForm defaultCity={location.city} heading={`Quote a ${location.city} job`} />
          </div>
        </div>
      </article>
      <FAQSection faqs={location.faqs} title={`Handyman in ${location.city} FAQ`} />
    </>
  );
}
