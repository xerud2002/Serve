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
      <section className="relative py-20 bg-linear-to-br from-serve-green-900 via-serve-green-800 to-serve-green-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-bold mb-8">
                <HeartIcon className="w-5 h-5 mr-2" />
                Join Our Caring Community
              </div>

              <MajorTitle primary="Volunteer with" secondary="SERVE" dark accentClass="text-serve-green-200" />
              
              <p className="text-xl lg:text-2xl opacity-90 mb-8 leading-relaxed">
                Make a meaningful difference in your community by volunteering with SERVE. 
                Help us support older people and adults with disabilities across Northamptonshire.
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
                  href="#volunteer-form"
                  className="inline-flex items-center bg-white/10 backdrop-blur-sm hover:bg-white hover:text-serve-green-900 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 border border-white/20"
                >
                  Apply to Volunteer
                  <ArrowRightIcon className="ml-3 h-5 w-5" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <UserGroupIcon className="w-12 h-12 mx-auto mb-4 text-serve-green-200" />
                  <div className="font-bold text-lg mb-2">200+ Volunteers</div>
                  <div className="text-sm opacity-80">Active community members</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <ClockIcon className="w-12 h-12 mx-auto mb-4 text-serve-green-200" />
                  <div className="font-bold text-lg mb-2">Flexible Hours</div>
                  <div className="text-sm opacity-80">Fit around your life</div>
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <AcademicCapIcon className="w-12 h-12 mx-auto mb-4 text-serve-green-200" />
                  <div className="font-bold text-lg mb-2">Full Training</div>
                  <div className="text-sm opacity-80">Comprehensive support</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <FaceSmileIcon className="w-12 h-12 mx-auto mb-4 text-serve-green-200" />
                  <div className="font-bold text-lg mb-2">Rewarding Work</div>
                  <div className="text-sm opacity-80">Make a real difference</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteering with SERVE - Social Impact */}
      <section className="py-16 bg-linear-to-br from-serve-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Volunteering with SERVE
            </h2>
            <p className="text-xl text-serve-blue-600 font-semibold">
              Serve&apos;s Social Impact
            </p>
          </div>

          {/* Social Impact Stats */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-bold text-serve-blue-700 mb-2">
                Overall Social Impact
              </h3>
              <p className="text-lg text-gray-600">April – October 2025</p>
            </div>

            {/* Key Stats */}
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="bg-linear-to-br from-serve-blue-50 to-blue-50 rounded-2xl p-6 text-center border border-serve-blue-100">
                <div className="text-sm font-semibold text-serve-blue-600 mb-2">✨ Total Volunteer Hours</div>
                <div className="text-4xl md:text-5xl font-bold text-serve-blue-700">11,815.5</div>
              </div>
              <div className="bg-linear-to-br from-serve-green-50 to-green-50 rounded-2xl p-6 text-center border border-serve-green-100">
                <div className="text-sm font-semibold text-serve-green-600 mb-2">✨ Total Social Value Generated</div>
                <div className="text-4xl md:text-5xl font-bold text-serve-green-700">£144,267.26</div>
                <div className="text-sm text-gray-500 mt-1">(approx.)</div>
              </div>
            </div>

            {/* Breakdown by Service */}
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-6 text-center">Breakdown by Service</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-serve-blue-600 text-white rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold mb-1">58.1%</div>
                  <div className="text-sm opacity-90">Community Transport Scheme</div>
                </div>
                <div className="bg-serve-red-500 text-white rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold mb-1">31.5%</div>
                  <div className="text-sm opacity-90">Befriending Service</div>
                </div>
                <div className="bg-serve-green-600 text-white rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold mb-1">7.62%</div>
                  <div className="text-sm opacity-90">Day Centre</div>
                </div>
                <div className="bg-serve-teal-500 text-white rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold mb-1">1.46%</div>
                  <div className="text-sm opacity-90">Trustees & Strategic Guidance</div>
                </div>
                <div className="bg-amber-500 text-white rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold mb-1">0.88%</div>
                  <div className="text-sm opacity-90">Fundraising Events</div>
                </div>
                <div className="bg-orange-500 text-white rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold mb-1">0.44%</div>
                  <div className="text-sm opacity-90">Community Engagement Events</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Volunteering Opportunities
            </h2>
          </div>

          <div className="space-y-8">
            {volunteerOpportunities.map((opportunity) => {
              const IconComponent = opportunity.icon
              const colorStyles: Record<string, { bg: string; iconBg: string; iconText: string; border: string }> = {
                blue: { bg: 'from-blue-50 to-white', iconBg: 'bg-blue-100', iconText: 'text-blue-600', border: 'border-blue-200' },
                green: { bg: 'from-serve-green-50 to-white', iconBg: 'bg-serve-green-100', iconText: 'text-serve-green-600', border: 'border-serve-green-200' },
                purple: { bg: 'from-purple-50 to-white', iconBg: 'bg-purple-100', iconText: 'text-purple-600', border: 'border-purple-200' },
                amber: { bg: 'from-amber-50 to-white', iconBg: 'bg-amber-100', iconText: 'text-amber-600', border: 'border-amber-200' },
                red: { bg: 'from-red-50 to-white', iconBg: 'bg-red-100', iconText: 'text-red-600', border: 'border-red-200' },
                teal: { bg: 'from-teal-50 to-white', iconBg: 'bg-teal-100', iconText: 'text-teal-600', border: 'border-teal-200' },
              }
              const colors = colorStyles[opportunity.color] || colorStyles.blue
              
              return (
                <div key={opportunity.id} className={`bg-linear-to-br ${colors.bg} rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border ${colors.border}`}>
                  <div className="flex items-start gap-6 mb-6">
                    <div className={`${colors.iconBg} rounded-xl p-4 flex-shrink-0`}>
                      <IconComponent className={`w-8 h-8 ${colors.iconText}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{opportunity.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{opportunity.description}</p>
                    </div>
                  </div>

                  <div className="ml-0 md:ml-20">
                    {opportunity.tasks && (
                      <div className="mb-6">
                        <ul className="space-y-3">
                          {opportunity.tasks.map((task, idx) => (
                            <li key={idx} className="flex items-start text-gray-700">
                              <CheckIcon className={`w-5 h-5 ${colors.iconText} mr-3 mt-0.5 shrink-0`} />
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

                    <p className="text-gray-600 italic bg-white/50 rounded-xl p-4 border border-gray-100">
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Volunteer with SERVE?
            </h2>
            <p className="text-xl text-gray-600">
              Discover the rewards and benefits of becoming a SERVE volunteer
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
                  <div className="bg-serve-blue-100 rounded-full p-4 w-fit mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-serve-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              How to Become a Volunteer
            </h2>
            <p className="text-xl text-gray-600">
              Our simple, supportive process to get you started as a SERVE volunteer
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => {
              const IconComponent = step.icon
              return (
                <div key={index} className="relative">
                  <div className="bg-gray-50 rounded-2xl p-8 text-center h-full">
                    <div className="bg-serve-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                      {step.step}
                    </div>
                    <div className="bg-serve-green-100 rounded-xl p-3 w-fit mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-serve-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
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
      <section className="py-20 bg-serve-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-10">
            Questions About Volunteering?
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="tel:01933315555"
              className="inline-flex items-center bg-serve-blue-600 hover:bg-serve-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105"
            >
              <PhoneIcon className="w-6 h-6 mr-3" />
              Call: 01933 315555
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center bg-white/10 backdrop-blur-sm hover:bg-white hover:text-serve-green-900 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 border border-white/20"
            >
              Send a Message
              <ArrowRightIcon className="ml-3 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}