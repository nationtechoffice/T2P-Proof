import type { CityServicePageData } from "./city-service-pages";
import { siteConfig } from "./site-config";

const baseUrl = siteConfig.url;
const orgId = `${baseUrl}/#organization`;

function pwSchema(path: string, cityLabel: string, serviceName: string): Record<string, unknown>[] {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${baseUrl}${path}#service`,
      name: serviceName,
      serviceType: "Pressure washing",
      provider: { "@id": orgId },
      areaServed: { "@type": "City", name: cityLabel },
      url: `${baseUrl}${path}`,
      offers: { "@type": "Offer", description: "Free estimate, call or text for a price" },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Do you soft wash stucco in " + cityLabel + "?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We soft wash stucco, siding, and lanai screens at low pressure with a cleaning solution — high pressure is for concrete and pavers only.",
          },
        },
        {
          "@type": "Question",
          name: "How do I get a pressure washing estimate?",
          acceptedAnswer: {
            "@type": "Answer",
            text: `Call or text ${siteConfig.phone} for a free estimate. Instant reply, 24/7.`,
          },
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
        { "@type": "ListItem", position: 2, name: "Locations", item: `${baseUrl}/locations` },
        {
          "@type": "ListItem",
          position: 3,
          name: cityLabel,
          item: `${baseUrl}${path.split("/").slice(0, 3).join("/")}`,
        },
        { "@type": "ListItem", position: 4, name: "Pressure Washing", item: `${baseUrl}${path}` },
      ],
    },
  ];
}

