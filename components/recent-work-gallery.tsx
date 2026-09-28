import { JsonLd } from "@/lib/json-ld";
import { recentWorkPhotos } from "@/lib/recent-work";
import { siteConfig } from "@/lib/site-config";

/** Below-the-fold Google Business Profile photos. Native lazy pictures, AVIF then WebP. */
export function RecentWorkGallery() {
  return (
    <section className="section-padding relative pt-0" aria-labelledby="recent-work-heading">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          name: "Recent work around Tampa Bay",
          url: siteConfig.url,
          associatedMedia: recentWorkPhotos.map((photo) => ({
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
        }}
      />
      <div className="container-site">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <h2 id="recent-work-heading" className="mb-3 text-3xl font-bold md:text-4xl">
            Recent work around Tampa Bay
          </h2>
          <p className="text-[hsl(var(--muted-foreground))]">
            Job-site photos from the Handyman Pros FL Google Business Profile.
          </p>
        </div>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recentWorkPhotos.map((photo) => (
            <li key={photo.slug} className="overflow-hidden rounded-2xl border border-[hsl(var(--border))] bg-white shadow-sm">
              <figure>
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
                <figcaption className="p-4 text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
                  {photo.caption}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
