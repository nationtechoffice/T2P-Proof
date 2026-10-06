import { allServices } from "./services";
import { siteConfig } from "./site-config";

/** Direct-response UVP used in titles, H1s, schema, and CTAs. */
export const instantEstimate = {
  titleSuffix: "Same-Day Help",
  heroHeadline: "Instant Estimates Over the Phone – Speak to a Local Expert Right Now!",
  heroSubhead:
    "Need a licensed Tampa handyman today? Call now for an instant phone estimate — TV mounting, drywall, and home repairs with fast 24/7 response across Hillsborough & Pinellas.",
  ctaLabel: "Get Instant Phone Estimate",
  ctaCallNow: `Call Now: ${siteConfig.phone}`,
  stickyLabel: `Instant Phone Estimate: ${siteConfig.phone}`,
  formHeading: "Instant Phone Estimate",
  formHelp: `Prefer to talk? Call ${siteConfig.phone} now for an instant phone estimate — 24/7 dispatch from Westchase, Tampa.`,
  trust: ["24/7 Response", "Licensed & Insured", "Local Guarantee", "Same-Day Service"] as const,
  schemaDescription:
    "Tampa Bay handyman offering instant phone estimates and same-day home repair. Hablamos español. Call now to speak with a local expert. 24/7 dispatch from Westchase headquarters serving Hillsborough and Pinellas.",
};

const PHONE = siteConfig.phone;

/** Auditor-exact titles. These win over the 40–60 aim. */
const exactTitles: Record<string, string> = {
  "TV Wall Mounting": "TV Wall Mounting Tampa | Instalación de TV",
  "Drywall Repair": "Drywall Repair Tampa FL | Yeso y Parches",
  "Fan Installation": "Fan Installation Tampa FL | Ventiladores",
  "Same-Day Handyman": "Same-Day Handyman Tampa | Westchase Crew",
  "Tile Installation": "Tile Installation Tampa | Bath & Kitchen",
  "Furniture Assembly": "Furniture Assembly Tampa | Montaje de Muebles",
  "Flooring Installation": "Flooring Installation Tampa | LVP & Vinyl",
  "Gutter Installation": "Gutter Installation Tampa | Repair & Clean",
  "Home Services": "Servicios de Handyman Tampa | Home Repairs",
  "Door Repair": "Door Repair Tampa | Reparación de Puertas",
  "Electrical Fixture Installation": "Electrical Fixtures Tampa | Electricidad Menor",
  "Plumbing Fixture Repair": "Plumbing Fixtures Tampa | Plomería Menor",
  "Fence Handyman": "Fence Handyman Tampa FL | Fencing Handyman",
};

const exactMetas: Record<string, string> = {
  "TV Wall Mounting":
    "Instalación de TV in Tampa by licensed & insured pros. Level mounts, clean cable runs, same-day Westchase dispatch. Call (656) 205-3185 today.",
  "Drywall Repair":
    "Drywall y yeso repair in Tampa. Licensed & insured Handyman Pros FL patches holes, blends texture and preps walls for paint. Call (656) 205-3185.",
  "Fan Installation":
    "Instalación de ventiladores in Tampa Bay. Licensed & insured Handyman Pros FL mounts, balances and connects ceiling and bath fans. Call (656) 205-3185.",
  "Same-Day Handyman":
    "Need a same-day handyman in Tampa or Westchase? Licensed & insured Handyman Pros Fl answers 24/7 for estimates. Fastest near Westchase — (656) 205-3185.",
  "Tile Installation":
    "Tile installation in Tampa — kitchen backsplashes, bath walls & floor-tile patches. Licensed Handyman Pros Fl. Instant estimate: (656) 205-3185.",
  "Furniture Assembly":
    "Montaje de muebles in Tampa for IKEA, Wayfair and Amazon sets. Licensed & insured Handyman Pros FL builds and rearranges rooms. Call (656) 205-3185.",
  "Flooring Installation":
    "Flooring installation in Tampa — click-lock LVP, laminate & vinyl plank repair. Licensed Handyman Pros Fl. Instant estimate: (656) 205-3185.",
  "Gutter Installation":
    "Gutter installation & repair in Tampa Bay. Hang, reseat, flush downspouts & replace damaged sections. Licensed Handyman Pros Fl: (656) 205-3185.",
  "Home services":
    "Servicios de handyman Tampa: reparaciones del hogar, pintura, drywall y carpintería menor. Licensed & insured Handyman Pros FL. Call (656) 205-3185.",
  "Door Repair":
    "Reparación de puertas in Tampa for sticking slabs, swollen frames and worn hardware. Licensed & insured Handyman Pros FL. Call (656) 205-3185.",
  "Electrical Fixture Installation":
    "Electricidad menor in Tampa for lights, fans and vanity swaps at existing boxes. Licensed & insured Handyman Pros FL. Call (656) 205-3185 today.",
  "Plumbing Fixture Repair":
    "Plomería menor in Tampa for dripping faucets, running toilets and supply lines. Licensed & insured Handyman Pros FL. Call (656) 205-3185 today.",
  "Fence Handyman":
    "Fence handyman and fencing handyman in Tampa Bay: licensed & insured board, gate, and short-section repairs from Westchase. Call (656) 205-3185.",
  "General Repairs":
    "General repairs in Tampa for doors, windows, trim, and wall patches. Licensed & insured Handyman Pros FL handles the honey-do list. Call (656) 205-3185.",
};

