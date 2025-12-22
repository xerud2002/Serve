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
          <div className="bg-linear-to-r from-serve-green-500 to-serve-blue-600 rounded-2xl p-8 lg:p-12 text-white shadow-lg">
            <div className="flex items-start gap-6">
              <div className="bg-white/20 rounded-xl p-4 shrink-0">
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

      {/* Latest News from Facebook */}
      <FacebookFeed />

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
              { title: 'Fundraising at Asda Rushden', image: '/images/fundraising/Fundraising-at-Asda-Rushden-scaled.webp' },
              { title: 'Christmas Lights Rushden', image: '/images/donations/Christmas-Lights-Rushden-scaled.webp' }
            ].map((event, index) => (
              <div key={index} className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="relative aspect-4/3 bg-gray-200">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
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
