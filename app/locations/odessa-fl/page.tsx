import type { Metadata } from "next";
import { CityBriefPage, H2, H3, L, type CityBrief } from "@/components/city-brief-page";
import { buildMetadata } from "@/lib/seo";

const path = "/locations/odessa-fl";

export const metadata: Metadata = buildMetadata({
  title: "Handyman in Odessa, FL 33556 | Drywall, Painting, TVs",
  description:
    "Licensed & insured Odessa handyman. Our local crew serves Odessa. Free estimates on drywall and furniture assembly. Free estimates. (656) 205-3185.",
  path,
  keywords: ["handyman odessa", "odessa handyman services", "Odessa FL handyman", "handyman 33556", "handyman near Starkey Ranch", "drywall repair odessa", "furniture assembly odessa", "interior painting odessa", "exterior painting odessa", "manitas en Odessa"],
  exactTitle: true,
});

const faqs = [
  { question: "Do you serve Odessa, FL?", answer: "Yes. Our local crew serves Odessa, including Starkey Ranch and the SR 54 corridor. Call (656) 205-3185." },
  { question: "How much does a handyman cost in Odessa?", answer: "Ask about our great deals on small jobs. Same-day visits get a free estimate." },
  { question: "How much does painting cost in Odessa?", answer: "Painting is quoted after a free estimate because room size, wall condition and paint choice change the price. Call (656) 205-3185 to set it up." },
  { question: "Are estimates free?", answer: "Yes. Free estimates on all jobs." },
  { question: "Can you come the same day?", answer: "Often, yes. Odessa is one of the closest Pasco areas our local crew serves. Same-day visits get a free estimate." },
  { question: "Are you licensed and insured?", answer: "Yes, Handyman Pros FL is licensed and insured. If a job needs a permit or a specialist trade, we tell you before work starts." },
  { question: "¿Hablan español?", answer: "Sí. Hablamos español. Llame al (656) 205-3185." },
  { question: "How much does drywall repair cost in Odessa?", answer: "Drywall patches and small jobs get a free estimate. Bigger repairs get a free estimate first. Free estimates on all jobs." },
  { question: "Why does my newer Starkey Ranch home have drywall cracks?", answer: "New framing dries and settles in the first few years, so hairline corner cracks, nail pops and seams over doors are common. Our local crew serves Odessa and patches, textures and primes them ready for paint." },
  { question: "Can you patch the holes after a TV or shelves come down in Odessa?", answer: "Yes. Anchor and mount holes are a common Odessa move-in job. Drywall patches and TV mounting on a new wall both get a free estimate." },
  { question: "My Odessa address is on the Hillsborough side of 33556. Do you still come out?", answer: "Yes. ZIP 33556 crosses Pasco and Hillsborough, and our crew serves both sides. The Hillsborough side, near Gunn Highway and Lake Keystone, is covered on our Keystone page. Call (656) 205-3185." },
];

const grid = [
  ["/services/drywall-repair", "Drywall repair"],
  ["/services/painting", "Painting"],
  ["/services/handyman/interior-painting", "Interior painting"],
  ["/services/handyman/exterior-painting", "Exterior painting"],
  ["/services/furniture-assembly", "Furniture assembly"],
  ["/services/tv-wall-mounting", "TV wall mounting"],
  ["/services/electrical-fixture-installation", "Fans and light fixtures"],
  ["/services/same-day-handyman", "Same-day handyman"],
  ["/services/handyman/roof-repair", "Roof leak patch and tarping"],
  ["/services/gutter-installation", "Gutter installation"],
  ["/services/fence/fence-repairs-maintenance", "Fence repairs"],
  ["/contact", "Request an estimate"],
];

