import { siteConfig } from "./site-config";
import { serviceDescription, serviceTitle } from "./instant-estimate";

export const schemaAreaServed = [
    "Tampa, FL",
    "Clearwater, FL",
    "St. Petersburg, FL",
    "Westchase, FL",
    "Palm Harbor, FL",
    "Dunedin, FL",
    "Oldsmar, FL",
    "Town 'N' Country, FL",
    "Citrus Park, FL",
    "Safety Harbor, FL",
    "Tarpon Springs, FL",
    "Largo, FL",
    "New Port Richey, FL",
    "Wesley Chapel, FL",
    "Hillsborough County, FL",
    "Pinellas County, FL",
] as const;

export const schemaServicesOffered = [
  "TV Wall Mounting",
  "Drywall Patching & Repair",
  "Electrical Fixture Installation",
  "Plumbing Fixture Repair",
  "Furniture Assembly",
  "Door Repair",
  "Tile Work",
  "Gutter Cleaning",
  "Exterior Painting",
] as const;

export const schemaSameAs = [
  "https://www.facebook.com/profile.php?id=61591619618815",
  "https://share.google/aKnmum6pV5rYGmwY2",
] as const;

export const schemaPhone = "+1-656-205-3185";
export const schemaUrl = "https://handymanprosflorida.com/";

export interface CoreService {
  slug: string;
  name: string;
  h1: string;
  keyword: string;
  image: string;
  imageAlt: string;
  intro: string;
  paragraphs: string[];
  bullets: string[];
  faqs: { question: string; answer: string }[];
}

export interface TargetLocation {
  slug: string;
  city: string;
  displayName: string;
  county: string;
  zipHint: string;
  neighborhoods: string[];
  intro: string;
  paragraphs: string[];
  faqs: { question: string; answer: string }[];
}

