'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { 
  ArrowLeftIcon, 
  UserGroupIcon, 
  EnvelopeIcon,
  TrashIcon,
  MagnifyingGlassIcon,
  ArrowDownTrayIcon,
  ArrowUpTrayIcon,
  CheckCircleIcon,
  XCircleIcon,
  PlusIcon
} from '@heroicons/react/24/outline'
import { db } from '@/lib/firebase'
import { collection, getDocs, deleteDoc, doc, updateDoc, query, orderBy, addDoc } from 'firebase/firestore'

interface Subscriber {
  id: string
  email: string
  firstName?: string
  interests?: string
  frequency?: string
  subscribed_at: string
  status: 'active' | 'unsubscribed'
}

export default function NewsletterAdmin() {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([])
  const [filteredSubscribers, setFilteredSubscribers] = useState<Subscriber[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [message, setMessage] = useState('')
  const [filter, setFilter] = useState<'all' | 'active' | 'unsubscribed'>('all')
  const [showAddForm, setShowAddForm] = useState(false)
  const [showImportModal, setShowImportModal] = useState(false)
  const [newSubscriber, setNewSubscriber] = useState({ email: '', firstName: '' })
  const [importData, setImportData] = useState('')
  const [importing, setImporting] = useState(false)

  useEffect(() => {
    loadSubscribers()
  }, [])

  useEffect(() => {
    filterSubscribers()
  }, [subscribers, searchTerm, filter])

  const loadSubscribers = async () => {
    try {
      if (!db) {
        setMessage('Firebase is not configured')
        setLoading(false)
        return
      }

      const subscribersQuery = query(
        collection(db, 'newsletter'),
        orderBy('subscribed_at', 'desc')
      )
      const querySnapshot = await getDocs(subscribersQuery)
      const loadedSubscribers: Subscriber[] = []
      
      querySnapshot.forEach((docSnapshot) => {
        loadedSubscribers.push({
          id: docSnapshot.id,
          ...docSnapshot.data()
        } as Subscriber)
      })
      
      setSubscribers(loadedSubscribers)
    } catch (err) {
      console.error('Error loading subscribers:', err)
      setMessage('Error loading subscribers')
    } finally {
      setLoading(false)
    }
  }

  const filterSubscribers = () => {
    let filtered = [...subscribers]
    
    // Filter by status
    if (filter !== 'all') {
      filtered = filtered.filter(s => s.status === filter)
    }
    
    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      filtered = filtered.filter(s => 
        s.email.toLowerCase().includes(term) ||
        (s.firstName && s.firstName.toLowerCase().includes(term))
      )
    }
    
    setFilteredSubscribers(filtered)
  }

  const toggleStatus = async (subscriber: Subscriber) => {
    if (!db) return
    
    try {
      const newStatus = subscriber.status === 'active' ? 'unsubscribed' : 'active'
      await updateDoc(doc(db, 'newsletter', subscriber.id), { status: newStatus })
      
      setSubscribers(prev => prev.map(s => 
        s.id === subscriber.id ? { ...s, status: newStatus } : s
      ))
      setMessage(`Subscriber ${newStatus === 'active' ? 'reactivated' : 'unsubscribed'}`)
      setTimeout(() => setMessage(''), 3000)
    } catch (err) {
      console.error('Error updating subscriber:', err)
      setMessage('Error updating subscriber')
    }
  }

  const deleteSubscriber = async (id: string) => {
    if (!confirm('Are you sure you want to permanently delete this subscriber?')) return
    if (!db) return
    
    try {
      await deleteDoc(doc(db, 'newsletter', id))
      setSubscribers(prev => prev.filter(s => s.id !== id))
      setMessage('Subscriber deleted')
      setTimeout(() => setMessage(''), 3000)
    } catch (err) {
      console.error('Error deleting subscriber:', err)
      setMessage('Error deleting subscriber')
    }
  }

  const exportToCSV = () => {
    const activeSubscribers = subscribers.filter(s => s.status === 'active')
    const csv = [
      ['Email', 'Name', 'Interests', 'Frequency', 'Subscribed Date', 'Status'].join(','),
      ...activeSubscribers.map(s => [
        s.email,
        s.firstName || '',
        s.interests || '',
        s.frequency || '',
        new Date(s.subscribed_at).toLocaleDateString('en-GB'),
        s.status
      ].join(','))
    ].join('\n')
    
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `serve-newsletter-subscribers-${new Date().toISOString().split('T')[0]}.csv`
    a.click()
    URL.revokeObjectURL(url)
  }

  // Add single subscriber
  const addSubscriber = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!db || !newSubscriber.email) return

    try {
      const existing = subscribers.find(s => s.email.toLowerCase() === newSubscriber.email.toLowerCase())
      if (existing) {
        setMessage('This email is already subscribed')
        setTimeout(() => setMessage(''), 3000)
        return
      }

      const docRef = await addDoc(collection(db, 'newsletter'), {
        email: newSubscriber.email.toLowerCase().trim(),
        firstName: newSubscriber.firstName.trim(),
        interests: 'General updates',
        frequency: 'Monthly',
        subscribed_at: new Date().toISOString(),
        status: 'active'
      })

      setSubscribers(prev => [{
        id: docRef.id,
        email: newSubscriber.email.toLowerCase().trim(),
        firstName: newSubscriber.firstName.trim(),
        interests: 'General updates',
        frequency: 'Monthly',
        subscribed_at: new Date().toISOString(),
        status: 'active'
      }, ...prev])

      setNewSubscriber({ email: '', firstName: '' })
      setShowAddForm(false)
      setMessage('Subscriber added successfully')
      setTimeout(() => setMessage(''), 3000)
    } catch (err) {
      console.error('Error adding subscriber:', err)
      setMessage('Error adding subscriber')
    }
  }

  // Import subscribers from CSV/text
  const importSubscribers = async () => {
    if (!db || !importData.trim()) return

    setImporting(true)
    const lines = importData.trim().split('\n')
    let added = 0
    let skipped = 0
    let errors = 0

    for (const line of lines) {
      const parts = line.split(',').map(p => p.trim())
      const email = parts[0]?.toLowerCase()
      const firstName = parts[1] || ''

      // Validate email
      if (!email || !email.includes('@')) {
        errors++
        continue
      }

      // Check if already exists
      const existing = subscribers.find(s => s.email.toLowerCase() === email)
      if (existing) {
        skipped++
        continue
      }

      try {
        const docRef = await addDoc(collection(db, 'newsletter'), {
          email,
          firstName,
          interests: 'General updates',
          frequency: 'Monthly',
          subscribed_at: new Date().toISOString(),
          status: 'active'
        })

        setSubscribers(prev => [{
          id: docRef.id,
          email,
          firstName,
          interests: 'General updates',
          frequency: 'Monthly',
          subscribed_at: new Date().toISOString(),
          status: 'active'
        }, ...prev])

        added++
      } catch {
        errors++
      }
    }

    setImporting(false)
    setImportData('')
    setShowImportModal(false)
    setMessage(`Import complete: ${added} added, ${skipped} duplicates skipped, ${errors} errors`)
    setTimeout(() => setMessage(''), 5000)
  }

  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      })
    } catch {
      return 'Unknown'
    }
  }

  const activeCount = subscribers.filter(s => s.status === 'active').length
  const unsubscribedCount = subscribers.filter(s => s.status === 'unsubscribed').length

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading subscribers...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-4 sm:py-8">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 mb-4 sm:mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <Link 
                href="/admin"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-2 text-sm"
              >
                <ArrowLeftIcon className="w-4 h-4 mr-1" />
                Back to Dashboard
              </Link>
              <h1 className="text-xl sm:text-3xl font-bold text-gray-900">Newsletter Subscribers</h1>
              <p className="text-gray-600 mt-1 text-sm sm:text-base">Manage your mailing list</p>
            </div>
            <button
              onClick={exportToCSV}
              disabled={activeCount === 0}
              className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg font-semibold text-sm"
            >
              <ArrowDownTrayIcon className="w-5 h-5 mr-2" />
              Export CSV
            </button>
            <button
              onClick={() => setShowImportModal(true)}
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold text-sm"
            >
              <ArrowUpTrayIcon className="w-5 h-5 mr-2" />
              Import
            </button>
            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="inline-flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-semibold text-sm"
            >
              <PlusIcon className="w-5 h-5 mr-2" />
              Add
            </button>
          </div>
          
          {message && (
            <div className={`mt-4 p-3 rounded-lg text-sm ${message.includes('Error') ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
              {message}
            </div>
          )}

          {/* Add Single Subscriber Form */}
          {showAddForm && (
            <form onSubmit={addSubscriber} className="mt-4 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">Add New Subscriber</h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Email address *"
                  value={newSubscriber.email}
                  onChange={(e) => setNewSubscriber(prev => ({ ...prev, email: e.target.value }))}
                  required
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white text-sm"
                />
                <input
                  type="text"
                  placeholder="First name (optional)"
                  value={newSubscriber.firstName}
                  onChange={(e) => setNewSubscriber(prev => ({ ...prev, firstName: e.target.value }))}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white text-sm"
                />
                <div className="flex gap-2">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold text-sm"
                  >
                    Add
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowAddForm(false)}
                    className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-lg font-semibold text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>

        {/* Import Modal */}
        {showImportModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-lg w-full p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Import Subscribers</h3>
              <p className="text-sm text-gray-600 mb-4">
                Paste email addresses, one per line. Optionally add a name after the email, separated by a comma.
              </p>
              <div className="bg-gray-50 p-3 rounded-lg mb-4">
                <p className="text-xs text-gray-500 font-mono">
                  Example format:<br />
                  john@example.com, John Smith<br />
                  jane@example.com<br />
                  bob@example.com, Bob
                </p>
              </div>
              <textarea
                value={importData}
                onChange={(e) => setImportData(e.target.value)}
                placeholder="Paste email addresses here..."
                rows={8}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white text-sm font-mono"
              />
              <div className="flex justify-end gap-3 mt-4">
                <button
                  onClick={() => { setShowImportModal(false); setImportData(''); }}
                  className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-lg font-semibold text-sm"
                >
                  Cancel
                </button>
                <button
                  onClick={importSubscribers}
                  disabled={!importData.trim() || importing}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded-lg font-semibold text-sm"
                >
                  {importing ? 'Importing...' : 'Import'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 sm:gap-6 mb-4 sm:mb-6">
          <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 text-center">
            <UserGroupIcon className="w-6 sm:w-8 h-6 sm:h-8 text-blue-600 mx-auto mb-2" />
            <p className="text-xl sm:text-3xl font-bold text-gray-900">{subscribers.length}</p>
            <p className="text-xs sm:text-sm text-gray-500">Total</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 text-center">
            <CheckCircleIcon className="w-6 sm:w-8 h-6 sm:h-8 text-green-600 mx-auto mb-2" />
            <p className="text-xl sm:text-3xl font-bold text-green-600">{activeCount}</p>
            <p className="text-xs sm:text-sm text-gray-500">Active</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 text-center">
            <XCircleIcon className="w-6 sm:w-8 h-6 sm:h-8 text-gray-400 mx-auto mb-2" />
            <p className="text-xl sm:text-3xl font-bold text-gray-400">{unsubscribedCount}</p>
            <p className="text-xs sm:text-sm text-gray-500">Unsubscribed</p>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-4 sm:mb-6">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by email or name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white text-sm"
              />
            </div>
            <div className="flex gap-2">
              {(['all', 'active', 'unsubscribed'] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    filter === f 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {f.charAt(0).toUpperCase() + f.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Subscribers List */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {filteredSubscribers.length === 0 ? (
            <div className="p-8 sm:p-12 text-center">
              <EnvelopeIcon className="w-12 sm:w-16 h-12 sm:h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {subscribers.length === 0 ? 'No subscribers yet' : 'No matching subscribers'}
              </h3>
              <p className="text-gray-500 text-sm">
                {subscribers.length === 0 
                  ? 'Subscribers will appear here when people sign up for the newsletter'
                  : 'Try adjusting your search or filter'}
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Email</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase hidden sm:table-cell">Name</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase hidden md:table-cell">Subscribed</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
                    <th className="px-4 py-3 text-right text-xs font-semibold text-gray-600 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredSubscribers.map((subscriber) => (
                    <tr key={subscriber.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3">
                        <div className="flex items-center">
                          <EnvelopeIcon className="w-4 h-4 text-gray-400 mr-2 hidden sm:block" />
                          <span className="text-sm text-gray-900 truncate max-w-[200px]">{subscriber.email}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600 hidden sm:table-cell">
                        {subscriber.firstName || '-'}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600 hidden md:table-cell">
                        {formatDate(subscriber.subscribed_at)}
                      </td>
                      <td className="px-4 py-3">
                        <button
                          onClick={() => toggleStatus(subscriber)}
                          className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            subscriber.status === 'active'
                              ? 'bg-green-100 text-green-800 hover:bg-green-200'
                              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                          }`}
                        >
                          {subscriber.status === 'active' ? (
                            <><CheckCircleIcon className="w-3 h-3 mr-1" /> Active</>
                          ) : (
                            <><XCircleIcon className="w-3 h-3 mr-1" /> Inactive</>
                          )}
                        </button>
                      </td>
                      <td className="px-4 py-3 text-right">
                        <button
                          onClick={() => deleteSubscriber(subscriber.id)}
                          className="text-red-600 hover:text-red-800 p-2"
                          title="Delete subscriber"
                        >
                          <TrashIcon className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>Showing {filteredSubscribers.length} of {subscribers.length} subscribers</p>
        </div>
      </div>
    </div>
  )
}
