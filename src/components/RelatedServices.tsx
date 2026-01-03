'use client'

import Link from 'next/link'
import { ArrowRightIcon, SparklesIcon } from '@heroicons/react/24/outline'
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
    <section className="relative py-20 lg:py-24 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-gray-50 via-white to-serve-blue-50" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-serve-blue-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-serve-green-100/30 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center bg-serve-blue-100 text-serve-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <SparklesIcon className="w-4 h-4 mr-2" />
            Explore More Services
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
            <span className="bg-linear-to-r from-serve-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Related Services
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Discover other ways we can support you and your loved ones
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {filteredServices.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className={`
                group relative block bg-white rounded-2xl shadow-lg hover:shadow-2xl 
                transition-all duration-500 overflow-hidden border border-gray-100
                transform hover:-translate-y-2 ${FOCUS_STYLES.link}
              `}
            >
              {/* Gradient border on hover */}
              <div className="absolute -inset-0.5 bg-linear-to-r from-serve-blue-400 via-serve-blue-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
              
              {/* Card content */}
              <div className="relative bg-white rounded-2xl p-6 lg:p-8 h-full flex flex-col">
                {/* Icon with gradient background */}
                <div className="mb-5">
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-linear-to-br from-serve-blue-100 to-cyan-100 rounded-xl blur group-hover:blur-lg transition-all" />
                    <div className="relative w-14 h-14 flex items-center justify-center bg-linear-to-br from-serve-blue-500 to-cyan-600 rounded-xl text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <div className="w-8 h-8">
                        {service.icon}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 group-hover:text-serve-blue-700 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-5 line-clamp-3 grow leading-relaxed">
                  {service.description}
                </p>

                {/* Learn More Link */}
                <div className="flex items-center text-serve-blue-600 font-bold group-hover:text-serve-blue-700 transition-colors">
                  <span className={`${MOBILE_CLASSES.touchTarget} inline-flex items-center`}>
                    Learn more
                    <ArrowRightIcon 
                      className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" 
                      aria-hidden="true"
                    />
                  </span>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-br from-serve-blue-50 to-transparent rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
            </Link>
          ))}
        </div>

        {/* View All Services CTA */}
        <div className="text-center">
          <div className="inline-block relative">
            <div className="absolute -inset-1 bg-linear-to-r from-serve-blue-600 via-cyan-600 to-serve-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity" />
            <Link
              href="/services/"
              className={`
                relative inline-flex items-center gap-2 px-8 py-4 
                bg-linear-to-r from-serve-blue-600 to-cyan-600
                hover:from-serve-blue-700 hover:to-cyan-700
                text-white rounded-2xl font-bold text-lg
                transition-all duration-300 shadow-xl hover:shadow-2xl
                transform hover:scale-105
                ${MOBILE_CLASSES.touchTarget} ${FOCUS_STYLES.button}
              `}
            >
              <SparklesIcon className="w-5 h-5" />
              View All Services
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
