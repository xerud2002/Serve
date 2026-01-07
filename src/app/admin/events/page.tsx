'use client'

import { useState, useEffect } from 'react'
import { db } from '@/lib/firebase'
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc, query, orderBy } from 'firebase/firestore'
import { PlusIcon, TrashIcon, PencilIcon, CalendarIcon } from '@heroicons/react/24/outline'

interface EventData {
  id?: string
  title: string
  date: string
  time: string
  location: string
  description: string
  tag: string
  gradient: string
  type: 'upcoming' | 'past'
  image?: string
  badge?: string
  order: number
}

export default function AdminEventsPage() {
  const [events, setEvents] = useState<EventData[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [editingEvent, setEditingEvent] = useState<EventData | null>(null)
  const [showForm, setShowForm] = useState(false)

  const [formData, setFormData] = useState<Omit<EventData, 'id'>>({
    title: '',
    date: '',
    time: '',
    location: '',
    description: '',
    tag: '',
    gradient: 'from-serve-blue-500 to-serve-blue-600',
    type: 'upcoming',
    image: '',
    badge: '',
    order: 0
  })

  const gradientOptions = [
    { label: 'Blue', value: 'from-serve-blue-500 to-serve-blue-700' },
    { label: 'Teal', value: 'from-serve-teal-500 to-serve-teal-700' },
    { label: 'Green', value: 'from-serve-green-500 to-serve-green-700' },
    { label: 'Orange', value: 'from-serve-orange-500 to-serve-orange-700' },
    { label: 'Red', value: 'from-serve-red-500 to-serve-red-700' },
    { label: 'Blue to Teal', value: 'from-serve-blue-500 to-serve-teal-500' },
    { label: 'Teal to Green', value: 'from-serve-teal-500 to-serve-green-500' },
    { label: 'Orange to Red', value: 'from-serve-orange-500 to-serve-red-500' }
  ]

  useEffect(() => {
    loadEvents()
  }, [])

  const loadEvents = async () => {
    if (!db) {
      console.warn('Firebase not configured')
      setIsLoading(false)
      return
    }

    try {
      const eventsRef = collection(db, 'events')
      const q = query(eventsRef, orderBy('order', 'asc'))
      const snapshot = await getDocs(q)
      const eventsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as EventData[]
      setEvents(eventsData)
    } catch (error) {
      console.error('Error loading events:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!db) return

    try {
      if (editingEvent?.id) {
        // Update existing event
        const eventRef = doc(db, 'events', editingEvent.id)
        await updateDoc(eventRef, formData)
      } else {
        // Add new event
        await addDoc(collection(db, 'events'), formData)
      }
      
      loadEvents()
      resetForm()
    } catch (error) {
      console.error('Error saving event:', error)
      alert('Failed to save event')
    }
  }

  const handleEdit = (event: EventData) => {
    setEditingEvent(event)
    setFormData({
      title: event.title,
      date: event.date,
      time: event.time,
      location: event.location,
      description: event.description,
      tag: event.tag,
      gradient: event.gradient,
      type: event.type,
      image: event.image || '',
      badge: event.badge || '',
      order: event.order
    })
    setShowForm(true)
  }

  const handleDelete = async (id: string) => {
    if (!db || !confirm('Are you sure you want to delete this event?')) return

    try {
      await deleteDoc(doc(db, 'events', id))
      loadEvents()
    } catch (error) {
      console.error('Error deleting event:', error)
      alert('Failed to delete event')
    }
  }

  const resetForm = () => {
    setFormData({
      title: '',
      date: '',
      time: '',
      location: '',
      description: '',
      tag: '',
      gradient: 'from-serve-blue-500 to-serve-blue-600',
      type: 'upcoming',
      image: '',
      badge: '',
      order: events.length
    })
    setEditingEvent(null)
    setShowForm(false)
  }

  if (!db) {
    return (
      <div className="p-8 text-center">
        <p className="text-red-600 font-semibold">Firebase not configured. Please add Firebase credentials to environment variables.</p>
      </div>
    )
  }

  if (isLoading) {
    return <div className="p-8 text-center">Loading events...</div>
  }

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Manage Events</h1>
            <p className="text-gray-600 mt-2">Add, edit, or remove events displayed on the news page</p>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="inline-flex items-center gap-2 bg-serve-blue-600 hover:bg-serve-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            <PlusIcon className="w-5 h-5" />
            Add Event
          </button>
        </div>

        {/* Form */}
        {showForm && (
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-xl font-bold mb-4">{editingEvent ? 'Edit Event' : 'New Event'}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-serve-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tag *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Volunteering, Fundraising, Social"
                    value={formData.tag}
                    onChange={(e) => setFormData({ ...formData, tag: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-serve-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Friday, February 14, 2026"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-serve-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Time *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., 10:00 AM - 2:00 PM"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-serve-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Location *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., SERVE Office, Rushden"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-serve-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Color Scheme</label>
                  <select
                    value={formData.gradient}
                    onChange={(e) => setFormData({ ...formData, gradient: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-serve-blue-500 focus:border-transparent"
                  >
                    {gradientOptions.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Type *</label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value as 'upcoming' | 'past' })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-serve-blue-500 focus:border-transparent"
                  >
                    <option value="upcoming">Upcoming Event</option>
                    <option value="past">Past Event</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Order (display position)</label>
                  <input
                    type="number"
                    value={formData.order}
                    onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-serve-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {formData.type === 'past' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Image Path (for past events)</label>
                    <input
                      type="text"
                      placeholder="/images/events/event-name.webp"
                      value={formData.image}
                      onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-serve-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Badge (optional)</label>
                    <input
                      type="text"
                      placeholder="e.g., Winner"
                      value={formData.badge}
                      onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-serve-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description *</label>
                <textarea
                  required
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-serve-blue-500 focus:border-transparent"
                />
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  className="bg-serve-blue-600 hover:bg-serve-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                >
                  {editingEvent ? 'Update Event' : 'Create Event'}
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-2 rounded-lg font-semibold transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Events List */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Upcoming Events ({events.filter(e => e.type === 'upcoming').length})</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.filter(e => e.type === 'upcoming').map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className={`bg-linear-to-r ${event.gradient} p-4 text-white`}>
                  <span className="inline-block bg-white/20 px-3 py-1 rounded-full text-xs font-bold">{event.tag}</span>
                  <h3 className="text-lg font-bold mt-2">{event.title}</h3>
                </div>
                <div className="p-4 space-y-2">
                  <p className="text-sm text-gray-600"><CalendarIcon className="w-4 h-4 inline mr-1" />{event.date}</p>
                  <p className="text-sm text-gray-600">{event.time}</p>
                  <p className="text-sm text-gray-600">{event.location}</p>
                  <p className="text-sm text-gray-700 pt-2 border-t">{event.description}</p>
                  <div className="flex gap-2 pt-4">
                    <button
                      onClick={() => handleEdit(event)}
                      className="flex-1 bg-blue-100 hover:bg-blue-200 text-blue-700 px-4 py-2 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                    >
                      <PencilIcon className="w-4 h-4" />
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(event.id!)}
                      className="flex-1 bg-red-100 hover:bg-red-200 text-red-700 px-4 py-2 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                    >
                      <TrashIcon className="w-4 h-4" />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mt-12">Past Events ({events.filter(e => e.type === 'past').length})</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.filter(e => e.type === 'past').map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                {event.image && (
                  <div className="aspect-video bg-gray-200 relative">
                    <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                  </div>
                )}
                <div className="p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="inline-block bg-gray-100 px-3 py-1 rounded-full text-xs font-bold text-gray-700">{event.tag}</span>
                    {event.badge && (
                      <span className="inline-block bg-yellow-100 px-3 py-1 rounded-full text-xs font-bold text-yellow-800">{event.badge}</span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold">{event.title}</h3>
                  <p className="text-sm text-gray-600">{event.date}</p>
                  <p className="text-sm text-gray-700">{event.description}</p>
                  <div className="flex gap-2 pt-4">
                    <button
                      onClick={() => handleEdit(event)}
                      className="flex-1 bg-blue-100 hover:bg-blue-200 text-blue-700 px-4 py-2 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                    >
                      <PencilIcon className="w-4 h-4" />
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(event.id!)}
                      className="flex-1 bg-red-100 hover:bg-red-200 text-red-700 px-4 py-2 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                    >
                      <TrashIcon className="w-4 h-4" />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {events.length === 0 && (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <CalendarIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 text-lg">No events yet. Click "Add Event" to create your first event.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
