import type { Metadata } from 'next'
import Link from 'next/link'
import {
  TrophyIcon,
  CalendarDaysIcon,
  UserGroupIcon,
  HeartIcon,
  BuildingOffice2Icon,
  HandRaisedIcon,
  ArrowRightIcon,
  ClockIcon,
  TagIcon
} from '@heroicons/react/24/outline'
import NewsletterSignup from '@/components/NewsletterSignup'

import { generateSEOMetadata, seoConfigs } from '@/lib/seo'

export const metadata = generateSEOMetadata(seoConfigs.news)

const featuredNews = {
  id: 1,
  title: 'SERVE Wins Best Homecare Team Award 2024',
  excerpt: 'We are thrilled to announce that SERVE has been awarded "Best Homecare Team, East Midlands" at the prestigious Great British Care Awards 2024. This recognition celebrates our dedicated team\'s commitment to providing exceptional care services.',
  category: 'Awards',
  date: 'November 2024',
  readTime: '3 min read',
  featured: true,
  image: '/images/award-ceremony.jpg',
  content: `
    SERVE is delighted to announce that we have been awarded "Best Homecare Team, East Midlands" at the Great British Care Awards 2024. This prestigious recognition celebrates the exceptional dedication and commitment of our care team in providing outstanding services to vulnerable adults across Northamptonshire.

    The Great British Care Awards recognize excellence in care services across the UK, celebrating the achievements of care professionals who make a real difference in people's lives. Our award acknowledges the hard work, compassion, and professionalism of our entire homecare team.

    "This award belongs to every member of our care team," said our Service Manager. "Their dedication to maintaining the highest standards of care while treating each person with dignity and respect is truly inspiring. This recognition validates the quality of care we provide and motivates us to continue improving."

    Our homecare services have been supporting people to maintain independence in their own homes for over 40 years. We are CQC registered and provide person-centered care that respects individual choice and promotes wellbeing.

    We would like to thank all our clients, families, and staff who contributed to this achievement. Their feedback and support have been instrumental in helping us maintain the high standards that led to this recognition.
  `
}

const newsArticles = [
  {
    id: 2,
    title: 'Ron Manning Day Centre Christmas Celebration 2024',
    excerpt: 'Our annual Christmas celebration brought festive joy to day centre members with entertainment, delicious food, and special guests.',
    category: 'Events',
    date: 'December 2024',
    readTime: '2 min read',
    icon: CalendarDaysIcon
  },
  {
    id: 3,
    title: 'New Community Transport Vehicle',
    excerpt: 'SERVE has acquired a new wheelchair-accessible vehicle to expand our community transport service thanks to local fundraising efforts.',
    category: 'Service Updates',
    date: 'October 2024',
    readTime: '2 min read',
    icon: BuildingOffice2Icon
  },
  {
    id: 4,
    title: 'Volunteer Appreciation Event',
    excerpt: 'We celebrated our amazing volunteers with a special appreciation event recognizing their invaluable contribution to our community.',
    category: 'Community',
    date: 'September 2024',
    readTime: '2 min read',
    icon: HeartIcon
  },
  {
    id: 5,
    title: 'Partnership with Northamptonshire Carers',
    excerpt: 'SERVE has strengthened its partnership with Northamptonshire Carers to provide enhanced support for family carers across the county.',
    category: 'Partnerships',
    date: 'August 2024',
    readTime: '3 min read',
    icon: HandRaisedIcon
  },
  {
    id: 6,
    title: 'Summer Activities Programme Success',
    excerpt: 'Our summer activities programme was a huge success, with day centre members enjoying garden parties, outings, and creative workshops.',
    category: 'Activities',
    date: 'July 2024',
    readTime: '2 min read',
    icon: CalendarDaysIcon
  },
  {
    id: 7,
    title: 'CQC Inspection Results',
    excerpt: 'SERVE maintains its Good rating following the latest CQC inspection, with inspectors praising our person-centered approach to care.',
    category: 'Quality',
    date: 'June 2024',
    readTime: '3 min read',
    icon: TrophyIcon
  },
  {
    id: 8,
    title: 'New Befriending Volunteers Join Team',
    excerpt: 'We welcome 8 new befriending volunteers who have completed their training and are ready to make a difference in their community.',
    category: 'Volunteering',
    date: 'May 2024',
    readTime: '2 min read',
    icon: UserGroupIcon
  },
  {
    id: 9,
    title: 'Mental Health Awareness Week Activities',
    excerpt: 'SERVE organized special activities during Mental Health Awareness Week to promote wellbeing and reduce social isolation.',
    category: 'Health & Wellbeing',
    date: 'May 2024',
    readTime: '2 min read',
    icon: HeartIcon
  }
]

