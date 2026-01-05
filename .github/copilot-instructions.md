# SERVE Charity Website - AI Coding Instructions

## Project Context
Next.js 16 + React 19 charity website for SERVE (Charity #1043321), providing care services to older people and adults with disabilities in Northamptonshire. **Award-winning care since 1980s**. Accessibility-first design optimized for elderly/disabled users.

**Live**: Vercel deployment | **Tech**: Tailwind v4, TypeScript 5.9, Resend email API

## Architecture Essentials

### Server-First Components
- **Default**: Server Components - only add `"use client"` for hooks, event handlers, browser APIs
- **Path aliases**: `@/*` → `src/*`
- **Client components**: `Header.tsx`, `Hero.tsx`, `Contact.tsx`, `OptimizedImage.tsx`, `forms.tsx`

### API Routes (`src/app/api/*/route.ts`)
All routes follow rate-limiting + graceful degradation pattern:
```typescript
// Check rate limit first (src/lib/rateLimit.ts)
const ip = getClientIP(request)
const rateLimit = checkRateLimit(ip, rateLimiters.contact)
if (!rateLimit.success) return NextResponse.json({ error }, { status: 429 })

// Graceful fallback if service unavailable
if (!resend) {
  console.log('Submission:', body)
  return NextResponse.json({ success: true })
}
```

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

### Page Structure Pattern
```tsx
// Server component page (src/app/services/page.tsx pattern)
import { generateSEOMetadata, seoConfigs } from '@/lib/seo'
export const metadata = generateSEOMetadata(seoConfigs.services)

// Service data as typed arrays with gradients, icons from @heroicons/react
const services = [{ id, title, icon: HeartIcon, gradient: 'from-rose-500 to-red-600', href }]
```

## Styling & Brand

### Colors (Tailwind v4 - `serve-*` palettes only)
Defined in `src/app/globals.css` via `@theme` block:
```css
bg-serve-blue-600 hover:bg-serve-blue-700  /* Primary - WCAG AAA compliant */
serve-red, serve-green, serve-orange, serve-teal  /* Secondary 50-950 scale */
```

### Key Components
- `<MajorTitle primary="Our" secondary="Services" dark size="large" />` - Consistent headings
- `<OptimizedImage src="..." alt="..." priority />` - Always use instead of raw Next.js Image (handles loading states, errors)
- Icons: `@heroicons/react/24/outline` - import individual icons, not entire sets

## Commands
```bash
npm run dev              # Development server (localhost:3000)
npm run test:all         # Run all tests before commits (forms + compatibility + booking)
npm run deploy:prepare   # lint → build → test:all
npm run audit:performance # Lighthouse audit (requires dev server running)
```

## Non-Negotiable Rules
1. **Accessibility**: Use `FOCUS_STYLES`, `ARIA_LABELS` from accessibility.tsx - never custom focus rings
2. **Touch Targets**: All interactive elements ≥44px
3. **Graceful Failures**: API errors return fallback data, never break UI
4. **Server-First**: Only `"use client"` when absolutely necessary
5. **Brand Colors**: Only `serve-*` palettes from globals.css `@theme` block
6. **Forms**: Use existing hooks (`useContactForm`, etc.) - never rebuild form state
7. **Images**: Always use `<OptimizedImage>` wrapper with meaningful `alt` text
8. **British English**: All content uses UK spelling (colour, organisation, favour, etc.)

## Key Files
| Purpose | Location |
|---------|----------|
| Accessibility | `src/lib/accessibility.tsx` |
| Mobile utilities | `src/lib/mobile.tsx` |
| Form components | `src/lib/forms.tsx` |
| Validation (UK patterns) | `src/utils/validation.ts` |
| Form hooks | `src/hooks/use*.ts` |
| Email templates | `src/lib/emails/` |
| SEO/metadata | `src/lib/seo.ts` |
| Brand colors | `src/app/globals.css` (@theme block) |

## Brand Info
- **Phone**: 01933 315555 | **Email**: info@serve.org.uk
- **Address**: 8 West Street, Rushden, Northants NN10 0RT
- **Charity**: 1043321 | **CQC**: cqc.org.uk/location/1-2165219210
