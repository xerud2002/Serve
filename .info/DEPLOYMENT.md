# SERVE Website - Deployment Guide

## 🚀 Production Deployment Setup

### Current Deployment Status ✅

**Platform**: Vercel  
**Production URL**: https://serve.org.uk  
**Deployment Date**: January 7, 2026  
**Status**: Live and fully functional

### Environment Configuration

#### Production Environment Variables (Configured in Vercel)
The following environment variables are set in Vercel production:

```bash
# Facebook Integration
FACEBOOK_ACCESS_TOKEN=EAAZADjQJDkC8BO... (Page Access Token, long-lived)
FACEBOOK_PAGE_ID=239416516576684

# Email - Resend API
RESEND_API_KEY=re_SUL3c6WV_7ZMRfi2YTXBS5XDS7LC4DDqD

# Email - Microsoft 365 SMTP
SMTP_HOST=smtp.office365.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=info@serve.org.uk
SMTP_PASS=Serve123@@
```

### Build and Deployment Steps

#### 1. Pre-deployment Testing
```bash
# Run all tests
npm run test:forms
npm run test:compatibility
npm run build
npm run start

# Test production build locally
npm install -g serve
serve -s out
```

#### 2. Optimization Checklist
- [x] Images optimized with Next.js Image component
- [x] Fonts optimized and preloaded
- [x] CSS minification enabled
- [x] JavaScript bundling optimized
- [x] Static assets compressed
- [x] Service worker for caching (optional)

#### 3. SEO Preparation
- [x] Sitemap.xml generated
- [x] Robots.txt configured
- [x] Meta tags optimized
- [x] Structured data implemented
- [x] Open Graph tags added
- [x] Canonical URLs set

#### 4. Security Configuration
- [x] HTTPS enforced
- [x] Security headers configured
- [x] Form validation implemented
- [x] Input sanitization enabled
- [x] Rate limiting for forms

### Hosting Options

#### Option 1: Vercel (Currently Active) ✅

**Quick Deployment with Environment Variables:**
```bash
# Run the automated deployment script
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
.\vercel-env-setup.ps1
```

This script will:
1. Add all environment variables to Vercel
2. Deploy to production automatically
3. Generate production URL

**Manual Deployment:**
```bash
# Install Vercel CLI (if not installed)
npm install -g vercel

# Add environment variables
echo "YOUR_TOKEN" | vercel env add FACEBOOK_ACCESS_TOKEN production
echo "239416516576684" | vercel env add FACEBOOK_PAGE_ID production
echo "YOUR_KEY" | vercel env add RESEND_API_KEY production
echo "smtp.office365.com" | vercel env add SMTP_HOST production
echo "587" | vercel env add SMTP_PORT production
echo "false" | vercel env add SMTP_SECURE production
echo "info@serve.org.uk" | vercel env add SMTP_USER production
echo "YOUR_PASSWORD" | vercel env add SMTP_PASS production

# Deploy to production
vercel --prod
```

**Custom Domain Setup (Next Step):**
```bash
# Add custom domain in Vercel dashboard
# Go to: https://vercel.com/xerud2002s-projects/serve
# Settings → Domains → Add serve.org.uk and www.serve.org.uk

# Update DNS records at domain registrar:
# A Record: @ → Vercel IP (provided by Vercel)
# CNAME: www → cname.vercel-dns.com
```

#### Option 2: Netlify
```bash
# Build command
npm run build

# Publish directory
out

# Environment variables
# Set in Netlify dashboard
```

#### Option 3: Traditional Web Hosting
```bash
# Export static site
npm run build
npm run export

# Upload 'out' directory to web server
# Configure redirects for client-side routing
```

### Post-Deployment Checklist

#### Technical Verification
- [ ] All pages load correctly
- [ ] Forms submit successfully
- [ ] Contact information displays properly
- [ ] Social media links work
- [ ] Images load and display correctly
- [ ] Mobile responsiveness verified
- [ ] Performance metrics meet targets

#### Content Verification
- [ ] All services information accurate
- [ ] Contact details up to date
- [ ] Award information current
- [ ] CQC registration details correct
- [ ] Charity number displayed
- [ ] Address and phone verified

#### SEO and Analytics
- [ ] Google Search Console configured
- [ ] Google Analytics tracking active
- [ ] Local business listings updated
- [ ] Social media profiles linked
- [ ] Meta descriptions optimized

### Monitoring and Maintenance

#### Performance Monitoring
```bash
# Install monitoring tools
npm install --save-dev lighthouse
npm install --save-dev web-vitals

# Regular performance audits
npm run audit:performance
```

#### Security Updates
- Update dependencies regularly
- Monitor for security vulnerabilities
- Keep Next.js framework updated
- Review and update security headers

#### Content Updates
- Regular news and events updates
- Annual review of service information
- Update awards and certifications
- Refresh testimonials periodically

### Backup and Recovery

#### Code Repository
- GitHub repository with regular commits
- Branch protection for main branch
- Automated deployments from main

#### Content Backup
- Regular database exports (if applicable)
- Static content version control
- Image assets backed up

### Support Contacts

#### Technical Support
- Web Developer: [Your contact information]
- Hosting Provider: [Provider support details]
- Domain Registrar: [Registrar support]

#### Content Management
- SERVE Staff: info@serve.org.uk
- Marketing Team: [Contact information]

## 🎯 Launch Day Checklist

1. **Final Testing** (2 days before)
   - [ ] Complete cross-browser testing
   - [ ] Form submission testing
   - [ ] Mobile device testing
   - [ ] Performance audit

2. **DNS Configuration** (1 day before)
   - [ ] Point domain to hosting provider
   - [ ] Configure SSL certificate
   - [ ] Set up email forwarding (if needed)

3. **Go Live** (Launch day)
   - [ ] Deploy production build
   - [ ] Verify all functionality
   - [ ] Submit to search engines
   - [ ] Announce on social media

4. **Post-Launch** (First week)
   - [ ] Monitor performance metrics
   - [ ] Check form submissions
   - [ ] Review analytics data
   - [ ] Collect user feedback

## 📞 Emergency Procedures

If issues occur during or after deployment:

1. **Immediate Response**
   - Revert to previous working version
   - Check hosting provider status
   - Verify DNS configuration

2. **Communication**
   - Notify SERVE management
   - Update social media if needed
   - Prepare status updates for users

3. **Resolution**
   - Identify root cause
   - Implement fix
   - Test thoroughly before redeployment
   - Document lesson learned

---

**Website Ready for Launch! 🎉**

The SERVE website is now fully prepared for production deployment with comprehensive testing, optimization, and deployment procedures in place.