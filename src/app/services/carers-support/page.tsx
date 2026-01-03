import { Metadata } from 'next'
import Link from 'next/link'
import {
  HeartIcon,
  PhoneIcon,
  CheckIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  AcademicCapIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline'
import MajorTitle from '@/components/MajorTitle'
import Breadcrumb from '@/components/Breadcrumb'
import FAQSchema from '@/components/FAQSchema'
import RelatedServices from '@/components/RelatedServices'
import { relatedServicesMap } from '@/lib/relatedServicesData'

export const metadata: Metadata = {
  title: 'Family Carers Support - SERVE | Advice and Emotional Support',
  description: 'Practical advice and emotional support for family carers. Because carers need care too. Get help today: 01933 315555.',
  keywords: 'family carers support, carers advice, emotional support, Northamptonshire, caregiver help',
  alternates: {
    canonical: '/services/carers-support',
  },
  openGraph: {
    title: 'Family Carers Support Services - SERVE',
    description: 'Practical advice and emotional support for family carers. Because carers need care too.',
    url: '/services/carers-support',
    type: 'website',
    images: [{
      url: '/images/care/care2.webp',
      width: 1200,
      height: 630,
      alt: 'SERVE Carers Support Service',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Family Carers Support Services - SERVE',
    description: 'Practical advice and emotional support for family carers in Northamptonshire.',
    images: ['/images/care/care2.webp'],
  },
}

const carersServices = [
  {
    title: 'Practical Advice',
    icon: ChatBubbleLeftRightIcon,
    services: [
      'Benefits and funding guidance',
      'Care planning support',
      'Service navigation',
      'Legal information'
    ]
  },
  {
    title: 'Emotional Support',
    icon: HeartIcon,
    services: [
      'One-to-one support',
      'Peer support groups providing companionship and understanding',
      'Stress management',
      'Mental wellbeing support',
      'Confidential listening',
      'Coping strategies'
    ]
  }
]

const benefits = [
  'Prevent carer burnout',
  'Free confidential service',
  'Expert advice and guidance',
  'Trained support workers',
  'Peer support networks'
]

const faqs = [
  {
    question: "What is family carers support and who can access it?",
    answer: "Our carers support service helps anyone caring for a family member, friend, or neighbour. Whether you're caring for someone with a disability, illness, mental health condition, or age-related needs, we're here to guide and support you."
  },
  {
    question: "Is family carers support free?",
    answer: "Yes, our carers support advice and guidance is free."
  },
  {
    question: "What practical advice do you offer?",
    answer: "We provide guidance on benefits, care funding, care planning, and navigating health and social care services. We can also connect you with specialist advisors for financial matters."
  }
]

export default function CarersSupportPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Family Carers Support Service",
    "description": "Practical advice and emotional support for family carers. Includes benefits guidance, care planning, and peer support.",
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
    "serviceType": "Family Carers Support",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Family Carers Support Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Practical Advice and Support"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Emotional Support"
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
              { label: 'Carers Support' }
            ]}
          />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-24 bg-linear-to-br from-teal-900 via-teal-800 to-teal-900 text-white overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 -left-40 w-80 h-80 bg-teal-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute -bottom-20 right-1/4 w-72 h-72 bg-serve-green-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
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
                <span className="bg-linear-to-r from-white via-teal-100 to-white bg-clip-text text-transparent">Family Carers</span>{' '}
                <span className="bg-linear-to-r from-cyan-300 via-teal-400 to-cyan-300 bg-clip-text text-transparent">Support</span>
              </h1>
              
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl opacity-90 mb-8 leading-relaxed">
                Supporting those who care for family members with practical advice and emotional support. Because family carers need care too.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <ChatBubbleLeftRightIcon className="w-12 h-12 mx-auto mb-4 text-serve-blue-200" />
                <div className="font-bold text-lg mb-2">Practical Advice</div>
                <div className="text-sm opacity-80">Expert guidance</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <HeartIcon className="w-12 h-12 mx-auto mb-4 text-serve-blue-200" />
                <div className="font-bold text-lg mb-2">Emotional Support</div>
                <div className="text-sm opacity-80">We&apos;re here for you</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 lg:py-28 bg-linear-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-teal-100/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-100/50 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-linear-to-r from-teal-100 to-cyan-50 text-teal-800 px-5 py-2.5 rounded-full text-sm font-semibold mb-6 shadow-sm">
              Supporting Those Who Care
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-linear-to-r from-teal-500 to-cyan-600 bg-clip-text text-transparent">Comprehensive Family</span>{' '}
              <span className="bg-linear-to-r from-serve-blue-500 to-teal-500 bg-clip-text text-transparent">Carer Support</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We understand the challenges of caring for a loved one. Our support services 
              help you maintain your own wellbeing while providing the best care possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {carersServices.map((category, index) => {
              const IconComponent = category.icon
              const gradients = [
                { bg: 'from-teal-50 to-cyan-50', icon: 'bg-teal-100', iconText: 'text-teal-600', border: 'border-teal-200' },
                { bg: 'from-cyan-50 to-sky-50', icon: 'bg-cyan-100', iconText: 'text-cyan-600', border: 'border-cyan-200' },
                { bg: 'from-sky-50 to-blue-50', icon: 'bg-sky-100', iconText: 'text-sky-600', border: 'border-sky-200' },
                { bg: 'from-blue-50 to-teal-50', icon: 'bg-blue-100', iconText: 'text-blue-600', border: 'border-blue-200' },
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
            <div className="absolute inset-0 bg-linear-to-r from-teal-500 to-cyan-600 rounded-3xl blur-xl opacity-20" />
            <div className="relative bg-linear-to-r from-teal-50 via-white to-cyan-50 rounded-3xl p-10 lg:p-14 border border-teal-100">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-10 text-center">
                <span className="bg-linear-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">Why Choose SERVE for Family Carer Support?</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-shadow border border-teal-100">
                    <div className="bg-linear-to-r from-teal-500 to-cyan-500 rounded-lg p-2 mr-3">
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
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-teal-100/40 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-linear-to-r from-teal-100 to-cyan-50 text-teal-700 px-5 py-2.5 rounded-full text-sm font-semibold mb-6 shadow-sm">
              Your Questions Answered
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-linear-to-r from-teal-500 to-cyan-600 bg-clip-text text-transparent">Frequently Asked</span>{' '}
              <span className="text-gray-900">Questions</span>
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about our family carers support service
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="group bg-linear-to-br from-slate-50 to-teal-50/30 rounded-2xl p-8 border border-teal-100 hover:border-teal-200 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-teal-700 transition-colors">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-linear-to-br from-teal-600 via-cyan-600 to-teal-700 relative overflow-hidden">
        {/* Animated decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-teal-400/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-cyan-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-5 py-2.5 rounded-full text-sm font-semibold mb-6">
            We&apos;re Here For You
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get the <span className="text-teal-200">Support You Deserve</span>
          </h2>
          <p className="text-xl opacity-90 mb-10 leading-relaxed max-w-2xl mx-auto">
            As a carer, you deserve support too. Contact us today to talk to someone who understands your caring journey.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="tel:01933315555"
              className="inline-flex items-center bg-white text-teal-600 hover:bg-teal-50 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              <PhoneIcon className="w-6 h-6 mr-3" />
              Call Now: 01933 315555
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 border border-white/30"
            >
              Request Carer Support
              <ArrowRightIcon className="ml-3 h-5 w-5" />
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20">
            <Link
              href="/services"
              className="inline-flex items-center text-white/80 hover:text-white transition-colors group"
            >
              <ArrowLeftIcon className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <RelatedServices services={relatedServicesMap['/services/carers-support/']} />
    </div>
  )
}
