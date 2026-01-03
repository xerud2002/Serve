import Image from 'next/image'
import Link from 'next/link'

export default function CallToActionSection() {
  const steps = [
    {
      number: '01',
      title: 'Friendly Home Visit',
      description: 'Comfortable, no-pressure assessment in the familiar surroundings of your own home',
      image: '/images/community/bigchat4,jpg.webp',
      gradient: 'from-serve-blue-500 to-cyan-500',
      bgColor: 'bg-serve-blue-50'
    },
    {
      number: '02',
      title: 'Tailored Care Plan',
      description: 'Care solutions designed around your specific needs, preferences, and lifestyle',
      image: '/images/community/bigchat6.webp',
      gradient: 'from-purple-500 to-violet-500',
      bgColor: 'bg-purple-50'
    },
    {
      number: '03',
      title: 'Ongoing Support',
      description: 'Regular check-ins and adjustments to ensure your care plan continues to meet your needs',
      image: '/images/community/bigchat3.webp',
      gradient: 'from-serve-green-500 to-emerald-500',
      bgColor: 'bg-green-50'
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-linear-to-br from-white via-slate-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-serve-blue-100/40 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-serve-green-100/40 rounded-full blur-3xl translate-x-1/2" />
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-purple-100/30 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-flex items-center bg-linear-to-r from-serve-green-100 to-emerald-50 text-serve-green-800 px-4 md:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-semibold mb-4 md:mb-6 shadow-sm">
            <svg className="w-3.5 h-3.5 md:w-4 md:h-4 mr-1.5 md:mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
            </svg>
            Start Your Care Journey
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            <span className="bg-linear-to-r from-serve-blue-600 to-cyan-500 bg-clip-text text-transparent">Personalised Care</span>
            <span className="block text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-2 bg-linear-to-r from-rose-500 to-red-600 bg-clip-text text-transparent">Starts with Understanding Your Needs</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto mb-4 md:mb-6 leading-relaxed px-2">
            Take the first step towards personalised care with a comprehensive home assessment. Our compassionate, 
            award-winning team will visit you at home to understand your unique needs and create a tailored care plan 
            that helps you maintain independence, dignity, and quality of life.
          </p>
        </div>
        
        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="group relative h-full">
              {/* Connector line (hidden on mobile and last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-linear-to-r from-gray-300 to-gray-200 z-0" />
              )}
              
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
                {/* Step number badge */}
                <div className={`absolute top-4 left-4 z-20 w-12 h-12 bg-linear-to-br ${step.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                  <span className="text-white font-bold text-lg">{step.number}</span>
                </div>
                
                {/* Image */}
                <div className="relative h-48 md:h-56 overflow-hidden shrink-0">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className={`absolute inset-0 bg-linear-to-t ${step.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
                </div>
                
                {/* Content */}
                <div className={`p-5 md:p-6 ${step.bgColor} flex-1 flex flex-col`}>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed flex-1">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Card - Modern Design */}
        <div className="relative max-w-5xl mx-auto">
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-linear-to-r from-serve-green-400 via-emerald-400 to-teal-400 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
          
          {/* Main card */}
          <div className="relative bg-linear-to-br from-serve-green-600 via-serve-green-700 to-emerald-700 rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl overflow-hidden">
            {/* Decorative mesh gradients */}
            <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-white/5 rounded-full -translate-y-1/3 translate-x-1/3 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 md:w-72 h-48 md:h-72 bg-emerald-400/10 rounded-full translate-y-1/3 -translate-x-1/3 blur-3xl" />
            <div className="absolute top-1/2 left-1/2 w-40 md:w-64 h-40 md:h-64 bg-teal-300/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
            
            {/* Dot pattern overlay */}
            <div className="absolute inset-0 opacity-[0.03]">
              <div 
                className="absolute inset-0" 
                style={{
                  backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
                  backgroundSize: '32px 32px'
                }} 
              />
            </div>
            
            <div className="relative text-center space-y-6">
              {/* Badge */}
              <div className="inline-flex">
                <div className="relative group/badge">
                  <div className="absolute -inset-0.5 bg-white/30 rounded-full blur-sm" />
                  <div className="relative inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    Free, No-Obligation Assessment
                  </div>
                </div>
              </div>
              
              {/* Heading */}
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
                Ready to Take the First Step?
              </h3>
              
              {/* Description */}
              <p className="text-white/95 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
                Contact us today to arrange a friendly home visit. There&apos;s no pressure, just compassionate advice tailored to your situation.
              </p>
              
              {/* CTA Button */}
              <div className="pt-2">
                <Link 
                  href="/contact"
                  className="group/btn relative inline-flex items-center gap-3 bg-white hover:bg-green-50 text-serve-green-700 font-bold px-8 md:px-10 py-4 md:py-5 text-base md:text-lg shadow-2xl hover:shadow-white/20 transform hover:scale-[1.02] hover:-translate-y-0.5 transition-all duration-300 rounded-2xl overflow-hidden"
                >
                  {/* Button shimmer effect */}
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
                  
                  <svg className="relative w-6 h-6 group-hover/btn:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="relative">Request a Home Assessment</span>
                </Link>
              </div>
              
              {/* Trust indicators */}
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 pt-4 text-white/80 text-sm">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-emerald-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">Award-Winning Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-emerald-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">CQC Registered</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-emerald-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">40+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}