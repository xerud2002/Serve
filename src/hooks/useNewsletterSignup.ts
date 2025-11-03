'use client'

import { useState } from 'react'
import { useContactForm } from './useContactForm'

interface NewsletterFormData {
  email: string
  firstName?: string
  interests: string[]
  frequency: string
}

export function useNewsletterSignup(formspreeEndpoint: string) {
  const [formData, setFormData] = useState<NewsletterFormData>({
    email: '',
    firstName: '',
    interests: [],
    frequency: 'monthly'
  })
  const [emailError, setEmailError] = useState<string>('')
  
  const { isSubmitting, isSubmitted, error, submitForm, resetForm } = useContactForm(formspreeEndpoint)

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email.trim()) {
      setEmailError('Email address is required')
      return false
    }
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address')
      return false
    }
    setEmailError('')
    return true
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked
    
    if (name === 'interests' && type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        interests: checked
          ? [...prev.interests, value]
          : prev.interests.filter(interest => interest !== value)
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
    
    // Clear email error when user types
    if (name === 'email') {
      setEmailError('')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateEmail(formData.email)) {
      return
    }

    // Prepare submission data
    const submissionData = {
      type: 'newsletter_signup',
      email: formData.email,
      firstName: formData.firstName || 'Not provided',
      interests: formData.interests.length > 0 ? formData.interests.join(', ') : 'General updates',
      frequency: formData.frequency,
      source: 'website',
      subscribed_at: new Date().toISOString()
    }
    
    const success = await submitForm(submissionData)
    if (success) {
      // Clear form
      setFormData({
        email: '',
        firstName: '',
        interests: [],
        frequency: 'monthly'
      })
      setEmailError('')
    }
  }

  const clearForm = () => {
    setFormData({
      email: '',
      firstName: '',
      interests: [],
      frequency: 'monthly'
    })
    setEmailError('')
    resetForm()
  }

  return {
    formData,
    emailError,
    isSubmitting,
    isSubmitted,
    error,
    handleInputChange,
    handleSubmit,
    clearForm
  }
}