import { siteConfig } from "./site-config";

/** Direct-response UVP used in titles, H1s, schema, and CTAs. */
export const instantEstimate = {
  titleSuffix: "Same-Day Help",
  heroHeadline: "Instant Estimates Over the Phone – Speak to a Local Expert Right Now!",
  heroSubhead:
    "Need a handyman in Tampa Bay today? Call now for an instant phone estimate. Fast 24/7 response across Hillsborough & Pinellas, honest pricing, and local pros on standby.",
  ctaLabel: "Get Instant Phone Estimate",
  ctaCallNow: `Call Now: ${siteConfig.phone}`,
  stickyLabel: `Instant Phone Estimate: ${siteConfig.phone}`,
  formHeading: "Instant Phone Estimate",
  formHelp: `Prefer to talk? Call ${siteConfig.phone} now for an instant phone estimate — 24/7 dispatch from Westchase, Tampa.`,
  trust: ["24/7 Response", "Licensed & Insured", "Local Guarantee", "Same-Day Service"] as const,
  schemaDescription:
    "Tampa Bay handyman offering instant phone estimates and same-day home repair. Call now to speak with a local expert. 24/7 dispatch from Westchase headquarters serving Hillsborough and Pinellas.",
};

export function serviceTitle(serviceName: string, city: string): string {
  return `${serviceName} ${city} FL | ${instantEstimate.titleSuffix}`;
}

export function serviceH1(serviceName: string, city: string): string {
  return `${serviceName} in ${city}, FL`;
}

export function serviceDescription(serviceName: string, city: string): string {
  return `Need ${serviceName.toLowerCase()} in ${city}, FL? Call Handyman Pros FL for an instant phone estimate. Same-day Tampa Bay help, honest pricing, licensed & insured. Call ${siteConfig.phone}.`;
}

export function locationTitle(city: string): string {
  return `Handyman ${city} FL | Local Home Repair`;
}

export function locationDescription(city: string): string {
  return `Looking for a handyman in ${city}, FL? Handyman Pros FL handles drywall, TV mounting, repairs & more across Tampa Bay. Instant phone estimates, same-day service. Call ${siteConfig.phone}.`;
}

/** Homepage title — distinct from /locations/tampa to avoid cannibalization. */
export function homeTitle(): string {
  return `Handyman Tampa FL | Westchase & Tampa Bay`;
}

export function homeDescription(): string {
  return `Trusted handyman in Tampa, Westchase, Carrollwood & nearby. Drywall repair, TV mounting, pressure washing, ceiling fans & home repairs. Instant phone estimates 24/7 — call ${siteConfig.phone}.`;
}
