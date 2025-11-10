"use client"

import { useState, useEffect } from 'react'
import { 
  CheckCircleIcon, 
  XMarkIcon, 
  PhoneIcon,
  MapPinIcon,
  ShieldCheckIcon,
  CurrencyPoundIcon,
  UserIcon,
  EnvelopeIcon,
  StarIcon,
  CalendarIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'

interface AssessmentBookingProps {
  isOpen: boolean
  onClose: () => void
}

export default function AssessmentBooking({ isOpen, onClose }: AssessmentBookingProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [bookingData, setBookingData] = useState({
    // Personal Information
    name: '',
    phone: '',
    email: '',
    address: '',
    // Care Requirements
    serviceType: '',
    urgency: '',
    mobility: '',
    medicalConditions: '',
    preferredTime: '',
    // Payment Information
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: ''
  })

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        handleClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen])

  const handleClose = () => {
    setCurrentStep(1)
    setBookingData({
      name: '',
      phone: '',
      email: '',
      address: '',
      serviceType: '',
      urgency: '',
      mobility: '',
      medicalConditions: '',
      preferredTime: '',
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      cardName: ''
    })
    onClose()
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setBookingData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (currentStep === 3) {
      setIsSubmitting(true)
      
      // Simulate payment processing
      setTimeout(() => {
        setIsSubmitting(false)
        alert('Payment successful! £25 assessment fee paid. This will be fully refunded when you start your care package. We will contact you within 24 hours to schedule your assessment.')
        handleClose()
      }, 3000)
    } else {
      nextStep()
    }
  }

  if (!isOpen) {
    return null
  }

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center p-4 z-[99999] animate-fadeIn"
      style={{ 
        background: 'linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(30,64,175,0.4) 100%)',
        backdropFilter: 'blur(12px)',
        isolation: 'isolate'
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          handleClose()
        }
      }}
    >
      <div 
        className="bg-white rounded-3xl shadow-2xl w-[95vw] max-w-7xl max-h-[95vh] overflow-hidden relative animate-slideUp z-[100000] border border-gray-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Enhanced Header */}
        <div className="relative bg-gradient-to-br from-serve-blue-600 via-serve-blue-700 to-serve-blue-800 text-white p-8 md:p-12">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
          
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-3 hover:bg-white/20 rounded-full transition-all duration-200 hover:scale-110 z-10"
            aria-label="Close"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
          
          <div className="relative z-10 max-w-4xl">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mr-6 border border-white/30">
                <ShieldCheckIcon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-2 text-white">Free Care Assessment</h2>
                <p className="text-blue-100 text-xl">Professional evaluation at your home</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-white/15 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
              <div className="flex items-center text-yellow-200 mb-3">
                <CurrencyPoundIcon className="w-6 h-6 mr-3" />
                <span className="font-bold text-lg">£25 Assessment Fee - Fully Refundable</span>
              </div>
              <p className="text-blue-50 leading-relaxed">
                100% refund when you start care • Professional CQC-rated team • Award-winning care services
              </p>
            </div>
          </div>
        </div>

        <div className="overflow-y-auto max-h-[calc(95vh-200px)] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-full">
            {/* Left Side - Enhanced Information Panel */}
            <div className="p-8 md:p-12 bg-gradient-to-br from-gray-50 to-blue-50/30 border-r border-gray-100">
              <div className="space-y-10">
                {/* What's Included */}
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                    <div className="w-12 h-12 bg-serve-green-100 rounded-xl flex items-center justify-center mr-4">
                      <CheckCircleIcon className="w-7 h-7 text-serve-green-600" />
                    </div>
                    What&apos;s Included
                  </h3>
                  <div className="space-y-4">
                    {[
                      'Comprehensive care needs assessment',
                      'Personalized care plan development', 
                      'Home safety evaluation',
                      'Family consultation and guidance',
                      'Detailed written report',
                      'Ongoing support recommendations'
                    ].map((item, index) => (
                      <div key={index} className="flex items-start group">
                        <div className="w-6 h-6 bg-serve-green-500 rounded-full flex items-center justify-center mt-0.5 mr-4 flex-shrink-0 group-hover:bg-serve-green-600 transition-colors">
                          <CheckCircleIcon className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-700 leading-relaxed text-lg">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Why Choose SERVE - Enhanced */}
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                    <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mr-4">
                      <StarIcon className="w-7 h-7 text-yellow-500" />
                    </div>
                    Why Choose SERVE
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start p-4 rounded-xl hover:bg-serve-blue-50 transition-colors group">
                      <div className="w-14 h-14 bg-gradient-to-br from-serve-blue-100 to-serve-blue-200 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:from-serve-blue-200 group-hover:to-serve-blue-300 transition-all">
                        <span className="text-serve-blue-700 font-bold text-lg">40+</span>
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 text-lg mb-1">Years of Experience</div>
                        <div className="text-gray-600">Trusted care provider since 1980s</div>
                      </div>
                    </div>
                    <div className="flex items-start p-4 rounded-xl hover:bg-yellow-50 transition-colors group">
                      <div className="w-14 h-14 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:from-yellow-200 group-hover:to-yellow-300 transition-all">
                        <span className="text-yellow-700 font-bold">CQC</span>
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 text-lg mb-1">CQC Regulated</div>
                        <div className="text-gray-600">Officially registered and inspected</div>
                      </div>
                    </div>
                    <div className="flex items-start p-4 rounded-xl hover:bg-serve-green-50 transition-colors group">
                      <div className="w-14 h-14 bg-gradient-to-br from-serve-green-100 to-serve-green-200 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:from-serve-green-200 group-hover:to-serve-green-300 transition-all">
                        <span className="text-serve-green-700 font-bold text-2xl">★</span>
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 text-lg mb-1">Award Winning</div>
                        <div className="text-gray-600">Best Homecare Team 2024</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Info - Enhanced */}
                <div className="bg-gradient-to-br from-serve-blue-600 to-serve-blue-700 rounded-2xl p-8 text-white shadow-lg">
                  <h4 className="font-bold text-white mb-6 text-xl flex items-center">
                    <PhoneIcon className="w-6 h-6 mr-3" />
                    Quick Contact
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-center p-3 rounded-xl bg-white/10 backdrop-blur-sm">
                      <PhoneIcon className="w-5 h-5 mr-4 text-blue-200 flex-shrink-0" />
                      <span className="font-semibold text-lg">01933 315555</span>
                    </div>
                    <div className="flex items-center p-3 rounded-xl bg-white/10 backdrop-blur-sm">
                      <EnvelopeIcon className="w-5 h-5 mr-4 text-blue-200 flex-shrink-0" />
                      <span className="font-semibold">info@serve.org.uk</span>
                    </div>
                    <div className="flex items-start p-3 rounded-xl bg-white/10 backdrop-blur-sm">
                      <MapPinIcon className="w-5 h-5 mr-4 mt-0.5 text-blue-200 flex-shrink-0" />
                      <span>8 West Street, Rushden, Northants NN10 0RT</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Enhanced Form */}
            <div className="p-8 md:p-12 bg-white">
              <div className="w-full max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <div className="w-20 h-20 bg-gradient-to-br from-serve-blue-100 to-serve-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                    <CalendarIcon className="w-10 h-10 text-serve-blue-600" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Book Your Care Assessment</h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    {currentStep === 1 && "Step 1: Personal Information"}
                    {currentStep === 2 && "Step 2: Care Requirements"}  
                    {currentStep === 3 && "Step 3: Payment (£25 - Fully Refundable)"}
                  </p>
                  
                  {/* Enhanced Progress Bar */}
                  <div className="flex items-center justify-center space-x-2 md:space-x-4 mb-12">
                    {[1, 2, 3].map((step) => (
                      <div key={step} className="flex items-center">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                          currentStep >= step 
                            ? 'bg-serve-blue-600 text-white shadow-lg scale-110' 
                            : 'bg-gray-200 text-gray-400'
                        }`}>
                          {currentStep > step ? (
                            <CheckCircleIcon className="w-6 h-6" />
                          ) : (
                            step
                          )}
                        </div>
                        {step < 3 && (
                          <div className={`w-12 md:w-20 h-1 mx-1 md:mx-2 transition-all duration-300 ${
                            currentStep > step ? 'bg-serve-blue-600' : 'bg-gray-200'
                          }`} />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  {currentStep === 1 && (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="name" className="block text-base font-semibold text-gray-700">
                            Full Name *
                          </label>
                          <div className="relative group">
                            <UserIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-serve-blue-500 transition-colors" />
                            <input
                              type="text"
                              id="name"
                              name="name"
                              required
                              value={bookingData.name}
                              onChange={handleInputChange}
                              className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-serve-blue-500 focus:border-serve-blue-500 transition-all duration-200 text-gray-900 hover:border-gray-300"
                              placeholder="Enter your full name"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="phone" className="block text-base font-semibold text-gray-700">
                            Phone Number *
                          </label>
                          <div className="relative group">
                            <PhoneIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-serve-blue-500 transition-colors" />
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              required
                              value={bookingData.phone}
                              onChange={handleInputChange}
                              className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-serve-blue-500 focus:border-serve-blue-500 transition-all duration-200 text-gray-900 hover:border-gray-300"
                              placeholder="01933 315555"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="email" className="block text-base font-semibold text-gray-700">
                            Email Address *
                          </label>
                          <div className="relative group">
                            <EnvelopeIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-serve-blue-500 transition-colors" />
                            <input
                              type="email"
                              id="email"
                              name="email"
                              required
                              value={bookingData.email}
                              onChange={handleInputChange}
                              className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-serve-blue-500 focus:border-serve-blue-500 transition-all duration-200 text-gray-900 hover:border-gray-300"
                              placeholder="your.email@example.com"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="address" className="block text-base font-semibold text-gray-700">
                            Home Address *
                          </label>
                          <div className="relative group">
                            <MapPinIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-serve-blue-500 transition-colors" />
                            <input
                              type="text"
                              id="address"
                              name="address"
                              required
                              value={bookingData.address}
                              onChange={handleInputChange}
                              className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-serve-blue-500 focus:border-serve-blue-500 transition-all duration-200 text-gray-900 hover:border-gray-300"
                              placeholder="Full address where assessment will take place"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {currentStep === 2 && (
                    <div className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <label htmlFor="serviceType" className="block text-lg font-semibold text-gray-700 mb-3">
                            Type of Care Needed *
                          </label>
                          <select
                            id="serviceType"
                            name="serviceType"
                            required
                            value={bookingData.serviceType}
                            onChange={handleInputChange}
                            className="w-full px-4 py-5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-serve-blue-500 focus:border-serve-blue-500 transition-all duration-200 text-gray-900 text-xl"
                          >
                            <option value="">Select care type</option>
                            <option value="personal-care">Personal Care & Support</option>
                            <option value="domestic-care">Domestic Care & Housekeeping</option>
                            <option value="companionship">Companionship & Social Support</option>
                            <option value="dementia-care">Dementia & Memory Care</option>
                            <option value="live-in-care">Live-in Care</option>
                            <option value="respite-care">Respite Care</option>
                          </select>
                        </div>

                        <div>
                          <label htmlFor="urgency" className="block text-lg font-semibold text-gray-700 mb-3">
                            When do you need care to start? *
                          </label>
                          <select
                            id="urgency"
                            name="urgency"
                            required
                            value={bookingData.urgency}
                            onChange={handleInputChange}
                            className="w-full px-4 py-5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-serve-blue-500 focus:border-serve-blue-500 transition-all duration-200 text-gray-900 text-xl"
                          >
                            <option value="">Select timeframe</option>
                            <option value="immediately">Immediately (within 1 week)</option>
                            <option value="soon">Soon (1-4 weeks)</option>
                            <option value="month">Within a month</option>
                            <option value="planning">Planning ahead (1-3 months)</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="mobility" className="block text-sm font-semibold text-gray-700 mb-3">
                          Mobility Level *
                        </label>
                        <select
                          id="mobility"
                          name="mobility"
                          required
                          value={bookingData.mobility}
                          onChange={handleInputChange}
                          className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-serve-blue-500 focus:border-serve-blue-500 transition-all duration-200 text-gray-900 text-lg"
                        >
                          <option value="">Select mobility level</option>
                          <option value="independent">Fully independent</option>
                          <option value="some-assistance">Needs some assistance</option>
                          <option value="walking-aid">Uses walking aids</option>
                          <option value="wheelchair">Wheelchair user</option>
                          <option value="bed-bound">Bed-bound</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="medicalConditions" className="block text-sm font-semibold text-gray-700 mb-3">
                          Medical Conditions (Optional)
                        </label>
                        <textarea
                          id="medicalConditions"
                          name="medicalConditions"
                          rows={3}
                          value={bookingData.medicalConditions}
                          onChange={handleInputChange}
                          className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-serve-blue-500 focus:border-serve-blue-500 transition-all duration-200 text-gray-900 text-lg resize-none"
                          placeholder="Please list any medical conditions, medications, or special requirements"
                        />
                      </div>

                      <div>
                        <label htmlFor="preferredTime" className="block text-sm font-semibold text-gray-700 mb-3">
                          Preferred Assessment Time *
                        </label>
                        <select
                          id="preferredTime"
                          name="preferredTime"
                          required
                          value={bookingData.preferredTime}
                          onChange={handleInputChange}
                          className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-serve-blue-500 focus:border-serve-blue-500 transition-all duration-200 text-gray-900 text-lg"
                        >
                          <option value="">Select preferred time</option>
                          <option value="morning">Morning (9am-12pm)</option>
                          <option value="afternoon">Afternoon (12pm-4pm)</option>
                          <option value="evening">Early Evening (4pm-6pm)</option>
                          <option value="weekend">Weekend</option>
                          <option value="flexible">Flexible</option>
                        </select>
                      </div>
                    </div>
                  )}

                  {currentStep === 3 && (
                    <div className="space-y-6">
                      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
                        <div className="flex items-center mb-3">
                          <CurrencyPoundIcon className="w-6 h-6 text-yellow-600 mr-2" />
                          <h4 className="font-semibold text-yellow-800">Assessment Fee Information</h4>
                        </div>
                        <p className="text-yellow-700 text-sm leading-relaxed">
                          A £25 assessment fee secures your appointment and demonstrates commitment. 
                          <strong> This fee is 100% refundable</strong> when you proceed with our care services.
                        </p>
                      </div>

                      <div>
                        <label htmlFor="cardName" className="block text-sm font-semibold text-gray-700 mb-3">
                          Cardholder Name *
                        </label>
                        <input
                          type="text"
                          id="cardName"
                          name="cardName"
                          required
                          value={bookingData.cardName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-serve-blue-500 focus:border-serve-blue-500 transition-all duration-200 text-gray-900 text-lg"
                          placeholder="Name on card"
                        />
                      </div>

                      <div>
                        <label htmlFor="cardNumber" className="block text-sm font-semibold text-gray-700 mb-3">
                          Card Number *
                        </label>
                        <input
                          type="text"
                          id="cardNumber"
                          name="cardNumber"
                          required
                          value={bookingData.cardNumber}
                          onChange={handleInputChange}
                          className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-serve-blue-500 focus:border-serve-blue-500 transition-all duration-200 text-gray-900 text-lg"
                          placeholder="1234 5678 9012 3456"
                          maxLength={19}
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="expiryDate" className="block text-sm font-semibold text-gray-700 mb-3">
                            Expiry Date *
                          </label>
                          <input
                            type="text"
                            id="expiryDate"
                            name="expiryDate"
                            required
                            value={bookingData.expiryDate}
                            onChange={handleInputChange}
                            className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-serve-blue-500 focus:border-serve-blue-500 transition-all duration-200 text-gray-900 text-lg"
                            placeholder="MM/YY"
                            maxLength={5}
                          />
                        </div>
                        <div>
                          <label htmlFor="cvv" className="block text-sm font-semibold text-gray-700 mb-3">
                            Security Code *
                          </label>
                          <input
                            type="text"
                            id="cvv"
                            name="cvv"
                            required
                            value={bookingData.cvv}
                            onChange={handleInputChange}
                            className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-serve-blue-500 focus:border-serve-blue-500 transition-all duration-200 text-gray-900 text-lg"
                            placeholder="123"
                            maxLength={4}
                          />
                        </div>
                      </div>

                      <div className="bg-serve-blue-50 border border-serve-blue-200 rounded-xl p-6">
                        <h4 className="font-semibold text-serve-blue-800 mb-2">Total: £25.00</h4>
                        <p className="text-serve-blue-700 text-sm">
                          Secure payment processed by Stripe. Your card details are encrypted and safe.
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="flex justify-between items-center pt-8 border-t border-gray-100">
                    {currentStep > 1 && (
                      <button
                        type="button"
                        onClick={prevStep}
                        className="flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 hover:scale-105"
                      >
                        <ArrowRightIcon className="w-5 h-5 mr-2 rotate-180" />
                        Previous
                      </button>
                    )}
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`bg-gradient-to-r from-serve-blue-600 to-serve-blue-700 hover:from-serve-blue-700 hover:to-serve-blue-800 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed text-white py-4 px-8 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl ${
                        currentStep === 1 ? 'w-full' : 'ml-auto'
                      }`}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
                          Processing Payment...
                        </div>
                      ) : (
                        <div className="flex items-center justify-center">
                          {currentStep === 3 ? (
                            <>
                              <CurrencyPoundIcon className="w-5 h-5 mr-2" />
                              Pay £25 & Book Assessment
                            </>
                          ) : (
                            <>
                              Continue
                              <ArrowRightIcon className="w-5 h-5 ml-2" />
                            </>
                          )}
                        </div>
                      )}
                    </button>
                  </div>

                  <div className="text-center mt-6 p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <p className="text-sm text-gray-600 leading-relaxed">
                      <span className="font-semibold">🔒 Secure & Safe:</span> By proceeding, you agree to our terms and privacy policy. 
                      Assessment fee is fully refundable upon starting care services.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function AssessmentBookingButton() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  const handleOpenModal = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsBookingOpen(true)
  }

  const handleCloseModal = () => {
    setIsBookingOpen(false)
  }

  return (
    <>
      <button
        type="button"
        onClick={handleOpenModal}
        className="group bg-serve-green-600 hover:bg-serve-green-700 active:bg-serve-green-800 text-white font-semibold transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 px-8 py-4 text-lg flex items-center justify-center mx-auto"
      >
        <CalendarIcon className="w-6 h-6 mr-3" />
        Book Home Care Assessment
      </button>
      
      <AssessmentBooking 
        isOpen={isBookingOpen} 
        onClose={handleCloseModal} 
      />
    </>
  )
}