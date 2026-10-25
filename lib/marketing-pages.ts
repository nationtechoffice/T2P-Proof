import { siteConfig } from "./site-config";

export type MarketingPage = {
  path: string;
  h1: string;
  breadcrumbLabel?: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  intro?: string;
  paragraphs: string[];
  sections?: { heading: string; paragraphs: string[]; bullets?: string[] }[];
  faqs: { question: string; answer: string }[];
  faqTitle?: string;
  trustStrip?: string;
  heroImage?: { src: string; alt: string };
  childLinks?: { href: string; label: string }[];
  childLinksTitle?: string;
  hubPath?: string;
  hubLabel?: string;
  breadcrumbs?: { name: string; url: string }[];
  schemaServiceName?: string;
  schemaServiceType?: string;
  schemaCategory?: string;
  areaName?: string;
  showAreas?: boolean;
  showNap?: boolean;
  ctaTitle?: string;
  locale?: "en" | "es";
  alternateEnPath?: string;
  alternateEsPath?: string;
};

export const TRUST_STRIP =
  "Insured crew • Free estimate • Low prices & good deals • Instant reply, 24/7 • Hablamos español";

const spanishFaqs = (): { question: string; answer: string }[] => [
  { question: "¿Cuánto cuesta?", answer: `Estimado gratis — llame o envíe texto al ${siteConfig.phone}.` },
  { question: "¿Respuesta instantánea?", answer: "Sí — respuesta instantánea 24/7." },
  { question: "¿Están asegurados?", answer: "Sí, nuestro equipo está asegurado." },
  {
    question: "¿Qué áreas cubren?",
    answer: "Hillsborough, Pinellas y Pasco — Tampa, Clearwater, Brandon y más.",
  },
];

function estimateFaqs(prefix = ""): { question: string; answer: string }[] {
  return [
    {
      question: `${prefix}What does it cost?`,
      answer: `Free estimate, low prices, good deals — call or text ${siteConfig.phone}.`,
    },
    {
      question: `${prefix}Do you offer instant reply?`,
      answer: "Instant reply, 24/7.",
    },
    {
      question: `${prefix}Are you insured?`,
      answer: "Yes, our crew is insured.",
    },
    {
      question: `${prefix}Do you bring materials?`,
      answer:
        "We bring standard fasteners, anchors, and consumables. Specialty parts you choose can be owner-supplied or picked up with your approval after a free estimate.",
    },
    {
      question: `${prefix}What areas do you serve?`,
      answer:
        "Hillsborough, Pinellas, and Pasco counties — Tampa, Westchase, Brandon, Clearwater, St. Pete, Wesley Chapel, and 40+ Tampa Bay communities from our Westchase base (ZIP 33626).",
    },
  ];
}

