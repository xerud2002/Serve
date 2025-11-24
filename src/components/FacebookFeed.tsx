'use client'

import { useState, useEffect } from 'react'
import { 
  PhotoIcon, 
  ArrowRightIcon 
} from '@heroicons/react/24/outline'
import Image from 'next/image'

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

  useEffect(() => {
    let cancelled = false
    const fetchPosts = async () => {
      try {
        const res = await fetch('/api/facebook-posts', { cache: 'no-store' })
        const data = await res.json()
        const fetchedPosts: FacebookPost[] = Array.isArray(data?.posts) ? data.posts : []
        if (!cancelled) {
          setPosts(fetchedPosts.length ? fetchedPosts.slice(0, 3) : getFallbackPosts())
        }
      } catch {
        if (!cancelled) {
          setPosts(getFallbackPosts())
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
    const now = Date.now()
    return [
      { 
        id: '1', 
        message: 'A wonderful start to the week at Ron Manning Day Centre! 🌟 Today our members enjoyed gentle exercises, creative crafts, and sharing stories over a delicious hot lunch.',
        picture: '/images/community/bigchat1.webp', 
        created_time: new Date(now - 3 * 60 * 60 * 1000).toISOString(),
        permalink_url: 'https://www.facebook.com/SERVE234' 
      },
      { 
        id: '2', 
        message: 'Thank you to our amazing transport volunteers! 🚐 Today alone we helped 15 people get to medical appointments, shopping trips, and family visits.',
        picture: '/pics/regional-winner.webp', 
        created_time: new Date(now - 1 * 24 * 60 * 60 * 1000).toISOString(),
        permalink_url: 'https://www.facebook.com/SERVE234' 
      },
      { 
        id: '3', 
        message: '💙 Heartwarming feedback: "My SERVE carer has become like family. She helps me stay independent in my own home and always has time for a chat."',
        picture: '/images/serve.webp', 
        created_time: new Date(now - 2 * 24 * 60 * 60 * 1000).toISOString(),
        permalink_url: 'https://www.facebook.com/SERVE234' 
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

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <PhotoIcon className="w-4 h-4 mr-2" />
            Social Media
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-cyan-600">Latest</span>{' '}
            <span className="text-red-600">News</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Follow our journey and see the impact we&apos;re making in the community through our Facebook page.
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {posts.map((post) => {
            const imageUrl = post.full_picture || post.picture
            const postText = post.message || post.story || ''
            
            return (
              <article
                key={post.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200 hover:-translate-y-1"
              >
                {/* Image or Fallback */}
                {imageUrl ? (
                  <div className="relative h-48 bg-gradient-to-br from-blue-100 to-blue-200 overflow-hidden">
                    <Image
                      src={imageUrl}
                      alt={postText.substring(0, 50) || 'Facebook post'}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                ) : (
                  <div className="relative h-32 bg-gradient-to-br from-serve-blue-50 to-serve-blue-100 flex items-center justify-center overflow-hidden">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-3 relative">
                        <Image
                          src="/images/serve.webp"
                          alt="SERVE Logo"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span className="text-serve-blue-800 font-semibold text-sm">SERVE</span>
                    </div>
                  </div>
                )}

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
                      Post
                    </span>
                    <span className="text-gray-500 text-xs">{formatDate(post.created_time)}</span>
                  </div>

                  {postText && (
                    <p className="text-gray-700 mb-4 text-sm leading-relaxed line-clamp-4">
                      {postText}
                    </p>
                  )}

                  <a
                    href={post.permalink_url || 'https://www.facebook.com/SERVE234'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold text-sm group/link"
                    aria-label="View on Facebook"
                  >
                    View on Facebook
                    <ArrowRightIcon className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </article>
            )
          })}
        </div>

        {/* Follow CTA */}
        <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Follow Us on Facebook</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Stay connected with daily updates, event announcements, and heartwarming stories from our community.
          </p>
          
          <div className="flex justify-center gap-8">
            <a
              href="https://www.facebook.com/SERVE234/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
              Follow on Facebook
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}