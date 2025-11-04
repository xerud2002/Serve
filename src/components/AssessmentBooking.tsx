"use client"

import { useState, useEffect } from 'react'
import { CalendarIcon, ClockIcon, CreditCardIcon, CheckCircleIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { MOBILE_CLASSES } from '@/lib/mobile'
import { FOCUS_STYLES } from '@/lib/accessibility'

interface AssessmentBookingProps {
  isOpen: boolean
  onClose: () => void
}

export default function AssessmentBooking({ isOpen, onClose }: AssessmentBookingProps) {
  const [step, setStep] = useState(1) // 1: Details, 2: Payment, 3: Confirmation
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    preferredDate: '',
    preferredTime: '',
    careNeeds: '',
    emergencyContact: '',
    emergencyPhone: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        console.log('Escape key pressed, closing modal')
        handleClose()
      }
    }

    if (isOpen) {
      console.log('Modal opened, setting up event listeners and scroll lock')
      document.addEventListener('keydown', handleEscape)
      // Temporarily disable scroll lock to test
      // document.body.style.overflow = 'hidden'
      // document.body.style.position = 'fixed'
      // document.body.style.width = '100%'
    } else {
      console.log('Modal closed, cleaning up')
      // Restore normal scrolling
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }
  }, [isOpen])

  // Generate available dates (next 14 days, excluding weekends)
  const getAvailableDates = () => {
    const dates = []
    const today = new Date()
    const currentDate = new Date(today)
    currentDate.setDate(currentDate.getDate() + 1) // Start from tomorrow
    
    while (dates.length < 10) {
      const dayOfWeek = currentDate.getDay()
      if (dayOfWeek !== 0 && dayOfWeek !== 6) { // Exclude Sunday (0) and Saturday (6)
        dates.push(new Date(currentDate))
      }
      currentDate.setDate(currentDate.getDate() + 1)
    }
    
    return dates
  }

  const availableDates = getAvailableDates()
  const availableTimes = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30'
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmitDetails = (e: React.FormEvent) => {
    e.preventDefault()
    setStep(2) // Move to payment step
  }

  const handleSubmitPayment = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate payment processing
    setTimeout(() => {
      setIsSubmitting(false)
      setStep(3) // Move to confirmation
    }, 2000)
  }

  const handlePayment = () => {
    setIsSubmitting(true)
    // Simulate payment processing
    setTimeout(() => {
      setIsSubmitting(false)
      setStep(3) // Move to confirmation
    }, 2000)
  }

  const handleClose = () => {
    setStep(1)
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      preferredDate: '',
      preferredTime: '',
      careNeeds: '',
      emergencyContact: '',
      emergencyPhone: '',
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      cardholderName: ''
    })
    onClose()
  }

  if (!isOpen) {
    return null
  }

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center p-2 sm:p-4 animate-fadeIn"
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 50,
        backdropFilter: 'blur(4px)'
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          handleClose()
        }
      }}
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl md:max-w-6xl lg:max-w-7xl max-h-[98vh] overflow-hidden relative mx-auto border border-gray-200 animate-slideUp"
        onClick={(e) => e.stopPropagation()}
        style={{ zIndex: 51 }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-8 lg:p-12 border-b border-gray-200 bg-gradient-to-r from-serve-blue-50 to-white">
          <div className="flex-1 min-w-0 max-w-4xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">Book Care Assessment</h2>
            <p className="text-serve-blue-600 font-medium text-lg lg:text-xl">Professional evaluation at your home</p>
          </div>
          <button
            onClick={handleClose}
            className="p-3 hover:bg-gray-200 rounded-full transition-colors ml-4 flex-shrink-0"
            aria-label="Close booking form"
          >
            <XMarkIcon className="w-6 h-6 text-gray-500 hover:text-gray-700" />
          </button>
        </div>

        {/* Progress Steps */}
        <div className="px-8 lg:px-12 py-6 lg:py-8 bg-white border-b border-gray-100">
          <div className="flex items-center justify-center max-w-2xl mx-auto">
            <div className={`flex flex-col items-center ${step >= 1 ? 'text-serve-blue-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold border-2 transition-all duration-300 ${
                step >= 1 
                  ? 'bg-serve-blue-600 text-white border-serve-blue-600 shadow-md' 
                  : 'bg-gray-100 text-gray-400 border-gray-200'
              }`}>1</div>
              <span className="mt-1 sm:mt-2 text-xs font-semibold">Details</span>
            </div>
            
            <div className={`w-8 sm:w-16 h-0.5 mx-2 sm:mx-4 transition-all duration-300 ${step >= 2 ? 'bg-serve-blue-600' : 'bg-gray-200'}`}></div>
            
            <div className={`flex flex-col items-center ${step >= 2 ? 'text-serve-blue-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold border-2 transition-all duration-300 ${
                step >= 2 
                  ? 'bg-serve-blue-600 text-white border-serve-blue-600 shadow-md' 
                  : 'bg-gray-100 text-gray-400 border-gray-200'
              }`}>2</div>
              <span className="mt-1 sm:mt-2 text-xs font-semibold">Payment</span>
            </div>
            
            <div className={`w-8 sm:w-16 h-0.5 mx-2 sm:mx-4 transition-all duration-300 ${step >= 3 ? 'bg-serve-green-600' : 'bg-gray-200'}`}></div>
            
            <div className={`flex flex-col items-center ${step >= 3 ? 'text-serve-green-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold border-2 transition-all duration-300 ${
                step >= 3 
                  ? 'bg-serve-green-600 text-white border-serve-green-600 shadow-md' 
                  : 'bg-gray-100 text-gray-400 border-gray-200'
              }`}>3</div>
              <span className="mt-2 text-xs font-semibold">Confirmed</span>
            </div>
          </div>
        </div>

        {/* Step Content */}
        <div className="overflow-y-auto max-h-[calc(98vh-180px)] p-8 lg:p-12 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          {step === 1 && (
            <form onSubmit={handleSubmitDetails} className="space-y-10 mb-16">
              <div className="bg-gradient-to-r from-serve-blue-50 to-serve-green-50 p-8 rounded-xl mb-10 border border-serve-blue-100 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-serve-blue-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">£</span>
                  </div>
                  <h3 className="text-2xl font-bold text-serve-blue-900">Assessment Fee: £25</h3>
                </div>
                <p className="text-serve-blue-800 leading-relaxed text-lg">
                  This fee will be <strong>100% refunded</strong> when you start your care package after the assessment. 
                  It ensures committed appointments and covers our assessor&apos;s travel costs.
                </p>
              </div>

              <div className="space-y-10">
                {/* Personal Information Section */}
                <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
                  <h4 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                    <div className="w-10 h-10 bg-serve-blue-600 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    Personal Information
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    <div>
                      <label htmlFor="name" className="block text-base font-semibold text-gray-700 mb-4">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-5 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-serve-blue-500 focus:border-serve-blue-500 transition-all duration-200 hover:border-gray-400 text-gray-900 bg-gray-50 focus:bg-white text-base"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-base font-semibold text-gray-700 mb-4">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-5 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-serve-blue-500 focus:border-serve-blue-500 transition-all duration-200 hover:border-gray-400 text-gray-900 bg-gray-50 focus:bg-white text-base"
                        placeholder="01933 315555"
                      />
                    </div>

                    <div className="md:col-span-2 lg:col-span-3">
                      <label htmlFor="email" className="block text-base font-semibold text-gray-700 mb-4">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-5 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-serve-blue-500 focus:border-serve-blue-500 transition-all duration-200 hover:border-gray-400 text-gray-900 bg-gray-50 focus:bg-white text-base"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div className="md:col-span-2 lg:col-span-3">
                      <label htmlFor="emergencyContact" className="block text-base font-semibold text-gray-700 mb-4">
                        Emergency Contact Name *
                      </label>
                      <input
                        type="text"
                        id="emergencyContact"
                        name="emergencyContact"
                        required
                        value={formData.emergencyContact}
                        onChange={handleInputChange}
                        className="w-full px-5 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-serve-blue-500 focus:border-serve-blue-500 transition-all duration-200 hover:border-gray-400 text-gray-900 bg-gray-50 focus:bg-white text-base"
                        placeholder="Contact person&apos;s name"
                      />
                    </div>
                  </div>
                </div>

                {/* Address & Emergency Contact Section */}
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <div className="w-8 h-8 bg-serve-green-600 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    Address & Emergency Contact
                  </h4>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-3">
                        Home Address *
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        required
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="Street address, city, postcode"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-serve-blue-500 focus:border-serve-blue-500 transition-all duration-200 hover:border-gray-400 text-gray-900 bg-gray-50 focus:bg-white"
                      />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="emergencyPhone" className="block text-sm font-semibold text-gray-800 mb-3">
                          Emergency Contact Phone *
                        </label>
                        <input
                          type="tel"
                          id="emergencyPhone"
                          name="emergencyPhone"
                          required
                          value={formData.emergencyPhone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-serve-blue-500 focus:border-serve-blue-500 transition-all duration-200 hover:border-gray-300 text-gray-900"
                          placeholder="Emergency contact phone"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Appointment Scheduling Section */}
                <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
                  <h4 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                    <div className="w-10 h-10 bg-serve-green-600 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    Appointment Details
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-16 max-w-4xl">
                    <div>
                      <label htmlFor="preferredDate" className="block text-base font-semibold text-gray-700 mb-4">
                        Preferred Date *
                      </label>
                      <div className="relative">
                        <select
                          id="preferredDate"
                          name="preferredDate"
                          required
                          value={formData.preferredDate}
                          onChange={handleInputChange}
                          className="w-full px-5 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-serve-blue-500 focus:border-serve-blue-500 transition-all duration-200 hover:border-gray-400 bg-gray-50 focus:bg-white text-gray-900 text-base appearance-none cursor-pointer"
                        >
                          <option value="">Select a date</option>
                          {availableDates.map((date, index) => (
                            <option key={index} value={date.toISOString().split('T')[0]}>
                              {date.toLocaleDateString('en-GB', { 
                                weekday: 'long', 
                                year: 'numeric', 
                                month: 'long', 
                                day: 'numeric' 
                              })}
                            </option>
                          ))}
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="preferredTime" className="block text-base font-semibold text-gray-700 mb-4">
                        Preferred Time *
                      </label>
                      <div className="relative">
                        <select
                          id="preferredTime"
                          name="preferredTime"
                          required
                          value={formData.preferredTime}
                          onChange={handleInputChange}
                          className="w-full px-5 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-serve-blue-500 focus:border-serve-blue-500 transition-all duration-200 hover:border-gray-400 bg-gray-50 focus:bg-white text-gray-900 text-base appearance-none cursor-pointer"
                        >
                          <option value="">Select a time</option>
                          {availableTimes.map((time, index) => (
                            <option key={index} value={time}>
                              {time}
                            </option>
                          ))}
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Care Needs Section */}
                <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
                  <h4 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                    <div className="w-10 h-10 bg-serve-red-600 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    Care Requirements
                  </h4>
                  <div>
                    <label htmlFor="careNeeds" className="block text-base font-semibold text-gray-700 mb-4">
                      Brief Description of Care Needs
                    </label>
                    <div className="relative">
                      <textarea
                        id="careNeeds"
                        name="careNeeds"
                        rows={8}
                        value={formData.careNeeds}
                        onChange={handleInputChange}
                        placeholder="Please describe the type of care support you're looking for (e.g., personal care, domestic help, companionship, medication assistance)...&#10;&#10;Include any specific requirements, mobility needs, or health conditions that would help us provide the best assessment for your situation."
                        className="w-full px-5 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-serve-blue-500 focus:border-serve-blue-500 transition-all duration-200 hover:border-gray-400 resize-none text-gray-900 bg-gray-50 focus:bg-white text-base leading-relaxed"
                      />
                      <div className="absolute bottom-4 right-4 text-xs text-gray-400 bg-white px-2 py-1 rounded border">
                        Optional but helpful
                      </div>
                    </div>
                    <p className="mt-3 text-sm text-gray-600">
                      💡 <strong>Tip:</strong> The more details you provide, the better we can tailor the assessment to your specific needs.
                    </p>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6 pb-8 max-w-2xl mx-auto">
                  <div className="bg-gradient-to-r from-serve-blue-50 to-serve-green-50 p-6 lg:p-8 rounded-xl border border-serve-blue-100 mb-6">
                    <div className="flex items-center justify-center mb-3">
                      <div className="w-8 h-8 bg-serve-blue-600 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-serve-blue-800 font-semibold text-lg">Ready to Book Your Assessment?</p>
                    </div>
                    <p className="text-serve-blue-700 text-center text-sm">
                      Click below to proceed to secure payment and confirm your appointment.
                    </p>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-serve-blue-600 to-serve-blue-700 hover:from-serve-blue-700 hover:to-serve-blue-800 text-white font-bold py-5 px-8 rounded-xl transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-[1.02] text-lg"
                  >
                    <CalendarIcon className="w-6 h-6 mr-3" />
                    <span className="hidden sm:inline">Proceed to Payment (£25)</span>
                    <span className="sm:hidden">Continue</span>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleSubmitPayment} className="space-y-8">
              {/* Payment Summary */}
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl border border-yellow-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-yellow-900 mb-2">Payment Summary</h3>
                    <p className="text-yellow-800">
                      Assessment fee: <span className="font-bold">£25.00</span>
                    </p>
                    <p className="text-sm text-yellow-700 mt-2">
                      <strong>100% refundable</strong> when you start your care package
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xl">£25</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Booking Summary */}
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Booking Summary</h4>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-600">Name:</span>
                    <p className="text-gray-900">{formData.name}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">Phone:</span>
                    <p className="text-gray-900">{formData.phone}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">Date:</span>
                    <p className="text-gray-900">
                      {formData.preferredDate && new Date(formData.preferredDate).toLocaleDateString('en-GB', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">Time:</span>
                    <p className="text-gray-900">{formData.preferredTime}</p>
                  </div>
                </div>
              </div>

              {/* Payment Details */}
              <div className="space-y-6">
                <h4 className="text-lg font-semibold text-gray-900 pb-2 border-b border-gray-200">Payment Details</h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                  <div className="sm:col-span-2 lg:col-span-4">
                    <label htmlFor="cardNumber" className="block text-sm font-semibold text-gray-800 mb-2 sm:mb-3">
                      Card Number *
                    </label>
                    <input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      required
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-3 sm:py-4 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-serve-blue-500 focus:border-serve-blue-500 transition-all duration-200 hover:border-gray-300 text-gray-900 text-sm sm:text-base"
                      placeholder="1234 5678 9012 3456"
                    />
                  </div>

                  <div className="sm:col-span-2 lg:col-span-4">
                    <label htmlFor="cardholderName" className="block text-sm font-semibold text-gray-800 mb-2 sm:mb-3">
                      Cardholder Name *
                    </label>
                    <input
                      type="text"
                      id="cardholderName"
                      name="cardholderName"
                      required
                      value={formData.cardholderName}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-3 sm:py-4 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-serve-blue-500 focus:border-serve-blue-500 transition-all duration-200 hover:border-gray-300 text-gray-900 text-sm sm:text-base"
                      placeholder="Name as it appears on card"
                    />
                  </div>

                  <div className="lg:col-span-2">
                    <label htmlFor="expiryDate" className="block text-sm font-semibold text-gray-800 mb-2 sm:mb-3">
                      Expiry Date *
                    </label>
                    <input
                      type="text"
                      id="expiryDate"
                      name="expiryDate"
                      required
                      value={formData.expiryDate}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-3 sm:py-4 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-serve-blue-500 focus:border-serve-blue-500 transition-all duration-200 hover:border-gray-300 text-gray-900 text-sm sm:text-base"
                      placeholder="MM/YY"
                    />
                  </div>

                  <div className="lg:col-span-2">
                    <label htmlFor="cvv" className="block text-sm font-semibold text-gray-800 mb-2 sm:mb-3">
                      Security Code (CVV) *
                    </label>
                    <input
                      type="text"
                      id="cvv"
                      name="cvv"
                      required
                      value={formData.cvv}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-3 sm:py-4 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-serve-blue-500 focus:border-serve-blue-500 transition-all duration-200 hover:border-gray-300 text-gray-900 text-sm sm:text-base"
                      placeholder="123"
                    />
                  </div>
                </div>
              </div>

              {/* Security Notice */}
              <div className="bg-serve-blue-50 p-4 rounded-xl border border-serve-blue-100">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-serve-blue-600 rounded-full flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-semibold text-serve-blue-900 mb-1">Secure Payment</h5>
                    <p className="text-sm text-serve-blue-800">
                      Your payment information is encrypted and secure. We use industry-standard SSL encryption.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl transition-all duration-200 flex items-center justify-center text-sm sm:text-base"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                  </svg>
                  <span className="hidden sm:inline">Back to Details</span>
                  <span className="sm:hidden">Back</span>
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-serve-green-600 to-serve-green-700 hover:from-serve-green-700 hover:to-serve-green-800 text-white font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-[1.02] text-sm sm:text-base"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span className="hidden sm:inline">Complete Secure Payment - £25</span>
                  <span className="sm:hidden">Pay £25</span>
                </button>
              </div>
            </form>
          )}

          {step === 3 && (
            <div className="text-center space-y-8">
              <div className="w-24 h-24 bg-gradient-to-br from-serve-green-100 to-serve-green-200 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <CheckCircleIcon className="w-16 h-16 text-serve-green-600" />
              </div>
              
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-gray-900">Assessment Booked Successfully!</h3>
                <p className="text-lg text-gray-600 max-w-lg mx-auto">
                  Your home care assessment has been scheduled. We&apos;ll send you a confirmation email shortly.
                </p>
              </div>

              {/* Booking Details Summary */}
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 text-left max-w-md mx-auto">
                <h4 className="font-semibold text-gray-900 mb-4 text-center">Appointment Details</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Date:</span>
                    <span className="font-medium text-gray-900">
                      {formData.preferredDate && new Date(formData.preferredDate).toLocaleDateString('en-GB', { 
                        weekday: 'long', 
                        day: 'numeric', 
                        month: 'long', 
                        year: 'numeric' 
                      })}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Time:</span>
                    <span className="font-medium text-gray-900">{formData.preferredTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Assessment Fee:</span>
                    <span className="font-medium text-gray-900">£25.00</span>
                  </div>
                  <div className="pt-2 border-t border-gray-200">
                    <p className="text-sm text-serve-green-700 font-medium">
                      ✓ Fee will be 100% refunded when you start your care package
                    </p>
                  </div>
                </div>
              </div>

              {/* Next Steps */}
              <div className="bg-serve-blue-50 p-6 rounded-xl border border-serve-blue-100 text-left">
                <h4 className="font-semibold text-serve-blue-900 mb-3">What happens next?</h4>
                <ul className="space-y-2 text-sm text-serve-blue-800">
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-serve-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">1</span>
                    You&apos;ll receive a confirmation email with all the details
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-serve-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">2</span>
                    Our assessor will call you 24 hours before the appointment
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-serve-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">3</span>
                    The assessment will take about 1 hour at your home
                  </li>
                </ul>
              </div>

              {/* Contact Information */}
              <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200">
                <p className="text-sm text-yellow-800">
                  <strong>Need to change your appointment?</strong><br />
                  Call us at <a href="tel:01933315555" className="font-semibold text-yellow-900 underline">01933 315555</a> or email <a href="mailto:info@serve.org.uk" className="font-semibold text-yellow-900 underline">info@serve.org.uk</a>
                </p>
              </div>

              <button
                onClick={handleClose}
                className="w-full bg-gradient-to-r from-serve-blue-600 to-serve-blue-700 hover:from-serve-blue-700 hover:to-serve-blue-800 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
              >
                Close
              </button>
            </div>
          )}
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
        className={`group bg-serve-green-600 hover:bg-serve-green-700 active:bg-serve-green-800 text-white font-semibold transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl ${MOBILE_CLASSES.touchTarget} ${FOCUS_STYLES.button} transform hover:scale-105 px-8 py-4 text-lg flex items-center justify-center mx-auto`}
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