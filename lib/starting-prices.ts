/**
 * Owner-approved starting prices (Oct 18, 2026). "Starts at / from" wording only:
 * these are floors, not quotes. Final price follows photos or a visit.
 */
export interface StartingPrice {
  key: string;
  /** Short label for lists. */
  label: string;
  /** Omitted when the price is free-estimate only (no public number). */
  amount?: number;
  /** Plain sentence shown on the matching service page. */
  sentence: string;
  /** Matching service page. */
  href: string;
}

export const startingPrices = {
  smallJobs: {
    key: "smallJobs",
    href: "/services/handyman/general-repairs",
    label: "Small jobs (shelves, curtain rods, and similar)",
    sentence: "Small handyman jobs in Tampa, like hanging shelves or curtain rods, come with low prices.",
  },
  furniture: {
    key: "furniture",
    href: "/services/furniture-assembly",
    label: "Furniture assembly",
    sentence: "Furniture assembly in Tampa gets an instant estimate.",
  },
  drywall: {
    key: "drywall",
    href: "/services/drywall-repair",
    label: "Drywall patch",
    sentence: "Drywall patch repair in Tampa: free estimate, call or text for a price.",
  },
  fanFixture: {
    key: "fanFixture",
    href: "/services/electrical-fixture-installation",
    label: "Ceiling fan or light fixture",
    sentence: "Ceiling fan or light fixture installation in Tampa: free estimate, call or text for a price.",
  },
  tv: {
    key: "tv",
    href: "/services/tv-wall-mounting",
    label: "TV mounting",
    sentence: "TV mounting in Tampa gets an instant estimate.",
  },
  sameDay: {
    key: "sameDay",
    href: "/services/same-day-handyman",
    label: "Same-day service call",
    sentence: "Same-day handyman visits in Tampa get a free estimate.",
  },
  tile: {
    key: "tile",
    href: "/services/tile-installation",
    label: "Tile repair or regrout",
    sentence: "Tile repair or regrouting in Tampa: free estimate, call or text for a price.",
  },
} as const satisfies Record<string, StartingPrice>;

export const startingPriceList: StartingPrice[] = [
  startingPrices.smallJobs,
  startingPrices.furniture,
  startingPrices.drywall,
  startingPrices.fanFixture,
  startingPrices.tv,
  startingPrices.sameDay,
  startingPrices.tile,
];

/** Service page slug → starting price. Core pages use their slug; handyman sub-pages use theirs. */
const bySlug: Record<string, StartingPrice> = {
  "tv-wall-mounting": startingPrices.tv,
  "drywall-repair": startingPrices.drywall,
  "electrical-fixture-installation": startingPrices.fanFixture,
  "fan-installation": startingPrices.fanFixture,
  "furniture-assembly": startingPrices.furniture,
  "same-day-handyman": startingPrices.sameDay,
  "tile-installation": startingPrices.tile,
  "tile-work-replacement": startingPrices.tile,
  "general-repairs": startingPrices.smallJobs,
};

export function startingPriceFor(slug: string): StartingPrice | undefined {
  return bySlug[slug];
}

/** Same sentence with the city swapped in, for service-area pages. */
export function startingPriceSentenceFor(price: StartingPrice, city: string): string {
  return price.sentence.replace(" in Tampa", ` in ${city}`);
}
