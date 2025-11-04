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
  CalendarIcon
} from '@heroicons/react/24/outline'

interface AssessmentBookingProps {
  isOpen: boolean
  onClose: () => void
}

export default function AssessmentBooking({ isOpen, onClose }: AssessmentBookingProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
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
    setContactForm({
      name: '',
      phone: '',
      email: '',
      message: ''
    })
    onClose()
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setContactForm(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      alert('Thank you! We will contact you within 24 hours to schedule your free assessment.')
      handleClose()
    }, 2000)
  }

  if (!isOpen) {
    return null
  }

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center p-4 z-[9999] animate-fadeIn bg-black bg-opacity-75"
      style={{ 
        backdropFilter: 'blur(8px)'
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          handleClose()
        }
      }}
    >
      <div 
        className="bg-white rounded-3xl shadow-2xl w-full max-w-[90vw] max-h-[98vh] overflow-hidden relative animate-slideUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative bg-gradient-to-br from-serve-blue-600 via-serve-blue-700 to-serve-blue-800 text-white p-6">
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Close"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
          
          <div className="max-w-3xl">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mr-4">
                <ShieldCheckIcon className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-1">Free Care Assessment</h2>
                <p className="text-blue-100 text-lg">Professional evaluation at your home</p>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <div className="flex items-center text-yellow-200 mb-2">
                <CurrencyPoundIcon className="w-5 h-5 mr-2" />
                <span className="font-semibold">100% FREE Assessment</span>
              </div>
              <p className="text-blue-50 text-sm leading-relaxed">
                No hidden costs • No obligations • Professional CQC-rated team • Award-winning care services
              </p>
            </div>
          </div>
        </div>

        <div className="overflow-y-auto max-h-[calc(98vh-180px)] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[700px]">
            {/* Left Side - Information */}
            <div className="p-10 bg-gray-50 border-r border-gray-100">
              <div className="space-y-12">
                {/* What's Included */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <CheckCircleIcon className="w-7 h-7 text-serve-green-600 mr-3" />
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
                      <div key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-serve-green-500 rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Why Choose SERVE */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <StarIcon className="w-7 h-7 text-yellow-500 mr-3" />
                    Why Choose SERVE
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-serve-blue-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-serve-blue-700 font-bold text-lg">40+</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Years of Experience</div>
                        <div className="text-gray-600 text-sm">Trusted care provider since 1980s</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-yellow-700 font-bold text-sm">CQC</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">CQC Regulated</div>
                        <div className="text-gray-600 text-sm">Officially registered and inspected</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-serve-green-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-serve-green-700 font-bold text-sm">★</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Award Winning</div>
                        <div className="text-gray-600 text-sm">Best Homecare Team 2024</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-4">Quick Contact</h4>
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-600">
                      <PhoneIcon className="w-5 h-5 mr-3 text-serve-blue-600" />
                      <span>01933 315555</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <EnvelopeIcon className="w-5 h-5 mr-3 text-serve-blue-600" />
                      <span>info@serve.org.uk</span>
                    </div>
                    <div className="flex items-start text-gray-600">
                      <MapPinIcon className="w-5 h-5 mr-3 mt-0.5 text-serve-blue-600 flex-shrink-0" />
                      <span>8 West Street, Rushden, Northants NN10 0RT</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="p-10">
              <div className="max-w-lg mx-auto">
                <div className="text-center mb-10">
                  <div className="w-20 h-20 bg-serve-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <CalendarIcon className="w-10 h-10 text-serve-blue-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">Book Your Free Assessment</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">We&apos;ll contact you within 24 hours to arrange a convenient time for your home visit</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={contactForm.name}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-serve-blue-500 focus:border-serve-blue-500 transition-all duration-200 text-gray-900 text-lg"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <PhoneIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={contactForm.phone}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-serve-blue-500 focus:border-serve-blue-500 transition-all duration-200 text-gray-900 text-lg"
                        placeholder="01933 315555"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={contactForm.email}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-serve-blue-500 focus:border-serve-blue-500 transition-all duration-200 text-gray-900 text-lg"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Tell us about your care needs (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={contactForm.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-serve-blue-500 focus:border-serve-blue-500 transition-all duration-200 text-gray-900 resize-none text-lg"
                      placeholder="Briefly describe the type of care support you're looking for..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-serve-blue-600 to-serve-blue-700 hover:from-serve-blue-700 hover:to-serve-blue-800 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed text-white py-5 px-8 rounded-xl font-semibold text-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                        Submitting...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <CalendarIcon className="w-5 h-5 mr-2" />
                        Request Free Assessment
                      </div>
                    )}
                  </button>

                  <p className="text-center text-sm text-gray-500 leading-relaxed">
                    By submitting this form, you consent to be contacted by SERVE regarding your care assessment. 
                    We respect your privacy and will never share your details.
                  </p>
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