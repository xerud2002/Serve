"use client"

import Link from 'next/link'
import Image from 'next/image'
import {
  HeartIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  TrophyIcon,
  PhoneIcon,
  ArrowRightIcon,
  DocumentTextIcon,
  SparklesIcon,
  HandRaisedIcon,
  GlobeAltIcon,
  CheckBadgeIcon
} from '@heroicons/react/24/outline'
import MajorTitle from '@/components/MajorTitle'

// Note: This page needs to be a client component for the interactive trustee sections
// SEO metadata is defined in the parent layout or can be added via generateMetadata in future refactor

const teamMembers = [
  {
    name: 'Tony Gibbs',
    role: 'Chief Executive Officer',
    image: '/images/team/Tony2.webp',
    description: 'Leading organisational strategy and operations'
  }
]

const managementTeam = [
  {
    name: 'Louise Wiltshire',
    role: 'Executive Assistant',
    image: '/images/team/Louise.webp'
  },
  {
    name: 'Sam Horne',
    role: 'Registered Care Manager',
    image: '/images/team/Sam.webp'
  },
  {
    name: 'Cheryl Smith',
    role: 'Befriending Manager',
    image: '/images/team/Cheryl.webp'
  },
  {
    name: 'Mario Brown',
    role: 'Policy and Compliance Manager',
    image: '/images/team/Mario.webp'
  },
  {
    name: 'Emily Lennox',
    role: 'Finance Manager',
    image: '/images/team/Emily.webp'
  },
  {
    name: 'Sean Silver',
    role: 'Project Manager',
    image: '/images/team/Sean.webp'
  },
  {
    name: 'Kerry Redman',
    role: 'Deputy Care Manager',
    image: '/images/team/Kerry.webp'
  }
]

const trustees = [
  {
    name: 'Anita Harvey',
    role: 'Director / Chair',
    image: '', // Add photo path: '/images/trustees/anita.webp'
    dateAppointed: 'January 2024',
    expertise: 'Board Leadership & Governance'
  },
  {
    name: 'Zara Cunliffe',
    role: 'Director / Deputy Chair',
    image: '', // Add photo path: '/images/trustees/zara.webp'
    dateAppointed: 'April 2016',
    expertise: 'Legal & Compliance'
  },
  {
    name: 'Jess Bermudez',
    role: 'Director / Trustee',
    image: '', // Add photo path: '/images/trustees/jess.webp'
    dateAppointed: 'July 2019',
    expertise: 'Heritage & Community'
  },
  {
    name: 'Mike Huland',
    role: 'Director / Trustee',
    image: '', // Add photo path: '/images/trustees/mike.webp'
    dateAppointed: 'September 2025',
    expertise: 'Strategic Development'
  },
  {
    name: 'Jimmy James',
    role: 'Director / Trustee',
    image: '', // Add photo path: '/images/trustees/jimmy.webp'
    dateAppointed: 'July 2019',
    expertise: 'Heritage & Community'
  },
  {
    name: 'Rachel Wilson',
    role: 'Director / Trustee',
    image: '', // Add photo path: '/images/trustees/rachel.webp'
    dateAppointed: 'January 2024',
    expertise: 'Community & Social Care'
  },
]