export const pressureWashingCityPages: CityServicePageData[] = [
  {
    path: "/locations/brandon/pressure-washing",
    citySlug: "brandon",
    serviceSlug: "pressure-washing",
    title: "Pressure Washing in Brandon, FL | Free Estimate",
    description:
      "Driveway, paver, and lanai pressure washing in Brandon, Bloomingdale, and FishHawk. Soft wash for stucco. Insured crew — (656) 205-3185.",
    h1: "Pressure Washing in Brandon, FL",
    opening:
      "Brandon’s humid summers leave black streaks on north-facing stucco and green algae on pool decks in Providence Lakes and Bloomingdale. Our insured crew pressure washes concrete driveways along Lithia Pinecrest and soft washes siding in FishHawk Ranch without etching paint.",
    noJob: "No job too small — from a single driveway in Kensington Estates to a whole-home wash before listing in La Viva.",
    priceLine: "Free estimate, call or text for a price. Instant reply, 24/7.",
    chips: ["Insured crew", "Free estimate", "Soft wash + pressure wash"],
    cityName: "Brandon",
    cityLabel: "Brandon, FL",
    hubPath: "/locations/brandon",
    serviceLabel: "Pressure Washing",
    sections: [
      {
        h2: "Brandon surfaces we clean",
        list: [
          "Concrete driveways and sidewalks (33510, 33511)",
          "Pavers around pools in FishHawk and Boyette",
          "Lanai floors and pool cages — low pressure on screens",
          "Stucco and vinyl on two-story homes off Brandon Blvd",
          "Fence lines and dumpster pads for Brandon HOAs",
        ],
      },
      {
        h2: "Soft wash vs pressure wash in Brandon",
        paras: [
          "High pressure on stucco near Bloomingdale Ridge can strip paint and force water behind J-channel. We use soft wash on walls and screens, and a surface cleaner on flatwork.",
          "Pair pressure washing with [exterior painting touch-ups](/locations/brandon/exterior-painting) or [lanai screen repair](/services/lanai-screen-repair) on the same route day when scheduling allows.",
        ],
      },
    ],
    areasTitle: "Brandon neighborhoods",
    areas: ["FishHawk Ranch", "Bloomingdale", "Providence Lakes", "Kensington Estates", "La Viva", "Limona"],
    zips: "33508, 33510, 33511",
    nearby: [
      ["/locations/riverview", "Riverview"],
      ["/locations/valrico", "Valrico"],
      ["/services/pressure-washing-tampa", "Pressure washing Tampa Bay guide"],
    ],
    relatedTitle: "Related in Brandon",
    related: [
      ["/locations/brandon/drywall-repair", "Drywall repair"],
      ["/locations/brandon/exterior-painting", "Exterior painting"],
    ],
    formTitle: "Pressure washing estimate in Brandon",
    faqTitle: "Brandon pressure washing FAQs",
    faqs: [
      {
        question: "How much does pressure washing cost in Brandon?",
        answer: "We quote after seeing the surfaces. Free estimate, call or text for a price — low prices and good deals.",
      },
      {
        question: "Will you clean pool cage screens?",
        answer: "Yes, with soft wash pressure so spline and panels stay intact.",
      },
    ],
    schema: pwSchema("/locations/brandon/pressure-washing", "Brandon, FL", "Pressure Washing in Brandon, FL"),
  },
  {
    path: "/locations/riverview/pressure-washing",
    citySlug: "riverview",
    serviceSlug: "pressure-washing",
    title: "Pressure Washing in Riverview, FL | Free Estimate",
    description:
      "Pressure washing driveways, lanais, and siding in Riverview, Boyette, and Summerfield. Insured crew. (656) 205-3185.",
    h1: "Pressure Washing in Riverview, FL",
    opening:
      "Riverview 33578 and 33569 see algae on shaded lanais in Summerfield and tire marks on long driveways in Boyette Woods. Our crew soft washes two-story stucco in Panther Trace and surface-cleans pavers without blasting sand out of joints.",
    noJob: "From a single sidewalk in Alafia to a full exterior wash before a Riverview listing.",
    priceLine: "Free estimate — instant reply, 24/7 at (656) 205-3185.",
    chips: ["Insured crew", "Free estimate", "Lanai-safe soft wash"],
    cityName: "Riverview",
    cityLabel: "Riverview, FL",
    hubPath: "/locations/riverview",
    serviceLabel: "Pressure Washing",
    sections: [
      {
        h2: "Riverview flatwork and lanais",
        paras: [
          "Pool decks in Creekside Preserve hold moisture under foot — we pre-treat mildew before rinsing. Driveways off Big Bend Road often need degreaser at the garage apron.",
        ],
      },
      {
        h2: "ZIP codes we route daily",
        paras: ["33569 (Boyette / FishHawk border)", "33578 (central Riverview)", "33579 (south Riverview near Gibsonton line)"],
      },
    ],
    areasTitle: "Riverview areas",
    areas: ["Boyette Woods", "Summerfield", "Panther Trace", "Creekside Preserve", "Alafia"],
    zips: "33569, 33578, 33579",
    nearby: [
      ["/locations/brandon", "Brandon"],
      ["/locations/apollo-beach", "Apollo Beach"],
    ],
    relatedTitle: "Related services",
    related: [[ "/services/pressure-washing-tampa", "Tampa Bay pressure washing guide" ]],
    formTitle: "Riverview pressure washing quote",
    faqTitle: "Riverview FAQs",
    faqs: [
      {
        question: "Do you work in FishHawk from Riverview routing?",
        answer: "Yes — FishHawk shares crews with Brandon and Riverview routes. Free estimate by text with photos.",
      },
    ],
    schema: pwSchema("/locations/riverview/pressure-washing", "Riverview, FL", "Pressure Washing in Riverview, FL"),
  },
  {
    path: "/locations/lutz/pressure-washing",
    citySlug: "lutz",
    serviceSlug: "pressure-washing",
    title: "Pressure Washing in Lutz, FL | Free Estimate",
    description:
      "Pressure washing in Lutz, Cheval, and Lake Fern — driveways, pavers, and soft wash stucco. (656) 205-3185.",
    h1: "Pressure Washing in Lutz, FL",
    opening:
      "Lutz 33549 and 33558 homes on well water sometimes see orange staining on aprons; Cheval gated entries need low impact on paver borders. We adjust pressure for Lake Fern oaks’ shaded sidewalks and two-story stucco in Heritage Harbor.",
    noJob: "Driveways, lanai floors, and exterior soft wash for Lutz acreage and subdivision homes alike.",
    priceLine: "Call or text for a free estimate — instant reply, 24/7.",
    chips: ["Insured crew", "Free estimate", "Paver-safe cleaning"],
    cityName: "Lutz",
    cityLabel: "Lutz, FL",
    hubPath: "/locations/lutz",
    serviceLabel: "Pressure Washing",
    sections: [
      {
        h2: "Lutz-specific issues",
        paras: [
          "Oak pollen and shade combine on north sides near US-41 — soft wash handles green streaks without damaging Hardy board or stucco.",
          "Long rural driveways off Lutz Lake Fern Road may need a two-pass degrease at the street entrance.",
        ],
      },
    ],
    areasTitle: "Lutz communities",
    areas: ["Cheval", "Heritage Harbor", "Lake Fern", "Sunset Hills", "Livingston Estates"],
    zips: "33549, 33558, 33559",
    nearby: [
      ["/locations/wesley-chapel", "Wesley Chapel"],
      ["/locations/carrollwood", "Carrollwood"],
    ],
    relatedTitle: "Related",
    related: [[ "/services/pressure-washing-tampa", "Pressure washing Tampa hub" ]],
    formTitle: "Lutz pressure washing",
    faqTitle: "Lutz pressure washing FAQs",
    faqs: [
      {
        question: "Can you remove rust stains from well water?",
        answer: "Often yes on concrete with the right treatment — send photos for a free estimate.",
      },
    ],
    schema: pwSchema("/locations/lutz/pressure-washing", "Lutz, FL", "Pressure Washing in Lutz, FL"),
  },
  {
    path: "/locations/clearwater/pressure-washing",
    citySlug: "clearwater",
    serviceSlug: "pressure-washing",
    title: "Pressure Washing in Clearwater, FL | Free Estimate",
    description:
      "Pressure washing Clearwater, Island Estates, Coachman, and Countryside — salt air mildew and driveway cleaning. (656) 205-3185.",
    h1: "Pressure Washing in Clearwater, FL",
    opening:
      "Clearwater 33755–33767 mixes Gulf breezes with mildew on north walls. Island Estates condos need careful soft wash around balcony sliders; Coachman ranch homes get driveway surface cleaning and lanai rinses without tearing pool screens.",
    noJob: "From Clearwater Beach walk-ups to Countryside cul-de-sacs — free estimate first.",
    priceLine: "Free estimate, low prices and good deals — (656) 205-3185.",
    chips: ["Insured crew", "Free estimate", "Coastal soft wash"],
    cityName: "Clearwater",
    cityLabel: "Clearwater, FL",
    hubPath: "/locations/clearwater",
    serviceLabel: "Pressure Washing",
    sections: [
      {
        h2: "Clearwater coastal notes",
        paras: [
          "Salt spray accelerates algae on stucco in Island Estates and Sand Key — we rinse plants and use coastal-safe cleaners.",
          "Countryside 33761 HOA communities often schedule driveway + sidewalk packages before season.",
        ],
      },
    ],
    areasTitle: "Clearwater areas",
    areas: ["Island Estates", "Coachman", "Countryside", "Morningside", "Del Oro Groves"],
    zips: "33755, 33759, 33761, 33764, 33767",
    nearby: [
      ["/locations/dunedin-fl", "Dunedin"],
      ["/locations/largo", "Largo"],
    ],
    relatedTitle: "Related Clearwater services",
    related: [
      ["/locations/clearwater/drywall-repair", "Drywall repair"],
      ["/locations/clearwater/ceiling-fan-installation", "Ceiling fan installation"],
    ],
    formTitle: "Clearwater pressure washing estimate",
    faqTitle: "Clearwater FAQs",
    faqs: [
      {
        question: "Do you pressure wash Clearwater Beach condos?",
        answer: "Yes, where water access and HOA rules allow — send photos and parking notes for a free estimate.",
      },
    ],
    schema: pwSchema("/locations/clearwater/pressure-washing", "Clearwater, FL", "Pressure Washing in Clearwater, FL"),
  },
];
