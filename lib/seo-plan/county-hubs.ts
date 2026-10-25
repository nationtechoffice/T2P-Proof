import type { MarketingPage } from "@/lib/marketing-pages";

export type CountyHub = MarketingPage & {
  countyName: string;
  cityLinks: { href: string; label: string }[];
  serviceLinks: { href: string; label: string }[];
};

export const hillsboroughCountyHub: CountyHub = {
  path: "/locations/hillsborough-county",
  h1: "Handyman in Hillsborough County, FL",
  metaTitle: "Handyman Hillsborough County FL | Handyman Pros FL",
  metaDescription:
    "Insured handyman crew serving Hillsborough County: Tampa, Brandon, Valrico, Riverview, Plant City and more. Free estimate. Instant reply, 24/7.",
  keywords: ["handyman hillsborough county", "handyman services hillsborough county"],
  intro:
    "Handyman Pros FL serves all of Hillsborough County, including Tampa, Brandon, Valrico, Riverview, Plant City, Temple Terrace, Lutz and Thonotosassa. Our insured crew handles drywall, TV mounting, doors, fences, fixtures and exterior repairs. Call (656) 205-3185 for an instant reply, 24/7 and a free estimate.",
  paragraphs: [
    "From South Tampa bungalows to Wesley Chapel–border subdivisions, Hillsborough mixes block ranch homes, stucco exteriors and newer build-outs. Our crew bundles drywall patches, fan swaps, fence boards and exterior touch-ups so you are not scheduling five vendors for a half-day list.",
    "Unincorporated Hillsborough and city addresses both fit our routing from Westchase headquarters. Share your ZIP and photos on the first call for the fastest free estimate.",
    "Jobs that need a permit or licensed trade — main electrical, repipes, structural work — are called out on the estimate. Everything else stays on one insured visit when possible.",
  ],
  sections: [
    {
      heading: "Most-requested jobs in Hillsborough",
      bullets: [
        "Wrought-iron and exterior light fixture repair",
        "Wood rot at door frames and trim",
        "Drywall patches and texture match",
        "Fence and gate repair",
        "Cabinet hardware and touch-up painting",
      ],
      paragraphs: [],
    },
  ],
  countyName: "Hillsborough",
  cityLinks: [
    { href: "/locations/tampa", label: "Tampa" },
    { href: "/locations/south-tampa", label: "South Tampa" },
    { href: "/locations/westchase-fl", label: "Westchase" },
    { href: "/locations/carrollwood", label: "Carrollwood" },
    { href: "/locations/citrus-park-fl", label: "Citrus Park" },
    { href: "/locations/town-n-country-fl", label: "Town 'n' Country" },
    { href: "/locations/temple-terrace", label: "Temple Terrace" },
    { href: "/locations/lutz", label: "Lutz" },
    { href: "/locations/odessa-fl", label: "Odessa" },
    { href: "/locations/brandon", label: "Brandon" },
    { href: "/locations/valrico", label: "Valrico" },
    { href: "/locations/riverview", label: "Riverview" },
    { href: "/locations/apollo-beach", label: "Apollo Beach" },
    { href: "/locations/ruskin-sun-city-center", label: "Ruskin / Sun City Center" },
    { href: "/locations/seffner", label: "Seffner" },
    { href: "/locations/plant-city", label: "Plant City" },
    { href: "/locations/thonotosassa", label: "Thonotosassa" },
    { href: "/locations/northdale", label: "Northdale" },
    { href: "/locations/lake-magdalene", label: "Lake Magdalene" },
    { href: "/locations/ybor-city", label: "Ybor City" },
    { href: "/locations/keystone", label: "Keystone" },
  ],
  serviceLinks: [
    { href: "/services/exterior-light-fixture-repair", label: "Exterior light repair" },
    { href: "/services/wood-rot-repair", label: "Wood rot repair" },
    { href: "/services/drywall-repair", label: "Drywall repair" },
    { href: "/services/fence", label: "Fence repair" },
    { href: "/services/handyman/interior-painting", label: "Cabinet and interior painting" },
  ],
  faqs: [
    {
      question: "Which Hillsborough County cities do you serve?",
      answer:
        "All listed cities plus unincorporated Hillsborough — Tampa, Brandon, Valrico, Riverview, Plant City, Temple Terrace, Lutz, Thonotosassa and more.",
    },
    {
      question: "Do you work in unincorporated Hillsborough County?",
      answer: "Yes — share your ZIP on the estimate call so we confirm routing.",
    },
    {
      question: "Do you handle repairs that need a permit?",
      answer:
        "We stay in handyman scope and tell you when a permit or licensed contractor is required before work starts.",
    },
    {
      question: "How fast can you come out?",
      answer: "Instant reply, 24/7 at (656) 205-3185. Same-day is often possible when the crew is already in your ZIP.",
    },
  ],
  schemaServiceName: "Handyman Services in Hillsborough County, FL",
  areaName: "Hillsborough County, FL",
  showAreas: false,
  showNap: true,
  childLinks: [
    { href: "/tampa-bay-handyman-directory", label: "Tampa Bay handyman directory" },
    { href: "/locations/pasco-county", label: "Pasco County hub" },
    { href: "/locations/pinellas-county", label: "Pinellas County hub" },
  ],
  breadcrumbs: [
    { name: "Home", url: "https://handymanprosflorida.com" },
    { name: "Locations", url: "https://handymanprosflorida.com/locations" },
    { name: "Hillsborough County, FL", url: "https://handymanprosflorida.com/locations/hillsborough-county" },
  ],
};

