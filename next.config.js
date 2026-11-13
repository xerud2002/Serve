import path from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = path.dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Modern Next.js 16 configuration
  
  // Enable trailing slashes for better SEO
  trailingSlash: true,
  
  // Enable production optimizations
  compress: true, // Enable gzip compression
  poweredByHeader: false, // Remove X-Powered-By header for security
  
  images: {
    formats: ['image/avif', 'image/webp'], // AVIF first (better compression)
    deviceSizes: [640, 750, 828, 1080, 1200, 1920], // Common device widths
    imageSizes: [16, 32, 48, 64, 96, 128, 192, 256, 320, 384], // Added 192, 256, 320 for service cards
    minimumCacheTTL: 60 * 60 * 24 * 365, // Cache images for 1 year
    loader: 'default',
    unoptimized: false, // Enable image optimization
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    qualities: [70, 75, 80, 90], // Supported image quality levels
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'scontent.**.fbcdn.net',
      },
      {
        protocol: 'https',
        hostname: '**.fbcdn.net',
      },
    ],
  },
  

  // Performance optimizations
  reactStrictMode: true,
  
  // Disable source maps in production for better performance
  productionBrowserSourceMaps: false,
  
  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },
  
  // Pin the workspace root so a lockfile in a parent folder is not picked up instead
  turbopack: { root: projectRoot },
  
  // Experimental features for better performance
  experimental: {
    optimizePackageImports: [
      '@heroicons/react',
      'clsx',
      'resend'
    ],
  },
  
  // 301 Redirects: Old WordPress URLs → new Next.js routes
  // Fixes Google Search Console 404 errors
  async redirects() {
    return [
      // ─── Main page redirects ───
      { source: '/community-events/', destination: '/news/', permanent: true },
      { source: '/community-events', destination: '/news/', permanent: true },
      { source: '/news-and-events/', destination: '/news/', permanent: true },
      { source: '/news-and-events', destination: '/news/', permanent: true },
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/happy-to-serve/', destination: '/', permanent: true },
      { source: '/happy-to-serve', destination: '/', permanent: true },
      
      // ─── Service page redirects ───
      { source: '/personal-and-domestic-care/', destination: '/services/personal-care/', permanent: true },
      { source: '/personal-and-domestic-care', destination: '/services/personal-care/', permanent: true },
      { source: '/community-transport/', destination: '/services/transport/', permanent: true },
      { source: '/community-transport', destination: '/services/transport/', permanent: true },
      { source: '/countywide-befriending/', destination: '/services/befriending/', permanent: true },
      { source: '/countywide-befriending', destination: '/services/befriending/', permanent: true },
      { source: '/day-trips/', destination: '/services/day-care/', permanent: true },
      { source: '/day-trips', destination: '/services/day-care/', permanent: true },
      { source: '/our-services/', destination: '/services/', permanent: true },
      { source: '/our-services', destination: '/services/', permanent: true },
      { source: '/about-our-services/', destination: '/services/', permanent: true },
      { source: '/carers-needs-aspirations/', destination: '/services/', permanent: true },
      { source: '/carers-needs-aspirations', destination: '/services/', permanent: true },
      { source: '/services/carers-support/', destination: '/services/', permanent: true },
      { source: '/services/carers-support', destination: '/services/', permanent: true },
      { source: '/community/support/services/', destination: '/services/community-services/', permanent: true },
      { source: '/community/support/services', destination: '/services/community-services/', permanent: true },
      { source: '/services/community', destination: '/services/community-services/', permanent: true },
      { source: '/meals/quick-servicing/', destination: '/services/', permanent: true },
      { source: '/keeping-safe-servicing/', destination: '/services/', permanent: true },
      
      // ─── Get involved redirects ───
      { source: '/get-involved/', destination: '/volunteer/', permanent: true },
      { source: '/get-involved', destination: '/volunteer/', permanent: true },
      { source: '/get-involved/boards-of-trustees/', destination: '/volunteer/', permanent: true },
      { source: '/get-involved/:path*', destination: '/volunteer/', permanent: true },
      { source: '/serve-voluntary-services/', destination: '/about/', permanent: true },
      { source: '/serve-voluntary-services', destination: '/about/', permanent: true },
      
      // ─── Fundraising ───
      { source: '/community-fundraising/', destination: '/corporate-fundraising/', permanent: true },
      { source: '/community-fundraising', destination: '/corporate-fundraising/', permanent: true },
      
      // ─── Legal pages ───
      { source: '/cookie-policy/', destination: '/cookies/', permanent: true },
      { source: '/cookie-policy', destination: '/cookies/', permanent: true },
      { source: '/privacy-policy/', destination: '/privacy/', permanent: true },
      { source: '/privacy-policy', destination: '/privacy/', permanent: true },
      { source: '/terms-and-conditions/', destination: '/terms/', permanent: true },
      { source: '/terms-and-conditions', destination: '/terms/', permanent: true },
      
      // ─── Old event/blog post redirects → /news/ ───
      { source: '/happy-to-serve-march-2025-event/', destination: '/news/', permanent: true },
      { source: '/serve-fun-day-2024/', destination: '/news/', permanent: true },
      { source: '/serve-fun-day-2024/', destination: '/news/', permanent: true },
      { source: '/an-evening-with-grainne-cliffe-of-serve-event/', destination: '/news/', permanent: true },
      { source: '/an-evening-with-grainne-cliffe-of-serve-event', destination: '/news/', permanent: true },
      { source: '/an-evening-with-grainne-cliffe-of-wet-end-end/', destination: '/news/', permanent: true },
      { source: '/day-trip-day-spring-with-serve/', destination: '/news/', permanent: true },
      { source: '/happy-to-serve-lunch-update', destination: '/news/', permanent: true },
      { source: '/happy-to-serve-lunch-update/', destination: '/news/', permanent: true },
      { source: '/home-of-our-previous-events/', destination: '/news/', permanent: true },
      { source: '/corner-of-our-previous-events/', destination: '/news/', permanent: true },
      { source: '/stepping-into-spring-in-ch/', destination: '/news/', permanent: true },
      { source: '/community/events/', destination: '/news/', permanent: true },
      { source: '/community/events', destination: '/news/', permanent: true },
      
      // ─── Care awards specific redirects ───
      { source: '/finalists-at-the-great-british-care-awards/', destination: '/news/great-british-care-awards/', permanent: true },
      { source: '/finalists-barrington-care-formerly-ctp/', destination: '/news/great-british-care-awards/', permanent: true },
      { source: '/we-are-a-finalist-at-the-great-british-care-awards-for-2024/', destination: '/news/great-british-care-awards/', permanent: true },
      
      // ─── Serve care booklet redirects ───
      { source: '/serve-care-booklet-june-23/', destination: '/about/', permanent: true },
      { source: '/serve-care-booklet/:path*', destination: '/about/', permanent: true },
      
      // ─── About/misc redirects ───
      { source: '/equity-for-serve/', destination: '/about/', permanent: true },
      { source: '/embed/', destination: '/', permanent: true },
      
      // ─── WordPress artifacts (wp-content, wp-login, wp-cron) ───
      { source: '/wp-content/uploads/:path*', destination: '/about/', permanent: true },
      { source: '/wp-content/:path*', destination: '/', permanent: true },
      { source: '/wp-login.php', destination: '/', permanent: true },
      { source: '/wp-login.php/:path*', destination: '/', permanent: true },
      { source: '/wp-cron.php', destination: '/', permanent: true },
      
      // ─── Content path pattern redirects (old CMS patterns) ───
      { source: '/content/items-display-option/:path*', destination: '/news/', permanent: true },
      { source: '/content/arm-ops/:path*', destination: '/news/', permanent: true },
      { source: '/content/usci/:path*', destination: '/news/', permanent: true },
      { source: '/content/:path*', destination: '/', permanent: true },
      
      // ─── Miscellaneous old paths ───
      { source: '/village/:path*', destination: '/', permanent: true },
      { source: '/us/:path*', destination: '/', permanent: true },
      { source: '/rest/:path*', destination: '/', permanent: true },
      { source: '/stream%25-careers', destination: '/', permanent: true },

      // ─── Previous-site URLs that still returned 404 (live on the old site 2021-2025) ───
      // "&" pages were published as "%26"; both spellings are matched.
      { source: '/contact-us/', destination: '/contact/', permanent: true },
      { source: '/personal-care/', destination: '/services/personal-care/', permanent: true },
      { source: '/personal-care-1/', destination: '/services/personal-care/', permanent: true },
      { source: '/arranging-your-care/', destination: '/services/personal-care/', permanent: true },
      { source: '/direct-payment-faqs/', destination: '/services/personal-care/', permanent: true },
      { source: '/day-care/', destination: '/services/day-care/', permanent: true },
      { source: '/day-care-and-mows-1/', destination: '/services/day-care/', permanent: true },
      { source: '/cleaning-(&|%26)-shopping/', destination: '/services/home-help/', permanent: true },
      { source: '/cleaning-(&|%26)-shopping-1/', destination: '/services/home-help/', permanent: true },
      { source: '/shopping-membership/', destination: '/services/home-help/', permanent: true },
      { source: '/dbs/', destination: '/services/community-services/', permanent: true },
      { source: '/hearing-aids/', destination: '/services/community-services/', permanent: true },
      { source: '/community-support-service/', destination: '/services/community-services/', permanent: true },
      { source: '/carers-needs-(&|%26)-aspiration/', destination: '/services/', permanent: true },
      { source: '/carecall/', destination: '/services/', permanent: true },
      { source: '/holisfit/', destination: '/services/', permanent: true },
      { source: '/wellbeing/', destination: '/services/', permanent: true },
      { source: '/mobility-shop/', destination: '/services/', permanent: true },
      { source: '/servescape-gardening/', destination: '/services/', permanent: true },
      { source: '/volunteers-(&|%26)-careers/', destination: '/volunteer/', permanent: true },
      { source: '/fundraise-for-us/', destination: '/donate/', permanent: true },
      { source: '/awards-(&|%26)-reviews/', destination: '/about/', permanent: true },
      { source: '/news-(&|%26)-events/', destination: '/news/', permanent: true },
      { source: '/news-(&|%26)-fundraising-events/', destination: '/news/', permanent: true },
      { source: '/coronavirus-latest/', destination: '/news/', permanent: true },
      { source: '/swing-for-serve/', destination: '/news/', permanent: true },
      { source: '/60km-for-60-years/', destination: '/news/', permanent: true },
      { source: '/an-evening-with-graeme-duffin-of-wet-wet-wet/', destination: '/news/', permanent: true },
      { source: '/serve-best-homecare-team-in-the-east-midlands/', destination: '/news/great-british-care-awards/', permanent: true },

      // ─── Discontinued / renamed legacy pages ───
      { source: '/disclosure-barring-service-formerly-crb', destination: '/volunteer/', permanent: true },
      { source: '/disclosure-barring-service-formerly-crb/', destination: '/volunteer/', permanent: true },
      { source: '/wp-content/uploads/Serve-Voluntary-Services.pdf', destination: '/about/', permanent: true },
      { source: '/wp-content/uploads/:path*', destination: '/', permanent: true },
      { source: '/wp-content/:path*', destination: '/', permanent: true },

      // ─── WordPress feeds, taxonomy, pagination, comments ───
      { source: '/feed/', destination: '/news/', permanent: true },
      { source: '/feed', destination: '/news/', permanent: true },
      { source: '/feed/:path*', destination: '/news/', permanent: true },
      { source: '/comments/feed/', destination: '/news/', permanent: true },
      { source: '/comments/feed', destination: '/news/', permanent: true },
      { source: '/category/:path*', destination: '/news/', permanent: true },
      { source: '/tag/:path*', destination: '/news/', permanent: true },
      { source: '/author/:path*', destination: '/', permanent: true },
      { source: '/page/:path*', destination: '/', permanent: true },
      { source: '/archives/:path*', destination: '/news/', permanent: true },
      { source: '/date/:path*', destination: '/news/', permanent: true },
      { source: '/wp-admin/:path*', destination: '/', permanent: true },
      { source: '/wp-admin', destination: '/', permanent: true },
      { source: '/wp-includes/:path*', destination: '/', permanent: true },
      { source: '/wp-json/:path*', destination: '/', permanent: true },
      { source: '/xmlrpc.php', destination: '/', permanent: true },
      { source: '/trackback/', destination: '/news/', permanent: true },
      { source: '/trackback', destination: '/news/', permanent: true },
      { source: '/amp/', destination: '/', permanent: true },
      { source: '/amp', destination: '/', permanent: true },
      { source: '/:path*/amp/', destination: '/:path*/', permanent: true },
      { source: '/:path*/feed/', destination: '/news/', permanent: true },
      { source: '/:path*/trackback/', destination: '/news/', permanent: true },
    ]
  },

  // HTTP Headers for performance and security
  async headers() {
    return [
      // Next.js already sends immutable one-year caching for /_next/static and
      // long-lived caching for /_next/image; overriding them here breaks dev mode.
      {
        source: '/:all*(svg|jpg|jpeg|png|webp|avif|gif|ico)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://apis.google.com https://*.googleapis.com https://www.gstatic.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com data:",
              "img-src 'self' data: https: blob:",
              "media-src 'self' https:",
              "connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://*.googleapis.com https://*.firebaseio.com https://firestore.googleapis.com https://identitytoolkit.googleapis.com https://www.google.com",
              "frame-src 'self' https://www.facebook.com https://*.firebaseapp.com https://accounts.google.com https://www.google.com",
              "worker-src 'self' blob:",
              "manifest-src 'self'",
              "form-action 'self'",
              "base-uri 'self'",
              "upgrade-insecure-requests"
            ].join('; ')
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          }
        ],
      },
    ]
  },
}

export default nextConfig