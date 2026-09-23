import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FAQSection } from "@/components/faq-section";
import { HqDispatch } from "@/components/hq-dispatch";
import { GoogleListingCta } from "@/components/google-listing-cta";
import { QuoteForm } from "@/components/quote-form";
import { TrustBadges } from "@/components/trust-badges";
import { PhoneEstimateCta } from "@/components/phone-estimate-cta";
import { InternalLinkHub } from "@/components/internal-link-hub";
import { JsonLd, breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/json-ld";
import { coreServices, hrefForAreaName, type TargetLocation } from "@/lib/programmatic";
import { instantEstimate, serviceH1 } from "@/lib/instant-estimate";
import { siteConfig } from "@/lib/site-config";
import {
  authorityHubLinks,
  coreServiceLinks,
  fenceCategoryLinks,
  nearbyLocationLinks,
} from "@/lib/internal-links";
import { CheckCircle } from "lucide-react";

export function LocationCityLanding({ location }: { location: TargetLocation }) {
  const pageUrl = `${siteConfig.url}/locations/${location.slug}`;
  const nearby = nearbyLocationLinks(location.slug);

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
              {location.slug === "westchase-fl" ? (
                <p>
                  Same-day windows are most realistic here because the truck starts in ZIP 33626.{" "}
                  <Link href="/services/same-day-handyman" className="font-semibold text-[hsl(var(--primary))] hover:underline">
                    Same-day handyman in Tampa and Westchase
                  </Link>{" "}
                  explains which jobs fit today and which ones wait.
                </p>
              ) : null}
              {location.slug === "westchase-fl" ? (
                <p>
                  Westchase kitchens and baths are a short drive from headquarters.{" "}
                  <Link href="/services/tile-installation" className="font-semibold text-[hsl(var(--primary))] hover:underline">
                    Tile installation and replacement in Tampa and Westchase
                  </Link>{" "}
                  covers backsplashes, wall tile, floor sections, and cracked-tile patches.
                </p>
              ) : null}
              {location.slug === "westchase-fl" ? (
                <p>
                  Flat-pack deliveries and room moves are a short drive from headquarters.{" "}
                  <Link href="/services/furniture-assembly" className="font-semibold text-[hsl(var(--primary))] hover:underline">
                    Furniture assembly and rearrangement in Tampa and Westchase
                  </Link>{" "}
                  covers IKEA, Wayfair, and Amazon sets, plus in-home moves that do not need a truck.
                </p>
              ) : null}
              {location.slug === "westchase-fl" ? (
                <p>
                  Rooms of click-lock plank and damaged sections are a short drive from headquarters.{" "}
                  <Link href="/services/flooring-installation" className="font-semibold text-[hsl(var(--primary))] hover:underline">
                    Flooring installation and repair in Tampa and Westchase
                  </Link>{" "}
                  covers LVP, laminate, vinyl plank, and wood-section replacement.
                </p>
              ) : null}
              {nearby.length > 0 ? (
                <p>
                  From {location.city} we regularly continue to{" "}
                  {nearby.map((link, index) => (
                    <span key={link.href}>
                      {index > 0 ? (index === nearby.length - 1 ? ", and " : ", ") : null}
                      <Link
                        href={link.href}
                        className="font-medium text-[hsl(var(--primary))] hover:underline"
                      >
                        {link.label.replace(/^Handyman /, "").replace(/ FL$/, "")}
                      </Link>
                    </span>
                  ))}
                  . Those pages are service areas from the same Westchase headquarters.
                </p>
              ) : null}
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
              <li>
                <Link
                  href="/services/fence"
                  className="flex items-start gap-2 rounded-xl border border-[hsl(var(--border))] bg-white/70 px-4 py-3 text-sm font-medium hover:border-[hsl(var(--accent))]"
                >
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--accent))]" />
                  Fence Installation &amp; Repair in {location.city}
                </Link>
              </li>
              <li>
                <Link
                  href="/services/handyman/fan-installation"
                  className="flex items-start gap-2 rounded-xl border border-[hsl(var(--border))] bg-white/70 px-4 py-3 text-sm font-medium hover:border-[hsl(var(--accent))]"
                >
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--accent))]" />
                  Ceiling Fan Installation in {location.city}
                </Link>
              </li>
            </ul>
            <h2 className="mt-10 mb-3 text-2xl font-bold">{location.city} neighborhoods we visit</h2>
            <p className="mb-3 text-sm text-[hsl(var(--muted-foreground))]">
              Dispatched from our only Tampa / Westchase headquarters.
            </p>
            <ul className="flex flex-wrap gap-2 text-sm">
              {location.neighborhoods.map((item) => {
                const href = hrefForAreaName(item);
                const chipClass = "rounded-full bg-white px-3 py-1.5 shadow-sm";
                if (href && href !== `/locations/${location.slug}`) {
                  return (
                    <li key={item}>
                      <Link href={href} className={`${chipClass} text-[hsl(var(--primary))] hover:underline`}>
                        {item}
                      </Link>
                    </li>
                  );
                }
                return (
                  <li key={item} className={chipClass}>
                    {item}
                  </li>
                );
              })}
            </ul>

            <InternalLinkHub
              title={`Popular ${location.city} handyman services`}
              intro={`These links connect ${location.city} searches to our Tampa service pages so Google, Bing, and AI answers can follow the full Handyman Pros FL coverage map.`}
              links={coreServiceLinks(location.city)}
            />
            <InternalLinkHub
              title="Fence installation & repair options"
              links={fenceCategoryLinks}
            />
            <InternalLinkHub
              title="Nearby Tampa Bay areas we serve"
              links={[
                ...nearby,
                authorityHubLinks.tampa,
                authorityHubLinks.westchase,
                authorityHubLinks.oldsmar,
                authorityHubLinks.carrollwood,
                authorityHubLinks.clearwater,
                authorityHubLinks.stPete,
                authorityHubLinks.locations,
              ].filter(
                (link, index, list) =>
                  link.href !== `/locations/${location.slug}` &&
                  list.findIndex((item) => item.href === link.href) === index
              )}
            />
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
