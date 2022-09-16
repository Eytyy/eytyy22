/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer');
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io'],
  },
};

// module.exports = withBundleAnalyzer(nextConfig);
module.exports = nextConfig;
