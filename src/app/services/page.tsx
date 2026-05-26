import Link from 'next/link'
import {
  HeartIcon,
  HomeIcon,
  TruckIcon,
  UserGroupIcon,
  SparklesIcon as HomeHelpIcon,
  BuildingOffice2Icon,
  PhoneIcon,
  CheckIcon,
  ArrowRightIcon,
  StarIcon,
  ShieldCheckIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'

import { generateSEOMetadata, seoConfigs } from '@/lib/seo'

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
    gradient: 'from-rose-500 to-red-600',
    bgGradient: 'from-rose-50 to-red-50',
    iconColor: 'text-rose-600'
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
    gradient: 'from-purple-500 to-violet-600',
    bgGradient: 'from-purple-50 to-violet-50',
    iconColor: 'text-purple-600'
  },
  {
    id: 'day-care',
    title: 'Day Care Centre',
    subtitle: 'Ron Manning Day and Activity Centre',
    description: 'Social activities, nutritious meals, and professional care in a friendly community environment.',
    icon: HomeIcon,
    features: ['Daily activities', 'Nutritious meals', 'Social interaction', 'Transport included'],
    href: '/services/day-care',
    badge: 'Community Hub',
    gradient: 'from-amber-500 to-orange-600',
    bgGradient: 'from-amber-50 to-orange-50',
    iconColor: 'text-amber-600'
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
    gradient: 'from-serve-blue-500 to-serve-blue-700',
    bgGradient: 'from-blue-50 to-indigo-50',
    iconColor: 'text-blue-600'
  },
  {
    id: 'home-help',
    title: 'Home Help Service',
    subtitle: 'Practical support to live independently',
    description: 'Light housework, meal preparation, prescription collection, errands and companionship. Less stress, more you.',
    icon: HomeHelpIcon,
    features: ['Light housework', 'Meal preparation', 'Prescription collection', 'Errands and shopping', 'Companionship & outings'],
    href: '/services/home-help',
    badge: 'New Service',
    gradient: 'from-teal-500 to-cyan-600',
    bgGradient: 'from-teal-50 to-cyan-50',
    iconColor: 'text-teal-600'
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
    gradient: 'from-serve-green-500 to-emerald-600',
    bgGradient: 'from-green-50 to-emerald-50',
    iconColor: 'text-green-600'
  }
]

const stats = [
  { label: 'Years of Service', value: '40+', gradient: 'from-serve-green-400 to-emerald-500' },
  { label: 'Services Offered', value: '6', gradient: 'from-purple-400 to-violet-500' },
  { label: 'CQC Rating', value: 'Good', gradient: 'from-amber-400 to-orange-500' },
  { label: 'Award Winner', value: '2024', gradient: 'from-rose-400 to-red-500' },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-linear-to-br from-serve-blue-900 via-serve-blue-800 to-serve-blue-900 text-white overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-serve-green-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 -left-40 w-80 h-80 bg-serve-blue-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute -bottom-20 right-1/4 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-rose-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        </div>

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }} 
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            {/* Badge */}
            <div className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold bg-linear-to-r from-yellow-400 via-amber-400 to-yellow-500 text-yellow-900 shadow-lg shadow-yellow-500/25 mb-8">
              <StarIcon className="w-5 h-5 mr-2" />
              Award-Winning Care Services
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-linear-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">Our</span>{' '}
              <span className="bg-linear-to-r from-serve-green-300 via-serve-green-400 to-serve-green-300 bg-clip-text text-transparent">Services</span>
            </h1>
            
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-blue-100/90 max-w-4xl mx-auto leading-relaxed">
              For over 40 years, SERVE has provided comprehensive, award-winning care services 
              to help people maintain their independence and dignity at home in Northamptonshire.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <div className={`text-2xl md:text-3xl lg:text-4xl font-black bg-linear-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </div>
                <div className="text-sm text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href="#services"
              className="inline-flex items-center bg-linear-to-r from-serve-green-500 to-emerald-600 hover:from-serve-green-600 hover:to-emerald-700 text-white px-8 py-4 rounded-2xl text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-xl shadow-green-500/30"
            >
              <SparklesIcon className="w-6 h-6 mr-3" />
              Explore Our Services
              <ArrowRightIcon className="ml-3 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 lg:py-28 bg-linear-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-serve-blue-100/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-serve-green-100/50 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-linear-to-r from-serve-blue-100 to-serve-blue-50 text-serve-blue-800 px-5 py-2.5 rounded-full text-sm font-semibold mb-6 shadow-sm">
              <ShieldCheckIcon className="w-4 h-4 mr-2" />
              Comprehensive Care Solutions
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-linear-to-r from-serve-blue-600 to-cyan-500 bg-clip-text text-transparent">Comprehensive Care</span>{' '}
              <span className="bg-linear-to-r from-rose-500 to-red-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
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
                  className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:-translate-y-2"
                >
                  {/* Header with gradient */}
                  <div className={`bg-linear-to-r ${service.gradient} p-6 lg:p-8 text-white relative overflow-hidden`}>
                    {/* Decorative shapes */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
                    
                    <div className="relative flex items-start justify-between mb-4">
                      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-3">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold">
                        {service.badge}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                    <p className="text-lg opacity-90">{service.subtitle}</p>
                  </div>

                  {/* Content */}
                  <div className="p-6 lg:p-8">
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    
                    <h4 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide">Key Features:</h4>
                    <ul className="space-y-2 mb-8">
                      {service.features.map((feature, index) => (
                        <li key={index} className={`flex items-center text-gray-700 bg-linear-to-r ${service.bgGradient} rounded-lg px-3 py-2 text-sm`}>
                          <CheckIcon className={`w-4 h-4 ${service.iconColor} mr-2 shrink-0`} />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={service.href}
                      className={`group/btn inline-flex items-center justify-center w-full bg-linear-to-r ${service.gradient} text-white px-6 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg`}
                    >
                      Learn More About This Service
                      <ArrowRightIcon className="ml-3 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Contact CTA */}
          <div className="relative mb-16">
            <div className="absolute inset-0 bg-linear-to-r from-serve-blue-600 via-serve-blue-700 to-serve-blue-800 rounded-3xl blur-xl opacity-30" />
            <div className="relative bg-linear-to-br from-serve-blue-600 via-serve-blue-700 to-serve-blue-800 rounded-3xl p-10 lg:p-14 text-center text-white shadow-2xl overflow-hidden">
              {/* Decorative circles */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
              
              <div className="relative">
                <h3 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Get Started?</h3>
                <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
                  Contact us today to discuss how our services can help you or your loved ones 
                  maintain independence and quality of life.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:01933315555"
                    className="inline-flex items-center justify-center bg-linear-to-r from-serve-green-500 to-emerald-600 hover:from-serve-green-600 hover:to-emerald-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
                  >
                    <PhoneIcon className="w-6 h-6 mr-3" />
                    Call: 01933 315555
                  </a>
                  <Link
                    href="/contact/"
                    className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm hover:bg-white hover:text-serve-blue-900 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 border border-white/20"
                  >
                    Send Message
                    <ArrowRightIcon className="ml-3 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
