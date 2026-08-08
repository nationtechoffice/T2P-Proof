import Link from "next/link";
import { Fragment, type ReactNode } from "react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";
import { GoogleReviews } from "@/components/google-reviews";
import { JsonLd, breadcrumbSchema, speakableSchema } from "@/lib/json-ld";
import type { LocationSilo } from "@/lib/location-silos";
import { siteConfig } from "@/lib/site-config";
import { CheckCircle, MapPin, Phone } from "lucide-react";

function withClickToCall(text: string): ReactNode {
  const parts = text.split(siteConfig.phone);
  if (parts.length === 1) return text;
  return parts.map((part, index) => (
    <Fragment key={`${part}-${index}`}>
      {part}
      {index < parts.length - 1 && (
        <a
          href={`tel:${siteConfig.phoneTel}`}
          className="font-semibold text-[hsl(var(--accent))] hover:underline"
        >
          {siteConfig.phone}
        </a>
      )}
    </Fragment>
  ));
}

export function LocationLanding({ location }: { location: LocationSilo }) {
  const pageUrl = `${siteConfig.url}${location.path}`;
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(location.mapQuery)}&z=13&output=embed`;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Service Areas", url: `${siteConfig.url}/service-areas` },
            { name: `Handyman ${location.city} FL`, url: pageUrl },
          ]),
          speakableSchema(pageUrl, [".location-intro", ".location-body"]),
        ]}
      />
      <Breadcrumbs
        items={[
          { label: "Service Areas", href: "/service-areas" },
          { label: `Handyman ${location.city} FL` },
        ]}
      />

      <article className="section-padding relative">
        <div className="container-site">
          <div className="mx-auto max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[hsl(var(--accent))]">
              {location.eyebrow}
            </p>
            <h1 className="mb-4 text-4xl font-bold">{location.h1}</h1>
            <p className="location-intro mb-6 text-xl leading-relaxed text-[hsl(var(--muted-foreground))]">
              {location.intro}
            </p>

            <div className="mb-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={`tel:${siteConfig.phoneTel}`}
                className="btn-accent inline-flex items-center justify-center gap-2"
              >
                <Phone className="h-4 w-4" />
                Call {siteConfig.phone}
              </a>
              <Link href="/contact" className="btn-secondary inline-flex items-center justify-center">
                Request Free Estimate
              </Link>
            </div>

            <div className="location-body space-y-5 text-base leading-relaxed text-[hsl(var(--foreground))]">
              {location.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{withClickToCall(paragraph)}</p>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-[hsl(var(--border))] bg-white/70 p-6">
              <h2 className="mb-4 text-2xl font-bold">
                Popular {location.city} Handyman Services
              </h2>
              <ul className="grid gap-3 sm:grid-cols-2">
                {location.services.map((service) => (
                  <li key={service} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--accent))]" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-8 text-sm text-[hsl(var(--muted-foreground))]">
              Ready to book? Call{" "}
              <a
                href={`tel:${siteConfig.phoneTel}`}
                className="font-semibold text-[hsl(var(--accent))] hover:underline"
              >
                {siteConfig.phone}
              </a>{" "}
              anytime — Handyman Pros FL is open 24/7 for {location.city} estimates.
            </p>

            {location.relatedPaths && location.relatedPaths.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-3">
                {location.relatedPaths.map((link) => (
                  <Link key={link.href} href={link.href} className="btn-secondary !py-2 !text-xs">
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <section className="mx-auto mt-16 max-w-4xl" aria-labelledby={`${location.slug}-map-heading`}>
            <div className="mb-4 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-[hsl(var(--accent))]" />
              <h2 id={`${location.slug}-map-heading`} className="text-2xl font-bold">
                {location.city} Service Area Map
              </h2>
            </div>
            <p className="mb-4 text-sm text-[hsl(var(--muted-foreground))]">
              Explore the {location.displayName} area we serve for local handyman visits.
            </p>
            <div className="overflow-hidden rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--muted))] shadow-sm">
              <iframe
                title={location.mapTitle}
                src={mapSrc}
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
      <CTASection
        title={`Need a Handyman in ${location.city}?`}
        description={`Call Handyman Pros FL at ${siteConfig.phone} for local repairs, installs, and 24/7 estimates across ${location.displayName}.`}
      />
    </>
  );
}
