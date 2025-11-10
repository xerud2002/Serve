# SERVE Charity Website - AI Coding Instructions

## Project Overview
Next.js 15+ charity website for SERVE, providing care services to older people and adults with disabilities in Northamptonshire. Winner of "Best homecare team, East Midlands" at Great British Care Awards 2024.

**Key Context**: Charity Number 1043321 | CQC Registered | 40+ year history | Accessibility-first design for elderly/disabled users

## Architecture Patterns

### Component Structure
- **Server Components**: Default pattern - use for static content, SEO pages
- **Client Components**: Mark with `"use client"` for interactivity (forms, modals, state)
- **Hydration Safety**: Use `dynamic(() => import(), { ssr: false })` for complex client components
- **Error Boundaries**: Wrap interactive components with `<ErrorBoundary>` for graceful failures

### Accessibility-First Development
```tsx
// Use established accessibility utilities
import { FOCUS_STYLES, ARIA_LABELS } from '@/lib/accessibility'
import { AccessibleFormField, AccessibleButton } from '@/lib/forms'

// All interactive elements need focus management
className={`${FOCUS_STYLES.button} hover:bg-serve-blue-700`}
```

### Mobile-First Responsive Design
```tsx
import { MOBILE_CLASSES, useIsMobile, MobileCard } from '@/lib/mobile'

// Use responsive utility classes
className={MOBILE_CLASSES.touchTarget} // Ensures 44px minimum touch targets
className={MOBILE_CLASSES.heading} // Responsive text sizing
```

### Form Patterns
- **Custom Hooks**: Use `useContactForm`, `useVolunteerForm`, `useAssessmentBooking` for form logic
- **Validation**: Import `validateForm` from `@/utils/validation` with predefined rules
- **Accessibility**: All forms use `AccessibleFormField` with proper ARIA attributes

## Development Workflow

### Essential Scripts
```bash
npm run dev                    # Start development server
npm run test:all              # Run form, compatibility, booking tests
npm run deploy:prepare        # Lint + build + test before deployment
```

### Component Development
1. **Server-first**: Start with server component, add `"use client"` only when needed
2. **Test booking systems**: Use admin dashboard at `/admin/bookings` to test assessment booking flow
3. **Accessibility testing**: Test keyboard navigation, screen reader compatibility

### Brand Colors & Theming
Key colors from tailwind.config.js:
- **serve-blue-600** (Primary buttons, links) 
- **serve-blue-800** (Headers, emphasis)  
- **serve-blue-50** (Background highlights)

## Key Features to Understand

### Assessment Booking System
- Multi-step form with £25 refundable fee
- Admin dashboard for managing bookings (`/admin/bookings`)
- Payment processing ready for Stripe/PayPal integration

### Social Media Integration
- Facebook Photos API (`/api/facebook-photos`) with graceful fallbacks
- Carousel component with accessibility controls

### Performance Patterns
- Lazy loading with intersection observer (`LazyLoad`, `LazyImage` components)
- Image optimization with `OptimizedImage` wrapper
- Mobile performance optimization for older devices

## Core Services Context
1. **Personal & Domestic Care** - Award-winning CQC registered homecare
2. **Day Care & Meals on Wheels** - Ron Manning Day and Activity Centre  
3. **Community Transport** - Medical appointments and family visits
4. **Countywide Befriending** - Vulnerable adult support
5. **Carers Support** - Respite services for family carers
6. **Volunteer Programs** - Community involvement opportunities

## Contact & External Links
- **Phone**: 01933 315555 | **Email**: info@serve.org.uk
- **Address**: 8 West Street, Rushden, Northants NN10 0RT
- **CQC Report**: https://www.cqc.org.uk/location/1-2165219210
- **Fundraising**: https://www.justgiving.com/serve-jg
- **Social**: Facebook SERVE234, LinkedIn serve-nvca

## Critical Notes
- **Never break accessibility**: All changes must maintain WCAG 2.1 AA compliance
- **Mobile-first**: Test on small screens first - elderly users often use mobile devices
- **Graceful degradation**: Features should work without JavaScript for basic functionality
- **Trust indicators**: Always maintain CQC registration prominence and award displays