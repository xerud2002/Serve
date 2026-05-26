import { Metadata } from 'next'
import Link from 'next/link'
import {
  HomeIcon,
  ClockIcon,
  UserGroupIcon,
  PhoneIcon,
  CheckIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  HeartIcon,
  TruckIcon,
  MusicalNoteIcon,
  PuzzlePieceIcon,
  CakeIcon,
  FaceSmileIcon
} from '@heroicons/react/24/outline'
import MajorTitle from '@/components/MajorTitle'
import Breadcrumb from '@/components/Breadcrumb'
import RelatedServices from '@/components/RelatedServices'
import { relatedServicesMap } from '@/lib/relatedServicesData'

export const metadata: Metadata = {
  title: 'Day Care Centre - SERVE | Ron Manning Day Centre Northamptonshire',
  description: 'Enjoy social activities, nutritious meals, and professional care at our friendly day centre. Transport included. Book your visit: 01933 315555.',
  keywords: 'day care, day centre, social activities, community care, Northamptonshire, elderly care',
  alternates: {
    canonical: '/services/day-care/',
  },
}

const activities = [
  {
    title: 'Social Activities',
    icon: UserGroupIcon,
    description: 'Group activities, games, and social interaction to combat loneliness',
    features: ['Group games and quizzes', 'Social clubs', 'Conversation groups', 'Community events']
  },
  {
    title: 'Creative Arts',
    icon: MusicalNoteIcon,
    description: 'Arts, crafts, and creative activities to stimulate mind and body',
    features: ['Arts and crafts', 'Music therapy', 'Painting and drawing', 'Creative workshops']
  },
  {
    title: 'Physical Activities',
    icon: HeartIcon,
    description: 'Gentle exercise and physical activities adapted to individual abilities',
    features: ['Chair exercises', 'Gentle movement', 'Garden activities']
  },
  {
    title: 'Mental Stimulation',
    icon: PuzzlePieceIcon,
    description: 'Cognitive activities to keep minds sharp and engaged',
    features: ['Memory games', 'Puzzles and quizzes', 'Reading groups', 'Discussion sessions']
  },
  {
    title: 'Nutritious Meals',
    icon: CakeIcon,
    description: 'Fresh, healthy meals prepared on-site with dietary requirements met',
    features: ['Hot daily meals', 'Special dietary needs', 'Fresh ingredients', 'Social dining']
  },
  
]

const benefits = [
  'Social interaction and friendship',
  'Nutritious meals and refreshments',
  'Stimulating activities and entertainment',
  'Transport to and from home for an additional charge',
  'Respite for family carers',
  'Learning new skills and hobbies',
  'Homely atmosphere',
  'Safe, welcoming environment'
]

