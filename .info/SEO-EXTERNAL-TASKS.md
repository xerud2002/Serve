# SERVE Charity - External SEO Tasks

This document outlines SEO tasks that require manual setup outside the codebase. Complete these to maximize search visibility and online presence.

## Priority: HIGH - Google Setup (Complete First)

### 1. Google Analytics 4 Setup
**Status**: Code ready, needs GA4 property  
**Time**: 30 minutes  
**Instructions**:
1. Visit https://analytics.google.com
2. Click "Admin" (gear icon, bottom left)
3. Click "+ Create Property"
4. Property name: "SERVE Charity Website"
5. Reporting timezone: "United Kingdom"
6. Currency: "Pound Sterling (£)"
7. Industry: "Health & Fitness" or "Community & Non-Profit"
8. Business size: "Small (1-10 employees)"
9. Create a "Web" data stream
10. Website URL: `https://serve.org.uk`
11. Stream name: "SERVE Website"
12. **Copy the Measurement ID** (format: G-XXXXXXXXXX)
13. Add to Vercel environment variables:
    - Key: `NEXT_PUBLIC_GA_MEASUREMENT_ID`
    - Value: Your measurement ID (e.g., `G-XXXXXXXXXX`)
14. Redeploy website

**Test**: Visit https://analytics.google.com after 24 hours to see traffic data

---

### 2. Google Search Console Verification
**Status**: Not started  
**Time**: 20 minutes  
**Benefits**: See search rankings, submit sitemaps, monitor indexing  
**Instructions**:
1. Visit https://search.google.com/search-console
2. Click "Add Property"
3. Choose "URL prefix" and enter: `https://serve.org.uk`
4. Verification method: **HTML tag** (easiest)
5. Copy the meta tag provided (looks like: `<meta name="google-site-verification" content="...">`)
6. Add to `src/app/layout.tsx` in the `<head>` section
7. Redeploy website
8. Return to Search Console and click "Verify"
9. Once verified, submit sitemap: `https://serve.org.uk/sitemap.xml`

**Bonus**: Set up email notifications for critical issues

---

### 3. Google My Business (Google Business Profile)
**Status**: Not started  
**Time**: 1 hour (includes verification wait time)  
**Critical for**: Local SEO, Google Maps visibility  
**Instructions**:
1. Visit https://www.google.com/business/
2. Sign in with SERVE Google account
3. Click "Manage now" → "Add your business"
4. Business name: "SERVE Charity"
5. Category: "Home health care service" (primary)
   - Also add: "Charity", "Day care center", "Transportation service"
6. Address: 8 West Street, Rushden, Northants NN10 0RT
7. Phone: 01933 315555
8. Website: https://serve.org.uk
9. **Verification**: Google will send a postcard with code (5-7 days)
10. Once verified, optimize profile:
    - Add business description (750 chars max)
    - Upload photos (logo, building exterior, day center, transport vans)
    - Set business hours
    - Add services offered
    - Enable messaging
    - Add attributes: "Wheelchair accessible", "LGBTQ+ friendly", "Veteran-led"

**Post-Launch**:
- Encourage service users to leave Google reviews
- Respond to all reviews within 48 hours
- Post updates monthly (news, events, photos)

---

## Priority: MEDIUM - Business Directories

### 4. Charity Commission Profile Update
**Status**: Partially complete (charity registered)  
**Time**: 15 minutes  
**URL**: https://register-of-charities.charitycommission.gov.uk/charity-search/-/charity-details/1043321  
**Instructions**:
1. Login to Charity Commission account
2. Update charity description if needed
3. Ensure website link is correct: `https://serve.org.uk`
4. Update contact details if changed
5. Check annual returns are submitted

---

### 5. CQC Profile Optimization
**Status**: Registered  
**Time**: 20 minutes  
**URL**: https://www.cqc.org.uk/location/1-2165219210  
**Instructions**:
1. Contact CQC to ensure profile is up-to-date
2. Request they link to: `https://serve.org.uk`
3. Ensure all service types are correctly listed
4. Monitor inspection reports and ratings
5. Encourage service users to leave CQC reviews

