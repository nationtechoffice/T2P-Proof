/**
 * Owner-approved starting prices (Oct 18, 2026). "Starts at / from" wording only:
 * these are floors, not quotes. Final price follows photos or a visit.
 */
export interface StartingPrice {
  key: string;
  /** Short label for lists. */
  label: string;
  amount: number;
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
    amount: 49,
    sentence: "Small handyman jobs in Tampa, like hanging shelves or curtain rods, start at $49.",
  },
  furniture: {
    key: "furniture",
    href: "/services/furniture-assembly",
    label: "Furniture assembly",
    amount: 65,
    sentence: "Furniture assembly in Tampa starts at $65.",
  },
  drywall: {
    key: "drywall",
    href: "/services/drywall-repair",
    label: "Drywall patch",
    amount: 75,
    sentence: "Drywall patch repair in Tampa starts at $75.",
  },
  fanFixture: {
    key: "fanFixture",
    href: "/services/electrical-fixture-installation",
    label: "Ceiling fan or light fixture",
    amount: 79,
    sentence: "Ceiling fan or light fixture installation in Tampa starts at $79.",
  },
  tv: {
    key: "tv",
    href: "/services/tv-wall-mounting",
    label: "TV mounting",
    amount: 89,
    sentence: "TV mounting in Tampa starts at $89.",
  },
  sameDay: {
    key: "sameDay",
    href: "/services/same-day-handyman",
    label: "Same-day service call",
    amount: 99,
    sentence: "A same-day handyman service call in Tampa starts at $99.",
  },
  tile: {
    key: "tile",
    href: "/services/tile-installation",
    label: "Tile repair or regrout",
    amount: 199,
    sentence: "Tile repair or regrouting in Tampa starts at $199.",
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
