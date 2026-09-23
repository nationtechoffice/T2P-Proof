import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FAQSection } from "@/components/faq-section";
import { HqDispatch } from "@/components/hq-dispatch";
import { GoogleListingCta } from "@/components/google-listing-cta";
import { QuoteForm } from "@/components/quote-form";
import { TrustBadges } from "@/components/trust-badges";
import { PhoneEstimateCta } from "@/components/phone-estimate-cta";
import { JsonLd, breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/json-ld";
import type { CoreService } from "@/lib/programmatic";
import { targetLocations } from "@/lib/programmatic";
import { instantEstimate, serviceH1 } from "@/lib/instant-estimate";
import { siteConfig } from "@/lib/site-config";
import { CheckCircle } from "lucide-react";
import { ServicePhotoGallery } from "@/components/service-photo-gallery";
import { galleryForPage } from "@/lib/service-galleries";
import { authorityHubLinks } from "@/lib/internal-links";

export function CoreServiceLanding({ service }: { service: CoreService }) {
  const pageUrl = `${siteConfig.url}/services/${service.slug}`;
  const photos = galleryForPage(service.slug);
  const primaryImage = photos[0]?.src;
  const relatedServices = [
    authorityHubLinks.drywall,
    authorityHubLinks.tvMount,
    authorityHubLinks.tile,
    authorityHubLinks.fans,
    authorityHubLinks.sameDay,
    authorityHubLinks.westchase,
  ].filter((link) => link.href !== `/services/${service.slug}`);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Services", url: `${siteConfig.url}/services` },
            { name: service.name, url: pageUrl },
          ]),
          serviceSchema({
            name: service.name,
            description: service.intro,
            url: pageUrl,
            category: "Handyman",
            areaName: "Tampa, FL",
            image: primaryImage,
            offer: service.offer,
          }),
          faqSchema(service.faqs),
        ]}
      />
      <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: service.name }]} />
      <article className="section-padding">
        <div className="container-site grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[hsl(var(--accent))]">
              Instant Phone Estimates · 24/7 Tampa Bay
            </p>
            <h1 className="mb-4 text-4xl font-bold">{serviceH1(service.name, "Tampa")}</h1>
            <p className="mb-4 text-xl font-semibold text-[hsl(var(--primary))]">{instantEstimate.heroHeadline}</p>
            <p className="mb-6 text-xl leading-relaxed text-[hsl(var(--muted-foreground))]">{service.intro}</p>
            <div className="mb-6">
              <TrustBadges />
            </div>
            <div className="mb-8 flex flex-col gap-3 sm:flex-row">
              <PhoneEstimateCta />
              <Link href="#instant-quote" className="btn-secondary inline-flex items-center justify-center">
                Or send job details
              </Link>
            </div>
            <ServicePhotoGallery photos={photos} title={`${service.name} photos in Tampa`} />
            <div className="space-y-4 leading-relaxed text-[hsl(var(--muted-foreground))]">
              {service.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
            <h2 className="mt-10 mb-4 text-2xl font-bold">
              {service.name} in Tampa, Westchase &amp; Clearwater
            </h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {service.bullets.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--accent))]" />
                  {item}
                </li>
              ))}
            </ul>
            <h2 className="mt-10 mb-4 text-2xl font-bold">Related Tampa Bay services</h2>
            <ul className="mb-8 flex flex-wrap gap-2 text-sm">
              {relatedServices.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="rounded-full bg-white px-3 py-1.5 shadow-sm hover:text-[hsl(var(--accent))]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h2 className="mt-10 mb-4 text-2xl font-bold">{service.name} near you in Tampa Bay</h2>
            <ul className="flex flex-wrap gap-2 text-sm">
              {targetLocations.map((location) => (
                <li key={location.slug}>
                  <Link
                    href={`/locations/${location.slug}`}
                    className="rounded-full bg-white px-3 py-1.5 shadow-sm hover:text-[hsl(var(--accent))]"
                  >
                    {location.city}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <HqDispatch />
            </div>
            <div className="mt-6">
              <GoogleListingCta />
            </div>
          </div>
          <div id="instant-quote" className="lg:sticky lg:top-24 h-fit">
            <QuoteForm defaultService={service.slug} defaultCity="Tampa" heading={`Quote ${service.name}`} />
          </div>
        </div>
      </article>
      <FAQSection faqs={service.faqs} title={`${service.name} in Tampa FAQ`} />
    </>
  );
}
