import { 
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline'
import Image from 'next/image'

export default function WhyChooseSERVE() {
  const features = [
    {
      title: "Compassionate Care",
      description: "Every person we support receives personalised attention with dignity, respect, and genuine kindness",
      color: "from-rose-100 to-pink-100",
      iconColor: "text-rose-600",
      iconPath: <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    },
    {
      title: "Flexible Support",
      subtitle: "Your Way, Your Time",
      description: "From one-off visits to ongoing care packages, we adapt our services to fit your unique needs and schedule",
      color: "from-blue-100 to-indigo-100",
      iconColor: "text-blue-600",
      iconPath: <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
    },
    {
      title: "Community Rooted",
      subtitle: "Northamptonshire Born & Bred",
      description: "A local charity with deep connections to our community, serving our neighbours for over 40 years",
      color: "from-green-100 to-emerald-100",
      iconColor: "text-green-600",
      iconPath: <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    },
    {
      title: "Trusted Excellence",
      subtitle: "40+ Years of Service",
      description: "Four decades of experience helping people live independently at home with confidence and security",
      color: "from-yellow-100 to-amber-100",
      iconColor: "text-yellow-600",
      iconPath: <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    }
  ]

  return (
    <section className="py-20 bg-linear-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-serve-blue-100 text-serve-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            Trusted Home Care Provider
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="text-cyan-600">Why Choose</span>{' '}
            <span className="text-red-600">SERVE?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            For over 40 years, we&apos;ve been Northamptonshire&apos;s most trusted care charity,
            supporting older people and adults with disabilities to live independently at home.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => {
            return (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-serve-blue-200 group"
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4 bg-linear-to-br ${feature.color} shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                  <svg className={`w-7 h-7 ${feature.iconColor}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    {feature.iconPath}
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">{feature.title}</h3>
                {feature.subtitle && (
                  <p className="text-sm font-semibold text-serve-blue-600 mb-3">{feature.subtitle}</p>
                )}
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>

        {/* Our Story & Image */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
          
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
                provides personalised care that helps people maintain their independence, dignity, and quality of life.
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

          {/* Large Image */}
          <div className="relative h-full min-h-[400px] lg:min-h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/community/bigchat5.webp"
              alt="SERVE team providing compassionate care"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent"></div>
          </div>
        </div>

      </div>
    </section>
  )
}
