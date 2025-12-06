import { useState, useCallback } from 'react'

export interface AssessmentBookingData {
  name: string
  email: string
  phone: string
  address: string
  preferredDate: string
  preferredTime: string
  careNeeds: string
  emergencyContact: string
  emergencyPhone: string
}

export interface PaymentData {
  cardNumber: string
  expiryDate: string
  cvv: string
  cardholderName: string
}

const initialFormData: AssessmentBookingData = {
  name: '',
  email: '',
  phone: '',
  address: '',
  preferredDate: '',
  preferredTime: '',
  careNeeds: '',
  emergencyContact: '',
  emergencyPhone: ''
}

export function useAssessmentBooking() {
  const [formData, setFormData] = useState<AssessmentBookingData>(initialFormData)
  const [paymentData, setPaymentData] = useState<PaymentData>({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: ''
  })
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const updateFormData = useCallback((updates: Partial<AssessmentBookingData>) => {
    setFormData(prev => ({ ...prev, ...updates }))
    // Clear errors for updated fields
    setErrors(prev => {
      const newErrors = { ...prev }
      Object.keys(updates).forEach(key => {
        delete newErrors[key]
      })
      return newErrors
    })
  }, [])

  const updatePaymentData = useCallback((updates: Partial<PaymentData>) => {
    setPaymentData(prev => ({ ...prev, ...updates }))
  }, [])

  const validateStep = useCallback((step: number): boolean => {
    const newErrors: Record<string, string> = {}

    if (step === 1) {
      // Validate required fields
      if (!formData.name.trim()) newErrors.name = 'Name is required'
      if (!formData.email.trim()) newErrors.email = 'Email is required'
      else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Invalid email format'
      if (!formData.phone.trim()) newErrors.phone = 'Phone number is required'
      if (!formData.address.trim()) newErrors.address = 'Address is required'
      if (!formData.preferredDate) newErrors.preferredDate = 'Please select a date'
      if (!formData.preferredTime) newErrors.preferredTime = 'Please select a time'
      if (!formData.emergencyContact.trim()) newErrors.emergencyContact = 'Emergency contact is required'
      if (!formData.emergencyPhone.trim()) newErrors.emergencyPhone = 'Emergency phone is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }, [formData])

  const submitBooking = useCallback(async (): Promise<boolean> => {
    setIsSubmitting(true)
    
    try {
      // Simulate API call - replace with actual payment processing
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // In production, this would:
      // 1. Process payment through Stripe/PayPal
      // 2. Send booking details to SERVE's booking system
      // 3. Send confirmation emails to customer and SERVE
      // 4. Add to calendar system
      
      setIsSubmitting(false)
      setCurrentStep(3) // Move to confirmation step
      return true
    } catch (error) {
      console.error('Booking submission failed:', error)
      setIsSubmitting(false)
      return false
    }
  }, [])

  const resetForm = useCallback(() => {
    setFormData(initialFormData)
    setPaymentData({
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      cardholderName: ''
    })
    setCurrentStep(1)
    setIsSubmitting(false)
    setErrors({})
  }, [])

  const nextStep = useCallback(() => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1)
    }
  }, [currentStep, validateStep])

  const prevStep = useCallback(() => {
    setCurrentStep(prev => Math.max(1, prev - 1))
  }, [])

  // Generate available dates (next 14 weekdays)
  const getAvailableDates = useCallback(() => {
    const dates = []
    const today = new Date()
    const currentDate = new Date(today)
    currentDate.setDate(currentDate.getDate() + 1) // Start from tomorrow
    
    while (dates.length < 10) {
      const dayOfWeek = currentDate.getDay()
      if (dayOfWeek !== 0 && dayOfWeek !== 6) { // Exclude weekends
        dates.push(new Date(currentDate))
      }
      currentDate.setDate(currentDate.getDate() + 1)
    }
    
    return dates
  }, [])

  // Available time slots
  const availableTimes = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30'
  ]

  return {
    formData,
    paymentData,
    currentStep,
    isSubmitting,
    errors,
    availableDates: getAvailableDates(),
    availableTimes,
    updateFormData,
    updatePaymentData,
    nextStep,
    prevStep,
    submitBooking,
    resetForm,
    validateStep
  }
}

// Utility function to format date for display
export function formatDateForDisplay(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-GB', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
}

// Utility function to format time for display
export function formatTimeForDisplay(timeString: string): string {
  return timeString
}