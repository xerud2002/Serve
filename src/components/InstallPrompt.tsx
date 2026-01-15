'use client'

import { useState, useEffect } from 'react'
import { XMarkIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline'

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [showPrompt, setShowPrompt] = useState(false)
  const [isIOS, setIsIOS] = useState(false)
  const [isStandalone, setIsStandalone] = useState(false)
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false)

  useEffect(() => {
    // Check if already installed as standalone
    const standalone = window.matchMedia('(display-mode: standalone)').matches
    setIsStandalone(standalone)

    // Check if mobile or tablet (not desktop)
    // Using both user agent and screen size for robust detection
    const userAgent = navigator.userAgent.toLowerCase()
    const isMobileUA = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|mobile|tablet/i.test(userAgent)
    const isSmallScreen = window.innerWidth <= 1024 // Tablets typically <= 1024px
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    
    // Consider it mobile/tablet if: mobile user agent OR (small screen AND touch device)
    const mobileOrTablet = isMobileUA || (isSmallScreen && isTouchDevice)
    setIsMobileOrTablet(mobileOrTablet)

    // Don't proceed if desktop
    if (!mobileOrTablet) return

    // Check if iOS
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
    setIsIOS(iOS)

    // Check if dismissed recently (don't show for 7 days)
    const dismissed = localStorage.getItem('installPromptDismissed')
    if (dismissed) {
      const dismissedDate = new Date(dismissed)
      const now = new Date()
      const daysDiff = (now.getTime() - dismissedDate.getTime()) / (1000 * 60 * 60 * 24)
      if (daysDiff < 7) return
    }

    // Listen for beforeinstallprompt (Chrome, Edge, Samsung Internet)
    const handleBeforeInstall = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e as BeforeInstallPromptEvent)
      // Show prompt after 30 seconds on page
      setTimeout(() => setShowPrompt(true), 30000)
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstall)

    // For iOS, show manual instructions after 30 seconds
    if (iOS && !standalone) {
      setTimeout(() => setShowPrompt(true), 30000)
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstall)
    }
  }, [])

  const handleInstall = async () => {
    if (!deferredPrompt) return

    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice

    if (outcome === 'accepted') {
      setShowPrompt(false)
    }
    setDeferredPrompt(null)
  }

  const handleDismiss = () => {
    setShowPrompt(false)
    localStorage.setItem('installPromptDismissed', new Date().toISOString())
  }

  // Don't show if desktop, already installed, or no prompt available
  if (!isMobileOrTablet || isStandalone || !showPrompt) return null

  return (
    <div className="fixed bottom-20 left-4 right-4 sm:left-auto sm:right-4 sm:max-w-sm z-50 animate-slide-up">
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 sm:p-5">
        <button
          onClick={handleDismiss}
          className="absolute top-3 right-3 p-1 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Dismiss"
        >
          <XMarkIcon className="w-5 h-5" />
        </button>

        <div className="flex items-start gap-4">
          <div className="shrink-0 w-12 h-12 bg-serve-blue-100 rounded-xl flex items-center justify-center">
            <DevicePhoneMobileIcon className="w-6 h-6 text-serve-blue-600" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-gray-900 text-sm sm:text-base">
              Install SERVE App
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              Add to your home screen for quick access to our services.
            </p>
          </div>
        </div>

        {isIOS ? (
          // iOS instructions
          <div className="mt-4 p-3 bg-gray-50 rounded-xl">
            <p className="text-xs text-gray-700 leading-relaxed">
              Tap the <span className="inline-flex items-center"><svg className="w-4 h-4 mx-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15" /></svg></span> Share button, then <strong>&quot;Add to Home Screen&quot;</strong>
            </p>
          </div>
        ) : (
          // Android/Desktop install button
          <button
            onClick={handleInstall}
            className="mt-4 w-full bg-serve-blue-600 hover:bg-serve-blue-700 text-white font-semibold py-2.5 px-4 rounded-xl transition-colors text-sm"
          >
            Install App
          </button>
        )}

        <button
          onClick={handleDismiss}
          className="mt-2 w-full text-gray-500 hover:text-gray-700 text-xs py-1 transition-colors"
        >
          Not now
        </button>
      </div>
    </div>
  )
}
