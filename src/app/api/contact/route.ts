import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { generateAdminEmail, type AdminEmailData } from '@/lib/emails/admin-notification'
import { generateUserConfirmationEmail, type UserEmailData } from '@/lib/emails/user-confirmation'

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
    
    // Split name into first and last name
    const nameParts = name.trim().split(' ')
    const firstName = nameParts[0] || ''
    const lastName = nameParts.slice(1).join(' ') || ''
    
    // Get current timestamp
    const submittedAt = new Date().toLocaleString('en-GB', {
      dateStyle: 'full',
      timeStyle: 'short',
      timeZone: 'Europe/London'
    })
    
    // Generate admin email
    const adminEmailData: AdminEmailData = {
      firstName,
      lastName,
      email,
      phone: phone || '',
      subject,
      message,
      submittedAt
    }
    const adminEmail = generateAdminEmail(adminEmailData)
    
    // Generate user confirmation email
    const userEmailData: UserEmailData = {
      firstName,
      lastName,
      email,
      subject,
      message
    }
    const userEmail = generateUserConfirmationEmail(userEmailData)
    
    // Send both emails
    const [adminResult, userResult] = await Promise.allSettled([
      // Admin notification email
      resend.emails.send({
        from: 'SERVE Contact Form <noreply@serve.org.uk>',
        to: 'info@serve.org.uk',
        subject: adminEmail.subject,
        html: adminEmail.html,
        text: adminEmail.text,
        replyTo: email
      }),
      
      // User confirmation email
      resend.emails.send({
        from: 'SERVE <noreply@serve.org.uk>',
        to: email,
        subject: userEmail.subject,
        html: userEmail.html,
        text: userEmail.text,
        replyTo: 'info@serve.org.uk'
      })
    ])
    
    // Check if admin email failed
    if (adminResult.status === 'rejected') {
      console.error('Failed to send admin notification:', adminResult.reason)
      return NextResponse.json(
        { error: 'Failed to send notification to SERVE team. Please try again or call us directly.' },
        { status: 500 }
      )
    }
    
    // Check if user confirmation email failed (warn but don't fail the request)
    if (userResult.status === 'rejected') {
      console.error('Failed to send user confirmation:', userResult.reason)
      // Still return success as the admin notification worked
    }
    
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
