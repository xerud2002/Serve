import { parseEventDateTime } from '@/utils/dateParser'

interface EventSchemaProps {
  events: Array<{
    id: string
    title: string
    date: string
    endDate?: string
    time: string
    location: string
    description: string
    tag: string
    image?: string
    capacity?: number
    registered?: number
    registrationLink?: string
  }>
}

export default function EventSchema({ events }: EventSchemaProps) {
  const eventSchemas = events.map(event => {
    // Parse date and time
    const eventDate = parseEventDateTime(event.date, event.time)

    // Calculate end time
    let endDate: Date
    if (event.endDate) {
      // If there's an end date, use it and add event duration (2 hours)
      endDate = parseEventDateTime(event.endDate, event.time)
      endDate.setHours(endDate.getHours() + 2)
    } else {
      // Default: add 2 hours to start time
      endDate = new Date(eventDate)
      endDate.setHours(endDate.getHours() + 2)
    }

    const schema = {
      "@context": "https://schema.org",
      "@type": "Event",
      "name": event.title,
      "description": event.description,
      "startDate": eventDate.toISOString(),
      "endDate": endDate.toISOString(),
      "eventStatus": "https://schema.org/EventScheduled",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "location": {
        "@type": "Place",
        "name": event.location,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": event.location.includes('Rushden') ? 'Rushden' : 'Northamptonshire',
          "addressRegion": "Northamptonshire",
          "addressCountry": "GB"
        }
      },
      "organizer": {
        "@type": "Organization",
        "name": "SERVE",
        "url": "https://serve.org.uk"
      },
      ...(event.image && {
        "image": `https://serve.org.uk${event.image}`
      }),
      ...(event.capacity && {
        "maximumAttendeeCapacity": event.capacity,
        "remainingAttendeeCapacity": event.capacity - (event.registered || 0)
      }),
      ...(event.registrationLink && {
        "offers": {
          "@type": "Offer",
          "url": event.registrationLink,
          "price": "0",
          "priceCurrency": "GBP",
          "availability": event.capacity && event.registered && event.registered >= event.capacity
            ? "https://schema.org/SoldOut"
            : "https://schema.org/InStock",
          "validFrom": new Date().toISOString()
        }
      })
    }

    return schema
  })

  return (
    <>
      {eventSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}
