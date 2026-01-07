import { 
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  HeartIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'
import { SparklesIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import Image from 'next/image'
import NewsletterSignup from './NewsletterSignup'
import { ARIA_LABELS } from '@/lib/accessibility'

export default function Footer() {
  const quickLinks = [
    { name: 'Our Services', href: '/services', color: 'from-blue-400 to-cyan-400' },
    { name: 'About Us', href: '/about', color: 'from-purple-400 to-pink-400' },
    { name: 'Get Involved', href: '/volunteer', color: 'from-green-400 to-emerald-400' },
    { name: 'Corporate Fundraising', href: '/corporate-fundraising', color: 'from-amber-400 to-yellow-400' },
    { name: 'News & Events', href: '/news', color: 'from-orange-400 to-amber-400' },
    { name: 'Our Supporters', href: '/supporters', color: 'from-teal-400 to-cyan-400' },
    { name: 'Contact', href: '/contact', color: 'from-rose-400 to-red-400' },
    { name: 'CQC Report', href: 'https://www.cqc.org.uk/location/1-2165219210', external: true, color: 'from-indigo-400 to-blue-400' },
  ]

  return (
    <footer className="relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-linear-to-br from-gray-900 via-slate-900 to-gray-900" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-serve-blue-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-serve-green-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-serve-red-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      
      {/* Top Wave Decoration */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-serve-blue-500 via-serve-green-500 to-serve-red-500" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="relative inline-block">
                <Image 
                  src="/images/serve.webp"
                  alt="SERVE charity logo - Supporting Independence"
                  width={176}
                  height={88}
                  className="h-[4.5rem] w-auto filter brightness-0 invert"
                />
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-linear-to-r from-serve-blue-500 via-serve-green-500 to-serve-red-500 rounded-full" />
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Award-winning care services helping older people and adults with disabilities 
              maintain independence across Northamptonshire.
            </p>
            
            {/* Badges */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-8 h-8 rounded-lg bg-linear-to-br from-serve-blue-500/20 to-serve-blue-600/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-serve-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-gray-400">Charity No: <span className="text-white font-semibold">1043321</span></span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-8 h-8 rounded-lg bg-linear-to-br from-serve-green-500/20 to-serve-green-600/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-serve-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6z"/>
                  </svg>
                </div>
                <span className="text-gray-400">Company No: <span className="text-white font-semibold">2951827</span></span>
              </div>
              
              {/* CQC Badge */}
              <a 
                href="https://www.cqc.org.uk/location/1-2165219210"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 mt-2 px-4 py-2 rounded-xl bg-linear-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300"
              >
                <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="text-cyan-300 text-sm font-medium group-hover:text-cyan-200 transition-colors">CQC Registered Provider</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
              <SparklesIcon className="w-5 h-5 text-serve-blue-400" />
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <a 
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-all duration-300 py-1"
                    >
                      <div className={`w-1.5 h-1.5 rounded-full bg-linear-to-r ${link.color} opacity-50 group-hover:opacity-100 transition-opacity`} />
                      <span>{link.name}</span>
                      <ArrowRightIcon className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </a>
                  ) : (
                    <Link 
                      href={link.href}
                      className="group flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-all duration-300 py-1"
                    >
                      <div className={`w-1.5 h-1.5 rounded-full bg-linear-to-r ${link.color} opacity-50 group-hover:opacity-100 transition-opacity`} />
                      <span>{link.name}</span>
                      <ArrowRightIcon className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
              <PhoneIcon className="w-5 h-5 text-serve-green-400" />
              Contact Us
            </h4>
            <div className="space-y-4">
              <a 
                href="https://maps.google.com/?q=8+West+Street,+Rushden,+NN10+0RT"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 text-gray-400 hover:text-white transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-linear-to-br from-orange-500/20 to-amber-500/20 flex items-center justify-center shrink-0 group-hover:from-orange-500/30 group-hover:to-amber-500/30 transition-all">
                  <MapPinIcon className="w-5 h-5 text-orange-400" />
                </div>
                <span className="text-sm leading-relaxed pt-2">8 West Street, Rushden,<br />Northants NN10 0RT</span>
              </a>
              <a 
                href="tel:01933315555" 
                className="group flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-linear-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center shrink-0 group-hover:from-green-500/30 group-hover:to-emerald-500/30 transition-all">
                  <PhoneIcon className="w-5 h-5 text-green-400" />
                </div>
                <span className="text-sm font-semibold">01933 315555</span>
              </a>
              <a 
                href="mailto:info@serve.org.uk" 
                className="group flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-linear-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center shrink-0 group-hover:from-blue-500/30 group-hover:to-cyan-500/30 transition-all">
                  <EnvelopeIcon className="w-5 h-5 text-blue-400" />
                </div>
                <span className="text-sm font-semibold">info@serve.org.uk</span>
              </a>
            </div>
          </div>

          {/* Support & Social */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
              <HeartIcon className="w-5 h-5 text-serve-red-400" />
              Support & Follow
            </h4>
            
            {/* Social Links */}
            <div className="flex gap-3 mb-6">
              <a
                href="https://www.facebook.com/SERVE234/"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 rounded-xl bg-linear-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center hover:from-blue-500/30 hover:to-blue-600/30 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300"
                aria-label={ARIA_LABELS.facebook}
              >
                <svg className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/serve-nvca/"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 rounded-xl bg-linear-to-br from-sky-500/20 to-blue-700/20 flex items-center justify-center hover:from-sky-500/30 hover:to-blue-700/30 border border-sky-500/20 hover:border-sky-400/40 transition-all duration-300"
                aria-label={ARIA_LABELS.linkedin}
              >
                <svg className="w-5 h-5 text-sky-400 group-hover:text-sky-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
            
            {/* Donate Button */}
            <a
              href="https://www.justgiving.com/campaign/serve-community-appeal"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 bg-linear-to-r from-serve-green-500 to-emerald-600 hover:from-serve-green-600 hover:to-emerald-700 text-white px-6 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-green-500/25 overflow-hidden min-h-11"
              aria-label="Donate to SERVE via JustGiving (opens in new tab)"
            >
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <HeartIcon className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Donate via JustGiving</span>
            </a>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="relative rounded-2xl bg-linear-to-r from-serve-blue-900/50 via-serve-blue-800/50 to-serve-blue-900/50 border border-serve-blue-700/30 p-6 lg:p-8 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-serve-blue-500/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
            <NewsletterSignup variant="footer" />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2025 SERVE. All rights reserved. Made with <HeartIcon className="w-4 h-4 inline text-serve-red-500" /> in Northamptonshire
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link 
                href="/privacy" 
                className="text-gray-500 hover:text-white text-sm transition-colors duration-300"
              >
                Privacy
              </Link>
              <Link 
                href="/cookies" 
                className="text-gray-500 hover:text-white text-sm transition-colors duration-300"
              >
                Cookies
              </Link>
              <Link 
                href="/terms" 
                className="text-gray-500 hover:text-white text-sm transition-colors duration-300"
              >
                Terms
              </Link>
              <Link 
                href="/accessibility" 
                className="text-gray-500 hover:text-white text-sm transition-colors duration-300"
              >
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
