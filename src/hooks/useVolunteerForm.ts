'use client'

import { useState } from 'react'
import { useContactForm } from './useContactForm'
import { validateForm, volunteerFormRules, type ValidationError } from '@/utils/validation'
import { analytics } from '@/components/GoogleAnalytics'

interface VolunteerFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  postcode: string
  volunteering: string
  availability: string[]
  experience: string
  motivation: string
  consent: boolean
}

export function useVolunteerForm(formspreeEndpoint: string) {
  const [formData, setFormData] = useState<VolunteerFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    postcode: '',
    volunteering: '',
    availability: [],
    experience: '',
    motivation: '',
    consent: false
  })
  const [validationErrors, setValidationErrors] = useState<ValidationError[]>([])
  
  const { isSubmitting, isSubmitted, error, submitForm, resetForm } = useContactForm(formspreeEndpoint)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked
    
    if (type === 'checkbox' && name === 'availability') {
      setFormData(prev => ({
        ...prev,
        availability: checked
          ? [...prev.availability, value]
          : prev.availability.filter(day => day !== value)
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }))
    }
    
    // Clear validation errors for this field
    setValidationErrors(prev => prev.filter(error => error.field !== name))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Custom validation for volunteer form
    const errors: ValidationError[] = []
    
    // Combine first and last name for validation
    const combinedName = `${formData.firstName} ${formData.lastName}`.trim()
    const validationData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      postcode: formData.postcode,
      motivation: formData.motivation
    }
    
    const validationResult = validateForm(validationData, volunteerFormRules)
    errors.push(...validationResult)
    
    // Check volunteering role selection
    if (!formData.volunteering) {
      errors.push({
        field: 'volunteering',
        message: 'Please select a volunteer role'
      })
    }
    
    // Check consent
    if (!formData.consent) {
      errors.push({
        field: 'consent',
        message: 'You must consent to data processing and DBS check'
      })
    }
    
    if (errors.length > 0) {
      setValidationErrors(errors)
      return
    }

    // Submit form
    const submissionData = {
      name: combinedName,
      ...formData,
      availability: formData.availability.join(', ') || 'Not specified'
    }
    
    const success = await submitForm(submissionData)
    if (success) {
      // Track successful volunteer form submission
      analytics.trackContactForm('volunteer')
      
      // Clear form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        postcode: '',
        volunteering: '',
        availability: [],
        experience: '',
        motivation: '',
        consent: false
      })
      setValidationErrors([])
    }
  }

  const getFieldError = (fieldName: string) => {
    return validationErrors.find(error => error.field === fieldName)?.message
  }

  const clearForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      postcode: '',
      volunteering: '',
      availability: [],
      experience: '',
      motivation: '',
      consent: false
    })
    setValidationErrors([])
    resetForm()
  }

  return {
    formData,
    validationErrors,
    isSubmitting,
    isSubmitted,
    error,
    handleInputChange,
    handleSubmit,
    getFieldError,
    clearForm
  }
}