export const coreServices: CoreService[] = [
  {
    slug: "tv-wall-mounting",
    name: "TV Wall Mounting",
    h1: "TV Wall Mounting in Tampa, FL",
    keyword: "TV wall mounting",
    image: "/images/work/service-van-tampa.jpg",
    imageAlt: "Handyman mounting a TV on a wall in Tampa FL",
    intro:
      "Need fast, reliable TV wall mounting in Tampa, FL? Handyman Pros FL hangs TVs level, into real structure, with clean cable runs — dispatched from our only Westchase headquarters.",
    paragraphs: [
      "TV wall mounting in Tampa Bay homes is not a one-size bracket job. Block, metal stud, and wood-frame walls all need different hardware. We confirm stud or masonry support, use a rated mount, and keep the screen at a comfortable viewing height for living rooms, bedrooms, and lanais.",
      "Homeowners in Westchase, Clearwater, Palm Harbor, and Oldsmar often want in-wall HDMI and power concealment. When the wall and code allow, we route cables cleanly. When they do not, we use painted raceway so the install still looks finished.",
      "Over-fireplace TV wall mounting in Tampa is a frequent request. We check heat clearance, tilt, and whether the fireplace chase can take lag bolts. If a job needs an electrician for a new outlet, we say so before work starts.",
      `Call ${siteConfig.phone} or use the instant quote form. Same-day TV wall mounting is often available when our Tampa crew is already routing through your zip code.`,
    ],
    bullets: [
      "Fixed, tilt, and full-motion mounts",
      "Drywall, masonry, and metal-stud walls",
      "Cable concealment when the wall allows",
      "Soundbar and component shelf add-ons",
    ],
    faqs: [
      {
        question: "How much does TV wall mounting cost in Tampa?",
        answer:
          "Most Tampa TV wall mounting visits are quoted as a flat rate after we know TV size, wall type, and whether you want cable concealment. Specialty masonry or over-fireplace installs may take longer. Estimates are free.",
      },
      {
        question: "Can you hide the wires when you mount a TV?",
        answer:
          "Yes, when the wall construction and local code allow in-wall low-voltage routing. Otherwise we use a low-profile cover so power and HDMI stay neat.",
      },
    ],
  },
  {
    slug: "drywall-repair",
    name: "Drywall Repair",
    h1: "Drywall Repair in Tampa, FL",
    keyword: "drywall repair",
    image: "/images/work/drywall-finish-ladder.jpg",
    imageAlt: "Handyman repairing drywall in Tampa FL",
    intro:
      "Need fast, reliable drywall repair in Tampa, FL? Handyman Pros FL patches holes, blends texture, and preps walls for paint across Tampa Bay.",
    paragraphs: [
      "Drywall repair in Tampa ranges from doorknob holes to water-stained ceilings after summer storms. We cut clean openings, add backing when needed, tape and feather compound, then match orange peel, knockdown, or smooth finishes common in Hillsborough and Pinellas homes.",
      "Humidity is the local enemy. A rushed patch telegraphs through paint within weeks. We stage coats so the repair stays flat in Westchase, Town 'N' Country, Citrus Park, and Clearwater interiors.",
      "If staining points to an active leak, we tell you before covering it. Cosmetic drywall repair should never hide a plumbing or roof issue.",
      `Call ${siteConfig.phone} for a same-week drywall patch. Send photos on the quote form for a faster estimate.`,
    ],
    bullets: [
      "Nail holes to large panel replacements",
      "Ceiling texture blending",
      "Water-stain drywall replacement after the leak is fixed",
      "Paint-ready finish",
    ],
    faqs: [
      {
        question: "How much does drywall repair cost in Tampa?",
        answer:
          "Small Tampa drywall patches often start as a flat-rate visit. Larger holes, ceilings, and texture matching are quoted after we see photos. Typical small patches in the Bay area run in the low hundreds; full-wall work costs more.",
      },
      {
        question: "Can you match popcorn or knockdown texture?",
        answer:
          "Yes. We match common Tampa ceiling and wall textures, then prime so the patch is ready for paint.",
      },
    ],
  },
  {
    slug: "electrical-fixture-installation",
    name: "Electrical Fixture Installation",
    h1: "Electrical Fixture Installation in Tampa, FL",
    keyword: "electrical fixture installation",
    image: "/images/work/under-sink-plumbing.jpg",
    imageAlt: "Handyman installing an electrical light fixture in Tampa FL",
    intro:
      "Need fast, reliable electrical fixture installation in Tampa, FL? We swap lights, fans, and vanity fixtures at existing boxes — safely and level.",
    paragraphs: [
      "Electrical fixture installation in Tampa is usually a like-for-like swap at an existing junction box: vanity lights, pendants, porch lanterns, and many ceiling fans. We kill power, confirm the box is supported, and leave a clean canopy.",
      "Florida humidity and garage heat cook cheap fixtures. We check gaskets on exterior lanterns in Clearwater, Dunedin, and Palm Harbor so moisture does not short the new light.",
      "New circuits, panel work, and running wire through walls are licensed-electrical scope. If your fixture install needs that, we tell you up front instead of improvising.",
      `Call ${siteConfig.phone} to book electrical fixture installation from our Westchase crew.`,
    ],
    bullets: [
      "Vanity, pendant, and porch fixture swaps",
      "Ceiling fan installs at existing boxes",
      "Exterior wet-rated fixtures",
      "Box support check before hanging heavy fans",
    ],
    faqs: [
      {
        question: "Can a handyman install light fixtures in Tampa?",
        answer:
          "Like-for-like fixture swaps at existing boxes are a common Tampa handyman job. New wiring or panel changes require a licensed electrician. We stay in scope and say so clearly.",
      },
      {
        question: "Do you install ceiling fans?",
        answer:
          "Yes, when the existing box is fan-rated and wiring supports the swap. We mount, wire, and balance the fan.",
      },
    ],
  },
  {
    slug: "plumbing-fixture-repair",
    name: "Plumbing Fixture Repair",
    h1: "Plumbing Fixture Repair in Tampa, FL",
    keyword: "plumbing fixture repair",
    image: "/images/work/under-sink-plumbing.jpg",
    imageAlt: "Handyman repairing a plumbing fixture in Tampa FL",
    intro:
      "Need fast, reliable plumbing fixture repair in Tampa, FL? We stop drips, swap faucets, and reset toilets at existing supply lines.",
    paragraphs: [
      "Plumbing fixture repair in Tampa often means a dripping cartridge, a rocking toilet, or a supply line that failed after years of Florida water. We replace washers, cartridges, aerators, and many faucets without opening walls.",
      "Hard water in parts of Hillsborough and Pasco shortens fixture life. We bring common stems and supply lines so Oldsmar, Safety Harbor, and Westchase kitchens are back in service the same visit when parts match.",
      "Repipes, water heaters, and new drain lines are plumber-licensed work. Fixture-level repairs and swaps at existing stops are our lane.",
      `Call ${siteConfig.phone} for plumbing fixture repair. Describe the drip on the quote form and we will tell you if it is a handyman visit or a plumber referral.`,
    ],
    bullets: [
      "Faucet cartridge and aerator repairs",
      "Toilet resets and fill-valve swaps",
      "Supply-line replacement at existing stops",
      "P-trap and pop-up drain fixes",
    ],
    faqs: [
      {
        question: "Can a handyman fix a leaky faucet in Tampa?",
        answer:
          "Yes. Most faucet and toilet fixture repairs at existing shutoffs are handyman work. If we find galvanized pipes or a hidden leak in the wall, we stop and recommend a licensed plumber.",
      },
      {
        question: "Do you replace bathroom faucets?",
        answer:
          "Yes, when the new faucet fits the existing sink holes and shutoffs work. We seal, align, and test before we leave.",
      },
    ],
  },
  {
    slug: "furniture-assembly",
    name: "Furniture Assembly",
    h1: "Furniture Assembly in Tampa, FL",
    keyword: "furniture assembly",
    image: "/images/work/accent-wall-flooring.jpg",
    imageAlt: "Handyman assembling furniture in Tampa FL",
    intro:
      "Need fast, reliable furniture assembly in Tampa, FL? IKEA, Wayfair, Amazon, and office sets built square, tight, and placed where you want them.",
    paragraphs: [
      "Furniture assembly in Tampa is one of our most booked visits — beds, desks, dressers, patio sets, and garage storage. We bring the bits your kit forgot and check that cams actually lock.",
      "Florida rooms are tight. We assemble in place when the box will not turn a Westchase hallway, and we haul packaging out on request.",
      "Outdoor furniture in Clearwater and Palm Harbor needs stainless or coated hardware. We flag cheap rust-prone screws before they stain the lanai.",
      `Call ${siteConfig.phone} to stack several boxes into one furniture assembly visit and save a trip charge.`,
    ],
    bullets: [
      "IKEA, Wayfair, Amazon, and office brands",
      "Beds, cribs, desks, and storage systems",
      "Patio and garage assembly",
      "Placement and packaging haul-away on request",
    ],
    faqs: [
      {
        question: "How much is furniture assembly in Tampa?",
        answer:
          "Pricing depends on piece count and complexity. A single dresser is faster than a wall of closets. We quote after you list the items or send photos of the boxes.",
      },
      {
        question: "Do you assemble outdoor furniture?",
        answer:
          "Yes. We assemble patio sets and check hardware for Florida weather. Same-day furniture assembly is often available.",
      },
    ],
  },
  {
    slug: "door-repair",
    name: "Door Repair",
    h1: "Door Repair in Tampa, FL",
    keyword: "door repair",
    image: "/images/work/under-sink-plumbing.jpg",
    imageAlt: "Handyman repairing a door in Tampa FL",
    intro:
      "Need fast, reliable door repair in Tampa, FL? We fix sticking, swelling, and hardware that Florida humidity wrecks.",
    paragraphs: [
      "Door repair in Tampa is a humidity job. Exterior doors swell in rainy weeks, interior hollow-cores sag on cheap hinges, and sliders jump the track after storms. We plane, shim, replace weatherstrip, and reset strikes so the latch catches without a hip-check.",
      "Westchase and Citrus Park HOAs notice a dragging entry door. We keep the reveal even and replace blown-out screws with longer fasteners into real framing.",
      "Full prehung replacement is available when the slab is beyond repair. Rotten sills get called out instead of painted over.",
      `Call ${siteConfig.phone} for door repair before the next rain set swells it shut again.`,
    ],
    bullets: [
      "Sticking and swollen door planing",
      "Hinge, latch, and deadbolt repairs",
      "Weatherstrip and sweep replacement",
      "Sliding-glass door roller and track service",
    ],
    faqs: [
      {
        question: "Why does my Tampa door stick after rain?",
        answer:
          "Florida humidity swells wood slabs and frames. We diagnose hinge sag versus true swelling and repair the cause — not just sand the edge every summer.",
      },
      {
        question: "Can you repair a sliding glass door?",
        answer:
          "Yes. We replace rollers, clean tracks, and adjust locks on many Tampa patio sliders. Severely bent frames may need a replacement quote.",
      },
    ],
  },
];

