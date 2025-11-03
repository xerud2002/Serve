'use client'

import { useState, useEffect } from 'react'
import { XMarkIcon, TruckIcon, CheckCircleIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import { MOBILE_CLASSES } from '@/lib/mobile'
import { FOCUS_STYLES } from '@/lib/accessibility'

interface TransportBookingProps {
  isOpen: boolean
  onClose: () => void
}

export default function TransportBooking({ isOpen, onClose }: TransportBookingProps) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    // Personal Information
    name: '',
    email: '',
    phone: '',
    address: '',
    emergencyContact: '',
    emergencyPhone: '',
    
    // Journey Details
    journeyType: 'single', // single, return
    pickupAddress: '',
    pickupDate: '',
    pickupTime: '',
    returnDate: '',
    returnTime: '',
    destination: '',
    
    // Special Requirements
    wheelchairAccess: false,
    mobilityAid: false,
    assistanceRequired: false,
    specialRequirements: '',
    
    // Service Type
    serviceType: 'medical', // medical, shopping, social, other
    
    // Payment
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
        console.log('Escape key pressed, closing transport booking')
        handleClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      console.log('Transport booking modal opened')
    } else {
      console.log('Transport booking modal closed, cleaning up')
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen])

  // Generate available dates (next 30 days, excluding weekends for medical)
  const getAvailableDates = () => {
    const dates = []
    const today = new Date()
    let currentDate = new Date(today)
    currentDate.setDate(currentDate.getDate() + 1) // Start from tomorrow
    
    while (dates.length < 20) {
      const dayOfWeek = currentDate.getDay()
      // For medical appointments, exclude weekends
      if (formData.serviceType === 'medical') {
        if (dayOfWeek !== 0 && dayOfWeek !== 6) {
          dates.push(new Date(currentDate))
        }
      } else {
        // For other services, include weekends but limit Sunday availability
        if (dayOfWeek !== 0) { // Still exclude Sundays for transport
          dates.push(new Date(currentDate))
        }
      }
      currentDate.setDate(currentDate.getDate() + 1)
    }
    
    return dates
  }

  const availableDates = getAvailableDates()
  const availableTimes = [
    '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00'
  ]

  const serviceTypes = [
    { value: 'medical', label: 'Medical Appointment', icon: '🏥', description: 'Hospital, GP, dentist visits' },
    { value: 'shopping', label: 'Shopping Trip', icon: '🛒', description: 'Groceries, pharmacy, essentials' },
    { value: 'social', label: 'Social Visit', icon: '👥', description: 'Family, friends, day centre' },
    { value: 'other', label: 'Other', icon: '📍', description: 'Banking, post office, etc.' }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      const target = e.target as HTMLInputElement
      setFormData(prev => ({
        ...prev,
        [name]: target.checked
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
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

  const handleClose = () => {
    setStep(1)
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      emergencyContact: '',
      emergencyPhone: '',
      journeyType: 'single',
      pickupAddress: '',
      pickupDate: '',
      pickupTime: '',
      returnDate: '',
      returnTime: '',
      destination: '',
      wheelchairAccess: false,
      mobilityAid: false,
      assistanceRequired: false,
      specialRequirements: '',
      serviceType: 'medical',
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      cardholderName: ''
    })
    onClose()
  }

  const calculatePrice = () => {
    // Simple pricing calculation based on journey type
    const basePrice = formData.journeyType === 'return' ? 25 : 15
    const wheelchairSurcharge = formData.wheelchairAccess ? 5 : 0
    return basePrice + wheelchairSurcharge
  }

  console.log('Transport booking modal isOpen:', isOpen, 'Step:', step)
  
  if (!isOpen) {
    console.log('Transport booking modal not open, returning null')
    return null
  }
  
  console.log('Rendering transport booking modal...')

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center p-2 sm:p-4"
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        zIndex: 99999
      }}
      onClick={(e) => {
        console.log('Transport booking backdrop clicked')
        if (e.target === e.currentTarget) {
          console.log('Transport booking backdrop clicked, closing modal')
          handleClose()
        }
      }}
    >
      <div 
        className="bg-white rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-[1400px] max-h-[95vh] overflow-hidden relative mx-auto"
        onClick={(e) => e.stopPropagation()}
        style={{ zIndex: 100000 }}
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 sm:p-6 lg:p-8 border-b border-gray-200 bg-gradient-to-r from-purple-50 to-serve-blue-50">
          <div className="flex-1 min-w-0">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1">Book Transport Online</h2>
            <p className="text-sm sm:text-base text-purple-600 font-medium">Quick, secure transport booking</p>
          </div>
          <div className="flex items-center space-x-2 mt-3 sm:mt-0 self-end sm:self-auto">
            <button
              onClick={(e) => {
                e.preventDefault()
                console.log('Transport booking close button clicked')
                handleClose()
              }}
              className="hidden sm:block px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-200 rounded-lg transition-colors font-medium"
            >
              Close
            </button>
            <button
              onClick={(e) => {
                e.preventDefault()
                console.log('Transport booking X button clicked')
                handleClose()
              }}
              className="p-2 hover:bg-gray-200 rounded-full transition-colors"
              aria-label="Close transport booking form"
            >
              <XMarkIcon className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 bg-white border-b border-gray-100">
          <div className="flex items-center justify-center max-w-xs sm:max-w-md mx-auto">
            <div className={`flex flex-col items-center ${step >= 1 ? 'text-purple-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold border-2 transition-all duration-300 ${
                step >= 1 
                  ? 'bg-purple-600 text-white border-purple-600 shadow-md' 
                  : 'bg-gray-100 text-gray-400 border-gray-200'
              }`}>1</div>
              <span className="mt-1 sm:mt-2 text-xs font-semibold">Journey</span>
            </div>
            
            <div className={`w-8 sm:w-16 h-0.5 mx-2 sm:mx-4 transition-all duration-300 ${step >= 2 ? 'bg-purple-600' : 'bg-gray-200'}`}></div>
            
            <div className={`flex flex-col items-center ${step >= 2 ? 'text-purple-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold border-2 transition-all duration-300 ${
                step >= 2 
                  ? 'bg-purple-600 text-white border-purple-600 shadow-md' 
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
              <span className="mt-1 sm:mt-2 text-xs font-semibold">Confirmed</span>
            </div>
          </div>
        </div>

        {/* Step Content */}
        <div className="overflow-y-auto max-h-[calc(95vh-180px)] sm:max-h-[calc(95vh-200px)] p-4 sm:p-6 lg:p-8">
          {step === 1 && (
            <form onSubmit={handleSubmitDetails} className="space-y-6 sm:space-y-8">
              {/* Service Type Selection */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">What type of journey is this?</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {serviceTypes.map((type) => (
                    <label key={type.value} className="cursor-pointer">
                      <input
                        type="radio"
                        name="serviceType"
                        value={type.value}
                        checked={formData.serviceType === type.value}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <div className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                        formData.serviceType === type.value 
                          ? 'border-purple-500 bg-purple-50' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}>
                        <div className="flex items-center mb-2">
                          <span className="text-2xl mr-3">{type.icon}</span>
                          <span className="font-semibold text-gray-900">{type.label}</span>
                        </div>
                        <p className="text-sm text-gray-600">{type.description}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Journey Type */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">Journey Type</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="cursor-pointer">
                    <input
                      type="radio"
                      name="journeyType"
                      value="single"
                      checked={formData.journeyType === 'single'}
                      onChange={handleInputChange}
                      className="sr-only"
                    />
                    <div className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                      formData.journeyType === 'single' 
                        ? 'border-purple-500 bg-purple-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="font-semibold text-gray-900">Single Journey</span>
                          <p className="text-sm text-gray-600">One-way transport</p>
                        </div>
                        <span className="text-lg font-bold text-purple-600">£15+</span>
                      </div>
                    </div>
                  </label>
                  
                  <label className="cursor-pointer">
                    <input
                      type="radio"
                      name="journeyType"
                      value="return"
                      checked={formData.journeyType === 'return'}
                      onChange={handleInputChange}
                      className="sr-only"
                    />
                    <div className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                      formData.journeyType === 'return' 
                        ? 'border-purple-500 bg-purple-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="font-semibold text-gray-900">Return Journey</span>
                          <p className="text-sm text-gray-600">Two-way transport</p>
                        </div>
                        <span className="text-lg font-bold text-purple-600">£25+</span>
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              {/* Personal Information */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">Your Details</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-800 mb-2 sm:mb-3">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-3 sm:py-4 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 hover:border-gray-300 text-gray-900 text-sm sm:text-base"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-800 mb-2 sm:mb-3">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-3 sm:py-4 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 hover:border-gray-300 text-gray-900 text-sm sm:text-base"
                      placeholder="01933 315555"
                    />
                  </div>

                  <div className="sm:col-span-2 xl:col-span-1">
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-2 sm:mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-3 sm:py-4 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 hover:border-gray-300 text-gray-900 text-sm sm:text-base"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
              </div>

              {/* Journey Details */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">Journey Details</h4>
                <div className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="pickupAddress" className="block text-sm font-semibold text-gray-800 mb-2 sm:mb-3">
                        Pickup Address *
                      </label>
                      <input
                        type="text"
                        id="pickupAddress"
                        name="pickupAddress"
                        required
                        value={formData.pickupAddress}
                        onChange={handleInputChange}
                        className="w-full px-3 sm:px-4 py-3 sm:py-4 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 hover:border-gray-300 text-gray-900 text-sm sm:text-base"
                        placeholder="Your pickup address"
                      />
                    </div>

                    <div>
                      <label htmlFor="destination" className="block text-sm font-semibold text-gray-800 mb-2 sm:mb-3">
                        Destination *
                      </label>
                      <input
                        type="text"
                        id="destination"
                        name="destination"
                        required
                        value={formData.destination}
                        onChange={handleInputChange}
                        className="w-full px-3 sm:px-4 py-3 sm:py-4 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 hover:border-gray-300 text-gray-900 text-sm sm:text-base"
                        placeholder="Where are you going?"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="pickupDate" className="block text-sm font-semibold text-gray-800 mb-2 sm:mb-3">
                        Pickup Date *
                      </label>
                      <select
                        id="pickupDate"
                        name="pickupDate"
                        required
                        value={formData.pickupDate}
                        onChange={handleInputChange}
                        className="w-full px-3 sm:px-4 py-3 sm:py-4 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 hover:border-gray-300 bg-white text-gray-900 text-sm sm:text-base"
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
                      <label htmlFor="pickupTime" className="block text-sm font-semibold text-gray-800 mb-2 sm:mb-3">
                        Pickup Time *
                      </label>
                      <select
                        id="pickupTime"
                        name="pickupTime"
                        required
                        value={formData.pickupTime}
                        onChange={handleInputChange}
                        className="w-full px-3 sm:px-4 py-3 sm:py-4 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 hover:border-gray-300 bg-white text-gray-900 text-sm sm:text-base"
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

                  {formData.journeyType === 'return' && (
                    <div className="bg-purple-50 p-4 rounded-xl">
                      <h5 className="font-semibold text-gray-900 mb-4">Return Journey</h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="returnDate" className="block text-sm font-semibold text-gray-800 mb-2">
                            Return Date *
                          </label>
                          <select
                            id="returnDate"
                            name="returnDate"
                            required={formData.journeyType === 'return'}
                            value={formData.returnDate}
                            onChange={handleInputChange}
                            className="w-full px-3 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 hover:border-gray-300 bg-white text-gray-900 text-sm"
                          >
                            <option value="">Select return date</option>
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
                          <label htmlFor="returnTime" className="block text-sm font-semibold text-gray-800 mb-2">
                            Return Time *
                          </label>
                          <select
                            id="returnTime"
                            name="returnTime"
                            required={formData.journeyType === 'return'}
                            value={formData.returnTime}
                            onChange={handleInputChange}
                            className="w-full px-3 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 hover:border-gray-300 bg-white text-gray-900 text-sm"
                          >
                            <option value="">Select return time</option>
                            {availableTimes.map((time, index) => (
                              <option key={index} value={time}>
                                {time}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Special Requirements */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">Special Requirements</h4>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        name="wheelchairAccess"
                        checked={formData.wheelchairAccess}
                        onChange={handleInputChange}
                        className="w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500 mr-3"
                      />
                      <span className="text-sm font-medium text-gray-900">Wheelchair Access</span>
                    </label>

                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        name="mobilityAid"
                        checked={formData.mobilityAid}
                        onChange={handleInputChange}
                        className="w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500 mr-3"
                      />
                      <span className="text-sm font-medium text-gray-900">Mobility Aid</span>
                    </label>

                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        name="assistanceRequired"
                        checked={formData.assistanceRequired}
                        onChange={handleInputChange}
                        className="w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500 mr-3"
                      />
                      <span className="text-sm font-medium text-gray-900">Need Assistance</span>
                    </label>
                  </div>

                  <div>
                    <label htmlFor="specialRequirements" className="block text-sm font-semibold text-gray-800 mb-2">
                      Additional Requirements
                    </label>
                    <textarea
                      id="specialRequirements"
                      name="specialRequirements"
                      rows={3}
                      value={formData.specialRequirements}
                      onChange={handleInputChange}
                      placeholder="Any other special requirements or information we should know..."
                      className="w-full px-3 sm:px-4 py-3 sm:py-4 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 hover:border-gray-300 resize-none text-gray-900 text-sm sm:text-base"
                    />
                  </div>
                </div>
              </div>

              {/* Price Summary */}
              <div className="bg-gradient-to-r from-purple-50 to-serve-blue-50 p-6 rounded-xl border border-purple-100">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-bold text-purple-900 mb-2">Estimated Cost</h4>
                    <p className="text-sm text-purple-700">Final price confirmed after booking</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-purple-600">£{calculatePrice()}</div>
                    <div className="text-sm text-purple-500">
                      {formData.journeyType === 'return' ? 'Return journey' : 'Single journey'}
                      {formData.wheelchairAccess && ' + wheelchair'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4 sm:pt-6">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold py-4 sm:py-5 px-6 sm:px-8 rounded-lg sm:rounded-xl transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-[1.02] text-sm sm:text-base"
                >
                  <TruckIcon className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                  <span className="hidden sm:inline">Continue to Payment</span>
                  <span className="sm:hidden">Continue</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </form>
          )}

          {step === 2 && (
            <div className="text-center space-y-6">
              <h3 className="text-xl font-bold text-gray-900">Payment Processing</h3>
              <p className="text-gray-600">Secure payment would be processed here...</p>
              <div className="bg-purple-50 p-6 rounded-xl">
                <h4 className="font-bold text-purple-900 mb-2">Booking Summary</h4>
                <div className="text-left space-y-2 text-sm text-purple-700">
                  <p><strong>Journey:</strong> {formData.pickupAddress} → {formData.destination}</p>
                  <p><strong>Date/Time:</strong> {formData.pickupDate} at {formData.pickupTime}</p>
                  <p><strong>Type:</strong> {formData.journeyType} journey</p>
                  <p><strong>Cost:</strong> £{calculatePrice()}</p>
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
                  onClick={handleSubmitPayment}
                  className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors"
                >
                  Confirm Booking
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="text-center space-y-8">
              <div className="w-24 h-24 bg-gradient-to-br from-serve-green-100 to-serve-green-200 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <CheckCircleIcon className="w-16 h-16 text-serve-green-600" />
              </div>
              
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-gray-900">Transport Booked Successfully!</h3>
                <p className="text-lg text-gray-600 max-w-lg mx-auto">
                  Your transport has been confirmed. We'll send you a confirmation email shortly.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl text-left max-w-md mx-auto">
                <h4 className="font-semibold text-gray-900 mb-4 text-center">Journey Details</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">From:</span>
                    <span className="font-medium text-gray-900">{formData.pickupAddress}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">To:</span>
                    <span className="font-medium text-gray-900">{formData.destination}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Date:</span>
                    <span className="font-medium text-gray-900">
                      {formData.pickupDate && new Date(formData.pickupDate).toLocaleDateString('en-GB', { 
                        weekday: 'long', 
                        day: 'numeric', 
                        month: 'long', 
                        year: 'numeric' 
                      })}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Time:</span>
                    <span className="font-medium text-gray-900">{formData.pickupTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Cost:</span>
                    <span className="font-medium text-gray-900">£{calculatePrice()}</span>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-xl text-left">
                <h4 className="font-semibold text-purple-900 mb-3">What happens next?</h4>
                <ul className="space-y-2 text-sm text-purple-800">
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">1</span>
                    You'll receive a confirmation email with all details
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">2</span>
                    Our driver will call you 30 minutes before pickup
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">3</span>
                    Enjoy your safe, comfortable journey
                  </li>
                </ul>
              </div>

              <button
                onClick={handleClose}
                className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
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

export function TransportBookingButton() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  const handleOpenModal = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    console.log('Opening transport booking modal...') 
    setIsBookingOpen(true)
  }

  const handleCloseModal = () => {
    console.log('Closing transport booking modal...') 
    setIsBookingOpen(false)
  }

  // Listen for custom event to open transport booking
  useEffect(() => {
    const handleOpenTransportBooking = () => {
      setIsBookingOpen(true)
    }

    window.addEventListener('openTransportBooking', handleOpenTransportBooking)
    return () => {
      window.removeEventListener('openTransportBooking', handleOpenTransportBooking)
    }
  }, [])

  return (
    <>
      <button
        type="button"
        onClick={handleOpenModal}
        className={`group bg-serve-green-600 hover:bg-serve-green-700 active:bg-serve-green-800 text-white font-bold transition-all duration-300 rounded-xl shadow-xl hover:shadow-2xl ${MOBILE_CLASSES.touchTarget} ${FOCUS_STYLES.button} transform hover:scale-105 px-10 py-5 text-lg flex items-center justify-center`}
      >
        <TruckIcon className="w-6 h-6 mr-3" />
        Book Transport Online
        <ArrowRightIcon className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
      </button>
      
      <TransportBooking 
        isOpen={isBookingOpen} 
        onClose={handleCloseModal} 
      />
    </>
  )
}