/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['page.tsx', 'api.ts'],

  images: {
    domains: ['lh3.googleusercontent.com'],
  },

  experimental: {
    newNextLinkBehavior: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },

  staticPageGenerationTimeout: 100,
};

module.exports = nextConfig;