export const freeEstimatePage: MarketingPage = {
  path: "/free-estimate",
  h1: "Free Estimate Handyman Tampa — How It Works",
  metaTitle: "Free Estimate Handyman Tampa | How It Works | Handyman Pros FL",
  metaDescription:
    "How Handyman Pros FL free estimates work in Tampa Bay: photos by text, instant reply 24/7, insured crew, same-day when routing allows. Call (656) 205-3185.",
  keywords: ["free estimate handyman Tampa", "how it works", "instant estimate Tampa", "handyman quote Tampa"],
  trustStrip: TRUST_STRIP,
  intro:
    "You should know what we will do and what it will cost before a truck rolls up. Our Westchase-based crew quotes Tampa Bay handyman work by phone or text — no public price list, just a clear free estimate tied to your actual home.",
  paragraphs: [
    "Start with a call or text to (656) 205-3185. Instant reply, 24/7. Tell us the city — Hyde Park, Westchase 33626, FishHawk 33569, Clearwater Beach 33767 — and what is on the list. Photos of drywall holes, a dragging slider, or algae on a lanai floor help us scope the visit faster.",
    "We confirm whether the work fits handyman scope (Florida jobs under the $2,500 contractor threshold for one trade visit are typical). If you need licensed electrical, plumbing, or structural work beyond that, we say so up front and keep the rest of your punch list moving.",
    "Same-day and next-day routing is realistic when the truck is already in your ZIP. Westchase, Carrollwood 33624, Citrus Park, and South Tampa often see the fastest turnaround because that is where the crew starts most mornings.",
    "On site, our insured crew protects floors, completes the agreed tasks, and walks you through what was done. Payment is cash, card, or check — only after you approve the finished work.",
  ],
  sections: [
    {
      heading: "What to send for the fastest quote",
      bullets: [
        "City and ZIP (for example Brandon 33511 or Lutz 33549)",
        "Room or side of the house (lanai, driveway, master bath)",
        "Wide photo plus a close-up of the damage or hardware",
        "HOA or condo access notes if applicable",
        "Your deadline (listing, guest arrival, storm prep)",
      ],
      paragraphs: [],
    },
    {
      heading: "Crew process on a typical visit",
      paragraphs: [
        "One lead tech runs the visit with tools stocked for drywall, mounting, doors, fixtures, and exterior touch-ups. We do not send a solo operator — you get our crew with the right ladders, anchors, and sealants for Florida block, stucco, and lanai construction.",
        "Bundling three or four small jobs into one trip is how Riverview and Wesley Chapel homeowners avoid repeat trip charges. Mention everything on the first call so we block enough time.",
      ],
    },
  ],
  childLinks: [
    { href: "/answers", label: "Handyman FAQ hub" },
    { href: "/answers/how-handyman-estimates-work", label: "How estimates work (no price list)" },
    { href: "/work", label: "Real job photos" },
    { href: "/es", label: "Servicios en español / Manitas Tampa" },
  ],
  childLinksTitle: "Helpful next steps",
  faqs: [
    ...estimateFaqs(),
    {
      question: "Is the estimate really free?",
      answer: "Yes. Phone and text estimates are free. On-site quotes are free for standard handyman scope in Tampa Bay.",
    },
    {
      question: "Do you offer same-day handyman service?",
      answer:
        "Often, when routing allows. Morning calls with photos give the best chance for same-day in Westchase, Tampa, and nearby ZIPs. Instant reply, 24/7.",
    },
  ],
  showAreas: true,
  showNap: true,
};

