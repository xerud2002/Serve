import Link from 'next/link'
import {
  HeartIcon,
  HomeIcon,
  TruckIcon,
  UserGroupIcon,
  HandRaisedIcon,
  BuildingOffice2Icon,
  PhoneIcon,
  ClockIcon,
  CheckIcon,
  ArrowRightIcon,
  StarIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'
import NewsletterSignup from '@/components/NewsletterSignup'

import { generateSEOMetadata, seoConfigs } from '@/lib/seo'
import MajorTitle from '@/components/MajorTitle'

export const metadata = generateSEOMetadata(seoConfigs.services)

const services = [
  {
    id: 'personal-care',
    title: 'Personal & Domestic Care',
    subtitle: 'Award-winning homecare services',
    description: 'Our CQC registered personal care service helps you maintain independence at home with dignity and respect.',
    icon: HeartIcon,
    features: ['Personal care assistance', 'Medication support', 'Domestic tasks', 'Shopping assistance', 'Companionship'],
    href: '/services/personal-care',
    badge: 'CQC Registered',
    gradient: 'from-serve-blue-600 to-serve-blue-700'
  },
  {
    id: 'befriending',
    title: 'Countywide Befriending',
    subtitle: 'Companionship and support',
    description: 'Regular visits from trained volunteers to provide friendship and reduce social isolation.',
    icon: UserGroupIcon,
    features: ['Regular visits', 'Trained volunteers', 'Emotional support', 'Social activities', 'Telephone support'],
    href: '/services/befriending',
    badge: 'Countywide',
    gradient: 'from-pink-600 to-pink-700'
  },
  {
    id: 'day-care',
    title: 'Day Care & Meals on Wheels',
    subtitle: 'Ron Manning Day and Activity Centre',
    description: 'Social activities, nutritious meals, and professional care in a friendly community environment.',
    icon: HomeIcon,
    features: ['Daily activities', 'Nutritious meals', 'Social interaction', 'Transport included'],
    href: '/services/day-care',
    badge: 'Community Hub',
    gradient: 'from-serve-green-600 to-serve-green-700'
  },
  {
    id: 'transport',
    title: 'Community Transport',
    subtitle: 'Getting you where you need to go',
    description: 'Safe and reliable door-to-door transport service for medical appointments, shopping trips, and essential journeys.',
    icon: TruckIcon,
    features: ['Medical appointments', 'Shopping trips', 'Wheelchair accessible', 'Trained drivers'],
    href: '/services/transport',
    badge: 'Door-to-Door',
    gradient: 'from-purple-600 to-purple-700'
  },
  {
    id: 'carers-support',
    title: 'Support for family carers',
    subtitle: 'Advice and emotional support',
    description: 'Practical advice and emotional support for those caring for family members. Because carers need care too.',
    icon: HandRaisedIcon,
    features: ['Practical advice', 'Emotional support', 'One-to-one support', 'Peer support groups', 'Benefits guidance'],
    href: '/services/carers-support',
    badge: 'Family Focus',
    gradient: 'from-orange-600 to-orange-700'
  },
  {
    id: 'community-services',
    title: 'Community Services',
    subtitle: 'Additional community support',
    description: 'Hearing aid servicing, DBS checks, and other community-focused services.',
    icon: BuildingOffice2Icon,
    features: ['Hearing aid servicing', 'DBS checks', 'Community events', 'Information service', 'Social support'],
    href: '/services/community-services',
    badge: 'Community Wide',
    gradient: 'from-teal-600 to-teal-700'
  }
]

const stats = [
  { label: 'Years of Service', value: '40+', icon: ClockIcon },
  { label: 'Services Offered', value: '6', icon: CheckIcon },
  { label: 'CQC Rating', value: 'Good', icon: StarIcon },
  { label: 'Award Winner', value: '2024', icon: ShieldCheckIcon },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-linear-to-br from-serve-blue-900 via-serve-blue-800 to-serve-blue-700 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold mb-8">
              <ShieldCheckIcon className="w-5 h-5 mr-2" />
              Award-Winning Care Services
            </div>
            
            <MajorTitle primary="Our" secondary="Services" dark size="large" accentClass="text-serve-blue-200" className="mb-8" />
            
            <p className="text-xl lg:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
              For over 40 years, SERVE has provided comprehensive, award-winning care services 
              to help people maintain their independence and dignity at home in Northamptonshire.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="text-center">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-4">
                    <IconComponent className="w-8 h-8 mx-auto mb-4 text-serve-blue-200" />
                    <div className="text-3xl font-bold mb-2">{stat.value}</div>
                    <div className="text-sm opacity-80">{stat.label}</div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href="#services"
              className="inline-flex items-center bg-serve-green-600 hover:bg-serve-green-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Explore Our Services
              <ArrowRightIcon className="ml-3 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Comprehensive Care Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each service is designed with your independence, dignity, and well-being in mind. 
              All our services are delivered by trained, compassionate professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {services.map((service) => {
              const IconComponent = service.icon
              return (
                <div
                  key={service.id}
                  className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-2"
                >
                  <div className={`bg-linear-to-r ${service.gradient} p-8 text-white relative`}>
                    <div className="flex items-start justify-between mb-6">
                      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
                        {service.badge}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                    <p className="text-lg opacity-90 mb-6">{service.subtitle}</p>
                    <p className="opacity-80 leading-relaxed">{service.description}</p>
                  </div>

                  <div className="p-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features:</h4>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-700">
                          <CheckIcon className="w-5 h-5 text-serve-green-600 mr-3 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={service.href}
                      className="group/button inline-flex items-center bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 w-full justify-center"
                    >
                      Learn More About This Service
                      <ArrowRightIcon className="ml-3 h-5 w-5 group-hover/button:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Newsletter Signup */}
          <div className="mb-16">
            <NewsletterSignup variant="inline" />
          </div>

          {/* Contact CTA */}
          <div className="bg-linear-to-r from-serve-blue-600 to-serve-blue-700 rounded-3xl p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-6">Ready to Get Started?</h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss how our services can help you or your loved ones 
              maintain independence and quality of life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:01933315555"
                className="inline-flex items-center bg-serve-green-600 hover:bg-serve-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105"
              >
                <PhoneIcon className="w-6 h-6 mr-3" />
                Call: 01933 315555
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center bg-white/10 backdrop-blur-sm hover:bg-white hover:text-serve-blue-900 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 border border-white/20"
              >
                Send Message
                <ArrowRightIcon className="ml-3 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}