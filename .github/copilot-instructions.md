# SERVE Charity Website - AI Coding Instructions

## Project Overview
Next.js 16 + React 19 charity website for SERVE (Charity #1043321). Accessibility-first design for elderly/disabled users in Northamptonshire.

**Stack**: Tailwind v4, TypeScript 5.9, Resend email, Firebase Firestore | **Deploy**: Vercel (lhr1 London)

---

## Architecture

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
```

### Forms - Use Existing Hooks (NEVER rebuild)
```tsx
import { useContactForm } from '@/hooks/useContactForm'  // Also: useVolunteerForm, useNewsletterSignup
import { validateForm, contactFormRules, validationPatterns } from '@/utils/validation'

const { isSubmitting, isSubmitted, error, submitForm } = useContactForm('/api/contact')
const errors = validateForm(data, contactFormRules)  // UK phone/postcode patterns built-in
```

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
```

---

## Styling

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

---

## Commands
```bash
npm run dev              # Development server
npm run test:all         # MUST pass before commit (runs test:forms + test:compatibility + test:booking)
npm run deploy:prepare   # lint → build → test:all
npm run lint             # ESLint check
```

---

## Non-Negotiable Rules

1. **Accessibility**: Use `FOCUS_STYLES`, `ARIA_LABELS` from `src/lib/accessibility.tsx`
2. **Touch Targets**: All buttons/links ≥44px (`min-h-[44px] min-w-[44px]`)
3. **Graceful Failures**: Never crash UI - always return fallback data
4. **Brand Colors**: Only `serve-*` from globals.css `@theme`
5. **Forms**: Use existing hooks (`useContactForm`, `useVolunteerForm`, `useNewsletterSignup`)
6. **Images**: Always `<OptimizedImage>` with meaningful `alt` text
7. **British English**: UK spelling (colour, organisation, favour, centre)
8. **Rate Limiting**: ALL API routes use `checkRateLimit()` with appropriate limiter
9. **SEO**: ALL pages export `metadata` using `generateSEOMetadata()`

---

## Key Files Reference

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

---

## Brand Contact
**Phone**: 01933 315555 | **Email**: info@serve.org.uk | **Charity**: 1043321 | **Address**: 8 West Street, Rushden, NN10 0RT
