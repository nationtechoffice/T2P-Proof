export interface LocationSilo {
  slug: string;
  city: string;
  displayName: string;
  path: string;
  eyebrow: string;
  h1: string;
  intro: string;
  keywords: string[];
  metaDescription: string;
  mapQuery: string;
  mapTitle: string;
  services: string[];
  paragraphs: string[];
  faqs?: { question: string; answer: string }[];
  relatedPaths?: { href: string; label: string }[];
}

export const locationSilos: LocationSilo[] = [
  {
    slug: "temple-terrace",
    city: "Temple Terrace",
    displayName: "Temple Terrace, FL",
    path: "/handyman-temple-terrace-fl",
    eyebrow: "Temple Terrace · Hillsborough County",
    h1: "Temple Terrace Home Repair & Handyman Near Me",
    intro:
      "Handyman Pros FL is the local contractor Temple Terrace homeowners call for dependable Temple Terrace home repair, punch-list fixes, and same-day help when you search handyman near me.",
    keywords: ["Temple Terrace home repair", "handyman near me", "local contractor", "handyman Temple Terrace FL"],
    metaDescription:
      "Need Temple Terrace home repair? Handyman Pros FL is a local contractor for handyman near me jobs — drywall, fixtures, doors, and more. Call (656) 205-3185.",
    mapQuery: "Temple Terrace, FL",
    mapTitle: "Google Map of Temple Terrace, Florida",
    services: [
      "Drywall patching & texture touch-ups",
      "Door, trim, and hardware repairs",
      "Fixture and shelf installation",
      "TV mounting & furniture assembly",
      "Fence board and gate fixes",
      "Caulking, weatherstripping, and punch lists",
    ],
    paragraphs: [
      "Temple Terrace home repair requests rarely wait for a perfect weekend. Between university-area rentals, established family homes, and busy schedules along Busch Boulevard corridors, residents need a local contractor who answers the phone and arrives prepared. Handyman Pros FL serves Temple Terrace from our Tampa / Westchase base with a fully stocked truck, clear estimates, and licensed, insured technicians.",
      "When neighbors search handyman near me, they usually want more than a vague callback. They want someone who can assess a sticking door, patch drywall after a remodel, hang blinds level, and tighten loose stair rails in one productive visit. Our team treats Temple Terrace properties with the same care we give Westchase and Carrollwood homes — shoe covers indoors, dust control during sanding, and a walkthrough before we leave.",
      "As your local contractor for everyday improvements, we also help with rental turnovers and pre-listing punch lists. Fresh caulk in bathrooms, replaced outlet covers, adjusted cabinet hinges, and securely mounted TVs make a measurable difference for buyers and tenants. If a job needs permitting or a specialist trade, we say so upfront rather than forcing a poor DIY-style fix.",
      "Temple Terrace’s mix of mid-century homes and newer builds means fasteners, wall types, and outdoor exposure vary block to block. We bring the right anchors, blades, and finishes so repairs hold up in Florida humidity. Call Handyman Pros FL at (656) 205-3185 anytime — we are open 24/7 for Temple Terrace home repair estimates and scheduling.",
      "Whether you found us searching handyman near me or were referred by a neighbor, you get transparent pricing and local accountability. From fixture swaps to fence patches, Handyman Pros FL is ready to keep your Temple Terrace property working smoothly.",
    ],
    relatedPaths: [
      { href: "/handyman-lutz-fl", label: "Handyman Lutz FL" },
      { href: "/services/drywall-repair-tampa", label: "Drywall Repair Tampa" },
    ],
  },
  {
    slug: "wesley-chapel",
    city: "Wesley Chapel",
    displayName: "Wesley Chapel, FL",
    path: "/handyman-wesley-chapel-fl",
    eyebrow: "Wesley Chapel · Pasco County",
    h1: "Wesley Chapel Handyman Services & Home Maintenance",
    intro:
      "Count on Handyman Pros FL for Wesley Chapel handyman services — proactive home maintenance, fixture setup, and clean repairs for growing Pasco County households.",
    keywords: ["Wesley Chapel handyman services", "home maintenance", "fixture setup", "handyman Wesley Chapel FL"],
    metaDescription:
      "Wesley Chapel handyman services for home maintenance and fixture setup. Licensed Handyman Pros FL — open 24/7. Call (656) 205-3185 for a free estimate.",
    mapQuery: "Wesley Chapel, FL",
    mapTitle: "Google Map of Wesley Chapel, Florida",
    services: [
      "Scheduled home maintenance visits",
      "Fixture setup (lights, faucets, hardware)",
      "Ceiling fan installation & balancing",
      "Garage storage and shelving installs",
      "Screen, door, and weatherstrip repairs",
      "Drywall touch-ups after kids or moves",
    ],
    paragraphs: [
      "Wesley Chapel handyman services should match the pace of this fast-growing community. New construction punch lists, HOA expectations, and Florida storm seasons create a constant stream of small-to-medium jobs. Handyman Pros FL provides practical home maintenance so families in Wiregrass, Meadow Pointe, and nearby neighborhoods stay ahead of wear instead of reacting to every surprise.",
      "Fixture setup is one of our most booked Wesley Chapel requests. Online deliveries arrive boxed — vanity lights, towel bars, curtain rods, smart thermostats mounts, and faucet upgrades — and you want them installed level, sealed, and ready to use. We bring ladders, voltage testers, and finishing supplies so fixture setup does not turn into an all-day DIY project.",
      "Ongoing home maintenance visits help protect larger investments. We tighten loose railings, reseal wet areas, adjust doors swollen by humidity, and catch minor fence or screen issues before they spread. Because we already serve Tampa Bay daily, routing into Wesley Chapel is straightforward for same-week and often same-day appointments.",
      "Homeowners choosing Wesley Chapel handyman services from Handyman Pros FL get licensed, insured technicians and clear communication. We quote before we start, protect floors and furnishings, and finish with a quick review of what was completed. Call (656) 205-3185 anytime — open 24/7 — to book home maintenance or fixture setup across Wesley Chapel and nearby Pasco communities.",
      "From first-year builder lists to long-term seasonal care, our Wesley Chapel handyman services keep your home comfortable, safe, and looking finished.",
    ],
    relatedPaths: [
      { href: "/handyman-lutz-fl", label: "Handyman Lutz FL" },
      { href: "/handyman-carrollwood-fl", label: "Handyman Carrollwood FL" },
    ],
  },
  {
    slug: "riverview",
    city: "Riverview",
    displayName: "Riverview, FL",
    path: "/handyman-riverview-fl",
    eyebrow: "Riverview · South Hillsborough",
    h1: "Riverview FL Home Improvements by Local Handymen",
    intro:
      "Handyman Pros FL delivers Riverview FL home improvements — from drywall repair and fence patch work to everyday fixes that keep South County homes looking sharp.",
    keywords: ["Riverview FL home improvements", "drywall repair", "fence patch", "handyman Riverview FL"],
    metaDescription:
      "Riverview FL home improvements including drywall repair and fence patch services. Call Handyman Pros FL at (656) 205-3185 for a free estimate.",
    mapQuery: "Riverview, FL",
    mapTitle: "Google Map of Riverview, Florida",
    services: [
      "Drywall repair & hole patching",
      "Fence patch and gate adjustments",
      "Interior trim and baseboard fixes",
      "TV mounting and cable concealment help",
      "Exterior hardware and shutter repairs",
      "Move-in / move-out punch lists",
    ],
    paragraphs: [
      "Riverview FL home improvements often start with the little things that affect daily comfort — a hole behind a door stop, a leaning fence section after summer storms, or texture that never quite matched after a remodel. Handyman Pros FL focuses on those high-impact repairs with the care of a neighborhood crew and the reliability of a licensed Tampa Bay company.",
      "Drywall repair is a Riverview staple. Kids, furniture moves, and television remounts leave scars that paint alone cannot hide. We cut clean patches, install backing when needed, tape and feather compound, and prep surfaces for paint so the wall looks continuous again. Larger water-damage sections are assessed carefully so you are not sealing over a moisture problem.",
      "Fence patch jobs protect privacy and curb appeal without requiring a full replacement. We replace broken boards, resecure rails, reset loose posts when feasible, and straighten gates that drag. Pair fence patch work with latch upgrades or staining prep when you want a more complete outdoor refresh.",
      "Families across Riverview appreciate that we can combine indoor and outdoor tasks in one visit when schedules allow — drywall repair in the morning, fence patch in the afternoon. Call (656) 205-3185 for Riverview FL home improvements anytime; Handyman Pros FL is open 24/7 for estimates and urgent scheduling.",
      "Whether you are refreshing a rental or preparing a primary home for guests, our Riverview team brings tools, materials knowledge, and respectful job-site habits to every stop.",
    ],
    relatedPaths: [
      { href: "/handyman-valrico-fl", label: "Handyman Valrico FL" },
      { href: "/services/drywall-repair-tampa", label: "Drywall Repair Tampa" },
    ],
  },
  {
    slug: "valrico",
    city: "Valrico",
    displayName: "Valrico, FL",
    path: "/handyman-valrico-fl",
    eyebrow: "Valrico · Eastern Hillsborough",
    h1: "Valrico Handyman Near Me for Assembly & Fan Install",
    intro:
      "Searching for a Valrico handyman near me? Handyman Pros FL handles furniture assembly, ceiling fan install projects, and practical home fixes across eastern Hillsborough.",
    keywords: ["Valrico handyman near me", "furniture assembly", "ceiling fan install", "handyman Valrico FL"],
    metaDescription:
      "Valrico handyman near me for furniture assembly and ceiling fan install. Licensed Handyman Pros FL — call (656) 205-3185 anytime.",
    mapQuery: "Valrico, FL",
    mapTitle: "Google Map of Valrico, Florida",
    services: [
      "Furniture assembly (beds, desks, shelving)",
      "Ceiling fan install & balancing",
      "Picture, mirror, and TV mounting",
      "Closet systems and garage hooks",
      "Door closer and lock adjustments",
      "General honey-do list completion",
    ],
    paragraphs: [
      "A Valrico handyman near me search should connect you with someone who already works eastern Hillsborough regularly — not a random out-of-area lead. Handyman Pros FL routes through Valrico, Brandon, and Riverview often, which means faster arrival windows and familiarity with local home styles, garages, and lanai layouts.",
      "Furniture assembly saves hours of frustration. Flat-pack beds, office desks, outdoor sets, and kids’ storage systems are assembled with the right tools and hardware checks so pieces sit square and stable. We recycle packaging on request and place finished items exactly where you want them.",
      "Ceiling fan install work keeps Valrico rooms cooler through long Florida summers. We verify box support, make safe electrical connections, mount canopies cleanly, and balance blades to reduce wobble. Replacing an outdated fixture or adding a fan where a light already exists are both common requests we handle the same day when schedules allow.",
      "Beyond assembly and fans, homeowners book us for mounting projects, closet upgrades, and small repairs that never make it onto a remodeler’s calendar. Call (656) 205-3185 — your Valrico handyman near me option that is licensed, insured, and open 24/7 for free estimates.",
      "From a single ceiling fan install to a weekend furniture assembly marathon, Handyman Pros FL helps Valrico households finish the list and enjoy the home.",
    ],
    relatedPaths: [
      { href: "/handyman-riverview-fl", label: "Handyman Riverview FL" },
      { href: "/handyman-plant-city-fl", label: "Handyman Plant City FL" },
    ],
  },
  {
    slug: "seffner",
    city: "Seffner",
    displayName: "Seffner, FL",
    path: "/handyman-seffner-fl",
    eyebrow: "Seffner · Hillsborough County",
    h1: "Seffner FL Property Repair & Local Handyman Help",
    intro:
      "Handyman Pros FL provides Seffner FL property repair — including gutter cleaning coordination support, exterior fixes, and trusted local handyman service for residential owners.",
    keywords: ["Seffner FL property repair", "gutter cleaning", "local handyman", "handyman Seffner FL"],
    metaDescription:
      "Seffner FL property repair and local handyman service for gutters, exterior fixes, and indoor punch lists. Call Handyman Pros FL at (656) 205-3185.",
    mapQuery: "Seffner, FL",
    mapTitle: "Google Map of Seffner, Florida",
    services: [
      "Gutter cleaning & minor gutter reseating",
      "Exterior trim and fascia touch repairs",
      "Door, screen, and latch fixes",
      "Drywall and caulk maintenance",
      "Shelf, hook, and organizer installs",
      "Storm-season outdoor punch lists",
    ],
    paragraphs: [
      "Seffner FL property repair needs often blend indoor comfort with outdoor weather readiness. Oak debris, seasonal storms, and older outbuildings create maintenance cycles that busy owners postpone until leaks or pests appear. Handyman Pros FL acts as your local handyman for the practical repairs that protect the home between larger contractor projects.",
      "Gutter cleaning and related exterior care keep water moving away from fascia and foundations. We clear debris, check for loose spikes or brackets, and flag sections that need replacement so you are not surprised during the next downpour. Pair gutter cleaning with screen repairs or downspout adjustments when you want a more complete exterior pass.",
      "Inside Seffner homes, our local handyman team handles the everyday list: sticky doors, loose towel bars, drywall dents, and hardware refreshes. Property managers and landlords also call us for turnover work that must look rental-ready without a full renovation budget.",
      "Choosing Handyman Pros FL for Seffner FL property repair means clear communication and Tampa Bay accountability. We are based nearby in Westchase / Tampa, licensed and insured, and available at (656) 205-3185 around the clock for estimates. Tell us about gutter cleaning, outdoor repairs, or indoor fixes — we will prioritize what protects the structure first.",
      "From acreage edges to neighborhood lots, Seffner property owners deserve a local handyman who shows up prepared and finishes clean.",
    ],
    relatedPaths: [
      { href: "/handyman-plant-city-fl", label: "Handyman Plant City FL" },
      { href: "/handyman-valrico-fl", label: "Handyman Valrico FL" },
    ],
  },
  {
    slug: "plant-city",
    city: "Plant City",
    displayName: "Plant City, FL",
    path: "/handyman-plant-city-fl",
    eyebrow: "Plant City · Eastern Hillsborough",
    h1: "Plant City Home Handyman for Doors & Wood Repair",
    intro:
      "Hire Handyman Pros FL as your Plant City home handyman for door installation support, rotten wood repair, and durable fixes built for Florida weather.",
    keywords: ["Plant City home handyman", "door installation", "rotten wood repair", "handyman Plant City FL"],
    metaDescription:
      "Plant City home handyman for door installation and rotten wood repair. Call Handyman Pros FL at (656) 205-3185 for a free estimate.",
    mapQuery: "Plant City, FL",
    mapTitle: "Google Map of Plant City, Florida",
    services: [
      "Door installation & alignment",
      "Rotten wood repair on trim and sills",
      "Exterior caulking and sealing",
      "Fence board replacement",
      "Interior hardware refreshes",
      "Porch and entry touch repairs",
    ],
    paragraphs: [
      "A Plant City home handyman needs to understand both historic downtown charm and newer suburban builds east of Tampa. Humidity, sun, and storm exposure age wood trim, door sills, and outdoor structures faster than many owners expect. Handyman Pros FL brings practical carpentry and repair skills to keep entries tight and exteriors looking maintained.",
      "Door installation and replacement projects improve security, energy efficiency, and curb appeal. We hang prehung units when openings are ready, adjust existing doors that rub or latch poorly, and upgrade hinges, sweeps, and hardware for smoother daily use. Proper shimming and sealing matter in Florida’s climate — shortcuts show up as drafts and swollen edges within a season.",
      "Rotten wood repair is another frequent Plant City request. Soft sills, fascia edges, and decorative trim can be cut back, treated, and patched or replaced so moisture does not keep traveling. We focus on sound repairs you can paint and maintain rather than cosmetic cover-ups that fail after the next storm.",
      "Call (656) 205-3185 to schedule your Plant City home handyman visit. Handyman Pros FL is open 24/7 for estimates covering door installation, rotten wood repair, and related punch-list work across eastern Hillsborough County.",
      "From strawberry-country homesteads to subdivision addresses, we treat every Plant City job with clean workmanship and clear pricing.",
    ],
    relatedPaths: [
      { href: "/handyman-seffner-fl", label: "Handyman Seffner FL" },
      { href: "/handyman-valrico-fl", label: "Handyman Valrico FL" },
    ],
  },
  {
    slug: "town-n-country",
    city: "Town 'n' Country",
    displayName: "Town 'n' Country, FL",
    path: "/handyman-town-n-country-fl",
    eyebrow: "Town 'n' Country · West Tampa",
    h1: "Town n Country Handyman for Appliance Setup & Repairs",
    intro:
      "Looking for a Town n Country handyman? Handyman Pros FL handles appliance setup support, everyday home repairs, and fixture work across this West Tampa community.",
    keywords: ["Town n Country handyman", "appliance setup", "home repairs", "handyman Town n Country FL"],
    metaDescription:
      "Town n Country handyman for appliance setup and home repairs. Handyman Pros FL — call (656) 205-3185 for fast local help.",
    mapQuery: "Town 'n' Country, Tampa, FL",
    mapTitle: "Google Map of Town n Country, Florida",
    services: [
      "Appliance setup (leveling, connections where appropriate)",
      "General home repairs indoors and out",
      "Drywall, doors, and trim fixes",
      "TV mounting and shelving",
      "Bathroom hardware refreshes",
      "Fence and screen minor repairs",
    ],
    paragraphs: [
      "A Town n Country handyman should know the neighborhoods west of the Veterans Expressway as well as the shortcuts between Tampa and Westchase. Handyman Pros FL is based nearby, so home repairs and appliance setup appointments are easy to schedule without long wait windows. We help busy households finish the tasks that pile up after moves, storms, or online deliveries.",
      "Appliance setup often means more than sliding a box into place. We level washers and ranges, verify fit, install required brackets or anti-tip devices when provided, and help with water-line or cord routing within handyman scope. For gas or complex electrical work beyond our scope, we tell you clearly and keep the rest of your punch list moving.",
      "Everyday home repairs remain our core: hanging doors that close properly, patching walls, securing loose rails, and refreshing hardware that makes bathrooms and kitchens feel cared for. Town n Country’s mix of ranch homes and updated interiors benefits from a crew that brings both older-home patience and modern mounting know-how.",
      "Call (656) 205-3185 anytime for Town n Country handyman service. Open 24/7, Handyman Pros FL offers free estimates for appliance setup, home repairs, and multi-stop honey-do days across western Tampa.",
      "Neighbors choose us because we communicate, protect the home, and finish clean — the basics every Town n Country address deserves.",
    ],
    relatedPaths: [
      { href: "/handyman-westchase-fl", label: "Handyman Westchase FL" },
      { href: "/handyman-oldsmar-fl", label: "Handyman Oldsmar FL" },
    ],
  },
  {
    slug: "oldsmar",
    city: "Oldsmar",
    displayName: "Oldsmar, FL",
    path: "/handyman-oldsmar-fl",
    eyebrow: "Oldsmar · Pinellas / Tampa Bay",
    h1: "Oldsmar FL Handyman Services for Mounts & Decks",
    intro:
      "Handyman Pros FL offers Oldsmar FL handyman services including bracket mounting, deck maintenance help, and reliable indoor repairs for Tampa Bay homeowners.",
    keywords: ["Oldsmar FL handyman services", "bracket mounting", "deck maintenance", "handyman Oldsmar FL"],
    metaDescription:
      "Oldsmar FL handyman services for bracket mounting and deck maintenance. Call Handyman Pros FL at (656) 205-3185 for a free estimate.",
    mapQuery: "Oldsmar, FL",
    mapTitle: "Google Map of Oldsmar, Florida",
    services: [
      "Bracket mounting for TVs, shelves, and organizers",
      "Deck maintenance (boards, rails, hardware)",
      "Door and screen repairs",
      "Fixture installation",
      "Drywall touch-ups",
      "Outdoor furniture assembly",
    ],
    paragraphs: [
      "Oldsmar FL handyman services bridge Pinellas convenience with Hillsborough proximity — and Handyman Pros FL covers both sides of the bay. Residents want crisp bracket mounting indoors and dependable deck maintenance outdoors without juggling multiple specialists for small scopes of work.",
      "Bracket mounting projects range from TV walls and soundbars to garage track systems and pantry organizers. We locate studs or use appropriate anchors, keep lines level, and conceal cords when the layout allows. Clean mounting work is one of the fastest ways to make a room feel finished.",
      "Deck maintenance keeps outdoor living spaces safe. We tighten loose rails, replace individual boards when feasible, secure popped fasteners, and advise on sealing timelines suited to Florida sun and rain. If structural issues exceed handyman scope, we document what we see so you can plan the right next step.",
      "Schedule Oldsmar FL handyman services at (656) 205-3185. We are open 24/7 for estimates covering bracket mounting, deck maintenance, and mixed indoor repair lists across Oldsmar and nearby coastal communities.",
      "From waterfront-adjacent homes to neighborhood cul-de-sacs, Handyman Pros FL brings Tampa Bay reliability to every Oldsmar visit.",
    ],
    relatedPaths: [
      { href: "/handyman-westchase-fl", label: "Handyman Westchase FL" },
      { href: "/handyman-town-n-country-fl", label: "Handyman Town n Country FL" },
    ],
  },
  {
    slug: "lutz",
    city: "Lutz",
    displayName: "Lutz, FL",
    path: "/handyman-lutz-fl",
    eyebrow: "Lutz · ZIP 33549 & nearby",
    h1: "Lutz Home Repair Expert & Local Handyman 33549",
    intro:
      "Need a Lutz home repair expert? Handyman Pros FL is the local handyman 33549 residents trust for tile patch work, indoor fixes, and careful outdoor repairs.",
    keywords: ["Lutz home repair expert", "tile patch", "local handyman 33549", "handyman Lutz FL"],
    metaDescription:
      "Lutz home repair expert and local handyman 33549 for tile patch and general repairs. Call Handyman Pros FL at (656) 205-3185.",
    mapQuery: "Lutz, FL 33549",
    mapTitle: "Google Map of Lutz, Florida 33549",
    services: [
      "Tile patch and regrout touch support",
      "Drywall and trim repairs",
      "Ceiling fan and fixture installs",
      "Fence and gate adjustments",
      "Furniture assembly",
      "General Lutz home maintenance",
    ],
    paragraphs: [
      "A Lutz home repair expert should understand larger lots, lake-adjacent humidity, and the mix of custom and production homes around ZIP 33549. Handyman Pros FL serves Lutz as a true local handyman 33549 option — close enough for responsive scheduling, skilled enough for clean finish work that lasts.",
      "Tile patch requests often follow a cracked floor tile, a chipped shower surround, or a remodel that left an unfinished edge. We assess substrate condition, match size and layout when materials are available, and complete careful cuts so the repair blends rather than shouts. For specialty porcelain or unavailable discontinued tile, we discuss realistic options before starting.",
      "Beyond tile patch projects, Lutz homeowners book us for drywall, fans, doors, and outdoor punch lists. Acreage properties may need extra travel time between structures; we plan visits so barn offices, casitas, or detached garages can be addressed efficiently when that is part of your scope.",
      "Call (656) 205-3185 to reach your local handyman 33549 team anytime. Handyman Pros FL is open 24/7 for Lutz home repair expert estimates, including multi-trade honey-do days that combine indoor and outdoor tasks.",
      "Whether you are near Dale Mabry, Van Dyke, or further into Lutz’s residential pockets, we show up prepared and leave the job site tidy.",
    ],
    relatedPaths: [
      { href: "/handyman-wesley-chapel-fl", label: "Handyman Wesley Chapel FL" },
      { href: "/handyman-carrollwood-fl", label: "Handyman Carrollwood FL" },
    ],
  },
  {
    slug: "south-tampa",
    city: "South Tampa",
    displayName: "South Tampa, FL",
    path: "/handyman-south-tampa-fl",
    eyebrow: "South Tampa · Premium neighborhoods",
    h1: "Professional Handyman Services in South Tampa",
    intro:
      "Handyman Pros FL provides professional handyman services in South Tampa — discreet scheduling, careful finishes, and pro TV wall mounting for Hyde Park, Beach Park, and Palma Ceia homes.",
    keywords: ["South Tampa handyman", "premium home care", "TV wall mounting", "handyman South Tampa FL", "Professional Handyman Services in South Tampa"],
    metaDescription:
      "Professional handyman services in South Tampa for premium home care and TV wall mounting. Licensed Handyman Pros FL — call (656) 205-3185 for a free estimate.",
    mapQuery: "South Tampa, FL",
    mapTitle: "Google Map of South Tampa, Florida",
    services: [
      "TV wall mounting with clean cable planning",
      "Premium home care punch lists",
      "Fixture and hardware upgrades",
      "Drywall texture blending",
      "Closet and pantry organization installs",
      "Door, trim, and paint-ready repairs",
    ],
    paragraphs: [
      "Professional handyman services in South Tampa should respect both the architecture and the lifestyle of neighborhoods from Hyde Park to Beach Park, Palma Ceia, and Bayshore Boulevard corridors. Handyman Pros FL delivers premium home care: punctual arrivals, protective coverings, and finish details that match higher-end interiors rather than “good enough” patchwork. Homeowners near Davis Islands approaches and SoHo dining streets often need discreet visits that fit around work-from-home schedules and weekend entertaining.",
      "TV wall mounting is one of our signature South Tampa services. We confirm wall construction, use proper lag hardware into studs or rated anchors, level multi-display setups when needed, and plan cable paths so living rooms stay polished. Soundbar brackets and component shelves can be included in the same visit — especially helpful in open-concept condos and renovated bungalows common south of Kennedy Boulevard.",
      "South Tampa’s mix of historic bungalows and updated estates creates recurring housing issues: humidity-swollen doors, hairline drywall cracks after settling, aging outdoor hardware near the bay, and closet systems that never quite fit after a remodel. Premium home care also means coordinating small repairs before events, photography, or seasonal returns from travel. We handle fixture swaps, closet upgrades, discreet drywall blending, and hardware refreshes that elevate how a room feels without a full remodel timeline.",
      "Schedule your South Tampa handyman visit at (656) 205-3185. Open 24/7, Handyman Pros FL offers free estimates for TV wall mounting and premium home care lists across South Tampa and nearby central bay addresses. Discreet, licensed, and detail-oriented — that is how we approach every South Tampa property.",
      "Whether you live steps from Bayshore Boulevard or deeper into quiet cul-de-sacs west of Dale Mabry, our crew arrives stocked, quotes clearly, and leaves the job site tidy so your home is ready for guests the same day.",
    ],
    relatedPaths: [
      { href: "/handyman-clearwater-fl", label: "Handyman Clearwater FL" },
      { href: "/handyman-dunedin-fl", label: "Handyman Dunedin FL" },
      { href: "/services/drywall-repair-tampa", label: "Drywall Repair Tampa" },
    ],
  },
  {
    slug: "clearwater",
    city: "Clearwater",
    displayName: "Clearwater, FL",
    path: "/handyman-clearwater-fl",
    eyebrow: "Clearwater · Pinellas County",
    h1: "Professional Handyman Services in Clearwater",
    intro:
      "Count on Handyman Pros FL for professional handyman services in Clearwater — coastal-ready repairs, TV mounting, and punch-list fixes from Countryside to Clearwater Beach-adjacent neighborhoods.",
    keywords: ["Clearwater handyman", "handyman Clearwater FL", "Professional Handyman Services in Clearwater", "Pinellas handyman"],
    metaDescription:
      "Professional handyman services in Clearwater, FL. Drywall, TV mounting, screens, and coastal home repairs. Call Handyman Pros FL at (656) 205-3185 — open 24/7.",
    mapQuery: "Clearwater, FL",
    mapTitle: "Google Map of Clearwater, Florida",
    services: [
      "TV mounting & cable concealment",
      "Drywall patch & texture blend",
      "Patio screen & door repairs",
      "Fixture and hardware installs",
      "Furniture assembly for rentals",
      "Fence board and gate fixes",
    ],
    paragraphs: [
      "Professional handyman services in Clearwater have to account for salt air, afternoon storms, and the mix of vacation rentals and year-round homes near Clearwater Beach, Pier 60, and downtown Clearwater’s Coachman Park corridor. Handyman Pros FL routes into Pinellas County from our Tampa / Westchase base with fasteners, sealants, and outdoor hardware chosen for coastal humidity — not interior-only shortcuts that fail after one storm season.",
      "Common Clearwater housing issues include swollen entry doors after rainy weeks, corroded exterior hinges and latches, patio screen tears from wind, and drywall patches after furniture moves between guest stays. Condos and townhomes near the Causeway and Countryside Mall area often need careful TV mounting on shared walls, with stud finding and rated anchors so neighbors below never hear a loose bracket. We also assemble flat-pack furniture and install towel bars, curtain rods, and shelving that keep short-term rentals guest-ready.",
      "Homeowners near Clearwater Marine Aquarium, Coachman Park, and the beaches want a crew that shows up on time, protects floors, and finishes cleanly before evening check-ins. We quote before we start, combine indoor and outdoor tasks when schedules allow, and tell you upfront if a job needs a licensed specialist beyond handyman scope.",
      "Call (656) 205-3185 anytime for Clearwater estimates — Handyman Pros FL is open 24/7. From a single drywall patch to a full honey-do day across Clearwater and nearby Largo or Dunedin, you get licensed, insured technicians and clear Tampa Bay accountability.",
      "Whether your property sits blocks from the sand or inland toward Countryside, professional handyman services in Clearwater should feel local, responsive, and built for Florida’s coast — that is the standard we bring to every visit.",
    ],
    relatedPaths: [
      { href: "/handyman-dunedin-fl", label: "Handyman Dunedin FL" },
      { href: "/handyman-oldsmar-fl", label: "Handyman Oldsmar FL" },
      { href: "/handyman-south-tampa-fl", label: "Handyman South Tampa FL" },
    ],
  },
  {
    slug: "dunedin",
    city: "Dunedin",
    displayName: "Dunedin, FL",
    path: "/handyman-dunedin-fl",
    eyebrow: "Dunedin · Pinellas County",
    h1: "Professional Handyman Services in Dunedin",
    intro:
      "Handyman Pros FL delivers professional handyman services in Dunedin — careful repairs for bungalows near Main Street, the Pinellas Trail, and Causeway-adjacent homes.",
    keywords: ["Dunedin handyman", "handyman Dunedin FL", "Professional Handyman Services in Dunedin", "Pinellas Trail handyman"],
    metaDescription:
      "Professional handyman services in Dunedin, FL. Drywall, doors, TV mounting, and bungalow-friendly repairs. Call Handyman Pros FL at (656) 205-3185.",
    mapQuery: "Dunedin, FL",
    mapTitle: "Google Map of Dunedin, Florida",
    services: [
      "Drywall & trim repairs for bungalows",
      "Humidity-swollen door adjustments",
      "TV mounting & shelving installs",
      "Furniture assembly",
      "Screen, fence, and outdoor hardware fixes",
      "Fixture installation & caulking",
    ],
    paragraphs: [
      "Professional handyman services in Dunedin should feel as neighborhood-focused as a stroll down Main Street. Handyman Pros FL serves homeowners near Downtown Dunedin shops, the Pinellas Trail trailheads, Edgewater Drive, and residential streets stretching toward the Dunedin Causeway. Many properties are charming bungalows or updated ranch homes where careful anchoring, matching trim, and moisture-aware sealing matter more than rushing through a punch list.",
      "Common Dunedin housing issues include doors that stick after humid weeks, hairline cracks in drywall after Florida settling, patio screen wear from bay breezes, and outdoor hardware that needs stainless or coated replacements. We also mount TVs for living rooms overlooking quiet courtyards, assemble furniture after downtown loft moves, and refresh towel bars and curtain rods without scarring older plaster or thin drywall.",
      "Families and snowbirds near Weaver Park, downtown festivals, and Causeway-adjacent streets often want same-week help that respects landscaping and HOA expectations. Our technicians arrive with a stocked truck, shoe covers for indoor work, and clear pricing before tools come out. If a repair needs permitting or a specialty trade, we say so honestly instead of forcing a temporary fix.",
      "Schedule professional handyman services in Dunedin at (656) 205-3185 — open 24/7 for free estimates. Handyman Pros FL already covers Clearwater, Oldsmar, and greater Tampa Bay, so routing into Dunedin is straightforward for mixed indoor and outdoor jobs.",
      "From a single sticky door near Main Street to a full pre-listing punch list by the Pinellas Trail, you get licensed, insured workmanship and the same accountability Tampa neighbors already trust.",
    ],
    relatedPaths: [
      { href: "/handyman-clearwater-fl", label: "Handyman Clearwater FL" },
      { href: "/handyman-oldsmar-fl", label: "Handyman Oldsmar FL" },
      { href: "/handyman-westchase-fl", label: "Handyman Westchase FL" },
    ],
  },
];

export const allLocationLinks = [
  { href: "/handyman-westchase-fl", label: "Westchase" },
  { href: "/handyman-carrollwood-fl", label: "Carrollwood" },
  ...locationSilos.map((l) => ({ href: l.path, label: l.city })),
] as const;

export const schemaAreaServedCities = [
  "Tampa",
  "Westchase",
  "Carrollwood",
  "Temple Terrace",
  "Wesley Chapel",
  "Riverview",
  "Valrico",
  "Seffner",
  "Plant City",
  "Town 'n' Country",
  "Oldsmar",
  "Lutz",
  "South Tampa",
  "Clearwater",
  "Dunedin",
  "Citrus Park",
  "Brandon",
] as const;

export function getLocationSilo(slug: string): LocationSilo | undefined {
  return locationSilos.find((l) => l.slug === slug);
}
