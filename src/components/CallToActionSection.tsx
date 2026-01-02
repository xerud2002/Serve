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
        
        {/* CTA Card */}
        <div className="relative">
          <div className="absolute inset-0 bg-linear-to-r from-serve-green-500 via-serve-green-600 to-emerald-600 rounded-2xl md:rounded-3xl blur-xl opacity-30" />
          <div className="relative bg-linear-to-br from-serve-green-500 via-serve-green-600 to-emerald-600 rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-14 shadow-2xl overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-48 md:w-72 h-48 md:h-72 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-32 md:w-56 h-32 md:h-56 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative text-center">
              <div className="inline-flex items-center bg-white/20 backdrop-blur text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold mb-4 md:mb-6">
                <svg className="w-3.5 h-3.5 md:w-4 md:h-4 mr-1.5 md:mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Free, No-Obligation Assessment
              </div>
              
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4">Ready to Take the First Step?</h3>
              <p className="text-green-100 text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto px-2">
                Contact us today to arrange a friendly home visit. There&apos;s no pressure, just compassionate advice tailored to your situation.
              </p>
              
              <Link 
                href="/contact"
                className="inline-flex items-center gap-2 md:gap-3 bg-white text-serve-green-700 hover:bg-green-50 font-bold px-6 md:px-10 py-4 md:py-5 text-base md:text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-xl md:rounded-2xl"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Request a Home Assessment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}