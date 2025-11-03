'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Bars3Icon, XMarkIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import { SkipToContent, ARIA_LABELS, FOCUS_STYLES, AccessibleButton, ExternalLink, handleKeyboardNavigation, KEYBOARD_KEYS } from '@/lib/accessibility'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

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
      <header className="bg-white shadow-sm">
        {/* Contact bar */}
        <div className="bg-serve-blue-800 text-white py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center space-x-6">
                <a 
                  href="tel:01933315555" 
                  className={`flex items-center hover:text-serve-blue-200 transition-colors ${FOCUS_STYLES.link}`}
                  aria-label={ARIA_LABELS.phoneNumber}
                >
                  <PhoneIcon className="h-4 w-4 mr-1" aria-hidden="true" />
                  01933 315555
                </a>
                <a 
                  href="mailto:info@serve.org.uk" 
                  className={`flex items-center hover:text-serve-blue-200 transition-colors ${FOCUS_STYLES.link}`}
                  aria-label={ARIA_LABELS.emailAddress}
                >
                  <EnvelopeIcon className="h-4 w-4 mr-1" aria-hidden="true" />
                  info@serve.org.uk
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <ExternalLink 
                  href="https://www.facebook.com/SERVE234/" 
                  className="hover:text-serve-blue-200 transition-colors"
                  ariaLabel={ARIA_LABELS.facebook}
                >
                  Facebook
                </ExternalLink>
                <ExternalLink 
                  href="https://www.linkedin.com/company/serve-nvca/" 
                  className="hover:text-serve-blue-200 transition-colors"
                  ariaLabel={ARIA_LABELS.linkedin}
                >
                  LinkedIn
                </ExternalLink>
              </div>
            </div>
          </div>
        </div>        {/* Main navigation */}
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label={ARIA_LABELS.mainNavigation}>
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/pics/Serve-Logo.webp"
                alt="SERVE - Supporting Independence"
                width={140}
                height={70}
                className="h-14 w-auto"
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
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-serve-blue-700 hover:bg-gray-100 transition-colors"
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
              className="md:hidden" 
              id="mobile-menu"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="mobile-menu-button"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 rounded-md mt-2">
                {navigation.map((item, index) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-gray-700 hover:text-serve-blue-700 block px-3 py-2 rounded-md text-base font-medium transition-colors ${FOCUS_STYLES.link}`}
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
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
      </nav>
    </header>
    </>
  )
}