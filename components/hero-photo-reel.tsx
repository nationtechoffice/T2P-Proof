"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { heroBackgroundPhotos } from "@/lib/images";

/** Real Google Maps job photos — never a black TV screen. */
export function HeroPhotoReel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((index) => (index + 1) % heroBackgroundPhotos.length);
    }, 5200);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="absolute inset-0">
      {heroBackgroundPhotos.map((photo, index) => (
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
            priority={index === 0}
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      ))}
    </div>
  );
}
