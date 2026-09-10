import { workPhotos } from "./work-showcase";

export const siteImages = {
  logo: {
    src: "/images/logo.svg",
    alt: "Handyman Pros FL logo featuring an orange wrench icon and bold navy and orange text",
  },
  logoLight: {
    src: "/images/logo-light.svg",
    alt: "Handyman Pros FL logo featuring an orange wrench icon and bold navy and orange text",
  },
  /** Real Google Maps / GMB service van photo */
  hero: {
    src: "/images/work/service-van-tampa.jpg",
    alt: "Handyman Pros FL branded service van arriving for Tampa Bay home repairs",
  },
  fenceRepair: {
    src: "/images/work/exterior-trim-gutters.jpg",
    alt: "Exterior trim, gutters, and outdoor handyman detailing in Tampa Bay FL",
  },
  cabinetRepair: {
    src: "/images/work/under-sink-plumbing.jpg",
    alt: "Kitchen cabinet and under-sink handyman repair in Tampa FL",
  },
  furnitureAssembly: {
    src: "/images/work/accent-wall-flooring.jpg",
    alt: "Interior remodel with accent wall and flooring in Tampa FL",
  },
  painting: {
    src: "/images/work/exterior-trim-gutters.jpg",
    alt: "Exterior painting and trim finish by Handyman Pros FL",
  },
  drywallRepair: {
    src: "/images/work/drywall-finish-ladder.jpg",
    alt: "Drywall finishing and wall repair in Tampa FL",
  },
  teamHandyman: {
    src: "/images/work/wall-patch-repair.jpg",
    alt: "Handyman Pros FL technician completing interior wall repair in Tampa",
  },
  ogDefault: {
    src: "/images/work/service-van-tampa.jpg",
    alt: "Handyman Pros FL technician serving Tampa Bay FL",
  },
} as const;

/** Homepage preview uses the real Google Maps work photos */
export const galleryImages = workPhotos.slice(0, 8).map((photo) => ({
  src: photo.src,
  alt: photo.alt,
}));
