'use client'

import { useState, useEffect } from 'react'
import { HeartIcon, ChatBubbleLeftIcon, ShareIcon } from '@heroicons/react/24/outline'
import { ClockIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

interface FacebookPost {
  id: string
  message?: string
  story?: string
  created_time: string
  picture?: string
  full_picture?: string
  permalink_url: string
  likes?: {
    summary: {
      total_count: number
    }
  }
  comments?: {
    summary: {
      total_count: number
    }
  }
  shares?: {
    count: number
  }
}

export default function FacebookFeed() {
  const [posts, setPosts] = useState<FacebookPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchFacebookPosts = async () => {
      try {
        const response = await fetch('/api/facebook-posts')
        
        if (!response.ok) {
          throw new Error('Failed to fetch Facebook posts')
        }
        
        const data = await response.json()
        
        // Sort posts by creation date (latest first)
        const sortedPosts = (data.posts || []).sort((a: FacebookPost, b: FacebookPost) => {
          return new Date(b.created_time).getTime() - new Date(a.created_time).getTime()
        })
        
        setPosts(sortedPosts)
      } catch (error) {
        console.error('Error fetching Facebook posts:', error)
        setError('Unable to load Facebook posts at this time.')
        // Show fallback content (also sort by latest first)
        const fallbackPosts = getFallbackPosts().sort((a, b) => {
          return new Date(b.created_time).getTime() - new Date(a.created_time).getTime()
        })
        setPosts(fallbackPosts)
      } finally {
        setLoading(false)
      }
    }

    fetchFacebookPosts()
  }, [])

  const getFallbackPosts = (): FacebookPost[] => {
    const now = Date.now()
    return [
      {
        id: '1',
        message: 'A wonderful start to the week at Ron Manning Day Centre! 🌟 Today our members enjoyed gentle exercises, creative crafts, and sharing stories over a delicious hot lunch. The laughter and friendship in our centre always brightens our day. #CommunitySupport #DayCare',
        created_time: new Date(now - 3 * 60 * 60 * 1000).toISOString(), // 3 hours ago
        picture: '/images/community/bigchat1.jpg',
        permalink_url: 'https://www.facebook.com/SERVE234',
        likes: { summary: { total_count: 28 } },
        comments: { summary: { total_count: 6 } }
      },
      {
        id: '2',
        message: 'Thank you to our amazing transport volunteers! 🚐 Today alone we helped 15 people get to medical appointments, shopping trips, and family visits. Your dedication means independence for so many in our community.',
        created_time: new Date(now - 1 * 24 * 60 * 60 * 1000).toISOString(), // 1 day ago
        picture: '/images/transport/bus.jpg',
        permalink_url: 'https://www.facebook.com/SERVE234',
        likes: { summary: { total_count: 42 } },
        comments: { summary: { total_count: 11 } },
        shares: { count: 5 }
      },
      {
        id: '3',
        message: '💙 Heartwarming feedback received today: "My SERVE carer has become like family. She helps me stay independent in my own home and always has time for a chat." This is exactly why we do what we do. #PersonalCare #Compassion',
        created_time: new Date(now - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days ago
        picture: '/images/care/care1.jpg',
        permalink_url: 'https://www.facebook.com/SERVE234',
        likes: { summary: { total_count: 56 } },
        comments: { summary: { total_count: 14 } }
      },
      {
        id: '4',
        message: 'Exciting news! 🏆 We\'re still celebrating our Great British Care Awards win - Best Homecare Team East Midlands 2024! This recognition belongs to our entire team and the wonderful community we serve.',
        created_time: new Date(now - 4 * 24 * 60 * 60 * 1000).toISOString(), // 4 days ago
        picture: '/images/awards/regional-winner.jpg',
        permalink_url: 'https://www.facebook.com/SERVE234',
        likes: { summary: { total_count: 89 } },
        comments: { summary: { total_count: 23 } },
        shares: { count: 12 }
      },
      {
        id: '5',
        message: 'Our befriending service is making real connections! 🤝 This week we matched another vulnerable adult with a caring volunteer for weekly companionship visits. No one should feel alone in our community.',
        created_time: new Date(now - 6 * 24 * 60 * 60 * 1000).toISOString(), // 6 days ago
        picture: '/images/community/bigchat2.jpg',
        permalink_url: 'https://www.facebook.com/SERVE234',
        likes: { summary: { total_count: 34 } },
        comments: { summary: { total_count: 8 } }
      }
    ]
  }

  const formatDate = (dateString: string) => {
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

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-white rounded-xl p-6 shadow-lg animate-pulse">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
              <div className="flex-1">
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-20"></div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>
            <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
            <div className="flex gap-6">
              <div className="h-4 bg-gray-200 rounded w-16"></div>
              <div className="h-4 bg-gray-200 rounded w-20"></div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (error && posts.length === 0) {
    return (
      <div className="bg-white rounded-xl p-8 shadow-lg text-center">
        <div className="text-gray-400 mb-4">
          <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Facebook Feed Unavailable</h3>
        <p className="text-gray-600 mb-6">{error}</p>
        <a
          href="https://www.facebook.com/SERVE234"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all"
        >
          View on Facebook
        </a>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {posts.map((post) => (
        <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
          {/* Post Header */}
          <div className="p-6 pb-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">SERVE</h3>
                <div className="flex items-center text-gray-500 text-sm">
                  <ClockIcon className="w-4 h-4 mr-1" />
                  {formatDate(post.created_time)}
                </div>
              </div>
            </div>

            {/* Post Content */}
            {(post.message || post.story) && (
              <p className="text-gray-700 leading-relaxed mb-4">
                {post.message || post.story}
              </p>
            )}
          </div>

          {/* Post Image */}
          {(post.picture || post.full_picture) && (
            <div className="relative h-64 bg-gray-100">
              <Image
                src={post.full_picture || post.picture || '/images/placeholder.jpg'}
                alt="Facebook post image"
                fill
                className="object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                }}
              />
            </div>
          )}

          {/* Post Footer */}
          <div className="p-6 pt-4">
            <div className="flex items-center justify-between text-gray-500 text-sm mb-4">
              <div className="flex items-center gap-4">
                {post.likes && (
                  <div className="flex items-center gap-1">
                    <HeartIcon className="w-4 h-4" />
                    <span>{post.likes.summary.total_count}</span>
                  </div>
                )}
                {post.comments && (
                  <div className="flex items-center gap-1">
                    <ChatBubbleLeftIcon className="w-4 h-4" />
                    <span>{post.comments.summary.total_count}</span>
                  </div>
                )}
                {post.shares && (
                  <div className="flex items-center gap-1">
                    <ShareIcon className="w-4 h-4" />
                    <span>{post.shares.count}</span>
                  </div>
                )}
              </div>
            </div>

            <a
              href={post.permalink_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
            >
              View on Facebook
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </article>
      ))}
    </div>
  )
}