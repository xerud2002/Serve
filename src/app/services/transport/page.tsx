'use client'

import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import { TransportBookingButton } from '@/components/TransportBooking'
import RelatedServices from '@/components/RelatedServices'
import { relatedServicesMap } from '@/lib/relatedServicesData'
import {
  TruckIcon,
  MapPinIcon,
  ClockIcon,
  ShieldCheckIcon,
  PhoneIcon,
  CheckIcon,
  StarIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  HeartIcon,
  UserIcon,
  BuildingOfficeIcon,
  ShoppingBagIcon,
  BeakerIcon,
  HomeIcon
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
      <section className="relative py-20 bg-linear-to-br from-purple-900 via-purple-800 to-purple-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='m0 40l40-40h-40v40zm0 0l40-40h-40v40z'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-bold mb-8">
                <TruckIcon className="w-5 h-5 mr-2" />
                Door-to-Door Service
              </div>

              <MajorTitle primary="Community" secondary="Transport" dark accentClass="text-purple-200" />
              
              <p className="text-xl lg:text-2xl opacity-90 mb-8 leading-relaxed">
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
                  href="/contact"
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Transport Services We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our community transport service helps you maintain independence by providing 
              safe, reliable access to essential services and social connections.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {transportServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start mb-6">
                    <div className="bg-purple-100 rounded-xl p-4 mr-6">
                      <IconComponent className="w-8 h-8 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start text-gray-700">
                        <CheckIcon className="w-4 h-4 text-purple-600 mr-2 mt-1 shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Vehicle Features */}
          <div className="bg-linear-to-r from-purple-50 to-serve-blue-50 rounded-3xl p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Our Transport Features
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {vehicleFeatures.map((feature, index) => (
                <div key={index} className="flex items-center bg-white rounded-xl p-4 shadow-sm">
                  <CheckIcon className="w-5 h-5 text-purple-600 mr-3 shrink-0" />
                  <span className="text-gray-800 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Areas We Cover
            </h2>
            <p className="text-xl text-gray-600">
              Our transport service covers a wide area across Northamptonshire
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {serviceAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <MapPinIcon className="w-8 h-8 mx-auto mb-4 text-purple-600" />
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
              className="inline-flex items-center text-purple-600 hover:text-purple-800 font-semibold"
            >
              <PhoneIcon className="w-5 h-5 mr-2" />
              Check Coverage: 01933 315555
            </a>
          </div>
        </div>
      </section>

      {/* Pricing section removed per request */}

      {/* How to Book */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            How to Book Transport
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-700">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Call Us</h3>
              <p className="text-gray-600">Ring 01933 315555 to check availability and book your transport.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-700">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Confirm Details</h3>
              <p className="text-gray-600">We&apos;ll confirm pickup time, destination, and any special requirements.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-700">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Enjoy the Journey</h3>
              <p className="text-gray-600">Relax and enjoy safe, comfortable transport to your destination.</p>
            </div>
          </div>
          
          <div className="bg-purple-100 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Booking Tips
            </h3>
            <ul className="text-left text-gray-700 space-y-2 max-w-2xl mx-auto">
              <li>• Book at least 24 hours in advance where possible</li>
              <li>• Let us know if you need wheelchair access or mobility assistance</li>
              <li>• Provide clear pickup and drop-off addresses</li>
              <li>• Inform us of any special requirements or medical needs</li>
              <li>• Keep our number handy for any changes or cancellations</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Online Booking Section */}
      {/* Online booking hero removed per request */}

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-r from-purple-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Need Reliable Transport?
          </h2>
          <p className="text-xl opacity-90 mb-10 leading-relaxed">
            Don&apos;t let transport be a barrier to living independently. Our friendly, 
            professional drivers are ready to help you get where you need to go.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="tel:01933315555"
              className="inline-flex items-center bg-serve-green-600 hover:bg-serve-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105"
            >
              <PhoneIcon className="w-6 h-6 mr-3" />
              Book Now: 01933 315555
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center bg-white/10 backdrop-blur-sm hover:bg-white hover:text-purple-900 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 border border-white/20"
            >
              Ask About Transport
              <ArrowRightIcon className="ml-3 h-5 w-5" />
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20">
            <Link
              href="/services"
              className="inline-flex items-center text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeftIcon className="w-5 h-5 mr-2" />
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