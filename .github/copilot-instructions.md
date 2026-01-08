# SERVE Charity Website - AI Coding Instructions

## Project Overview
Next.js 16 + React 19 charity website for SERVE (Charity #1043321). Accessibility-first design for elderly/disabled users in Northamptonshire.

**Stack**: Tailwind v4, TypeScript 5.9, Resend email, Firebase Firestore | **Deploy**: Vercel (lhr1 London)

---

## Critical Patterns

### Server Components Default
Only add `"use client"` for hooks/events/browser APIs. Current client components: `Header`, `Hero`, `Contact`, `OptimizedImage`, `FacebookFeed`, `BookingManager`

### API Routes (`src/app/api/*/route.ts`)
```typescript
// ALL routes MUST follow this exact pattern:
const ip = getClientIP(request)
const rateLimit = checkRateLimit(ip, rateLimiters.contact) // .newsletter, .volunteer
if (!rateLimit.success) return NextResponse.json({ error }, { status: 429 })

// Validate, then graceful fallback if external service unavailable:
if (!resend) { console.log('Submission:', body); return NextResponse.json({ success: true }) }
```

### Accessibility (MANDATORY)
```tsx
import { FOCUS_STYLES, ARIA_LABELS, ScreenReaderOnly } from '@/lib/accessibility'
className={FOCUS_STYLES.button}  // Never custom focus rings - use .default|.button|.link|.input
aria-label={ARIA_LABELS.phoneNumber}  // Predefined labels for consistency
```

### Forms - Use Existing Hooks
```tsx
import { useContactForm } from '@/hooks/useContactForm'  // Also: useVolunteerForm, useNewsletterSignup
import { validateForm, contactFormRules, validationPatterns } from '@/utils/validation'

const { isSubmitting, isSubmitted, error, submitForm } = useContactForm('/api/contact')
const errors = validateForm(data, contactFormRules)  // UK phone/postcode patterns built-in
```

### SEO Metadata
```tsx
import { generateSEOMetadata, seoConfigs } from '@/lib/seo'
export const metadata = generateSEOMetadata(seoConfigs.services)  // .home|.services|.donate|.volunteer|.news
```

### Firebase (Graceful Fallback)
```tsx
import { db, getAuthLazy } from '@/lib/firebase'
if (!db) return getFallbackData()  // Always check - Firebase may not be configured
```

---

## Styling

### Brand Colors (ONLY `serve-*` palettes)
Defined in `globals.css` `@theme` block: `serve-blue-600` (primary), `serve-green-600` (success), `serve-red-600` (alerts), `serve-orange-600` (warnings), `serve-teal-600` (accents) - all 50-950 scale

### Components
- `<MajorTitle primary="Our" secondary="Services" dark size="large" />` - Page headings
- `<OptimizedImage src="..." alt="..." />` - Always use instead of Next.js Image
- Icons: `@heroicons/react/24/outline` - import individually
- Touch targets: `min-h-[44px] min-w-[44px]` on all interactive elements

---

## Commands
```bash
npm run dev              # Development
npm run test:all         # MUST pass before commit (forms + compatibility + booking)
npm run deploy:prepare   # lint → build → test:all
```

---

## Non-Negotiable Rules

1. **Accessibility**: Use `FOCUS_STYLES`, `ARIA_LABELS` from `@/lib/accessibility`
2. **Touch Targets**: All buttons/links ≥44px
3. **Graceful Failures**: Never break UI - return fallback data
4. **Brand Colors**: Only `serve-*` from globals.css
5. **Forms**: Use existing hooks - never rebuild form state
6. **Images**: Always `<OptimizedImage>` with meaningful `alt`
7. **British English**: UK spelling (colour, organisation, favour)
8. **Rate Limiting**: ALL API routes use `checkRateLimit()`
9. **SEO**: ALL pages export `metadata`

---

## Key Files

| Purpose | File |
|---------|------|
| Accessibility | `src/lib/accessibility.tsx` |
| Forms/Validation | `src/lib/forms.tsx`, `src/utils/validation.ts`, `src/hooks/use*.ts` |
| SEO | `src/lib/seo.ts` |
| Rate Limiting | `src/lib/rateLimit.ts` |
| Firebase | `src/lib/firebase.ts` |
| Brand Colors | `src/app/globals.css` (@theme) |

---

## Brand Contact
**Phone**: 01933 315555 | **Email**: info@serve.org.uk | **Charity**: 1043321
