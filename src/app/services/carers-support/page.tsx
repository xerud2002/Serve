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

export const metadata: Metadata = {
  title: 'Carers Support - SERVE | Respite and Advice for Family Carers',
  description: 'Respite care, practical advice, and emotional support for family carers. Because carers need care too. Get help today: 01933 315555.',
  keywords: 'carers support, respite care, family carers, carer training, emotional support, Northamptonshire, caregiver help',
  alternates: {
    canonical: '/services/carers-support',
  },
  openGraph: {
    title: 'Carers Support Services - SERVE',
    description: 'Respite services, practical advice, and emotional support for family carers. Because carers need care too.',
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
    title: 'Carers Support Services - SERVE',
    description: 'Respite services, practical advice, and emotional support for family carers in Northamptonshire.',
    images: ['/images/care/care2.webp'],
  },
}

const carersServices = [
  {
    title: 'Respite Care',
    icon: ClockIcon,
    services: [
      'Short-term care relief',
      'Planned respite breaks',
      'Emergency cover',
      'Day care options',
      'Overnight support available',
      'Flexible arrangements'
    ]
  },
  {
    title: 'Practical Advice',
    icon: ChatBubbleLeftRightIcon,
    services: [
      'Benefits and funding guidance',
      'Care planning support',
      'Equipment recommendations',
      'Service navigation',
      'Housing adaptations advice',
      'Legal information'
    ]
  },
  {
    title: 'Emotional Support',
    icon: HeartIcon,
    services: [
      'One-to-one counseling',
      'Peer support groups',
      'Stress management',
      'Mental wellbeing support',
      'Confidential listening',
      'Coping strategies'
    ]
  },
  {
    title: 'Carer Training',
    icon: AcademicCapIcon,
    services: [
      'Moving and handling',
      'Medication management',
      'First aid skills',
      'Condition-specific training',
      'Self-care techniques',
      'Communication skills'
    ]
  }
]

const benefits = [
  'Prevent carer burnout',
  'Free confidential service',
  'Expert advice and guidance',
  'Trained support workers',
  'Flexible respite options',
  'Peer support networks',
  'Emergency assistance',
  'Holistic family support'
]

const faqs = [
  {
    question: "What is carers support and who can access it?",
    answer: "Our carers support service helps anyone caring for a family member, friend, or neighbor. Whether you're caring for someone with a disability, illness, mental health condition, or age-related needs, we're here to support you."
  },
  {
    question: "What is respite care?",
    answer: "Respite care provides temporary relief for family carers. This can be a few hours a week to allow you time for yourself, or longer breaks when you need to rest, work, or handle other responsibilities. Your loved one receives quality care while you recharge."
  },
  {
    question: "Is carers support free?",
    answer: "Yes, our carers support advice and guidance is free. Some respite care services may have costs depending on your circumstances, but we'll work with you to find affordable solutions and help access funding where available."
  },
  {
    question: "What practical advice do you offer?",
    answer: "We provide guidance on benefits, care funding, equipment, home adaptations, care planning, and navigating health and social care services. We can also connect you with specialist advisors for legal or financial matters."
  },
  {
    question: "Do you offer carer training?",
    answer: "Yes, we provide free training courses covering moving and handling, medication, first aid, and condition-specific care. Training helps you care more safely and confidently while protecting your own health."
  },
  {
    question: "How do I arrange respite care?",
    answer: "Contact us on 01933 315555 to discuss your needs. We'll arrange an assessment and create a respite plan that works for you and your loved one, whether it's regular weekly support or occasional breaks."
  }
]

export default function CarersSupportPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Carers Support Service",
    "description": "Respite services, practical advice, and emotional support for family carers. Includes respite care, carer training, and practical guidance.",
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
    "serviceType": "Carers Support and Respite Care",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Carers Support Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Respite Care"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Carer Training"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Practical Advice and Support"
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
      <section className="relative py-20 bg-gradient-to-br from-serve-blue-900 via-serve-blue-800 to-serve-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='m0 40l40-40h-40v40zm0 0l40-40h-40v40z'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <MajorTitle primary="Carers" secondary="Support" dark accentClass="text-serve-blue-200" />
              
              <p className="text-xl lg:text-2xl opacity-90 mb-8 leading-relaxed">
                Supporting those who care for family members with respite services, practical 
                advice, and emotional support. Because carers need care too.
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
                  Get Carer Support
                  <ArrowRightIcon className="ml-3 h-5 w-5" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <ClockIcon className="w-12 h-12 mx-auto mb-4 text-serve-blue-200" />
                  <div className="font-bold text-lg mb-2">Respite Care</div>
                  <div className="text-sm opacity-80">Time for yourself</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <ChatBubbleLeftRightIcon className="w-12 h-12 mx-auto mb-4 text-serve-blue-200" />
                  <div className="font-bold text-lg mb-2">Practical Advice</div>
                  <div className="text-sm opacity-80">Expert guidance</div>
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <AcademicCapIcon className="w-12 h-12 mx-auto mb-4 text-serve-blue-200" />
                  <div className="font-bold text-lg mb-2">Carer Training</div>
                  <div className="text-sm opacity-80">Free courses</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <HeartIcon className="w-12 h-12 mx-auto mb-4 text-serve-blue-200" />
                  <div className="font-bold text-lg mb-2">Emotional Support</div>
                  <div className="text-sm opacity-80">We&apos;re here for you</div>
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
              Comprehensive Carer Support
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the challenges of caring for a loved one. Our support services 
              help you maintain your own wellbeing while providing the best care possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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
              Why Choose SERVE for Carer Support?
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
              Common questions about our carers support service
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
            Get the Support You Deserve
          </h2>
          <p className="text-xl opacity-90 mb-10 leading-relaxed">
            As a carer, you deserve support too. Contact us today to discuss respite care, 
            access training, or simply talk to someone who understands your caring journey.
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
    </div>
  )
}
