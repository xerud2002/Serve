import React from 'react'
import { AccessibleFormField, AccessibleCheckboxField, FormSubmissionMessage } from '@/lib/forms'
import { MobileButton, MOBILE_CLASSES, useIsMobile } from '@/lib/mobile'

interface MobileFormProps {
  title: string
  description?: string
  fields: Array<{
    id: string
    label: string
    type?: 'text' | 'email' | 'tel' | 'textarea' | 'select'
    required?: boolean
    placeholder?: string
    options?: Array<{ value: string; label: string }>
    rows?: number
    helpText?: string
  }>
  checkboxFields?: Array<{
    id: string
    label: string
    required?: boolean
    helpText?: string
  }>
  onSubmit: (data: Record<string, unknown>) => Promise<void>
  isSubmitting: boolean
  isSubmitted: boolean
  error: string | null
  submitButtonText?: string
  successMessage?: string
  className?: string
}

export default function MobileOptimizedForm({
  title,
  description,
  fields,
  checkboxFields = [],
  onSubmit,
  isSubmitting,
  isSubmitted,
  error,
  submitButtonText = 'Send Message',
  successMessage,
  className = ''
}: MobileFormProps) {
  const { isMobile } = useIsMobile()
  const [formData, setFormData] = React.useState<Record<string, unknown>>({})
  const [fieldErrors, setFieldErrors] = React.useState<Record<string, string>>({})

  // Initialize form data
  React.useEffect(() => {
    const initialData: Record<string, unknown> = {}
    fields.forEach(field => {
      initialData[field.id] = ''
    })
    checkboxFields.forEach(field => {
      initialData[field.id] = false
    })
    setFormData(initialData)
  }, [fields, checkboxFields])

  const validateField = (field: MobileFormProps['fields'][0], value: unknown): string => {
    if (field.required && (!value || (typeof value === 'string' && value.trim() === ''))) {
      return `${field.label} is required`
    }

    if (field.type === 'email' && value && typeof value === 'string' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return 'Please enter a valid email address'
    }

    if (field.type === 'tel' && value && typeof value === 'string' && !/^[\+]?[\d\s\-\(\)]+$/.test(value)) {
      return 'Please enter a valid phone number'
    }

    return ''
  }

  const handleFieldChange = (fieldId: string, value: unknown) => {
    setFormData(prev => ({ ...prev, [fieldId]: value }))
    
    // Clear field error when user starts typing
    if (fieldErrors[fieldId]) {
      setFieldErrors(prev => ({ ...prev, [fieldId]: '' }))
    }
  }

  const handleFieldBlur = (field: MobileFormProps['fields'][0]) => {
    const error = validateField(field, formData[field.id])
    if (error) {
      setFieldErrors(prev => ({ ...prev, [field.id]: error }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate all fields
    const errors: Record<string, string> = {}
    
    fields.forEach(field => {
      const error = validateField(field, formData[field.id])
      if (error) {
        errors[field.id] = error
      }
    })

    checkboxFields.forEach(field => {
      if (field.required && !formData[field.id]) {
        errors[field.id] = `${field.label} is required`
      }
    })

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors)
      // Focus first error field
      const firstErrorField = document.getElementById(`field-${Object.keys(errors)[0]}`)
      firstErrorField?.focus()
      return
    }

    setFieldErrors({})
    await onSubmit(formData)
  }

  return (
    <div className={`bg-white ${isMobile ? 'p-4' : 'p-8'} rounded-2xl shadow-xl ${className}`}>
      {/* Form Header */}
      <div className="mb-8">
        <h2 className={`font-bold text-gray-900 mb-4 ${MOBILE_CLASSES.mobileHeading}`}>
          {title}
        </h2>
        {description && (
          <p className={`text-gray-600 leading-relaxed ${MOBILE_CLASSES.mobileBody}`}>
            {description}
          </p>
        )}
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Regular Fields */}
        {fields.map(field => (
          <AccessibleFormField
            key={field.id}
            id={field.id}
            label={field.label}
            type={field.type}
            value={String(formData[field.id] || '')}
            onChange={(value) => handleFieldChange(field.id, value)}
            onBlur={() => handleFieldBlur(field)}
            error={fieldErrors[field.id]}
            required={field.required}
            placeholder={field.placeholder}
            options={field.options}
            rows={field.rows}
            helpText={field.helpText}
            className={isMobile ? 'text-lg' : 'text-base'}
          />
        ))}

        {/* Checkbox Fields */}
        {checkboxFields.map(field => (
          <AccessibleCheckboxField
            key={field.id}
            id={field.id}
            label={field.label}
            checked={Boolean(formData[field.id]) || false}
            onChange={(checked) => handleFieldChange(field.id, checked)}
            error={fieldErrors[field.id]}
            required={field.required}
            helpText={field.helpText}
          />
        ))}

        {/* Submit Button */}
        <div className="pt-6">
          <MobileButton
            type="submit"
            variant="primary"
            size={isMobile ? 'large' : 'default'}
            fullWidth={isMobile}
            disabled={isSubmitting}
            className="font-bold"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : (
              submitButtonText
            )}
          </MobileButton>
        </div>

        {/* Form Status Messages */}
        <FormSubmissionMessage
          isSubmitting={isSubmitting}
          isSubmitted={isSubmitted}
          error={error}
          successMessage={successMessage}
        />
      </form>
    </div>
  )
}