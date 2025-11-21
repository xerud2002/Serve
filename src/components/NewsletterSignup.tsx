'use client'

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
  } = useNewsletterSignup('/api/contact')

  if (isSubmitted) {
    return (
      <div className={`${variant === 'footer' ? 'text-white' : 'text-gray-900'}`}>
        <div className="flex items-center justify-center mb-4">
          <CheckCircleIcon className="h-12 w-12 text-green-500 mr-3" />
          <div>
            <h3 className="text-lg font-semibold">Thank you for subscribing!</h3>
            <p className={`text-sm ${variant === 'footer' ? 'text-gray-300' : 'text-gray-600'}`}>
              You&apos;ll receive our newsletter updates soon.
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
      <div className="mb-6">
        <h3 className={`text-xl md:text-2xl font-bold mb-2 ${variant === 'footer' ? 'text-white' : 'text-gray-900'}`}>
          {title}
        </h3>
        <p className={`text-sm md:text-base ${variant === 'footer' ? 'text-gray-300' : 'text-gray-600'}`}>
          {description}
        </p>
      </div>

      {error && (
        <div className="mb-4 bg-red-50 border border-red-200 rounded-lg p-3 flex items-start">
          <ExclamationTriangleIcon className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
          <p className="text-red-700 text-sm">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-3">
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
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              What would you like to hear about? (optional)
            </label>
            <div className="grid grid-cols-2 gap-3">
              {[
                'Care Services',
                'Volunteering',
                'Events',
                'Community News',
                'Fundraising',
                'Awards & Recognition'
              ].map((interest) => (
                <label key={interest} className="flex items-center text-sm cursor-pointer group">
                  <input
                    type="checkbox"
                    name="interests"
                    value={interest}
                    checked={formData.interests.includes(interest)}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-serve-blue-600 border-gray-300 rounded focus:ring-serve-blue-500 mr-2 cursor-pointer"
                  />
                  <span className="text-gray-700 group-hover:text-serve-blue-700 transition-colors">{interest}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-4 px-6 rounded-xl font-bold text-base md:text-lg transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 ${
            variant === 'footer'
              ? 'bg-serve-blue-600 hover:bg-serve-blue-700 text-white'
              : 'bg-serve-blue-600 hover:bg-serve-blue-700 text-white'
          }`}
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Subscribing...
            </>
          ) : (
            <>
              <EnvelopeIcon className="w-5 h-5" />
              Subscribe to Newsletter
            </>
          )}
        </button>

        <p className={`text-xs text-center ${variant === 'footer' ? 'text-gray-400' : 'text-gray-500'}`}>
          We respect your privacy. Unsubscribe at any time.
        </p>
      </form>
    </div>
  )
}