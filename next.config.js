/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['instagram.com', 'tiktok.com'],
    unoptimized: false,
  },
}

module.exports = nextConfig
