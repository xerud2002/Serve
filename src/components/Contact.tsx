'use client'

import { useState } from 'react'
import Link from 'next/link'
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
  ExclamationTriangleIcon,
  ShieldCheckIcon,
  TrophyIcon,
  UsersIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline'
import { CheckBadgeIcon } from '@heroicons/react/24/solid'
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
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "What services does SERVE provide?",
      answer: "We offer personal care, day care services, community transport, befriending, carers support, and meals on wheels across Northamptonshire."
    },
    {
      question: "How do I arrange a care assessment?",
      answer: "Call us on 01933 315555 or fill out the contact form selecting 'Care Services Information'. We'll arrange a free, no-obligation assessment at your convenience."
    },
    {
      question: "What areas do you cover?",
      answer: "We serve communities across Northamptonshire, including Rushden, Higham Ferrers, Wellingborough, Kettering, and surrounding areas."
    },
    {
      question: "Are you CQC registered?",
      answer: "Yes, SERVE is registered with the Care Quality Commission (CQC). We're proud of our 'Good' rating and commitment to high-quality care."
    },
    {
      question: "How can I volunteer with SERVE?",
      answer: "Visit our volunteer page or select 'Volunteering Opportunities' in the contact form. We'll guide you through our simple application process."
    },
    {
      question: "Do you accept donations?",
      answer: "Yes! You can donate via JustGiving through our Community Appeal or contact us about other ways to support our work."
    }
  ]

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
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      })
      
      const data = await response.json()
      
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
      <section id="contact" className="py-20 lg:py-28 bg-linear-to-br from-serve-blue-900 via-serve-blue-800 to-serve-blue-700 text-white relative overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-serve-green-500/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 -left-40 w-80 h-80 bg-serve-blue-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute -bottom-20 right-1/4 w-72 h-72 bg-emerald-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }} 
          />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 shadow-2xl">
              <div className="bg-linear-to-r from-serve-green-500 to-emerald-500 rounded-full p-5 w-24 h-24 mx-auto mb-8 shadow-lg shadow-green-500/30">
                <CheckCircleIcon className="h-14 w-14 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-linear-to-r from-white to-green-100 bg-clip-text text-transparent">Message Sent Successfully!</span>
              </h2>
              <p className="text-xl text-blue-100/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                Thank you for contacting SERVE. We&apos;ve received your message and will get back to you within 1-2 business days.
              </p>
              <div className="bg-white/10 rounded-2xl p-6 mb-10 max-w-md mx-auto">
                <p className="text-lg mb-2">For urgent matters, please call us at</p>
                <a href="tel:01933315555" className="text-2xl font-bold text-serve-green-300 hover:text-serve-green-200 transition-colors">01933 315555</a>
                <p className="text-sm opacity-75 mt-2">Office hours: Monday - Friday, 9:00 AM - 5:00 PM</p>
              </div>
              <button
                onClick={resetForm}
                className="bg-linear-to-r from-serve-green-500 to-emerald-500 hover:from-serve-green-600 hover:to-emerald-600 text-white py-4 px-10 rounded-2xl text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-xl shadow-green-500/25"
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
    <section id="contact" className="py-20 lg:py-28 bg-linear-to-br from-serve-blue-900 via-serve-blue-800 to-serve-blue-900 text-white relative overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-serve-green-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-serve-blue-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute -bottom-20 right-1/4 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-cyan-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2.5s' }} />
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} 
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold bg-linear-to-r from-serve-green-400 via-serve-green-500 to-serve-green-400 text-white shadow-lg shadow-green-500/25 mb-6">
            <ChatBubbleBottomCenterTextIcon className="w-5 h-5 mr-2" />
            Contact SERVE
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-linear-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">Get in</span>{' '}
            <span className="bg-linear-to-r from-serve-green-300 via-emerald-400 to-serve-green-300 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-blue-100/90 max-w-3xl mx-auto leading-relaxed mb-8">
            Whether you need our care services, want to volunteer, or have questions about our work, 
            we&apos;re here to help. Reach out to us today.
          </p>
          
          {/* Trust Indicator */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 text-sm">
            <CheckBadgeIcon className="w-5 h-5 text-serve-green-300 mr-2" />
            <span className="text-blue-100/90">
              <span className="font-semibold text-white">CQC Registered</span> • Charity #1043321 • Typically respond within 24 hours
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 shadow-xl">
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <div className="bg-linear-to-r from-serve-green-500 to-emerald-500 rounded-xl p-2 mr-3 shadow-lg">
                  <BuildingOffice2Icon className="w-5 h-5" />
                </div>
                Visit Us
              </h3>
              
              <div className="space-y-8">
                <div className="group">
                  <div className="flex items-start">
                    <div className="bg-linear-to-r from-serve-blue-500/30 to-cyan-500/30 rounded-xl p-3 mr-4 group-hover:from-serve-blue-500/50 group-hover:to-cyan-500/50 transition-all border border-white/10">
                      <MapPinIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-serve-green-300">Main Office</h4>
                      <p className="opacity-90 leading-relaxed">
                        8 West Street<br />
                        Rushden, Northants<br />
                        NN10 0RT
                      </p>
                      <a 
                        href="https://maps.google.com/?q=8+West+Street,+Rushden,+NN10+0RT"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-cyan-300 hover:text-white text-sm mt-2 group/link"
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
                    <div className="bg-linear-to-r from-purple-500/30 to-violet-500/30 rounded-xl p-3 mr-4 group-hover:from-purple-500/50 group-hover:to-violet-500/50 transition-all border border-white/10">
                      <BuildingOffice2Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-purple-300">The Ron Manning Day and Activity Centre</h4>
                      <p className="opacity-90 leading-relaxed">
                        76 Upper Kings Avenue<br />
                        Higham Ferrers<br />
                        Northants<br />
                        NN10 8JZ
                      </p>
                      <a 
                        href="https://maps.google.com/?q=76+Upper+Kings+Avenue,+Higham+Ferrers,+NN10+8JZ"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-purple-300 hover:text-white text-sm mt-2 group/link"
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
                    <div className="bg-linear-to-r from-serve-green-500/30 to-emerald-500/30 rounded-xl p-3 mr-4 group-hover:from-serve-green-500/50 group-hover:to-emerald-500/50 transition-all border border-white/10">
                      <PhoneIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-serve-green-300">Phone</h4>
                      <p>
                        <a href="tel:01933315555" className="text-xl font-bold hover:text-serve-green-300 transition-colors">
                          01933 315555
                        </a>
                      </p>
                      <p className="text-sm opacity-75 mt-1">Mon-Fri, 9am-5pm</p>
                    </div>
                  </div>
                </div>
                
                <div className="group">
                  <div className="flex items-start">
                    <div className="bg-linear-to-r from-amber-500/30 to-orange-500/30 rounded-xl p-3 mr-4 group-hover:from-amber-500/50 group-hover:to-orange-500/50 transition-all border border-white/10">
                      <EnvelopeIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-amber-300">Email</h4>
                      <p>
                        <a href="mailto:info@serve.org.uk" className="hover:text-amber-300 transition-colors font-medium">
                          info@serve.org.uk
                        </a>
                      </p>
                      <p className="text-sm opacity-75 mt-1">We aim to respond within 24 hours</p>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-start">
                    <div className="bg-linear-to-r from-rose-500/30 to-pink-500/30 rounded-xl p-3 mr-4 group-hover:from-rose-500/50 group-hover:to-pink-500/50 transition-all border border-white/10">
                      <ClockIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-rose-300">Office Hours</h4>
                      <div className="opacity-90 text-sm space-y-1">
                        <p className="flex justify-between"><span>Mon - Fri:</span> <span className="font-medium">9:00 AM - 5:00 PM</span></p>
                        <p className="flex justify-between"><span>Saturday:</span> <span className="opacity-75">Closed</span></p>
                        <p className="flex justify-between"><span>Sunday:</span> <span className="opacity-75">Closed</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-10 pt-8 border-t border-white/20">
                <h4 className="text-lg font-semibold mb-4 flex items-center">
                  <span className="bg-linear-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Quick Actions</span>
                </h4>
                <div className="grid grid-cols-1 gap-4">
                  <a
                    href="https://www.justgiving.com/campaign/serve-community-appeal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-linear-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-6 py-4 rounded-2xl font-bold text-center transition-all duration-300 hover:scale-105 flex items-center justify-center shadow-lg shadow-rose-500/20"
                    aria-label="Donate to SERVE via JustGiving (opens in new tab)"
                  >
                    <HeartIcon className="w-5 h-5 mr-2" />
                    Donate via JustGiving
                  </a>
                  <Link
                    href="/volunteer"
                    className="group bg-linear-to-r from-serve-green-500 to-emerald-500 hover:from-serve-green-600 hover:to-emerald-600 text-white px-6 py-4 rounded-2xl font-bold text-center transition-all duration-300 hover:scale-105 flex items-center justify-center shadow-lg shadow-green-500/20"
                  >
                    <UserPlusIcon className="w-5 h-5 mr-2" />
                    Volunteer With Us
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white text-gray-900 rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-100">
              <div className="text-center mb-10">
                <div className="inline-flex items-center bg-linear-to-r from-serve-blue-100 to-cyan-50 text-serve-blue-700 px-5 py-2.5 rounded-full text-sm font-semibold mb-6 shadow-sm">
                  <EnvelopeIcon className="w-4 h-4 mr-2" />
                  Send a Message
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="bg-linear-to-r from-serve-blue-600 to-cyan-500 bg-clip-text text-transparent">We&apos;d Love to Hear From You</span>
                </h3>
                <p className="text-gray-600 max-w-lg mx-auto">
                  Have questions about our services or want to get involved? Fill out the form below and we&apos;ll get back to you soon.
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
                      className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-serve-blue-500 focus:border-serve-blue-500 transition-all duration-300 bg-gray-50 hover:bg-white text-gray-900 placeholder-gray-400 ${
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
                      className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-serve-blue-500 focus:border-serve-blue-500 transition-all duration-300 bg-gray-50 hover:bg-white text-gray-900 placeholder-gray-400 ${
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
                      className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-serve-blue-500 focus:border-serve-blue-500 transition-all duration-300 bg-gray-50 hover:bg-white text-gray-900 placeholder-gray-400 ${
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
                      className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-serve-blue-500 focus:border-serve-blue-500 transition-all duration-300 bg-gray-50 hover:bg-white text-gray-900 placeholder-gray-400 ${
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
                    className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-serve-blue-500 focus:border-serve-blue-500 transition-all duration-300 bg-gray-50 hover:bg-white text-gray-900 ${
                      getFieldError('subject') ? 'border-red-500' : 'border-gray-200'
                    }`}
                    required
                  >
                    <option value="">Please select a topic</option>
                    <option value="Care Services Information">Care Services Information</option>
                    <option value="Family Carer Support">Family Carer Support</option>
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
                    className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-serve-blue-500 focus:border-serve-blue-500 transition-all duration-300 bg-gray-50 hover:bg-white text-gray-900 placeholder-gray-400 resize-none ${
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
                <div className="bg-linear-to-br from-gray-50 to-slate-50 p-5 rounded-2xl border border-gray-100">
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="privacy"
                      name="privacy"
                      checked={formData.privacy}
                      onChange={handleInputChange}
                      className={`mt-1 h-5 w-5 text-serve-blue-600 border-gray-300 rounded focus:ring-serve-blue-500 ${
                        getFieldError('privacy') ? 'border-red-500' : ''
                      }`}
                      required
                    />
                    <label htmlFor="privacy" className="ml-3 text-sm text-gray-600 leading-relaxed">
                      I agree to SERVE&apos;s <Link href="/privacy" className="text-serve-blue-600 hover:underline font-medium">privacy policy</Link> and consent to my personal data being processed 
                      to respond to my inquiry. *
                    </label>
                  </div>
                  {getFieldError('privacy') && (
                    <p className="mt-1 text-sm text-red-600 ml-8">{getFieldError('privacy')}</p>
                  )}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-linear-to-r from-serve-blue-600 via-serve-blue-700 to-cyan-600 hover:from-serve-blue-700 hover:via-serve-blue-800 hover:to-cyan-700 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed text-white px-8 py-5 rounded-2xl text-lg font-bold transition-all duration-300 transform hover:scale-105 focus:ring-4 focus:ring-serve-blue-300 focus:ring-offset-2 shadow-xl hover:shadow-2xl"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending Message...
                    </span>
                  ) : 'Send Message'}
                </button>

                <p className="text-center text-sm text-gray-500 mt-4">
                  We typically respond to all inquiries within <span className="font-semibold text-serve-blue-600">24 hours</span> during business days.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center hover:bg-white/15 transition-all duration-300">
            <div className="bg-linear-to-br from-serve-blue-500 to-cyan-500 rounded-full p-4 w-20 h-20 mx-auto mb-4 shadow-lg">
              <ShieldCheckIcon className="w-12 h-12 text-white" />
            </div>
            <h4 className="text-xl font-bold mb-2">CQC Registered</h4>
            <p className="text-blue-100/80 text-sm leading-relaxed">
              Regulated by the Care Quality Commission with a 'Good' rating
            </p>
            <a 
              href="https://www.cqc.org.uk/location/1-2165219210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-cyan-300 hover:text-white text-sm mt-3 group/link font-medium"
            >
              View Our CQC Report
              <svg className="ml-1 w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center hover:bg-white/15 transition-all duration-300">
            <div className="bg-linear-to-br from-amber-500 to-orange-500 rounded-full p-4 w-20 h-20 mx-auto mb-4 shadow-lg">
              <TrophyIcon className="w-12 h-12 text-white" />
            </div>
            <h4 className="text-xl font-bold mb-2">Award-Winning Care</h4>
            <p className="text-blue-100/80 text-sm leading-relaxed">
              Regional finalists for care excellence and community impact
            </p>
            <Link 
              href="/news/great-british-care-awards"
              className="inline-flex items-center text-amber-300 hover:text-white text-sm mt-3 group/link font-medium"
            >
              See Our Awards
              <svg className="ml-1 w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center hover:bg-white/15 transition-all duration-300">
            <div className="bg-linear-to-br from-rose-500 to-pink-500 rounded-full p-4 w-20 h-20 mx-auto mb-4 shadow-lg">
              <UsersIcon className="w-12 h-12 text-white" />
            </div>
            <h4 className="text-xl font-bold mb-2">40+ Years Experience</h4>
            <p className="text-blue-100/80 text-sm leading-relaxed">
              Trusted by the community since the 1980s, registered charity 1043321
            </p>
            <Link 
              href="/about"
              className="inline-flex items-center text-rose-300 hover:text-white text-sm mt-3 group/link font-medium"
            >
              Our Story
              <svg className="ml-1 w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-amber-100/20 text-amber-200 px-5 py-2.5 rounded-full text-sm font-semibold mb-6 shadow-sm border border-amber-300/30">
              <ChatBubbleBottomCenterTextIcon className="w-4 h-4 mr-2" />
              Frequently Asked Questions
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent">Quick Answers</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-blue-100/90 max-w-3xl mx-auto">
              Find answers to common questions about SERVE's services
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:bg-white/15 transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-serve-green-400 focus:ring-inset"
                  aria-expanded={openFaqIndex === index}
                >
                  <span className="text-lg font-bold pr-8">{faq.question}</span>
                  <ChevronDownIcon 
                    className={`w-6 h-6 shrink-0 transition-transform duration-300 ${
                      openFaqIndex === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaqIndex === index && (
                  <div className="px-8 pb-6 pt-2">
                    <p className="text-blue-100/90 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-blue-100/80 mb-4">Still have questions?</p>
            <a
              href="#contact"
              className="inline-flex items-center text-serve-green-300 hover:text-white font-semibold group/link"
            >
              Use the contact form above
              <svg className="ml-2 w-5 h-5 group-hover/link:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </a>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-16 text-center bg-linear-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-10 border border-white/20 shadow-xl">
          <div className="inline-flex items-center bg-linear-to-r from-rose-500 to-pink-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold mb-6 shadow-lg">
            <PhoneIcon className="w-4 h-4 mr-2" />
            Urgent Assistance
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent">Need Immediate Help?</span>
          </h3>
          <p className="text-base md:text-lg lg:text-xl text-blue-100/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            If you require urgent care services or have an emergency, please call us directly.
          </p>
          <a
            href="tel:01933315555"
            className="inline-flex items-center bg-linear-to-r from-serve-green-500 to-emerald-500 hover:from-serve-green-600 hover:to-emerald-600 text-white px-10 py-5 rounded-2xl text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-xl shadow-green-500/25"
          >
            <PhoneIcon className="w-7 h-7 mr-3" />
            Call Now: 01933 315555
          </a>
        </div>

        {/* Map Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-purple-100/20 text-purple-200 px-5 py-2.5 rounded-full text-sm font-semibold mb-6 shadow-sm border border-purple-300/30">
              <MapPinIcon className="w-4 h-4 mr-2" />
              Find Our Locations
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent">Visit Us</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-blue-100/90 max-w-3xl mx-auto">
              We have two locations across Northamptonshire to serve you better
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Main Office Map */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/10 overflow-hidden hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-linear-to-br from-serve-blue-500 to-cyan-500 rounded-xl p-3 mr-4 shadow-lg">
                  <BuildingOffice2Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Main Office</h3>
                  <p className="text-sm text-blue-100/70">Administrative & Care Coordination</p>
                </div>
              </div>
              <div className="bg-white rounded-2xl overflow-hidden aspect-4/3 mb-4 shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2432.5!2d-0.5994!3d52.2894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48770e5f5f5f5f5f%3A0x5f5f5f5f5f5f5f5f!2s8%20West%20St%2C%20Rushden%20NN10%200RT!5e0!3m2!1sen!2suk!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SERVE Main Office Location"
                />
              </div>
              <p className="text-sm text-blue-100/90 leading-relaxed mb-2">
                8 West Street, Rushden, Northants NN10 0RT
              </p>
              <a 
                href="https://maps.google.com/?q=8+West+Street,+Rushden,+NN10+0RT"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-cyan-300 hover:text-white text-sm font-medium group/link"
              >
                Get Directions
                <svg className="ml-1 w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* Day Centre Map */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/10 overflow-hidden hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-linear-to-br from-purple-500 to-violet-500 rounded-xl p-3 mr-4 shadow-lg">
                  <BuildingOffice2Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Ron Manning Day Centre</h3>
                  <p className="text-sm text-blue-100/70">Day Care & Community Activities</p>
                </div>
              </div>
              <div className="bg-white rounded-2xl overflow-hidden aspect-4/3 mb-4 shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2432.5!2d-0.5880!3d52.3058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48770e5f5f5f5f5f%3A0x5f5f5f5f5f5f5f5f!2s76%20Upper%20Kings%20Ave%2C%20Higham%20Ferrers%20NN10%208JZ!5e0!3m2!1sen!2suk!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ron Manning Day and Activity Centre Location"
                />
              </div>
              <p className="text-sm text-blue-100/90 leading-relaxed mb-2">
                76 Upper Kings Avenue, Higham Ferrers, Northants NN10 8JZ
              </p>
              <a 
                href="https://maps.google.com/?q=76+Upper+Kings+Avenue,+Higham+Ferrers,+NN10+8JZ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-purple-300 hover:text-white text-sm font-medium group/link"
              >
                Get Directions
                <svg className="ml-1 w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}