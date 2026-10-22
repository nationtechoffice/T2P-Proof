import Image from "next/image";
import Link from "next/link";
import { OptimizedWorkImage } from "@/components/optimized-work-image";
import { optimizedStill } from "@/lib/images";
import { recentWorkPhotos } from "@/lib/recent-work";
import { workPhotos } from "@/lib/work-showcase";

export function JobPhotosGrid() {
  return (
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
              src={photo.jpg ?? photo.webp}
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
            {optimizedStill(photo.src) ? (
              <OptimizedWorkImage src={photo.src} alt={photo.alt} className="h-full w-full object-cover" />
            ) : (
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />
            )}
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
  );
}
