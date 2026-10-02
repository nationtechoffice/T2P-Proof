import type { CoreService, TargetLocation } from "@/lib/programmatic";
import { siteConfig } from "@/lib/site-config";

const phone = siteConfig.phone;
const hq = siteConfig.address.street;

function fenceCallout(place: string, detail: string): NonNullable<TargetLocation["callouts"]>[number] {
  return {
    before: `${detail} That work is a `,
    href: "/services/fence-handyman",
    label: "fence handyman",
    after: ` visit in ${place} — pickets, a gate, or a short matching section — from the same licensed and insured Westchase crew. We are not a separate fencing contractor.`,
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
    "Need a fence handyman or fencing handyman in Tampa Bay? Handyman Pros FL repairs leaning sections, replaces pickets, resets a sound post, and hangs a short run of wood or vinyl you already matched — licensed and insured, dispatched from our only Westchase headquarters.",
  paragraphs: [
    "A fence handyman visit is a handyman job, not a fencing-company identity. Homeowners call when a summer storm racks a wood privacy panel in Brandon or Riverview, a Carrollwood gate drags the concrete, or a Plant City board has rotted at the bottom. We fix the section that failed. We do not rebrand the crew as a fence contractor, and we do not sell commercial cages, razor wire, or a custom metal shop.",
    "Fencing handyman work that fits this page: replace broken pickets or a rotten bottom rail, straighten a gate and reset the latch, tighten hardware, swap a short vinyl or wood panel when you have a match, and reset a single post when the existing hole is still sound. If the whole run is on the ground, the property line is in dispute, or the posts need a survey, we say that before anyone starts digging.",
    "Florida sun and afternoon rain are why these repairs repeat. Pressure-treated boards cup, vinyl panels slip their clips after wind, and chain-link gates drop. We carry common fasteners and can often finish a small repair the same week from Westchase. Materials you already bought at the home center are welcome when they match the fence you have.",
    `Plant City, Riverview, Brandon, Lutz, Wesley Chapel, Land O' Lakes, and Spring Hill are the yards where a fence handyman call is most common. Pinellas stops in Largo, Seminole, and Pinellas Park are older wood and chain-link. Call ${phone} or send photos. Licensed and insured. One Tampa location in Westchase — Hablamos español on the same number.`,
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
        "Most Tampa Bay fence handyman repairs — a few boards, a gate adjustment, or a short section with material on site — are quoted around $150 to $650 after we see photos. Longer runs cost more. Estimates are free. The crew is licensed and insured.",
    },
  ],
  offer: {
    low: 150,
    high: 650,
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
      "Need a Plant City handyman for a door that swelled, rotten wood at a sill, or a fence board on a golf-course lot or a strawberry-acreage line? Licensed and insured Handyman Pros FL drives east from our only Westchase headquarters — Plant City is a service area, not a second office.",
    paragraphs: [
      `Plant City is not a Brandon ranch corridor and not a Riverview subdivision punch list. Downtown blocks around the water tower are older wood. Walden Lake is a golf-community fence line. East of Park Road, Trapnell and Knights Griffin open into pasture and strawberry fields. Technicians leave ${hq} in Westchase with door hardware, exterior caulk, and fence fasteners already on the truck.`,
      "Door work here is alignment after rain, a sweep that actually seals, and a prehung unit only when the opening is ready. Rotten wood on a sill or a short fascia edge gets cut back so the next storm does not travel into the trim. A downtown cottage and a Walden Lake two-story do not fail the same way, and we do not write them up as if they do.",
      "Fence calls split in two. Walden Lake is usually a privacy board, a soft bottom rail, or a gate that will not latch. Acreage toward Knights Griffin and County Line Road — Lakeland is the next city on I-4, and we do not have a shop there — is a longer wood run or a farm gate. Still one failed section, not a fencing-contractor bid.",
      `Call ${phone} for a Plant City estimate. We are open 24/7 for scheduling. Hablamos español. There is no Plant City branch; the only address is Westchase, Tampa.`,
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
          { href: "/services/fence-handyman", label: "Fence handyman" },
          { href: "/services/tv-wall-mounting", label: "TV wall mounting" },
        ],
      },
      {
        name: "Knights Griffin and Trapnell",
        body: "East of Park Road the lots open into pasture, garden rows, and strawberry acreage toward County Line Road. Fence work here is a rotten bottom board, a sagging farm gate, or one soft post when the hole is still sound — a longer line than a Walden Lake panel, still a handyman section, not ranch fencing by the mile.",
        links: [
          { href: "/services/fence-handyman", label: "Acreage fence repair" },
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
        question: "Do you have a handyman office in Plant City?",
        answer: `No. Handyman Pros FL has one location at ${hq}, Apt 203, Tampa, FL 33626 in Westchase. Plant City is a service area we drive to.`,
      },
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
    neighborhoods: ["Bloomingdale", "Limona", "Providence Lakes", "Brandon Boulevard"],
    intro:
      "Looking for a Brandon FL handyman for drywall, ceiling fans, and fence-section repairs? Licensed and insured Handyman Pros FL serves Bloomingdale, Limona, and Providence Lakes from our Westchase headquarters.",
    paragraphs: [
      "Brandon houses along Brandon Boulevard and in Bloomingdale are a mix of 1980s ranches and later two-stories. The punch lists we see are practical: a ceiling fan that wobbles, orange-peel drywall after a furniture move, and a privacy-fence panel that split in a summer storm.",
      "Limona and Providence Lakes calls often stack. A fan swap at an existing box, a bathroom caulk refresh, and a gate latch can share one visit when the parts match. We do not open new electrical circuits. If the box is not fan-rated, we stop and say so.",
      `Brandon is east of Tampa, not a satellite shop. The truck starts at ${hq} in Westchase. Valrico and Riverview are the neighboring service areas on many of the same days.`,
      `Call ${phone} for a Brandon estimate. Licensed and insured, open 24/7. Hablamos español at the same number.`,
    ],
    callouts: [
      fenceCallout(
        "Brandon",
        "Bloomingdale and Providence Lakes privacy fences usually need a few boards or a gate, not a new fence around the whole lot."
      ),
      {
        before:
          "Bloomingdale and Providence Lakes stay on this page. When the east Hillsborough day reaches older wood houses and longer fence lines, that work is the ",
        href: "/locations/plant-city",
        label: "Plant City handyman hub",
        after: " — downtown doors, Walden Lake boards, and acreage sections — from the same Westchase crew.",
      },
    ],
    faqs: [
      {
        question: "Is there a Brandon handyman office?",
        answer:
          "No. Brandon is a Hillsborough service area. Our only headquarters is in Westchase, Tampa, FL 33626.",
      },
      {
        question: "Do you install ceiling fans in Brandon?",
        answer:
          "Yes, at an existing fan-rated box. We mount, connect, and balance the fan. New wiring is electrician work.",
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
      "Need Riverview FL home improvements — drywall patches and fence-section fixes — from a licensed handyman? Handyman Pros FL serves South Hillsborough from one Westchase headquarters.",
    paragraphs: [
      "Riverview growth along Riverview Drive and Balm shows up as move-in punch lists and storm damage, not as a need for a second storefront. Winthrop and Southbend homeowners book us for a hole behind a door, texture that never matched, and a fence panel that leaned after wind.",
      "Drywall repair here is a clean cut, backing when the hole is large, and a feathered coat that can take paint. We will not skim over an active leak. If the stain is still wet, the plumbing or roof issue comes first.",
      "Fence patch work on these lots is a privacy-board replacement, a rail that pulled its screws, or a gate that drags. Pair it with the indoor list when the schedule allows so South County is one trip from Westchase.",
      `Call ${phone}. Licensed and insured. Hablamos español. Riverview is a service area — the only NAP is our Westchase address.`,
    ],
    callouts: [
      fenceCallout(
        "Riverview",
        "Winthrop and Southbend fences take the worst of a south-county storm: one racked panel, a loose rail, or a gate out of square."
      ),
      {
        before:
          "Winthrop and Southbend punch lists stay here. Northeast of Riverview, strawberry-acreage fences and downtown door repairs are the ",
        href: "/locations/plant-city",
        label: "Plant City",
        after: " service area, not a second office and not a copy of this page.",
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
        answer: `No. Crews leave ${hq}, Apt 203, Tampa, FL 33626. Riverview is a drive from that single headquarters.`,
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
    zipHint: "33549",
    neighborhoods: ["Lutz Lake Fern", "Van Dyke", "Dale Mabry north", "Land O' Lakes border"],
    intro:
      "Need a Lutz home repair expert in ZIP 33549? Licensed and insured Handyman Pros FL handles tile patches, ceiling fans, and acreage fence fixes from our Westchase headquarters.",
    paragraphs: [
      "Lutz is larger lots, lake humidity, and a drive north on Dale Mabry or Van Dyke Road. ZIP 33549 houses range from production homes near the Land O' Lakes line to custom places where the casita and the garage are separate stops. We plan the visit so both get done when they are on the list.",
      "Tile patch requests follow a cracked floor tile or a chipped shower edge. We check the substrate, match size when you have leftovers, and cut so the repair does not shout. Discontinued tile is discussed before we start, not after the thinset is mixed.",
      "Fence and gate work on Lutz acreage is a section or a latch, plus the walk between structures. We are not bidding ranch fencing by the mile. Fans, doors, and drywall fill the rest of a 33549 day.",
      `Call ${phone} for Lutz. Licensed and insured, open 24/7. Hablamos español. One office: Westchase.`,
    ],
    callouts: [
      fenceCallout(
        "Lutz",
        "Lake Fern and Van Dyke lots often need a gate reset or a short run of boards between oaks, not a commercial fence bid."
      ),
    ],
    faqs: [
      {
        question: "Do you serve Lutz ZIP 33549?",
        answer:
          "Yes. Lutz Lake Fern, Van Dyke, and the Dale Mabry north corridor are on our north Hillsborough route from Westchase.",
      },
      {
        question: "Can you patch tile in Lutz?",
        answer:
          "Yes, when the substrate is sound and a matching tile is available. We will tell you if the crack is a bigger floor problem.",
      },
      {
        question: "Is Lutz a branch office?",
        answer: `No. Handyman Pros FL has one headquarters at ${hq}, Tampa, FL 33626. Lutz is a service area.`,
      },
    ],
  },
  {
    slug: "wesley-chapel",
    city: "Wesley Chapel",
    displayName: "Wesley Chapel, FL",
    county: "Pasco County",
    zipHint: "33543–33544",
    neighborhoods: ["Wiregrass", "Meadow Pointe", "Seven Oaks", "SR 54"],
    intro:
      "Count on Wesley Chapel handyman service for fixture setup, HOA punch lists, and fence-board repairs. Licensed and insured Handyman Pros FL dispatches from Westchase into Pasco — not from a Wesley Chapel shop.",
    paragraphs: [
      "Wesley Chapel along SR 54, Wiregrass, Meadow Pointe, and Seven Oaks produces the same kinds of jobs every week: a vanity light still in the box, a door swollen against new paint, and an HOA fence panel that has to match the one next to it.",
      "Fixture setup is the booked visit. We level towel bars, hang the vanity light at an existing box, and seat a faucet when the stops are already there. New circuits and repipes are not this crew. We say that before the holes are drilled.",
      "Home maintenance visits catch railings, weatherstrip, and a fence clip that let go in wind before the whole run follows. The drive from Westchase is a planned Pasco route shared with Lutz and Land O' Lakes.",
      `Call ${phone}. Licensed and insured. Hablamos español. Wesley Chapel remains a service area on a single Tampa NAP.`,
    ],
    callouts: [
      fenceCallout(
        "Wesley Chapel",
        "Wiregrass and Meadow Pointe HOA fences usually fail as one vinyl or wood panel plus a gate that dropped."
      ),
    ],
    faqs: [
      {
        question: "Do you maintain homes in Wiregrass and Meadow Pointe?",
        answer:
          "Yes. Those neighborhoods, Seven Oaks, and the SR 54 corridor are regular Wesley Chapel stops for fixtures, doors, drywall, and small fence repairs.",
      },
      {
        question: "Is there a Wesley Chapel handyman office?",
        answer:
          "No. We drive from our only headquarters in Westchase, Tampa. That keeps reviews and the address on one listing.",
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
      "Need a Largo FL handyman for sticking doors, ceiling fans, and older fence repairs? Licensed and insured Handyman Pros FL crosses from Westchase into Pinellas — Largo is not a second branch.",
    paragraphs: [
      "Largo’s housing around Central Park, Ridgecrest, and Ulmerton Road is older than Wesley Chapel and closer to salt air than Brandon. Sliders swell, porch fans rust at the canopy, and wood fences cup. We bring exterior-rated hardware and weatherstrip, not a beach-office key.",
      "A typical Largo list is a door that will not latch, a fan swap at a fan-rated box, drywall where a leak was already fixed, and a chain-link or wood gate that sags. Condos and ranch houses both show up; we protect the unit and haul the packaging out.",
      `The drive is from ${hq} in Westchase, often paired with Seminole, Pinellas Park, or Clearwater. You still get one phone number and one licensed crew.`,
      `Call ${phone} for Largo. Open 24/7. Hablamos español. Licensed and insured.`,
    ],
    callouts: [
      fenceCallout(
        "Largo",
        "Ridgecrest and Ulmerton yards usually need a sagging gate or cupped boards repaired, not a new fence contract."
      ),
    ],
    faqs: [
      {
        question: "Do you serve Largo from Tampa?",
        answer:
          "Yes. Largo is a Pinellas service area. The only headquarters is in Westchase, Tampa, FL 33626.",
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
      "Searching for a Pinellas Park handyman for punch lists, doors, and gate repairs? Licensed and insured Handyman Pros FL serves this Pinellas city from our only Westchase headquarters.",
    paragraphs: [
      "Pinellas Park along Park Boulevard and 49th Street is compact lots, older block and frame houses, and shopfront-adjacent streets where a landlord needs a turnover done without a remodel. We handle the list that makes a house rentable or livable: doors, drywall, fans, and hardware.",
      "Gates and short fence runs here are often chain-link or aging wood between close neighbors. A fencing handyman repair resets the latch and replaces a few sections. We are not staking a new commercial yard.",
      "Historic-area cottages need slower finish work than a Gateway warehouse. We keep the scope residential and handyman-sized. Seminole and Largo are the next Pinellas stops on the same day when the route allows.",
      `Call ${phone}. Licensed and insured. Hablamos español. No Pinellas Park office — Westchase only.`,
    ],
    callouts: [
      fenceCallout(
        "Pinellas Park",
        "Park Boulevard lots usually need a chain-link gate pulled back into square or a few wood boards replaced."
      ),
    ],
    faqs: [
      {
        question: "Do you take Pinellas Park rental turnovers?",
        answer:
          "Yes, when the work is handyman scope: drywall, doors, fixtures, fans, and small fence or gate repairs. Full renovations are quoted separately.",
      },
      {
        question: "Where are you based if I book Pinellas Park?",
        answer: `We leave ${hq}, Apt 203, Tampa, FL 33626. Pinellas Park is a service area.`,
      },
      {
        question: "What should I send for an estimate?",
        answer: `Photos of the door, wall, or gate, plus the street. Call ${phone} if the photos are easier to describe live.`,
      },
    ],
  },
  {
    slug: "carrollwood",
    city: "Carrollwood",
    displayName: "Carrollwood, FL",
    county: "Hillsborough County",
    zipHint: "33618",
    neighborhoods: ["Carrollwood Village", "Northdale", "Original Carrollwood", "Dale Mabry"],
    intro:
      "Need Carrollwood home maintenance from a local handyman — ceiling fans, punch lists, and fence-gate fixes? Licensed and insured Handyman Pros FL is based in neighboring Westchase. Hablamos español.",
    paragraphs: [
      "Carrollwood Village, Original Carrollwood, and Northdale are inside our fastest Hillsborough radius after Westchase itself. Families book a fan that wobbles, a drywall scar from a move, and a Saturday list of blinds, shelves, and door hardware. The truck is already stocked because headquarters is minutes away at ZIP 33626.",
      "Ceiling fan installation is the Carrollwood request we hear most. We confirm the box is fan-rated, make the connections at that existing box, and balance the blades. If the brace will not hold a fan, we stop instead of hanging weight from drywall.",
      "Backyard fences in Northdale and along Dale Mabry need a board or a dragging gate more often than a new fence. We repair the section and keep the rest of the honey-do list moving. Citrus Park and Town 'N' Country are the adjacent service areas.",
      `Call ${phone} anytime. Licensed and insured. Hablamos español for reparaciones en casa. Carrollwood is a service area — our only address remains ${hq}, Apt 203, Tampa, FL 33626.`,
    ],
    callouts: [
      fenceCallout(
        "Carrollwood",
        "Northdale and Carrollwood Village gates drag after humidity; a few privacy boards usually go with that latch adjustment."
      ),
    ],
    faqs: [
      {
        question: "Are you based in Carrollwood?",
        answer:
          "No. Carrollwood is a service area next to our only headquarters in Westchase, Tampa, FL 33626. That is why same-day windows are realistic here.",
      },
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
    zipHint: "33617",
    neighborhoods: ["56th Street", "Busch Boulevard", "Temple Terrace Golf", "USF border"],
    intro:
      "Need Temple Terrace home repair — drywall, doors, and fixture installs — from a licensed local handyman? Handyman Pros FL serves 56th Street and the Busch corridor from our Westchase headquarters.",
    paragraphs: [
      "Temple Terrace sits between the Hillsborough River and the USF edge, with mid-century houses and later infill on the same block. Fasteners and wall types change house to house. We bring anchors that match block, wood studs, and the occasional plaster transition instead of one box of drywall screws for every wall.",
      "The booked work is drywall after a rental turnover, a door that sticks on 56th Street, blinds and shelves hung level, and a stair rail that has loosened. Busch Boulevard rentals need the punch list finished, not a redesign.",
      "Fence boards and gates show up on golf-course-adjacent lots and older side yards. We replace what failed. Seminole Heights and Carrollwood are the Tampa neighborhoods we often pair with a Temple Terrace stop.",
      `Call ${phone}. Licensed and insured. Open 24/7. Hablamos español. One Westchase office.`,
    ],
    callouts: [
      fenceCallout(
        "Temple Terrace",
        "Side-yard wood fences near 56th Street and the golf course typically need boards and a latch, not a new layout."
      ),
      {
        before: "56th Street drywall and doors stay on this page. Farther east, past Brandon, ",
        href: "/locations/plant-city",
        label: "Plant City",
        after:
          " is where we fix swollen downtown doors, Walden Lake fence boards, and acreage lines. Same license, same Westchase headquarters.",
      },
    ],
    faqs: [
      {
        question: "Do you cover Temple Terrace near USF?",
        answer:
          "Yes. The 56th Street and Busch Boulevard corridors, including homes near the USF border, are on our east Tampa route from Westchase.",
      },
      {
        question: "Can you patch drywall in a Temple Terrace rental?",
        answer:
          "Yes. We patch, texture-blend, and leave the wall ready for paint. We flag moisture before we cover a stain.",
      },
      {
        question: "Is Temple Terrace its own Handyman Pros location?",
        answer: `No. The only location is ${hq}, Apt 203, Tampa, FL 33626.`,
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
      "Need a Land O' Lakes handyman for gutter sections, fence repairs, and house punch lists? Licensed and insured Handyman Pros FL drives into Pasco from Westchase — Land O' Lakes is not a branch.",
    paragraphs: [
      "Land O' Lakes Boulevard, Connerton, and Wilderness Lake are larger lots than Carrollwood and wetter gutters than a South Tampa bungalow. Oak debris fills a run, a downspout dumps against the slab, and a fence panel on the side yard loosens after wind.",
      "Gutter visits here are a flush, a reseated hanger, or a short damaged section — not a whole-home metal package and not a new roof. Fence visits are the failed panel or gate. Indoor work is the fan, the drywall patch, and the door that swelled after the last rain.",
      "We share this Pasco day with Lutz to the south and Wesley Chapel to the east. Spring Hill is farther north and gets its own scheduling window. The truck still starts in Westchase.",
      `Call ${phone} for Land O' Lakes. Licensed and insured. Hablamos español. Single Tampa headquarters.`,
    ],
    callouts: [
      fenceCallout(
        "Land O' Lakes",
        "Connerton and Wilderness Lake fences fail a panel at a time; we repair that run when the posts are still sound."
      ),
    ],
    faqs: [
      {
        question: "Do you clean and repair gutters in Land O' Lakes?",
        answer:
          "Yes. We flush downspouts, reseat loose sections, and replace a damaged length when the fascia is sound. Steep roofs and full-house replacements are quoted separately.",
      },
      {
        question: "How far is Land O' Lakes from your shop?",
        answer:
          "We do not have a Land O' Lakes shop. The drive is north from Westchase into Pasco, usually same-week.",
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
      "Need a Seminole FL handyman — the Pinellas city, not Seminole Heights in Tampa — for fans, doors, and fence repairs? Licensed and insured Handyman Pros FL dispatches from Westchase.",
    paragraphs: [
      "Seminole, Florida sits in mid-Pinellas along Seminole Boulevard and Lake Seminole. It is a different place from Seminole Heights in Tampa. We keep those pages separate so a lake-house fan install is not mixed up with a Heights bungalow door.",
      "The Seminole list is humidity work: a slider that sticks, a fan at an existing box near the lake, drywall after a repaired leak, and a wood or chain-link gate that dropped. Oakhurst-border and Bay Pines-area houses get the same crew that covers Largo and Pinellas Park.",
      "Salt air is harder on exterior hardware here than in Carrollwood. We use exterior-rated fasteners and call out metal that is already too far gone to reuse. There is no Seminole storefront.",
      `Call ${phone}. Licensed and insured. Hablamos español. The only address is Westchase, Tampa.`,
    ],
    callouts: [
      fenceCallout(
        "Seminole",
        "Lake Seminole and Seminole Boulevard yards usually need a gate pulled square or a short wood section replaced."
      ),
    ],
    faqs: [
      {
        question: "Is this page for Seminole Heights in Tampa?",
        answer:
          "No. This page is Seminole in Pinellas County. Seminole Heights is covered on our Tampa handyman page.",
      },
      {
        question: "Do you have an office in Seminole?",
        answer: `No. We drive from ${hq}, Apt 203, Tampa, FL 33626 in Westchase.`,
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
      "Looking for a Spring Hill FL handyman for fence sections, doors, and home repairs? Licensed and insured Handyman Pros FL serves Hernando County from our only Westchase headquarters — not a Spring Hill branch.",
    paragraphs: [
      "Spring Hill is the longest regular drive on this expansion: north into Hernando County along Spring Hill Drive and County Line Road. We schedule it on purpose instead of pretending it is a Westchase same-hour hop. Deltona and the Weeki Wachee side are still the same company, the same phone, and the same Westchase address.",
      "The jobs that justify the drive are concrete: a fence panel down after wind, a door that no longer latches, a gutter section dumping water at the slab, and a punch list that has waited all season. We load for that list. A single picture hook is an easier fit when we are already in Hernando.",
      "Fence repair here is often a longer wood run than a Carrollwood side yard, but it is still a handyman repair of the damaged section. We are not opening a fencing-contractor yard in Spring Hill. New Port Richey and Land O' Lakes are the Pasco stops we pair when the map allows.",
      `Call ${phone} and ask for the next Hernando window. Licensed and insured. Hablamos español. One headquarters in Westchase.`,
    ],
    callouts: [
      fenceCallout(
        "Spring Hill",
        "County Line and Spring Hill Drive fences often lose a panel in wind; we repair the section when we are already booked into Hernando."
      ),
    ],
    faqs: [
      {
        question: "Do you really drive to Spring Hill?",
        answer:
          "Yes, as a scheduled Hernando County service area. It is farther than Carrollwood or Lutz, so we confirm the window instead of promising same-hour arrival.",
      },
      {
        question: "Is there a Spring Hill office?",
        answer:
          "No. Handyman Pros FL has one location in Westchase, Tampa, FL 33626. Spring Hill is a service area we drive to.",
      },
      {
        question: "What should I book in Spring Hill?",
        answer: `Fence-section repairs, doors, gutter sections, fans, and punch lists. Call ${phone} with photos so the drive is loaded correctly.`,
      },
    ],
  },
];
