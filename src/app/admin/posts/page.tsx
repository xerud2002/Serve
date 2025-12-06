'use client'

import { useState, useEffect } from 'react'
import { ArrowLeftIcon, PlusIcon, TrashIcon, PhotoIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'
import { db } from '@/lib/firebase'
import { collection, addDoc, updateDoc, deleteDoc, doc, getDocs, orderBy, query } from 'firebase/firestore'

interface FacebookPost {
  id?: string // Firestore document ID
  postId: string // Facebook-style ID for compatibility
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
      if (!db) {
        setMessage('Firebase is not configured. Please check environment variables.')
        setLoading(false)
        return
      }

      const postsQuery = query(collection(db, 'posts'), orderBy('created_time', 'desc'))
      const querySnapshot = await getDocs(postsQuery)
      const loadedPosts: FacebookPost[] = []
      
      querySnapshot.forEach((doc) => {
        loadedPosts.push({
          id: doc.id,
          ...doc.data()
        } as FacebookPost)
      })
      
      setPosts(loadedPosts)
    } catch (err) {
      console.error('Error loading posts:', err)
      setMessage('Error loading posts from database')
    } finally {
      setLoading(false)
    }
  }

  const savePosts = async () => {
    setSaving(true)
    setMessage('')
    try {
      if (!db) {
        setMessage('Firebase is not configured. Please check environment variables.')
        setSaving(false)
        return
      }

      // Save each post to Firestore
      for (const post of posts) {
        if (post.id) {
          // Update existing post
          const postRef = doc(db, 'posts', post.id)
          await updateDoc(postRef, {
            postId: post.postId,
            message: post.message,
            full_picture: post.full_picture || '',
            created_time: post.created_time,
            permalink_url: post.permalink_url
          })
        } else {
          // Add new post
          await addDoc(collection(db, 'posts'), {
            postId: post.postId,
            message: post.message,
            full_picture: post.full_picture || '',
            created_time: post.created_time,
            permalink_url: post.permalink_url
          })
        }
      }
      
      setMessage('✓ Posts saved successfully! Changes are live immediately.')
      await loadPosts() // Reload to get updated IDs
    } catch (err) {
      console.error('Save error:', err)
      setMessage('Error: Failed to save posts to database')
    } finally {
      setSaving(false)
    }
  }

  const addPost = () => {
    const newPost: FacebookPost = {
      postId: `239416516576684_${Date.now()}`,
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

  const deletePost = async (index: number) => {
    if (confirm('Are you sure you want to delete this post?')) {
      const post = posts[index]
      
      // If post has Firestore ID, delete from database
      if (post.id && db) {
        try {
          await deleteDoc(doc(db, 'posts', post.id))
          setMessage('✓ Post deleted successfully')
        } catch (err) {
          console.error('Delete error:', err)
          setMessage('Error deleting post from database')
          return
        }
      }
      
      // Remove from local state
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
    <div className="min-h-screen bg-gray-50 py-4 sm:py-8">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 mb-4 sm:mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <Link 
                href="/admin/bookings"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-2 text-sm"
              >
                <ArrowLeftIcon className="w-4 h-4 mr-1" />
                Back to Admin
              </Link>
              <h1 className="text-xl sm:text-3xl font-bold text-gray-900">Manage Facebook Posts</h1>
              <p className="text-gray-600 mt-1 text-sm sm:text-base">Manually update the posts displayed on the homepage</p>
            </div>
            <div className="flex gap-2 sm:gap-3">
              <button
                onClick={addPost}
                className="flex-1 sm:flex-none inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-3 sm:px-4 py-2 rounded-lg font-semibold text-sm sm:text-base"
              >
                <PlusIcon className="w-5 h-5 sm:mr-2" />
                <span className="hidden sm:inline">Add Post</span>
                <span className="sm:hidden ml-1">Add</span>
              </button>
              <button
                onClick={savePosts}
                disabled={saving}
                className="flex-1 sm:flex-none inline-flex items-center justify-center bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white px-3 sm:px-6 py-2 rounded-lg font-semibold text-sm sm:text-base"
              >
                {saving ? 'Saving...' : <><span className="hidden sm:inline">Save All Posts</span><span className="sm:hidden">Save</span></>}
              </button>
            </div>
          </div>
          
          {message && (
            <div className={`mt-4 p-3 sm:p-4 rounded-lg text-sm sm:text-base ${message.includes('Error') ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
              {message}
            </div>
          )}
        </div>

        {/* Posts List */}
        <div className="space-y-4 sm:space-y-6">
          {posts.length === 0 ? (
            <div className="bg-white rounded-lg shadow-sm p-8 sm:p-12 text-center">
              <PhotoIcon className="w-12 sm:w-16 h-12 sm:h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">No posts yet</h3>
              <p className="text-gray-600 mb-6 text-sm sm:text-base">Click &quot;Add Post&quot; to create your first post</p>
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
              <div key={post.id || `new-post-${index}`} className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900">Post #{index + 1}</h3>
                    {!post.id && <span className="text-xs text-orange-600 bg-orange-100 px-2 py-1 rounded">New - unsaved</span>}
                  </div>
                  <button
                    onClick={() => deletePost(index)}
                    className="text-red-600 hover:text-red-800 p-2"
                  >
                    <TrashIcon className="w-5 h-5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Post Message *
                    </label>
                    <textarea
                      value={post.message}
                      onChange={(e) => updatePost(index, 'message', e.target.value)}
                      rows={4}
                      className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white text-sm sm:text-base"
                      placeholder="Enter the post message..."
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Post ID *
                      </label>
                      <input
                        type="text"
                        value={post.postId}
                        onChange={(e) => updatePost(index, 'postId', e.target.value)}
                        className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white text-sm sm:text-base"
                        placeholder="239416516576684_1234567890"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Created Time *
                      </label>
                      <input
                        type="datetime-local"
                        value={post.created_time ? post.created_time.substring(0, 16) : ''}
                        onChange={(e) => updatePost(index, 'created_time', new Date(e.target.value).toISOString())}
                        className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white text-sm sm:text-base"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Image URL (optional)
                    </label>
                    <input
                      type="url"
                      value={post.full_picture || ''}
                      onChange={(e) => updatePost(index, 'full_picture', e.target.value)}
                      className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white text-sm sm:text-base"
                      placeholder="https://..."
                    />
                    {post.full_picture && (
                      <div className="mt-2 relative h-24 sm:h-32 bg-gray-100 rounded-lg overflow-hidden">
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

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Facebook Post URL *
                    </label>
                    <input
                      type="url"
                      value={post.permalink_url}
                      onChange={(e) => updatePost(index, 'permalink_url', e.target.value)}
                      className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white text-sm sm:text-base"
                      placeholder="https://www.facebook.com/..."
                    />
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Info Panel */}
        <div className="mt-6 sm:mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6">
          <h3 className="text-base sm:text-lg font-semibold text-blue-900 mb-3">How to use:</h3>
          <ul className="space-y-2 text-blue-800 text-sm sm:text-base">
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
