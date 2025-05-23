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
  // Static generation settings
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://filipa.xyz',
  },
  // Disable distDir override as Netlify handles this
  // distDir: 'out',
  // Add trailing slashes for consistency
  trailingSlash: true,
  // Enable app directory
  experimental: {
    appDir: false,
  },
}

module.exports = withMDX(nextConfig) 