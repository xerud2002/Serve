import Link from 'next/link'
import Image from 'next/image'
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
import MajorTitle from '@/components/MajorTitle'

export const metadata = generateSEOMetadata(seoConfigs.news)

// Fetch Facebook posts server-side
async function getFacebookPosts() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
    const res = await fetch(`${baseUrl}/api/facebook-posts`, { 
      cache: 'no-store',
      next: { revalidate: 3600 } // Revalidate every hour
    })
    
    if (!res.ok) throw new Error('Failed to fetch')
    
    const data = await res.json()
    return Array.isArray(data?.posts) ? data.posts : []
  } catch (error) {
    console.error('Error fetching Facebook posts:', error)
    return []
  }
}

const featuredNews = {
  id: 1,
  title: 'SERVE Wins Best Homecare Team Award 2024',
  excerpt: 'We are thrilled to announce that SERVE has been awarded "Best Homecare Team, East Midlands" at the prestigious Great British Care Awards 2024. This recognition celebrates our dedicated team&apos;s commitment to providing exceptional care services.',
  category: 'Awards',
  date: 'November 2024',
  readTime: '3 min read',
  featured: true,
  image: '/images/award-ceremony.webp',
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
    excerpt: 'SERVE organised special activities during Mental Health Awareness Week to promote wellbeing and reduce social isolation.',
    category: 'Health & Wellbeing',
    date: 'May 2024',
    readTime: '2 min read',
    icon: HeartIcon
  }
]

