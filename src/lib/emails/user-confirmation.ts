// User confirmation email template
export interface UserEmailData {
  firstName: string
  lastName: string
  email: string
  subject: string
  message: string
}

export function generateUserConfirmationEmail(data: UserEmailData): { subject: string; html: string; text: string } {
  const subject = "Thank You for Contacting SERVE - We've Received Your Message"

  // Truncate message for preview (first 100 characters)
  const messagePreview = data.message.length > 100 
    ? data.message.substring(0, 100) + '...' 
    : data.message

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #0891b2 0%, #0e7490 100%); color: white; padding: 40px 30px; border-radius: 10px 10px 0 0; text-align: center; }
    .header h1 { margin: 0 0 10px 0; font-size: 28px; }
    .header p { margin: 0; font-size: 16px; opacity: 0.95; }
    .content { background: white; padding: 40px 30px; border-left: 1px solid #e2e8f0; border-right: 1px solid #e2e8f0; }
    .summary-box { background: #f0f9ff; padding: 20px; border-radius: 8px; border-left: 4px solid #0891b2; margin: 25px 0; }
    .label { font-weight: bold; color: #0891b2; margin-bottom: 5px; display: block; }
    .value { color: #475569; }
    .info-section { background: #f8fafc; padding: 25px; border-radius: 8px; margin: 25px 0; }
    .info-section h3 { margin: 0 0 15px 0; color: #1e293b; font-size: 18px; }
    .contact-item { display: flex; margin-bottom: 12px; }
    .contact-icon { width: 30px; }
    .cta-button { display: inline-block; background: linear-gradient(135deg, #0891b2 0%, #0e7490 100%); color: white; padding: 14px 30px; border-radius: 8px; text-decoration: none; font-weight: bold; margin: 20px 0; }
    .footer { background: #1e293b; color: #94a3b8; padding: 30px; text-align: center; font-size: 13px; border-radius: 0 0 10px 10px; }
    .footer-logo { font-size: 18px; font-weight: bold; color: #0891b2; margin-bottom: 10px; }
    .divider { border: 0; border-top: 1px solid #e2e8f0; margin: 25px 0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>✓ Thank You for Reaching Out!</h1>
      <p>We've received your message and will respond soon</p>
    </div>
    
    <div class="content">
      <p style="margin-top: 0; font-size: 16px;">Dear ${data.firstName} ${data.lastName},</p>
      
      <p>Thank you for reaching out to SERVE. We've successfully received your inquiry regarding "<strong>${data.subject}</strong>" and truly appreciate you taking the time to contact us.</p>
      
      <div class="summary-box">
        <div class="label">📋 Your Message Summary</div>
        <div style="margin-top: 10px;">
          <div class="label" style="font-size: 13px; color: #64748b;">Topic:</div>
          <div class="value" style="margin-bottom: 10px;">${data.subject}</div>
          <div class="label" style="font-size: 13px; color: #64748b;">Message:</div>
          <div class="value" style="font-style: italic;">${messagePreview}</div>
        </div>
      </div>
      
      <div class="info-section">
        <h3>🎯 What Happens Next?</h3>
        <p style="margin: 0; color: #475569;">Our dedicated team will review your inquiry and respond within <strong>1-2 business days</strong>. We're committed to providing you with the information and support you need.</p>
      </div>
      
      <hr class="divider">
      
      <div class="info-section">
        <h3>🚨 Need Immediate Assistance?</h3>
        <p style="margin: 0 0 15px 0; color: #475569;">If your matter is urgent, please don't hesitate to contact us directly:</p>
        
        <div class="contact-item">
          <div class="contact-icon">📞</div>
          <div><strong>Phone:</strong> <a href="tel:01933315555" style="color: #0891b2; text-decoration: none;">01933 315555</a></div>
        </div>
        
        <div class="contact-item">
          <div class="contact-icon">📧</div>
          <div><strong>Email:</strong> <a href="mailto:info@serve.org.uk" style="color: #0891b2; text-decoration: none;">info@serve.org.uk</a></div>
        </div>
        
        <div class="contact-item">
          <div class="contact-icon">🕒</div>
          <div><strong>Office Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM</div>
        </div>
      </div>
      
      <div style="background: #fef3c7; padding: 20px; border-radius: 8px; border-left: 4px solid #f59e0b; margin-top: 25px;">
        <div class="label" style="color: #92400e; margin-bottom: 10px;">📍 Our Address</div>
        <div style="color: #78350f; line-height: 1.8;">
          8 West Street<br>
          Rushden, Northants<br>
          NN10 0RT
        </div>
      </div>
      
      <hr class="divider">
      
      <p style="color: #64748b; font-size: 14px; line-height: 1.8;">
        Thank you for considering SERVE. For over 40 years, we've been dedicated to providing compassionate care and support to older people and adults with disabilities in Northamptonshire.
      </p>
      
      <p style="margin-bottom: 0; font-size: 16px;"><strong>Warm regards,</strong><br>The SERVE Team</p>
    </div>
    
    <div class="footer">
      <div class="footer-logo">SERVE</div>
      <p style="margin: 10px 0;">Supporting Our Community Since 1983</p>
      <p style="margin: 5px 0; font-size: 12px;">Charity Number: 1043321 | CQC Registered</p>
      <p style="margin: 5px 0; font-weight: bold; color: #0891b2;">🏆 Winner: Best Homecare Team, East Midlands 2024</p>
      <hr style="border: 0; border-top: 1px solid #334155; margin: 20px 0;">
      <p style="margin: 10px 0;">
        <a href="https://www.serve.org.uk" style="color: #0891b2; text-decoration: none; margin: 0 10px;">Website</a> |
        <a href="tel:01933315555" style="color: #0891b2; text-decoration: none; margin: 0 10px;">Call Us</a> |
        <a href="mailto:info@serve.org.uk" style="color: #0891b2; text-decoration: none; margin: 0 10px;">Email Us</a>
      </p>
    </div>
  </div>
</body>
</html>
  `

  const text = `
Dear ${data.firstName} ${data.lastName},

Thank you for reaching out to SERVE. We've successfully received your inquiry regarding "${data.subject}" and truly appreciate you taking the time to contact us.

Your Message Summary:
━━━━━━━━━━━━━━━━━━━━━━━━━━━
Topic: ${data.subject}
Message: ${messagePreview}

What Happens Next?
━━━━━━━━━━━━━━━━━━━━━━━━━━━
Our dedicated team will review your inquiry and respond within 1-2 business days. We're committed to providing you with the information and support you need.

Need Immediate Assistance?
━━━━━━━━━━━━━━━━━━━━━━━━━━━
If your matter is urgent, please don't hesitate to call us directly:
📞 Phone: 01933 315555
📧 Email: info@serve.org.uk
🕒 Office Hours: Monday - Friday, 9:00 AM - 5:00 PM

Our Address:
8 West Street
Rushden, Northants
NN10 0RT

Thank you for considering SERVE. For over 40 years, we've been dedicated to providing compassionate care and support to older people and adults with disabilities in Northamptonshire.

Warm regards,
The SERVE Team

━━━━━━━━━━━━━━━━━━━━━━━━━━━
SERVE - Supporting Our Community Since 1983
Charity Number: 1043321 | CQC Registered
🏆 Winner: Best Homecare Team, East Midlands 2024
Website: www.serve.org.uk
  `

  return { subject, html, text }
}
