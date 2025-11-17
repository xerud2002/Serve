import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import {
  getAdminNotificationEmail,
  getAdminNotificationText,
  getUserConfirmationEmail,
  getUserConfirmationText
} from '@/lib/emails/contact-templates'

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

    // Check if SMTP is configured
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.log('Contact form submission (SMTP not configured):', { name, email, subject })
      return NextResponse.json({
        success: true,
        message: 'Your message has been received. We will respond within 1-2 business days.'
      })
    }
    
    // Create SMTP transporter using Microsoft 365 settings
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // Use STARTTLS
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        ciphers: 'SSLv3',
        rejectUnauthorized: true
      }
    })

    // Get current timestamp
    const submittedAt = new Date().toLocaleString('en-GB', {
      dateStyle: 'full',
      timeStyle: 'short',
      timeZone: 'Europe/London'
    })

    // Admin notification email
    const adminEmailOptions = {
      from: `"SERVE Contact Form" <${process.env.SMTP_USER}>`,
      to: 'web@serve.org.uk',
      subject: `New Contact Form Submission - ${subject}`,
      replyTo: email,
      html: getAdminNotificationEmail({ name, email, phone, subject, message }, submittedAt),
      text: getAdminNotificationText({ name, email, phone, subject, message }, submittedAt)
    }

    // User confirmation email
    const userEmailOptions = {
      from: `"SERVE" <${process.env.SMTP_USER}>`,
      to: email,
      subject: 'Thank you for contacting SERVE',
      replyTo: 'web@serve.org.uk',
      html: getUserConfirmationEmail({ name, email, phone, subject, message }),
      text: getUserConfirmationText({ name, email, phone, subject, message })
    }

    // Send emails
    await Promise.all([
      transporter.sendMail(adminEmailOptions),
      transporter.sendMail(userEmailOptions)
    ])

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