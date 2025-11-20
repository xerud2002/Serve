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
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f3f4f6;">
      <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f3f4f6;">
        <tr>
          <td align="center" style="padding: 40px 20px;">
            <table role="presentation" style="max-width: 600px; width: 100%; border-collapse: collapse; background-color: #ffffff; border-radius: 16px; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1); overflow: hidden;">
              
              <!-- Header -->
              <tr>
                <td style="background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%); padding: 30px; text-align: center;">
                  <div style="background: rgba(255, 255, 255, 0.2); border-radius: 50%; width: 64px; height: 64px; margin: 0 auto 15px; display: flex; align-items: center; justify-content: center;">
                    <span style="font-size: 32px;">📬</span>
                  </div>
                  <h1 style="margin: 0; color: #ffffff; font-size: 26px; font-weight: 700;">
                    New Contact Form Submission
                  </h1>
                  <p style="margin: 8px 0 0; color: #fecaca; font-size: 14px;">
                    ${timestamp}
                  </p>
                </td>
              </tr>
              
              <!-- Contact Details -->
              <tr>
                <td style="padding: 30px; background-color: #ffffff;">
                  
                  <!-- Contact Info Grid -->
                  <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
                    <tr>
                      <td style="padding: 15px; background: linear-gradient(135deg, #eff6ff, #dbeafe); border-radius: 8px; width: 50%; vertical-align: top;">
                        <p style="margin: 0 0 5px; color: #3b82f6; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                          👤 Name
                        </p>
                        <p style="margin: 0; color: #1e293b; font-size: 16px; font-weight: 600;">
                          ${data.name}
                        </p>
                      </td>
                      <td style="width: 20px;"></td>
                      <td style="padding: 15px; background: linear-gradient(135deg, #f0fdf4, #dcfce7); border-radius: 8px; width: 50%; vertical-align: top;">
                        <p style="margin: 0 0 5px; color: #22c55e; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                          📧 Email
                        </p>
                        <p style="margin: 0; color: #1e293b; font-size: 14px; font-weight: 500;">
                          <a href="mailto:${data.email}" style="color: #0369a1; text-decoration: none;">${data.email}</a>
                        </p>
                      </td>
                    </tr>
                  </table>
                  
                  <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
                    <tr>
                      <td style="padding: 15px; background: linear-gradient(135deg, #fef3c7, #fde68a); border-radius: 8px; width: 50%; vertical-align: top;">
                        <p style="margin: 0 0 5px; color: #d97706; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                          📞 Phone
                        </p>
                        <p style="margin: 0; color: #1e293b; font-size: 16px; font-weight: 600;">
                          ${data.phone || '<em style="color: #94a3b8;">Not provided</em>'}
                        </p>
                      </td>
                      <td style="width: 20px;"></td>
                      <td style="padding: 15px; background: linear-gradient(135deg, #fce7f3, #fbcfe8); border-radius: 8px; width: 50%; vertical-align: top;">
                        <p style="margin: 0 0 5px; color: #db2777; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                          📋 Subject
                        </p>
                        <p style="margin: 0; color: #1e293b; font-size: 14px; font-weight: 500;">
                          ${data.subject}
                        </p>
                      </td>
                    </tr>
                  </table>
                  
                  <!-- Message Box -->
                  <div style="background: linear-gradient(to right, #f8fafc, #f1f5f9); border-left: 5px solid #0284c7; border-radius: 10px; padding: 25px; margin: 25px 0;">
                    <p style="margin: 0 0 12px; color: #0369a1; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">
                      💬 Message
                    </p>
                    <div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0;">
                      <p style="margin: 0; color: #334155; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">
