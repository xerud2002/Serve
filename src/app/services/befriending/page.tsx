import { Metadata } from 'next'
import Link from 'next/link'
import {
  HeartIcon,
  UserGroupIcon,
  PhoneIcon,
  CheckIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  CalendarIcon,
  MapPinIcon,
  HandRaisedIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'
import MajorTitle from '@/components/MajorTitle'
import Breadcrumb from '@/components/Breadcrumb'
import RelatedServices from '@/components/RelatedServices'
import { relatedServicesMap } from '@/lib/relatedServicesData'

export const metadata: Metadata = {
  title: 'Countywide Befriending - SERVE | Combat Loneliness in Northamptonshire',
  description: 'Combat loneliness with regular companionship and emotional support across Northamptonshire. Refer someone today: 01933 315555.',
  keywords: 'befriending, loneliness, companionship, emotional support, Northamptonshire, vulnerable adults, social connection',
  alternates: {
    canonical: '/services/befriending',
  },
  openGraph: {
    title: 'Countywide Befriending Service - SERVE',
    description: 'Combat loneliness with our friendly befriending service. Regular companionship and emotional support across Northamptonshire.',
    url: '/services/befriending',
    type: 'website',
    images: [{
      url: '/images/befriending/befriending1.webp',
      width: 1200,
      height: 630,
      alt: 'SERVE Befriending Service',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Countywide Befriending Service - SERVE',
    description: 'Combat loneliness with regular companionship and emotional support across Northamptonshire.',
    images: ['/images/befriending/befriending1.webp'],
  },
}

const befriendingServices = [
  {
    title: 'Regular Contact',
    icon: CalendarIcon,
    services: [
      'Weekly face to face',
      'Consistent friendly face',
      'Flexible scheduling',
      'Telephone calls',
      'Reliable support',
    ]
  },
  {
    title: 'Emotional Support',
    icon: HeartIcon,
    services: [
      'Active listening',
      'Meaningful conversation',
      'Mental wellbeing support',
      'Confidence building',
      'Reduced isolation',
      'Compassionate care'
    ]
  },
  {
    title: 'Social Activities',
    icon: SparklesIcon,
    services: [
      'Life Stories - Capture your memories into a digital book',
      'Shared hobbies and interests',
      'Games and puzzles',
      'Reminiscence activities',
      'Reading together',
      'Gentle exercise'
    ]
  },
  {
    title: 'Community Connection',
    icon: UserGroupIcon,
    services: [
      'Group befriending sessions in Wellingborough and Kettering',
      'Link to local services',
      'Community event support',
      'Social group introduction',
      'Advocacy assistance',
      'Information sharing',
      'Network building'
    ]
  }
]

const benefits = [
  'Combat loneliness effectively',
  'Improve mental wellbeing',
  'Build meaningful relationships',
  'Countywide coverage',
  'Fully trained volunteers',
  'Free confidential service',
  'Flexible arrangements',
  'Person-centered approach'
]

const faqs = [
  {
    question: "What is befriending and how does it work?",
    answer: "Befriending involves regular visits from a trained volunteer who provides companionship, conversation, and emotional support. Visits and phone calls are weekly and tailored to your interests and preferences."
  },
  {
    question: "Who can access the befriending service?",
    answer: "Our befriending service is for vulnerable adults aged 65 years and over across Northamptonshire who experience loneliness or social isolation. This includes older people, those with disabilities, who would benefit from regular companionship."
  },
  {
    question: "Is the befriending service free?",
    answer: "Yes, our befriending service is completely free. It's funded by charitable donations and grants to ensure everyone who needs companionship can access it."
  },
  {
    question: "How are befriending volunteers selected?",
    answer: "All our befriending volunteers are carefully selected, DBS checked, and receive comprehensive training in befriending, safeguarding, and supporting vulnerable adults."
  },
  {
    question: "Can I choose my befriender?",
    answer: "We carefully match befrienders and service users based on shared interests, personality, and preferences. We aim to create compatible, long-lasting friendships that both parties enjoy."
  },
  {
    question: "What areas do you cover?",
    answer: "Our befriending service covers all of Northamptonshire, including East Northants, Wellingborough, Kettering, Corby, Northampton, and surrounding villages. We're truly countywide!"
  }
]

export default function BefriendingPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Countywide Befriending Service",
    "description": "Friendly befriending service providing regular companionship and emotional support to vulnerable adults across Northamptonshire.",
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
    "serviceType": "Befriending and Companionship Service",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "GBP",
      "description": "Free befriending service"
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
          <Breadcrumb 
            items={[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: 'Countywide Befriending' }
            ]}
          />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-24 bg-linear-to-br from-serve-blue-900 via-serve-blue-800 to-serve-blue-900 text-white overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 -left-40 w-80 h-80 bg-serve-blue-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute -bottom-20 right-1/4 w-72 h-72 bg-violet-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-serve-green-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
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
                <span className="bg-linear-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">Countywide</span>{' '}
                <span className="bg-linear-to-r from-purple-300 via-purple-400 to-purple-300 bg-clip-text text-transparent">Befriending</span>
              </h1>
              
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl opacity-90 mb-8 leading-relaxed">
                Combat loneliness with our friendly befriending service. We provide regular 
                companionship and emotional support to vulnerable adults across all of Northamptonshire.
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
                  Request Befriending
                  <ArrowRightIcon className="ml-3 h-5 w-5" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <MapPinIcon className="w-12 h-12 mx-auto mb-4 text-serve-blue-200" />
                  <div className="font-bold text-lg mb-2">Countywide</div>
                  <div className="text-sm opacity-80">All Northamptonshire</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <CalendarIcon className="w-12 h-12 mx-auto mb-4 text-serve-blue-200" />
                  <div className="font-bold text-lg mb-2">Regular Visits</div>
                  <div className="text-sm opacity-80">Weekly companionship</div>
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <HandRaisedIcon className="w-12 h-12 mx-auto mb-4 text-serve-blue-200" />
                  <div className="font-bold text-lg mb-2">Free Service</div>
                  <div className="text-sm opacity-80">No cost to you</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <HeartIcon className="w-12 h-12 mx-auto mb-4 text-serve-blue-200" />
                  <div className="font-bold text-lg mb-2">Combat Loneliness</div>
                  <div className="text-sm opacity-80">Meaningful connections</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 lg:py-28 bg-linear-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-100/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-100/50 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-linear-to-r from-purple-100 to-violet-50 text-purple-800 px-5 py-2.5 rounded-full text-sm font-semibold mb-6 shadow-sm">
              Combating Loneliness
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-linear-to-r from-purple-600 to-violet-500 bg-clip-text text-transparent">How Our Befriending</span>{' '}
              <span className="bg-linear-to-r from-serve-blue-500 to-cyan-500 bg-clip-text text-transparent">Service Helps</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our befriending service tackles loneliness through regular visits, meaningful 
              conversation, and genuine human connection across all of Northamptonshire.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {befriendingServices.map((category, index) => {
              const IconComponent = category.icon
              const gradients = [
                { bg: 'from-purple-50 to-violet-50', icon: 'bg-purple-100', iconText: 'text-purple-600', border: 'border-purple-200' },
                { bg: 'from-rose-50 to-pink-50', icon: 'bg-rose-100', iconText: 'text-rose-600', border: 'border-rose-200' },
                { bg: 'from-amber-50 to-yellow-50', icon: 'bg-amber-100', iconText: 'text-amber-600', border: 'border-amber-200' },
                { bg: 'from-teal-50 to-cyan-50', icon: 'bg-teal-100', iconText: 'text-teal-600', border: 'border-teal-200' },
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
            <div className="absolute inset-0 bg-linear-to-r from-purple-500 to-violet-600 rounded-3xl blur-xl opacity-20" />
            <div className="relative bg-linear-to-r from-purple-50 via-white to-violet-50 rounded-3xl p-10 lg:p-14 border border-purple-100">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-10 text-center">
                <span className="bg-linear-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">Why Choose SERVE Befriending?</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-shadow border border-purple-100">
                    <div className="bg-linear-to-r from-purple-500 to-violet-500 rounded-lg p-2 mr-3">
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
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-purple-100/50 rounded-full blur-3xl translate-x-1/2" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-linear-to-r from-violet-100 to-purple-50 text-violet-800 px-5 py-2.5 rounded-full text-sm font-semibold mb-6 shadow-sm">
              Common Questions
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-linear-to-r from-purple-600 to-violet-500 bg-clip-text text-transparent">Frequently Asked</span>{' '}
              <span className="bg-linear-to-r from-serve-blue-500 to-cyan-500 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about our befriending service
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="group bg-linear-to-br from-white to-purple-50/30 rounded-3xl p-8 shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-700 transition-colors">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-purple-600 via-violet-600 to-purple-700" />
        
        {/* Animated orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-linear-to-r from-white via-purple-100 to-white bg-clip-text text-transparent">Combat Loneliness Today</span>
          </h2>
          <p className="text-xl lg:text-2xl text-purple-100 mb-10 leading-relaxed max-w-3xl mx-auto">
            Contact us to arrange befriending support. Our friendly volunteers are ready to 
            provide companionship and help you build meaningful social connections.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="tel:01933315555"
              className="inline-flex items-center bg-linear-to-r from-serve-green-500 to-emerald-600 hover:from-serve-green-600 hover:to-emerald-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl shadow-green-500/30"
            >
              <PhoneIcon className="w-6 h-6 mr-3" />
              Call Now: 01933 315555
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center bg-white/10 backdrop-blur-sm hover:bg-white hover:text-purple-900 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 border border-white/20"
            >
              Request Befriending Support
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
      <RelatedServices services={relatedServicesMap['/services/befriending/']} />
    </div>
  )
}
