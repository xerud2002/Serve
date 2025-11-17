# SERVE Charity Website - AI Coding Instructions

## Project Overview
Next.js 15+ charity website for SERVE, providing care services to older people and adults with disabilities in Northamptonshire. Winner of "Best homecare team, East Midlands" at Great British Care Awards 2024.

**Key Context**: Charity Number 1043321 | CQC Registered | 40+ year history | Accessibility-first design for elderly/disabled users

## Architecture & Component Patterns

### Next.js App Router Structure
- **Server Components** are default - all pages/components are SSR unless marked `"use client"`
- **Client Components** marked with `"use client"` at top of file (see `AssessmentBooking.tsx`, `ErrorBoundary.tsx`, `mobile.tsx`)
- **API Routes** in `src/app/api/*/route.ts` export `GET`/`POST` functions (e.g., `/api/facebook-photos`, `/api/contact`)
- **Path aliases**: `@/*` resolves to `src/*` (configured in `tsconfig.json`)

### API Routes Architecture
All API routes in `src/app/api/` use Next.js Route Handlers pattern:
```typescript
// Standard pattern: Validation → Processing → Dual emails
export async function POST(request: NextRequest) {
  const body = await request.json()
  if (!field) return NextResponse.json({ error: 'Message' }, { status: 400 })
  // Send admin email + user confirmation
  return NextResponse.json({ success: true })
}
```
**Active routes**: `/api/contact`, `/api/facebook-photos`, `/api/facebook-events`, `/api/facebook-posts`

### Accessibility Infrastructure (`src/lib/accessibility.tsx`)
All interactive elements MUST use centralized accessibility utilities:
```tsx
import { FOCUS_STYLES, ARIA_LABELS } from '@/lib/accessibility'
// Pre-defined focus rings for buttons, links, inputs
className={FOCUS_STYLES.button} // Consistent 2px ring-serve-blue-500
// Standard aria-labels for common elements
aria-label={ARIA_LABELS.phoneNumber} // "Call SERVE at 01933 315555"
```
**Never** write custom focus styles - always extend from `FOCUS_STYLES`. Screen reader text uses `<ScreenReaderOnly>` component.

### Mobile-First Responsive System (`src/lib/mobile.tsx`)
```tsx
import { useIsMobile, MOBILE_CLASSES } from '@/lib/mobile'
// Hook returns: { isMobile, isSmall, isMedium, isLarge, screenSize }
const { isMobile } = useIsMobile()
// Pre-built touch-optimized classes
className={MOBILE_CLASSES.touchTarget} // Ensures 44px minimum
```
**Critical**: All buttons/links need `MOBILE_CLASSES.touchTarget` for elderly users. Test on mobile devices < 640px.

### Form Development Pattern
**Always use existing form hooks** - never implement form state from scratch:
```tsx
import { useContactForm } from '@/hooks/useContactForm'
import { validateForm } from '@/utils/validation'

const { isSubmitting, isSubmitted, error, submitForm } = useContactForm(endpoint)
const errors = validateForm(data, {
  email: { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
  phone: { pattern: /^[0-9\s+()-]+$/ }
})
```
Available hooks: `useContactForm`, `useVolunteerForm`, `useAssessmentBooking`, `useNewsletterSignup`

### Styling & Brand System
**Never use arbitrary blue colors** - only use custom palette from `tailwind.config.js`:
- Primary buttons: `bg-serve-blue-600 hover:bg-serve-blue-700`
- Dark backgrounds: `bg-serve-blue-800`
- Light accents: `bg-serve-blue-50 text-serve-blue-800`
- Other palettes: `serve-red`, `serve-green`, `serve-orange`, `serve-teal` (50-950 scale)

**Typography Component** for consistent headings:
```tsx
import MajorTitle from '@/components/MajorTitle'
<MajorTitle primary="Our" secondary="Services" dark size="large" />
// Generates h1 with "Our" + accent-colored "Services" below
```

## Development Workflow

### Essential Commands
```bash
npm run dev                    # Port 3000, hot reload enabled
npm run test:all              # Runs: test:forms, test:compatibility, test:booking
npm run deploy:prepare        # Pre-deployment: lint → build → test:all
npm run audit:performance     # Lighthouse audit (requires dev server)
```

### Testing Procedures
- **Forms**: Run `npm run test:forms` after changing `Contact.tsx`, `VolunteerForm.tsx`, `AssessmentBooking.tsx`
- **Booking Admin**: Navigate to `/admin/bookings` to test assessment booking flow (no auth in dev)
- **Accessibility**: Test keyboard-only navigation (Tab, Enter, Space) and high-contrast mode
- **Mobile**: Test on real devices <640px width - elderly users primarily use phones

### Environment Variables Pattern
All API integrations fail gracefully without env vars:
```typescript
// Pattern used in /api/facebook-photos, /api/contact-smtp
if (!process.env.FACEBOOK_ACCESS_TOKEN) {
  return NextResponse.json({ images: [] }, { status: 200 }) // Silent fallback
}
```
**Never throw errors** for missing env vars - return empty/fallback data. See `FACEBOOK_INTEGRATION.md`, `EMAIL_SETUP.md` for setup.

