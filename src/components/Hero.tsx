'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] bg-linear-to-br from-serve-blue-900 via-serve-blue-800 to-serve-blue-900 text-white overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-serve-green-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-serve-blue-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute -bottom-20 right-1/4 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-rose-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} 
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          
          {/* Left column - Content */}
          <div className="text-center lg:text-left">
            {/* Award Badge */}
            <div className="mb-8 inline-flex">
              <span className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold bg-linear-to-r from-yellow-400 via-amber-400 to-yellow-500 text-yellow-900 shadow-lg shadow-yellow-500/25 hover:shadow-yellow-500/40 transform hover:scale-105 transition-all duration-300">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2L7.5 7H2l4.5 3.5L5 16l5-4 5 4-1.5-5.5L18 7h-5.5L10 2z" clipRule="evenodd" />
                </svg>
                Winner: Best Homecare Team, East Midlands 2024
              </span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-linear-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Supporting Independence
              </span>
              <span className="block text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-3 bg-linear-to-r from-serve-green-300 via-serve-green-400 to-serve-green-300 bg-clip-text text-transparent">
                in Northamptonshire
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-base md:text-lg lg:text-xl mb-10 max-w-2xl mx-auto lg:mx-0 text-blue-100/90 leading-relaxed">
              SERVE is a voluntary organisation and a registered charity. We have been providing services and assistance to older people and adults with disabilities, and their carers in Northamptonshire and the surrounding area for over 40 years. Our aim is to provide the highest quality of health and social care to enable people to remain living independently within their own homes. We deliver a service to a wide range of adults who need care and support.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Link
                href="/donate"
                className="group relative bg-linear-to-r from-rose-500 to-red-600 hover:from-rose-600 hover:to-red-700 text-white font-bold px-8 py-4 rounded-2xl shadow-xl shadow-red-500/30 hover:shadow-red-500/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
                aria-label="Donate to SERVE charity"
              >
                <svg className="w-6 h-6" fill="currentColor" stroke="none" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
                <span className="text-base md:text-lg">Donate Now</span>
              </Link>
              
              <Link
                href="/volunteer"
                className="group bg-linear-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-yellow-950 font-bold px-6 py-3 md:px-8 md:py-4 rounded-2xl shadow-xl shadow-yellow-500/30 hover:shadow-yellow-500/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
                <span className="text-base md:text-lg">Volunteer With Us</span>
              </Link>
              
              <Link
                href="/services"
                className="group bg-linear-to-r from-serve-green-500 to-serve-green-600 hover:from-serve-green-600 hover:to-serve-green-700 text-white font-bold px-6 py-3 md:px-8 md:py-4 rounded-2xl shadow-xl shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                <span className="text-base md:text-lg">Get Care Support</span>
              </Link>
            </div>
          </div>

          {/* Right column - Award badges and stats */}
          <div className="flex flex-col items-center gap-8">
            {/* Award Badges */}
            <div className="flex gap-6 justify-center">
              <div className="relative group">
                <div className="absolute -inset-2 bg-linear-to-r from-yellow-400 to-amber-500 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                <Image 
                  src="/images/awards/regional-winner1.webp" 
                  alt="SERVE - Great British Care Awards Regional Winner"
                  className="relative w-28 h-28 lg:w-36 lg:h-36 object-contain bg-transparent drop-shadow-2xl"
                  width={144}
                  height={144}
                  loading="eager"
                  fetchPriority="high"
                  quality={80}
                  sizes="144px"
                />
              </div>
              <div className="relative group">
                <div className="absolute -inset-2 bg-linear-to-r from-yellow-400 to-amber-500 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                <Image 
                  src="/images/awards/regional-winner2.webp" 
                  alt="SERVE - Great British Care Awards Regional Winner"
                  className="relative w-28 h-28 lg:w-36 lg:h-36 object-contain bg-transparent drop-shadow-2xl"
                  width={144}
                  height={144}
                  loading="eager"
                  fetchPriority="high"
                  quality={80}
                  sizes="144px"
                />
              </div>
            </div>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:gap-4 w-full max-w-sm sm:max-w-md lg:max-w-lg">
              <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-2.5 sm:p-4 lg:p-5 border border-white/20 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <div className="text-lg sm:text-2xl lg:text-3xl font-black bg-linear-to-r from-serve-green-300 to-serve-green-400 bg-clip-text text-transparent mb-0.5 sm:mb-1">40+</div>
                <div className="text-[8px] sm:text-[10px] lg:text-xs text-blue-200 leading-tight">Years Serving<br/>Our Community</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-2.5 sm:p-4 lg:p-5 border border-white/20 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <div className="text-lg sm:text-2xl lg:text-3xl font-black bg-linear-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent mb-0.5 sm:mb-1">Award</div>
                <div className="text-[8px] sm:text-[10px] lg:text-xs text-blue-200 leading-tight">Winning<br/>Care Team</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-2.5 sm:p-4 lg:p-5 border border-white/20 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <div className="text-lg sm:text-2xl lg:text-3xl font-black bg-linear-to-r from-rose-300 to-rose-400 bg-clip-text text-transparent mb-0.5 sm:mb-1">Local</div>
                <div className="text-[8px] sm:text-[10px] lg:text-xs text-blue-200 leading-tight">Northants<br/>Charity</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Modern curved divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          className="w-full h-20 lg:h-28 text-gray-50" 
          preserveAspectRatio="none" 
          viewBox="0 0 1200 120"
          fill="currentColor"
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" />
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" />
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" />
        </svg>
      </div>
    </section>
  )
}