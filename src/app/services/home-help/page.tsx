import { Metadata } from 'next'
import Link from 'next/link'
import {
  HomeIcon,
  HeartIcon,
  ShoppingBagIcon,
  ClipboardDocumentCheckIcon,
  PhoneIcon,
  CheckIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
  MapPinIcon,
  SparklesIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'
import Breadcrumb from '@/components/Breadcrumb'
import RelatedServices from '@/components/RelatedServices'
import { relatedServicesMap } from '@/lib/relatedServicesData'

export const metadata: Metadata = {
  title: 'Home Help Service - SERVE | Practical Support at Home in Northamptonshire',
  description: 'Flexible home help in Northamptonshire: light housework, meal preparation, prescription collection, companionship and errands. Less stress, more you. Call 01933 315555.',
  keywords: 'home help, domestic help, housework, meal preparation, prescription collection, errands, companionship, Northamptonshire, independent living, elderly support',
  alternates: {
    canonical: '/services/home-help',
  },
  openGraph: {
    title: 'Home Help Service - SERVE',
    description: 'Practical, reliable support to help you live independently and comfortably at home across Northamptonshire.',
    url: '/services/home-help',
    type: 'website',
    images: [{
      url: '/images/care/care2.webp',
      width: 1200,
      height: 630,
      alt: 'SERVE Home Help Service',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home Help Service - SERVE',
    description: 'Practical, reliable home help to keep you living comfortably and independently.',
    images: ['/images/care/care2.webp'],
  },
}

const homeHelpCategories = [
  {
    title: 'In the Home',
    icon: HomeIcon,
    services: [
      'Cleaning',
      'Washing up',
      'Laundry and ironing',
      'Changing bedding',
      'Taking bins out',
      'Simple organising and tidying'
    ]
  },
  {
    title: 'Meals and Food',
    icon: SparklesIcon,
    services: [
      'Preparing simple meals and drinks',
      'Supporting with meal planning',
      'Checking dates on food',
      'Writing shopping lists',
      'Putting shopping away'
    ]
  },
  {
    title: 'Everyday Errands',
    icon: ShoppingBagIcon,
    services: [
      'Pet care',
      'Posting letters',
      'Picking up small items (e.g. medication)',
      'Helping with online shopping',
      'Returning library books'
    ]
  },
  {
    title: 'Practical Help',
    icon: ClipboardDocumentCheckIcon,
    services: [
      'Helping with phones, televisions or small household items',
      'Sorting post and paperwork',
      'Completing simple forms'
    ]
  },
  {
    title: 'Company and Social Support',
    icon: UserGroupIcon,
    services: [
      'Support with hobbies and activities',
      'Help with phone or video calls',
      'Accompanying you on short walks'
    ]
  },
  {
    title: 'Safety and Wellbeing',
    icon: ShieldCheckIcon,
    services: [
      'Carrying out simple home safety checks',
      'Making sure heating is used when needed'
    ]
  }
]

const benefits = [
  'Local and reliable team',
  'Fully DBS checked and trained staff',
  'Compassionate and trustworthy support',
  'Services tailored to your lifestyle',
  'Flexible, regular or one-off visits',
  'Helps you stay independent at home',
  'Reduces day to day stress',
  'Friendly, familiar faces'
]

const faqs = [
  {
    question: "What does a Home Help do?",
    answer: "Our Home Helps support you with day to day tasks that make life at home easier - light housework, meal preparation, prescription collection, errands, paperwork and friendly company. Every visit is tailored to what you need most."
  },
  {
    question: "Is Home Help the same as personal care?",
    answer: "No. Home Help focuses on practical tasks around the home and out and about. If you need help with personal care such as washing, dressing or medication, our CQC registered Personal Care service is the right fit."
  },
  {
    question: "Are your Home Helps DBS checked?",
    answer: "Yes. Every member of our team is fully DBS checked, trained, and selected for their kindness and reliability. You will see consistent, familiar faces wherever possible."
  },
  {
    question: "How often can I have a Home Help visit?",
    answer: "We offer flexible support, from a one-off visit through to regular weekly help. We will work with you to design a schedule that fits around your lifestyle and budget."
  },
  {
    question: "What areas do you cover?",
    answer: "We provide Home Help across Northamptonshire, including Rushden, Wellingborough, Kettering, Higham Ferrers, Raunds and surrounding villages. Call 01933 315555 to check coverage for your area."
  },
  {
    question: "How do I arrange Home Help?",
    answer: "Get in touch on 01933 315555 or use our contact form. We will arrange a friendly chat to understand what you need, then match you with the right Home Help."
  }
]

export default function HomeHelpPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Home Help Service",
    "description": "Flexible home help service supporting people to live independently in their own homes across Northamptonshire. Includes light housework, meal preparation, prescription collection, errands and companionship.",
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
    "serviceType": "Home Help and Domestic Support Service"
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
              { label: 'Home Help Service' }
            ]}
          />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-24 bg-linear-to-br from-serve-blue-900 via-serve-blue-800 to-serve-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 -left-40 w-80 h-80 bg-serve-blue-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute -bottom-20 right-1/4 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
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
                <span className="bg-linear-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">Home Help</span>{' '}
                <span className="bg-linear-to-r from-teal-300 via-cyan-400 to-teal-300 bg-clip-text text-transparent">Service</span>
              </h1>

              <p className="text-base md:text-lg lg:text-xl xl:text-2xl opacity-90 mb-4 leading-relaxed">
                Home Helps can support you with a wide range of day to day tasks to help make life easier at home.
              </p>
              <p className="text-base md:text-lg opacity-80 mb-8 leading-relaxed">
                Flexible, tailored assistance so you can focus on living life your way. Less stress, more you.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:01933315555"
                  className="inline-flex items-center bg-serve-green-600 hover:bg-serve-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 min-h-11"
                >
                  <PhoneIcon className="w-6 h-6 mr-3" />
                  Call: 01933 315555
                </a>
                <Link
                  href="/contact/"
                  className="inline-flex items-center bg-white/10 backdrop-blur-sm hover:bg-white hover:text-serve-blue-900 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 border border-white/20 min-h-11"
                >
                  Request Home Help
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
                  <ShieldCheckIcon className="w-12 h-12 mx-auto mb-4 text-serve-blue-200" />
                  <div className="font-bold text-lg mb-2">DBS Checked</div>
                  <div className="text-sm opacity-80">Trained and trusted staff</div>
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <SparklesIcon className="w-12 h-12 mx-auto mb-4 text-serve-blue-200" />
                  <div className="font-bold text-lg mb-2">Flexible Visits</div>
                  <div className="text-sm opacity-80">One-off or regular</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <HeartIcon className="w-12 h-12 mx-auto mb-4 text-serve-blue-200" />
                  <div className="font-bold text-lg mb-2">Tailored Support</div>
                  <div className="text-sm opacity-80">Built around you</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro / What we do */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-linear-to-r from-teal-100 to-cyan-50 text-teal-800 px-5 py-2.5 rounded-full text-sm font-semibold mb-6 shadow-sm">
            Independent Living at Home
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-linear-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">Practical support</span>{' '}
            <span className="bg-linear-to-r from-serve-blue-500 to-cyan-500 bg-clip-text text-transparent">that fits around you</span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
            Our Home Help Service is designed to support people to live independently and comfortably in their own homes.
            With flexible, tailored assistance, we help you manage everyday tasks so you can focus on living life your way.
          </p>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 lg:py-28 bg-linear-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-teal-100/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-100/50 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-linear-to-r from-teal-100 to-cyan-50 text-teal-800 px-5 py-2.5 rounded-full text-sm font-semibold mb-6 shadow-sm">
              What We Help With
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-linear-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">Everyday tasks,</span>{' '}
              <span className="bg-linear-to-r from-serve-blue-500 to-cyan-500 bg-clip-text text-transparent">made easier</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We provide practical, reliable support that fits around your individual needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {homeHelpCategories.map((category, index) => {
              const IconComponent = category.icon
              const gradients = [
                { bg: 'from-teal-50 to-cyan-50', icon: 'bg-teal-100', iconText: 'text-teal-600', border: 'border-teal-200' },
                { bg: 'from-rose-50 to-pink-50', icon: 'bg-rose-100', iconText: 'text-rose-600', border: 'border-rose-200' },
                { bg: 'from-amber-50 to-yellow-50', icon: 'bg-amber-100', iconText: 'text-amber-600', border: 'border-amber-200' },
                { bg: 'from-purple-50 to-violet-50', icon: 'bg-purple-100', iconText: 'text-purple-600', border: 'border-purple-200' },
                { bg: 'from-blue-50 to-sky-50', icon: 'bg-blue-100', iconText: 'text-blue-600', border: 'border-blue-200' },
                { bg: 'from-emerald-50 to-green-50', icon: 'bg-emerald-100', iconText: 'text-emerald-600', border: 'border-emerald-200' },
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

          {/* Why Choose */}
          <div className="relative">
            <div className="absolute inset-0 bg-linear-to-r from-teal-500 to-cyan-600 rounded-3xl blur-xl opacity-20" />
            <div className="relative bg-linear-to-r from-teal-50 via-white to-cyan-50 rounded-3xl p-10 lg:p-14 border border-teal-100">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-10 text-center">
                <span className="bg-linear-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">Why Choose Our Home Help Service?</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-shadow border border-teal-100">
                    <div className="bg-linear-to-r from-teal-500 to-cyan-500 rounded-lg p-2 mr-3">
                      <CheckIcon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-800 font-medium text-sm">{benefit}</span>
                  </div>
                ))}
              </div>

              <p className="text-center text-gray-700 mt-10 text-lg font-medium">
                We are here to make life easier, reduce stress, and help you maintain independence with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-teal-100/50 rounded-full blur-3xl translate-x-1/2" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-linear-to-r from-cyan-100 to-teal-50 text-cyan-800 px-5 py-2.5 rounded-full text-sm font-semibold mb-6 shadow-sm">
              Common Questions
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-linear-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">Frequently Asked</span>{' '}
              <span className="bg-linear-to-r from-serve-blue-500 to-cyan-500 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our Home Help Service
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="group bg-linear-to-br from-white to-teal-50/30 rounded-3xl p-8 shadow-lg border border-teal-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-teal-700 transition-colors">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-teal-600 via-cyan-600 to-teal-700" />

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-linear-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">Less stress, more you</span>
          </h2>
          <p className="text-xl lg:text-2xl text-cyan-100 mb-10 leading-relaxed max-w-3xl mx-auto">
            Get in touch to arrange a friendly chat. We will help you design Home Help that fits your life.
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
              className="inline-flex items-center bg-white/10 backdrop-blur-sm hover:bg-white hover:text-teal-900 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 border border-white/20 min-h-11"
            >
              Request Home Help
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
      <RelatedServices services={relatedServicesMap['/services/home-help/']} />
    </div>
  )
}
