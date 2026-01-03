import { Metadata } from 'next'
import Link from 'next/link'
import {
  HeartIcon,
  ShieldCheckIcon,
  ClockIcon,
  UserIcon,
  HomeIcon,
  PhoneIcon,
  CheckIcon,
  StarIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  TrophyIcon,
  HandRaisedIcon,
  BeakerIcon
} from '@heroicons/react/24/outline'
import MajorTitle from '@/components/MajorTitle'
import Breadcrumb from '@/components/Breadcrumb'
import FAQSchema from '@/components/FAQSchema'
import RelatedServices from '@/components/RelatedServices'
import { relatedServicesMap } from '@/lib/relatedServicesData'

export const metadata: Metadata = {
  title: 'Personal & Domestic Care - SERVE | Award-Winning Homecare in Northamptonshire',
  description: 'Award-winning CQC registered personal care helping you stay independent at home with dignity. Call 01933 315555 for a free assessment today.',
  keywords: 'personal care, homecare, domestic care, CQC registered, Northamptonshire, award winning, home support',
}

const careServices = [
  {
    title: 'Personal Care',
    icon: UserIcon,
    services: [
      'Washing and bathing assistance',
      'Dressing and undressing support',
      'Mobility assistance',
      'Toileting support',
      'Medication prompting',
    ]
  },
  {
    title: 'Domestic Support',
    icon: HomeIcon,
    services: [
      'Light housework and cleaning',
      'Meal preparation and cooking',
      'Shopping assistance',
      'Laundry and ironing',
      'Bed making',
      'General tidying'
    ]
  },
  {
    title: 'Companionship',
    icon: HandRaisedIcon,
    services: [
      'Friendly conversation',
      'Emotional support',
      'Activity assistance',
      'Appointment accompaniment',
      'Social interaction',
      'Mental stimulation'
    ]
  },
  {
    title: 'Health Support',
    icon: BeakerIcon,
    services: [
      'Medication reminders',
      'Health appointment support',
      'Condition monitoring',
      'First aid assistance',
      'Emergency response',
      'Care plan coordination'
    ]
  }
]

const benefits = [
  'Maintain independence at home',
  'CQC registered and regulated',
  'Fully trained and vetted staff',
  'Flexible care packages',
  'Person-centered approach',
  'Regular quality monitoring',
  'Emergency support available',
  'Award-winning service'
]

const faqs = [
  {
    question: "What is included in personal care services?",
    answer: "Our personal care includes assistance with washing, bathing, dressing, mobility, toileting, and medication support. We provide person-centered care tailored to your individual needs and preferences."
  },
  {
    question: "Are SERVE's care services regulated?",
    answer: "Yes, we are fully registered and regulated by the Care Quality Commission (CQC). Our services meet all required standards and are regularly inspected to ensure quality care."
  },
  {
    question: "How do I arrange a care assessment?",
    answer: "Contact us on 01933 315555 to arrange a free, no-obligation assessment. We'll visit you at home to understand your needs and create a personalised care plan."
  },
  {
    question: "What qualifications do your carers have?",
    answer: "All our care staff are fully trained, DBS checked, and regularly supervised. They receive ongoing training in personal care, health and safety, and person-centered care approaches."
  },
  {
    question: "Can care packages be flexible?",
    answer: "Absolutely. We offer flexible care packages from 30 minutes to 24-hour support. Care can be adjusted as your needs change, and we work around your preferred schedule."
  },
  {
    question: "What areas do you cover?",
    answer: "We provide personal care services across Northamptonshire, including Rushden, Wellingborough, Kettering, and surrounding areas. Contact us to confirm coverage in your area."
  }
]

