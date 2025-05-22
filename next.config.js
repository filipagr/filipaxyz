const withMDX = require('@next/mdx')()

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // Enable static exports
  output: 'export',
  // Required for static export
  images: {
    unoptimized: true,
  },
  // Disable dynamic features
  experimental: {
    appDir: true,
  },
  // Static generation settings
  env: {
    NEXT_PUBLIC_SITE_URL: 'https://filipa.xyz',
  },
  // Ensure static generation
  staticPageGenerationTimeout: 120,
  // Disable dynamic features
  dynamicParams: false,
  // Configure output directory for Netlify
  distDir: 'out',
}

module.exports = withMDX(nextConfig) 