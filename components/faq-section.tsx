import { siteConfig } from "@/lib/site-config";

const homeFaqs = [
  {
    question: "What areas in Tampa do you serve?",
    answer: `We serve Tampa and all surrounding counties including ${siteConfig.counties.join(", ")}. Popular neighborhoods include ${siteConfig.serviceAreas.slice(0, 6).join(", ")}, and more.`,
  },
  {
    question: "Are your handymen licensed and insured?",
    answer: "Yes, all our handymen, painters, and fence contractors are fully licensed and insured in Florida. We carry comprehensive liability insurance for your protection.",
  },
  {
    question: "How much does a handyman cost in Tampa?",
    answer: "Handyman rates in the Tampa area typically range from $50 to $120 per hour. We also offer flat-rate pricing for common jobs. All estimates are free with no obligation.",
  },
  {
    question: "Do you offer same-day handyman service in Hillsborough County?",
    answer: "Yes, we frequently offer same-day service across Hillsborough County when our schedule allows. As a local mobile team based in Tampa, we can often reach Westchase, Carrollwood, and Citrus Park the same day you call.",
  },
  {
    question: "Are you open 24/7?",
    answer: `Yes! Handyman Pros FL is open 24 hours a day, 7 days a week. Call ${siteConfig.phone} anytime — day or night — for handyman service, emergency repairs, or a free estimate.`,
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash, checks, and all major credit cards. Payment is due upon completion of work to your satisfaction.",
  },
];

interface FAQSectionProps {
  faqs?: { question: string; answer: string }[];
  title?: string;
}

export function FAQSection({ faqs = homeFaqs, title = "Frequently Asked Questions" }: FAQSectionProps) {
  return (
    <section className="section-padding relative">
      <div className="container-site">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">{title}</h2>
          <p className="text-lg text-[hsl(var(--muted-foreground))]">
            Common questions about our handyman, painting, and fence services in the Tampa Bay area.
          </p>
        </div>
        <div className="mx-auto max-w-3xl space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="card group" open={i === 0}>
              <summary className="cursor-pointer text-lg font-semibold text-[hsl(var(--foreground))] marker:content-none">
                <span className="flex items-center justify-between">
                  {faq.question}
                  <span className="ml-4 text-[hsl(var(--accent))] transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-[hsl(var(--muted-foreground))]">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export { homeFaqs };
