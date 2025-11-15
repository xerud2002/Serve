/**
 * Email templates for contact form
 * Centralized email HTML generation for consistency
 */

interface ContactFormData {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}

/**
 * Generate admin notification email HTML
 */
export function getAdminNotificationEmail(data: ContactFormData, timestamp: string): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0;">
        <h1 style="margin: 0; font-size: 24px;">New Contact Form Submission</h1>
      </div>
      <div style="background: #f8fafc; padding: 20px; border: 1px solid #e2e8f0; border-radius: 0 0 8px 8px;">
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Message:</strong></p>
        <div style="background: white; padding: 15px; border-radius: 6px; border-left: 4px solid #0284c7;">
          ${data.message.replace(/\n/g, '<br>')}
        </div>
        <p style="margin-top: 20px; color: #666; font-size: 12px;">
          Submitted: ${timestamp}
        </p>
      </div>
    </div>
  `
}

/**
 * Generate admin notification email plain text version
 */
export function getAdminNotificationText(data: ContactFormData, timestamp: string): string {
  return `
New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || 'Not provided'}
Subject: ${data.subject}

Message:
${data.message}

Submitted: ${timestamp}
  `
}

/**
 * Generate user confirmation email HTML
 */
export function getUserConfirmationEmail(data: ContactFormData): string {
  const firstName = data.name.split(' ')[0]
  
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0;">
        <h1 style="margin: 0; font-size: 24px;">Thank you for contacting SERVE</h1>
      </div>
      <div style="background: #f8fafc; padding: 20px; border: 1px solid #e2e8f0; border-radius: 0 0 8px 8px;">
        <p>Dear ${firstName},</p>
        <p>Thank you for getting in touch with SERVE. We have received your message and will respond within 1-2 business days.</p>
        
        <div style="background: white; padding: 15px; border-radius: 6px; border: 1px solid #cbd5e1; margin: 20px 0;">
          <p><strong>Your message:</strong></p>
          <p style="color: #666;">${data.message.replace(/\n/g, '<br>')}</p>
        </div>
        
        <p>For urgent matters, please call us directly:</p>
        <p style="font-size: 18px; color: #0284c7; font-weight: bold;">📞 01933 315555</p>
        <p style="color: #666; font-size: 14px;">Office hours: Monday - Friday, 9:00 AM - 5:00 PM</p>
        
        <p>Best regards,<br>The SERVE Team</p>
      </div>
    </div>
  `
}

/**
 * Generate user confirmation email plain text version
 */
export function getUserConfirmationText(data: ContactFormData): string {
  const firstName = data.name.split(' ')[0]
  
  return `
Dear ${firstName},

Thank you for getting in touch with SERVE. We have received your message and will respond within 1-2 business days.

Your message:
${data.message}

For urgent matters, please call us directly at 01933 315555
Office hours: Monday - Friday, 9:00 AM - 5:00 PM

Best regards,
The SERVE Team
  `
}
