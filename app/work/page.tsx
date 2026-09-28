import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";
import { QuoteForm } from "@/components/quote-form";
import { JsonLd } from "@/lib/json-ld";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { workPhotos } from "@/lib/work-showcase";
import { recentWorkPhotos } from "@/lib/recent-work";

export const metadata: Metadata = buildMetadata({
  title: "Handyman Work Photos | Tampa, Clearwater & St. Pete",
  description:
    "Real Google Maps job photos from Handyman Pros FL — drywall repair Tampa, tile install, flooring, accent walls, and exterior trim across Tampa Bay.",
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
                contentUrl: `${siteConfig.url}${photo.src}`,
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
              Real photos from our Google Maps listing — drywall, tile, flooring, and exterior work across Tampa Bay.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {recentWorkPhotos.map((photo) => (
              <figure
                key={photo.slug}
                id={photo.slug}
                className="overflow-hidden rounded-2xl border border-[hsl(var(--border))] bg-white shadow-sm"
              >
                <picture>
                  <source srcSet={photo.avif} type="image/avif" />
                  <source
                    srcSet={`${photo.thumb} ${photo.thumbWidth}w, ${photo.webp} ${photo.width}w`}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    type="image/webp"
                  />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={photo.webp}
                    alt={photo.alt}
                    width={photo.width}
                    height={photo.height}
                    loading="lazy"
                    decoding="async"
                    className="h-auto w-full bg-[hsl(var(--muted))]"
                  />
                </picture>
                <figcaption className="space-y-3 p-5">
                  <p className="text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">{photo.caption}</p>
                  {photo.href && photo.linkLabel ? (
                    <Link href={photo.href} className="text-sm font-semibold text-[hsl(var(--primary))] hover:underline">
                      {photo.linkLabel}
                    </Link>
                  ) : null}
                </figcaption>
              </figure>
            ))}
            {workPhotos.map((photo) => (
              <figure
                key={photo.slug}
                id={photo.slug}
                className="overflow-hidden rounded-2xl border border-[hsl(var(--border))] bg-white shadow-sm"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="space-y-3 p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[hsl(var(--accent))]">
                    {photo.service} · {photo.city}
                  </p>
                  <p className="text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">{photo.caption}</p>
                  <Link href={photo.href} className="text-sm font-semibold text-[hsl(var(--primary))] hover:underline">
                    {photo.service} details
                  </Link>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mx-auto mt-14 max-w-xl" id="instant-quote">
            <QuoteForm defaultCity="Tampa" heading="Need similar work at your home?" />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
