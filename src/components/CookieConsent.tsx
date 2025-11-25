'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { XMarkIcon } from '@heroicons/react/24/outline'

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Check if user has already accepted cookies
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      // Show banner after a short delay for better UX
      setTimeout(() => setShowBanner(true), 1000)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    localStorage.setItem('cookie-consent-date', new Date().toISOString())
    setShowBanner(false)
  }

  const rejectCookies = () => {
    localStorage.setItem('cookie-consent', 'rejected')
    localStorage.setItem('cookie-consent-date', new Date().toISOString())
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-serve-blue-600 shadow-2xl"
      role="dialog"
      aria-label="Cookie consent"
      aria-describedby="cookie-consent-description"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1">
            <h2 className="text-lg font-bold text-gray-900 mb-2">
              🍪 We use cookies
            </h2>
            <p id="cookie-consent-description" className="text-sm text-gray-700 leading-relaxed">
              We use essential cookies to make our website work properly. We&apos;d also like to use analytics cookies to understand how you use our services and improve them. You can change your preferences at any time.{' '}
              <Link href="/privacy" className="text-serve-blue-600 hover:text-serve-blue-700 underline">
                Learn more in our Privacy Policy
              </Link>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <button
              onClick={rejectCookies}
              className="px-6 py-2 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              aria-label="Reject optional cookies"
            >
              Reject Optional
            </button>
            <button
              onClick={acceptCookies}
              className="px-6 py-2 bg-serve-blue-600 text-white font-semibold rounded-lg hover:bg-serve-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-serve-blue-500 focus:ring-offset-2"
              aria-label="Accept all cookies"
            >
              Accept All
            </button>
          </div>

          <button
            onClick={rejectCookies}
            className="absolute top-2 right-2 sm:static p-2 text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="Close cookie banner"
          >
            <XMarkIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
