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
      <section className="relative py-20 lg:py-28 bg-linear-to-br from-serve-blue-900 via-serve-blue-800 to-serve-blue-900 text-white overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 -left-40 w-80 h-80 bg-serve-blue-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute -bottom-20 right-1/4 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-rose-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
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
            <div className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold bg-linear-to-r from-purple-400 via-pink-400 to-purple-500 text-white shadow-lg shadow-purple-500/25 mb-8">
              <CalendarDaysIcon className="w-5 h-5 mr-2" />
              Get Involved
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-linear-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">Events &</span>{' '}
              <span className="bg-linear-to-r from-amber-300 via-orange-400 to-amber-300 bg-clip-text text-transparent">Appeals</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-blue-100/90 max-w-4xl mx-auto leading-relaxed">
              Join us at our upcoming events or support our community appeal to help us continue making a difference
            </p>
          </div>
        </div>
      </section>

      {/* Featured Appeal */}
      <section className="py-20 bg-linear-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-serve-green-100/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-serve-blue-100/50 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="relative">
            <div className="absolute inset-0 bg-linear-to-r from-serve-green-600 via-serve-blue-600 to-serve-blue-700 rounded-3xl blur-xl opacity-30" />
            <div className="relative bg-linear-to-r from-serve-green-500 via-serve-blue-600 to-serve-blue-700 rounded-3xl p-10 lg:p-14 text-white shadow-2xl overflow-hidden">
              {/* Decorative circles */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
              
              <div className="relative flex flex-col lg:flex-row items-start gap-8">
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-5 shrink-0">
                  <CalendarDaysIcon className="w-10 h-10 text-white" />
                </div>
                
                <div className="flex-1">
                  <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                    SERVE Community Appeal - Help Us Raise £25,000
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 flex items-center">
                      <CalendarDaysIcon className="w-5 h-5 mr-3 text-white/80" />
                      <span className="font-medium">Until April 2026</span>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 flex items-center">
                      <ClockIcon className="w-5 h-5 mr-3 text-white/80" />
                      <span>Donate Anytime</span>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 flex items-center">
                      <BuildingOffice2Icon className="w-5 h-5 mr-3 text-white/80" />
                      <span>Online via JustGiving</span>
                    </div>
                  </div>
                  
                  <p className="text-lg mb-8 text-white/90 leading-relaxed max-w-3xl">
                    Support our Community Appeal to enhance day centre services, expand community programmes, and create more opportunities for connection and care across Northamptonshire.
                  </p>

                  <a
                    href="https://www.justgiving.com/campaign/serve-community-appeal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-white text-serve-blue-700 hover:bg-gray-50 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
                  >
                    <HeartIcon className="w-6 h-6 mr-3 text-rose-500" />
                    Donate Now on JustGiving
                    <ArrowRightIcon className="ml-3 h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News from Facebook */}
      <FacebookFeed />

      {/* Previous Events Photo Gallery */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-purple-100/50 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-amber-100/50 rounded-full blur-3xl translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-linear-to-r from-serve-blue-100 to-serve-blue-50 text-serve-blue-800 px-5 py-2.5 rounded-full text-sm font-semibold mb-6 shadow-sm">
              <TagIcon className="w-4 h-4 mr-2" />
              Events & Fundraising
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-linear-to-r from-serve-blue-600 to-cyan-500 bg-clip-text text-transparent">SERVE Out</span>{' '}
              <span className="bg-linear-to-r from-purple-500 to-violet-600 bg-clip-text text-transparent">and About</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Below are some images from events and fundraising that we&apos;ve been involved in over the last few years. How many of them did you hear about?
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Fundraising at Asda Rushden', image: '/images/fundraising/Fundraising-at-Asda-Rushden-scaled.webp' },
              { title: 'Christmas Lights Rushden', image: '/images/donations/Christmas-Lights-Rushden-scaled.webp' }
            ].map((event, index) => (
              <div key={index} className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="relative aspect-4/3 bg-gray-200">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white font-bold p-6 w-full text-lg">{event.title}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/contact"
              className="inline-flex items-center bg-linear-to-r from-serve-blue-600 to-serve-blue-700 hover:from-serve-blue-700 hover:to-serve-blue-800 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl shadow-blue-500/20"
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
