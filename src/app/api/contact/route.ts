import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

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

    // Get current timestamp
    const submittedAt = new Date().toLocaleString('en-GB', {
      dateStyle: 'full',
      timeStyle: 'short',
      timeZone: 'Europe/London'
    })

    // Admin notification email HTML
    const adminEmailHtml = `
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
            Submitted: ${submittedAt}
          </p>
        </div>
      </div>
    `

    // User confirmation email HTML
    const userEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0;">
          <h1 style="margin: 0; font-size: 24px;">Thank you for contacting SERVE</h1>
        </div>
        <div style="background: #f8fafc; padding: 20px; border: 1px solid #e2e8f0; border-radius: 0 0 8px 8px;">
          <p>Dear ${name.split(' ')[0]},</p>
          <p>Thank you for getting in touch with SERVE. We have received your message and will respond within 1-2 business days.</p>
          
          <div style="background: white; padding: 15px; border-radius: 6px; border: 1px solid #cbd5e1; margin: 20px 0;">
            <p><strong>Your message:</strong></p>
            <p style="color: #666;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <p>For urgent matters, please call us directly:</p>
          <p style="font-size: 18px; color: #0284c7; font-weight: bold;">📞 01933 315555</p>
          <p style="color: #666; font-size: 14px;">Office hours: Monday - Friday, 9:00 AM - 5:00 PM</p>
          
          <p>Best regards,<br>The SERVE Team</p>
        </div>
      </div>
    `

    // Send emails using Resend
    try {
      const [adminResult, userResult] = await Promise.allSettled([
        // Admin notification
        resend.emails.send({
          from: 'SERVE Contact Form <onboarding@resend.dev>',
          to: 'web@serve.org.uk',
          subject: `New Contact Form Submission - ${subject}`,
          html: adminEmailHtml,
          replyTo: email
        }),
        
        // User confirmation
        resend.emails.send({
          from: 'SERVE <onboarding@resend.dev>',
          to: email,
          subject: 'Thank you for contacting SERVE',
          html: userEmailHtml,
          replyTo: 'web@serve.org.uk'
        })
      ])

      // Check results
      if (adminResult.status === 'rejected') {
        console.error('Failed to send admin notification:', adminResult.reason)
      }
      
      if (userResult.status === 'rejected') {
        console.error('Failed to send user confirmation:', userResult.reason)
      }

      return NextResponse.json({
        success: true,
        message: 'Your message has been sent successfully. We will respond within 1-2 business days.'
      })
      
    } catch (emailError) {
      console.error('Email sending failed:', emailError)
      return NextResponse.json({
        success: true,
        message: 'Your message has been received. We will contact you within 1-2 business days.'
      })
    }
    
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({
      success: true,
      message: 'Your message has been received. We will contact you within 1-2 business days. For urgent matters, please call 01933 315555.'
    })
  }
}
