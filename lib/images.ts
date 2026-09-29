export const siteImages = {
  logo: {
    src: "/images/handyman-pros-florida-logo.svg",
    alt: "Handyman Pros Florida logo with an orange-outlined black shield, two crossed royal blue wrenches and the stacked HANDYMAN PROS FLORIDA wordmark",
  },
  logoLight: {
    src: "/images/handyman-pros-florida-logo-light.svg",
    alt: "Handyman Pros Florida logo with an orange-outlined black shield, two crossed royal blue wrenches and the stacked HANDYMAN PROS FLORIDA wordmark",
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
    alt: "Handyman Pros FL branded service van arriving for a Tampa Bay home repair",
  },
} as const;

/** Homepage recent-work strip: van plus real job proof. Tile, fence, and plumbing stay here and on /work — not on TV or fan heroes. */
export const galleryImages = [
  {
    src: "/images/work/service-van-tampa.jpg",
    alt: "Handyman Pros FL branded service van arriving for a Tampa Bay home repair",
  },
  {
    src: "/images/work/drywall-finish-ladder.jpg",
    alt: "Licensed handyman finishing drywall compound on an interior wall in Tampa, FL",
  },
  {
    src: "/images/cinematic/service-tv-mount.jpg",
    alt: "TV wall mounting in a bright Tampa living room — screen on, job finished level",
  },
  {
    src: "/images/work/maps-ceiling-fan.jpg",
    alt: "Bathroom ceiling fan and light installed in a Tampa home",
  },
  {
    src: "/images/work/wall-patch-repair.jpg",
    alt: "Drywall hole patch and wall repair in a Tampa home",
  },
  {
    src: "/images/work/fence-repair.jpg",
    alt: "Wood privacy fence repair with new pickets in a Tampa Bay backyard",
  },
  {
    src: "/images/work/bathroom-tile-grout.jpg",
    alt: "Bathroom wall tile grouting by Handyman Pros FL in Tampa",
  },
  {
    src: "/images/cinematic/service-ceiling-fan.jpg",
    alt: "Ceiling fan installation in a Tampa bedroom at an existing fan-rated box",
  },
] as const;

/** JPG path → AVIF/WebP stills for homepage and work galleries. Intrinsic size matches the fallback JPG, except the resized gravel WebP. */
export const optimizedWorkStills = {
  "/images/work/fence-repair.jpg": {
    webp: "/images/work/fence-repair.webp",
    avif: "/images/work/fence-repair.avif",
    width: 1184,
    height: 864,
  },
  "/images/work/service-van-tampa.jpg": {
    webp: "/images/work/service-van-tampa.webp",
    avif: "/images/work/service-van-tampa.avif",
    width: 1376,
    height: 768,
  },
  "/images/work/drywall-finish-ladder.jpg": {
    webp: "/images/work/drywall-finish-ladder.webp",
    avif: "/images/work/drywall-finish-ladder.avif",
    width: 1600,
    height: 1200,
  },
  "/images/work/maps-ceiling-fan.jpg": {
    webp: "/images/work/maps-ceiling-fan.webp",
    avif: "/images/work/maps-ceiling-fan.avif",
    width: 1600,
    height: 1200,
  },
  "/images/work/wall-patch-repair.jpg": {
    webp: "/images/work/wall-patch-repair.webp",
    avif: "/images/work/wall-patch-repair.avif",
    width: 900,
    height: 1200,
  },
  "/images/work/bathroom-tile-grout.jpg": {
    webp: "/images/work/bathroom-tile-grout.webp",
    avif: "/images/work/bathroom-tile-grout.avif",
    width: 1600,
    height: 873,
  },
  "/images/work/maps-builtin-dresser.jpg": {
    webp: "/images/work/maps-builtin-dresser.webp",
    avif: "/images/work/maps-builtin-dresser.avif",
    width: 1600,
    height: 1200,
  },
  "/images/work/maps-insulation-room.jpg": {
    webp: "/images/work/maps-insulation-room.webp",
    avif: "/images/work/maps-insulation-room.avif",
    width: 1600,
    height: 1200,
  },
  "/images/work/porcelain-tile-install.jpg": {
    webp: "/images/work/porcelain-tile-install.webp",
    avif: "/images/work/porcelain-tile-install.avif",
    width: 1600,
    height: 1200,
  },
  "/images/work/maps-baseboard-paint.jpg": {
    webp: "/images/work/maps-baseboard-paint.webp",
    avif: "/images/work/maps-baseboard-paint.avif",
    width: 1200,
    height: 1600,
  },
  "/images/work/floor-tile-grouting.jpg": {
    webp: "/images/work/floor-tile-grouting.webp",
    avif: "/images/work/floor-tile-grouting.avif",
    width: 900,
    height: 1200,
  },
  "/images/work/fence-post-reset.jpg": {
    webp: "/images/work/fence-post-reset.webp",
    avif: "/images/work/fence-post-reset.avif",
    width: 1184,
    height: 864,
  },
} as const;

