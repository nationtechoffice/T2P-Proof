import type { Metadata } from "next";
import { CityBriefPage, H2, H3, L, APPROVED_OFFERS, type CityBrief } from "@/components/city-brief-page";
import { buildMetadata } from "@/lib/seo";

const path = "/locations/zephyrhills-fl";

export const metadata: Metadata = buildMetadata({
  title: "Handyman in Zephyrhills, FL | Small Jobs from $49",
  description:
    "Licensed & insured handyman for Zephyrhills (33540–33542). Small jobs from $49, TV mounting from $89. Free estimates on all jobs. Call (656) 205-3185.",
  path,
  keywords: ["handyman zephyrhills", "handyman zephyrhills fl", "Zephyrhills FL handyman", "handyman near Zephyrhills", "handyman 33540", "handyman 33541", "handyman 33542", "handyman Pasco County", "manitas en Zephyrhills"],
  exactTitle: true,
});

const faqs = [
  { question: "Do you serve Zephyrhills?", answer: "Yes. Handyman Pros FL books Zephyrhills jobs on set east-Pasco days, coming from our Tampa base in Westchase. Call (656) 205-3185 to get on the next Zephyrhills day." },
  { question: "How much does a handyman cost in Zephyrhills?", answer: "Small jobs start at $49, furniture assembly at $65, a drywall patch at $75, a ceiling fan or light fixture at $79, TV mounting at $89, and tile repair at $199. A same-day service call starts at $99." },
  { question: "Are estimates free?", answer: "Yes. Free estimates on all jobs. Describe the job on the phone or the form and you'll get a price before any work starts." },
  { question: "Can you come the same day in Zephyrhills?", answer: "Sometimes. Zephyrhills is about an hour from our Tampa base, so same-day depends on that day's schedule. A same-day service call starts at $99." },
  { question: "Can you help after a storm?", answer: "Yes, for roof leak patch and tarping, loose gutter sections and damaged fence panels. We don't replace roofs." },
  { question: "Are you licensed and insured?", answer: "Yes, Handyman Pros FL is licensed and insured. If a job needs a permit or a specialist trade, we tell you before work starts." },
  { question: "¿Hablan español?", answer: "Sí. Hablamos español. Llame al (656) 205-3185." },
];

const priceSentences = [
  "Small jobs like shelves and curtain rods start at $49.",
  "Furniture assembly starts at $65.",
  "A drywall patch starts at $75.",
  "A ceiling fan or light fixture install starts at $79.",
  "TV mounting starts at $89.",
  "A same-day service call starts at $99.",
  "Tile repair starts at $199.",
];

const grid = [
  ["/services/tv-wall-mounting", "TV wall mounting"],
  ["/services/drywall-repair", "Drywall repair"],
  ["/services/electrical-fixture-installation", "Light fixture installation"],
  ["/services/handyman/fan-installation", "Ceiling fan installation"],
  ["/services/furniture-assembly", "Furniture assembly"],
  ["/services/door-repair", "Door repair"],
  ["/services/plumbing-fixture-repair", "Faucet and plumbing fixture repair"],
  ["/services/tile-installation", "Tile installation and repair"],
  ["/services/same-day-handyman", "Same-day handyman"],
  ["/services/handyman/roof-repair", "Roof leak patch and tarping"],
  ["/services/gutter-installation", "Gutter installation"],
  ["/services/painting", "Interior and exterior painting"],
];

