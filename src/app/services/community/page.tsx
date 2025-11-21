import { Metadata } from 'next'
import Link from 'next/link'
import {
  PhoneIcon,
  CheckIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  TruckIcon,
  UserGroupIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline'
import MajorTitle from '@/components/MajorTitle'

export const metadata: Metadata = {
  title: 'Community Services - SERVE | DBS Checks & Community Support',
  description: 'A range of community support including hearing aid servicing, DBS checks, and other services that help maintain independence and community connections.',
  keywords: 'community services, DBS checks, hearing aid, community support, Northamptonshire, social activities',
  alternates: {
    canonical: '/services/community',
  },
  openGraph: {
    title: 'Community Services - SERVE',
    description: 'Hearing aid servicing, DBS checks, and community support to help maintain independence and connections.',
    url: '/services/community',
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
    answer: "Absolutely! We love hearing suggestions from our community. If there's somewhere you'd like to visit or an activity you'd enjoy, let us know and we'll do our best to organize it."
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
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Breadcrumb */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-serve-blue-600">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-serve-blue-600">Services</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Community Services</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-serve-blue-900 via-serve-blue-800 to-serve-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='m0 40l40-40h-40v40zm0 0l40-40h-40v40z'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <MajorTitle primary="Community" secondary="Services" dark accentClass="text-serve-blue-200" />
              
              <p className="text-xl lg:text-2xl opacity-90 mb-8 leading-relaxed">
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
                  href="/contact"
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Supporting Your Community Life
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our community services help you stay active, connected, and independent. 
              From social trips to practical support, we&apos;re here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {communityServices.map((category, index) => {
              const IconComponent = category.icon
              return (
                <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                  <div className="bg-serve-blue-100 rounded-xl p-4 w-fit mb-6">
                    <IconComponent className="w-8 h-8 text-serve-blue-600" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h3>
                  
                  <ul className="space-y-2">
                    {category.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-start text-gray-700">
                        <CheckIcon className="w-4 h-4 text-serve-green-600 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>

          {/* Benefits */}
          <div className="bg-gradient-to-r from-serve-blue-50 to-serve-green-50 rounded-3xl p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Why Choose SERVE Community Services?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center bg-white rounded-xl p-4 shadow-sm">
                  <CheckIcon className="w-5 h-5 text-serve-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-800 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about our community services
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-serve-blue-600 to-serve-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Join Our Community Today
          </h2>
          <p className="text-xl opacity-90 mb-10 leading-relaxed">
            Get involved with our community services. Whether it&apos;s a hearing aid check 
            or community event, there&apos;s always something happening at SERVE.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="tel:01933315555"
              className="inline-flex items-center bg-serve-green-600 hover:bg-serve-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105"
            >
              <PhoneIcon className="w-6 h-6 mr-3" />
              Call Now: 01933 315555
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center bg-white/10 backdrop-blur-sm hover:bg-white hover:text-serve-blue-900 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 border border-white/20"
            >
              Get More Information
              <ArrowRightIcon className="ml-3 h-5 w-5" />
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20">
            <Link
              href="/services"
              className="inline-flex items-center text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeftIcon className="w-5 h-5 mr-2" />
              Back to All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
