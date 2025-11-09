import { AssessmentBookingButton } from './AssessmentBooking'

export default function CallToActionSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Home Care Assessment Section */}
        <div className="text-center mb-10">
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Begin Your Care Journey
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Take the first step towards personalized care with a comprehensive home assessment. Our compassionate, 
            experienced team will visit you at home to understand your unique needs and create a tailored care plan 
            that helps you maintain independence, dignity, and quality of life.
          </p>
          
          {/* What to Expect Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 group">
              <div className="bg-gradient-to-br from-serve-green-100 to-serve-green-200 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-serve-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Friendly Visit</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Comfortable, no-pressure assessment in the comfort of your own home
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 group">
              <div className="bg-gradient-to-br from-serve-blue-100 to-serve-blue-200 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-serve-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Personal Plan</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Care solutions designed around your specific needs and preferences
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 group">
              <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-yellow-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Expert Guidance</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Professional advice from our award-winning, CQC registered care team
              </p>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="mb-4">
            <div className="[&>button]:bg-serve-green-600 [&>button]:hover:bg-serve-green-700 [&>button]:text-white [&>button]:font-bold [&>button]:px-10 [&>button]:py-4 [&>button]:text-lg [&>button]:shadow-lg [&>button]:hover:shadow-xl [&>button]:transform [&>button]:hover:scale-105 [&>button]:transition-all [&>button]:duration-300 [&>button]:rounded-xl">
              <AssessmentBookingButton />
            </div>
          </div>
          
          <p className="text-sm text-gray-500">
            No obligation • Confidential • Free consultation
          </p>
        </div>


      </div>
    </section>
  )
}