"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { 
  CalendarDaysIcon,
  MapPinIcon,
  ArrowRightIcon 
} from '@heroicons/react/24/outline'

interface FacebookEvent {
  id: string
  name: string
  description: string
  startTime: string
  endTime?: string | null
  location?: string | null
  image?: string | null
}

export default function FacebookEvents() {
  const [events, setEvents] = useState<FacebookEvent[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      try {
        const res = await fetch('/api/facebook-events', { cache: 'no-store' })
        const data = await res.json()
        const fetchedEvents: FacebookEvent[] = Array.isArray(data?.events) ? data.events : []
        if (!cancelled) {
          setEvents(fetchedEvents.length ? fetchedEvents.slice(0, 4) : getFallbackEvents())
          setLoading(false)
        }
      } catch {
        if (!cancelled) {
          setEvents(getFallbackEvents())
          setLoading(false)
        }
      }
    })()
    return () => { cancelled = true }
  }, [])

  const getFallbackEvents = (): FacebookEvent[] => {
    const now = new Date()
    return [
      {
        id: '1',
        name: 'Autumn Community Events Programme',
        description: 'Join us for our exciting autumn programme including harvest celebrations, coffee mornings, and wellness workshops across Northamptonshire.',
        startTime: new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000).toISOString(),
        location: 'Ron Manning Day Centre',
      },
      {
        id: '2',
        name: 'Volunteer Information Session',
        description: 'Learn about volunteering opportunities at SERVE. Meet our team and discover how you can make a difference in your community.',
        startTime: new Date(now.getTime() + 14 * 24 * 60 * 60 * 1000).toISOString(),
        location: 'SERVE Office, Rushden',
      },
      {
        id: '3',
        name: 'Coffee Morning & Chat',
        description: 'A friendly social gathering for members, carers and families. Enjoy refreshments and good company.',
        startTime: new Date(now.getTime() + 21 * 24 * 60 * 60 * 1000).toISOString(),
        location: 'Ron Manning Day Centre',
      },
      {
        id: '4',
        name: 'Festive Fundraising Fair',
        description: 'Join us for our annual fundraising fair with stalls, entertainment, and festive cheer. All proceeds support SERVE services.',
        startTime: new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000).toISOString(),
        location: 'West Street, Rushden',
      },
    ]
  }

  const formatEventDate = (dateString: string) => {
    const date = new Date(dateString)
    const month = date.toLocaleDateString('en-GB', { month: 'long' })
    const day = date.getDate()
    const year = date.getFullYear()
    const time = date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })
    
    return { month, day, year, time, fullDate: `${month} ${year}` }
  }

  if (loading || events.length === 0) {
    return null
  }

  return (
    <>
      {/* Regular Events Grid - Replace the hardcoded events cards */}
      {events.map((event) => {
        const { month, day, fullDate } = formatEventDate(event.startTime)
        
        return (
          <article
            key={event.id}
            className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-purple-200 hover:-translate-y-1"
          >
            {/* Image Placeholder */}
            <div className="bg-gradient-to-br from-purple-100 to-purple-200 h-48 flex items-center justify-center">
              <CalendarDaysIcon className="w-12 h-12 text-purple-600" />
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-semibold">
                  Events
                </span>
                <span className="text-gray-500 text-xs">{fullDate}</span>
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight group-hover:text-purple-800 transition-colors line-clamp-2">
                {event.name}
              </h3>
              
              <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                {event.description}
              </p>

              {event.location && (
                <div className="flex items-center text-gray-500 text-xs mb-4">
                  <MapPinIcon className="w-4 h-4 mr-1" />
                  <span className="line-clamp-1">{event.location}</span>
                </div>
              )}
              
              <a
                href="https://www.facebook.com/SERVE234/events"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-purple-600 hover:text-purple-800 font-semibold text-sm group/link"
                aria-label={`View ${event.name} on Facebook`}
              >
                View Event
                <ArrowRightIcon className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          </article>
        )
      })}
    </>
  )
}
