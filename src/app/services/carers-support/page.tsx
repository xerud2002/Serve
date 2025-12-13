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
      <section className="relative py-20 bg-linear-to-br from-serve-blue-900 via-serve-blue-800 to-serve-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='m0 40l40-40h-40v40zm0 0l40-40h-40v40z'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <MajorTitle primary="Family Carers" secondary="Support" dark accentClass="text-serve-blue-200" />
              
              <p className="text-xl lg:text-2xl opacity-90 mb-8 leading-relaxed">
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Comprehensive Family Carer Support
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the challenges of caring for a loved one. Our support services 
              help you maintain your own wellbeing while providing the best care possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {carersServices.map((category, index) => {
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
                        <CheckIcon className="w-4 h-4 text-serve-green-600 mr-2 mt-1 shrink-0" />
                        <span className="text-sm">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>

          {/* Benefits */}
          <div className="bg-linear-to-r from-serve-blue-50 to-serve-green-50 rounded-3xl p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Why Choose SERVE for Family Carer Support?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center bg-white rounded-xl p-4 shadow-sm">
                  <CheckIcon className="w-5 h-5 text-serve-green-600 mr-3 shrink-0" />
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
              Common questions about our family carers support service
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
      <section className="py-20 bg-linear-to-r from-serve-blue-600 to-serve-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Get the Support You Deserve
          </h2>
          <p className="text-xl opacity-90 mb-10 leading-relaxed">
            As a carer, you deserve support too. Contact us today to talk to someone who understands your caring journey.
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
              Request Carer Support
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

      {/* Related Services */}
      <RelatedServices services={relatedServicesMap['/services/carers-support/']} />
    </div>
  )
}