### Testing Strategy
- **No Jest/Vitest**: Uses custom Node.js test scripts in `scripts/` directory
- **Form testing**: Validates rules from `src/utils/validation.ts` (email patterns, phone formats)
- **Booking testing**: Tests multi-step form flow, payment validation, scheduling logic
- **Run before commits**: `npm run test:all` ensures forms, compatibility, booking work

### Component Development Pattern
1. **Start server-first**: Create in `src/components/` WITHOUT `"use client"`
2. **Add client directive only if**: Uses `useState`/`useEffect`, handles events, uses browser APIs
3. **Wrap complex components**: Use `<ErrorBoundary>` to prevent full-page crashes
4. **Test accessibility**: Tab navigation, screen reader, verify `FOCUS_STYLES` applied

## Critical Integration Points

### Facebook Graph API (`/api/facebook-photos`, `/api/facebook-events`)
- **Graceful degradation**: Returns `{ images: [] }` if `FACEBOOK_ACCESS_TOKEN` missing
- **Caching**: `export const revalidate = 3600` (1 hour ISR)
- **Error handling**: All errors return empty arrays, never expose API errors to client

### Email System (Resend API)
- **Admin notification** template: `src/lib/emails/admin-notification.ts`
- **User confirmation** template: `src/lib/emails/user-confirmation.ts`
- Uses `RESEND_API_KEY` env var, falls back to console logging in dev
- See `EMAIL_SETUP.md` for Resend domain verification steps

### Image Optimization
**Always use `OptimizedImage` wrapper** instead of raw Next.js `<Image>`:
```tsx
import OptimizedImage from '@/components/OptimizedImage'
<OptimizedImage src="/images/care/homecare.jpg" alt="..." />
// Handles lazy loading, blur placeholders, aspect ratios automatically
```
Remote images (Facebook CDN) configured in `next.config.js` `remotePatterns`.

### SEO & Metadata System
- **Structured data**: `StructuredData.tsx` generates LocalBusiness schema (JSON-LD)
- **Metadata**: Centralized in `src/app/layout.tsx` with template support (e.g., "Services | SERVE Charity")
- **Sitemap**: Auto-generated at `src/app/sitemap.ts`
- **Robots.txt**: `src/app/robots.ts`
- **Open Graph**: Full OG tags + Twitter cards for social sharing

## Brand & Content Guidelines

### Core Services (maintain exact order/wording)
1. **Personal & Domestic Care** - Award-winning CQC registered homecare
2. **Day Care & Meals on Wheels** - Ron Manning Day and Activity Centre
3. **Community Transport** - Medical appointments and family visits
4. **Countywide Befriending** - Vulnerable adult support
5. **Carers Support** - Respite services for family carers
6. **Volunteer Programs** - Community involvement opportunities

### Contact Information (verify before use)
- **Phone**: 01933 315555 (format consistently)
- **Email**: info@serve.org.uk (primary contact)
- **Address**: 8 West Street, Rushden, Northants NN10 0RT
- **Charity Number**: 1043321 (display on footer)
- **CQC Registration**: https://www.cqc.org.uk/location/1-2165219210

### External Links
- **Fundraising**: https://www.justgiving.com/serve-jg
- **Facebook**: facebook.com/SERVE234
- **LinkedIn**: linkedin.com/company/serve-nvca

## Non-Negotiable Rules

1. **Accessibility First**: Every change must pass keyboard navigation + screen reader testing
2. **Mobile Touch Targets**: All interactive elements ≥44px (use `MOBILE_CLASSES.touchTarget`)
3. **Graceful Failures**: API failures, missing env vars must never break UI
4. **Server-First Rendering**: Only mark `"use client"` when hooks/state/events are essential
5. **Brand Consistency**: Use `serve-blue` palette + `MajorTitle` component for headings

### Performance Standards
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 3.5s
- **Test with**: Lighthouse (target 90+ accessibility score)

### Deployment Checklist (`DEPLOYMENT.md`)
Before production deployment:
1. Run `npm run deploy:prepare` (lint + build + test:all)
2. Verify environment variables: `RESEND_API_KEY`, `FACEBOOK_ACCESS_TOKEN` (optional)
3. Configure domain in Resend dashboard for email delivery
4. Test accessibility: Screen reader, keyboard navigation
5. Verify contact information accuracy
6. Check CQC registration link validity

## Reference Documentation
- **Assessment Booking**: See `ASSESSMENT_BOOKING_SYSTEM.md` for booking flow + payment system
- **Facebook Setup**: See `FACEBOOK_SETUP.md` for Graph API token generation
- **Deployment**: See `DEPLOYMENT.md` for Vercel/Netlify config + SEO checklist
- **Completed Features**: See `PROJECT_COMPLETION.md` for full feature inventory