const TITLE_STOP = new Set(["and", "or", "for", "with", "the", "a", "an", "to", "of", "in", "on", "your"]);

function benefitTitle(name: string, shortDescription: string): string | undefined {
  const words = shortDescription.replace(/[.,]/g, "").split(/\s+/).filter(Boolean);
  const options: string[] = [];
  for (let count = 2; count <= Math.min(7, words.length); count += 1) {
    const kept = words.slice(0, count);
    while (kept.length > 2 && TITLE_STOP.has(kept[kept.length - 1].toLowerCase())) kept.pop();
    if (kept.length < 2) continue;
    const tail = kept[0].charAt(0).toUpperCase() + kept.join(" ").slice(1);
    options.push(`${name} Tampa | ${tail}`, `${name} Tampa FL | ${tail}`);
  }
  options.push(`${name} Tampa FL`, `${name} in Tampa FL`);
  const fits = options.filter((title) => title.length >= 40 && title.length <= 60 && !title.endsWith("Same-Day Help"));
  fits.sort(
    (a, b) =>
      Number(b.includes("|")) - Number(a.includes("|")) || Math.abs(a.length - 48) - Math.abs(b.length - 48),
  );
  return fits[0];
}

function benefitMeta(name: string, shortDescription: string): string | undefined {
  const benefit = shortDescription.replace(/\.$/, "");
  const leads = [
    `${name} in Tampa. ${benefit}`,
    `${name} in Tampa, FL. ${benefit}`,
    `${name} in Tampa Bay. ${benefit}`,
    `${name} for Tampa homes. ${benefit}`,
    `${benefit}. ${name} in Tampa`,
    `Tampa Bay ${name}. ${benefit}`,
  ];
  const tails = [
    ` Licensed & insured. Call ${PHONE}.`,
    ` Licensed & insured Handyman Pros FL. Call ${PHONE}.`,
    ` Licensed & insured crew. Call ${PHONE}.`,
    ` Licensed & insured. Call ${PHONE} for an estimate.`,
    ` Licensed & insured Handyman Pros FL. Call ${PHONE} today.`,
    ` Licensed & insured from Westchase. Call ${PHONE}.`,
    ` Licensed & insured. Open 24/7. Call ${PHONE}.`,
    ` Licensed & insured Handyman Pros FL in Tampa Bay. Call ${PHONE}.`,
    ` Licensed & insured. Instant estimate: ${PHONE}.`,
    ` Licensed & insured Westchase crew. Call ${PHONE}.`,
    ` Licensed & insured Handyman Pros FL. Call ${PHONE} now.`,
  ];
  const fits = leads.flatMap((lead) =>
    tails.map((tail) => (/[.!?]$/.test(lead) ? `${lead}${tail}` : `${lead}.${tail}`)),
  ).filter(
    (description) =>
      description.length >= 150 &&
      description.length <= 160 &&
      description.includes("Licensed & insured") &&
      description.includes(PHONE),
  );
  fits.sort((a, b) => Math.abs(a.length - 155) - Math.abs(b.length - 155) || a.length - b.length);
  return fits[0];
}

