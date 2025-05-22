const withMDX = require('@next/mdx')()

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // Enable static exports for Netlify
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
  // Disable dynamic features for static export
  experimental: {
    appDir: true,
  },
  // Configure static generation
  env: {
    NEXT_PUBLIC_SITE_URL: 'https://filipa.xyz',
  },
}

module.exports = withMDX(nextConfig) 