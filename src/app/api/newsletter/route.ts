import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { db } from '@/lib/firebase'
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore'
import { checkRateLimit, getClientIP, rateLimiters } from '@/lib/rateLimit'

const resend = process.env.RESEND_API_KEY 
  ? new Resend(process.env.RESEND_API_KEY)
  : null

export async function POST(request: NextRequest) {
  try {
    // Rate limiting: 3 requests per hour
    const ip = getClientIP(request)
    const rateLimit = checkRateLimit(ip, rateLimiters.newsletter)
    
    if (!rateLimit.success) {
      return NextResponse.json(
        { error: `Too many signup attempts. Please try again in ${Math.ceil(rateLimit.resetIn / 60)} minutes.` },
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
    const { email, firstName, interests, frequency } = body
    
    if (!email) {
      return NextResponse.json(
        { error: 'Email address is required' },
        { status: 400 }
      )
    }

    const timestamp = new Date().toISOString()
    const formattedTime = new Date().toLocaleString('en-GB', {
      dateStyle: 'full',
      timeStyle: 'short',
      timeZone: 'Europe/London'
    })

    // Save to Firebase if configured
    if (db) {
      try {
        // Check if email already exists
        const existingQuery = query(collection(db, 'newsletter'), where('email', '==', email))
        const existingDocs = await getDocs(existingQuery)
        
        if (existingDocs.empty) {
          // Add new subscriber
          await addDoc(collection(db, 'newsletter'), {
            email,
            firstName: firstName || '',
            interests: interests || 'General updates',
            frequency: frequency || 'Monthly',
            subscribed_at: timestamp,
            status: 'active'
          })
        } else {
          // Email already subscribed
          return NextResponse.json({
            success: true,
            message: 'You are already subscribed to our newsletter!'
          })
        }
      } catch (firebaseError) {
        console.error('Firebase save error:', firebaseError)
        // Continue even if Firebase fails
      }
    }

    // If Resend is not configured, log to console (development/build time)
    if (!resend) {
      console.log('Newsletter signup (Resend not configured):', { email, firstName })
      return NextResponse.json({
        success: true,
        message: 'Thank you for subscribing! You will receive our newsletter updates soon.'
      })
    }

    // Send admin notification
    await resend.emails.send({
      from: 'SERVE Newsletter <noreply@serve.org.uk>',
      to: 'web@serve.org.uk',
      subject: 'New Newsletter Subscription',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Newsletter Subscriber</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f3f4f6;">
          <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f3f4f6;">
            <tr>
              <td align="center" style="padding: 40px 20px;">
                <table role="presentation" style="max-width: 600px; width: 100%; border-collapse: collapse; background-color: #ffffff; border-radius: 16px; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1); overflow: hidden;">
                  
                  <!-- Header -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%); padding: 30px; text-align: center;">
                      <div style="background: rgba(255, 255, 255, 0.2); border-radius: 50%; width: 64px; height: 64px; margin: 0 auto 15px; display: inline-flex; align-items: center; justify-content: center;">
                        <span style="font-size: 32px;">📰</span>
                      </div>
                      <h1 style="margin: 0; color: #ffffff; font-size: 26px; font-weight: 700;">
                        New Newsletter Subscriber
                      </h1>
                      <p style="margin: 8px 0 0; color: #ddd6fe; font-size: 14px;">
                        ${formattedTime}
                      </p>
                    </td>
                  </tr>
                  
                  <!-- Subscriber Details -->
                  <tr>
                    <td style="padding: 30px; background-color: #ffffff;">
                      
                      <!-- Email & Name Grid -->
                      <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                        <tr>
                          <td style="padding: 18px; background: linear-gradient(135deg, #eff6ff, #dbeafe); border-radius: 12px; border-left: 4px solid #3b82f6;">
                            <p style="margin: 0 0 8px; color: #1e40af; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">
                              📧 Email Address
                            </p>
                            <p style="margin: 0; color: #1e293b; font-size: 16px; font-weight: 600;">
                              <a href="mailto:${email}" style="color: #0369a1; text-decoration: none;">${email}</a>
                            </p>
                          </td>
                        </tr>
                      </table>
                      
                      <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                        <tr>
                          <td style="padding: 18px; background: linear-gradient(135deg, #f0fdf4, #dcfce7); border-radius: 12px; border-left: 4px solid #22c55e; width: 48%; vertical-align: top;">
                            <p style="margin: 0 0 8px; color: #166534; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">
                              👤 Name
                            </p>
                            <p style="margin: 0; color: #1e293b; font-size: 16px; font-weight: 600;">
                              ${firstName || '<em style="color: #94a3b8;">Not provided</em>'}
                            </p>
                          </td>
                          <td style="width: 4%;"></td>
                          <td style="padding: 18px; background: linear-gradient(135deg, #fef3c7, #fde68a); border-radius: 12px; border-left: 4px solid #f59e0b; width: 48%; vertical-align: top;">
                            <p style="margin: 0 0 8px; color: #92400e; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">
                              📅 Frequency
                            </p>
                            <p style="margin: 0; color: #1e293b; font-size: 16px; font-weight: 600; text-transform: capitalize;">
                              ${frequency || 'Monthly'}
                            </p>
                          </td>
                        </tr>
                      </table>
                      
                      <!-- Interests Box -->
                      <div style="background: linear-gradient(to right, #faf5ff, #f3e8ff); border-left: 4px solid #a855f7; border-radius: 12px; padding: 20px; margin: 20px 0;">
                        <p style="margin: 0 0 10px; color: #7c3aed; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">
                          💡 Interests
                        </p>
                        <p style="margin: 0; color: #334155; font-size: 15px; font-weight: 500; line-height: 1.6;">
                          ${interests || 'General updates'}
                        </p>
                      </div>
                      
                      <!-- Action Button -->
                      <div style="text-align: center; margin: 30px 0 20px;">
                        <a href="mailto:${email}" style="display: inline-block; background: linear-gradient(135deg, #7c3aed, #6d28d9); color: white; padding: 14px 32px; text-decoration: none; border-radius: 10px; font-size: 16px; font-weight: 600; box-shadow: 0 4px 14px rgba(124, 58, 237, 0.4);">
                          ✉️ Contact Subscriber
                        </a>
                      </div>
                      
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="background: #f9fafb; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb;">
                      <p style="margin: 0; color: #6b7280; font-size: 13px;">
                        This email was sent from the <strong>SERVE Newsletter Subscription Form</strong>
                      </p>
                      <p style="margin: 8px 0 0; color: #9ca3af; font-size: 12px;">
                        serve.org.uk | Charity Number: 1043321
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
      subject: 'Welcome to SERVE Newsletter! 🎉',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Welcome to SERVE Newsletter</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f3f4f6;">
          <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f3f4f6;">
            <tr>
              <td align="center" style="padding: 40px 20px;">
                <table role="presentation" style="max-width: 600px; width: 100%; border-collapse: collapse; background-color: #ffffff; border-radius: 16px; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1); overflow: hidden;">
                  
                  <!-- Header -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%); padding: 40px 30px; text-align: center;">
                      <div style="margin-bottom: 20px;">
                        <span style="font-size: 48px;">🎉</span>
                      </div>
                      <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">
                        Welcome to SERVE Newsletter!
                      </h1>
                      <p style="margin: 10px 0 0; color: #bfdbfe; font-size: 16px;">
                        Thank you for joining our community
                      </p>
                    </td>
                  </tr>
                  
                  <!-- Main Content -->
                  <tr>
                    <td style="padding: 40px 30px; background-color: #ffffff;">
                      <p style="margin: 0 0 20px; color: #1f2937; font-size: 16px; line-height: 1.6;">
                        Dear <strong>${firstName || 'Friend'}</strong>,
                      </p>
                      
                      <p style="margin: 0 0 25px; color: #374151; font-size: 16px; line-height: 1.6;">
                        We're absolutely delighted to have you join our SERVE community! You're now part of our mission to support independence and dignity across Northamptonshire.
                      </p>
                      
                      <!-- Award Badge -->
                      <div style="background: linear-gradient(135deg, #fef3c7, #fde68a); border: 2px solid #f59e0b; border-radius: 12px; padding: 20px; margin: 25px 0; text-align: center;">
                        <p style="margin: 0 0 8px; font-size: 24px;">🏆</p>
                        <p style="margin: 0; color: #92400e; font-size: 15px; font-weight: 700;">
                          Award-Winning Care Services
                        </p>
                        <p style="margin: 5px 0 0; color: #78350f; font-size: 13px;">
                          Best Homecare Team, East Midlands 2024
                        </p>
                      </div>
                      
                      <!-- What to Expect -->
                      <div style="margin: 30px 0;">
                        <h2 style="margin: 0 0 20px; color: #1f2937; font-size: 20px; font-weight: 700;">
                          What You'll Receive
                        </h2>
                        
                        <table role="presentation" style="width: 100%; border-collapse: collapse;">
                          <tr>
                            <td style="padding: 12px 0; vertical-align: top;">
                              <table role="presentation" style="width: 100%;">
                                <tr>
                                  <td style="width: 40px; vertical-align: top;">
                                    <div style="background: linear-gradient(135deg, #eff6ff, #dbeafe); width: 32px; height: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
                                      <span style="font-size: 18px;">💙</span>
                                    </div>
                                  </td>
                                  <td style="padding-left: 12px;">
                                    <p style="margin: 0 0 4px; color: #1f2937; font-size: 15px; font-weight: 600;">Care Services Updates</p>
                                    <p style="margin: 0; color: #6b7280; font-size: 14px; line-height: 1.4;">Learn about our personal care, day care, and community services</p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 12px 0; vertical-align: top;">
                              <table role="presentation" style="width: 100%;">
                                <tr>
                                  <td style="width: 40px; vertical-align: top;">
                                    <div style="background: linear-gradient(135deg, #f0fdf4, #dcfce7); width: 32px; height: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
                                      <span style="font-size: 18px;">🎊</span>
                                    </div>
                                  </td>
                                  <td style="padding-left: 12px;">
                                    <p style="margin: 0 0 4px; color: #1f2937; font-size: 15px; font-weight: 600;">Events & Activities</p>
                                    <p style="margin: 0; color: #6b7280; font-size: 14px; line-height: 1.4;">Be first to know about community events and social activities</p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 12px 0; vertical-align: top;">
                              <table role="presentation" style="width: 100%;">
                                <tr>
                                  <td style="width: 40px; vertical-align: top;">
                                    <div style="background: linear-gradient(135deg, #fef3c7, #fde68a); width: 32px; height: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
                                      <span style="font-size: 18px;">⭐</span>
                                    </div>
                                  </td>
                                  <td style="padding-left: 12px;">
                                    <p style="margin: 0 0 4px; color: #1f2937; font-size: 15px; font-weight: 600;">Success Stories</p>
                                    <p style="margin: 0; color: #6b7280; font-size: 14px; line-height: 1.4;">Inspiring stories of how we're making a difference</p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 12px 0; vertical-align: top;">
                              <table role="presentation" style="width: 100%;">
                                <tr>
                                  <td style="width: 40px; vertical-align: top;">
                                    <div style="background: linear-gradient(135deg, #fce7f3, #fbcfe8); width: 32px; height: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
                                      <span style="font-size: 18px;">🤝</span>
                                    </div>
                                  </td>
                                  <td style="padding-left: 12px;">
                                    <p style="margin: 0 0 4px; color: #1f2937; font-size: 15px; font-weight: 600;">Get Involved</p>
                                    <p style="margin: 0; color: #6b7280; font-size: 14px; line-height: 1.4;">Volunteering and fundraising opportunities</p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </div>
                      
                      <!-- Contact CTA -->
                      <div style="background: linear-gradient(to right, #eff6ff, #f0f9ff); border-radius: 12px; padding: 25px; margin: 30px 0; text-align: center;">
                        <p style="margin: 0 0 15px; color: #1e40af; font-size: 15px; font-weight: 600;">
                          Have questions or need support?
                        </p>
                        <a href="tel:01933315555" style="display: inline-block; background: linear-gradient(135deg, #0284c7, #0369a1); color: white; padding: 14px 32px; text-decoration: none; border-radius: 10px; font-size: 18px; font-weight: 700; box-shadow: 0 4px 12px rgba(2, 132, 199, 0.3); margin: 0 5px;">
                          📞 01933 315555
                        </a>
                        <p style="margin: 12px 0 0; color: #0369a1; font-size: 13px;">
                          Monday - Friday: 9:00 AM - 5:00 PM
                        </p>
                      </div>
                      
                      <p style="margin: 25px 0 0; color: #6b7280; font-size: 14px; line-height: 1.5; text-align: center;">
                        You can unsubscribe at any time by clicking the link at the bottom of any newsletter email.
                      </p>
                      
                      <p style="margin: 30px 0 10px; color: #1f2937; font-size: 16px; line-height: 1.6;">
                        Warm regards,<br>
                        <strong style="color: #1e40af;">The SERVE Team</strong>
                      </p>
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="background: #f9fafb; padding: 30px; text-align: center; border-top: 1px solid #e5e7eb;">
                      <p style="margin: 0 0 15px; color: #6b7280; font-size: 14px; font-weight: 600;">
                        SERVE - Supporting Independence
                      </p>
                      <p style="margin: 0 0 5px; color: #6b7280; font-size: 13px; line-height: 1.5;">
                        📍 8 West Street, Rushden, Northants NN10 0RT
                      </p>
                      <p style="margin: 0 0 5px; color: #6b7280; font-size: 13px; line-height: 1.5;">
                        📧 <a href="mailto:info@serve.org.uk" style="color: #0284c7; text-decoration: none;">info@serve.org.uk</a>
                      </p>
                      <p style="margin: 0 0 15px; color: #6b7280; font-size: 13px; line-height: 1.5;">
                        🌐 <a href="https://serve-delta.vercel.app" style="color: #0284c7; text-decoration: none;">serve-delta.vercel.app</a>
                      </p>
                      
                      <p style="margin: 15px 0 0; color: #9ca3af; font-size: 12px;">
                        Registered Charity Number: 1043321
                      </p>
                      <p style="margin: 5px 0 0; color: #9ca3af; font-size: 12px;">
                        🏆 Winner: Best Homecare Team, East Midlands 2024
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
      message: 'Thank you for subscribing! You will receive our newsletter updates soon.'
    })
    
  } catch (error) {
    console.error('Newsletter signup error:', error)
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again or contact us directly.' },
      { status: 500 }
    )
  }
}
