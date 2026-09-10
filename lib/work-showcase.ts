import { galleryImages, siteImages } from "./images";
import { googleBusiness } from "./google-business";

export interface ShowcaseProject {
  slug: string;
  title: string;
  service: string;
  cityFocus: string;
  image: { src: string; alt: string };
  seoHeading: string;
  summary: string;
  analysis: string[];
  keywords: string[];
  relatedHref: string;
}

/**
 * Work showcase projects derived from Google Business Profile / on-site job photos
 * with SEO-focused analysis for Tampa, Clearwater, and St. Petersburg searches.
 */
export const showcaseProjects: ShowcaseProject[] = [
  {
    slug: "tampa-tv-mount-living-room",
    title: "Level TV Wall Mount — Tampa Living Room",
    service: "TV Wall Mounting",
    cityFocus: "Tampa, FL",
    image: siteImages.hero,
    seoHeading: "TV Mounting Tampa: real studs, safe height, tidy cables",
    summary:
      "A Tampa living-room TV mount set into real structure — the same finished look featured on our Google Business photos when homeowners search TV mounting Tampa or Handyman Tampa FL.",
    analysis: [
      "We locate wood or masonry support, use a mount rated for the TV weight, and set viewing height for couches and Florida-sun glare.",
      "Cable concealment is added when the wall and code allow; otherwise a painted raceway keeps HDMI and power neat.",
      "Same-day TV mounting Tampa visits are common when our Westchase crew is already routing through Hillsborough County.",
    ],
    keywords: ["TV Mounting Tampa", "Handyman Tampa FL", "TV wall mounting near me"],
    relatedHref: "/services/tv-wall-mounting",
  },
  {
    slug: "drywall-patch-tampa-humidity",
    title: "Seamless Drywall Patch — Hillsborough Home",
    service: "Drywall Repair",
    cityFocus: "Tampa / Westchase",
    image: siteImages.drywallRepair,
    seoHeading: "Drywall Repair Tampa that holds up in Florida humidity",
    summary:
      "This drywall repair Tampa showcase mirrors the patch-and-blend work on our Google listing: clean cuts, backing, feathered compound, and texture match before paint.",
    analysis: [
      "Doorknob holes, moving dents, and water stains are the top drywall repair Tampa requests after rainy weeks.",
      "Rushing coats in humidity telegraphs ridges through paint — we stage dry time so the patch stays flat.",
      "If staining suggests an active leak, we flag it before covering so Tampa and Clearwater clients are not buying a temporary fix.",
    ],
    keywords: ["Drywall Repair Tampa", "drywall patch Tampa Bay", "handyman drywall near me"],
    relatedHref: "/services/drywall-repair",
  },
  {
    slug: "fence-board-gate-pinellas",
    title: "Fence Board & Gate Reset — Pinellas County",
    service: "Fence Repair",
    cityFocus: "Clearwater / Palm Harbor",
    image: siteImages.fenceRepair,
    seoHeading: "Fence repair for salty Pinellas weather",
    summary:
      "Fence boards and gates take a beating from storms and salt air. This Google Business-style project highlights Handyman Services Clearwater outdoor fixes that restore privacy without a full rebuild.",
    analysis: [
      "We replace cracked boards, re-hang sagging gates, and use fasteners suited to Florida moisture.",
      "HOA-facing runs in Clearwater and Palm Harbor get aligned tops and stained or painted touch-ups when requested.",
      "Full fence replacements are quoted after measuring posts — this showcase focuses on repair that extends the life of the existing run.",
    ],
    keywords: ["Handyman Services Clearwater", "fence repair Clearwater FL", "home repair Clearwater FL"],
    relatedHref: "/services/fence",
  },
  {
    slug: "interior-paint-refresh-tampa",
    title: "Interior Paint Refresh — Tampa Punch List",
    service: "Painting",
    cityFocus: "Tampa Bay",
    image: siteImages.painting,
    seoHeading: "Crisp interior paint that photographs well for listings and GMB",
    summary:
      "Accent walls and room refreshes are frequent Google Business uploads because paint transforms photos. For Handyman Tampa FL clients, we prep, cut clean lines, and leave a durable finish in humid interiors.",
    analysis: [
      "Proper caulk and primer matter more than brand hype in Florida — otherwise peels show within a season.",
      "We protect floors and furniture, ventilate carefully, and match sheen to existing trim.",
      "Pair paint with drywall repair Tampa patches in one visit to reduce trip charges.",
    ],
    keywords: ["handyman painter Tampa", "interior painting Tampa FL", "punch list painting"],
    relatedHref: "/services/painting",
  },
  {
    slug: "furniture-assembly-st-pete",
    title: "Furniture Assembly — St. Pete & Tampa Deliveries",
    service: "Furniture Assembly",
    cityFocus: "St. Petersburg, FL",
    image: siteImages.furnitureAssembly,
    seoHeading: "St. Pete Handyman furniture assembly done square and tight",
    summary:
      "IKEA, Wayfair, and office sets arrive boxed — a St. Pete Handyman or local carpenter St. Petersburg FL visit turns them into usable rooms without leftover wobble.",
    analysis: [
      "We assemble in place when hallways are tight, torque cams correctly, and check that beds and desks sit level on older floors.",
      "Outdoor patio sets for Clearwater and St. Pete get hardware checks for rust-prone screws before they stain concrete.",
      "Stacking multiple boxes into one appointment is a common winning story on our Google reviews.",
    ],
    keywords: ["St. Pete Handyman", "local carpenter St. Petersburg FL", "furniture assembly Tampa"],
    relatedHref: "/services/furniture-assembly",
  },
  {
    slug: "cabinet-hardware-kitchen",
    title: "Cabinet & Hardware Tune-Up — Kitchen Reset",
    service: "Cabinet Repair",
    cityFocus: "Tampa Bay",
    image: siteImages.cabinetRepair,
    seoHeading: "Cabinet repairs that improve daily use and listing photos",
    summary:
      "Loose hinges, misaligned doors, and failing pulls show up constantly in GMB kitchen photos. Soft-close adjustments and hardware swaps are high-intent home repair jobs across Tampa, Clearwater, and St. Petersburg.",
    analysis: [
      "Humidity warps cabinet doors — we shim, adjust, and replace tired hinges instead of forcing screws into stripped holes.",
      "Updated hardware is a low-cost refresh that photographs well for Google Business updates.",
      "We can combine cabinet work with sink faucet fixture repairs when shutoffs are healthy.",
    ],
    keywords: ["cabinet repair Tampa", "handyman kitchen repair", "home repair Tampa Bay"],
    relatedHref: "/services",
  },
  {
    slug: "licensed-crew-on-site",
    title: "Licensed Crew On-Site — Real Local Dispatch",
    service: "General Handyman",
    cityFocus: "Westchase HQ → Tampa Bay",
    image: siteImages.teamHandyman,
    seoHeading: "One Westchase headquarters serving Tampa, Clearwater & St. Pete",
    summary:
      "Our Google Business Profile shows a real crew, not stock art. This showcase reinforces NAP consistency: one Tampa address, phone (656) 205-3185, and service coverage across Hillsborough and Pinellas.",
    analysis: [
      "Single-location GMB signals help rankings for Handyman Tampa FL, Handyman Services Clearwater, and St. Pete Handyman queries.",
      "Job photos tied to services (mounts, drywall, fences) support both Maps engagement and website SEO.",
      "Call for an instant phone estimate — the same number listed on Google and this site.",
    ],
    keywords: ["Handyman Tampa FL", "Handyman Services Clearwater", "St. Pete Handyman"],
    relatedHref: "/locations/tampa",
  },
];

export const showcaseGallery = galleryImages;
export const showcaseGoogleLink = googleBusiness.shareUrl;
