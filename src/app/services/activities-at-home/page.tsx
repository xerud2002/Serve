import { Metadata } from 'next'
import Link from 'next/link'
import {
  UserGroupIcon,
  PuzzlePieceIcon,
  HeartIcon,
  SparklesIcon,
  AdjustmentsHorizontalIcon,
  PhoneIcon,
  CheckIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  MapPinIcon,
  CalendarIcon,
  SunIcon
} from '@heroicons/react/24/outline'
import Breadcrumb from '@/components/Breadcrumb'
import RelatedServices from '@/components/RelatedServices'
import { relatedServicesMap } from '@/lib/relatedServicesData'

export const metadata: Metadata = {
  title: 'Activities at Home - SERVE | Companionship & Activity Support in Northamptonshire',
  description: 'One-to-one companionship and activity-based support at home across Northamptonshire. Cognitive stimulation, hobbies and social connection. Call 01933 315555.',
  keywords: 'activities at home, companionship, one-to-one support, cognitive stimulation, dementia activities, loneliness, social isolation, Northamptonshire, home activities',
  alternates: {
    canonical: '/services/activities-at-home',
  },
  openGraph: {
    title: 'Activities at Home - SERVE',
    description: 'Meaningful companionship and activity-based support to help people remain active and connected at home.',
    url: '/services/activities-at-home',
    type: 'website',
    images: [{
      url: '/images/community/bigchat2.webp',
      width: 1200,
      height: 630,
      alt: 'SERVE Activities at Home Service',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Activities at Home - SERVE',
    description: 'Companionship and activity-based support to help people remain active and connected at home.',
    images: ['/images/community/bigchat2.webp'],
  },
}

const supportCategories = [
  {
    title: 'One-to-One Companionship',
    summary: 'Providing friendly, regular visits to reduce loneliness and social isolation.',
    icon: UserGroupIcon,
    services: [
      'Friendly conversation',
      'Building meaningful relationships',
      'Emotional support',
      'Regular social contact'
    ]
  },
  {
    title: 'Home-Based Activities',
    summary: 'Supporting people to take part in activities they enjoy within their own home.',
    icon: SparklesIcon,
    services: [
      'Arts and crafts',
      'Accompanied walks',
      'Reading and discussion',
      'Plus many more hobbies and interests'
    ]
  },
  {
    title: 'Cognitive Stimulation',
    summary: 'Activities designed to keep minds active and engaged.',
    icon: PuzzlePieceIcon,
    services: [
      'Memory activities',
      'Word games',
      'Quizzes and puzzles',
      'Reminiscence sessions'
    ]
  },
  {
    title: 'Health & Wellbeing Support',
    summary: 'Encouraging positive wellbeing through meaningful engagement.',
    icon: HeartIcon,
    services: [
      'Confidence building',
      'Maintaining routines',
      'Promoting independence',
      'Emotional wellbeing'
    ]
  },
  {
    title: 'Flexible Personalised Support',
    summary: 'Activities tailored to individual preferences, abilities and goals.',
    icon: AdjustmentsHorizontalIcon,
    services: [
      'Person-centred approach',
      'Activity planning',
      'Support at your pace',
      'Flexible sessions'
    ]
  }
]

const benefits = [
  'Reduced loneliness and social isolation',
  'Increased confidence and wellbeing',
  'Meaningful social interaction',
  'Improved mental stimulation',
  'Support to maintain independence',
  'Activities tailored to personal interests',
  'Support to maintain mobility',
  'Enjoyment and a sense of purpose'
]

const process = [
  {
    step: '1',
    title: 'Contact Us',
    description: 'Get in touch to discuss your needs and the type of support you are looking for.'
  },
  {
    step: '2',
    title: 'Personal Planning',
    description: 'We will talk about interests, hobbies and goals to create a personalised activity plan.'
  },
  {
    step: '3',
    title: 'Enjoy Your Sessions',
    description: 'Regular visits will be arranged to provide engaging activities and meaningful companionship at home.'
  }
]

const suitableFor = [
  'Older adults',
  'People living with disabilities',
  'Individuals experiencing loneliness or isolation',
  'People unable to attend community groups',
  'People living with dementia or memory difficulties',
  'Family carers seeking additional support',
  'Anyone wishing to remain active and engaged at home'
]

const typicalActivities = [
  'Board games and card games',
  'Arts and crafts',
  'Reminiscence and life story work',
  'Reading and poetry',
  'Music and singing',
  'Gardening activities',
  'Baking and simple food preparation',
  'Gentle seated exercises',
  'Technology support',
  'Local interest and discussion sessions'
]

export default function ActivitiesAtHomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Activities at Home",
    "description": "Companionship and activity-based support helping people remain active, stimulated and connected in their own homes across Northamptonshire.",
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
    "serviceType": "Companionship and Activity Support Service"
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
              { label: 'Activities at Home' }
            ]}
          />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-24 bg-linear-to-br from-serve-blue-900 via-serve-blue-800 to-serve-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-serve-green-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 -left-40 w-80 h-80 bg-serve-blue-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute -bottom-20 right-1/4 w-72 h-72 bg-serve-teal-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-serve-orange-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
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
                <span className="bg-linear-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">Activities</span>{' '}
                <span className="bg-linear-to-r from-serve-green-300 via-serve-green-400 to-serve-green-300 bg-clip-text text-transparent">at Home</span>
              </h1>

              <p className="text-base md:text-lg lg:text-xl xl:text-2xl opacity-90 mb-4 leading-relaxed">
                Meaningful companionship and activity-based support to help people remain active and connected at home.
              </p>
              <p className="text-base md:text-lg opacity-80 mb-8 leading-relaxed">
                Every session is built around the person, their interests, life experiences and goals.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:01933315555"
                  className="inline-flex items-center justify-center whitespace-nowrap bg-serve-green-600 hover:bg-serve-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 min-h-11"
                >
                  <PhoneIcon className="w-6 h-6 mr-3" />
                  Call: 01933 315555
                </a>
                <Link
                  href="/contact/"
                  className="inline-flex items-center justify-center whitespace-nowrap bg-white/10 backdrop-blur-sm hover:bg-white hover:text-serve-blue-900 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 border border-white/20 min-h-11"
                >
                  Request Activities
                  <ArrowRightIcon className="ml-3 h-5 w-5" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <MapPinIcon className="w-12 h-12 mx-auto mb-4 text-serve-blue-200" />
                  <div className="font-bold text-lg mb-2">Across Northamptonshire</div>
                  <div className="text-sm opacity-80">Support in your own home</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <UserGroupIcon className="w-12 h-12 mx-auto mb-4 text-serve-blue-200" />
                  <div className="font-bold text-lg mb-2">One-to-One</div>
                  <div className="text-sm opacity-80">Dedicated companionship</div>
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <PuzzlePieceIcon className="w-12 h-12 mx-auto mb-4 text-serve-blue-200" />
                  <div className="font-bold text-lg mb-2">Keeping Minds Active</div>
                  <div className="text-sm opacity-80">Cognitive stimulation</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <CalendarIcon className="w-12 h-12 mx-auto mb-4 text-serve-blue-200" />
                  <div className="font-bold text-lg mb-2">Flexible Sessions</div>
                  <div className="text-sm opacity-80">At a pace that suits you</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-linear-to-r from-serve-green-100 to-serve-green-50 text-serve-green-800 px-5 py-2.5 rounded-full text-sm font-semibold mb-6 shadow-sm">
            Active and Connected at Home
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-linear-to-r from-serve-green-600 to-serve-teal-500 bg-clip-text text-transparent">Activities that matter,</span>{' '}
            <span className="bg-linear-to-r from-serve-blue-500 to-serve-teal-500 bg-clip-text text-transparent">where you feel at ease</span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
            Activities at Home offers meaningful companionship and activity-based support for people who would
            benefit from regular engagement without having to leave their home.
          </p>
        </div>
      </section>

      {/* How We Can Help */}
      <section className="py-20 lg:py-28 bg-linear-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-serve-green-100/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-serve-teal-100/50 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-linear-to-r from-serve-green-100 to-serve-green-50 text-serve-green-800 px-5 py-2.5 rounded-full text-sm font-semibold mb-6 shadow-sm">
              What We Help With
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-linear-to-r from-serve-green-600 to-serve-teal-500 bg-clip-text text-transparent">How Activities at Home</span>{' '}
              <span className="bg-linear-to-r from-serve-blue-500 to-serve-teal-500 bg-clip-text text-transparent">Can Help</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Companionship, stimulation and enjoyment, tailored to individual preferences, abilities and goals.
            </p>
          </div>

          {/* Negative-margin gutters let the final row of five cards centre */}
          <div className="flex flex-wrap justify-center -mx-4 mb-8">
            {supportCategories.map((category, index) => {
              const IconComponent = category.icon
              const gradients = [
                { bg: 'from-serve-green-50 to-emerald-50', icon: 'bg-serve-green-100', iconText: 'text-serve-green-600', border: 'border-serve-green-200' },
                { bg: 'from-serve-teal-50 to-cyan-50', icon: 'bg-serve-teal-100', iconText: 'text-serve-teal-600', border: 'border-serve-teal-200' },
                { bg: 'from-purple-50 to-violet-50', icon: 'bg-purple-100', iconText: 'text-purple-600', border: 'border-purple-200' },
                { bg: 'from-rose-50 to-pink-50', icon: 'bg-rose-100', iconText: 'text-rose-600', border: 'border-rose-200' },
                { bg: 'from-serve-blue-50 to-sky-50', icon: 'bg-serve-blue-100', iconText: 'text-serve-blue-600', border: 'border-serve-blue-200' },
              ]
              const colors = gradients[index % gradients.length]

              return (
                <div key={index} className="flex w-full flex-col px-4 pb-8 md:w-1/2 lg:w-1/3">
                  <div className={`group flex flex-1 flex-col bg-linear-to-br ${colors.bg} rounded-3xl p-8 border ${colors.border} hover:shadow-xl transition-all duration-500 hover:-translate-y-2`}>
                    <div className={`${colors.icon} rounded-2xl p-4 w-fit mb-6 group-hover:scale-110 transition-transform`}>
                      <IconComponent className={`w-8 h-8 ${colors.iconText}`} />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">{category.title}</h3>
                    <p className="text-sm text-gray-700 mb-5 leading-relaxed lg:min-h-17">{category.summary}</p>

                    <ul className="space-y-3">
                      {category.services.map((service, serviceIndex) => (
                        <li key={serviceIndex} className="flex items-start text-gray-700">
                          <CheckIcon className={`w-5 h-5 ${colors.iconText} mr-2 mt-0.5 shrink-0`} />
                          <span className="text-sm">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Benefits */}
          <div className="relative">
            <div className="absolute inset-0 bg-linear-to-r from-serve-green-500 to-serve-teal-600 rounded-3xl blur-xl opacity-20" />
            <div className="relative bg-linear-to-r from-serve-green-50 via-white to-serve-teal-50 rounded-3xl p-10 lg:p-14 border border-serve-green-100">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-10 text-center">
                <span className="bg-linear-to-r from-serve-green-600 to-serve-teal-600 bg-clip-text text-transparent">Benefits of Activities at Home</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-shadow border border-serve-green-100">
                    <div className="bg-linear-to-r from-serve-green-500 to-serve-teal-500 rounded-lg p-2 mr-3">
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

      {/* Our Approach */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-linear-to-r from-serve-teal-100 to-serve-teal-50 text-serve-teal-800 px-5 py-2.5 rounded-full text-sm font-semibold mb-6 shadow-sm">
            Our Approach
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
            <span className="bg-linear-to-r from-serve-green-600 to-serve-teal-500 bg-clip-text text-transparent">Built around</span>{' '}
            <span className="bg-linear-to-r from-serve-blue-500 to-serve-teal-500 bg-clip-text text-transparent">the person</span>
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            We understand that not everyone is able to access community groups or attend activities outside the
            home. Activities at Home provides personalised support that focuses on what matters most to each individual.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our team takes the time to get to know the person, their interests, life experiences and goals,
            creating enjoyable activities that promote wellbeing, independence and social connection in a
            familiar environment.
          </p>
        </div>
      </section>

      {/* Simple 3-Step Process */}
      <section className="py-16 lg:py-20 bg-linear-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-serve-green-100/50 rounded-full blur-3xl -translate-x-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-linear-to-r from-serve-green-100 to-serve-green-50 text-serve-green-800 px-5 py-2.5 rounded-full text-sm font-semibold mb-6 shadow-sm">
              How It Works
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-linear-to-r from-serve-green-600 to-serve-teal-500 bg-clip-text text-transparent">Simple</span>{' '}
              <span className="bg-linear-to-r from-serve-blue-500 to-serve-teal-500 bg-clip-text text-transparent">3-Step Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Getting started is easy, and we will shape the support around you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {process.map((item) => (
              <div key={item.step} className="bg-white rounded-3xl p-8 shadow-lg border border-serve-green-100 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="bg-linear-to-r from-serve-green-500 to-serve-teal-600 text-white w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-black mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Typical Activities */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-linear-to-r from-serve-teal-100 to-serve-teal-50 text-serve-teal-800 px-5 py-2.5 rounded-full text-sm font-semibold mb-6 shadow-sm">
              Activity Ideas
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-linear-to-r from-serve-green-600 to-serve-teal-500 bg-clip-text text-transparent">Typical Activities</span>{' '}
              <span className="bg-linear-to-r from-serve-blue-500 to-serve-teal-500 bg-clip-text text-transparent">Include</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {typicalActivities.map((activity, index) => (
              <div key={index} className="flex items-start bg-linear-to-r from-serve-teal-50 to-white rounded-2xl p-5 border border-serve-teal-100">
                <SparklesIcon className="w-6 h-6 text-serve-teal-600 mr-3 shrink-0" />
                <span className="text-gray-800 font-medium">{activity}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Suitable For */}
      <section className="py-16 lg:py-20 bg-linear-to-br from-slate-50 via-white to-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-linear-to-r from-serve-green-100 to-serve-green-50 text-serve-green-800 px-5 py-2.5 rounded-full text-sm font-semibold mb-6 shadow-sm">
              Who It Is For
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-linear-to-r from-serve-green-600 to-serve-teal-500 bg-clip-text text-transparent">Suitable</span>{' '}
              <span className="bg-linear-to-r from-serve-blue-500 to-serve-teal-500 bg-clip-text text-transparent">For</span>
            </h2>
          </div>

          {/* Negative-margin gutters let the odd final item centre */}
          <div className="flex flex-wrap justify-center -mx-2">
            {suitableFor.map((item, index) => (
              <div key={index} className="flex w-full flex-col px-2 pb-4 md:w-1/2">
                <div className="flex flex-1 items-start bg-white rounded-2xl p-5 border border-serve-green-100 shadow-sm">
                  <SunIcon className="w-6 h-6 text-serve-green-600 mr-3 shrink-0" />
                  <span className="text-gray-800 font-medium">{item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-serve-green-600 via-serve-teal-600 to-serve-green-700" />

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-linear-to-r from-white via-serve-green-100 to-white bg-clip-text text-transparent">Stay active, stay connected</span>
          </h2>
          <p className="text-xl lg:text-2xl text-serve-green-100 mb-10 leading-relaxed max-w-3xl mx-auto">
            Contact us to talk about interests, hobbies and goals, and we will create a personalised activity plan.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="tel:01933315555"
              className="inline-flex items-center bg-white text-serve-green-800 hover:bg-serve-green-50 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl min-h-11"
            >
              <PhoneIcon className="w-6 h-6 mr-3" />
              Call Now: 01933 315555
            </a>
            <Link
              href="/contact/"
              className="inline-flex items-center bg-white/10 backdrop-blur-sm hover:bg-white hover:text-serve-green-900 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 border border-white/20 min-h-11"
            >
              Request Activities at Home
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
      <RelatedServices services={relatedServicesMap['/services/activities-at-home/']} />
    </div>
  )
}
