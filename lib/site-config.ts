export const siteConfig = {
  name: "Handyman Pros Florida",
  shortName: "Handyman Pros FL",
  legalName: "Handyman Pros FL",
  domain: "handymanprosflorida.com",
  url: "https://handymanprosflorida.com",
  description:
    "Licensed Tampa handyman near Westchase, Carrollwood & Tampa Bay. Hablamos español. Drywall repair, TV mounting, tile installation, flooring installation, furniture assembly, gutter installation, pressure washing, ceiling fans & home repairs. Instant phone estimates 24/7 — call (656) 205-3185.",
  tagline: "Instant Estimates Over the Phone – Speak to a Local Expert Right Now!",
  phone: "(656) 205-3185",
  /** Click-to-call href value used sitewide */
  phoneTel: "6562053185",
  /** E.164 form for schema / NAP consistency with dialers */
  phoneE164: "+16562053185",
  /** Schema.org telephone as specified for local SEO */
  phoneSchema: "+1-656-205-3185",
  /** Public contact email shown on the website (never use private ops inboxes here) */
  email: "support@handymanprosflorida.com",
  /** Public mailto / form messaging target shown to visitors */
  leadEmail: "support@handymanprosflorida.com",
  baseCities: ["Westchase", "Carrollwood", "Citrus Park", "Tampa"] as const,
  primaryZip: "33626",
  themeAccent: "#FF7A00",
  foundingLocation: "Westchase, Tampa, FL",
  owner: {
    name: "Abdalah El Mohtar",
    role: "Owner and founder",
    /**
     * Optional owner photo path under public/, such as "/images/owner-abdalah-el-mohtar.jpg".
     * Leave null until a real photo is provided. Do not invent a headshot.
     */
    photo: null as string | null,
  },
  address: {
    street: "12021 Tuscany Bay Dr",
    city: "Tampa",
    state: "FL",
    zip: "33626",
    country: "US",
    neighborhood: "Westchase",
  },
  geo: {
    latitude: 28.0521,
    longitude: -82.6136,
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
    facebook: "https://www.facebook.com/profile.php?id=61591619618815",
    instagram: "https://www.instagram.com/handymanprosfl/",
    google: "https://maps.app.goo.gl/XhDwjzgTujJK7JyT9",
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
    "Tuscany Bay",
    "Carrollwood",
    "Citrus Park",
    "Town 'n' Country",
    "Keystone",
    "Cheval",
    "Oldsmar",
    "Brandon",
    "Riverview",
    "Temple Terrace",
    "Seffner",
    "Plant City",
    "South Tampa",
    "Hyde Park",
    "New Tampa",
    "St. Petersburg",
    "Clearwater",
    "Palm Harbor",
    "Largo",
    "Dunedin",
    "Safety Harbor",
    "Tarpon Springs",
    "Wesley Chapel",
    "Land O' Lakes",
    "New Port Richey",
    "Lakeland",
    "Bradenton",
    "Apollo Beach",
    "Valrico",
    "Gulfport",
    "Fish Hawk",
    "Lutz",
    "Pinellas Park",
    "Seminole",
    "Spring Hill",
  ],
  keywords: [
    "Tampa handyman",
    "handyman Tampa",
    "handyman Tampa FL",
    "Tampa FL handyman",
    "handyman near me Tampa",
    "best handyman Tampa",
    "same day handyman Tampa",
    "handyman Westchase 33626",
    "Westchase handyman",
    "handyman Carrollwood",
    "handyman Citrus Park",
    "handyman Town n Country",
    "handyman Oldsmar FL",
    "Oldsmar FL handyman services",
    "handyman Hillsborough County",
    "handyman Pinellas County",
    "handyman Brandon FL",
    "handyman St Petersburg",
    "handyman Clearwater",
    "drywall repair Tampa",
    "TV mounting Tampa",
    "pressure washing Tampa",
    "home repair Tampa FL",
    "emergency handyman Tampa 24/7",
    "licensed handyman Tampa Bay",
    "local handyman Tampa Bay",
  ],
  indexNowKey: "a3f5f6fad54b033351c2c143b87e01a4",
  themeColor: "#0A0A0A",
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
