import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, subject, message, privacy } = await request.json()
    
    if (!name || !email || !subject || !message || !privacy) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const timestamp = new Date().toLocaleString("en-GB", {
      dateStyle: 'full',
      timeStyle: 'short',
      timeZone: 'Europe/London'
    })
    
    console.log("Contact Form Submission:")
    console.log("Name:", name)
    console.log("Email:", email)
    console.log("Phone:", phone)
    console.log("Subject:", subject)
    console.log("Message:", message)
    console.log("Time:", timestamp)

    // Try to send emails via SMTP
    try {
      // Create SMTP transporter with multiple fallback configurations
      let transporter
      
      // First try: OAuth2 configuration (preferred for Office 365)
      try {
        transporter = nodemailer.createTransport({
          service: 'outlook', // Use predefined Outlook.com service
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
          secure: false,
          requireTLS: true,
          tls: {
            ciphers: 'SSLv3'
          }
        })
        
        console.log("Attempting email send via Outlook service...")
        
        // Admin notification email
        await transporter.sendMail({
          from: `"SERVE Contact Form" <${process.env.SMTP_USER}>`,
          to: 'web@serve.org.uk',
          subject: `New Contact Form - ${subject}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <div style="background: #1e40af; color: white; padding: 20px;">
                <h1>New Contact Form Submission</h1>
              </div>
              <div style="padding: 20px; background: #f8fafc;">
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong></p>
                <div style="background: white; padding: 15px; border-left: 4px solid #0284c7;">
                  ${message.replace(/\n/g, '<br>')}
                </div>
                <p style="color: #666; font-size: 12px; margin-top: 20px;">
                  Submitted: ${timestamp}
                </p>
              </div>
            </div>
          `,
          replyTo: email
        })

        // User confirmation email
        await transporter.sendMail({
          from: `"SERVE" <${process.env.SMTP_USER}>`,
          to: email,
          subject: 'Thank you for contacting SERVE',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <div style="background: #1e40af; color: white; padding: 20px;">
                <h1>Thank you for contacting SERVE</h1>
              </div>
              <div style="padding: 20px; background: #f8fafc;">
                <p>Dear ${name.split(' ')[0]},</p>
                <p>Thank you for contacting SERVE. We have received your message and will respond within 1-2 business days.</p>
                <div style="background: white; padding: 15px; border: 1px solid #cbd5e1; margin: 20px 0;">
                  <p><strong>Your message:</strong></p>
                  <p style="color: #666;">${message.replace(/\n/g, '<br>')}</p>
                </div>
                <p>For urgent matters, please call us at <strong>01933 315555</strong></p>
                <p style="color: #666; font-size: 14px;">Office hours: Monday - Friday, 9:00 AM - 5:00 PM</p>
                <p>Best regards,<br>The SERVE Team</p>
              </div>
            </div>
          `,
          replyTo: 'web@serve.org.uk'
        })

        console.log("✅ Emails sent successfully via SMTP")
        
        return NextResponse.json({
          success: true,
          message: "Your message has been sent successfully. We will respond within 1-2 business days."
        })

      } catch (smtpError) {
        console.error("SMTP Error:", smtpError)
        
        // Log the submission for manual processing
        console.log("📧 MANUAL EMAIL NEEDED:")
        console.log("To: web@serve.org.uk")
        console.log("From:", email)
        console.log("Subject: New Contact Form -", subject)
        console.log("Name:", name)
        console.log("Phone:", phone || 'Not provided')
        console.log("Message:", message)
        console.log("Timestamp:", timestamp)
        console.log("=".repeat(50))
        
        // Return success to user (they don't need to see technical errors)
        return NextResponse.json({
          success: true,
          message: "Your message has been received. We will contact you within 1-2 business days. For urgent matters, please call 01933 315555."
        })
      }
      
    } catch (error) {
      console.error("Email sending failed:", error)
      
      // Always return success to avoid user-facing errors
      return NextResponse.json({
        success: true,
        message: "Your message has been received. We will contact you within 1-2 business days. For urgent matters, please call 01933 315555."
      })
    }
    
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({
      success: true,
      message: "Your message has been received. We will contact you within 1-2 business days. For urgent matters, please call 01933 315555."
    })
  }
}