function locationCopy(
  city: string,
  county: string,
  neighborhoods: string[]
): Pick<TargetLocation, "intro" | "paragraphs" | "faqs"> {
  const nearby = neighborhoods.slice(0, 3).join(", ");
  return {
    intro: `Need a fast, reliable handyman in ${city}, FL? Handyman Pros FL dispatches from one Westchase, Tampa headquarters for TV wall mounting, drywall repair, fixtures, furniture assembly, and door repair.`,
    paragraphs: [
      `Handyman work in ${city} should not mean a franchise call center. Our technicians leave ${siteConfig.address.street} in Westchase and drive to ${city} with tools on the truck. ${county} homes see the same humidity, stucco, and HOA punch lists we handle every day in Tampa.`,
      `Popular ${city} jobs include TV wall mounting, drywall repair, electrical fixture installation, plumbing fixture repair, furniture assembly, and door repair. Neighbors around ${nearby} often bundle a honey-do list into one visit.`,
      `${city} is a service area — not a second branch. You get one phone number, one NAP, and the same licensed crew that serves Tampa Bay.`,
      `Call ${siteConfig.phone} or submit the instant quote form. We answer 24/7 for ${city} estimates.`,
    ],
    faqs: [
      {
        question: `Do you have a handyman office in ${city}?`,
        answer: `No. Handyman Pros FL has one Tampa location in Westchase. ${city} is a service area we drive to. That keeps Google listings and reviews on a single NAP.`,
      },
      {
        question: `How soon can a handyman get to ${city}?`,
        answer: `Because we already route through Tampa Bay daily, same-week and often same-day visits are available for ${city}. Call ${siteConfig.phone} for the next window.`,
      },
    ],
  };
}

