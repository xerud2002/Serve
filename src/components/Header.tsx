'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Bars3Icon, XMarkIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About Us', href: '/about' },
    { name: 'Get Involved', href: '/volunteer' },
    { name: 'News', href: '/news' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="bg-white shadow-sm">
      {/* Contact bar */}
      <div className="bg-serve-blue-800 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <a href="tel:01933315555" className="flex items-center hover:text-serve-blue-200">
                <PhoneIcon className="h-4 w-4 mr-1" />
                01933 315555
              </a>
              <a href="mailto:info@serve.org.uk" className="flex items-center hover:text-serve-blue-200">
                <EnvelopeIcon className="h-4 w-4 mr-1" />
                info@serve.org.uk
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="https://www.facebook.com/SERVE234/" className="hover:text-serve-blue-200">Facebook</a>
              <a href="https://www.linkedin.com/company/serve-nvca/" className="hover:text-serve-blue-200">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/pics/Serve-Logo.webp"
                alt="SERVE Logo"
                width={120}
                height={60}
                className="h-12 w-auto"
                priority
              />
              <div className="ml-3 hidden sm:block">
                <div className="text-xl font-bold text-serve-blue-800">SERVE</div>
                <div className="text-xs text-gray-600">Supporting Independence</div>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-serve-blue-700 px-3 py-2 rounded-md text-sm font-medium transition-colors focus-visible:focus"
                  aria-current={item.href === '/' ? 'page' : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-serve-blue-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-serve-blue-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 rounded-md mt-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
  