---

### 6. Local Business Directories
**Time**: 2 hours total  
**Impact**: Backlinks, local SEO, citation building  

**Must-Have Listings**:
- [ ] **Yell.com** - https://www.yell.com
  - Category: "Home Care Services"
  - Add photos, description, services
- [ ] **Thomson Local** - https://www.thomsonlocal.com
- [ ] **Bing Places** - https://www.bingplaces.com
- [ ] **Yelp UK** - https://www.yelp.co.uk
- [ ] **Free Index** - https://www.freeindex.co.uk
- [ ] **Scoot** - https://www.scoot.co.uk
- [ ] **192.com Business Directory**

**Charity-Specific Directories**:
- [ ] **JustGiving** (already done) ✅
- [ ] **Charity Choice** - https://www.charitychoice.co.uk
- [ ] **UK Fundraising** - https://www.ukfundraising.co.uk
- [ ] **Give as you Live** - https://www.giveasyoulive.com

**Care-Specific Directories**:
- [ ] **carehome.co.uk** - https://www.carehome.co.uk
- [ ] **housingcare.org** - https://www.housingcare.org
- [ ] **Age UK Directory** - Contact local branch
- [ ] **NHS Choices** (if applicable)

**Template for Directory Submissions**:
```
Business Name: SERVE Charity
Description: Award-winning charity providing homecare, day care, befriending, and transport services to older people and adults with disabilities across Northamptonshire. Winner of Best Homecare Team 2024 (Great British Care Awards). CQC registered and charity number 1043321.

Address: 8 West Street, Rushden, Northamptonshire, NN10 0RT
Phone: 01933 315555
Email: info@serve.org.uk
Website: https://serve.org.uk

Services:
- Personal & Domestic Care (CQC Registered)
- Ron Manning Day Care Centre
- Countywide Befriending Service
- Community Transport
- Support for Family Carers
- Community Services

Areas Served: Rushden, Higham Ferrers, Irthlingborough, Wellingborough, Kettering, Corby, Northamptonshire

Keywords: homecare Northamptonshire, elderly care, day care, befriending, charity, CQC registered
```

---

## Priority: MEDIUM - Social Proof & Reviews

### 7. Review Generation Strategy
**Time**: Ongoing  
**Instructions**:
1. Create review request email template
2. Add to post-service follow-up workflow
3. Target platforms:
   - Google Business Profile (most important)
   - CQC website
   - Facebook page
   - Testimonials for website

**Sample Email Template**:
```
Subject: How was your experience with SERVE?

Dear [Name],

We hope you're enjoying our [service name]. Your feedback helps us improve and lets others know about the care we provide.

Would you take 2 minutes to leave a review?

📍 Google: [insert Google Business Profile review link]
💙 Facebook: [insert Facebook review link]

Thank you for being part of our community.

Warm regards,
The SERVE Team
01933 315555
```

**Review Response Guidelines**:
- Respond to ALL reviews within 48 hours
- Thank reviewers by name
- Address concerns professionally
- Include call-to-action when appropriate

---

## Priority: LOW - PR & Content Distribution

### 8. Local Press Contacts
**Time**: 1 hour  
**Goal**: Get coverage for award win, new services, community events  

**Northamptonshire Media Outlets**:
- [ ] **Northamptonshire Telegraph** - newsdesk@northantstelegraph.co.uk
- [ ] **Chronicle & Echo** - editorial@northantsnews.co.uk
- [ ] **BBC Radio Northampton** - northampton@bbc.co.uk
- [ ] **Nene Valley Radio** - news@nenevalleyradio.co.uk
- [ ] **Northants Live** - news@northantslive.news

