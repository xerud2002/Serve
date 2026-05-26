import withPWAInit from '@ducanh2912/next-pwa'

const withPWA = withPWAInit({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
  cacheOnFrontEndNav: true,
  reloadOnOnline: true,
  workboxOptions: {
    runtimeCaching: [
      {
        urlPattern: /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
        handler: 'CacheFirst',
        options: {
          cacheName: 'google-fonts',
          expiration: {
            maxEntries: 4,
            maxAgeSeconds: 365 * 24 * 60 * 60 // 1 year
          }
        }
      },
      {
        urlPattern: /^https:\/\/graph\.facebook\.com\/.*/i,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'facebook-api',
          expiration: {
            maxEntries: 32,
            maxAgeSeconds: 24 * 60 * 60 // 1 day
          },
          networkTimeoutSeconds: 10
        }
      },
      {
        urlPattern: /\.(?:jpg|jpeg|gif|png|svg|ico|webp|avif)$/i,
        handler: 'CacheFirst',
        options: {
          cacheName: 'static-images',
          expiration: {
            maxEntries: 64,
            maxAgeSeconds: 30 * 24 * 60 * 60 // 30 days
          }
        }
      },
      {
        urlPattern: /\.(?:js|css)$/i,
        handler: 'StaleWhileRevalidate',
        options: {
          cacheName: 'static-resources',
          expiration: {
            maxEntries: 32,
            maxAgeSeconds: 24 * 60 * 60 // 1 day
          }
        }
      },
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'others',
          expiration: {
            maxEntries: 32,
            maxAgeSeconds: 24 * 60 * 60 // 1 day
          },
          networkTimeoutSeconds: 10
        }
      }
    ]
  }
})

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
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
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
  
  // Turbopack configuration (Next.js 16 default)
  turbopack: {}, // Empty config to acknowledge Turbopack while keeping webpack config
  
  // Experimental features for better performance
  experimental: {
    optimizePackageImports: [
      '@heroicons/react',
      'clsx',
      'resend',
      'nodemailer',
      'web-vitals'
    ],
    // optimizeCss disabled - causes MIME type issues with CSS loading
    webpackBuildWorker: true, // Faster builds
  },
  
  // Webpack optimizations to reduce bundle size
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Optimize chunk splitting for better caching and smaller initial load
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          default: false,
          vendors: false,
          // Framework chunk (React, Next.js)
          framework: {
            name: 'framework',
            chunks: 'all',
            test: /[\\/]node_modules[\\/](react|react-dom|scheduler|next)[\\/]/,
            priority: 40,
            enforce: true,
          },
          // Vendor chunk for other npm packages
          vendor: {
            name: 'vendor',
            chunks: 'all',
            test: /[\\/]node_modules[\\/]/,
            priority: 20,
            minChunks: 1,
            maxSize: 50000, // Further split vendor bundles to 50KB
          },
          // Common chunk for shared code
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            priority: 10,
            reuseExistingChunk: true,
            enforce: true,
          },
        },
      }
    }
    
    return config
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
    ]
  },

  // HTTP Headers for performance and security
  async headers() {
    return [
      {
        source: '/_next/static/css/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/chunks/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
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
        source: '/_next/image(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static(.*)',
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
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://analytics.ahrefs.com https://va.vercel-scripts.com https://vercel.live https://apis.google.com https://*.googleapis.com https://www.gstatic.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com data:",
              "img-src 'self' data: https: blob:",
              "media-src 'self' https:",
              "connect-src 'self' https://graph.facebook.com https://www.google-analytics.com https://*.google-analytics.com https://analytics.ahrefs.com https://vitals.vercel-insights.com https://va.vercel-scripts.com https://*.googleapis.com https://*.firebaseio.com https://firestore.googleapis.com https://identitytoolkit.googleapis.com https://www.google.com",
              "frame-src 'self' https://www.facebook.com https://*.firebaseapp.com https://accounts.google.com https://www.google.com https://vercel.live",
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

// Wrap with PWA configuration
export default withPWA(nextConfig)