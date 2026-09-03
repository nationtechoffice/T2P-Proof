import Image from "next/image";
import { Camera } from "lucide-react";
import { galleryImages } from "@/lib/images";
import { googleBusiness } from "@/lib/google-business";
import { JsonLd } from "@/lib/json-ld";
import { siteConfig } from "@/lib/site-config";

export function PhotoGallery() {
  return (
    <section className="section-padding relative">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          name: "Handyman Pros FL Tampa job photos",
          url: `${siteConfig.url}/#work-photos`,
          associatedMedia: galleryImages.map((image) => ({
            "@type": "ImageObject",
            contentUrl: `${siteConfig.url}${image.src}`,
            description: image.alt,
            name: image.alt,
          })),
          isPartOf: {
            "@type": "LocalBusiness",
            "@id": `${siteConfig.url}/#organization`,
          },
        }}
      />
      <div className="container-site" id="work-photos">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[hsl(var(--accent))]">
            Our Work in Tampa
          </p>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Real Jobs, Real Results</h2>
          <p className="text-lg text-[hsl(var(--muted-foreground))]">
            From fence repairs under Florida palms to flawless interior painting — see the quality Tampa homeowners trust. More photos live on our Google listing.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <a
              key={image.src}
              href={googleBusiness.shareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden rounded-2xl shadow-lg ${
                index === 0 ? "sm:col-span-2 sm:row-span-2" : ""
              }`}
            >
              <div className={`relative w-full ${index === 0 ? "aspect-[16/10] sm:aspect-auto sm:h-full sm:min-h-[420px]" : "aspect-[4/3]"}`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes={index === 0 ? "(max-width: 640px) 100vw, 66vw" : "(max-width: 640px) 100vw, 33vw"}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(200,80%,15%)]/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <p className="absolute bottom-0 left-0 right-0 translate-y-full p-4 text-sm font-medium text-white transition-transform duration-300 group-hover:translate-y-0">
                  {image.alt}
                </p>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a
            href={googleBusiness.shareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            <Camera className="h-4 w-4" />
            See more photos on Google
          </a>
        </div>
      </div>
    </section>
  );
}
