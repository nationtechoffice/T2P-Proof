import type { BriefServicePage } from "@/lib/brief-service-pages";
import { FREE_ESTIMATE_PRICE } from "@/lib/brief-service-areas";

function planBrief(p: Omit<BriefServicePage, "atGlance"> & { typicalJob?: string; whoFor?: string }): BriefServicePage {
  return {
    ...p,
    atGlance: {
      price: FREE_ESTIMATE_PRICE,
      typicalJob: p.typicalJob ?? "Most jobs quoted after photos — often one visit",
      whoFor: p.whoFor ?? "Tampa Bay homeowners and landlords",
      insured: "Yes, insured crew",
    },
  };
}

export const seoPlanBriefServices: BriefServicePage[] = [
  planBrief({
    slug: "professional-handyman-services",
    name: "Professional Handyman Services",
    schemaName: "Professional Handyman Services",
    h1: "Professional Handyman Services in Tampa Bay",
    metaTitle: "Professional Handyman Services Tampa Bay | Insured",
    metaDescription:
      "Professional, insured handyman services across Tampa Bay: drywall, doors, fences, fixtures, TV mounting and more. Free estimate. Instant reply, 24/7.",
    keywords: ["professional handyman services", "handyman professional services Tampa"],
    intro:
      "Professional handyman services means an insured crew that fixes and installs the jobs between a DIY project and a contractor build: drywall, doors, fixtures, fences, painting and TV mounting.",
    bodyParagraphs: [
      "Handyman Pros FL serves Tampa Bay with clear free estimates, photo documentation, and cleanup after every visit. You get our insured crew with stocked vans from Westchase headquarters.",
      "Professional scope includes punch lists before listing, rental turns, and storm touch-ups. When work crosses into licensed trades or permitted remodels, we say so before booking.",
      "Spanish-speaking estimates are available. Instant reply, 24/7 at (656) 205-3185.",
    ],
    steps: ["Call or text with photos", "Free estimate and scope confirmation", "Scheduled or same-day visit", "Walkthrough and cleanup"],
    materials: ["Standard fasteners and consumables included; specialty items owner-approved"],
    safety: ["Insured crew; ladder and PPE on every job"],
    faqs: [
      { question: "What are professional handyman services?", answer: "Insured crew work for repairs and installs between DIY and full contractor builds." },
      { question: "Is your handyman crew insured?", answer: "Yes — our crew is insured." },
      { question: "What jobs do you not take?", answer: "Major electrical, plumbing repipes, structural work, and permitted additions need licensed trades." },
      { question: "How do I book a professional handyman in Tampa?", answer: "Call (656) 205-3185 — instant reply, 24/7." },
    ],
    internalLinks: [
      { href: "/tampa-bay-handyman-directory", label: "Service directory" },
      { href: "/answers/handyman-vs-contractor-florida", label: "Handyman vs contractor" },
      { href: "/reviews", label: "Reviews" },
    ],
  }),
  planBrief({
    slug: "wall-patching-and-prep",
    name: "Wall Patching and Prep",
    h1: "Wall Patching and Prep Services in Tampa Bay",
    metaTitle: "Wall Patching and Prep Services | Handyman Pros FL",
    metaDescription:
      "Wall hole patching, crack repair and surface prep ready for paint. Insured Tampa Bay crew, free estimate, instant reply, 24/7.",
    keywords: ["wall patching and prep services", "wall repair Tampa"],
    intro:
      "Wall patching and prep means filling holes, cracks and dents, sanding smooth and priming so paint looks new.",
    bodyParagraphs: [
      "TV mount removals, door knob impacts, and settling cracks all need proper prep before paint. We mesh small holes, skim larger areas, and prime so finish paint hides the repair.",
      "Pair with our painting crew or leave surfaces ready for your painter. Humidity in Tampa Bay means we allow dry time between coats.",
    ],
    steps: ["Assess damage", "Fill and tape", "Skim and sand", "Prime"],
    materials: ["Joint compound", "Mesh patches", "Primer"],
    safety: ["Dust control and floor protection"],
    faqs: [
      { question: "What is wall patching and prep?", answer: "Fill, sand, and prime walls so paint finishes look uniform." },
      { question: "Can you patch holes left by a TV mount?", answer: "Yes — including anchor holes and cable openings." },
      { question: "Do you prime and paint after patching?", answer: "We can prime and paint or prep for your painter." },
      { question: "How long does it take?", answer: "Depends on patch size and dry time — scoped on the free estimate." },
    ],
    internalLinks: [
      { href: "/services/drywall-repair", label: "Drywall repair" },
      { href: "/services/painting", label: "Painting" },
      { href: "/locations/tampa/drywall-repair", label: "Drywall repair Tampa" },
    ],
    gallerySlug: "drywall-repair",
  }),
  planBrief({
    slug: "home-repair-services",
    name: "Home Repair Services",
    h1: "Home Repair Services in Tampa Bay",
    metaTitle: "Home Repair Services Tampa Bay | Handyman Pros FL",
    metaDescription:
      "Home repair services across Tampa Bay: drywall, doors, fixtures, trim, fences and small exterior fixes. Free estimate. Instant reply, 24/7.",
    keywords: ["home repair services near me", "home repair Tampa Bay"],
    intro:
      "Home repair services cover the fixes homes need every year: drywall holes, sticking doors, loose trim, leaking fixtures, broken fences and small exterior damage.",
    bodyParagraphs: [
      "Bundle multiple small repairs into one visit — common in Temple Terrace, Clearwater, Lutz and Valrico. Seasonal Florida maintenance includes pre-storm hardware checks and post-storm fence and screen touch-ups.",
    ],
    steps: ["List repairs on the first call", "Free estimate", "Single or multi-day visit as scoped"],
    materials: ["Consumables included; owner supplies specialty fixtures if preferred"],
    safety: ["Insured crew"],
    faqs: [
      { question: "What home repairs do you handle?", answer: "Drywall, doors, fixtures, fences, trim, screens, and exterior touch-ups within handyman scope." },
      { question: "Do you do small repairs?", answer: "Yes — no job too small when bundled efficiently." },
      { question: "What is not a handyman job?", answer: "Repipes, panel work, structural changes, and major remodels need licensed trades." },
      { question: "Can I book more than one repair in a visit?", answer: "Yes — mention the full list on the estimate call." },
    ],
    internalLinks: [
      { href: "/services/handyman/home-maintenance-repairs", label: "Home maintenance repairs" },
      { href: "/answers/what-does-a-handyman-do", label: "What does a handyman do?" },
      { href: "/locations/clearwater/plumbing-fixture-repair-and-home-repair", label: "Clearwater home repair" },
    ],
  }),
  planBrief({
    slug: "siding-repair",
    name: "Siding Repair",
    h1: "Siding Repair in Tampa Bay: Damaged, Rotted and Water-Stained Panels",
    metaTitle: "Siding Repair Tampa Bay | Handyman Pros FL",
    metaDescription:
      "Siding repair for cracked, rotted or water-damaged panels and trim across Tampa Bay. Insured crew, free estimate, instant reply, 24/7.",
    keywords: ["siding repair Tampa", "rotten siding repair"],
    intro:
      "Siding repair fixes cracked panels, loose boards, water damage and rot before moisture gets into the walls.",
    bodyParagraphs: [
      "We repair vinyl, wood and fiber-cement sections and nearby trim. Full elevation replacements may need a siding contractor — we flag that on the estimate.",
      "City-specific help: Temple Terrace, Westchase, Lutz, Valrico, Odessa and Plant City child pages link from our directory.",
    ],
    steps: ["Inspect damage", "Remove rotted material", "Install patch panels", "Caulk and paint"],
    materials: ["Matching panels when available", "Flashing and caulk"],
    safety: ["Ladder safety on two-story sections"],
    faqs: [
      { question: "Can you repair rotted siding?", answer: "Localized rot yes; widespread failure may need a siding contractor." },
      { question: "Do you repair vinyl siding?", answer: "Yes — panel swaps and trim." },
      { question: "What causes siding water damage in Florida?", answer: "Gutters, irrigation, and missing caulk — fix the source and the panel." },
      { question: "Do you replace whole siding?", answer: "Full re-sides are usually contractor scope; we handle sections and trim." },
    ],
    internalLinks: [
      { href: "/locations/lutz/gutter-and-siding-repair", label: "Lutz gutter and siding" },
      { href: "/services/wood-rot-repair", label: "Wood rot repair" },
      { href: "/services/stucco-crack-repair", label: "Stucco crack repair" },
    ],
  }),
  planBrief({
    slug: "gutter-repair",
    name: "Gutter Repair",
    h1: "Gutter and Downspout Repair in Tampa Bay",
    metaTitle: "Gutter Repair Tampa Bay | Handyman Pros FL",
    metaDescription:
      "Gutter and downspout repair across Tampa Bay: sagging, leaking and clogged gutters. Insured crew, free estimate, instant reply, 24/7.",
    keywords: ["gutter repair Tampa", "downspout repair Lutz"],
    intro:
      "Gutter repair reattaches sagging runs, reseals leaking seams, replaces downspouts and clears blockages so rain stays away from your walls.",
    bodyParagraphs: [
      "Florida downpours expose loose hangers and rotted fascia. We resecure gutters, replace short sections, and fix downspouts — full new gutter systems may pair with our gutter installation service.",
      "Pre-storm checks: verify outlets are clear before hurricane season.",
    ],
    steps: ["Inspect run and fascia", "Clean debris", "Reseal or replace sections", "Test flow"],
    materials: ["Hangers", "Sealant", "Downspout parts"],
    safety: ["Two-person ladder work on two-story homes"],
    faqs: [
      { question: "Can you repair a sagging gutter?", answer: "Yes — new hangers and fascia repair when wood is sound or patched." },
      { question: "Do you fix leaking downspouts?", answer: "Yes — reattach, replace sections, and extend away from foundation." },
      { question: "How often should gutters be cleaned in Florida?", answer: "Often twice yearly — before and after storm season — depending on tree cover." },
      { question: "Do you install new gutters?", answer: "See gutter installation for full runs; we handle repairs and partial replacements." },
    ],
    internalLinks: [
      { href: "/services/gutter-installation", label: "Gutter installation" },
      { href: "/locations/lutz/gutter-and-siding-repair", label: "Lutz gutters" },
      { href: "/answers/hurricane-season-handyman", label: "Hurricane season prep" },
    ],
    gallerySlug: "gutter-installation",
  }),
  planBrief({
    slug: "wood-rot-repair",
    name: "Wood Rot Repair",
    h1: "Wood Rot Repair in Tampa Bay: Siding, Trim, Fascia and Door Frames",
    metaTitle: "Wood Rot Repair Tampa Bay | Handyman Pros FL",
    metaDescription:
      "Wood rot repair for siding, trim, fascia, door frames and decks across Tampa Bay. Insured crew, free estimate, instant reply, 24/7.",
    keywords: ["wood rot repair Tampa", "rotten siding repair"],
    intro: "Wood rot repair cuts out soft, damaged wood and rebuilds it so moisture stops spreading.",
    bodyParagraphs: [
      "Probe with a screwdriver — soft wood must go. We treat edges, splice new material, prime and paint. Fix irrigation and gutters to prevent repeat damage.",
      "Plant City and Lutz see frequent rot at door frames and porch boards — see our city child pages.",
    ],
    steps: ["Remove rot", "Treat and fill or splice", "Prime and paint"],
    materials: ["Wood filler", "Epoxy consolidant", "Primers"],
    safety: ["Mask and ventilate when cutting treated wood"],
    faqs: [
      { question: "How do I know if wood is rotted?", answer: "Soft when probed, paint bubbling, or discoloration — photos help on the estimate call." },
      { question: "Can you fix rot on a door frame?", answer: "Yes — localized frame rebuilds within handyman scope." },
      { question: "Can rotted siding be repaired?", answer: "Sections yes; full elevations may need a siding contractor." },
      { question: "How do I prevent wood rot in Florida?", answer: "Paint, caulk, flashing, and keep gutters flowing." },
    ],
    internalLinks: [
      { href: "/locations/plant-city/wood-rot-and-siding-repair", label: "Plant City rot repair" },
      { href: "/services/soffit-fascia-repair", label: "Soffit and fascia" },
      { href: "/services/deck-repair", label: "Deck repair" },
    ],
  }),
  planBrief({
    slug: "exterior-light-fixture-repair",
    name: "Exterior Light Fixture Repair",
    schemaName: "Exterior light fixture repair",
    h1: "Wrought Iron and Exterior Light Fixture Repair in Hillsborough County",
    metaTitle: "Exterior Light Repair, Wrought Iron | Hillsborough",
    metaDescription:
      "Repair and replacement of wrought-iron and exterior light fixtures for homes in Hillsborough County. Insured crew, free estimate, instant reply, 24/7.",
    keywords: ["wrought iron light repair hillsborough county", "exterior light repair Tampa"],
    intro:
      "We repair and replace wrought-iron and other exterior light fixtures: loose mounts, rusted brackets, broken glass, failed sockets and photocell swaps.",
    bodyParagraphs: [
      "Florida moisture rusts mounting plates on block and stucco homes. We stabilize boxes, swap fixtures owner-supplies or crew-selected, and refer electricians for new wiring runs.",
    ],
    steps: ["Turn off power", "Remove fixture", "Repair mount or swap unit", "Test and seal"],
    materials: ["Silicone", "Stainless screws", "Fixture gaskets"],
    safety: ["Fixture-level only — no new circuits"],
    faqs: [
      { question: "Can you repair a rusted wrought-iron light?", answer: "Yes — bracket repair, rust treatment, and fixture swap at existing box." },
      { question: "Do you replace exterior light fixtures?", answer: "Yes — like-for-like or owner-supplied fixtures." },
      { question: "Do you rewire?", answer: "No — new wiring needs a licensed electrician." },
      { question: "Which areas do you serve?", answer: "Hillsborough County and greater Tampa Bay." },
    ],
    internalLinks: [
      { href: "/services/electrical-fixture-installation", label: "Light fixture installation" },
      { href: "/locations/hillsborough-county", label: "Hillsborough County hub" },
    ],
  }),
  planBrief({
    slug: "emergency-and-open-now-handyman",
    name: "Emergency Handyman",
    h1: "Emergency Handyman in Tampa Bay: Instant Reply, 24/7",
    metaTitle: "Emergency Handyman Tampa Bay | Instant Reply 24/7",
    metaDescription:
      "Need a handyman now? Call or text Handyman Pros FL for an instant reply, 24/7. Emergency repairs and same-day visits across Tampa Bay.",
    keywords: ["handyman near me open now", "24/7 handyman Tampa"],
    intro:
      "Handyman Pros FL gives an instant reply, 24/7. Call (656) 205-3185 and we schedule the soonest visit for urgent repairs.",
    bodyParagraphs: [
      "Urgent scope includes leaking fixtures, broken door locks, storm-damaged fence sections, and loose railings — not gas leaks, major electrical, or structural roof work.",
      "Every emergency visit still starts with a free estimate from our insured crew.",
    ],
    steps: ["Call with photos", "Confirm urgency and scope", "Dispatch nearest crew", "Complete agreed repairs"],
    materials: ["Stocked van consumables"],
    safety: ["Refer life-safety issues to appropriate emergency services and licensed trades"],
    faqs: [
      { question: "Is Handyman Pros FL open now?", answer: "Instant reply, 24/7 — call (656) 205-3185 anytime." },
      { question: "Do you take emergency calls?", answer: "Yes — for handyman-scope urgent repairs." },
      { question: "How fast can you get to my house?", answer: "Depends on routing — same-day when possible." },
      { question: "What do you do for storm damage?", answer: "Fence, screen, drywall, and door repairs after the storm — not major tree or roof work." },
    ],
    internalLinks: [
      { href: "/services/same-day-handyman", label: "Same-day handyman" },
      { href: "/answers/same-day-handyman-tampa-bay", label: "Same-day FAQ" },
      { href: "/answers/hurricane-season-handyman", label: "Hurricane season help" },
    ],
  }),
  planBrief({
    slug: "senior-home-safety-handyman",
    name: "Senior Home Safety Handyman",
    h1: "Senior Home Safety and Aging-in-Place Handyman in Tampa Bay",
    metaTitle: "Senior Home Safety Handyman Tampa Bay",
    metaDescription:
      "Grab bars, handrails, lighting, door and trip-hazard fixes for seniors and caregivers across Tampa Bay. Free estimate. Instant reply, 24/7.",
    keywords: ["handyman for seniors near me", "senior handyman services"],
    intro:
      "Senior home safety handyman work includes grab bars, handrails, brighter lighting, door and threshold fixes and removing trip hazards.",
    bodyParagraphs: [
      "We work with families and caregivers across Tampa Bay — scheduling around appointments and explaining scope in plain language.",
      "Medical equipment installation and major renovations are outside our scope.",
    ],
    steps: ["Home walkthrough or photos", "Free estimate", "Install safety hardware", "Test with family"],
    materials: ["Grab bars", "Handrails", "LED bulbs", "Threshold ramps where scoped"],
    safety: ["Secure mounting into studs or rated anchors"],
    faqs: [
      { question: "Do you install grab bars in showers?", answer: "Yes — stud-mounted or rated anchors in tile and fiberglass." },
      { question: "Can you add handrails?", answer: "Yes — interior and exterior rails." },
      { question: "Do you work with caregivers?", answer: "Yes — we coordinate timing and access with family." },
      { question: "How fast can you schedule?", answer: "Instant reply, 24/7 — often within a few days, sooner when routing allows." },
    ],
    internalLinks: [
      { href: "/services/grab-bar-installation", label: "Grab bar installation" },
      { href: "/es/barras-de-apoyo", label: "Barras de apoyo (español)" },
    ],
  }),
];
