import { siteImages } from "./images";

export interface WorkPhoto {
  slug: string;
  src: string;
  alt: string;
  caption: string;
  service: string;
  city: string;
  href: string;
}

/**
 * Captioned job photos for SEO — short, keyword-rich captions only.
 * Uses the same job photo set featured on the Google Business Profile.
 */
export const workPhotos: WorkPhoto[] = [
  {
    slug: "tv-mounting-tampa",
    src: siteImages.hero.src,
    alt: "TV wall mounting in a Tampa FL living room by Handyman Pros FL",
    caption:
      "TV mounting Tampa — level, stud-secured wall mount with a clean finish for living rooms and bedrooms.",
    service: "TV Wall Mounting",
    city: "Tampa, FL",
    href: "/services/tv-wall-mounting",
  },
  {
    slug: "drywall-repair-tampa",
    src: siteImages.drywallRepair.src,
    alt: "Drywall repair and texture blend in Tampa FL",
    caption:
      "Drywall repair Tampa — patch, tape, texture match, and paint-ready walls that hold up in Florida humidity.",
    service: "Drywall Repair",
    city: "Tampa, FL",
    href: "/services/drywall-repair",
  },
  {
    slug: "fence-repair-clearwater",
    src: siteImages.fenceRepair.src,
    alt: "Fence board and gate repair in Clearwater FL",
    caption:
      "Fence repair Clearwater FL — storm-damaged boards and gates reset for Pinellas County homes.",
    service: "Fence Repair",
    city: "Clearwater, FL",
    href: "/services/fence",
  },
  {
    slug: "interior-painting-tampa",
    src: siteImages.painting.src,
    alt: "Interior painting refresh in Tampa FL home",
    caption:
      "Interior painting Tampa — crisp cut-ins and durable finish for bedrooms, accents, and punch lists.",
    service: "Painting",
    city: "Tampa, FL",
    href: "/services/painting",
  },
  {
    slug: "furniture-assembly-st-petersburg",
    src: siteImages.furnitureAssembly.src,
    alt: "Furniture assembly in St Petersburg FL",
    caption:
      "Furniture assembly St. Pete — beds, desks, and patio sets built square, tight, and placed correctly.",
    service: "Furniture Assembly",
    city: "St. Petersburg, FL",
    href: "/services/furniture-assembly",
  },
  {
    slug: "cabinet-repair-tampa",
    src: siteImages.cabinetRepair.src,
    alt: "Kitchen cabinet and hardware repair in Tampa FL",
    caption:
      "Cabinet repair Tampa — hinge adjustments, door alignment, and hardware swaps for daily-use kitchens.",
    service: "Cabinet Repair",
    city: "Tampa, FL",
    href: "/services",
  },
  {
    slug: "handyman-crew-tampa-bay",
    src: siteImages.teamHandyman.src,
    alt: "Licensed Handyman Pros FL technician serving Tampa Bay",
    caption:
      "Handyman Tampa FL crew — licensed mobile service from one Westchase headquarters covering Hillsborough and Pinellas.",
    service: "General Handyman",
    city: "Tampa Bay, FL",
    href: "/locations/tampa",
  },
];
