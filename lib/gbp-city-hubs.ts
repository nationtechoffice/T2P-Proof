import type { TargetLocation } from "./programmatic";
import { siteConfig } from "./site-config";

const phone = siteConfig.phone;
const hq = `${siteConfig.address.street}, Tampa, FL 33626`;

/**
 * Google Business Profile service areas.
 * Slugs are the live canonical paths. Do not rename one to add or drop -fl.
 * The other form 308s to this slug from lib/location-redirects.ts.
 */
export const gbpCityHubs: TargetLocation[] = [
  {
    slug: "clearwater",
    city: "Clearwater",
    displayName: "Clearwater, FL",
    county: "Pinellas County",
    zipHint: "33755–33767",
    neighborhoods: ["Clearwater Beach", "Island Estates", "Coachman", "Countryside", "Downtown Clearwater"],
    intro:
      "Need a licensed Clearwater handyman for sliders, drywall, and TV mounts? Our local crew serves Clearwater, including Clearwater Beach, Coachman and Countryside. Hablamos español.",
    directAnswer: `Handyman Pros Florida serves Clearwater with handyman repairs for sliding doors, drywall patches, TV mounts, and fixture swaps. Our crew serves Clearwater daily, including Clearwater Beach, Island Estates, Coachman, and Countryside. Licensed and insured. Hablamos español. Call ${phone} for a free estimate.`,
    showStartingPrices: true,
    paragraphs: [
      "Handyman Pros FL is a licensed, insured handyman crew that serves Clearwater, FL, with 24/7 phone estimates and Spanish-speaking staff.",
      "Handyman jobs in Clearwater start at $49 for small jobs like shelves and curtain rods, $89 for TV mounting, and $75 for a drywall patch. Furniture assembly starts at $65, ceiling fan or light fixture installs start at $79, and tile repair or regrout starts at $199.",
      "Clearwater splits into two kinds of houses. Clearwater Beach and Island Estates are condos and low-rise buildings where salt air swells sliding doors and balcony hardware. Coachman and Countryside are mainland neighborhoods of single-family homes with the usual Florida stucco, lanais, and interior drywall.",
      "Beach visits are often a slider that will not lock, a drywall scar inside a rental, or a TV that has to sit level on a concrete or block wall. Mainland lists add ceiling fans at an existing box, fixture swaps, and a punch list before guests arrive. We do not run new circuits or open walls for new wiring.",
      "Cleveland Street and downtown are a short hop from those same stops. Clearwater calls share a planned Pinellas route with Dunedin, Safety Harbor, and Largo.",
      `Call ${phone} for a Clearwater estimate. Licensed and insured. Open 24/7 for scheduling. Hablamos español on the same number.`,
    ],
    callouts: [
      {
        before: "A same-day handyman service call in Clearwater starts at $99, and same-day arrival depends on whether the crew already has a Pinellas stop that day. ",
        href: "/services/same-day-handyman",
        label: "Same-day handyman service",
        after: " explains which jobs fit today and which ones get the next window.",
      },
      {
        before: "Sticky beach sliders and mainland doors are a ",
        href: "/services/door-repair",
        label: "door repair",
        after: " visit — plane, weatherstrip, and hardware — not a millwork shop.",
      },
    ],
    faqs: [
      {
        question: "Can you work in a Clearwater Beach condo?",
        answer:
          "Yes, for handyman scope: sliders, drywall patches, TV mounts on suitable walls, and fixture swaps. Building rules and elevator windows are the owner's to confirm before we arrive.",
      },
      {
        question: "Which Clearwater neighborhoods do you cover?",
        answer: `Clearwater Beach, Island Estates, Coachman, Countryside, and downtown. Call ${phone} if your street is just outside those names.`,
      },
      {
        question: "Are you a licensed and insured handyman in Clearwater?",
        answer:
          "Yes. Handyman Pros FL is licensed and insured. If a Clearwater job needs a permit or a specialist trade, such as new electrical circuits, we tell you before work starts.",
      },
      {
        question: "How much does a handyman cost in Clearwater?",
        answer:
          "Small jobs like shelves and curtain rods start at $49, furniture assembly starts at $65, a drywall patch starts at $75, a ceiling fan or light fixture starts at $79, TV mounting starts at $89, a same-day service call starts at $99, and tile repair or regrout starts at $199. The final price is quoted after you describe the job.",
      },
      {
        question: "Can I get a same-day handyman in Clearwater?",
        answer:
          "Often, when the crew already has a Pinellas stop that day. A same-day service call starts at $99. If today is full, we give you the next open window.",
      },
      {
        question: "Do you mount TVs in Clearwater?",
        answer:
          "Yes. TV mounting in Clearwater starts at $89. We mount into studs, block, or concrete when the wall can hold the bracket.",
      },
      {
        question: "Do you speak Spanish in Clearwater?",
        answer: `Yes. Hablamos español. Call ${phone} and ask for Spanish if you want the estimate in Spanish.`,
      },
      {
        question: "Are you open 24/7 for Clearwater?",
        answer: `Yes. Call ${phone} any time for a Clearwater estimate.`,
      },
    ],
  },
  {
    slug: "st-petersburg",
    city: "St. Petersburg",
    displayName: "St. Petersburg, FL",
    county: "Pinellas County",
    zipHint: "33701–33716",
    neighborhoods: ["Downtown St. Pete", "Kenwood", "Old Northeast", "Snell Isle", "Tyrone"],
    intro:
      "Need a licensed St. Petersburg handyman for bungalow walls, TV mounts, and doors? Handyman Pros FL works Kenwood, downtown, and Snell Isle from Westchase. Hablamos español.",
    directAnswer: `Handyman Pros Florida serves St. Petersburg with handyman repairs for Kenwood walls, downtown condo TV mounts, and doors in older bungalows. Snell Isle and Tyrone are on the same Pinellas route from the Westchase headquarters. Licensed and insured. Hablamos español. Call ${phone} for a free estimate.`,
    paragraphs: [
      "St. Petersburg housing changes block by block. Kenwood and Old Northeast are older wood-frame bungalows and masonry houses where a small hole still has to disappear into plaster or older drywall. Downtown and the waterfront are more condos. Tyrone is later single-family stock along the west side.",
      "The useful visits are practical: hang a TV into real structure, patch a wall so it can take paint, plane a door that sticks after rain, and reset trim that has pulled. We are a handyman crew, not a restoration shop for historic millwork.",
      "Snell Isle and the northeast waterfront add humidity and hardware that loosens. We say so when a wall is too soft to hold a mount. Pinellas Park and Seminole are the usual next stops on a south Pinellas day.",
      `Call ${phone}. Licensed and insured. Our crew serves St. Petersburg daily. Hablamos español.`,
    ],
    callouts: [
      {
        before: "Level TV mounts in bungalows and condos are a ",
        href: "/services/tv-wall-mounting",
        label: "TV wall mounting",
        after: " visit when the wall can hold the bracket.",
      },
    ],
    faqs: [
      {
        question: "Can you patch older Kenwood walls?",
        answer:
          "We patch drywall and make small repairs where plaster meets board. A full plaster restoration is outside a handyman visit, and we will say that before covering it.",
      },
      {
        question: "Which St. Pete areas do you drive to?",
        answer: `Downtown, Kenwood, Old Northeast, Snell Isle, and Tyrone. Call ${phone} for streets just outside that list.`,
      },
      {
        question: "Do you take Spanish calls for St. Petersburg?",
        answer: `Yes. Hablamos español at ${phone}.`,
      },
    ],
  },
  {
    slug: "palm-harbor-fl",
    city: "Palm Harbor",
    displayName: "Palm Harbor, FL",
    county: "Pinellas County",
    zipHint: "34682–34685",
    postalCodes: ["34682", "34683", "34684", "34685"],
    showStartingPrices: true,
    compactLinks: true,
    neighborhoods: ["Downtown Palm Harbor", "Ozona", "Crystal Beach", "Highland Lakes", "East Lake"],
    intro:
      "Need a licensed Palm Harbor handyman for TV mounts, drywall, and fence boards? Handyman Pros FL serves Ozona, East Lake, and Highland Lakes from Westchase. Hablamos español.",
    directAnswer: "Handyman Pros FL serves Palm Harbor, FL, including East Lake, Ozona, Crystal Beach and Highland Lakes, from its Westchase headquarters, with TV mounting from $89, drywall patches from $75 and small jobs from $49. Palm Harbor is unincorporated Pinellas County, so any permit for your job goes through Pinellas County, not a city hall, and we tell you up front if a job needs one.",
    paragraphs: [
      `Call ${phone} for a Palm Harbor estimate. Licensed and insured. Hablamos español. Our crew serves Palm Harbor daily.`,
    ],
    sections: [
      {
        heading: "Two kinds of Palm Harbor homes",
        paragraphs: [
          "Palm Harbor is two eras of houses. Ozona and the downtown streets are older cottages and block homes near the water. East Lake and Highland Lakes are later subdivisions with HOA fences, lanais, and drywall that shows every furniture ding.",
        ],
        subsections: [
          {
            heading: "Ozona and downtown Palm Harbor",
            paragraphs: [
              "Ozona calls are often a door, a soft exterior board, or a TV on a mixed wall. Downtown Palm Harbor sits north of Tampa Road between Alternate US 19 and Omaha Street, with historic buildings a short walk from St. Joseph Sound, where H.S. \"Pop\" Stansell Park overlooks the water.",
            ],
          },
          {
            heading: "East Lake and Highland Lakes",
            paragraphs: [
              "East Lake calls stack a fan at an existing box, a drywall patch, and a privacy-fence board after wind. We repair the section that failed. A whole-yard fence is a larger quote.",
            ],
          },
          {
            heading: "Crystal Beach",
            paragraphs: [
              "Crystal Beach sits on the west edge, closer to the gulf and to salt air. Tarpon Springs, Dunedin, Oldsmar, and Safety Harbor are the neighboring hubs on the same north Pinellas route.",
            ],
          },
        ],
        links: [
          { href: "/locations/tarpon-springs-fl", label: "Tarpon Springs" },
          { href: "/locations/dunedin-fl", label: "Dunedin" },
          { href: "/locations/oldsmar-fl", label: "Oldsmar" },
          { href: "/locations/safety-harbor-fl", label: "Safety Harbor" },
          { href: "/locations/clearwater", label: "Clearwater" },
        ],
        sources: [{ label: "Wikipedia: Palm Harbor, Florida", href: "https://en.wikipedia.org/wiki/Palm_Harbor,_Florida" }],
      },
      {
        heading: "Small jobs that make a home easier to live in",
        paragraphs: [
          "More than a quarter of Palm Harbor residents are 65 or older (27.9% in the 2020 census), and many calls here are a short list rather than a project: shelves and curtain rods, a light fixture or ceiling fan at an existing box, furniture assembly, and a door that drags or will not latch. Small jobs start at $49, furniture assembly at $65, and a ceiling fan or light fixture at $79.",
        ],
        links: [
          { href: "/services/electrical-fixture-installation", label: "Light fixtures" },
          { href: "/services/handyman/fan-installation", label: "Ceiling fans" },
          { href: "/services/furniture-assembly", label: "Furniture assembly" },
          { href: "/services/door-repair", label: "Door repair" },
          { href: "/services/painting", label: "Interior painting in Palm Harbor" },
        ],
        sources: [{ label: "Wikipedia: Palm Harbor, Florida", href: "https://en.wikipedia.org/wiki/Palm_Harbor,_Florida" }],
      },
      {
        heading: "Permits and licensing in Palm Harbor",
        paragraphs: [
          "Palm Harbor is an unincorporated community, so permits for houses here go through Pinellas County Building and Development Review Services rather than a city building department. Florida's DBPR says handyman jobs under $2,500 that are casual, minor or inconsequential are exempt from state contractor licensing, and work that needs a permit usually is not minor. Pinellas County also suggests homeowners check a contractor's general liability and workers' compensation insurance.",
          "Handyman Pros FL is licensed and insured. If your job needs a permit or a licensed trade contractor, we tell you before we start.",
        ],
        sources: [
          { label: "Pinellas County licenses and permits", href: "https://pinellas.gov/topic/home-property/licenses-and-permits/" },
          { label: "Pinellas County Contractor Licensing", href: "https://pinellas.gov/contractor-licensing-department/" },
          { label: "Florida DBPR construction FAQs", href: "https://www2.myfloridalicense.com/construction-industry/faqs/" },
        ],
      },
      {
        heading: "Same-day handyman in Palm Harbor",
        paragraphs: [
          `A same-day service call starts at $99. Whether today works depends on whether the crew is already on a north Pinellas stop. Call ${phone} and we tell you on the phone.`,
        ],
        links: [{ href: "/services/same-day-handyman", label: "Same-day handyman" }],
      },
    ],
    callouts: [
      {
        before: "East Lake and Highland Lakes fence boards are a ",
        href: "/services/fence",
        label: "fence handyman",
        after: " repair — pickets, a gate, or a short matching section.",
      },
    ],
    faqs: [
      {
        question: "Do you have a Palm Harbor location?",
        answer: `No. Crews leave ${hq}. Palm Harbor is a service area, including Ozona, East Lake, and Highland Lakes.`,
      },
      {
        question: "How much does a handyman cost in Palm Harbor?",
        answer:
          "Small jobs start at $49, furniture assembly at $65, a drywall patch at $75, a ceiling fan or light fixture at $79, TV mounting at $89, and tile repair or regrout at $199. We confirm the price on the phone before we come out.",
      },
      {
        question: "Can you mount a TV in an East Lake house?",
        answer:
          "Yes, when we can fasten into structure or use a rated anchor for that wall. We check before we drill. TV mounting starts at $89.",
      },
      {
        question: "Do you repair fences in Palm Harbor?",
        answer: `We replace broken boards, reset a sound gate, and match a short section. Call ${phone} with a photo of the damaged run.`,
      },
      {
        question: "Do I need a permit for a handyman job in Palm Harbor?",
        answer:
          "Palm Harbor is unincorporated, so permits come from Pinellas County. Most small repairs don't need one. If yours does, we tell you before we start.",
      },
      {
        question: "Are you licensed and insured?",
        answer: "Yes, Handyman Pros FL is licensed and insured.",
      },
      {
        question: "Is Spanish available for Palm Harbor estimates?",
        answer: `Yes. Hablamos español. The number is ${phone}.`,
      },
    ],
  },
  {
    slug: "oldsmar-fl",
    city: "Oldsmar",
    displayName: "Oldsmar, FL",
    county: "Pinellas County",
    zipHint: "34677",
    neighborhoods: ["East Lake Woodlands", "Shoreview", "West Oldsmar", "Tampa Road"],
    intro:
      "Need a licensed Oldsmar handyman for tile patches, doors, and TV mounts? Our local crew serves ZIP 34677. Hablamos español.",
    directAnswer: `Handyman Pros Florida serves Oldsmar with handyman repairs for tile patches, doors, and TV mounts in ZIP 34677. Our local crew serves East Lake Woodlands, Shoreview, and West Oldsmar. Licensed and insured. Hablamos español. Call ${phone} for a free estimate.`,
    paragraphs: [
      "Oldsmar sits on Tampa Road between Westchase and the rest of Pinellas. East Lake Woodlands and Shoreview are golf-course and subdivision houses. West Oldsmar and the SR 580 corridor mix older block homes with small commercial streets.",
      "Because the drive is short, lists here are often mixed: a tile or LVP patch, a door that swells, a TV or shelf that has to be level, and deck or lanai hardware that loosened. We repair the section. We do not rebuild a soft subfloor or a failed deck frame.",
      "Safety Harbor is the next town north, Town 'N' Country and Citrus Park are back toward Tampa, and Palm Harbor is the north Pinellas continuation. Our crew serves Oldsmar daily.",
      `Call ${phone}. Licensed and insured. Hablamos español. Same-week visits are realistic when the truck is already on this side of the county line.`,
    ],
    callouts: [
      {
        before: "Loose tile and short LVP sections are a ",
        href: "/services/tile-installation",
        label: "tile installation",
        after: " or flooring visit when the subfloor is still sound.",
      },
    ],
    faqs: [
      {
        question: "Do you repair floors in East Lake Woodlands?",
        answer:
          "We patch tile and replace short flooring sections when the material is on site and the subfloor is solid. A whole-house floor is quoted separately.",
      },
      {
        question: "Can I request the estimate in Spanish?",
        answer: `Yes. Hablamos español at ${phone}.`,
      },
    ],
  },
  {
    slug: "dunedin-fl",
    city: "Dunedin",
    displayName: "Dunedin, FL",
    county: "Pinellas County",
    zipHint: "34698",
    neighborhoods: ["Downtown Dunedin", "Edgewater Drive", "Victoria Drive", "Curlew"],
    intro:
      "Need a licensed Dunedin handyman for furniture assembly, fixtures, and doors? Handyman Pros FL serves downtown and the Edgewater streets. Hablamos español.",
    directAnswer: `Handyman Pros Florida serves Dunedin with handyman repairs for furniture assembly, fixture swaps, and doors downtown and along Edgewater. Victoria Drive and Curlew are on the same mid-Pinellas route. Licensed and insured. Hablamos español. Call ${phone} for a free estimate.`,
    paragraphs: [
      "Downtown Dunedin is a walkable Main Street with cottages and small lots just off the water. Edgewater Drive and the nearby streets are older houses where hardware and doors feel the humidity. Farther east, Curlew and the Clearwater border are more suburban.",
      "Assembly work shows up after a move into those cottages: beds, shelves, and outdoor sets that have to sit square on floors that are not perfectly flat. Fixture swaps and a door that rubs are the usual add-ons. We do not provide a moving truck.",
      "Clearwater, Safety Harbor, and Palm Harbor are the cities we continue to on a mid-Pinellas day. Our crew serves Dunedin daily.",
      `Call ${phone} for a Dunedin estimate. Licensed and insured. Hablamos español.`,
    ],
    callouts: [
      {
        before: "Flat-pack furniture in downtown cottages is a ",
        href: "/services/furniture-assembly",
        label: "furniture assembly",
        after: " visit. We assemble on site. We do not haul a moving truck.",
      },
    ],
    faqs: [
      {
        question: "Can you assemble furniture in a small Dunedin house?",
        answer:
          "Yes. We build the piece in the room it belongs in and check it for square. Tell us about stairs or a narrow door when you call.",
      },
      {
        question: "Which Dunedin areas are on the route?",
        answer: `Main Street and downtown, Edgewater Drive, Victoria Drive, and the Curlew side toward Clearwater. Call ${phone} to confirm a street.`,
      },
      {
        question: "Do you speak Spanish for Dunedin jobs?",
        answer: `Yes. Hablamos español. Call ${phone}.`,
      },
    ],
  },
  {
    slug: "safety-harbor-fl",
    city: "Safety Harbor",
    displayName: "Safety Harbor, FL",
    county: "Pinellas County",
    zipHint: "34695",
    neighborhoods: ["Downtown Safety Harbor", "Main Street", "Philippe Park area", "Oldsmar border"],
    intro:
      "Need a licensed Safety Harbor handyman for doors, ceiling fans, and punch lists? Handyman Pros FL serves Main Street and the Philippe Park side. Hablamos español.",
    directAnswer: `Handyman Pros Florida serves Safety Harbor with handyman repairs for sticking doors, ceiling fans, and short punch lists near Main Street and Philippe Park. The Oldsmar border is on the same drive. Licensed and insured. Hablamos español. Call ${phone} for a free estimate.`,
    paragraphs: [
      "Safety Harbor is a small waterfront town on the bay. Downtown Main Street and the streets toward Philippe Park are older cottages and block houses. The Oldsmar border is a short drive back toward our headquarters.",
      "The lists fit a handyman visit: a door that sticks after a wet week, a ceiling fan wobbling at an existing box, drywall from a moved piece of furniture, and a short punch list before company arrives. New wiring and panel work stay with an electrician.",
      "Oldsmar, Clearwater, and Dunedin are the neighboring hubs. Our crew serves Safety Harbor daily.",
      `Call ${phone}. Licensed and insured. Hablamos español.`,
    ],
    callouts: [
      {
        before: "Fans at an existing box are a ",
        href: "/services/handyman/fan-installation",
        label: "ceiling fan installation",
        after: " visit. If the box is not fan-rated, we stop and say so.",
      },
    ],
    faqs: [
      {
        question: "Can you fix a sticking door in downtown Safety Harbor?",
        answer:
          "Yes. We plane, adjust hardware, and replace weatherstrip when the slab and frame are still sound. A rotten frame is called out before we cover it.",
      },
      {
        question: "Do you install ceiling fans in Safety Harbor?",
        answer: `Yes, as a like-for-like swap at an existing fan-rated box. Call ${phone} if you are not sure the box can hold a fan.`,
      },
      {
        question: "Can the estimate be in Spanish?",
        answer: `Yes. Hablamos español at ${phone}.`,
      },
    ],
  },
  {
    slug: "tarpon-springs-fl",
    city: "Tarpon Springs",
    displayName: "Tarpon Springs, FL",
    county: "Pinellas County",
    zipHint: "34689",
    neighborhoods: ["Sponge Docks", "Downtown Tarpon Springs", "East Lake", "Lake Tarpon"],
    intro:
      "Need a licensed Tarpon Springs handyman for fence boards and exterior wood? Handyman Pros FL serves the Sponge Docks side and East Lake. Hablamos español.",
    directAnswer: `Handyman Pros Florida serves Tarpon Springs with handyman repairs for fence boards, gates, and exterior wood near the Sponge Docks and Lake Tarpon. Downtown and East Lake are on the same route. Licensed and insured. Hablamos español. Call ${phone} for a free estimate.`,
    paragraphs: [
      "Tarpon Springs has a historic downtown and the Sponge Docks by the Anclote River, plus newer houses east toward Lake Tarpon and East Lake. Humidity and sun wear exterior wood, gates, and the bottom of fence boards first.",
      "A fence handyman visit here is the failed section: cupped pickets, a gate that drags, a short run you already matched. Waterfront and older downtown houses also need doors and trim that actually close. We do not rebuild a seawall or a whole property fence in one handyman stop.",
      "Palm Harbor is south, Holiday and New Port Richey are north in Pasco. Our local crew serves all of them.",
      `Call ${phone} with a photo of the fence or the door. Licensed and insured. Hablamos español.`,
    ],
    callouts: [
      {
        before: "Sponge Docks and East Lake fence lines are a ",
        href: "/services/fence",
        label: "fence handyman",
        after: " repair when the damage is a section, a gate, or a few boards.",
      },
    ],
    faqs: [
      {
        question: "Can you repair a wood fence near Lake Tarpon?",
        answer:
          "Yes, for boards, a gate, or a short matching section. If the posts are rotten along the whole run, we say that before anyone starts digging.",
      },
      {
        question: "Do you work on exterior wood downtown?",
        answer: `We repair trim and doors when the damage is still a handyman repair. Call ${phone} and describe what is soft.`,
      },
      {
        question: "Do you speak Spanish in Tarpon Springs?",
        answer: `Yes. Hablamos español. Call ${phone}.`,
      },
    ],
  },
  {
    slug: "holiday",
    city: "Holiday",
    displayName: "Holiday, FL",
    county: "Pasco County",
    zipHint: "34691",
    neighborhoods: ["US-19 corridor", "Holiday Lake", "Anclote", "Gulf Trace"],
    intro:
      "Need a licensed Holiday FL handyman for doors, gutters, and fence patches? Holiday is a Pasco service area on US-19. Hablamos español.",
    directAnswer: `Handyman Pros Florida serves Holiday with handyman repairs for doors, gutters, and fence patches along US-19. Holiday Lake, Anclote, and Gulf Trace are older Pasco blocks. Licensed and insured. Hablamos español. Call ${phone} for a free estimate.`,
    paragraphs: [
      "Holiday is unincorporated Pasco between Tarpon Springs and New Port Richey. Houses along US-19, Holiday Lake, and the Anclote side are often older concrete-block ranches on low lots, with carports, short fence runs, and gutters that clog after oak debris and hard rain.",
      "The handyman list is doors that stick, a gutter section that dumps at the slab, a fence panel that leaned, and drywall inside after a leak is already dry. We do not treat an active roof leak as a paint-over. If water is still coming in, that gets named before we patch.",
      "Tarpon Springs is south and New Port Richey is north. Our crew serves Holiday daily.",
      `Call ${phone} for a Holiday estimate. Licensed and insured. Hablamos español.`,
    ],
    callouts: [
      {
        before: "Clogged runs and loose downspouts along US-19 are a ",
        href: "/services/gutter-installation",
        label: "gutter repair",
        after: " visit — flush, reseat, or replace a short damaged section.",
      },
    ],
    faqs: [
      {
        question: "Do you clean and repair gutters in Holiday?",
        answer:
          "We flush clogged runs, reseat loose sections, and replace a damaged piece. A full-run replacement is quoted on its own.",
      },
      {
        question: "Which Holiday neighborhoods do you cover?",
        answer: `The US-19 corridor, Holiday Lake, Anclote, and Gulf Trace. Call ${phone} if you are just north or south of those names.`,
      },
      {
        question: "Can I call in Spanish?",
        answer: `Yes. Hablamos español at ${phone}.`,
      },
    ],
  },
  {
    slug: "new-port-richey-fl",
    city: "New Port Richey",
    displayName: "New Port Richey, FL",
    county: "Pasco County",
    zipHint: "34652–34655",
    neighborhoods: ["Downtown New Port Richey", "Sims Park", "Gulf Harbors", "Jasmine Estates"],
    intro:
      "Need a licensed New Port Richey handyman for gutters, fence patches, and doors? Handyman Pros FL serves downtown and Gulf Harbors. Hablamos español.",
    directAnswer: `Handyman Pros Florida serves New Port Richey with handyman repairs for gutters, fence patches, and doors downtown and in Gulf Harbors. Jasmine Estates is on the same Pasco route, scheduled by window rather than same-hour. Licensed and insured. Hablamos español. Call ${phone} for a free estimate.`,
    paragraphs: [
      "New Port Richey mixes a small downtown around Sims Park and Main Street with canal homes in Gulf Harbors and older neighborhoods such as Jasmine Estates. Salt air and afternoon rain show up as gutters that overflow, gates that drop, and doors that swell.",
      "We reseat gutter sections, patch fence boards, and adjust doors when the frame is still sound. Canal-front houses get the same scope as inland ones. We are not a marine contractor, and we do not rebuild seawalls.",
      "Holiday is the neighbor to the south along US-19. Tarpon Springs is farther south in Pinellas. Spring Hill is north. Our local crew serves all of them.",
      `Call ${phone}. Licensed and insured. Hablamos español. Send a photo if the gutter or fence damage is easier to see than describe.`,
    ],
    callouts: [
      {
        before: "Gulf Harbors and downtown fence panels are a ",
        href: "/services/fence",
        label: "fence handyman",
        after: " repair when you need boards or a gate, not a new fence around the lot.",
      },
    ],
    faqs: [
      {
        question: "Do you work in Gulf Harbors?",
        answer:
          "Yes, for handyman repairs: gutters, fence sections, doors, and drywall. Dock and seawall work is outside that scope.",
      },
      {
        question: "How do Pasco visits get scheduled?",
        answer: `New Port Richey is farther than Oldsmar or Clearwater, so we confirm the window instead of promising same-hour arrival. Call ${phone}.`,
      },
      {
        question: "Is Spanish spoken on the New Port Richey line?",
        answer: `Yes. Hablamos español. Call ${phone}.`,
      },
    ],
  },
  {
    slug: "keystone",
    city: "Keystone",
    displayName: "Keystone, FL",
    county: "Hillsborough County",
    zipHint: "33556",
    neighborhoods: ["Gunn Highway", "Lake Keystone", "Brooker Creek", "North Mobley Road"],
    intro:
      "Need a licensed Keystone handyman for fence sections, fans, and drywall on larger lots? Keystone is northwest Hillsborough. Hablamos español.",
    directAnswer: `Handyman Pros Florida serves Keystone with handyman repairs for fence sections, ceiling fans, and drywall on larger Gunn Highway lots near Lake Keystone. Brooker Creek and North Mobley are on our northwest Hillsborough route. Licensed and insured. Hablamos español. Call ${phone} for a free estimate.`,
    paragraphs: [
      "Keystone is unincorporated Hillsborough along Gunn Highway, near Lake Keystone and Brooker Creek Preserve. Lots are larger than in Citrus Park, with oaks, long driveways, and fences that fail one section at a time instead of one shared wall.",
      "The work that fits is a fence board or gate, a ceiling fan at an existing box, drywall inside the house, and a door that no longer latches. We do not treat acreage as a reason to invent a second crew. The same Westchase truck comes north.",
      "Citrus Park is the commercial neighbor to the southeast. Westchase and Oldsmar are south. Carrollwood is east. Our crew serves Keystone daily.",
      `Call ${phone} for a Keystone estimate. Licensed and insured. Hablamos español.`,
    ],
    callouts: [
      {
        before: "Long Gunn Highway fence runs usually need a ",
        href: "/services/fence",
        label: "fence handyman",
        after: " for the section that failed, not a new fence around the whole acreage.",
      },
    ],
    faqs: [
      {
        question: "Is Keystone inside your service area?",
        answer: `Yes. Keystone along Gunn Highway and Lake Keystone is a Hillsborough service area. Our crew serves Keystone daily.`,
      },
      {
        question: "Do you repair fences on larger Keystone lots?",
        answer:
          "We repair boards, gates, and short matching sections. A full property installation is quoted separately or referred when it is past handyman scope.",
      },
      {
        question: "Do you install ceiling fans in Keystone?",
        answer: `Yes, at an existing fan-rated box. Call ${phone} before the visit if the room has no fan box today.`,
      },
      {
        question: "Can we speak Spanish?",
        answer: `Yes. Hablamos español at ${phone}.`,
      },
    ],
  },
  {
    slug: "citrus-park-fl",
    city: "Citrus Park",
    displayName: "Citrus Park, FL",
    county: "Hillsborough County",
    zipHint: "33625",
    neighborhoods: ["Citrus Park Town Center", "Gunn Highway", "Veterans Expressway", "Ehrlich Road"],
    intro:
      "Need a licensed Citrus Park handyman for ceiling fans, doors, and TV mounts? Our local crew serves the mall area and Gunn Highway. Hablamos español.",
    directAnswer: `Handyman Pros Florida serves Citrus Park with handyman repairs for ceiling fans, doors, and TV mounts near the Town Center mall, Gunn Highway, and Ehrlich Road. Our local crew serves Citrus Park. Licensed and insured. Hablamos español. Call ${phone} for a free estimate.`,
    paragraphs: [
      "Citrus Park grew around the Town Center mall, Gunn Highway, and the Veterans Expressway. The houses are mostly later subdivisions and townhomes, with ceiling fans, interior doors, and drywall that take the wear of family use.",
      "A typical stop is a fan that wobbles at an existing box, a bedroom door that will not latch, and a TV mount in a living room. Ehrlich Road and the streets around the mall are close enough that a short punch list can share one visit.",
      "Keystone is northwest along Gunn Highway. Carrollwood is east. Town 'N' Country is south. Our local crew serves the mall area and the neighborhoods around it.",
      `Call ${phone}. Licensed and insured. Hablamos español.`,
    ],
    callouts: [
      {
        before: "Fans in Citrus Park subdivisions are a ",
        href: "/services/handyman/fan-installation",
        label: "ceiling fan installation",
        after: " when a fan-rated box is already there.",
      },
    ],
    faqs: [
      {
        question: "Can you mount a TV near Citrus Park Town Center?",
        answer:
          "Yes. We locate structure, use a rated mount, and keep the screen level. Cable concealment depends on the wall.",
      },
      {
        question: "Which Citrus Park roads do you already drive?",
        answer: `Gunn Highway, the Veterans corridor, and Ehrlich Road. Call ${phone} for a street just past those.`,
      },
      {
        question: "Do you offer Spanish estimates?",
        answer: `Yes. Hablamos español. Call ${phone}.`,
      },
    ],
  },
  {
    slug: "town-n-country-fl",
    city: "Town 'N' Country",
    displayName: "Town 'N' Country, FL",
    county: "Hillsborough County",
    zipHint: "33615",
    neighborhoods: ["Hillsborough Avenue", "Waters Avenue", "Memorial Highway", "Rocky Creek"],
    intro:
      "Need a licensed Town 'N' Country handyman for fans, fixture swaps, and drywall? Hillsborough Avenue and Waters Avenue are close to our Westchase headquarters. Hablamos español.",
    directAnswer: `Handyman Pros Florida serves Town 'N' Country with handyman repairs for ceiling fans, fixture swaps, and drywall along Hillsborough Avenue, Waters Avenue, and Memorial Highway. Rocky Creek is a short trip from the Westchase headquarters. Licensed and insured. Hablamos español. Call ${phone} for a free estimate.`,
    paragraphs: [
      "Town 'N' Country is an unincorporated Hillsborough community west of Tampa, along Hillsborough Avenue, Waters Avenue, and Memorial Highway. Many houses are older block ranches and townhomes with carports, original fans, and drywall that has been patched more than once.",
      "Fixture swaps and fan replacements at an existing box are the common call, plus a door, a drywall scar, and a shelf that has to be level. Rocky Creek and the streets toward Westchase are a short trip, so a modest list does not need a second appointment when the parts match.",
      "Citrus Park is north, Carrollwood is northeast, and Oldsmar is west across the county line. Our crew serves Town 'N' Country daily.",
      `Call ${phone} for an estimate. Licensed and insured. Hablamos español.`,
    ],
    callouts: [
      {
        before: "Light and faucet swaps on Hillsborough Avenue are ",
        href: "/services/electrical-fixture-installation",
        label: "electrical fixture installation",
        after: " or a plumbing fixture visit at the existing connection. New circuits are electrician work.",
      },
    ],
    faqs: [
      {
        question: "Do you replace ceiling fans in Town 'N' Country?",
        answer:
          "Yes, when the box is already fan-rated. We mount, connect the wiring that is there, and balance the fan.",
      },
      {
        question: "Which Town 'N' Country corridors do you cover?",
        answer: `Hillsborough Avenue, Waters Avenue, Memorial Highway, and Rocky Creek. Call ${phone} to confirm a side street.`,
      },
      {
        question: "Can I ask for Spanish?",
        answer: `Yes. Hablamos español at ${phone}.`,
      },
    ],
  },
  {
    slug: "valrico",
    city: "Valrico",
    displayName: "Valrico, FL",
    county: "Hillsborough County",
    zipHint: "33594–33596",
    neighborhoods: ["Fish Hawk", "Sydney", "Valrico Road", "State Road 60"],
    intro:
      "Need a licensed Valrico handyman for window screens, doors, and drywall? Fish Hawk and Sydney are regular stops for our crew. Hablamos español.",
    directAnswer: `Handyman Pros Florida serves Valrico with handyman repairs for window screens, doors, and drywall in Fish Hawk, Sydney, and along Valrico Road. A recent visit replaced 7 window screens. Our crew serves Valrico daily. Licensed and insured. Hablamos español. Call ${phone} for a free estimate.`,
    paragraphs: [
      "Valrico sits east of Brandon along Valrico Road and State Road 60. Fish Hawk and Sydney are the neighborhoods we drive most. The houses mix later subdivisions with older lots.",
      "A recent Valrico visit was replacing 7 window screens. The other calls on this side of Hillsborough are usually a door that swells after rain or a drywall patch, not a remodel. We bring the screen spline and the door hardware that fit a handyman stop.",
      "Brandon is the next hub west, Riverview is south, and Plant City is farther east. Those pages are the same licensed crew.",
      `Call ${phone} for a Valrico estimate. Licensed and insured. Open 24/7 for scheduling. Hablamos español on the same number.`,
    ],
    callouts: [
      {
        before: "Screen, door, and small punch-list work in Valrico is a ",
        href: "/services/handyman/general-repairs",
        label: "general repairs",
        after: " visit from the Westchase crew.",
      },
    ],
    faqs: [
      {
        question: "Do you replace window screens in Valrico?",
        answer:
          "Yes. A recent Valrico visit replaced 7 window screens. Doors and drywall patches are on the same east Hillsborough route when they are still handyman work.",
      },
      {
        question: "Which Valrico areas do you cover?",
        answer: `Fish Hawk, Sydney, and the Valrico Road corridor. Brandon, Riverview, and Plant City are the neighboring hubs. Call ${phone} if your street is just outside those names.`,
      },
      {
        question: "Do you speak Spanish in Valrico?",
        answer: `Yes. Hablamos español. Call ${phone} and ask for Spanish if you want the estimate in Spanish.`,
      },
    ],
  },
  {
    slug: "apollo-beach",
    city: "Apollo Beach",
    displayName: "Apollo Beach, FL",
    county: "Hillsborough County",
    zipHint: "33572",
    neighborhoods: ["MiraBay", "Symphony Isles", "US-41", "Apollo Beach Boulevard"],
    intro:
      "Need a licensed Apollo Beach handyman for flooring, doors, and drywall? MiraBay and Symphony Isles are a south Hillsborough drive from Westchase. Hablamos español.",
    directAnswer: `Handyman Pros Florida serves Apollo Beach with handyman repairs for flooring, doors, and drywall in Symphony Isles, MiraBay, and along US-41. A recent visit was a flooring job. Our crew serves Apollo Beach daily. Licensed and insured. Hablamos español. Call ${phone} for a free estimate.`,
    paragraphs: [
      "Apollo Beach is the bay community south of Riverview, along US-41, with MiraBay and Symphony Isles among the neighborhoods we already route.",
      "A recent Apollo Beach visit was a flooring job. Doors and drywall patches are the other lists on these houses. We repair the section that failed, and we say so when a soft subfloor is past a handyman visit.",
      "Riverview is the inland neighbor. Brandon is farther north on many of the same days. The crew is still the Westchase crew, with one phone number.",
      `Call ${phone} for an Apollo Beach estimate. Licensed and insured. Hablamos español.`,
    ],
    callouts: [
      {
        before: "Flooring sections in Apollo Beach are a ",
        href: "/services/flooring-installation",
        label: "flooring installation",
        after: " visit when the work is still a repair or a short run, not a whole-house remodel.",
      },
    ],
    faqs: [
      {
        question: "Do you take flooring jobs in Apollo Beach?",
        answer:
          "Yes, within handyman scope. A recent Apollo Beach visit was a flooring job. If the subfloor has failed, we say that before we cover it.",
      },
      {
        question: "Which Apollo Beach neighborhoods do you drive to?",
        answer: `MiraBay, Symphony Isles, and the US-41 corridor. Riverview and Brandon are the neighboring hubs. Call ${phone} for a street just outside that list.`,
      },
      {
        question: "Can we speak Spanish for an Apollo Beach estimate?",
        answer: `Yes. Hablamos español at ${phone}.`,
      },
    ],
  },
  {
    slug: "gulfport",
    city: "Gulfport",
    displayName: "Gulfport, FL",
    county: "Pinellas County",
    zipHint: "33707",
    neighborhoods: ["Gulfport waterfront", "49th Street", "Pasadena edge", "Beach Boulevard"],
    intro:
      "Need a licensed Gulfport handyman for ceiling fans, doors, and drywall? Our local crew serves the waterfront and 49th Street. Hablamos español.",
    directAnswer: `Handyman Pros Florida serves Gulfport with handyman repairs for ceiling fans, doors, and drywall near the waterfront, 49th Street, and the Pasadena edge. A recent visit was a ceiling fan installation. Our crew serves Gulfport daily. Licensed and insured. Hablamos español. Call ${phone} for a free estimate.`,
    paragraphs: [
      "Gulfport is the waterfront city on Boca Ciega Bay, south of St. Petersburg. Stops cluster near the beach, 49th Street, and the Pasadena edge.",
      "A recent Gulfport visit was a ceiling fan installation at an existing fan-rated box. Doors that stick in the salt air and small drywall patches fill out a typical list. New wiring is electrician work, and we stop if the box is not fan-rated.",
      "St. Petersburg is the next hub north. Pinellas Park and Seminole are the usual continuation of a south Pinellas day. Our crew serves Gulfport daily.",
      `Call ${phone} for a Gulfport estimate. Licensed and insured. Hablamos español.`,
    ],
    callouts: [
      {
        before: "Ceiling fans in Gulfport are a ",
        href: "/services/handyman/fan-installation",
        label: "ceiling fan installation",
        after: " when a fan-rated box is already in the room.",
      },
    ],
    faqs: [
      {
        question: "Do you install ceiling fans in Gulfport?",
        answer:
          "Yes, at an existing fan-rated box. A recent Gulfport visit was a ceiling fan installation. If the room has no fan box, that is electrician scope and we say so before the visit.",
      },
      {
        question: "Which Gulfport areas do you cover?",
        answer: `The waterfront, 49th Street, and the Pasadena edge. St. Petersburg, Pinellas Park, and Seminole are the neighboring hubs. Call ${phone} to confirm a side street.`,
      },
      {
        question: "Is Spanish available for Gulfport?",
        answer: `Yes. Hablamos español. The number is ${phone}.`,
      },
    ],
  },
];

export const gbpHubSlugSet = new Set(gbpCityHubs.map((location) => location.slug));
