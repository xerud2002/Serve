import React from 'react'
import { FOCUS_STYLES, ARIA_LABELS } from './accessibility'

interface FormFieldProps {
  id: string
  label: string
  type?: 'text' | 'email' | 'tel' | 'textarea' | 'select'
  value: string
  onChange: (value: string) => void
  onBlur?: () => void
  error?: string
  required?: boolean
  placeholder?: string
  options?: Array<{ value: string; label: string }>
  rows?: number
  className?: string
  helpText?: string
  ariaDescribedBy?: string
}

export function AccessibleFormField({
  id,
  label,
  type = 'text',
  value,
  onChange,
  onBlur,
  error,
  required = false,
  placeholder,
  options = [],
  rows = 4,
  className = '',
  helpText,
  ariaDescribedBy
}: FormFieldProps) {
  const fieldId = `field-${id}`
  const errorId = `${fieldId}-error`
  const helpId = `${fieldId}-help`
  
  const describedBy = [
    error ? errorId : '',
    helpText ? helpId : '',
    ariaDescribedBy || ''
  ].filter(Boolean).join(' ')

  const baseInputClassName = `
    block w-full px-4 py-3 border rounded-xl text-gray-900 placeholder-gray-500
    ${error 
      ? 'border-red-300 focus:border-red-500 focus:ring-red-500' 
      : 'border-gray-300 focus:border-serve-blue-500 focus:ring-serve-blue-500'
    }
    ${FOCUS_STYLES.input}
    ${className}
  `.trim()

  const renderField = () => {
    switch (type) {
      case 'textarea':
        return (
          <textarea
            id={fieldId}
            name={id}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onBlur={onBlur}
            className={baseInputClassName}
            placeholder={placeholder}
            required={required}
            rows={rows}
            aria-describedby={describedBy || undefined}
            aria-invalid={error ? 'true' : 'false'}
          />
        )
      
      case 'select':
        return (
          <select
            id={fieldId}
            name={id}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onBlur={onBlur}
            className={baseInputClassName}
            required={required}
            aria-describedby={describedBy || undefined}
            aria-invalid={error ? 'true' : 'false'}
          >
            <option value="">Select an option</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        )
      
      default:
        return (
          <input
            type={type}
            id={fieldId}
            name={id}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onBlur={onBlur}
            className={baseInputClassName}
            placeholder={placeholder}
            required={required}
            aria-describedby={describedBy || undefined}
            aria-invalid={error ? 'true' : 'false'}
            autoComplete={
              type === 'email' ? 'email' :
              type === 'tel' ? 'tel' :
              id === 'name' || id === 'firstName' || id === 'lastName' ? 'name' :
              undefined
            }
          />
        )
    }
  }

  return (
    <div className="space-y-2">
      <label 
        htmlFor={fieldId} 
        className="block text-sm font-semibold text-gray-900"
      >
        {label}
        {required && (
          <>
            {' '}
            <span className="text-red-500" aria-label={ARIA_LABELS.required}>
              *
            </span>
          </>
        )}
        {!required && (
          <span className="text-gray-500 font-normal ml-1">
            ({ARIA_LABELS.optional})
          </span>
        )}
      </label>
      
      {helpText && (
        <p id={helpId} className="text-sm text-gray-600">
          {helpText}
        </p>
      )}
      
      {renderField()}
      
      {error && (
        <div
          id={errorId}
          className="flex items-center text-red-600 text-sm"
          role="alert"
          aria-live="polite"
        >
          <svg className="w-4 h-4 mr-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {error}
        </div>
      )}
    </div>
  )
}

interface CheckboxFieldProps {
  id: string
  label: string
  checked: boolean
  onChange: (checked: boolean) => void
  error?: string
  required?: boolean
  className?: string
  helpText?: string
}

export function AccessibleCheckboxField({
  id,
  label,
  checked,
  onChange,
  error,
  required = false,
  className = '',
  helpText
}: CheckboxFieldProps) {
  const fieldId = `checkbox-${id}`
  const errorId = `${fieldId}-error`
  const helpId = `${fieldId}-help`
  
  const describedBy = [
    error ? errorId : '',
    helpText ? helpId : ''
  ].filter(Boolean).join(' ')

  return (
    <div className={`space-y-2 ${className}`}>
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            id={fieldId}
            name={id}
            type="checkbox"
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
            className={`
              w-4 h-4 text-serve-blue-600 border-gray-300 rounded
              ${FOCUS_STYLES.input}
              ${error ? 'border-red-300' : ''}
            `}
            required={required}
            aria-describedby={describedBy || undefined}
            aria-invalid={error ? 'true' : 'false'}
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor={fieldId} className="font-medium text-gray-900">
            {label}
            {required && (
              <>
                {' '}
                <span className="text-red-500" aria-label={ARIA_LABELS.required}>
                  *
                </span>
              </>
            )}
          </label>
          {helpText && (
            <p id={helpId} className="text-gray-600 mt-1">
              {helpText}
            </p>
          )}
        </div>
      </div>
      
      {error && (
        <div
          id={errorId}
          className="flex items-center text-red-600 text-sm ml-7"
          role="alert"
          aria-live="polite"
        >
          <svg className="w-4 h-4 mr-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {error}
        </div>
      )}
    </div>
  )
}

interface FormSubmissionMessageProps {
  isSubmitting: boolean
  isSubmitted: boolean
  error: string | null
  successMessage?: string
}

export function FormSubmissionMessage({
  isSubmitting,
  isSubmitted,
  error,
  successMessage = 'Thank you! Your message has been sent successfully.'
}: FormSubmissionMessageProps) {
  if (isSubmitting) {
    return (
      <div 
        className="flex items-center justify-center p-4 bg-blue-50 border border-blue-200 rounded-xl"
        role="status"
        aria-live="polite"
      >
        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-serve-blue-600 mr-3"></div>
        <span className="text-blue-800">Sending your message...</span>
      </div>
    )
  }

  if (isSubmitted) {
    return (
      <div 
        className="flex items-center p-4 bg-green-50 border border-green-200 rounded-xl"
        role="alert"
        aria-live="polite"
      >
        <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        <span className="text-green-800">{successMessage}</span>
      </div>
    )
  }

  if (error) {
    return (
      <div 
        className="flex items-start p-4 bg-red-50 border border-red-200 rounded-xl"
        role="alert"
        aria-live="assertive"
      >
        <svg className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
        <div>
          <h4 className="text-red-800 font-medium">There was an error</h4>
          <p className="text-red-700 text-sm mt-1">{error}</p>
        </div>
      </div>
    )
  }

  return null
}