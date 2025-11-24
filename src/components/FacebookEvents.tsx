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
  coverImage?: string | null
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
        const fetchedEvents = data.events || []
        
        if (!cancelled) {
          setEvents(fetchedEvents.length ? fetchedEvents.slice(0, 3) : getFallbackEvents())
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
    return [
      {
        id: '505353872514098',
        name: 'An Evening with Graeme Duffin of Wet, Wet, Wet',
        description: 'Tickets are available for our fantastic Evening with Graeme Duffin, of Wet, Wet, Wet, at the Castle Theatre, Wellingborough next month - book your ticket here',
        startTime: '2025-05-23T19:00:00+0100',
        location: 'Castle Theatre, Wellingborough',
        coverImage: 'https://scontent.ffab1-1.fna.fbcdn.net/v/t39.30808-6/491137504_1079182867574097_3299194013258711221_n.png?stp=dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=9e60e4&_nc_ohc=oVM6lZ7-eeUQ7kNvwHxlLRB&_nc_oc=Admf1L2MakVKqov_4VN645IMre0xuqFSUUIk8k6PNgmD_omUNe77df3-mBlZT429pN0&_nc_zt=23&_nc_ht=scontent.ffab1-1.fna&edm=ABTKTjYEAAAA&oh=00_AfiI4FASMqikoalEgAuW2D5kl8XVT6he9uFXxjZ-MLDjcQ&oe=692AA593',
      },
      {
        id: '1118818683095354',
        name: 'Sing for Serve',
        description: 'Sing for Serve and presentation of the Susan Hollowell Award for volunteering at Park Road Baptist Church, Rushden',
        startTime: '2024-12-11T14:00:00+0000',
        location: 'NN10 0RT Rushden, United Kingdom',
        coverImage: 'https://scontent.ffab1-1.fna.fbcdn.net/v/t39.30808-6/486572435_1063194565839594_2046466249559275474_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=9e60e4&_nc_ohc=nQZQT1b2uAAQ7kNvwFqEGvM&_nc_oc=AdkAZ2pDHUwayxfmKxKVo3wo76Nd8dqR6nH7VeDB5ZdTTHwk648mN80T_FviFT5p6DA&_nc_zt=23&_nc_ht=scontent.ffab1-1.fna&edm=ABTKTjYEAAAA&oh=00_AfiXMHXNd_IskrMtmAbqCHowD8ryibHE_J7Rz0DBwETssg&oe=692A8FB5',
      },
      {
        id: '488541410754988',
        name: 'Our Happy to Serve project launch event',
        description: "Join us for the launch of Our Happy to Serve project on October 4! This groundbreaking initiative is different from other charities - we want to work with you and your business to make a positive impact in the community.",
        startTime: '2024-10-04T09:30:00+0100',
        endTime: '2024-10-04T11:00:00+0100',
        location: null,
        coverImage: 'https://scontent.ffab1-1.fna.fbcdn.net/v/t39.30808-6/485799077_1061004479391936_5249085483064067698_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=9e60e4&_nc_ohc=fcpP_FzJN9UQ7kNvwG2uq7Q&_nc_oc=AdlCyuusb7aA5g89J3eMW9Kcjf9kbnOIUjhKib_IOqrweUQ6uFy7x7MbjfUVJ7H6lEY&_nc_zt=23&_nc_ht=scontent.ffab1-1.fna&edm=ABTKTjYEAAAA&oh=00_AfjEvJYgSvR7PVMSZ4qIsWy1rzs7e0grb6MBLqf-HZJ3rA&oe=692A8F69',
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
        const { fullDate } = formatEventDate(event.startTime)
        
        return (
          <article
            key={event.id}
            className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-purple-200 hover:-translate-y-1"
          >
            {/* Event Cover Image */}
            {event.coverImage ? (
              <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                <Image
                  src={event.coverImage}
                  alt={event.name}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
            ) : (
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 h-48 flex items-center justify-center">
                <CalendarDaysIcon className="w-12 h-12 text-purple-600" />
              </div>
            )}
            
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
