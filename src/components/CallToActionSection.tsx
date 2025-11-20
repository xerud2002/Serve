import Image from 'next/image'
import Link from 'next/link'

export default function CallToActionSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Home Care Assessment Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-serve-blue-100 text-serve-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
            </svg>
            Start Your Care Journey
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="text-cyan-600">Personalised Care</span>{' '}
            <span className="text-red-600">Starts with Understanding Your Needs</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Take the first step towards personalised care with a comprehensive home assessment. Our compassionate, 
            award-winning team will visit you at home to understand your unique needs and create a tailored care plan 
            that helps you maintain independence, dignity, and quality of life.
          </p>
          
          {/* What to Expect Cards with Images */}
          <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
            {/* Card 1 - Expert Guidance (was 3rd) */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/images/community/bigchat4,jpg.webp"
                  alt="Award-winning care team"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Friendly Home Visit</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Comfortable, no-pressure assessment in the familiar surroundings of your own home
                </p>
              </div>
            </div>
            
            

            {/* Card 3 - Personal Plan (was 2nd) */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/images/community/bigchat6.webp"
                  alt="Personalised care planning"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Tailored Care Plan</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Care solutions designed around your specific needs, preferences, and lifestyle
                </p>
              </div>
            </div>
            
            {/* Card 4 - Community Support (NEW) */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/images/community/bigchat3.webp"
                  alt="Community support and activities"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Ongoing Support</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Regular check-ins and adjustments to ensure your care plan continues to meet your needs
                </p>
              </div>
            </div>
          </div>
          
          {/* CTA Button */}
          <Link 
            href="/contact"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-serve-green-600 to-serve-green-700 hover:from-serve-green-700 hover:to-serve-green-800 text-white font-bold px-12 py-5 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-2xl"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Request a Home Assessment
          </Link>
        </div>


      </div>
    </section>
  )
}