function locationHandymanTitle(city: string): string {
  const options = [
    `Handyman ${city} FL | Licensed Home Repairs`,
    `Handyman ${city} | Licensed Home Repairs`,
    `Handyman ${city} FL | Licensed Repairs`,
    `${city} Handyman | Licensed Home Repairs`,
  ];
  return options.find((title) => title.length >= 40 && title.length <= 60) ?? `Handyman ${city} FL | Licensed Repairs`;
}

function locationHandymanMeta(city: string): string {
  const stems = [
    `Licensed & insured handyman in ${city}, FL for drywall repair, TV mounting, ceiling fans, and home repairs`,
    `Licensed & insured handyman in ${city}, FL for drywall repair, TV mounting, and home repairs from our Westchase crew`,
    `Licensed & insured handyman repairs in ${city}, FL: drywall, TV mounting, ceiling fans, doors, and fixture swaps`,
  ];
  const endings = [
    `. Call ${PHONE}.`,
    `. Open 24/7. Call ${PHONE}.`,
    `. Call ${PHONE} for an estimate.`,
    ` from Westchase. Call ${PHONE}.`,
  ];
  const fits = stems.flatMap((stem) => endings.map((ending) => `${stem}${ending}`)).filter(
    (description) => description.length >= 150 && description.length <= 160,
  );
  fits.sort((a, b) => Math.abs(a.length - 155) - Math.abs(b.length - 155));
  return fits[0] ?? `${stems[0]}. Call ${PHONE}.`;
}

export function serviceTitle(serviceName: string, city: string): string {
  if ((city === "Tampa" || exactTitles[serviceName]) && exactTitles[serviceName] && city === "Tampa") {
    return exactTitles[serviceName];
  }
  if (serviceName === "Handyman") return locationHandymanTitle(city);
  const shortDescription = allServices.find((service) => service.name === serviceName)?.shortDescription;
  if (shortDescription) {
    const title = benefitTitle(serviceName, shortDescription);
    if (title) return title;
  }
  const head = `${serviceName} ${city} FL`;
  if (head.length >= 40 && head.length <= 60) return head;
  const licensed = `${head} | Licensed`;
  return licensed.length <= 60 ? licensed : head.slice(0, 60).trim();
}

export function serviceH1(serviceName: string, city: string): string {
  return `${serviceName} in ${city}, FL`;
}

/** Service-specific meta. Exact auditor copy wins; other pages use that service's own benefit plus licensed wording and the phone. */
export function serviceDescription(serviceName: string, city: string): string {
  if (exactMetas[serviceName]) return exactMetas[serviceName];
  if (serviceName === "handyman repairs") return locationHandymanMeta(city);
  const shortDescription = allServices.find((service) => service.name === serviceName)?.shortDescription;
  if (shortDescription) {
    const description = benefitMeta(serviceName, shortDescription);
    if (description) return description;
  }
  return locationHandymanMeta(city);
}

export function locationTitle(city: string): string {
  return `Handyman ${city} FL | Local Home Repair`;
}

export function locationDescription(city: string): string {
  return `Looking for a handyman in ${city}, FL? Handyman Pros FL handles drywall, TV mounting, repairs & more across Tampa Bay. Instant phone estimates, same-day service. Call ${siteConfig.phone}.`;
}

/** Homepage title leads with Tampa handyman, the brand, and the Spanish keyword manitas. */
export function homeTitle(): string {
  return "Tampa Handyman & Manitas | Handyman Pros Florida";
}

export function homeDescription(): string {
  return "Tampa handyman y manitas for reparaciones del hogar. Hablamos español. Licensed & insured drywall, TV mounts, and home repairs. Call (656) 205-3185 today.";
}
