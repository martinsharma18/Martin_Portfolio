/** @type {import('next').NextConfig} */
// Force new deployment - [timestamp: ${new Date().toISOString()}]
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig 