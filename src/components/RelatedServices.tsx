'use client'

import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { FOCUS_STYLES } from '@/lib/accessibility'
import { MOBILE_CLASSES } from '@/lib/mobile'

interface RelatedService {
  title: string
  description: string
  href: string
  icon: React.ReactNode
}

interface RelatedServicesProps {
  services: RelatedService[]
  currentService?: string
}

export default function RelatedServices({ services, currentService }: RelatedServicesProps) {
  // Filter out current service if specified
  const filteredServices = currentService 
    ? services.filter(s => s.href !== currentService).slice(0, 3)
    : services.slice(0, 3)

  if (filteredServices.length === 0) return null

  return (
    <section className="py-12 bg-gradient-to-br from-serve-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-serve-blue-800 mb-3">
            Related Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover other ways we can support you and your loved ones
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className={`
                group block bg-white rounded-lg shadow-md hover:shadow-xl 
                transition-all duration-300 overflow-hidden border border-gray-100
                hover:border-serve-blue-300 transform hover:-translate-y-1
                ${FOCUS_STYLES.link}
              `}
            >
              <div className="p-6">
                {/* Icon */}
                <div className="mb-4 text-serve-blue-600 group-hover:text-serve-blue-700 transition-colors">
                  <div className="w-12 h-12">
                    {service.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-serve-blue-800 mb-3 group-hover:text-serve-blue-900">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {service.description}
                </p>

                {/* Learn More Link */}
                <div className="flex items-center text-serve-blue-600 font-semibold group-hover:text-serve-blue-700">
                  <span className={MOBILE_CLASSES.touchTarget}>Learn more</span>
                  <ArrowRightIcon 
                    className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" 
                    aria-hidden="true"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Services CTA */}
        <div className="text-center mt-10">
          <Link
            href="/services/"
            className={`
              inline-flex items-center px-6 py-3 bg-serve-blue-600 text-white 
              rounded-lg font-semibold hover:bg-serve-blue-700 active:bg-serve-blue-800
              transition-all duration-200 shadow-md hover:shadow-lg
              ${MOBILE_CLASSES.touchTarget} ${FOCUS_STYLES.button}
            `}
          >
            View All Services
            <ArrowRightIcon className="w-5 h-5 ml-2" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
