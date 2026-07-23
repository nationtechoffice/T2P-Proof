export const siteImages = {
  hero: {
    src: "/images/hero-handyman.png",
    alt: "Handyman Pros FL technician arriving for service in Tampa, Florida",
  },
  fenceRepair: {
    src: "/images/fence-repair.png",
    alt: "Professional fence repair with palm trees in Tampa, Florida neighborhood",
  },
  cabinetRepair: {
    src: "/images/cabinet-repair.png",
    alt: "Kitchen cabinet repair and hardware installation in Tampa home",
  },
  furnitureAssembly: {
    src: "/images/furniture-assembly.png",
    alt: "Furniture assembly service by licensed handyman in Tampa, FL",
  },
  painting: {
    src: "/images/painting.png",
    alt: "Interior painting service with professional finish in Tampa, Florida",
  },
  drywallRepair: {
    src: "/images/drywall-repair.png",
    alt: "Drywall hole repair and patching by Tampa handyman professional",
  },
  teamHandyman: {
    src: "/images/team-handyman.png",
    alt: "Friendly licensed handyman assembling furniture in Tampa area home",
  },
  ogDefault: {
    src: "/images/hero-handyman.png",
    alt: "Handyman Pros FL - Tampa Bay area handyman, painting, and fence services",
  },
} as const;

export const galleryImages = [
  siteImages.hero,
  siteImages.fenceRepair,
  siteImages.painting,
  siteImages.furnitureAssembly,
  siteImages.drywallRepair,
  siteImages.cabinetRepair,
  siteImages.teamHandyman,
];