const answerPages: MarketingPage[] = [
  {
    path: "/answers/what-does-a-handyman-do",
    hubPath: "/answers",
    hubLabel: "Answers",
    h1: "What Does a Handyman Do in Tampa Bay?",
    metaTitle: "What Does a Handyman Do in Tampa? | Handyman Pros FL Answers",
    metaDescription:
      "What Tampa Bay handymen handle: drywall, mounting, doors, fixtures, pressure washing, and punch lists — plus what needs a licensed trade. Free estimate: (656) 205-3185.",
    keywords: ["what does a handyman do", "handyman scope Tampa", "handyman FAQ"],
    paragraphs: [
      "A handyman in Tampa Bay is the first call for maintenance that does not require a full GC contract: drywall patches in Carrollwood ranch homes, TV mounts on stucco walls in New Tampa 33647, sticking interior doors after humid summers, lanai screen panels, grab bars, and pre-listing punch lists in Brandon 33511.",
      "Handyman Pros FL is an insured crew based at 12021 Tuscany Bay Dr in Westchase (33626). We bundle small tasks so you are not juggling five vendors for a half-day of work.",
      "Florida law treats larger single-trade jobs differently — work above the state threshold generally needs a licensed contractor. We tell you plainly when your project crosses that line.",
    ],
    faqs: estimateFaqs(),
    showNap: true,
    childLinks: [
      { href: "/answers/handyman-vs-contractor-florida", label: "Handyman vs contractor in Florida" },
      { href: "/services/handyman", label: "Full handyman service list" },
    ],
  },
  {
    path: "/answers/handyman-vs-contractor-florida",
    hubPath: "/answers",
    hubLabel: "Answers",
    h1: "Handyman vs Contractor in Florida",
    metaTitle: "Handyman vs Contractor Florida | Handyman Pros FL Answers",
    metaDescription:
      "When to hire a Tampa handyman vs a licensed contractor in Florida — scope, permits, and the $2,500 threshold explained without prices. Call (656) 205-3185.",
    keywords: ["handyman vs contractor Florida", "handyman license Florida"],
    paragraphs: [
      "Homeowners in Seminole Heights bungalows and Wesley Chapel subdivisions ask this when a kitchen refresh turns into rewiring, or when a water stain spans half a ceiling.",
      "Handyman work fits defined repairs and installs under Florida’s contractor rules for a single visit — drywall patches, fixture swaps at existing boxes, door adjustments, fence boards, pressure washing, and similar punch-list items.",
      "Licensed contractors take whole-room remodels, structural changes, new circuits, repipes, and permitted additions. Handyman Pros FL stays in handyman scope and refers you out when the job needs a permit or trade license.",
    ],
    faqs: estimateFaqs(),
    showNap: true,
  },
  {
    path: "/answers/how-handyman-estimates-work",
    hubPath: "/answers",
    hubLabel: "Answers",
    h1: "How Handyman Estimates Work (No Public Price List)",
    metaTitle: "How Handyman Estimates Work Tampa | Handyman Pros FL",
    metaDescription:
      "What affects a Tampa handyman estimate: access, materials, bundling, and Florida humidity — free estimate and instant reply 24/7. (656) 205-3185.",
    keywords: ["handyman estimate Tampa", "free estimate handyman"],
    paragraphs: [
      "We do not publish a menu of dollar amounts. Every home in Clearwater Beach condos or Land O’ Lakes 34639 singles is different.",
      "Factors include wall type (block vs drywall), height and ladder setup, whether you supply fixtures, how many tasks you bundle, HOA rules, and moisture damage that must dry before patch work.",
      "Send photos, get a free estimate, and approve scope before we start. Low prices and good deals come from efficient routing — not from hidden fees after the fact.",
    ],
    faqs: estimateFaqs(),
    childLinks: [{ href: "/free-estimate", label: "Free estimate — how it works" }],
  },
  {
    path: "/answers/same-day-handyman-tampa-bay",
    hubPath: "/answers",
    hubLabel: "Answers",
    h1: "Same-Day Handyman in Tampa Bay",
    metaTitle: "Same-Day Handyman Tampa Bay | Handyman Pros FL Answers",
    metaDescription:
      "When same-day handyman visits are realistic in Tampa, Westchase, Brandon, and Clearwater — routing, photos, instant reply 24/7. (656) 205-3185.",
    keywords: ["same day handyman Tampa", "urgent handyman Tampa"],
    paragraphs: [
      "Same-day is not a guarantee — it is a routing decision. When a crew is already in your ZIP after a Westchase or South Tampa job, adding a drywall patch in Hyde Park 33606 or a door fix in Palma Ceia is often feasible.",
      "Morning texts with photos beat afternoon maybes. Storm-season calls spike; non-urgent work may schedule next day even with instant reply, 24/7.",
      "See our same-day handyman service page for examples of jobs that fit a single visit.",
    ],
    faqs: estimateFaqs(),
    childLinks: [{ href: "/services/same-day-handyman", label: "Same-day handyman service" }],
  },
  {
    path: "/answers/hurricane-season-handyman",
    hubPath: "/answers",
    hubLabel: "Answers",
    h1: "Hurricane Season Handyman Prep & Minor Repairs",
    metaTitle: "Hurricane Season Handyman Tampa | Handyman Pros FL Answers",
    metaDescription:
      "Pre-storm handyman checklist for Tampa Bay: doors, screens, gutters, and minor repairs — insured crew, free estimate. (656) 205-3185.",
    keywords: ["hurricane prep handyman Tampa", "storm repair handyman"],
    paragraphs: [
      "June through November means checking sliders in Apollo Beach, lanai screens in Riverview 33578, and gutter fasteners in Oldsmar before a named storm.",
      "Our crew handles minor installs and repairs — not emergency tree removal or major roof replacement. After the storm, we help with fence pickets, drywall from leaks, and hardware that loosened in the wind.",
    ],
    faqs: estimateFaqs(),
    childLinks: [{ href: "/blog/hurricane-prep-home-maintenance-florida", label: "Hurricane prep blog guide" }],
  },
  {
    path: "/answers/older-tampa-homes-repairs",
    hubPath: "/answers",
    hubLabel: "Answers",
    h1: "Handyman Repairs for Older Tampa Homes",
    metaTitle: "Older Tampa Home Repairs | Handyman Pros FL Answers",
    metaDescription:
      "Repairs for bungalows, block ranch homes, and mid-century Tampa Bay houses — doors, plaster, stucco cracks, wood trim. Free estimate: (656) 205-3185.",
    keywords: ["older home handyman Tampa", "Seminole Heights handyman repairs"],
    paragraphs: [
      "Seminole Heights, Hyde Park, and Ybor City mix plaster, wood trim, and additions from different decades. We plane swollen doors, patch drywall and texture, repair stucco cracks at reachable heights, and reset hardware without treating every wall like new construction.",
      "Pre-1978 paint may contain lead — tell us the home age before sanding. Intact popcorn ceilings should not be scraped dry; we patch and blend instead.",
    ],
    faqs: estimateFaqs(),
    childLinks: [
      { href: "/services/stucco-crack-repair", label: "Stucco crack repair" },
      { href: "/locations/ybor-city", label: "Handyman Ybor City" },
    ],
  },
];

