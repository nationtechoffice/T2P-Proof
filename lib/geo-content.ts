import { siteConfig } from "./site-config";
import type { Service } from "./site-config";
import type { LocationSilo } from "./location-silos";
import { formatFullAddress } from "./local-seo";

export interface FaqItem {
  question: string;
  answer: string;
}

export const entityStatement = `${siteConfig.shortName} is a licensed and insured mobile handyman provider based in Westchase, Tampa, FL offering 24/7 emergency repairs, drywall patching, painting, and fence contracting for homeowners across Hillsborough, Pinellas, and Pasco counties.`;

export const trustSignals = [
  { label: "Licensing", value: "Licensed and insured for residential handyman, painting, and fence work in Florida." },
  { label: "Pricing model", value: "Free written estimates. Typical Tampa Bay rates $50–$120/hr or flat-rate for common jobs. Price range $$." },
  { label: "Hours", value: "Open 24/7, Monday through Sunday, including holidays." },
  { label: "Service model", value: "Mobile crew based at 12021 Tuscany Bay Dr, Apt 203, Tampa, FL 33626 — tools travel with us." },
  { label: "Phone", value: siteConfig.phone },
  { label: "Primary ZIP", value: siteConfig.primaryZip },
] as const;

export function buildServiceFaqs(service: Service): FaqItem[] {
  const name = service.name.toLowerCase();
  const extras: FaqItem[] = [
    {
      question: `How much does ${name} cost in Tampa?`,
      answer: `${service.name} pricing in Tampa depends on scope, materials, and access. Handyman Pros FL gives a free estimate before work starts. Typical Tampa Bay handyman rates run $50–$120 per hour, with flat rates for common jobs. Call ${siteConfig.phone} for a same-day quote.`,
    },
    {
      question: `Do you offer same-day ${name} in Westchase?`,
      answer: `Yes. Because we are based in Westchase (ZIP ${siteConfig.primaryZip}), same-day ${name} is often available across Westchase, Carrollwood, Citrus Park, and greater Tampa when the schedule allows. We are open 24/7 at ${siteConfig.phone}.`,
    },
    {
      question: `Is Handyman Pros FL licensed for ${name} in Tampa, FL?`,
      answer: `Yes. Handyman Pros FL is a licensed and insured Tampa Bay contractor. We perform ${name} for homeowners in Tampa, Westchase, Carrollwood, and surrounding counties, and we carry liability coverage on every visit.`,
    },
  ];

  const seen = new Set(service.faqs.map((f) => f.question.toLowerCase()));
  return [...service.faqs, ...extras.filter((f) => !seen.has(f.question.toLowerCase()))];
}

export function buildLocationFaqs(location: LocationSilo): FaqItem[] {
  return [
    {
      question: `Do you offer same-day fence installation in ${location.city}?`,
      answer: `Same-day fence repairs and many small installs are often available in ${location.displayName} when materials are on the truck. Full fence builds are scheduled after a free estimate. Call ${siteConfig.phone} — Handyman Pros FL is open 24/7.`,
    },
    {
      question: `How much does a drywall repair cost in ${location.city}?`,
      answer: `Small drywall patches in ${location.city} are usually flat-rate; larger holes, water damage, or ceiling texture matching are quoted on site. Estimates are free. Call ${siteConfig.phone} for ${location.city} drywall pricing.`,
    },
    {
      question: `Is there a 24/7 emergency handyman in ${location.city}, FL?`,
      answer: `Yes. Handyman Pros FL serves ${location.displayName} around the clock. Call ${siteConfig.phone} for emergency repairs, fixture failures, storm damage, and urgent home fixes.`,
    },
    {
      question: `What handyman services do you provide in ${location.displayName}?`,
      answer: `In ${location.city} we handle ${location.services.slice(0, 4).join(", ").toLowerCase()}, plus painting, fencing, and 60+ related trades. We are licensed, insured, and based nearby in Westchase, Tampa.`,
    },
    {
      question: `Where is Handyman Pros FL located relative to ${location.city}?`,
      answer: `Our shop address is ${formatFullAddress()} in Westchase. We dispatch a mobile crew to ${location.displayName} daily for repairs, installs, and punch-list work.`,
    },
  ];
}

export const homeVoiceFaqs: FaqItem[] = [
  {
    question: "Who is the best 24/7 handyman near me in Tampa, FL?",
    answer: `Handyman Pros FL is a licensed and insured mobile handyman based in Westchase, Tampa (ZIP 33626). We offer 24/7 emergency repairs, drywall, painting, and fence work across Tampa Bay. Call ${siteConfig.phone} for a free estimate.`,
  },
  {
    question: "How much does a drywall repair cost in Tampa?",
    answer:
      "Small drywall patch jobs in Tampa often start as flat-rate repairs. Larger holes, water damage, or ceiling texture matching are quoted after we see the wall. Estimates are free with no obligation.",
  },
  {
    question: "Do you offer same-day fence installation in Westchase?",
    answer:
      "Same-day fence repairs and many small gate or board replacements are frequently available in Westchase. Full fence installation is scheduled after a free on-site estimate. Call anytime — we are open 24/7.",
  },
  {
    question: "Are you a licensed handyman in Tampa and Hillsborough County?",
    answer:
      "Yes. Handyman Pros FL is licensed and insured for residential handyman, painting, and fence contracting in Tampa, Hillsborough County, and surrounding Tampa Bay counties.",
  },
  {
    question: "What areas do you serve besides Westchase?",
    answer: `We serve Tampa, Westchase, Carrollwood, Citrus Park, Town 'n' Country, Temple Terrace, Lutz, Wesley Chapel, Riverview, Valrico, Seffner, Plant City, Oldsmar, South Tampa, and nearby cities across ${siteConfig.counties.join(", ")}.`,
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash, checks, and all major credit cards. Payment is due when the job is completed to your satisfaction. Price range: $$.",
  },
  {
    question: "Where is Handyman Pros FL located?",
    answer: `We are based at ${formatFullAddress()} in the Westchase area of Tampa. We are a mobile service — the truck comes to you, 24/7.`,
  },
];
