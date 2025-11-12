import { 
  TrophyIcon, 
  CalendarDaysIcon,
  ArrowRightIcon 
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import FacebookEvents from '@/components/FacebookEvents'

export default function News() {
  const news = [
    {
      id: 1,
      title: 'WINNERS AT THE GREAT BRITISH CARE AWARDS',
      excerpt: 'SERVE has been crowned the best homecare team in the East Midlands, recognizing our exceptional dedication to care excellence and community service.',
      date: 'October 2024',
      category: 'Award',
      icon: TrophyIcon,
      link: '/news/great-british-care-awards',
      featured: true,
      image: 'award-ceremony.jpg'
    },

  ]

  const featuredNews = news.find(item => item.featured)
  const regularNews = news.filter(item => !item.featured)

  return (
    <section id="news" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-serve-blue-100 text-serve-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <CalendarDaysIcon className="w-4 h-4 mr-2" />
            Latest Updates
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-gray-900">Upcoming &</span>{' '}
            <span className="text-serve-blue-600">Past Events</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay connected with SERVE&apos;s latest achievements, upcoming events, and community initiatives 
            that are making a difference across Northamptonshire.
          </p>
        </div>

        {/* Featured News */}
        {featuredNews && (
          <div className="mb-16">
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
                      <div className="text-gray-500 text-sm mt-2">{featuredNews.date}</div>
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
                    className="group inline-flex items-center bg-serve-blue-600 hover:bg-serve-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 w-fit"
                    aria-label={`Read more about ${featuredNews.title}`}
                  >
                    Read Full Story
                    <ArrowRightIcon className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
                
                {/* Image Placeholder */}
                <div className="bg-gradient-to-br from-serve-blue-100 to-serve-blue-200 h-64 lg:h-full flex items-center justify-center relative overflow-hidden">
                  <Image
                    src="/images/awards/regional-winner.jpg"
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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
                    <span className="text-gray-500 text-xs">{item.date}</span>
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
                    aria-label={`Read more about ${item.title}`}
                  >
                    Read More
                    <ArrowRightIcon className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </article>
            )
          })}
          
          {/* Facebook Events - Dynamically loaded */}
          <FacebookEvents />
        </div>

        {/* Newsletter Signup */}
        <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Don&apos;t miss out on SERVE&apos;s latest news, events, and community updates. 
            Join our mailing list to stay connected with our caring community.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-serve-blue-500 focus:border-transparent"
              aria-label="Email address for newsletter"
            />
            <button
              type="button"
              className="bg-serve-green-600 hover:bg-serve-green-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </div>
          
          <div className="flex justify-center gap-8">
            <a
              href="/news"
              className="inline-flex items-center text-serve-blue-600 hover:text-serve-blue-800 font-semibold"
            >
              View All News
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </a>
            <a
              href="/events"
              className="inline-flex items-center text-serve-green-600 hover:text-serve-green-800 font-semibold"
            >
              Upcoming Events
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}