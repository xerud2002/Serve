'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Bars3Icon, XMarkIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import { SkipToContent, ARIA_LABELS, FOCUS_STYLES, AccessibleButton, ExternalLink, handleKeyboardNavigation, KEYBOARD_KEYS } from '@/lib/accessibility'
import { useIsMobile, MOBILE_CLASSES } from '@/lib/mobile'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const { isMobile, screenSize } = useIsMobile()

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === KEYBOARD_KEYS.ESCAPE && mobileMenuOpen) {
        setMobileMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [mobileMenuOpen])

  // Handle click outside to close mobile menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuOpen && mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [mobileMenuOpen])

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About Us', href: '/about' },
    { name: 'Get Involved', href: '/volunteer' },
    { name: 'News', href: '/news' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <>
      <SkipToContent />
      <header className="bg-white shadow-sm relative">
        {/* Contact bar */}
        <div className="bg-serve-blue-800 text-white py-2">
          <div className={`max-w-7xl mx-auto ${MOBILE_CLASSES.mobilePadding}`}>
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center space-x-3 sm:space-x-6">
                <a 
                  href="tel:01933315555" 
                  className={`flex items-center ${MOBILE_CLASSES.touchTarget} hover:text-serve-blue-200 transition-colors ${FOCUS_STYLES.link} ${isMobile ? 'text-xs' : 'text-sm'}`}
                  aria-label={ARIA_LABELS.phoneNumber}
                >
                  <PhoneIcon className="h-4 w-4 mr-1 flex-shrink-0" aria-hidden="true" />
                  <span className="truncate">{isMobile ? '01933 315555' : '01933 315555'}</span>
                </a>
                {!isMobile && (
                  <a 
                    href="mailto:info@serve.org.uk" 
                    className={`flex items-center ${MOBILE_CLASSES.touchTarget} hover:text-serve-blue-200 transition-colors ${FOCUS_STYLES.link}`}
                    aria-label={ARIA_LABELS.emailAddress}
                  >
                    <EnvelopeIcon className="h-4 w-4 mr-1 flex-shrink-0" aria-hidden="true" />
                    <span className="truncate">info@serve.org.uk</span>
                  </a>
                )}
              </div>
              <div className="flex items-center space-x-2 sm:space-x-4">
                <ExternalLink 
                  href="https://www.facebook.com/SERVE234/" 
                  className={`hover:text-serve-blue-200 transition-colors ${MOBILE_CLASSES.touchTarget} ${isMobile ? 'text-xs' : 'text-sm'}`}
                  ariaLabel={ARIA_LABELS.facebook}
                >
                  {isMobile ? 'FB' : 'Facebook'}
                </ExternalLink>
                <ExternalLink 
                  href="https://www.linkedin.com/company/serve-nvca/" 
                  className={`hover:text-serve-blue-200 transition-colors ${MOBILE_CLASSES.touchTarget} ${isMobile ? 'text-xs' : 'text-sm'}`}
                  ariaLabel={ARIA_LABELS.linkedin}
                >
                  {isMobile ? 'LI' : 'LinkedIn'}
                </ExternalLink>
              </div>
            </div>
          </div>
        </div>        {/* Main navigation */}
        <nav className={`max-w-7xl mx-auto ${MOBILE_CLASSES.mobilePadding}`} aria-label={ARIA_LABELS.mainNavigation}>
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="/pics/Serve-Logo.webp"
                  alt="SERVE - Supporting Independence"
                  width={isMobile ? 120 : 140}
                  height={isMobile ? 60 : 70}
                  className={`${isMobile ? 'h-12' : 'h-14'} w-auto`}
                  priority
                />
              </Link>
            </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-gray-700 hover:text-serve-blue-700 px-3 py-2 rounded-md text-sm font-medium transition-colors ${FOCUS_STYLES.link}`}
                  aria-current={item.href === '/' ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <AccessibleButton
              ref={menuButtonRef}
              className={`inline-flex items-center justify-center p-3 rounded-xl text-gray-700 hover:text-serve-blue-700 hover:bg-gray-100 active:bg-gray-200 transition-colors ${MOBILE_CLASSES.touchTarget}`}
              ariaControls="mobile-menu"
              ariaExpanded={mobileMenuOpen}
              ariaLabel={mobileMenuOpen ? ARIA_LABELS.closeMenu : ARIA_LABELS.openMenu}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </AccessibleButton>
          </div>
        </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div 
              ref={mobileMenuRef}
              className="md:hidden absolute top-full left-0 right-0 z-50 bg-white shadow-xl border-t border-gray-100" 
              id="mobile-menu"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="mobile-menu-button"
            >
              <div className={`${MOBILE_CLASSES.mobilePadding} py-4 space-y-1 bg-white`}>
                {navigation.map((item, index) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-gray-800 hover:text-serve-blue-700 hover:bg-serve-blue-50 active:bg-serve-blue-100 block px-4 py-4 rounded-xl text-lg font-medium transition-all duration-200 ${MOBILE_CLASSES.touchTarget} ${FOCUS_STYLES.link}`}
                    role="menuitem"
                    aria-current={item.href === '/' ? 'page' : undefined}
                    onClick={() => setMobileMenuOpen(false)}
                    onKeyDown={(e) => handleKeyboardNavigation(
                      e,
                      () => setMobileMenuOpen(false),
                      () => setMobileMenuOpen(false),
                      () => {
                        setMobileMenuOpen(false)
                        menuButtonRef.current?.focus()
                      }
                    )}
                  >
                    <div className="flex items-center">
                      <span className="flex-1">{item.name}</span>
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
              
              {/* Mobile-only contact actions */}
              <div className={`${MOBILE_CLASSES.mobilePadding} py-4 bg-gray-50 border-t border-gray-200 space-y-3`}>
                <a
                  href="tel:01933315555"
                  className={`flex items-center justify-center bg-serve-green-600 hover:bg-serve-green-700 active:bg-serve-green-800 text-white px-6 py-4 rounded-xl font-semibold text-lg transition-all duration-200 ${MOBILE_CLASSES.touchTarget}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <PhoneIcon className="w-5 h-5 mr-3" />
                  Call Now
                </a>
                <Link
                  href="/contact"
                  className={`flex items-center justify-center bg-serve-blue-600 hover:bg-serve-blue-700 active:bg-serve-blue-800 text-white px-6 py-4 rounded-xl font-semibold text-lg transition-all duration-200 ${MOBILE_CLASSES.touchTarget}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <EnvelopeIcon className="w-5 h-5 mr-3" />
                  Get In Touch
                </Link>
              </div>
            </div>
          )}
      </nav>
    </header>
    </>
  )
}