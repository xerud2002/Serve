import BookingManager from '@/components/BookingManager'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Admin Dashboard - Assessment Bookings',
  description: 'Manage home care assessment bookings for SERVE charity',
  robots: {
    index: false,
    follow: false
  }
}

export default function AdminBookingsPage() {
  return <BookingManager />
}