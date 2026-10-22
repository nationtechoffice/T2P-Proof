import Link from "next/link";
import { GuideLinks } from "@/components/guide-links";
import Image from "next/image";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";
import { FAQSection } from "@/components/faq-section";
import { JsonLd, breadcrumbSchema, briefServiceGraphSchema, speakableSchema } from "@/lib/json-ld";
import type { BriefServicePage } from "@/lib/brief-service-pages";
import {
  briefCountiesIntro,
  briefPlainTextCities,
  briefServiceAreaGroups,
  REPLY_LINE,
} from "@/lib/brief-service-areas";
import { siteConfig } from "@/lib/site-config";
import { ServicePhotoGallery } from "@/components/service-photo-gallery";
import { galleryForPage } from "@/lib/service-galleries";
import { GoogleReviews } from "@/components/google-reviews";
import { Phone } from "lucide-react";

export function BriefServiceLanding({ page }: { page: BriefServicePage }) {
  const pageUrl = `${siteConfig.url}/services/${page.slug}`;
  const photos = page.gallerySlug ? galleryForPage(page.gallerySlug) : galleryForPage(page.slug);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Services", url: `${siteConfig.url}/services` },
            { name: page.name, url: pageUrl },
          ]),
          briefServiceGraphSchema({
            serviceName: page.schemaName ?? page.name,
            serviceType: page.schemaName ?? page.name,
            url: pageUrl,
            faqs: page.faqs,
          }),
          speakableSchema(pageUrl, ["h1", ".at-a-glance", ".faq-answer"]),
        ]}
      />
      <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: page.name }]} />
      <article className="section-padding">
        <div className="container-site">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-6 text-4xl font-bold">{page.h1}</h1>

            <div className="at-a-glance mb-10 rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--muted))]/40 p-6">
              <h2 className="mb-4 text-lg font-bold">At a glance</h2>
              <dl className="grid gap-3 text-sm sm:grid-cols-2">
                <div>
                  <dt className="font-semibold text-[hsl(var(--foreground))]">Price</dt>
                  <dd className="text-[hsl(var(--muted-foreground))]">{page.atGlance.price}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-[hsl(var(--foreground))]">Typical job</dt>
                  <dd className="text-[hsl(var(--muted-foreground))]">{page.atGlance.typicalJob}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-[hsl(var(--foreground))]">Who it&apos;s for</dt>
                  <dd className="text-[hsl(var(--muted-foreground))]">{page.atGlance.whoFor}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-[hsl(var(--foreground))]">Insured</dt>
                  <dd className="text-[hsl(var(--muted-foreground))]">{page.atGlance.insured}</dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="font-semibold text-[hsl(var(--foreground))]">Reply</dt>
                  <dd className="text-[hsl(var(--muted-foreground))]">{REPLY_LINE}</dd>
                </div>
              </dl>
            </div>

            {photos.length > 0 ? (
              <ServicePhotoGallery photos={photos} title={`${page.name} photos in Tampa Bay`} />
            ) : null}

            <div className="prose-content space-y-5 text-base leading-relaxed text-[hsl(var(--foreground))]">
              {page.intro ? <p className="text-lg text-[hsl(var(--muted-foreground))]">{page.intro}</p> : null}
              {page.bodyParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>

            {page.extraSections?.map((section) => (
              <div key={section.heading} className="mt-10">
                <h2 className="mb-4 text-2xl font-bold">{section.heading}</h2>
                <div className="space-y-4 leading-relaxed text-[hsl(var(--foreground))]">
                  {section.paragraphs.map((p) => (
                    <p key={p.slice(0, 48)}>{p}</p>
                  ))}
                </div>
                {section.links?.length ? (
                  <p className="mt-4 text-sm">
                    {section.links.map((link, i) => (
                      <span key={link.href}>
                        {i > 0 ? " · " : null}
                        <Link href={link.href} className="font-semibold text-[hsl(var(--primary))] hover:underline">
                          {link.label}
                        </Link>
                      </span>
                    ))}
                  </p>
                ) : null}
              </div>
            ))}

            <h2 className="mb-4 mt-10 text-2xl font-bold">How our crew does it</h2>
            <ol className="list-decimal space-y-2 pl-5 leading-relaxed">
              {page.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>

            <h2 className="mb-4 mt-10 text-2xl font-bold">Material options</h2>
            <ul className="list-disc space-y-2 pl-5 leading-relaxed">
              {page.materials.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h2 className="mb-4 mt-10 text-2xl font-bold">Safety notes</h2>
            <ul className="list-disc space-y-2 pl-5 leading-relaxed">
              {page.safety.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h2 className="mb-4 mt-10 text-2xl font-bold">Areas we serve</h2>
            <p className="mb-6 leading-relaxed">{briefCountiesIntro}</p>
            <div className="space-y-6">
              {briefServiceAreaGroups.map((group) => (
                <div key={group.county}>
                  <h3 className="mb-2 font-semibold">{group.county}</h3>
                  <ul className="grid gap-1 sm:grid-cols-2">
                    {group.cities.map((city) => (
                      <li key={city.href}>
                        <Link href={city.href} className="text-sm text-[hsl(var(--primary))] hover:underline">
                          Our crew serves {city.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-[hsl(var(--muted-foreground))]">
              Our crew also serves {briefPlainTextCities}.
            </p>

            {page.internalLinks.length > 0 ? (
              <p className="mt-10 text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
                Related:{" "}
                {page.internalLinks.map((link, i) => (
                  <span key={link.href}>
                    {i > 0 ? " · " : null}
                    <Link href={link.href} className="font-semibold text-[hsl(var(--primary))] hover:underline">
                      {link.label}
                    </Link>
                  </span>
                ))}
              </p>
            ) : null}

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary inline-flex items-center justify-center">
                Get a free quote from our crew
              </Link>
              <a href={`tel:${siteConfig.phoneTel}`} className="btn-accent inline-flex items-center justify-center gap-2">
                <Phone className="h-4 w-4" />
                Call {siteConfig.phone}
              </a>
            </div>
            <p className="mt-4 text-sm text-[hsl(var(--muted-foreground))]">{REPLY_LINE}</p>
          </div>
        </div>
      </article>
      <GuideLinks pageKey={page.slug} />
      <FAQSection faqs={page.faqs} title="Questions" />
      <GoogleReviews variant="compact" />
      <CTASection />
    </>
  );
}
