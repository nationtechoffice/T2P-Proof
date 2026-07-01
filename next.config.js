/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Forces the Turbopack engine to look directly at your root directory path
  turbopack: {
    root: __dirname,
  }
};

module.exports = nextConfig;
