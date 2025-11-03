"use client"

import { useState, useEffect, useRef } from 'react'

interface LazyLoadProps {
  children: React.ReactNode
  height?: string
  className?: string
  rootMargin?: string
  threshold?: number
  placeholder?: React.ReactNode
}

export default function LazyLoad({
  children,
  height = 'auto',
  className = '',
  rootMargin = '50px',
  threshold = 0.1,
  placeholder
}: LazyLoadProps) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [hasLoaded, setHasLoaded] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true)
          setHasLoaded(true)
          observer.disconnect()
        }
      },
      {
        rootMargin,
        threshold
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [rootMargin, threshold])

  return (
    <div
      ref={ref}
      className={className}
      style={{ minHeight: height }}
    >
      {hasLoaded ? (
        children
      ) : (
        placeholder || (
          <div 
            className="flex items-center justify-center bg-gray-100 rounded animate-pulse"
            style={{ height }}
          >
            <div className="text-gray-400 text-sm">Loading...</div>
          </div>
        )
      )}
    </div>
  )
}

// Specialized lazy loading for images
interface LazyImageProps {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
}

export function LazyImage({ src, alt, className = '', width, height }: LazyImageProps) {
  return (
    <LazyLoad
      height={height ? `${height}px` : '200px'}
      placeholder={
        <div 
          className={`bg-gray-200 animate-pulse ${className}`}
          style={{ width, height }}
        >
          <div className="flex items-center justify-center h-full">
            <svg 
              className="w-10 h-10 text-gray-300" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path 
                fillRule="evenodd" 
                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" 
                clipRule="evenodd" 
              />
            </svg>
          </div>
        </div>
      }
    >
      <img 
        src={src} 
        alt={alt} 
        className={className}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
      />
    </LazyLoad>
  )
}