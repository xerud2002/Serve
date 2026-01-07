# SERVE Charity Website - AI Coding Instructions

## Project Context
Next.js 16 + React 19 charity website for SERVE (Charity #1043321), providing care services to older people and adults with disabilities in Northamptonshire. **Award-winning care since 1980s**. Accessibility-first design optimized for elderly/disabled users.

**Live**: Vercel (London region) | **Tech**: Tailwind v4, TypeScript 5.9, Resend email API, Firebase Firestore

---

## Architecture Essentials

### Server-First Components
- **Default**: Server Components - only add `"use client"` for hooks, event handlers, browser APIs
- **Path aliases**: `@/*` → `src/*`
- **Client components**: `Header.tsx`, `Hero.tsx`, `Contact.tsx`, `OptimizedImage.tsx`, `forms.tsx`, `FacebookFeed.tsx`, `BookingManager.tsx`

### API Routes Pattern (`src/app/api/*/route.ts`)
**ALL API routes** follow this mandatory pattern:
```typescript
// 1. Rate limiting FIRST (src/lib/rateLimit.ts - in-memory, resets on deploy)
const ip = getClientIP(request)
const rateLimit = checkRateLimit(ip, rateLimiters.contact)
if (!rateLimit.success) return NextResponse.json({ error }, { status: 429 })

// 2. Validate request body
const { name, email } = await request.json()
if (!name || !email) return NextResponse.json({ error: 'Missing fields' }, { status: 400 })

// 3. Graceful degradation (never crash if external service unavailable)
if (!resend) {
  console.log('Submission:', body)
  return NextResponse.json({ success: true })
}
```
**Rate limiters**: `rateLimiters.{contact, newsletter, volunteer}` (5 req/15min, 10 req/hour, 3 req/5min)

### Accessibility (`src/lib/accessibility.tsx`) - MANDATORY
```tsx
import { FOCUS_STYLES, ARIA_LABELS, ScreenReaderOnly, AccessibleButton } from '@/lib/accessibility'

className={FOCUS_STYLES.button}  // Never write custom focus rings
aria-label={ARIA_LABELS.phoneNumber}  // "Call SERVE at 01933 315555"
<ScreenReaderOnly>Hidden text</ScreenReaderOnly>
```
Available: `FOCUS_STYLES.{default, button, link, input}`, `ARIA_LABELS` constants, `AccessibleButton`, `ExternalLink`

### Mobile-First (`src/lib/mobile.tsx`) - 44px Touch Targets
```tsx
import { useIsMobile, MOBILE_CLASSES } from '@/lib/mobile'
className={MOBILE_CLASSES.touchTarget}  // min-h-[44px] min-w-[44px]
```
Hooks: `useIsMobile()` returns `{isMobile, screenSize, isSmall, isMedium, isLarge}`, `useTouchInteractions()`

### Forms - Use Existing Infrastructure
```tsx
// Hook: src/hooks/useContactForm.ts (also: useVolunteerForm, useNewsletterSignup, useAssessmentBooking)
const { isSubmitting, isSubmitted, error, submitForm, resetForm } = useContactForm('/api/contact')

// Validation: src/utils/validation.ts (UK phone/postcode patterns)
const errors = validateForm(data, contactFormRules)

// Components: src/lib/forms.tsx
<AccessibleFormField id="email" label="Email" type="email" required error={errors.email} />
```

### SEO & Metadata Pattern
```tsx
// Preferred: Use predefined configs from src/lib/seo.ts
import { generateSEOMetadata, seoConfigs } from '@/lib/seo'
export const metadata = generateSEOMetadata(seoConfigs.services)

// Alternative: Custom metadata (for article pages)
export const metadata: Metadata = {
  title: 'Page Title | SERVE',
  description: 'Description here',
  // ... rest
}
```
**Available configs**: `seoConfigs.{home, services, donate, volunteer, news}`

### Firebase Integration (`src/lib/firebase.ts`)
```tsx
// Lazy initialization - only loads when Firebase config present
import { db } from '@/lib/firebase'
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore'

// Always check if Firebase configured (graceful fallback)
if (!db) {
  console.warn('Firebase not configured, using fallback')
  return getFallbackData()
}

// Admin auth: Lazy-loaded only on admin pages
const auth = await getAuthLazy()
```
**Collections**: `posts` (Facebook posts), `bookings` (assessments), `newsletter` (signups)

---

## Styling & Brand

### Colors (Tailwind v4 - `serve-*` palettes only)
Defined in `src/app/globals.css` via `@theme` block (lines 1-100):
```css
bg-serve-blue-600 hover:bg-serve-blue-700  /* Primary - WCAG AAA */
bg-serve-green-600  /* Success/positive actions */
bg-serve-red-600    /* Alerts/important */
bg-serve-orange-600 /* Warnings */
serve-teal-600      /* Accents */
/* All have 50-950 scale */
```

### Key Components
- `<MajorTitle primary="Our" secondary="Services" dark size="large" />` - Consistent headings
- `<OptimizedImage src="..." alt="..." priority />` - Always use instead of raw Next.js Image (handles loading states, errors)
- Icons: `@heroicons/react/24/outline` - import individual icons, not entire sets
- `<ScrollReveal>` - Wraps sections for fade-in animations on scroll

---

## Data Flow & Integration

### Facebook Feed (`src/components/FacebookFeed.tsx`)
- Loads from Firestore `posts` collection (4 latest posts)
- Auto-refreshes hourly client-side
- **Graceful fallback**: Returns `getFallbackPosts()` if Firebase unavailable
- Posts fetched via API route: `/api/facebook` (not client-accessible)

### Email System (Dual-Provider)
1. **Resend API** (primary): `RESEND_API_KEY` - admin + user confirmation emails
2. **Microsoft 365 SMTP** (fallback): `SMTP_*` env vars
3. **Templates**: `src/lib/emails/` - HTML templates for each form type
4. **Pattern**: Send admin notification, then user confirmation

### Admin Pages (`src/app/admin/*`)
- **Auth**: Firebase Auth lazy-loaded in `layout.tsx` (onAuthStateChanged)
- **Protected**: Redirects to login if not authenticated
- **Pages**: `/admin/bookings`, `/admin/posts`, `/admin/newsletter`
- Mock data in components (e.g., `BookingManager.tsx` line 21-60)

---

## Developer Workflows

### Commands
```bash
npm run dev              # Development (localhost:3000)
npm run test:all         # forms + compatibility + booking tests (MUST pass before commit)
npm run deploy:prepare   # lint → build → test:all
npm run audit:performance # Lighthouse audit (requires dev server running)
```

### Testing (`scripts/test-*.js`)
- **test-forms.js**: Validates form hooks, validation patterns, API routes
- **test-compatibility.js**: Browser/device compatibility checks
- **test-booking-system.js**: Assessment booking flow end-to-end
Run **BEFORE** every commit with `npm run test:all`

### Deployment (Vercel)
- **Region**: `lhr1` (London) - defined in `vercel.json`
- **Security headers**: CSP, X-Frame-Options, HSTS (see `vercel.json` headers)
- **Caching**: 1yr for static assets, 0s for service worker
- **Env vars**: Set via `vercel-env-setup.ps1` or Vercel dashboard
- **Auto-deploy**: `main` branch → production

### PWA Configuration (`next.config.js`)
- **Workbox caching**: Google Fonts (1yr), FB API (1day, NetworkFirst), images (30days, CacheFirst)
- **Disabled in dev**: `disable: process.env.NODE_ENV === 'development'`
- **Service worker**: `public/sw.js` - auto-generated

---

## Non-Negotiable Rules

1. **Accessibility**: Use `FOCUS_STYLES`, `ARIA_LABELS` from accessibility.tsx - never custom focus rings
2. **Touch Targets**: All interactive elements ≥44px (`MOBILE_CLASSES.touchTarget`)
3. **Graceful Failures**: API errors return fallback data, never break UI
4. **Server-First**: Only `"use client"` when absolutely necessary (hooks/events/browser APIs)
5. **Brand Colors**: Only `serve-*` palettes from `globals.css` `@theme` block
6. **Forms**: Use existing hooks (`useContactForm`, etc.) - never rebuild form state
7. **Images**: Always use `<OptimizedImage>` wrapper with meaningful `alt` text
8. **British English**: All content uses UK spelling (colour, organisation, favour, etc.)
9. **Rate Limiting**: ALL API routes must use `checkRateLimit()` before processing
10. **SEO**: ALL pages must have `metadata` export (prefer `generateSEOMetadata()`)

---

## Key Files Reference

| Purpose | Location |
|---------|----------|
| Accessibility utilities | `src/lib/accessibility.tsx` |
| Mobile utilities | `src/lib/mobile.tsx` |
| Form components | `src/lib/forms.tsx` |
| Validation (UK patterns) | `src/utils/validation.ts` |
| Form hooks | `src/hooks/use*.ts` |
| Email templates | `src/lib/emails/` |
| SEO/metadata | `src/lib/seo.ts` |
| Rate limiting | `src/lib/rateLimit.ts` |
| Firebase config | `src/lib/firebase.ts` |
| Brand colors | `src/app/globals.css` (@theme block) |
| PWA config | `next.config.js` (workbox settings) |
| Security headers | `vercel.json` |
| Test suites | `scripts/test-*.js` |

---

## Brand Info
- **Phone**: 01933 315555 | **Email**: info@serve.org.uk
- **Address**: 8 West Street, Rushden, Northants NN10 0RT
- **Charity**: 1043321 | **CQC**: cqc.org.uk/location/1-2165219210
- **Facebook**: Page ID 239416516576684 (SERVE234)
- **Twitter**: @serve_charity
