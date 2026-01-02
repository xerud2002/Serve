'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { XMarkIcon, ShieldCheckIcon, ChartBarIcon } from '@heroicons/react/24/outline'

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setTimeout(() => {
        setShowBanner(true)
        setTimeout(() => setIsAnimating(true), 50)
      }, 1500)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    localStorage.setItem('cookie-consent-date', new Date().toISOString())
    handleClose()
  }

  const rejectCookies = () => {
    localStorage.setItem('cookie-consent', 'rejected')
    localStorage.setItem('cookie-consent-date', new Date().toISOString())
    handleClose()
  }

  const handleClose = () => {
    setIsAnimating(false)
    setTimeout(() => setShowBanner(false), 300)
  }

  if (!showBanner) return null

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isAnimating ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={rejectCookies}
        aria-hidden="true"
      />
      
      {/* Cookie Dialog */}
      <div 
        className={`fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-md z-50 transition-all duration-300 ${
          isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
        role="dialog"
        aria-label="Cookie consent"
        aria-describedby="cookie-consent-description"
      >
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
          {/* Header with gradient */}
          <div className="bg-linear-to-r from-serve-blue-600 via-serve-blue-700 to-cyan-600 px-6 py-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center">
                  <span className="text-2xl">🍪</span>
                </div>
                <h2 className="text-xl font-bold text-white">We use cookies</h2>
              </div>
              <button
                onClick={rejectCookies}
                className="p-2.5 text-white/70 hover:text-white hover:bg-white/10 rounded-xl transition-all"
                aria-label="Close cookie banner"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <p id="cookie-consent-description" className="text-sm text-gray-600 leading-relaxed mb-6">
              We use essential cookies to make our website work properly. We&apos;d also like to use analytics cookies to understand how you use our services and improve them. You can change your preferences at any time.
            </p>

            {/* Cookie Types */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-4 p-4 bg-linear-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-100">
                <div className="w-10 h-10 bg-linear-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                  <ShieldCheckIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-gray-900">Essential</span>
                    <span className="px-2.5 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">Always on</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Required for the website to function properly</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-linear-to-r from-gray-50 to-slate-50 rounded-2xl border border-gray-100">
                <div className="w-10 h-10 bg-linear-to-br from-gray-400 to-gray-500 rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                  <ChartBarIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-gray-900">Analytics</span>
                    <span className="px-2.5 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-full">Optional</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Helps us understand how you use our services</p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button
                onClick={rejectCookies}
                className="flex-1 px-5 py-3.5 border-2 border-gray-200 text-gray-700 font-bold rounded-2xl hover:bg-gray-50 hover:border-gray-300 transition-all focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                aria-label="Reject optional cookies"
              >
                Reject Optional
              </button>
              <button
                onClick={acceptCookies}
                className="flex-1 px-5 py-3.5 bg-linear-to-r from-serve-blue-600 to-cyan-600 text-white font-bold rounded-2xl hover:from-serve-blue-700 hover:to-cyan-700 transition-all shadow-lg shadow-serve-blue-500/25 focus:outline-none focus:ring-2 focus:ring-serve-blue-500 focus:ring-offset-2"
                aria-label="Accept all cookies"
              >
                Accept All
              </button>
            </div>

            {/* Privacy Link */}
            <p className="text-center mt-5 text-xs text-gray-500">
              <Link href="/privacy" className="text-serve-blue-600 hover:text-serve-blue-700 underline underline-offset-2 font-medium">
                Learn more in our Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
