import { 
  TrophyIcon, 
  CalendarDaysIcon,
  ArrowRightIcon 
} from '@heroicons/react/24/outline'
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
      image: 'award-ceremony.webp'
    },

  ]

  const featuredNews = news.find(item => item.featured)
  const regularNews = news.filter(item => !item.featured)

  return (
    <section id="events" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Featured Award - Moved to top */}
        {featuredNews && (
          <div className="mb-8">
            <article className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center mb-6">
                    <div className="bg-yellow-100 rounded-full p-3 mr-4">
                      <featuredNews.icon className="w-8 h-8 text-yellow-600" />
                    </div>
                    <div>
                      <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold">
                        {featuredNews.category}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                    {featuredNews.title}
                  </h3>
                  
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {featuredNews.excerpt}
                  </p>
                  
                  <a
                    href={featuredNews.link}
                    className="group inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 w-fit"
                  >
                    Read Full Story
                    <ArrowRightIcon className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
                
                {/* Image */}
                <div className="bg-gradient-to-br from-serve-blue-100 to-serve-blue-200 h-64 lg:h-full flex items-center justify-center relative overflow-hidden">
                  <Image
                    src="/images/awards/regional-winner.webp"
                    alt="SERVE Regional Winner - Great British Care Awards 2024"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white font-semibold text-center">Great British Care Awards 2024</p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        )}
        
        {/* Regular News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {regularNews.map((item) => {
            const IconComponent = item.icon
            return (
              <article
                key={item.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-serve-blue-200 hover:-translate-y-1"
              >
                {/* Image Placeholder */}
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-48 flex items-center justify-center">
                  <IconComponent className="w-12 h-12 text-gray-600" />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      item.category === 'Award' ? 'bg-yellow-100 text-yellow-800' :
                      item.category === 'Partnership' ? 'bg-green-100 text-green-800' :
                      item.category === 'Events' ? 'bg-purple-100 text-purple-800' :
                      item.category === 'Volunteering' ? 'bg-blue-100 text-blue-800' :
                      'bg-pink-100 text-pink-800'
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
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
