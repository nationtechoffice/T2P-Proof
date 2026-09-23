import Image from "next/image";
import type { ServicePhoto } from "@/lib/service-galleries";

export function ServicePhotoGallery({
  photos,
  title,
}: {
  photos: ServicePhoto[];
  title?: string;
}) {
  if (photos.length === 0) return null;
  const [primary, ...rest] = photos;
  const pair = photos.length === 2;

  return (
    <div className="mb-8">
      {title ? <h2 className="mb-3 text-xl font-bold">{title}</h2> : null}
      {pair ? (
        <ul className="grid gap-3 sm:grid-cols-2">
          {photos.map((photo) => (
            <li key={photo.src} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </li>
          ))}
        </ul>
      ) : (
        <>
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
            <Image
              src={primary.src}
              alt={primary.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
          </div>
          {rest.length > 0 ? (
            <ul className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {rest.map((photo) => (
                <li key={photo.src} className="relative aspect-[4/3] overflow-hidden rounded-xl">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, 20vw"
                  />
                </li>
              ))}
            </ul>
          ) : null}
        </>
      )}
    </div>
  );
}
