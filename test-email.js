// Test script to verify Resend API key works
import { Resend } from 'resend'
import dotenv from 'dotenv'

// Load environment variables
dotenv.config()

const resend = new Resend(process.env.RESEND_API_KEY)

async function testEmail() {
  try {
    console.log('Testing Resend API with key:', process.env.RESEND_API_KEY ? 'Key found' : 'No key found')
    
    const result = await resend.emails.send({
      from: 'SERVE Contact Test <onboarding@resend.dev>',
      to: 'ciprian.rotopanescu@gmail.com',
      subject: 'Test Email from SERVE Website',
      html: '<p>This is a test email to verify Resend integration works!</p>',
      text: 'This is a test email to verify Resend integration works!'
    })
    
    console.log('✅ Email sent successfully:', result)
  } catch (error) {
    console.error('❌ Email failed:', error)
  }
}

testEmail()