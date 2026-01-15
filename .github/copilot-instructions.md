# SERVE Charity Website - AI Coding Instructions

## Project Overview
Next.js 16 + React 19 charity website for SERVE (Charity #1043321). **Accessibility-first** for elderly/disabled users in Northamptonshire.

**Stack**: Tailwind v4, TypeScript 5.9, Resend email, Firebase Firestore | **Deploy**: Vercel (lhr1 London)

---

## Architecture

### Server vs Client Components
Default to Server Components. Add `"use client"` ONLY for hooks/events/browser APIs.

**Client components**: `Header`, `Hero`, `Contact`, `OptimizedImage`, `FacebookFeed`, `BookingManager`, `VolunteerForm`, `TransportBooking`, `Services`, `ScrollReveal`, `RelatedServices`, `NewsletterSignup`, `LayoutWrapper`, `FriendsOfServe`, `GoogleAnalytics`, `ErrorBoundary`, `CookieConsent`, `InstallPrompt`, `WebVitals`, `AhrefsAnalytics`

**Server components**: Page components (`src/app/*/page.tsx`), `Footer`, `MajorTitle`, `Breadcrumb`, `StructuredData`

### API Routes Pattern (`src/app/api/*/route.ts`)
ALL routes MUST follow this structure:
```typescript
import { checkRateLimit, getClientIP, rateLimiters } from '@/lib/rateLimit'

export async function POST(request: NextRequest) {
  // 1. Rate limit FIRST
  const ip = getClientIP(request)
  const rateLimit = checkRateLimit(ip, rateLimiters.contact) // .newsletter, .volunteer
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

### Accessibility (MANDATORY - Target: Elderly/Disabled)
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
const errors = validateForm(data, contactFormRules)  // UK patterns: validationPatterns.phone, .postcode, .email
```

### SEO Metadata (REQUIRED on all pages)
```tsx
import { generateSEOMetadata, seoConfigs } from '@/lib/seo'
export const metadata = generateSEOMetadata(seoConfigs.services)  // Presets: .home|.services|.about|.contact|.volunteer|.news|.donate
```

### Firebase (Always check availability)
```tsx
import { db, getAuthLazy, storage } from '@/lib/firebase'
if (!db) return getFallbackData()  // Firebase may not be configured - NEVER crash

// Auth lazy-loaded only in admin pages:
const auth = await getAuthLazy()
```

---

## Styling

### Brand Colors (ONLY `serve-*` from globals.css @theme)
- Primary: `serve-blue-600` | Success: `serve-green-600` | Alerts: `serve-red-600`
- Warnings: `serve-orange-600` | Accents: `serve-teal-600` | All palettes: 50-950 scale

### Components
```tsx
<MajorTitle primary="Our" secondary="Services" dark size="large" />  // Page headings
<OptimizedImage src="/images/..." alt="Descriptive text" />  // ALWAYS use, never Next/Image directly
```
- Icons: `@heroicons/react/24/outline` - import individually
- Touch targets: `min-h-[44px] min-w-[44px]` on ALL interactive elements

---

## Commands
```bash
npm run dev              # Development server
npm run test:all         # MUST pass before commit (test:forms + test:compatibility + test:booking)
npm run deploy:prepare   # lint → build → test:all (pre-deployment)
npm run build            # Production build
```

---

## Non-Negotiable Rules

1. **Accessibility**: Use `FOCUS_STYLES`, `ARIA_LABELS` from `@/lib/accessibility`
2. **Touch Targets**: All buttons/links ≥44px (`min-h-[44px] min-w-[44px]`)
3. **Graceful Failures**: Never crash UI - always return fallback data
4. **Brand Colors**: Only `serve-*` from globals.css `@theme`
5. **Forms**: Use existing hooks (`useContactForm`, `useVolunteerForm`, `useNewsletterSignup`, `useAssessmentBooking`)
6. **Images**: Always `<OptimizedImage>` with meaningful `alt` text
7. **British English**: UK spelling (colour, organisation, favour, centre)
8. **Rate Limiting**: ALL API routes use `checkRateLimit()` with appropriate limiter
9. **SEO**: ALL pages export `metadata` using `generateSEOMetadata()`

---

## Key Files Reference

| Purpose | Location |
|---------|----------|
| Accessibility utilities | `src/lib/accessibility.tsx` |
| Form hooks | `src/hooks/use*.ts` |
| Validation (UK patterns) | `src/utils/validation.ts` |
| SEO metadata | `src/lib/seo.ts` |
| Rate limiting | `src/lib/rateLimit.ts` |
| Firebase config | `src/lib/firebase.ts` |
| Brand colours | `src/app/globals.css` (@theme block) |
| Email templates | `src/lib/emails/` |

---

## Brand Contact
**Phone**: 01933 315555 | **Email**: info@serve.org.uk | **Charity**: 1043321 | **Address**: 8 West Street, Rushden, NN10 0RT
