/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  skipTrailingSlashRedirect: false,
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
      { source: "/handyman-plant-city-fl", destination: "/locations/plant-city", permanent: true },
      { source: "/handyman-brandon-fl", destination: "/locations/brandon", permanent: true },
      { source: "/handyman-riverview-fl", destination: "/locations/riverview", permanent: true },
      { source: "/handyman-lutz-fl", destination: "/locations/lutz", permanent: true },
      { source: "/handyman-wesley-chapel-fl", destination: "/locations/wesley-chapel", permanent: true },
      { source: "/handyman-largo-fl", destination: "/locations/largo", permanent: true },
      { source: "/handyman-pinellas-park-fl", destination: "/locations/pinellas-park", permanent: true },
      { source: "/handyman-carrollwood-fl", destination: "/locations/carrollwood", permanent: true },
      { source: "/handyman-temple-terrace-fl", destination: "/locations/temple-terrace", permanent: true },
      { source: "/handyman-land-o-lakes-fl", destination: "/locations/land-o-lakes", permanent: true },
      { source: "/handyman-seminole-fl", destination: "/locations/seminole", permanent: true },
      { source: "/handyman-spring-hill-fl", destination: "/locations/spring-hill", permanent: true },
      { source: "/locations/tampa-fl", destination: "/locations/tampa", permanent: true },
      { source: "/locations/clearwater-fl", destination: "/locations/clearwater", permanent: true },
      { source: "/locations/st-petersburg-fl", destination: "/locations/st-petersburg", permanent: true },
      { source: "/services/handyman/tv-mounting", destination: "/services/tv-wall-mounting", permanent: true },
      { source: "/services/tv-mounting", destination: "/services/tv-wall-mounting", permanent: true },
      { source: "/services/handyman/flooring-installation", destination: "/services/flooring-installation", permanent: true },
      { source: "/services/flooring-repair", destination: "/services/flooring-installation", permanent: true },
      { source: "/services/install-flooring", destination: "/services/flooring-installation", permanent: true },
      { source: "/services/handyman/install-flooring", destination: "/services/flooring-installation", permanent: true },
      { source: "/services/handyman/flooring-repair", destination: "/services/flooring-installation", permanent: true },
      { source: "/services/handyman/repair-flooring", destination: "/services/flooring-installation", permanent: true },
      { source: "/services/repair-flooring", destination: "/services/flooring-installation", permanent: true },
      { source: "/services/replace-flooring", destination: "/services/flooring-installation", permanent: true },
      { source: "/services/flooring-replacement", destination: "/services/flooring-installation", permanent: true },
      { source: "/services/handyman/replace-flooring", destination: "/services/flooring-installation", permanent: true },
      { source: "/services/handyman/flooring-replacement", destination: "/services/flooring-installation", permanent: true },
      { source: "/services/handyman/gutter-installation", destination: "/services/gutter-installation", permanent: true },
      { source: "/services/gutter-repair", destination: "/services/gutter-installation", permanent: true },
      { source: "/services/gutter-cleaning", destination: "/services/gutter-installation", permanent: true },
      { source: "/services/install-gutters", destination: "/services/gutter-installation", permanent: true },
      { source: "/services/gutter-install", destination: "/services/gutter-installation", permanent: true },
      { source: "/services/handyman/gutter-cleaning", destination: "/services/gutter-installation", permanent: true },
      { source: "/services/handyman/gutter-repair", destination: "/services/gutter-installation", permanent: true },
      { source: "/services/handyman/install-gutters", destination: "/services/gutter-installation", permanent: true },
      { source: "/services/repair-gutters", destination: "/services/gutter-installation", permanent: true },
      { source: "/services/handyman/repair-gutters", destination: "/services/gutter-installation", permanent: true },
      { source: "/services/replace-gutters", destination: "/services/gutter-installation", permanent: true },
      { source: "/services/gutter-replacement", destination: "/services/gutter-installation", permanent: true },
      { source: "/services/handyman/replace-gutters", destination: "/services/gutter-installation", permanent: true },
      { source: "/services/handyman/gutter-replacement", destination: "/services/gutter-installation", permanent: true },
      { source: "/services/clean-gutters", destination: "/services/gutter-installation", permanent: true },
      { source: "/services/handyman/clean-gutters", destination: "/services/gutter-installation", permanent: true },
      { source: "/services/handyman/furniture-assembly", destination: "/services/furniture-assembly", permanent: true },
      { source: "/services/handyman/furniture-rearrangement", destination: "/services/furniture-assembly", permanent: true },
      { source: "/services/handyman/assemble-furniture", destination: "/services/furniture-assembly", permanent: true },
      { source: "/services/furniture-rearrangement", destination: "/services/furniture-assembly", permanent: true },
      { source: "/services/assemble-furniture", destination: "/services/furniture-assembly", permanent: true },
      { source: "/services/rearrange-furniture", destination: "/services/furniture-assembly", permanent: true },
      { source: "/services/furniture-moving", destination: "/services/furniture-assembly", permanent: true },
      { source: "/services/furniture-moving-help", destination: "/services/furniture-assembly", permanent: true },
      { source: "/services/handyman/drywall-repair", destination: "/services/drywall-repair", permanent: true },
      { source: "/services/drywall-repair-tampa", destination: "/services/drywall-repair", permanent: true },
      { source: "/services/fan-installation", destination: "/services/handyman/fan-installation", permanent: true },
      { source: "/services/handyman/tile-installation", destination: "/services/tile-installation", permanent: true },
      { source: "/services/tile-install", destination: "/services/tile-installation", permanent: true },
      { source: "/services/install-replace-tile", destination: "/services/tile-installation", permanent: true },
      { source: "/services/same-day", destination: "/services/same-day-handyman", permanent: true },
      { source: "/same-day", destination: "/services/same-day-handyman", permanent: true },
      { source: "/same-day-handyman", destination: "/services/same-day-handyman", permanent: true },
      { source: "/gallery", destination: "/work", permanent: true },
      { source: "/photos", destination: "/work", permanent: true },
      { source: "/showcase", destination: "/work", permanent: true },
    ];
  },
  async rewrites() {
    return {
      // hcdn serves files in public/ before Node and maps unknown types to
      // text/plain, so Next headers never see those AVIFs. Files live in media/
      // and app/api/avif serves the same public URL as image/avif.
      afterFiles: [
        {
          source: "/images/:path*.avif",
          destination: "/api/avif/images/:path*.avif",
        },
      ],
    };
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
      {
        source: "/:path*.avif",
        headers: [{ key: "Content-Type", value: "image/avif" }],
      },
      {
        source: "/sitemap.xml",
        headers: [
          { key: "Content-Type", value: "application/xml; charset=utf-8" },
          { key: "Cache-Control", value: "public, max-age=3600, stale-while-revalidate=86400" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