const upcomingEvents = [
  {
    title: 'SERVE Community Appeal - Help Us Raise £25,000',
    date: 'Until April 2026',
    time: 'Donate Anytime',
    location: 'Online via JustGiving',
    description: 'Support our Community Appeal to enhance day centre services, expand community programs, and create more opportunities for connection and care across Northamptonshire.',
    link: 'https://www.justgiving.com/campaign/serve-community-appeal',
    isExternal: true,
    featured: true
  },
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

export default async function NewsPage() {
  const facebookPosts = await getFacebookPosts()
  
  // Format Facebook posts as news articles
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-GB', { 
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }
  
  const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))
    
    if (diffInHours < 1) return 'Just now'
    if (diffInHours < 24) return `${diffInHours}h ago`
    if (diffInHours < 48) return 'Yesterday'
    
    const diffInDays = Math.floor(diffInHours / 24)
    if (diffInDays < 7) return `${diffInDays} days ago`
    if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`
    
    return formatDate(dateString)
  }
  
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
            
            <MajorTitle primary="News &" secondary="Events" dark accentClass="text-serve-blue-200" />
            
            <p className="text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              Stay connected with SERVE&apos;s latest news, achievements, events, and community initiatives 
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

      {/* News Articles Grid - From Facebook */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Latest Updates from Facebook</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {facebookPosts.length > 0 ? (
              facebookPosts.slice(0, 4).map((post: any) => {
                const imageUrl = post.full_picture || post.picture
                const postText = post.message || post.story || ''
                const excerpt = postText.length > 200 ? postText.substring(0, 200) + '...' : postText
                
                return (
                  <div 
                    key={post.id} 
                    className="rounded-2xl p-8 shadow-lg bg-gradient-to-r from-blue-50 to-serve-blue-50"
                  >
                    <div className="flex items-start">
                      <div className="rounded-xl p-3 mr-6 bg-blue-600 flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="space-y-2 mb-4 text-gray-700">
                          <div className="flex items-center">
                            <ClockIcon className="w-4 h-4 mr-2 text-blue-600" />
                            <span className="font-medium">{post.created_time ? formatTimeAgo(post.created_time) : 'Recent'}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <CalendarDaysIcon className="w-4 h-4 mr-2 text-blue-600" />
                            <span>{post.created_time ? formatDate(post.created_time) : ''}</span>
                          </div>
                        </div>
                        
                        <p className="leading-relaxed mb-6 text-gray-600">
                          {excerpt}
                        </p>

                        <a
                          href={post.permalink_url || 'https://www.facebook.com/SERVE234'}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                          View on Facebook
                          <ArrowRightIcon className="ml-2 h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                )
              })
            ) : (
              newsArticles.slice(0, 4).map((article) => {
                const IconComponent = article.icon
                return (
                  <div 
                    key={article.id} 
                    className="rounded-2xl p-8 shadow-lg bg-gradient-to-r from-serve-green-50 to-serve-blue-50"
                  >
                    <div className="flex items-start">
                      <div className="rounded-xl p-3 mr-6 bg-serve-blue-600">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-3 text-gray-900">
                          {article.title}
                        </h3>
                        
                        <div className="space-y-2 mb-4 text-gray-700">
                          <div className="flex items-center">
                            <CalendarDaysIcon className="w-4 h-4 mr-2 text-serve-green-600" />
                            <span className="font-medium">{article.date}</span>
                          </div>
                          <div className="flex items-center">
                            <ClockIcon className="w-4 h-4 mr-2 text-serve-green-600" />
                            <span>{article.readTime}</span>
                          </div>
                        </div>
                        
                        <p className="leading-relaxed mb-6 text-gray-600">
                          {article.excerpt}
                        </p>

                        <Link
                          href={`/news/${article.id}`}
                          className="inline-flex items-center bg-serve-blue-600 hover:bg-serve-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                          Read Full Story
                          <ArrowRightIcon className="ml-2 h-5 w-5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              })
            )}
          </div>
          
          {/* Follow on Facebook CTA */}
          {facebookPosts.length > 0 && (
            <div className="text-center mt-12">
              <a
                href="https://www.facebook.com/SERVE234"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
                Follow Us on Facebook for More Updates
                <ArrowRightIcon className="ml-3 h-5 w-5" />
              </a>
            </div>
          )}
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
              <div 
                key={index} 
                className={`rounded-2xl p-8 shadow-lg ${
                  event.featured 
                    ? 'bg-gradient-to-r from-serve-green-500 to-serve-blue-600 text-white col-span-1 lg:col-span-2'
                    : 'bg-gradient-to-r from-serve-green-50 to-serve-blue-50'
                }`}
              >
                <div className="flex items-start">
                  <div className={`rounded-xl p-3 mr-6 ${
                    event.featured ? 'bg-white/20' : 'bg-serve-green-600'
                  }`}>
                    <CalendarDaysIcon className={`w-6 h-6 ${event.featured ? 'text-white' : 'text-white'}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-xl font-bold mb-3 ${event.featured ? 'text-white' : 'text-gray-900'}`}>
                      {event.title}
                    </h3>
                    
                    <div className={`space-y-2 mb-4 ${event.featured ? 'text-white/90' : 'text-gray-700'}`}>
                      <div className="flex items-center">
                        <CalendarDaysIcon className={`w-4 h-4 mr-2 ${event.featured ? 'text-white' : 'text-serve-green-600'}`} />
                        <span className="font-medium">{event.date}</span>
                      </div>
                      <div className="flex items-center">
                        <ClockIcon className={`w-4 h-4 mr-2 ${event.featured ? 'text-white' : 'text-serve-green-600'}`} />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center">
                        <BuildingOffice2Icon className={`w-4 h-4 mr-2 ${event.featured ? 'text-white' : 'text-serve-green-600'}`} />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    
                    <p className={`leading-relaxed mb-6 ${event.featured ? 'text-white/90' : 'text-gray-600'}`}>
                      {event.description}
                    </p>

                    {event.link && event.isExternal && (
                      <a
                        href={event.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-white text-serve-blue-600 hover:bg-gray-100 px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                      >
                        <HeartIcon className="w-5 h-5 mr-2" />
                        Donate Now on JustGiving
                        <ArrowRightIcon className="ml-2 h-5 w-5" />
                      </a>
                    )}
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

      {/* Previous Events Photo Gallery */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-serve-blue-100 text-serve-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <TagIcon className="w-4 h-4 mr-2" />
              Events & Fundraising
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">SERVE Out and About</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              Below are some images from events and fundraising that we&apos;ve been involved in over the last few years.
            </p>
            <p className="text-lg text-gray-500">How many of them did you hear about?</p>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Cloisters Rushden Craft Fair', image: '/images/events/Cloisters-Rushden-craft-fair-scaled.webp' },
              { title: 'Christmas Gifts from Happy Mondays in Rushden', image: '/images/events/Christmas-gifts-from-Happy-Mondays-in-Rushden-scaled.webp' },
              { title: 'Teddy Bear Winners', image: '/images/events/Teddy-Bear-winners-scaled.webp' },
              { title: 'Fundraising at Asda Rushden', image: '/images/events/Fundraising-at-Asda-Rushden-scaled.webp' },
              { title: 'Northamptonshire Chamber of Trade Expo 2024', image: '/images/events/Northamptonshire-Chamber-of-Trade-Expo-2024-scaled.webp' },
              { title: 'Christmas Lights Rushden', image: '/images/events/Christmas-Lights-Rushden-scaled.webp' },
              { title: 'Gen Kitchen Opens Our New Offices', image: '/images/events/Gen-Kitchen-opens-our-new-offices.webp' },
              { title: 'Happy Mondays Rushden Fundraiser', image: '/images/events/Happy-Mondays-Rushden-fundraiser-scaled.webp' },
              { title: 'Support from the Masonic Lodge', image: '/images/events/Support-from-the-Masonic-Lodge.webp' },
              { title: 'Asda Festive Donations', image: '/images/events/Asda-festive-donations-scaled.webp' },
              { title: 'Donations from Our Supporters', image: '/images/events/Donations-from-our-supporters-scaled.webp' },
              { title: 'Support from David Wilson Homes', image: '/images/events/Support-from-David-Wilson-Homes-scaled.webp' },
              { title: 'Gen Kitchen MP Meets Canto Volunteers and SERVE', image: '/images/events/Gen-Kitchen-MP-meets-Canto-volunteers-and-SERVE-2-scaled.webp' },
              { title: 'Christmas 2023 at Wellingborough Swansgate', image: '/images/events/Christmas-2023-at-Wellingborough-Swansgate-scaled.webp' },
              { title: 'Higham Sparkle 2023', image: '/images/events/Higham-Sparkle-2023-scaled.webp' },
              { title: 'Fundraising from the Homemade Bread Company', image: '/images/events/Fundraising-from-the-Homemade-Bread-Company.webp' }
            ].map((event, index) => (
              <div key={index} className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                <div className="relative aspect-[4/3] bg-gray-200">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white font-semibold p-4 w-full text-sm leading-tight">{event.title}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">Want to get involved in our upcoming events?</p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-serve-blue-600 hover:bg-serve-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
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