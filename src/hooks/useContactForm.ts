'use client'

import { useState } from 'react'

interface FormData {
  [key: string]: string | string[] | boolean
}

interface FormState {
  isSubmitting: boolean
  isSubmitted: boolean
  error: string | null
}

export function useContactForm(formspreeEndpoint: string) {
  const [formState, setFormState] = useState<FormState>({
    isSubmitting: false,
    isSubmitted: false,
    error: null
  })

  const submitForm = async (formData: FormData) => {
    setFormState({
      isSubmitting: true,
      isSubmitted: false,
      error: null
    })

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setFormState({
          isSubmitting: false,
          isSubmitted: true,
          error: null
        })
        return true
      } else {
        throw new Error('Failed to submit form')
      }
    } catch (error) {
      setFormState({
        isSubmitting: false,
        isSubmitted: false,
        error: 'There was an error submitting your message. Please try again or call us directly at 01933 315555.'
      })
      return false
    }
  }

  const resetForm = () => {
    setFormState({
      isSubmitting: false,
      isSubmitted: false,
      error: null
    })
  }

  return {
    ...formState,
    submitForm,
    resetForm
  }
}