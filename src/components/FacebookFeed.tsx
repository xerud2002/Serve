'use client'

import { useState, useEffect } from 'react'
import { 
  ArrowRightIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline'
import { SparklesIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import { db } from '@/lib/firebase'
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore'

interface FacebookPost {
  id: string
  message?: string
  story?: string
  created_time?: string
  picture?: string
  full_picture?: string
  permalink_url?: string
}

export default function FacebookFeed() {
  const [posts, setPosts] = useState<FacebookPost[]>([])
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    const fetchPosts = async () => {
      try {
        setIsLoading(true)
        
        // Check if Firebase is configured
        if (!db) {
          console.warn('Firebase not configured, using fallback posts')
          if (!cancelled) {
            setPosts(getFallbackPosts())
          }
          return
        }

        // Load posts from Firestore
        const postsQuery = query(
          collection(db, 'posts'), 
          orderBy('created_time', 'desc'),
          limit(3)
        )
        const querySnapshot = await getDocs(postsQuery)
        const firestorePosts: FacebookPost[] = []
        
        querySnapshot.forEach((doc) => {
          const data = doc.data()
          firestorePosts.push({
            id: data.postId || doc.id,
            message: data.message,
            full_picture: data.full_picture,
            created_time: data.created_time,
            permalink_url: data.permalink_url
          })
        })
        
        if (!cancelled) {
          // If we have posts from Firestore, use them; otherwise show fallback
          setPosts(firestorePosts.length > 0 ? firestorePosts : getFallbackPosts())
          setIsLoading(false)
          
          if (process.env.NODE_ENV === 'development') {
            console.log('[FacebookFeed] Loaded', firestorePosts.length, 'posts from Firestore')
          }
        }
      } catch (error) {
        if (process.env.NODE_ENV === 'development') {
          console.warn('[FacebookFeed] Using fallback posts:', error)
        }
        if (!cancelled) {
          setPosts(getFallbackPosts())
          setIsLoading(false)
        }
      }
    }
    
    // Initial fetch
    fetchPosts()
    
    // Set up hourly refresh (3600000 ms = 1 hour)
    const interval = setInterval(fetchPosts, 3600000)
    
    return () => { 
      cancelled = true
      clearInterval(interval)
    }
  }, [])

  const getFallbackPosts = (): FacebookPost[] => {
    return [
      { 
        id: '239416516576684_1259528296206219', 
        message: 'We\'re excited to announce that Lago Lounge Rushden Lakes have chosen SERVE as their December charity. They\'ve got a whole month of festive fun planned, with every event helping raise funds to support older people, adults with disabilities and their carers in our community. 🎄✨',
        created_time: '2025-11-23T12:52:16+0000',
        permalink_url: 'https://www.facebook.com/1250260380466344/posts/1259528296206219' 
      },
      { 
        id: '239416516576684_1257799823045733', 
        message: 'We\'re sending a very big THANK YOU to Gill Mercer and David Carver for their kindness.❤️ The Day Centre has just received the first items from our wish list and we\'re so excited. Your generosity means so much to us and will make a real difference for everyone who visits.',
        created_time: '2025-11-21T09:14:29+0000',
        permalink_url: 'https://www.facebook.com/1250260380466344/posts/1257799823045733' 
      },
      { 
        id: '239416516576684_1257027946456254', 
        message: '🎄A UNIQUE CHRISTMAS GIFT WHILST ALSO SUPPORTING YOUR COMMUNITY🎄 This isn\'t just a present - it\'s a professionally written and recorded personalised song, created just for you. With a suggested minimum donation of £50, your unforgettable gift also supports our community services.',
        created_time: '2025-11-20T10:44:24+0000',
        permalink_url: 'https://www.facebook.com/1250260380466344/posts/1257027946456254' 
      },
    ]
  }

  const formatDate = (dateString?: string) => {
    if (!dateString) return 'Recent'
    const date = new Date(dateString)
    const now = new Date()
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))
    
    if (diffInHours < 1) return 'Just now'
    if (diffInHours < 24) return `${diffInHours}h ago`
    if (diffInHours < 48) return 'Yesterday'
    
    const diffInDays = Math.floor(diffInHours / 24)
    if (diffInDays < 7) return `${diffInDays}d ago`
    
    return date.toLocaleDateString('en-GB', { 
      day: 'numeric',
      month: 'short',
      year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined
    })
  }

  // Card colors for variety
  const cardColors = [
    { border: 'from-blue-400 to-cyan-400', badge: 'from-blue-500 to-cyan-500', bg: 'from-blue-50 to-cyan-50' },
    { border: 'from-purple-400 to-pink-400', badge: 'from-purple-500 to-pink-500', bg: 'from-purple-50 to-pink-50' },
    { border: 'from-orange-400 to-amber-400', badge: 'from-orange-500 to-amber-500', bg: 'from-orange-50 to-amber-50' },
  ]

  return (
    <section className="relative pt-8 pb-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-gray-50 via-white to-gray-50" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-100 to-cyan-100 text-blue-800 px-5 py-2.5 rounded-full text-sm font-bold mb-6 border border-blue-200">
            <ChatBubbleLeftRightIcon className="w-5 h-5" />
            Social Media Updates
          </div>
          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            <span className="bg-linear-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">Latest</span>{' '}
            <span className="bg-linear-to-r from-orange-500 via-red-500 to-rose-500 bg-clip-text text-transparent">News</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Follow our journey and see the impact we&apos;re making in the community through our Facebook page.
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {posts.map((post, index) => {
            const imageUrl = post.full_picture || post.picture
            const postText = post.message || post.story || ''
            const colors = cardColors[index % cardColors.length]
            
            return (
              <article
                key={post.id}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                {/* Hover gradient border */}
                <div className={`absolute -inset-0.5 bg-linear-to-r ${colors.border} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm`} />
                
                <div className="relative bg-white rounded-2xl overflow-hidden h-full flex flex-col">
                  {/* Image or Fallback */}
                  {imageUrl ? (
                    <div className="relative h-56 bg-gray-100 overflow-hidden">
                      <Image
                        src={imageUrl}
                        alt={postText.substring(0, 50) || 'Facebook post'}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        unoptimized
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  ) : (
                    <div className={`relative h-40 bg-linear-to-br ${colors.bg} flex items-center justify-center overflow-hidden`}>
                      <div className="text-center">
                        <div className="w-20 h-20 mx-auto mb-3 relative">
                          <Image
                            src="/images/serve.webp"
                            alt="SERVE Logo"
                            fill
                            className="object-contain"
                          />
                        </div>
                        <span className="text-serve-blue-800 font-bold text-sm">SERVE</span>
                      </div>
                    </div>
                  )}

                  <div className="p-6 flex flex-col grow">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`bg-linear-to-r ${colors.badge} text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-sm`}>
                        Facebook
                      </span>
                      <span className="text-gray-500 text-sm font-medium">{formatDate(post.created_time)}</span>
                    </div>

                    {postText && (
                      <p className="text-gray-700 mb-4 text-sm leading-relaxed line-clamp-4 grow">
                        {postText}
                      </p>
                    )}

                    <a
                      href={post.permalink_url || 'https://www.facebook.com/SERVE234'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-serve-blue-600 hover:text-serve-blue-800 font-semibold text-sm group/link mt-auto"
                      aria-label="View on Facebook"
                    >
                      View on Facebook
                      <ArrowRightIcon className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        {/* Follow CTA */}
        <div className="relative">
          <div className="absolute -inset-1 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur opacity-25" />
          <div className="relative bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-100 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
            
            <div className="relative text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-linear-to-br from-blue-500 to-blue-600 shadow-lg mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </div>
              
              <h3 className="text-2xl lg:text-3xl font-black text-gray-900 mb-4">
                Follow Us on Facebook
              </h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
                Stay connected with daily updates, event announcements, and heartwarming stories from our community.
              </p>
              
              <a
                href="https://www.facebook.com/SERVE234/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 bg-linear-to-r from-blue-600 via-blue-700 to-blue-600 hover:from-blue-700 hover:via-blue-800 hover:to-blue-700 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-blue-500/25 overflow-hidden"
              >
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <svg className="w-6 h-6 relative z-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
                <span className="relative z-10">Follow on Facebook</span>
                <SparklesIcon className="w-5 h-5 relative z-10 opacity-75" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}