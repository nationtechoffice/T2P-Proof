import Image from "next/image";
import { galleryImages } from "@/lib/images";

export function PhotoGallery() {
  return (
    <section className="section-padding relative">
      <div className="container-site">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[hsl(var(--accent))]">
            Our Work in Tampa
          </p>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Real Jobs, Real Results</h2>
          <p className="text-lg text-[hsl(var(--muted-foreground))]">
            From fence repairs under Florida palms to flawless interior painting — see the quality Tampa homeowners trust.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div
              key={image.src}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
