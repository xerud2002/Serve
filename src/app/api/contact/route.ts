import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = process.env.RESEND_API_KEY 
  ? new Resend(process.env.RESEND_API_KEY)
  : null

export async function POST(request: NextRequest) {
  try {
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
      subject: `New Contact Form - ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">New Contact Form Submission</h1>
          </div>
          <div style="background: #f8fafc; padding: 20px; border: 1px solid #e2e8f0; border-radius: 0 0 8px 8px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <div style="background: white; padding: 15px; border-radius: 6px; border-left: 4px solid #0284c7;">
              ${message.replace(/\n/g, '<br>')}
            </div>
            <p style="margin-top: 20px; color: #666; font-size: 12px;">
              Submitted: ${timestamp}
            </p>
          </div>
        </div>
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
          </head>
          <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f3f4f6;">
            <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f3f4f6; padding: 40px 0;">
              <tr>
                <td align="center">
                  <table width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                    <!-- Header with Logo -->
                    <tr>
                      <td style="background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%); padding: 40px 30px; text-align: center;">
                        <div style="color: #ffffff; font-size: 32px; font-weight: bold; margin-bottom: 8px;">
                          <span style="color: #3b82f6;">&#9829;</span> SERVE
                        </div>
                        <div style="color: #bfdbfe; font-size: 14px; letter-spacing: 1px;">
                          Supporting Independence in Northamptonshire
                        </div>
                      </td>
                    </tr>
                    
                    <!-- Main Content -->
                    <tr>
                      <td style="padding: 40px 30px;">
                        <h1 style="margin: 0 0 24px 0; font-size: 28px; color: #1e3a8a; font-weight: 700;">
                          Thank you for contacting us!
                        </h1>
                        
                        <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6; color: #374151;">
                          Dear ${name.split(' ')[0]},
                        </p>
                        
                        <p style="margin: 0 0 24px 0; font-size: 16px; line-height: 1.6; color: #374151;">
                          Thank you for getting in touch with SERVE. We have received your message and a member of our team will respond within <strong style="color: #1e40af;">1-2 business days</strong>.
                        </p>
                        
                        <!-- Message Box -->
                        <div style="background: linear-gradient(to right, #eff6ff, #dbeafe); border-left: 4px solid #3b82f6; border-radius: 8px; padding: 20px; margin: 24px 0;">
                          <p style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; color: #1e40af; text-transform: uppercase; letter-spacing: 0.5px;">
                            Your message:
                          </p>
                          <p style="margin: 0; font-size: 15px; line-height: 1.6; color: #4b5563;">
                            ${message.replace(/\n/g, '<br>')}
                          </p>
                        </div>
                        
                        <!-- Urgent Contact Box -->
                        <div style="background: linear-gradient(135deg, #059669 0%, #047857 100%); border-radius: 12px; padding: 24px; margin: 32px 0; text-align: center;">
                          <p style="margin: 0 0 12px 0; font-size: 16px; color: #d1fae5; font-weight: 500;">
                            For urgent matters, please call us directly:
                          </p>
                          <a href="tel:01933315555" style="display: inline-block; margin: 8px 0; font-size: 32px; font-weight: bold; color: #ffffff; text-decoration: none;">
                            📞 01933 315555
                          </a>
                          <p style="margin: 12px 0 0 0; font-size: 14px; color: #d1fae5;">
                            Office hours: Monday - Friday, 9:00 AM - 5:00 PM
                          </p>
                        </div>
                        
                        <!-- Footer Message -->
                        <p style="margin: 32px 0 0 0; font-size: 16px; line-height: 1.6; color: #374151;">
                          Best regards,<br>
                          <strong style="color: #1e40af;">The SERVE Team</strong>
                        </p>
                      </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                      <td style="background-color: #f9fafb; padding: 30px; border-top: 1px solid #e5e7eb;">
                        <table width="100%" cellpadding="0" cellspacing="0">
                          <tr>
                            <td style="text-align: center; padding-bottom: 16px;">
                              <a href="https://serve.org.uk" style="display: inline-block; margin: 0 12px; color: #3b82f6; text-decoration: none; font-size: 14px;">🌐 Website</a>
                              <a href="https://www.facebook.com/SERVE234" style="display: inline-block; margin: 0 12px; color: #3b82f6; text-decoration: none; font-size: 14px;">📘 Facebook</a>
                              <a href="tel:01933315555" style="display: inline-block; margin: 0 12px; color: #3b82f6; text-decoration: none; font-size: 14px;">📞 Call Us</a>
                            </td>
                          </tr>
                          <tr>
                            <td style="text-align: center; padding-top: 16px; border-top: 1px solid #e5e7eb;">
                              <p style="margin: 0 0 8px 0; font-size: 14px; color: #6b7280; font-weight: 600;">
                                SERVE - Charity No. 1043321
                              </p>
                              <p style="margin: 0 0 4px 0; font-size: 13px; color: #9ca3af;">
                                8 West Street, Rushden, Northants NN10 0RT
                              </p>
                              <p style="margin: 0; font-size: 13px; color: #9ca3af;">
                                <a href="mailto:info@serve.org.uk" style="color: #3b82f6; text-decoration: none;">info@serve.org.uk</a> | <a href="tel:01933315555" style="color: #3b82f6; text-decoration: none;">01933 315555</a>
                              </p>
                              <p style="margin: 16px 0 0 0; font-size: 12px; color: #9ca3af;">
                                🏆 Best Homecare Team, East Midlands - Great British Care Awards 2024
                              </p>
                            </td>
                          </tr>
                        </table>
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
