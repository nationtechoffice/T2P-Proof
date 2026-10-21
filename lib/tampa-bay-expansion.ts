import type { CoreService, TargetLocation } from "./programmatic";
import { siteConfig } from "./site-config";

const phone = siteConfig.phone;
const hq = siteConfig.address.street;

function fenceCallout(
  place: string,
  detail: string,
  localCrew = false
): NonNullable<TargetLocation["callouts"]>[number] {
  return {
    before: `${detail} That work is a `,
    href: "/services/fence",
    label: "fence handyman",
    after: ` visit in ${place} — pickets, a gate, or a short matching section — ${localCrew ? "from our licensed and insured local crew." : "from the same licensed and insured Westchase crew. We are not a separate fencing contractor."}`,
  };
}

export const fenceHandymanService: CoreService = {
  slug: "fence-handyman",
  name: "Fence Handyman",
  h1: "Fence Handyman & Fencing Handyman in Tampa, FL",
  keyword: "fence handyman",
  image: "/images/work/fence-repair.jpg",
  imageAlt: "Wood privacy fence repair with new pickets in a Tampa Bay FL backyard",
  intro:
    "Need a fence handyman or fencing handyman in Tampa Bay? Handyman Pros FL repairs leaning sections, replaces pickets, resets a sound post, and hangs a short run of wood or vinyl you already matched — licensed and insured, from a crew that serves Tampa Bay daily.",
  paragraphs: [
    "A fence handyman visit is a handyman job, not a fencing-company identity. Homeowners call when a summer storm racks a wood privacy panel in Brandon or Riverview, a Carrollwood gate drags the concrete, or a Plant City board has rotted at the bottom. We fix the section that failed. We do not rebrand the crew as a fence contractor, and we do not sell commercial cages, razor wire, or a custom metal shop.",
    "Fencing handyman work that fits this page: replace broken pickets or a rotten bottom rail, straighten a gate and reset the latch, tighten hardware, swap a short vinyl or wood panel when you have a match, and reset a single post when the existing hole is still sound. If the whole run is on the ground, the property line is in dispute, or the posts need a survey, we say that before anyone starts digging.",
    "Florida sun and afternoon rain are why these repairs repeat. Pressure-treated boards cup, vinyl panels slip their clips after wind, and chain-link gates drop. We carry common fasteners and can often finish a small repair the same week from Westchase. Materials you already bought at the home center are welcome when they match the fence you have.",
    `Plant City, Riverview, Brandon, Lutz, Wesley Chapel, Land O' Lakes, and Spring Hill are the yards where a fence handyman call is most common. Pinellas stops in Largo, Seminole, and Pinellas Park are older wood and chain-link. Call ${phone} or send photos. Licensed and insured. Our local crew serves Tampa Bay daily. Hablamos español on the same number.`,
  ],
  bullets: [
    "Wood picket, rail, and gate repair",
    "Short vinyl or wood section replacement when a match exists",
    "Single-post reset when the hole is sound",
    "Chain-link gate hardware and sagging-gate fixes",
  ],
  faqs: [
    {
      question: "What is a fence handyman, and how is that different from a fencing contractor?",
      answer:
        "A fence handyman repairs and replaces sections of the fence you already have: boards, a gate, hardware, or a short matching run. A fencing contractor bids whole-property installs, surveys, and commercial systems. Handyman Pros FL stays on the handyman side of that line.",
    },
    {
      question: "Do you offer fencing handyman repair in Plant City and Riverview?",
      answer: `Yes. Plant City, Riverview, Brandon, Lutz, and Wesley Chapel are regular fence repair stops from our Westchase headquarters. Call ${phone} with photos of the damaged section.`,
    },
    {
      question: "Can you install a brand-new fence around the whole yard?",
      answer:
        "A short run that matches an existing fence can be a handyman visit. A full property installation, pool-code barrier, or commercial fence is quoted as a larger project or referred when it is outside handyman scope. We will tell you which one you are looking at.",
    },
    {
      question: "How much does fence handyman repair cost in Tampa?",
      answer:
        "Most Tampa Bay fence handyman repairs — a few boards, a gate adjustment, or a short section with material on site — are quoted after a free estimate, once we see photos. Longer runs cost more. Estimates are free. The crew is licensed and insured.",
    },
  ],
  offer: {
    description:
      "Typical licensed fence handyman repair in Tampa Bay for boards, a gate, or a short matching section. Full-yard installations are quoted separately.",
  },
};

