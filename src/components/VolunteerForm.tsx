'use client'

import { CheckCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { useVolunteerForm } from '@/hooks/useVolunteerForm'

export default function VolunteerForm() {
  const {
    formData,
    validationErrors,
    isSubmitting,
    isSubmitted,
    error,
    handleInputChange,
    handleSubmit,
    getFieldError,
    clearForm
  } = useVolunteerForm('https://formspree.io/f/YOUR_VOLUNTEER_FORM_ID')

  if (isSubmitted) {
    return (
      <section id="volunteer-form" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-green-50 border border-green-200 rounded-3xl p-12">
              <CheckCircleIcon className="h-20 w-20 text-green-600 mx-auto mb-8" />
              <h2 className="text-4xl font-bold text-green-900 mb-6">Application Submitted Successfully!</h2>
              <p className="text-xl text-green-700 mb-8 max-w-2xl mx-auto">
                Thank you for your interest in volunteering with SERVE. We&apos;ve received your application 
                and will review it carefully.
              </p>
              <div className="space-y-3 text-lg text-green-600 mb-10">
                <p><strong>What happens next?</strong></p>
                <p>• We&apos;ll review your application within 5-7 working days</p>
                <p>• Our volunteer coordinator will contact you to arrange a chat</p>
                <p>• We&apos;ll discuss suitable opportunities and next steps</p>
                <p>• DBS check and training will be arranged if you proceed</p>
              </div>
              <div className="bg-green-100 p-6 rounded-xl mb-8">
                <p className="text-green-800 text-lg">
                  <strong>Questions?</strong> Call us at <strong>01933 315555</strong>
                </p>
                <p className="text-green-700 mt-2">
                  Office hours: Monday - Friday, 9:00 AM - 5:00 PM
                </p>
              </div>
              <button
                onClick={clearForm}
                className="bg-serve-green-600 hover:bg-serve-green-700 text-white py-4 px-8 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Submit Another Application
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="volunteer-form" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Apply to Volunteer
          </h2>
          <p className="text-xl text-gray-600">
            Ready to make a difference? Complete this form to start your volunteer journey with SERVE.
          </p>
        </div>

        <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
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
                  className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-serve-green-500 focus:border-serve-green-500 transition-all duration-300 bg-white text-gray-900 placeholder-gray-400 ${
                    getFieldError('firstName') ? 'border-red-500' : 'border-gray-200'
                  }`}
                  placeholder="Your first name"
                  required
                />
                {getFieldError('firstName') && (
                  <p className="mt-1 text-sm text-red-600">{getFieldError('firstName')}</p>
                )}
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
                  className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-serve-green-500 focus:border-serve-green-500 transition-all duration-300 bg-white text-gray-900 placeholder-gray-400 ${
                    getFieldError('lastName') ? 'border-red-500' : 'border-gray-200'
                  }`}
                  placeholder="Your last name"
                  required
                />
                {getFieldError('lastName') && (
                  <p className="mt-1 text-sm text-red-600">{getFieldError('lastName')}</p>
                )}
              </div>
            </div>

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
                  className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-serve-green-500 focus:border-serve-green-500 transition-all duration-300 bg-white text-gray-900 placeholder-gray-400 ${
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
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-serve-green-500 focus:border-serve-green-500 transition-all duration-300 bg-white text-gray-900 placeholder-gray-400 ${
                    getFieldError('phone') ? 'border-red-500' : 'border-gray-200'
                  }`}
                  placeholder="01933 315555"
                  required
                />
                {getFieldError('phone') && (
                  <p className="mt-1 text-sm text-red-600">{getFieldError('phone')}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-3">
                  Address *
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-serve-green-500 focus:border-serve-green-500 transition-all duration-300 bg-white text-gray-900 placeholder-gray-400 ${
                    getFieldError('address') ? 'border-red-500' : 'border-gray-200'
                  }`}
                  placeholder="Your full address"
                  required
                />
                {getFieldError('address') && (
                  <p className="mt-1 text-sm text-red-600">{getFieldError('address')}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="postcode" className="block text-sm font-semibold text-gray-700 mb-3">
                  Postcode *
                </label>
                <input
                  type="text"
                  id="postcode"
                  name="postcode"
                  value={formData.postcode}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-serve-green-500 focus:border-serve-green-500 transition-all duration-300 bg-white text-gray-900 placeholder-gray-400 ${
                    getFieldError('postcode') ? 'border-red-500' : 'border-gray-200'
                  }`}
                  placeholder="NN10 0RT"
                  required
                />
                {getFieldError('postcode') && (
                  <p className="mt-1 text-sm text-red-600">{getFieldError('postcode')}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="volunteering" className="block text-sm font-semibold text-gray-700 mb-3">
                Which volunteer role interests you most? *
              </label>
              <select
                id="volunteering"
                name="volunteering"
                value={formData.volunteering}
                onChange={handleInputChange}
                className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-serve-green-500 focus:border-serve-green-500 transition-all duration-300 bg-white text-gray-900 ${
                  getFieldError('volunteering') ? 'border-red-500' : 'border-gray-200'
                }`}
                required
              >
                <option value="">Please select a volunteer role</option>
                <option value="Befriending Volunteer">Befriending Volunteer</option>
                <option value="Community Transport Assistant">Community Transport Assistant</option>
                <option value="Events & Activities Volunteer">Events & Activities Volunteer</option>
                <option value="Administrative Support">Administrative Support</option>
                <option value="Multiple roles interest me">Multiple roles interest me</option>
                <option value="Other">Other (please specify in motivation)</option>
              </select>
              {getFieldError('volunteering') && (
                <p className="mt-1 text-sm text-red-600">{getFieldError('volunteering')}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                When are you available to volunteer?
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Flexible'].map((day) => (
                  <label key={day} className="flex items-center">
                    <input
                      type="checkbox"
                      name="availability"
                      value={day}
                      checked={formData.availability.includes(day)}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-serve-green-600 border-gray-300 rounded focus:ring-serve-green-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">{day}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="experience" className="block text-sm font-semibold text-gray-700 mb-3">
                Previous volunteer experience (optional)
              </label>
              <textarea
                id="experience"
                name="experience"
                rows={3}
                value={formData.experience}
                onChange={handleInputChange}
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-serve-green-500 focus:border-serve-green-500 transition-all duration-300 bg-white text-gray-900 placeholder-gray-400 resize-none"
                placeholder="Tell us about any previous volunteer work..."
              />
            </div>

            <div>
              <label htmlFor="motivation" className="block text-sm font-semibold text-gray-700 mb-3">
                Why do you want to volunteer with SERVE? *
              </label>
              <textarea
                id="motivation"
                name="motivation"
                rows={4}
                value={formData.motivation}
                onChange={handleInputChange}
                className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-serve-green-500 focus:border-serve-green-500 transition-all duration-300 bg-white text-gray-900 placeholder-gray-400 resize-none ${
                  getFieldError('motivation') ? 'border-red-500' : 'border-gray-200'
                }`}
                placeholder="Tell us what motivates you to volunteer..."
                required
              />
              {getFieldError('motivation') && (
                <p className="mt-1 text-sm text-red-600">{getFieldError('motivation')}</p>
              )}
            </div>

            <div className="bg-serve-green-50 p-6 rounded-xl">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleInputChange}
                  className={`mt-1 h-4 w-4 text-serve-green-600 border-gray-300 rounded focus:ring-serve-green-500 ${
                    getFieldError('consent') ? 'border-red-500' : ''
                  }`}
                  required
                />
                <label htmlFor="consent" className="ml-3 text-sm text-gray-700">
                  I consent to SERVE processing my personal data for volunteer recruitment purposes 
                  and understand that a DBS check will be required for this role. I confirm the 
                  information provided is accurate. *
                </label>
              </div>
              {getFieldError('consent') && (
                <p className="mt-1 text-sm text-red-600 ml-7">{getFieldError('consent')}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-serve-green-600 to-serve-green-700 hover:from-serve-green-700 hover:to-serve-green-800 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {isSubmitting ? 'Submitting Application...' : 'Submit Volunteer Application'}
            </button>

            <p className="text-center text-sm text-gray-500">
              We&apos;ll review your application and contact you within 5-7 working days.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}