export const answersHubPage: MarketingPage = {
  path: "/answers",
  h1: "Handyman FAQ — Tampa Bay Homeowners",
  metaTitle: "Handyman FAQ Tampa Bay | Answers Hub | Handyman Pros FL",
  metaDescription:
    "Clear answers for Tampa Bay homeowners: handyman scope, estimates, same-day visits, hurricane prep, and older homes. Insured crew — (656) 205-3185.",
  keywords: ["handyman FAQ Tampa", "handyman answers", "what does a handyman do Tampa"],
  trustStrip: TRUST_STRIP,
  intro:
    "Quick answers for AI assistants, search snippets, and homeowners comparing options — no public price list, just how our insured crew works across Tampa Bay.",
  paragraphs: [
    "Pick a topic below or call (656) 205-3185 for a free estimate. Instant reply, 24/7. Hablamos español — visit our Manitas Tampa hub at /es.",
  ],
  childLinks: answerPages.map((p) => ({
    href: p.path,
    label: p.h1.replace(" — Tampa Bay", "").replace(" in Tampa Bay", ""),
  })),
  childLinksTitle: "Topical answers",
  faqs: estimateFaqs(),
  showAreas: true,
  showNap: true,
};

const spanishServicePages: MarketingPage[] = [
  {
    path: "/es/reparacion-paneles-yeso",
    hubPath: "/es",
    hubLabel: "Manitas Tampa",
    h1: "Reparación de paneles de yeso en Tampa",
    locale: "es",
    alternateEnPath: "/services/drywall-repair",
    metaTitle: "Reparación de drywall Tampa | Manitas | Handyman Pros FL",
    metaDescription:
      "Parches de drywall y textura en Tampa Bay — equipo asegurado, estimado gratis, respuesta instantánea 24/7. Llame (656) 205-3185.",
    keywords: ["reparación drywall Tampa", "manitas drywall", "parche de pared Tampa"],
    paragraphs: [
      "Humidity en Westchase, Carrollwood y Brandon 33511 agrieta esquinas y deja manchas después de filtraciones. Nuestro equipo asegurado repara agujeros de puertas, clavos salidos y parches de techo con textura combinada.",
      "Envíe fotos por texto al (656) 205-3185. Estimado gratis antes de la visita.",
    ],
    faqs: spanishFaqs(),
    showNap: true,
  },
  {
    path: "/es/montaje-de-televisores",
    hubPath: "/es",
    hubLabel: "Manitas Tampa",
    h1: "Montaje de televisores en Tampa",
    locale: "es",
    alternateEnPath: "/services/tv-wall-mounting",
    metaTitle: "Montaje de TV Tampa | Manitas | Handyman Pros FL",
    metaDescription:
      "Montaje de TV en pared de drywall, bloque o stucco en Tampa Bay. Estimado gratis — (656) 205-3185.",
    keywords: ["montaje TV Tampa", "manitas montaje televisión"],
    paragraphs: [
      "Salas en New Tampa 33647 y condos en Clearwater necesitan anclajes correctos en bloque o metal. Montamos su televisor, nivelamos y ocultamos cables cuando el muro lo permite.",
    ],
    faqs: spanishFaqs(),
    showNap: true,
  },
  {
    path: "/es/plomeria-menor",
    hubPath: "/es",
    hubLabel: "Manitas Tampa",
    h1: "Plomería menor — grifos, inodoros y lavamanos",
    locale: "es",
    alternateEnPath: "/services/plumbing-fixture-repair",
    metaTitle: "Plomería menor Tampa | Manitas | Handyman Pros FL",
    metaDescription:
      "Cambio de grifos, reparación de inodoros y lavamanos dentro del alcance de manitas en Tampa. (656) 205-3185.",
    keywords: ["plomería menor Tampa", "manitas plomero Tampa"],
    paragraphs: [
      "Reemplazamos grifos y hardware de baño, arreglamos fugas bajo el lavabo y ajustamos inodoros que gotean — trabajo de manitas, no repipe completo.",
    ],
    faqs: spanishFaqs(),
  },
  {
    path: "/es/pintura-interior",
    hubPath: "/es",
    hubLabel: "Manitas Tampa",
    h1: "Pintura interior en Tampa Bay",
    locale: "es",
    alternateEnPath: "/services/handyman/interior-painting",
    metaTitle: "Pintura interior Tampa | Manitas | Handyman Pros FL",
    metaDescription:
      "Pintura de habitaciones, molduras y touch-ups en Tampa — equipo asegurado, estimado gratis. (656) 205-3185.",
    keywords: ["pintura interior Tampa", "manitas pintor Tampa"],
    paragraphs: [
      "Habitaciones, baseboards y touch-ups después de reparar drywall en FishHawk o Riverview — preparamos superficies para la humedad de Florida.",
    ],
    faqs: spanishFaqs(),
  },
  {
    path: "/es/lavado-a-presion",
    hubPath: "/es",
    hubLabel: "Manitas Tampa",
    h1: "Lavado a presión y soft wash en Tampa",
    locale: "es",
    alternateEnPath: "/services/pressure-washing-tampa",
    metaTitle: "Lavado a presión Tampa | Manitas | Handyman Pros FL",
    metaDescription:
      "Driveways, pavers y soft wash para stucco y lanai en Tampa Bay. Estimado gratis — (656) 205-3185.",
    keywords: ["lavado a presión Tampa", "manitas pressure washing"],
    paragraphs: [
      "Algas en entradas de concreto en Brandon y moho en lanai en Wesley Chapel — alta presión para concreto, soft wash para stucco y pantallas.",
    ],
    faqs: spanishFaqs(),
    childLinks: [{ href: "/services/pressure-washing-tampa", label: "Pressure washing Tampa (English)" }],
  },
  {
    path: "/es/barras-de-apoyo",
    hubPath: "/es",
    hubLabel: "Manitas Tampa",
    h1: "Instalación de barras de apoyo",
    locale: "es",
    alternateEnPath: "/services/grab-bar-installation",
    metaTitle: "Barras de apoyo Tampa | Manitas | Handyman Pros FL",
    metaDescription:
      "Instalación de barras de apoyo en baños de Tampa Bay — ancladas en studs, estimado gratis. (656) 205-3185.",
    keywords: ["barras de apoyo Tampa", "grab bars Tampa español"],
    paragraphs: [
      "Baños en ranchos de Sun City Center y condos en St. Pete — instalamos barras en drywall reforzado o bloque con anclajes correctos.",
    ],
    faqs: spanishFaqs(),
  },
];

