import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";
import { FAQSection } from "@/components/faq-section";
import { GoogleReviews } from "@/components/google-reviews";
import { JsonLd, breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/json-ld";
import type { MarketingPage } from "@/lib/marketing-pages";
import { briefServiceAreaGroups, briefCountiesIntro } from "@/lib/brief-service-areas";
import { formatFullAddress } from "@/lib/local-seo";
import { siteConfig } from "@/lib/site-config";

export function MarketingPageView({ page }: { page: MarketingPage }) {
  const pageUrl = `${siteConfig.url}${page.path}`;
  const breadcrumbs = page.breadcrumbs ?? [
    { name: "Home", url: siteConfig.url },
    ...(page.hubPath && page.hubLabel
      ? [{ name: page.hubLabel, url: `${siteConfig.url}${page.hubPath}` }]
      : []),
    { name: page.h1, url: pageUrl },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          serviceSchema({
            name: page.schemaServiceName ?? page.h1,
            description: page.metaDescription,
            url: pageUrl,
            category: page.schemaCategory ?? "Handyman",
            serviceType: page.schemaServiceType ?? page.schemaServiceName ?? page.h1,
            areaName: page.areaName ?? "Tampa Bay, FL",
            offer: { description: "Free estimate, call or text for a price" },
          }),
          faqSchema(page.faqs),
        ]}
      />
      <Breadcrumbs
        items={[
          ...(page.hubPath && page.hubLabel
            ? [{ label: page.hubLabel, href: page.hubPath }]
            : []),
          { label: page.breadcrumbLabel ?? page.h1 },
        ]}
      />
      <article className="section-padding">
        <div className="container-site">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-4 text-4xl font-bold">{page.h1}</h1>
            {page.trustStrip ? (
              <p className="mb-6 rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--muted))]/40 px-4 py-3 text-sm font-semibold leading-relaxed">
                {page.trustStrip}
              </p>
            ) : null}
            {page.heroImage ? (
              <div className="relative mb-8 aspect-[16/10] overflow-hidden rounded-2xl">
                <Image
                  src={page.heroImage.src}
                  alt={page.heroImage.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 720px"
                  className="object-cover"
                />
              </div>
            ) : null}
            <div className="prose-content space-y-5 text-base leading-relaxed">
              {page.intro ? <p className="text-lg text-[hsl(var(--muted-foreground))]">{page.intro}</p> : null}
              {page.paragraphs.map((p) => (
                <p key={p.slice(0, 48)}>{p}</p>
              ))}
            </div>
            {page.sections?.map((section) => (
              <div key={section.heading} className="mt-10">
                <h2 className="mb-4 text-2xl font-bold">{section.heading}</h2>
                <div className="space-y-4 leading-relaxed">
                  {section.paragraphs.map((p) => (
                    <p key={p.slice(0, 48)}>{p}</p>
                  ))}
                </div>
                {section.bullets?.length ? (
                  <ul className="mt-4 list-disc space-y-2 pl-6">
                    {section.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
            {page.childLinks?.length ? (
              <div className="mt-10">
                <h2 className="mb-4 text-2xl font-bold">{page.childLinksTitle ?? "Related pages"}</h2>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {page.childLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="block rounded-xl border border-[hsl(var(--border))] px-4 py-3 font-semibold text-[hsl(var(--primary))] hover:bg-[hsl(var(--muted))]/30"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            {page.showAreas ? (
              <div className="mt-10">
                <h2 className="mb-3 text-2xl font-bold">Areas we serve</h2>
                <p className="mb-4 text-sm text-[hsl(var(--muted-foreground))]">{briefCountiesIntro}</p>
                <div className="grid gap-6 sm:grid-cols-3">
                  {briefServiceAreaGroups.map((group) => (
                    <div key={group.county}>
                      <h3 className="mb-2 font-bold">{group.county} County</h3>
                      <ul className="space-y-1 text-sm">
                        {group.cities.map((city) => (
                          <li key={city.href}>
                            <Link href={city.href} className="text-[hsl(var(--primary))] hover:underline">
                              {city.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
            {page.showNap ? (
              <div className="mt-10 rounded-2xl border border-[hsl(var(--border))] p-6">
                <h2 className="mb-2 text-xl font-bold">Contact</h2>
                <p className="text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
                  {formatFullAddress()} ·{" "}
                  <a href={`tel:${siteConfig.phoneTel}`} className="font-semibold text-[hsl(var(--primary))]">
                    {siteConfig.phone}
                  </a>
                  . Instant reply, 24/7. Hablamos español —{" "}
                  <Link href="/es" className="font-semibold text-[hsl(var(--primary))] hover:underline">
                    servicios en español
                  </Link>
                  .
                </p>
              </div>
            ) : null}
            <p className="mt-8">
              <a
                href={`tel:${siteConfig.phoneTel}`}
                className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--primary))] px-6 py-3 font-bold text-white"
              >
                <Phone className="h-4 w-4" aria-hidden />
                Call {siteConfig.phone}
              </a>
            </p>
          </div>
        </div>
      </article>
      <FAQSection faqs={page.faqs} title={page.faqTitle ?? "FAQs"} />
      <GoogleReviews variant="compact" />
      <CTASection title={page.ctaTitle ?? "Request a free estimate"} />
    </>
  );
}
