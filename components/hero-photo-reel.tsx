"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { heroBackgroundPhotos } from "@/lib/images";

/** Always-visible job photos. First frame is painted immediately — never a black box. */
export function HeroPhotoReel() {
  const [active, setActive] = useState(0);
  const first = heroBackgroundPhotos[0];

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((index) => (index + 1) % heroBackgroundPhotos.length);
    }, 5200);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="absolute inset-0 bg-slate-200">
      {/* Static first photo so the background exists before JS hydrates */}
      <Image
        src={first.src}
        alt={first.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_45%]"
      />
      {heroBackgroundPhotos.map((photo, index) =>
        index === 0 ? null : (
          <div
            key={photo.src}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === active ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="100vw"
              className="object-cover object-[center_45%]"
            />
          </div>
        )
      )}
    </div>
  );
}
