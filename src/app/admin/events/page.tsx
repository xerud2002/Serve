'use client'

import { useState, useEffect } from 'react'
import { db } from '@/lib/firebase'
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc, query, orderBy, deleteField } from 'firebase/firestore'
import { PlusIcon, TrashIcon, PencilIcon, CalendarIcon } from '@heroicons/react/24/outline'

interface EventData {
  id?: string
  title: string
  date: string
  endDate?: string
  time: string
  location: string
  description: string
  tag: string
  gradient: string
  type: 'upcoming' | 'past'
  image?: string
  badge?: string
  order: number
  capacity?: number
  registered?: number
  registrationLink?: string
}

export default function AdminEventsPage() {
  const [events, setEvents] = useState<EventData[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [editingEvent, setEditingEvent] = useState<EventData | null>(null)
  const [showForm, setShowForm] = useState(false)

  // Raw values for the date/time inputs (YYYY-MM-DD and HH:MM format)
  const [rawDate, setRawDate] = useState('')
  const [rawEndDate, setRawEndDate] = useState('')
  const [rawTime, setRawTime] = useState('')
  const [isDateRange, setIsDateRange] = useState(false)

  const [formData, setFormData] = useState<Omit<EventData, 'id'>>({
    title: '',
    date: '',
    endDate: '',
    time: '',
    location: '',
    description: '',
    tag: '',
    gradient: 'from-serve-blue-500 to-serve-blue-600',
    type: 'upcoming',
    image: '',
    badge: '',
    order: 0,
    capacity: undefined,
    registered: undefined,
    registrationLink: ''
  })

  // Helper: format a YYYY-MM-DD string into a human-readable date
  const formatDate = (isoDate: string): string => {
    const date = new Date(isoDate + 'T00:00:00')
    return date.toLocaleDateString('en-GB', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  // Helper: format a HH:MM string into 12-hour AM/PM
  const formatTime = (time24: string): string => {
    const [hours, minutes] = time24.split(':')
    const hour = parseInt(hours)
    const ampm = hour >= 12 ? 'PM' : 'AM'
    const hour12 = hour % 12 || 12
    return `${hour12}:${minutes} ${ampm}`
  }

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

    // Format the date and time for storage
    const baseDataToSave = {
      ...formData,
      date: rawDate ? formatDate(rawDate) : formData.date,
      endDate: rawEndDate ? formatDate(rawEndDate) : (isDateRange ? formData.endDate : undefined),
      time: rawTime ? formatTime(rawTime) : formData.time,
      capacity: formData.capacity !== undefined ? formData.capacity : undefined,
      registered: formData.registered !== undefined ? formData.registered : undefined,
      registrationLink: formData.registrationLink === '' ? undefined : formData.registrationLink
    }

    try {
      if (editingEvent?.id) {
        // Update existing event
        const dataForUpdate = Object.fromEntries(
          Object.entries(baseDataToSave).map(([k, v]) => [k, v === undefined ? deleteField() : v])
        )
        const eventRef = doc(db, 'events', editingEvent.id)
        await updateDoc(eventRef, dataForUpdate)
      } else {
        // Add new event
        const dataForAdd = Object.fromEntries(
          Object.entries(baseDataToSave).filter(([_, v]) => v !== undefined)
        )
        await addDoc(collection(db, 'events'), dataForAdd)
      }

      loadEvents()
      resetForm()
    } catch (error: any) {
      console.error('Error saving event:', error)
      alert(`Failed to save event: ${error?.message || 'Unknown error. Check console.'}`)
    }
  }

  const handleEdit = (event: EventData) => {
    setEditingEvent(event)
    setFormData({
      title: event.title,
      date: event.date,
      endDate: event.endDate || '',
      time: event.time,
      location: event.location,
      description: event.description,
      tag: event.tag,
      gradient: event.gradient,
      type: event.type,
      image: event.image || '',
      badge: event.badge || '',
      order: event.order,
      capacity: event.capacity,
      registered: event.registered,
      registrationLink: event.registrationLink || ''
    })
    // Reset raw values — the user will need to re-pick date/time when editing
    setRawDate('')
    setRawEndDate('')
    setRawTime('')
    setIsDateRange(!!event.endDate)
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
      endDate: '',
      time: '',
      location: '',
      description: '',
      tag: '',
      gradient: 'from-serve-blue-500 to-serve-blue-600',
      type: 'upcoming',
      image: '',
      badge: '',
      order: events.length,
      capacity: undefined,
      registered: undefined,
      registrationLink: ''
    })
    setRawDate('')
    setRawEndDate('')
    setRawTime('')
    setIsDateRange(false)
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-serve-blue-500 focus:border-transparent text-gray-900 bg-white"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-serve-blue-500 focus:border-transparent text-gray-900 bg-white"
                  />
                </div>

                <div className="md:col-span-2">
                  <div className="flex items-center gap-3 mb-2">
                    <label className="block text-sm font-medium text-gray-700">Event Date(s) *</label>
                    <label className="flex items-center gap-2 text-sm text-gray-600">
                      <input
                        type="checkbox"
                        checked={isDateRange}
                        onChange={(e) => {
                          setIsDateRange(e.target.checked)
                          if (!e.target.checked) {
                            setRawEndDate('')
                            setFormData({ ...formData, endDate: '' })
                          }
                        }}
                        className="rounded border-gray-300 text-serve-blue-600 focus:ring-serve-blue-500"
                      />
                      Multi-day event
                    </label>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1">{isDateRange ? 'Start Date' : 'Date'}</label>
                      <input
                        type="date"
                        required={!editingEvent}
                        value={rawDate}
                        onChange={(e) => setRawDate(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-serve-blue-500 focus:border-transparent text-gray-900 bg-white"
                      />
                      {editingEvent && !rawDate && formData.date && (
                        <p className="text-xs text-gray-500 mt-1">Current: {formData.date}</p>
                      )}
                    </div>
                    {isDateRange && (
                      <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1">End Date</label>
                        <input
                          type="date"
                          required={isDateRange && !editingEvent}
                          value={rawEndDate}
                          onChange={(e) => setRawEndDate(e.target.value)}
                          min={rawDate}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-serve-blue-500 focus:border-transparent text-gray-900 bg-white"
                        />
                        {editingEvent && !rawEndDate && formData.endDate && (
                          <p className="text-xs text-gray-500 mt-1">Current: {formData.endDate}</p>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Time *</label>
                  <input
                    type="time"
                    required={!editingEvent}
                    value={rawTime}
                    onChange={(e) => setRawTime(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-serve-blue-500 focus:border-transparent text-gray-900 bg-white"
                  />
                  {editingEvent && !rawTime && formData.time && (
                    <p className="text-xs text-gray-500 mt-1">Current: {formData.time}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Location *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., SERVE Office, Rushden"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-serve-blue-500 focus:border-transparent text-gray-900 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Color Scheme</label>
                  <select
                    value={formData.gradient}
                    onChange={(e) => setFormData({ ...formData, gradient: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-serve-blue-500 focus:border-transparent text-gray-900 bg-white"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-serve-blue-500 focus:border-transparent text-gray-900 bg-white"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-serve-blue-500 focus:border-transparent text-gray-900 bg-white"
                  />
                </div>
              </div>

              {/* Event Capacity & Registration */}
              {formData.type === 'upcoming' && (
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <h3 className="text-sm font-semibold text-gray-700 mb-3">Registration Settings (Optional)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Capacity</label>
                      <input
                        type="number"
                        min="0"
                        placeholder="Max attendees"
                        value={formData.capacity || ''}
                        onChange={(e) => setFormData({ ...formData, capacity: e.target.value ? parseInt(e.target.value) : undefined })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-serve-blue-500 focus:border-transparent text-gray-900 bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Registered</label>
                      <input
                        type="number"
                        min="0"
                        placeholder="Current count"
                        value={formData.registered || ''}
                        onChange={(e) => setFormData({ ...formData, registered: e.target.value ? parseInt(e.target.value) : undefined })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-serve-blue-500 focus:border-transparent text-gray-900 bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Registration Link</label>
                      <input
                        type="url"
                        placeholder="https://..."
                        value={formData.registrationLink || ''}
                        onChange={(e) => setFormData({ ...formData, registrationLink: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-serve-blue-500 focus:border-transparent text-gray-900 bg-white"
                      />
                    </div>
                  </div>
                </div>
              )}

              {formData.type === 'past' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Image Path (for past events)</label>
                    <input
                      type="text"
                      placeholder="/images/events/event-name.webp"
                      value={formData.image}
                      onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-serve-blue-500 focus:border-transparent text-gray-900 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Badge (optional)</label>
                    <input
                      type="text"
                      placeholder="e.g., Winner"
                      value={formData.badge}
                      onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-serve-blue-500 focus:border-transparent text-gray-900 bg-white"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-serve-blue-500 focus:border-transparent text-gray-900 bg-white"
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
                  <p className="text-sm text-gray-600">
                    <CalendarIcon className="w-4 h-4 inline mr-1" />
                    {event.endDate ? (
                      <>
                        {event.date} <span className="text-gray-400">→</span> {event.endDate}
                      </>
                    ) : (
                      event.date
                    )}
                  </p>
                  <p className="text-sm text-gray-600">{event.time}</p>
                  <p className="text-sm text-gray-600">{event.location}</p>
                  {event.capacity && (
                    <p className="text-sm text-gray-600 font-semibold">
                      Capacity: {event.registered || 0} / {event.capacity}
                    </p>
                  )}
                  <p className="text-sm text-gray-700 pt-2 border-t line-clamp-2">{event.description}</p>
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
