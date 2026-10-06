import type { NextConfig } from "next";
import { assertLocationRedirectsFit, locationAlternateRedirects } from "./lib/location-redirects";

/** Legacy aliases that are not the bare/-fl pair of a current hub slug. */
const legacyRedirects = [
  { source: "/handyman-westchase-fl", destination: "/locations/westchase-fl", permanent: true as const },
  { source: "/handyman-oldsmar-fl", destination: "/locations/oldsmar-fl", permanent: true as const },
  { source: "/handyman-town-n-country-fl", destination: "/locations/town-n-country-fl", permanent: true as const },
  { source: "/handyman-plant-city-fl", destination: "/locations/plant-city", permanent: true as const },
  { source: "/handyman-brandon-fl", destination: "/locations/brandon", permanent: true as const },
  { source: "/handyman-riverview-fl", destination: "/locations/riverview", permanent: true as const },
  { source: "/handyman-lutz-fl", destination: "/locations/lutz", permanent: true as const },
  { source: "/handyman-wesley-chapel-fl", destination: "/locations/wesley-chapel", permanent: true as const },
  { source: "/handyman-largo-fl", destination: "/locations/largo", permanent: true as const },
  { source: "/handyman-pinellas-park-fl", destination: "/locations/pinellas-park", permanent: true as const },
  { source: "/handyman-carrollwood-fl", destination: "/locations/carrollwood", permanent: true as const },
  { source: "/handyman-temple-terrace-fl", destination: "/locations/temple-terrace", permanent: true as const },
  { source: "/handyman-land-o-lakes-fl", destination: "/locations/land-o-lakes", permanent: true as const },
  { source: "/handyman-seminole-fl", destination: "/locations/seminole", permanent: true as const },
  { source: "/handyman-spring-hill-fl", destination: "/locations/spring-hill", permanent: true as const },
  { source: "/locations/greater-carrollwood", destination: "/locations/carrollwood", permanent: true as const },
  { source: "/locations/greater-carrollwood-fl", destination: "/locations/carrollwood", permanent: true as const },
  { source: "/handyman-greater-carrollwood-fl", destination: "/locations/carrollwood", permanent: true as const },
  { source: "/services/handyman/tv-mounting", destination: "/services/tv-wall-mounting", permanent: true as const },
  { source: "/services/tv-mounting", destination: "/services/tv-wall-mounting", permanent: true as const },
  { source: "/services/handyman/flooring-installation", destination: "/services/flooring-installation", permanent: true as const },
  { source: "/services/flooring-repair", destination: "/services/flooring-installation", permanent: true as const },
  { source: "/services/install-flooring", destination: "/services/flooring-installation", permanent: true as const },
  { source: "/services/handyman/install-flooring", destination: "/services/flooring-installation", permanent: true as const },
  { source: "/services/handyman/flooring-repair", destination: "/services/flooring-installation", permanent: true as const },
  { source: "/services/handyman/repair-flooring", destination: "/services/flooring-installation", permanent: true as const },
  { source: "/services/repair-flooring", destination: "/services/flooring-installation", permanent: true as const },
  { source: "/services/replace-flooring", destination: "/services/flooring-installation", permanent: true as const },
  { source: "/services/flooring-replacement", destination: "/services/flooring-installation", permanent: true as const },
  { source: "/services/handyman/replace-flooring", destination: "/services/flooring-installation", permanent: true as const },
  { source: "/services/handyman/flooring-replacement", destination: "/services/flooring-installation", permanent: true as const },
  { source: "/services/handyman/gutter-installation", destination: "/services/gutter-installation", permanent: true as const },
  { source: "/services/gutter-repair", destination: "/services/gutter-installation", permanent: true as const },
  { source: "/services/gutter-cleaning", destination: "/services/gutter-installation", permanent: true as const },
  { source: "/services/install-gutters", destination: "/services/gutter-installation", permanent: true as const },
  { source: "/services/gutter-install", destination: "/services/gutter-installation", permanent: true as const },
  { source: "/services/handyman/gutter-cleaning", destination: "/services/gutter-installation", permanent: true as const },
  { source: "/services/handyman/gutter-repair", destination: "/services/gutter-installation", permanent: true as const },
  { source: "/services/handyman/install-gutters", destination: "/services/gutter-installation", permanent: true as const },
  { source: "/services/repair-gutters", destination: "/services/gutter-installation", permanent: true as const },
  { source: "/services/handyman/repair-gutters", destination: "/services/gutter-installation", permanent: true as const },
  { source: "/services/replace-gutters", destination: "/services/gutter-installation", permanent: true as const },
  { source: "/services/gutter-replacement", destination: "/services/gutter-installation", permanent: true as const },
  { source: "/services/handyman/replace-gutters", destination: "/services/gutter-installation", permanent: true as const },
  { source: "/services/handyman/gutter-replacement", destination: "/services/gutter-installation", permanent: true as const },
  { source: "/services/clean-gutters", destination: "/services/gutter-installation", permanent: true as const },
  { source: "/services/handyman/clean-gutters", destination: "/services/gutter-installation", permanent: true as const },
  { source: "/services/handyman/furniture-assembly", destination: "/services/furniture-assembly", permanent: true as const },
  { source: "/services/handyman/furniture-rearrangement", destination: "/services/furniture-assembly", permanent: true as const },
  { source: "/services/handyman/assemble-furniture", destination: "/services/furniture-assembly", permanent: true as const },
  { source: "/services/furniture-rearrangement", destination: "/services/furniture-assembly", permanent: true as const },
  { source: "/services/assemble-furniture", destination: "/services/furniture-assembly", permanent: true as const },
  { source: "/services/rearrange-furniture", destination: "/services/furniture-assembly", permanent: true as const },
  { source: "/services/furniture-moving", destination: "/services/furniture-assembly", permanent: true as const },
  { source: "/services/furniture-moving-help", destination: "/services/furniture-assembly", permanent: true as const },
  { source: "/services/handyman/drywall-repair", destination: "/services/drywall-repair", permanent: true as const },
  { source: "/services/drywall-repair-tampa", destination: "/services/drywall-repair", permanent: true as const },
  { source: "/services/fan-installation", destination: "/services/handyman/fan-installation", permanent: true as const },
  { source: "/services/handyman/tile-installation", destination: "/services/tile-installation", permanent: true as const },
  { source: "/services/tile-install", destination: "/services/tile-installation", permanent: true as const },
  { source: "/services/install-replace-tile", destination: "/services/tile-installation", permanent: true as const },
  { source: "/services/same-day", destination: "/services/same-day-handyman", permanent: true as const },
  { source: "/same-day", destination: "/services/same-day-handyman", permanent: true as const },
  { source: "/same-day-handyman", destination: "/services/same-day-handyman", permanent: true as const },
  { source: "/gallery", destination: "/work", permanent: true as const },
  { source: "/photos", destination: "/work", permanent: true as const },
  { source: "/showcase", destination: "/work", permanent: true as const },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: false,
  skipTrailingSlashRedirect: false,
  images: {
    unoptimized: true,
  },
  async redirects() {
    const generated = locationAlternateRedirects();
    assertLocationRedirectsFit(legacyRedirects, generated);
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.handymanprosflorida.com" }],
        destination: "https://handymanprosflorida.com/:path*",
        permanent: true,
      },
      ...legacyRedirects,
      ...generated,
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
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
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

export default nextConfig;
