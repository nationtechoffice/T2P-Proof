import type { JobSitePhoto as JobSitePhotoData } from "@/lib/images";

/** AVIF, then a sized WebP, then the JPG. Width and height reserve the portrait frame. */
export function JobSitePhoto({
  photo,
  sizes = "(max-width: 640px) 100vw, 360px",
  className = "",
}: {
  photo: JobSitePhotoData;
  sizes?: string;
  className?: string;
}) {
  return (
    <figure className={className}>
      <picture>
        <source srcSet={photo.avif} type="image/avif" />
        <source
          srcSet={`${photo.thumb} ${photo.thumbWidth}w, ${photo.webp} ${photo.width}w`}
          sizes={sizes}
          type="image/webp"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photo.jpg}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          loading="lazy"
          decoding="async"
          className="h-auto w-full rounded-2xl bg-[hsl(var(--muted))] object-cover"
        />
      </picture>
    </figure>
  );
}
