import { 
  ShieldCheckIcon, 
  HeartIcon,
  UsersIcon,
  ClockIcon,
  ArrowTopRightOnSquareIcon,
  CheckBadgeIcon
} from '@heroicons/react/24/outline'
import { TrophyIcon as TrophyIconSolid } from '@heroicons/react/24/solid'

export default function WhyChooseSERVE() {
  const achievements = [
    {
      icon: TrophyIconSolid,
      title: "Award-Winning Care",
      subtitle: "Great British Care Awards 2024",
      description: "Winner: Best Homecare Team, East Midlands",
      highlight: true
    },
    {
      icon: ShieldCheckIcon,
      title: "CQC Registered",
      subtitle: "Care Quality Commission",
      description: "Officially regulated and approved care provider"
    },
    {
      icon: ClockIcon,
      title: "40+ Years Experience",
      subtitle: "Trusted Since 1980s",
      description: "Four decades of compassionate community care"
    },
    {
      icon: CheckBadgeIcon,
      title: "Local Charity",
      subtitle: "Northamptonshire Based",
      description: "Deeply rooted in our local community"
    }
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
                className={`relative group ${achievement.highlight ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                <div className={`${achievement.highlight 
                  ? 'absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl opacity-20 group-hover:opacity-30 blur transition duration-300' 
                  : 'absolute -inset-0.5 bg-gradient-to-r from-serve-blue-400 to-serve-blue-600 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-300'}`}></div>
                <div className={`relative bg-white rounded-2xl p-6 h-full shadow-lg hover:shadow-xl transition-all duration-300 ${achievement.highlight ? 'border-2 border-yellow-300' : 'border border-gray-100'}`}>
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${achievement.highlight ? 'bg-gradient-to-br from-yellow-100 to-orange-100' : 'bg-gradient-to-br from-serve-blue-100 to-serve-blue-200'}`}>
                    <IconComponent className={`w-6 h-6 ${achievement.highlight ? 'text-yellow-700' : 'text-serve-blue-700'}`} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{achievement.title}</h3>
                  <p className="text-sm font-semibold text-serve-blue-600 mb-2">{achievement.subtitle}</p>
                  <p className="text-sm text-gray-600">{achievement.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Our Story & Values */}
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
                Today, we&apos;re proud to be a CQC registered care provider, serving hundreds of families 
                across Northamptonshire. Our award-winning team provides personalized care that helps people 
                maintain their independence, dignity, and quality of life.
              </p>
              <p>
                From our humble beginnings in the 1980s to winning the prestigious Great British Care Awards 
                in 2024, our commitment has never wavered: putting people first, always.
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
                <ShieldCheckIcon className="w-5 h-5 mr-2" />
                View Our CQC Inspection Report
                <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Core Values */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Values</h3>
            <div className="space-y-4">
              {values.map((value, index) => {
                const IconComponent = value.icon
                return (
                  <div key={index} className="flex gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-serve-blue-100 to-serve-blue-200 flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-serve-blue-700" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{value.title}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
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
