import { MapPinIcon, HeartIcon, ShieldCheckIcon, UsersIcon } from '@heroicons/react/24/outline'
import OptimizedImage from './OptimizedImage'

export default function About() {
  const milestones = [
    { year: '1980s', event: 'SERVE founded to support Northamptonshire community' },
    { year: '1990s', event: 'Expanded services to include homecare and day care' },
    { year: '2000s', event: 'Became CQC registered care provider' },
    { year: '2024', event: 'Won Best Homecare Team, East Midlands' }
  ]

  const values = [
    {
      icon: HeartIcon,
      title: 'Compassion',
      description: 'We care deeply about every person we support, treating them with kindness and respect.'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Excellence',
      description: 'We maintain the highest standards of care, continuously improving our services.'
    },
    {
      icon: UsersIcon,
      title: 'Community',
      description: 'We believe in the power of community and work to strengthen local connections.'
    }
  ]

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <div className="mb-6">
              <span className="text-serve-blue-600 font-semibold text-lg">Our Story</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-2 leading-tight">
                40+ Years of Caring for Our Community
              </h2>
            </div>
            
            <div className="prose prose-lg text-gray-600 space-y-6">
              <p className="text-xl leading-relaxed">
                SERVE began as a simple idea: that everyone deserves to live with dignity and independence, 
                regardless of age or disability. What started as a small community initiative has grown into 
                Northamptonshire's most trusted care charity.
              </p>
              
              <p>
                Today, we&apos;re proud to be a CQC registered care provider, serving hundreds of families 
                across the county. Our recent recognition as the &ldquo;Best Homecare Team in the East Midlands&rdquo; 
                reflects our unwavering commitment to excellence.
              </p>
              
              <p>
                But beyond awards and recognition, what drives us is the simple joy of helping people 
                live the lives they choose—safely, independently, and surrounded by community.
              </p>
            </div>
            
            {/* Credentials */}
            <div className="grid grid-cols-2 gap-4 mt-8 mb-8">
              <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-200">
                <div className="text-3xl font-bold text-serve-blue-800">1043321</div>
                <div className="text-sm text-gray-600 mt-1">Charity Number</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-200">
                <div className="text-3xl font-bold text-serve-green-800">2951827</div>
                <div className="text-sm text-gray-600 mt-1">Company Number</div>
              </div>
            </div>
            
            <a
              href="/about"
              className="group inline-flex items-center bg-serve-blue-600 hover:bg-serve-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              aria-label="Learn more about SERVE's full story"
            >
              Our Full Story
              <svg className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
          
          {/* Image and Mission & Vision */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            {/* SERVE Logo */}
            <div className="flex justify-center items-center h-48 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 mb-8">
              <OptimizedImage
                src="/images/serve.png"
                alt="SERVE - Supporting Independence"
                width={400}
                height={200}
                className="h-40 w-auto"
                priority
              />
            </div>
            
            <h3 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Mission & Vision</h3>
            
            <div className="space-y-8">
              <div className="relative">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-serve-blue-500 to-serve-blue-600 rounded-full"></div>
                <div className="pl-8">
                  <h4 className="font-bold text-xl text-gray-900 mb-3">Mission</h4>
                  <p className="text-gray-600 leading-relaxed">
                    To help adults who require support services to maintain their independence 
                    on a daily basis, enabling them to live fulfilling lives in their own homes and communities.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-serve-green-500 to-serve-green-600 rounded-full"></div>
                <div className="pl-8">
                  <h4 className="font-bold text-xl text-gray-900 mb-3">Vision</h4>
                  <p className="text-gray-600 leading-relaxed">
                    A compassionate community that fully respects the rights of older people and people 
                    with disabilities, where age and differing abilities are not barriers to opportunity, 
                    fulfilment and dignity.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Location */}
            <div className="mt-8 p-6 bg-gray-50 rounded-2xl border border-gray-200">
              <div className="flex items-start">
                <MapPinIcon className="w-6 h-6 text-serve-blue-600 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-bold text-gray-900 mb-1">Head Office</div>
                  <div className="text-gray-600">
                    8 West Street<br />
                    Rushden, Northants<br />
                    NN10 0RT
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and every decision we make.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <div key={index} className="text-center group">
                  <div className="bg-serve-blue-100 rounded-full p-6 w-24 h-24 mx-auto mb-6 group-hover:bg-serve-blue-200 transition-colors">
                    <IconComponent className="w-12 h-12 text-serve-blue-600 mx-auto" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Journey</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="text-center">
                <div className="bg-serve-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  {index + 1}
                </div>
                <div className="font-bold text-serve-blue-800 mb-2">{milestone.year}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{milestone.event}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}