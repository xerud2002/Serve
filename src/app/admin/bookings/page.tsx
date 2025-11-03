'use client'

import dynamic from 'next/dynamic'
import ErrorBoundary from '@/components/ErrorBoundary'

const BookingManager = dynamic(() => import('@/components/BookingManager'), {
  ssr: false,
  loading: () => (
    <div className="p-6 bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Loading assessment bookings...</p>
      </div>
    </div>
  )
})

export default function AdminBookingsPage() {
  return (
    <ErrorBoundary>
      <BookingManager />
    </ErrorBoundary>
  )
}