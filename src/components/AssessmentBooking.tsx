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
    emergencyPhone: ''
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
    let currentDate = new Date(today)
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
      emergencyPhone: ''
    })
    onClose()
  }

  console.log('Modal isOpen:', isOpen, 'Step:', step) // Debug log
  
  if (!isOpen) {
    console.log('Modal not open, returning null')
    return null
  }
  
  console.log('Rendering modal...')

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center p-4"
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0,
        backgroundColor: 'rgba(255, 0, 0, 0.8)', // Red background for testing
        zIndex: 99999
      }}
      onClick={(e) => {
        console.log('Backdrop element clicked', e.target === e.currentTarget ? 'on backdrop' : 'on content')
        if (e.target === e.currentTarget) {
          console.log('Backdrop clicked, closing modal')
          handleClose()
        }
      }}
    >
      <div 
        className="bg-blue-500 rounded-2xl shadow-2xl w-96 h-96 relative mx-auto p-8"
        onClick={(e) => e.stopPropagation()}
        style={{ zIndex: 100000 }}
      >
        <h1 className="text-white text-2xl">TEST MODAL</h1>
        <p className="text-white">If you see this, the modal is working!</p>
        <button 
          onClick={handleClose}
          className="bg-white text-blue-500 px-4 py-2 rounded mt-4"
        >
          CLOSE TEST
        </button>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gray-50">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Book Home Care Assessment</h2>
            <p className="text-gray-600 mt-1">Professional care evaluation at your home</p>
            <p className="text-xs text-red-500 mt-1">Modal is working! Current step: {step}</p>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={(e) => {
                e.preventDefault()
                console.log('Close button clicked')
                handleClose()
              }}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-200 rounded-lg transition-colors font-medium"
            >
              Close
            </button>
            <button
              onClick={(e) => {
                e.preventDefault()
                console.log('X button clicked')
                handleClose()
              }}
              className="p-2 hover:bg-gray-200 rounded-full transition-colors"
              aria-label="Close booking form"
            >
              <XMarkIcon className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="px-8 py-6 bg-white border-b border-gray-100">
          <div className="flex items-center justify-center max-w-md mx-auto">
            <div className={`flex flex-col items-center ${step >= 1 ? 'text-serve-blue-600' : 'text-gray-400'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all duration-300 ${
                step >= 1 
                  ? 'bg-serve-blue-600 text-white border-serve-blue-600 shadow-md' 
                  : 'bg-gray-100 text-gray-400 border-gray-200'
              }`}>1</div>
              <span className="mt-2 text-xs font-semibold">Details</span>
            </div>
            
            <div className={`w-16 h-0.5 mx-4 transition-all duration-300 ${step >= 2 ? 'bg-serve-blue-600' : 'bg-gray-200'}`}></div>
            
            <div className={`flex flex-col items-center ${step >= 2 ? 'text-serve-blue-600' : 'text-gray-400'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all duration-300 ${
                step >= 2 
                  ? 'bg-serve-blue-600 text-white border-serve-blue-600 shadow-md' 
                  : 'bg-gray-100 text-gray-400 border-gray-200'
              }`}>2</div>
              <span className="mt-2 text-xs font-semibold">Payment</span>
            </div>
            
            <div className={`w-16 h-0.5 mx-4 transition-all duration-300 ${step >= 3 ? 'bg-serve-green-600' : 'bg-gray-200'}`}></div>
            
            <div className={`flex flex-col items-center ${step >= 3 ? 'text-serve-green-600' : 'text-gray-400'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all duration-300 ${
                step >= 3 
                  ? 'bg-serve-green-600 text-white border-serve-green-600 shadow-md' 
                  : 'bg-gray-100 text-gray-400 border-gray-200'
              }`}>3</div>
              <span className="mt-2 text-xs font-semibold">Confirmed</span>
            </div>
          </div>
        </div>

        {/* Step Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-200px)] p-6">
          {step === 1 && (
            <form onSubmit={handleSubmitDetails} className="space-y-6">
              <div className="bg-gradient-to-r from-serve-blue-50 to-serve-green-50 p-6 rounded-xl mb-8 border border-serve-blue-100">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-serve-blue-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">£</span>
                  </div>
                  <h3 className="text-xl font-bold text-serve-blue-900">Assessment Fee: £25</h3>
                </div>
                <p className="text-serve-blue-800 leading-relaxed">
                  This fee will be <strong>100% refunded</strong> when you start your care package after the assessment. 
                  It ensures committed appointments and covers our assessor's travel costs.
                </p>
              </div>

              <div className="space-y-6">
                {/* Personal Information Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-800 mb-3">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-serve-blue-500 focus:border-serve-blue-500 transition-all duration-200 hover:border-gray-300 text-gray-900"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-800 mb-3">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-serve-blue-500 focus:border-serve-blue-500 transition-all duration-200 hover:border-gray-300 text-gray-900"
                      placeholder="01933 315555"
                    />
                  </div>
                </div>

                {/* Contact Information Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-serve-blue-500 focus:border-serve-blue-500 transition-all duration-200 hover:border-gray-300 text-gray-900"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="emergencyContact" className="block text-sm font-semibold text-gray-800 mb-3">
                      Emergency Contact Name *
                    </label>
                    <input
                      type="text"
                      id="emergencyContact"
                      name="emergencyContact"
                      required
                      value={formData.emergencyContact}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-serve-blue-500 focus:border-serve-blue-500 transition-all duration-200 hover:border-gray-300 text-gray-900"
                      placeholder="Contact person's name"
                    />
                  </div>
                </div>

                {/* Address Information */}
                <div>
                  <label htmlFor="address" className="block text-sm font-semibold text-gray-800 mb-3">
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
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-serve-blue-500 focus:border-serve-blue-500 transition-all duration-200 hover:border-gray-300 text-gray-900"
                  />
                </div>

                {/* Emergency Contact Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

                {/* Date and Time Selection */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="preferredDate" className="block text-sm font-semibold text-gray-800 mb-3">
                      Preferred Date *
                    </label>
                    <select
                      id="preferredDate"
                      name="preferredDate"
                      required
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-serve-blue-500 focus:border-serve-blue-500 transition-all duration-200 hover:border-gray-300 bg-white text-gray-900"
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
                  </div>

                  <div>
                    <label htmlFor="preferredTime" className="block text-sm font-semibold text-gray-800 mb-3">
                      Preferred Time *
                    </label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      required
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-serve-blue-500 focus:border-serve-blue-500 transition-all duration-200 hover:border-gray-300 bg-white text-gray-900"
                    >
                      <option value="">Select a time</option>
                      {availableTimes.map((time, index) => (
                        <option key={index} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Care Needs Description */}
                <div>
                  <label htmlFor="careNeeds" className="block text-sm font-semibold text-gray-800 mb-3">
                    Brief Description of Care Needs
                  </label>
                  <textarea
                    id="careNeeds"
                    name="careNeeds"
                    rows={4}
                    value={formData.careNeeds}
                    onChange={handleInputChange}
                    placeholder="Please describe the type of care support you're looking for (e.g., personal care, domestic help, companionship)..."
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-serve-blue-500 focus:border-serve-blue-500 transition-all duration-200 hover:border-gray-300 resize-none text-gray-900"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-serve-blue-600 to-serve-blue-700 hover:from-serve-blue-700 hover:to-serve-blue-800 text-white font-bold py-5 px-8 rounded-xl transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                  >
                    <CalendarIcon className="w-6 h-6 mr-3" />
                    Proceed to Payment
                    <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </form>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-4">Assessment Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Name:</span>
                    <span className="ml-2 font-medium">{formData.name}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Date:</span>
                    <span className="ml-2 font-medium">
                      {new Date(formData.preferredDate).toLocaleDateString('en-GB', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-600">Time:</span>
                    <span className="ml-2 font-medium">{formData.preferredTime}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Assessment Fee:</span>
                    <span className="ml-2 font-medium text-serve-green-600">£25.00</span>
                  </div>
                </div>
              </div>

              <div className="bg-serve-green-50 p-4 rounded-lg">
                <div className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-serve-green-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-serve-green-800 mb-1">100% Refund Guarantee</h4>
                    <p className="text-sm text-serve-green-700">
                      Your £25 assessment fee will be fully refunded when you start a care package with SERVE. 
                      This fee simply ensures committed appointments and covers our assessor's travel costs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <CreditCardIcon className="w-5 h-5 mr-2" />
                  Payment Information
                </h3>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                  <p className="text-sm text-yellow-800">
                    <strong>Note:</strong> This is a demonstration. In production, this would integrate with Stripe, PayPal, or your preferred payment processor.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Card Number
                    </label>
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-serve-blue-500"
                      disabled
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-serve-blue-500"
                        disabled
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        CVV
                      </label>
                      <input
                        type="text"
                        placeholder="123"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-serve-blue-500"
                        disabled
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-4 px-6 rounded-lg transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={handlePayment}
                  disabled={isSubmitting}
                  className="flex-1 bg-serve-green-600 hover:bg-serve-green-700 disabled:opacity-50 text-white font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      <CreditCardIcon className="w-5 h-5 mr-2" />
                      Pay £25.00
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-serve-green-100 rounded-full flex items-center justify-center mx-auto">
                <CheckCircleIcon className="w-12 h-12 text-serve-green-600" />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Assessment Booked!</h3>
                <p className="text-gray-600 mb-6">
                  Your home care assessment has been successfully scheduled. We'll send confirmation details to your email.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg text-left">
                <h4 className="font-semibold text-gray-900 mb-3">Appointment Details</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Date:</span>
                    <span className="font-medium">
                      {new Date(formData.preferredDate).toLocaleDateString('en-GB', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Time:</span>
                    <span className="font-medium">{formData.preferredTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Assessment Fee:</span>
                    <span className="font-medium text-serve-green-600">£25.00 (Refundable)</span>
                  </div>
                </div>
              </div>

              <div className="bg-serve-blue-50 p-4 rounded-lg">
                <p className="text-sm text-serve-blue-800">
                  Our qualified assessor will contact you 24 hours before the appointment to confirm details. 
                  If you have any questions, please call us on <strong>01933 315555</strong>.
                </p>
              </div>

              <button
                onClick={handleClose}
                className="w-full bg-serve-blue-600 hover:bg-serve-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors"
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
    console.log('Opening modal...') // Debug log
    setIsBookingOpen(true)
  }

  const handleCloseModal = () => {
    console.log('Closing modal...') // Debug log
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