export type GoogleReview = {
  name: string;
  rating: number;
  text: string;
  /** Month and year, never a relative phrase. */
  date?: string;
  /** Optional review title copied from Google. */
  title?: string;
};

export type GoogleReviewsData = {
  rating: number | null;
  count: number | null;
  reviews: GoogleReview[];
};

/**
 * Google Business Profile reviews copied on October 6, 2026.
 * Text is verbatim, including the reviewers' spelling and emoji.
 * Leave rating and count null and reviews empty to show the link-only state.
 */
export const googleReviews: GoogleReviewsData = {
  rating: 5.0,
  count: 49,
  reviews: [
    {
      name: "Nancy",
      rating: 5,
      title: "Outstanding Service – Fast, Professional, and Highly Reliable!",
      text: "100 percent recommend handyman pros for all your home repairs and projects. From the very first phone call, they completely stood out—they actually answered my call and took me seriously instead of blowing me off like so many other companies do. Not only did they show up the exact same day I called, but they were also incredibly punctual. When they promise to be there, they are actually there. Their team is exceptionally efficient, fast, professional, and respectful of your home. What blew me away was their expertise. They are clearly very knowledgeable about a wide variety of home contracting services. They diagnosed the problem quickly and even went above and beyond by taking care of a few extra things I hadn’t even thought to ask for. If you want a reliable, skilled, and honest handyman service that gets the job done with integrity and doesn’t leave you hanging for days and weeks, look no further. I will definitely be hiring Handyman pros for all projects in my home. Wish I would’ve found them sooner",
      date: "October 2026",
    },
    {
      name: "Steven Hooper",
      rating: 5,
      text: "Great job fixed my carport ceiling",
      date: "October 2026",
    },
    {
      name: "Israel Onabanjo",
      rating: 5,
      text: "Did a fantastic and great job fixing the drywall in the garage",
      date: "October 2026",
    },
    {
      name: "Roxana Marion",
      rating: 5,
      text: "Wow…. The service was amazing and Sam was the best I would recommend them to anyone. Thank you for all your help Sam and Eddie. 💗",
      date: "September 2026",
    },
    {
      name: "Milagros Moreno",
      rating: 5,
      text: "Very profesional work is exelent very nice person I’m happy w his work",
      date: "September 2026",
    },
    {
      name: "Omar Awawda",
      rating: 5,
      text: "Thank you—high-level service and excellent interaction.",
      date: "September 2026",
    },
    {
      name: "Shawn Strickland",
      rating: 5,
      text: "The service as fast; same day in fact!",
      date: "September 2026",
    },
  ],
};

export const GOOGLE_REVIEWS_URL = "https://maps.app.goo.gl/XhDwjzgTujJK7JyT9";
export const GOOGLE_LEAVE_REVIEW_URL = "https://g.page/r/Cerxg9MeSAktEBM/review";

