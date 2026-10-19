import type { ContentSection } from "./content-sections";
import { siteConfig } from "./site-config";

/** /services/painting content (brief 2026-10-18). No painting price until the owner approves one. */
export const paintingSections: ContentSection[] = [
  {
    heading: "Painting jobs we take",
    subsections: [
      {
        heading: "Interior rooms and ceilings",
        paragraphs: [
          "Bedrooms, living rooms, halls and ceilings. We protect floors and furniture, patch nail holes, cut in clean lines and roll even coats.",
        ],
      },
      {
        heading: "Trim, baseboards and doors",
        paragraphs: [
          "Baseboards, door casings, crown and interior doors get sanded, caulked where gaps opened, and painted so the edges stay crisp.",
        ],
      },
      {
        heading: "Exterior trim, soffits and fascia touch-ups",
        paragraphs: [
          "Sun-faded trim, soffits and fascia boards get scraped, primed where bare and repainted. Soft or rotted wood is called out before paint goes on.",
        ],
      },
      {
        heading: "Paint after drywall repair",
        paragraphs: [
          "When we patch a wall, we can paint it too, so the repair disappears instead of waiting for a second trade. A drywall patch starts at $75.",
        ],
      },
    ],
    links: [
      { href: "/services/drywall-repair", label: "Drywall repair" },
      { href: "/services/handyman/exterior-painting", label: "Exterior painting" },
      { href: "/services/door-repair", label: "Door repair" },
    ],
  },
  {
    heading: "What painting costs",
    paragraphs: [
      "We give a price over the phone or after photos, before any work starts. Related starting prices: a drywall patch starts at $75, and small jobs start at $49.",
    ],
  },
  {
    heading: "Painting in Florida humidity",
    subsections: [
      {
        heading: "Mind the dew point",
        paragraphs: [
          "Paint should go on when the surface is more than 5°F above the dew point; when humidity is too high, paint dries improperly. Many Florida painting specs also say not to paint when relative humidity is above 85%.",
        ],
      },
      {
        heading: "Watch the rain",
        paragraphs: ["Exterior latex paint shouldn't go on with rain forecast within 8 hours, or when moisture is forming on the surface."],
      },
      {
        heading: "Mold first, paint second",
        paragraphs: [
          "The Florida Department of Health says painting or caulking over mold will not stop it from growing. The moisture problem gets fixed before the wall gets painted.",
        ],
      },
    ],
    sources: [
      { label: "Benjamin Moore: temperature and dew point", href: "https://www.benjaminmoore.com/en-us/interior-exterior-paints-stains/how-to-advice/exteriors/temperature" },
      { label: "Diamond Vogel: exterior latex application conditions", href: "https://www.diamondvogel.com/architectural/application-conditions-exterior-latex-paint" },
      { label: "Florida exterior painting spec example (PDF)", href: "https://www.eastcentral.edu/wp-content/uploads/sites/20/2014/11/099113-FL-EXTERIOR-PAINTING.pdf" },
      { label: "Florida DOH mold fact sheet (PDF)", href: "https://www.floridahealth.gov/wp-content/uploads/2025/08/emergency-information-factsheet-mold.pdf" },
    ],
  },
  {
    heading: "HOA color approval",
    paragraphs: [
      "Westchase is a good example. The Westchase Community Association requires written approval from its Modifications Committee before exterior painting, even when you repaint the same color, and exterior colors have to come from its approved Sherwin-Williams palette. Many Tampa Bay HOAs have similar rules, so check yours before an exterior repaint.",
    ],
    links: [{ href: "/locations/westchase-fl", label: "Handyman in Westchase, FL" }],
    sources: [
      { label: "WCA Residential Guidelines (PDF)", href: "https://westchasewca.com/wp-content/uploads/2026/01/Westchase-Residential-Guidelines-as-of-8.13.25.pdf" },
    ],
  },
  {
    heading: "Do you need a license to paint in Florida?",
    paragraphs: [
      "Florida's DBPR lists painting among work that doesn't require a state contractor license. Handyman Pros FL is licensed and insured.",
    ],
    sources: [{ label: "Florida DBPR construction FAQs", href: "https://www2.myfloridalicense.com/construction-industry/faqs/" }],
  },
  {
    heading: "How a painting visit works",
    paragraphs: [
      `Call ${siteConfig.phone} or send photos, and we quote the job before any work starts. Our crew comes to your home, protects floors and furniture, paints, and walks the job with you before we leave.`,
    ],
  },
];

export const paintingFaqs = [
  {
    question: "How much does interior painting cost?",
    answer: "We quote by phone or from photos before any work starts.",
  },
  {
    question: "Do you offer free painting estimates?",
    answer: `Yes. Painting estimates are free. Call ${siteConfig.phone} or send photos of the rooms or exterior.`,
  },
  {
    question: "Can you paint when it's humid in Tampa?",
    answer:
      "Yes, with timing. Paint should go on when the surface is more than 5°F above the dew point, and exterior paint shouldn't go on with rain due within 8 hours. We schedule around both.",
  },
  {
    question: "Do I need HOA approval to repaint my house?",
    answer:
      "Often, yes. In Westchase, the Community Association requires written approval for exterior painting, even in the same color, from an approved Sherwin-Williams palette. Check your HOA's rules before an exterior repaint.",
  },
  {
    question: "Do you need a license to paint in Florida?",
    answer: "Florida's DBPR says painting doesn't require a state contractor license. Handyman Pros FL is licensed and insured.",
  },
  {
    question: "Do you offer painting from a Tampa office?",
    answer: `Our team is based at ${siteConfig.address.street} in Westchase and serves all of Tampa Bay.`,
  },
  {
    question: "Can I book painting in Westchase or Carrollwood?",
    answer: `Yes. Westchase and Carrollwood are close to our headquarters. Call ${siteConfig.phone} to book.`,
  },
  {
    question: "¿Hacen trabajos de pintura?",
    answer: `Sí. Hablamos español. Llame al ${siteConfig.phone}.`,
  },
];
