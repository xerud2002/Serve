// Admin notification email template
export interface AdminEmailData {
  firstName: string
  lastName: string
  email: string
  phone: string
  subject: string
  message: string
  submittedAt: string
}

export function generateAdminEmail(data: AdminEmailData): { subject: string; html: string; text: string } {
  const subject = `New Contact Form Submission - ${data.subject}`

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; }
    .header h1 { margin: 0; font-size: 24px; }
    .content { background: #f8fafc; padding: 30px; border: 1px solid #e2e8f0; }
    .field { margin-bottom: 20px; }
    .label { font-weight: bold; color: #0284c7; margin-bottom: 5px; }
    .value { background: white; padding: 12px; border-radius: 6px; border: 1px solid #cbd5e1; }
    .message-box { background: white; padding: 20px; border-radius: 6px; border-left: 4px solid #0284c7; margin-top: 20px; }
    .footer { background: #1e293b; color: #94a3b8; padding: 20px; text-align: center; font-size: 12px; border-radius: 0 0 10px 10px; }
    .divider { border: 0; border-top: 2px solid #cbd5e1; margin: 20px 0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>📬 New Contact Form Submission</h1>
    </div>
    
    <div class="content">
      <p style="color: #64748b; margin-top: 0;">A new inquiry has been received through the SERVE website contact form.</p>
      
      <hr class="divider">
      
      <div class="field">
        <div class="label">👤 Name</div>
        <div class="value">${data.firstName} ${data.lastName}</div>
      </div>
      
      <div class="field">
        <div class="label">📧 Email Address</div>
        <div class="value"><a href="mailto:${data.email}" style="color: #0284c7; text-decoration: none;">${data.email}</a></div>
      </div>
      
      <div class="field">
        <div class="label">📞 Phone Number</div>
        <div class="value">${data.phone || 'Not provided'}</div>
      </div>
      
      <div class="field">
        <div class="label">📋 Topic</div>
        <div class="value">${data.subject}</div>
      </div>
      
      <div class="message-box">
        <div class="label" style="margin-bottom: 10px;">💬 Message</div>
        <div style="white-space: pre-wrap; line-height: 1.6;">${data.message}</div>
      </div>
      
      <hr class="divider">
      
      <div style="display: flex; justify-content: space-between; font-size: 13px; color: #64748b;">
        <div><strong>Submitted:</strong> ${data.submittedAt}</div>
        <div><strong>Privacy Consent:</strong> ✅ Yes</div>
      </div>
      
      <div style="margin-top: 25px; padding: 15px; background: #fef3c7; border-left: 4px solid #f59e0b; border-radius: 6px;">
        <strong style="color: #92400e;">⚡ Action Required:</strong>
        <p style="margin: 5px 0 0 0; color: #78350f;">Please respond within 24 hours as per our service commitment.</p>
      </div>
    </div>
    
    <div class="footer">
      <p style="margin: 0;">SERVE - Supporting Our Community Since 1983</p>
      <p style="margin: 5px 0 0 0;">8 West Street, Rushden, Northants NN10 0RT</p>
    </div>
  </div>
</body>
</html>
  `

  const text = `
New Contact Form Submission

A new inquiry has been received through the SERVE website contact form.

Contact Details:
━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Phone: ${data.phone || 'Not provided'}
Topic: ${data.subject}

Message:
━━━━━━━━━━━━━━━━━━━━━━━━━━━
${data.message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━
Submitted: ${data.submittedAt}
Privacy Consent: Yes

⚡ Please respond within 24 hours as per our service commitment.

---
SERVE - Supporting Our Community Since 1983
8 West Street, Rushden, Northants NN10 0RT
  `

  return { subject, html, text }
}
