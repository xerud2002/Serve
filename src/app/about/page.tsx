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
  DocumentTextIcon
} from '@heroicons/react/24/outline'
import MajorTitle from '@/components/MajorTitle'

// Note: This page needs to be a client component for the interactive trustee sections
// SEO metadata is defined in the parent layout or can be added via generateMetadata in future refactor

const teamMembers = [
  {
    name: 'Tony Gibbs',
    role: 'Chief Executive Officer',
    image: '/images/team/Tony2.webp',
    description: 'Leading organizational strategy and operations'
  }
]

const managementTeam = [
  {
    name: 'Louise Wiltshire',
    role: 'Executive Assistant'
  },
  {
    name: 'Sam Horne',
    role: 'Registered Care Manager'
  },
  {
    name: 'Cheryl Smith',
    role: 'Befriending Manager'
  },
  {
    name: 'Mario Brown',
    role: 'Policy and Compliance Manager/Transport Manager'
  },
  {
    name: 'Emily Lennox',
    role: 'Finance Manager'
  },
  {
    name: 'Sean Silver',
    role: 'Project Manager'
  }
]

const trustees = [
  {
    name: 'Anita Harvey',
    role: 'Director / Chair',
    image: '/images/trustees/placeholder.svg',
    dateAppointed: 'January 2024',
    expertise: 'Board Leadership & Governance'
  },
  {
    name: 'Zara Cunliffe',
    role: 'Director / Deputy Chair',
    image: '/images/trustees/placeholder.svg',
    dateAppointed: 'April 2016',
    expertise: 'Legal & Compliance'
  },
  {
    name: 'Jess Bermudez',
    role: 'Director / Trustee',
    image: '/images/trustees/placeholder.svg',
    dateAppointed: 'July 2019',
    expertise: 'Heritage & Community'
  },
  {
    name: 'Maureen Core',
    role: 'Director / Trustee',
    image: '/images/trustees/placeholder.svg',
    dateAppointed: 'June 2016',
    expertise: 'Care Services & Operations'
  },
  {
    name: 'Mike Huland',
    role: 'Director / Trustee',
    image: '/images/trustees/placeholder.svg',
    dateAppointed: 'September 2025',
    expertise: 'Strategic Development'
  },
  {
    name: 'Jimmy James',
    role: 'Director / Trustee',
    image: '/images/trustees/placeholder.svg',
    dateAppointed: 'July 2019',
    expertise: 'Heritage & Community'
  },
  {
    name: 'Simon Partridge',
    role: 'Director / Trustee',
    image: '/images/trustees/placeholder.svg',
    dateAppointed: 'November 2022',
    expertise: 'Finance & Risk Management'
  },
  {
    name: 'Rachel Wilson',
    role: 'Director / Trustee',
    image: '/images/trustees/placeholder.svg',
    dateAppointed: 'January 2024',
    expertise: 'Community & Social Care'
  },
  {
    name: 'I & J Rep Coopted Trustees',
    role: 'Coopted Trustees',
    image: '/images/trustees/placeholder.svg',
    dateAppointed: 'January 2024',
    expertise: 'Community & Social Care'
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
            <MajorTitle primary="About" secondary="SERVE" dark />
            <p className="text-xl text-blue-100 leading-relaxed">
              For over 40 years, SERVE has been providing award-winning care services to help older people 
              and adults with disabilities maintain their independence across Northamptonshire.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Story
              </h2>
              <p className="text-lg text-gray-600">
                Four decades of compassionate care and community support
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-gray-100">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Since the 1980s, SERVE has been a cornerstone of care in Northamptonshire, born from a simple 
                  yet powerful vision: to ensure that older people and adults with disabilities can live with 
                  dignity, independence, and joy in their own homes and communities.
                </p>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  What began as a small voluntary initiative has grown into an award-winning charity providing 
                  comprehensive care services across the county. Our journey has been shaped by the thousands 
                  of individuals we've had the privilege to support, each with their own unique story, challenges, 
                  and dreams.
                </p>

                <div className="bg-serve-blue-50 rounded-2xl p-6 my-8 border-l-4 border-serve-blue-600">
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
                  Our success isn't measured in numbers alone, though we're proud to serve hundreds of people 
                  each year. It's measured in the smiles of our service users, the relief of family members who 
                  know their loved ones are in safe hands, and the strengthened bonds within our community.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  From our CQC-registered homecare services to our vibrant Ron Manning Day and Activity Centre, 
                  from our reliable community transport to our countywide befriending programme. Every service 
                  we provide is built on the foundation of respect, compassion, and excellence.
                </p>

                <div className="grid md:grid-cols-3 gap-6 my-8">
                  <div className="text-center p-6 bg-gradient-to-br from-serve-blue-50 to-white rounded-xl border border-serve-blue-100">
                    <div className="text-4xl font-bold text-serve-blue-600 mb-2">40+</div>
                    <p className="text-sm font-semibold text-gray-700">Years of Service</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-serve-green-50 to-white rounded-xl border border-serve-green-100">
                    <div className="text-4xl font-bold text-serve-green-600 mb-2">1000s</div>
                    <p className="text-sm font-semibold text-gray-700">Lives Touched</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-white rounded-xl border border-yellow-100">
                    <div className="text-4xl font-bold text-yellow-600 mb-2">2024</div>
                    <p className="text-sm font-semibold text-gray-700">Award Winner</p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Today, as we continue to evolve and expand our services, our commitment remains unchanged: 
                  to provide exceptional care that empowers people to live their best lives. With our dedicated 
                  staff, passionate volunteers, and the unwavering support of our community, we're writing the 
                  next chapter of our story—one filled with hope, dignity, and compassion for all.
                </p>
              </div>
            </div>
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

          {/* CEO Section */}
          <div className="max-w-md mx-auto mb-12">
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

          {/* Management Team List */}
          <div className="max-w-4xl mx-auto mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Management Team</h3>
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <div className="grid md:grid-cols-2 gap-4">
                {managementTeam.map((member, index) => (
                  <div key={index} className="py-3 border-b border-gray-200 last:border-0">
                    <h4 className="text-base font-bold text-gray-900">{member.name}</h4>
                    <p className="text-sm font-semibold text-serve-blue-600 mt-1">{member.role}</p>
                  </div>
                ))}
              </div>
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

          {/* Trustees List - Simple Name and Position Format */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <div className="space-y-4">
                {trustees.map((trustee, index) => (
                  <div key={index} className="py-4 border-b border-gray-200 last:border-0">
                    <h3 className="text-lg font-bold text-gray-900">{trustee.name}</h3>
                    <p className="text-sm font-semibold text-serve-blue-600 mt-1">{trustee.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Governance Info */}
          <div className="bg-gradient-to-br from-serve-blue-50 to-white rounded-2xl p-8 border border-serve-blue-100 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Governance & Oversight</h3>
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
            <div className="text-center">
              <Link 
                href="/about/annual-report-2024"
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
              <div className="w-12 h-12 bg-gradient-to-br from-serve-blue-100 to-serve-blue-200 rounded-xl flex items-center justify-center">
                <DocumentTextIcon className="w-6 h-6 text-serve-blue-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Trustee Board Meetings</h3>
            </div>

            <p className="text-gray-700 mb-8">
              In the interests of transparency and accountability, we publish details of our trustee board meetings, 
              including minutes of past meetings and schedules for upcoming meetings.
            </p>

            {/* Upcoming Meetings */}
            <div className="mb-8">
              <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-serve-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Upcoming Meetings
              </h4>
              <div className="bg-serve-blue-50 rounded-xl p-6 border border-serve-blue-200">
                <div className="space-y-4">
                  {/* Sample upcoming meeting - update with real dates */}
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-semibold text-gray-900">Quarterly Board Meeting - Q4 2025</p>
                        <p className="text-sm text-gray-600 mt-1">
                          <span className="font-medium">Date:</span> To be confirmed
                        </p>
                        <p className="text-sm text-gray-600">
                          <span className="font-medium">Time:</span> To be confirmed
                        </p>
                        <p className="text-sm text-gray-600">
                          <span className="font-medium">Location:</span> SERVE Office, Rushden
                        </p>
                      </div>
                      <span className="text-xs bg-serve-green-100 text-serve-green-700 px-3 py-1 rounded-full font-semibold">
                        Scheduled
                      </span>
                    </div>
                  </div>
                  
                  {/* Add more upcoming meetings here */}
                  <p className="text-sm text-gray-500 italic text-center">
                    Meeting dates are scheduled quarterly. Check back for updates.
                  </p>
                </div>
              </div>
            </div>

            {/* Past Meeting Minutes */}
            <div className="mb-8">
              <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-serve-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Meeting Minutes
              </h4>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="space-y-3">
                  {/* Sample meeting minutes - update with real data */}
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div>
                      <p className="font-semibold text-gray-900">Board Meeting Minutes - September 2025</p>
                      <p className="text-sm text-gray-600 mt-1">
                        <span className="font-medium">Date:</span> September 15, 2025
                      </p>
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Attendees:</span> 6 of 7 trustees present
                      </p>
                      <p className="text-sm text-gray-600 mt-2">
                        <span className="font-medium">Key Decisions:</span> Approved Q3 financials, Strategic plan review, New service expansion discussion
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div>
                      <p className="font-semibold text-gray-900">Board Meeting Minutes - June 2025</p>
                      <p className="text-sm text-gray-600 mt-1">
                        <span className="font-medium">Date:</span> June 20, 2025
                      </p>
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Attendees:</span> 7 of 7 trustees present
                      </p>
                      <p className="text-sm text-gray-600 mt-2">
                        <span className="font-medium">Key Decisions:</span> Annual report approval, Budget review, CQC compliance update
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div>
                      <p className="font-semibold text-gray-900">Board Meeting Minutes - March 2025</p>
                      <p className="text-sm text-gray-600 mt-1">
                        <span className="font-medium">Date:</span> March 18, 2025
                      </p>
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Attendees:</span> 7 of 7 trustees present
                      </p>
                      <p className="text-sm text-gray-600 mt-2">
                        <span className="font-medium">Key Decisions:</span> Q1 performance review, Volunteer recruitment initiative, Fundraising strategy
                      </p>
                    </div>
                  </div>

                  {/* Placeholder for more minutes */}
                  <p className="text-sm text-gray-500 italic text-center pt-4">
                    Additional meeting minutes available upon request
                  </p>
                </div>
              </div>
            </div>

            {/* Board Operations */}
            <div className="bg-gradient-to-br from-serve-blue-50 to-white rounded-xl p-6 border border-serve-blue-100">
              <h4 className="text-lg font-bold text-gray-900 mb-3">How the Board Operates</h4>
              <div className="space-y-3 text-sm text-gray-700">
                <p>
                  <span className="font-semibold">Meeting Frequency:</span> The Board of Trustees meets quarterly 
                  to review organizational performance, approve strategic initiatives, and ensure compliance with 
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
                  <span className="font-semibold">Contact:</span> For inquiries about board meetings or to request 
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