import { AssessmentBookingButton } from './AssessmentBooking'

export default function CallToActionSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-serve-blue-50 to-serve-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Home Care Assessment Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Begin Your Care Journey</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Take the first step towards personalized care with a comprehensive home assessment. Our compassionate, 
            experienced team will visit you at home to understand your unique needs and create a tailored care plan 
            that helps you maintain independence, dignity, and quality of life.
          </p>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 max-w-2xl mx-auto mb-12">
            <div className="flex items-center justify-center mb-6">
              <svg className="w-10 h-10 mr-3 text-serve-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-2xl font-semibold text-gray-900">What to Expect</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4 mb-8 text-left">
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-serve-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Friendly Visit</p>
                  <p className="text-xs text-gray-600">Comfortable, no-pressure assessment in your own home</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-serve-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Personal Plan</p>
                  <p className="text-xs text-gray-600">Care solutions designed around your specific needs</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-serve-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Expert Guidance</p>
                  <p className="text-xs text-gray-600">Professional advice from our award-winning care team</p>
                </div>
              </div>
            </div>
            
            <div className="[&>button]:bg-serve-blue-600 [&>button]:hover:bg-serve-blue-700 [&>button]:text-white [&>button]:shadow-lg [&>button]:hover:shadow-xl [&>button]:transform [&>button]:hover:scale-105 [&>button]:transition-all [&>button]:duration-300">
              <AssessmentBookingButton />
            </div>
            
            <p className="text-sm text-gray-500 mt-4">
              No obligation • Confidential • CQC registered care provider
            </p>
          </div>
        </div>


      </div>
    </section>
  )
}