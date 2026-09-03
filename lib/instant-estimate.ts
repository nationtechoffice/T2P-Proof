import { siteConfig } from "./site-config";

/** Direct-response UVP used in titles, H1s, schema, and CTAs. */
export const instantEstimate = {
  titleSuffix: "Fast Phone Estimates",
  heroHeadline: "Instant Estimates Over the Phone – Speak to a Local Expert Right Now!",
  heroSubhead:
    "Need immediate service in Tampa Bay? Call now for an instant phone estimate. Fast 24/7 response, honest pricing, and local experts on standby.",
  ctaLabel: "Get Instant Phone Estimate",
  ctaCallNow: `Call Now: ${siteConfig.phone}`,
  stickyLabel: `Instant Phone Estimate: ${siteConfig.phone}`,
  formHeading: "Instant Phone Estimate",
  formHelp: `Prefer to talk? Call ${siteConfig.phone} now for an instant phone estimate — 24/7 dispatch from Westchase.`,
  trust: ["24/7 Response", "Licensed & Insured", "Local Guarantee", "Same-Day Service"] as const,
  schemaDescription:
    "Offering instant phone estimates and fast response service. Call now to speak directly with an expert. Immediate 24/7 dispatch from our Tampa / Westchase headquarters.",
};

export function serviceTitle(serviceName: string, city: string): string {
  return `${serviceName} in ${city}, FL | ${instantEstimate.titleSuffix}`;
}

export function serviceH1(serviceName: string, city: string): string {
  return `${serviceName} in ${city}, FL`;
}

export function serviceDescription(serviceName: string, city: string): string {
  return `Need immediate ${serviceName} in ${city}, FL? Call now for an instant phone estimate! Fast 24/7 response, honest pricing, and local experts on standby. Call ${siteConfig.phone}.`;
}

export function locationTitle(city: string): string {
  return `Handyman in ${city}, FL | ${instantEstimate.titleSuffix}`;
}

export function locationDescription(city: string): string {
  return `Need immediate service in ${city}, FL? Call now for an instant phone estimate! Fast 24/7 response, honest pricing, and local experts on standby. Call ${siteConfig.phone}.`;
}

export function homeTitle(): string {
  return `Handyman in Tampa, FL | ${instantEstimate.titleSuffix}`;
}
