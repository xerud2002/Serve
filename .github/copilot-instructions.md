# SERVE Charity Website - AI Coding Instructions

## Project Overview
Next.js 16 + React 19 charity website for SERVE (Charity #1043321). Accessibility-first design for elderly/disabled users in Northamptonshire.

**Stack**: Tailwind v4, TypeScript 5.9, Resend email, Firebase Firestore | **Deploy**: Vercel (lhr1 London)

---

## Architecture
<<<<<<< HEAD

### Server vs Client Components
Default to Server Components. Add `"use client"` ONLY for hooks/events/browser APIs.

**Client components** (require interactivity): `Header`, `Hero`, `Contact`, `OptimizedImage`, `FacebookFeed`, `BookingManager`, `NewsletterSignup`, `VolunteerForm`, `CookieConsent`, `InstallPrompt`, `ScrollReveal`, `Services`, `RelatedServices`

**Server components** (static/data): Page components (`src/app/*/page.tsx`), `Footer`, `MajorTitle`, `Breadcrumb`, `StructuredData`

### API Routes Pattern (`src/app/api/*/route.ts`)
ALL routes follow this exact structure:
```typescript
import { checkRateLimit, getClientIP, rateLimiters } from '@/lib/rateLimit'

export async function POST(request: NextRequest) {
  // 1. Rate limit FIRST
  const ip = getClientIP(request)
  const rateLimit = checkRateLimit(ip, rateLimiters.contact) // .newsletter, .api
  if (!rateLimit.success) return NextResponse.json({ error: `Too many requests...` }, { status: 429 })

  // 2. Validate input
  const body = await request.json()
  if (!name || !email) return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })

  // 3. Graceful fallback if service unavailable
  if (!resend) { console.log('Submission:', body); return NextResponse.json({ success: true }) }
}
```

---

## Critical Patterns

### Accessibility (MANDATORY for elderly/disabled users)
```tsx
import { FOCUS_STYLES, ARIA_LABELS, ScreenReaderOnly } from '@/lib/accessibility'

// Focus rings - NEVER custom, use predefined:
className={FOCUS_STYLES.button}  // .default | .button | .link | .input

// ARIA labels - use predefined for consistency:
aria-label={ARIA_LABELS.phoneNumber}  // See src/lib/accessibility.tsx for full list
=======

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
>>>>>>> 8c599229c15fba390e87d33f4a0b87c01ab6cfa1
```

### Forms - Use Existing Hooks (NEVER rebuild)
```tsx
import { useContactForm } from '@/hooks/useContactForm'  // Also: useVolunteerForm, useNewsletterSignup, useAssessmentBooking
import { validateForm, contactFormRules, validationPatterns } from '@/utils/validation'

const { isSubmitting, isSubmitted, error, submitForm, resetForm } = useContactForm('/api/contact')
const errors = validateForm(data, contactFormRules)  // UK phone/postcode patterns: validationPatterns.phone, .postcode, .email
```

<<<<<<< HEAD
### SEO Metadata (ALL pages must export)
```tsx
import { generateSEOMetadata, seoConfigs } from '@/lib/seo'
export const metadata = generateSEOMetadata(seoConfigs.services)
// Available: .home | .services | .about | .contact | .volunteer | .news | .donate
```

### Firebase (Always check availability)
```tsx
import { db, getAuthLazy } from '@/lib/firebase'
if (!db) return getFallbackData()  // Firebase may not be configured - NEVER crash

// Auth lazy-loaded only in admin pages (see src/app/admin/layout.tsx):
const auth = await getAuthLazy()
const { signInWithEmailAndPassword } = await import('firebase/auth')
=======
### SEO Metadata (REQUIRED on all pages)
```tsx
import { generateSEOMetadata, seoConfigs } from '@/lib/seo'
export const metadata = generateSEOMetadata(seoConfigs.services)  // Presets: .home|.services|.about|.contact|.volunteer|.news|.donate
```

### Firebase (Always Check Availability)
```tsx
import { db, getAuthLazy, storage } from '@/lib/firebase'
if (!db) return getFallbackData()  // Firebase may not be configured - never crash
>>>>>>> 8c599229c15fba390e87d33f4a0b87c01ab6cfa1
```

---

## Styling

<<<<<<< HEAD
### Brand Colors (ONLY `serve-*` palettes)
Defined in `src/app/globals.css` `@theme` block - all have 50-950 scale:
- `serve-blue-600` - primary actions, links
- `serve-green-600` - success states
- `serve-red-600` - errors, alerts
- `serve-orange-600` - warnings
- `serve-teal-600` - accents

### Components
```tsx
<MajorTitle primary="Our" secondary="Services" dark size="large" />  // Page headings
<OptimizedImage src="/images/..." alt="Descriptive text" />  // ALWAYS use, never Next/Image directly
```

### Icons & Touch Targets
```tsx
import { HeartIcon } from '@heroicons/react/24/outline'  // Import individually
// ALL interactive elements: min-h-[44px] min-w-[44px]
```
=======
### Brand Colors (ONLY `serve-*` from globals.css @theme)
- Primary: `serve-blue-600` | Success: `serve-green-600` | Alerts: `serve-red-600`
- Warnings: `serve-orange-600` | Accents: `serve-teal-600` | All palettes: 50-950 scale
- Social: `facebook` (#1877f2), `linkedin` (#0a66c2)

### Components
- `<MajorTitle primary="Our" secondary="Services" dark size="large" />` - All page headings
- `<OptimizedImage src="..." alt="..." />` - Always use (handles loading states/errors)
- Icons: `@heroicons/react/24/outline` - import individually
- Touch targets: `min-h-[44px] min-w-[44px]` on ALL interactive elements
>>>>>>> 8c599229c15fba390e87d33f4a0b87c01ab6cfa1

---

## Commands
```bash
npm run dev              # Development server
npm run test:all         # MUST pass before commit (runs test:forms + test:compatibility + test:booking)
<<<<<<< HEAD
npm run deploy:prepare   # lint → build → test:all
npm run lint             # ESLint check
=======
npm run deploy:prepare   # lint → build → test:all (pre-deployment checklist)
npm run build            # Production build
>>>>>>> 8c599229c15fba390e87d33f4a0b87c01ab6cfa1
```

---

## Non-Negotiable Rules

<<<<<<< HEAD
1. **Accessibility**: Use `FOCUS_STYLES`, `ARIA_LABELS` from `src/lib/accessibility.tsx`
2. **Touch Targets**: All buttons/links ≥44px (`min-h-[44px] min-w-[44px]`)
3. **Graceful Failures**: Never crash UI - always return fallback data
4. **Brand Colors**: Only `serve-*` from globals.css `@theme`
5. **Forms**: Use existing hooks (`useContactForm`, `useVolunteerForm`, `useNewsletterSignup`)
6. **Images**: Always `<OptimizedImage>` with meaningful `alt` text
7. **British English**: UK spelling (colour, organisation, favour, centre)
8. **Rate Limiting**: ALL API routes use `checkRateLimit()` with appropriate limiter
=======
1. **Accessibility**: Use `FOCUS_STYLES`, `ARIA_LABELS` from `@/lib/accessibility`
2. **Touch Targets**: All buttons/links ≥44px (elderly/disabled users)
3. **Graceful Failures**: Never break UI - always return fallback data
4. **Brand Colors**: Only `serve-*` from globals.css
5. **Forms**: Use existing hooks - never rebuild form state
6. **Images**: Always `<OptimizedImage>` with meaningful `alt` text
7. **British English**: UK spelling (colour, organisation, favour)
8. **Rate Limiting**: ALL API routes must use `checkRateLimit()`
>>>>>>> 8c599229c15fba390e87d33f4a0b87c01ab6cfa1
9. **SEO**: ALL pages export `metadata` using `generateSEOMetadata()`

---

## Key Files Reference

<<<<<<< HEAD
| Purpose | File(s) |
|---------|---------|
| Accessibility utilities | `src/lib/accessibility.tsx` |
| Form hooks | `src/hooks/useContactForm.ts`, `useVolunteerForm.ts`, `useNewsletterSignup.ts` |
| Validation (UK patterns) | `src/utils/validation.ts` |
| SEO metadata | `src/lib/seo.ts` |
| Rate limiting | `src/lib/rateLimit.ts` |
| Firebase config | `src/lib/firebase.ts` |
| Brand colors | `src/app/globals.css` (`@theme` block) |
| Admin auth | `src/app/admin/layout.tsx` (lazy-loads Firebase Auth) |
| Email templates | `src/lib/emails/` |
=======
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
>>>>>>> 8c599229c15fba390e87d33f4a0b87c01ab6cfa1

---

## Brand Contact
**Phone**: 01933 315555 | **Email**: info@serve.org.uk | **Charity**: 1043321 | **Address**: 8 West Street, Rushden, NN10 0RT
