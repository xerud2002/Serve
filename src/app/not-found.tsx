import Link from 'next/link'
import type { Metadata } from 'next'
import {
  HomeIcon,
  HeartIcon,
  PhoneIcon,
  ArrowRightIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Page Not Found - SERVE',
  description: 'The page you were looking for could not be found. Explore our services or get in touch on 01933 315555.',
  robots: {
    index: false,
    follow: true,
  },
}

const popularLinks = [
  { href: '/services/', label: 'Our Services', description: 'Explore the support we offer' },
  { href: '/services/personal-care/', label: 'Personal Care', description: 'CQC registered home care' },
  { href: '/services/home-help/', label: 'Home Help', description: 'Practical help around the home' },
  { href: '/services/day-care/', label: 'Day Care Centre', description: 'Ron Manning Day & Activity Centre' },
  { href: '/services/transport/', label: 'Community Transport', description: 'Door-to-door journeys' },
  { href: '/services/befriending/', label: 'Befriending', description: 'Companionship across the county' },
  { href: '/contact/', label: 'Contact Us', description: 'Get in touch with our team' },
  { href: '/volunteer/', label: 'Volunteer', description: 'Join our community' },
]

export default function NotFound() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-slate-50 flex items-center py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-linear-to-r from-serve-blue-100 to-blue-50 text-serve-blue-800 px-5 py-2.5 rounded-full text-sm font-semibold mb-6 shadow-sm">
            <MagnifyingGlassIcon className="w-4 h-4 mr-2" />
            Error 404
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-linear-to-r from-serve-blue-700 to-serve-blue-500 bg-clip-text text-transparent">Page Not</span>{' '}
            <span className="bg-linear-to-r from-serve-green-600 to-emerald-500 bg-clip-text text-transparent">Found</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-10 leading-relaxed">
            The page you were looking for may have moved or no longer exists. Try one of the popular links below, or call us on{' '}
            <a href="tel:01933315555" className="text-serve-blue-700 font-bold hover:underline">01933 315555</a>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/"
              className="inline-flex items-center justify-center bg-serve-blue-600 hover:bg-serve-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 min-h-11"
            >
              <HomeIcon className="w-6 h-6 mr-3" />
              Back to Homepage
            </Link>
            <a
              href="tel:01933315555"
              className="inline-flex items-center justify-center bg-serve-green-600 hover:bg-serve-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 min-h-11"
            >
              <PhoneIcon className="w-6 h-6 mr-3" />
              Call 01933 315555
            </a>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 lg:p-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <HeartIcon className="w-6 h-6 mr-3 text-serve-blue-600" />
            Popular pages
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {popularLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-start justify-between bg-gray-50 hover:bg-serve-blue-50 rounded-2xl p-5 border border-gray-100 hover:border-serve-blue-200 transition-all duration-300 min-h-11"
              >
                <div>
                  <div className="font-bold text-gray-900 group-hover:text-serve-blue-700 transition-colors">
                    {link.label}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">{link.description}</div>
                </div>
                <ArrowRightIcon className="w-5 h-5 text-gray-400 group-hover:text-serve-blue-600 group-hover:translate-x-1 transition-all shrink-0 ml-3 mt-1" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
