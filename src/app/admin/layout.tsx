import type { Metadata } from 'next'
import AdminAuthGate from './AdminAuthGate'

export const metadata: Metadata = {
  title: 'Admin - SERVE',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <AdminAuthGate>{children}</AdminAuthGate>
}
