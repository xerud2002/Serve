'use client'

import { useEffect, useState } from 'react'

export default function FallingSnowflakes() {
  const [particles, setParticles] = useState<Array<{ 
    id: number
    left: string
    delay: string
    duration: string
    size: number
    opacity: string
  }>>([])

  useEffect(() => {
    // Check if mobile for reduced particle count
    const isMobile = window.innerWidth < 768
    const particleCount = isMobile ? 15 : 25
    
    const stars = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 8}s`,
      duration: `${10 + Math.random() * 10}s`,
      size: isMobile ? 10 + Math.random() * 8 : 12 + Math.random() * 14,
      opacity: `${0.4 + Math.random() * 0.3}`,
    }))
    setParticles(stars)
  }, [])

  if (particles.length === 0) return null

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
          {/* Simple 6-pointed snowflake using CSS */}
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
