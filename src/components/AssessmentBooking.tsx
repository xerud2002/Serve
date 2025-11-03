"use client"

import { useState } from 'react'
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

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">Book Home Care Assessment</h2>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close booking form"
          >
            <XMarkIcon className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        {/* Progress Steps */}
        <div className="px-6 py-4 bg-gray-50">
          <div className="flex items-center justify-center space-x-4">
            <div className={`flex items-center ${step >= 1 ? 'text-serve-blue-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                step >= 1 ? 'bg-serve-blue-600 text-white' : 'bg-gray-200 text-gray-400'
              }`}>1</div>
              <span className="ml-2 text-sm font-medium">Details</span>
            </div>
            <div className={`w-8 h-0.5 ${step >= 2 ? 'bg-serve-blue-600' : 'bg-gray-200'}`}></div>
            <div className={`flex items-center ${step >= 2 ? 'text-serve-blue-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                step >= 2 ? 'bg-serve-blue-600 text-white' : 'bg-gray-200 text-gray-400'
              }`}>2</div>
              <span className="ml-2 text-sm font-medium">Payment</span>
            </div>
            <div className={`w-8 h-0.5 ${step >= 3 ? 'bg-serve-blue-600' : 'bg-gray-200'}`}></div>
            <div className={`flex items-center ${step >= 3 ? 'text-serve-green-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                step >= 3 ? 'bg-serve-green-600 text-white' : 'bg-gray-200 text-gray-400'
              }`}>3</div>
              <span className="ml-2 text-sm font-medium">Confirmed</span>
            </div>
          </div>
        </div>

        {/* Step Content */}
        <div className="p-6">
          {step === 1 && (
            <form onSubmit={handleSubmitDetails} className="space-y-6">
              <div className="bg-serve-blue-50 p-4 rounded-lg mb-6">
                <h3 className="font-semibold text-serve-blue-900 mb-2">Assessment Fee: £25</h3>
                <p className="text-sm text-serve-blue-800">
                  This fee will be <strong>fully refunded</strong> if you proceed with our care package after the assessment.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-serve-blue-500 focus:border-serve-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-serve-blue-500 focus:border-serve-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-serve-blue-500 focus:border-serve-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="emergencyContact" className="block text-sm font-medium text-gray-700 mb-2">
                    Emergency Contact Name *
                  </label>
                  <input
                    type="text"
                    id="emergencyContact"
                    name="emergencyContact"
                    required
                    value={formData.emergencyContact}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-serve-blue-500 focus:border-serve-blue-500"
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-serve-blue-500 focus:border-serve-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="emergencyPhone" className="block text-sm font-medium text-gray-700 mb-2">
                    Emergency Contact Phone *
                  </label>
                  <input
                    type="tel"
                    id="emergencyPhone"
                    name="emergencyPhone"
                    required
                    value={formData.emergencyPhone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-serve-blue-500 focus:border-serve-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Date *
                  </label>
                  <select
                    id="preferredDate"
                    name="preferredDate"
                    required
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-serve-blue-500 focus:border-serve-blue-500"
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
                  <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Time *
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    required
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-serve-blue-500 focus:border-serve-blue-500"
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

              <div>
                <label htmlFor="careNeeds" className="block text-sm font-medium text-gray-700 mb-2">
                  Brief Description of Care Needs
                </label>
                <textarea
                  id="careNeeds"
                  name="careNeeds"
                  rows={4}
                  value={formData.careNeeds}
                  onChange={handleInputChange}
                  placeholder="Please describe the type of care support you're looking for..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-serve-blue-500 focus:border-serve-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-serve-blue-600 hover:bg-serve-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center"
              >
                <CalendarIcon className="w-5 h-5 mr-2" />
                Proceed to Payment
              </button>
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

  return (
    <>
      <button
        onClick={() => setIsBookingOpen(true)}
        className={`group bg-serve-green-600 hover:bg-serve-green-700 active:bg-serve-green-800 text-white font-semibold transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl ${MOBILE_CLASSES.touchTarget} ${FOCUS_STYLES.button} transform hover:scale-105 px-8 py-4 text-lg flex items-center justify-center mx-auto`}
      >
        <CalendarIcon className="w-6 h-6 mr-3" />
        Book Home Care Assessment
      </button>
      
      <AssessmentBooking 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />
    </>
  )
}