const brief: CityBrief = {
  path,
  city: "Zephyrhills",
  county: "Pasco County",
  postalCodes: ["33540", "33541", "33542"],
  breadcrumb: "Zephyrhills, FL",
  h1: "Handyman in Zephyrhills, FL",
  opening:
    "Handyman Pros FL is a licensed and insured handyman company from Tampa that books Zephyrhills jobs into set east-Pasco days for repairs like TV mounting, drywall patches, ceiling fans and furniture assembly. Small jobs start at $49, and estimates are free. Call (656) 205-3185. Our local crew serves Zephyrhills.",
  priceParagraph: `${priceSentences.join(" ")} Free estimates on all jobs.`,
  faqTitle: "Handyman in Zephyrhills FAQ",
  ctaTitle: "Get a free Zephyrhills estimate",
  faqs,
  body: (
    <>
      <H2>How Zephyrhills booking works</H2>
      <p>
        Handyman Pros FL is a professional handyman team based at 12021 Tuscany Bay Dr in Westchase, Tampa.
        Zephyrhills City Hall is about 36 miles from there, roughly an hour by road. Rather than charge you for a
        separate long trip, our crew groups Zephyrhills and east-Pasco jobs onto set days. When you call, you get the next
        Zephyrhills day and a price for the job before anything starts.
      </p>
      <p>
        Same-day is possible when the schedule allows, but we won&apos;t promise it from an hour away. A same-day service
        call starts at $99. If you have a short list, such as a fan, a shelf and a sticking door, put it all on one
        visit. That is the most efficient way to book from out here.
      </p>

      <H2>Zephyrhills handyman starting prices</H2>
      <ul className="list-disc space-y-1 pl-6">
        {priceSentences.map((sentence, i) => (
          <li key={sentence}>
            <L href={APPROVED_OFFERS[i].href}>{sentence}</L>
          </li>
        ))}
        <li>
          <L href="/services/painting">Painting is quoted after a free estimate.</L>
        </li>
      </ul>
      <p>Final price is confirmed on the phone once you describe the job.</p>

      <H2>Common repairs in Zephyrhills homes</H2>
      <H3>Easier-living fixes</H3>
      <p>
        Zephyrhills has a median age of 48.8, and 29.9% of residents are 65 or older (2020 census). Many of the calls
        here are practical upgrades: brighter light fixtures in a dim hallway, a ceiling fan for a back bedroom, a TV
        mounted at a comfortable viewing height, a new dresser or bed frame assembled, or a door rehung so it closes
        without a shove. Small jobs start at $49, and a ceiling fan or light fixture install starts at $79.
      </p>
      <H3>Older homes near downtown</H3>
      <p>
        The city was incorporated in 1914, and the Zephyrhills Historic District has been on the National Register of
        Historic Places since 2001. In older homes near the historic downtown, the usual list is drywall patches over
        old cracks and anchors, doors that have shifted out of square, and fixture swaps where the old hardware has
        worn out. A drywall patch starts at $75.
      </p>
      <H3>Storm season</H3>
      <p>
        Atlantic hurricane season runs June 1 to November 30. After a storm, our team can handle roof{" "}
        <L href="/services/handyman/roof-repair">leak patch and tarping</L>, loose{" "}
        <L href="/services/gutter-installation">gutter sections</L> and damaged{" "}
        <L href="/services/fence/fence-repairs-maintenance">fence panels</L>. We don&apos;t replace roofs.
      </p>

      <H2>Zephyrhills areas we cover</H2>
      <p>
        The City of Zephyrhills, ZIP codes 33540, 33541 and 33542, along Gall Blvd (US 301) and Fifth Ave (SR 54),
        and the neighborhoods off Eiland Blvd and Chancey Rd (CR 535). Heading back toward Tampa, our crew also
        work in <L href="/locations/wesley-chapel">Wesley Chapel</L>,{" "}
        <L href="/locations/land-o-lakes">Land O&apos; Lakes</L>, <L href="/locations/plant-city">Plant City</L> and{" "}
        <L href="/locations/lutz">Lutz</L>.
      </p>

      <H2>Handyman services in Zephyrhills</H2>
      <ul className="grid gap-2 sm:grid-cols-2">
        {grid.map(([href, label]) => (
          <li key={href}>
            <L href={href}>{label}</L>
          </li>
        ))}
      </ul>

      <H2>Licensed, insured and local to Tampa Bay</H2>
      <p>
        Handyman Pros FL is licensed and insured. If a job needs a permit or a specialist trade, you&apos;ll hear that
        before work starts. Hablamos español. Ready to book? <L href="/contact">Send the job details</L>.
      </p>
    </>
  ),
};

export default function ZephyrhillsPage() {
  return <CityBriefPage brief={brief} />;
}