export function optimizedStill(src: string) {
  return optimizedWorkStills[src as keyof typeof optimizedWorkStills];
}

/**
 * Homepage hero story stills. Handshake is the LCP poster (same ~16:9 frame as the hero video).
 * AVIF is the picture source; WebP is the img fallback and the video poster.
 */
export const heroStory = {
  video: "/images/hero/handyman-pros-florida-technician-arrival-handshake-tampa.mp4",
  poster: {
    avif: "/images/hero/handyman-pros-florida-technician-handshake-customer-tampa.avif",
    webp: "/images/hero/handyman-pros-florida-technician-handshake-customer-tampa.webp",
    alt: "Handyman Pros Florida technician in a branded uniform greeting a customer in Tampa",
    width: 1920,
    height: 1080,
  },
  stills: [
    {
      avif: "/images/hero/handyman-pros-florida-technician-handshake-customer-tampa.avif",
      webp: "/images/hero/handyman-pros-florida-technician-handshake-customer-tampa.webp",
      alt: "Handyman Pros Florida technician in a branded uniform greeting a customer in Tampa",
      width: 1920,
      height: 1080,
    },
    {
      avif: "/images/hero/handyman-pros-florida-technician-walking-to-house-tampa.avif",
      webp: "/images/hero/handyman-pros-florida-technician-walking-to-house-tampa.webp",
      alt: "Handyman Pros Florida technician in a branded uniform walking up to a Tampa home",
      width: 1920,
      height: 1080,
    },
    {
      avif: "/images/hero/handyman-pros-florida-van-drone-arrival-tampa.avif",
      webp: "/images/hero/handyman-pros-florida-van-drone-arrival-tampa.webp",
      alt: "Handyman Pros Florida branded service van arriving at a Tampa home",
      width: 1920,
      height: 1080,
    },
  ],
} as const;

/** Real Google Maps handyman job photos — used as the hero video slideshow. */
export const heroBackgroundPhotos = [
  {
    src: "/images/work/drywall-finish-ladder.jpg",
    alt: "Handyman finishing an interior wall repair in a Tampa home",
  },
  {
    src: "/images/work/maps-baseboard-paint.jpg",
    alt: "Handyman Pros FL technician painting a baseboard in a Tampa home",
  },
  {
    src: "/images/work/wall-patch-repair.jpg",
    alt: "Handyman Pros FL technician completing interior wall repair in Tampa",
  },
  {
    src: "/images/work/porcelain-tile-install.jpg",
    alt: "Large-format porcelain floor tile installation in a Tampa kitchen",
  },
  {
    src: "/images/work/maps-builtin-dresser.jpg",
    alt: "Built-in dresser carpentry in progress in a Tampa home",
  },
  {
    src: "/images/work/accent-wall-flooring.jpg",
    alt: "Wood slat accent wall and flooring in a Tampa home office",
  },
  {
    src: "/images/work/maps-insulation-room.jpg",
    alt: "Interior insulation and wainscoting work in a Tampa home",
  },
  {
    src: "/images/cinematic/service-tv-mount.jpg",
    alt: "TV wall mounting in a bright Tampa living room — screen on, job finished level",
  },
] as const;