const brief: CityBrief = {
  path,
  city: "Odessa",
  county: "Pasco County",
  postalCodes: ["33556"],
  breadcrumb: "Odessa, FL",
  h1: "Handyman in Odessa, FL",
  opening:
    "Handyman Pros FL is a licensed and insured handyman company whose local crew serves Odessa, handling drywall patches, painting, furniture assembly and TV mounting in Starkey Ranch and along SR 54. Furniture assembly estimates are free. Call (656) 205-3185.",
  priceParagraph:
    "Free estimate, call or text for a price. Drywall patches get a free estimate. Same-day visits get a free estimate. Painting is quoted after a free estimate. Free estimates on all jobs.",
  faqTitle: "Handyman in Odessa FAQ",
  ctaTitle: "Get a free Odessa estimate",
  faqs,
  body: (
    <>
      <H2>Same-day handyman visits in Odessa</H2>
      <p>
        Handyman Pros FL is a professional handyman team working out of 12021 Tuscany Bay Dr, Tampa, FL 33626.
        Westchase&apos;s 33626 ZIP borders Odessa&apos;s 33556, and the drive is about 15 miles, roughly 25 minutes. That
        makes Odessa one of the easiest places for our crew to fit in a same-day visit when the schedule allows. Same-day visits get a
        free estimate. Call in the morning with a short list and there&apos;s a good chance it gets done
        that afternoon.
      </p>

      <H2>Odessa&apos;s most-requested jobs</H2>
      <H3>Drywall repair in Odessa</H3>
      <p>
        Our local crew serves Odessa with drywall repair in Starkey Ranch, along the SR 54 corridor and across ZIP
        33556: settling cracks in newer homes, door-handle holes, tape seams, nail pops and patches after a TV or
        fixture moves. Drywall patches get a free estimate, call or text for a price. Call (656) 205-3185.
      </p>
      <p>
        Newer homes settle, and the first few years bring hairline cracks at corners, holes where a door handle hit the
        wall, and patches left behind when a fixture or TV moves. Our team cuts out the damage, then patches, tapes, textures to match
        and primes so it&apos;s ready for paint. Drywall patches get a free estimate. See{" "}
        <L href="/services/drywall-repair">drywall repair</L>.
      </p>
      <h4 className="mt-4 text-lg font-semibold">Why newer Odessa homes crack</h4>
      <p>
        Pasco-side Odessa is mostly newer, master-planned housing. Starkey Ranch, on SR 54 with Gunn Hwy and Rangeland
        Blvd as its spine, is a master-planned community next to the Jay B. Starkey Wilderness Park. In homes like
        these, new framing dries and settles over the first few years. That movement shows up as hairline cracks at
        wall corners, nail pops in ceilings and walls, and tape seams opening over doors and windows. None of it is a
        sign of a bad house; it is lumber and drywall finding their final shape. Once a crack stops moving, our crew
        opens it, re-tapes or re-screws as needed, then textures and primes so the patch disappears under paint.
      </p>
      <h4 className="mt-4 text-lg font-semibold">Drywall jobs we handle in Odessa, by name</h4>
      <ul className="list-disc space-y-1 pl-6">
        <li>Settling cracks</li>
        <li>Nail pops</li>
        <li>Tape-seam cracks</li>
        <li>Door-handle holes (and a doorstop so it doesn&apos;t happen again)</li>
        <li>TV-mount and anchor holes after a move</li>
        <li>Ceiling patches when a fixture moves</li>
        <li>Garage drywall dings</li>
        <li>Texture matching</li>
        <li>Patch-and-prime ready for paint (painting after a free estimate)</li>
      </ul>
      <h4 className="mt-4 text-lg font-semibold">Move-in and resale punch lists</h4>
      <p>
        Odessa&apos;s 33556 ZIP is home to about 36,000 people and straddles Hillsborough (about 53%) and Pasco (about
        47%). Households here are often families: 36.0% of Odessa CDP households have children. Owners book patches
        before a move-in or before listing a house. We handle the whole list in one visit.
        For the Hillsborough side, see our <L href="/locations/keystone">Keystone</L> page.
      </p>
      <h4 className="mt-4 text-lg font-semibold">After storms</h4>
      <p>
        If a storm leak left a ceiling stain, start with the leak: see &quot;After storms&quot; further down this page.
        For larger water-damaged sections, see our <L href="/services/drywall-repair">drywall repair</L> page.
      </p>
      <p>
        Need more than a patch? See <L href="/services/drywall-repair">drywall repair</L>. Nearby drywall:{" "}
        <L href="/locations/new-port-richey-fl/drywall-repair">New Port Richey</L>.
      </p>
      <H3>Interior and exterior painting in Odessa</H3>
      <p>
        Rooms, accent walls, doors and trim inside, plus exterior touch-ups on doors, trim and small sections. Painting
        is quoted after a free estimate. Many Odessa communities are deed-restricted. Check your HOA&apos;s color and
        exterior-change rules before exterior painting. More on <L href="/services/painting">painting</L>,{" "}
        <L href="/services/handyman/interior-painting">interior painting</L> and{" "}
        <L href="/services/handyman/exterior-painting">exterior painting</L>.
      </p>
      <H3>Furniture assembly in Odessa</H3>
      <p>
        Move-in week in a new Starkey Ranch home usually means a stack of flat-pack boxes: bed frames, dressers, desks,
        bookcases and patio sets. Our crew assembles them, anchors tall pieces to the wall where needed and hauls the boxes to
        your bin. Free estimate, call or text for a price. See <L href="/services/furniture-assembly">furniture assembly</L>.
      </p>
      <H3>TV mounting, fans and fixtures</H3>
      <p>
Expect low prices and a free estimate. See{" "}
        <L href="/services/tv-wall-mounting">TV wall mounting</L> and{" "}
        <L href="/services/electrical-fixture-installation">fixture installation</L>.
      </p>

      <H2>Odessa areas we cover</H2>
      <p>
        Pasco-side Odessa: Starkey Ranch along Starkey Blvd and Gunn Hwy/Rangeland Blvd, the SR 54 corridor, and homes
        near the Suncoast Parkway (SR 589) exit at SR 54. Odessa&apos;s 33556 ZIP crosses two counties. If your Odessa
        address is in Hillsborough, see our <L href="/locations/keystone">Keystone page</L>. Nearby, we also cover{" "}
        <L href="/locations/westchase-fl">Westchase</L>, <L href="/locations/citrus-park-fl">Citrus Park</L>,{" "}
        <L href="/locations/land-o-lakes">Land O&apos; Lakes</L>, <L href="/locations/lutz">Lutz</L> and{" "}
        <L href="/locations/new-port-richey-fl">New Port Richey</L>.
      </p>

      <H2>A little Odessa history</H2>
      <p>
        Odessa was named in the 1880s by Peter Demens, the Russian-born developer of the Orange Belt Railway who also
        founded St. Petersburg. The area was ranches and horse properties before suburban growth arrived along SR 54.
        The Starkey family ranch land, where Jay Starkey began ranching in 1922, is now the Jay B. Starkey Wilderness
        Park and the Starkey Ranch community.
      </p>

      <H2>After storms: leak patch and tarping, gutters, fences</H2>
      <p>
        Hurricane season runs June 1 to November 30. After a storm, our team handles roof{" "}
        <L href="/services/handyman/roof-repair">leak patch and tarping</L>, loose{" "}
        <L href="/services/gutter-installation">gutter sections</L> and damaged{" "}
        <L href="/services/fence/fence-repairs-maintenance">fence panels</L>. We don&apos;t replace roofs.
      </p>

      <H2>Handyman services in Odessa</H2>
      <ul className="grid gap-2 sm:grid-cols-2">
        {grid.map(([href, label]) => (
          <li key={href}>
            <L href={href}>{label}</L>
          </li>
        ))}
      </ul>

      <H2>Licensed and insured</H2>
      <p>
        Handyman Pros FL is licensed and insured. If a job needs a permit or a specialist trade, you&apos;ll hear that
        before work starts. Hablamos español.
      </p>
    </>
  ),
};

export default function OdessaPage() {
  return <CityBriefPage brief={brief} />;
}
