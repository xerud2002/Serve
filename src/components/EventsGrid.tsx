'use client'

import { useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'
import EventCard from './EventCard'
import { FOCUS_STYLES } from '@/lib/accessibility'

interface Event {
  id: string
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

interface EventsGridProps {
  events: Event[]
  initialDisplayCount?: number
}

export default function EventsGrid({ events, initialDisplayCount = 6 }: EventsGridProps) {
  const [showAll, setShowAll] = useState(false)
  const displayedEvents = showAll ? events : events.slice(0, initialDisplayCount)
  const hasMoreEvents = events.length > initialDisplayCount

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list" aria-label="Upcoming events">
        {displayedEvents.map((event) => (
          <div key={event.id} role="listitem">
            <EventCard {...event} />
          </div>
        ))}
      </div>

      {hasMoreEvents && (
        <div className="mt-12 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className={`inline-flex items-center gap-3 bg-linear-to-r from-serve-blue-600 to-serve-teal-600 hover:from-serve-blue-700 hover:to-serve-teal-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl shadow-serve-blue-500/30 min-h-11 min-w-11 ${FOCUS_STYLES.button}`}
            aria-expanded={showAll}
            aria-label={showAll ? 'Show fewer events' : `View ${events.length - initialDisplayCount} more events`}
          >
            {showAll ? (
              <>
                <ChevronUpIcon className="w-5 h-5" aria-hidden="true" />
                Show Less
              </>
            ) : (
              <>
                <ChevronDownIcon className="w-5 h-5" aria-hidden="true" />
                View More ({events.length - initialDisplayCount} more)
              </>
            )}
          </button>
        </div>
      )}
    </>
  )
}
