import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { checkRateLimit, getClientIP, rateLimiters } from '@/lib/rateLimit'

const resend = process.env.RESEND_API_KEY 
  ? new Resend(process.env.RESEND_API_KEY)
  : null

export async function POST(request: NextRequest) {
  try {
    // Rate limiting: 5 requests per 15 minutes
    const ip = getClientIP(request)
    const rateLimit = checkRateLimit(ip, rateLimiters.contact)
    
    if (!rateLimit.success) {
      return NextResponse.json(
        { error: `Too many requests. Please try again in ${Math.ceil(rateLimit.resetIn / 60)} minutes.` },
        { 
          status: 429,
          headers: {
            'Retry-After': String(rateLimit.resetIn),
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': String(rateLimit.resetIn)
          }
        }
      )
    }

    const body = await request.json()
    
    // Validate required fields
    const { name, email, phone, subject, message, privacy } = body
    
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }
    
    if (!privacy) {
      return NextResponse.json(
        { error: 'Privacy policy consent is required' },
        { status: 400 }
      )
    }

    const timestamp = new Date().toLocaleString('en-GB', {
      dateStyle: 'full',
      timeStyle: 'short',
      timeZone: 'Europe/London'
    })

    // If Resend is not configured, log to console (development/build time)
    if (!resend) {
      console.log('Contact form submission (Resend not configured):', { name, email, subject })
      return NextResponse.json({
        success: true,
        message: 'Your message has been received. We will respond within 1-2 business days.'
      })
    }

    // Send admin notification
    await resend.emails.send({
      from: 'SERVE Contact Form <noreply@serve.org.uk>',
      to: 'web@serve.org.uk',
      replyTo: email,
      subject: `📨 New Contact Form - ${subject}`,
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission - SERVE</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f9fafb; line-height: 1.6;">
  <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f9fafb;">
    <tr>
      <td style="padding: 40px 20px;">
        <table role="presentation" style="max-width: 650px; margin: 0 auto; background-color: #ffffff; border-radius: 24px; overflow: hidden; box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%); padding: 40px 30px; text-align: center;">
              <div style="background-color: rgba(255, 255, 255, 0.15); backdrop-filter: blur(10px); border: 2px solid rgba(255, 255, 255, 0.3); border-radius: 16px; padding: 25px; display: inline-block;">
                <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 800; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
                  📨 New Contact Form
                </h1>
                <p style="margin: 10px 0 0 0; color: rgba(255, 255, 255, 0.95); font-size: 15px; font-weight: 500;">
                  Someone reached out to SERVE
                </p>
              </div>
            </td>
          </tr>

          <!-- Main content -->
          <tr>
            <td style="padding: 40px 30px;">
              
              <!-- Priority badge -->
              <div style="background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%); border: 2px solid #0284c7; border-radius: 12px; padding: 16px; margin-bottom: 30px; text-align: center;">
                <p style="margin: 0; color: #075985; font-size: 14px; font-weight: 700;">
                  ⏰ RESPOND WITHIN 1-2 BUSINESS DAYS
                </p>
              </div>

              <!-- Contact Details -->
              <div style="margin-bottom: 30px;">
                <h2 style="margin: 0 0 20px 0; color: #0284c7; font-size: 20px; font-weight: 800; border-bottom: 3px solid #0ea5e9; padding-bottom: 10px;">
                  👤 Contact Details
                </h2>
                
                <table role="presentation" style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 16px; background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); border-radius: 12px;">
                      <table role="presentation" style="width: 100%;">
                        <tr>
                          <td style="width: 30%; color: #075985; font-weight: 700; font-size: 14px; padding: 6px 0;">Name:</td>
                          <td style="color: #0c4a6e; font-size: 16px; font-weight: 600;">${name}</td>
                        </tr>
                        <tr>
                          <td style="color: #075985; font-weight: 700; font-size: 14px; padding: 6px 0;">Email:</td>
                          <td><a href="mailto:${email}" style="color: #0284c7; text-decoration: none; font-weight: 600; font-size: 15px;">${email}</a></td>
                        </tr>
                        ${phone ? `<tr>
                          <td style="color: #075985; font-weight: 700; font-size: 14px; padding: 6px 0;">Phone:</td>
                          <td><a href="tel:${phone}" style="color: #0284c7; text-decoration: none; font-weight: 600; font-size: 15px;">${phone}</a></td>
                        </tr>` : ''}
                        <tr>
                          <td style="color: #075985; font-weight: 700; font-size: 14px; padding: 6px 0;">Subject:</td>
                          <td style="color: #0c4a6e; font-weight: 600; font-size: 15px;">${subject}</td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </div>

              <!-- Message Section -->
              <div style="margin-bottom: 30px;">
                <h2 style="margin: 0 0 20px 0; color: #0284c7; font-size: 20px; font-weight: 800; border-bottom: 3px solid #0ea5e9; padding-bottom: 10px;">
                  💬 Message
                </h2>
                <div style="padding: 20px; background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); border-radius: 12px; border-left: 5px solid #0284c7;">
                  <p style="margin: 0; color: #334155; font-size: 15px; line-height: 1.7; font-weight: 500; white-space: pre-line;">${message}</p>
                </div>
              </div>

              <!-- Timestamp -->
              <div style="background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); border-radius: 12px; padding: 16px; text-align: center; border: 2px solid #fbbf24;">
                <p style="margin: 0; color: #78350f; font-size: 13px; font-weight: 600;">
                  📅 Submitted: ${timestamp}
                </p>
              </div>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f9fafb; padding: 25px 30px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0 0 8px 0; color: #374151; font-size: 14px; font-weight: 600;">
                SERVE - Charity No. 1043321
              </p>
              <p style="margin: 0; color: #6b7280; font-size: 12px; line-height: 1.5;">
                8 West Street, Rushden, Northamptonshire, NN10 0RT<br>
                Tel: 01933 315555 | Email: info@serve.org.uk
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `
    })

    // Send user confirmation
    await resend.emails.send({
      from: 'SERVE <noreply@serve.org.uk>',
      to: email,
      replyTo: 'web@serve.org.uk',
      subject: 'Thank you for contacting SERVE',
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank you for contacting SERVE</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f9fafb; line-height: 1.6;">
  <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f9fafb;">
    <tr>
      <td style="padding: 40px 20px;">
        <table role="presentation" style="max-width: 650px; margin: 0 auto; background-color: #ffffff; border-radius: 24px; overflow: hidden; box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #047857 0%, #059669 100%); padding: 40px 30px; text-align: center;">
              <div style="background-color: rgba(255, 255, 255, 0.15); backdrop-filter: blur(10px); border: 2px solid rgba(255, 255, 255, 0.3); border-radius: 16px; padding: 25px; display: inline-block;">
                <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 800; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
                  ✉️ Thank You for Contacting SERVE
                </h1>
                <p style="margin: 10px 0 0 0; color: rgba(255, 255, 255, 0.95); font-size: 15px; font-weight: 500;">
                  We've received your message
                </p>
              </div>
            </td>
          </tr>

          <!-- Main content -->
          <tr>
            <td style="padding: 40px 30px;">
              
              <!-- Success badge -->
              <div style="background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%); border: 2px solid #10b981; border-radius: 12px; padding: 16px; margin-bottom: 30px; text-align: center;">
                <p style="margin: 0; color: #065f46; font-size: 14px; font-weight: 700;">
                  ✅ MESSAGE RECEIVED - WE'LL RESPOND WITHIN 1-2 BUSINESS DAYS
                </p>
              </div>

              <!-- Personal greeting -->
              <p style="color: #1f2937; font-size: 16px; font-weight: 500; margin-bottom: 20px;">
                Dear ${name.split(' ')[0]},
              </p>

              <p style="color: #374151; font-size: 15px; line-height: 1.7; margin-bottom: 25px;">
                Thank you for getting in touch with SERVE. We have received your message and will respond within 1-2 business days.
              </p>

              <!-- Message recap -->
              <div style="margin-bottom: 30px;">
                <h2 style="margin: 0 0 15px 0; color: #047857; font-size: 18px; font-weight: 700;">
                  📝 Your Message
                </h2>
                <div style="padding: 20px; background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%); border-radius: 12px; border-left: 5px solid #10b981;">
                  <p style="margin: 0 0 10px 0; color: #065f46; font-size: 14px; font-weight: 700;">Subject: ${subject}</p>
                  <p style="margin: 0; color: #166534; font-size: 14px; line-height: 1.7; white-space: pre-line;">${message}</p>
                </div>
              </div>

              <!-- Contact info for urgent matters -->
              <div style="background: linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%); border-radius: 16px; padding: 25px; text-align: center; border: 2px solid #0284c7;">
                <p style="margin: 0 0 12px 0; color: #075985; font-size: 15px; font-weight: 700;">
                  Need urgent assistance?
                </p>
                <p style="margin: 0 0 8px 0;">
                  <a href="tel:01933315555" style="color: #0284c7; text-decoration: none; font-size: 24px; font-weight: 800;">
                    📞 01933 315555
                  </a>
                </p>
                <p style="margin: 0; color: #0c4a6e; font-size: 13px; font-weight: 600;">
                  Office hours: Monday - Friday, 9:00 AM - 5:00 PM
                </p>
              </div>

              <!-- Closing -->
              <p style="color: #374151; font-size: 15px; line-height: 1.7; margin-top: 25px; margin-bottom: 10px;">
                Best regards,<br>
                <strong style="color: #047857;">The SERVE Team</strong>
              </p>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f9fafb; padding: 25px 30px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0 0 8px 0; color: #374151; font-size: 14px; font-weight: 600;">
                SERVE - Charity No. 1043321
              </p>
              <p style="margin: 0; color: #6b7280; font-size: 12px; line-height: 1.5;">
                8 West Street, Rushden, Northamptonshire, NN10 0RT<br>
                Tel: 01933 315555 | Email: info@serve.org.uk
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `
    })

    return NextResponse.json({
      success: true,
      message: 'Your message has been sent successfully. We will respond within 1-2 business days.'
    })
    
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again or contact us directly at 01933 315555.' },
      { status: 500 }
    )
  }
}