export default function DayCarePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumb 
            items={[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: 'Day Care Centre' }
            ]}
          />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-24 bg-linear-to-br from-serve-green-900 via-serve-green-800 to-serve-green-900 text-white overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 -left-40 w-80 h-80 bg-serve-green-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute -bottom-20 right-1/4 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-orange-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
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
              <div className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold bg-linear-to-r from-amber-400 via-orange-400 to-amber-500 text-amber-900 shadow-lg shadow-amber-500/25 mb-8">
                <HomeIcon className="w-5 h-5 mr-2" />
                Ron Manning Day and Activity Centre
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-linear-to-r from-white via-green-100 to-white bg-clip-text text-transparent">Day Care</span>{' '}
                <span className="bg-linear-to-r from-amber-300 via-orange-400 to-amber-300 bg-clip-text text-transparent">Centre</span>
              </h1>
              
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl opacity-90 mb-8 leading-relaxed">
                A welcoming space where older adults can enjoy meaningful activities, good company, and friendly support at our Ron Manning Day and Activity Centre.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:01933315555"
                  className="inline-flex items-center bg-serve-blue-600 hover:bg-serve-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105"
                >
                  <PhoneIcon className="w-6 h-6 mr-3" />
                  Call: 01933 315555
                </a>
                <Link
                  href="/contact/"
                  className="inline-flex items-center bg-white/10 backdrop-blur-sm hover:bg-white hover:text-serve-green-900 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 border border-white/20"
                >
                  Visit Our Centre
                  <ArrowRightIcon className="ml-3 h-5 w-5" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <ClockIcon className="w-12 h-12 mx-auto mb-4 text-serve-green-200" />
                  <div className="font-bold text-lg mb-2">Mon,Wed,Fri</div>
                  <div className="text-sm opacity-80">10:00 AM - 3:00 PM</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <TruckIcon className="w-12 h-12 mx-auto mb-4 text-serve-green-200" />
                  <div className="font-bold text-lg mb-2">Transport</div>
                  <div className="text-sm opacity-80">Door-to-door service</div>
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <CakeIcon className="w-12 h-12 mx-auto mb-4 text-serve-green-200" />
                  <div className="font-bold text-lg mb-2">Fresh Meals</div>
                  <div className="text-sm opacity-80">Prepared daily on-site</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <FaceSmileIcon className="w-12 h-12 mx-auto mb-4 text-serve-green-200" />
                  <div className="font-bold text-lg mb-2">Meet new people</div>
                  <div className="text-sm opacity-80">Make lasting friendships</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Daily Activities & Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our day care centre offers a wide range of activities designed to keep you 
              active, engaged, and socially connected in a supportive community environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {activities.map((activity, index) => {
              const IconComponent = activity.icon
              const gradients = [
                { bg: 'from-emerald-50 to-green-50', icon: 'bg-emerald-100', iconText: 'text-emerald-600', border: 'border-emerald-200' },
                { bg: 'from-teal-50 to-cyan-50', icon: 'bg-teal-100', iconText: 'text-teal-600', border: 'border-teal-200' },
                { bg: 'from-lime-50 to-green-50', icon: 'bg-lime-100', iconText: 'text-lime-600', border: 'border-lime-200' },
                { bg: 'from-green-50 to-emerald-50', icon: 'bg-green-100', iconText: 'text-green-600', border: 'border-green-200' },
                { bg: 'from-cyan-50 to-teal-50', icon: 'bg-cyan-100', iconText: 'text-cyan-600', border: 'border-cyan-200' },
                { bg: 'from-emerald-50 to-teal-50', icon: 'bg-emerald-100', iconText: 'text-emerald-600', border: 'border-emerald-200' },
              ]
              const colors = gradients[index % gradients.length]
              
              return (
                <div key={index} className={`group bg-linear-to-br ${colors.bg} rounded-3xl p-8 border ${colors.border} hover:shadow-xl transition-all duration-500 hover:-translate-y-2`}>
                  <div className={`${colors.icon} rounded-2xl p-4 w-fit mb-6 group-hover:scale-110 transition-transform`}>
                    <IconComponent className={`w-8 h-8 ${colors.iconText}`} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{activity.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{activity.description}</p>
                  
                  <ul className="space-y-2">
                    {activity.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-gray-700">
                        <CheckIcon className={`w-5 h-5 ${colors.iconText} mr-2 mt-0.5 shrink-0`} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>

          {/* Benefits */}
          <div className="relative">
            <div className="absolute inset-0 bg-linear-to-r from-emerald-500 to-green-600 rounded-3xl blur-xl opacity-20" />
            <div className="relative bg-linear-to-r from-emerald-50 via-white to-green-50 rounded-3xl p-10 lg:p-14 border border-emerald-100">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-10 text-center">
                <span className="bg-linear-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">Benefits of Our Day Care Service</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-shadow border border-emerald-100">
                    <div className="bg-linear-to-r from-emerald-500 to-green-500 rounded-lg p-2 mr-3">
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

      {/* How to Join */}
      <section className="py-20 lg:py-28 bg-linear-to-br from-slate-50 via-white to-emerald-50/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-green-100/40 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center bg-linear-to-r from-emerald-100 to-green-50 text-emerald-700 px-5 py-2.5 rounded-full text-sm font-semibold mb-6 shadow-sm">
            Simple 3-Step Process
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            <span className="bg-linear-to-r from-emerald-500 to-green-600 bg-clip-text text-transparent">How to Join</span>{' '}
            <span className="text-gray-900">Our Day Care</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-emerald-100">
              <div className="bg-linear-to-r from-emerald-500 to-green-500 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Contact Us</h3>
              <p className="text-gray-600">Call us to discuss your needs and arrange a visit to our centre.</p>
            </div>
            
            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-teal-100">
              <div className="bg-linear-to-r from-teal-500 to-cyan-500 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Visit & Assess</h3>
              <p className="text-gray-600">Come for a trial day to experience our activities and meet our team.</p>
            </div>
            
            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-green-100">
              <div className="bg-linear-to-r from-green-500 to-emerald-500 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Join Community</h3>
              <p className="text-gray-600">Start your regular attendance and become part of our caring community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-linear-to-br from-emerald-600 via-green-600 to-teal-600 relative overflow-hidden">
        {/* Animated decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-400/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-green-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-5 py-2.5 rounded-full text-sm font-semibold mb-6">
            Join Our Community Today
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join Our <span className="text-emerald-200">Caring Community</span> Today
          </h2>
          <p className="text-xl opacity-90 mb-10 leading-relaxed max-w-2xl mx-auto">
            Experience the warmth and friendship of our day care centre. Contact us today 
            to arrange a visit and see how we can enrich your daily life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="tel:01933315555"
              className="inline-flex items-center bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              <PhoneIcon className="w-6 h-6 mr-3" />
              Call Now: 01933 315555
            </a>
            <Link
              href="/contact/"
              className="inline-flex items-center bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 border border-white/30"
            >
              Arrange a Visit
              <ArrowRightIcon className="ml-3 h-5 w-5" />
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20">
            <Link
              href="/services/"
              className="inline-flex items-center text-white/80 hover:text-white transition-colors group"
            >
              <ArrowLeftIcon className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <RelatedServices services={relatedServicesMap['/services/day-care/']} />
    </div>
  )
}