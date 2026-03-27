import { Metadata } from 'next'
import Link from 'next/link'
import {
  PhoneIcon,
  CheckIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  UserGroupIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline'
import MajorTitle from '@/components/MajorTitle'
import Breadcrumb from '@/components/Breadcrumb'
import FAQSchema from '@/components/FAQSchema'
import RelatedServices from '@/components/RelatedServices'
import { relatedServicesMap } from '@/lib/relatedServicesData'

export const metadata: Metadata = {
  title: 'Community Services - SERVE | DBS Checks & Community Support',
  description: 'Hearing aid servicing, DBS checks, and community events to help you stay connected and independent. Find out more: 01933 315555.',
  keywords: 'community services, DBS checks, hearing aid, community support, Northamptonshire, social activities',
  alternates: {
    canonical: '/services/community-services',
  },
  openGraph: {
    title: 'Community Services - SERVE',
    description: 'Hearing aid servicing, DBS checks, and community support to help maintain independence and connections.',
    url: '/services/community-services',
    type: 'website',
    images: [{
      url: '/images/community/bigchat1.webp',
      width: 1200,
      height: 630,
      alt: 'SERVE Community Services',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Community Services - SERVE',
    description: 'Hearing aid servicing, DBS checks, and community support in Northamptonshire.',
    images: ['/images/community/bigchat1.webp'],
  },
}

const communityServices = [
  {
    title: 'Hearing Aid Servicing',
    icon: WrenchScrewdriverIcon,
    services: [
      'Free hearing aid checks',
      'Battery replacement',
      'Cleaning and maintenance',
      'Minor repairs',
      'Advice and guidance',
      'Regular clinic sessions'
    ]
  },
  {
    title: 'DBS Checks',
    icon: CheckIcon,
    services: [
      'Fast-track DBS processing',
      'Volunteer applications',
      'Umbrella body service',
      'Affordable rates',
      'Expert guidance',
      'Quick turnaround'
    ]
  },
  {
    title: 'Community Events',
    icon: UserGroupIcon,
    services: [
      'Social gatherings',
      'Seasonal celebrations',
      'Coffee mornings',
      'Community fairs',
      'Fundraising events',
      'Information sessions'
    ]
  }
]

const benefits = [
  'Maintain community connections',
  'Affordable services for all',
  'Professional support staff',
  'Accessible venues',
  'Regular scheduled activities',
  'Safe and inclusive environment',
  'Build new friendships',
  'Stay active and engaged'
]

const faqs = [
  {
    question: "What is the hearing aid service?",
    answer: "Our free hearing aid servicing clinic provides battery replacements, cleaning, minor repairs, and maintenance checks. We hold regular sessions at our day center and can advise on further support if needed."
  },
  {
    question: "How do DBS checks work?",
    answer: "We act as an umbrella body for DBS checks, mainly for volunteers working with vulnerable groups. We process applications quickly at affordable rates and guide you through the entire process."
  },
  {
    question: "Are community events free to attend?",
    answer: "Many of our community events are free, though some activities may have a small charge to cover costs. We keep everything affordable and never want cost to be a barrier to participation."
  },
  {
    question: "Can I suggest activities or trips?",
    answer: "Absolutely! We love hearing suggestions from our community. If there's somewhere you'd like to visit or an activity you'd enjoy, let us know and we'll do our best to organise it."
  }
]

export default function CommunityServicesPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Community Services",
    "description": "Community support including hearing aid servicing, DBS checks, and community events to help maintain independence and social connections.",
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
    "serviceType": "Community Support Services",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Community Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Hearing Aid Servicing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "DBS Check Processing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Community Events"
          }
        }
      ]
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* FAQ Schema for SEO */}
      <FAQSchema faqs={faqs} />

      {/* Structured Data */}
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
              { label: 'Community Services' }
            ]}
          />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-24 bg-linear-to-br from-serve-green-900 via-serve-green-800 to-serve-green-900 text-white overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 -left-40 w-80 h-80 bg-serve-green-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute -bottom-20 right-1/4 w-72 h-72 bg-teal-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-serve-blue-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-linear-to-r from-white via-green-100 to-white bg-clip-text text-transparent">Community</span>{' '}
                <span className="bg-linear-to-r from-emerald-300 via-serve-green-400 to-emerald-300 bg-clip-text text-transparent">Services</span>
              </h1>
              
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl opacity-90 mb-8 leading-relaxed">
                A range of community support including hearing aid servicing, DBS 
                checks, and other services that help maintain independence and community connections.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:01933315555"
                  className="inline-flex items-center bg-serve-green-600 hover:bg-serve-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105"
                >
                  <PhoneIcon className="w-6 h-6 mr-3" />
                  Call: 01933 315555
                </a>
                <Link
                  href="/contact/"
                  className="inline-flex items-center bg-white/10 backdrop-blur-sm hover:bg-white hover:text-serve-blue-900 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 border border-white/20"
                >
                  Explore Services
                  <ArrowRightIcon className="ml-3 h-5 w-5" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <WrenchScrewdriverIcon className="w-12 h-12 mx-auto mb-4 text-serve-blue-200" />
                  <div className="font-bold text-lg mb-2">Hearing Aid Service</div>
                  <div className="text-sm opacity-80">Free maintenance</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <UserGroupIcon className="w-12 h-12 mx-auto mb-4 text-serve-blue-200" />
                  <div className="font-bold text-lg mb-2">Community Events</div>
                  <div className="text-sm opacity-80">Stay connected</div>
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <CheckIcon className="w-12 h-12 mx-auto mb-4 text-serve-blue-200" />
                  <div className="font-bold text-lg mb-2">DBS Checks</div>
                  <div className="text-sm opacity-80">Fast processing</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <UserGroupIcon className="w-12 h-12 mx-auto mb-4 text-serve-blue-200" />
                  <div className="font-bold text-lg mb-2">Community Events</div>
                  <div className="text-sm opacity-80">Stay connected</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 lg:py-28 bg-linear-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-100/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-100/50 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-linear-to-r from-emerald-100 to-green-50 text-emerald-800 px-5 py-2.5 rounded-full text-sm font-semibold mb-6 shadow-sm">
              Building Connections
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-linear-to-r from-emerald-500 to-green-600 bg-clip-text text-transparent">Supporting Your</span>{' '}
              <span className="bg-linear-to-r from-serve-blue-500 to-teal-500 bg-clip-text text-transparent">Community Life</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our community services help you stay active, connected, and independent. 
              From social trips to practical support, we&apos;re here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
            {communityServices.map((category, index) => {
              const IconComponent = category.icon
              const gradients = [
                { bg: 'from-emerald-50 to-green-50', icon: 'bg-emerald-100', iconText: 'text-emerald-600', border: 'border-emerald-200' },
                { bg: 'from-teal-50 to-cyan-50', icon: 'bg-teal-100', iconText: 'text-teal-600', border: 'border-teal-200' },
                { bg: 'from-lime-50 to-green-50', icon: 'bg-lime-100', iconText: 'text-lime-600', border: 'border-lime-200' },
                { bg: 'from-sky-50 to-blue-50', icon: 'bg-sky-100', iconText: 'text-sky-600', border: 'border-sky-200' },
              ]
              const colors = gradients[index % gradients.length]
              
              return (
                <div key={index} className={`group bg-linear-to-br ${colors.bg} rounded-3xl p-8 border ${colors.border} hover:shadow-xl transition-all duration-500 hover:-translate-y-2`}>
                  <div className={`${colors.icon} rounded-2xl p-4 w-fit mb-6 group-hover:scale-110 transition-transform`}>
                    <IconComponent className={`w-8 h-8 ${colors.iconText}`} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h3>
                  
                  <ul className="space-y-3">
                    {category.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-start text-gray-700">
                        <CheckIcon className={`w-5 h-5 ${colors.iconText} mr-2 mt-0.5 shrink-0`} />
                        <span className="text-sm">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>

          {/* Benefits */}
          <div className="relative">
            <div className="absolute inset-0 bg-linear-to-r from-emerald-500 to-green-600 rounded-3xl blur-xl opacity-20" />
            <div className="relative bg-linear-to-r from-emerald-50 via-white to-green-50 rounded-3xl p-10 lg:p-14 border border-emerald-100">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-10 text-center">
                <span className="bg-linear-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">Why Choose SERVE Community Services?</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-shadow border border-emerald-100">
                    <div className="bg-linear-to-r from-emerald-500 to-green-500 rounded-lg p-2 mr-3">
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

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-linear-to-r from-emerald-100 to-green-50 text-emerald-700 px-5 py-2.5 rounded-full text-sm font-semibold mb-6 shadow-sm">
              Your Questions Answered
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-linear-to-r from-emerald-500 to-green-600 bg-clip-text text-transparent">Frequently Asked</span>{' '}
              <span className="text-gray-900">Questions</span>
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about our community services
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="group bg-linear-to-br from-slate-50 to-emerald-50/30 rounded-2xl p-8 border border-emerald-100 hover:border-emerald-200 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-linear-to-br from-emerald-600 via-green-600 to-teal-600 relative overflow-hidden">
        {/* Animated decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-400/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-green-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-5 py-2.5 rounded-full text-sm font-semibold mb-6">
            Get Involved Today
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join Our <span className="text-emerald-200">Community</span> Today
          </h2>
          <p className="text-xl opacity-90 mb-10 leading-relaxed max-w-2xl mx-auto">
            Get involved with our community services. Whether it&apos;s a hearing aid check 
            or community event, there&apos;s always something happening at SERVE.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="tel:01933315555"
              className="inline-flex items-center bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              <PhoneIcon className="w-6 h-6 mr-3" />
              Call Now: 01933 315555
            </a>
            <Link
              href="/contact/"
              className="inline-flex items-center bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 border border-white/30"
            >
              Get More Information
              <ArrowRightIcon className="ml-3 h-5 w-5" />
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20">
            <Link
              href="/services/"
              className="inline-flex items-center text-white/80 hover:text-white transition-colors group"
            >
              <ArrowLeftIcon className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <RelatedServices services={relatedServicesMap['/services/community-services/']} />
    </div>
  )
}
