'use client'

import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import RelatedServices from '@/components/RelatedServices'
import { relatedServicesMap } from '@/lib/relatedServicesData'
import {
  TruckIcon,
  MapPinIcon,
  ClockIcon,
  ShieldCheckIcon,
  PhoneIcon,
  CheckIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  HeartIcon,
  UserIcon,
  ShoppingBagIcon,
  BeakerIcon
} from '@heroicons/react/24/outline'
import MajorTitle from '@/components/MajorTitle'

const transportServices = [
  {
    title: 'Medical Appointments',
    icon: BeakerIcon,
    description: 'Safe, reliable transport to hospitals, GP surgeries, and medical facilities',
    features: ['Hospital appointments', 'GP visits', 'Specialist consultations', 'Medical procedures', 'Pharmacy visits', 'Health check-ups']
  },
  {
    title: 'Shopping Trips',
    icon: ShoppingBagIcon,
    description: 'Assistance with weekly shopping and essential errands',
    features: ['Weekly grocery shopping', 'Pharmacy visits', 'Banking errands', 'Post office trips', 'Essential shopping', 'Market visits']
  },
  {
    title: 'Social Visits',
    icon: HeartIcon,
    description: 'Maintaining important social connections',
    features: ['Social events', 'Day centre attendance', 'Community activities', 'Religious services', 'Friend visits']
  },
  {
    title: 'Wheelchair Accessible',
    icon: UserIcon,
    description: 'Fully accessible vehicles for wheelchair users and mobility aids',
    features: ['Wheelchair accessible vehicles', 'Mobility aid support', 'Assisted boarding', 'Safety harnesses', 'Ramp access', 'Trained drivers']
  }
]

const vehicleFeatures = [
  'Fully wheelchair accessible vehicles',
  'Trained and DBS checked drivers',
  'Door-to-door service',
  'Assistance getting in and out',
  'Comfortable, safe vehicles',
  'Flexible booking system',
  'Competitive pricing',
  'Insurance covered'
]

const serviceAreas = [
  { name: 'Rushden', coverage: 'Full coverage' },
  { name: 'Higham Ferrers', coverage: 'Full coverage' },
  { name: 'Irthlingborough', coverage: 'Full coverage' },
  { name: 'Wellingborough', coverage: 'Full coverage' },
  { name: 'Kettering', coverage: 'Full coverage' },
  { name: 'Corby', coverage: 'Limited coverage' },
  { name: 'Northampton', coverage: 'Major hospitals only' },
  { name: 'Surrounding villages', coverage: 'On request' }
]

// Pricing data - retained for potential future use
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const pricing = [
  { service: 'Local journeys (up to 5 miles)', price: 'From £8', description: 'Perfect for local shopping and appointments' },
  { service: 'Medium journeys (5-15 miles)', price: 'From £15', description: 'Ideal for hospital visits and family trips' },
  { service: 'Long journeys (15+ miles)', price: 'From £25', description: 'For specialist appointments and distant destinations' },
  { service: 'Return journeys', price: '10% discount', description: 'Save when booking return transport' }
]

