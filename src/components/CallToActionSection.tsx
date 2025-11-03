import { AssessmentBookingButton } from './AssessmentBooking'

export default function CallToActionSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-serve-blue-50 to-serve-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Home Care Assessment Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Home Care Assessment</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Start your care journey with a professional assessment. Our experienced team will evaluate 
            your needs and create a personalized care plan to help you maintain independence at home.
          </p>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 max-w-lg mx-auto mb-12">
            <div className="flex items-center justify-center mb-4">
              <svg className="w-8 h-8 mr-3 text-serve-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <h3 className="text-2xl font-semibold text-gray-900">Book Your Assessment</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Professional home assessment with £25 refundable deposit when you start your care package
            </p>
            
            <div className="[&>button]:bg-serve-blue-600 [&>button]:hover:bg-serve-blue-700 [&>button]:text-white [&>button]:shadow-lg [&>button]:hover:shadow-xl [&>button]:transform [&>button]:hover:scale-105 [&>button]:transition-all [&>button]:duration-300">
              <AssessmentBookingButton />
            </div>
          </div>
        </div>

        {/* Action Buttons Row */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="/contact"
            className="group bg-serve-green-600 hover:bg-serve-green-700 text-white px-10 py-5 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl inline-flex items-center min-w-[200px] justify-center"
            aria-label="Contact SERVE for care services"
          >
            <svg className="mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Get Care Support
            <svg className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          
          <a
            href="/volunteer"
            className="group bg-serve-blue-600 hover:bg-serve-blue-700 text-white px-10 py-5 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl inline-flex items-center min-w-[200px] justify-center"
            aria-label="Learn about volunteering with SERVE"
          >
            <svg className="mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            Volunteer With Us
            <svg className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          <a
            href="https://www.justgiving.com/serve-jg"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white px-10 py-5 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl inline-flex items-center min-w-[200px] justify-center"
            aria-label="Donate to SERVE via JustGiving"
          >
            <svg className="mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Donate Now
            <svg className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}