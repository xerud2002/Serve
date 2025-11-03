'use client'

import { useState } from 'react'
import { EnvelopeIcon, CheckCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { useNewsletterSignup } from '@/hooks/useNewsletterSignup'

interface NewsletterSignupProps {
  variant?: 'footer' | 'inline' | 'modal'
  title?: string
  description?: string
}

export default function NewsletterSignup({ 
  variant = 'footer',
  title = "Stay Connected",
  description = "Get updates about our services, events, and community news"
}: NewsletterSignupProps) {
  const {
    formData,
    emailError,
    isSubmitting,
    isSubmitted,
    error,
    handleInputChange,
    handleSubmit,
    clearForm
  } = useNewsletterSignup('https://formspree.io/f/YOUR_NEWSLETTER_FORM_ID')

  if (isSubmitted) {
    return (
      <div className={`${variant === 'footer' ? 'text-white' : 'text-gray-900'}`}>
        <div className="flex items-center justify-center mb-4">
          <CheckCircleIcon className="h-12 w-12 text-green-500 mr-3" />
          <div>
            <h3 className="text-lg font-semibold">Thank you for subscribing!</h3>
            <p className={`text-sm ${variant === 'footer' ? 'text-gray-300' : 'text-gray-600'}`}>
              You'll receive our newsletter updates soon.
            </p>
          </div>
        </div>
        <button
          onClick={clearForm}
          className={`text-sm underline hover:no-underline transition-all ${
            variant === 'footer' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Subscribe another email
        </button>
      </div>
    )
  }

  const getContainerClass = () => {
    switch (variant) {
      case 'footer':
        return 'text-white'
      case 'inline':
        return 'bg-serve-blue-50 rounded-xl p-6'
      case 'modal':
        return 'bg-white border border-gray-200 rounded-xl p-6 shadow-lg'
      default:
        return 'text-white'
    }
  }

  const getInputClass = () => {
    const baseClass = "w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-serve-blue-500 transition-all"
    const variantClass = variant === 'footer' 
      ? 'bg-white/10 border-white/20 text-white placeholder-gray-300 focus:bg-white/20' 
      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
    const errorClass = emailError ? 'border-red-500 focus:ring-red-500' : ''
    return `${baseClass} ${variantClass} ${errorClass}`
  }

  return (
    <div className={getContainerClass()}>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2 flex items-center">
          <EnvelopeIcon className="h-5 w-5 mr-2" />
          {title}
        </h3>
        <p className={`text-sm ${variant === 'footer' ? 'text-gray-300' : 'text-gray-600'}`}>
          {description}
        </p>
      </div>

      {error && (
        <div className="mb-4 bg-red-50 border border-red-200 rounded-lg p-3 flex items-start">
          <ExclamationTriangleIcon className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
          <p className="text-red-700 text-sm">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email address"
            className={getInputClass()}
            required
          />
          {emailError && (
            <p className="mt-1 text-sm text-red-500">{emailError}</p>
          )}
        </div>

        {variant !== 'footer' && (
          <div>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="First name (optional)"
              className={getInputClass().replace(emailError ? 'border-red-500 focus:ring-red-500' : '', '')}
            />
          </div>
        )}

        {variant === 'inline' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              What would you like to hear about? (optional)
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[
                'Care Services',
                'Volunteering',
                'Events',
                'Community News',
                'Fundraising',
                'Awards & Recognition'
              ].map((interest) => (
                <label key={interest} className="flex items-center text-sm">
                  <input
                    type="checkbox"
                    name="interests"
                    value={interest}
                    checked={formData.interests.includes(interest)}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-serve-blue-600 border-gray-300 rounded focus:ring-serve-blue-500 mr-2"
                  />
                  <span className="text-gray-700">{interest}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:transform-none disabled:opacity-50 disabled:cursor-not-allowed ${
            variant === 'footer'
              ? 'bg-serve-green-600 hover:bg-serve-green-700 text-white'
              : 'bg-serve-blue-600 hover:bg-serve-blue-700 text-white'
          }`}
        >
          {isSubmitting ? 'Subscribing...' : 'Subscribe to Newsletter'}
        </button>

        <p className={`text-xs ${variant === 'footer' ? 'text-gray-400' : 'text-gray-500'}`}>
          We respect your privacy. Unsubscribe at any time.
        </p>
      </form>
    </div>
  )
}