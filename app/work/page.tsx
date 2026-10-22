import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";
import { JobPhotosGrid } from "@/components/job-photos-grid";
import { QuoteForm } from "@/components/quote-form";
import { JsonLd } from "@/lib/json-ld";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { optimizedStill } from "@/lib/images";
import { workPhotos } from "@/lib/work-showcase";
import { recentWorkPhotos } from "@/lib/recent-work";

export const metadata: Metadata = buildMetadata({
  title: "Handyman Work Photos | Tampa, Clearwater & St. Pete",
  description:
    "Job photos from licensed & insured Handyman Pros FL — drywall, tile, flooring, and fence work across Tampa Bay. Call (656) 205-3185 for an estimate today.",
  path: "/work",
  keywords: [
    "handyman Tampa FL photos",
    "drywall repair Tampa",
    "tile install Tampa",
    "flooring handyman Tampa",
    "Handyman Pros FL Google photos",
  ],
});

export default function WorkPage() {
  const pageUrl = `${siteConfig.url}/work`;

  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Handyman Pros FL Work Photos",
            url: pageUrl,
            description: "Captioned handyman job photos for Tampa, Clearwater, and St. Petersburg.",
            about: { "@id": `${siteConfig.url}/#organization` },
          },
          {
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            name: "Tampa Bay handyman job photos",
            url: pageUrl,
            associatedMedia: [
              ...workPhotos.map((photo) => ({
                "@type": "ImageObject",
                contentUrl: `${siteConfig.url}${optimizedStill(photo.src)?.webp ?? photo.src}`,
                name: photo.alt,
                description: photo.caption,
                caption: photo.caption,
              })),
              ...recentWorkPhotos.map((photo) => ({
                "@type": "ImageObject",
                contentUrl: `${siteConfig.url}${photo.webp}`,
                thumbnailUrl: `${siteConfig.url}${photo.thumb}`,
                name: photo.alt,
                description: photo.caption,
                caption: photo.caption,
                width: photo.width,
                height: photo.height,
                encodingFormat: "image/webp",
              })),
            ],
          },
        ]}
      />

      <Breadcrumbs items={[{ label: "Our Work" }]} />

      <section className="section-padding">
        <div className="container-site">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h1 className="mb-3 text-4xl font-bold">Handyman Work Photos</h1>
            <p className="text-lg text-[hsl(var(--muted-foreground))]">
              Real job photos — drywall, blinds, tile, flooring, and exterior work across Tampa Bay.
            </p>
          </div>

          <JobPhotosGrid />

          <div className="mx-auto mt-14 max-w-xl" id="instant-quote">
            <QuoteForm defaultCity="Tampa" heading="Need similar work at your home?" />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
