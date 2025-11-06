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


      </div>
    </section>
  )
}