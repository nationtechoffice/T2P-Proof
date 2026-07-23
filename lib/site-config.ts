export const siteConfig = {
  name: "Handyman Pros Florida",
  shortName: "Handyman Pros FL",
  domain: "handymanprosflorida.com",
  url: "https://handymanprosflorida.com",
  description:
    "Licensed & insured local handyman in Tampa & Hillsborough County. Open 24/7 for furniture assembly, drywall repair, painting, fence installation, and emergency repairs. Free estimates — call anytime.",
  tagline: "Your Tampa Handyman — Done Right, Done Fast",
  phone: "(656) 205-3185",
  phoneTel: "+16562053185",
  email: "support@handymanprosflorida.com",
  address: {
    street: "Mobile Service — Tampa Bay Area",
    city: "Tampa",
    state: "FL",
    zip: "33602",
    country: "US",
  },
  geo: {
    latitude: 27.9506,
    longitude: -82.4572,
  },
  hoursLabel: "Open 24/7",
  hours: [
    { day: "Monday", opens: "00:00", closes: "23:59" },
    { day: "Tuesday", opens: "00:00", closes: "23:59" },
    { day: "Wednesday", opens: "00:00", closes: "23:59" },
    { day: "Thursday", opens: "00:00", closes: "23:59" },
    { day: "Friday", opens: "00:00", closes: "23:59" },
    { day: "Saturday", opens: "00:00", closes: "23:59" },
    { day: "Sunday", opens: "00:00", closes: "23:59" },
  ],
  social: {
    facebook: "https://www.facebook.com/handymanprosflorida",
    instagram: "https://www.instagram.com/handymanprosflorida",
    google: "https://g.page/handymanprosflorida",
  },
  counties: [
    "Hillsborough County",
    "Pinellas County",
    "Pasco County",
    "Polk County",
    "Hernando County",
    "Manatee County",
  ],
  serviceAreas: [
    "Tampa",
    "Westchase",
    "Carrollwood",
    "Citrus Park",
    "Town 'n' Country",
    "Brandon",
    "Riverview",
    "Temple Terrace",
    "Plant City",
    "St. Petersburg",
    "Clearwater",
    "Largo",
    "Dunedin",
    "Wesley Chapel",
    "Land O' Lakes",
    "New Port Richey",
    "Lakeland",
    "Bradenton",
    "Apollo Beach",
    "Valrico",
  ],
  keywords: [
    "handyman Tampa",
    "handyman Hillsborough County",
    "handyman Westchase",
    "handyman Carrollwood",
    "home repair Tampa FL",
    "painting contractor Tampa",
    "fence repair Tampa",
    "furniture assembly Tampa",
    "drywall repair Tampa",
    "emergency handyman Tampa",
    "licensed handyman Tampa Bay",
  ],
  indexNowKey: "8f3a7c2e1b9d4f6a8c5e2b7d1a9f4c6e",
  themeColor: "#f2760f",
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
