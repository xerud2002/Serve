import Link from 'next/link'
import VolunteerForm from '@/components/VolunteerForm'
import {
  HeartIcon,
  UserGroupIcon,
  ClockIcon,
  PhoneIcon,
  CheckIcon,
  ArrowRightIcon,
  HandRaisedIcon,
  TruckIcon,
  CalendarDaysIcon,
  AcademicCapIcon,
  ShieldCheckIcon,
  FaceSmileIcon,
  BuildingOfficeIcon,
  HomeModernIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'

import { generateSEOMetadata, seoConfigs } from '@/lib/seo'
import MajorTitle from '@/components/MajorTitle'

export const metadata = generateSEOMetadata(seoConfigs.volunteer)

const volunteerOpportunities = [
  {
    id: 'transport-office',
    title: 'Community Transport Office Assistant',
    icon: PhoneIcon,
    color: 'blue',
    description: 'Are you a friendly voice on the phone and enjoy helping others? We\'re looking for volunteers to join our busy Transport Office team and support with essential admin duties.',
    tasks: [
      'Answer and return calls from service users who\'ve booked medical journeys',
      'Confirm pick-up times and journey details with our amazing volunteer drivers',
      'Provide reassurance and keep everything running smoothly behind the scenes'
    ],
    commitment: '3-4 hours in the morning (9am–1pm) or afternoon (1pm–4.30pm), whatever works best for you.'
  },
  {
    id: 'transport-driver',
    title: 'Community Transport Volunteer Drivers',
    icon: TruckIcon,
    color: 'green',
    description: 'Could you spare a few hours a week to help someone get to a vital appointment or community activity? We\'re looking for volunteer drivers to join our friendly team and make a real difference in North Northamptonshire.',
    tasks: [
      'Your time behind the wheel can mean the world to someone',
      'Help people stay independent, connected, and supported',
      'Mileage costs are fully reimbursed'
    ],
    commitment: 'Be part of a warm, welcoming community of volunteers 🌟'
  },
  {
    id: 'day-centre',
    title: 'Day Centre Volunteers',
    icon: HomeModernIcon,
    color: 'purple',
    description: 'Join our wonderful team at Serve\'s Day Centre in Higham Ferrers! We\'re looking for kind, reliable volunteers to help make a real difference in people\'s lives.',
    tasks: [
      'Volunteer Minibus Drivers – A current MIDAS certificate would be fantastic!',
      'Meals on Wheels Drivers – Delivering not just meals but smiles and companionship',
      'Day Centre Volunteers – Be part of our warm, welcoming team supporting older people'
    ],
    commitment: 'Our Day Centre is a truly special place, full of laughter, friendship, and care. Volunteers are at the heart of it all.'
  },
  {
    id: 'trustees',
    title: 'Trustees',
    icon: ShieldCheckIcon,
    color: 'amber',
    description: 'We are looking for people who might be interested in becoming trustees for our charity. Trustees are responsible for the strategic direction of the charity; no experience is necessary and training will be given.',
    tasks: [
      'Attend monthly board meetings',
      'Help with strategic direction and governance',
      'Make a real difference to improving quality of life for people in your community',
      'Develop your own professional skill set'
    ],
    commitment: 'We\'re especially looking for people with leadership aspirations or experience, particularly in finance and HR.'
  },
  {
    id: 'befriending',
    title: 'Befriending Volunteer',
    icon: HeartIcon,
    color: 'red',
    description: 'SERVE\'s Befriending Service – Because No One Should Feel Alone 💙 Loneliness and isolation affect so many older people, but our Befriending Service is here to change that.',
    tasks: [
      'Weekly visits or phone calls offering companionship and conversation',
      'Being a friendly face to those who may not have a support network',
      'Building genuine, long-lasting friendships based on shared interests',
      'Boosting wellbeing, independence, and happiness'
    ],
    commitment: 'It\'s about more than just a chat; it\'s about creating connections that truly matter. 🌟'
  },
  {
    id: 'events',
    title: 'Event Setup & Pack Down Hero',
    icon: CalendarDaysIcon,
    color: 'teal',
    description: 'Make a Difference Behind the Scenes! Do you enjoy being hands-on and part of a team that brings community events to life? Your support ensures we can raise vital funds to keep our services running.',
    tasks: [
      'Putting up gazebos and stalls',
      'Setting up tables, displays, and decorations',
      'Packing away equipment at the end of the event',
      'Working alongside a fun, supportive team'
    ],
    requirements: [
      'Comfortable with lifting and carrying (e.g., gazebos, tables)',
      'Team player with a positive attitude',
      'Reliable and punctual',
      'Practical and safety conscious'
    ],
    commitment: 'No experience needed – we\'ll show you everything you need to know!'
  }
]

const benefits = [
  {
    title: 'Make a Real Difference',
    description: 'Your time and skills directly improve the lives of vulnerable people in your community.',
    icon: HeartIcon
  },
  {
    title: 'Develop New Skills',
    description: 'Gain valuable experience and develop new skills through training and hands-on experience.',
    icon: AcademicCapIcon
  },
  {
    title: 'Meet Like-Minded People',
    description: 'Join a team of caring, dedicated volunteers and make lasting friendships.',
    icon: UserGroupIcon
  },
  {
    title: 'Flexible Commitment',
    description: 'Choose volunteer opportunities that fit your schedule and availability.',
    icon: ClockIcon
  },
  {
    title: 'Full Support & Training',
    description: 'We provide comprehensive training, ongoing support, and regular supervision.',
    icon: ShieldCheckIcon
  },
  {
    title: 'Personal Satisfaction',
    description: 'Experience the joy and fulfillment that comes from helping others and giving back.',
    icon: FaceSmileIcon
  }
]

const process = [
  {
    step: 1,
    title: 'Get in Touch',
    description: 'Contact us to express your interest and discuss volunteer opportunities that suit you.',
    icon: PhoneIcon
  },
  {
    step: 2,
    title: 'Informal Chat',
    description: 'Meet with our team for an informal discussion about your interests and availability.',
    icon: HeartIcon
  },
  {
    step: 3,
    title: 'Application & References',
    description: 'Complete our volunteer application form and provide two references.',
    icon: CheckIcon
  },
  {
    step: 4,
    title: 'DBS Check',
    description: 'We arrange a DBS check (criminal background check) - this is free for volunteers.',
    icon: ShieldCheckIcon
  },
  {
    step: 5,
    title: 'Training & Induction',
    description: 'Receive comprehensive training and induction specific to your volunteer role.',
    icon: AcademicCapIcon
  },
  {
    step: 6,
    title: 'Start Volunteering',
    description: 'Begin your volunteer work with ongoing support from our experienced team.',
    icon: HandRaisedIcon
  }
]

export default function VolunteerPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-linear-to-br from-serve-green-900 via-serve-green-800 to-serve-green-900 text-white overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 -left-40 w-80 h-80 bg-serve-green-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute -bottom-20 right-1/4 w-72 h-72 bg-serve-blue-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-rose-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
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
              <div className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold bg-linear-to-r from-yellow-400 via-amber-400 to-yellow-500 text-yellow-900 shadow-lg shadow-yellow-500/25 mb-8">
                <HeartIcon className="w-5 h-5 mr-2" />
                Join Our Caring Community
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-linear-to-r from-white via-green-100 to-white bg-clip-text text-transparent">Volunteer</span>{' '}
                <span className="bg-linear-to-r from-yellow-300 via-amber-400 to-yellow-300 bg-clip-text text-transparent">with SERVE</span>
              </h1>
              
              <p className="text-xl lg:text-2xl opacity-90 mb-8 leading-relaxed">
                Make a meaningful difference in your community by volunteering with SERVE. 
                Help us support older people and adults with disabilities across Northamptonshire.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href="tel:01933315555"
                  className="inline-flex items-center justify-center bg-serve-blue-600 hover:bg-serve-blue-700 text-white px-6 sm:px-8 py-4 min-h-[52px] rounded-xl font-bold text-base sm:text-lg transition-all duration-300 transform hover:scale-105"
                >
                  <PhoneIcon className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                  Call: 01933 315555
                </a>
                <Link
                  href="#volunteer-form"
                  className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm hover:bg-white hover:text-serve-green-900 text-white px-6 sm:px-8 py-4 min-h-[52px] rounded-xl font-bold text-base sm:text-lg transition-all duration-300 border border-white/20"
                >
                  Apply to Volunteer
                  <ArrowRightIcon className="ml-2 sm:ml-3 h-5 w-5" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-6">
              <div className="space-y-3 sm:space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center">
                  <UserGroupIcon className="w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-4 text-serve-green-200" />
                  <div className="font-bold text-sm sm:text-lg mb-1 sm:mb-2">200+ Volunteers</div>
                  <div className="text-xs sm:text-sm opacity-80">Active community members</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center">
                  <ClockIcon className="w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-4 text-serve-green-200" />
                  <div className="font-bold text-sm sm:text-lg mb-1 sm:mb-2">Flexible Hours</div>
                  <div className="text-xs sm:text-sm opacity-80">Fit around your life</div>
                </div>
              </div>
              <div className="space-y-3 sm:space-y-6 pt-6 sm:pt-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center">
                  <AcademicCapIcon className="w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-4 text-serve-green-200" />
                  <div className="font-bold text-sm sm:text-lg mb-1 sm:mb-2">Full Training</div>
                  <div className="text-xs sm:text-sm opacity-80">Comprehensive support</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center">
                  <FaceSmileIcon className="w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-4 text-serve-green-200" />
                  <div className="font-bold text-sm sm:text-lg mb-1 sm:mb-2">Rewarding Work</div>
                  <div className="text-xs sm:text-sm opacity-80">Make a real difference</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteering with SERVE - Social Impact */}
      <section className="py-20 lg:py-28 bg-linear-to-br from-serve-blue-50 via-white to-cyan-50/30 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-serve-blue-100/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-100/50 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-linear-to-r from-serve-blue-100 to-cyan-50 text-serve-blue-800 px-5 py-2.5 rounded-full text-sm font-semibold mb-6 shadow-sm">
              Making A Difference
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-linear-to-r from-serve-blue-600 to-cyan-500 bg-clip-text text-transparent">Volunteering with SERVE</span>
            </h2>
            <p className="text-xl text-serve-blue-600 font-semibold">
              Serve&apos;s Social Impact
            </p>
          </div>

          {/* Social Impact Stats */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-serve-blue-100">
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                <span className="bg-linear-to-r from-serve-blue-600 to-cyan-500 bg-clip-text text-transparent">Overall Social Impact</span>
              </h3>
              <p className="text-lg text-gray-600">April – October 2025</p>
            </div>

            {/* Key Stats */}
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="group bg-linear-to-br from-serve-blue-50 via-white to-cyan-50 rounded-3xl p-8 text-center border border-serve-blue-100 hover:shadow-lg transition-all">
                <div className="text-sm font-semibold text-serve-blue-600 mb-2">✨ Total Volunteer Hours</div>
                <div className="text-5xl md:text-6xl font-bold bg-linear-to-r from-serve-blue-600 to-cyan-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform inline-block">11,815.5</div>
              </div>
              <div className="group bg-linear-to-br from-serve-green-50 via-white to-emerald-50 rounded-3xl p-8 text-center border border-serve-green-100 hover:shadow-lg transition-all">
                <div className="text-sm font-semibold text-serve-green-600 mb-2">✨ Total Social Value Generated</div>
                <div className="text-5xl md:text-6xl font-bold bg-linear-to-r from-serve-green-600 to-emerald-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform inline-block">£144,268</div>
                <div className="text-sm text-gray-500 mt-1">(approx.)</div>
              </div>
            </div>

            {/* Breakdown by Service */}
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-6 text-center">Breakdown by Service</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                <div className="bg-linear-to-r from-serve-blue-600 to-serve-blue-700 text-white rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all">
                  <div className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2">58.1%</div>
                  <div className="text-xs sm:text-sm opacity-90 leading-tight">Community Transport Scheme</div>
                </div>
                <div className="bg-linear-to-r from-rose-500 to-red-600 text-white rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all">
                  <div className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2">31.5%</div>
                  <div className="text-xs sm:text-sm opacity-90 leading-tight">Befriending Service</div>
                </div>
                <div className="bg-linear-to-r from-serve-green-500 to-emerald-600 text-white rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all">
                  <div className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2">7.62%</div>
                  <div className="text-xs sm:text-sm opacity-90 leading-tight">Day Centre</div>
                </div>
                <div className="bg-linear-to-r from-teal-500 to-cyan-600 text-white rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all">
                  <div className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2">1.46%</div>
                  <div className="text-xs sm:text-sm opacity-90 leading-tight">Trustees & Strategic</div>
                </div>
                <div className="bg-linear-to-r from-amber-500 to-orange-600 text-white rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all">
                  <div className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2">0.88%</div>
                  <div className="text-xs sm:text-sm opacity-90 leading-tight">Fundraising Events</div>
                </div>
                <div className="bg-linear-to-r from-orange-500 to-red-500 text-white rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all">
                  <div className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2">0.44%</div>
                  <div className="text-xs sm:text-sm opacity-90 leading-tight">Community Events</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-serve-green-100/30 rounded-full blur-3xl translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-linear-to-r from-serve-green-100 to-emerald-50 text-serve-green-800 px-5 py-2.5 rounded-full text-sm font-semibold mb-6 shadow-sm">
              Find Your Role
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-linear-to-r from-serve-green-600 to-emerald-500 bg-clip-text text-transparent">Volunteering Opportunities</span>
            </h2>
          </div>

          <div className="space-y-8">
            {volunteerOpportunities.map((opportunity) => {
              const IconComponent = opportunity.icon
              const colorStyles: Record<string, { bg: string; iconBg: string; iconText: string; border: string; gradient: string }> = {
                blue: { bg: 'from-serve-blue-50 to-cyan-50', iconBg: 'from-serve-blue-500 to-cyan-500', iconText: 'text-white', border: 'border-serve-blue-200', gradient: 'from-serve-blue-600 to-cyan-500' },
                green: { bg: 'from-serve-green-50 to-emerald-50', iconBg: 'from-serve-green-500 to-emerald-500', iconText: 'text-white', border: 'border-serve-green-200', gradient: 'from-serve-green-600 to-emerald-500' },
                purple: { bg: 'from-purple-50 to-violet-50', iconBg: 'from-purple-500 to-violet-500', iconText: 'text-white', border: 'border-purple-200', gradient: 'from-purple-600 to-violet-500' },
                amber: { bg: 'from-amber-50 to-orange-50', iconBg: 'from-amber-500 to-orange-500', iconText: 'text-white', border: 'border-amber-200', gradient: 'from-amber-600 to-orange-500' },
                red: { bg: 'from-rose-50 to-red-50', iconBg: 'from-rose-500 to-red-500', iconText: 'text-white', border: 'border-rose-200', gradient: 'from-rose-600 to-red-500' },
                teal: { bg: 'from-teal-50 to-cyan-50', iconBg: 'from-teal-500 to-cyan-500', iconText: 'text-white', border: 'border-teal-200', gradient: 'from-teal-600 to-cyan-500' },
              }
              const colors = colorStyles[opportunity.color] || colorStyles.blue
              
              return (
                <div key={opportunity.id} className={`group bg-linear-to-br ${colors.bg} rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border ${colors.border}`}>
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-4 sm:mb-6">
                    <div className={`bg-linear-to-r ${colors.iconBg} rounded-xl sm:rounded-2xl p-3 sm:p-4 shrink-0 group-hover:scale-110 transition-transform shadow-lg`}>
                      <IconComponent className={`w-6 h-6 sm:w-8 sm:h-8 ${colors.iconText}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
                        <span className={`bg-linear-to-r ${colors.gradient} bg-clip-text text-transparent`}>{opportunity.title}</span>
                      </h3>
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{opportunity.description}</p>
                    </div>
                  </div>

                  <div className="ml-0 sm:ml-16 md:ml-20">
                    {opportunity.tasks && (
                      <div className="mb-6">
                        <ul className="space-y-3">
                          {opportunity.tasks.map((task, idx) => (
                            <li key={idx} className="flex items-start text-gray-700">
                              <CheckIcon className={`w-5 h-5 mr-3 mt-0.5 shrink-0`} style={{ color: opportunity.color === 'blue' ? '#0284c7' : opportunity.color === 'green' ? '#16a34a' : opportunity.color === 'purple' ? '#9333ea' : opportunity.color === 'amber' ? '#d97706' : opportunity.color === 'red' ? '#dc2626' : '#0891b2' }} />
                              <span>{task}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {opportunity.requirements && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Skills & Attributes We&apos;re Looking For:</h4>
                        <ul className="space-y-2">
                          {opportunity.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-start text-gray-700">
                              <CheckIcon className="w-5 h-5 text-serve-blue-600 mr-3 mt-0.5 shrink-0" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <p className="text-gray-600 italic bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
                      {opportunity.commitment}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-28 bg-linear-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-serve-green-100/40 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-amber-100/40 rounded-full blur-3xl translate-x-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-linear-to-r from-amber-100 to-yellow-50 text-amber-800 px-5 py-2.5 rounded-full text-sm font-semibold mb-6 shadow-sm">
              The Benefits
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-linear-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">Why Volunteer with SERVE?</span>
            </h2>
            <p className="text-xl text-gray-600">
              Discover the rewards and benefits of becoming a SERVE volunteer
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              const gradients = [
                { bg: 'from-serve-blue-50 to-cyan-50', iconBg: 'from-serve-blue-500 to-cyan-500', border: 'border-serve-blue-200' },
                { bg: 'from-serve-green-50 to-emerald-50', iconBg: 'from-serve-green-500 to-emerald-500', border: 'border-serve-green-200' },
                { bg: 'from-purple-50 to-violet-50', iconBg: 'from-purple-500 to-violet-500', border: 'border-purple-200' },
                { bg: 'from-amber-50 to-orange-50', iconBg: 'from-amber-500 to-orange-500', border: 'border-amber-200' },
                { bg: 'from-rose-50 to-red-50', iconBg: 'from-rose-500 to-red-500', border: 'border-rose-200' },
                { bg: 'from-teal-50 to-cyan-50', iconBg: 'from-teal-500 to-cyan-500', border: 'border-teal-200' },
              ]
              const colors = gradients[index % gradients.length]
              
              return (
                <div key={index} className={`group bg-linear-to-br ${colors.bg} rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-lg text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border ${colors.border}`}>
                  <div className={`bg-linear-to-r ${colors.iconBg} rounded-xl sm:rounded-2xl p-3 sm:p-4 w-fit mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                    <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-4">{benefit.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-serve-green-100/30 rounded-full blur-3xl -translate-x-1/2" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-linear-to-r from-serve-green-100 to-emerald-50 text-serve-green-800 px-5 py-2.5 rounded-full text-sm font-semibold mb-6 shadow-sm">
              Simple 6-Step Process
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-linear-to-r from-serve-green-600 to-emerald-500 bg-clip-text text-transparent">How to Become a Volunteer</span>
            </h2>
            <p className="text-xl text-gray-600">
              Our simple, supportive process to get you started as a SERVE volunteer
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {process.map((step, index) => {
              const gradients = [
                { bg: 'from-serve-green-50 to-emerald-50', stepBg: 'from-serve-green-600 to-emerald-600', border: 'border-serve-green-200' },
                { bg: 'from-teal-50 to-cyan-50', stepBg: 'from-teal-600 to-cyan-600', border: 'border-teal-200' },
                { bg: 'from-serve-blue-50 to-cyan-50', stepBg: 'from-serve-blue-600 to-cyan-600', border: 'border-serve-blue-200' },
                { bg: 'from-purple-50 to-violet-50', stepBg: 'from-purple-600 to-violet-600', border: 'border-purple-200' },
                { bg: 'from-amber-50 to-orange-50', stepBg: 'from-amber-600 to-orange-600', border: 'border-amber-200' },
                { bg: 'from-lime-50 to-green-50', stepBg: 'from-lime-600 to-green-600', border: 'border-lime-200' },
              ]
              const colors = gradients[index % gradients.length]
              
              return (
                <div key={index} className="relative">
                  <div className={`group bg-linear-to-br ${colors.bg} rounded-2xl sm:rounded-3xl p-5 sm:p-8 h-full border ${colors.border} hover:shadow-xl transition-all duration-500 hover:-translate-y-2 relative`}>
                    <div className={`absolute top-4 sm:top-6 right-4 sm:right-6 bg-linear-to-r ${colors.stepBg} text-white rounded-xl sm:rounded-2xl w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center text-xl sm:text-2xl font-black shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      {step.step}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 pr-12 sm:pr-16">{step.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                  
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                      <ArrowRightIcon className="w-6 h-6 text-serve-green-400" />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <VolunteerForm />

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-linear-to-br from-serve-green-600 via-serve-green-700 to-emerald-700 text-white relative overflow-hidden">
        {/* Animated decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-serve-green-400/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-emerald-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-5 py-2.5 rounded-full text-sm font-semibold mb-6">
            We&apos;re Here To Help
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-10">
            Questions About <span className="text-emerald-200">Volunteering?</span>
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4 sm:px-0">
            <a
              href="tel:01933315555"
              className="inline-flex items-center justify-center bg-white text-serve-green-700 hover:bg-serve-green-50 px-6 sm:px-8 py-4 min-h-[52px] rounded-xl font-bold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              <PhoneIcon className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
              Call: 01933 315555
            </a>
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-6 sm:px-8 py-4 min-h-[52px] rounded-xl font-bold text-base sm:text-lg transition-all duration-300 border border-white/30"
            >
              Send a Message
              <ArrowRightIcon className="ml-2 sm:ml-3 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}