/** Fields the picture element actually reads. City hubs and the Oct 5 set both satisfy this. */
type JobPhotoSource = {
  avif: string;
  thumb: string;
  thumbWidth: number;
  webp: string;
  width: number;
  jpg: string;
  alt: string;
  height: number;
};

/** AVIF, then a sized WebP, then the JPG. Width and height reserve the portrait frame. */
export function JobSitePhoto({
  photo,
  sizes = "(max-width: 640px) 100vw, 360px",
  className = "",
}: {
  photo: JobPhotoSource;
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