export const pascoCountyHub: CountyHub = {
  path: "/locations/pasco-county",
  h1: "Handyman in Pasco County, FL",
  metaTitle: "Handyman Pasco County FL | Handyman Pros FL",
  metaDescription:
    "Insured handyman crew for Wesley Chapel, Land O Lakes, Zephyrhills, New Port Richey, Trinity and all of Pasco County. Free estimate. Instant reply, 24/7.",
  keywords: ["handyman pasco county", "handyman wesley chapel", "handyman land o lakes"],
  intro:
    "Handyman Pros FL serves Pasco County, including Wesley Chapel, Land O Lakes, Zephyrhills, Dade City, Trinity, Holiday, Hudson and New Port Richey. Our insured crew handles drywall, popcorn ceilings, doors, fences, TV mounting and exterior repairs. Call (656) 205-3185 for an instant reply, 24/7 and a free estimate.",
  paragraphs: [
    "Pasco growth along SR 54 and SR 56 means newer subdivisions next to older ranch homes — different drywall textures, lanai layouts and fence styles on the same route. We plan visits so Wesley Chapel and Land O Lakes jobs can bundle popcorn removal, drywall patches and fence boards in one trip.",
    "Storm season checks matter here: lanai screens, gutter attachments and fence gates take the first hit. Our crew handles minor repairs before damage spreads to fascia and siding.",
  ],
  countyName: "Pasco",
  cityLinks: [
    { href: "/locations/wesley-chapel", label: "Wesley Chapel" },
    { href: "/locations/land-o-lakes", label: "Land O Lakes" },
    { href: "/locations/zephyrhills-fl", label: "Zephyrhills" },
    { href: "/locations/dade-city", label: "Dade City" },
    { href: "/locations/trinity", label: "Trinity" },
    { href: "/locations/holiday", label: "Holiday" },
    { href: "/locations/hudson", label: "Hudson" },
    { href: "/locations/new-port-richey-fl", label: "New Port Richey" },
    { href: "/locations/east-lake", label: "East Lake" },
    { href: "/locations/odessa-fl", label: "Odessa (Pasco side)" },
  ],
  serviceLinks: [
    { href: "/services/popcorn-ceiling-removal", label: "Popcorn ceiling removal" },
    { href: "/services/drywall-repair", label: "Drywall repair" },
    { href: "/services/stucco-crack-repair", label: "Stucco crack repair" },
    { href: "/services/lanai-screen-repair", label: "Lanai screen repair" },
    { href: "/services/fence", label: "Fence repair" },
  ],
  faqs: [
    { question: "Which Pasco County cities do you serve?", answer: "Wesley Chapel, Land O Lakes, Zephyrhills, Dade City, Trinity, Holiday, Hudson, New Port Richey and nearby communities." },
    { question: "Do you work in Wesley Chapel and Land O Lakes?", answer: "Yes — daily routing from Tampa Bay includes both areas." },
    { question: "Can you remove a popcorn ceiling in Pasco County?", answer: "Yes — scrape, skim and paint within handyman scope; pre-1978 texture may need testing first." },
    { question: "How fast can you come out in Pasco?", answer: "Instant reply, 24/7. Morning photos help secure same-day when possible." },
  ],
  schemaServiceName: "Handyman Services in Pasco County, FL",
  areaName: "Pasco County, FL",
  showNap: true,
  childLinks: [
    { href: "/tampa-bay-handyman-directory", label: "Directory" },
    { href: "/locations/hillsborough-county", label: "Hillsborough County" },
  ],
};

