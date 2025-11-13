'use client'

import { useState } from 'react'
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon, 
  ClockIcon,
  HeartIcon,
  UserPlusIcon,
  ChatBubbleBottomCenterTextIcon,
  BuildingOffice2Icon,
  CheckCircleIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline'
import { validateForm, contactFormRules, type ValidationError } from '@/utils/validation'

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    privacy: false
  })
  const [validationErrors, setValidationErrors] = useState<ValidationError[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
    
    // Clear validation errors for this field
    setValidationErrors(prev => prev.filter(error => error.field !== name))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    
    // Custom validation for this form
    const errors: ValidationError[] = []
    
    // Combine first and last name for validation
    const combinedName = `${formData.firstName} ${formData.lastName}`.trim()
    const validationData = {
      name: combinedName,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message
    }
    
    const validationResult = validateForm(validationData, contactFormRules)
    errors.push(...validationResult)
    
    // Check privacy consent
    if (!formData.privacy) {
      errors.push({
        field: 'privacy',
        message: 'You must agree to the privacy policy'
      })
    }
    
    if (errors.length > 0) {
      setValidationErrors(errors)
      return
    }

    // Submit form with full name
    const submissionData = {
      name: combinedName,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
      privacy: formData.privacy
    }
    
    try {
      setIsSubmitting(true)
      
      console.log('Submitting form to /api/contact with data:', submissionData)
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      })
      
      console.log('Response status:', response.status)
      
      const data = await response.json()
      
      console.log('Response data:', data)
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }
      
      // Success - clear form and show success message
      setIsSubmitted(true)
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        privacy: false
      })
      setValidationErrors([])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred')
    } finally {
      setIsSubmitting(false)
    }
  }
  
  const resetForm = () => {
    setIsSubmitted(false)
    setError(null)
    setValidationErrors([])
  }

  const getFieldError = (fieldName: string) => {
    return validationErrors.find(error => error.field === fieldName)?.message
  }

  if (isSubmitted) {
    return (
      <section id="contact" className="py-24 bg-gradient-to-br from-serve-blue-900 via-serve-blue-800 to-serve-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
              <CheckCircleIcon className="h-20 w-20 text-green-400 mx-auto mb-8" />
              <h2 className="text-4xl font-bold mb-6">Message Sent Successfully!</h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Thank you for contacting SERVE. We&apos;ve received your message and will get back to you within 1-2 business days.
              </p>
              <div className="space-y-3 text-lg opacity-80 mb-10">
                <p>For urgent matters, please call us at <strong className="text-green-400">01933 315555</strong></p>
                <p>Office hours: Monday - Friday, 9:00 AM - 5:00 PM</p>
              </div>
              <button
                onClick={resetForm}
                className="bg-serve-blue-600 hover:bg-serve-blue-700 text-white py-4 px-8 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Send Another Message
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-serve-blue-900 via-serve-blue-800 to-serve-blue-700 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <ChatBubbleBottomCenterTextIcon className="w-4 h-4 mr-2" />
            Contact SERVE
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Get in</span>{' '}
            <span className="text-serve-green-300">Touch</span>
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Whether you need our care services, want to volunteer, or have questions about our work, 
            we&apos;re here to help. Reach out to us today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <BuildingOffice2Icon className="w-6 h-6 mr-3" />
                Visit Us
              </h3>
              
              <div className="space-y-8">
                <div className="group">
                  <div className="flex items-start">
                    <div className="bg-white/10 rounded-xl p-3 mr-4 group-hover:bg-white/20 transition-colors">
                      <MapPinIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Our Address</h4>
                      <p className="opacity-90 leading-relaxed">
                        8 West Street<br />
                        Rushden, Northants<br />
                        NN10 0RT
                      </p>
                      <a 
                        href="https://maps.google.com/?q=8+West+Street,+Rushden,+NN10+0RT"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-serve-blue-200 hover:text-white text-sm mt-2 group/link"
                      >
                        View on Map
                        <svg className="ml-1 w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="group">
                  <div className="flex items-start">
                    <div className="bg-white/10 rounded-xl p-3 mr-4 group-hover:bg-white/20 transition-colors">
                      <PhoneIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Phone</h4>
                      <p className="opacity-90">
                        <a href="tel:01933315555" className="hover:text-serve-blue-200 transition-colors text-lg">
                          01933 315555
                        </a>
                      </p>
                      <p className="text-sm opacity-75 mt-1">Mon-Fri, 9am-5pm</p>
                    </div>
                  </div>
                </div>
                
                <div className="group">
                  <div className="flex items-start">
                    <div className="bg-white/10 rounded-xl p-3 mr-4 group-hover:bg-white/20 transition-colors">
                      <EnvelopeIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Email</h4>
                      <p className="opacity-90">
                        <a href="mailto:info@serve.org.uk" className="hover:text-serve-blue-200 transition-colors">
                          info@serve.org.uk
                        </a>
                      </p>
                      <p className="text-sm opacity-75 mt-1">We aim to respond within 24 hours</p>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-start">
                    <div className="bg-white/10 rounded-xl p-3 mr-4 group-hover:bg-white/20 transition-colors">
                      <ClockIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Office Hours</h4>
                      <div className="opacity-90 text-sm space-y-1">
                        <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                        <p>Saturday: Closed</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-10 pt-8 border-t border-white/20">
                <h4 className="text-lg font-semibold mb-4">Quick Actions</h4>
                <div className="grid grid-cols-1 gap-3">
                  <a
                    href="https://www.justgiving.com/serve-jg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-serve-green-600 hover:bg-serve-green-700 text-white px-6 py-3 rounded-xl font-semibold text-center transition-all duration-300 hover:scale-105 flex items-center justify-center"
                  >
                    <HeartIcon className="w-5 h-5 mr-2" />
                    Help Now
                  </a>
                  <a
                    href="/volunteer"
                    className="group border-2 border-white/30 text-white hover:bg-white hover:text-serve-blue-900 px-6 py-3 rounded-xl font-semibold text-center transition-all duration-300 hover:scale-105 flex items-center justify-center"
                  >
                    <UserPlusIcon className="w-5 h-5 mr-2" />
                    Volunteer
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white text-gray-900 rounded-3xl p-8 lg:p-12 shadow-2xl">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Send us a Message</h3>
                <p className="text-gray-600">
                  Have questions about our services or want to get involved? We&apos;d love to hear from you.
                </p>
              </div>
              
              {error && (
                <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-center">
                    <ExclamationTriangleIcon className="h-5 w-5 text-red-600 mr-2" />
                    <p className="text-red-700 text-sm">{error}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-3">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-serve-blue-500 focus:border-serve-blue-500 transition-all duration-300 bg-gray-50 hover:bg-white ${
                        getFieldError('name') ? 'border-red-500' : 'border-gray-200'
                      }`}
                      placeholder="Your first name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-3">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-serve-blue-500 focus:border-serve-blue-500 transition-all duration-300 bg-gray-50 hover:bg-white ${
                        getFieldError('name') ? 'border-red-500' : 'border-gray-200'
                      }`}
                      placeholder="Your last name"
                      required
                    />
                  </div>
                </div>
                {getFieldError('name') && (
                  <p className="mt-1 text-sm text-red-600">{getFieldError('name')}</p>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-serve-blue-500 focus:border-serve-blue-500 transition-all duration-300 bg-gray-50 hover:bg-white ${
                        getFieldError('email') ? 'border-red-500' : 'border-gray-200'
                      }`}
                      placeholder="your.email@example.com"
                      required
                    />
                    {getFieldError('email') && (
                      <p className="mt-1 text-sm text-red-600">{getFieldError('email')}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-3">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-serve-blue-500 focus:border-serve-blue-500 transition-all duration-300 bg-gray-50 hover:bg-white ${
                        getFieldError('phone') ? 'border-red-500' : 'border-gray-200'
                      }`}
                      placeholder="01933 315555"
                    />
                    {getFieldError('phone') && (
                      <p className="mt-1 text-sm text-red-600">{getFieldError('phone')}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-3">
                    How can we help you? *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-serve-blue-500 focus:border-serve-blue-500 transition-all duration-300 bg-gray-50 hover:bg-white ${
                      getFieldError('subject') ? 'border-red-500' : 'border-gray-200'
                    }`}
                    required
                  >
                    <option value="">Please select a topic</option>
                    <option value="Care Services Information">Care Services Information</option>
                    <option value="Day Care & Meals on Wheels">Day Care & Meals on Wheels</option>
                    <option value="Community Transport">Community Transport</option>
                    <option value="Befriending Service">Befriending Service</option>
                    <option value="Volunteering Opportunities">Volunteering Opportunities</option>
                    <option value="Donations & Fundraising">Donations & Fundraising</option>
                    <option value="Corporate Partnership">Corporate Partnership</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Other">Other</option>
                  </select>
                  {getFieldError('subject') && (
                    <p className="mt-1 text-sm text-red-600">{getFieldError('subject')}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-serve-blue-500 focus:border-serve-blue-500 transition-all duration-300 bg-gray-50 hover:bg-white resize-none ${
                      getFieldError('message') ? 'border-red-500' : 'border-gray-200'
                    }`}
                    placeholder="Please tell us more about your inquiry..."
                    required
                  />
                  {getFieldError('message') && (
                    <p className="mt-1 text-sm text-red-600">{getFieldError('message')}</p>
                  )}
                </div>

                {/* Privacy Notice */}
                <div className="bg-gray-50 p-4 rounded-xl">
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="privacy"
                      name="privacy"
                      checked={formData.privacy}
                      onChange={handleInputChange}
                      className={`mt-1 h-4 w-4 text-serve-blue-600 border-gray-300 rounded focus:ring-serve-blue-500 ${
                        getFieldError('privacy') ? 'border-red-500' : ''
                      }`}
                      required
                    />
                    <label htmlFor="privacy" className="ml-3 text-sm text-gray-600">
                      I agree to SERVE&apos;s privacy policy and consent to my personal data being processed 
                      to respond to my inquiry. *
                    </label>
                  </div>
                  {getFieldError('privacy') && (
                    <p className="mt-1 text-sm text-red-600 ml-7">{getFieldError('privacy')}</p>
                  )}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-serve-blue-600 to-serve-blue-700 hover:from-serve-blue-700 hover:to-serve-blue-800 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 focus:ring-4 focus:ring-serve-blue-300 focus:ring-offset-2 shadow-lg hover:shadow-xl"
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </button>

                <p className="text-center text-sm text-gray-500 mt-4">
                  We typically respond to all inquiries within 24 hours during business days.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-16 text-center bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
          <h3 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            If you require urgent care services or have an emergency, please call us directly.
          </p>
          <a
            href="tel:01933315555"
            className="inline-flex items-center bg-serve-green-600 hover:bg-serve-green-700 text-white px-8 py-4 rounded-xl text-xl font-bold transition-all duration-300 transform hover:scale-105"
          >
            <PhoneIcon className="w-6 h-6 mr-3" />
            Call Now: 01933 315555
          </a>
        </div>
      </div>
    </section>
  )
}