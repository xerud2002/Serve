import Link from 'next/link'
import {
  HeartIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  TrophyIcon,
  PhoneIcon,
  ArrowRightIcon,
  StarIcon,
  MapPinIcon,
  ClockIcon,
  BuildingOffice2Icon,
  HandRaisedIcon,
  SparklesIcon,
  HomeIcon,
  TruckIcon,
  UsersIcon
} from '@heroicons/react/24/outline'
import { HeartIcon as HeartIconSolid, TrophyIcon as TrophyIconSolid } from '@heroicons/react/24/solid'

import { generateSEOMetadata, seoConfigs } from '@/lib/seo'

export const metadata = generateSEOMetadata(seoConfigs.about)

const services = [
  {
    title: 'Personal & Domestic Care',
    description: 'Award-winning homecare services delivered with compassion and professionalism.',
    icon: HomeIcon,
    color: 'blue'
  },
  {
    title: 'Day Care Centre',
    description: 'Ron Manning Day and Activity Centre providing social connection and support.',
    icon: BuildingOffice2Icon,
    color: 'green'
  },
  {
    title: 'Community Transport',
    description: 'Reliable transport for medical appointments and community access.',
    icon: TruckIcon,
    color: 'purple'
  },
  {
    title: 'Befriending Service',
    description: 'Countywide support combating loneliness and isolation.',
    icon: UsersIcon,
    color: 'rose'
  },
  {
    title: 'Meals on Wheels',
    description: 'Nutritious hot meals delivered to your door with a friendly face.',
    icon: HeartIcon,
    color: 'orange'
  },
  {
    title: 'Carers Support',
    description: 'Respite and support services for family carers across Northamptonshire.',
    icon: HandRaisedIcon,
    color: 'indigo'
  }
]

const milestones = [
  {
    year: '1980s',
    title: 'Founded',
    description: 'SERVE was established to provide much-needed support services for older people in Northamptonshire.',
    icon: HeartIcon
  },
  {
    year: '1990s',
    title: 'Expansion',
    description: 'Extended services to include community transport and befriending programs across the county.',
    icon: UserGroupIcon
  },
  {
    year: '2000s',
    title: 'CQC Registration',
    description: 'Became CQC registered for personal care services, ensuring the highest standards of care.',
    icon: ShieldCheckIcon
  },
  {
    year: '2010s',
    title: 'Ron Manning Centre',
    description: 'Opened the Ron Manning Day and Activity Centre, expanding our day care services.',
    icon: BuildingOffice2Icon
  },
  {
    year: '2024',
    title: 'Award Winner',
    description: 'Won "Best Homecare Team, East Midlands" at the Great British Care Awards.',
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
    icon: StarIcon
  },
  {
    title: 'Community',
    description: 'Strong communities support each other - we foster connections and belonging.',
    icon: UserGroupIcon
  }
]

const trustees = [
  {
    name: 'Dr. Margaret Thompson',
    role: 'Chair of Trustees',
    bio: 'Former NHS consultant with over 30 years experience in elder care. Passionate about ensuring quality care for vulnerable adults.',
    expertise: 'Healthcare Policy & Elder Care',
    image: '/images/team/trustee-1.jpg'
  },
  {
    name: 'James Richardson',
    role: 'Treasurer',
    bio: 'Chartered accountant specializing in charity finance. Ensures SERVE maintains financial sustainability and transparency.',
    expertise: 'Finance & Governance',
    image: '/images/team/trustee-2.jpg'
  },
  {
    name: 'Sarah Mitchell',
    role: 'Trustee',
    bio: 'Local business owner and community advocate. Brings commercial expertise and local knowledge to the board.',
    expertise: 'Business Development',
    image: '/images/team/trustee-3.jpg'
  },
  {
    name: 'Rev. David Walsh',
    role: 'Trustee',
    bio: 'Retired clergy with deep community roots. Focuses on pastoral care and volunteer engagement.',
    expertise: 'Community Engagement',
    image: '/images/team/trustee-4.jpg'
  },
  {
    name: 'Dr. Priya Sharma',
    role: 'Trustee',
    bio: 'Social care researcher and advocate for disability rights. Brings academic rigor and lived experience.',
    expertise: 'Social Care & Disability Rights',
    image: '/images/team/trustee-5.jpg'
  },
  {
    name: 'Michael O\'Brien',
    role: 'Trustee',
    bio: 'Former local authority director with extensive public sector experience in care services.',
    expertise: 'Public Sector & Regulation',
    image: '/images/team/trustee-6.jpg'
  }
]

