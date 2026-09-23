import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CoreServiceLanding } from "@/components/core-service-landing";
import { CTASection } from "@/components/cta-section";
import { categoryMeta, getServicesByCategory } from "@/lib/services";
import { coreServices, getCoreService, serviceMetaDescription, serviceMetaTitle } from "@/lib/programmatic";
import { buildMetadata } from "@/lib/seo";
import type { ServiceCategory } from "@/lib/site-config";
import { JsonLd, breadcrumbSchema } from "@/lib/json-ld";
import { siteConfig } from "@/lib/site-config";
import { InternalLinkHub } from "@/components/internal-link-hub";
import { ServicePhotoGallery } from "@/components/service-photo-gallery";
import { tampaBayLocationLinks, fenceCategoryLinks, authorityHubLinks } from "@/lib/internal-links";
import { galleryForPage } from "@/lib/service-galleries";

const validCategories: ServiceCategory[] = ["handyman", "painting", "fence"];

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
    title: meta.title,
    description: meta.description,
    path: `/services/${category}`,
    keywords: [meta.name, `${meta.name} Tampa`, `${meta.name} Westchase`, `${meta.name} Hillsborough County`],
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
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Services", url: `${siteConfig.url}/services` },
          { name: meta.name, url: `${siteConfig.url}/services/${category}` },
        ])}
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
          </div>
          {cat === "fence" || cat === "painting" ? (
            <ServicePhotoGallery
              photos={galleryForPage(cat)}
              title={`${meta.name} photos in Tampa`}
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
                    {service.name} in Tampa, FL
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
                href={`/services/${category}/${service.slug}`}
                className="card group hover:border-[hsl(var(--primary))]"
              >
                <h2 className="mb-2 text-lg font-semibold group-hover:text-[hsl(var(--primary))]">
                  {service.name}
                </h2>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">{service.shortDescription}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
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
