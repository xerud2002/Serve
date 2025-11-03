/** @type {import('next').NextConfig} */
const nextConfig = {
  // Modern Next.js 16 configuration  
  images: {
    formats: ['image/webp', 'image/avif']
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}

export default nextConfig