import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CoreServiceLanding } from "@/components/core-service-landing";
import { CTASection } from "@/components/cta-section";
import { FAQSection } from "@/components/faq-section";
import { categoryMeta, getServicesByCategory } from "@/lib/services";
import { coreServices, getCoreService, serviceMetaDescription, serviceMetaTitle } from "@/lib/programmatic";
import { buildMetadata } from "@/lib/seo";
import type { ServiceCategory } from "@/lib/site-config";
import { JsonLd, breadcrumbSchema, faqSchema, imageGallerySchema, serviceSchema } from "@/lib/json-ld";
import { siteConfig } from "@/lib/site-config";
import { InternalLinkHub } from "@/components/internal-link-hub";
import { ServicePhotoGallery } from "@/components/service-photo-gallery";
import { tampaBayLocationLinks, fenceCategoryLinks, authorityHubLinks } from "@/lib/internal-links";
import { galleryForPage } from "@/lib/service-galleries";
import { fenceHandymanService } from "@/lib/tampa-bay-expansion";
import { moneyNeighborhoodSpots } from "@/lib/tampa-neighborhoods";
import { NeighborhoodBlocks } from "@/components/neighborhood-blocks";

/** Merged from the retired /services/handyman/painting page (now 308s here). */
const paintingFaqs = [
  {
    question: "Do you offer free painting estimates?",
    answer: `Yes. Painting estimates are free. Call ${siteConfig.phone} or send photos of the rooms or exterior, and we can talk through colors and finish before the visit.`,
  },
];

/** Fence repair towns, merged from the retired /services/fence-handyman page (now 308s here). */
const fenceRepairTowns = [
  { href: "/locations/plant-city", label: "Plant City" },
  { href: "/locations/brandon", label: "Brandon" },
  { href: "/locations/riverview", label: "Riverview" },
  { href: "/locations/lutz", label: "Lutz" },
  { href: "/locations/wesley-chapel", label: "Wesley Chapel" },
  { href: "/locations/land-o-lakes", label: "Land O' Lakes" },
  { href: "/locations/spring-hill", label: "Spring Hill" },
  { href: "/locations/largo", label: "Largo" },
  { href: "/locations/seminole", label: "Seminole" },
  { href: "/locations/pinellas-park", label: "Pinellas Park" },
];

const validCategories: ServiceCategory[] = ["handyman", "painting", "fence"];

/** Handyman cards whose /services/handyman/* paths 301/308. Point at the live page. */
const handymanCanonicalHref: Record<string, string> = {
  "drywall-repair": "/services/drywall-repair",
  "tv-mounting": "/services/tv-wall-mounting",
  "flooring-repair": "/services/flooring-installation",
  "install-flooring": "/services/flooring-installation",
  "repair-flooring": "/services/flooring-installation",
};

