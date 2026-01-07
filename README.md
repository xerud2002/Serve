# SERVE Charity Website

> **Winner: "Best homecare team, East Midlands" 2024**

A modern, accessible, mobile-first website for SERVE - a charity supporting independence for older people and adults with disabilities in Northamptonshire.

## 🚀 Production Deployment

**Live Site**: https://serve.org.uk  
**Platform**: Vercel  
**Status**: ✅ Deployed and Active  
**Last Updated**: January 7, 2026

### Quick Deploy

```powershell
# Automated deployment with environment variables
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
.\vercel-env-setup.ps1
```

## 📋 Project Overview

- **Charity**: SERVE (Charity #1043321)
- **CQC Registered**: Outstanding homecare provider
- **Framework**: Next.js 15.5.6 with React 19.0.0
- **Styling**: Tailwind CSS with custom SERVE branding
- **Accessibility**: WCAG 2.1 Level AA compliant (10/10 criteria)
- **Performance**: PWA-enabled with service worker caching
- **Email**: Dual-system (Microsoft 365 SMTP + Resend API)
- **Integration**: Facebook posts & events (SERVE234 page)

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.6 (App Router)
- **React**: 19.0.0
- **TypeScript**: 5.7.3
- **Styling**: Tailwind CSS 3.4.17
- **PWA**: next-pwa 5.6.0
- **Email**: Resend API + Nodemailer (SMTP)
- **Facebook**: Graph API v24.0
- **Deployment**: Vercel
- **Image Optimization**: WebP conversion (-35.3% size reduction)

## 📦 Installation & Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
# Visit http://localhost:3000

# Run tests
npm run test:all
# Runs: test:forms + test:compatibility + test:booking

# Build for production
npm run build

# Performance audit (requires dev server running)
npm run audit:performance
```

## 🔑 Environment Variables

Create a `.env.local` file with:

```bash
# Facebook Integration
FACEBOOK_ACCESS_TOKEN=your_page_access_token
FACEBOOK_PAGE_ID=239416516576684

# Email - Resend API
RESEND_API_KEY=your_resend_api_key

# Email - Microsoft 365 SMTP
SMTP_HOST=smtp.office365.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=info@serve.org.uk
SMTP_PASS=your_password
```

**Note**: All environment variables are configured in Vercel production. See `.info/DEPLOYMENT.md` for details.

## 📁 Project Structure

```
Serve/
├── public/
│   ├── images/          # Optimized images (WebP format)
│   └── pics/           # Additional assets
├── src/
│   ├── app/            # Next.js App Router pages
│   │   ├── api/        # API routes (contact, facebook, newsletter)
│   │   ├── about/      # About page
│   │   ├── contact/    # Contact page
│   │   ├── services/   # Service pages
│   │   ├── volunteer/  # Volunteer page
│   │   └── ...
│   ├── components/     # React components
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utilities (accessibility, forms, mobile)
│   └── utils/          # Validation and helpers
├── scripts/            # Test scripts
├── .info/              # Documentation
└── vercel-env-setup.ps1  # Automated deployment script
```

## ✨ Key Features

### Accessibility (WCAG 2.1 AA)
- ✅ Semantic HTML with proper landmarks (`<nav>`, `<main>`, `<footer>`)
- ✅ ARIA labels without duplication
- ✅ Keyboard navigation support
- ✅ Screen reader compatibility
- ✅ Focus management system (`FOCUS_STYLES` from `@/lib/accessibility`)
- ✅ Touch targets minimum 44px (`MOBILE_CLASSES.touchTarget`)
- ✅ High contrast design
- ✅ Alt text for all images

### Performance Optimizations
- ✅ PWA with service worker (Workbox caching)
- ✅ Image optimization (WebP/AVIF, lazy loading)
- ✅ Font preconnect and resource hints
- ✅ Code splitting (vendor bundles <50KB)
- ✅ Static asset caching (1 year for fonts, 30 days for images)
- ✅ CSS chunking (strict mode)
- ✅ Production source maps disabled
- ✅ 6-pointed star snowflake effects (Hero component)

### Facebook Integration
- ✅ Live posts feed (6 latest posts, 1-hour caching)
- ✅ Events display with cover images
- ✅ Engagement metrics (likes, comments, shares)
- ✅ Graceful fallback (empty state on API errors)
- ✅ Client-side hourly auto-refresh
- ✅ Object-cover image display (no whitespace)

### Email System (Dual-Provider)
- ✅ Admin notifications to info@serve.org.uk
- ✅ User confirmation emails
- ✅ Microsoft 365 SMTP (primary)
- ✅ Resend API (fallback)
- ✅ Template-based emails (`@/lib/emails`)

### Forms
- ✅ Contact form (`useContactForm`)
- ✅ Volunteer application (`useVolunteerForm`)
- ✅ Assessment booking (`useAssessmentBooking`)
- ✅ Newsletter signup (`useNewsletterSignup`)
- ✅ UK-specific validation (phone, postcode)
- ✅ Accessible form fields (`AccessibleFormField`)

### Mobile Optimization
- ✅ Mobile-first responsive design
- ✅ Touch-friendly interface (44px targets)
- ✅ Safe area support (notched devices)
- ✅ `useIsMobile()` hook for responsive behavior
- ✅ Mobile-optimized navigation

### Content
- ✅ British English spelling throughout
- ✅ Services: Personal care, Day care, Transport, Befriending
- ✅ About page with mission and team
- ✅ News and events
- ✅ Volunteer opportunities
- ✅ Donation information

## 🧪 Testing

```bash
# Test form validation
npm run test:forms

# Test browser compatibility
npm run test:compatibility

# Test booking system
npm run test:booking

# Run all tests
npm run test:all

# Prepare for deployment (lint + build + test)
npm run deploy:prepare
```

## 📚 Documentation

Comprehensive documentation available in `.info/` directory:

- **DEPLOYMENT.md** - Production deployment guide (Vercel setup)
- **FACEBOOK_INTEGRATION.md** - Facebook API configuration
- **FACEBOOK_TOKEN_SETUP.md** - Page Access Token setup
- **EMAIL_SETUP.md** - Dual-email system configuration
- **PROJECT_COMPLETION.md** - Full project report and achievements
- **PERFORMANCE_AUDIT_REPORT.md** - Performance optimization details
- **ASSESSMENT_BOOKING_SYSTEM.md** - Booking system documentation

## 🎨 Design System

### Colors (Tailwind)
```css
/* Primary */
bg-serve-blue-600 hover:bg-serve-blue-700
text-serve-blue-800

/* Secondary palettes (50-950 scale) */
serve-red, serve-green, serve-orange, serve-teal
```

### Typography
```tsx
import MajorTitle from '@/components/MajorTitle'

<MajorTitle 
  primary="Our" 
  secondary="Services"  // Colored accent
  dark={true}           // White text
  size="large"
/>
```

### Images
```tsx
import OptimizedImage from '@/components/OptimizedImage'

<OptimizedImage 
  src="/images/care/homecare.jpg"
  alt="Homecare support"
  width={800} height={600}
  priority={true}  // Above-the-fold
/>
```

## 🔐 Security

- ✅ HTTPS enforced
- ✅ Security headers configured
- ✅ Form validation and sanitization
- ✅ Environment variables secured
- ✅ API error handling (no sensitive data exposed)

## 📈 Performance Targets

- **FCP**: <1.5s
- **LCP**: <2.5s
- **CLS**: <0.1
- **TTI**: <3.5s
- **Accessibility**: ≥90 (Lighthouse)

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## 📞 Contact

**SERVE**  
8 West Street, Rushden, Northamptonshire, NN10 0RT  
📞 01933 315555  
📧 info@serve.org.uk  
🌐 https://serve.org.uk

**Charity**: 1043321  
**CQC**: https://www.cqc.org.uk/location/1-2165219210

## 📄 License

This project is proprietary to SERVE charity.

## 🤝 Contributing

This is a private project for SERVE charity. For support or inquiries, contact the development team.

---

**Built with ❤️ for SERVE - Supporting independence in Northamptonshire since 1982**
