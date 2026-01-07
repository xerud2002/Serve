'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Bars3Icon, XMarkIcon, PhoneIcon, EnvelopeIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { HeartIcon, SparklesIcon } from '@heroicons/react/24/solid'
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
      if (
        mobileMenuOpen && 
        mobileMenuRef.current && 
        menuButtonRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        !menuButtonRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [mobileMenuOpen])

  const navigation = [
    { name: 'Services', href: '/services', color: 'from-blue-500 to-cyan-500' },
    { name: 'About Us', href: '/about', color: 'from-purple-500 to-pink-500' },
    { name: 'Get Involved', href: '/volunteer', color: 'from-green-500 to-emerald-500' },
    { name: 'News', href: '/news', color: 'from-orange-500 to-amber-500' },
    { name: 'Our Supporters', href: '/supporters', color: 'from-teal-500 to-cyan-500' },
    { name: 'Contact', href: '/contact', color: 'from-rose-500 to-red-500' },
  ]

  return (
    <>
      <header className={`sticky top-0 z-50 transition-all duration-500 ${isScrolled ? 'shadow-xl' : 'shadow-md'}`}>
        {/* Gradient Contact Bar */}
        <div className="bg-linear-to-r from-serve-blue-900 via-serve-blue-800 to-serve-blue-900 text-white relative overflow-hidden">
          {/* Animated background shimmer */}
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_3s_infinite]" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-2">
              {/* Contact Info */}
              <div className="flex items-center gap-2 sm:gap-6">
                <a 
                  href="tel:01933315555" 
                  className={`group flex items-center gap-2 py-2 px-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 min-h-11 ${FOCUS_STYLES.link}`}
                  aria-label={ARIA_LABELS.phoneNumber}
                >
                  <div className="w-8 h-8 rounded-full bg-linear-to-br from-green-400 to-emerald-500 flex items-center justify-center shrink-0">
                    <PhoneIcon className="h-4 w-4 text-white" aria-hidden="true" />
                  </div>
                  <span className={`font-semibold ${isMobile ? 'text-sm' : 'text-sm'}`}>01933 315555</span>
                </a>
                
                {!isMobile && (
                  <a 
                    href="mailto:info@serve.org.uk" 
                    className={`group flex items-center gap-2 py-2 px-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 min-h-11 ${FOCUS_STYLES.link}`}
                    aria-label={ARIA_LABELS.emailAddress}
                  >
                    <div className="w-8 h-8 rounded-full bg-linear-to-br from-blue-400 to-cyan-500 flex items-center justify-center shrink-0">
                      <EnvelopeIcon className="h-4 w-4 text-white" aria-hidden="true" />
                    </div>
                    <span className="font-semibold text-sm">info@serve.org.uk</span>
                  </a>
                )}
              </div>
              
              {/* Social & Donate */}
              <div className="flex items-center gap-2">
                <a
                  href="https://www.facebook.com/SERVE234/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group w-10 h-10 rounded-full bg-linear-to-br from-blue-500 to-blue-600 flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 ${FOCUS_STYLES.link}`}
                  aria-label={ARIA_LABELS.facebook}
                >
                  <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/serve-nvca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group w-10 h-10 rounded-full bg-linear-to-br from-sky-500 to-blue-700 flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-sky-500/30 transition-all duration-300 ${FOCUS_STYLES.link}`}
                  aria-label={ARIA_LABELS.linkedin}
                >
                  <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <Link
                  href="/donate"
                  className={`group flex items-center gap-2 py-2 px-4 rounded-full bg-linear-to-r from-rose-500 via-red-500 to-rose-600 hover:from-rose-600 hover:via-red-600 hover:to-rose-700 text-white font-bold text-sm shadow-lg hover:shadow-xl hover:shadow-red-500/30 hover:scale-105 transition-all duration-300 min-h-11 ${FOCUS_STYLES.link}`}
                  aria-label="Donate to SERVE"
                >
                  <HeartIcon className="h-5 w-5 animate-pulse" aria-hidden="true" />
                  <span className="hidden sm:inline">Donate</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Navigation Bar */}
        <div className={`bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all duration-300`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'h-16' : 'h-20'}`}>
              {/* Logo */}
              <Link 
                href="/" 
                className="flex items-center group" 
                aria-label="SERVE - Supporting Independence, go to homepage"
              >
                <div className="relative">
                  <Image
                    src="/images/serve.webp"
                    alt="SERVE - Supporting Independence"
                    width={288}
                    height={144}
                    className={`w-auto transition-all duration-300 ${isScrolled ? 'h-14 sm:h-[4.5rem]' : 'h-[4.5rem] sm:h-[6.3rem]'}`}
                    priority
                    sizes="(max-width: 640px) 115px, 180px"
                  />
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-linear-to-r from-serve-blue-500/0 via-serve-blue-500/10 to-serve-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                </div>
              </Link>
            
              {/* Desktop Navigation */}
              <nav className="hidden lg:block" aria-label={ARIA_LABELS.mainNavigation}>
                <div className="flex items-center gap-1">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`group relative px-4 py-2 rounded-xl text-sm font-semibold text-gray-700 hover:text-gray-900 transition-all duration-300 ${FOCUS_STYLES.link}`}
                      aria-current={item.href === '/' ? 'page' : undefined}
                    >
                      <span className="relative z-10">{item.name}</span>
                      {/* Hover gradient background */}
                      <div className={`absolute inset-0 rounded-xl bg-linear-to-r ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                      {/* Bottom line indicator */}
                      <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 bg-linear-to-r ${item.color} group-hover:w-3/4 transition-all duration-300 rounded-full`} />
                    </Link>
                  ))}
                </div>
              </nav>

              {/* Mobile Menu Button */}
              <div className="lg:hidden">
                <button
                  ref={menuButtonRef}
                  type="button"
                  className={`relative p-3 rounded-xl text-gray-700 hover:text-serve-blue-700 hover:bg-serve-blue-50 active:bg-serve-blue-100 transition-all duration-200 ${MOBILE_CLASSES.touchTarget} ${FOCUS_STYLES.button}`}
                  aria-controls="mobile-menu"
                  aria-expanded={mobileMenuOpen}
                  aria-label={mobileMenuOpen ? ARIA_LABELS.closeMenu : ARIA_LABELS.openMenu}
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    setMobileMenuOpen(!mobileMenuOpen)
                  }}
                >
                  <div className="relative w-6 h-6 pointer-events-none">
                    <Bars3Icon 
                      className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`} 
                      aria-hidden="true" 
                    />
                    <XMarkIcon 
                      className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}`} 
                      aria-hidden="true" 
                    />
                  </div>
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            <nav 
              ref={mobileMenuRef}
              className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${mobileMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}
              id="mobile-menu"
              aria-label={ARIA_LABELS.mainNavigation}
            >
              <div className="py-4 space-y-1">
                {navigation.map((item, index) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`group flex items-center justify-between px-4 py-4 rounded-2xl text-lg font-medium text-gray-800 hover:bg-linear-to-r hover:${item.color.replace('from-', 'from-').replace('to-', 'to-')}/10 transition-all duration-300 ${MOBILE_CLASSES.touchTarget} ${FOCUS_STYLES.link}`}
                    style={{ 
                      transitionDelay: mobileMenuOpen ? `${index * 50}ms` : '0ms',
                      transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                      opacity: mobileMenuOpen ? 1 : 0
                    }}
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
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full bg-linear-to-r ${item.color}`} />
                      <span>{item.name}</span>
                    </div>
                    <ChevronRightIcon className="w-5 h-5 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-300" aria-hidden="true" />
                  </Link>
                ))}
              </div>
              
              {/* Mobile CTA Buttons */}
              <div className="py-4 space-y-3 border-t border-gray-100">
                <a
                  href="tel:01933315555"
                  className={`flex items-center justify-center gap-3 bg-linear-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-6 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 ${MOBILE_CLASSES.touchTarget}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <PhoneIcon className="w-6 h-6" />
                  Call Now
                </a>
                <Link
                  href="/donate"
                  className={`flex items-center justify-center gap-3 bg-linear-to-r from-rose-500 via-red-500 to-rose-600 hover:from-rose-600 hover:via-red-600 hover:to-rose-700 text-white px-6 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 ${MOBILE_CLASSES.touchTarget}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <HeartIcon className="w-6 h-6" />
                  Donate Now
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}