export default function PersonalCarePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* FAQ Schema for SEO */}
      <FAQSchema faqs={faqs} />

      {/* Breadcrumb */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumb 
            items={[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: 'Personal & Domestic Care' }
            ]}
          />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-24 bg-linear-to-br from-serve-blue-900 via-serve-blue-800 to-serve-blue-900 text-white overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-rose-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 -left-40 w-80 h-80 bg-serve-blue-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute -bottom-20 right-1/4 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
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
              {/* Award Badge */}
              <div className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold bg-linear-to-r from-yellow-400 via-amber-400 to-yellow-500 text-yellow-900 shadow-lg shadow-yellow-500/25 mb-8">
                <TrophyIcon className="w-5 h-5 mr-2" />
                Best Homecare Team 2024 - Great British Care Awards
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-linear-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">Personal &</span>{' '}
                <span className="bg-linear-to-r from-rose-300 via-rose-400 to-rose-300 bg-clip-text text-transparent">Domestic Care</span>
              </h1>
              
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl opacity-90 mb-8 leading-relaxed">
                Award-winning, CQC registered personal care services helping you maintain 
                independence and dignity in your own home.
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
                  Request Assessment
                  <ArrowRightIcon className="ml-3 h-5 w-5" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <ShieldCheckIcon className="w-12 h-12 mx-auto mb-4 text-serve-blue-200" />
                  <div className="font-bold text-lg mb-2">CQC Registered</div>
                  <div className="text-sm opacity-80">Fully regulated service</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <ClockIcon className="w-12 h-12 mx-auto mb-4 text-serve-blue-200" />
                  <div className="font-bold text-lg mb-2">Flexible Care</div>
                  <div className="text-sm opacity-80">30 mins to 24-hour support</div>
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <StarIcon className="w-12 h-12 mx-auto mb-4 text-serve-blue-200" />
                  <div className="font-bold text-lg mb-2">Award Winner</div>
                  <div className="text-sm opacity-80">Best Homecare Team 2024</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <HeartIcon className="w-12 h-12 mx-auto mb-4 text-serve-blue-200" />
                  <div className="font-bold text-lg mb-2">Person-Centered</div>
                  <div className="text-sm opacity-80">Care tailored to you</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 lg:py-28 bg-linear-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-rose-100/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-100/50 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-linear-to-r from-rose-100 to-red-50 text-rose-800 px-5 py-2.5 rounded-full text-sm font-semibold mb-6 shadow-sm">
              CQC Registered Care
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-linear-to-r from-rose-500 to-red-600 bg-clip-text text-transparent">Comprehensive Care</span>{' '}
              <span className="bg-linear-to-r from-serve-blue-500 to-cyan-500 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our personal care services are designed to help you maintain independence 
              while receiving the support you need in the comfort of your own home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {careServices.map((category, index) => {
              const IconComponent = category.icon
              const gradients = [
                { bg: 'from-rose-50 to-red-50', icon: 'bg-rose-100', iconText: 'text-rose-600', border: 'border-rose-200' },
                { bg: 'from-amber-50 to-orange-50', icon: 'bg-amber-100', iconText: 'text-amber-600', border: 'border-amber-200' },
                { bg: 'from-purple-50 to-violet-50', icon: 'bg-purple-100', iconText: 'text-purple-600', border: 'border-purple-200' },
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
            <div className="absolute inset-0 bg-linear-to-r from-rose-500 to-red-600 rounded-3xl blur-xl opacity-20" />
            <div className="relative bg-linear-to-r from-rose-50 via-white to-red-50 rounded-3xl p-10 lg:p-14 border border-rose-100">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-10 text-center">
                <span className="bg-linear-to-r from-rose-600 to-red-600 bg-clip-text text-transparent">Why Choose SERVE for Personal Care?</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-shadow border border-rose-100">
                    <div className="bg-linear-to-r from-rose-500 to-red-500 rounded-lg p-2 mr-3">
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
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-rose-100/40 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-linear-to-r from-rose-100 to-red-50 text-rose-700 px-5 py-2.5 rounded-full text-sm font-semibold mb-6 shadow-sm">
              Your Questions Answered
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-linear-to-r from-rose-500 to-red-600 bg-clip-text text-transparent">Frequently Asked</span>{' '}
              <span className="text-gray-900">Questions</span>
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about our personal care services
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="group bg-linear-to-br from-slate-50 to-rose-50/30 rounded-2xl p-8 border border-rose-100 hover:border-rose-200 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-rose-700 transition-colors">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-linear-to-br from-rose-600 via-red-600 to-rose-700 relative overflow-hidden">
        {/* Animated decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-rose-400/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-red-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-5 py-2.5 rounded-full text-sm font-semibold mb-6">
            Start Your Care Journey Today
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your <span className="text-rose-200">Care Journey?</span>
          </h2>
          <p className="text-xl opacity-90 mb-10 leading-relaxed max-w-2xl mx-auto">
            Contact us today for a free, no-obligation assessment. Our experienced team 
            will work with you to create a personalised care plan that meets your unique needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="tel:01933315555"
              className="inline-flex items-center bg-white text-rose-600 hover:bg-rose-50 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              <PhoneIcon className="w-6 h-6 mr-3" />
              Call Now: 01933 315555
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 border border-white/30"
            >
              Request Free Assessment
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
      <RelatedServices services={relatedServicesMap['/services/personal-care/']} />
    </div>
  )
}