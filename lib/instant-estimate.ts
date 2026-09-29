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
    "Tampa Bay handyman offering instant phone estimates and same-day home repair. Call now to speak with a local expert. 24/7 dispatch from Westchase headquarters serving Hillsborough and Pinellas.",
};

/**
 * Exact SERP titles for Tampa money pages. Each one is 50–60 characters
 * with the primary keyword in the first 40.
 */
const tampaMoneyTitles: Record<string, string> = {
  "Home Services": "Tampa Bay Home Services | Handyman Painting & Fence",
  "Drywall Repair": "Drywall Repair Tampa FL | Patch, Texture, Same-Day",
  "Door Repair": "Door Repair Tampa FL | Sticky & Humidity Fixes Fast",
  "TV Wall Mounting": "TV Wall Mounting Tampa FL | Level, Secure, Same-Day",
  "Furniture Assembly": "Furniture Assembly Tampa FL | IKEA, Wayfair & More",
  "Tile Installation": "Tile Installation Tampa FL | Backsplash & Floor Tile",
  "Flooring Installation": "Flooring Installation Tampa FL | LVP Laminate Repair",
  "Gutter Installation": "Gutter Installation Tampa FL | Hang, Repair & Clean",
  "Same-Day Handyman": "Same-Day Handyman Tampa FL | Westchase 24/7 Dispatch",
  "Electrical Fixture Installation": "Electrical Fixture Installation Tampa FL | Lights & Fans",
  "Plumbing Fixture Repair": "Plumbing Fixture Repair Tampa FL | Faucet Leak Fixes",
};

/** Longest first so a licensed tail wins whenever it still fits in 50–60. */
const titleTails = [
  "Licensed & Insured Same-Day Help",
  "Licensed & Insured, Same-Day",
  "Licensed Same-Day Home Help",
  "Licensed Same-Day Help",
  "Licensed & Insured",
  "Licensed Same-Day",
  "Licensed Help",
  "Same-Day Help",
  "Licensed",
  "Same-Day",
] as const;

export function serviceTitle(serviceName: string, city: string): string {
  if (city === "Tampa" && tampaMoneyTitles[serviceName]) return tampaMoneyTitles[serviceName];
  const head = `${serviceName} ${city} FL`;
  for (const tail of titleTails) {
    const full = `${head} | ${tail}`;
    if (full.length >= 50 && full.length <= 60) return full;
  }
  if (head.length >= 50 && head.length <= 60) return head;
  return head.length > 60 ? head.slice(0, 60).trim() : `${head} | ${instantEstimate.titleSuffix}`;
}

export function serviceH1(serviceName: string, city: string): string {
  return `${serviceName} in ${city}, FL`;
}

const descriptionMiddles = [
  " — licensed & insured, same-day help from our only Westchase headquarters. ",
  " — licensed & insured, same-day help from our Westchase headquarters. ",
  " — licensed & insured, same-day help from our Westchase crew. ",
  " — licensed & insured same-day help from our Westchase crew. ",
  " — licensed & insured, same-day help from Westchase. ",
  " — licensed & insured same-day help from Westchase. ",
  " — licensed & insured, same-day help across Tampa Bay. ",
  " — licensed & insured same-day help across Tampa Bay. ",
  " — licensed & insured, same-day Tampa Bay help. ",
  " — licensed & insured same-day Tampa Bay help. ",
  " — licensed & insured, same-day help. ",
  " — licensed & insured same-day help. ",
  ". Licensed & insured, same-day help from Westchase. ",
  ". Licensed & insured same-day help from Westchase. ",
  ". Licensed & insured, same-day help. ",
  ". Licensed & insured same-day help. ",
  " — licensed & insured. Same-day help. ",
  ". Licensed & insured. Same-day help. ",
  " — licensed & insured. ",
  ". Licensed & insured. ",
] as const;

const descriptionCloses = [
  "Call for an instant phone estimate today. Open 24/7 across Tampa Bay.",
  "Call for an instant phone estimate today. Open 24/7.",
  "Call now for an instant phone estimate. Open 24/7.",
  "Call for an instant phone estimate. Open 24/7.",
  "Instant phone estimates. Open 24/7 across Tampa Bay.",
  "Instant phone estimates, open 24/7 across Tampa Bay.",
  "Instant phone estimates. Open 24/7.",
  "Instant phone estimates, open 24/7.",
  "Instant phone estimates today.",
  "Instant phone estimates.",
  "Instant estimates today.",
  "Instant estimates.",
  "Call for an estimate today.",
  "Call for an estimate.",
] as const;

function pickMetaDescription(candidates: string[]): string {
  const fits = candidates.filter(
    (value) => value.length >= 150 && value.length <= 160 && value.includes("licensed & insured"),
  );
  const pool = fits.length > 0 ? fits : candidates;
  return pool.sort(
    (a, b) => Math.abs(a.length - 155) - Math.abs(b.length - 155) || a.length - b.length,
  )[0];
}

/** Shared money-page meta. Phone stays in the body and schema so this can land at 150–160. */
export function serviceDescription(serviceName: string, city: string): string {
  const lead = `${serviceName} in ${city}, FL`;
  const candidates = descriptionMiddles.flatMap((middle) =>
    descriptionCloses.map((close) => `${lead}${middle}${close}`),
  );
  return pickMetaDescription(candidates);
}

export function locationTitle(city: string): string {
  return `Handyman ${city} FL | Local Home Repair`;
}

export function locationDescription(city: string): string {
  return `Looking for a handyman in ${city}, FL? Handyman Pros FL handles drywall, TV mounting, repairs & more across Tampa Bay. Instant phone estimates, same-day service. Call ${siteConfig.phone}.`;
}

/** Homepage title — lead with primary search intent “Tampa handyman”. */
export function homeTitle(): string {
  return `Tampa Handyman Near Me | Licensed Drywall & TV Mount`;
}

export function homeDescription(): string {
  return "Licensed & insured Tampa handyman near Westchase for drywall repair, TV mounting, and same-day home repairs. Instant phone estimates, open 24/7. Call today.";
}
