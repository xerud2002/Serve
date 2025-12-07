import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { db } from '@/lib/firebase'
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore'
import { checkRateLimit, getClientIP, rateLimiters } from '@/lib/rateLimit'

const resend = process.env.RESEND_API_KEY 
  ? new Resend(process.env.RESEND_API_KEY)
  : null

export async function POST(request: NextRequest) {
  try {
    // Rate limiting: 3 requests per hour
    const ip = getClientIP(request)
    const rateLimit = checkRateLimit(ip, rateLimiters.newsletter)
    
    if (!rateLimit.success) {
      return NextResponse.json(
        { error: `Too many signup attempts. Please try again in ${Math.ceil(rateLimit.resetIn / 60)} minutes.` },
        { 
          status: 429,
          headers: {
            'Retry-After': String(rateLimit.resetIn),
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': String(rateLimit.resetIn)
          }
        }
      )
    }

    const body = await request.json()
    
    // Validate required fields
    const { email, firstName, interests, frequency } = body
    
    if (!email) {
      return NextResponse.json(
        { error: 'Email address is required' },
        { status: 400 }
      )
    }

    const timestamp = new Date().toISOString()
    const formattedTime = new Date().toLocaleString('en-GB', {
      dateStyle: 'full',
      timeStyle: 'short',
      timeZone: 'Europe/London'
    })

    // Save to Firebase if configured
    if (db) {
      try {
        // Check if email already exists
        const existingQuery = query(collection(db, 'newsletter'), where('email', '==', email))
        const existingDocs = await getDocs(existingQuery)
        
        if (existingDocs.empty) {
          // Add new subscriber
          await addDoc(collection(db, 'newsletter'), {
            email,
            firstName: firstName || '',
            interests: interests || 'General updates',
            frequency: frequency || 'Monthly',
            subscribed_at: timestamp,
            status: 'active'
          })
        } else {
          // Email already subscribed
          return NextResponse.json({
            success: true,
            message: 'You are already subscribed to our newsletter!'
          })
        }
      } catch (firebaseError) {
        console.error('Firebase save error:', firebaseError)
        // Continue even if Firebase fails
      }
    }

    // If Resend is not configured, log to console (development/build time)
    if (!resend) {
      console.log('Newsletter signup (Resend not configured):', { email, firstName })
      return NextResponse.json({
        success: true,
        message: 'Thank you for subscribing! You will receive our newsletter updates soon.'
      })
    }

    // Send admin notification
    await resend.emails.send({
      from: 'SERVE Newsletter <noreply@serve.org.uk>',
      to: 'web@serve.org.uk',
      subject: 'New Newsletter Subscription',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">New Newsletter Subscriber</h1>
          </div>
          <div style="background: #f8fafc; padding: 20px; border: 1px solid #e2e8f0; border-radius: 0 0 8px 8px;">
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Name:</strong> ${firstName || 'Not provided'}</p>
            <p><strong>Interests:</strong> ${interests || 'General updates'}</p>
            <p><strong>Frequency:</strong> ${frequency || 'Monthly'}</p>
            <p style="margin-top: 20px; color: #666; font-size: 12px;">
              Subscribed: ${formattedTime}
            </p>
          </div>
        </div>
      `
    })

    // Send user confirmation
    await resend.emails.send({
      from: 'SERVE <noreply@serve.org.uk>',
      to: email,
      subject: 'Welcome to SERVE Newsletter',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">Welcome to SERVE Newsletter!</h1>
          </div>
          <div style="background: #f8fafc; padding: 20px; border: 1px solid #e2e8f0; border-radius: 0 0 8px 8px;">
            <p>Dear ${firstName || 'Friend'},</p>
            <p>Thank you for subscribing to the SERVE newsletter! We're delighted to have you join our community.</p>
            
            <p>You'll receive regular updates about:</p>
            <ul style="color: #666;">
              <li>Our care services and community programs</li>
              <li>Upcoming events and activities</li>
              <li>Success stories and impact reports</li>
              <li>Volunteer and fundraising opportunities</li>
            </ul>
            
            <p style="color: #666; font-size: 14px; margin-top: 20px;">
              You can unsubscribe at any time by clicking the link at the bottom of any newsletter email.
            </p>
            
            <p>Best regards,<br>The SERVE Team</p>
            
            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #cbd5e1; color: #666; font-size: 12px;">
              <p><strong>SERVE</strong> | Charity No. 1043321</p>
              <p>📞 01933 315555 | ✉️ info@serve.org.uk</p>
              <p>8 West Street, Rushden, Northants NN10 0RT</p>
            </div>
          </div>
        </div>
      `
    })

    return NextResponse.json({
      success: true,
      message: 'Thank you for subscribing! You will receive our newsletter updates soon.'
    })
    
  } catch (error) {
    console.error('Newsletter signup error:', error)
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again or contact us directly.' },
      { status: 500 }
    )
  }
}
