'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Bars3Icon, XMarkIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import { HeartIcon } from '@heroicons/react/24/solid'
import { ARIA_LABELS, FOCUS_STYLES, AccessibleButton, handleKeyboardNavigation, KEYBOARD_KEYS } from '@/lib/accessibility'
import { useIsMobile, MOBILE_CLASSES } from '@/lib/mobile'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const { isMobile } = useIsMobile()

  // Handle scroll to make header compact
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
    { name: 'Services', href: '/services' },
    { name: 'About Us', href: '/about' },
    { name: 'Get Involved', href: '/volunteer' },
    { name: 'News', href: '/news' },
    { name: 'Our Supporters', href: '/supporters' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <>
      <header className={`bg-white shadow-sm -my-1 sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
        {/* Contact bar - always visible */}
        <div className={`bg-serve-blue-800 text-white -mb-1 transition-all duration-300 py-1`}>
          <div className={`max-w-7xl mx-auto px-1 sm:px-2`}>
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center space-x-3 sm:space-x-6">
                <a 
                  href="tel:01933315555" 
                  className={`flex items-center py-2 px-3 -my-2 -mx-3 min-h-11 min-w-11 hover:text-serve-blue-200 transition-colors ${FOCUS_STYLES.link} ${isMobile ? 'text-xs' : 'text-sm'}`}
                  aria-label={ARIA_LABELS.phoneNumber}
                >
                  <PhoneIcon className="h-4 w-4 mr-1 shrink-0" aria-hidden="true" />
                  <span className="truncate">{isMobile ? '01933 315555' : '01933 315555'}</span>
                </a>
                {!isMobile && (
                  <a 
                    href="mailto:info@serve.org.uk" 
                    className={`flex items-center py-2 px-3 -my-2 -mx-3 min-h-11 min-w-11 hover:text-serve-blue-200 transition-colors ${FOCUS_STYLES.link}`}
                    aria-label={ARIA_LABELS.emailAddress}
                  >
                    <EnvelopeIcon className="h-4 w-4 mr-1 shrink-0" aria-hidden="true" />
                    <span className="truncate">info@serve.org.uk</span>
                  </a>
                )}
              </div>
              <div className={`flex items-center ${isMobile ? 'space-x-2' : 'space-x-2'} scale-75`}>
                <Link
                  href="/donate"
                  aria-label="Donate to SERVE"
                  className={`group relative ${isMobile ? 'p-1.5' : 'p-1.5'} rounded-lg bg-linear-to-br from-rose-500 to-red-600 hover:from-rose-600 hover:to-red-700 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 ${MOBILE_CLASSES.touchTarget} ${FOCUS_STYLES.link} flex items-center justify-center`}
                >
                  <HeartIcon className={`${isMobile ? 'h-6 w-6' : 'h-6 w-6'} text-white`} aria-hidden="true" />
                  <div className="absolute inset-0 rounded-lg bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <a
                  href="https://www.facebook.com/SERVE234/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative ${isMobile ? 'p-1.5' : 'p-1.5'} rounded-lg bg-linear-to-br from-serve-blue-500 to-serve-blue-600 hover:from-serve-blue-600 hover:to-serve-blue-700 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 ${MOBILE_CLASSES.touchTarget} ${FOCUS_STYLES.link} flex items-center justify-center`}
                  aria-label={ARIA_LABELS.facebook}
                >
                  <svg className={`${isMobile ? 'h-6 w-6' : 'h-6 w-6'} text-white`} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                  <div className="absolute inset-0 rounded-lg bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                <a
                  href="https://www.linkedin.com/company/serve-nvca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative ${isMobile ? 'p-1.5' : 'p-1.5'} rounded-lg bg-white hover:bg-gray-50 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 ${MOBILE_CLASSES.touchTarget} ${FOCUS_STYLES.link} flex items-center justify-center`}
                  aria-label={ARIA_LABELS.linkedin}
                >
                  <svg className={`${isMobile ? 'h-6 w-6' : 'h-6 w-6'} text-blue-600`} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <div className="absolute inset-0 rounded-lg bg-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </div>
            </div>
          </div>
        </div>        {/* Main navigation */}
        <div className={`max-w-7xl mx-auto px-1 sm:px-2 transition-all duration-300 mt-2`}>
          <div className={`flex items-center justify-between py-0 transition-all duration-300 h-16 sm:h-20`}>
            <div className="flex items-center">
              <Link href="/" className="flex items-center" aria-label="SERVE - Supporting Independence, go to homepage">
                <Image
                  src="/images/serve.webp"
                  alt="SERVE - Supporting Independence"
                  width={240}
                  height={120}
                  className={`w-auto transition-all duration-300 ${isMobile ? 'h-24' : 'h-36'}`}
                  priority
                  sizes="(max-width: 640px) 96px, 144px"
                />
              </Link>
            </div>
          
          <nav className="hidden md:block" aria-label={ARIA_LABELS.mainNavigation}>
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
              <Link
                href="/donate"
                className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg text-sm font-bold transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg ml-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                aria-label="Donate to SERVE"
              >
                <HeartIcon className="h-4 w-4 text-white mr-2" aria-hidden="true" />
                Donate
              </Link>
            </div>
          </nav>

          <div className="md:hidden flex flex-col items-end gap-1 pr-1">
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
            <nav 
              ref={mobileMenuRef}
              className="md:hidden absolute top-full left-0 right-0 z-50 bg-white shadow-xl border-t border-gray-100" 
              id="mobile-menu"
              aria-label={ARIA_LABELS.mainNavigation}
            >
              <div className={`${MOBILE_CLASSES.mobilePadding} py-4 space-y-1 bg-white`}>
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-gray-800 hover:text-serve-blue-700 hover:bg-serve-blue-50 active:bg-serve-blue-100 block px-4 py-4 rounded-xl text-lg font-medium transition-all duration-200 ${MOBILE_CLASSES.touchTarget} ${FOCUS_STYLES.link}`}
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
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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
            </nav>
          )}
        </div>
      </header>
    </>
  )
}