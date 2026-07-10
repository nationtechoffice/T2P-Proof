/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.t2pproof.link" }],
        destination: "https://t2pproof.link/:path*",
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
