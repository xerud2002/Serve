import { 
  TrophyIcon, 
  ArrowRightIcon,
  SparklesIcon,
  NewspaperIcon
} from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

export default function Events() {
  const news = [
    {
      id: 1,
      title: 'WINNERS AT THE GREAT BRITISH CARE AWARDS',
      excerpt: 'SERVE has been crowned the best homecare team in the East Midlands, recognised for our exceptional dedication to care excellence and community service.',
      category: 'Award',
      icon: TrophyIcon,
      link: '/news/great-british-care-awards',
      featured: true,
      image: 'award-ceremony.webp',
      color: 'from-yellow-400 via-amber-500 to-orange-500'
    },

  ]

  const featuredNews = news.find(item => item.featured)
  const regularNews = news.filter(item => !item.featured)

  return (
    <section id="events" className="relative pt-24 pb-8 overflow-hidden">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-linear-to-b from-gray-50 via-white to-gray-50" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Featured Award - Hero Card */}
        {featuredNews && (
          <div className="mb-16">
            <article className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 group">
              {/* Animated gradient border on hover */}
              <div className="absolute -inset-0.5 bg-linear-to-r from-yellow-400 via-amber-500 to-orange-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
              
              <div className="relative bg-white rounded-3xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Content */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    {/* Trophy animation */}
                    <div className="flex items-center gap-4 mb-8">
                      <div className="relative">
                        <div className="absolute inset-0 bg-linear-to-br from-yellow-400 to-amber-500 rounded-2xl blur animate-pulse" />
                        <div className="relative bg-linear-to-br from-yellow-400 to-amber-500 rounded-2xl p-4">
                          <TrophyIcon className="w-10 h-10 text-white" />
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="bg-linear-to-r from-yellow-100 to-amber-100 text-amber-800 px-5 py-2 rounded-full text-sm font-bold border border-amber-200">
                          🏆 {featuredNews.category}
                        </span>
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-3xl lg:text-4xl font-black mb-6 leading-tight">
                      <span className="bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                        {featuredNews.title}
                      </span>
                    </h3>
                    
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      {featuredNews.excerpt}
                    </p>
                    
                    <a
                      href={featuredNews.link}
                      className="group/btn relative inline-flex items-center gap-3 bg-linear-to-r from-yellow-400 via-amber-500 to-orange-500 hover:from-yellow-500 hover:via-amber-600 hover:to-orange-600 text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-amber-500/25 w-fit overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                      <SparklesIcon className="w-5 h-5 relative z-10" />
                      <span className="relative z-10">Read Full Story</span>
                      <ArrowRightIcon className="ml-2 h-5 w-5 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </div>
                  
                  {/* Image */}
                  <div className="relative h-80 lg:h-full overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-br from-yellow-100 via-amber-50 to-orange-100" />
                    <Image
                      src="/images/awards/regional-winner.webp"
                      alt="SERVE Regional Winner - Great British Care Awards 2024"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Caption */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <TrophyIcon className="w-5 h-5 text-yellow-400" />
                        </div>
                        <p className="text-white font-bold text-lg">Great British Care Awards 2024</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        )}
        
        {/* Regular News Grid */}
        {regularNews.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {regularNews.map((item) => {
              const IconComponent = item.icon
              return (
                <article
                  key={item.id}
                  className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
                >
                  {/* Hover gradient border */}
                  <div className={`absolute -inset-0.5 bg-linear-to-r ${item.color || 'from-blue-400 to-cyan-400'} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm`} />
                  
                  <div className="relative bg-white rounded-2xl overflow-hidden h-full">
                    {/* Image/Icon area */}
                    <div className={`relative h-48 bg-linear-to-br ${item.color ? item.color.replace('from-', 'from-').replace('to-', 'to-') : 'from-gray-100 to-gray-200'}/20 flex items-center justify-center overflow-hidden`}>
                      <div className={`w-20 h-20 rounded-2xl bg-linear-to-br ${item.color || 'from-gray-400 to-gray-500'} flex items-center justify-center shadow-lg`}>
                        <IconComponent className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className={`px-4 py-1.5 rounded-full text-xs font-bold ${
                          item.category === 'Award' ? 'bg-yellow-100 text-yellow-800 border border-yellow-200' :
                          item.category === 'Partnership' ? 'bg-green-100 text-green-800 border border-green-200' :
                          item.category === 'Events' ? 'bg-purple-100 text-purple-800 border border-purple-200' :
                          item.category === 'Volunteering' ? 'bg-blue-100 text-blue-800 border border-blue-200' :
                          'bg-pink-100 text-pink-800 border border-pink-200'
                        }`}>
                          {item.category}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight group-hover:text-serve-blue-800 transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                        {item.excerpt}
                      </p>
                      
                      <a
                        href={item.link}
                        className="inline-flex items-center text-serve-blue-600 hover:text-serve-blue-800 font-semibold text-sm group/link"
                      >
                        Read Full Article
                        <ArrowRightIcon className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        )}

        {/* View All News CTA */}
        <div className="text-center">
          <a
            href="/news"
            className="group inline-flex items-center gap-3 bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-2xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-200 hover:border-gray-300"
          >
            <NewspaperIcon className="w-5 h-5 text-serve-blue-600" />
            <span>View All News & Events</span>
            <ArrowRightIcon className="w-5 h-5 text-gray-400 group-hover:text-serve-blue-600 group-hover:translate-x-1 transition-all" />
          </a>
        </div>
      </div>
    </section>
  )
}