export function generateStaticParams() {
  return [
    ...validCategories.map((category) => ({ category })),
    ...coreServices.map((service) => ({ category: service.slug })),
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  const core = getCoreService(category);
  if (core) {
    const photo = galleryForPage(core.slug)[0];
    return buildMetadata({
      title: serviceMetaTitle(core.name, "Tampa"),
      description: serviceMetaDescription(core.name, "Tampa"),
      path: `/services/${core.slug}`,
      keywords: [core.keyword, `${core.name} Tampa`, `${core.name} Westchase`],
      exactTitle: true,
      ogImage: photo ? `${siteConfig.url}${photo.src}` : undefined,
      ogAlt: photo?.alt,
    });
  }
  if (!validCategories.includes(category as ServiceCategory)) return {};
  const meta = categoryMeta[category as ServiceCategory];
  return buildMetadata({
    title: meta.metaTitle,
    description: meta.metaDescription,
    path: `/services/${category}`,
    keywords: [meta.name, `${meta.name} Tampa`, `${meta.name} Westchase`, `${meta.name} Hillsborough County`],
    exactTitle: true,
  });
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const core = getCoreService(category);
  if (core) return <CoreServiceLanding service={core} />;
  if (!validCategories.includes(category as ServiceCategory)) notFound();

  const cat = category as ServiceCategory;
  const meta = categoryMeta[cat];
  const services = getServicesByCategory(cat);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Services", url: `${siteConfig.url}/services` },
            { name: meta.name, url: `${siteConfig.url}/services/${category}` },
          ]),
          ...(cat === "fence"
            ? [
                serviceSchema({
                  name: fenceHandymanService.name,
                  description: fenceHandymanService.intro,
                  url: `${siteConfig.url}/services/fence`,
                  category: "Fence repair",
                  areaName: "Tampa, FL",
                  images: galleryForPage("fence").map((photo) => photo.src),
                  offer: fenceHandymanService.offer,
                }),
                faqSchema(fenceHandymanService.faqs),
              ]
            : []),
          ...(cat === "painting" ? [faqSchema(paintingFaqs)] : []),
          ...(cat === "handyman" || cat === "painting"
            ? [
                imageGallerySchema({
                  name: cat === "handyman" ? "Home repair photos in Tampa" : `${meta.name} photos in Tampa`,
                  url: `${siteConfig.url}/services/${category}`,
                  photos: cat === "handyman" ? galleryForPage("general-repairs") : galleryForPage(cat),
                }),
              ]
            : []),
        ]}
      />
      <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: meta.name }]} />
      <section className="section-padding">
        <div className="container-site">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold">{meta.title}</h1>
            <p className="text-lg text-[hsl(var(--muted-foreground))]">{meta.description}</p>
            <p className="mt-4 text-sm text-[hsl(var(--muted-foreground))]">
              Every {meta.name.toLowerCase()} job is dispatched from our single Westchase, Tampa headquarters.
            </p>
            {cat === "fence" ? (
              <p className="mt-4 text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
                For a fence handyman or fencing handyman repair — pickets, a gate, or a short matching section — see{" "}
                <a href="#fence-handyman" className="font-medium text-[hsl(var(--primary))] hover:underline">
                  fence handyman repairs
                </a>{" "}
                below. The service list is material-specific work from the same licensed and insured crew. We are a handyman company, not a separate fencing contractor.
              </p>
            ) : null}
          </div>
          {cat === "fence" || cat === "painting" || cat === "handyman" ? (
            <ServicePhotoGallery
              photos={cat === "handyman" ? galleryForPage("general-repairs") : galleryForPage(cat)}
              title={cat === "handyman" ? "Home repair photos in Tampa" : `${meta.name} photos in Tampa`}
            />
          ) : null}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cat === "handyman" &&
              coreServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="card group hover:border-[hsl(var(--accent))]"
                >
                  <h2 className="mb-2 text-lg font-semibold group-hover:text-[hsl(var(--primary))]">
                    {service.slug === "flooring-installation" ? "Flooring Installation & Repair" : `${service.name} in Tampa, FL`}
                  </h2>
                  <p className="text-sm text-[hsl(var(--muted-foreground))]">{service.intro}</p>
                </Link>
              ))}
            {services
              .filter(
                (service) =>
                  !(
                    cat === "handyman" &&
                    (service.slug === "furniture-assembly" || service.slug === "gutter-cleaning")
                  )
              )
              .map((service) => (
              <Link
                key={service.slug}
                href={
                  cat === "handyman"
                    ? (handymanCanonicalHref[service.slug] ?? `/services/${category}/${service.slug}`)
                    : `/services/${category}/${service.slug}`
                }
                className="card group hover:border-[hsl(var(--primary))]"
              >
                <h2 className="mb-2 text-lg font-semibold group-hover:text-[hsl(var(--primary))]">
                  {service.name}
                </h2>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">{service.shortDescription}</p>
              </Link>
            ))}
          </div>
          {cat === "fence" ? (
            <div id="fence-handyman" className="mx-auto mt-14 max-w-3xl scroll-mt-28">
              <h2 className="mb-4 text-3xl font-bold">Fence handyman repairs in Tampa Bay</h2>
              <p className="service-definition mb-4 text-lg leading-relaxed">{fenceHandymanService.intro}</p>
              <div className="space-y-4 leading-relaxed text-[hsl(var(--muted-foreground))]">
                {fenceHandymanService.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
              <ul className="mt-6 list-disc space-y-2 pl-6">
                {fenceHandymanService.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <p className="mt-6 leading-relaxed text-[hsl(var(--muted-foreground))]">
                Fence repair towns we visit most from Westchase:{" "}
                {fenceRepairTowns.map((town, i) => (
                  <span key={town.href}>
                    <Link href={town.href} className="font-semibold text-[hsl(var(--primary))] hover:underline">
                      {town.label}
                    </Link>
                    {i < fenceRepairTowns.length - 1 ? ", " : "."}
                  </span>
                ))}
              </p>
              {moneyNeighborhoodSpots["fence-handyman"] ? (
                <NeighborhoodBlocks
                  title="Fence repair in Hyde Park, Seminole Heights, and New Tampa"
                  intro="How fence handyman work shows up in these Tampa neighborhoods. Each link is a service area from Westchase, not another office."
                  spots={moneyNeighborhoodSpots["fence-handyman"]}
                />
              ) : null}
            </div>
          ) : null}
        </div>
      </section>
      {cat === "fence" ? <FAQSection faqs={fenceHandymanService.faqs} title="Fence Handyman FAQs" /> : null}
      {cat === "painting" ? <FAQSection faqs={paintingFaqs} title="Painting FAQs" /> : null}
      <section className="section-padding pt-0">
        <div className="container-site">
          <InternalLinkHub
            title={`${meta.name} across Tampa Bay`}
            intro="Internal links help search engines and AI assistants connect this service hub to the cities we actually serve from Westchase HQ."
            links={tampaBayLocationLinks()}
          />
          {cat === "fence" ? (
            <InternalLinkHub title="Fence service details" links={fenceCategoryLinks} />
          ) : (
            <InternalLinkHub
              title="Related Tampa service hubs"
              links={[
                authorityHubLinks.fence,
                authorityHubLinks.drywall,
                authorityHubLinks.tvMount,
                authorityHubLinks.tile,
                authorityHubLinks.flooring,
                authorityHubLinks.gutters,
                authorityHubLinks.furniture,
                authorityHubLinks.fans,
                authorityHubLinks.sameDay,
                authorityHubLinks.services,
              ]}
            />
          )}
        </div>
      </section>
      <CTASection title={`Need ${meta.name}?`} />
    </>
  );
}