const leadership = [
  {
    name: 'Linda Patterson',
    role: 'Chief Executive Officer',
    department: 'Executive',
    bio: 'Leading SERVE for over 15 years, Linda has transformed the organization into an award-winning care provider.',
    image: '/images/team/ceo.jpg'
  },
  {
    name: 'Andrew Collins',
    role: 'Operations Director',
    department: 'Operations',
    bio: 'Oversees all service delivery, ensuring quality and compliance across our care services.',
    image: '/images/team/operations.jpg'
  },
  {
    name: 'Rebecca Morgan',
    role: 'Care Services Manager',
    department: 'Care Services',
    bio: 'Manages our award-winning homecare team with compassion and professionalism.',
    image: '/images/team/care-manager.jpg'
  },
  {
    name: 'David Hughes',
    role: 'Transport & Logistics Manager',
    department: 'Transport',
    bio: 'Ensures safe, reliable transport services connecting our community.',
    image: '/images/team/transport.jpg'
  },
  {
    name: 'Emma Wilson',
    role: 'Day Centre Manager',
    department: 'Day Services',
    bio: 'Creates engaging, supportive programs at the Ron Manning Day Centre.',
    image: '/images/team/day-centre.jpg'
  },
  {
    name: 'Sophie Turner',
    role: 'Volunteer Coordinator',
    department: 'Community Services',
    bio: 'Recruits, trains, and supports our amazing team of volunteers.',
    image: '/images/team/volunteer.jpg'
  }
]

const team = [
  {
    role: 'Leadership Team',
    description: 'Experienced managers and coordinators overseeing service delivery and quality.',
    count: '8'
  },
  {
    role: 'Care Staff',
    description: 'Fully trained, DBS checked care professionals providing personal and domestic support.',
    count: '25+'
  },
  {
    role: 'Transport Team',
    description: 'Professional drivers providing safe, reliable community transport services.',
    count: '6'
  },
  {
    role: 'Volunteers',
    description: 'Dedicated community volunteers supporting befriending and community services.',
    count: '50+'
  }
]

