'use client'

import { CheckCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { useVolunteerForm } from '@/hooks/useVolunteerForm'

export default function VolunteerForm() {
  const {
    formData,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    validationErrors,
    isSubmitting,
    isSubmitted,
    error,
    handleInputChange,
    handleSubmit,
    getFieldError,
    clearForm
  } = useVolunteerForm('/api/volunteer')

  if (isSubmitted) {
    return (
      <section id="volunteer-form" className="py-12 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-green-50 border border-green-200 rounded-2xl sm:rounded-3xl p-6 sm:p-12">
              <CheckCircleIcon className="h-14 w-14 sm:h-20 sm:w-20 text-green-600 mx-auto mb-4 sm:mb-8" />
              <h2 className="text-2xl sm:text-4xl font-bold text-green-900 mb-4 sm:mb-6">Application Submitted Successfully!</h2>
              <p className="text-base sm:text-xl text-green-700 mb-6 sm:mb-8 max-w-2xl mx-auto">
                Thank you for your interest in volunteering with SERVE. We&apos;ve received your application 
                and will review it carefully.
              </p>
              <div className="space-y-2 sm:space-y-3 text-sm sm:text-lg text-green-600 mb-6 sm:mb-10 text-left sm:text-center">
                <p><strong>What happens next?</strong></p>
                <p>• We&apos;ll review your application within 5-7 working days</p>
                <p>• Our volunteer coordinator will contact you to arrange a chat</p>
                <p>• We&apos;ll discuss suitable opportunities and next steps</p>
                <p>• DBS check and training will be arranged if you proceed</p>
              </div>
              <div className="bg-green-100 p-4 sm:p-6 rounded-xl mb-6 sm:mb-8">
                <p className="text-green-800 text-base sm:text-lg">
                  <strong>Questions?</strong> Call us at <strong>01933 315555</strong>
                </p>
                <p className="text-green-700 mt-2 text-sm sm:text-base">
                  Office hours: Monday - Friday, 9:00 AM - 5:00 PM
                </p>
              </div>
              <button
                onClick={clearForm}
                className="w-full sm:w-auto bg-serve-green-600 hover:bg-serve-green-700 text-white py-4 px-6 sm:px-8 min-h-[52px] rounded-xl text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105"
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
    <section id="volunteer-form" className="py-12 sm:py-20 bg-linear-to-br from-slate-50 via-white to-green-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-serve-green-100/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-serve-blue-100/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center bg-linear-to-r from-serve-green-100 to-emerald-50 text-serve-green-800 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-6 shadow-sm border border-serve-green-200">
            📝 Application Form
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 sm:mb-4">
            <span className="bg-linear-to-r from-serve-green-600 to-emerald-500 bg-clip-text text-transparent">Apply to Volunteer</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to make a difference? Complete this form to start your volunteer journey with SERVE.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -inset-1 bg-linear-to-r from-serve-green-500 via-emerald-500 to-serve-green-500 rounded-2xl sm:rounded-3xl blur-xl opacity-20" />
          <div className="relative bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-12 shadow-2xl border border-gray-100">
            {error && (
              <div className="mb-8 bg-linear-to-br from-red-50 to-rose-50 border-2 border-red-200 rounded-2xl p-5 shadow-sm">
                <div className="flex items-center">
                  <div className="bg-red-100 rounded-xl p-2 mr-3">
                    <ExclamationTriangleIcon className="h-6 w-6 text-red-600" />
                  </div>
                  <p className="text-red-800 text-sm font-semibold">{error}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information Section */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-5 flex items-center">
                  <span className="bg-linear-to-r from-serve-green-600 to-emerald-600 text-white rounded-xl px-3 py-1.5 text-sm mr-3">1</span>
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-bold text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className={`w-full px-5 py-4 border-2 rounded-2xl focus:ring-4 focus:ring-serve-green-500/20 focus:border-serve-green-500 transition-all duration-300 bg-white text-gray-900 placeholder-gray-400 font-medium shadow-sm hover:shadow-md ${
                        getFieldError('firstName') ? 'border-red-400 bg-red-50' : 'border-gray-200'
                      }`}
                      placeholder="Your first name"
                      required
                    />
                    {getFieldError('firstName') && (
                      <p className="mt-2 text-sm text-red-600 font-semibold">{getFieldError('firstName')}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-bold text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className={`w-full px-5 py-4 border-2 rounded-2xl focus:ring-4 focus:ring-serve-green-500/20 focus:border-serve-green-500 transition-all duration-300 bg-white text-gray-900 placeholder-gray-400 font-medium shadow-sm hover:shadow-md ${
                        getFieldError('lastName') ? 'border-red-400 bg-red-50' : 'border-gray-200'
                      }`}
                      placeholder="Your last name"
                      required
                    />
                    {getFieldError('lastName') && (
                      <p className="mt-2 text-sm text-red-600 font-semibold">{getFieldError('lastName')}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-5 py-4 border-2 rounded-2xl focus:ring-4 focus:ring-serve-green-500/20 focus:border-serve-green-500 transition-all duration-300 bg-white text-gray-900 placeholder-gray-400 font-medium shadow-sm hover:shadow-md ${
                        getFieldError('email') ? 'border-red-400 bg-red-50' : 'border-gray-200'
                      }`}
                      placeholder="your.email@example.com"
                      required
                    />
                    {getFieldError('email') && (
                      <p className="mt-2 text-sm text-red-600 font-semibold">{getFieldError('email')}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-5 py-4 border-2 rounded-2xl focus:ring-4 focus:ring-serve-green-500/20 focus:border-serve-green-500 transition-all duration-300 bg-white text-gray-900 placeholder-gray-400 font-medium shadow-sm hover:shadow-md ${
                        getFieldError('phone') ? 'border-red-400 bg-red-50' : 'border-gray-200'
                      }`}
                      placeholder="01933 315555"
                      required
                    />
                    {getFieldError('phone') && (
                      <p className="mt-2 text-sm text-red-600 font-semibold">{getFieldError('phone')}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                  <div className="md:col-span-2">
                    <label htmlFor="address" className="block text-sm font-bold text-gray-700 mb-2">
                      Address *
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className={`w-full px-5 py-4 border-2 rounded-2xl focus:ring-4 focus:ring-serve-green-500/20 focus:border-serve-green-500 transition-all duration-300 bg-white text-gray-900 placeholder-gray-400 font-medium shadow-sm hover:shadow-md ${
                        getFieldError('address') ? 'border-red-400 bg-red-50' : 'border-gray-200'
                      }`}
                      placeholder="Your full address"
                      required
                    />
                    {getFieldError('address') && (
                      <p className="mt-2 text-sm text-red-600 font-semibold">{getFieldError('address')}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="postcode" className="block text-sm font-bold text-gray-700 mb-2">
                      Postcode *
                    </label>
                    <input
                      type="text"
                      id="postcode"
                      name="postcode"
                      value={formData.postcode}
                      onChange={handleInputChange}
                      className={`w-full px-5 py-4 border-2 rounded-2xl focus:ring-4 focus:ring-serve-green-500/20 focus:border-serve-green-500 transition-all duration-300 bg-white text-gray-900 placeholder-gray-400 font-medium shadow-sm hover:shadow-md ${
                        getFieldError('postcode') ? 'border-red-400 bg-red-50' : 'border-gray-200'
                      }`}
                      placeholder="NN10 0RT"
                      required
                    />
                    {getFieldError('postcode') && (
                      <p className="mt-2 text-sm text-red-600 font-semibold">{getFieldError('postcode')}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Volunteer Role Section */}
              <div className="pt-6 border-t-2 border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-5 flex items-center">
                  <span className="bg-linear-to-r from-serve-blue-600 to-cyan-600 text-white rounded-xl px-3 py-1.5 text-sm mr-3">2</span>
                  Volunteer Role & Availability
                </h3>
                <div>
                  <label htmlFor="volunteering" className="block text-sm font-bold text-gray-700 mb-2">
                    Which volunteer role interests you most? *
                  </label>
                  <select
                    id="volunteering"
                    name="volunteering"
                    value={formData.volunteering}
                    onChange={handleInputChange}
                    className={`w-full px-5 py-4 border-2 rounded-2xl focus:ring-4 focus:ring-serve-green-500/20 focus:border-serve-green-500 transition-all duration-300 bg-white text-gray-900 font-medium shadow-sm hover:shadow-md ${
                      getFieldError('volunteering') ? 'border-red-400 bg-red-50' : 'border-gray-200'
                    }`}
                    required
                  >
                    <option value="">Please select a volunteer role</option>
                    <option value="Community Transport Office Assistant">Community Transport Office Assistant</option>
                    <option value="Community Transport Volunteer Driver">Community Transport Volunteer Driver</option>
                    <option value="Day Centre Volunteer">Day Centre Volunteer</option>
                    <option value="Day Centre Minibus Driver">Day Centre Minibus Driver (MIDAS)</option>
                    <option value="Trustee">Trustee</option>
                    <option value="Befriending Volunteer">Befriending Volunteer</option>
                    <option value="Event Setup & Pack Down">Event Setup & Pack Down</option>
                    <option value="Multiple roles interest me">Multiple roles interest me</option>
                    <option value="Other">Other (please specify in motivation)</option>
                  </select>
                  {getFieldError('volunteering') && (
                    <p className="mt-2 text-sm text-red-600 font-semibold">{getFieldError('volunteering')}</p>
                  )}
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-bold text-gray-700 mb-3">
                    When are you available to volunteer?
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3">
                    {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Flexible'].map((day) => (
                      <label key={day} className="flex items-center bg-gray-50 hover:bg-serve-green-50 border-2 border-gray-200 hover:border-serve-green-300 rounded-xl px-3 sm:px-4 py-3 min-h-12 cursor-pointer transition-all duration-200 shadow-sm hover:shadow">
                        <input
                          type="checkbox"
                          name="availability"
                          value={day}
                          checked={formData.availability.includes(day)}
                          onChange={handleInputChange}
                          className="h-5 w-5 text-serve-green-600 border-gray-300 rounded-lg focus:ring-serve-green-500 cursor-pointer"
                        />
                        <span className="ml-2 sm:ml-3 text-sm font-semibold text-gray-700">{day}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Experience & Motivation Section */}
              <div className="pt-6 border-t-2 border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-5 flex items-center">
                  <span className="bg-linear-to-r from-purple-600 to-violet-600 text-white rounded-xl px-3 py-1.5 text-sm mr-3">3</span>
                  Your Experience & Motivation
                </h3>
                <div>
                  <label htmlFor="experience" className="block text-sm font-bold text-gray-700 mb-2">
                    Previous volunteer experience (optional)
                  </label>
                  <textarea
                    id="experience"
                    name="experience"
                    rows={4}
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-serve-green-500/20 focus:border-serve-green-500 transition-all duration-300 bg-white text-gray-900 placeholder-gray-400 resize-none font-medium shadow-sm hover:shadow-md"
                    placeholder="Tell us about any previous volunteer work..."
                  />
                </div>

                <div className="mt-6">
                  <label htmlFor="motivation" className="block text-sm font-bold text-gray-700 mb-2">
                    Why do you want to volunteer with SERVE? *
                  </label>
                  <textarea
                    id="motivation"
                    name="motivation"
                    rows={5}
                    value={formData.motivation}
                    onChange={handleInputChange}
                    className={`w-full px-5 py-4 border-2 rounded-2xl focus:ring-4 focus:ring-serve-green-500/20 focus:border-serve-green-500 transition-all duration-300 bg-white text-gray-900 placeholder-gray-400 resize-none font-medium shadow-sm hover:shadow-md ${
                      getFieldError('motivation') ? 'border-red-400 bg-red-50' : 'border-gray-200'
                    }`}
                    placeholder="Tell us what motivates you to volunteer..."
                    required
                  />
                  {getFieldError('motivation') && (
                    <p className="mt-2 text-sm text-red-600 font-semibold">{getFieldError('motivation')}</p>
                  )}
                </div>
              </div>

              {/* Consent Section */}
              <div className="pt-6 border-t-2 border-gray-100">
                <div className="bg-linear-to-br from-serve-green-50 to-emerald-50 p-6 rounded-2xl border-2 border-serve-green-200 shadow-sm">
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="consent"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleInputChange}
                      className={`mt-1 h-5 w-5 text-serve-green-600 border-gray-300 rounded-lg focus:ring-serve-green-500 cursor-pointer ${
                        getFieldError('consent') ? 'border-red-500' : ''
                      }`}
                      required
                    />
                    <label htmlFor="consent" className="ml-4 text-sm text-gray-700 font-medium leading-relaxed cursor-pointer">
                      I consent to SERVE processing my personal data for volunteer recruitment purposes 
                      and understand that a DBS check will be required for this role. I confirm the 
                      information provided is accurate. *
                    </label>
                  </div>
                  {getFieldError('consent') && (
                    <p className="mt-2 text-sm text-red-600 font-semibold ml-9">{getFieldError('consent')}</p>
                  )}
                </div>
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-linear-to-r from-serve-green-600 to-emerald-600 hover:from-serve-green-700 hover:to-emerald-700 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed text-white px-6 sm:px-8 py-4 sm:py-5 min-h-[52px] rounded-xl sm:rounded-2xl text-base sm:text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting Application...
                    </span>
                  ) : (
                    '✨ Submit Volunteer Application'
                  )}
                </button>

                <p className="text-center text-sm text-gray-500 mt-4 font-medium">
                  🕐 We&apos;ll review your application and contact you within 5-7 working days.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}