${data.message}
                      </p>
                    </div>
                  </div>
                  
                  <!-- Action Buttons -->
                  <div style="text-align: center; margin: 30px 0 20px;">
                    <a href="mailto:${data.email}?subject=Re: ${encodeURIComponent(data.subject)}" style="display: inline-block; background: linear-gradient(135deg, #0284c7, #0369a1); color: white; padding: 14px 32px; text-decoration: none; border-radius: 8px; font-size: 16px; font-weight: 600; margin: 0 10px; box-shadow: 0 4px 12px rgba(2, 132, 199, 0.3);">
                      ✉️ Reply via Email
                    </a>
                    ${data.phone ? `
                    <a href="tel:${data.phone.replace(/\s/g, '')}" style="display: inline-block; background: linear-gradient(135deg, #22c55e, #16a34a); color: white; padding: 14px 32px; text-decoration: none; border-radius: 8px; font-size: 16px; font-weight: 600; margin: 0 10px; box-shadow: 0 4px 12px rgba(34, 197, 94, 0.3);">
                      📞 Call Now
                    </a>
                    ` : ''}
                  </div>
                  
                </td>
              </tr>
              
              <!-- Footer -->
              <tr>
                <td style="background: #f9fafb; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb;">
                  <p style="margin: 0; color: #6b7280; font-size: 13px;">
                    This email was sent from the <strong>SERVE Contact Form</strong>
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
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Thank you for contacting SERVE</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f3f4f6;">
      <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f3f4f6;">
        <tr>
          <td align="center" style="padding: 40px 20px;">
            <table role="presentation" style="max-width: 600px; width: 100%; border-collapse: collapse; background-color: #ffffff; border-radius: 16px; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1); overflow: hidden;">
              
              <!-- Header with gradient -->
              <tr>
                <td style="background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%); padding: 40px 30px; text-align: center;">
                  <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">
                    Thank You for Contacting SERVE
                  </h1>
                  <p style="margin: 10px 0 0; color: #bfdbfe; font-size: 16px;">
                    Supporting Independence in Northamptonshire
                  </p>
                </td>
              </tr>
              
              <!-- Main content -->
              <tr>
                <td style="padding: 40px 30px; background-color: #ffffff;">
                  <p style="margin: 0 0 20px; color: #1f2937; font-size: 16px; line-height: 1.6;">
                    Dear <strong>${firstName}</strong>,
                  </p>
                  
                  <p style="margin: 0 0 20px; color: #374151; font-size: 16px; line-height: 1.6;">
                    Thank you for getting in touch with SERVE. We have received your message and one of our team members will respond within <strong>1-2 business days</strong>.
                  </p>
                  
                  <!-- Message recap box -->
                  <div style="background: linear-gradient(to right, #eff6ff, #f0f9ff); border-left: 4px solid #0284c7; border-radius: 8px; padding: 20px; margin: 25px 0;">
                    <p style="margin: 0 0 10px; color: #0369a1; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                      Your Message
                    </p>
                    <p style="margin: 0; color: #1e293b; font-size: 15px; line-height: 1.6;">
                      ${data.message.replace(/\n/g, '<br>')}
                    </p>
                  </div>
                  
                  <!-- Urgent contact section -->
                  <div style="background: #fef3c7; border: 2px solid #fbbf24; border-radius: 12px; padding: 20px; margin: 25px 0;">
                    <p style="margin: 0 0 12px; color: #92400e; font-size: 15px; font-weight: 600;">
                      ⏱️ Need Immediate Assistance?
                    </p>
                    <p style="margin: 0 0 15px; color: #78350f; font-size: 14px; line-height: 1.5;">
                      For urgent matters, please call us directly:
                    </p>
                    <div style="text-align: center; margin: 15px 0;">
                      <a href="tel:01933315555" style="display: inline-block; background: linear-gradient(135deg, #0284c7, #0369a1); color: #ffffff; padding: 14px 32px; text-decoration: none; border-radius: 8px; font-size: 20px; font-weight: 700; letter-spacing: 0.5px; box-shadow: 0 4px 12px rgba(2, 132, 199, 0.3);">
                        📞 01933 315555
                      </a>
                    </div>
                    <p style="margin: 12px 0 0; color: #78350f; font-size: 13px; text-align: center;">
                      Monday - Friday: 9:00 AM - 5:00 PM
                    </p>
                  </div>
                  
                  <!-- What happens next -->
                  <div style="margin: 30px 0;">
                    <p style="margin: 0 0 15px; color: #1f2937; font-size: 16px; font-weight: 600;">
                      What Happens Next?
                    </p>
                    <table role="presentation" style="width: 100%; border-collapse: collapse;">
                      <tr>
                        <td style="padding: 10px 0; vertical-align: top; width: 30px;">
                          <span style="display: inline-block; background: #10b981; color: white; width: 24px; height: 24px; border-radius: 50%; text-align: center; line-height: 24px; font-size: 12px; font-weight: 700;">1</span>
                        </td>
                        <td style="padding: 10px 0 10px 10px; color: #374151; font-size: 14px; line-height: 1.5;">
                          We review your message carefully
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 10px 0; vertical-align: top;">
                          <span style="display: inline-block; background: #10b981; color: white; width: 24px; height: 24px; border-radius: 50%; text-align: center; line-height: 24px; font-size: 12px; font-weight: 700;">2</span>
                        </td>
                        <td style="padding: 10px 0 10px 10px; color: #374151; font-size: 14px; line-height: 1.5;">
                          The appropriate team member is assigned
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 10px 0; vertical-align: top;">
                          <span style="display: inline-block; background: #10b981; color: white; width: 24px; height: 24px; border-radius: 50%; text-align: center; line-height: 24px; font-size: 12px; font-weight: 700;">3</span>
                        </td>
                        <td style="padding: 10px 0 10px 10px; color: #374151; font-size: 14px; line-height: 1.5;">
                          You receive a personalised response within 1-2 business days
                        </td>
                      </tr>
                    </table>
                  </div>
                  
                  <p style="margin: 30px 0 10px; color: #1f2937; font-size: 16px; line-height: 1.6;">
                    Best regards,<br>
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
                    🌐 <a href="https://serve.org.uk" style="color: #0284c7; text-decoration: none;">www.serve.org.uk</a>
                  </p>
                  
                  <!-- Social links -->
                  <div style="margin: 20px 0;">
                    <a href="https://www.facebook.com/SERVE234/" style="display: inline-block; margin: 0 8px; text-decoration: none;">
                      <img src="https://img.icons8.com/color/48/000000/facebook.webp" alt="Facebook" width="32" height="32" style="border-radius: 50%;">
                    </a>
                    <a href="https://www.linkedin.com/company/serve-nvca/" style="display: inline-block; margin: 0 8px; text-decoration: none;">
                      <img src="https://img.icons8.com/color/48/000000/linkedin.webp" alt="LinkedIn" width="32" height="32" style="border-radius: 50%;">
                    </a>
                  </div>
                  
                  <p style="margin: 15px 0 0; color: #9ca3af; font-size: 12px;">
                    Registered Charity Number: 1043321
                  </p>
                  <p style="margin: 5px 0 0; color: #9ca3af; font-size: 12px;">
                    Winner: Best Homecare Team, East Midlands 2024
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