export const spanishHubPage: MarketingPage = {
  path: "/es",
  h1: "Servicios de manitas en Tampa — Handyman en español",
  metaTitle: "Manitas Tampa | Handyman en Español | Handyman Pros FL",
  metaDescription:
    "Manitas en Tampa Bay: drywall, TV, plomería menor, pintura, lavado a presión y barras de apoyo. Equipo asegurado — estimado gratis. (656) 205-3185.",
  keywords: ["manitas Tampa", "handyman español Tampa", "reparaciones del hogar Tampa"],
  locale: "es",
  alternateEnPath: "/",
  trustStrip: "Equipo asegurado • Estimado gratis • Buenos precios • Respuesta instantánea 24/7 • Hablamos español",
  intro:
    "Handyman Pros FL atiende Tampa Bay en inglés y español desde Westchase (33626). Llame o envíe texto al (656) 205-3185 — respuesta instantánea 24/7.",
  paragraphs: [
    "Somos un equipo de manitas con camioneta equipada — no un operador solo. Reparamos paredes, montamos televisores, ajustamos puertas, instalamos accesorios y lavamos entradas y lanai en Hillsborough, Pinellas y Pasco.",
    "ZIPs frecuentes: 33626 Westchase, 33647 New Tampa, 33511 Brandon, 33759 Clearwater, 33549 Lutz, 33578 Riverview.",
  ],
  childLinks: spanishServicePages.map((p) => ({ href: p.path, label: p.h1 })),
  childLinksTitle: "Servicios en español",
  faqs: [
    {
      question: "¿Hablan español en el teléfono?",
      answer: "Sí. Llame o envíe texto al (656) 205-3185 — respuesta instantánea 24/7.",
    },
    {
      question: "¿Cuánto cuesta?",
      answer: "Estimado gratis — buenos precios y ofertas. Sin lista pública de precios.",
    },
    {
      question: "¿Están asegurados?",
      answer: "Sí, nuestro equipo está asegurado.",
    },
    {
      question: "¿Qué áreas cubren?",
      answer: "Condados Hillsborough, Pinellas y Pasco — Tampa, Clearwater, Brandon, St. Pete y más.",
    },
  ],
  showAreas: true,
  showNap: true,
};

