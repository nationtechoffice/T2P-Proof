/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.handymanprosflorida.com" }],
        destination: "https://handymanprosflorida.com/:path*",
        permanent: true,
      },
      { source: "/handyman-westchase-fl", destination: "/locations/westchase-fl", permanent: true },
      { source: "/handyman-oldsmar-fl", destination: "/locations/oldsmar-fl", permanent: true },
      { source: "/handyman-town-n-country-fl", destination: "/locations/town-n-country-fl", permanent: true },
      { source: "/services/handyman/tv-mounting", destination: "/services/tv-wall-mounting", permanent: true },
      { source: "/services/handyman/furniture-assembly", destination: "/services/furniture-assembly", permanent: true },
      { source: "/services/handyman/drywall-repair", destination: "/services/drywall-repair", permanent: true },
      { source: "/services/drywall-repair-tampa", destination: "/services/drywall-repair", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
