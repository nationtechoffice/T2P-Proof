import type { NeighborhoodSpot } from "@/lib/tampa-neighborhoods";
import { southTampaSpots } from "@/lib/tampa-neighborhoods";

export interface LocationSilo {
  slug: string;
  city: string;
  displayName: string;
  path: string;
  eyebrow: string;
  h1: string;
  intro: string;
  keywords: string[];
  metaDescription: string;
  mapQuery: string;
  mapTitle: string;
  services: string[];
  paragraphs: string[];
  relatedPaths?: { href: string; label: string }[];
  spots?: NeighborhoodSpot[];
}

export const locationSilos: LocationSilo[] = [
  {
    slug: "seffner",
    city: "Seffner",
    displayName: "Seffner, FL",
    path: "/handyman-seffner-fl",
    eyebrow: "Seffner · Hillsborough County",
    h1: "Seffner FL Property Repair & Local Handyman Help",
    intro:
      "Handyman Pros FL provides Seffner FL property repair — including gutter cleaning coordination support, exterior fixes, and trusted local handyman service for residential owners.",
    keywords: ["Seffner FL property repair", "gutter cleaning", "local handyman", "handyman Seffner FL"],
    metaDescription:
      "Seffner FL property repair and local handyman service for gutters, exterior fixes, and indoor punch lists. Call Handyman Pros FL at (656) 205-3185.",
    mapQuery: "Seffner, FL",
    mapTitle: "Google Map of Seffner, Florida",
    services: [
      "Gutter cleaning & minor gutter reseating",
      "Exterior trim and fascia touch repairs",
      "Door, screen, and latch fixes",
      "Drywall and caulk maintenance",
      "Shelf, hook, and organizer installs",
      "Storm-season outdoor punch lists",
    ],
    paragraphs: [
      "Seffner FL property repair needs often blend indoor comfort with outdoor weather readiness. Oak debris, seasonal storms, and older outbuildings create maintenance cycles that busy owners postpone until leaks or pests appear. Handyman Pros FL acts as your local handyman for the practical repairs that protect the home between larger contractor projects.",
      "Gutter cleaning and related exterior care keep water moving away from fascia and foundations. We clear debris, check for loose spikes or brackets, and flag sections that need replacement so you are not surprised during the next downpour. Pair gutter cleaning with screen repairs or downspout adjustments when you want a more complete exterior pass.",
      "Inside Seffner homes, our local handyman team handles the everyday list: sticky doors, loose towel bars, drywall dents, and hardware refreshes. Property managers and landlords also call us for turnover work that must look rental-ready without a full renovation budget.",
      "Choosing Handyman Pros FL for Seffner FL property repair means clear communication and Tampa Bay accountability. We are based nearby in Westchase / Tampa, licensed and insured, and available at (656) 205-3185 around the clock for estimates. Tell us about gutter cleaning, outdoor repairs, or indoor fixes — we will prioritize what protects the structure first.",
      "From acreage edges to neighborhood lots, Seffner property owners deserve a local handyman who shows up prepared and finishes clean.",
    ],
    relatedPaths: [
      { href: "/locations/plant-city", label: "Handyman Plant City FL" },
      { href: "/locations/brandon", label: "Handyman Brandon FL" },
      { href: "/locations/valrico", label: "Handyman Valrico FL" },
    ],
  },
  {
    slug: "town-n-country",
    city: "Town 'n' Country",
    displayName: "Town 'n' Country, FL",
    path: "/locations/town-n-country-fl",
    eyebrow: "Town 'n' Country · West Tampa",
    h1: "Town n Country Handyman for Appliance Setup & Repairs",
    intro:
      "Looking for a Town n Country handyman? Handyman Pros FL handles appliance setup support, everyday home repairs, and fixture work across this West Tampa community.",
    keywords: ["Town n Country handyman", "appliance setup", "home repairs", "handyman Town n Country FL"],
    metaDescription:
      "Town n Country handyman for appliance setup and home repairs. Handyman Pros FL — call (656) 205-3185 for fast local help.",
    mapQuery: "Town 'n' Country, Tampa, FL",
    mapTitle: "Google Map of Town n Country, Florida",
    services: [
      "Appliance setup (leveling, connections where appropriate)",
      "General home repairs indoors and out",
      "Drywall, doors, and trim fixes",
      "TV mounting and shelving",
      "Bathroom hardware refreshes",
      "Fence and screen minor repairs",
    ],
    paragraphs: [
      "A Town n Country handyman should know the neighborhoods west of the Veterans Expressway as well as the shortcuts between Tampa and Westchase. Handyman Pros FL is based nearby, so home repairs and appliance setup appointments are easy to schedule without long wait windows. We help busy households finish the tasks that pile up after moves, storms, or online deliveries.",
      "Appliance setup often means more than sliding a box into place. We level washers and ranges, verify fit, install required brackets or anti-tip devices when provided, and help with water-line or cord routing within handyman scope. For gas or complex electrical work beyond our scope, we tell you clearly and keep the rest of your punch list moving.",
      "Everyday home repairs remain our core: hanging doors that close properly, patching walls, securing loose rails, and refreshing hardware that makes bathrooms and kitchens feel cared for. Town n Country’s mix of ranch homes and updated interiors benefits from a crew that brings both older-home patience and modern mounting know-how.",
      "Call (656) 205-3185 anytime for Town n Country handyman service. Open 24/7, Handyman Pros FL offers free estimates for appliance setup, home repairs, and multi-stop honey-do days across western Tampa.",
      "Neighbors choose us because we communicate, protect the home, and finish clean — the basics every Town n Country address deserves.",
    ],
    relatedPaths: [
      { href: "/locations/westchase-fl", label: "Handyman Westchase FL" },
      { href: "/locations/oldsmar-fl", label: "Handyman Oldsmar FL" },
    ],
  },
  {
    slug: "oldsmar",
    city: "Oldsmar",
    displayName: "Oldsmar, FL",
    path: "/locations/oldsmar-fl",
    eyebrow: "Oldsmar · Pinellas / Tampa Bay",
    h1: "Oldsmar FL Handyman Services for Mounts & Decks",
    intro:
      "Handyman Pros FL offers Oldsmar FL handyman services including bracket mounting, deck maintenance help, and reliable indoor repairs for Tampa Bay homeowners.",
    keywords: ["Oldsmar FL handyman services", "bracket mounting", "deck maintenance", "handyman Oldsmar FL"],
    metaDescription:
      "Oldsmar FL handyman services for bracket mounting and deck maintenance. Call Handyman Pros FL at (656) 205-3185 for a free estimate.",
    mapQuery: "Oldsmar, FL",
    mapTitle: "Google Map of Oldsmar, Florida",
    services: [
      "Bracket mounting for TVs, shelves, and organizers",
      "Deck maintenance (boards, rails, hardware)",
      "Door and screen repairs",
      "Fixture installation",
      "Drywall touch-ups",
      "Outdoor furniture assembly",
    ],
    paragraphs: [
      "Oldsmar FL handyman services bridge Pinellas convenience with Hillsborough proximity — and Handyman Pros FL covers both sides of the bay. Residents want crisp bracket mounting indoors and dependable deck maintenance outdoors without juggling multiple specialists for small scopes of work.",
      "Bracket mounting projects range from TV walls and soundbars to garage track systems and pantry organizers. We locate studs or use appropriate anchors, keep lines level, and conceal cords when the layout allows. Clean mounting work is one of the fastest ways to make a room feel finished.",
      "Deck maintenance keeps outdoor living spaces safe. We tighten loose rails, replace individual boards when feasible, secure popped fasteners, and advise on sealing timelines suited to Florida sun and rain. If structural issues exceed handyman scope, we document what we see so you can plan the right next step.",
      "Schedule Oldsmar FL handyman services at (656) 205-3185. We are open 24/7 for estimates covering bracket mounting, deck maintenance, and mixed indoor repair lists across Oldsmar and nearby coastal communities.",
      "From waterfront-adjacent homes to neighborhood cul-de-sacs, Handyman Pros FL brings Tampa Bay reliability to every Oldsmar visit.",
    ],
    relatedPaths: [
      { href: "/locations/westchase-fl", label: "Handyman Westchase FL" },
      { href: "/locations/town-n-country-fl", label: "Handyman Town n Country FL" },
      { href: "/locations/safety-harbor-fl", label: "Handyman Safety Harbor FL" },
      { href: "/locations/palm-harbor-fl", label: "Handyman Palm Harbor FL" },
    ],
  },
  {
    slug: "south-tampa",
    city: "South Tampa",
    displayName: "South Tampa, FL",
    path: "/handyman-south-tampa-fl",
    eyebrow: "South Tampa · Premium neighborhoods",
    h1: "South Tampa Handyman for Premium Home Care",
    intro:
      "Handyman Pros FL provides South Tampa handyman service focused on premium home care — discreet scheduling, careful finishes, and pro TV wall mounting.",
    keywords: ["South Tampa handyman", "premium home care", "TV wall mounting", "handyman South Tampa FL"],
    metaDescription:
      "South Tampa handyman for premium home care and TV wall mounting. Licensed Handyman Pros FL — call (656) 205-3185 for a free estimate.",
    mapQuery: "South Tampa, FL",
    mapTitle: "Google Map of South Tampa, Florida",
    services: [
      "TV wall mounting with clean cable planning",
      "Premium home care punch lists",
      "Fixture and hardware upgrades",
      "Drywall texture blending",
      "Closet and pantry organization installs",
      "Door, trim, and paint-ready repairs",
    ],
    paragraphs: [
      "A South Tampa handyman should respect both the architecture and the lifestyle of neighborhoods from Hyde Park to Beach Park and beyond. Handyman Pros FL delivers premium home care: punctual arrivals, protective coverings, and finish details that match higher-end interiors rather than “good enough” patchwork.",
      "TV wall mounting is one of our signature South Tampa services. We confirm wall construction, use proper lag hardware into studs or rated anchors, level multi-display setups when needed, and plan cable paths so living rooms stay polished. Soundbar brackets and component shelves can be included in the same visit.",
      "Premium home care also means coordinating small repairs before events, photography, or seasonal returns from travel. We handle fixture swaps, closet upgrades, discreet drywall blending, and hardware refreshes that elevate how a room feels without a full remodel timeline.",
      "Schedule your South Tampa handyman visit at (656) 205-3185. Open 24/7, Handyman Pros FL offers free estimates for TV wall mounting and premium home care lists across South Tampa and nearby central bay addresses.",
      "Discreet, licensed, and detail-oriented — that is how we approach every South Tampa property.",
    ],
    relatedPaths: [
      { href: "/locations/tampa", label: "Handyman Tampa FL" },
      { href: "/locations/carrollwood", label: "Handyman Carrollwood FL" },
      { href: "/services/drywall-repair", label: "Drywall Repair Tampa" },
      { href: "/services/fence-handyman", label: "Fence Handyman Tampa" },
    ],
    spots: southTampaSpots,
  },
];

export const allLocationLinks = [
  { href: "/locations/westchase-fl", label: "Westchase" },
  ...locationSilos.map((l) => ({ href: l.path, label: l.city })),
] as const;

export const schemaAreaServedCities = [
  "Tampa",
  "Westchase",
  "Carrollwood",
  "Temple Terrace",
  "Wesley Chapel",
  "Riverview",
  "Valrico",
  "Seffner",
  "Plant City",
  "Town 'n' Country",
  "Oldsmar",
  "Lutz",
  "South Tampa",
  "Citrus Park",
  "Brandon",
] as const;

export function getLocationSilo(slug: string): LocationSilo | undefined {
  return locationSilos.find((l) => l.slug === slug);
}
