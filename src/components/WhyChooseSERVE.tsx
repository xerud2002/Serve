import { 
  ArrowTopRightOnSquareIcon,
  HeartIcon,
  CalendarDaysIcon,
  MapPinIcon,
  ClockIcon
} from '@heroicons/react/24/outline'
import Image from 'next/image'

export default function WhyChooseSERVE() {
  const features = [
    {
      title: "Compassionate Care",
      description: "Every person we support receives personalised attention with dignity, respect, and genuine kindness",
      gradient: "from-rose-500 to-pink-600",
      bgGradient: "from-rose-50 to-pink-50",
      Icon: HeartIcon
    },
    {
      title: "Flexible Support",
      subtitle: "Your Way, Your Time",
      description: "From one-off visits to ongoing care packages, we adapt our services to fit your unique needs and schedule",
      gradient: "from-serve-blue-500 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-50",
      Icon: CalendarDaysIcon
    },
    {
      title: "Community Rooted",
      subtitle: "Northamptonshire Born & Bred",
      description: "A local charity with deep connections to our community, serving our neighbours for over 40 years",
      gradient: "from-serve-green-500 to-emerald-600",
      bgGradient: "from-green-50 to-emerald-50",
      Icon: MapPinIcon
    },
    {
      title: "Trusted Excellence",
      subtitle: "40+ Years of Service",
      description: "Four decades of experience helping people live independently at home with confidence and security",
      gradient: "from-amber-500 to-orange-600",
      bgGradient: "from-amber-50 to-orange-50",
      Icon: ClockIcon
    }
  ]

  return (
    <section className="py-24 bg-linear-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-serve-blue-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-serve-green-100/30 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-rose-100/30 rounded-full blur-3xl translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-linear-to-r from-amber-100 to-yellow-50 text-amber-800 px-5 py-2.5 rounded-full text-sm font-semibold mb-6 shadow-sm">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            Trusted Home Care Provider
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-linear-to-r from-serve-blue-600 to-cyan-500 bg-clip-text text-transparent">Why Choose</span>{' '}
            <span className="bg-linear-to-r from-rose-500 to-red-600 bg-clip-text text-transparent">SERVE?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            For over 40 years, we&apos;ve been Northamptonshire&apos;s most trusted care charity,
            supporting older people and adults with disabilities to live independently at home.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => {
            const IconComponent = feature.Icon
            return (
              <div 
                key={index} 
                className="group relative"
              >
                {/* Gradient border on hover */}
                <div className={`absolute inset-0 bg-linear-to-br ${feature.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`} />
                <div className={`absolute inset-0 bg-linear-to-br ${feature.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 group-hover:-translate-y-1 h-full">
                  <div className="absolute inset-0.5 bg-white rounded-3xl" />
                  
                  <div className="relative">
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4 bg-linear-to-br ${feature.bgGradient} shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`w-7 h-7 bg-linear-to-br ${feature.gradient} bg-clip-text`} style={{ color: 'transparent', background: `linear-gradient(to bottom right, var(--tw-gradient-stops))`, backgroundClip: 'text', WebkitBackgroundClip: 'text' }} />
                      <IconComponent className={`w-7 h-7 absolute`} style={{ color: feature.gradient.includes('rose') ? '#e11d48' : feature.gradient.includes('blue') ? '#0284c7' : feature.gradient.includes('green') ? '#16a34a' : '#d97706' }} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">{feature.title}</h3>
                    {feature.subtitle && (
                      <p className={`text-sm font-semibold mb-3 bg-linear-to-r ${feature.gradient} bg-clip-text text-transparent`}>{feature.subtitle}</p>
                    )}
                    <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Our Story & Image */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Our Story */}
          <div>
            <div className="inline-flex items-center bg-linear-to-r from-serve-blue-100 to-cyan-50 text-serve-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Our Story
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              <span className="bg-linear-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Four Decades of </span>
              <span className="bg-linear-to-r from-serve-blue-600 to-cyan-500 bg-clip-text text-transparent">Compassionate Care</span>
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p className="text-lg">
                SERVE began as a simple idea: that everyone deserves to live with dignity and independence, 
                regardless of age or disability. What started as a small community initiative has grown into 
                Northamptonshire&apos;s most trusted care charity.
              </p>
              <p>
                Today, we&apos;re proud to be a CQC registered care provider and winner of the Great British Care Awards 2024 
                (Best Homecare Team, East Midlands), serving hundreds of families across Northamptonshire. Our dedicated team 
                provides personalised care that helps people maintain their independence, dignity, and quality of life.
              </p>
              <p>
                From our humble beginnings in the 1980s to becoming an award-winning care provider, 
                our commitment has never wavered: putting people first, always.
              </p>
            </div>

            {/* CQC Link */}
            <div className="mt-8">
              <a 
                href="https://www.cqc.org.uk/location/1-2165219210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-linear-to-r from-serve-blue-600 to-cyan-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                View Our CQC Inspection Report
                <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Large Image with floating badge */}
          <div className="relative">
            <div className="relative h-full min-h-[400px] lg:min-h-[550px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/community/bigchat5.webp"
                alt="SERVE team providing compassionate care"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-serve-blue-900/40 via-transparent to-transparent" />
            </div>
            
            {/* Floating award badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-linear-to-br from-yellow-400 to-amber-500 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2L7.5 7H2l4.5 3.5L5 16l5-4 5 4-1.5-5.5L18 7h-5.5L10 2z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Award Winner 2024</p>
                  <p className="text-xs text-gray-500">Best Homecare Team</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
