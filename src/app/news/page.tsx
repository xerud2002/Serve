import Link from 'next/link'
import Image from 'next/image'
import { 
  TrophyIcon, 
  HeartIcon,
  ArrowRightIcon,
  CalendarDaysIcon,
  ClockIcon,
  BuildingOffice2Icon,
  TagIcon
} from '@heroicons/react/24/outline'
import { generateSEOMetadata, seoConfigs } from '@/lib/seo'
import dynamic from 'next/dynamic'

const FacebookFeed = dynamic(() => import('@/components/FacebookFeed'), {
  loading: () => <div className="min-h-[500px] bg-gray-50 animate-pulse" />
})

export const metadata = generateSEOMetadata(seoConfigs.news)
export const revalidate = 0

const upcomingEvents = [
  {
    title: 'Community Coffee Morning',
    date: 'Monthly',
    time: '10:30 AM - 12:00 PM',
    location: 'Ron Manning Day Centre',
    description: 'Monthly coffee morning open to the community. Come and learn about our services and meet our team.'
  },
  {
    title: 'Volunteer Information Session',
    date: 'Ongoing',
    time: 'Various Times',
    location: 'SERVE Head Office',
    description: 'Interested in volunteering? Contact us to attend an information session and learn how you can make a difference in your community.'
  }
]

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-serve-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <CalendarDaysIcon className="w-4 h-4 mr-2" />
              Get Involved
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Upcoming Events & Appeals
            </h1>
            
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Join us at our upcoming events or support our community appeal to help us continue making a difference
            </p>
          </div>
        </div>
      </section>

      {/* Featured Appeal */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-serve-green-500 to-serve-blue-600 rounded-2xl p-8 lg:p-12 text-white shadow-lg">
            <div className="flex items-start gap-6">
              <div className="bg-white/20 rounded-xl p-4 flex-shrink-0">
                <CalendarDaysIcon className="w-8 h-8 text-white" />
              </div>
              
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-4">
                  SERVE Community Appeal - Help Us Raise £25,000
                </h2>
                
                <div className="space-y-2 mb-6 text-white/90">
                  <div className="flex items-center">
                    <CalendarDaysIcon className="w-5 h-5 mr-3" />
                    <span className="font-medium">Until April 2026</span>
                  </div>
                  <div className="flex items-center">
                    <ClockIcon className="w-5 h-5 mr-3" />
                    <span>Donate Anytime</span>
                  </div>
                  <div className="flex items-center">
                    <BuildingOffice2Icon className="w-5 h-5 mr-3" />
                    <span>Online via JustGiving</span>
                  </div>
                </div>
                
                <p className="text-lg mb-6 text-white/90">
                  Support our Community Appeal to enhance day centre services, expand community programmes, and create more opportunities for connection and care across Northamptonshire.
                </p>

                <a
                  href="https://www.justgiving.com/campaign/serve-community-appeal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-white text-serve-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <HeartIcon className="w-5 h-5 mr-2" />
                  Donate Now on JustGiving
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <p className="text-lg text-gray-600">Join us at our upcoming events and activities</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <div 
                key={index} 
                className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-6">
                  <div className="bg-serve-blue-600 rounded-xl p-4 flex-shrink-0">
                    <CalendarDaysIcon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {event.title}
                    </h3>
                    
                    <div className="space-y-2 mb-6 text-gray-600">
                      <div className="flex items-center">
                        <CalendarDaysIcon className="w-4 h-4 mr-2 text-gray-400" />
                        <span className="text-sm">{event.date}</span>
                      </div>
                      <div className="flex items-center">
                        <ClockIcon className="w-4 h-4 mr-2 text-gray-400" />
                        <span className="text-sm">{event.time}</span>
                      </div>
                      <div className="flex items-center">
                        <BuildingOffice2Icon className="w-4 h-4 mr-2 text-gray-400" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6">
                      {event.description}
                    </p>

                    <Link
                      href="/contact"
                      className="inline-flex items-center text-serve-blue-600 hover:text-serve-blue-700 font-semibold"
                    >
                      Get More Information
                      <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News from Facebook */}
      <FacebookFeed />

      {/* Featured Achievement */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <TrophyIcon className="w-4 h-4 mr-2" />
              Award Winner
            </div>
            <h2 className="text-3xl font-bold text-gray-900">SERVE Wins Best Homecare Team Award 2024</h2>
          </div>
            
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  We are thrilled to announce that SERVE has been awarded "Best Homecare Team, East Midlands" at the prestigious Great British Care Awards 2024. This recognition celebrates our dedicated team&apos;s commitment to providing exceptional care services.
                </p>
                
                <Link
                  href="/news/great-british-care-awards"
                  className="inline-flex items-center bg-serve-blue-600 hover:bg-serve-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors"
                >
                  Read Full Story
                  <ArrowRightIcon className="ml-3 h-5 w-5" />
                </Link>
              </div>
              
              <div className="bg-yellow-50 rounded-2xl p-8 flex items-center justify-center border border-yellow-200">
                <div className="text-center text-yellow-800">
                  <TrophyIcon className="w-24 h-24 mx-auto mb-4" />
                  <p className="text-lg font-bold">Great British Care Awards</p>
                  <p className="text-sm">Winner 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Previous Events Photo Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-serve-blue-100 text-serve-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <TagIcon className="w-4 h-4 mr-2" />
              Events & Fundraising
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">SERVE Out and About</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Below are some images from events and fundraising that we&apos;ve been involved in over the last few years. How many of them did you hear about?
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Cloisters Rushden Craft Fair', image: '/images/events/Cloisters-Rushden-craft-fair-scaled.webp' },
              { title: 'Christmas Gifts from Happy Mondays in Rushden', image: '/images/events/Christmas-gifts-from-Happy-Mondays-in-Rushden-scaled.webp' },
              { title: 'Teddy Bear Winners', image: '/images/events/Teddy-Bear-winners-scaled.webp' },
              { title: 'Fundraising at Asda Rushden', image: '/images/events/Fundraising-at-Asda-Rushden-scaled.webp' },
              { title: 'Northamptonshire Chamber of Trade Expo 2024', image: '/images/events/Northamptonshire-Chamber-of-Trade-Expo-2024-scaled.webp' },
              { title: 'Christmas Lights Rushden', image: '/images/events/Christmas-Lights-Rushden-scaled.webp' }
            ].map((event, index) => (
              <div key={index} className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="relative aspect-[4/3] bg-gray-200">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <p className="text-white font-semibold p-4 w-full text-sm">{event.title}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center bg-serve-blue-600 hover:bg-serve-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors"
            >
              Contact Us to Learn More
              <ArrowRightIcon className="ml-3 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
