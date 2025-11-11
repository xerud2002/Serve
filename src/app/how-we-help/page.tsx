import { Metadata } from 'next'
import FacebookFeed from '@/components/FacebookFeed'
import { HeartIcon, UsersIcon, HomeIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'How We Help | SERVE - Real Stories from Our Community',
  description: 'See how SERVE makes a difference in the lives of older people and adults with disabilities across Northamptonshire. Real stories, photos, and updates from our community.',
  keywords: 'SERVE community impact, care stories, Northamptonshire charity, homecare success stories, day care activities, transport service updates',
  openGraph: {
    title: 'How We Help | SERVE Community Impact',
    description: 'Real stories and updates showing how SERVE supports older people and adults with disabilities in Northamptonshire.',
    type: 'website',
  },
}

export default function HowWeHelpPage() {
  const impactStats = [
    {
      icon: UsersIcon,
      number: '500+',
      label: 'People Supported',
      description: 'Individuals receiving our care services'
    },
    {
      icon: HomeIcon,
      number: '40+',
      label: 'Years of Service',
      description: 'Trusted care since the 1980s'
    },
    {
      icon: HeartIcon,
      number: '100%',
      label: 'Community Focused',
      description: 'Local charity serving local people'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-serve-blue-600 to-serve-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <HeartIcon className="w-5 h-5" />
              <span className="text-sm font-semibold">Real Stories, Real Impact</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              How We Help Our Community
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              Every day, SERVE makes a difference in the lives of older people and adults with disabilities 
              across Northamptonshire. Here are the real stories, moments, and updates from our community.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactStats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="text-center">
                  <div className="bg-serve-blue-100 rounded-full p-6 w-20 h-20 mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-serve-blue-600 mx-auto" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-lg font-semibold text-serve-blue-600 mb-1">{stat.label}</div>
                  <div className="text-gray-600">{stat.description}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Facebook Feed Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest from Our Community
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow our journey and see the daily impact we make through photos, stories, 
              and updates from our Facebook community.
            </p>
          </div>

          <FacebookFeed />

          {/* Follow Us CTA */}
          <div className="text-center mt-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Follow Our Journey
              </h3>
              <p className="text-gray-600 mb-6">
                Stay connected with SERVE on Facebook for daily updates, stories, and behind-the-scenes 
                moments from our care community.
              </p>
              <a
                href="https://www.facebook.com/SERVE234"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Follow SERVE on Facebook
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-serve-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Become Part of Our Story
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            If you or someone you care about could benefit from our services, 
            we&apos;d love to help. Get in touch to learn more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-serve-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-all"
            >
              Contact Us Today
            </a>
            <a
              href="/services"
              className="border-2 border-white text-white hover:bg-white hover:text-serve-blue-600 px-8 py-3 rounded-lg font-semibold transition-all"
            >
              View Our Services
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}