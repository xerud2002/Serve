import { AssessmentBookingButton } from './AssessmentBooking'

export default function CallToActionSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-serve-blue-50 via-white to-serve-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Home Care Assessment Section */}
        <div className="text-center mb-12">
          {/* Badge */}
          <div className="mb-6">
            <span className="inline-flex items-center px-5 py-2 rounded-full text-sm font-semibold bg-serve-green-100 text-serve-green-800 border border-serve-green-200">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Award-Winning Care Team
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Begin Your Care Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Take the first step towards personalized care with a comprehensive home assessment. Our compassionate, 
            experienced team will visit you at home to understand your unique needs and create a tailored care plan 
            that helps you maintain independence, dignity, and quality of life.
          </p>
          
          {/* What to Expect Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="bg-serve-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5">
                <svg className="w-8 h-8 text-serve-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Friendly Visit</h3>
              <p className="text-gray-600 leading-relaxed">
                Comfortable, no-pressure assessment in the comfort of your own home
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="bg-serve-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5">
                <svg className="w-8 h-8 text-serve-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Personal Plan</h3>
              <p className="text-gray-600 leading-relaxed">
                Care solutions designed around your specific needs and preferences
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Guidance</h3>
              <p className="text-gray-600 leading-relaxed">
                Professional advice from our award-winning, CQC registered care team
              </p>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="[&>button]:bg-serve-green-600 [&>button]:hover:bg-serve-green-700 [&>button]:text-white [&>button]:font-bold [&>button]:px-10 [&>button]:py-4 [&>button]:text-lg [&>button]:shadow-lg [&>button]:hover:shadow-xl [&>button]:transform [&>button]:hover:scale-105 [&>button]:transition-all [&>button]:duration-300 [&>button]:rounded-xl">
            <AssessmentBookingButton />
          </div>
          
          <p className="text-sm text-gray-500 mt-6">
            No obligation • Confidential • Free consultation
          </p>
        </div>


      </div>
    </section>
  )
}