export const targetLocations: TargetLocation[] = [
  {
    slug: "tampa",
    city: "Tampa",
    displayName: "Tampa, FL",
    county: "Hillsborough County",
    zipHint: "33602–33647",
    neighborhoods: ["South Tampa", "Hyde Park", "Seminole Heights", "Westchase", "New Tampa", "Carrollwood"],
    intro:
      "Looking for Handyman Tampa FL service with same-day help? Handyman Pros FL handles drywall repair Tampa, TV mounting Tampa, fixture swaps, and furniture assembly from our only Westchase headquarters.",
    paragraphs: [
      `Handyman Tampa FL searches should land on a real local crew — not a lead marketplace. We dispatch from ${siteConfig.address.street} in Westchase with a stocked truck for drywall repair Tampa jobs, TV mounting Tampa installs, door repairs, and punch lists across South Tampa, Hyde Park, Seminole Heights, and New Tampa.`,
      "Drywall repair Tampa homeowners book most after kids, doorknobs, or summer humidity stains. We cut clean patches, blend orange peel or knockdown, and leave paint-ready walls. TV mounting Tampa visits include stud finding, rated hardware, and clean cable runs for living rooms, bedrooms, and lanais.",
      "Hillsborough County homes see Florida humidity, stucco, and HOA punch lists every week. Bundle drywall, mounting, and fixture work into one Handyman Tampa FL visit to save a trip charge.",
      `Call ${siteConfig.phone} 24/7 for an instant phone estimate on Handyman Tampa FL, drywall repair Tampa, or TV mounting Tampa — or send photos through the quote form.`,
    ],
    faqs: [
      {
        question: "Do you offer Handyman Tampa FL service same-day?",
        answer: `Often yes. Because Westchase is our only HQ, same-day Handyman Tampa FL windows are common when our crew is already routing through your zip. Call ${siteConfig.phone}.`,
      },
      {
        question: "How much is drywall repair Tampa or TV mounting Tampa?",
        answer:
          "Small drywall repair Tampa patches are usually flat-rate after photos. TV mounting Tampa pricing depends on TV size, wall type, and cable concealment. Estimates are free over the phone.",
      },
      {
        question: "Is Handyman Pros FL based in Tampa?",
        answer: `Yes. Our only location is ${siteConfig.address.street}, Apt 203, Tampa, FL 33626 (Westchase). City pages are service areas we drive to — not extra branches.`,
      },
    ],
  },
  {
    slug: "clearwater",
    city: "Clearwater",
    displayName: "Clearwater, FL",
    county: "Pinellas County",
    zipHint: "33755–33767",
    neighborhoods: ["Clearwater Beach", "Coachman", "Countryside", "Downtown Clearwater"],
    intro:
      "Need Handyman Services Clearwater homeowners can trust? Handyman Pros FL delivers home repair Clearwater FL — TV mounting, drywall, doors, fixtures, and furniture assembly — dispatched from Tampa / Westchase.",
    paragraphs: [
      "Handyman Services Clearwater should feel local even when the truck starts in Westchase. Pinellas County beach and mainland homes deal with salt air, sliding doors, and vacation-rental turnovers. We bring the right anchors, weatherstrip, and exterior-rated hardware for home repair Clearwater FL jobs that last through humid summers.",
      "Popular Clearwater requests include TV wall mounting near Coachman and Countryside, drywall patches after renovations, sticky patio doors on Clearwater Beach condos, and furniture assembly for seasonal rentals. Neighbors often bundle a honey-do list into one visit.",
      "Clearwater is a Pinellas service area — not a second office. You get one phone number, one Google listing, and the same licensed crew that serves Tampa Bay.",
      `Call ${siteConfig.phone} for Handyman Services Clearwater and home repair Clearwater FL estimates anytime — we answer 24/7.`,
    ],
    faqs: [
      {
        question: "Do you provide Handyman Services Clearwater same week?",
        answer: `Yes. We route through Pinellas regularly, so Handyman Services Clearwater and home repair Clearwater FL visits are often same-week and sometimes same-day. Call ${siteConfig.phone}.`,
      },
      {
        question: "Is there a Clearwater handyman office?",
        answer:
          "No. Handyman Pros FL has one Tampa / Westchase headquarters. Clearwater is a service area we drive to, which keeps reviews and NAP data on a single Google Business Profile.",
      },
    ],
  },
  {
    slug: "st-petersburg",
    city: "St. Petersburg",
    displayName: "St. Petersburg, FL",
    county: "Pinellas County",
    zipHint: "33701–33716",
    neighborhoods: ["Downtown St. Pete", "Snell Isle", "Kenwood", "Northeast Park", "Tyrone"],
    intro:
      "Need a St. Pete Handyman who shows up ready? Handyman Pros FL is the local carpenter St. Petersburg FL homeowners call for TV mounts, drywall, doors, trim, and fixture work.",
    paragraphs: [
      "St. Pete Handyman searches often mean bungalows in Kenwood, condos downtown, and waterfront homes in Snell Isle — each with different wall types and humidity challenges. As your local carpenter St. Petersburg FL option, we hang doors true, patch plaster-adjacent drywall, and mount TVs into real structure.",
      "Downtown and Northeast Park punch lists pile up fast: sticky millwork, uneven floors under new furniture, and rental turnover repairs. We keep estimates honest and scope clear so a St. Pete Handyman visit finishes the list instead of creating callbacks.",
      "St. Petersburg is a Pinellas service area served from our only Westchase / Tampa headquarters. One NAP, one review profile, one crew.",
      `Call ${siteConfig.phone} for a St. Pete Handyman or local carpenter St. Petersburg FL estimate — instant phone quotes 24/7.`,
    ],
    faqs: [
      {
        question: "Can I get a St. Pete Handyman same-day?",
        answer: `When our Pinellas route has capacity, yes. Call ${siteConfig.phone} for the next St. Pete Handyman window.`,
      },
      {
        question: "Do you do trim and carpentry in St. Petersburg?",
        answer:
          "Yes. As a local carpenter St. Petersburg FL crews trust for punch-list work, we handle trim repairs, door planing, shelf installs, and related handyman carpentry — not full custom millwork shops.",
      },
    ],
  },
  {
    slug: "westchase-fl",
    city: "Westchase",
    displayName: "Westchase, FL",
    county: "Hillsborough County",
    zipHint: "33626",
    neighborhoods: ["Tuscany Bay", "Westchase Golf Club", "Citrus Park"],
    intro:
      "Need a fast, reliable handyman in Westchase, FL? This is our headquarters zip. TV wall mounting, drywall repair, and fixture work often same-day in 33626.",
    paragraphs: [
      `Handyman Pros FL is based at ${siteConfig.address.street}, Apt 203, Tampa, FL 33626 in Westchase. When you search handyman near me in Westchase, you are calling the actual local crew — not a lead mill.`,
      "Westchase HOA standards, stucco, and lanai sliders are daily work. We handle TV wall mounting, drywall repair, electrical fixture installation, plumbing fixture repair, furniture assembly, and door repair without a second office.",
      "Tuscany Bay and Westchase Golf Club streets are inside our fastest response radius. Citrus Park and Town 'N' Country are the next hop.",
      `Call ${siteConfig.phone} 24/7 for a Westchase estimate.`,
    ],
    faqs: [
      {
        question: "Are you actually based in Westchase?",
        answer: `Yes. Our only location is ${siteConfig.address.street}, Apt 203, Tampa, FL 33626. Westchase is headquarters, not a marketing city.`,
      },
      {
        question: "How fast is Westchase handyman service?",
        answer: "Same-day is common for 33626 because we start here. Call to lock a window.",
      },
    ],
  },
  {
    slug: "palm-harbor-fl",
    city: "Palm Harbor",
    displayName: "Palm Harbor, FL",
    county: "Pinellas County",
    zipHint: "34683–34685",
    neighborhoods: ["Ozona", "Crystal Beach", "Highland Lakes"],
    ...locationCopy("Palm Harbor", "Pinellas County", ["Ozona", "Crystal Beach", "Highland Lakes"]),
  },
  {
    slug: "oldsmar-fl",
    city: "Oldsmar",
    displayName: "Oldsmar, FL",
    county: "Pinellas / Hillsborough",
    zipHint: "34677",
    neighborhoods: ["East Lake Woodlands", "Shoreview", "Westchase"],
    ...locationCopy("Oldsmar", "Pinellas County", ["East Lake Woodlands", "Shoreview", "Westchase"]),
  },
  {
    slug: "dunedin-fl",
    city: "Dunedin",
    displayName: "Dunedin, FL",
    county: "Pinellas County",
    zipHint: "34698",
    neighborhoods: ["Downtown Dunedin", "Scottish Highlands", "Clearwater border"],
    ...locationCopy("Dunedin", "Pinellas County", ["Downtown Dunedin", "Scottish Highlands"]),
  },
  {
    slug: "town-n-country-fl",
    city: "Town 'N' Country",
    displayName: "Town 'N' Country, FL",
    county: "Hillsborough County",
    zipHint: "33615",
    neighborhoods: ["Rocky Creek", "Webb Road corridor", "West Tampa"],
    ...locationCopy("Town 'N' Country", "Hillsborough County", ["Rocky Creek", "West Tampa"]),
  },
  {
    slug: "citrus-park-fl",
    city: "Citrus Park",
    displayName: "Citrus Park, FL",
    county: "Hillsborough County",
    zipHint: "33625",
    neighborhoods: ["Citrus Park mall area", "Westchase", "Carrollwood"],
    ...locationCopy("Citrus Park", "Hillsborough County", ["Westchase", "Carrollwood"]),
  },
  {
    slug: "safety-harbor-fl",
    city: "Safety Harbor",
    displayName: "Safety Harbor, FL",
    county: "Pinellas County",
    zipHint: "34695",
    neighborhoods: ["Downtown Safety Harbor", "Oldsmar border", "Clearwater"],
    ...locationCopy("Safety Harbor", "Pinellas County", ["Downtown Safety Harbor", "Oldsmar"]),
  },
  {
    slug: "tarpon-springs-fl",
    city: "Tarpon Springs",
    displayName: "Tarpon Springs, FL",
    county: "Pinellas County",
    zipHint: "34689",
    neighborhoods: ["Sponge Docks", "Lake Tarpon", "Palm Harbor"],
    ...locationCopy("Tarpon Springs", "Pinellas County", ["Sponge Docks", "Palm Harbor"]),
  },
  {
    slug: "new-port-richey-fl",
    city: "New Port Richey",
    displayName: "New Port Richey, FL",
    county: "Pasco County",
    zipHint: "34652–34655",
    neighborhoods: ["Downtown NPR", "Trinity", "Holiday"],
    ...locationCopy("New Port Richey", "Pasco County", ["Downtown NPR", "Trinity"]),
  },
];

