export const siteConfig = {
  name: "Handyman Pros Florida",
  shortName: "Handyman Pros FL",
  domain: "handymanprosflorida.com",
  url: "https://handymanprosflorida.com",
  description:
    "Florida's trusted handyman, painting, and fence contractor. Licensed professionals for home repairs, interior & exterior painting, fence installation, remodeling, and more. Free estimates statewide.",
  tagline: "Expert Home Repairs & Improvements Across Florida",
  phone: "(888) 555-0142",
  phoneTel: "+18885550142",
  email: "info@handymanprosflorida.com",
  address: {
    street: "Serving All of Florida",
    city: "Tampa",
    state: "FL",
    zip: "33602",
    country: "US",
  },
  geo: {
    latitude: 27.9506,
    longitude: -82.4572,
  },
  hours: [
    { day: "Monday", opens: "07:00", closes: "19:00" },
    { day: "Tuesday", opens: "07:00", closes: "19:00" },
    { day: "Wednesday", opens: "07:00", closes: "19:00" },
    { day: "Thursday", opens: "07:00", closes: "19:00" },
    { day: "Friday", opens: "07:00", closes: "19:00" },
    { day: "Saturday", opens: "08:00", closes: "17:00" },
    { day: "Sunday", opens: "09:00", closes: "15:00" },
  ],
  social: {
    facebook: "https://www.facebook.com/handymanprosflorida",
    instagram: "https://www.instagram.com/handymanprosflorida",
    google: "https://g.page/handymanprosflorida",
  },
  serviceAreas: [
    "Tampa",
    "Orlando",
    "Miami",
    "Jacksonville",
    "Fort Lauderdale",
    "St. Petersburg",
    "Clearwater",
    "Sarasota",
    "Naples",
    "Gainesville",
    "Tallahassee",
    "Pensacola",
    "West Palm Beach",
    "Boca Raton",
    "Lakeland",
    "Bradenton",
    "Cape Coral",
    "Port St. Lucie",
    "Daytona Beach",
    "Kissimmee",
  ],
  keywords: [
    "handyman Florida",
    "handyman services Tampa",
    "home repair Florida",
    "painting contractor Florida",
    "fence installation Florida",
    "drywall repair Florida",
    "TV mounting Florida",
    "home maintenance Florida",
    "licensed handyman",
    "Florida home improvements",
  ],
  indexNowKey: "8f3a7c2e1b9d4f6a8c5e2b7d1a9f4c6e",
} as const;

export type ServiceCategory = "handyman" | "painting" | "fence";

export interface Service {
  slug: string;
  name: string;
  category: ServiceCategory;
  shortDescription: string;
  description: string;
  keywords: string[];
  faqs: { question: string; answer: string }[];
}
