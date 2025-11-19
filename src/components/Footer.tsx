import { 
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'
import NewsletterSignup from './NewsletterSignup'
import { ARIA_LABELS } from '@/lib/accessibility'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center mb-4">
              <Image 
                src="/images/serve.webp"
                alt="SERVE charity logo - Supporting Independence"
                width={480}
                height={240}
                className="h-32 w-auto"
              />
            </div>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Award-winning care services helping older people and adults with disabilities 
              maintain independence across Northamptonshire.
            </p>
            <div className="space-y-2 text-sm">
              <p className="text-gray-500">Charity No: 1043321</p>
              <p className="text-gray-500">Company No: 2951827</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a 
                  href="https://www.cqc.org.uk/location/1-2165219210" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  CQC Report
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start text-gray-400">
                <MapPinIcon className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                <span>8 West Street, Rushden, NN10 0RT</span>
              </div>
              <div className="flex items-start text-gray-400">
                <PhoneIcon className="w-4 h-4 mr-2 mt-3 flex-shrink-0" />
                <a href="tel:01933315555" className="inline-block py-2 px-1 -my-2 -mx-1 min-h-[44px] hover:text-white transition-colors">
                  01933 315555
                </a>
              </div>
              <div className="flex items-start text-gray-400">
                <EnvelopeIcon className="w-4 h-4 mr-2 mt-3 flex-shrink-0" />
                <a href="mailto:info@serve.org.uk" className="inline-block py-2 px-1 -my-2 -mx-1 min-h-[44px] hover:text-white transition-colors break-all">
                  info@serve.org.uk
                </a>
              </div>
            </div>
          </div>

          {/* Support & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Support & Follow</h4>
            <div className="space-y-3 mb-4">
              <a
                href="https://www.facebook.com/SERVE234/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-white text-sm transition-colors"
                aria-label={ARIA_LABELS.facebook}
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.90 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
                Facebook
              </a>
              <a
                href="https://www.linkedin.com/company/serve-nvca/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-white text-sm transition-colors"
                aria-label={ARIA_LABELS.linkedin}
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
            <a
              href="https://www.justgiving.com/serve-jg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-serve-green-600 hover:bg-serve-green-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all"
            >
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="8" width="18" height="12" rx="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 8V4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 12h18" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Help Now
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-700/50 mt-8 pt-8">
          <NewsletterSignup variant="footer" />
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-gray-400">
              © 2025 SERVE. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms
              </Link>
              <Link href="/accessibility" className="text-gray-400 hover:text-white transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}