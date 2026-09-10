import Image from "next/image";
import Link from "next/link";
import { galleryImages } from "@/lib/images";
import { JsonLd } from "@/lib/json-ld";
import { siteConfig } from "@/lib/site-config";

/** Compact homepage teaser — full captioned gallery lives on /work. */
export function PhotoGallery() {
  const preview = galleryImages.slice(0, 4);

  return (
    <section className="section-padding relative pt-0">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          name: "Handyman Pros FL Tampa job photos",
          url: `${siteConfig.url}/work`,
          associatedMedia: preview.map((image) => ({
            "@type": "ImageObject",
            contentUrl: `${siteConfig.url}${image.src}`,
            description: image.alt,
            name: image.alt,
          })),
        }}
      />
      <div className="container-site" id="work-photos">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <h2 className="mb-3 text-3xl font-bold md:text-4xl">Recent Handyman Work</h2>
          <p className="text-[hsl(var(--muted-foreground))]">
            Real Google Maps job photos — drywall, tile, flooring, and exterior work across Tampa Bay.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {preview.map((image) => (
            <Link
              key={image.src}
              href="/work"
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/work" className="btn-primary">
            View work photos &amp; captions
          </Link>
        </div>
      </div>
    </section>
  );
}
