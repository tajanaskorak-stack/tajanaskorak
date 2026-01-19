/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // SWC minification is now default in Next.js 13+, no need to specify
  images: {
    formats: ['image/avif', 'image/webp'],
    // Disable image optimization during build for faster builds
    unoptimized: false,
  },
  // Disable TypeScript checking during build (JS project)
  typescript: {
    ignoreBuildErrors: true,
  },
  // Optimize build performance
  compress: true,
  poweredByHeader: false,
};

module.exports = nextConfig;
