'use client'

import { useEffect, useState } from 'react'

export default function FallingStars() {
  const [particles, setParticles] = useState<Array<{ 
    id: number
    left: string
    delay: string
    duration: string
    size: string
    opacity: string 
  }>>([])

  useEffect(() => {
    // Generate stars with soft, transparent appearance
    const stars = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${8 + Math.random() * 12}s`,
      size: `${10 + Math.random() * 14}px`, // Range: 10-24px
      opacity: `${0.2 + Math.random() * 0.3}` // Soft transparent range: 0.2-0.5
    }))
    setParticles(stars)
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute animate-snowfall"
          style={{
            left: particle.left,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
            opacity: particle.opacity,
          }}
        >
          <svg 
            width={particle.size} 
            height={particle.size} 
            viewBox="0 0 24 24" 
            fill="white" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2L13.5 8.5L18.36 5.64L14.5 10.5L21 12L14.5 13.5L18.36 18.36L13.5 15.5L12 22L10.5 15.5L5.64 18.36L9.5 13.5L3 12L9.5 10.5L5.64 5.64L10.5 8.5L12 2Z" />
          </svg>
        </div>
      ))}
    </div>
  )
}
