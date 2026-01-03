'use client'

import { useState } from 'react'

interface NewsletterFormData {
  email: string
  firstName?: string
  interests: string[]
  frequency: string
}

export function useNewsletterSignup(apiEndpoint: string) {
  const [formData, setFormData] = useState<NewsletterFormData>({
    email: '',
    firstName: '',
    interests: [],
    frequency: 'monthly'
  })
  const [emailError, setEmailError] = useState<string>('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string>('')
  
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
      setError('')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateEmail(formData.email)) {
      return
    }

    setIsSubmitting(true)
    setError('')

    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          firstName: formData.firstName || '',
          interests: formData.interests.length > 0 ? formData.interests.join(', ') : 'General updates',
          frequency: formData.frequency,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to subscribe')
      }

      setIsSubmitted(true)
      
      // Clear form on success
      setFormData({
        email: '',
        firstName: '',
        interests: [],
        frequency: 'monthly'
      })
      setEmailError('')
      
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred')
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setFormData({
      email: '',
      firstName: '',
      interests: [],
      frequency: 'monthly'
    })
    setEmailError('')
    setIsSubmitted(false)
    setError('')
  }

  return {
    formData,
    emailError,
    isSubmitting,
    isSubmitted,
    error,
    handleInputChange,
    handleSubmit,
    resetForm
  }
}