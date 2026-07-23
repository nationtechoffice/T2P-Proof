import { siteConfig } from "@/lib/site-config";

const homeFaqs = [
  {
    question: "What areas in Florida do you serve?",
    answer: `Handyman Pros Florida serves homeowners across the entire state, including ${siteConfig.serviceAreas.slice(0, 5).join(", ")}, and many more cities. Contact us to confirm service in your area.`,
  },
  {
    question: "Are your handymen licensed and insured?",
    answer: "Yes, all our handymen, painters, and fence contractors are fully licensed and insured in Florida. We carry comprehensive liability insurance for your protection.",
  },
  {
    question: "How much does a handyman cost in Florida?",
    answer: "Handyman rates in Florida typically range from $50 to $120 per hour. We also offer flat-rate pricing for common jobs. All estimates are free with no obligation.",
  },
  {
    question: "Do you offer free estimates?",
    answer: "Absolutely! We provide free, no-obligation estimates for all projects. Call us or fill out our contact form to schedule yours today.",
  },
  {
    question: "Can you handle multiple projects in one visit?",
    answer: "Yes! One of the biggest advantages of hiring a handyman is combining multiple small jobs into a single visit. We'll create a prioritized task list during your estimate.",
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
    <section className="section-padding bg-[hsl(var(--muted))]">
      <div className="container-site">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">{title}</h2>
          <p className="text-lg text-[hsl(var(--muted-foreground))]">
            Get answers to common questions about our handyman, painting, and fence services in Florida.
          </p>
        </div>
        <div className="mx-auto max-w-3xl space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="card group" open={i === 0}>
              <summary className="cursor-pointer text-lg font-semibold text-[hsl(var(--foreground))] marker:content-none">
                <span className="flex items-center justify-between">
                  {faq.question}
                  <span className="ml-4 text-[hsl(var(--primary))] transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                </span>
              </summary>
              <p className="mt-4 text-[hsl(var(--muted-foreground))] leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export { homeFaqs };
