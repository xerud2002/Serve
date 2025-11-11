import React from "react";
import FriendsOfServe from "@/components/FriendsOfServe";
import { HeartIcon, PhoneIcon, ArrowRightIcon, SparklesIcon, CheckCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function DonatePage() {
  return (
  <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
  <section className="relative py-24 bg-gradient-to-br from-rose-500 via-red-600 to-rose-700 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-bold mb-8 shadow-lg">
            <HeartIcon className="w-5 h-5 mr-2" />
            Every Gift Transforms Lives
          </div>
          <h1 className="text-6xl md:text-7xl font-extrabold mb-6 leading-tight drop-shadow-lg">
            Make a Difference<br />
            <span className="text-rose-100">Today</span>
          </h1>
          <p className="text-2xl mb-12 leading-relaxed text-rose-50 max-w-3xl mx-auto">
            Your generosity helps us provide life-changing care, transport, and support to vulnerable adults across Northamptonshire.
          </p>
          
          {/* Impact Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
              <div className="text-4xl font-bold mb-2">£25</div>
              <div className="text-sm opacity-90">Provides a hot meal delivery</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
              <div className="text-4xl font-bold mb-2">£50</div>
              <div className="text-sm opacity-90">Funds transport to appointments</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
              <div className="text-4xl font-bold mb-2">£100</div>
              <div className="text-sm opacity-90">Supports a day of care services</div>
            </div>
          </div>
          
          {/* Primary CTA */}
          <a
            href="https://www.justgiving.com/serve-jg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-red-600 hover:bg-rose-50 font-extrabold px-12 py-6 rounded-full text-2xl shadow-2xl hover:shadow-rose-900/50 transition-all duration-300 transform hover:scale-105 gap-3"
          >
            {/* Caring Hands Icon - Two hands giving/receiving */}
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              {/* Left hand */}
              <path d="M7 13c-1.5-1.5-1-4.5 1-6 .5-.4 1-.5 1.5-.3l1 4c.2.5 0 1-.3 1.3L7 13z"/>
              {/* Right hand */}
              <path d="M17 13c1.5-1.5 1-4.5-1-6-.5-.4-1-.5-1.5-.3l-1 4c-.2.5 0 1 .3 1.3L17 13z"/>
              {/* Heart/care symbol in center */}
              <ellipse cx="12" cy="14" rx="4" ry="2.5" opacity="0.4"/>
            </svg>
            <span>Donate Now</span>
            <ArrowRightIcon className="w-6 h-6" />
          </a>
        </div>
      </section>

      {/* Why Donate Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Your Donation Matters</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Every contribution directly impacts the lives of vulnerable adults in our community</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircleIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Award-Winning Care</h3>
              <p className="text-gray-700">Your donation supports our CQC-rated services, recognized as Best Homecare Team 2024</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 text-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <HeartIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Local Impact</h3>
              <p className="text-gray-700">100% of your donation stays in Northamptonshire, helping your neighbors</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <SparklesIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">40+ Years Trusted</h3>
              <p className="text-gray-700">Join thousands who trust SERVE to make a real difference in people&apos;s lives</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Donation Options */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Choose How to Give</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* One-Time Donation */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-rose-200 hover:border-rose-400 transition-all">
              <div className="bg-rose-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <SparklesIcon className="w-6 h-6 text-rose-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">One-Time Gift</h3>
              <p className="text-gray-600 mb-6">Make an immediate impact with a single donation</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <CheckCircleIcon className="w-5 h-5 text-rose-600 mr-3 flex-shrink-0" />
                  Quick & easy online giving
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircleIcon className="w-5 h-5 text-rose-600 mr-3 flex-shrink-0" />
                  Secure payment processing
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircleIcon className="w-5 h-5 text-rose-600 mr-3 flex-shrink-0" />
                  Instant confirmation
                </li>
              </ul>
              <a
                href="https://www.justgiving.com/serve-jg"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-rose-600 hover:bg-rose-700 text-white font-bold py-4 rounded-xl text-center transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Give Once
              </a>
            </div>
            
            {/* Monthly Donation */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-green-300 hover:border-green-500 transition-all relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-green-600 text-white text-xs font-bold px-4 py-2 rounded-bl-xl">
                MOST IMPACT
              </div>
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <HeartIcon className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Monthly Giving</h3>
              <p className="text-gray-600 mb-6">Provide sustained support that transforms lives</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <CheckCircleIcon className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                  Sustainable impact
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircleIcon className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                  Cancel anytime
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircleIcon className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                  Exclusive updates
                </li>
              </ul>
              <a
                href="#friends-of-serve"
                className="block w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl text-center transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Give Monthly
              </a>
            </div>
          </div>
          
          {/* Additional Ways */}
          <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Other Ways to Support</h3>
            <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
              <li className="flex items-center">
                <CheckCircleIcon className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                <span>PayPal donations</span>
              </li>
              <li className="flex items-center">
                <CheckCircleIcon className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                <span>Direct bank transfer</span>
              </li>
              <li className="flex items-center">
                <CheckCircleIcon className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                <span>Give as You Live</span>
              </li>
              <li className="flex items-center">
                <CheckCircleIcon className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                <span>Corporate partnerships</span>
              </li>
              <li className="flex items-center">
                <CheckCircleIcon className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                <span>Legacy gifts</span>
              </li>
              <li className="flex items-center">
                <CheckCircleIcon className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                <span>Fundraising events</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Friends of SERVE Card */}
  <section id="friends-of-serve" className="py-16 flex justify-center">
        <div className="max-w-xl w-full">
          <FriendsOfServe />
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 text-center text-white mx-auto max-w-4xl mb-16">
        <h3 className="text-3xl font-bold mb-6">Need Help or Have Questions?</h3>
        <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
          Our friendly team is ready to assist you with your donation or answer any questions about how your gift makes a difference.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:01933315555"
            className="inline-flex items-center bg-white/10 backdrop-blur-sm hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 border border-white/20"
          >
            <PhoneIcon className="w-6 h-6 mr-3" />
            Call: 01933 315555
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white/10 backdrop-blur-sm hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 border border-white/20"
          >
            Contact Us
            <ArrowRightIcon className="ml-3 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
