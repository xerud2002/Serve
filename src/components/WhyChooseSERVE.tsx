import { 
  HeartIcon,
  UsersIcon,
  ClockIcon,
  ArrowTopRightOnSquareIcon,
  HomeIcon,
  HandRaisedIcon,
  TruckIcon,
  SparklesIcon,
  MapPinIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'

export default function WhyChooseSERVE() {
  const features = [
    {
      icon: HeartIcon,
      title: "Compassionate Care",
      description: "Every person we support receives personalized attention with dignity, respect, and genuine kindness",
      color: "from-rose-100 to-pink-100",
      iconColor: "text-rose-600"
    },
    {
      icon: UserGroupIcon,
      title: "Expert Team",
      subtitle: "Professional & Caring",
      description: "Award-winning care professionals who are fully trained, DBS checked, and passionate about what they do",
      color: "from-blue-100 to-indigo-100",
      iconColor: "text-blue-600"
    },
    {
      icon: MapPinIcon,
      title: "Community Rooted",
      subtitle: "Northamptonshire Born & Bred",
      description: "A local charity with deep connections to our community, serving our neighbors for over 40 years",
      color: "from-green-100 to-emerald-100",
      iconColor: "text-green-600"
    },
    {
      icon: SparklesIcon,
      title: "Trusted Excellence",
      subtitle: "40+ Years of Service",
      description: "Four decades of experience helping people live independently at home with confidence and security",
      color: "from-yellow-100 to-amber-100",
      iconColor: "text-yellow-600"
    }
  ]

  const services = [
    {
      icon: HeartIcon,
      title: 'Personal Care',
      description: 'Support with daily living tasks, helping you maintain independence at home.'
    },
    {
      icon: TruckIcon,
      title: 'Community Transport',
      description: 'Safe and reliable transport for appointments, shopping, and social activities.'
    },
    {
      icon: HandRaisedIcon,
      title: 'Befriending',
      description: 'Companionship and social support to reduce isolation and loneliness.'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose SERVE?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            For over 40 years, we&apos;ve been Northamptonshire&apos;s most trusted care charity,
            supporting older people and adults with disabilities to live independently at home.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon
            return (
              <div 
                key={index} 
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-serve-blue-400 to-serve-green-400 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-300"></div>
                <div className="relative bg-white rounded-2xl p-6 h-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 bg-gradient-to-br from-serve-blue-100 to-serve-blue-200">
                    <IconComponent className="w-6 h-6 text-serve-blue-700" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{achievement.title}</h3>
                  <p className="text-sm font-semibold text-serve-blue-600 mb-2">{achievement.subtitle}</p>
                  <p className="text-sm text-gray-600">{achievement.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Our Story & Services */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          
          {/* Our Story */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p className="text-lg">
                SERVE began as a simple idea: that everyone deserves to live with dignity and independence, 
                regardless of age or disability. What started as a small community initiative has grown into 
                Northamptonshire&apos;s most trusted care charity.
              </p>
              <p>
                Today, we&apos;re proud to be a CQC registered care provider and winner of the Great British Care Awards 2024 
                (Best Homecare Team, East Midlands), serving hundreds of families across Northamptonshire. Our dedicated team 
                provides personalized care that helps people maintain their independence, dignity, and quality of life.
              </p>
              <p>
                From our humble beginnings in the 1980s to becoming an award-winning care provider, 
                our commitment has never wavered: putting people first, always.
              </p>
            </div>

            {/* CQC Link */}
            <div className="mt-6">
              <a 
                href="https://www.cqc.org.uk/location/1-2165219210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-serve-blue-600 hover:text-serve-blue-700 font-semibold group"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                View Our CQC Inspection Report
                <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Key Services */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">What We Offer</h3>
            <div className="space-y-4">
              {services.map((service, index) => {
                const IconComponent = service.icon
                return (
                  <div key={index} className="flex gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-serve-green-100 to-serve-green-200 flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-serve-green-700" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{service.title}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
