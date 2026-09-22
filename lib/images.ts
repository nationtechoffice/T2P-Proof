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
    src: "/images/work/fence-repair.jpg",
    alt: "Wood privacy fence repair with new pickets in a Tampa Bay FL backyard",
  },
  fencePostReset: {
    src: "/images/work/fence-post-reset.jpg",
    alt: "Fence post reset with concrete footing and level in Tampa FL",
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

/** Bright GBP job photos for the homepage hero — no black TV screens. */
export const heroBackgroundPhotos = [
  {
    src: "/images/gmb/cover-1920x1080.jpg",
    alt: "Handyman Pros FL van and technician arriving at a Tampa Bay home",
  },
  {
    src: "/images/work/service-van-tampa.jpg",
    alt: "Handyman Pros FL licensed service van arriving at a Tampa Bay home",
  },
  {
    src: "/images/cinematic/hero-maps-reference.jpg",
    alt: "Handyman Pros FL crew on a Tampa job — van, fence, and interior wall finish",
  },
  {
    src: "/images/work/fence-repair.jpg",
    alt: "Wood privacy fence repair in a Tampa Bay backyard with new cedar pickets",
  },
  {
    src: "/images/work/drywall-finish-ladder.jpg",
    alt: "Handyman finishing an interior wall repair in a Tampa home",
  },
  {
    src: "/images/work/porcelain-tile-install.jpg",
    alt: "Large-format porcelain floor tile installation in a Tampa kitchen",
  },
  {
    src: "/images/work/bathroom-tile-grout.jpg",
    alt: "Bathroom wall tile grouting completed by Handyman Pros FL in Tampa",
  },
  {
    src: "/images/cinematic/service-tv-mount.jpg",
    alt: "TV wall mounting in a bright Tampa living room — screen on, job finished level",
  },
] as const;
