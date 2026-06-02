import React from "react";
import FriendsOfServe from "@/components/FriendsOfServe";
import TrackedLink from "@/components/TrackedLink";
import { HeartIcon, PhoneIcon, ArrowRightIcon, CheckCircleIcon, SparklesIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { generateSEOMetadata, seoConfigs } from '@/lib/seo'

export const metadata = generateSEOMetadata(seoConfigs.donate)

export default function DonatePage() {
  return (
  <div className="min-h-screen bg-white">
      {/* Hero Section */}
  <section className="relative py-20 lg:py-28 bg-linear-to-br from-rose-500 via-red-600 to-rose-700 text-white overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 -left-40 w-80 h-80 bg-rose-400/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute -bottom-20 right-1/4 w-72 h-72 bg-amber-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-pink-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="max-w-5xl mx-auto px-4 text-center relative">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-bold mb-8 shadow-lg">
            <HeartIcon className="w-5 h-5 mr-2" />
            Every Gift Transforms Lives
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-linear-to-r from-white via-rose-100 to-white bg-clip-text text-transparent">Make a</span>{' '}
            <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">Difference</span>
          </h1>
          
          <p className="text-base md:text-lg lg:text-xl xl:text-2xl mb-12 leading-relaxed text-rose-50/90 max-w-3xl mx-auto">
            Your generosity helps us provide life-changing care, transport, and support to vulnerable adults across Northamptonshire.
          </p>
          
          {/* Impact Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-5 border border-white/30 hover:bg-white/30 transition-all hover:-translate-y-1">
              <div className="text-2xl md:text-3xl font-bold mb-2">£5</div>
              <div className="text-sm opacity-90">Provides a hot meal at day centre</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-5 border border-white/30 hover:bg-white/30 transition-all hover:-translate-y-1">
              <div className="text-2xl md:text-3xl font-bold mb-2">£20</div>
              <div className="text-sm opacity-90">Provides a hot meal delivery</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-5 border border-white/30 hover:bg-white/30 transition-all hover:-translate-y-1">
              <div className="text-2xl md:text-3xl font-bold mb-2">£50</div>
              <div className="text-sm opacity-90">Funds transport to appointments</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-5 border border-white/30 hover:bg-white/30 transition-all hover:-translate-y-1">
              <div className="text-2xl md:text-3xl font-bold mb-2">£100</div>
              <div className="text-sm opacity-90">Support activities at our day centre</div>
            </div>
          </div>
          
          {/* Primary CTA */}
          <TrackedLink
            href="https://www.justgiving.com/charity/serve-jg"
            trackAs="donate"
            label="JustGiving Hero"
            className="inline-flex items-center bg-white text-red-600 hover:bg-rose-50 font-extrabold px-8 py-4 md:px-10 md:py-5 lg:px-12 lg:py-6 rounded-2xl text-lg md:text-xl lg:text-2xl shadow-2xl hover:shadow-rose-900/50 transition-all duration-300 transform hover:scale-105 gap-3"
            ariaLabel="Donate to SERVE via JustGiving (opens in new tab)"
          >
            <HeartIcon className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" aria-hidden="true" />
            <span>Donate via JustGiving</span>
            <ArrowRightIcon className="w-5 h-5 md:w-6 md:h-6" aria-hidden="true" />
          </TrackedLink>

          {/* PayPal Donate Button */}
          <div className="mt-6 flex flex-col items-center gap-3">
            <span className="text-sm font-semibold text-rose-50/90">or</span>
            <TrackedLink
              href="https://www.paypal.com/ncp/payment/9KA5E252HQM2N"
              trackAs="donate"
              label="PayPal Hero"
              className="inline-flex items-center justify-center bg-[#FFC439] hover:bg-[#f0b72e] px-12 py-3.5 rounded-full shadow-2xl hover:shadow-amber-900/50 transition-all duration-300 transform hover:scale-105 min-h-11 min-w-46.5"
              ariaLabel="Donate to SERVE via PayPal (opens in new tab)"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-wordmark-color.svg"
                alt="PayPal"
                className="h-6"
              />
            </TrackedLink>
          </div>
        </div>
      </section>

      {/* Impact Story Section */}
      <section className="py-20 lg:py-28 bg-linear-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-rose-100/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-serve-blue-100/50 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="max-w-6xl mx-auto px-4 relative">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-linear-to-r from-rose-100 to-pink-50 text-rose-700 px-5 py-2.5 rounded-full text-sm font-semibold mb-6 shadow-sm">
              <HeartIcon className="w-4 h-4 mr-2" />
              Real Impact in Our Community
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-linear-to-r from-rose-600 to-pink-500 bg-clip-text text-transparent">Where Your Donations Go</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Story Content */}
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-rose-100">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-4">
                  <span className="bg-linear-to-r from-rose-600 to-pink-500 bg-clip-text text-transparent">Supporting Independence</span>
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  After losing her husband, 82-year-old Margaret from Rushden found everyday tasks increasingly difficult. 
                  Shopping, medical appointments, and staying connected with her community became real challenges.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Through donor support, SERVE now provides Margaret with regular homecare visits, 
                  hot meal deliveries, and transport to medical appointments and our Day Centre.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  She can remain in her home of 40 years, maintain her independence, and stay active in her community.
                  all funded by local donations.
                </p>
                <div className="bg-linear-to-br from-rose-50 to-pink-50 rounded-2xl p-6 border-l-4 border-rose-500">
                  <p className="text-gray-800 font-medium">
                    Margaret is one of hundreds of older people and adults with disabilities across Northamptonshire 
                    who benefit from SERVE&apos;s services each year.
                  </p>
                </div>
              </div>
            </div>

            {/* Impact Stats */}
            <div className="space-y-6">
              <div className="group bg-linear-to-br from-serve-blue-50 to-cyan-50 rounded-3xl shadow-lg p-6 border border-serve-blue-200 hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="bg-linear-to-r from-serve-blue-500 to-cyan-500 rounded-2xl p-3 shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                    <CheckCircleIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Personal Care Services</h4>
                    <p className="text-gray-600">CQC-registered homecare supporting independent living</p>
                  </div>
                </div>
              </div>

              <div className="group bg-linear-to-br from-serve-green-50 to-emerald-50 rounded-3xl shadow-lg p-6 border border-serve-green-200 hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="bg-linear-to-r from-serve-green-500 to-emerald-500 rounded-2xl p-3 shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                    <HeartIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Transport Services</h4>
                    <p className="text-gray-600">12,000+ journeys to appointments and activities annually</p>
                  </div>
                </div>
              </div>

              <div className="group bg-linear-to-br from-purple-50 to-violet-50 rounded-3xl shadow-lg p-6 border border-purple-200 hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="bg-linear-to-r from-purple-500 to-violet-500 rounded-2xl p-3 shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                    <SparklesIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Day Care Centre</h4>
                    <p className="text-gray-600">Social activities and nutritious meals for vulnerable adults</p>
                  </div>
                </div>
              </div>

              <div className="bg-linear-to-br from-rose-500 via-red-500 to-rose-600 rounded-3xl shadow-xl p-6 text-white hover:shadow-2xl transition-all hover:-translate-y-1">
                <div className="text-center">
                  <p className="text-sm font-semibold mb-2 opacity-90">Local Charity</p>
                  <p className="text-4xl font-bold mb-1">100%</p>
                  <p className="text-sm opacity-90">of donations support Northamptonshire residents</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 lg:py-28 bg-linear-to-br from-serve-blue-600 via-serve-blue-700 to-serve-blue-800 relative overflow-hidden">
        {/* Animated decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-serve-blue-400/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-cyan-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        <div className="max-w-4xl mx-auto px-4 text-center relative">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-5 py-2.5 rounded-full text-sm font-semibold text-white mb-6">
            We&apos;re Here To Help
          </div>
          
          <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Need Help or Have <span className="text-cyan-200">Questions?</span>
          </h3>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Our friendly team is ready to assist you with your donation or answer any questions about how your gift makes a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="tel:01933315555"
              className="inline-flex items-center bg-white text-serve-blue-700 hover:bg-serve-blue-50 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              <PhoneIcon className="w-6 h-6 mr-3" />
              Call: 01933 315555
            </a>
            <Link
              href="/contact/"
              className="inline-flex items-center bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 border border-white/30"
            >
              Contact Us
              <ArrowRightIcon className="ml-3 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