export default function TransportPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumb 
            items={[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: 'Community Transport' }
            ]}
          />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-24 bg-linear-to-br from-purple-900 via-purple-800 to-purple-900 text-white overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-serve-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 -left-40 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute -bottom-20 right-1/4 w-72 h-72 bg-violet-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-serve-green-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold bg-linear-to-r from-serve-blue-400 via-serve-blue-500 to-serve-blue-400 text-white shadow-lg shadow-blue-500/25 mb-8">
                <TruckIcon className="w-5 h-5 mr-2" />
                Door-to-Door Service
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-linear-to-r from-white via-purple-100 to-white bg-clip-text text-transparent">Community</span>{' '}
                <span className="bg-linear-to-r from-serve-blue-300 via-serve-blue-400 to-serve-blue-300 bg-clip-text text-transparent">Transport</span>
              </h1>
              
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl opacity-90 mb-8 leading-relaxed">
                Safe, reliable transport to medical appointments and shopping trips. Wheelchair accessible vehicles with trained drivers.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:01933315555"
                  className="inline-flex items-center bg-serve-green-600 hover:bg-serve-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105"
                >
                  <PhoneIcon className="w-6 h-6 mr-3" />
                  Call: 01933 315555
                </a>
                <Link
                  href="/contact/"
                  className="inline-flex items-center bg-white/10 backdrop-blur-sm hover:bg-white hover:text-purple-900 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 border border-white/20"
                >
                  Book Transport
                  <ArrowRightIcon className="ml-3 h-5 w-5" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <ShieldCheckIcon className="w-12 h-12 mx-auto mb-4 text-purple-200" />
                  <div className="font-bold text-lg mb-2">Fully Insured</div>
                  <div className="text-sm opacity-80">Complete peace of mind</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <UserIcon className="w-12 h-12 mx-auto mb-4 text-purple-200" />
                  <div className="font-bold text-lg mb-2">Accessible</div>
                  <div className="text-sm opacity-80">Wheelchair friendly</div>
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <MapPinIcon className="w-12 h-12 mx-auto mb-4 text-purple-200" />
                  <div className="font-bold text-lg mb-2">Door-to-Door</div>
                  <div className="text-sm opacity-80">We collect and return you</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <ClockIcon className="w-12 h-12 mx-auto mb-4 text-purple-200" />
                  <div className="font-bold text-lg mb-2">Flexible</div>
                  <div className="text-sm opacity-80">Book when you need us</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 lg:py-28 bg-linear-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-100/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-100/50 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-linear-to-r from-purple-100 to-violet-50 text-purple-800 px-5 py-2.5 rounded-full text-sm font-semibold mb-6 shadow-sm">
              Accessible Transport
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-linear-to-r from-purple-500 to-violet-600 bg-clip-text text-transparent">Transport Services</span>{' '}
              <span className="bg-linear-to-r from-serve-blue-500 to-cyan-500 bg-clip-text text-transparent">We Offer</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our community transport service helps you maintain independence by providing 
              safe, reliable access to essential services and social connections.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {transportServices.map((service, index) => {
              const IconComponent = service.icon
              const gradients = [
                { bg: 'from-purple-50 to-violet-50', icon: 'bg-purple-100', iconText: 'text-purple-600', border: 'border-purple-200' },
                { bg: 'from-fuchsia-50 to-pink-50', icon: 'bg-fuchsia-100', iconText: 'text-fuchsia-600', border: 'border-fuchsia-200' },
                { bg: 'from-indigo-50 to-purple-50', icon: 'bg-indigo-100', iconText: 'text-indigo-600', border: 'border-indigo-200' },
                { bg: 'from-violet-50 to-indigo-50', icon: 'bg-violet-100', iconText: 'text-violet-600', border: 'border-violet-200' },
              ]
              const colors = gradients[index % gradients.length]
              
              return (
                <div key={index} className={`group bg-linear-to-br ${colors.bg} rounded-3xl p-8 border ${colors.border} hover:shadow-xl transition-all duration-500 hover:-translate-y-2`}>
                  <div className="flex items-start mb-6">
                    <div className={`${colors.icon} rounded-2xl p-4 mr-6 group-hover:scale-110 transition-transform`}>
                      <IconComponent className={`w-8 h-8 ${colors.iconText}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start text-gray-700">
                        <CheckIcon className={`w-5 h-5 ${colors.iconText} mr-2 mt-0.5 shrink-0`} />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Vehicle Features */}
          <div className="relative">
            <div className="absolute inset-0 bg-linear-to-r from-purple-500 to-violet-600 rounded-3xl blur-xl opacity-20" />
            <div className="relative bg-linear-to-r from-purple-50 via-white to-violet-50 rounded-3xl p-10 lg:p-14 border border-purple-100">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-10 text-center">
                <span className="bg-linear-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">Our Transport Features</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {vehicleFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-shadow border border-purple-100">
                    <div className="bg-linear-to-r from-purple-500 to-violet-500 rounded-lg p-2 mr-3">
                      <CheckIcon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-800 font-medium text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-purple-100/30 rounded-full blur-3xl -translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-linear-to-r from-purple-100 to-violet-50 text-purple-700 px-5 py-2.5 rounded-full text-sm font-semibold mb-6 shadow-sm">
              Northamptonshire Coverage
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-linear-to-r from-purple-500 to-violet-600 bg-clip-text text-transparent">Areas We</span>{' '}
              <span className="text-gray-900">Cover</span>
            </h2>
            <p className="text-xl text-gray-600">
              Our transport service covers a wide area across Northamptonshire
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {serviceAreas.map((area, index) => (
              <div key={index} className="group bg-linear-to-br from-slate-50 to-purple-50/30 rounded-2xl p-6 shadow-lg text-center border border-purple-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="bg-purple-100 rounded-xl p-3 w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <MapPinIcon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{area.name}</h3>
                <p className={`text-sm font-medium ${
                  area.coverage === 'Full coverage' ? 'text-serve-green-600' : 
                  area.coverage === 'Limited coverage' ? 'text-yellow-600' : 
                  'text-gray-600'
                }`}>
                  {area.coverage}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Don&apos;t see your area listed? Contact us - we may still be able to help with special arrangements.
            </p>
            <a
              href="tel:01933315555"
              className="inline-flex items-center bg-linear-to-r from-purple-500 to-violet-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
            >
              <PhoneIcon className="w-5 h-5 mr-2" />
              Check Coverage: 01933 315555
            </a>
          </div>
        </div>
      </section>

      {/* How to Book */}
      <section className="py-20 lg:py-28 bg-linear-to-br from-slate-50 via-white to-purple-50/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100/40 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-violet-100/40 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center bg-linear-to-r from-purple-100 to-violet-50 text-purple-700 px-5 py-2.5 rounded-full text-sm font-semibold mb-6 shadow-sm">
            Simple 3-Step Process
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            <span className="bg-linear-to-r from-purple-500 to-violet-600 bg-clip-text text-transparent">How to Book</span>{' '}
            <span className="text-gray-900">Transport</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-purple-100">
              <div className="bg-linear-to-r from-purple-500 to-violet-500 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Call Us</h3>
              <p className="text-gray-600">Ring 01933 315555 to check availability and book your transport.</p>
            </div>
            
            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-fuchsia-100">
              <div className="bg-linear-to-r from-fuchsia-500 to-pink-500 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Confirm Details</h3>
              <p className="text-gray-600">We&apos;ll confirm pickup time, destination, and any special requirements.</p>
            </div>
            
            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-indigo-100">
              <div className="bg-linear-to-r from-indigo-500 to-purple-500 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Enjoy the Journey</h3>
              <p className="text-gray-600">Relax and enjoy safe, comfortable transport to your destination.</p>
            </div>
          </div>
          
          <div className="bg-linear-to-r from-purple-100 via-violet-50 to-purple-100 rounded-3xl p-8 border border-purple-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              <span className="bg-linear-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">Booking Tips</span>
            </h3>
            <ul className="text-left text-gray-700 space-y-2 max-w-2xl mx-auto">
              <li className="flex items-start"><CheckIcon className="w-5 h-5 text-purple-600 mr-2 mt-0.5 shrink-0" /> Book at least 24 hours in advance where possible</li>
              <li className="flex items-start"><CheckIcon className="w-5 h-5 text-purple-600 mr-2 mt-0.5 shrink-0" /> Let us know if you need wheelchair access or mobility assistance</li>
              <li className="flex items-start"><CheckIcon className="w-5 h-5 text-purple-600 mr-2 mt-0.5 shrink-0" /> Provide clear pickup and drop-off addresses</li>
              <li className="flex items-start"><CheckIcon className="w-5 h-5 text-purple-600 mr-2 mt-0.5 shrink-0" /> Inform us of any special requirements or medical needs</li>
              <li className="flex items-start"><CheckIcon className="w-5 h-5 text-purple-600 mr-2 mt-0.5 shrink-0" /> Keep our number handy for any changes or cancellations</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Online booking hero removed per request */}

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-linear-to-br from-purple-600 via-violet-600 to-indigo-600 relative overflow-hidden">
        {/* Animated decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-violet-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-5 py-2.5 rounded-full text-sm font-semibold mb-6">
            Book Your Transport Today
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Need <span className="text-purple-200">Reliable Transport?</span>
          </h2>
          <p className="text-xl opacity-90 mb-10 leading-relaxed max-w-2xl mx-auto">
            Don&apos;t let transport be a barrier to living independently. Our friendly, 
            professional drivers are ready to help you get where you need to go.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="tel:01933315555"
              className="inline-flex items-center bg-white text-purple-600 hover:bg-purple-50 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              <PhoneIcon className="w-6 h-6 mr-3" />
              Book Now: 01933 315555
            </a>
            <Link
              href="/contact/"
              className="inline-flex items-center bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 border border-white/30"
            >
              Ask About Transport
              <ArrowRightIcon className="ml-3 h-5 w-5" />
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20">
            <Link
              href="/services/"
              className="inline-flex items-center text-white/80 hover:text-white transition-colors group"
            >
              <ArrowLeftIcon className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <RelatedServices services={relatedServicesMap['/services/transport/']} />
    </div>
  )
}