import { Metadata } from 'next'
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
  HomeIcon,
  TruckIcon,
  BeakerIcon,
  CalendarDaysIcon,
  AcademicCapIcon,
  ShieldCheckIcon,
  FaceSmileIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Volunteer With SERVE - Make a Difference in Northamptonshire',
  description: 'Join SERVE\'s volunteer team and make a real difference in your community. Flexible opportunities in befriending, transport, events, and administration.',
  keywords: 'volunteer, volunteering opportunities, community service, befriending, Northamptonshire volunteers, charity work',
}

const volunteerOpportunities = [
  {
    title: 'Befriending Volunteer',
    icon: HeartIcon,
    commitment: '2-3 hours per week',
    description: 'Provide companionship and support to reduce social isolation',
    responsibilities: [
      'Regular visits to clients in their homes',
      'Friendly conversation and emotional support',
      'Accompanying to social activities',
      'Light assistance with daily tasks',
      'Building meaningful relationships'
    ],
    requirements: [
      'Good communication skills',
      'Empathy and patience',
      'Reliable and punctual',
      'Own transport preferred'
    ]
  },
  {
    title: 'Community Transport Assistant',
    icon: TruckIcon,
    commitment: '4-6 hours per week',
    description: 'Help with our community transport service for vulnerable adults',
    responsibilities: [
      'Assist passengers boarding and alighting',
      'Provide support during journeys',
      'Help with shopping and errands',
      'Ensure passenger safety and comfort',
      'Maintain friendly, professional service'
    ],
    requirements: [
      'Full, clean driving license',
      'Patient and caring nature',
      'Physical fitness for assistance',
      'Professional attitude'
    ]
  },
  {
    title: 'Events & Activities Volunteer',
    icon: CalendarDaysIcon,
    commitment: 'Flexible hours',
    description: 'Support day centre activities and community events',
    responsibilities: [
      'Assist with day centre activities',
      'Help organize community events',
      'Support social clubs and outings',
      'Craft and activity assistance',
      'Event setup and coordination'
    ],
    requirements: [
      'Creative and enthusiastic',
      'Good interpersonal skills',
      'Flexible availability',
      'Team player attitude'
    ]
  },
  {
    title: 'Administrative Support',
    icon: BeakerIcon,
    commitment: '3-4 hours per week',
    description: 'Provide essential administrative support to our team',
    responsibilities: [
      'Data entry and filing',
      'Phone answering and reception',
      'Newsletter preparation',
      'Event coordination support',
      'General office duties'
    ],
    requirements: [
      'Basic computer skills',
      'Organized and detail-oriented',
      'Good telephone manner',
      'Reliable attendance'
    ]
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
    description: 'Meet with our volunteer coordinator for an informal discussion about your interests and availability.',
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

const testimonials = [
  {
    quote: "Volunteering with SERVE has been incredibly rewarding. I've made a real friend through befriending, and knowing I'm helping someone feel less lonely makes my week.",
    name: "Sarah Johnson",
    role: "Befriending Volunteer, 2 years"
  },
  {
    quote: "The team at SERVE made me feel so welcome from day one. The training was excellent, and I love being part of such a caring organization.",
    name: "David Mitchell",
    role: "Transport Volunteer, 3 years"
  },
  {
    quote: "I started volunteering after retirement and it's given me such purpose. The staff are supportive and the clients are wonderful - I wouldn't change it for anything.",
    name: "Margaret Thompson",
    role: "Events Volunteer, 1 year"
  }
]

export default function VolunteerPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-serve-green-900 via-serve-green-800 to-serve-green-700 text-white overflow-hidden">
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

              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Volunteer with <span className="text-serve-green-200">SERVE</span>
              </h1>
              
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
                  <div className="font-bold text-lg mb-2">50+ Volunteers</div>
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

      {/* Volunteer Opportunities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Volunteer Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from a variety of volunteer roles that match your interests, skills, and availability. 
              Every role is vital to helping us support our community.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {volunteerOpportunities.map((opportunity, index) => {
              const IconComponent = opportunity.icon
              return (
                <div key={index} className="bg-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start mb-6">
                    <div className="bg-serve-green-100 rounded-xl p-4 mr-6">
                      <IconComponent className="w-8 h-8 text-serve-green-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-2xl font-bold text-gray-900">{opportunity.title}</h3>
                        <span className="bg-serve-green-100 text-serve-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                          {opportunity.commitment}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-6 leading-relaxed">{opportunity.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">What you'll do:</h4>
                      <ul className="space-y-2">
                        {opportunity.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="flex items-start text-gray-700 text-sm">
                            <CheckIcon className="w-4 h-4 text-serve-green-600 mr-2 mt-0.5 flex-shrink-0" />
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">What we need:</h4>
                      <ul className="space-y-2">
                        {opportunity.requirements.map((requirement, idx) => (
                          <li key={idx} className="flex items-start text-gray-700 text-sm">
                            <CheckIcon className="w-4 h-4 text-serve-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                            {requirement}
                          </li>
                        ))}
                      </ul>
                    </div>
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

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Volunteer Stories
            </h2>
            <p className="text-xl text-gray-600">
              Hear from our volunteers about their experiences with SERVE
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="border-t border-gray-200 pt-6">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <VolunteerForm />

      {/* CTA Section */}
      <section className="py-20 bg-serve-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Questions About Volunteering?
          </h2>
          <p className="text-xl opacity-90 mb-10 leading-relaxed">
            Our volunteer coordinator is here to answer any questions and help you find 
            the perfect volunteer opportunity that matches your interests and availability.
          </p>
          
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