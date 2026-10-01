import { Metadata } from 'next'
import Link from 'next/link'
import {
  SparklesIcon,
  ArchiveBoxIcon,
  HeartIcon,
  ShieldCheckIcon,
  TrashIcon,
  PhoneIcon,
  CheckIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  MapPinIcon,
  HomeIcon
} from '@heroicons/react/24/outline'
import Breadcrumb from '@/components/Breadcrumb'
import RelatedServices from '@/components/RelatedServices'
import { relatedServicesMap } from '@/lib/relatedServicesData'

export const metadata: Metadata = {
  title: 'House to Home - SERVE | Deep Cleaning, Decluttering & Hoarding Support',
  description: 'Specialist home restoration in Northamptonshire: deep cleaning, decluttering, hoarding support and hospital discharge preparation. Compassionate, non-judgemental help. Call 01933 315555.',
  keywords: 'house to home, deep cleaning, decluttering, hoarding support, hospital discharge, home safety, waste removal, Northamptonshire, home restoration',
  alternates: {
    canonical: '/services/house-to-home',
  },
  openGraph: {
    title: 'House to Home - SERVE',
    description: 'Specialist deep cleaning, decluttering and hoarding support to help create a safe, healthy and comfortable home.',
    url: '/services/house-to-home',
    type: 'website',
    images: [{
      url: '/images/care/care1.webp',
      width: 1200,
      height: 630,
      alt: 'SERVE House to Home Service',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'House to Home - SERVE',
    description: 'Specialist deep cleaning, decluttering and hoarding support across Northamptonshire.',
    images: ['/images/care/care1.webp'],
  },
}

const supportCategories = [
  {
    title: 'Deep Cleaning',
    summary: 'Professional cleaning for homes requiring more than routine domestic support.',
    icon: SparklesIcon,
    services: [
      'Full property deep cleans',
      'Kitchen and bathroom restoration',
      'Odour reduction',
      'High-risk areas addressed'
    ]
  },
  {
    title: 'Decluttering Support',
    summary: 'Practical, sensitive support to clear and organise living spaces.',
    icon: ArchiveBoxIcon,
    services: [
      'Room-by-room support',
      'Sorting and organising belongings',
      'Reducing trip hazards',
      'Improving accessibility'
    ]
  },
  {
    title: 'Hoarding Support',
    summary: 'Non-judgemental support for people affected by hoarding behaviours.',
    icon: HeartIcon,
    services: [
      'Person-centred approach',
      'Work at your pace',
      'Respectful decision-making',
      'Focus on long-term outcomes'
    ]
  },
  {
    title: 'Crisis & Recovery Support',
    summary: 'Helping people following illness, hospital admission, bereavement, or significant life events.',
    icon: ShieldCheckIcon,
    services: [
      'Hospital discharge preparation',
      'Home safety improvements',
      'Support after life changes',
      'Preventing escalation of issues'
    ]
  },
  {
    title: 'Waste Removal',
    summary: 'Light clearance and disposal support to create a safer, more manageable living environment.',
    icon: TrashIcon,
    services: [
      'Clothing and textile disposal',
      'Household rubbish removal',
      'General decluttering support',
      'Recycling where possible'
    ]
  }
]

const benefits = [
  'A safer, healthier home environment',
  'Reduced clutter and fire risks',
  'Improved mobility around the home',
  'Increased independence and wellbeing',
  'Compassionate support without judgement',
  'Preparation for hospital discharge',
  'Reduced stress and anxiety',
  'Better use of living space'
]

const process = [
  {
    step: '1',
    title: 'Contact Us',
    description: 'Get in touch to discuss your situation and arrange an initial conversation.'
  },
  {
    step: '2',
    title: 'Home Assessment',
    description: 'We will visit your home, understand your needs and provide a personalised support plan and quotation.'
  },
  {
    step: '3',
    title: 'Transform Your Home',
    description: 'Our team will work alongside you to create a safer, cleaner and more manageable living environment.'
  }
]

const suitableFor = [
  'Older adults',
  'People living with disabilities',
  'Individuals affected by hoarding behaviours',
  'People returning home from hospital',
  'Family carers supporting a loved one',
  'Anyone whose home has become difficult to manage'
]

export default function HouseToHomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "House to Home",
    "description": "Specialist home restoration service providing deep cleaning, decluttering, hoarding support and hospital discharge preparation across Northamptonshire.",
    "provider": {
      "@type": "Organization",
      "name": "SERVE",
      "url": "https://serve.org.uk",
      "telephone": "+44-1933-315555",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "8 West Street",
        "addressLocality": "Rushden",
        "addressRegion": "Northamptonshire",
        "postalCode": "NN10 0RT",
        "addressCountry": "GB"
      }
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Northamptonshire"
    },
    "serviceType": "Home Restoration, Deep Cleaning and Decluttering Service"
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Breadcrumb */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: 'House to Home' }
            ]}
          />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-24 bg-linear-to-br from-serve-blue-900 via-serve-blue-800 to-serve-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-serve-orange-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 -left-40 w-80 h-80 bg-serve-blue-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute -bottom-20 right-1/4 w-72 h-72 bg-serve-orange-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-serve-green-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        </div>

        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-linear-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">House to</span>{' '}
                <span className="bg-linear-to-r from-serve-orange-300 via-serve-orange-400 to-serve-orange-300 bg-clip-text text-transparent">Home</span>
              </h1>

              <p className="text-base md:text-lg lg:text-xl xl:text-2xl opacity-90 mb-4 leading-relaxed">
                A specialist home restoration service for people whose living environment has become unmanageable.
              </p>
              <p className="text-base md:text-lg opacity-80 mb-8 leading-relaxed">
                We provide practical, non-judgemental support with deep cleaning, decluttering and hoarding
                situations to help create a safe, healthy and comfortable home.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:01933315555"
                  className="inline-flex items-center justify-center whitespace-nowrap bg-serve-green-600 hover:bg-serve-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 min-h-11"
                >
                  <PhoneIcon className="w-6 h-6 mr-3" />
                  Call: 01933 315555
                </a>
                <Link
                  href="/contact/"
                  className="inline-flex items-center justify-center whitespace-nowrap bg-white/10 backdrop-blur-sm hover:bg-white hover:text-serve-blue-900 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 border border-white/20 min-h-11"
                >
                  Request an Assessment
                  <ArrowRightIcon className="ml-3 h-5 w-5" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <MapPinIcon className="w-12 h-12 mx-auto mb-4 text-serve-blue-200" />
                  <div className="font-bold text-lg mb-2">Across Northamptonshire</div>
                  <div className="text-sm opacity-80">Local, friendly team</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <HeartIcon className="w-12 h-12 mx-auto mb-4 text-serve-blue-200" />
                  <div className="font-bold text-lg mb-2">Non-Judgemental</div>
                  <div className="text-sm opacity-80">Dignity and respect</div>
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <SparklesIcon className="w-12 h-12 mx-auto mb-4 text-serve-blue-200" />
                  <div className="font-bold text-lg mb-2">Specialist Cleaning</div>
                  <div className="text-sm opacity-80">Beyond routine domestic help</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <ShieldCheckIcon className="w-12 h-12 mx-auto mb-4 text-serve-blue-200" />
                  <div className="font-bold text-lg mb-2">Safer Homes</div>
                  <div className="text-sm opacity-80">Reduced hazards and risks</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-linear-to-r from-serve-orange-100 to-serve-orange-50 text-serve-orange-800 px-5 py-2.5 rounded-full text-sm font-semibold mb-6 shadow-sm">
            Specialist Home Restoration
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-linear-to-r from-serve-orange-600 to-serve-orange-500 bg-clip-text text-transparent">Restoring homes,</span>{' '}
            <span className="bg-linear-to-r from-serve-blue-500 to-serve-teal-500 bg-clip-text text-transparent">restoring confidence</span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
            House to Home supports people whose living environment has become unmanageable. Whatever the reason,
            we help transform your home into a space that is safe, healthy and comfortable again.
          </p>
        </div>
      </section>

      {/* How We Can Help */}
      <section className="py-20 lg:py-28 bg-linear-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-serve-orange-100/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-serve-teal-100/50 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-linear-to-r from-serve-orange-100 to-serve-orange-50 text-serve-orange-800 px-5 py-2.5 rounded-full text-sm font-semibold mb-6 shadow-sm">
              What We Help With
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-linear-to-r from-serve-orange-600 to-serve-orange-500 bg-clip-text text-transparent">How House to Home</span>{' '}
              <span className="bg-linear-to-r from-serve-blue-500 to-serve-teal-500 bg-clip-text text-transparent">Can Help</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Practical support delivered with dignity, respect and compassion, at a pace that is right for you.
            </p>
          </div>

          {/* Negative-margin gutters let the final row of five cards centre */}
          <div className="flex flex-wrap justify-center -mx-4 mb-8">
            {supportCategories.map((category, index) => {
              const IconComponent = category.icon
              const gradients = [
                { bg: 'from-serve-orange-50 to-amber-50', icon: 'bg-serve-orange-100', iconText: 'text-serve-orange-600', border: 'border-serve-orange-200' },
                { bg: 'from-serve-teal-50 to-cyan-50', icon: 'bg-serve-teal-100', iconText: 'text-serve-teal-600', border: 'border-serve-teal-200' },
                { bg: 'from-rose-50 to-pink-50', icon: 'bg-rose-100', iconText: 'text-rose-600', border: 'border-rose-200' },
                { bg: 'from-serve-blue-50 to-sky-50', icon: 'bg-serve-blue-100', iconText: 'text-serve-blue-600', border: 'border-serve-blue-200' },
                { bg: 'from-serve-green-50 to-emerald-50', icon: 'bg-serve-green-100', iconText: 'text-serve-green-600', border: 'border-serve-green-200' },
              ]
              const colors = gradients[index % gradients.length]

              return (
                <div key={index} className="flex w-full flex-col px-4 pb-8 md:w-1/2 lg:w-1/3">
                  <div className={`group flex flex-1 flex-col bg-linear-to-br ${colors.bg} rounded-3xl p-8 border ${colors.border} hover:shadow-xl transition-all duration-500 hover:-translate-y-2`}>
                    <div className={`${colors.icon} rounded-2xl p-4 w-fit mb-6 group-hover:scale-110 transition-transform`}>
                      <IconComponent className={`w-8 h-8 ${colors.iconText}`} />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">{category.title}</h3>
                    <p className="text-sm text-gray-700 mb-5 leading-relaxed lg:min-h-17">{category.summary}</p>

                    <ul className="space-y-3">
                      {category.services.map((service, serviceIndex) => (
                        <li key={serviceIndex} className="flex items-start text-gray-700">
                          <CheckIcon className={`w-5 h-5 ${colors.iconText} mr-2 mt-0.5 shrink-0`} />
                          <span className="text-sm">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Benefits */}
          <div className="relative">
            <div className="absolute inset-0 bg-linear-to-r from-serve-orange-500 to-serve-orange-600 rounded-3xl blur-xl opacity-20" />
            <div className="relative bg-linear-to-r from-serve-orange-50 via-white to-amber-50 rounded-3xl p-10 lg:p-14 border border-serve-orange-100">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-10 text-center">
                <span className="bg-linear-to-r from-serve-orange-600 to-serve-orange-500 bg-clip-text text-transparent">Benefits of House to Home</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-shadow border border-serve-orange-100">
                    <div className="bg-linear-to-r from-serve-orange-500 to-serve-orange-600 rounded-lg p-2 mr-3">
                      <CheckIcon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-800 font-medium text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-linear-to-r from-serve-teal-100 to-serve-teal-50 text-serve-teal-800 px-5 py-2.5 rounded-full text-sm font-semibold mb-6 shadow-sm">
            Our Approach
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
            <span className="bg-linear-to-r from-serve-orange-600 to-serve-orange-500 bg-clip-text text-transparent">Dignity, respect</span>{' '}
            <span className="bg-linear-to-r from-serve-blue-500 to-serve-teal-500 bg-clip-text text-transparent">and compassion</span>
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            We understand that every situation is different. Our team works with dignity, respect and compassion,
            recognising that there are often complex reasons why a home has become difficult to manage.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            We will work with you, your family, carers and professionals where appropriate to agree realistic
            goals and achieve positive outcomes at a pace that is right for you.
          </p>
        </div>
      </section>

      {/* Simple 3-Step Process */}
      <section className="py-16 lg:py-20 bg-linear-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-serve-orange-100/50 rounded-full blur-3xl -translate-x-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-linear-to-r from-serve-orange-100 to-serve-orange-50 text-serve-orange-800 px-5 py-2.5 rounded-full text-sm font-semibold mb-6 shadow-sm">
              How It Works
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-linear-to-r from-serve-orange-600 to-serve-orange-500 bg-clip-text text-transparent">Simple</span>{' '}
              <span className="bg-linear-to-r from-serve-blue-500 to-serve-teal-500 bg-clip-text text-transparent">3-Step Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Getting started is straightforward, and we are with you at every stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {process.map((item) => (
              <div key={item.step} className="bg-white rounded-3xl p-8 shadow-lg border border-serve-orange-100 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="bg-linear-to-r from-serve-orange-500 to-serve-orange-600 text-white w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-black mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Suitable For */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-linear-to-r from-serve-orange-100 to-serve-orange-50 text-serve-orange-800 px-5 py-2.5 rounded-full text-sm font-semibold mb-6 shadow-sm">
              Who It Is For
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-linear-to-r from-serve-orange-600 to-serve-orange-500 bg-clip-text text-transparent">Suitable</span>{' '}
              <span className="bg-linear-to-r from-serve-blue-500 to-serve-teal-500 bg-clip-text text-transparent">For</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {suitableFor.map((item, index) => (
              <div key={index} className="flex items-start bg-linear-to-r from-serve-orange-50 to-white rounded-2xl p-5 border border-serve-orange-100">
                <HomeIcon className="w-6 h-6 text-serve-orange-600 mr-3 shrink-0" />
                <span className="text-gray-800 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-serve-orange-600 via-serve-orange-700 to-serve-orange-800" />

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-linear-to-r from-white via-serve-orange-100 to-white bg-clip-text text-transparent">Let us help you transform your home</span>
          </h2>
          <p className="text-xl lg:text-2xl text-serve-orange-100 mb-10 leading-relaxed max-w-3xl mx-auto">
            Get in touch for a confidential, non-judgemental conversation about your situation.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="tel:01933315555"
              className="inline-flex items-center bg-linear-to-r from-serve-green-500 to-emerald-600 hover:from-serve-green-600 hover:to-emerald-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl shadow-green-500/30 min-h-11"
            >
              <PhoneIcon className="w-6 h-6 mr-3" />
              Call Now: 01933 315555
            </a>
            <Link
              href="/contact/"
              className="inline-flex items-center bg-white/10 backdrop-blur-sm hover:bg-white hover:text-serve-orange-900 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 border border-white/20 min-h-11"
            >
              Request an Assessment
              <ArrowRightIcon className="ml-3 h-5 w-5" />
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20">
            <Link
              href="/services/"
              className="inline-flex items-center text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeftIcon className="w-5 h-5 mr-2" />
              Back to All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <RelatedServices services={relatedServicesMap['/services/house-to-home/']} />
    </div>
  )
}
