import { Metadata } from 'next'
import Link from 'next/link'
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

export const metadata: Metadata = {
  title: 'Community Transport - SERVE | Reliable Transport Services Northamptonshire',
  description: 'SERVE\'s community transport service provides safe, reliable door-to-door transport for medical appointments, shopping, and family visits across Northamptonshire.',
  keywords: 'community transport, medical appointments, shopping trips, wheelchair accessible, door to door, Northamptonshire',
}

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
    title: 'Social & Family Visits',
    icon: HeartIcon,
    description: 'Maintaining important social connections and family relationships',
    features: ['Family visits', 'Social events', 'Day centre attendance', 'Community activities', 'Religious services', 'Friend visits']
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

const testimonials = [
  {
    quote: "The transport service is a lifeline for me. The drivers are so friendly and helpful, and I always feel safe and comfortable.",
    author: "Dorothy, Rushden",
    service: "Regular Transport User"
  },
  {
    quote: "SERVE's transport helped my father get to his hospital appointments when we couldn't. The service is reliable and the staff are wonderful.",
    author: "Michael, Irthlingborough",
    service: "Family Member"
  },
  {
    quote: "I can still do my weekly shopping thanks to SERVE's transport. The drivers even help me with my bags - excellent service!",
    author: "George, Higham Ferrers",
    service: "Shopping Transport User"
  }
]

export default function TransportPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-serve-blue-600">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-serve-blue-600">Services</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Community Transport</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 text-white overflow-hidden">
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

              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Community <span className="text-purple-200">Transport</span>
              </h1>
              
              <p className="text-xl lg:text-2xl opacity-90 mb-8 leading-relaxed">
                Safe, reliable transport to medical appointments, shopping trips, 
                and family visits. Wheelchair accessible vehicles with trained drivers.
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
                        <CheckIcon className="w-4 h-4 text-purple-600 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Vehicle Features */}
          <div className="bg-gradient-to-r from-purple-50 to-serve-blue-50 rounded-3xl p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Our Transport Features
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {vehicleFeatures.map((feature, index) => (
                <div key={index} className="flex items-center bg-white rounded-xl p-4 shadow-sm">
                  <CheckIcon className="w-5 h-5 text-purple-600 mr-3 flex-shrink-0" />
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
              Don't see your area listed? Contact us - we may still be able to help with special arrangements.
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

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Transport Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Affordable, transparent pricing for all our transport services
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {pricing.map((price, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{price.service}</h3>
                  <span className="text-2xl font-bold text-purple-600">{price.price}</span>
                </div>
                <p className="text-gray-600 leading-relaxed">{price.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-purple-50 rounded-2xl p-8 mt-12 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Special Discounts Available
            </h3>
            <ul className="text-gray-700 space-y-2">
              <li>• Regular users: 10% discount on return journeys</li>
              <li>• Pensioners: Special rates available</li>
              <li>• Block bookings: Discounts for multiple journeys</li>
              <li>• Day care attendees: Preferential rates</li>
            </ul>
          </div>
        </div>
      </section>

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
              <p className="text-gray-600">We'll confirm pickup time, destination, and any special requirements.</p>
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
      <section className="py-20 bg-gradient-to-br from-purple-600 to-purple-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='m0 40l40-40h-40v40zm0 0l40-40h-40v40z'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="mb-12">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-bold mb-8">
              <TruckIcon className="w-5 h-5 mr-2" />
              Quick & Easy Online Booking
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Book Your Transport <span className="text-purple-200">Online</span>
            </h2>
            
            <p className="text-xl lg:text-2xl opacity-90 mb-12 leading-relaxed max-w-3xl mx-auto">
              Skip the phone call and book your transport online 24/7. 
              Quick, secure, and convenient - get your journey confirmed in minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="bg-purple-200 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <ClockIcon className="w-6 h-6 text-purple-700" />
              </div>
              <h3 className="text-lg font-bold mb-3">24/7 Booking</h3>
              <p className="text-sm opacity-80">Book anytime, even outside office hours</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="bg-purple-200 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <CheckIcon className="w-6 h-6 text-purple-700" />
              </div>
              <h3 className="text-lg font-bold mb-3">Instant Confirmation</h3>
              <p className="text-sm opacity-80">Get immediate booking confirmation</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="bg-purple-200 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <ShieldCheckIcon className="w-6 h-6 text-purple-700" />
              </div>
              <h3 className="text-lg font-bold mb-3">Secure Payment</h3>
              <p className="text-sm opacity-80">Safe and encrypted online payments</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-12">
            <h3 className="text-2xl font-bold mb-6">What's Included in Online Booking?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              <div className="flex items-start">
                <CheckIcon className="w-5 h-5 text-purple-200 mr-3 mt-0.5 flex-shrink-0" />
                <span>Choose your pickup time and date</span>
              </div>
              <div className="flex items-start">
                <CheckIcon className="w-5 h-5 text-purple-200 mr-3 mt-0.5 flex-shrink-0" />
                <span>Specify wheelchair/mobility needs</span>
              </div>
              <div className="flex items-start">
                <CheckIcon className="w-5 h-5 text-purple-200 mr-3 mt-0.5 flex-shrink-0" />
                <span>Add return journey if needed</span>
              </div>
              <div className="flex items-start">
                <CheckIcon className="w-5 h-5 text-purple-200 mr-3 mt-0.5 flex-shrink-0" />
                <span>Emergency contact information</span>
              </div>
              <div className="flex items-start">
                <CheckIcon className="w-5 h-5 text-purple-200 mr-3 mt-0.5 flex-shrink-0" />
                <span>Special requirements and notes</span>
              </div>
              <div className="flex items-start">
                <CheckIcon className="w-5 h-5 text-purple-200 mr-3 mt-0.5 flex-shrink-0" />
                <span>Secure online payment processing</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              className="group bg-serve-green-600 hover:bg-serve-green-700 text-white px-10 py-5 rounded-xl text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl inline-flex items-center justify-center"
              onClick={() => {
                // This will be handled by the transport booking component
                const event = new CustomEvent('openTransportBooking', {
                  detail: { serviceType: 'transport' }
                });
                window.dispatchEvent(event);
              }}
            >
              <TruckIcon className="w-6 h-6 mr-3" />
              Book Transport Online
              <ArrowRightIcon className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <a
              href="tel:01933315555"
              className="inline-flex items-center bg-white/10 backdrop-blur-sm hover:bg-white hover:text-purple-900 text-white px-8 py-5 rounded-xl font-bold text-lg transition-all duration-300 border border-white/20"
            >
              <PhoneIcon className="w-6 h-6 mr-3" />
              Or Call: 01933 315555
            </a>
          </div>

          <div className="mt-8 text-sm opacity-80">
            <p>
              Need help with online booking? Call us at 01933 315555 or visit our office.
              <br />
              Online booking available for journeys within our standard service areas.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What Our Passengers Say
            </h2>
            <p className="text-xl text-gray-600">
              Real experiences from people who use our transport service
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-purple-50 rounded-2xl p-8 shadow-lg">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="border-t border-purple-200 pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.service}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Need Reliable Transport?
          </h2>
          <p className="text-xl opacity-90 mb-10 leading-relaxed">
            Don't let transport be a barrier to living independently. Our friendly, 
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
    </div>
  )
}