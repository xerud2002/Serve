"use client"

import Image from 'next/image'
import { useState } from 'react'

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  fill?: boolean
  sizes?: string
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  fill = false,
  sizes,
  placeholder = 'empty',
  blurDataURL
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  // Validate required props
  if (!src || src.trim() === '') {
    return null
  }

  if (!alt || alt.trim() === '') {
    return null
  }

  // Create a simple placeholder blur data URL if none provided
  const defaultBlurDataURL = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSrjjUDRdWMWts/xNWWUD7Q3Ma+0qPa0QrxsQEYfVHlfSNrNscryb9ARXHCD4KyUmZQb4UGFdIrKS5k0T0SdzZpKVn7AQM8VH0RDMfY/WCvGhTZMqiUCgjHfGLaiJBnEh3pwJTpCGbbd/9k='

  const handleLoad = () => {
    setIsLoading(false)
  }

  const handleError = () => {
    setHasError(true)
    setIsLoading(false)
  }

  if (hasError) {
    return (
      <div 
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={{ width, height }}
      >
        <span className="text-gray-500 text-sm">Image not available</span>
      </div>
    )
  }

  const imageProps = {
    src,
    alt,
    className: `transition-opacity duration-300 ${isLoading ? 'opacity-50' : 'opacity-100'} ${className}`,
    onLoad: handleLoad,
    onError: handleError,
    priority,
    placeholder,
    blurDataURL: blurDataURL || defaultBlurDataURL,
    quality: priority ? 90 : 85, // Higher quality for priority images
    loading: priority ? 'eager' as const : 'lazy' as const,
    ...(fill ? { fill: true } : { width, height }),
    ...(sizes && { sizes })
  }

  return <Image {...imageProps} />
}

// Predefined image configurations for SERVE website
export const SERVE_IMAGES = {
  award: {
    src: '/pics/regional-winner.jpg',
    alt: 'SERVE wins Best Homecare Team East Midlands - Great British Care Awards 2024',
    width: 400,
    height: 300
  },
  logo: {
    src: '/images/serve.png',
    alt: 'SERVE charity logo - Supporting Independence',
    width: 400,
    height: 200
  },
  serveLogo: {
    src: '/pics/Serve-Logo.webp',
    alt: 'SERVE charity logo',
    width: 480,
    height: 240
  }
}