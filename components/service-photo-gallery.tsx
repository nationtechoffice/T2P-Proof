import Image from "next/image";
import { OptimizedWorkImage } from "@/components/optimized-work-image";
import { optimizedStill } from "@/lib/images";
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
  const portrait = photos.every((photo) => photo.portrait);

  if (portrait) {
    return (
      <div className="mb-8">
        {title ? <h2 className="mb-3 text-xl font-bold">{title}</h2> : null}
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo) => (
            <li key={photo.src} className="relative aspect-[3/4] overflow-hidden rounded-2xl">
              <GalleryPhoto photo={photo} sizes="(max-width: 640px) 100vw, 30vw" />
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="mb-8">
      {title ? <h2 className="mb-3 text-xl font-bold">{title}</h2> : null}
      {pair ? (
        <ul className="grid gap-3 sm:grid-cols-2">
          {photos.map((photo) => (
            <li key={photo.src} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <GalleryPhoto photo={photo} sizes="(max-width: 640px) 100vw, 50vw" />
            </li>
          ))}
        </ul>
      ) : (
        <>
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
            <GalleryPhoto photo={primary} sizes="(max-width: 1024px) 100vw, 60vw" />
          </div>
          {rest.length > 0 ? (
            <ul className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {rest.map((photo) => (
                <li key={photo.src} className="relative aspect-[4/3] overflow-hidden rounded-xl">
                  <GalleryPhoto photo={photo} sizes="(max-width: 640px) 50vw, 20vw" />
                </li>
              ))}
            </ul>
          ) : null}
        </>
      )}
    </div>
  );
}

function GalleryPhoto({ photo, sizes }: { photo: ServicePhoto; sizes: string }) {
  if (optimizedStill(photo.src)) {
    return <OptimizedWorkImage src={photo.src} alt={photo.alt} className="h-full w-full object-cover" />;
  }
  return (
    <Image src={photo.src} alt={photo.alt} fill className="object-cover" sizes={sizes} />
  );
}
