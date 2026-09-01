export const siteImages = {
  logo: {
    src: "/images/logo.svg",
    alt: "Handyman Pros FL logo featuring an orange wrench icon and bold navy and orange text",
  },
  logoLight: {
    src: "/images/logo-light.svg",
    alt: "Handyman Pros FL logo featuring an orange wrench icon and bold navy and orange text",
  },
  hero: {
    src: "/images/hero-handyman.png",
    alt: "Handyman arriving for home repairs in Tampa FL",
  },
  fenceRepair: {
    src: "/images/fence-repair.png",
    alt: "Handyman repairing a fence in Tampa FL",
  },
  cabinetRepair: {
    src: "/images/cabinet-repair.png",
    alt: "Handyman repairing kitchen cabinets in Tampa FL",
  },
  furnitureAssembly: {
    src: "/images/furniture-assembly.png",
    alt: "Handyman assembling furniture in Tampa FL",
  },
  painting: {
    src: "/images/painting.png",
    alt: "Handyman painting an interior wall in Tampa FL",
  },
  drywallRepair: {
    src: "/images/drywall-repair.png",
    alt: "Handyman repairing drywall in Tampa FL",
  },
  teamHandyman: {
    src: "/images/team-handyman.png",
    alt: "Licensed handyman completing furniture assembly in Tampa FL",
  },
  ogDefault: {
    src: "/images/hero-handyman.png",
    alt: "Handyman Pros FL technician serving Tampa Bay FL",
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
