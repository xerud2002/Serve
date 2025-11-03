import { Metadata } from 'next'
import Link from 'next/link'
import {
  HeartIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  TrophyIcon,
  PhoneIcon,
  ArrowRightIcon,
  StarIcon,
  CheckIcon,
  MapPinIcon,
  ClockIcon,
  BuildingOffice2Icon,
  HandRaisedIcon
} from '@heroicons/react/24/outline'

import { generateSEOMetadata, seoConfigs } from '@/lib/seo'

export const metadata = generateSEOMetadata(seoConfigs.about)

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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-serve-blue-900 via-serve-blue-800 to-serve-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-yellow-500/20 backdrop-blur-sm text-yellow-300 px-6 py-3 rounded-full text-sm font-bold mb-8">
              <TrophyIcon className="w-5 h-5 mr-2" />
              Award Winner 2024 - Great British Care Awards
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              About <span className="text-serve-blue-200">SERVE</span>
            </h1>
            
            <p className="text-xl lg:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed mb-12">
              For over 40 years, SERVE has been a trusted part of the Northamptonshire 
              community, providing award-winning care services that help people maintain 
              their independence with dignity and respect.
            </p>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-4">
                <div className="text-4xl font-bold text-serve-blue-200 mb-2">40+</div>
                <div className="text-sm opacity-80">Years of Service</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-4">
                <div className="text-4xl font-bold text-serve-green-300 mb-2">7</div>
                <div className="text-sm opacity-80">Core Services</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-4">
                <div className="text-4xl font-bold text-yellow-300 mb-2">CQC</div>
                <div className="text-sm opacity-80">Registered</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-4">
                <div className="text-4xl font-bold text-purple-300 mb-2">1000+</div>
                <div className="text-sm opacity-80">People Supported</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Mission & Vision
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-serve-blue-50 to-serve-blue-100 rounded-3xl p-12">
              <div className="bg-serve-blue-600 rounded-2xl p-4 w-fit mb-8">
                <HeartIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To help adults maintain independence through tailored support services 
                that respect individual choice, promote dignity, and enhance quality of life. 
                We provide practical help, emotional support, and social connections that 
                enable people to live safely and happily in their own homes.
              </p>
            </div>

            <div className="bg-gradient-to-br from-serve-green-50 to-serve-green-100 rounded-3xl p-12">
              <div className="bg-serve-green-600 rounded-2xl p-4 w-fit mb-8">
                <StarIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                A compassionate community that understands and respects the rights of 
                older people and people with disabilities. We envision a society where 
                everyone can age with dignity, maintain meaningful connections, and 
                continue to contribute to their community regardless of their care needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape how we deliver 
              our services to the people who trust us with their care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
                  <div className="bg-serve-blue-100 rounded-full p-4 w-fit mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-serve-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              Four decades of growth, innovation, and community service
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-serve-blue-200"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => {
                const IconComponent = milestone.icon
                return (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                      <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
                        <div className={`flex items-center ${index % 2 === 0 ? 'justify-end' : 'justify-start'} mb-4`}>
                          <div className="bg-serve-blue-100 rounded-xl p-3 mr-4">
                            <IconComponent className="w-6 h-6 text-serve-blue-600" />
                          </div>
                          <span className="text-2xl font-bold text-serve-blue-600">{milestone.year}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="w-6 h-6 bg-serve-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                    </div>
                    
                    <div className="w-1/2"></div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Dedicated Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              SERVE's success comes from our passionate team of professionals and volunteers 
              who are committed to making a difference in people's lives every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {team.map((role, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="text-4xl font-bold text-serve-blue-600 mb-4">{role.count}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{role.role}</h3>
                <p className="text-gray-600 leading-relaxed">{role.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-serve-blue-600 rounded-3xl p-12 text-center text-white">
            <h3 className="text-2xl font-bold mb-6">Join Our Team</h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              We're always looking for caring, dedicated people to join our team. 
              Whether as staff or volunteers, you can make a real difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/volunteer"
                className="inline-flex items-center bg-serve-green-600 hover:bg-serve-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Volunteer With Us
                <ArrowRightIcon className="ml-3 h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center bg-white/10 backdrop-blur-sm hover:bg-white hover:text-serve-blue-900 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 border border-white/20"
              >
                Career Opportunities
                <ArrowRightIcon className="ml-3 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Recognition & Achievements
            </h2>
            <p className="text-xl text-gray-600">
              Our commitment to excellence has been recognized through various awards and accreditations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 shadow-lg">
                <div className="flex items-start">
                  <div className="bg-yellow-100 rounded-xl p-3 mr-6">
                    <TrophyIcon className="w-8 h-8 text-yellow-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-gray-900">{achievement.title}</h3>
                      <span className="text-sm font-semibold text-yellow-600 bg-yellow-100 px-3 py-1 rounded-full">
                        {achievement.year}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-serve-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Get to Know Us Better
          </h2>
          <p className="text-xl opacity-90 mb-10 leading-relaxed">
            We'd love to tell you more about our services and how we can help you or 
            your loved ones maintain independence and quality of life.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <MapPinIcon className="w-8 h-8 mx-auto mb-4 text-serve-blue-200" />
              <h3 className="font-bold mb-2">Visit Us</h3>
              <p className="text-sm opacity-80">8 West Street, Rushden, NN10 0RT</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <PhoneIcon className="w-8 h-8 mx-auto mb-4 text-serve-blue-200" />
              <h3 className="font-bold mb-2">Call Us</h3>
              <p className="text-sm opacity-80">01933 315555</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <ClockIcon className="w-8 h-8 mx-auto mb-4 text-serve-blue-200" />
              <h3 className="font-bold mb-2">Office Hours</h3>
              <p className="text-sm opacity-80">Mon-Fri: 9am-5pm</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
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
              Contact Us
              <ArrowRightIcon className="ml-3 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}