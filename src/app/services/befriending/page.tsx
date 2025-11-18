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

export const metadata: Metadata = {
  title: 'Countywide Befriending - SERVE | Combat Loneliness in Northamptonshire',
  description: 'SERVE\'s friendly befriending service provides regular companionship and emotional support to vulnerable adults across all of Northamptonshire.',
  keywords: 'befriending, loneliness, companionship, emotional support, Northamptonshire, vulnerable adults, social connection',
}

const befriendingServices = [
  {
    title: 'Regular Visits',
    icon: CalendarIcon,
    services: [
      'Weekly companionship visits',
      'Consistent friendly face',
      'Flexible scheduling',
      'Long-term relationships',
      'Reliable support',
      'Tailored visit duration'
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
      'Shared hobbies and interests',
      'Games and puzzles',
      'Reminiscence activities',
      'Music and arts',
      'Reading together',
      'Gentle exercise'
    ]
  },
  {
    title: 'Community Connection',
    icon: UserGroupIcon,
    services: [
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
    answer: "Befriending involves regular visits from a trained volunteer who provides companionship, conversation, and emotional support. Visits are typically weekly and tailored to your interests and preferences."
  },
  {
    question: "Who can access the befriending service?",
    answer: "Our befriending service is for vulnerable adults across Northamptonshire who experience loneliness or social isolation. This includes older people, those with disabilities, or anyone who would benefit from regular companionship."
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
    answer: "We carefully match befrienders and clients based on shared interests, personality, and preferences. We aim to create compatible, long-lasting friendships that both parties enjoy."
  },
  {
    question: "What areas do you cover?",
    answer: "Our befriending service covers all of Northamptonshire, including Rushden, Wellingborough, Kettering, Corby, Northampton, and surrounding villages. We're truly countywide!"
  }
]

export default function BefriendingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-serve-blue-600">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-serve-blue-600">Services</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Countywide Befriending</span>
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
              <MajorTitle primary="Countywide" secondary="Befriending" dark accentClass="text-serve-blue-200" />
              
              <p className="text-xl lg:text-2xl opacity-90 mb-8 leading-relaxed">
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              How Our Befriending Service Helps
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our befriending service tackles loneliness through regular visits, meaningful 
              conversation, and genuine human connection across all of Northamptonshire.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {befriendingServices.map((category, index) => {
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
              Why Choose SERVE Befriending?
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
              Common questions about our befriending service
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
            Combat Loneliness Today
          </h2>
          <p className="text-xl opacity-90 mb-10 leading-relaxed">
            Contact us to arrange befriending support. Our friendly volunteers are ready to 
            provide companionship and help you build meaningful social connections.
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
    </div>
  )
}
