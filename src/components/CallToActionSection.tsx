import { AssessmentBookingButton } from './AssessmentBooking'
import Image from 'next/image'

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
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="text-gray-900">Personalized Care</span>{' '}
            <span className="text-serve-blue-600">Starts with Understanding Your Needs</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Take the first step towards personalized care with a comprehensive home assessment. Our compassionate, 
            award-winning team will visit you at home to understand your unique needs and create a tailored care plan 
            that helps you maintain independence, dignity, and quality of life.
          </p>
          
          {/* What to Expect Cards with Images */}
          <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
            {/* Card 1 - Expert Guidance (was 3rd) */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/images/community/bigchat4,jpg.jpg"
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
                  src="/images/community/bigchat6.jpg"
                  alt="Personalized care planning"
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
                  src="/images/community/bigchat3.jpg"
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
          
          {/* Trust Badges - Redesigned */}
          <div className="bg-gradient-to-br from-white to-serve-blue-50/50 rounded-3xl p-8 md:p-10 shadow-2xl border-2 border-serve-blue-100/50 max-w-4xl mx-auto mb-10">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-serve-green-500 to-serve-green-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900 mb-2 text-lg">No Obligation</h4>
                <p className="text-sm text-gray-600 leading-relaxed">Free assessment with no pressure to proceed</p>
              </div>
              
              <div className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-serve-blue-500 to-serve-blue-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900 mb-2 text-lg">Confidential</h4>
                <p className="text-sm text-gray-600 leading-relaxed">Your privacy protected at every step</p>
              </div>
              
              <div className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900 mb-2 text-lg">Free Consultation</h4>
                <p className="text-sm text-gray-600 leading-relaxed">Expert advice at no cost to you</p>
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="[&>button]:bg-gradient-to-r [&>button]:from-serve-green-600 [&>button]:to-serve-green-700 [&>button]:hover:from-serve-green-700 [&>button]:hover:to-serve-green-800 [&>button]:text-white [&>button]:font-bold [&>button]:px-12 [&>button]:py-5 [&>button]:text-lg [&>button]:shadow-xl [&>button]:hover:shadow-2xl [&>button]:transform [&>button]:hover:scale-105 [&>button]:transition-all [&>button]:duration-300 [&>button]:rounded-2xl [&>button]:flex [&>button]:items-center [&>button]:gap-3">
              <AssessmentBookingButton />
            </div>
            
            <p className="text-center text-sm text-gray-500 mt-6">
              Trusted by families across Northamptonshire for over 40 years
            </p>
          </div>
        </div>


      </div>
    </section>
  )
}