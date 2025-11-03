import { 
  HomeIcon, 
  HeartIcon, 
  TruckIcon, 
  UserGroupIcon, 
  HandRaisedIcon,
  SparklesIcon,
  CheckCircleIcon 
} from '@heroicons/react/24/outline'

export default function Services() {
  const services = [
    {
      id: 'personal-care',
      title: 'Personal & Domestic Care',
      description: 'Award-winning CQC registered homecare services. We provide compassionate personal care, medication management, meal preparation, and domestic support to help you stay safe and comfortable at home.',
      icon: HomeIcon,
      link: '/services/personal-care',
      featured: true,
      highlights: ['CQC Registered', 'Award Winning', 'Trained Carers', 'Tailored Plans']
    },
    {
      id: 'day-care',
      title: 'Day Care & Meals on Wheels',
      description: 'The Ron Manning Day and Activity Centre offers a warm, welcoming environment with engaging activities, social interaction, and nutritious two-course meals delivered to your door.',
      icon: HeartIcon,
      link: '/services/day-care',
      highlights: ['Social Activities', 'Nutritious Meals', 'Transport Included', 'Friendly Staff']
    },
    {
      id: 'transport',
      title: 'Community Transport',
      description: 'Reliable, affordable transport to medical appointments, hospital visits, and family connections. Our drivers understand the needs of older people and those with mobility challenges.',
      icon: TruckIcon,
      link: '/services/transport',
      highlights: ['Medical Appointments', 'Hospital Visits', 'Trained Drivers', 'Affordable Rates']
    },
    {
      id: 'befriending',
      title: 'Countywide Befriending',
      description: 'Combat loneliness with our friendly befriending service. We provide regular companionship and emotional support to vulnerable adults across all of Northamptonshire.',
      icon: UserGroupIcon,
      link: '/services/befriending',
      highlights: ['Combat Loneliness', 'Regular Visits', 'Emotional Support', 'Countywide Coverage']
    },
    {
      id: 'carers',
      title: 'Carers Support',
      description: 'Supporting those who care for family members with respite services, practical advice, and emotional support. Because carers need care too.',
      icon: HandRaisedIcon,
      link: '/services/carers',
      highlights: ['Respite Care', 'Practical Advice', 'Emotional Support', 'Carer Training']
    },
    {
      id: 'community',
      title: 'Community Services',
      description: 'A range of community support including day trips, hearing aid servicing, DBS checks, and other services that help maintain independence and community connections.',
      icon: SparklesIcon,
      link: '/services/community',
      highlights: ['Day Trips', 'Hearing Aid Service', 'DBS Checks', 'Community Events']
    },
  ]

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything we do is tailored to support and improve the daily lives of older people 
            and adults living with a disability or chronic medical condition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <div
                key={service.id}
                className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-serve-blue-200 ${
                  service.featured ? 'ring-2 ring-serve-green-500 relative transform hover:-translate-y-2' : 'hover:-translate-y-1'
                }`}
              >
                {service.featured && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-serve-green-500 to-serve-green-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      🏆 Award Winner
                    </span>
                  </div>
                )}
                
                <div className="text-center">
                  {/* Icon */}
                  <div className="bg-serve-blue-50 rounded-full p-4 w-20 h-20 mx-auto mb-6 group-hover:bg-serve-blue-100 transition-colors">
                    <IconComponent className="w-12 h-12 text-serve-blue-600 mx-auto" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-serve-blue-800 transition-colors">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  {/* Highlights */}
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {service.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-700">
                        <CheckCircleIcon className="w-4 h-4 text-serve-green-500 mr-2 flex-shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA Button */}
                  <a
                    href={service.link}
                    className="group/btn inline-flex items-center bg-serve-blue-600 hover:bg-serve-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    Learn More
                    <svg className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-16">
          <a
            href="/services"
            className="bg-serve-blue-600 hover:bg-serve-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors focus-visible:focus"
          >
            View All Services
          </a>
        </div>
      </div>
    </section>
  )
}