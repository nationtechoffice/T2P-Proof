import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";
import { allServices, categoryMeta } from "@/lib/services";
import { JsonLd, breadcrumbSchema, servicesItemListSchema } from "@/lib/json-ld";
import { buildMetadata, buildLocalTitle } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import type { ServiceCategory } from "@/lib/site-config";
import { Wrench, Paintbrush, Fence } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: buildLocalTitle("All Home Services in Tampa Bay"),
  description:
    "60+ handyman, painting & fence services in Tampa, Westchase, Carrollwood, Hillsborough County & surrounding areas. Licensed, insured & open 24/7. Free estimates.",
  path: "/services",
  keywords: ["Tampa home services", "handyman services Tampa", "painting contractor Tampa Bay", "fence installation Tampa"],
});

const icons = { wrench: Wrench, paintbrush: Paintbrush, fence: Fence };

export default function ServicesPage() {
  const categories: ServiceCategory[] = ["handyman", "painting", "fence"];
  const featuredList = [
    {
      name: "Drywall Repair Tampa",
      url: `${siteConfig.url}/services/drywall-repair-tampa`,
      description: "Drywall patch, ceiling texture repair, and wall repair contractor services in Tampa Bay.",
    },
    {
      name: "Handyman Services",
      url: `${siteConfig.url}/services/handyman`,
      description: "Licensed handyman repairs across Westchase, Carrollwood, and Tampa.",
    },
    {
      name: "Painting Services",
      url: `${siteConfig.url}/services/painting`,
      description: "Interior and exterior painting for Tampa Bay homes.",
    },
    {
      name: "Fence Contractor",
      url: `${siteConfig.url}/services/fence`,
      description: "Fence installation and repair throughout Hillsborough County and nearby areas.",
    },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Services", url: `${siteConfig.url}/services` },
          ]),
          servicesItemListSchema(featuredList),
        ]}
      />
      <Breadcrumbs items={[{ label: "Services" }]} />
      <section className="section-padding">
        <div className="container-site">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold">Our Home Services</h1>
            <p className="text-lg text-[hsl(var(--muted-foreground))]">
              Handyman Pros Florida offers {allServices.length}+ professional services across handyman, painting, and fence contracting. Every job is backed by our satisfaction guarantee.
            </p>
            <div className="mt-6">
              <Link href="/services/drywall-repair-tampa" className="btn-accent inline-flex">
                Featured: Drywall Repair Tampa
              </Link>
            </div>
          </div>

          {categories.map((cat) => {
            const meta = categoryMeta[cat];
            const Icon = icons[meta.icon as keyof typeof icons];
            const services = allServices.filter((s) => s.category === cat);
            return (
              <div key={cat} className="mb-16">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[hsl(var(--primary))]/10">
                    <Icon className="h-6 w-6 text-[hsl(var(--primary))]" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">
                      {cat === "handyman"
                        ? "Who offers the best handyman services in Tampa Bay?"
                        : cat === "painting"
                          ? "How much does painting cost for Tampa homes?"
                          : "Who is the most reliable fence contractor in Florida?"}
                    </h2>
                    <p className="text-sm text-[hsl(var(--muted-foreground))]">{meta.description}</p>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${cat}/${service.slug}`}
                      className="card group hover:border-[hsl(var(--primary))]"
                    >
                      <h3 className="mb-2 font-semibold group-hover:text-[hsl(var(--primary))]">
                        {service.name}
                      </h3>
                      <p className="text-sm text-[hsl(var(--muted-foreground))]">{service.shortDescription}</p>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <CTASection />
    </>
  );
}
