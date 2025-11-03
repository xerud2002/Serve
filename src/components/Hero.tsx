export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-serve-blue-800 via-serve-blue-900 to-serve-blue-950 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center">
          {/* Award Badge */}
          <div className="mb-8">
            <span className="inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-900 shadow-lg transform hover:scale-105 transition-transform">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2L7.5 7H2l4.5 3.5L5 16l5-4 5 4-1.5-5.5L18 7h-5.5L10 2z" clipRule="evenodd" />
              </svg>
              Winner: Best Homecare Team, East Midlands 2024
            </span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-balance leading-tight">
            Supporting Independence
            <span className="block text-serve-blue-200 text-4xl md:text-6xl mt-2">
              in Northamptonshire
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-balance leading-relaxed text-blue-100">
            For over 40 years, SERVE has been Northamptonshire's trusted partner in care. 
            We help older people and adults with disabilities live independently at home with dignity and respect.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <a
              href="/contact"
              className="group bg-serve-green-600 hover:bg-serve-green-700 text-white px-10 py-5 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl inline-flex items-center"
              aria-label="Contact SERVE for care services"
            >
              Get Care Support
              <svg className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            
            <a
              href="/volunteer"
              className="group border-2 border-white text-white hover:bg-white hover:text-serve-blue-900 px-10 py-5 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              aria-label="Learn about volunteering with SERVE"
            >
              <svg className="mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              Volunteer With Us
            </a>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-4xl font-bold text-serve-green-300 mb-2">40+</div>
              <div className="text-lg text-blue-200">Years Serving Our Community</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-4xl font-bold text-serve-green-300 mb-2">CQC</div>
              <div className="text-lg text-blue-200">Registered & Rated Good</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-4xl font-bold text-serve-green-300 mb-2">Local</div>
              <div className="text-lg text-blue-200">Northamptonshire Charity</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-16 text-gray-50" preserveAspectRatio="none" viewBox="0 0 1200 120">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="currentColor"></path>
        </svg>
      </div>
    </section>
  )
}