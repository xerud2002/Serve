# SERVE Charity Website - AI Coding Instructions

## Project Context
Next.js 16 charity website for SERVE (Charity #1043321), providing care services to older people and adults with disabilities in Northamptonshire. **Award-winning care since 1980s**. Accessibility-first design optimized for elderly/disabled users.

**Live**: Vercel deployment at serve-bueejlay6-xerud2002s-projects.vercel.app

## Architecture Essentials

### Server-First Components
- **Default**: Server Components - only add `"use client"` for hooks, event handlers, browser APIs
- **Path aliases**: `@/*` → `src/*`
- **Client examples**: `Header.tsx`, `Hero.tsx`, `Contact.tsx`, `OptimizedImage.tsx`

### API Routes (`src/app/api/*/route.ts`)
All routes follow rate-limiting + graceful degradation pattern:
```typescript
// Check rate limit first (src/lib/rateLimit.ts)
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
import { FOCUS_STYLES, ARIA_LABELS, ScreenReaderOnly } from '@/lib/accessibility'

className={FOCUS_STYLES.button}  // Never write custom focus rings
aria-label={ARIA_LABELS.phoneNumber}  // "Call SERVE at 01933 315555"
<ScreenReaderOnly>Hidden text</ScreenReaderOnly>
```

### Mobile-First (`src/lib/mobile.tsx`) - 44px Touch Targets
```tsx
import { useIsMobile, MOBILE_CLASSES } from '@/lib/mobile'
className={MOBILE_CLASSES.touchTarget}  // min-h-[44px] min-w-[44px]
```

### Forms - Use Existing Infrastructure
```tsx
// Hook: src/hooks/useContactForm.ts (also: useVolunteerForm, useNewsletterSignup)
const { isSubmitting, isSubmitted, error, submitForm } = useContactForm('/api/contact')

// Validation: src/utils/validation.ts (UK phone/postcode patterns)
const errors = validateForm(data, contactFormRules)

// Components: src/lib/forms.tsx
<AccessibleFormField id="email" label="Email" type="email" required />
```

## Styling & Brand

### Colors (Tailwind - `serve-*` palettes only)
```css
bg-serve-blue-600 hover:bg-serve-blue-700  /* Primary - WCAG AAA compliant */
serve-red, serve-green, serve-orange, serve-teal  /* Secondary 50-950 scale */
```

### Key Components
- `<MajorTitle primary="Our" secondary="Services" dark />` - Consistent headings
- `<OptimizedImage src="..." priority />` - Always use instead of raw Next.js Image

## Commands
```bash
npm run dev              # Development server
npm run test:all         # Run all tests before commits
npm run deploy:prepare   # lint → build → test:all
```

## Non-Negotiable Rules
1. **Accessibility**: Use `FOCUS_STYLES`, `ARIA_LABELS` from accessibility.tsx
2. **Touch Targets**: All interactive elements ≥44px
3. **Graceful Failures**: API errors return fallback data, never break UI
4. **Server-First**: Only `"use client"` when absolutely necessary
5. **Brand Colors**: Only `serve-*` palettes from tailwind.config.js
6. **Forms**: Use existing hooks - never rebuild form state
7. **Images**: Always use `<OptimizedImage>` wrapper
8. **British English**: All content uses UK spelling (colour, organisation, etc.)

## Key Files
| Purpose | Location |
|---------|----------|
| Accessibility | `src/lib/accessibility.tsx` |
| Mobile utilities | `src/lib/mobile.tsx` |
| Form components | `src/lib/forms.tsx` |
| Validation | `src/utils/validation.ts` |
| Form hooks | `src/hooks/use*.ts` |
| Email templates | `src/lib/emails/` |
| PWA config | `next.config.js` |

## Brand Info
- **Phone**: 01933 315555 | **Email**: info@serve.org.uk
- **Address**: 8 West Street, Rushden, Northants NN10 0RT
- **Charity**: 1043321 | **CQC**: cqc.org.uk/location/1-2165219210
