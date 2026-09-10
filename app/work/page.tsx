import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Camera, CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";
import { GoogleListingCta } from "@/components/google-listing-cta";
import { QuoteForm } from "@/components/quote-form";
import { JsonLd } from "@/lib/json-ld";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import {
  showcaseGallery,
  showcaseGoogleLink,
  showcaseProjects,
} from "@/lib/work-showcase";

export const metadata: Metadata = buildMetadata({
  title: "Our Work Showcase | Tampa Bay Handyman Photos",
  description:
    "See Google Business-style job photos and SEO-focused project write-ups from Handyman Pros FL — TV mounting, drywall, fences, painting, and more across Tampa, Clearwater, and St. Petersburg.",
  path: "/work",
  keywords: [
    "handyman Tampa FL photos",
    "TV mounting Tampa",
    "drywall repair Tampa",
    "handyman services Clearwater",
    "St Pete handyman work",
    "Google Business handyman photos",
  ],
});

export default function WorkShowcasePage() {
  const pageUrl = `${siteConfig.url}/work`;

  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Handyman Pros FL Work Showcase",
            url: pageUrl,
            description:
              "Job photos and project analysis for handyman work across Tampa, Clearwater, and St. Petersburg.",
            isPartOf: { "@type": "WebSite", url: siteConfig.url },
            about: { "@id": `${siteConfig.url}/#organization` },
          },
          {
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            name: "Handyman Pros FL Google Business job photos",
            url: pageUrl,
            associatedMedia: showcaseProjects.map((project) => ({
              "@type": "ImageObject",
              contentUrl: `${siteConfig.url}${project.image.src}`,
              name: project.title,
              description: project.summary,
              keywords: project.keywords.join(", "),
            })),
          },
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Tampa Bay handyman project showcase",
            itemListElement: showcaseProjects.map((project, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: project.title,
              url: `${pageUrl}#${project.slug}`,
              description: project.summary,
            })),
          },
        ]}
      />

      <Breadcrumbs items={[{ label: "Our Work" }]} />

      <section className="section-padding">
        <div className="container-site">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[hsl(var(--accent))]">
              Google Business Photos · Tampa Bay Jobs
            </p>
            <h1 className="mb-4 text-4xl font-bold">
              Handyman Work Showcase Across Tampa, Clearwater &amp; St. Pete
            </h1>
            <p className="text-lg text-[hsl(var(--muted-foreground))]">
              Browse real job photos featured on our Google Business Profile, with SEO-focused analysis of the repairs
              Tampa Bay homeowners search for most — TV mounting, drywall repair, fence fixes, painting, furniture
              assembly, and more. One Westchase headquarters. We come to you.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href={showcaseGoogleLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2"
              >
                <Camera className="h-4 w-4" />
                View photos on Google
              </a>
              <Link href="/contact" className="btn-primary">
                Request a similar job
              </Link>
            </div>
          </div>

          <div className="mb-10 grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {showcaseGallery.map((image) => (
              <a
                key={image.src}
                href={showcaseGoogleLink}
                target="_blank"
                rel="noopener noreferrer"
                className="relative aspect-square overflow-hidden rounded-xl shadow-md"
              >
                <Image src={image.src} alt={image.alt} fill className="object-cover" sizes="160px" />
              </a>
            ))}
          </div>

          <div className="space-y-16">
            {showcaseProjects.map((project, index) => (
              <article
                key={project.slug}
                id={project.slug}
                className="grid items-center gap-8 lg:grid-cols-2"
              >
                <div className={`relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={index === 0}
                  />
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[hsl(var(--accent))]">
                    {project.service} · {project.cityFocus}
                  </p>
                  <h2 className="mb-3 text-2xl font-bold md:text-3xl">{project.seoHeading}</h2>
                  <p className="mb-4 text-[hsl(var(--muted-foreground))]">{project.summary}</p>
                  <ul className="mb-5 space-y-3">
                    {project.analysis.map((point) => (
                      <li key={point.slice(0, 48)} className="flex gap-2 text-sm leading-relaxed">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--accent))]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mb-5 flex flex-wrap gap-2">
                    {project.keywords.map((keyword) => (
                      <span
                        key={keyword}
                        className="rounded-full bg-white px-3 py-1 text-xs font-medium shadow-sm"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                  <Link href={project.relatedHref} className="btn-secondary inline-flex">
                    Learn more about {project.service.toLowerCase()}
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-2xl font-bold">Why these photos help local SEO</h2>
              <p className="mb-4 text-[hsl(var(--muted-foreground))]">
                Google rewards businesses that prove real local work. Publishing GMB-aligned photos with unique
                captions for Handyman Tampa FL, Handyman Services Clearwater, and St. Pete Handyman queries helps both
                Maps engagement and on-site rankings — without thin duplicate city pages.
              </p>
              <ul className="mb-6 space-y-2 text-sm text-[hsl(var(--muted-foreground))]">
                <li>• Service + city keywords written into headings and image alt text</li>
                <li>• Project analysis answers what homeowners actually need to know before calling</li>
                <li>• Single NAP and Google listing linked for trust and review consistency</li>
              </ul>
              <GoogleListingCta />
            </div>
            <div id="instant-quote">
              <QuoteForm defaultCity="Tampa" heading="Want work like this at your home?" />
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
