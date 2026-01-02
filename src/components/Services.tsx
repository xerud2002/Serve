"use client"

import { 
  CheckCircleIcon 
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'
import { useIsMobile, MOBILE_CLASSES } from '@/lib/mobile'
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
      highlights: ['CQC Registered', 'Award Winning', 'Trained Carers', 'Tailored Plans'],
      gradient: 'from-rose-500 to-red-600',
      bgGradient: 'from-rose-50 to-red-50',
      iconBg: 'bg-rose-100',
      iconColor: 'text-rose-600'
    },
    {
      id: 'day-care',
      title: 'Day Care & Meals on Wheels',
      description: 'The Ron Manning Day and Activity Centre offers a warm, welcoming environment with engaging activities, social interaction, and nutritious two-course meals delivered to your door.',
      image: '/images/daycenter/day-center4.webp',
      link: '/services/day-care',
      highlights: ['Social Activities', 'Nutritious Meals', 'Transport can be provided', 'Friendly Staff'],
      loading: 'eager' as const,
      priority: true,
      gradient: 'from-amber-500 to-orange-600',
      bgGradient: 'from-amber-50 to-orange-50',
      iconBg: 'bg-amber-100',
      iconColor: 'text-amber-600'
    },
    {
      id: 'transport',
      title: 'Community Transport',
      description: 'Reliable, affordable transport to medical appointments and hospital visits. Our drivers understand the needs of older people and those with mobility challenges.',
      image: '/images/transport/community-transport1.webp',
      link: '/services/transport',
      highlights: ['Medical Appointments', 'Hospital Visits', 'Trained Drivers', 'Affordable Rates'],
      gradient: 'from-serve-blue-500 to-serve-blue-700',
      bgGradient: 'from-blue-50 to-indigo-50',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      id: 'befriending',
      title: 'Countywide Befriending',
      description: 'Combat loneliness with our friendly befriending service. We provide Regular Contact companionship and emotional support to vulnerable adults across all of Northamptonshire.',
      image: '/images/befriending/befriending1.webp',
      link: '/services/befriending',
      highlights: ['Combat Loneliness', 'Regular Contact', 'Emotional Support', 'Countywide Coverage'],
      gradient: 'from-purple-500 to-violet-600',
      bgGradient: 'from-purple-50 to-violet-50',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600'
    },
    {
      id: 'carers',
      title: 'Support for family carers',
      description: 'Supporting those who care for family members with respite services, practical advice, and emotional support. Because carers need care too.',
      image: '/images/care/care2.webp',
      link: '/services/carers-support',
      highlights: ['Respite Care', 'Practical Advice', 'Emotional Support', 'Carer Training'],
      gradient: 'from-teal-500 to-cyan-600',
      bgGradient: 'from-teal-50 to-cyan-50',
      iconBg: 'bg-teal-100',
      iconColor: 'text-teal-600'
    },
    {
      id: 'community',
      title: 'Community Services',
      description: 'A range of community support including hearing aid servicing, DBS checks, and other services that help maintain independence and community connections.',
      image: '/images/fundraising/fundraising.webp',
      link: '/services/community-services',
      highlights: ['Hearing Aid Service', 'DBS Checks', 'Community Events', 'Information Service'],
      gradient: 'from-serve-green-500 to-emerald-600',
      bgGradient: 'from-green-50 to-emerald-50',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600'
    },
  ]

  return (
    <section id="services" className={`${isMobile ? 'py-12' : 'py-24'} bg-linear-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden`}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-serve-blue-100/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-serve-green-100/50 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className={`max-w-7xl mx-auto ${MOBILE_CLASSES.mobilePadding} relative`}>
        <div className={`text-center ${isMobile ? 'mb-10' : 'mb-16'}`}>
          {/* Badge */}
          <div className="inline-flex items-center bg-linear-to-r from-serve-blue-100 to-serve-blue-50 text-serve-blue-800 px-5 py-2.5 rounded-full text-sm font-semibold mb-6 shadow-sm">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            Comprehensive Home Care Solutions
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-linear-to-r from-serve-blue-600 to-cyan-500 bg-clip-text text-transparent">Ways We Can Assist</span>{' '}
            <span className="bg-linear-to-r from-rose-500 to-red-600 bg-clip-text text-transparent">You</span>
          </h2>
          <p className={`text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed text-center ${MOBILE_CLASSES.mobileSubheading}`}>
            Everything we do is tailored to support and improve the daily lives of older people, 
            adults with disabilities, and their carers.
          </p>
        </div>

        <div className={`grid grid-cols-1 ${isMobile ? 'gap-6' : 'md:grid-cols-2 lg:grid-cols-3 gap-8'}`}>
          {services.map((service) => (
            <div key={service.id} className="group relative h-full">
              {/* Card with gradient border on hover */}
              <div className={`relative bg-white rounded-3xl overflow-hidden shadow-lg transition-all duration-500 h-full flex flex-col ${!isMobile ? 'hover:shadow-2xl hover:-translate-y-2' : ''}`}>
                {/* Gradient border effect */}
                <div className={`absolute inset-0 bg-linear-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} />
                <div className="absolute inset-0.5 bg-white rounded-3xl" />
                
                <div className="relative p-6 flex flex-col flex-1">
                  {/* Service Image */}
                  <div className={`relative rounded-2xl w-full aspect-[4/3] mb-5 overflow-hidden bg-linear-to-br ${service.bgGradient} shrink-0`}>
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover rounded-2xl group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      quality={70}
                      loading={service.priority ? "eager" : "lazy"}
                      priority={service.priority}
                    />
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-linear-to-t ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                  </div>
                  
                  {/* Title */}
                  <h3 className={`font-bold text-gray-900 mb-3 group-hover:text-serve-blue-700 transition-colors ${isMobile ? 'text-lg' : 'text-xl'}`}>
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className={`text-gray-600 mb-5 leading-relaxed flex-1 ${isMobile ? 'text-sm' : 'text-base'}`}>
                    {service.description}
                  </p>
                  
                  {/* Highlights */}
                  <div className={`grid grid-cols-2 ${isMobile ? 'gap-2 mb-5' : 'gap-2.5 mb-5'}`}>
                    {service.highlights.map((highlight, index) => (
                      <div key={index} className={`flex items-center text-gray-700 ${service.bgGradient} bg-linear-to-r rounded-lg px-2.5 py-1.5 ${isMobile ? 'text-xs' : 'text-xs'}`}>
                        <CheckCircleIcon className={`w-3.5 h-3.5 ${service.iconColor} mr-1.5 shrink-0`} />
                        <span className="truncate">{highlight}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA Button */}
                  <Link
                    href={service.link}
                    className={`group/btn inline-flex items-center justify-center bg-linear-to-r ${service.gradient} text-white font-bold transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl mt-auto ${MOBILE_CLASSES.touchTarget} ${
                      isMobile ? 'w-full px-4 py-3.5 text-base' : 'px-6 py-3.5 transform hover:scale-105'
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
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center ${isMobile ? 'mt-10' : 'mt-20'}`}>
          <div className="relative">
            {/* Background glow */}
            <div className="absolute inset-0 bg-linear-to-r from-serve-blue-600 via-serve-blue-700 to-serve-green-600 rounded-3xl blur-xl opacity-20" />
            
            <div className="relative bg-linear-to-br from-serve-blue-600 via-serve-blue-700 to-serve-blue-800 rounded-3xl p-10 lg:p-14 shadow-2xl overflow-hidden">
              {/* Decorative circles */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
              
              <div className="relative">
                <h3 className="text-white text-3xl lg:text-4xl font-bold mb-4">
                  Need Help Choosing?
                </h3>
                <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                  Our friendly team is here to help you find the right care solution for you or your loved one.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link
                    href="/services"
                    className={`inline-flex items-center bg-white text-serve-blue-700 hover:bg-blue-50 font-bold transition-all duration-300 rounded-2xl shadow-xl hover:shadow-2xl ${MOBILE_CLASSES.touchTarget} ${FOCUS_STYLES.button} ${
                      isMobile ? 'w-full justify-center px-6 py-4 text-lg' : 'px-10 py-4 text-lg transform hover:scale-105'
                    }`}
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    View All Services
                  </Link>
                  <Link
                    href="/contact"
                    className={`inline-flex items-center bg-linear-to-r from-serve-green-500 to-serve-green-600 hover:from-serve-green-600 hover:to-serve-green-700 text-white font-bold transition-all duration-300 rounded-2xl shadow-xl hover:shadow-2xl ${MOBILE_CLASSES.touchTarget} ${
                      isMobile ? 'w-full justify-center px-6 py-4 text-lg' : 'px-10 py-4 text-lg transform hover:scale-105'
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
      </div>
    </section>
  )
}