**Press Release Template - Award Win**:
```
FOR IMMEDIATE RELEASE

Rushden Charity SERVE Wins Best Homecare Team at Great British Care Awards 2024

Rushden, Northamptonshire - SERVE, a local charity providing care services to older people and adults with disabilities, has been named Best Homecare Team for the East Midlands region at the prestigious Great British Care Awards 2024.

[Add 300-400 words about:
- What SERVE does
- Award significance
- Quote from manager/service user
- Services offered
- Call to action]

For media inquiries:
Contact: [Name]
Email: info@serve.org.uk
Phone: 01933 315555
Website: https://serve.org.uk

###
```

**Story Angles for Future PR**:
- Volunteer recruitment drives
- Community fundraising events
- New services launched
- Service user success stories
- Seasonal campaigns (Christmas, summer activities)
- Partnership announcements

---

### 9. Content Calendar & Blog Strategy
**Time**: Ongoing (1 hour/week)  
**Goal**: Regular fresh content for SEO  
**Code Status**: Infrastructure ready (see todo #6)  

**Monthly Content Topics**:
- **Week 1**: Service spotlight (rotate services)
- **Week 2**: Volunteer story or staff interview
- **Week 3**: Health/wellbeing tips for elderly/carers
- **Week 4**: Community news or upcoming events

**Seasonal Content**:
- January: "New Year health tips for seniors"
- February: "Staying active in winter"
- March/April: "Spring activities for day care"
- May: "Carer's Week tribute"
- June-August: "Summer trips and activities"
- September: "Back to routine after summer"
- October: "Preparing for winter"
- November: "Remembrance Day events"
- December: "Christmas at SERVE"

**SEO Keywords to Target in Articles**:
- "elderly care tips Northamptonshire"
- "homecare advice UK"
- "supporting elderly parents"
- "day care activities for seniors"
- "respite care information"

---

## Priority: LOW - Advanced Analytics

### 10. Heatmap & User Behavior Tracking
**Time**: 1 hour setup  
**Recommended Tools**:
- **Hotjar** (free tier available) - https://www.hotjar.com
  - Heatmaps showing where users click
  - Session recordings
  - Feedback polls
  - Conversion funnel analysis

**Setup Instructions**:
1. Create free Hotjar account
2. Add SERVE website
3. Install tracking code (add to layout.tsx)
4. Set up heatmaps for key pages:
   - Homepage
   - /services page
   - /contact page
   - /volunteer page
5. Review data monthly to optimize UX

**Alternative (Free)**:
- **Microsoft Clarity** - https://clarity.microsoft.com
  - Free forever
  - Similar features to Hotjar
  - Integrates with GA4

---

## Checklist Summary

### Week 1 (Critical)
- [ ] Google Analytics 4 setup and deployment
- [ ] Google Search Console verification
- [ ] Google My Business application (verification takes 5-7 days)

### Week 2 (High Priority)
- [ ] Charity Commission profile update
- [ ] CQC profile optimization
- [ ] Top 5 business directories (Yell, Thomson, Bing, Yelp, Free Index)

### Week 3 (Medium Priority)
- [ ] Remaining business directories
- [ ] Charity-specific directories
- [ ] Set up review generation workflow
- [ ] Create press release for award win

### Week 4 (Ongoing)
- [ ] Submit press releases to local media
- [ ] Begin monthly blog posting
- [ ] Monitor analytics and adjust strategy
- [ ] Set up heatmap tracking

---

## Environment Variables Needed

Add these to Vercel after setup:

```bash
# Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Google Search Console (meta tag content value)
NEXT_PUBLIC_GSC_VERIFICATION=your-verification-code

# Optional: Hotjar tracking (if using)
NEXT_PUBLIC_HOTJAR_ID=your-hotjar-id
```

---

## Contact for Help

If you need assistance with any of these tasks:
- **Technical Issues**: Contact your web developer
- **Google Products**: https://support.google.com
- **SEO Strategy**: Consider hiring local Northamptonshire SEO consultant
- **Content Writing**: Contact local copywriter or marketing agency

---

**Last Updated**: December 4, 2025  
**Next Review**: January 2026
