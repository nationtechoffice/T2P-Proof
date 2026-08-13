export const siteImages = {
  logo: {
    src: "/images/logo.svg",
    alt: "Handyman Pros FL logo featuring an orange wrench icon and bold navy and orange text",
    width: 560,
    height: 100,
  },
  logoLight: {
    src: "/images/logo-light.svg",
    alt: "Handyman Pros FL logo featuring an orange wrench icon and bold navy and orange text",
    width: 560,
    height: 100,
  },
  hero: {
    src: "/images/hero-handyman.webp",
    alt: "Handyman Pros FL technician arriving for service in Tampa, Florida",
    width: 1280,
    height: 832,
  },
  fenceRepair: {
    src: "/images/fence-repair.webp",
    alt: "Professional fence repair with palm trees in Tampa, Florida neighborhood",
    width: 1280,
    height: 832,
  },
  cabinetRepair: {
    src: "/images/cabinet-repair.webp",
    alt: "Kitchen cabinet repair and hardware installation in Tampa home",
    width: 1280,
    height: 832,
  },
  furnitureAssembly: {
    src: "/images/furniture-assembly.webp",
    alt: "Furniture assembly service by licensed handyman in Tampa, FL",
    width: 1280,
    height: 832,
  },
  painting: {
    src: "/images/painting.webp",
    alt: "Interior painting service with professional finish in Tampa, Florida",
    width: 1280,
    height: 832,
  },
  drywallRepair: {
    src: "/images/drywall-repair.webp",
    alt: "Drywall hole repair and patching by Tampa handyman professional",
    width: 1280,
    height: 832,
  },
  teamHandyman: {
    src: "/images/team-handyman.webp",
    alt: "Friendly licensed handyman assembling furniture in Tampa area home",
    width: 1344,
    height: 768,
  },
  ogDefault: {
    src: "/images/hero-handyman.webp",
    alt: "Handyman Pros FL - Tampa Bay area handyman, painting, and fence services",
    width: 1280,
    height: 832,
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
