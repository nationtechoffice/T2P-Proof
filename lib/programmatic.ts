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
  "Same-Day Handyman",
  "Tile Work",
  "Gutter Cleaning",
  "Exterior Painting",
] as const;

export const schemaSameAs = [
  "https://www.facebook.com/profile.php?id=61591619618815",
  "https://www.instagram.com/handymanprosflorida",
  "https://maps.app.goo.gl/XhDwjzgTujJK7JyT9",
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
  /** Typical visit range for Service/Offer schema. Full remodels stay quoted separately. */
  offer?: { low: number; high: number; description: string };
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
    image: "/images/cinematic/service-tv-mount.jpg",
    imageAlt: "TV wall mounting in a bright Tampa living room — screen on, job finished level",
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
    imageAlt: "Licensed handyman finishing drywall compound on an interior wall in Tampa, FL",
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
    image: "/images/cinematic/service-ceiling-fan.jpg",
    imageAlt: "Ceiling fan and light fixture swap at an existing box in Tampa",
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
    imageAlt: "Under-sink plumbing fixture repair in a Tampa kitchen",
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
    h1: "Furniture Assembly & Rearrangement in Tampa, FL",
    keyword: "furniture assembly Tampa",
    image: "/images/work/maps-builtin-dresser.jpg",
    imageAlt: "Built-in dresser furniture work in a Tampa home",
    intro:
      "Need furniture assembled or rearranged in Tampa or Westchase? Handyman Pros FL is a licensed, insured crew that builds IKEA, Wayfair, and Amazon sets, moves pieces room to room, and sets them where you want them — dispatched from our only Westchase headquarters.",
    paragraphs: [
      "Furniture assembly in Tampa Bay is a handyman visit, not a delivery window that leaves the boxes in the garage. Homeowners in Westchase, Carrollwood, Citrus Park, and Town 'N' Country call when a bed, desk, dresser, or patio set shows up flat, or when a room needs the furniture already in the house taken apart, moved, and put back together.",
      "We assemble the brands already on site: IKEA, Wayfair, Amazon, Ashley, and office sets. Cams get locked, backs get screwed, and beds get checked for square before anyone sleeps on them. If a kit is missing hardware, we say so and use the right fastener instead of leaving a stripped cam.",
      "Rearrangement is the other half of this page. A sectional that will not turn a Westchase hallway, a dresser that has to come apart to clear a door, or a home office that needs the desk on a different wall. We protect floors, disassemble only what has to come apart, move the pieces, and reassemble them level. This is in-home furniture help. We do not bring a moving truck, and we do not bid a whole-house move the way a moving company does.",
      "Outdoor furniture in Clearwater and Palm Harbor needs hardware that can live in Florida weather. We flag cheap rust-prone screws before they stain a lanai. Garage shelving is the same stop when the boxes are already in the house.",
      `Call ${siteConfig.phone} or send photos of the boxes on the quote form. Several pieces in one stop usually beat separate trip charges. The crew is licensed and insured, with one Tampa / Westchase headquarters and no second branch.`,
    ],
    bullets: [
      "IKEA, Wayfair, Amazon, Ashley, and office furniture assembly",
      "Beds, desks, dressers, cribs, and storage systems",
      "In-home rearrangement — disassemble, move room to room, reassemble",
      "Patio sets and packaging haul-away on request",
    ],
    faqs: [
      {
        question: "How much does furniture assembly cost in Tampa?",
        answer:
          "A typical Tampa Bay furniture assembly visit — one or two flat-pack pieces — is often quoted from about $75 to $250 after we know the piece count and whether the hardware is in the box. A full bedroom set or a room rearrangement is quoted separately. Estimates are free. Handyman Pros FL is licensed and insured.",
      },
      {
        question: "Do you assemble IKEA, Wayfair, and Amazon furniture?",
        answer:
          "Yes. We assemble IKEA, Wayfair, Amazon, Ashley, and most office brands when the boxes are on site. Send a photo of the box label or the item name and we will tell you if it fits one visit.",
      },
      {
        question: "Can you rearrange furniture that is already in the house?",
        answer:
          "Yes. We disassemble pieces that will not fit through a doorway, move them to the new room, and reassemble them level. Floors stay protected. We do not supply a moving truck — this is in-home furniture rearrangement from a licensed and insured handyman crew.",
      },
      {
        question: "Do you assemble and rearrange furniture in Westchase?",
        answer: `Yes. The truck leaves our only headquarters in Westchase ZIP 33626. Westchase, Carrollwood, Citrus Park, Town 'N' Country, and Tampa are the usual routes. Call ${siteConfig.phone}. We are licensed and insured.`,
      },
      {
        question: "Do you assemble outdoor furniture?",
        answer:
          "Yes. Patio sets and lanai furniture are a regular Tampa Bay request. We check hardware for Florida weather and flag rust-prone screws before they stain the deck or the pavers.",
      },
      {
        question: "How does a furniture assembly visit work?",
        answer:
          "You call or send photos of the boxes. We confirm what is on site, clear a work area, assemble each piece square and tight, and place it where you want it. Packaging goes out on request. If a part is missing, we stop and tell you before the piece is left half-built.",
      },
    ],
    offer: {
      low: 75,
      high: 250,
      description:
        "Typical licensed handyman furniture assembly visit in Tampa Bay for one or two flat-pack pieces. Full bedroom sets and room rearrangements are quoted separately.",
    },
  },
  {
    slug: "door-repair",
    name: "Door Repair",
    h1: "Door Repair in Tampa, FL",
    keyword: "door repair",
    image: "",
    imageAlt: "",
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
  {
    slug: "same-day-handyman",
    name: "Same-Day Handyman",
    h1: "Same-Day Handyman in Tampa, FL",
    keyword: "same day handyman Tampa",
    image: "/images/work/service-van-tampa.jpg",
    imageAlt: "Handyman Pros FL branded service van arriving for a Tampa Bay home repair",
    intro:
      "Need a same-day handyman in Tampa or Westchase? Handyman Pros FL is a licensed, insured crew based in Westchase (ZIP 33626). We answer 24/7 for estimates. Same-day arrival is most likely in Westchase, Citrus Park, Town 'N' Country, and Tampa when the truck is already on that route.",
    paragraphs: [
      "Same-day handyman service in Tampa Bay is real when routing, parts, and weather line up — not a blanket promise for every zip. The truck starts at our only headquarters in Westchase. That is why 33626, Citrus Park, Town 'N' Country, and nearby Tampa streets get the fastest windows.",
      "Clearwater, Palm Harbor, Dunedin, Tarpon Springs, and New Port Richey are regular routes. Same-day there depends on whether we already have a Pinellas or Pasco stop. If we cannot make it today, we give the next window — not a maybe.",
      "Jobs that usually fit a same-day visit: TV wall mounting when the mount is on site, furniture assembly, a door that will not latch, a small drywall hole, and a like-for-like fixture swap when the fixture is already in the house. Texture-matched ceiling repairs need dry time. Parts we have to buy, and anything that needs a permit, usually wait.",
      `You get the same licensed, insured Handyman Pros FL crew — one NAP, no second branch. Call ${siteConfig.phone} and say you need same-day. We will tell you if the window is today or the next open route.`,
    ],
    bullets: [
      "Fastest in Westchase, Citrus Park, Town 'N' Country, and Tampa",
      "TV mounts, small drywall patches, doors, and fixture swaps",
      "Furniture assembly when the boxes are on site",
      "Honest next window when same-day is not realistic",
    ],
    faqs: [
      {
        question: "Can I get a same-day handyman in Tampa?",
        answer: `Sometimes. Same-day arrival is most likely in Westchase, Citrus Park, Town 'N' Country, and Tampa because that is where the truck starts. Call ${siteConfig.phone} and we will confirm today's window or the next one.`,
      },
      {
        question: "Do you offer same-day handyman service in Westchase?",
        answer: `Yes, often. Westchase ZIP 33626 is our only headquarters, so same-day visits are common when the schedule allows. We are licensed and insured. Call ${siteConfig.phone} for the current window.`,
      },
      {
        question: "Which jobs do not fit a same-day visit?",
        answer:
          "Texture-matched ceiling repairs need dry time. Discontinued parts we have to buy, and work that needs a permit, usually wait. New electrical circuits, running new wire, and panel work need a licensed electrician — those are not a same-day handyman add-on.",
      },
    ],
  },
  {
    slug: "tile-installation",
    name: "Tile Installation",
    h1: "Tile Installation in Tampa, FL",
    keyword: "tile installation Tampa",
    image: "/images/work/porcelain-tile-install.jpg",
    imageAlt: "Large-format porcelain floor tile installation in a Tampa kitchen",
    intro:
      "Need tile installed or replaced in Tampa or Westchase? Handyman Pros FL is a licensed, insured crew that sets kitchen backsplashes, bathroom wall tile, floor-tile sections, and cracked-tile patches — dispatched from our only Westchase headquarters.",
    paragraphs: [
      "Tile installation in Tampa Bay is a handyman visit, not a flooring-company package for the whole house. Homeowners in Westchase, Carrollwood, Citrus Park, and Town 'N' Country call when a kitchen backsplash stops halfway, a shower wall has a cracked row, or a few floor tiles popped after Florida humidity worked the thinset loose.",
      "We install and replace ceramic, porcelain, and subway tile the room already uses. Bring the boxes, or we pick up a stocked match when the store still has it. The visit is layout, cuts, spacers, thinset, and grout. We are not a flooring showroom, and we do not bid whole-home floor packages the way a flooring contractor does.",
      "A sound wall or floor matters more than a pretty tile. We check for soft spots, hollow tile, and loose backer before we set anything new. If the subfloor is failing, or a shower needs a full waterproofing rebuild, we say so before we cover it. Cosmetic tile over a wet wall does not last in Hillsborough County humidity.",
      "Jobs that fit this page: a kitchen backsplash, bathroom wall tile or a tub surround on a solid wall, a section of floor tile, grout repair, and one-for-one replacement of cracked pieces when a match exists. Discontinued tile gets an honest conversation — a border or a complementary field, not a claim that a close color is an exact match.",
      `Call ${siteConfig.phone} or send photos on the quote form. Small patches and backsplashes are often scheduled the same week from Westchase. Grout needs cure time before anyone walks the floor, so a same-day finish depends on how much tile is being set. The crew is licensed and insured, with one Tampa / Westchase headquarters and no second branch.`,
    ],
    bullets: [
      "Kitchen backsplash install and replace",
      "Bathroom wall tile and tub surrounds on a sound wall",
      "Floor-tile sections and cracked-tile replacement",
      "Grout repair and one-for-one patches when a match exists",
    ],
    faqs: [
      {
        question: "How much does tile installation cost in Tampa?",
        answer:
          "A typical Tampa Bay handyman tile visit — a cracked-tile patch or a standard kitchen backsplash — is often quoted from about $175 to $700 after we see photos and know whether the tile is already on site. A full bathroom, or a floor that needs substrate repair, is quoted separately. Estimates are free. Handyman Pros FL is licensed and insured.",
      },
      {
        question: "Can you replace a few cracked tiles without redoing the whole floor?",
        answer:
          "Yes, when the surrounding tile is solid and we can match size and color. We cut out the damaged pieces, check the substrate, set replacements, and grout to the existing joints. If the tile is discontinued, we tell you before we start.",
      },
      {
        question: "Do you install and replace tile in Westchase?",
        answer: `Yes. The truck leaves our only headquarters in Westchase ZIP 33626. Westchase, Carrollwood, Citrus Park, Town 'N' Country, and Tampa are the usual routes. Call ${siteConfig.phone}. We are licensed and insured.`,
      },
      {
        question: "Is this a flooring company or a handyman tile job?",
        answer:
          "Handyman-scope tile. We install and replace backsplashes, wall tile, and floor sections. We are not a flooring showroom and we do not sell whole-house floor packages. If the job needs a structural subfloor rebuild or a permitted shower waterproofing system, we say so instead of forcing it into a handyman visit.",
      },
      {
        question: "When should I call for tile repair instead of full replacement?",
        answer:
          "Call for repair when a few tiles are cracked, grout is missing, or a backsplash stops mid-wall. Call for replacement when a whole field is loose, the wall is soft behind the tile, or you want a new layout in that room. Photos help us tell which one it is before the truck rolls.",
      },
      {
        question: "How does a tile install visit work?",
        answer:
          "You call or send photos. We confirm the tile is on site or name what we need to pick up, then check the wall or floor. Damaged pieces come out, the surface gets prepped, new tile is set level, and grout goes in after the thinset is ready. We walk the result with you and tell you how long to stay off the floor.",
      },
    ],
    offer: {
      low: 175,
      high: 700,
      description:
        "Typical licensed handyman tile visit in Tampa Bay for patches, backsplashes, and small floor or wall sections. Full baths and substrate rebuilds are quoted separately.",
    },
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
      "Tuscany Bay and Westchase Golf Club streets are inside our fastest response radius. Citrus Park, Town 'N' Country, and Oldsmar (ZIP 34677, just across the Hillsborough–Pinellas line) are the next hop.",
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
    intro:
      "Need Oldsmar FL handyman services for TV mounts, bracket work, and deck maintenance? Licensed, insured Handyman Pros FL dispatches from Westchase across the Hillsborough–Pinellas line into ZIP 34677.",
    paragraphs: [
      `Oldsmar sits between our Westchase headquarters and the Pinellas coast — East Lake Woodlands, Shoreview, and the State Road 580 corridor. Technicians leave ${siteConfig.address.street} with a stocked truck for bracket mounting, deck hardware, drywall, doors, and fixture work. Oldsmar is a service area, not a second office: one phone number, one NAP, the same licensed crew.`,
      "Bracket mounting is a frequent Oldsmar request: TVs and soundbars, garage track systems, pantry organizers, and shelves. We locate studs or use rated anchors, keep lines level, and conceal cords when the wall and code allow. Clean mounting is one of the fastest ways to finish a room after a move or remodel.",
      "Deck maintenance keeps Tampa Bay outdoor living safe. We tighten loose rails, replace individual boards when feasible, secure popped fasteners, and advise on sealing timelines for Florida sun and rain. If a joist or post looks structural, we document it instead of hiding the problem.",
      `Call ${siteConfig.phone} 24/7 for Oldsmar FL handyman services. Same-week and often same-day windows are common because Oldsmar is the next hop from Westchase — we also continue to Safety Harbor, Palm Harbor, Town 'N' Country, and Citrus Park on the same route.`,
    ],
    faqs: [
      {
        question: "Do you have a handyman office in Oldsmar?",
        answer: `No. Handyman Pros FL has one Tampa location at ${siteConfig.address.street}, Apt 203, Tampa, FL 33626 (Westchase). Oldsmar ZIP 34677 is a service area we drive to so reviews and listings stay on a single NAP.`,
      },
      {
        question: "How soon can a handyman get to Oldsmar, FL?",
        answer: `Oldsmar is next to Westchase, so same-week and often same-day visits are common. Call ${siteConfig.phone} for the next window on TV mounts, deck hardware, or a mixed punch list.`,
      },
      {
        question: "What Oldsmar jobs do you handle most?",
        answer:
          "TV and bracket mounting, deck rail and board maintenance, drywall patches, door and screen repairs, fixture installs, and outdoor furniture assembly. Licensed and insured for indoor and outdoor handyman scope.",
      },
    ],
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
    "oldsmar border": "oldsmar-fl",
    "east lake woodlands": "oldsmar-fl",
    shoreview: "oldsmar-fl",
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
