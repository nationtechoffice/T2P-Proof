import type { NeighborhoodSpot } from "@/lib/tampa-neighborhoods";

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
