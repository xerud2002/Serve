import Link from 'next/link'
import Image from 'next/image'
import { 
  TrophyIcon, 
  HeartIcon,
  ArrowRightIcon,
  CalendarDaysIcon,
  SparklesIcon,
  NewspaperIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid'
import { generateSEOMetadata, seoConfigs } from '@/lib/seo'
import dynamic from 'next/dynamic'
import { db } from '@/lib/firebase'
import { collection, getDocs, query, orderBy, where } from 'firebase/firestore'
import EventSchema from '@/components/EventSchema'
import EventsGrid from '@/components/EventsGrid'

const FacebookFeed = dynamic(() => import('@/components/FacebookFeed'), {
  loading: () => <div className="min-h-[500px] bg-gray-50 animate-pulse" />
})

export const metadata = generateSEOMetadata(seoConfigs.news)
export const revalidate = 0

interface Event {
  id: string
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

async function getEvents(type: 'upcoming' | 'past'): Promise<Event[]> {
  if (!db) return []
  
  try {
    const eventsRef = collection(db, 'events')
    const q = query(eventsRef, where('type', '==', type), orderBy('order', 'asc'))
    const snapshot = await getDocs(q)
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Event[]
  } catch (error) {
    console.error('Error fetching events:', error)
    return []
  }
}

export default async function NewsPage() {
  const upcomingEvents = await getEvents('upcoming')
  const pastEvents = await getEvents('past')

  return (
    <div className="min-h-screen bg-white">
      {/* Event Structured Data */}
      {upcomingEvents.length > 0 && <EventSchema events={upcomingEvents} />}
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-linear-to-br from-serve-blue-900 via-serve-blue-800 to-serve-blue-900 text-white overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-yellow-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 -left-40 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute -bottom-20 right-1/3 w-80 h-80 bg-pink-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }} 
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 rounded-full text-sm font-bold bg-linear-to-r from-yellow-400 via-amber-400 to-orange-400 text-gray-900 shadow-xl shadow-yellow-500/30 mb-8 animate-pulse">
              <TrophyIcon className="w-5 h-5 mr-2" />
              Award-Winning Care Services
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-8 leading-tight">
              <span className="block bg-linear-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">News &</span>
              <span className="block bg-linear-to-r from-yellow-300 via-amber-400 to-orange-300 bg-clip-text text-transparent mt-2">Events</span>
            </h1>
            
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-blue-100/90 max-w-4xl mx-auto leading-relaxed mb-12">
              Stay updated with the latest news, celebrations, and opportunities to get involved with SERVE
            </p>

            {/* Quick stats */}
            <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-6 py-3">
                <div className="text-2xl md:text-3xl font-black text-yellow-300">40+</div>
                <div className="text-sm text-blue-200">Years of Service</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-6 py-3">
                <div className="text-2xl md:text-3xl font-black text-yellow-300">2024</div>
                <div className="text-sm text-blue-200">Award Winners</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-6 py-3">
                <div className="text-2xl md:text-3xl font-black text-yellow-300">CQC</div>
                <div className="text-sm text-blue-200">Good Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 lg:py-24 bg-linear-to-br from-serve-blue-50 via-white to-serve-teal-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-serve-blue-200/30 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-serve-teal-200/30 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-linear-to-r from-serve-blue-100 to-serve-teal-100 text-serve-blue-800 px-5 py-2.5 rounded-full text-sm font-bold mb-6 shadow-sm border border-serve-blue-200" role="status">
              <CalendarDaysIcon className="w-4 h-4 mr-2" aria-hidden="true" />
              Coming Soon
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
              <span className="bg-linear-to-r from-serve-blue-600 to-serve-teal-600 bg-clip-text text-transparent">Upcoming</span>{' '}
              <span className="bg-linear-to-r from-serve-teal-600 to-serve-green-600 bg-clip-text text-transparent">Events</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join us at our upcoming events and activities - everyone is welcome!
            </p>
            
            {upcomingEvents.length > 0 && (
              <div className="mt-4 inline-flex items-center gap-2 text-gray-600" role="status" aria-live="polite">
                <UserGroupIcon className="w-5 h-5" aria-hidden="true" />
                <span className="font-semibold">{upcomingEvents.length} {upcomingEvents.length === 1 ? 'event' : 'events'} coming up</span>
              </div>
            )}
          </div>

          {upcomingEvents.length > 0 ? (
            <EventsGrid events={upcomingEvents} initialDisplayCount={6} />
          ) : (
            <div className="text-center py-16 bg-white rounded-3xl shadow-lg border-2 border-dashed border-gray-300" role="status">
              <CalendarDaysIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" aria-hidden="true" />
              <p className="text-gray-600 text-lg mb-6">No upcoming events at the moment. Check back soon!</p>
              <div className="space-y-3">
                <p className="text-sm text-gray-500">Would you like to stay informed?</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-serve-blue-600 hover:bg-serve-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 min-h-11"
                >
                  <HeartIcon className="w-5 h-5" aria-hidden="true" />
                  Subscribe to Updates
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Past Events Section */}
      <section className="py-20 lg:py-24 bg-linear-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-purple-100/50 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-blue-100/50 rounded-full blur-3xl translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-linear-to-r from-purple-100 to-blue-100 text-purple-800 px-5 py-2.5 rounded-full text-sm font-bold mb-6 shadow-sm border border-purple-200">
              <SparklesIcon className="w-4 h-4 mr-2" />
              Celebrating Success
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
              <span className="bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Past</span>{' '}
              <span className="bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Events</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Look back at our recent celebrations, achievements, and community activities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {pastEvents.length > 0 ? (
              pastEvents.map((event) => (
                <div key={event.id} className="group relative">
                  <div className="absolute -inset-0.5 bg-linear-to-r from-purple-400 to-blue-400 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur" />
                  <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                    <div className="relative aspect-4/3 bg-gray-200 overflow-hidden">
                      {event.image ? (
                        <Image
                          src={event.image}
                          alt={event.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      ) : (
                        <div className="w-full h-full bg-linear-to-br from-gray-300 to-gray-400" />
                      )}
                      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
                      
                      {/* Tag */}
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                          {event.tag}
                        </span>
                      </div>
                      
                      {/* Badge */}
                      {event.badge && (
                        <div className="absolute top-4 right-4">
                          <div className="flex items-center gap-1 bg-linear-to-r from-yellow-400 to-amber-500 text-gray-900 px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
                            <StarIconSolid className="w-4 h-4" />
                            {event.badge}
                          </div>
                        </div>
                      )}

                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="flex items-center gap-2 text-white/80 text-sm mb-2">
                          <CalendarDaysIcon className="w-4 h-4" />
                          {event.date}
                        </div>
                        <h3 className="text-2xl font-black text-white mb-2">{event.title}</h3>
                        <p className="text-white/90 text-sm">{event.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12 bg-white rounded-3xl shadow-lg">
                <SparklesIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 text-lg">No past events to display yet.</p>
              </div>
            )}
          </div>

          <div className="text-center">
            <Link
              href="/about/annual-report-2024"
              className="inline-flex items-center gap-3 bg-linear-to-r from-purple-600 via-blue-600 to-cyan-600 hover:from-purple-700 hover:via-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl shadow-purple-500/30 min-h-11"
            >
              <TrophyIcon className="w-5 h-5" />
              View All Our Achievements
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Latest News from Facebook */}
      <FacebookFeed />
    </div>
  )
}