const values = [
  {
    title: 'Empowerment',
    description: 'We believe in enabling people to take control of their own lives, building confidence, skills, and independence.',
    icon: SparklesIcon,
    color: 'blue'
  },
  {
    title: 'Respect',
    description: 'We treat every individual with dignity, fairness, and appreciation for their unique contributions.',
    icon: HandRaisedIcon,
    color: 'green'
  },
  {
    title: 'Inclusion',
    description: 'We welcome diversity and ensure that everyone has equal access, voice, and opportunity.',
    icon: GlobeAltIcon,
    color: 'purple'
  },
  {
    title: 'Integrity',
    description: 'We are honest, transparent, and accountable in all that we do, earning trust through our actions.',
    icon: CheckBadgeIcon,
    color: 'amber'
  },
  {
    title: 'Care',
    description: 'We provide thoughtful, compassionate support that puts people\'s wellbeing at the centre of our work.',
    icon: HeartIcon,
    color: 'red'
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-linear-to-br from-serve-blue-900 via-serve-blue-800 to-serve-blue-900 text-white overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-serve-green-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 -left-40 w-80 h-80 bg-serve-blue-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute -bottom-20 right-1/4 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
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
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold bg-linear-to-r from-yellow-400 via-amber-400 to-yellow-500 text-yellow-900 shadow-lg shadow-yellow-500/25 mb-8">
              <TrophyIcon className="w-5 h-5 mr-2" />
              Award-Winning Care Since 1980s
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-linear-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">About</span>{' '}
              <span className="bg-linear-to-r from-serve-green-300 via-serve-green-400 to-serve-green-300 bg-clip-text text-transparent">SERVE</span>
            </h1>
            
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-blue-100/90 leading-relaxed">
              For over 40 years, SERVE has been providing award-winning care services to help older people, 
             adults with disabilities and their carers maintain their independence across Northamptonshire.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 lg:py-28 bg-linear-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-serve-blue-100/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-100/50 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-linear-to-r from-serve-blue-100 to-cyan-50 text-serve-blue-800 px-5 py-2.5 rounded-full text-sm font-semibold mb-6 shadow-sm">
                40+ Years of Excellence
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-linear-to-r from-serve-blue-600 to-cyan-500 bg-clip-text text-transparent">Our Story</span>
              </h2>
              <p className="text-lg text-gray-600">
                Four decades of compassionate care and community support
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-serve-blue-100">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Since the 1980s, SERVE has been a cornerstone of care in Northamptonshire, born from a simple 
                  yet powerful vision: to ensure that older people and adults with disabilities can live with 
                  dignity, independence, and joy in their own homes and communities.
                </p>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  What began as a small voluntary initiative has grown into an award-winning charity providing 
                  comprehensive care services across the county. Our journey has been shaped by the thousands 
                  of individuals we have had the privilege to support, each with their own unique story, challenges, 
                  and dreams.
                </p>

                <div className="bg-linear-to-r from-serve-blue-50 via-white to-cyan-50 rounded-2xl p-6 my-8 border-l-4 border-serve-blue-600">
                  <p className="text-gray-800 italic leading-relaxed">
                    &quot;Every day, our dedicated team works tirelessly to make a real difference in people&apos;s lives. 
                    Whether it&apos;s helping someone maintain their independence through personal care, connecting 
                    isolated individuals through our befriending service, or ensuring safe transport to vital 
                    appointments. We&apos;re here because we genuinely care.&quot;
                  </p>
                  <p className="text-sm text-serve-blue-700 font-semibold mt-4">
                    Tony Gibbs, Chief Executive Officer
                  </p>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Our success is not measured in numbers alone, though we are proud to serve hundreds of people 
                  each year. It is measured in the smiles of our service users, the relief of family members who 
                  know their loved ones are in safe hands, and the strengthened bonds within our community.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  From our CQC-registered homecare services to our vibrant Ron Manning Day and Activity Centre, 
                  from our reliable community transport to our countywide befriending programme. Every service 
                  we provide is built on the foundation of respect, compassion, and excellence.
                </p>

                {/* Stats Grid */}
                <div className="my-8 space-y-4">
                  {/* Row 1: Service Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-6 bg-linear-to-br from-serve-blue-50 via-white to-cyan-50 rounded-2xl border border-serve-blue-100 hover:shadow-lg transition-shadow group">
                      <div className="text-4xl font-bold bg-linear-to-r from-serve-blue-600 to-cyan-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform inline-block">40+</div>
                      <p className="text-sm font-semibold text-gray-700">Years of Service</p>
                    </div>
                    <div className="text-center p-6 bg-linear-to-br from-serve-green-50 via-white to-emerald-50 rounded-2xl border border-serve-green-100 hover:shadow-lg transition-shadow group">
                      <div className="text-4xl font-bold bg-linear-to-r from-serve-green-600 to-emerald-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform inline-block">1000s</div>
                      <p className="text-sm font-semibold text-gray-700">Lives Touched</p>
                    </div>
                  </div>
                  
                  {/* Row 2: Awards */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-5 bg-linear-to-br from-yellow-50 via-white to-amber-50 rounded-2xl border border-yellow-200 hover:shadow-lg transition-shadow group">
                      <div className="text-3xl font-bold bg-linear-to-r from-yellow-600 to-amber-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform inline-block">2024</div>
                      <p className="text-sm font-semibold text-gray-700">Award Winner</p>
                    </div>
                    <div className="text-center p-5 bg-linear-to-br from-amber-50 via-white to-orange-50 rounded-2xl border border-amber-200 hover:shadow-lg transition-shadow group">
                      <div className="text-3xl font-bold bg-linear-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform inline-block">2025</div>
                      <p className="text-sm font-semibold text-gray-700">Highly Commended</p>
                    </div>
                    <div className="text-center p-5 bg-linear-to-br from-orange-50 via-white to-red-50 rounded-2xl border border-orange-200 hover:shadow-lg transition-shadow group">
                      <div className="text-3xl font-bold bg-linear-to-r from-orange-600 to-red-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform inline-block">2025</div>
                      <p className="text-sm font-semibold text-gray-700">Award Finalist</p>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Today, as we continue to evolve and expand our services, our commitment remains unchanged: 
                  to provide exceptional care that empowers people to live their best lives. With our dedicated 
                  staff, passionate volunteers, and the unwavering support of our community, we&apos;re writing the 
                  next chapter of our story. One filled with hope, dignity, and compassion for all.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-serve-blue-100/30 rounded-full blur-3xl translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group bg-linear-to-br from-serve-blue-50 via-white to-cyan-50 rounded-3xl p-8 border border-serve-blue-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-2xl bg-linear-to-r from-serve-blue-500 to-cyan-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <HeartIcon className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-4">
                <span className="bg-linear-to-r from-serve-blue-600 to-cyan-500 bg-clip-text text-transparent">Our Mission</span>
              </h2>
              <p className="text-gray-700 leading-relaxed">
                To help adults who require support services to maintain their independence on a daily basis. 
                We provide practical help, emotional support, and social connections that enable people to 
                live safely and happily in their own homes.
              </p>
            </div>

            <div className="group bg-linear-to-br from-serve-green-50 via-white to-emerald-50 rounded-3xl p-8 border border-serve-green-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-2xl bg-linear-to-r from-serve-green-500 to-emerald-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <UserGroupIcon className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-4">
                <span className="bg-linear-to-r from-serve-green-600 to-emerald-500 bg-clip-text text-transparent">Our Vision</span>
              </h2>
              <p className="text-gray-700 leading-relaxed">
                A compassionate community that fully respects the rights of older people and people with 
                disabilities, where age and differing abilities are not barriers to opportunity, 
                fulfilment and dignity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 lg:py-28 bg-linear-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-100/40 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-amber-100/40 rounded-full blur-3xl translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-linear-to-r from-purple-100 to-violet-50 text-purple-800 px-5 py-2.5 rounded-full text-sm font-semibold mb-6 shadow-sm">
              What We Stand For
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-linear-to-r from-purple-600 to-violet-500 bg-clip-text text-transparent">Our Core Values</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every decision we make is guided by these fundamental principles
            </p>
          </div>

          {/* Top row - 3 values */}
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {values.slice(0, 3).map((value, index) => {
              const IconComponent = value.icon
              const colorStyles = {
                blue: { bg: 'from-serve-blue-50 to-cyan-50', border: 'border-serve-blue-200', iconBg: 'from-serve-blue-500 to-cyan-500', iconText: 'text-white', textGradient: 'from-serve-blue-600 to-cyan-500' },
                green: { bg: 'from-serve-green-50 to-emerald-50', border: 'border-serve-green-200', iconBg: 'from-serve-green-500 to-emerald-500', iconText: 'text-white', textGradient: 'from-serve-green-600 to-emerald-500' },
                purple: { bg: 'from-purple-50 to-violet-50', border: 'border-purple-200', iconBg: 'from-purple-500 to-violet-500', iconText: 'text-white', textGradient: 'from-purple-600 to-violet-500' },
              }
              const colors = colorStyles[value.color as keyof typeof colorStyles] || colorStyles.blue
              return (
                <div key={index} className={`group bg-linear-to-br ${colors.bg} rounded-3xl p-8 border ${colors.border} shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2`}>
                  <div className={`w-16 h-16 rounded-2xl bg-linear-to-r ${colors.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                    <IconComponent className={`w-8 h-8 ${colors.iconText}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">
                    <span className={`bg-linear-to-r ${colors.textGradient} bg-clip-text text-transparent`}>{value.title}</span>
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>

          {/* Bottom row - 2 values centered */}
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {values.slice(3).map((value, index) => {
              const IconComponent = value.icon
              const colorStyles = {
                amber: { bg: 'from-amber-50 to-orange-50', border: 'border-amber-200', iconBg: 'from-amber-500 to-orange-500', iconText: 'text-white', textGradient: 'from-amber-600 to-orange-500' },
                red: { bg: 'from-rose-50 to-red-50', border: 'border-rose-200', iconBg: 'from-rose-500 to-red-500', iconText: 'text-white', textGradient: 'from-rose-600 to-red-500' },
              }
              const colors = colorStyles[value.color as keyof typeof colorStyles] || colorStyles.amber
              return (
                <div key={index} className={`group bg-linear-to-br ${colors.bg} rounded-3xl p-8 border ${colors.border} shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2`}>
                  <div className={`w-16 h-16 rounded-2xl bg-linear-to-r ${colors.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                    <IconComponent className={`w-8 h-8 ${colors.iconText}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">
                    <span className={`bg-linear-to-r ${colors.textGradient} bg-clip-text text-transparent`}>{value.title}</span>
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-yellow-100/30 rounded-full blur-3xl -translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-linear-to-r from-yellow-100 to-amber-50 text-yellow-800 px-5 py-2.5 rounded-full text-sm font-semibold mb-6 shadow-sm">
              Award-Winning Care
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-linear-to-r from-yellow-600 to-amber-500 bg-clip-text text-transparent">Recognition & Quality</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="group bg-linear-to-br from-yellow-50 via-white to-amber-50 rounded-3xl p-8 border border-yellow-200 text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl bg-linear-to-r from-yellow-500 to-amber-500 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <TrophyIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Highly Commended 2025</h3>
              <p className="text-sm text-gray-600">Best Care Manager, East Midlands</p>
            </div>

            <div className="group bg-linear-to-br from-serve-blue-50 via-white to-cyan-50 rounded-3xl p-8 border border-serve-blue-200 text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl bg-linear-to-r from-serve-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <ShieldCheckIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">CQC Registered</h3>
              <p className="text-sm text-gray-600 mb-4">Care Quality Commission regulated</p>
              <a 
                href="https://www.cqc.org.uk/location/1-2165219210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-semibold bg-linear-to-r from-serve-blue-600 to-cyan-500 bg-clip-text text-transparent hover:opacity-80"
              >
                View Report
                <ArrowRightIcon className="w-4 h-4 ml-1 text-serve-blue-600" />
              </a>
            </div>

            <div className="group bg-linear-to-br from-serve-green-50 via-white to-emerald-50 rounded-3xl p-8 border border-serve-green-200 text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl bg-linear-to-r from-serve-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <HeartIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">40+ Years</h3>
              <p className="text-sm text-gray-600">Trusted community service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 lg:py-28 bg-linear-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-serve-blue-100/40 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-linear-to-r from-serve-blue-100 to-cyan-50 text-serve-blue-800 px-5 py-2.5 rounded-full text-sm font-semibold mb-6 shadow-sm">
              Meet The Team
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-linear-to-r from-serve-blue-600 to-cyan-500 bg-clip-text text-transparent">Our Leadership Team</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dedicated professionals committed to delivering exceptional care and support
            </p>
          </div>

          {/* CEO Section */}
          <div className="max-w-md mx-auto mb-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-serve-blue-100">
                <div className="relative h-[350px] bg-linear-to-br from-serve-blue-100 to-cyan-200">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-sm font-semibold bg-linear-to-r from-serve-blue-600 to-cyan-500 bg-clip-text text-transparent mb-2">{member.role}</p>
                  <p className="text-xs text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Management Team List */}
          <div className="max-w-4xl mx-auto mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              <span className="bg-linear-to-r from-serve-blue-600 to-cyan-500 bg-clip-text text-transparent">Management Team</span>
            </h3>
            <div className="bg-white rounded-3xl p-8 border border-serve-blue-100 shadow-lg">
              <div className="grid md:grid-cols-2 gap-6">
                {managementTeam.map((member, index) => (
                  <div key={index} className="flex items-center gap-4 py-4 px-4 rounded-2xl bg-linear-to-r from-slate-50 to-serve-blue-50/30 hover:shadow-md transition-all duration-300 border border-serve-blue-100/50">
                    {member.image ? (
                      <div className="w-14 h-14 shrink-0 relative">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="rounded-xl object-cover shadow-md"
                        />
                      </div>
                    ) : (
                      <div className="w-14 h-14 rounded-xl bg-linear-to-r from-serve-blue-500 to-cyan-500 flex items-center justify-center shrink-0 shadow-md">
                        <span className="text-white font-bold text-lg">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    )}
                    <div>
                      <h4 className="text-base font-bold text-gray-900">{member.name}</h4>
                      <p className="text-sm font-semibold bg-linear-to-r from-serve-blue-600 to-cyan-500 bg-clip-text text-transparent mt-1">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Board of Trustees */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 bg-serve-blue-100/30 rounded-full blur-3xl -translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-linear-to-r from-indigo-100 to-purple-50 text-indigo-800 px-5 py-2.5 rounded-full text-sm font-semibold mb-6 shadow-sm">
              Strategic Governance
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-linear-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">Board of Trustees</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our trustees provide strategic guidance and governance to ensure SERVE continues 
              to deliver high-quality services to our community
            </p>
          </div>

          {/* Trustees List */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-linear-to-br from-indigo-50 via-white to-purple-50/30 rounded-3xl p-8 border border-indigo-100 shadow-lg">
              <div className="grid md:grid-cols-2 gap-6">
                {trustees.map((trustee, index) => (
                  <div key={index} className="flex items-center gap-4 py-4 px-4 rounded-2xl bg-white hover:shadow-md transition-all duration-300 border border-indigo-100/50">
                    {trustee.image ? (
                      <Image
                        src={trustee.image}
                        alt={trustee.name}
                        width={56}
                        height={56}
                        className="w-14 h-14 rounded-xl object-cover shadow-md"
                      />
                    ) : (
                      <div className="w-14 h-14 rounded-xl bg-linear-to-r from-indigo-500 to-purple-500 flex items-center justify-center shrink-0 shadow-md">
                        <span className="text-white font-bold text-lg">
                          {trustee.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    )}
                    <div>
                      <h3 className="text-base font-bold text-gray-900">{trustee.name}</h3>
                      <p className="text-sm font-semibold bg-linear-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent mt-1">{trustee.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Governance Info */}
          <div className="bg-linear-to-br from-indigo-50 via-white to-purple-50 rounded-3xl p-8 lg:p-10 border border-indigo-100 max-w-4xl mx-auto shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              <span className="bg-linear-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">Governance & Oversight</span>
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              SERVE is governed by a dedicated Board of Trustees who bring diverse expertise in healthcare, 
              social care, finance, and community development. Our trustees volunteer their time and skills 
              to ensure we maintain the highest standards of care and financial stewardship.
            </p>
            <div className="bg-white rounded-xl p-6 border border-serve-blue-200 mb-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Key Responsibilities:</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start">
                  <span className="text-serve-blue-600 mr-2">•</span>
                  <span>Strategic planning and organisational development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-serve-blue-600 mr-2">•</span>
                  <span>Financial oversight and sustainability</span>
                </li>
                <li className="flex items-start">
                  <span className="text-serve-blue-600 mr-2">•</span>
                  <span>Quality assurance and service delivery standards</span>
                </li>
                <li className="flex items-start">
                  <span className="text-serve-blue-600 mr-2">•</span>
                  <span>Compliance with legal and regulatory requirements</span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <Link 
                href="/about/annual-report-2024/"
                className="inline-flex items-center gap-2 bg-serve-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-serve-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <DocumentTextIcon className="w-5 h-5" />
                View Annual Report 2023-2024
              </Link>
            </div>
          </div>

          {/* Board Meetings Section */}
          <div className="mt-12 bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-linear-to-br from-serve-blue-100 to-serve-blue-200 rounded-xl flex items-center justify-center">
                <DocumentTextIcon className="w-6 h-6 text-serve-blue-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Trustee Board Meetings</h3>
            </div>

            <p className="text-gray-700 mb-8">
              In the interests of transparency and accountability, we publish details of our trustee board meetings.
            </p>

            {/* 2025 Meetings Archive */}
            <div className="mb-8">
              <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                2025 Board Meetings
              </h4>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="space-y-4">
                  {/* November 2025 */}
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="font-semibold text-gray-900 mb-2">November 2025</p>
                    <p className="text-sm text-gray-600"><span className="font-medium">Attendees:</span> Anita Harvey, Tony Gibbs, Zara Cunliffe, Maureen Core, Mike Hulands, Jimmy James, Louise Wiltshire</p>
                  </div>

                  {/* September 2025 */}
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="font-semibold text-gray-900 mb-2">September 2025</p>
                    <p className="text-sm text-gray-600"><span className="font-medium">Attendees:</span> Anita Harvey, Tony Gibbs, Jess Bermudez, Mike Hulands, Jimmy James, Simon Partridge, Rachel Wilson, Louise Wiltshire</p>
                  </div>

                  {/* May 2025 */}
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="font-semibold text-gray-900 mb-2">May 2025</p>
                    <p className="text-sm text-gray-600"><span className="font-medium">Attendees:</span> Anita Harvey, Tony Gibbs, Mike Hulands, Jimmy James, Rachel Wilson, Louise Wiltshire</p>
                  </div>

                  {/* March 2025 */}
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="font-semibold text-gray-900 mb-2">March 2025</p>
                    <p className="text-sm text-gray-600"><span className="font-medium">Attendees:</span> Anita Harvey, Tony Gibbs, Jimmy James, Simon Partridge, Louise Wiltshire</p>
                  </div>

                  {/* January 2025 */}
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="font-semibold text-gray-900 mb-2">January 2025</p>
                    <p className="text-sm text-gray-600"><span className="font-medium">Attendees:</span> Anita Harvey, Tony Gibbs, Zara Cunliffe, Jimmy James, Simon Partridge, Rachel Wilson</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Upcoming Meetings */}
            <div className="mb-8">
              <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-serve-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Upcoming Meetings
              </h4>
              <div className="bg-serve-blue-50 rounded-xl p-6 border border-serve-blue-200">
                <div className="space-y-6">
                  {/* Board of Directors / Trustees Meetings */}
                  <div>
                    <h5 className="font-bold text-gray-900 mb-4">Board of Directors / Trustees Meeting</h5>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <p className="text-sm text-gray-600"><span className="font-medium">Date:</span> 26th January 2026</p>
                        <p className="text-sm text-gray-600"><span className="font-medium">Time:</span> 19:00 – 20:30</p>
                        <p className="text-sm text-gray-600"><span className="font-medium">Location:</span> Serve, Rushden</p>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <p className="text-sm text-gray-600"><span className="font-medium">Date:</span> 30th March 2026</p>
                        <p className="text-sm text-gray-600"><span className="font-medium">Time:</span> 19:00 – 20:30</p>
                        <p className="text-sm text-gray-600"><span className="font-medium">Location:</span> Serve, Rushden</p>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <p className="text-sm text-gray-600"><span className="font-medium">Date:</span> 26th May 2026</p>
                        <p className="text-sm text-gray-600"><span className="font-medium">Time:</span> 19:00 – 20:30</p>
                        <p className="text-sm text-gray-600"><span className="font-medium">Location:</span> Serve, Rushden</p>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <p className="text-sm text-gray-600"><span className="font-medium">Date:</span> 27th July 2026</p>
                        <p className="text-sm text-gray-600"><span className="font-medium">Time:</span> 19:00 – 20:30</p>
                        <p className="text-sm text-gray-600"><span className="font-medium">Location:</span> Serve, Rushden</p>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <p className="text-sm text-gray-600"><span className="font-medium">Date:</span> 28th September 2026</p>
                        <p className="text-sm text-gray-600"><span className="font-medium">Time:</span> 19:00 – 20:30</p>
                        <p className="text-sm text-gray-600"><span className="font-medium">Location:</span> Serve, Rushden</p>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <p className="text-sm text-gray-600"><span className="font-medium">Date:</span> 30th November 2026</p>
                        <p className="text-sm text-gray-600"><span className="font-medium">Time:</span> 19:00 – 20:30</p>
                        <p className="text-sm text-gray-600"><span className="font-medium">Location:</span> Serve, Rushden</p>
                      </div>
                    </div>
                  </div>

                  {/* Annual General Meeting */}
                  <div>
                    <h5 className="font-bold text-gray-900 mb-4">Annual General Meeting</h5>
                    <div className="bg-white rounded-lg p-4 shadow-sm border-2 border-serve-blue-200">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-sm text-gray-600"><span className="font-medium">Date:</span> 10th September 2026</p>
                          <p className="text-sm text-gray-600"><span className="font-medium">Time:</span> All day</p>
                          <p className="text-sm text-gray-600"><span className="font-medium">Location:</span> Serve, Rushden</p>
                        </div>
                        <span className="text-xs bg-amber-100 text-amber-700 px-3 py-1 rounded-full font-semibold">
                          AGM
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Board Operations */}
            <div className="bg-linear-to-br from-serve-blue-50 to-white rounded-xl p-6 border border-serve-blue-100">
              <h4 className="text-lg font-bold text-gray-900 mb-3">How the Board Operates</h4>
              <div className="space-y-3 text-sm text-gray-700">
                <p>
                  <span className="font-semibold">Meeting Frequency:</span> The Board of Trustees meets BiMonthly 
                  to review organisational performance, approve strategic initiatives, and ensure compliance with 
                  all regulatory requirements.
                </p>
                <p>
                  <span className="font-semibold">Decision Making:</span> Decisions are made collectively by the 
                  Board, with all trustees having equal voting rights. A quorum of at least 50% of trustees is 
                  required for formal decision-making.
                </p>
                <p>
                  <span className="font-semibold">Governing Document:</span> SERVE operates in accordance with 
                  our Articles of Association and Charity Commission guidelines, ensuring transparent and 
                  accountable governance.
                </p>
                <p>
                  <span className="font-semibold">Public Access:</span> Members of the public may request copies 
                  of meeting minutes by contacting our office. Some information may be redacted to protect 
                  confidential matters.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-serve-blue-200">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Contact:</span> For enquiries about board meetings or to request 
                  past minutes, please email{' '}
                  <a href="mailto:info@serve.org.uk" className="text-serve-blue-600 hover:text-serve-blue-700 font-semibold">
                    info@serve.org.uk
                  </a>
                  {' '}or call 01933 315555
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-linear-to-br from-serve-blue-600 via-serve-blue-700 to-cyan-700 relative overflow-hidden">
        {/* Animated decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-serve-blue-400/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-cyan-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-5 py-2.5 rounded-full text-sm font-semibold text-white mb-6">
            We&apos;re Here To Help
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In <span className="text-cyan-200">Touch</span>
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Want to learn more about our services or how we can help?
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="tel:01933315555"
              className="inline-flex items-center justify-center bg-white text-serve-blue-700 hover:bg-blue-50 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              <PhoneIcon className="w-5 h-5 mr-2" />
              01933 315555
            </a>
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 border border-white/30"
            >
              Contact Us
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}