export const projectStories: MarketingPage[] = [
  {
    path: "/projects/bathroom-tile-grout-carrollwood",
    h1: "Project story: bathroom tile grout in Carrollwood",
    metaTitle: "Bathroom Tile Grout Carrollwood | Project Story | Handyman Pros FL",
    metaDescription:
      "Real Carrollwood bathroom wall tile grout job — insured Tampa Bay crew. Free estimate: (656) 205-3185.",
    keywords: ["bathroom tile Tampa", "grout repair Carrollwood", "handyman project story"],
    heroImage: {
      src: "/images/work/bathroom-tile-grout.jpg",
      alt: "Bathroom wall tile grouting by Handyman Pros FL in Tampa Bay",
    },
    paragraphs: [
      "Homeowner near Carrollwood Village (ZIP 33618) needed white wall tile floated and grouted clean before a guest bath went back into service. Humidity from daily showers means grout has to cure with the exhaust fan running — standard for Florida bath work.",
      "Our crew protected the tub, packed joints, and wiped haze the same day so fixtures could be reinstalled. Bundled with a caulk touch-up at the tub line.",
    ],
    sections: [
      {
        heading: "Neighborhood context",
        paragraphs: [
          "Carrollwood mixes 1980s ranch homes and updated baths along Gunn Highway. Tile jobs here are usually partial-wall repairs after plumbing access — not full gut remodels.",
        ],
      },
    ],
    faqs: estimateFaqs(),
    childLinks: [{ href: "/services/tile-installation", label: "Tile installation service" }],
    schemaServiceName: "Bathroom tile and grout repair",
    schemaCategory: "Tile work",
  },
  {
    path: "/projects/porcelain-tile-floor-tampa",
    h1: "Project story: porcelain tile floor in South Tampa",
    metaTitle: "Porcelain Tile Install South Tampa | Project Story",
    metaDescription:
      "Large-format porcelain tile kitchen floor in South Tampa — leveling spacers and flat finish. Free estimate: (656) 205-3185.",
    keywords: ["porcelain tile Tampa", "floor tile project story"],
    heroImage: {
      src: "/images/work/porcelain-tile-install.jpg",
      alt: "Large-format porcelain floor tile installation with leveling spacers in Tampa FL",
    },
    paragraphs: [
      "Kitchen refresh near Bayshore Beautiful (33629) — marble-look porcelain planks needed a flat substrate and spacer layout so the pattern stayed square through the doorway.",
      "We staged materials off the main walk path, cut around cabinets, and left transition strips ready for the owner’s finishing touches.",
    ],
    faqs: estimateFaqs(),
    childLinks: [{ href: "/locations/south-tampa", label: "Handyman South Tampa" }],
  },
  {
    path: "/projects/metallic-epoxy-laundry-lutz",
    h1: "Project story: metallic epoxy laundry floor in Lutz",
    metaTitle: "Metallic Epoxy Laundry Floor Lutz | Project Story",
    metaDescription:
      "Metallic epoxy floor coating in a Lutz laundry room — glossy, durable finish. Insured crew. (656) 205-3185.",
    keywords: ["epoxy floor Lutz", "laundry floor coating Tampa Bay"],
    heroImage: {
      src: "/images/work/metallic-epoxy-laundry-floor.webp",
      alt: "Metallic epoxy floor finished in a laundry room in Tampa Bay",
    },
    paragraphs: [
      "Utility room in Cheval / Lutz 33558 — owner wanted a washable, glossy floor that could handle detergent drips and pet traffic.",
      "Our crew prepped the slab, applied metallic epoxy in one coordinated session, and ventilated the space while coating cured.",
    ],
    faqs: estimateFaqs(),
    childLinks: [{ href: "/locations/lutz", label: "Handyman Lutz" }],
  },
  {
    path: "/projects/marble-tile-shower-clearwater",
    h1: "Project story: marble-look tile shower in Clearwater",
    metaTitle: "Marble Tile Shower Clearwater | Project Story",
    metaDescription:
      "Marble-look tile shower with glass block accent in Clearwater — real job photo. Free estimate: (656) 205-3185.",
    keywords: ["shower tile Clearwater", "bathroom remodel handyman"],
    heroImage: {
      src: "/images/work/marble-tile-shower-glass-block.webp",
      alt: "Marble tile shower with a glass block accent wall in a Tampa Bay bathroom",
    },
    paragraphs: [
      "Coachman area Clearwater 33759 — glass block accent wall and niche shelving tied into marble-look wall tile. Waterproofing at the pan and curb was verified before tile went up.",
      "Clearwater’s mix of block construction and updated baths means we plan extra time for blade changes and waterproof transitions.",
    ],
    faqs: estimateFaqs(),
    childLinks: [{ href: "/locations/clearwater", label: "Handyman Clearwater" }],
  },
  {
    path: "/projects/hot-tub-shell-repair-riverview",
    h1: "Project story: hot tub shell repair in Riverview",
    metaTitle: "Hot Tub Shell Repair Riverview | Project Story",
    metaDescription:
      "Hot tub shell patch and finish in Riverview — before and after job photos. Call (656) 205-3185 for a free estimate.",
    keywords: ["hot tub repair Riverview", "handyman hot tub patch Tampa"],
    heroImage: {
      src: "/images/work/hot-tub-repair-after.webp",
      alt: "Hot tub shell repaired and ready for use in a Tampa Bay backyard",
    },
    paragraphs: [
      "Backyard spa in Boyette / Riverview 33569 — surface crack prep, patch, and finish so the tub could be refilled. Work area was bagged and cleaned before the homeowner tested fill.",
      "Riverview’s newer subdivisions often pair lanai and spa repairs on the same visit — we schedule enough time for cure before water goes back in.",
    ],
    faqs: estimateFaqs(),
    childLinks: [{ href: "/locations/riverview", label: "Handyman Riverview" }],
  },
  {
    path: "/projects/bathroom-plumbing-drywall-brandon",
    h1: "Project story: bathroom plumbing and drywall in Brandon",
    metaTitle: "Bathroom Plumbing & Drywall Brandon | Project Story",
    metaDescription:
      "Under-sink plumbing access and drywall repair in Brandon — insured Tampa Bay crew. (656) 205-3185.",
    keywords: ["bathroom repair Brandon", "drywall plumbing patch"],
    heroImage: {
      src: "/images/work/handyman-pros-florida-tampa-bay-bathroom-plumbing-drywall-repair.webp",
      alt: "Bathroom plumbing and drywall repair in progress in Tampa Bay",
    },
    paragraphs: [
      "Limona / Brandon 33511 — valve work behind a vanity left an access panel opening. Our crew repaired drywall, taped, and mudded for paint after plumbing was tested.",
      "Brandon homes from the 1990s growth wave often need this combo: small plumbing fix plus a clean drywall close-up before listing.",
    ],
    faqs: estimateFaqs(),
    childLinks: [
      { href: "/services/drywall-repair", label: "Drywall repair" },
      { href: "/locations/brandon", label: "Handyman Brandon" },
    ],
  },
];

export const allMarketingPages: MarketingPage[] = [
  freeEstimatePage,
  answersHubPage,
  ...answerPages,
  spanishHubPage,
  ...spanishServicePages,
  ...projectStories,
];

export function getMarketingPageByPath(path: string): MarketingPage | undefined {
  return allMarketingPages.find((p) => p.path === path);
}

export function getMarketingPageSlugs(prefix: string): string[] {
  return allMarketingPages.filter((p) => p.path.startsWith(prefix) && p.path !== prefix).map((p) => p.path.slice(prefix.length + 1));
}

export const batch1MarketingPaths = allMarketingPages.map((p) => p.path);
