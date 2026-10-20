/** Shared "Areas we serve" grid for Oct 2026 brief-driven service pages. */
export const briefCountiesIntro =
  "Our crew serves homes and businesses across Hillsborough, Pinellas and Pasco counties.";

export const briefServiceAreaGroups = [
  {
    county: "Hillsborough",
    cities: [
      { href: "/locations/tampa", label: "Tampa" },
      { href: "/locations/brandon", label: "Brandon" },
      { href: "/locations/riverview", label: "Riverview" },
      { href: "/locations/carrollwood", label: "Carrollwood" },
      { href: "/locations/westchase-fl", label: "Westchase" },
      { href: "/locations/town-n-country-fl", label: "Town 'n' Country" },
      { href: "/locations/citrus-park-fl", label: "Citrus Park" },
      { href: "/locations/valrico", label: "Valrico" },
      { href: "/locations/apollo-beach", label: "Apollo Beach" },
    ],
  },
  {
    county: "Pinellas",
    cities: [
      { href: "/locations/clearwater", label: "Clearwater" },
      { href: "/locations/st-petersburg", label: "St. Petersburg" },
      { href: "/locations/largo", label: "Largo" },
      { href: "/locations/palm-harbor-fl", label: "Palm Harbor" },
      { href: "/locations/dunedin-fl", label: "Dunedin" },
      { href: "/locations/seminole", label: "Seminole" },
      { href: "/locations/pinellas-park", label: "Pinellas Park" },
    ],
  },
  {
    county: "Pasco",
    cities: [
      { href: "/locations/wesley-chapel", label: "Wesley Chapel" },
      { href: "/locations/land-o-lakes", label: "Land O' Lakes" },
      { href: "/locations/new-port-richey-fl", label: "New Port Richey" },
      { href: "/locations/odessa-fl", label: "Odessa" },
      { href: "/locations/zephyrhills-fl", label: "Zephyrhills" },
      { href: "/locations/holiday", label: "Holiday" },
    ],
  },
] as const;

export const briefPlainTextCities = "Lutz, Plant City, and Temple Terrace";

export const REPLY_LINE = "Instant reply, 24/7 — always within 5 minutes." as const;
export const FREE_ESTIMATE_PRICE = "Free estimate, call or text for a price" as const;