const achievements = [
  {
    title: 'Great British Care Awards 2024',
    description: 'Winner - Best Homecare Team, East Midlands',
    year: '2024'
  },
  {
    title: 'CQC Registration',
    description: 'Regulated personal care provider meeting all quality standards',
    year: 'Ongoing'
  },
  {
    title: '40+ Years of Service',
    description: 'Four decades of trusted care in the Northamptonshire community',
    year: '1980-2024'
  },
  {
    title: 'Registered Charity',
    description: 'Charity Number: 1043321 | Company Number: 2951827',
    year: 'Est. 1980s'
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
              Since the 1980s, SERVE has been Northamptonshire&apos;s trusted partner in supporting 
              older people and adults with disabilities to live independently with dignity and respect.
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
                  To help adults maintain independence through tailored support services that respect 
                  individual choice, promote dignity, and enhance quality of life. We provide practical 
                  help, emotional support, and social connections that enable people to live safely 
                  and happily in their own homes.
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
                  A compassionate community that understands and respects the rights of older people 
                  and people with disabilities. We envision a society where everyone can age with 
                  dignity, maintain meaningful connections, and continue to contribute to their 
                  community regardless of their care needs.
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

      {/* Our Services - Colorful Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-serve-blue-100 text-serve-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <HeartIcon className="w-4 h-4 mr-2" />
              What We Do
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support services designed to help you or your loved ones maintain independence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const IconComponent = service.icon
              const colors = {
                blue: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
                green: 'from-green-500 to-green-600 hover:from-green-600 hover:to-green-700',
                purple: 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700',
                rose: 'from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700',
                orange: 'from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700',
                indigo: 'from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700',
              }
              return (
                <div key={i} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className={`absolute inset-0 bg-gradient-to-br ${colors[service.color as keyof typeof colors]} opacity-90 group-hover:opacity-100 transition-opacity`}></div>
                  <div className="relative p-8 text-white h-full flex flex-col">
                    <IconComponent className="h-12 w-12 mb-4" />
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-white/90 leading-relaxed flex-grow">{service.description}</p>
                    <div className="mt-4 inline-flex items-center text-sm font-semibold group-hover:translate-x-1 transition-transform">
                      Learn More <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center bg-serve-blue-600 hover:bg-serve-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Explore All Services
              <ArrowRightIcon className="ml-3 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              Four decades of growth, innovation, and unwavering commitment to our community
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-serve-blue-300 via-serve-green-300 to-yellow-300"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => {
                const IconComponent = milestone.icon
                const isLeft = index % 2 === 0
                return (
                  <div key={index} className={`flex items-center gap-8 ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    {/* Content */}
                    <div className={`w-full lg:w-5/12 ${isLeft ? 'lg:text-right' : 'lg:text-left'}`}>
                      <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-gray-100 hover:border-serve-blue-200 transition-colors">
                        <div className={`flex items-center gap-4 mb-4 ${isLeft ? 'lg:justify-end' : 'lg:justify-start'}`}>
                          <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-serve-blue-100 to-serve-blue-200">
                            <IconComponent className="h-6 w-6 text-serve-blue-700" />
                          </div>
                          <span className="text-2xl font-bold bg-gradient-to-r from-serve-blue-600 to-serve-green-600 bg-clip-text text-transparent">
                            {milestone.year}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                      </div>
                    </div>

                    {/* Timeline dot */}
                    <div className="hidden lg:flex items-center justify-center w-2/12 shrink-0">
                      <div className="h-8 w-8 rounded-full bg-gradient-to-br from-serve-blue-600 to-serve-green-600 border-4 border-white shadow-lg relative z-10"></div>
                    </div>

                    {/* Spacer */}
                    <div className="hidden lg:block w-5/12"></div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Amazing Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dedicated professionals and volunteers united by a passion for making a difference
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {team.map((role, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow group">
                <div className="text-5xl font-extrabold bg-gradient-to-r from-serve-blue-600 to-serve-green-600 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform">
                  {role.count}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{role.role}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{role.description}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-r from-serve-blue-600 via-serve-blue-700 to-serve-green-600"></div>
            <div className="relative px-8 py-16 text-center text-white">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Join Our Team</h3>
              <p className="text-xl text-blue-50 mb-10 max-w-2xl mx-auto leading-relaxed">
                Whether you&apos;re looking for a rewarding career or want to volunteer your time, 
                we&apos;d love to have you as part of the SERVE family.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/volunteer"
                  className="inline-flex items-center justify-center bg-white text-serve-blue-700 hover:bg-blue-50 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  <HeartIconSolid className="w-6 h-6 mr-3" />
                  Volunteer With Us
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 border-2 border-white/30"
                >
                  Career Opportunities
                  <ArrowRightIcon className="ml-3 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Board of Trustees Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-white shadow-lg border-2 border-serve-blue-100 px-6 py-3 rounded-full text-sm font-bold mb-8 hover:scale-105 transition-transform">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-serve-blue-500 to-serve-blue-700 flex items-center justify-center">
                <ShieldCheckIcon className="w-5 h-5 text-white" />
              </div>
              <span className="text-serve-blue-800">Governance & Leadership</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Board of <span className="bg-gradient-to-r from-serve-blue-600 to-serve-green-600 bg-clip-text text-transparent">Trustees</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experienced leaders providing strategic guidance and governance to ensure SERVE delivers 
              the highest quality care and maintains our charitable mission.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trustees.map((trustee, i) => (
              <div key={i} className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-serve-blue-200">
                {/* Photo placeholder with gradient overlay */}
                <div className="relative h-80 bg-gradient-to-br from-serve-blue-100 via-serve-blue-200 to-serve-green-100 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center transform group-hover:scale-110 transition-transform duration-500">
                      <div className="h-32 w-32 rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/40 flex items-center justify-center mx-auto mb-4 shadow-2xl">
                        <UserGroupIcon className="h-16 w-16 text-white" />
                      </div>
                      <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full inline-block">
                        <div className="text-sm font-bold text-serve-blue-700">{trustee.role}</div>
                      </div>
                    </div>
                  </div>
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-serve-blue-700 transition-colors">{trustee.name}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{trustee.bio}</p>
                  <div className="flex items-center gap-2 text-sm bg-gradient-to-r from-serve-green-50 to-serve-blue-50 rounded-xl px-4 py-3 border border-serve-blue-100">
                    <SparklesIcon className="h-5 w-5 text-serve-green-600 flex-shrink-0" />
                    <span className="font-semibold text-gray-700">{trustee.expertise}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-50 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-serve-green-50 to-serve-blue-50 border-2 border-serve-green-200 px-6 py-3 rounded-full text-sm font-bold mb-8 shadow-lg hover:scale-105 transition-transform">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-serve-green-500 to-serve-green-700 flex items-center justify-center">
                <StarIcon className="w-5 h-5 text-white" />
              </div>
              <span className="text-serve-green-800">Meet The Team</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-serve-green-600 to-serve-blue-600 bg-clip-text text-transparent">Leadership</span> Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experienced professionals leading our services with passion, expertise, and dedication to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {leadership.map((leader, i) => (
              <div key={i} className="group relative">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-serve-green-400 to-serve-blue-400 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition duration-500"></div>
                
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 group-hover:border-serve-green-200">
                  {/* Photo placeholder */}
                  <div className="relative h-96 bg-gradient-to-br from-serve-green-100 via-serve-blue-100 to-serve-green-200 overflow-hidden">
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                      <div className="h-40 w-40 rounded-full bg-white/30 backdrop-blur-sm border-4 border-white/50 flex items-center justify-center mb-6 shadow-2xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        <UserGroupIcon className="h-20 w-20 text-white drop-shadow-lg" />
                      </div>
                      <div className="bg-white/95 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-xl">
                        <div className="text-sm font-bold text-serve-blue-700">{leader.department}</div>
                      </div>
                    </div>
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    {/* Name overlay at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform group-hover:translate-y-0 transition-transform">
                      <h3 className="text-3xl font-bold mb-2 drop-shadow-2xl">{leader.name}</h3>
                      <div className="text-sm font-semibold text-blue-100 drop-shadow-lg">{leader.role}</div>
                    </div>
                  </div>

                  {/* Bio */}
                  <div className="p-8 bg-gradient-to-br from-white to-gray-50">
                    <p className="text-gray-700 leading-relaxed">{leader.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Life at <span className="bg-gradient-to-r from-serve-blue-600 to-serve-green-600 bg-clip-text text-transparent">SERVE</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A glimpse into our vibrant community and the meaningful connections we create every day
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { title: 'Day Centre Activities', color: 'from-blue-400 to-blue-600', icon: '🎨' },
              { title: 'Community Events', color: 'from-green-400 to-green-600', icon: '🎉' },
              { title: 'Care Visits', color: 'from-purple-400 to-purple-600', icon: '💙' },
              { title: 'Transport Services', color: 'from-orange-400 to-orange-600', icon: '🚐' },
              { title: 'Team Meetings', color: 'from-rose-400 to-rose-600', icon: '🤝' },
              { title: 'Award Ceremonies', color: 'from-yellow-400 to-yellow-600', icon: '🏆' },
              { title: 'Volunteer Events', color: 'from-indigo-400 to-indigo-600', icon: '❤️' },
              { title: 'Community Outreach', color: 'from-teal-400 to-teal-600', icon: '🌟' }
            ].map((photo, i) => (
              <div key={i} className="group relative aspect-square rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                <div className={`absolute inset-0 bg-gradient-to-br ${photo.color}`}>
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white">
                    <div className="text-6xl mb-4 transform group-hover:scale-125 transition-transform duration-500">
                      {photo.icon}
                    </div>
                    <div className="text-sm font-bold text-center drop-shadow-lg opacity-90 group-hover:opacity-100 transition-opacity">
                      {photo.title}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                
                {/* Decorative corner */}
                <div className="absolute top-4 right-4 h-8 w-8 border-t-2 border-r-2 border-white/50 rounded-tr-2xl"></div>
                <div className="absolute bottom-4 left-4 h-8 w-8 border-b-2 border-l-2 border-white/50 rounded-bl-2xl"></div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Follow us on social media to see more photos and stories from our community
            </p>
            <div className="flex gap-6 justify-center flex-wrap">
              <a
                href="https://www.facebook.com/SERVE234/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-serve-blue-600 to-serve-blue-700 hover:from-serve-blue-700 hover:to-serve-blue-800 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                <svg className="h-6 w-6 transform group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
                <span>Follow on Facebook</span>
              </a>
              <a
                href="https://www.linkedin.com/company/serve-nvca/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-serve-blue-600 to-serve-blue-700 hover:from-serve-blue-700 hover:to-serve-blue-800 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                <svg className="h-6 w-6 transform group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <TrophyIcon className="w-4 h-4 mr-2" />
              Awards & Recognition
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Celebrating Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to outstanding care has been recognized by industry leaders and the community we serve
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-6">
                    <div className="shrink-0 h-14 w-14 rounded-xl bg-gradient-to-br from-yellow-100 to-orange-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <TrophyIcon className="h-7 w-7 text-yellow-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h3 className="text-xl font-bold text-gray-900 flex-grow">{achievement.title}</h3>
                        <span className="text-xs font-bold text-yellow-700 bg-yellow-100 px-3 py-1 rounded-full">
                          {achievement.year}
                        </span>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-serve-blue-600">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let&apos;s Talk About Your Care Needs
            </h2>
            <p className="text-xl text-blue-50 max-w-3xl mx-auto leading-relaxed">
              We&apos;re here to answer your questions and help you find the right support for you or your loved ones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center text-white hover:bg-white/15 transition-colors">
              <MapPinIcon className="w-10 h-10 mx-auto mb-4 text-blue-200" />
              <h3 className="font-bold text-lg mb-2">Visit Us</h3>
              <p className="text-sm text-blue-100">8 West Street, Rushden<br />Northants NN10 0RT</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center text-white hover:bg-white/15 transition-colors">
              <PhoneIcon className="w-10 h-10 mx-auto mb-4 text-blue-200" />
              <h3 className="font-bold text-lg mb-2">Call Us</h3>
              <a href="tel:01933315555" className="text-sm text-blue-100 hover:text-white transition-colors">
                01933 315555
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center text-white hover:bg-white/15 transition-colors">
              <ClockIcon className="w-10 h-10 mx-auto mb-4 text-blue-200" />
              <h3 className="font-bold text-lg mb-2">Office Hours</h3>
              <p className="text-sm text-blue-100">Mon-Fri: 9am-5pm<br />Sat-Sun: Closed</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:01933315555"
              className="inline-flex items-center justify-center bg-serve-green-600 hover:bg-serve-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              <PhoneIcon className="w-6 h-6 mr-3" />
              Call: 01933 315555
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-serve-blue-700 hover:bg-blue-50 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Get In Touch
              <ArrowRightIcon className="ml-3 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}