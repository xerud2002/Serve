"use client"

import { 
  CheckCircleIcon 
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'
import { MobileCard, useIsMobile, MOBILE_CLASSES } from '@/lib/mobile'
import { FOCUS_STYLES } from '@/lib/accessibility'

export default function Services() {
  const { isMobile } = useIsMobile()
  const services = [
    {
      id: 'personal-care',
      title: 'Personal & Domestic Care',
      description: 'Award-winning CQC registered homecare services. We provide compassionate personal care, medication management, meal preparation, and domestic support to help you stay safe and comfortable at home.',
      image: '/images/care/care1.webp',
      link: '/services/personal-care',
      featured: true,
      highlights: ['CQC Registered', 'Award Winning', 'Trained Carers', 'Tailored Plans']
    },
    {
      id: 'day-care',
      title: 'Day Care & Meals on Wheels',
      description: 'The Ron Manning Day and Activity Centre offers a warm, welcoming environment with engaging activities, social interaction, and nutritious two-course meals delivered to your door.',
      image: '/images/daycenter/day-center4.webp',
      link: '/services/day-care',
      highlights: ['Social Activities', 'Nutritious Meals', 'Transport can be provided', 'Friendly Staff'],
      loading: 'eager' as const,
      priority: true
    },
    {
      id: 'transport',
      title: 'Community Transport',
      description: 'Reliable, affordable transport to medical appointments and hospital visits. Our drivers understand the needs of older people and those with mobility challenges.',
      image: '/images/transport/community-transport1.webp',
      link: '/services/transport',
      highlights: ['Medical Appointments', 'Hospital Visits', 'Trained Drivers', 'Affordable Rates']
    },
    {
      id: 'befriending',
      title: 'Countywide Befriending',
      description: 'Combat loneliness with our friendly befriending service. We provide Regular Contact companionship and emotional support to vulnerable adults across all of Northamptonshire.',
      image: '/images/befriending/befriending1.webp',
      link: '/services/befriending',
      highlights: ['Combat Loneliness', 'Regular Contact', 'Emotional Support', 'Countywide Coverage']
    },
    {
      id: 'carers',
      title: 'Support for family carers',
      description: 'Supporting those who care for family members with respite services, practical advice, and emotional support. Because carers need care too.',
      image: '/images/care/care2.webp',
      link: '/services/carers-support',
      highlights: ['Respite Care', 'Practical Advice', 'Emotional Support', 'Carer Training']
    },
    {
      id: 'community',
      title: 'Community Services',
      description: 'A range of community support including hearing aid servicing, DBS checks, and other services that help maintain independence and community connections.',
      image: '/images/fundraising/fundraising.webp',
      link: '/services/community-services',
      highlights: ['Hearing Aid Service', 'DBS Checks', 'Community Events', 'Information Service']
    },
  ]

  return (
    <section id="services" className={`${isMobile ? 'py-12' : 'py-24'} bg-linear-to-br from-serve-blue-50 via-white to-serve-green-50`}>
      <div className={`max-w-7xl mx-auto ${MOBILE_CLASSES.mobilePadding}`}>
        <div className={`text-center ${isMobile ? 'mb-10' : 'mb-16'}`}>
          {/* Badge */}
          <div className="inline-flex items-center bg-serve-blue-100 text-serve-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            Comprehensive Home Care Solutions
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="text-cyan-600">Ways We Can Assist</span>{' '}
            <span className="text-red-600">You</span>
          </h2>
          <p className={`text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed text-center ${MOBILE_CLASSES.mobileSubheading}`}>
            Everything we do is tailored to support and improve the daily lives of older people, 
            adults with disabilities, and their carers.
          </p>
        </div>

        <div className={`grid grid-cols-1 ${isMobile ? 'gap-6' : 'md:grid-cols-2 lg:grid-cols-3 gap-8'}`}>
          {services.map((service) => {
            return (
              <div key={service.id} className="relative flex flex-col">
                <MobileCard
                  className={`group transition-all duration-300 overflow-visible flex-1 flex flex-col shadow-lg ${!isMobile ? 'hover:shadow-2xl hover:-translate-y-2' : ''}`}
                  padding={isMobile ? 'default' : 'large'}
                  clickable={false}
                >
                
                <div className="flex flex-col flex-1 text-center">
                  {/* Service Image with rounded background */}
                  <div className={`relative rounded-2xl ${isMobile ? 'w-64 h-64 mb-5' : 'w-80 h-80 mb-6'} mx-auto overflow-hidden shrink-0 shadow-lg group-hover:shadow-xl transition-shadow bg-gray-100`}>
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-contain rounded-2xl group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 256px, 320px"
                      quality={75}
                      loading={service.priority ? "eager" : "lazy"}
                      priority={service.priority}
                    />
                  </div>
                  
                  {/* Title */}
                  <h3 className={`font-bold text-gray-900 mb-4 group-hover:text-serve-blue-800 transition-colors shrink-0 ${isMobile ? 'text-lg' : 'text-xl'}`}>
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className={`text-gray-600 mb-6 leading-relaxed grow ${isMobile ? 'text-sm' : 'text-base'}`}>
                    {service.description}
                  </p>
                  
                  {/* Highlights with improved styling */}
                  <div className={`grid grid-cols-2 ${isMobile ? 'gap-2 mb-6' : 'gap-3 mb-8'} shrink-0`}>
                    {service.highlights.map((highlight, index) => (
                      <div key={index} className={`flex items-center text-gray-700 bg-serve-blue-50 rounded-lg px-2 py-2 ${isMobile ? 'text-xs' : 'text-sm'}`}>
                        <CheckCircleIcon className="w-4 h-4 text-serve-green-600 mr-2 shrink-0" />
                        <span className="text-left truncate">{highlight}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA Button with improved styling */}
                  <div className="shrink-0">
                    <Link
                      href={service.link}
                      className={`group/btn inline-flex items-center justify-center bg-serve-blue-600 hover:bg-serve-blue-700 active:bg-serve-blue-800 text-white font-bold transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl ${MOBILE_CLASSES.touchTarget} ${
                        isMobile ? 'w-full px-4 py-3 text-base' : 'px-8 py-3 transform hover:scale-105'
                      }`}
                      aria-label={`Learn more about ${service.title}`}
                    >
                      {isMobile ? service.title : `Explore ${service.title}`}
                      <svg className={`${isMobile ? 'ml-2 h-5 w-5' : 'ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
                </MobileCard>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA with improved design */}
        <div className={`text-center ${isMobile ? 'mt-10' : 'mt-16'}`}>
          <div className="relative bg-linear-to-br from-serve-blue-600 via-serve-blue-700 to-serve-blue-800 rounded-3xl p-10 shadow-2xl overflow-hidden">
            <div className="relative">
              <h3 className="text-white text-3xl font-bold mb-4">
                Need Help Choosing?
              </h3>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                Our friendly team is here to help you find the right care solution for you or your loved one.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/services"
                  className={`inline-flex items-center bg-white text-serve-blue-700 hover:bg-blue-50 font-bold transition-all duration-200 rounded-xl shadow-lg hover:shadow-2xl ${MOBILE_CLASSES.touchTarget} ${FOCUS_STYLES.button} ${
                    isMobile ? 'w-full justify-center px-6 py-4 text-lg' : 'px-8 py-4 text-lg transform hover:scale-105'
                  }`}
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  View All Services
                </Link>
                <Link
                  href="/contact"
                  className={`inline-flex items-center bg-serve-green-600 hover:bg-serve-green-700 text-white border-2 border-white/20 font-bold transition-all duration-200 rounded-xl shadow-lg hover:shadow-xl ${MOBILE_CLASSES.touchTarget} ${
                    isMobile ? 'w-full justify-center px-6 py-4 text-lg' : 'px-8 py-4 text-lg transform hover:scale-105'
                  }`}
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}