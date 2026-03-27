'use client'

import Image from 'next/image'
import Link from 'next/link'
import { analytics } from '@/components/GoogleAnalytics'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] bg-linear-to-br from-serve-blue-950 via-serve-blue-900 to-slate-900 text-white overflow-hidden">
      {/* Modern mesh gradient background - hidden on mobile for performance */}
      <div className="absolute inset-0 overflow-hidden hidden sm:block">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-serve-green-500/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[128px]" />
        <div className="absolute top-1/3 right-1/3 w-[500px] h-[500px] bg-amber-400/5 rounded-full blur-[100px]" />
      </div>

      {/* Simplified background for mobile */}
      <div className="absolute inset-0 bg-serve-blue-900/50 sm:hidden" />

      {/* Dot grid pattern - hidden on mobile for performance */}
      <div className="absolute inset-0 opacity-[0.03] hidden sm:block">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} 
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left column - Content */}
          <div className="text-center lg:text-left space-y-6">
            {/* Award Badge - Sleek modern design */}
            <div>
              <div className="relative group inline-flex">
                <div className="absolute -inset-1 bg-linear-to-r from-yellow-400 to-amber-500 rounded-full blur opacity-40 group-hover:opacity-70 transition duration-300" />
                <span className="relative inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[10px] sm:text-xs md:text-sm font-bold bg-linear-to-r from-yellow-400 via-amber-400 to-yellow-500 text-yellow-950 shadow-lg">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2L7.5 7H2l4.5 3.5L5 16l5-4 5 4-1.5-5.5L18 7h-5.5L10 2z" clipRule="evenodd" />
                  </svg>
                  <span className="hidden md:inline whitespace-nowrap">Winner: Best Homecare Team, East Midlands 2024</span>
                  <span className="hidden sm:inline md:hidden whitespace-nowrap">Best Homecare Team 2024</span>
                  <span className="sm:hidden whitespace-nowrap">🏆 Award Winner 2024</span>
                </span>
              </div>
            </div>
            
            {/* Main Heading - Bolder typography */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight">
              <span className="block text-white mb-2">
                Supporting
              </span>
              <span className="block text-white mb-3">
                Independence
              </span>
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-linear-to-r from-serve-green-400 via-cyan-400 to-serve-green-400 bg-clip-text text-transparent">
                in Northamptonshire
              </span>
            </h1>
            
            {/* Subtitle - Better readability */}
            <p className="text-base md:text-lg max-w-2xl mx-auto lg:mx-0 text-blue-100/90 leading-relaxed">
              SERVE is a voluntary organisation and a registered charity. We have been providing services and assistance to older people and adults with disabilities, and their carers in Northamptonshire and the surrounding area for over 40 years. Our aim is to provide the highest quality of health and social care to enable people to remain living independently within their own homes. We deliver a service to a wide range of adults who need care and support.
            </p>
            
            {/* Action Buttons - Modern with glass effect */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 justify-center lg:justify-start">
              <Link
                href="/donate/"
                className="group relative bg-rose-600 hover:bg-rose-700 text-white font-bold px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl shadow-xl shadow-rose-600/25 hover:shadow-rose-600/40 transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-0.5 flex items-center justify-center gap-2 sm:gap-3"
                aria-label="Donate to SERVE charity"
                onClick={() => analytics.trackDonateClick()}
              >
                <div className="absolute inset-0 bg-linear-to-r from-rose-500/0 via-white/10 to-rose-500/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <svg className="relative w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
                <span className="relative text-sm sm:text-base md:text-lg">Donate Now</span>
              </Link>
              
              <Link
                href="/volunteer/"
                className="group relative bg-amber-500 hover:bg-amber-600 text-amber-950 font-bold px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-0.5 flex items-center justify-center gap-2 sm:gap-3"
                onClick={() => analytics.trackCTAClick('Volunteer', '/volunteer')}
              >
                <div className="absolute inset-0 bg-linear-to-r from-amber-400/0 via-white/20 to-amber-400/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <svg className="relative w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
                <span className="relative text-sm sm:text-base md:text-lg">Volunteer With Us</span>
              </Link>
              
              <Link
                href="/services/"
                className="group relative bg-serve-green-600 hover:bg-serve-green-700 text-white font-bold px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl shadow-xl shadow-serve-green-600/25 hover:shadow-serve-green-600/40 transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-0.5 flex items-center justify-center gap-2 sm:gap-3"
                onClick={() => analytics.trackCTAClick('Get Care Support', '/services')}
              >
                <div className="absolute inset-0 bg-linear-to-r from-serve-green-500/0 via-white/10 to-serve-green-500/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <svg className="relative w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                <span className="relative text-sm sm:text-base md:text-lg">Get Care Support</span>
              </Link>
            </div>
          </div>

          {/* Right column - Award badges and stats with modern card design */}
          <div className="flex flex-col gap-6 max-w-md mx-auto lg:max-w-none">
            {/* Award Badges */}
            <div className="flex gap-4 justify-center">
              <div className="group shrink-0">
                <Image 
                  src="/images/awards/regional-winner1.webp" 
                  alt="SERVE - Great British Care Awards Regional Winner"
                  className="w-28 h-28 sm:w-36 sm:h-36 lg:w-44 lg:h-44 object-contain drop-shadow-2xl transition-transform duration-300 group-hover:scale-110"
                  width={176}
                  height={176}
                  loading="eager"
                  fetchPriority="high"
                  quality={75}
                  sizes="(max-width: 640px) 112px, (max-width: 1024px) 144px, 176px"
                />
              </div>
              <div className="group shrink-0">
                <Image 
                  src="/images/awards/regional-winner2.webp" 
                  alt="SERVE - Great British Care Awards Regional Winner"
                  className="w-28 h-28 sm:w-36 sm:h-36 lg:w-44 lg:h-44 object-contain drop-shadow-2xl transition-transform duration-300 group-hover:scale-110"
                  width={176}
                  height={176}
                  loading="lazy"
                  quality={75}
                  sizes="(max-width: 640px) 112px, (max-width: 1024px) 144px, 176px"
                />
              </div>
            </div>
            
            {/* Stats Cards - Modern bento box style */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              <div className="bg-white/5 sm:backdrop-blur-xl rounded-2xl border border-white/10 p-3 sm:p-4 lg:p-5 text-center sm:transition-all sm:duration-300 sm:hover:bg-white/10 sm:hover:border-serve-green-400/50 sm:hover:-translate-y-1 shadow-lg">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black bg-linear-to-br from-serve-green-300 to-cyan-400 bg-clip-text text-transparent mb-1">40+</div>
                <div className="text-[9px] sm:text-[10px] lg:text-xs text-blue-200/90 font-medium leading-tight px-1">Years Serving<br/>Our Community</div>
              </div>
              <div className="bg-white/5 sm:backdrop-blur-xl rounded-2xl border border-white/10 p-3 sm:p-4 lg:p-5 text-center sm:transition-all sm:duration-300 sm:hover:bg-white/10 sm:hover:border-amber-400/50 sm:hover:-translate-y-1 shadow-lg">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black bg-linear-to-br from-yellow-300 to-amber-400 bg-clip-text text-transparent mb-1">Award</div>
                <div className="text-[9px] sm:text-[10px] lg:text-xs text-blue-200/90 font-medium leading-tight px-1">Winning<br/>Care Team</div>
              </div>
              <div className="bg-white/5 sm:backdrop-blur-xl rounded-2xl border border-white/10 p-3 sm:p-4 lg:p-5 text-center sm:transition-all sm:duration-300 sm:hover:bg-white/10 sm:hover:border-rose-400/50 sm:hover:-translate-y-1 shadow-lg">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black bg-linear-to-br from-rose-300 to-pink-400 bg-clip-text text-transparent mb-1">Local</div>
                <div className="text-[9px] sm:text-[10px] lg:text-xs text-blue-200/90 font-medium leading-tight px-1">Northants<br/>Charity</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}