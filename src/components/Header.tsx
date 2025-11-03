'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Bars3Icon, XMarkIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import { ARIA_LABELS, FOCUS_STYLES, AccessibleButton, ExternalLink, handleKeyboardNavigation, KEYBOARD_KEYS } from '@/lib/accessibility'
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
              <div className="flex items-center space-x-2 sm:space-x-3">
                <ExternalLink 
                  href="https://www.facebook.com/SERVE234/" 
                  className={`p-2 rounded-lg hover:bg-serve-blue-50 transition-all duration-200 ${MOBILE_CLASSES.touchTarget} ${FOCUS_STYLES.link}`}
                  ariaLabel="Facebook (opens in new window)"
                >
                  <svg className="h-5 w-5 text-serve-blue-600 hover:text-serve-blue-700" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </ExternalLink>
                <ExternalLink 
                  href="https://www.linkedin.com/company/serve-nvca/" 
                  className={`p-2 rounded-lg hover:bg-serve-red-50 transition-all duration-200 ${MOBILE_CLASSES.touchTarget} ${FOCUS_STYLES.link}`}
                  ariaLabel="LinkedIn (opens in new window)"
                >
                  <svg className="h-5 w-5 text-serve-red-600 hover:text-serve-red-700" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
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