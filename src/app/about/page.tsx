import Link from 'next/link'
import {
  HeartIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  TrophyIcon,
  PhoneIcon,
  ArrowRightIcon,
  MapPinIcon,
  ClockIcon,
  BuildingOffice2Icon,
  HandRaisedIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'
import { HeartIcon as HeartIconSolid, TrophyIcon as TrophyIconSolid } from '@heroicons/react/24/solid'

import { generateSEOMetadata, seoConfigs } from '@/lib/seo'

export const metadata = generateSEOMetadata(seoConfigs.about)

const milestones = [
  {
    year: '1980s',
    title: 'Founded',
    icon: HeartIcon
  },
  {
    year: '1990s',
    title: 'Expansion',
    icon: UserGroupIcon
  },
  {
    year: '2000s',
    title: 'CQC Registration',
    icon: ShieldCheckIcon
  },
  {
    year: '2010s',
    title: 'Ron Manning Centre',
    icon: BuildingOffice2Icon
  },
  {
    year: '2024',
    title: 'Award Winner',
    icon: TrophyIcon
  }
]

const values = [
  {
    title: 'Independence',
    description: 'We believe everyone should be able to live as independently as possible in their own home.',
    icon: HandRaisedIcon
  },
  {
    title: 'Dignity',
    description: 'Every person deserves to be treated with respect, dignity, and compassion.',
    icon: HeartIcon
  },
  {
    title: 'Quality',
    description: 'We maintain the highest standards in all our services through continuous improvement.',
    icon: TrophyIcon
  },
  {
    title: 'Community',
    description: 'Strong communities support each other - we foster connections and belonging.',
    icon: UserGroupIcon
  }
]

const team = [
  {
    role: 'Leadership',
    description: 'Experienced managers overseeing service delivery',
    count: '8'
  },
  {
    role: 'Care Staff',
    description: 'Trained professionals providing personal support',
    count: '25+'
  },
  {
    role: 'Transport Team',
    description: 'Professional drivers for community transport',
    count: '6'
  },
  {
    role: 'Volunteers',
    description: 'Community volunteers supporting our services',
    count: '50+'
  }
]

const leadership = [
  {
    name: 'Executive Team',
    role: 'Leadership & Strategy',
    department: 'Executive',
    bio: 'Our experienced executive team provides strategic direction and ensures SERVE delivers the highest quality care services.'
  },
  {
    name: 'Care Services',
    role: 'Service Delivery',
    department: 'Operations',
    bio: 'Our award-winning care team works tirelessly to provide compassionate, person-centered support to our clients.'
  },
  {
    name: 'Support Services',
    role: 'Community Programs',
    department: 'Community',
    bio: 'Our community services team coordinates volunteers, transport, and befriending programs across Northamptonshire.'
  }
]

const achievements = [
  {
    title: 'Great British Care Awards 2024',
    description: 'Winner - Best Homecare Team, East Midlands',
    year: '2024'
  },
  {
    title: '40+ Years of Trusted Service',
    description: 'Four decades of compassionate care in the Northamptonshire community',
    year: '1980-2024'
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-serve-blue-600 via-serve-blue-700 to-serve-green-600 text-white overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/api/placeholder/20/20')] opacity-5" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-400/10 rounded-full blur-3xl animate-pulse delay-700"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            {/* Award badge */}
            <div className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-md border border-white/30 rounded-full px-8 py-4 mb-12 shadow-2xl hover:scale-105 transition-transform">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-amber-300 via-yellow-400 to-orange-400 flex items-center justify-center shadow-lg">
                <TrophyIconSolid className="h-6 w-6 text-white" />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-yellow-200 uppercase tracking-wider">Award Winner 2024</div>
                <div className="text-sm font-extrabold text-white">Best Homecare Team, East Midlands</div>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-8 leading-tight px-4">
              <span className="block">40+ Years of</span>
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-yellow-200 via-yellow-100 to-white bg-clip-text text-transparent">
                  Compassionate Care
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-white rounded-full"></div>
              </span>
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-blue-50 max-w-4xl mx-auto leading-relaxed mb-16 px-4">
              We are an established registered charity in Northamptonshire providing a range of services to support 
              older people, people with disabilities and their carers on a daily basis.
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto px-4">
              {[
                { value: '40+', label: 'Years Serving', icon: '🏆', color: 'from-yellow-400 to-orange-400' },
                { value: '6', label: 'Core Services', icon: '💙', color: 'from-blue-400 to-cyan-400' },
                { value: 'CQC', label: 'Registered', icon: '✓', color: 'from-green-400 to-emerald-400' },
                { value: '1000+', label: 'Lives Touched', icon: '❤️', color: 'from-rose-400 to-pink-400' },
              ].map((stat, i) => (
                <div key={i} className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r opacity-75 group-hover:opacity-100 blur transition duration-300 rounded-2xl" style={{ background: `linear-gradient(to right, var(--tw-gradient-stops))` }}></div>
                  <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 md:p-6 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                    <div className="text-2xl md:text-4xl mb-1 md:mb-2">{stat.icon}</div>
                    <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-1 md:mb-2 bg-gradient-to-br from-white to-gray-100 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-xs md:text-sm text-blue-100 font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Side by Side Cards */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50 to-transparent opacity-50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Mission */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-serve-blue-400 to-serve-blue-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition duration-500"></div>
              <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 rounded-3xl p-12 h-full shadow-xl border border-blue-100 hover:shadow-2xl transition-shadow duration-300">
                <div className="inline-flex items-center justify-center h-20 w-20 rounded-2xl bg-gradient-to-br from-serve-blue-500 to-serve-blue-700 mb-8 shadow-xl transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <HeartIconSolid className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h3>
                <div className="h-1 w-20 bg-gradient-to-r from-serve-blue-600 to-serve-green-600 rounded-full mb-6"></div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To help adults who require support services to maintain their independence on a daily basis. 
                  We provide practical help, emotional support, and social connections that enable people to 
                  live safely and happily in their own homes.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-serve-green-400 to-serve-green-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition duration-500"></div>
              <div className="relative bg-gradient-to-br from-green-50 via-white to-green-50 rounded-3xl p-12 h-full shadow-xl border border-green-100 hover:shadow-2xl transition-shadow duration-300">
                <div className="inline-flex items-center justify-center h-20 w-20 rounded-2xl bg-gradient-to-br from-serve-green-500 to-serve-green-700 mb-8 shadow-xl transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <SparklesIcon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-4xl font-bold text-gray-900 mb-6">Our Vision</h3>
                <div className="h-1 w-20 bg-gradient-to-r from-serve-green-600 to-serve-blue-600 rounded-full mb-6"></div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  A compassionate community that fully respects the rights of older people and people with 
                  disabilities, where age and differing abilities are not barriers to opportunity, 
                  fulfilment and dignity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values - Icon Grid */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every decision we make and every service we provide is guided by these fundamental principles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <div key={index} className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-green-400 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-300"></div>
                  <div className="relative bg-white rounded-2xl p-8 h-full text-center shadow-lg hover:shadow-xl transition-shadow">
                    <div className="inline-flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br from-serve-blue-100 to-serve-blue-200 mb-6 group-hover:scale-110 transition-transform">
                      <IconComponent className="h-7 w-7 text-serve-blue-700" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>



      {/* Timeline - Compact Version */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600">
              Four decades of commitment to our community
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {milestones.map((milestone, index) => {
              const IconComponent = milestone.icon
              return (
                <div key={index} className="text-center group">
                  <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow mb-3">
                    <div className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-gradient-to-br from-serve-blue-100 to-serve-blue-200 mb-2">
                      <IconComponent className="h-5 w-5 text-serve-blue-700" />
                    </div>
                    <div className="text-lg font-bold bg-gradient-to-r from-serve-blue-600 to-serve-green-600 bg-clip-text text-transparent mb-1">
                      {milestone.year}
                    </div>
                    <h3 className="text-sm font-bold text-gray-900">{milestone.title}</h3>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team & Governance - Combined Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Dedicated professionals and volunteers committed to excellence
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {team.map((role, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl font-extrabold bg-gradient-to-r from-serve-blue-600 to-serve-green-600 bg-clip-text text-transparent mb-2">
                  {role.count}
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-2">{role.role}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{role.description}</p>
              </div>
            ))}
          </div>

          {/* Leadership Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {leadership.slice(0, 3).map((leader, i) => (
              <div key={i} className="bg-gradient-to-br from-serve-blue-50 to-white rounded-2xl p-6 shadow-lg border-2 border-serve-blue-100">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-serve-blue-500 to-serve-green-500 flex items-center justify-center mb-4">
                  <UserGroupIcon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{leader.name}</h3>
                <p className="text-sm font-semibold text-serve-blue-700 mb-3">{leader.role}</p>
                <p className="text-sm text-gray-600">{leader.bio}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-serve-blue-600 to-serve-green-600 rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Join Our Team</h3>
            <p className="text-lg text-blue-50 mb-6 max-w-2xl mx-auto">
              Whether you&apos;re looking for a rewarding career or want to volunteer, we&apos;d love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/volunteer"
                className="inline-flex items-center justify-center bg-white text-serve-blue-700 hover:bg-blue-50 px-6 py-3 rounded-lg font-bold transition-all"
              >
                <HeartIconSolid className="w-5 h-5 mr-2" />
                Volunteer With Us
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-6 py-3 rounded-lg font-bold transition-all border-2 border-white/30"
              >
                Career Opportunities
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>



      {/* Recognition & Awards */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Awards & Recognition
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 h-12 w-12 rounded-lg bg-gradient-to-br from-yellow-100 to-orange-100 flex items-center justify-center">
                    <TrophyIcon className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-bold text-gray-900">{achievement.title}</h3>
                      <span className="text-xs font-bold text-yellow-700 bg-yellow-100 px-2 py-1 rounded-full">
                        {achievement.year}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
            
            {/* CQC Registration Card */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="shrink-0 h-12 w-12 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <ShieldCheckIcon className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-bold text-gray-900">CQC Registered</h3>
                    <span className="text-xs font-bold text-blue-700 bg-blue-100 px-2 py-1 rounded-full">
                      Regulated
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">Our Home Care team is registered with the Care Quality Commission</p>
                  <a 
                    href="https://www.cqc.org.uk/location/1-2165219210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-serve-blue-600 hover:text-serve-blue-700 inline-flex items-center"
                  >
                    View Inspection Report
                    <ArrowRightIcon className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA - Simplified */}
      <section className="py-16 bg-serve-blue-600">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-blue-50 max-w-3xl mx-auto mb-8">
              Our Head Office is in Rushden, with a Day Centre in nearby Higham Ferrers and an office on Rushden High Street.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="tel:01933315555"
              className="inline-flex items-center justify-center bg-serve-green-600 hover:bg-serve-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all"
            >
              <PhoneIcon className="w-6 h-6 mr-3" />
              Call: 01933 315555
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-serve-blue-700 hover:bg-blue-50 px-8 py-4 rounded-xl font-bold text-lg transition-all"
            >
              Get In Touch
              <ArrowRightIcon className="ml-3 h-5 w-5" />
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-blue-100">
            <div className="flex items-center gap-2">
              <MapPinIcon className="w-4 h-4" />
              <span>8 West Street, Rushden, NN10 0RT</span>
            </div>
            <div className="hidden md:block">•</div>
            <div className="flex items-center gap-2">
              <ClockIcon className="w-4 h-4" />
              <span>Mon-Fri: 9am-5pm</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}