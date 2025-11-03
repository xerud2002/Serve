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
  BeakerIcon,
  ShoppingBagIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Personal & Domestic Care - SERVE | Award-Winning Homecare in Northamptonshire',
  description: 'SERVE\'s CQC registered personal care service helps you maintain independence at home with dignity. Winner of Best Homecare Team 2024.',
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
      'Health monitoring'
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

const testimonials = [
  {
    quote: "The care I receive from SERVE allows me to stay in my own home with dignity. The staff are wonderful - they're not just carers, they're friends.",
    author: "Margaret, Rushden",
    service: "Personal Care Client"
  },
  {
    quote: "SERVE's personal care team helped my mother maintain her independence for years. Their compassionate approach made all the difference to our family.",
    author: "David, Wellingborough", 
    service: "Family Member"
  },
  {
    quote: "Professional, reliable, and caring. SERVE's team treats me with respect and helps me live life on my own terms.",
    author: "Frank, Kettering",
    service: "Personal Care Client"
  }
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
    answer: "Contact us on 01933 315555 to arrange a free, no-obligation assessment. We'll visit you at home to understand your needs and create a personalized care plan."
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
      {/* Breadcrumb */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-serve-blue-600">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-serve-blue-600">Services</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Personal & Domestic Care</span>
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
              {/* Award Badge */}
              <div className="inline-flex items-center bg-yellow-500/20 backdrop-blur-sm text-yellow-300 px-6 py-3 rounded-full text-sm font-bold mb-8">
                <TrophyIcon className="w-5 h-5 mr-2" />
                Best Homecare Team 2024 - Great British Care Awards
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Personal & <span className="text-serve-blue-200">Domestic Care</span>
              </h1>
              
              <p className="text-xl lg:text-2xl opacity-90 mb-8 leading-relaxed">
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Comprehensive Care Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our personal care services are designed to help you maintain independence 
              while receiving the support you need in the comfort of your own home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {careServices.map((category, index) => {
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
              Why Choose SERVE for Personal Care?
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

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Real experiences from people who trust SERVE with their care
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="border-t border-gray-200 pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.service}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about our personal care services
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8">
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
            Ready to Start Your Care Journey?
          </h2>
          <p className="text-xl opacity-90 mb-10 leading-relaxed">
            Contact us today for a free, no-obligation assessment. Our experienced team 
            will work with you to create a personalized care plan that meets your unique needs.
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
              Request Free Assessment
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