export function getCoreService(slug: string): CoreService | undefined {
  return coreServices.find((service) => service.slug === slug);
}

export function getTargetLocation(slug: string): TargetLocation | undefined {
  return targetLocations.find((location) => location.slug === slug);
}

export function hrefForAreaName(name: string): string | undefined {
  const normalized = name.toLowerCase().replace(/['’]/g, "").trim();
  const aliases: Record<string, string> = {
    tampa: "tampa",
    westchase: "westchase-fl",
    "tuscany bay": "westchase-fl",
    clearwater: "clearwater",
    "st petersburg": "st-petersburg",
    "st. petersburg": "st-petersburg",
    "saint petersburg": "st-petersburg",
    "palm harbor": "palm-harbor-fl",
    oldsmar: "oldsmar-fl",
    dunedin: "dunedin-fl",
    "town n country": "town-n-country-fl",
    "citrus park": "citrus-park-fl",
    "safety harbor": "safety-harbor-fl",
    "tarpon springs": "tarpon-springs-fl",
    "new port richey": "new-port-richey-fl",
    "south tampa": "tampa",
    "hyde park": "tampa",
    "new tampa": "tampa",
  };
  if (normalized === "wesley chapel") return "/handyman-wesley-chapel-fl";
  const slug = aliases[normalized];
  return slug ? `/locations/${slug}` : undefined;
}

export function serviceMetaTitle(serviceName: string, city: string): string {
  return serviceTitle(serviceName, city);
}

export function serviceMetaDescription(serviceName: string, city: string): string {
  return serviceDescription(serviceName, city);
}
