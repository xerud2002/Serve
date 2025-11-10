import Link from 'next/link'
import Image from 'next/image'
import {
  HeartIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  TrophyIcon,
  PhoneIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'

import { generateSEOMetadata, seoConfigs } from '@/lib/seo'

export const metadata = generateSEOMetadata(seoConfigs.about)

const teamMembers = [
  {
    name: 'Executive Director',
    role: 'Leadership & Strategy',
    image: '/images/team/director.jpg', // Replace with actual photo path
    description: 'Overseeing organizational strategy and operations'
  },
  {
    name: 'Care Manager',
    role: 'Care Services',
    image: '/images/team/care-manager.jpg', // Replace with actual photo path
    description: 'Leading our award-winning care team'
  },
  {
    name: 'Community Coordinator',
    role: 'Community Programs',
    image: '/images/team/community-coordinator.jpg', // Replace with actual photo path
    description: 'Coordinating volunteers and community services'
  },
  {
    name: 'Operations Manager',
    role: 'Operations & Finance',
    image: '/images/team/operations-manager.jpg', // Replace with actual photo path
    description: 'Managing daily operations and financial oversight'
  }
]

const trustees = [
  {
    name: 'Trustee Name 1',
    role: 'Chair of the Board',
    image: '/images/trustees/chair.jpg', // Replace with actual photo path
    expertise: 'Healthcare & Governance'
  },
  {
    name: 'Trustee Name 2',
    role: 'Vice Chair',
    image: '/images/trustees/vice-chair.jpg', // Replace with actual photo path
    expertise: 'Finance & Risk Management'
  },
  {
    name: 'Trustee Name 3',
    role: 'Trustee',
    image: '/images/trustees/trustee-1.jpg', // Replace with actual photo path
    expertise: 'Social Care & Community'
  },
  {
    name: 'Trustee Name 4',
    role: 'Trustee',
    image: '/images/trustees/trustee-2.jpg', // Replace with actual photo path
    expertise: 'Legal & Compliance'
  },
  {
    name: 'Trustee Name 5',
    role: 'Trustee',
    image: '/images/trustees/trustee-3.jpg', // Replace with actual photo path
    expertise: 'Marketing & Communications'
  },
  {
    name: 'Trustee Name 6',
    role: 'Trustee',
    image: '/images/trustees/trustee-4.jpg', // Replace with actual photo path
    expertise: 'Human Resources'
  }
]

const values = [
  {
    title: 'Independence',
    description: 'Supporting people to live independently in their own homes.',
    icon: HeartIcon
  },
  {
    title: 'Dignity',
    description: 'Treating everyone with respect and compassion.',
    icon: UserGroupIcon
  },
  {
    title: 'Quality',
    description: 'Maintaining the highest standards in all our services.',
    icon: TrophyIcon
  },
  {
    title: 'Community',
    description: 'Building strong connections and belonging.',
    icon: ShieldCheckIcon
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-serve-blue-600 to-serve-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <TrophyIcon className="w-5 h-5" />
              <span className="text-sm font-semibold">Award-Winning Care Since 1980s</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About SERVE
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              For over 40 years, SERVE has been providing award-winning care services to help older people 
              and adults with disabilities maintain their independence across Northamptonshire.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100">
              <div className="w-12 h-12 rounded-xl bg-serve-blue-100 flex items-center justify-center mb-4">
                <HeartIcon className="w-6 h-6 text-serve-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                To help adults who require support services to maintain their independence on a daily basis. 
                We provide practical help, emotional support, and social connections that enable people to 
                live safely and happily in their own homes.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 border border-green-100">
              <div className="w-12 h-12 rounded-xl bg-serve-green-100 flex items-center justify-center mb-4">
                <UserGroupIcon className="w-6 h-6 text-serve-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every decision we make is guided by these fundamental principles
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-serve-blue-100 to-serve-blue-200 flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-serve-blue-700" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Recognition & Quality
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-yellow-50 to-white rounded-xl p-6 border border-yellow-100 text-center">
              <div className="w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center mx-auto mb-4">
                <TrophyIcon className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Award Winner 2024</h3>
              <p className="text-sm text-gray-600">Best Homecare Team, East Midlands</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 border border-blue-100 text-center">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <ShieldCheckIcon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">CQC Registered</h3>
              <p className="text-sm text-gray-600 mb-3">Care Quality Commission regulated</p>
              <a 
                href="https://www.cqc.org.uk/location/1-2165219210"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-serve-blue-600 hover:text-serve-blue-700 inline-flex items-center"
              >
                View Report
                <ArrowRightIcon className="w-4 h-4 ml-1" />
              </a>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 border border-green-100 text-center">
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mx-auto mb-4">
                <HeartIcon className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">40+ Years</h3>
              <p className="text-sm text-gray-600">Trusted community service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Leadership Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dedicated professionals committed to delivering exceptional care and support
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all group">
                <div className="relative h-64 bg-gradient-to-br from-serve-blue-100 to-serve-blue-200">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-sm font-semibold text-serve-blue-600 mb-2">{member.role}</p>
                  <p className="text-xs text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Team Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-serve-blue-100 to-serve-blue-200 flex items-center justify-center mx-auto mb-3">
                <UserGroupIcon className="w-6 h-6 text-serve-blue-700" />
              </div>
              <div className="text-3xl font-bold text-serve-blue-600 mb-1">8</div>
              <p className="text-xs font-semibold text-gray-900">Leadership Team</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-serve-green-100 to-serve-green-200 flex items-center justify-center mx-auto mb-3">
                <HeartIcon className="w-6 h-6 text-serve-green-700" />
              </div>
              <div className="text-3xl font-bold text-serve-green-600 mb-1">25+</div>
              <p className="text-xs font-semibold text-gray-900">Care Professionals</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-serve-blue-100 to-serve-blue-200 flex items-center justify-center mx-auto mb-3">
                <UserGroupIcon className="w-6 h-6 text-serve-blue-700" />
              </div>
              <div className="text-3xl font-bold text-serve-blue-600 mb-1">6</div>
              <p className="text-xs font-semibold text-gray-900">Transport Team</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-serve-green-100 to-serve-green-200 flex items-center justify-center mx-auto mb-3">
                <HeartIcon className="w-6 h-6 text-serve-green-700" />
              </div>
              <div className="text-3xl font-bold text-serve-green-600 mb-1">50+</div>
              <p className="text-xs font-semibold text-gray-900">Volunteers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Board of Trustees */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Board of Trustees
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our trustees provide strategic guidance and governance to ensure SERVE continues 
              to deliver high-quality services to our community
            </p>
          </div>

          {/* Trustees Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {trustees.map((trustee, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100 group">
                <div className="relative h-72 bg-gradient-to-br from-serve-blue-100 to-serve-green-100">
                  <Image
                    src={trustee.image}
                    alt={trustee.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{trustee.name}</h3>
                  <p className="text-sm font-semibold text-serve-blue-600 mb-2">{trustee.role}</p>
                  <p className="text-xs text-gray-600">{trustee.expertise}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Governance Info */}
          <div className="bg-gradient-to-br from-serve-blue-50 to-white rounded-2xl p-8 border border-serve-blue-100 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Governance & Oversight</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              SERVE is governed by a dedicated Board of Trustees who bring diverse expertise in healthcare, 
              social care, finance, and community development. Our trustees volunteer their time and skills 
              to ensure we maintain the highest standards of care and financial stewardship.
            </p>
            <div className="bg-white rounded-xl p-6 border border-serve-blue-200">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Key Responsibilities:</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start">
                  <span className="text-serve-blue-600 mr-2">•</span>
                  <span>Strategic planning and organizational development</span>
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
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-serve-blue-600 to-serve-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Want to learn more about our services or how we can help?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:01933315555"
              className="inline-flex items-center justify-center bg-white text-serve-blue-700 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold transition-all"
            >
              <PhoneIcon className="w-5 h-5 mr-2" />
              01933 315555
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-serve-green-600 hover:bg-serve-green-700 text-white px-8 py-4 rounded-xl font-semibold transition-all"
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