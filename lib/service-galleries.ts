export interface ServicePhoto {
  src: string;
  alt: string;
}

/**
 * Service-relevant job photos only.
 * Fence, tile, and the service van stay on the homepage and their own hubs —
 * they are not proof images for TV, drywall, or fan pages.
 */
const drywallGallery: ServicePhoto[] = [
  {
    src: "/images/work/drywall-finish-ladder.jpg",
    alt: "Licensed handyman finishing drywall compound on an interior wall in Tampa, FL",
  },
  {
    src: "/images/work/ceiling-drywall-mud.jpg",
    alt: "Ceiling drywall taped and mudded before paint in a Westchase, Tampa home",
  },
  {
    src: "/images/work/wall-patch-repair.jpg",
    alt: "Drywall hole patch and wall repair in a Tampa home",
  },
  {
    src: "/images/cinematic/before-drywall.jpg",
    alt: "Before drywall repair — damaged interior wall in a Tampa home",
  },
  {
    src: "/images/cinematic/after-drywall.jpg",
    alt: "After drywall repair — finished wall in a Tampa home",
  },
];

const fanGallery: ServicePhoto[] = [
  {
    src: "/images/work/maps-ceiling-fan.jpg",
    alt: "Bathroom ceiling fan and light installed in a Tampa home",
  },
  {
    src: "/images/cinematic/service-ceiling-fan.jpg",
    alt: "Ceiling fan installation in a Tampa bedroom at an existing fan-rated box",
  },
];

const tvGallery: ServicePhoto[] = [
  {
    src: "/images/cinematic/service-tv-mount.jpg",
    alt: "TV wall mounting in a bright Tampa living room — screen on, job finished level",
  },
];

const fenceGallery: ServicePhoto[] = [
  {
    src: "/images/work/fence-repair.jpg",
    alt: "Wood privacy fence repair with new pickets in a Tampa Bay backyard",
  },
  {
    src: "/images/work/fence-post-reset.jpg",
    alt: "Fence post reset with concrete footing in Westchase, Tampa FL",
  },
];

const tileGallery: ServicePhoto[] = [
  {
    src: "/images/work/bathroom-tile-grout.jpg",
    alt: "Bathroom wall tile grouting by a licensed handyman in Tampa",
  },
  {
    src: "/images/work/floor-tile-grouting.jpg",
    alt: "Floor tile grouting in progress on a Tampa Bay job",
  },
  {
    src: "/images/work/porcelain-tile-install.jpg",
    alt: "Large-format porcelain floor tile installation in a Tampa kitchen",
  },
];

const plumbingGallery: ServicePhoto[] = [
  {
    src: "/images/work/under-sink-plumbing.jpg",
    alt: "Under-sink plumbing fixture repair in a Tampa kitchen",
  },
];

const furnitureGallery: ServicePhoto[] = [
  {
    src: "/images/work/maps-builtin-dresser.jpg",
    alt: "Built-in dresser carpentry in a Tampa home",
  },
];

const paintingGallery: ServicePhoto[] = [
  {
    src: "/images/work/maps-baseboard-paint.jpg",
    alt: "Handyman Pros FL technician painting a baseboard in a Tampa home",
  },
  {
    src: "/images/work/exterior-trim-gutters.jpg",
    alt: "Exterior soffit trim paint and gutter detail on a Tampa Bay home",
  },
];

const sameDayGallery: ServicePhoto[] = [
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
    alt: "Same-day drywall hole repair in a Tampa home",
  },
];

const electricalGallery: ServicePhoto[] = [
  {
    src: "/images/cinematic/service-ceiling-fan.jpg",
    alt: "Ceiling fan and light fixture swap at an existing box in Tampa",
  },
];

export function galleryForPage(categoryOrSlug: string, slug?: string): ServicePhoto[] {
  const key = slug ?? categoryOrSlug;
  const category = slug ? categoryOrSlug : undefined;

  if (key === "drywall-repair" || key === "drywall-installation") return drywallGallery;
  if (key === "fan-installation" || key === "fan-repair") return fanGallery;
  if (key === "tv-wall-mounting" || key === "tv-mounting") return tvGallery;
  if (key === "electrical-fixture-installation") return electricalGallery;
  if (
    key === "plumbing-fixture-repair" ||
    key === "plumbing-fixture-installation" ||
    key === "repair-water-fixtures"
  ) {
    return plumbingGallery;
  }
  if (key === "furniture-assembly") return furnitureGallery;
  if (key === "same-day-handyman") return sameDayGallery;
  if (
    key === "tile-installation" ||
    key === "tile-install" ||
    key === "tile-work-installation" ||
    key === "tile-work-replacement"
  ) {
    return tileGallery;
  }
  if (key === "door-repair") return [];
  if (key === "fence" || category === "fence") return fenceGallery;
  if (key.includes("tile")) return tileGallery;
  if (key === "painting" || category === "painting" || key.includes("paint")) return paintingGallery;
  return [];
}

export function galleryForPath(path: string): ServicePhoto[] {
  const parts = path.split("/").filter(Boolean);
  if (parts[0] !== "services") return [];
  if (parts.length === 2) return galleryForPage(parts[1]);
  if (parts.length === 3) return galleryForPage(parts[1], parts[2]);
  return [];
}
