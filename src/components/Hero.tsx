import OptimizedImage, { SERVE_IMAGES } from './OptimizedImage'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-serve-blue-800 via-serve-blue-900 to-serve-blue-950 text-white overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 opacity-20">
        <OptimizedImage
          {...SERVE_IMAGES.hero}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-serve-blue-800/80 via-serve-blue-900/80 to-serve-blue-950/80" />
      </div>
      
      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center">
          {/* Winner Badge Image - Desktop: top-right, Mobile: centered */}
          <div className="absolute top-4 right-4 md:right-8 z-10 hidden md:block">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 rounded-2xl opacity-30 group-hover:opacity-50 blur-lg transition-opacity duration-500"></div>
              <div className="relative bg-white rounded-2xl p-3 shadow-xl border-2 border-yellow-200 group-hover:scale-105 transition-transform duration-300">
                <Image 
                  src="/images/servewinner .png" 
                  alt="SERVE Winner - Great British Care Awards"
                  className="w-24 h-24 lg:w-32 lg:h-32 object-contain"
                  width={128}
                  height={128}
                />
              </div>
            </div>
          </div>

          {/* Mobile Winner Badge - Centered */}
          <div className="block md:hidden mb-3">
            <div className="relative group mx-auto w-fit">
              <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 rounded-2xl opacity-30 group-hover:opacity-50 blur-lg transition-opacity duration-500"></div>
              <div className="relative bg-white rounded-2xl p-2 shadow-xl border-2 border-yellow-200 group-hover:scale-105 transition-transform duration-300">
                <Image 
                  src="/images/servewinner .png" 
                  alt="SERVE Winner - Great British Care Awards"
                  className="w-45 h-45 object-contain"
                  width={180}
                  height={180}
                />
              </div>
            </div>
          </div>

          {/* Award Badge - Hidden on mobile */}
          <div className="mb-8 hidden md:block">
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
            For over 40 years, SERVE has been Northamptonshire&apos;s trusted partner in care. 
            We help older people and adults with disabilities live independently at home with dignity and respect.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 justify-center items-center mb-16 max-w-4xl mx-auto">
            <a
              href="/donate"
              className="bg-yellow-500 hover:bg-yellow-600 text-yellow-950 font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 w-full sm:w-auto text-center flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
              <span className="text-lg">Donate Now</span>
            </a>
            
            <a
              href="/volunteer"
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 w-full sm:w-auto text-center flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
              <span className="text-lg">Volunteer With Us</span>
            </a>
            
            <a
              href="/services"
              className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 w-full sm:w-auto text-center flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-lg">Get Care Support</span>
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