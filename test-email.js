import { Resend } from 'resend'
import * as dotenv from 'dotenv'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Load .env.local file
dotenv.config({ path: join(__dirname, '.env.local') })

const resend = new Resend(process.env.RESEND_API_KEY)

async function testEmail() {
  console.log('🧪 Testing Resend Email Configuration...\n')
  console.log('API Key:', process.env.RESEND_API_KEY ? '✅ Found' : '❌ Missing')
  
  if (!process.env.RESEND_API_KEY) {
    console.error('❌ RESEND_API_KEY not found in environment variables')
    process.exit(1)
  }

  try {
    console.log('\n📧 Sending test email to ciprian.rotopanescu@gmail.com (testing mode)...\n')
    
    const { data, error } = await resend.emails.send({
      from: 'SERVE Contact Form Test <onboarding@resend.dev>',
      to: 'ciprian.rotopanescu@gmail.com',
      subject: 'Test Email from SERVE Contact Form',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">✅ Email Test Successful</h1>
          </div>
          <div style="background: #f8fafc; padding: 20px; border: 1px solid #e2e8f0; border-radius: 0 0 8px 8px;">
            <p><strong>Congratulations!</strong> Your Resend email integration is working correctly.</p>
            <p><strong>Test Details:</strong></p>
            <ul>
              <li>API Key: Active</li>
              <li>Destination: ciprian.rotopanescu@gmail.com</li>
              <li>Status: Email sent successfully</li>
              <li>Timestamp: ${new Date().toLocaleString('en-GB', {
                dateStyle: 'full',
                timeStyle: 'short',
                timeZone: 'Europe/London'
              })}</li>
            </ul>
            <p style="margin-top: 20px; padding: 15px; background: #dcfce7; border-left: 4px solid #16a34a; border-radius: 4px;">
              ✅ Your Resend API is working correctly!
            </p>
            <p style="margin-top: 15px; padding: 15px; background: #fef3c7; border-left: 4px solid #f59e0b; border-radius: 4px;">
              ⚠️ <strong>Note:</strong> You're in testing mode. To send emails to web@serve.co.uk, you need to verify your domain at <a href="https://resend.com/domains">resend.com/domains</a>
            </p>
          </div>
        </div>
      `
    })

    if (error) {
      console.error('❌ Email sending failed:', error)
      process.exit(1)
    }

    console.log('✅ SUCCESS! Email sent successfully')
    console.log('\n📊 Email Details:')
    console.log('   Email ID:', data.id)
    console.log('   From: SERVE Contact Form Test <onboarding@resend.dev>')
    console.log('   To: ciprian.rotopanescu@gmail.com')
    console.log('   Subject: Test Email from SERVE Contact Form')
    console.log('\n✉️  Check your inbox at ciprian.rotopanescu@gmail.com')
    console.log('   (Email should arrive within 1-2 minutes)')
    console.log('\n⚠️  IMPORTANT: To send emails to web@serve.co.uk, verify your domain at:')
    console.log('   https://resend.com/domains\n')
    
  } catch (error) {
    console.error('❌ Error:', error.message)
    process.exit(1)
  }
}

testEmail()
