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
      "Need a licensed Clearwater handyman for sliders, drywall, and TV mounts? Handyman Pros FL serves the beach, Coachman, and Countryside from one Westchase headquarters. Hablamos español.",
    directAnswer: `Handyman Pros Florida serves Clearwater with handyman repairs for sliding doors, drywall patches, TV mounts, and fixture swaps. Crews leave the only Westchase headquarters for Clearwater Beach, Island Estates, Coachman, and Countryside. Licensed and insured. Hablamos español. Call ${phone} for a free estimate.`,
    paragraphs: [
      "Clearwater splits into two kinds of houses. Clearwater Beach and Island Estates are condos and low-rise buildings where salt air swells sliding doors and balcony hardware. Coachman and Countryside are mainland neighborhoods of single-family homes with the usual Florida stucco, lanais, and interior drywall.",
      "Beach visits are often a slider that will not lock, a drywall scar inside a rental, or a TV that has to sit level on a concrete or block wall. Mainland lists add ceiling fans at an existing box, fixture swaps, and a punch list before guests arrive. We do not run new circuits or open walls for new wiring.",
      "Cleveland Street and downtown are a short hop from those same stops. We are not a Clearwater storefront. The truck leaves Westchase and crosses to Pinellas on a planned route with Dunedin, Safety Harbor, and Largo.",
      `Call ${phone} for a Clearwater estimate. Licensed and insured. Open 24/7 for scheduling. Hablamos español on the same number.`,
    ],
    callouts: [
      {
        before: "Sticky beach sliders and mainland doors are a ",
        href: "/services/door-repair",
        label: "door repair",
        after: " visit — plane, weatherstrip, and hardware — not a millwork shop.",
      },
    ],
    faqs: [
      {
        question: "Do you have a handyman office in Clearwater?",
        answer: `No. The only office is ${hq} in Westchase. Clearwater Beach, Coachman, and Countryside are service areas we drive to.`,
      },
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
        question: "Do you speak Spanish in Clearwater?",
        answer: `Yes. Hablamos español. Call ${phone} and ask for Spanish if you want the estimate in Spanish.`,
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
      `Call ${phone}. Licensed and insured. One headquarters in Westchase. Hablamos español.`,
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
        question: "Is there a St. Petersburg handyman shop?",
        answer: `No. Handyman Pros FL has one location at ${hq}. St. Petersburg is a Pinellas service area.`,
      },
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
    zipHint: "34683–34685",
    neighborhoods: ["Downtown Palm Harbor", "Ozona", "Crystal Beach", "Highland Lakes", "East Lake"],
    intro:
      "Need a licensed Palm Harbor handyman for TV mounts, drywall, and fence boards? Handyman Pros FL serves Ozona, East Lake, and Highland Lakes from Westchase. Hablamos español.",
    directAnswer: `Handyman Pros Florida serves Palm Harbor with handyman repairs for TV mounts, drywall patches, and fence boards in Ozona, East Lake, and Highland Lakes. Crystal Beach is on that same north Pinellas drive from Westchase. Licensed and insured. Hablamos español. Call ${phone} for a free estimate.`,
    paragraphs: [
      "Palm Harbor is two eras of houses. Ozona and the downtown streets are older cottages and block homes near the water. East Lake and Highland Lakes are later subdivisions with HOA fences, lanais, and drywall that shows every furniture ding.",
      "Ozona calls are often a door, a soft exterior board, or a TV on a mixed wall. East Lake calls stack a fan at an existing box, a drywall patch, and a privacy-fence board after wind. We repair the section that failed. A whole-yard fence is a larger quote.",
      "Crystal Beach sits on the west edge, closer to the gulf and to salt air. Tarpon Springs, Dunedin, Oldsmar, and Safety Harbor are the neighboring hubs on the same north Pinellas route.",
      `Call ${phone} for a Palm Harbor estimate. Licensed and insured. Hablamos español. The only office is Westchase.`,
    ],
    callouts: [
      {
        before: "East Lake and Highland Lakes fence boards are a ",
        href: "/services/fence-handyman",
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
        question: "Can you mount a TV in an East Lake house?",
        answer:
          "Yes, when we can fasten into structure or use a rated anchor for that wall. We check before we drill.",
      },
      {
        question: "Do you repair fences in Palm Harbor?",
        answer: `We replace broken boards, reset a sound gate, and match a short section. Call ${phone} with a photo of the damaged run.`,
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
      "Need a licensed Oldsmar handyman for tile patches, doors, and TV mounts? ZIP 34677 is the next hop west from our Westchase headquarters. Hablamos español.",
    directAnswer: `Handyman Pros Florida serves Oldsmar with handyman repairs for tile patches, doors, and TV mounts in ZIP 34677. East Lake Woodlands, Shoreview, and West Oldsmar are the next hop west from the Westchase headquarters. Licensed and insured. Hablamos español. Call ${phone} for a free estimate.`,
    paragraphs: [
      "Oldsmar sits on Tampa Road between Westchase and the rest of Pinellas. East Lake Woodlands and Shoreview are golf-course and subdivision houses. West Oldsmar and the SR 580 corridor mix older block homes with small commercial streets.",
      "Because the drive is short, lists here are often mixed: a tile or LVP patch, a door that swells, a TV or shelf that has to be level, and deck or lanai hardware that loosened. We repair the section. We do not rebuild a soft subfloor or a failed deck frame.",
      "Safety Harbor is the next town north, Town 'N' Country and Citrus Park are back toward Tampa, and Palm Harbor is the north Pinellas continuation. One crew, one phone number, no Oldsmar branch.",
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
        question: "Is Oldsmar a second Handyman Pros office?",
        answer: `No. The only address is ${hq}. Oldsmar ZIP 34677 is a service area on the way into Pinellas.`,
      },
      {
        question: "Do you repair floors in East Lake Woodlands?",
        answer:
          "We patch tile and replace short flooring sections when the material is on site and the subfloor is solid. A whole-house floor is quoted separately.",
      },
      {
        question: "How far is Oldsmar from your shop?",
        answer: `It is the next community west of Westchase along Tampa Road. Call ${phone} and we will give the next real window.`,
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
      "Need a licensed Dunedin handyman for furniture assembly, fixtures, and doors? Handyman Pros FL serves downtown and the Edgewater streets from Westchase. Hablamos español.",
    directAnswer: `Handyman Pros Florida serves Dunedin with handyman repairs for furniture assembly, fixture swaps, and doors downtown and along Edgewater. Victoria Drive and Curlew are on the same mid-Pinellas route from Westchase. Licensed and insured. Hablamos español. Call ${phone} for a free estimate.`,
    paragraphs: [
      "Downtown Dunedin is a walkable Main Street with cottages and small lots just off the water. Edgewater Drive and the nearby streets are older houses where hardware and doors feel the humidity. Farther east, Curlew and the Clearwater border are more suburban.",
      "Assembly work shows up after a move into those cottages: beds, shelves, and outdoor sets that have to sit square on floors that are not perfectly flat. Fixture swaps and a door that rubs are the usual add-ons. We do not provide a moving truck.",
      "Clearwater, Safety Harbor, and Palm Harbor are the cities we continue to on a mid-Pinellas day. Dunedin is not a second shop.",
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
        question: "Do you have a Dunedin handyman office?",
        answer: `No. Dispatch is from ${hq} in Westchase. Downtown Dunedin and Edgewater are on the Pinellas route.`,
      },
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
      "Need a licensed Safety Harbor handyman for doors, ceiling fans, and punch lists? Handyman Pros FL serves Main Street and the Philippe Park side from Westchase. Hablamos español.",
    directAnswer: `Handyman Pros Florida serves Safety Harbor with handyman repairs for sticking doors, ceiling fans, and short punch lists near Main Street and Philippe Park. The Oldsmar border is on the same drive from Westchase. Licensed and insured. Hablamos español. Call ${phone} for a free estimate.`,
    paragraphs: [
      "Safety Harbor is a small waterfront town on the bay. Downtown Main Street and the streets toward Philippe Park are older cottages and block houses. The Oldsmar border is a short drive back toward our headquarters.",
      "The lists fit a handyman visit: a door that sticks after a wet week, a ceiling fan wobbling at an existing box, drywall from a moved piece of furniture, and a short punch list before company arrives. New wiring and panel work stay with an electrician.",
      "Oldsmar, Clearwater, and Dunedin are the neighboring hubs. We do not keep a Safety Harbor storefront or a separate phone number.",
      `Call ${phone}. Licensed and insured. Hablamos español. The truck starts in Westchase.`,
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
        question: "Is there a Safety Harbor branch?",
        answer: `No. The only location is ${hq}. Safety Harbor is a Pinellas service area between Oldsmar and Clearwater.`,
      },
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
      "Need a licensed Tarpon Springs handyman for fence boards and exterior wood? Handyman Pros FL serves the Sponge Docks side and East Lake from Westchase. Hablamos español.",
    directAnswer: `Handyman Pros Florida serves Tarpon Springs with handyman repairs for fence boards, gates, and exterior wood near the Sponge Docks and Lake Tarpon. Downtown and East Lake are on the same route from Westchase. Licensed and insured. Hablamos español. Call ${phone} for a free estimate.`,
    paragraphs: [
      "Tarpon Springs has a historic downtown and the Sponge Docks by the Anclote River, plus newer houses east toward Lake Tarpon and East Lake. Humidity and sun wear exterior wood, gates, and the bottom of fence boards first.",
      "A fence handyman visit here is the failed section: cupped pickets, a gate that drags, a short run you already matched. Waterfront and older downtown houses also need doors and trim that actually close. We do not rebuild a seawall or a whole property fence in one handyman stop.",
      "Palm Harbor is south, Holiday and New Port Richey are north in Pasco. All of them are drives from Westchase, not extra offices.",
      `Call ${phone} with a photo of the fence or the door. Licensed and insured. Hablamos español.`,
    ],
    callouts: [
      {
        before: "Sponge Docks and East Lake fence lines are a ",
        href: "/services/fence-handyman",
        label: "fence handyman",
        after: " repair when the damage is a section, a gate, or a few boards.",
      },
    ],
    faqs: [
      {
        question: "Do you have a Tarpon Springs office?",
        answer: `No. Handyman Pros FL is based at ${hq}. Tarpon Springs, including the Sponge Docks and East Lake, is a service area.`,
      },
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
      "Need a licensed Holiday FL handyman for doors, gutters, and fence patches? Holiday is a Pasco service area on US-19, dispatched from Westchase. Hablamos español.",
    directAnswer: `Handyman Pros Florida serves Holiday with handyman repairs for doors, gutters, and fence patches along US-19. Holiday Lake, Anclote, and Gulf Trace are older Pasco blocks dispatched from the Westchase headquarters. Licensed and insured. Hablamos español. Call ${phone} for a free estimate.`,
    paragraphs: [
      "Holiday is unincorporated Pasco between Tarpon Springs and New Port Richey. Houses along US-19, Holiday Lake, and the Anclote side are often older concrete-block ranches on low lots, with carports, short fence runs, and gutters that clog after oak debris and hard rain.",
      "The handyman list is doors that stick, a gutter section that dumps at the slab, a fence panel that leaned, and drywall inside after a leak is already dry. We do not treat an active roof leak as a paint-over. If water is still coming in, that gets named before we patch.",
      "Tarpon Springs is south and New Port Richey is north. There is no Holiday storefront. The crew and the phone number are the Westchase ones.",
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
        question: "Is Holiday a separate Handyman Pros location?",
        answer: `No. Holiday in Pasco is a service area. The only office is ${hq} in Westchase.`,
      },
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
      "Need a licensed New Port Richey handyman for gutters, fence patches, and doors? Handyman Pros FL serves downtown and Gulf Harbors from Westchase. Hablamos español.",
    directAnswer: `Handyman Pros Florida serves New Port Richey with handyman repairs for gutters, fence patches, and doors downtown and in Gulf Harbors. Jasmine Estates is on the same Pasco route from Westchase, scheduled by window rather than same-hour. Licensed and insured. Hablamos español. Call ${phone} for a free estimate.`,
    paragraphs: [
      "New Port Richey mixes a small downtown around Sims Park and Main Street with canal homes in Gulf Harbors and older neighborhoods such as Jasmine Estates. Salt air and afternoon rain show up as gutters that overflow, gates that drop, and doors that swell.",
      "We reseat gutter sections, patch fence boards, and adjust doors when the frame is still sound. Canal-front houses get the same scope as inland ones. We are not a marine contractor, and we do not rebuild seawalls.",
      "Holiday is the neighbor to the south along US-19. Tarpon Springs is farther south in Pinellas. Spring Hill is north. All of those drives start in Westchase.",
      `Call ${phone}. Licensed and insured. Hablamos español. Send a photo if the gutter or fence damage is easier to see than describe.`,
    ],
    callouts: [
      {
        before: "Gulf Harbors and downtown fence panels are a ",
        href: "/services/fence-handyman",
        label: "fence handyman",
        after: " repair when you need boards or a gate, not a new fence around the lot.",
      },
    ],
    faqs: [
      {
        question: "Do you have a New Port Richey office?",
        answer: `No. New Port Richey is a Pasco service area. Headquarters stays at ${hq}.`,
      },
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
      "Need a licensed Keystone handyman for fence sections, fans, and drywall on larger lots? Keystone is northwest Hillsborough, dispatched from Westchase. Hablamos español.",
    directAnswer: `Handyman Pros Florida serves Keystone with handyman repairs for fence sections, ceiling fans, and drywall on larger Gunn Highway lots near Lake Keystone. Brooker Creek and North Mobley are on that northwest Hillsborough drive from Westchase. Licensed and insured. Hablamos español. Call ${phone} for a free estimate.`,
    paragraphs: [
      "Keystone is unincorporated Hillsborough along Gunn Highway, near Lake Keystone and Brooker Creek Preserve. Lots are larger than in Citrus Park, with oaks, long driveways, and fences that fail one section at a time instead of one shared wall.",
      "The work that fits is a fence board or gate, a ceiling fan at an existing box, drywall inside the house, and a door that no longer latches. We do not treat acreage as a reason to invent a second crew. The same Westchase truck comes north.",
      "Citrus Park is the commercial neighbor to the southeast. Westchase and Oldsmar are south. Carrollwood is east. There is no Keystone shop and no separate Google listing.",
      `Call ${phone} for a Keystone estimate. Licensed and insured. Hablamos español.`,
    ],
    callouts: [
      {
        before: "Long Gunn Highway fence runs usually need a ",
        href: "/services/fence-handyman",
        label: "fence handyman",
        after: " for the section that failed, not a new fence around the whole acreage.",
      },
    ],
    faqs: [
      {
        question: "Is Keystone inside your service area?",
        answer: `Yes. Keystone along Gunn Highway and Lake Keystone is a Hillsborough service area. The office is still ${hq}.`,
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
      "Need a licensed Citrus Park handyman for ceiling fans, doors, and TV mounts? The mall area and Gunn Highway are a short drive from our Westchase headquarters. Hablamos español.",
    directAnswer: `Handyman Pros Florida serves Citrus Park with handyman repairs for ceiling fans, doors, and TV mounts near the Town Center mall, Gunn Highway, and Ehrlich Road. The crew leaves the nearby Westchase headquarters. Licensed and insured. Hablamos español. Call ${phone} for a free estimate.`,
    paragraphs: [
      "Citrus Park grew around the Town Center mall, Gunn Highway, and the Veterans Expressway. The houses are mostly later subdivisions and townhomes, with ceiling fans, interior doors, and drywall that take the wear of family use.",
      "A typical stop is a fan that wobbles at an existing box, a bedroom door that will not latch, and a TV mount in a living room. Ehrlich Road and the streets between the mall and Westchase are close enough that a short punch list can share one visit.",
      "Keystone is northwest along Gunn Highway. Carrollwood is east. Town 'N' Country is south. We do not keep a kiosk at the mall. The headquarters is Westchase.",
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
        question: "Do you have a Citrus Park office?",
        answer: `No. Citrus Park is a northwest Hillsborough service area next to Westchase. The only address is ${hq}.`,
      },
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
      "Citrus Park is north, Carrollwood is northeast, and Oldsmar is west across the county line. The crew is the Westchase crew. There is no Town 'N' Country branch.",
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
        question: "Is Town 'N' Country a separate office?",
        answer: `No. Town 'N' Country is a service area. Handyman Pros FL is located at ${hq} in Westchase.`,
      },
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
      "Need a licensed Valrico handyman for window screens, doors, and drywall? Fish Hawk and Sydney are an east Hillsborough drive from our only Westchase headquarters. Hablamos español.",
    directAnswer: `Handyman Pros Florida serves Valrico with handyman repairs for window screens, doors, and drywall in Fish Hawk, Sydney, and along Valrico Road. A recent visit replaced 7 window screens. Crews leave the only Westchase headquarters. Licensed and insured. Hablamos español. Call ${phone} for a free estimate.`,
    paragraphs: [
      "Valrico sits east of Brandon along Valrico Road and State Road 60. Fish Hawk and Sydney are the neighborhoods we drive most. The houses mix later subdivisions with older lots, and the truck still leaves Westchase. There is no Valrico office.",
      "A recent Valrico visit was replacing 7 window screens. The other calls on this side of Hillsborough are usually a door that swells after rain or a drywall patch, not a remodel. We bring the screen spline and the door hardware that fit a handyman stop.",
      "Brandon is the next hub west, Riverview is south, and Plant City is farther east. Those pages are the same licensed crew. We do not treat Valrico as a second storefront.",
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
        question: "Do you have a handyman office in Valrico?",
        answer: `No. The only office is ${hq} in Westchase. Valrico, including Fish Hawk and Sydney, is a service area we drive to.`,
      },
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
    directAnswer: `Handyman Pros Florida serves Apollo Beach with handyman repairs for flooring, doors, and drywall in Symphony Isles, MiraBay, and along US-41. A recent visit was a flooring job. Crews leave the only Westchase headquarters. Licensed and insured. Hablamos español. Call ${phone} for a free estimate.`,
    paragraphs: [
      "Apollo Beach is the bay community south of Riverview, along US-41, with MiraBay and Symphony Isles among the neighborhoods we already route. It is a service area. There is no Apollo Beach shop.",
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
        question: "Is there an Apollo Beach handyman office?",
        answer: `No. Handyman Pros FL has one location at ${hq}. Apollo Beach is a south Hillsborough service area.`,
      },
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
      "Need a licensed Gulfport handyman for ceiling fans, doors, and drywall? The waterfront and 49th Street are a south Pinellas drive from Westchase. Hablamos español.",
    directAnswer: `Handyman Pros Florida serves Gulfport with handyman repairs for ceiling fans, doors, and drywall near the waterfront, 49th Street, and the Pasadena edge. A recent visit was a ceiling fan installation. Crews leave the only Westchase headquarters. Licensed and insured. Hablamos español. Call ${phone} for a free estimate.`,
    paragraphs: [
      "Gulfport is the waterfront city on Boca Ciega Bay, south of St. Petersburg. Stops cluster near the beach, 49th Street, and the Pasadena edge. We do not keep a Gulfport storefront.",
      "A recent Gulfport visit was a ceiling fan installation at an existing fan-rated box. Doors that stick in the salt air and small drywall patches fill out a typical list. New wiring is electrician work, and we stop if the box is not fan-rated.",
      "St. Petersburg is the next hub north. Pinellas Park and Seminole are the usual continuation of a south Pinellas day. One headquarters in Westchase, one phone number.",
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
        question: "Do you have a Gulfport location?",
        answer: `No. Crews leave ${hq}. Gulfport is a Pinellas service area, not a second office.`,
      },
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
