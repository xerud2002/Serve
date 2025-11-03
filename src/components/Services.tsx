'use client'

import { 
  HomeIcon, 
  HeartIcon, 
  TruckIcon, 
  UserGroupIcon, 
  HandRaisedIcon,
  SparklesIcon,
  CheckCircleIcon 
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { MobileCard, useIsMobile, MOBILE_CLASSES } from '@/lib/mobile'
import { FOCUS_STYLES } from '@/lib/accessibility'

export default function Services() {
  const { isMobile } = useIsMobile()
  const services = [
    {
      id: 'personal-care',
      title: 'Personal & Domestic Care',
      description: 'Award-winning CQC registered homecare services. We provide compassionate personal care, medication management, meal preparation, and domestic support to help you stay safe and comfortable at home.',
      icon: HomeIcon,
      link: '/services/personal-care',
      featured: true,
      highlights: ['CQC Registered', 'Award Winning', 'Trained Carers', 'Tailored Plans']
    },
    {
      id: 'day-care',
      title: 'Day Care & Meals on Wheels',
      description: 'The Ron Manning Day and Activity Centre offers a warm, welcoming environment with engaging activities, social interaction, and nutritious two-course meals delivered to your door.',
      icon: HeartIcon,
      link: '/services/day-care',
      highlights: ['Social Activities', 'Nutritious Meals', 'Transport Included', 'Friendly Staff']
    },
    {
      id: 'transport',
      title: 'Community Transport',
      description: 'Reliable, affordable transport to medical appointments, hospital visits, and family connections. Our drivers understand the needs of older people and those with mobility challenges.',
      icon: TruckIcon,
      link: '/services/transport',
      highlights: ['Medical Appointments', 'Hospital Visits', 'Trained Drivers', 'Affordable Rates']
    },
    {
      id: 'befriending',
      title: 'Countywide Befriending',
      description: 'Combat loneliness with our friendly befriending service. We provide regular companionship and emotional support to vulnerable adults across all of Northamptonshire.',
      icon: UserGroupIcon,
      link: '/services/befriending',
      highlights: ['Combat Loneliness', 'Regular Visits', 'Emotional Support', 'Countywide Coverage']
    },
    {
      id: 'carers',
      title: 'Carers Support',
      description: 'Supporting those who care for family members with respite services, practical advice, and emotional support. Because carers need care too.',
      icon: HandRaisedIcon,
      link: '/services/carers',
      highlights: ['Respite Care', 'Practical Advice', 'Emotional Support', 'Carer Training']
    },
    {
      id: 'community',
      title: 'Community Services',
      description: 'A range of community support including day trips, hearing aid servicing, DBS checks, and other services that help maintain independence and community connections.',
      icon: SparklesIcon,
      link: '/services/community',
      highlights: ['Day Trips', 'Hearing Aid Service', 'DBS Checks', 'Community Events']
    },
  ]

  return (
    <section id="services" className={`${isMobile ? 'py-12' : 'py-24'} bg-gray-50`}>
      <div className={`max-w-7xl mx-auto ${MOBILE_CLASSES.mobilePadding}`}>
        <div className={`text-center ${isMobile ? 'mb-8' : 'mb-16'}`}>
          <h2 className={`font-bold text-gray-900 mb-4 ${MOBILE_CLASSES.mobileHeading}`}>Our Services</h2>
          <p className={`text-gray-600 max-w-3xl mx-auto ${MOBILE_CLASSES.mobileSubheading}`}>
            Everything we do is tailored to support and improve the daily lives of older people 
            and adults living with a disability or chronic medical condition.
          </p>
        </div>

        <div className={`grid grid-cols-1 ${isMobile ? 'gap-6' : 'md:grid-cols-2 lg:grid-cols-3 gap-8'}`}>
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <MobileCard
                key={service.id}
                className={`group transition-all duration-300 ${
                  service.featured ? 'ring-2 ring-serve-green-500 relative' : ''
                } ${!isMobile ? 'hover:shadow-2xl hover:border-serve-blue-200 hover:-translate-y-1' : ''} ${
                  service.featured && !isMobile ? 'transform hover:-translate-y-2' : ''
                }`}
                padding={isMobile ? 'default' : 'large'}
                clickable={false}
              >
                {service.featured && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-gradient-to-r from-serve-green-500 to-serve-green-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      🏆 Award Winner
                    </span>
                  </div>
                )}
                
                <div className="flex flex-col h-full text-center">
                  {/* Icon */}
                  <div className={`bg-serve-blue-50 rounded-full p-4 ${isMobile ? 'w-16 h-16 mb-4' : 'w-20 h-20 mb-6'} mx-auto group-hover:bg-serve-blue-100 transition-colors flex-shrink-0`}>
                    <IconComponent className={`${isMobile ? 'w-8 h-8' : 'w-12 h-12'} text-serve-blue-600 mx-auto`} />
                  </div>
                  
                  {/* Title */}
                  <h3 className={`font-bold text-gray-900 mb-4 group-hover:text-serve-blue-800 transition-colors flex-shrink-0 ${isMobile ? 'text-lg' : 'text-xl'}`}>
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className={`text-gray-600 mb-6 leading-relaxed flex-grow ${isMobile ? 'text-sm' : 'text-base'}`}>
                    {service.description}
                  </p>
                  
                  {/* Highlights */}
                  <div className={`grid grid-cols-1 ${isMobile ? 'gap-2 mb-6' : 'gap-3 mb-8'} flex-shrink-0`}>
                    {service.highlights.map((highlight, index) => (
                      <div key={index} className={`flex items-center justify-center text-gray-700 ${isMobile ? 'text-xs' : 'text-sm'}`}>
                        <CheckCircleIcon className="w-4 h-4 text-serve-green-500 mr-2 flex-shrink-0" />
                        <span className="text-center">{highlight}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA Button */}
                  <div className="flex-shrink-0">
                    <Link
                      href={service.link}
                      className={`group/btn inline-flex items-center justify-center bg-serve-blue-600 hover:bg-serve-blue-700 active:bg-serve-blue-800 text-white font-semibold transition-all duration-300 rounded-xl ${MOBILE_CLASSES.touchTarget} ${
                        isMobile ? 'w-full px-4 py-3 text-base' : 'px-6 py-3 transform hover:scale-105'
                      }`}
                      aria-label={`Learn more about ${service.title}`}
                    >
                      Learn More
                      <svg className={`${isMobile ? 'ml-2 h-4 w-4' : 'ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </MobileCard>
            )
          })}
        </div>

        <div className={`text-center ${isMobile ? 'mt-8' : 'mt-16'}`}>
          <Link
            href="/services"
            className={`bg-serve-blue-600 hover:bg-serve-blue-700 active:bg-serve-blue-800 text-white font-semibold transition-all duration-200 rounded-xl ${MOBILE_CLASSES.touchTarget} ${FOCUS_STYLES.button} ${
              isMobile ? 'block w-full py-4 text-lg' : 'inline-block px-8 py-4 text-lg'
            }`}
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}