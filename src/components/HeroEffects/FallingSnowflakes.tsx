'use client'

import { useEffect, useState, useMemo } from 'react'

// Generate particles once on module load to avoid reflow
const generateParticles = (count: number, isMobile: boolean) => 
  Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 8}s`,
    duration: `${10 + Math.random() * 10}s`,
    size: isMobile ? 10 + Math.random() * 8 : 12 + Math.random() * 14,
    opacity: `${0.4 + Math.random() * 0.3}`,
  }))

export default function FallingSnowflakes() {
  const [isMobile, setIsMobile] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    // Use matchMedia instead of innerWidth to avoid reflow
    const mediaQuery = window.matchMedia('(max-width: 767px)')
    setIsMobile(mediaQuery.matches)
    setIsClient(true)
    
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  // Memoize particles to avoid regenerating on every render
  const particles = useMemo(() => {
    if (!isClient) return []
    return generateParticles(isMobile ? 12 : 20, isMobile)
  }, [isClient, isMobile])

  if (!isClient || particles.length === 0) return null

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute animate-snowfall will-change-transform"
          style={{
            left: particle.left,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
            opacity: particle.opacity,
          }}
        >
          <div 
            className="text-white"
            style={{ 
              fontSize: `${particle.size}px`,
              textShadow: '0 0 3px rgba(255,255,255,0.5)',
            }}
          >
            ❄
          </div>
        </div>
      ))}
    </div>
  )
}
