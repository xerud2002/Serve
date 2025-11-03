import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Admin Dashboard - SERVE Charity',
  description: 'Administrative dashboard for SERVE charity management',
  robots: {
    index: false,
    follow: false
  }
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <h1 className="text-2xl font-bold text-gray-900">SERVE Admin Dashboard</h1>
        <p className="text-gray-600 mt-1">Manage bookings and charity operations</p>
      </div>
      {children}
    </div>
  )
}