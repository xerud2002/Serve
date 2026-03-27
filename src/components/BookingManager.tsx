"use client"

import { useState, useEffect } from 'react'
import { CalendarIcon, ClockIcon, PhoneIcon, EnvelopeIcon, CheckCircleIcon, XMarkIcon, PhotoIcon } from '@heroicons/react/24/outline'

interface BookingData {
  id: string
  name: string
  email: string
  phone: string
  address: string
  preferredDate: string
  preferredTime: string
  careNeeds: string
  emergencyContact: string
  emergencyPhone: string
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled'
  createdAt: string
  paymentStatus: 'paid' | 'refunded' | 'pending'
}

// Mock data for demonstration
const mockBookings: BookingData[] = [
  {
    id: '1',
    name: 'Margaret Smith',
    email: 'margaret.smith@email.com',
    phone: '01933 123456',
    address: '15 Oak Street, Rushden, NN10 9AB',
    preferredDate: '2025-11-15',
    preferredTime: '10:00',
    careNeeds: 'Personal care assistance, meal preparation, and medication management',
    emergencyContact: 'John Smith (Son)',
    emergencyPhone: '07700 123456',
    status: 'pending',
    createdAt: '2025-11-03T09:30:00Z',
    paymentStatus: 'paid'
  },
  {
    id: '2',
    name: 'Robert Johnson',
    email: 'r.johnson@email.com',
    phone: '01933 234567',
    address: '42 Church Lane, Wellingborough, NN8 1XY',
    preferredDate: '2025-11-16',
    preferredTime: '14:30',
    careNeeds: 'Domestic support and companionship',
    emergencyContact: 'Sarah Johnson (Daughter)',
    emergencyPhone: '07700 234567',
    status: 'confirmed',
    createdAt: '2025-11-02T14:20:00Z',
    paymentStatus: 'paid'
  }
]

