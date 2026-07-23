import { siteConfig } from "./site-config";

export function formatFullAddress(): string {
  const { street, street2, city, state, zip } = siteConfig.address;
  return `${street}, ${street2}, ${city}, ${state} ${zip}`;
}

export function formatStreetAddress(): string {
  const { street, street2 } = siteConfig.address;
  return `${street}, ${street2}`;
}

export function getGoogleMapsUrl(): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(formatFullAddress())}`;
}

export function getLocalPageTitle(serviceName: string): string {
  return `${serviceName} in Tampa, FL`;
}

export function getLocalPageDescription(shortDescription: string, serviceName: string): string {
  return `${shortDescription} Licensed ${serviceName.toLowerCase()} serving Tampa, Westchase, Carrollwood, Hillsborough County & surrounding areas. Open 24/7. Call ${siteConfig.phone}.`;
}

export const tampaLocalKeywords = [
  "handyman near me Tampa",
  "handyman 33626",
  "handyman Westchase Tampa",
  "handyman Tuscany Bay",
  "handyman Carrollwood FL",
  "handyman Citrus Park",
  "handyman Town n Country",
  "handyman Hillsborough County",
  "handyman Pinellas County",
  "handyman Brandon FL",
  "handyman Riverview FL",
  "handyman St Petersburg",
  "handyman Clearwater FL",
  "painting contractor Tampa",
  "fence repair Tampa Bay",
  "emergency handyman Tampa 24/7",
  "licensed handyman Tampa FL",
  "affordable handyman Tampa",
  "local handyman Tampa Bay",
  "home repair 33626",
] as const;
