'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { 
  NewspaperIcon,
  CalendarDaysIcon,
  EnvelopeIcon,
  UserGroupIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ClockIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline'
import { db } from '@/lib/firebase'
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore'

interface DashboardStats {
  totalPosts: number
  totalBookings: number
  pendingBookings: number
  recentActivity: {
    type: string
    message: string
    time: string
  }[]
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    totalPosts: 0,
    totalBookings: 0,
    pendingBookings: 0,
    recentActivity: []
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadStats()
  }, [])

  const loadStats = async () => {
    try {
      if (!db) {
        setLoading(false)
        return
      }

      // Load posts count
      const postsSnapshot = await getDocs(collection(db, 'posts'))
      const postsCount = postsSnapshot.size

      // Load bookings count (if collection exists)
      let bookingsCount = 0
      let pendingCount = 0
      try {
        const bookingsSnapshot = await getDocs(collection(db, 'bookings'))
        bookingsCount = bookingsSnapshot.size
        bookingsSnapshot.forEach((doc) => {
          const data = doc.data()
          if (data.status === 'pending') pendingCount++
        })
      } catch {
        // Bookings collection might not exist yet
      }

      // Load recent posts for activity
      const recentPostsQuery = query(
        collection(db, 'posts'),
        orderBy('created_time', 'desc'),
        limit(3)
      )
      const recentPosts = await getDocs(recentPostsQuery)
      const activity: DashboardStats['recentActivity'] = []
      
      recentPosts.forEach((doc) => {
        const data = doc.data()
        activity.push({
          type: 'post',
          message: data.message?.substring(0, 50) + '...' || 'New post added',
          time: data.created_time ? new Date(data.created_time).toLocaleDateString('en-GB') : 'Unknown'
        })
      })

      setStats({
        totalPosts: postsCount,
        totalBookings: bookingsCount,
        pendingBookings: pendingCount,
        recentActivity: activity
      })
    } catch (err) {
      console.error('Error loading stats:', err)
    } finally {
      setLoading(false)
    }
  }

  const adminModules = [
    {
      title: 'Manage Posts',
      description: 'Add, edit, or remove Facebook posts displayed on the homepage',
      icon: NewspaperIcon,
      href: '/admin/posts',
      color: 'bg-blue-500',
      stats: `${stats.totalPosts} posts`
    },
    {
      title: 'Bookings',
      description: 'View and manage assessment booking requests',
      icon: CalendarDaysIcon,
      href: '/admin/bookings',
      color: 'bg-green-500',
      stats: stats.pendingBookings > 0 ? `${stats.pendingBookings} pending` : 'No pending'
    },
    {
      title: 'Contact Messages',
      description: 'View messages from the contact form',
      icon: EnvelopeIcon,
      href: '/admin/contacts',
      color: 'bg-purple-500',
      stats: 'Coming soon',
      disabled: true
    },
    {
      title: 'Newsletter',
      description: 'Manage newsletter subscribers',
      icon: UserGroupIcon,
      href: '/admin/newsletter',
      color: 'bg-orange-500',
      stats: 'View subscribers'
    }
  ]

  const quickActions = [
    { label: 'Add New Post', href: '/admin/posts', icon: NewspaperIcon },
    { label: 'View Bookings', href: '/admin/bookings', icon: CalendarDaysIcon },
    { label: 'Site Settings', href: '#', icon: Cog6ToothIcon, disabled: true }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-1 text-sm sm:text-base">Manage your SERVE charity website</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-6 sm:mb-8">
          <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
            <div className="flex items-center">
              <div className="p-2 sm:p-3 bg-blue-100 rounded-lg">
                <NewspaperIcon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
              </div>
              <div className="ml-3 sm:ml-4">
                <p className="text-xs sm:text-sm text-gray-500">Total Posts</p>
                <p className="text-lg sm:text-2xl font-bold text-gray-900">
                  {loading ? '-' : stats.totalPosts}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
            <div className="flex items-center">
              <div className="p-2 sm:p-3 bg-green-100 rounded-lg">
                <CalendarDaysIcon className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
              </div>
              <div className="ml-3 sm:ml-4">
                <p className="text-xs sm:text-sm text-gray-500">Bookings</p>
                <p className="text-lg sm:text-2xl font-bold text-gray-900">
                  {loading ? '-' : stats.totalBookings}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
            <div className="flex items-center">
              <div className="p-2 sm:p-3 bg-yellow-100 rounded-lg">
                <ClockIcon className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600" />
              </div>
              <div className="ml-3 sm:ml-4">
                <p className="text-xs sm:text-sm text-gray-500">Pending</p>
                <p className="text-lg sm:text-2xl font-bold text-gray-900">
                  {loading ? '-' : stats.pendingBookings}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
            <div className="flex items-center">
              <div className="p-2 sm:p-3 bg-purple-100 rounded-lg">
                <ChartBarIcon className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
              </div>
              <div className="ml-3 sm:ml-4">
                <p className="text-xs sm:text-sm text-gray-500">Status</p>
                <p className="text-lg sm:text-2xl font-bold text-green-600">Live</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 mb-6 sm:mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {quickActions.map((action) => (
              <Link
                key={action.label}
                href={action.disabled ? '#' : action.href}
                className={`inline-flex items-center px-3 sm:px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  action.disabled 
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                    : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                }`}
                onClick={action.disabled ? (e) => e.preventDefault() : undefined}
              >
                <action.icon className="w-4 h-4 mr-2" />
                {action.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Admin Modules Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {adminModules.map((module) => (
            <Link
              key={module.title}
              href={module.disabled ? '#' : module.href}
              className={`bg-white rounded-xl shadow-sm p-4 sm:p-6 transition-all ${
                module.disabled 
                  ? 'opacity-60 cursor-not-allowed' 
                  : 'hover:shadow-md hover:-translate-y-1'
              }`}
              onClick={module.disabled ? (e) => e.preventDefault() : undefined}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start">
                  <div className={`p-2 sm:p-3 ${module.color} rounded-lg`}>
                    <module.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="ml-3 sm:ml-4">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900">{module.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1">{module.description}</p>
                    <span className={`inline-block mt-2 text-xs px-2 py-1 rounded-full ${
                      module.disabled ? 'bg-gray-100 text-gray-500' : 'bg-gray-100 text-gray-700'
                    }`}>
                      {module.stats}
                    </span>
                  </div>
                </div>
                {!module.disabled && (
                  <ArrowRightIcon className="w-5 h-5 text-gray-400" />
                )}
              </div>
            </Link>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
          {loading ? (
            <div className="text-center py-8 text-gray-500">Loading...</div>
          ) : stats.recentActivity.length === 0 ? (
            <div className="text-center py-8">
              <ExclamationTriangleIcon className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500">No recent activity</p>
              <Link 
                href="/admin/posts/" 
                className="text-blue-600 hover:text-blue-800 text-sm mt-2 inline-block"
              >
                Add your first post →
              </Link>
            </div>
          ) : (
            <ul className="space-y-3">
              {stats.recentActivity.map((activity, index) => (
                <li key={index} className="flex items-start p-3 bg-gray-50 rounded-lg">
                  <div className="p-2 bg-blue-100 rounded-full mr-3">
                    <CheckCircleIcon className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900 truncate">{activity.message}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>SERVE Charity Admin Panel • <Link href="/" className="text-blue-600 hover:underline">Back to Website</Link></p>
        </div>
      </div>
    </div>
  )
}
