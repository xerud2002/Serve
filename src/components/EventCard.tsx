'use client'

import { useState } from 'react'
import { 
  CalendarDaysIcon, 
  ClockIcon,
  BuildingOffice2Icon,
  ArrowDownTrayIcon,
  UserGroupIcon,
  XMarkIcon,
  InformationCircleIcon
} from '@heroicons/react/24/outline'
import { FOCUS_STYLES } from '@/lib/accessibility'
import { parseEventDateTime } from '@/utils/dateParser'

interface EventCardProps {
  id: string
  title: string
  date: string
  endDate?: string
  time: string
  location: string
  description: string
  tag: string
  gradient: string
  capacity?: number
  registered?: number
  registrationLink?: string
}

export default function EventCard({
  id,
  title,
  date,
  endDate,
  time,
  location,
  description,
  tag,
  gradient,
  capacity,
  registered,
  registrationLink
}: EventCardProps) {
  
  const [showModal, setShowModal] = useState(false)
  
  // Generate ICS calendar file
  const generateICS = () => {
    const startDate = parseEventDateTime(date, time)
    const formattedStartDate = startDate.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
    
    // If there's an end date, use it; otherwise add 2 hours to start
    let formattedEndDate: string
    if (endDate) {
      const endDateTime = parseEventDateTime(endDate, time)
      // Add 2 hours to the end date time as well
      endDateTime.setHours(endDateTime.getHours() + 2)
      formattedEndDate = endDateTime.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
    } else {
      const endDateTime = new Date(startDate)
      endDateTime.setHours(endDateTime.getHours() + 2)
      formattedEndDate = endDateTime.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
    }
    
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//SERVE//Events//EN',
      'BEGIN:VEVENT',
      `UID:${id}@serve.org.uk`,
      `DTSTAMP:${formattedStartDate}`,
      `DTSTART:${formattedStartDate}`,
      `DTEND:${formattedEndDate}`,
      `SUMMARY:${title}`,
      `DESCRIPTION:${description}`,
      `LOCATION:${location}`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n')

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' })
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `serve-event-${id}.ics`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    window.URL.revokeObjectURL(url)
  }

  const availabilityPercentage = capacity && registered ? (registered / capacity) * 100 : 0
  const isFull = capacity && registered && registered >= capacity
  const isFillingUp = availabilityPercentage > 70 && !isFull

  return (
    <>
      <article 
        className="group relative h-full flex"
        aria-labelledby={`event-title-${id}`}
      >
        {/* Hover glow effect */}
        <div className="absolute -inset-0.5 bg-linear-to-r from-serve-blue-400 to-serve-teal-400 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur" />
        
        <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col w-full">
          {/* Header with gradient and tag - Fixed height */}
          <div className={`bg-linear-to-r ${gradient} p-6 text-white relative overflow-hidden h-32 flex flex-col justify-between`}>
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div 
                className="absolute inset-0" 
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }} 
              />
            </div>

            <div className="relative">
              <span 
                className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold border border-white/30"
                aria-label={`Event category: ${tag}`}
              >
                {tag}
              </span>
            </div>
            <h3 
              id={`event-title-${id}`}
              className="text-lg font-black leading-tight line-clamp-2 relative"
            >
              {title}
            </h3>
          </div>
          
          {/* Event details - Fixed height */}
          <div className="p-6 space-y-3 h-64 flex flex-col">
            {/* Date */}
            <div className="flex items-start gap-3" role="group" aria-label="Event date">
              <CalendarDaysIcon 
                className="w-5 h-5 text-serve-blue-600 shrink-0 mt-0.5" 
                aria-hidden="true"
              />
              <div>
                <p className="font-semibold text-gray-900 text-sm">
                  {endDate ? (
                    <>
                      {date}
                      <span className="text-gray-500 mx-1">→</span>
                      {endDate}
                    </>
                  ) : (
                    date
                  )}
                </p>
              </div>
            </div>
            
            {/* Time */}
            <div className="flex items-start gap-3" role="group" aria-label="Event time">
              <ClockIcon 
                className="w-5 h-5 text-serve-blue-600 shrink-0 mt-0.5" 
                aria-hidden="true"
              />
              <div>
                <p className="text-gray-700 text-sm">{time}</p>
              </div>
            </div>
            
            {/* Location */}
            <div className="flex items-start gap-3" role="group" aria-label="Event location">
              <BuildingOffice2Icon 
                className="w-5 h-5 text-serve-blue-600 shrink-0 mt-0.5" 
                aria-hidden="true"
              />
              <div>
                <p className="text-gray-700 text-sm line-clamp-2">{location}</p>
              </div>
            </div>

            {/* Capacity indicator */}
            {capacity && registered !== undefined && (
              <div className="flex items-start gap-3 pt-2 border-t border-gray-200" role="group" aria-label="Event capacity">
                <UserGroupIcon 
                  className="w-5 h-5 text-serve-blue-600 shrink-0 mt-0.5" 
                  aria-hidden="true"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-gray-900">
                      {registered} / {capacity}
                    </span>
                    {isFull && (
                      <span 
                        className="text-xs font-bold text-serve-red-600 bg-serve-red-50 px-2 py-0.5 rounded-full"
                        role="status"
                        aria-live="polite"
                      >
                        Full
                      </span>
                    )}
                    {isFillingUp && (
                      <span 
                        className="text-xs font-bold text-serve-orange-600 bg-serve-orange-50 px-2 py-0.5 rounded-full"
                        role="status"
                        aria-live="polite"
                      >
                        Filling up
                      </span>
                    )}
                  </div>
                  <div 
                    className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden"
                    role="progressbar"
                    aria-valuenow={registered}
                    aria-valuemin={0}
                    aria-valuemax={capacity}
                    aria-label="Registration progress"
                  >
                    <div 
                      className={`h-full rounded-full transition-all duration-500 ${
                        isFull ? 'bg-serve-red-500' : 
                        isFillingUp ? 'bg-serve-orange-500' : 
                        'bg-serve-green-500'
                      }`}
                      style={{ width: `${Math.min(availabilityPercentage, 100)}%` }}
                    />
                  </div>
                </div>
              </div>
            )}
            
            {/* Description - Truncated with line clamp */}
            <div className="flex-1 pt-2 border-t border-gray-200 min-h-0">
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                {description}
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="p-6 pt-0 space-y-3">
            {/* View More button */}
            <button
              onClick={() => setShowModal(true)}
              className={`w-full flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-300 hover:border-gray-400 px-4 py-2.5 rounded-xl font-semibold transition-all duration-300 min-h-11 ${FOCUS_STYLES.button}`}
              aria-label={`View more details about ${title}`}
            >
              <InformationCircleIcon className="w-5 h-5" aria-hidden="true" />
              <span>View Details</span>
            </button>

            {/* Add to Calendar button */}
            <button
              onClick={generateICS}
              className={`w-full flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-300 hover:border-serve-blue-500 px-4 py-2.5 rounded-xl font-semibold transition-all duration-300 min-h-11 ${FOCUS_STYLES.button}`}
              aria-label={`Add ${title} to your calendar`}
            >
              <ArrowDownTrayIcon className="w-5 h-5" aria-hidden="true" />
              <span>Add to Calendar</span>
            </button>

            {/* Registration/Learn More button */}
            {registrationLink && !isFull && (
              <a
                href={registrationLink}
                className={`w-full flex items-center justify-center gap-2 bg-linear-to-r from-serve-blue-600 to-serve-teal-600 hover:from-serve-blue-700 hover:to-serve-teal-700 text-white px-4 py-2.5 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl min-h-11 ${FOCUS_STYLES.button}`}
                aria-label={`Register for ${title}`}
              >
                <span>Register Now</span>
              </a>
            )}

            {isFull && (
              <div 
                className="w-full flex items-center justify-center gap-2 bg-gray-100 text-gray-500 px-4 py-2.5 rounded-xl font-semibold cursor-not-allowed min-h-11"
                role="status"
                aria-label="This event is fully booked"
              >
                <span>Event Full</span>
              </div>
            )}
          </div>
        </div>
      </article>

      {/* Modal */}
      {showModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setShowModal(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby={`modal-title-${id}`}
        >
          <div 
            className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className={`bg-linear-to-r ${gradient} p-8 text-white relative overflow-hidden`}>
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div 
                  className="absolute inset-0" 
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                  }} 
                />
              </div>

              <button
                onClick={() => setShowModal(false)}
                className={`absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors ${FOCUS_STYLES.button}`}
                aria-label="Close modal"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>

              <div className="relative">
                <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold mb-4 border border-white/30">
                  {tag}
                </span>
                <h2 id={`modal-title-${id}`} className="text-3xl font-black mb-4 leading-tight pr-12">
                  {title}
                </h2>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8 space-y-6">
              {/* Event Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className={`flex items-start gap-3 p-4 bg-gray-50 rounded-xl ${endDate ? 'md:col-span-2' : ''}`}>
                  <CalendarDaysIcon className="w-6 h-6 text-serve-blue-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase mb-1">{endDate ? 'Dates' : 'Date'}</p>
                    <p className="font-bold text-gray-900">
                      {endDate ? (
                        <>
                          {date}
                          <span className="block text-sm text-gray-600 my-1">to</span>
                          {endDate}
                        </>
                      ) : (
                        date
                      )}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                  <ClockIcon className="w-6 h-6 text-serve-blue-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Time</p>
                    <p className="font-bold text-gray-900">{time}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl md:col-span-2">
                  <BuildingOffice2Icon className="w-6 h-6 text-serve-blue-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Location</p>
                    <p className="font-bold text-gray-900">{location}</p>
                  </div>
                </div>

                {capacity && registered !== undefined && (
                  <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl md:col-span-2">
                    <UserGroupIcon className="w-6 h-6 text-serve-blue-600 shrink-0 mt-0.5" aria-hidden="true" />
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Capacity</p>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-gray-900">
                          {registered} / {capacity} registered
                        </span>
                        {isFull && (
                          <span className="text-xs font-bold text-serve-red-600 bg-serve-red-50 px-3 py-1 rounded-full">
                            Full
                          </span>
                        )}
                        {isFillingUp && !isFull && (
                          <span className="text-xs font-bold text-serve-orange-600 bg-serve-orange-50 px-3 py-1 rounded-full">
                            Filling up - {capacity - registered} spots left
                          </span>
                        )}
                        {!isFillingUp && !isFull && (
                          <span className="text-xs font-bold text-serve-green-600 bg-serve-green-50 px-3 py-1 rounded-full">
                            {capacity - registered} spots available
                          </span>
                        )}
                      </div>
                      <div 
                        className="w-full bg-gray-200 rounded-full h-2 overflow-hidden"
                        role="progressbar"
                        aria-valuenow={registered}
                        aria-valuemin={0}
                        aria-valuemax={capacity}
                      >
                        <div 
                          className={`h-full rounded-full transition-all duration-500 ${
                            isFull ? 'bg-serve-red-500' : 
                            isFillingUp ? 'bg-serve-orange-500' : 
                            'bg-serve-green-500'
                          }`}
                          style={{ width: `${Math.min(availabilityPercentage, 100)}%` }}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Full Description */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">About This Event</h3>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {description}
                </p>
              </div>

              {/* Modal Actions */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
                <button
                  onClick={generateICS}
                  className={`flex-1 flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-300 hover:border-serve-blue-500 px-6 py-3 rounded-xl font-semibold transition-all duration-300 min-h-11 ${FOCUS_STYLES.button}`}
                >
                  <ArrowDownTrayIcon className="w-5 h-5" aria-hidden="true" />
                  <span>Add to Calendar</span>
                </button>

                {registrationLink && !isFull && (
                  <a
                    href={registrationLink}
                    className={`flex-1 flex items-center justify-center gap-2 bg-linear-to-r from-serve-blue-600 to-serve-teal-600 hover:from-serve-blue-700 hover:to-serve-teal-700 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl min-h-11 ${FOCUS_STYLES.button}`}
                  >
                    <span>Register Now</span>
                  </a>
                )}

                {isFull && (
                  <div className="flex-1 flex items-center justify-center gap-2 bg-gray-100 text-gray-500 px-6 py-3 rounded-xl font-semibold cursor-not-allowed min-h-11">
                    <span>Event Full</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
