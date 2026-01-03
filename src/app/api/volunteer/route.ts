import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      firstName,
      lastName,
      email,
      phone,
      address,
      postcode,
      availability,
      interests,
      experience,
      references,
      dbs,
      emergency_contact_name,
      emergency_contact_phone,
      emergency_contact_relationship,
      medical_conditions,
      additional_info
    } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !phone) {
      return NextResponse.json(
        { error: 'Please fill in all required fields' },
        { status: 400 }
      )
    }

    // Email template for SERVE (web@serve.org.uk)
    const adminEmailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Volunteer Application - SERVE</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f9fafb; line-height: 1.6;">
  <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f9fafb;">
    <tr>
      <td style="padding: 40px 20px;">
        <table role="presentation" style="max-width: 700px; margin: 0 auto; background-color: #ffffff; border-radius: 24px; overflow: hidden; box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);">
          
          <!-- Header with gradient -->
          <tr>
            <td style="background: linear-gradient(135deg, #047857 0%, #10b981 100%); padding: 50px 40px; text-align: center;">
              <div style="background-color: rgba(255, 255, 255, 0.15); backdrop-filter: blur(10px); border: 2px solid rgba(255, 255, 255, 0.3); border-radius: 20px; padding: 30px; display: inline-block;">
                <h1 style="margin: 0; color: #ffffff; font-size: 32px; font-weight: 800; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
                  🌟 New Volunteer Application
                </h1>
                <p style="margin: 12px 0 0 0; color: rgba(255, 255, 255, 0.95); font-size: 16px; font-weight: 500;">
                  SERVE Charity - Someone wants to join our team!
                </p>
              </div>
            </td>
          </tr>

          <!-- Main content -->
          <tr>
            <td style="padding: 50px 40px;">
              
              <!-- Alert badge -->
              <div style="background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%); border: 2px solid #3b82f6; border-radius: 16px; padding: 20px; margin-bottom: 35px; text-align: center;">
                <p style="margin: 0; color: #1e40af; font-size: 15px; font-weight: 700;">
                  ⏰ ACTION REQUIRED: Review and contact applicant within 5-7 working days
                </p>
              </div>

              <!-- Applicant Details Section -->
              <div style="margin-bottom: 35px;">
                <h2 style="margin: 0 0 25px 0; color: #047857; font-size: 24px; font-weight: 800; border-bottom: 3px solid #10b981; padding-bottom: 12px;">
                  👤 Applicant Details
                </h2>
                
                <table role="presentation" style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 18px; background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%); border-radius: 12px; margin-bottom: 10px;">
                      <table role="presentation" style="width: 100%;">
                        <tr>
                          <td style="width: 35%; color: #047857; font-weight: 700; font-size: 14px; padding-bottom: 6px;">Full Name:</td>
                          <td style="color: #065f46; font-size: 16px; font-weight: 600;">${firstName} ${lastName}</td>
                        </tr>
                        <tr>
                          <td style="width: 35%; color: #047857; font-weight: 700; font-size: 14px; padding-bottom: 6px;">Email:</td>
                          <td><a href="mailto:${email}" style="color: #0284c7; text-decoration: none; font-weight: 600;">${email}</a></td>
                        </tr>
                        <tr>
                          <td style="width: 35%; color: #047857; font-weight: 700; font-size: 14px; padding-bottom: 6px;">Phone:</td>
                          <td><a href="tel:${phone}" style="color: #0284c7; text-decoration: none; font-weight: 600;">${phone}</a></td>
                        </tr>
                        ${address ? `<tr>
                          <td style="width: 35%; color: #047857; font-weight: 700; font-size: 14px; padding-bottom: 6px;">Address:</td>
                          <td style="color: #065f46; font-weight: 500;">${address}</td>
                        </tr>` : ''}
                        ${postcode ? `<tr>
                          <td style="width: 35%; color: #047857; font-weight: 700; font-size: 14px;">Postcode:</td>
                          <td style="color: #065f46; font-weight: 600;">${postcode}</td>
                        </tr>` : ''}
                      </table>
                    </td>
                  </tr>
                </table>
              </div>

              <!-- Availability & Interests -->
              ${availability || interests ? `
              <div style="margin-bottom: 35px;">
                <h2 style="margin: 0 0 25px 0; color: #047857; font-size: 24px; font-weight: 800; border-bottom: 3px solid #10b981; padding-bottom: 12px;">
                  📅 Availability & Interests
                </h2>
                
                ${availability ? `
                <div style="margin-bottom: 20px; padding: 20px; background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); border-radius: 12px; border-left: 5px solid #f59e0b;">
                  <p style="margin: 0 0 8px 0; color: #92400e; font-weight: 700; font-size: 14px;">AVAILABILITY:</p>
                  <p style="margin: 0; color: #78350f; font-size: 15px; font-weight: 500; white-space: pre-line;">${availability}</p>
                </div>
                ` : ''}
                
                ${interests ? `
                <div style="padding: 20px; background: linear-gradient(135deg, #ddd6fe 0%, #c4b5fd 100%); border-radius: 12px; border-left: 5px solid #8b5cf6;">
                  <p style="margin: 0 0 8px 0; color: #5b21b6; font-weight: 700; font-size: 14px;">VOLUNTEER INTERESTS:</p>
                  <p style="margin: 0; color: #4c1d95; font-size: 15px; font-weight: 500; white-space: pre-line;">${interests}</p>
                </div>
                ` : ''}
              </div>
              ` : ''}

              <!-- Experience & Background -->
              ${experience ? `
              <div style="margin-bottom: 35px;">
                <h2 style="margin: 0 0 25px 0; color: #047857; font-size: 24px; font-weight: 800; border-bottom: 3px solid #10b981; padding-bottom: 12px;">
                  ⭐ Experience & Background
                </h2>
                <div style="padding: 20px; background: linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%); border-radius: 12px; border-left: 5px solid #0284c7;">
                  <p style="margin: 0; color: #075985; font-size: 15px; line-height: 1.7; font-weight: 500; white-space: pre-line;">${experience}</p>
                </div>
              </div>
              ` : ''}

              <!-- References & DBS -->
              <div style="margin-bottom: 35px;">
                <h2 style="margin: 0 0 25px 0; color: #047857; font-size: 24px; font-weight: 800; border-bottom: 3px solid #10b981; padding-bottom: 12px;">
                  ✅ Checks & References
                </h2>
                
                <table role="presentation" style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="width: 48%; padding: 20px; background: ${references === 'yes' ? 'linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)' : 'linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)'}; border-radius: 12px; vertical-align: top;">
                      <p style="margin: 0 0 8px 0; color: ${references === 'yes' ? '#065f46' : '#991b1b'}; font-weight: 700; font-size: 14px;">TWO REFERENCES:</p>
                      <p style="margin: 0; color: ${references === 'yes' ? '#047857' : '#dc2626'}; font-size: 20px; font-weight: 800;">${references === 'yes' ? '✓ YES' : '✗ NO'}</p>
                    </td>
                    <td style="width: 4%;"></td>
                    <td style="width: 48%; padding: 20px; background: ${dbs === 'yes' ? 'linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)' : dbs === 'no' ? 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)' : 'linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%)'}; border-radius: 12px; vertical-align: top;">
                      <p style="margin: 0 0 8px 0; color: ${dbs === 'yes' ? '#065f46' : dbs === 'no' ? '#92400e' : '#3730a3'}; font-weight: 700; font-size: 14px;">DBS CHECK:</p>
                      <p style="margin: 0; color: ${dbs === 'yes' ? '#047857' : dbs === 'no' ? '#d97706' : '#4f46e5'}; font-size: 20px; font-weight: 800;">${dbs === 'yes' ? '✓ HAS ONE' : dbs === 'no' ? '○ NEEDS ONE' : '? UNSURE'}</p>
                    </td>
                  </tr>
                </table>
              </div>

              <!-- Emergency Contact -->
              ${emergency_contact_name ? `
              <div style="margin-bottom: 35px;">
                <h2 style="margin: 0 0 25px 0; color: #047857; font-size: 24px; font-weight: 800; border-bottom: 3px solid #10b981; padding-bottom: 12px;">
                  🚨 Emergency Contact
                </h2>
                <div style="padding: 20px; background: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%); border-radius: 12px; border-left: 5px solid #ef4444;">
                  <table role="presentation" style="width: 100%;">
                    <tr>
                      <td style="width: 35%; color: #991b1b; font-weight: 700; font-size: 14px; padding-bottom: 8px;">Name:</td>
                      <td style="color: #7f1d1d; font-weight: 600; font-size: 15px;">${emergency_contact_name}</td>
                    </tr>
                    ${emergency_contact_phone ? `<tr>
                      <td style="color: #991b1b; font-weight: 700; font-size: 14px; padding-bottom: 8px;">Phone:</td>
                      <td><a href="tel:${emergency_contact_phone}" style="color: #dc2626; text-decoration: none; font-weight: 600;">${emergency_contact_phone}</a></td>
                    </tr>` : ''}
                    ${emergency_contact_relationship ? `<tr>
                      <td style="color: #991b1b; font-weight: 700; font-size: 14px;">Relationship:</td>
                      <td style="color: #7f1d1d; font-weight: 600; font-size: 15px;">${emergency_contact_relationship}</td>
                    </tr>` : ''}
                  </table>
                </div>
              </div>
              ` : ''}

              <!-- Medical Conditions -->
              ${medical_conditions ? `
              <div style="margin-bottom: 35px;">
                <h2 style="margin: 0 0 25px 0; color: #047857; font-size: 24px; font-weight: 800; border-bottom: 3px solid #10b981; padding-bottom: 12px;">
                  🏥 Medical Information
                </h2>
                <div style="padding: 20px; background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); border-radius: 12px; border-left: 5px solid #f59e0b;">
                  <p style="margin: 0; color: #78350f; font-size: 15px; line-height: 1.7; font-weight: 500; white-space: pre-line;">${medical_conditions}</p>
                </div>
              </div>
              ` : ''}

              <!-- Additional Info -->
              ${additional_info ? `
              <div style="margin-bottom: 35px;">
                <h2 style="margin: 0 0 25px 0; color: #047857; font-size: 24px; font-weight: 800; border-bottom: 3px solid #10b981; padding-bottom: 12px;">
                  💬 Additional Information
                </h2>
                <div style="padding: 20px; background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%); border-radius: 12px; border-left: 5px solid #6b7280;">
                  <p style="margin: 0; color: #374151; font-size: 15px; line-height: 1.7; font-weight: 500; white-space: pre-line;">${additional_info}</p>
                </div>
              </div>
              ` : ''}

              <!-- Action Required Box -->
              <div style="background: linear-gradient(135deg, #047857 0%, #10b981 100%); border-radius: 16px; padding: 30px; text-align: center; box-shadow: 0 8px 20px rgba(4, 120, 87, 0.3);">
                <p style="margin: 0 0 20px 0; color: #ffffff; font-size: 18px; font-weight: 700;">
                  📋 Next Steps for Volunteer Coordinator
                </p>
                <div style="background-color: rgba(255, 255, 255, 0.15); border-radius: 12px; padding: 20px; text-align: left;">
                  <p style="margin: 0 0 12px 0; color: #ffffff; font-size: 14px; line-height: 1.8;">
                    ✓ Review application details<br>
                    ✓ Contact applicant within 5-7 working days<br>
                    ✓ Arrange informal chat to discuss opportunities<br>
                    ✓ Request references if not already provided<br>
                    ✓ Arrange DBS check if proceeding<br>
                    ✓ Schedule training and induction
                  </p>
                </div>
              </div>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f9fafb; padding: 30px 40px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0 0 10px 0; color: #374151; font-size: 14px; font-weight: 600;">
                SERVE - Charity No. 1043321
              </p>
              <p style="margin: 0; color: #6b7280; font-size: 13px; line-height: 1.6;">
                8 West Street, Rushden, Northamptonshire, NN10 0RT<br>
                Tel: 01933 315555 | Email: info@serve.org.uk
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

    // Graceful degradation if Resend is not configured
    if (!resend) {
      console.log('📧 Resend not configured. Email would have been sent with:', {
        to: 'web@serve.org.uk',
        subject: `New Volunteer Application: ${firstName} ${lastName}`,
        from: 'SERVE <noreply@serve.org.uk>',
      })
      console.log('📋 Application data:', body)
      
      return NextResponse.json({ 
        success: true,
        message: 'Application received (dev mode - email logging only)'
      })
    }

    // Send email to SERVE
    await resend.emails.send({
      from: 'SERVE <noreply@serve.org.uk>',
      to: 'web@serve.org.uk',
      subject: `🌟 New Volunteer Application: ${firstName} ${lastName}`,
      html: adminEmailHtml,
    })

    return NextResponse.json({ 
      success: true,
      message: 'Application submitted successfully'
    })
  } catch (error) {
    console.error('Error processing volunteer application:', error)
    return NextResponse.json(
      { error: 'Failed to submit application. Please try again or call us at 01933 315555.' },
      { status: 500 }
    )
  }
}