export default function BookingManager() {
  const [bookings, setBookings] = useState<BookingData[]>(mockBookings)
  const [selectedBooking, setSelectedBooking] = useState<BookingData | null>(null)
  const [filter, setFilter] = useState<'all' | 'pending' | 'confirmed' | 'completed' | 'cancelled'>('all')
  const [isHydrated, setIsHydrated] = useState(false)

  // Fix hydration mismatch
  useEffect(() => {
    setIsHydrated(true)
  }, [])

  const filteredBookings = bookings.filter(booking => 
    filter === 'all' || booking.status === filter
  )

  const updateBookingStatus = (id: string, status: BookingData['status']) => {
    setBookings(prev => 
      prev.map(booking => 
        booking.id === id ? { ...booking, status } : booking
      )
    )
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800'
      case 'confirmed': return 'bg-blue-100 text-blue-800'
      case 'completed': return 'bg-green-100 text-green-800'
      case 'cancelled': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString)
      if (isNaN(date.getTime())) {
        return 'Invalid Date'
      }
      return date.toLocaleDateString('en-GB', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    } catch {
      return 'Invalid Date'
    }
  }

  const formatDateTime = (dateString: string) => {
    try {
      const date = new Date(dateString)
      if (isNaN(date.getTime())) {
        return 'Invalid Date'
      }
      return date.toLocaleString('en-GB', {
        dateStyle: 'short',
        timeStyle: 'short'
      })
    } catch {
      return 'Invalid Date'
    }
  }

  // Prevent hydration mismatch by not rendering until client is ready
  if (!isHydrated) {
    return (
      <div className="p-6 bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-serve-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading assessment bookings...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Assessment Bookings</h1>
              <p className="text-gray-600">Manage home care assessment appointments</p>
            </div>
            <a
              href="/admin/posts/"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
            >
              <PhotoIcon className="w-5 h-5 mr-2" />
              Manage Posts
            </a>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {['all', 'pending', 'confirmed', 'completed', 'cancelled'].map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status as 'all' | 'pending' | 'confirmed' | 'completed' | 'cancelled')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filter === status
                    ? 'bg-serve-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
                <span className="ml-2 px-2 py-1 bg-white bg-opacity-20 rounded-full text-xs">
                  {status === 'all' ? bookings.length : bookings.filter(b => b.status === status).length}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Bookings List */}
          <div className="lg:col-span-2 space-y-4">
            {filteredBookings.map((booking) => (
              <div
                key={booking.id}
                className={`bg-white rounded-lg shadow-sm border p-6 cursor-pointer transition-all hover:shadow-md ${
                  selectedBooking?.id === booking.id ? 'ring-2 ring-serve-blue-500 border-serve-blue-200' : 'border-gray-200'
                }`}
                onClick={() => setSelectedBooking(booking)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">{booking.name}</h3>
                    <p className="text-gray-600">{booking.email}</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(booking.status)}`}>
                      {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                    </span>
                    <span className="text-xs text-gray-500 mt-1">
                      {formatDateTime(booking.createdAt)}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <CalendarIcon className="w-4 h-4 mr-2 text-gray-400" />
                    <span>{formatDate(booking.preferredDate)}</span>
                  </div>
                  <div className="flex items-center">
                    <ClockIcon className="w-4 h-4 mr-2 text-gray-400" />
                    <span>{booking.preferredTime}</span>
                  </div>
                  <div className="flex items-center">
                    <PhoneIcon className="w-4 h-4 mr-2 text-gray-400" />
                    <span>{booking.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      booking.paymentStatus === 'paid' ? 'bg-green-100 text-green-800' :
                      booking.paymentStatus === 'refunded' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      Payment: {booking.paymentStatus}
                    </span>
                  </div>
                </div>

                {booking.careNeeds && (
                  <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <strong>Care Needs:</strong> {booking.careNeeds.length > 100 
                        ? booking.careNeeds.substring(0, 100) + '...' 
                        : booking.careNeeds}
                    </p>
                  </div>
                )}
              </div>
            ))}

            {filteredBookings.length === 0 && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
                <CalendarIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No bookings found</h3>
                <p className="text-gray-600">
                  {filter === 'all' 
                    ? 'No assessment bookings have been made yet.'
                    : `No ${filter} bookings found.`}
                </p>
              </div>
            )}
          </div>

          {/* Booking Details */}
          <div className="lg:col-span-1">
            {selectedBooking ? (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">Booking Details</h2>
                  <button
                    onClick={() => setSelectedBooking(null)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <XMarkIcon className="w-5 h-5 text-gray-500" />
                  </button>
                </div>

                <div className="space-y-6">
                  {/* Client Information */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Client Information</h3>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="text-gray-600">Name:</span>
                        <span className="ml-2 font-medium text-gray-900">{selectedBooking.name}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Email:</span>
                        <span className="ml-2 text-gray-800">{selectedBooking.email}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Phone:</span>
                        <span className="ml-2 text-gray-800">{selectedBooking.phone}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Address:</span>
                        <span className="ml-2 text-gray-800">{selectedBooking.address}</span>
                      </div>
                    </div>
                  </div>

                  {/* Emergency Contact */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Emergency Contact</h3>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="text-gray-600">Name:</span>
                        <span className="ml-2 font-medium text-gray-900">{selectedBooking.emergencyContact}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Phone:</span>
                        <span className="ml-2 text-gray-800">{selectedBooking.emergencyPhone}</span>
                      </div>
                    </div>
                  </div>

                  {/* Appointment Details */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Appointment</h3>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="text-gray-600">Date:</span>
                        <span className="ml-2 font-medium text-gray-900">{formatDate(selectedBooking.preferredDate)}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Time:</span>
                        <span className="ml-2 font-medium text-gray-900">{selectedBooking.preferredTime}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Status:</span>
                        <span className={`ml-2 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(selectedBooking.status)}`}>
                          {selectedBooking.status.charAt(0).toUpperCase() + selectedBooking.status.slice(1)}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-600">Payment:</span>
                        <span className={`ml-2 px-2 py-1 rounded-full text-xs font-medium ${
                          selectedBooking.paymentStatus === 'paid' ? 'bg-green-100 text-green-800' :
                          selectedBooking.paymentStatus === 'refunded' ? 'bg-blue-100 text-blue-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          £25 - {selectedBooking.paymentStatus}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Care Needs */}
                  {selectedBooking.careNeeds && (
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Care Needs</h3>
                      <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded-lg">
                        {selectedBooking.careNeeds}
                      </p>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="border-t pt-6">
                    <h3 className="font-semibold text-gray-900 mb-3">Actions</h3>
                    <div className="space-y-2">
                      {selectedBooking.status === 'pending' && (
                        <button
                          onClick={() => updateBookingStatus(selectedBooking.id, 'confirmed')}
                          className="w-full bg-serve-green-600 hover:bg-serve-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center"
                        >
                          <CheckCircleIcon className="w-4 h-4 mr-2" />
                          Confirm Appointment
                        </button>
                      )}
                      
                      {selectedBooking.status === 'confirmed' && (
                        <button
                          onClick={() => updateBookingStatus(selectedBooking.id, 'completed')}
                          className="w-full bg-serve-blue-600 hover:bg-serve-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                        >
                          Mark as Completed
                        </button>
                      )}

                      <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center">
                        <EnvelopeIcon className="w-4 h-4 mr-2" />
                        Send Email
                      </button>

                      <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center">
                        <PhoneIcon className="w-4 h-4 mr-2" />
                        Call Client
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center sticky top-6">
                <CalendarIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Select a Booking</h3>
                <p className="text-gray-600">Click on a booking to view details and manage the appointment.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}