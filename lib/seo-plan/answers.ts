import type { MarketingPage } from "@/lib/marketing-pages";
import { siteConfig } from "@/lib/site-config";

const baseFaqs = (): { question: string; answer: string }[] => [
  { question: "What does it cost?", answer: `Free estimate — call or text ${siteConfig.phone}.` },
  { question: "Do you offer instant reply?", answer: "Instant reply, 24/7." },
  { question: "Are you insured?", answer: "Yes, our crew is insured." },
];

function answerPage(p: MarketingPage): MarketingPage {
  return {
    ...p,
    hubPath: "/answers",
    hubLabel: "Answers",
    showNap: true,
    schemaCategory: "Article",
  };
}

export const seoPlanAnswerPages: MarketingPage[] = [
  answerPage({
    path: "/answers/fence-handyman-vs-fence-company-tampa",
    h1: "Fence Handyman vs Fence Company in Tampa: Who Should Fix or Install Your Fence?",
    metaTitle: "Fence Handyman vs Fence Company in Tampa",
    metaDescription:
      "Not sure whether a handyman or a fence company is right? See what a fence handyman fixes, what needs a fence company, and how to get a free estimate.",
    keywords: ["fence handyman", "fence company Tampa"],
    intro:
      "A fence handyman repairs and maintains fences: loose boards, leaning posts, sagging gates, latches and panels, plus smaller installs. A fence company handles large full-property installs and permit-heavy jobs. Handyman Pros FL does both small repairs and standard installs in Tampa Bay. Call (656) 205-3185 for an instant reply, 24/7.",
    paragraphs: [
      "Use a fence handyman when one section fails, a gate drags, or a few posts lean after a storm. Use a fence company when you are replacing an entire perimeter, need engineered pool barriers, or HOA submissions require stamped drawings.",
      "Florida wind and rot punish wood first — vinyl and aluminum often fail at posts and rails. Our crew matches board styles on short runs; full-line replacements may need a fence installer.",
    ],
    sections: [
      {
        heading: "Handyman vs fence company — quick guide",
        bullets: [
          "Handyman: board swap, post reset, gate hardware, short sections",
          "Fence company: full property install, commercial jobs, complex permits",
          "Either: free estimate first — call (656) 205-3185",
        ],
        paragraphs: [],
      },
    ],
    faqs: [
      { question: "What does a fence handyman do?", answer: "Repairs boards, posts, gates, and installs standard residential sections." },
      { question: "Can a handyman install a fence in Tampa?", answer: "Yes for many standard installs; large or commercial jobs may need a fence company." },
      { question: "Who repairs a leaning or storm-damaged fence?", answer: "Handyman Pros FL resets posts and replaces damaged sections." },
      {
        question: "Do I need a permit to repair a fence in Hillsborough County?",
        answer: "Rules vary by city and scope — confirm with your local building office before structural replacements.",
      },
      { question: "How do I get a free fence estimate?", answer: "Call (656) 205-3185 with photos — instant reply, 24/7." },
    ],
    childLinks: [
      { href: "/services/fence", label: "Fence services" },
      { href: "/services/fence/fence-repairs-maintenance", label: "Fence repairs" },
      { href: "/answers/how-to-fix-a-sagging-fence-gate", label: "Fix a sagging gate" },
    ],
  }),
  answerPage({
    path: "/answers/how-to-fix-a-sagging-fence-gate",
    h1: "How to Fix a Sagging Fence Gate (and When to Call a Pro)",
    metaTitle: "How to Fix a Sagging Fence Gate in Florida",
    metaDescription:
      "Why gates sag in Florida soil, quick fixes for hinges, braces and posts, and when to call a pro. Instant reply, 24/7.",
    keywords: ["sagging fence gate", "gate repair Tampa"],
    intro:
      "A sagging gate usually means a loose hinge post, a missing diagonal brace or a frame out of square. Tighten hardware, add an anti-sag brace or cable kit, and reset the post if it leans. If the post is rotted or the gate is heavy, call a pro: (656) 205-3185.",
    paragraphs: [
      "Sandy Florida soil lets posts shift. Anti-sag kits and cable braces buy time; rotted posts need replacement.",
    ],
    faqs: baseFaqs(),
    childLinks: [
      { href: "/services/fence/fence-repairs-maintenance", label: "Fence repairs" },
      { href: "/answers/fence-handyman-vs-fence-company-tampa", label: "Fence handyman vs company" },
    ],
  }),
  answerPage({
    path: "/answers/how-to-patch-a-hole-in-drywall-florida",
    h1: "How to Patch a Hole in Drywall (Small, Large and Ceiling)",
    metaTitle: "How to Patch a Hole in Drywall: Step-by-Step",
    metaDescription:
      "Patch small and large drywall holes, plus ceiling patches, with mesh, spackle or a drywall patch. When to call a pro. Instant reply, 24/7.",
    keywords: ["how to patch drywall", "drywall hole repair Florida"],
    intro:
      "For a small hole, apply a mesh patch, cover it with joint compound, let it dry, sand smooth and prime before painting. Larger holes need a cut-in drywall piece screwed to backing. Ceiling patches need extra support. For a clean finish, Handyman Pros FL patches and paints: (656) 205-3185.",
    paragraphs: [
      "Water stains need a dry cavity first. Texture matching takes practice — our crew blends knockdown and orange peel common in Tampa Bay.",
    ],
    faqs: baseFaqs(),
    childLinks: [
      { href: "/services/drywall-repair", label: "Drywall repair service" },
      { href: "/services/wall-patching-and-prep", label: "Wall patching and prep" },
      { href: "/locations/tampa/drywall-repair", label: "Drywall repair Tampa" },
    ],
  }),
  answerPage({
    path: "/answers/how-to-fix-a-stuck-sliding-glass-door-florida",
    h1: "How to Fix a Sliding Glass Door That Is Stuck",
    metaTitle: "How to Fix a Stuck Sliding Glass Door",
    metaDescription:
      "Why sliding glass doors stick in Florida, how to clean and adjust rollers and tracks, and when to call a pro. Instant reply, 24/7.",
    keywords: ["stuck sliding glass door", "sliding door repair Tampa"],
    intro:
      "Most stuck sliding doors have dirty or bent tracks or worn rollers. Clean the track, lubricate with a dry silicone spray, adjust the roller screws and check for a bent frame. If rollers are broken or glass is loose, call a pro for replacement at (656) 205-3185.",
    paragraphs: ["Humidity swells tracks; lanai sand packs the bottom channel — vacuum before lubricating."],
    faqs: baseFaqs(),
    childLinks: [
      { href: "/services/sliding-glass-door-repair", label: "Sliding glass door repair" },
      { href: "/services/door-repair", label: "Door repair" },
    ],
  }),
  answerPage({
    path: "/answers/how-to-repair-a-lanai-screen",
    h1: "How to Repair a Lanai Screen (Patch, Re-Spline or Replace a Panel)",
    metaTitle: "How to Repair a Lanai Screen in Florida",
    metaDescription:
      "Patch holes, re-spline loose screens or replace a lanai screen panel. Tools, steps and when to call a pro. Instant reply, 24/7.",
    keywords: ["lanai screen repair", "pool cage screen repair"],
    intro:
      "Small tears can be patched with a screen repair patch. Sagging screens usually need new spline, and large holes or bent frames need a full panel replaced. Match the screen mesh and spline size. For large pool-cage jobs, call Handyman Pros FL at (656) 205-3185.",
    paragraphs: ["Hurricane season tears panels — replace before storms when frames are still square."],
    faqs: baseFaqs(),
    childLinks: [
      { href: "/services/lanai-screen-repair", label: "Lanai screen repair" },
      { href: "/answers/hurricane-season-handyman", label: "Hurricane season prep" },
    ],
  }),
  answerPage({
    path: "/answers/ceiling-fan-installation-what-affects-the-estimate",
    h1: "Ceiling Fan Installation: What Affects the Estimate (No Surprises)",
    metaTitle: "Ceiling Fan Installation: What Affects Estimates",
    metaDescription:
      "What decides a ceiling fan installation estimate: wiring, brace, height, fan weight. Free estimate and instant reply, 24/7.",
    keywords: ["ceiling fan installation near me", "fan installation estimate"],
    intro:
      "A ceiling fan installation estimate depends on whether wiring and a fan-rated box already exist, ceiling height and type, fan weight and extra items like a remote or new switch. Handyman Pros FL gives a free estimate before work starts. Call (656) 205-3185 for an instant reply, 24/7.",
    paragraphs: [
      "Replacing an existing fan is simpler than adding a fan where only a light existed — we confirm box rating and switch wiring on the call.",
    ],
    faqs: [
      { question: "What affects ceiling fan installation estimates?", answer: "Box type, wiring, ceiling height, fan weight, remotes and switches." },
      { question: "Can you replace a light with a fan?", answer: "Sometimes — if a fan-rated box and support exist or can be added within scope." },
      { question: "Do you install ceiling fan with remote?", answer: "Yes — when compatible with existing wiring." },
      { question: "Who installs ceiling fans near me?", answer: "Handyman Pros FL across Tampa Bay — (656) 205-3185." },
    ],
    childLinks: [
      { href: "/services/handyman/fan-installation", label: "Ceiling fan installation" },
      { href: "/answers/how-handyman-estimates-work", label: "How estimates work" },
    ],
  }),
];
