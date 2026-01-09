# SERVE Charity Website - AI Coding Instructions

## Project Overview
Next.js 16 + React 19 charity website for SERVE (Charity #1043321). Accessibility-first design for elderly/disabled users in Northamptonshire.

**Stack**: Tailwind v4, TypeScript 5.9, Resend email, Firebase Firestore | **Deploy**: Vercel (lhr1 London)

---

## Architecture

### Server vs Client Components
Default to Server Components. Add `"use client"` only for hooks/events/browser APIs.

**Current client components** (20 total): `Header`, `Hero`, `Contact`, `OptimizedImage`, `FacebookFeed`, `BookingManager`, `VolunteerForm`, `TransportBooking`, `Services`, `ScrollReveal`, `RelatedServices`, `NewsletterSignup`, `LayoutWrapper`, `FriendsOfServe`, `GoogleAnalytics`, `ErrorBoundary`, `CookieConsent`, `InstallPrompt`, `WebVitals`, `AhrefsAnalytics`

### API Routes Pattern (`src/app/api/*/route.ts`)
```typescript
import { checkRateLimit, getClientIP, rateLimiters } from '@/lib/rateLimit'

// ALL routes MUST: 1) Rate limit first 2) Validate 3) Graceful fallback
const ip = getClientIP(request)
const rateLimit = checkRateLimit(ip, rateLimiters.contact) // .newsletter, .volunteer
if (!rateLimit.success) return NextResponse.json({ error: `Too many requests...` }, { status: 429 })

// Graceful fallback when external service unavailable
if (!resend) { console.log('Submission:', body); return NextResponse.json({ success: true }) }
```

---

## Critical Patterns

### Accessibility (MANDATORY - Target Audience: Elderly/Disabled)
```tsx
import { FOCUS_STYLES, ARIA_LABELS, ScreenReaderOnly } from '@/lib/accessibility'

className={FOCUS_STYLES.button}  // NEVER custom focus - use .default|.button|.link|.input
aria-label={ARIA_LABELS.phoneNumber}  // Predefined labels in accessibility.tsx
```

### Forms - Use Existing Hooks (NEVER rebuild)
```tsx
import { useContactForm } from '@/hooks/useContactForm'  // Also: useVolunteerForm, useNewsletterSignup, useAssessmentBooking
import { validateForm, contactFormRules, validationPatterns } from '@/utils/validation'

const { isSubmitting, isSubmitted, error, submitForm, resetForm } = useContactForm('/api/contact')
const errors = validateForm(data, contactFormRules)  // UK phone/postcode patterns: validationPatterns.phone, .postcode, .email
```

### SEO Metadata (REQUIRED on all pages)
```tsx
import { generateSEOMetadata, seoConfigs } from '@/lib/seo'
export const metadata = generateSEOMetadata(seoConfigs.services)  // Presets: .home|.services|.about|.contact|.volunteer|.news|.donate
```

### Firebase (Always Check Availability)
```tsx
import { db, getAuthLazy, storage } from '@/lib/firebase'
if (!db) return getFallbackData()  // Firebase may not be configured - never crash
```

---

## Styling

### Brand Colors (ONLY `serve-*` from globals.css @theme)
- Primary: `serve-blue-600` | Success: `serve-green-600` | Alerts: `serve-red-600`
- Warnings: `serve-orange-600` | Accents: `serve-teal-600` | All palettes: 50-950 scale
- Social: `facebook` (#1877f2), `linkedin` (#0a66c2)

### Components
- `<MajorTitle primary="Our" secondary="Services" dark size="large" />` - All page headings
- `<OptimizedImage src="..." alt="..." />` - Always use (handles loading states/errors)
- Icons: `@heroicons/react/24/outline` - import individually
- Touch targets: `min-h-[44px] min-w-[44px]` on ALL interactive elements

---

## Commands
```bash
npm run dev              # Development server
npm run test:all         # MUST pass before commit (runs test:forms + test:compatibility + test:booking)
npm run deploy:prepare   # lint → build → test:all (pre-deployment checklist)
npm run build            # Production build
```

---

## Non-Negotiable Rules

1. **Accessibility**: Use `FOCUS_STYLES`, `ARIA_LABELS` from `@/lib/accessibility`
2. **Touch Targets**: All buttons/links ≥44px (elderly/disabled users)
3. **Graceful Failures**: Never break UI - always return fallback data
4. **Brand Colors**: Only `serve-*` from globals.css
5. **Forms**: Use existing hooks - never rebuild form state
6. **Images**: Always `<OptimizedImage>` with meaningful `alt` text
7. **British English**: UK spelling (colour, organisation, favour)
8. **Rate Limiting**: ALL API routes must use `checkRateLimit()`
9. **SEO**: ALL pages export `metadata` using `generateSEOMetadata()`

---

## Key Files

| Purpose | Location |
|---------|----------|
| Accessibility constants | `src/lib/accessibility.tsx` |
| Form hooks | `src/hooks/use*.ts` (useContactForm, useVolunteerForm, useNewsletterSignup, useAssessmentBooking) |
| Validation (UK patterns) | `src/utils/validation.ts` |
| SEO presets | `src/lib/seo.ts` |
| Rate limiting | `src/lib/rateLimit.ts` |
| Firebase client | `src/lib/firebase.ts` |
| Brand colours | `src/app/globals.css` (@theme block) |
| Page titles | `src/components/MajorTitle.tsx` |
| Image wrapper | `src/components/OptimizedImage.tsx` |

---

## Contact Details (Use Consistently)
**Phone**: 01933 315555 | **Email**: info@serve.org.uk | **Charity Number**: 1043321
| Brand Colors | `src/app/globals.css` (@theme) |

---

## Brand Contact
**Phone**: 01933 315555 | **Email**: info@serve.org.uk | **Charity**: 1043321
