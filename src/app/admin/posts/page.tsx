'use client'

import { useState, useEffect } from 'react'
import { ArrowLeftIcon, PlusIcon, TrashIcon, PhotoIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'

interface FacebookPost {
  id: string
  message: string
  full_picture?: string
  created_time: string
  permalink_url: string
}

export default function PostsAdmin() {
  const [posts, setPosts] = useState<FacebookPost[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    loadPosts()
  }, [])

  const loadPosts = async () => {
    try {
      const response = await fetch('/api/posts')
      const data = await response.json()
      setPosts(data.posts || [])
    } catch {
      // Error loading posts - will show empty state
    } finally {
      setLoading(false)
    }
  }

  const savePosts = async () => {
    setSaving(true)
    setMessage('')
    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ posts })
      })

      if (response.ok) {
        setMessage('Posts saved successfully!')
      } else {
        const data = await response.json()
        setMessage(`Error: ${data.error}`)
      }
    } catch {
      setMessage('Failed to save posts')
    } finally {
      setSaving(false)
    }
  }

  const addPost = () => {
    const newPost: FacebookPost = {
      id: `239416516576684_${Date.now()}`,
      message: '',
      full_picture: '',
      created_time: new Date().toISOString(),
      permalink_url: 'https://www.facebook.com/SERVE234'
    }
    setPosts([newPost, ...posts])
  }

  const updatePost = (index: number, field: keyof FacebookPost, value: string) => {
    const updated = [...posts]
    updated[index] = { ...updated[index], [field]: value }
    setPosts(updated)
  }

  const deletePost = (index: number) => {
    if (confirm('Are you sure you want to delete this post?')) {
      setPosts(posts.filter((_, i) => i !== index))
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-gray-600">Loading posts...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <Link 
                href="/admin/bookings"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-2"
              >
                <ArrowLeftIcon className="w-4 h-4 mr-2" />
                Back to Admin
              </Link>
              <h1 className="text-3xl font-bold text-gray-900">Manage Facebook Posts</h1>
              <p className="text-gray-600 mt-2">Manually update the posts displayed on the homepage</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={addPost}
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold"
              >
                <PlusIcon className="w-5 h-5 mr-2" />
                Add Post
              </button>
              <button
                onClick={savePosts}
                disabled={saving}
                className="inline-flex items-center bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white px-6 py-2 rounded-lg font-semibold"
              >
                {saving ? 'Saving...' : 'Save All Posts'}
              </button>
            </div>
          </div>
          
          {message && (
            <div className={`mt-4 p-4 rounded-lg ${message.includes('Error') ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
              {message}
            </div>
          )}
        </div>

        {/* Posts List */}
        <div className="space-y-6">
          {posts.length === 0 ? (
            <div className="bg-white rounded-lg shadow-sm p-12 text-center">
              <PhotoIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No posts yet</h3>
              <p className="text-gray-600 mb-6">Click &quot;Add Post&quot; to create your first post</p>
              <button
                onClick={addPost}
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold"
              >
                <PlusIcon className="w-5 h-5 mr-2" />
                Add First Post
              </button>
            </div>
          ) : (
            posts.map((post, index) => (
              <div key={post.id} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Post #{index + 1}</h3>
                  <button
                    onClick={() => deletePost(index)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <TrashIcon className="w-5 h-5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Post Message *
                    </label>
                    <textarea
                      value={post.message}
                      onChange={(e) => updatePost(index, 'message', e.target.value)}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter the post message..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Post ID *
                    </label>
                    <input
                      type="text"
                      value={post.id}
                      onChange={(e) => updatePost(index, 'id', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="239416516576684_1234567890"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Created Time *
                    </label>
                    <input
                      type="datetime-local"
                      value={post.created_time.substring(0, 16)}
                      onChange={(e) => updatePost(index, 'created_time', new Date(e.target.value).toISOString())}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Image URL (optional)
                    </label>
                    <input
                      type="url"
                      value={post.full_picture || ''}
                      onChange={(e) => updatePost(index, 'full_picture', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="https://..."
                    />
                    {post.full_picture && (
                      <div className="mt-2 relative h-32 bg-gray-100 rounded-lg overflow-hidden">
                        <Image 
                          src={post.full_picture} 
                          alt="Preview" 
                          fill
                          className="object-contain"
                          unoptimized
                        />
                      </div>
                    )}
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Facebook Post URL *
                    </label>
                    <input
                      type="url"
                      value={post.permalink_url}
                      onChange={(e) => updatePost(index, 'permalink_url', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="https://www.facebook.com/..."
                    />
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Info Panel */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">How to use:</h3>
          <ul className="space-y-2 text-blue-800">
            <li className="flex items-start">
              <span className="font-semibold mr-2">1.</span>
              <span>Click &quot;Add Post&quot; to create a new post entry</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2">2.</span>
              <span>Fill in the post details (message, image URL from Facebook, post URL)</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2">3.</span>
              <span>Click &quot;Save All Posts&quot; to update the homepage</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2">4.</span>
              <span>Posts are displayed on the homepage in the order shown here (top = newest)</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
