/**
 * Simple in-memory rate limiter for API routes
 * Note: Resets on server restart/redeploy. For production at scale, use Redis.
 */

interface RateLimitEntry {
  count: number
  resetTime: number
}

// Store rate limit data per IP
const rateLimitStore = new Map<string, RateLimitEntry>()

// Clean up old entries every 5 minutes to prevent memory leaks
setInterval(() => {
  const now = Date.now()
  for (const [key, entry] of rateLimitStore.entries()) {
    if (now > entry.resetTime) {
      rateLimitStore.delete(key)
    }
  }
}, 5 * 60 * 1000)

interface RateLimitConfig {
  /** Maximum number of requests allowed in the window */
  maxRequests: number
  /** Time window in seconds */
  windowSeconds: number
  /** Identifier prefix (e.g., 'contact', 'newsletter') */
  identifier: string
}

interface RateLimitResult {
  success: boolean
  remaining: number
  resetIn: number // seconds until reset
}

/**
 * Check if a request should be rate limited
 * @param ip - Client IP address
 * @param config - Rate limit configuration
 * @returns Result with success status and remaining requests
 */
export function checkRateLimit(ip: string, config: RateLimitConfig): RateLimitResult {
  const { maxRequests, windowSeconds, identifier } = config
  const key = `${identifier}:${ip}`
  const now = Date.now()
  const windowMs = windowSeconds * 1000

  const entry = rateLimitStore.get(key)

  // If no entry or window expired, create new entry
  if (!entry || now > entry.resetTime) {
    rateLimitStore.set(key, {
      count: 1,
      resetTime: now + windowMs
    })
    return {
      success: true,
      remaining: maxRequests - 1,
      resetIn: windowSeconds
    }
  }

  // Check if limit exceeded
  if (entry.count >= maxRequests) {
    const resetIn = Math.ceil((entry.resetTime - now) / 1000)
    return {
      success: false,
      remaining: 0,
      resetIn
    }
  }

  // Increment count
  entry.count++
  const resetIn = Math.ceil((entry.resetTime - now) / 1000)

  return {
    success: true,
    remaining: maxRequests - entry.count,
    resetIn
  }
}

/**
 * Get client IP from request headers
 * Works with Vercel, Cloudflare, and direct connections
 */
export function getClientIP(request: Request): string {
  // Vercel
  const forwarded = request.headers.get('x-forwarded-for')
  if (forwarded) {
    return forwarded.split(',')[0].trim()
  }

  // Cloudflare
  const cfIP = request.headers.get('cf-connecting-ip')
  if (cfIP) {
    return cfIP
  }

  // Real IP header
  const realIP = request.headers.get('x-real-ip')
  if (realIP) {
    return realIP
  }

  // Fallback
  return 'unknown'
}

// Pre-configured rate limiters for common use cases
export const rateLimiters = {
  /** Contact form: 5 requests per 15 minutes */
  contact: {
    maxRequests: 5,
    windowSeconds: 15 * 60, // 15 minutes
    identifier: 'contact'
  },
  /** Newsletter signup: 3 requests per hour */
  newsletter: {
    maxRequests: 3,
    windowSeconds: 60 * 60, // 1 hour
    identifier: 'newsletter'
  },
  /** General API: 30 requests per minute */
  api: {
    maxRequests: 30,
    windowSeconds: 60, // 1 minute
    identifier: 'api'
  }
} as const
