# Email Notification Setup for Contact Form

## Overview
The contact form now sends **two email notifications**:
1. **Admin Notification** → Sent to `info@serve.org.uk` with form submission details
2. **User Confirmation** → Sent to the person who filled out the form

## Setup Instructions

### Step 1: Create a Resend Account
1. Go to [https://resend.com/signup](https://resend.com/signup)
2. Sign up for a free account (100 emails/day free tier)
3. Verify your email address

### Step 2: Get Your API Key
1. Log in to your Resend dashboard
2. Go to **API Keys** section: [https://resend.com/api-keys](https://resend.com/api-keys)
3. Click **Create API Key**
4. Give it a name (e.g., "SERVE Contact Form")
5. Select **Sending access** permission
6. Click **Create**
7. **Copy the API key** (you won't be able to see it again!)

### Step 3: Add Domain (Important!)
Before you can send emails, you need to verify your domain:

#### Option A: Use serve.org.uk Domain (Recommended for Production)
1. Go to **Domains** in Resend dashboard: [https://resend.com/domains](https://resend.com/domains)
2. Click **Add Domain**
3. Enter `serve.org.uk`
4. Add the DNS records Resend provides to your domain's DNS settings:
   - **SPF Record**: Add TXT record for email authentication
   - **DKIM Record**: Add TXT record for email signing
   - **Return-Path**: Add CNAME record
5. Wait for DNS propagation (can take up to 48 hours)
6. Resend will verify the domain automatically

#### Option B: Use Resend's Test Domain (For Testing Only)
For immediate testing, Resend provides a test domain:
- You can send emails from `onboarding@resend.dev`
- **Limitation**: You can only send to verified email addresses
- To test, you must add `info@serve.org.uk` as a verified email in Resend

### Step 4: Update Environment Variables
1. Open `.env.local` file in your project root
2. Replace `your_resend_api_key_here` with your actual API key:
   ```bash
   RESEND_API_KEY=re_your_actual_api_key_here
   ```
3. Save the file

### Step 5: Update Email Sender (After Domain Verification)
Once your domain is verified, update the API route to use your domain:

In `src/app/api/contact/route.ts`, change:
```typescript
from: 'SERVE Contact Form <noreply@serve.org.uk>',
```

### Step 6: Restart Development Server
```bash
# Stop the current dev server (Ctrl+C in terminal)
# Start it again
npm run dev
```

## Testing the Email System

### Test with Resend Test Domain (Immediate Testing)
If using the test domain, update `src/app/api/contact/route.ts`:
```typescript
// For testing only - replace after domain verification
from: 'SERVE <onboarding@resend.dev>',
to: 'your-email@example.com', // Use your verified email for testing
```

### Test with Your Domain (After DNS Verification)
1. Fill out the contact form on your website
2. Check `info@serve.org.uk` inbox for admin notification
3. Check the submitter's email for confirmation message

## Email Templates

### Admin Notification Email
- **Subject**: "New Contact Form Submission - [Topic]"
- **To**: info@serve.org.uk
- **Contains**: Full contact details, message, timestamp
- **Reply-To**: Submitter's email (for easy response)

### User Confirmation Email
- **Subject**: "Thank You for Contacting SERVE - We've Received Your Message"
- **To**: Form submitter's email
- **Contains**: Message summary, what to expect next, contact information
- **Reply-To**: info@serve.org.uk

## Troubleshooting

### "Domain not verified" Error
- **Solution**: Wait for DNS propagation or use test domain initially
- Check domain verification status in Resend dashboard

### Emails Not Arriving
1. Check spam/junk folders
2. Verify API key is correct in `.env.local`
3. Check Resend dashboard logs: [https://resend.com/emails](https://resend.com/emails)
4. Ensure domain is verified (for production)

### "Invalid API Key" Error
- Double-check `.env.local` has correct API key
- Ensure no extra spaces or quotes around the key
- Restart dev server after updating `.env.local`

### Only Admin Email Works, Not User Confirmation
- This is expected behavior - the system prioritizes admin notification
- User confirmation failure is logged but doesn't fail the request
- Check Resend logs for details

## Production Deployment

Before deploying to production:
1. ✅ Verify `serve.org.uk` domain in Resend
2. ✅ Update `from` addresses to use `@serve.org.uk`
3. ✅ Add `RESEND_API_KEY` to your hosting platform's environment variables
4. ✅ Test email delivery thoroughly
5. ✅ Monitor Resend dashboard for delivery issues

## Free Tier Limits
Resend free tier includes:
- **100 emails per day**
- **3,000 emails per month**

For a charity contact form, this should be more than sufficient. If you exceed this, consider upgrading to a paid plan.

## Support
- Resend Documentation: [https://resend.com/docs](https://resend.com/docs)
- Resend Support: [https://resend.com/support](https://resend.com/support)