const upcomingEvents = [
  {
    title: 'Volunteer Training Session',
    date: 'January 15, 2025',
    time: '10:00 AM - 2:00 PM',
    location: 'SERVE Head Office',
    description: 'Comprehensive training for new volunteers covering safeguarding, communication skills, and service overview.'
  },
  {
    title: 'Community Coffee Morning',
    date: 'January 22, 2025',
    time: '10:30 AM - 12:00 PM',
    location: 'Ron Manning Day Centre',
    description: 'Monthly coffee morning open to the community. Come and learn about our services and meet our team.'
  },
  {
    title: 'Fundraising Quiz Night',
    date: 'February 5, 2025',
    time: '7:00 PM - 10:00 PM',
    location: 'Rushden Community Centre',
    description: 'Join us for a fun quiz night to raise funds for our community transport service. Teams of up to 6 people.'
  },
  {
    title: 'Annual General Meeting',
    date: 'March 15, 2025',
    time: '2:00 PM - 4:00 PM',
    location: 'SERVE Head Office',
    description: 'Our annual meeting for trustees, stakeholders, and interested community members. All welcome.'
  }
]

const categories = ['All', 'Awards', 'Events', 'Service Updates', 'Community', 'Partnerships', 'Activities', 'Quality', 'Volunteering', 'Health & Wellbeing']

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-serve-blue-900 via-serve-blue-800 to-serve-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-bold mb-8">
              <CalendarDaysIcon className="w-5 h-5 mr-2" />
              Latest Updates
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              News & <span className="text-serve-blue-200">Events</span>
            </h1>
            
            <p className="text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              Stay connected with SERVE's latest news, achievements, events, and community initiatives 
              that are making a difference across Northamptonshire.
            </p>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured News</h2>
            
            <article className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-3xl p-8 lg:p-12 shadow-xl border-l-8 border-yellow-500">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2">
                  <div className="flex items-center mb-6">
                    <TrophyIcon className="w-8 h-8 text-yellow-600 mr-4" />
                    <div>
                      <span className="bg-yellow-200 text-yellow-800 px-4 py-2 rounded-full text-sm font-bold">
                        {featuredNews.category}
                      </span>
                      <div className="text-gray-600 text-sm mt-2 flex items-center">
                        <ClockIcon className="w-4 h-4 mr-1" />
                        {featuredNews.date} • {featuredNews.readTime}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                    {featuredNews.title}
                  </h3>
                  
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    {featuredNews.excerpt}
                  </p>
                  
                  <Link
                    href={`/news/${featuredNews.id}`}
                    className="inline-flex items-center bg-serve-blue-600 hover:bg-serve-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    Read Full Story
                    <ArrowRightIcon className="ml-3 h-5 w-5" />
                  </Link>
                </div>
                
                <div className="bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-2xl h-64 lg:h-full flex items-center justify-center">
                  <div className="text-center text-yellow-800">
                    <TrophyIcon className="w-24 h-24 mx-auto mb-4" />
                    <p className="text-lg font-bold">Great British Care Awards</p>
                    <p className="text-sm">Winner 2024</p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-colors ${
                  category === 'All' 
                    ? 'bg-serve-blue-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-serve-blue-100 hover:text-serve-blue-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Articles Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Recent News</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article) => {
              const IconComponent = article.icon
              return (
                <article
                  key={article.id}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1"
                >
                  {/* Image Placeholder */}
                  <div className="bg-gradient-to-br from-serve-blue-100 to-serve-blue-200 h-48 flex items-center justify-center">
                    <IconComponent className="w-12 h-12 text-serve-blue-600" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        article.category === 'Awards' ? 'bg-yellow-100 text-yellow-800' :
                        article.category === 'Events' ? 'bg-purple-100 text-purple-800' :
                        article.category === 'Service Updates' ? 'bg-blue-100 text-blue-800' :
                        article.category === 'Community' ? 'bg-green-100 text-green-800' :
                        article.category === 'Partnerships' ? 'bg-indigo-100 text-indigo-800' :
                        article.category === 'Activities' ? 'bg-pink-100 text-pink-800' :
                        article.category === 'Quality' ? 'bg-emerald-100 text-emerald-800' :
                        article.category === 'Volunteering' ? 'bg-orange-100 text-orange-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {article.category}
                      </span>
                      <div className="text-gray-500 text-xs flex items-center">
                        <ClockIcon className="w-3 h-3 mr-1" />
                        {article.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-serve-blue-800 transition-colors">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-sm">{article.date}</span>
                      <Link
                        href={`/news/${article.id}`}
                        className="inline-flex items-center text-serve-blue-600 hover:text-serve-blue-800 font-semibold text-sm group/link"
                      >
                        Read More
                        <ArrowRightIcon className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Upcoming Events</h2>
            <p className="text-xl text-gray-600">Join us at our upcoming events and activities</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-gradient-to-r from-serve-green-50 to-serve-blue-50 rounded-2xl p-8 shadow-lg">
                <div className="flex items-start">
                  <div className="bg-serve-green-600 text-white rounded-xl p-3 mr-6">
                    <CalendarDaysIcon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                    
                    <div className="space-y-2 mb-4 text-gray-700">
                      <div className="flex items-center">
                        <CalendarDaysIcon className="w-4 h-4 mr-2 text-serve-green-600" />
                        <span className="font-medium">{event.date}</span>
                      </div>
                      <div className="flex items-center">
                        <ClockIcon className="w-4 h-4 mr-2 text-serve-green-600" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center">
                        <BuildingOffice2Icon className="w-4 h-4 mr-2 text-serve-green-600" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center bg-serve-blue-600 hover:bg-serve-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Get Event Information
              <ArrowRightIcon className="ml-3 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-serve-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <NewsletterSignup variant="inline" />
        </div>
      </section>
    </div>
  )
}