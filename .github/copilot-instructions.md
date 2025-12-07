# SERVE Charity Website - AI Coding Instructions

## Project Context
Next.js 15+ charity website for SERVE (Charity #1043321), providing care services to older people and adults with disabilities in Northamptonshire. **Winner: "Best homecare team, East Midlands" 2024**. Accessibility-first design optimized for elderly/disabled users.

## Production Deployment Status
**Platform**: Vercel  
**Live URL**: https://serve-bueejlay6-xerud2002s-projects.vercel.app  
**Deployment Date**: November 25, 2025  
**Status**: Active and fully functional  
**Environment Variables**: Configured in Vercel (Facebook, Email/SMTP)  
**Next Step**: Connect custom domain serve.org.uk

## Architecture Overview

### Next.js App Router (Server-First)
- **Default**: Server Components (SSR) - only add `"use client"` when absolutely necessary
- **Path aliases**: `@/*` → `src/*` (tsconfig.json)
- **When to use client**: Hooks (`useState`, `useEffect`), event handlers, browser APIs
- **Example client components**: `Header.tsx`, `Hero.tsx`, `Services.tsx`, `Contact.tsx`, `OptimizedImage.tsx`, `ErrorBoundary.tsx`

### API Routes Pattern (`src/app/api/*/route.ts`)
**Standard dual-email pattern** - all forms send admin notification + user confirmation:
```typescript
export async function POST(request: NextRequest) {
  const body = await request.json()
  if (!field) return NextResponse.json({ error: 'Message' }, { status: 400 })
  
  // Graceful fallback if Resend API not configured
  if (!resend) {
    console.log('Contact submission:', body)
    return NextResponse.json({ success: true })
  }
  
  // Send admin + user emails
  await resend.emails.send({ /* admin template */ })
  await resend.emails.send({ /* user confirmation */ })
  return NextResponse.json({ success: true })
}
```
**Active routes**: `/api/contact`, `/api/newsletter`, `/api/facebook-photos`, `/api/facebook-events`, `/api/facebook-posts`

### PWA Configuration (`next.config.js`)
PWA enabled via `next-pwa` with Workbox caching:
- **Google Fonts**: CacheFirst (1 year)
- **Facebook API**: NetworkFirst (1 day, 10s timeout)
- **Images**: CacheFirst (30 days)
- **JS/CSS**: StaleWhileRevalidate (1 day)
- **Disabled in dev**: `disable: process.env.NODE_ENV === 'development'`

### Webpack Bundle Optimization
Custom splitChunks in `next.config.js`:
- **Framework chunk**: React/Next.js (priority 40)
- **Vendor chunk**: npm packages, max 50KB (priority 20)
- **Common chunk**: Shared code across routes (priority 10)

### Accessibility System (`src/lib/accessibility.tsx`)
**Mandatory for all interactive elements** - never write custom focus styles:
```tsx
import { FOCUS_STYLES, ARIA_LABELS, ScreenReaderOnly } from '@/lib/accessibility'

// Pre-built focus rings (2px ring-serve-blue-500)
className={FOCUS_STYLES.button}  // buttons
className={FOCUS_STYLES.link}    // links
className={FOCUS_STYLES.input}   // form inputs

// Standard aria-labels
aria-label={ARIA_LABELS.phoneNumber}  // "Call SERVE at 01933 315555"
aria-label={ARIA_LABELS.mainNavigation}

// Screen reader only text
<ScreenReaderOnly>Hidden from visual users</ScreenReaderOnly>
```
Components: `<AccessibleButton>`, `<ExternalLink>`, keyboard helpers (`KEYBOARD_KEYS`, `handleKeyboardNavigation`)

### Mobile-First System (`src/lib/mobile.tsx`)
**Critical for elderly users** - all interactive elements need 44px minimum touch targets:
```tsx
import { useIsMobile, MOBILE_CLASSES } from '@/lib/mobile'

const { isMobile, isSmall, isMedium, isLarge, screenSize } = useIsMobile()

// Pre-built mobile classes
className={MOBILE_CLASSES.touchTarget}     // min-h-[44px] min-w-[44px]
className={MOBILE_CLASSES.mobilePadding}   // px-4 sm:px-6 lg:px-8
className={MOBILE_CLASSES.safeAreaTop}     // pt-safe-top (notched devices)

// Components: <MobileButton>, <MobileCard>, useTouchInteractions()
```
Test on devices <640px width (elderly users primarily use phones).

### Form Infrastructure (`src/lib/forms.tsx`, `src/hooks/`)
**Never implement form state from scratch** - use existing hooks + components:
```tsx
// 1. Use form hook
import { useContactForm } from '@/hooks/useContactForm'
const { isSubmitting, isSubmitted, error, submitForm } = useContactForm('/api/contact')

// 2. Validate with centralized rules
import { validateForm, contactFormRules } from '@/utils/validation'
const errors = validateForm(data, contactFormRules)

// 3. Use accessible form components
import { AccessibleFormField, AccessibleCheckboxField, FormSubmissionMessage } from '@/lib/forms'
<AccessibleFormField id="email" label="Email" type="email" required />
<FormSubmissionMessage {...{ isSubmitting, isSubmitted, error }} />
```
Available hooks: `useContactForm`, `useVolunteerForm`, `useAssessmentBooking`, `useNewsletterSignup`

### Validation Patterns (`src/utils/validation.ts`)
Centralized validation rules with UK-specific patterns:
```typescript
import { validateForm, validationPatterns } from '@/utils/validation'

validationPatterns.email    // /^[^\s@]+@[^\s@]+\.[^\s@]+$/
validationPatterns.phone    // UK phone numbers (complex regex)
validationPatterns.postcode // UK postcodes

// Pre-built rule sets
contactFormRules, volunteerFormRules
```

## Styling & Brand System

### Color Palette (Tailwind)
**Never use arbitrary colors** - only custom palettes from `tailwind.config.js`:
```css
/* Primary */
bg-serve-blue-600 hover:bg-serve-blue-700 active:bg-serve-blue-800
text-serve-blue-800 /* Dark text */
bg-serve-blue-50 text-serve-blue-800 /* Light backgrounds */

/* Secondary palettes (50-950 scale) */
serve-red, serve-green, serve-orange, serve-teal

/* Note: serve-blue-600 is #1565C0 for WCAG AAA contrast (4.54:1) */
```

### Typography Component (`MajorTitle.tsx`)
Consistent heading styling across site:
```tsx
import MajorTitle from '@/components/MajorTitle'

<MajorTitle 
  primary="Our" 
  secondary="Services"  // Colored accent line
  dark={true}           // White text for dark backgrounds
  size="large"          // or "default"
/>
// Generates <h1> with "Our" + colored "Services" below
```

### Image Optimization (`OptimizedImage.tsx`)
**Always use wrapper** instead of raw Next.js `<Image>`:
```tsx
import OptimizedImage from '@/components/OptimizedImage'

<OptimizedImage 
  src="/images/care/homecare.jpg"
  alt="Homecare support"
  width={800} height={600}
  priority={true}  // Above-the-fold images
/>
// Handles: lazy loading, blur placeholders, error states, aspect ratios
```
Remote images (Facebook CDN) configured in `next.config.js` `remotePatterns`.

## Development Workflow

### Essential Commands
```bash
npm run dev                # Port 3000, hot reload
npm run test:all          # test:forms + test:compatibility + test:booking
npm run deploy:prepare    # lint → build → test:all
npm run audit:performance # Lighthouse (requires dev server running)
```

### Custom Testing (No Jest/Vitest)
- **Scripts**: `scripts/test-forms.js`, `scripts/test-compatibility.js`, `scripts/test-booking-system.js`
- **Form validation**: Tests rules from `src/utils/validation.ts` (email patterns, UK phone/postcode)
- **Run before commits**: `npm run test:all`
- **Booking admin**: Test at `/admin/bookings` (no auth in dev)

### Environment Variables (Graceful Degradation)
**NEVER throw errors for missing env vars** - return empty/fallback data:
```typescript
// Pattern in /api/facebook-photos
if (!process.env.FACEBOOK_ACCESS_TOKEN) {
  return NextResponse.json({ images: [] }, { status: 200 }) // Silent fallback
}
```
Optional vars: `RESEND_API_KEY`, `FACEBOOK_PAGE_ID`, `FACEBOOK_ACCESS_TOKEN`

## Performance Optimizations

### Dynamic Imports (Code Splitting)
Used in `src/app/page.tsx` for below-the-fold content:
```tsx
import dynamic from 'next/dynamic'

const WhyChooseSERVE = dynamic(() => import('@/components/WhyChooseSERVE'), {
  loading: () => <div className="min-h-[400px] bg-gray-50 animate-pulse" />
})
```

### ISR Caching (Facebook APIs)
```typescript
// In /api/facebook-photos/route.ts
export const revalidate = 3600 // 1 hour ISR
```

### Next.js Config Optimizations
- **Image formats**: AVIF → WebP (next.config.js)
- **Compression**: `compress: true` (gzip)
- **Source maps**: Disabled in production
- **Console removal**: Production builds remove logs (except error/warn)
- **Experimental**: `optimizePackageImports`, `webpackBuildWorker`, `cssChunking: 'strict'`

## Critical Integration Points

### Email System (Resend API)
Templates in `src/lib/emails/`:
- `admin-notification.ts` - Sent to web@serve.co.uk
- `user-confirmation.ts` - Sent to form submitter
- Falls back to console.log if `RESEND_API_KEY` missing

### Facebook Graph API
Routes: `/api/facebook-photos`, `/api/facebook-events`, `/api/facebook-posts`
- **Graceful degradation**: Returns `{ images: [] }` if token missing
- **Error handling**: Never expose API errors to client
- **ISR caching**: 1 hour revalidation

### SEO Infrastructure
- **Metadata**: `src/lib/seo.ts` with `generateSEOMetadata()` helper
- **Sitemap**: Auto-generated at `src/app/sitemap.ts`
- **Robots**: `src/app/robots.ts`
- **Structured data**: `<StructuredData>` component (LocalBusiness schema)
- **OG tags**: Centralized in `src/app/layout.tsx`

## Non-Negotiable Rules

1. **Accessibility First**: Every change passes keyboard nav + screen reader testing
2. **Mobile Touch Targets**: All buttons/links ≥44px (use `MOBILE_CLASSES.touchTarget`)
3. **Graceful Failures**: API errors/missing env vars never break UI - return empty/fallback
4. **Server-First**: Only `"use client"` when hooks/state/events required
5. **Brand Colors**: Use `serve-blue` palette - never arbitrary colors
6. **Form Hooks**: Use existing `useContactForm`/`useVolunteerForm` - never rebuild state
7. **OptimizedImage**: Always use wrapper instead of raw Next.js `<Image>`
8. **FOCUS_STYLES**: Never write custom focus rings - extend from `src/lib/accessibility.tsx`

## Performance Targets (Lighthouse)
- **FCP**: <1.5s | **LCP**: <2.5s | **CLS**: <0.1 | **TTI**: <3.5s
- **Accessibility score**: ≥90
- Test: `npm run audit:performance` (requires dev server)

## Key File Locations
- **Accessibility**: `src/lib/accessibility.tsx`
- **Mobile utilities**: `src/lib/mobile.tsx`
- **Form components**: `src/lib/forms.tsx`
- **Validation rules**: `src/utils/validation.ts`
- **Form hooks**: `src/hooks/use{Contact,Volunteer,Assessment,Newsletter}*.ts`
- **Email templates**: `src/lib/emails/`
- **API routes**: `src/app/api/*/route.ts`
- **PWA config**: `next.config.js` (withPWA wrapper)
- **Test scripts**: `scripts/test-*.js`
- **Deployment script**: `vercel-env-setup.ps1`

## Brand Assets
- **Phone**: 01933 315555 | **Email**: info@serve.org.uk
- **Address**: 8 West Street, Rushden, Northants NN10 0RT
- **Charity**: 1043321 | **CQC**: https://www.cqc.org.uk/location/1-2165219210
- **JustGiving**: https://www.justgiving.com/campaign/serve-community-appeal

## Recent Updates (November 2025)
- ✅ Vercel production deployment with environment variables
- ✅ Accessibility fixes (navigation landmarks, ARIA labels)
- ✅ Event image display optimization (object-cover, unoptimized)
- ✅ British English content conversion
- ✅ Facebook Page Access Token integration
- ✅ Performance optimizations (font preconnect, resource hints)
- ✅ WebP image conversion (-35.3% file size)
- ✅ PWA service worker implementation
- ✅ Dual-email system (Microsoft 365 SMTP + Resend API)
- **Test scripts**: `scripts/test-*.js`

## Brand Assets
- **Phone**: 01933 315555 | **Email**: info@serve.org.uk
- **Address**: 8 West Street, Rushden, Northants NN10 0RT
- **Charity**: 1043321 | **CQC**: https://www.cqc.org.uk/location/1-2165219210
- **JustGiving**: https://www.justgiving.com/campaign/serve-community-appeal
