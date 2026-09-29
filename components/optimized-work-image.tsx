import { optimizedStill } from "@/lib/images";

/** AVIF, then WebP, then the original JPG. Width and height reserve space; loading stays lazy. */
export function OptimizedWorkImage({
  src,
  alt,
  className = "h-full w-full object-cover",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const still = optimizedStill(src);
  if (!still) return null;

  return (
    <picture className="block h-full w-full">
      <source srcSet={still.avif} type="image/avif" />
      <source srcSet={still.webp} type="image/webp" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        width={still.width}
        height={still.height}
        loading="lazy"
        decoding="async"
        className={className}
      />
    </picture>
  );
}