export const expansionLocations: TargetLocation[] = [
  {
    slug: "plant-city",
    city: "Plant City",
    displayName: "Plant City, FL",
    county: "Hillsborough County",
    zipHint: "33563–33567",
    neighborhoods: ["Downtown Plant City", "Walden Lake", "Trapnell", "Knights Griffin", "Park Road", "Varrea", "US-92 corridor"],
    intro:
      "Hire Handyman Pros FL as your Plant City home handyman for door installation support, rotten wood repair, and durable fixes built for Florida weather.",
    paragraphs: [
      "A Plant City home handyman needs to understand both historic downtown charm and newer suburban builds east of Tampa. Humidity, sun, and storm exposure age wood trim, door sills, and outdoor structures faster than many owners expect. Handyman Pros FL brings practical carpentry and repair skills to keep entries tight and exteriors looking maintained.",
      "Door installation and replacement projects improve security, energy efficiency, and curb appeal. We hang prehung units when openings are ready, adjust existing doors that rub or latch poorly, and upgrade hinges, sweeps, and hardware for smoother daily use. Proper shimming and sealing matter in Florida’s climate — shortcuts show up as drafts and swollen edges within a season.",
      "Rotten wood repair is another frequent Plant City request. Soft sills, fascia edges, and decorative trim can be cut back, treated, and patched or replaced so moisture does not keep traveling. We focus on sound repairs you can paint and maintain rather than cosmetic cover-ups that fail after the next storm.",
      "Call (656) 205-3185 to schedule your Plant City home handyman visit. Handyman Pros FL is open 24/7 for estimates covering door installation, rotten wood repair, and related punch-list work across eastern Hillsborough County.",
      "From strawberry-country homesteads to subdivision addresses, we treat every Plant City job with clean workmanship and clear pricing.",
    ],
    callouts: [
      fenceCallout(
        "Plant City",
        "Walden Lake privacy lines and the acreage fences toward Knights Griffin usually fail as a soft bottom rail, a gate that will not latch, or a short run of rotten boards."
      ),
    ],
    spots: [
      {
        name: "Downtown Plant City",
        body: "Blocks around the water tower, Collins Street, and Evers are older wood-frame houses. A rainy week swells the entry, a sill goes soft at the corners, and a porch rail lets go. We plane the door, replace a sweep, and cut rotten wood back to sound material. This is not a Brandon Boulevard ranch and not a new-construction punch list.",
        links: [
          { href: "/services/door-repair", label: "Door repair" },
          { href: "/services/drywall-repair", label: "Drywall repair" },
        ],
      },
      {
        name: "Walden Lake",
        body: "Walden Lake is the golf-course community: wood privacy fences on the back lot, a gate that dropped, and family rooms that need a TV mount on block. We repair the fence section that failed and hang the bracket into real structure. We do not bid a new fence around the whole fairway lot.",
        links: [
          { href: "/services/fence", label: "Fence handyman" },
          { href: "/services/tv-wall-mounting", label: "TV wall mounting" },
        ],
      },
      {
        name: "Knights Griffin and Trapnell",
        body: "East of Park Road the lots open into pasture, garden rows, and strawberry acreage toward County Line Road. Fence work here is a rotten bottom board, a sagging farm gate, or one soft post when the hole is still sound — a longer line than a Walden Lake panel, still a handyman section, not ranch fencing by the mile.",
        links: [
          { href: "/services/fence", label: "Acreage fence repair" },
          { href: "/services/same-day-handyman", label: "Same-day scheduling" },
        ],
      },
      {
        name: "Park Road and Varrea",
        body: "Park Road and newer south-side houses in Varrea book the indoor list after a move: a drywall scar, a mount, a door that rubs. The housing is newer than downtown and tighter than the acreage. Same licensed crew, same Westchase truck, different materials on the van.",
        links: [
          { href: "/services/drywall-repair", label: "Drywall repair" },
          { href: "/services/tv-wall-mounting", label: "TV mounting" },
          { href: "/services/door-repair", label: "Door repair" },
        ],
      },
    ],
    faqs: [
      {
        question: "Can you repair rotten wood and doors in Plant City?",
        answer:
          "Yes. We align doors, replace sweeps, and repair rotten sills and trim when the damage is still a handyman repair. Structural framing beyond that scope is called out before we cover it.",
      },
      {
        question: "Do you repair fences on Plant City acreage and in Walden Lake?",
        answer:
          "Yes, within handyman scope. Walden Lake and Park Road are board, rail, and gate repairs. Knights Griffin and Trapnell acreage is the same idea on a longer line: the section that failed, not a new fence around a field. Full property installs are quoted separately.",
      },
      {
        question: "How fast can you reach Plant City?",
        answer: `Plant City is an east Hillsborough drive from Westchase, often same-week and sometimes same-day when the route is already out I-4. Call ${phone}.`,
      },
    ],
  },
  {
    slug: "brandon",
    city: "Brandon",
    displayName: "Brandon, FL",
    county: "Hillsborough County",
    zipHint: "33510–33511",
    neighborhoods: ["Bloomingdale", "Limona", "Providence Lakes", "Brandon Boulevard", "Seffner"],
    intro:
      "Looking for a Brandon FL handyman for drywall, ceiling fans, and fence-section repairs? Licensed and insured Handyman Pros FL serves Bloomingdale, Limona, and Providence Lakes.",
    paragraphs: [
      "Brandon houses along Brandon Boulevard and in Bloomingdale are a mix of 1980s ranches and later two-stories. The punch lists we see are practical: a ceiling fan that wobbles, orange-peel drywall after a furniture move, and a privacy-fence panel that split in a summer storm.",
      "Limona and Providence Lakes calls often stack. A fan swap at an existing box, a bathroom caulk refresh, and a gate latch can share one visit when the parts match. We do not open new electrical circuits. If the box is not fan-rated, we stop and say so.",
      `Our crew serves Brandon daily. Valrico and Riverview are the neighboring service areas on many of the same days.`,
      "Seffner, just north and east of Brandon, is on the same east Hillsborough route. Seffner calls mix outdoor and indoor work: gutter cleaning and reseating loose sections, exterior trim and fascia touch-ups, screen doors and latches, drywall dents and caulk, and shelf or organizer installs. Landlords also book rental turnover lists there.",
      `Call ${phone} for a Brandon estimate. Licensed and insured, open 24/7. Hablamos español at the same number.`,
    ],
    callouts: [
      fenceCallout(
        "Brandon",
        "Bloomingdale and Providence Lakes privacy fences usually need a few boards or a gate, not a new fence around the whole lot.",
        true
      ),
      {
        before:
          "Bloomingdale and Providence Lakes stay on this page. When the east Hillsborough day reaches older wood houses and longer fence lines, that work is the ",
        href: "/locations/plant-city",
        label: "Plant City handyman hub",
        after: " — downtown doors, Walden Lake boards, and acreage sections — from our local crew.",
      },
    ],
    faqs: [
      {
        question: "Do you install ceiling fans in Brandon?",
        answer:
          "Yes, at an existing fan-rated box. We mount, connect, and balance the fan. New wiring is electrician work.",
      },
      {
        question: "Do you serve Seffner?",
        answer: `Yes. Seffner is on the same east Hillsborough route as Brandon and Valrico. Gutter cleaning, exterior trim fixes, doors and screens, drywall, and shelving are common Seffner jobs. Call ${phone}.`,
      },
      {
        question: "Which Brandon neighborhoods do you cover?",
        answer: `Bloomingdale, Limona, Providence Lakes, and the Brandon Boulevard corridor. Call ${phone} if your street is just outside those names — we likely still drive it.`,
      },
    ],
  },
  {
    slug: "riverview",
    city: "Riverview",
    displayName: "Riverview, FL",
    county: "Hillsborough County",
    zipHint: "33578–33579",
    neighborhoods: ["Winthrop", "Southbend", "Riverview Drive", "Balm Riverview"],
    intro:
      "Need Riverview FL home improvements — drywall patches and fence-section fixes — from a licensed handyman? Our local crew serves Riverview and South Hillsborough.",
    paragraphs: [
      "Riverview growth along Riverview Drive and Balm shows up as move-in punch lists and storm damage. Winthrop and Southbend homeowners book us for a hole behind a door, texture that never matched, and a fence panel that leaned after wind.",
      "Drywall repair here is a clean cut, backing when the hole is large, and a feathered coat that can take paint. We will not skim over an active leak. If the stain is still wet, the plumbing or roof issue comes first.",
      "Fence patch work on these lots is a privacy-board replacement, a rail that pulled its screws, or a gate that drags. Pair it with the indoor list when the schedule allows so our local crew serves Riverview in one trip.",
      `Call ${phone}. Licensed and insured. Hablamos español. Our crew serves Riverview daily.`,
    ],
    callouts: [
      fenceCallout(
        "Riverview",
        "Winthrop and Southbend fences take the worst of a south-county storm: one racked panel, a loose rail, or a gate out of square.",
        true
      ),
      {
        before:
          "Winthrop and Southbend punch lists stay here. Northeast of Riverview, strawberry-acreage fences and downtown door repairs are the ",
        href: "/locations/plant-city",
        label: "Plant City",
        after: " page.",
      },
    ],
    faqs: [
      {
        question: "Do you repair drywall in Riverview?",
        answer:
          "Yes. We patch holes, blend common textures, and leave walls paint-ready. Active leaks are identified before we cover them.",
      },
      {
        question: "Do you have a Riverview location?",
        answer: "Our local crew serves Riverview. Call (656) 205-3185.",
      },
      {
        question: "Can one visit cover drywall and a fence board?",
        answer: `Often yes, when both are handyman scope. Call ${phone} and describe both so we load the right materials.`,
      },
    ],
  },
  {
    slug: "lutz",
    city: "Lutz",
    displayName: "Lutz, FL",
    county: "Hillsborough County",
    zipHint: "33548–33549",
    postalCodes: ["33548", "33549"],
    showStartingPrices: true,
    compactLinks: true,
    neighborhoods: ["Lutz Lake Fern", "Van Dyke", "Dale Mabry north", "Land O' Lakes border"],
    intro:
      "Need a Lutz home repair expert? Handyman Pros FL is the local handyman 33549 residents trust for tile patch work, indoor fixes, and careful outdoor repairs.",
    directAnswer: "Handyman Pros FL serves Hillsborough-side Lutz, FL, including ZIPs 33548 and 33549, from its Westchase headquarters, handling tile repair, ceiling fan installs and small jobs, each with a free estimate.",
    paragraphs: [
      "A Lutz home repair expert should understand larger lots, lake-adjacent humidity, and the mix of custom and production homes around ZIP 33549. Handyman Pros FL serves Lutz as a true local handyman 33549 option — close enough for responsive scheduling, skilled enough for clean finish work that lasts.",
      "Tile patch requests often follow a cracked floor tile, a chipped shower surround, or a remodel that left an unfinished edge. We assess substrate condition, match size and layout when materials are available, and complete careful cuts so the repair blends rather than shouts. For specialty porcelain or unavailable discontinued tile, we discuss realistic options before starting.",
      "Beyond tile patch projects, Lutz homeowners book us for drywall, fans, doors, and outdoor punch lists. Acreage properties may need extra travel time between structures; we plan visits so barn offices, casitas, or detached garages can be addressed efficiently when that is part of your scope.",
      "Call (656) 205-3185 to reach your local handyman 33549 team anytime. Handyman Pros FL is open 24/7 for Lutz home repair expert estimates, including multi-trade honey-do days that combine indoor and outdoor tasks.",
      "Whether you are near Dale Mabry, Van Dyke, or further into Lutz’s residential pockets, we show up prepared and leave the job site tidy.",
    ],
    sections: [
      {
        heading: "Lutz is lots, lakes and two counties",
        subsections: [
          {
            heading: "Bigger lots, more than one structure",
            paragraphs: [
              "Lutz is larger lots, lake humidity, and a drive north on Dale Mabry or Van Dyke Road. Houses range from production homes near the Land O' Lakes line to custom places where the casita and the garage are separate stops. We plan the visit so both get done when they are on the list.",
            ],
          },
          {
            heading: "Lake humidity and what it does to walls, doors and grout",
            paragraphs: [
              "Lutz has about 2.4 square miles of water inside its boundaries, and lakeside houses hold moisture. UF/IFAS Extension notes that mold grows on drywall, tile and wood when humidity stays above 60 percent, and the Florida Department of Health says painting or caulking over mold will not stop it. So we look for the water source before we patch a wall or regrout a shower, and we adjust doors that swell in the wet months. UF/IFAS advises a licensed mold remediation company for mold larger than about 10 square feet.",
            ],
          },
          {
            heading: "Hillsborough side and Pasco Lutz",
            paragraphs: [
              "Lutz is unincorporated and spans Hillsborough and Pasco counties; its ZIP codes reach north past the county line to SR 54, an area people call Pasco Lutz. When a job needs a permit, it goes to the county the house is in. Our regular Lutz route is the Hillsborough side: Lutz-Lake Fern Road, Van Dyke Road and the Dale Mabry corridor.",
            ],
          },
        ],
        sources: [{ label: "Wikipedia: Lutz, Florida", href: "https://en.wikipedia.org/wiki/Lutz,_Florida" }, { label: "UF/IFAS mold fact sheet (PDF)", href: "https://sfyl.ifas.ufl.edu/media/sfylifasufledu/sarasota/documents/pdf/chems/keydocs/2024_Chems_factsheetMoldManagement_ifas_FINAL_ADA.pdf" }, { label: "Florida DOH mold fact sheet (PDF)", href: "https://www.floridahealth.gov/wp-content/uploads/2025/08/emergency-information-factsheet-mold.pdf" }],
      },
      {
        heading: "Tile patches and regrout in Lutz",
        paragraphs: [
          "Tile patch requests follow a cracked floor tile or a chipped shower edge. We check the substrate, match size when you have leftovers, and cut so the repair does not shout. Discontinued tile is discussed before we start, not after the thinset is mixed. Call or text for an instant estimate.",
        ],
        links: [{ href: "/services/tile-installation", label: "Tile repair and installation" }],
      },
      {
        heading: "Gates and short fence runs on Lutz acreage",
        paragraphs: [
          "Fence and gate work on Lutz acreage is a section or a latch, plus the walk between structures. We are not bidding ranch fencing by the mile. Hurricane season runs June 1 to November 30, and wind is what racks gates and loosens boards. Fans, doors, and drywall fill the rest of a Lutz day.",
        ],
        links: [
          { href: "/services/fence", label: "Fence repair" },
          { href: "/services/door-repair", label: "Door repair" },
          { href: "/services/drywall-repair", label: "Drywall repair" },
        ],
        sources: [{ label: "NOAA National Hurricane Center", href: "https://www.nhc.noaa.gov/climo/" }],
      },
      {
        heading: "Lutz roads and landmarks we cover",
        paragraphs: [
          "Beautiful Downtown Lutz is the replica train depot at Lutz-Lake Fern Road and US 41, rebuilt in 2000. Our Lutz stops run along Lutz-Lake Fern Road, Van Dyke Road, US 41 and the Dale Mabry (SR 597) corridor on the west side. Land O' Lakes, Wesley Chapel, Carrollwood and New Tampa are the next stops on the same north route.",
        ],
        links: [
          { href: "/locations/land-o-lakes", label: "Land O' Lakes" },
          { href: "/locations/wesley-chapel", label: "Wesley Chapel" },
          { href: "/locations/carrollwood", label: "Carrollwood" },
          { href: "/locations/tampa#new-tampa", label: "New Tampa" },
          { href: "/locations/temple-terrace", label: "Temple Terrace" },
        ],
        sources: [{ label: "Wikipedia: Lutz, Florida", href: "https://en.wikipedia.org/wiki/Lutz,_Florida" }],
      },
      {
        heading: "Same-day handyman in Lutz",
        paragraphs: [
          `Same-day visits get a free estimate. Whether today works depends on whether the crew is already on the north route. Call ${phone} and we tell you on the phone.`,
        ],
        links: [{ href: "/services/same-day-handyman", label: "Same-day handyman" }],
      },
    ],
    callouts: [
      fenceCallout(
        "Lutz",
        "Lake Fern and Van Dyke lots often need a gate reset or a short run of boards between oaks, not a commercial fence bid."
      ),
    ],
    faqs: [
      {
        question: "Do you serve all of Lutz?",
        answer: `Our regular Lutz route is the Hillsborough side, ZIPs 33548 and 33549: Lutz Lake Fern, Van Dyke, and the Dale Mabry north corridor. For a Pasco-side Lutz address, call ${phone} and we will tell you if the route reaches you.`,
      },
      {
        question: "How much does a handyman cost in Lutz?",
        answer:
          "Expect low prices and a free estimate. We confirm the price on the phone before we come out.",
      },
      {
        question: "Can you patch tile in Lutz?",
        answer:
          "Yes, when the substrate is sound and a matching tile is available. We will tell you if the crack is a bigger floor problem. Call or text for an instant estimate.",
      },
      {
        question: "Do you fix gates and short fence sections on larger lots?",
        answer:
          "Yes. We replace pickets, reset gates and match short sections. Whole-property fencing is a fence contractor job, and we'll say so.",
      },
      {
        question: "Why do doors and grout give trouble in Lutz homes?",
        answer:
          "Humidity. Lakeside houses hold moisture, doors swell, and grout and drywall stay damp longer. UF/IFAS notes mold grows on these materials above 60 percent humidity, so we look for the water source before we patch or regrout.",
      },
      {
        question: "Are you licensed and insured?",
        answer: "Yes. If a job needs a permit or a licensed trade, we tell you before we start.",
      },
      {
        question: "¿Hablan español?",
        answer: `Sí. Hablamos español. Llame al ${phone}.`,
      },
    ],
  },
  {
    slug: "wesley-chapel",
    h1Override: "Wesley Chapel Handyman Services & Home Maintenance",
    city: "Wesley Chapel",
    displayName: "Wesley Chapel, FL",
    county: "Pasco County",
    zipHint: "33543–33544",
    neighborhoods: ["Wiregrass", "Meadow Pointe", "Seven Oaks", "SR 54"],
    intro:
      "Count on Wesley Chapel handyman service for fixture setup, HOA punch lists, and fence-board repairs. Licensed and insured Handyman Pros FL serves Wesley Chapel, Wiregrass, Meadow Pointe and Seven Oaks. Our crew serves Wesley Chapel daily.",
    paragraphs: [
      "Wesley Chapel along SR 54, Wiregrass, Meadow Pointe, and Seven Oaks produces the same kinds of jobs every week: a vanity light still in the box, a door swollen against new paint, and an HOA fence panel that has to match the one next to it.",
      "Fixture setup is the booked visit. We level towel bars, hang the vanity light at an existing box, and seat a faucet when the stops are already there. New circuits and repipes are not this crew. We say that before the holes are drilled.",
      "Home maintenance visits catch railings, weatherstrip, and a fence clip that let go in wind before the whole run follows. Our local crew serves Wesley Chapel on a planned Pasco route shared with Lutz and Land O' Lakes.",
      `Call ${phone}. Licensed and insured. Hablamos español. Call for a same-week visit.`,
    ],
    callouts: [
      fenceCallout(
        "Wesley Chapel",
        "Wiregrass and Meadow Pointe HOA fences usually fail as one vinyl or wood panel plus a gate that dropped.",
        true
      ),
    ],
    faqs: [
      {
        question: "Do you maintain homes in Wiregrass and Meadow Pointe?",
        answer:
          "Yes. Those neighborhoods, Seven Oaks, and the SR 54 corridor are regular Wesley Chapel stops for fixtures, doors, drywall, and small fence repairs.",
      },
      {
        question: "Can you assemble fixtures the same week?",
        answer: `Often yes. Call ${phone} with the box contents and the neighborhood so we can match the Pasco route.`,
      },
    ],
  },
  {
    slug: "largo",
    city: "Largo",
    displayName: "Largo, FL",
    county: "Pinellas County",
    zipHint: "33770–33778",
    neighborhoods: ["Largo Central Park", "Ridgecrest", "Ulmerton", "Belleair Bluffs border"],
    intro:
      "Need a Largo FL handyman for sticking doors, ceiling fans, and older fence repairs? Licensed and insured Handyman Pros FL serves Largo. Our crew serves Largo daily.",
    paragraphs: [
      "Largo’s housing around Central Park, Ridgecrest, and Ulmerton Road is older than Wesley Chapel and closer to salt air than Brandon. Sliders swell, porch fans rust at the canopy, and wood fences cup. We bring exterior-rated hardware and weatherstrip.",
      "A typical Largo list is a door that will not latch, a fan swap at a fan-rated box, drywall where a leak was already fixed, and a chain-link or wood gate that sags. Condos and ranch houses both show up; we protect the unit and haul the packaging out.",
      `Our local crew serves Largo, often paired with Seminole, Pinellas Park, or Clearwater. You still get one phone number and one licensed crew.`,
      `Call ${phone} for Largo. Open 24/7. Hablamos español. Licensed and insured.`,
    ],
    callouts: [
      fenceCallout(
        "Largo",
        "Ridgecrest and Ulmerton yards usually need a sagging gate or cupped boards repaired, not a new fence contract.",
        true
      ),
    ],
    faqs: [
      {
        question: "Do you serve Largo from Tampa?",
        answer:
          "Yes. Our crew serves Largo daily.",
      },
      {
        question: "Can you fix doors swollen by humidity in Largo?",
        answer:
          "Yes. We plane, adjust hinges, and replace weatherstrip and latches so the door closes without forcing it.",
      },
      {
        question: "How soon can you get to Largo?",
        answer: `Same-week is typical on our Pinellas route, and same-day happens when we are already over the bridge. Call ${phone}.`,
      },
    ],
  },
  {
    slug: "pinellas-park",
    city: "Pinellas Park",
    displayName: "Pinellas Park, FL",
    county: "Pinellas County",
    zipHint: "33781–33782",
    neighborhoods: ["Park Boulevard", "49th Street", "Historic district", "Gateway border"],
    intro:
      "Searching for a Pinellas Park handyman for punch lists, doors, and gate repairs? Licensed and insured Handyman Pros FL serves this Pinellas city. Our crew serves Pinellas Park daily.",
    paragraphs: [
      "Pinellas Park along Park Boulevard and 49th Street is compact lots, older block and frame houses, and shopfront-adjacent streets where a landlord needs a turnover done without a remodel. We handle the list that makes a house rentable or livable: doors, drywall, fans, and hardware.",
      "Gates and short fence runs here are often chain-link or aging wood between close neighbors. A fencing handyman repair resets the latch and replaces a few sections. We are not staking a new commercial yard.",
      "Historic-area cottages need slower finish work than a Gateway warehouse. We keep the scope residential and handyman-sized. Seminole and Largo are the next Pinellas stops on the same day when the route allows.",
      `Call ${phone}. Licensed and insured. Hablamos español. Our crew serves Pinellas Park daily.`,
    ],
    callouts: [
      fenceCallout(
        "Pinellas Park",
        "Park Boulevard lots usually need a chain-link gate pulled back into square or a few wood boards replaced.",
        true
      ),
    ],
    faqs: [
      {
        question: "Do you take Pinellas Park rental turnovers?",
        answer:
          "Yes, when the work is handyman scope: drywall, doors, fixtures, fans, and small fence or gate repairs. Full renovations are quoted separately.",
      },
      {
        question: "What should I send for an estimate?",
        answer: `Photos of the door, wall, or gate, plus the street. Call ${phone} if the photos are easier to describe live.`,
      },
    ],
  },
  {
    slug: "carrollwood",
    h1Override: "Local Handyman Service in Carrollwood, FL",
    city: "Carrollwood",
    displayName: "Carrollwood, FL",
    county: "Hillsborough County",
    zipHint: "33618",
    neighborhoods: ["Carrollwood Village", "Northdale", "Original Carrollwood", "Dale Mabry"],
    intro:
      "Handyman Pros FL delivers dependable Carrollwood home maintenance — from ceiling fan installation to everyday repairs — with the care of a true local handyman service.",
    paragraphs: [
      "Carrollwood Village, Original Carrollwood, and Northdale are inside our fastest Hillsborough radius after Westchase itself. Families book a fan that wobbles, a drywall scar from a move, and a Saturday list of blinds, shelves, and door hardware. The truck is already stocked because our local crew serves Carrollwood.",
      "Ceiling fan installation is the Carrollwood request we hear most. We confirm the box is fan-rated, make the connections at that existing box, and balance the blades. If the brace will not hold a fan, we stop instead of hanging weight from drywall.",
      "Backyard fences in Northdale and along Dale Mabry need a board or a dragging gate more often than a new fence. We repair the section and keep the rest of the honey-do list moving. Citrus Park and Town 'N' Country are the adjacent service areas.",
      `Call ${phone} anytime. Licensed and insured. Hablamos español for reparaciones en casa. Carrollwood is a service area — our address is ${hq}, Tampa, FL 33626.`,
    ],
    callouts: [
      fenceCallout(
        "Carrollwood",
        "Northdale and Carrollwood Village gates drag after humidity; a few privacy boards usually go with that latch adjustment.",
        true
      ),
    ],
    faqs: [
      {
        question: "Do you install ceiling fans in Carrollwood?",
        answer:
          "Yes, at an existing fan-rated box. We mount, wire, and balance the fan. New circuits are electrician scope.",
      },
      {
        question: "Do you speak Spanish for Carrollwood estimates?",
        answer: `Yes. Hablamos español at ${phone}, the same number as English estimates.`,
      },
    ],
  },
  {
    slug: "temple-terrace",
    city: "Temple Terrace",
    displayName: "Temple Terrace, FL",
    county: "Hillsborough County",
    zipHint: "33617, 33637",
    postalCodes: ["33617", "33637"],
    showStartingPrices: true,
    compactLinks: true,
    neighborhoods: ["56th Street", "Busch Boulevard", "Temple Terrace Golf", "USF border"],
    intro:
      "Handyman Pros FL is the local contractor Temple Terrace homeowners call for dependable Temple Terrace home repair, punch-list fixes, and same-day help when you search handyman near me.",
    directAnswer: "Handyman Pros FL serves Temple Terrace, FL (ZIPs 33617 and 33637) from its Westchase headquarters, fixing drywall, light fixtures, ceiling fans and sticking doors in older and mid-century homes near 56th Street and USF. Temple Terrace is its own city, so permits come from the City of Temple Terrace, and we tell you up front if your job needs one.",
    paragraphs: [
      "Temple Terrace home repair requests rarely wait for a perfect weekend. Between university-area rentals, established family homes, and busy schedules along Busch Boulevard corridors, residents need a local contractor who answers the phone and arrives prepared. Our local crew serves Temple Terrace.",
      "When neighbors search handyman near me, they usually want more than a vague callback. They want someone who can assess a sticking door, patch drywall after a remodel, hang blinds level, and tighten loose stair rails in one productive visit. Our team treats Temple Terrace properties with the same care we give Westchase and Carrollwood homes — shoe covers indoors, dust control during sanding, and a walkthrough before we leave.",
      "As your local contractor for everyday improvements, we also help with rental turnovers and pre-listing punch lists. Fresh caulk in bathrooms, replaced outlet covers, adjusted cabinet hinges, and securely mounted TVs make a measurable difference for buyers and tenants. If a job needs permitting or a specialist trade, we say so upfront rather than forcing a poor DIY-style fix.",
      "Temple Terrace’s mix of mid-century homes and newer builds means fasteners, wall types, and outdoor exposure vary block to block. We bring the right anchors, blades, and finishes so repairs hold up in Florida humidity. Call Handyman Pros FL at (656) 205-3185 anytime — we are open 24/7 for Temple Terrace home repair estimates and scheduling.",
      "Whether you found us searching handyman near me or were referred by a neighbor, you get transparent pricing and local accountability. From fixture swaps to fence patches, Handyman Pros FL is ready to keep your Temple Terrace property working smoothly.",
    ],
    sections: [
      {
        heading: "Older Temple Terrace homes: plaster, block and 1920s walls",
        paragraphs: [
          "Temple Terrace sits between the Hillsborough River and the USF edge, with mid-century houses and later infill on the same block. Fasteners and wall types change house to house. We bring anchors that match block, wood studs, and the occasional plaster transition instead of one box of drywall screws for every wall.",
          "The city was planned in the 1920s as a Mediterranean Revival golf-course community, one of the first in the country, and incorporated in 1925. Fifteen M. Leo Elliott buildings and more than 35 Dwight James Baum houses survive next to post-war mid-century homes.",
        ],
        sources: [{ label: "Wikipedia: Temple Terrace, Florida", href: "https://en.wikipedia.org/wiki/Temple_Terrace,_Florida" }],
      },
      {
        heading: "Rental turnovers near USF and Busch Boulevard",
        paragraphs: [
          "The booked work is drywall after a rental turnover, a door that sticks on 56th Street, blinds and shelves hung level, and a stair rail that has loosened. Busch Boulevard rentals need the punch list finished, not a redesign. Drywall patches get a free estimate.",
          "One permit detail matters for landlords: the City's exemption for ordinary minor repairs covers an owner's primary residence, and the City says rental property is deemed commercial in nature and requires permitting. Check with the City's permitting office before skipping a permit, and we flag anything that looks permit-level.",
        ],
        links: [
          { href: "/services/drywall-repair", label: "Drywall repair" },
          { href: "/services/door-repair", label: "Door repair" },
        ],
        sources: [{ label: "City of Temple Terrace Permitting Services", href: "https://templeterrace.gov/273/Permitting-Services" }],
      },
      {
        heading: "Fence repairs and Temple Terrace permit rules",
        paragraphs: [
          "The City's fence application says replacing or repairing up to three panels, or replacing a gate, does not need a permit. A bigger replacement or a fence in a new position needs a fence permit with a survey or plot plan and a sketch. Side and rear fences top out at 7 feet, and the finished side faces out. The City also treats a decaying fence as a code violation, and broken sections can become projectiles in a storm.",
          "Fence boards and gates show up on golf-course-adjacent lots and older side yards. We replace what failed.",
        ],
        links: [{ href: "/services/fence", label: "Fence repair" }],
        sources: [
          { label: "Temple Terrace fence permit application", href: "https://templeterrace.gov/FormCenter/Community-Development-6/Permit-Application-Fence-93" },
          { label: "Temple Terrace fence and wall maintenance", href: "https://fl-templeterrace2.civicplus.com/294/Fence-Wall-Maintenance" },
        ],
      },
      {
        heading: "Live oaks, the river and storm season",
        paragraphs: [
          "Temple Terrace is a Tree City USA with sand live oaks, and the Hillsborough River runs along its east and south sides. Oak debris fills gutters and downspouts, and river-edge humidity swells doors. Hurricane season runs June 1 to November 30.",
        ],
        links: [
          { href: "/services/gutter-installation", label: "Gutter repair and cleaning" },
          { href: "/services/door-repair", label: "Door repair" },
        ],
        sources: [{ label: "Wikipedia: Temple Terrace, Florida", href: "https://en.wikipedia.org/wiki/Temple_Terrace,_Florida" }, { label: "NOAA National Hurricane Center", href: "https://www.nhc.noaa.gov/climo/" }],
      },
      {
        heading: "Temple Terrace areas we cover",
        paragraphs: [
          "The 56th Street and Busch Boulevard corridors, the Riverhills Park area, streets around the Temple Terrace Golf & Country Club and Florida College, and homes near USF, in ZIPs 33617 and 33637. Seminole Heights and Carrollwood are the Tampa neighborhoods we often pair with a Temple Terrace stop.",
        ],
        links: [
          { href: "/locations/tampa#seminole-heights", label: "Seminole Heights" },
          { href: "/locations/carrollwood", label: "Carrollwood" },
          { href: "/locations/brandon", label: "Brandon" },
          { href: "/locations/lutz", label: "Lutz" },
          { href: "/locations/plant-city", label: "Plant City" },
        ],
      },
      {
        heading: "Same-day handyman in Temple Terrace",
        paragraphs: [
          `Same-day visits get a free estimate. Whether today works depends on the east Tampa route. Call ${phone} and we tell you on the phone.`,
        ],
        links: [{ href: "/services/same-day-handyman", label: "Same-day handyman" }],
      },
    ],
    callouts: [
      fenceCallout(
        "Temple Terrace",
        "Side-yard wood fences near 56th Street and the golf course typically need boards and a latch, not a new layout."
      ),
    ],
    faqs: [
      {
        question: "Do you cover Temple Terrace near USF?",
        answer:
          "Yes. The 56th Street and Busch Boulevard corridors, including homes near the USF border, are on our east Tampa route from Westchase.",
      },
      {
        question: "How much does a handyman cost in Temple Terrace?",
        answer:
          "Expect low prices and a free estimate. We confirm the price on the phone before we come out.",
      },
      {
        question: "Can you patch drywall in a Temple Terrace rental?",
        answer:
          "Yes. We patch, texture-blend, and leave the wall ready for paint. We flag moisture before we cover a stain. Drywall patches get a free estimate.",
      },
      {
        question: "Do I need a permit to fix my fence in Temple Terrace?",
        answer:
          "The City says replacing up to three panels or a gate doesn't need a permit. Bigger replacements or a new fence line need a city fence permit with a survey and sketch.",
      },
      {
        question: "Do landlords need permits for rental repairs in Temple Terrace?",
        answer:
          "The City's owner-repair exemption covers an owner's primary residence; it treats rental property as commercial. Check with the City's permitting office, and we'll flag anything that looks permit-level.",
      },
      {
        question: "Can you fix doors that stick in older Temple Terrace homes?",
        answer:
          "Yes. Older and mid-century doors often swell or sag on their hinges. We tighten hinges, adjust or plane the door, and fix the latch so it closes.",
      },
      {
        question: "Is Temple Terrace its own Handyman Pros location?",
        answer: `Our local crew serves Temple Terrace daily. Our team is based at ${hq} in Westchase and serves all of Tampa Bay.`,
      },
      {
        question: "Are you licensed and insured?",
        answer: "Yes, Handyman Pros FL is licensed and insured.",
      },
    ],
  },
  {
    slug: "land-o-lakes",
    city: "Land O' Lakes",
    displayName: "Land O' Lakes, FL",
    county: "Pasco County",
    zipHint: "34638–34639",
    neighborhoods: ["Connerton", "Wilderness Lake", "Land O' Lakes Boulevard", "Lutz border"],
    intro:
      "Need a Land O' Lakes handyman for gutter sections, fence repairs, and house punch lists? Licensed and insured Handyman Pros FL serves Land O' Lakes. Our crew serves Land O' Lakes daily.",
    paragraphs: [
      "Land O' Lakes Boulevard, Connerton, and Wilderness Lake are larger lots than Carrollwood and wetter gutters than a South Tampa bungalow. Oak debris fills a run, a downspout dumps against the slab, and a fence panel on the side yard loosens after wind.",
      "Gutter visits here are a flush, a reseated hanger, or a short damaged section — not a whole-home metal package and not a new roof. Fence visits are the failed panel or gate. Indoor work is the fan, the drywall patch, and the door that swelled after the last rain.",
      "We share this Pasco day with Lutz to the south and Wesley Chapel to the east. Spring Hill is farther north and gets its own scheduling window.",
      `Call ${phone} for Land O' Lakes. Licensed and insured. Hablamos español. Single Tampa headquarters.`,
    ],
    callouts: [
      fenceCallout(
        "Land O' Lakes",
        "Connerton and Wilderness Lake fences fail a panel at a time; we repair that run when the posts are still sound.",
        true
      ),
    ],
    faqs: [
      {
        question: "Do you clean and repair gutters in Land O' Lakes?",
        answer:
          "Yes. We flush downspouts, reseat loose sections, and replace a damaged length when the fascia is sound. Steep roofs and full-house replacements are quoted separately.",
      },
      {
        question: "Do you repair fences in Connerton?",
        answer: `Yes, handyman-scope fence repair: boards, a gate, or a short matching section. Call ${phone} with a photo.`,
      },
    ],
  },
  {
    slug: "seminole",
    city: "Seminole",
    displayName: "Seminole, FL",
    county: "Pinellas County",
    zipHint: "33772–33777",
    neighborhoods: ["Seminole Boulevard", "Lake Seminole", "Oakhurst border", "Bay Pines area"],
    intro:
      "Need a Seminole FL handyman — the Pinellas city, not Seminole Heights in Tampa — for fans, doors, and fence repairs? Licensed and insured Handyman Pros FL — our local crew serves Seminole.",
    paragraphs: [
      "Seminole, Florida sits in mid-Pinellas along Seminole Boulevard and Lake Seminole. It is a different place from Seminole Heights in Tampa. We keep those pages separate so a lake-house fan install is not mixed up with a Heights bungalow door.",
      "The Seminole list is humidity work: a slider that sticks, a fan at an existing box near the lake, drywall after a repaired leak, and a wood or chain-link gate that dropped. Oakhurst-border and Bay Pines-area houses get the same crew that covers Largo and Pinellas Park.",
      "Salt air is harder on exterior hardware here than in Carrollwood. We use exterior-rated fasteners and call out metal that is already too far gone to reuse.",
      `Call ${phone}. Licensed and insured. Hablamos español. The only address is Westchase, Tampa.`,
    ],
    callouts: [
      fenceCallout(
        "Seminole",
        "Lake Seminole and Seminole Boulevard yards usually need a gate pulled square or a short wood section replaced.",
        true
      ),
    ],
    faqs: [
      {
        question: "Is this page for Seminole Heights in Tampa?",
        answer:
          "No. This page is Seminole in Pinellas County. Seminole Heights is covered on our Tampa handyman page.",
      },
      {
        question: "What Seminole jobs are most common?",
        answer: `Sticking doors, ceiling fans at existing boxes, drywall patches, and fence or gate repairs. Call ${phone}.`,
      },
    ],
  },
  {
    slug: "spring-hill",
    city: "Spring Hill",
    displayName: "Spring Hill, FL",
    county: "Hernando County",
    zipHint: "34606–34609",
    neighborhoods: ["Spring Hill Drive", "County Line Road", "Deltona", "Weeki Wachee border"],
    intro:
      "Looking for a Spring Hill FL handyman for fence sections, doors, and home repairs? Licensed and insured Handyman Pros FL serves Spring Hill and Hernando County.",
    paragraphs: [
      "Spring Hill is the longest regular drive on this expansion: north into Hernando County along Spring Hill Drive and County Line Road. We schedule it on purpose, and our local crew serves Spring Hill. Deltona and the Weeki Wachee side are still the same company and the same phone, and our local crew serves Spring Hill there too.",
      "The jobs that justify the drive are concrete: a fence panel down after wind, a door that no longer latches, a gutter section dumping water at the slab, and a punch list that has waited all season. We load for that list. A single picture hook is an easier fit when we are already in Hernando.",
      "Fence repair here is often a longer wood run than a Carrollwood side yard, but it is still a handyman repair of the damaged section. We are not opening a fencing-contractor yard in Spring Hill. New Port Richey and Land O' Lakes are the Pasco stops we pair when the map allows.",
      `Call ${phone} and ask for the next Hernando window. Licensed and insured. Hablamos español.`,
    ],
    callouts: [
      fenceCallout(
        "Spring Hill",
        "County Line and Spring Hill Drive fences often lose a panel in wind; we repair the section when we are already booked into Hernando.",
        true
      ),
    ],
    faqs: [
      {
        question: "Do you really drive to Spring Hill?",
        answer:
          "Yes, as a scheduled Hernando County service area. It is farther than Carrollwood or Lutz, so we confirm the window instead of promising same-hour arrival.",
      },
      {
        question: "What should I book in Spring Hill?",
        answer: `Fence-section repairs, doors, gutter sections, fans, and punch lists. Call ${phone} with photos so the drive is loaded correctly.`,
      },
    ],
  },
];
