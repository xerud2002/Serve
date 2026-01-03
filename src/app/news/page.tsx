import Link from 'next/link'
import Image from 'next/image'
import { 
  TrophyIcon, 
  HeartIcon,
  ArrowRightIcon,
  CalendarDaysIcon,
  ClockIcon,
  BuildingOffice2Icon,
  TagIcon,
  SparklesIcon,
  NewspaperIcon,
  StarIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid'
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
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-8 leading-tight">
              <span className="block bg-linear-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">News &</span>
              <span className="block bg-linear-to-r from-yellow-300 via-amber-400 to-orange-300 bg-clip-text text-transparent mt-2">Events</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-blue-100/90 max-w-4xl mx-auto leading-relaxed mb-12">
              Stay updated with the latest news, celebrations, and opportunities to get involved with SERVE
            </p>

            {/* Quick stats */}
            <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-6 py-3">
                <div className="text-2xl font-black text-yellow-300">40+</div>
                <div className="text-sm text-blue-200">Years of Service</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-6 py-3">
                <div className="text-2xl font-black text-yellow-300">2024</div>
                <div className="text-sm text-blue-200">Award Winners</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-6 py-3">
                <div className="text-2xl font-black text-yellow-300">CQC</div>
                <div className="text-sm text-blue-200">Good Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News from Facebook */}
      <FacebookFeed />

      {/* Previous Events Gallery */}
      <section className="py-20 lg:py-24 bg-linear-to-br from-white via-gray-50 to-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-purple-100/50 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-blue-100/50 rounded-full blur-3xl translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-linear-to-r from-purple-100 to-blue-100 text-purple-800 px-5 py-2.5 rounded-full text-sm font-bold mb-6 shadow-sm border border-purple-200">
              <TagIcon className="w-4 h-4 mr-2" />
              Community in Action
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className="bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">SERVE Out</span>{' '}
              <span className="bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">and About</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Highlights from our community events, fundraising activities, and celebrations over the years
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              { 
                title: 'Fundraising at Asda Rushden', 
                image: '/images/fundraising/Fundraising-at-Asda-Rushden-scaled.webp',
                description: 'Community fundraising event supporting local care services',
                tag: 'Fundraising'
              },
              { 
                title: 'Christmas Lights Rushden', 
                image: '/images/donations/Christmas-Lights-Rushden-scaled.webp',
                description: 'Celebrating the festive season with our community',
                tag: 'Events'
              }
            ].map((event, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-0.5 bg-linear-to-r from-purple-400 to-blue-400 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur" />
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                  <div className="relative aspect-4/3 bg-gray-200 overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
                    
                    {/* Tag */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                        {event.tag}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-black text-white mb-2">{event.title}</h3>
                      <p className="text-white/90 text-sm">{event.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-linear-to-r from-purple-600 via-blue-600 to-cyan-600 hover:from-purple-700 hover:via-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl shadow-purple-500/30"
            >
              <NewspaperIcon className="w-5 h-5" />
              Get Involved with SERVE
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
