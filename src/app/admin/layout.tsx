'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { getAuthLazy } from '@/lib/firebase'
import type { Auth, User } from 'firebase/auth'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [auth, setAuth] = useState<Auth | null>(null)
  const router = useRouter()

  useEffect(() => {
    // Lazy load Firebase Auth only when admin page is accessed
    let unsubscribe: (() => void) | undefined

    const initAuth = async () => {
      try {
        const authInstance = await getAuthLazy()
        if (!authInstance) {
          setIsLoading(false)
          setError('Firebase is not configured. Please check environment variables.')
          return
        }
        
        setAuth(authInstance)
        
        // Dynamically import auth functions
        const { onAuthStateChanged } = await import('firebase/auth')
        
        unsubscribe = onAuthStateChanged(authInstance, (user: User | null) => {
          if (user) {
            setIsAuthenticated(true)
            setEmail(user.email || '')
          } else {
            setIsAuthenticated(false)
          }
          setIsLoading(false)
        })
      } catch (err) {
        console.error('Auth initialization error:', err)
        setIsLoading(false)
        setError('Failed to initialize authentication')
      }
    }

    initAuth()

    return () => {
      if (unsubscribe) unsubscribe()
    }
  }, [])

  const handleLogin = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!auth) {
      setError('Firebase is not configured. Please check environment variables.')
      return
    }

    try {
      const { signInWithEmailAndPassword } = await import('firebase/auth')
      await signInWithEmailAndPassword(auth, email, password)
      setPassword('')
    } catch (err) {
      console.error('Login error:', err)
      setError('Invalid email or password')
    }
  }, [auth, email, password])

  const handleLogout = useCallback(async () => {
    try {
      if (auth) {
        const { signOut } = await import('firebase/auth')
        await signOut(auth)
      }
      setEmail('')
      setPassword('')
      router.push('/')
    } catch (err) {
      console.error('Logout error:', err)
      router.push('/')
    }
  }, [auth, router])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-linear-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Login</h1>
            <p className="text-gray-600">Enter your credentials to continue</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white"
                placeholder="Enter email"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white"
                placeholder="Enter password"
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-3 sm:py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
          <div>
            <h1 className="text-lg sm:text-2xl font-bold text-gray-900">SERVE Admin</h1>
            <p className="text-gray-600 text-xs sm:text-sm">Manage bookings and charity operations</p>
          </div>
          <div className="flex items-center justify-between sm:justify-end gap-3 sm:gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-xs sm:text-sm text-gray-600 truncate max-w-[150px] sm:max-w-none">{email}</span>
            </div>
            <button
              onClick={handleLogout}
              className="text-red-600 hover:text-red-800 font-semibold text-xs sm:text-sm px-3 sm:px-4 py-2 rounded-lg hover:bg-red-50 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
      {children}
    </div>
  )
}