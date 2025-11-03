"use client"

import { useState, useEffect } from 'react'
import { CalendarIcon, ClockIcon, CreditCardIcon, CheckCircleIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { MOBILE_CLASSES } from '@/lib/mobile'
import { FOCUS_STYLES } from '@/lib/accessibility'

interface AssessmentBookingProps {
  isOpen: boolean
  onClose: () => void
}

export default function AssessmentBooking({ isOpen, onClose }: AssessmentBookingProps) {
  const [step, setStep] = useState(1) // 1: Details, 2: Payment, 3: Confirmation
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    preferredDate: '',
    preferredTime: '',
    careNeeds: '',
    emergencyContact: '',
    emergencyPhone: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        console.log('Escape key pressed, closing modal')
        handleClose()
      }
    }

    if (isOpen) {
      console.log('Modal opened, setting up event listeners and scroll lock')
      document.addEventListener('keydown', handleEscape)
      // Temporarily disable scroll lock to test
      // document.body.style.overflow = 'hidden'
      // document.body.style.position = 'fixed'
      // document.body.style.width = '100%'
    } else {
      console.log('Modal closed, cleaning up')
      // Restore normal scrolling
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }
  }, [isOpen])

  // Generate available dates (next 14 days, excluding weekends)
  const getAvailableDates = () => {
    const dates = []
    const today = new Date()
    let currentDate = new Date(today)
    currentDate.setDate(currentDate.getDate() + 1) // Start from tomorrow
    
    while (dates.length < 10) {
      const dayOfWeek = currentDate.getDay()
      if (dayOfWeek !== 0 && dayOfWeek !== 6) { // Exclude Sunday (0) and Saturday (6)
        dates.push(new Date(currentDate))
      }
      currentDate.setDate(currentDate.getDate() + 1)
    }
    
    return dates
  }

  const availableDates = getAvailableDates()
  const availableTimes = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30'
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmitDetails = (e: React.FormEvent) => {
    e.preventDefault()
    setStep(2) // Move to payment step
  }

  const handlePayment = () => {
    setIsSubmitting(true)
    // Simulate payment processing
    setTimeout(() => {
      setIsSubmitting(false)
      setStep(3) // Move to confirmation
    }, 2000)
  }

  const handleClose = () => {
    setStep(1)
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      preferredDate: '',
      preferredTime: '',
      careNeeds: '',
      emergencyContact: '',
      emergencyPhone: ''
    })
    onClose()
  }

  console.log('Modal isOpen:', isOpen, 'Step:', step) // Debug log
  
  if (!isOpen) {
    console.log('Modal not open, returning null')
    return null
  }
  
  console.log('Rendering modal...')

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center p-4"
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0,
        backgroundColor: 'rgba(255, 0, 0, 0.8)', // Red background for testing
        zIndex: 99999
      }}
      onClick={(e) => {
        console.log('Backdrop element clicked', e.target === e.currentTarget ? 'on backdrop' : 'on content')
        if (e.target === e.currentTarget) {
          console.log('Backdrop clicked, closing modal')
          handleClose()
        }
      }}
    >
      <div 
        className="bg-blue-500 rounded-2xl shadow-2xl w-96 h-96 relative mx-auto p-8"
        onClick={(e) => e.stopPropagation()}
        style={{ zIndex: 100000 }}
      >
        <h1 className="text-white text-2xl font-bold">TEST MODAL - STEP {step}</h1>
        <p className="text-white mt-4">If you can see this red background and blue box, the modal is working!</p>
        <button 
          onClick={(e) => {
            e.preventDefault()
            console.log('Test close button clicked')
            handleClose()
          }}
          className="bg-white text-blue-500 px-6 py-3 rounded mt-6 font-bold"
        >
          CLOSE TEST MODAL
        </button>
      </div>
    </div>
  )
}

export function AssessmentBookingButton() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  const handleOpenModal = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    console.log('Opening modal...') // Debug log
    setIsBookingOpen(true)
  }

  const handleCloseModal = () => {
    console.log('Closing modal...') // Debug log
    setIsBookingOpen(false)
  }

  return (
    <>
      <button
        type="button"
        onClick={handleOpenModal}
        className={`group bg-serve-green-600 hover:bg-serve-green-700 active:bg-serve-green-800 text-white font-semibold transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl ${MOBILE_CLASSES.touchTarget} ${FOCUS_STYLES.button} transform hover:scale-105 px-8 py-4 text-lg flex items-center justify-center mx-auto`}
      >
        <CalendarIcon className="w-6 h-6 mr-3" />
        Book Home Care Assessment
      </button>
      
      <AssessmentBooking 
        isOpen={isBookingOpen} 
        onClose={handleCloseModal} 
      />
    </>
  )
}