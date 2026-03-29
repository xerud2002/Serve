import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/**
 * Middleware to handle SEO canonicalization:
 * 1. Redirect www → non-www
 * 2. Redirect http → https (via header check)
 * 3. Strip tracking query params (fbclid, utm_*, gclid, etc.) to prevent duplicate pages
 */
export default function proxy(request: NextRequest) {
  const url = request.nextUrl.clone()
  const hostname = url.hostname
  let shouldRedirect = false

  // 1. Redirect www.serve.org.uk → serve.org.uk
  if (hostname === 'www.serve.org.uk') {
    url.hostname = 'serve.org.uk'
    shouldRedirect = true
  }

  // 2. Redirect http → https (check X-Forwarded-Proto header)
  const proto = request.headers.get('x-forwarded-proto')
  if (proto === 'http' && hostname.includes('serve.org.uk')) {
    url.protocol = 'https'
    shouldRedirect = true
  }

  // 3. Strip tracking query parameters that create duplicate pages
  const trackingParams = [
    'fbclid',
    'gclid',
    'utm_source',
    'utm_medium',
    'utm_campaign',
    'utm_term',
    'utm_content',
    'ref',
    '_ga',
    'mc_cid',
    'mc_eid',
  ]

  let hasTrackingParams = false
  for (const param of trackingParams) {
    if (url.searchParams.has(param)) {
      url.searchParams.delete(param)
      hasTrackingParams = true
    }
  }

  // Only redirect if there are no other query params left, or if tracking params were the only ones
  if (hasTrackingParams) {
    shouldRedirect = true
  }

  if (shouldRedirect) {
    return NextResponse.redirect(url, 301)
  }

  return NextResponse.next()
}

// Only run middleware on page routes, not on static assets or API routes
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, manifest.json, sw.js, robots.txt, sitemap.xml
     * - images, icons, etc.
     * - API routes
     */
    '/((?!_next/static|_next/image|favicon|manifest|sw\\.js|robots\\.txt|sitemap\\.xml|images|icons|api).*)',
  ],
}
