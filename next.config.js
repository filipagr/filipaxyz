const withMDX = require('@next/mdx')()

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // Enable static exports for Netlify
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
}

module.exports = withMDX(nextConfig) 