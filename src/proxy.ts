import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const CANONICAL_HOST = 'serve.org.uk'

const TRACKING_PARAMS = [
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

/**
 * Middleware to handle SEO canonicalization:
 * 1. Redirect www → non-www
 * 2. Strip tracking query params (fbclid, utm_*, gclid, etc.) to prevent duplicate pages
 *
 * http → https is done by nginx / the hosting platform. It must not be repeated here:
 * the X-Forwarded-Proto value set by the reverse proxy is not reliable and a wrong
 * value would cause a redirect loop.
 */
export default function proxy(request: NextRequest) {
  const url = request.nextUrl.clone()

  // Behind a reverse proxy `request.nextUrl` carries the internal origin (localhost:3000),
  // so the public hostname has to be read from the forwarded Host header.
  const host = (request.headers.get('x-forwarded-host') ?? request.headers.get('host') ?? '')
    .split(',')[0]
    .trim()
    .toLowerCase()
    .replace(/:\d+$/, '')

  let hasTrackingParams = false
  for (const param of TRACKING_PARAMS) {
    if (url.searchParams.has(param)) {
      url.searchParams.delete(param)
      hasTrackingParams = true
    }
  }

  if (host === `www.${CANONICAL_HOST}`) {
    return NextResponse.redirect(new URL(`${url.pathname}${url.search}`, `https://${CANONICAL_HOST}`), 301)
  }

  if (hasTrackingParams) {
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