export const pinellasCountyHub: CountyHub = {
  path: "/locations/pinellas-county",
  h1: "Handyman in Pinellas County, FL",
  metaTitle: "Handyman Pinellas County FL | Handyman Pros FL",
  metaDescription:
    "Insured handyman crew for Clearwater, St. Petersburg, Largo, Dunedin, Oldsmar, Palm Harbor and all of Pinellas County. Free estimate. Instant reply, 24/7.",
  keywords: ["handyman pinellas county", "handyman clearwater", "handyman palm harbor"],
  intro:
    "Handyman Pros FL serves Pinellas County, including Clearwater, St. Petersburg, Largo, Dunedin, Oldsmar, Palm Harbor, Safety Harbor, Seminole and Gulfport. Our insured crew handles drywall, doors, fans, fences, pressure washing and fixtures. Call (656) 205-3185 for an instant reply, 24/7 and a free estimate.",
  paragraphs: [
    "Coastal salt air and humidity mean sticking sliders, corroded fixture hardware and fence pickets that rot faster than inland Tampa homes. We use appropriate sealants and fasteners for Pinellas lanai and stucco construction.",
    "Child pages for Clearwater, St. Pete and beach communities cover drywall, ceiling fans, door repair and pressure washing — linked below for quick navigation.",
  ],
  countyName: "Pinellas",
  cityLinks: [
    { href: "/locations/clearwater", label: "Clearwater" },
    { href: "/locations/st-petersburg", label: "St. Petersburg" },
    { href: "/locations/largo", label: "Largo" },
    { href: "/locations/dunedin-fl", label: "Dunedin" },
    { href: "/locations/oldsmar-fl", label: "Oldsmar" },
    { href: "/locations/palm-harbor-fl", label: "Palm Harbor" },
    { href: "/locations/safety-harbor-fl", label: "Safety Harbor" },
    { href: "/locations/seminole", label: "Seminole" },
    { href: "/locations/pinellas-park", label: "Pinellas Park" },
    { href: "/locations/gulfport", label: "Gulfport" },
    { href: "/locations/tarpon-springs-fl", label: "Tarpon Springs" },
  ],
  serviceLinks: [
    { href: "/locations/clearwater/pressure-washing", label: "Clearwater pressure washing" },
    { href: "/locations/clearwater/drywall-repair", label: "Clearwater drywall" },
    { href: "/services/pressure-washing-tampa", label: "Pressure washing" },
  ],
  faqs: [
    { question: "Which Pinellas cities do you serve?", answer: "Clearwater, St. Petersburg, Largo, Dunedin, Oldsmar, Palm Harbor and all Pinellas communities listed on this page." },
    { question: "Do you work in St. Petersburg and Clearwater?", answer: "Yes — both cities are core routing areas for our crew." },
    { question: "Do you offer same-day service?", answer: "Often when routing allows — instant reply, 24/7 at (656) 205-3185." },
  ],
  schemaServiceName: "Handyman Services in Pinellas County, FL",
  areaName: "Pinellas County, FL",
  showNap: true,
  childLinks: [{ href: "/tampa-bay-handyman-directory", label: "Directory" }],
};

export const countyHubs = [hillsboroughCountyHub, pascoCountyHub, pinellasCountyHub];
