'use client'

import { useEffect, useState } from 'react'

export default function FloatingHearts() {
  const [particles, setParticles] = useState<Array<{ 
    id: number
    left: string
    delay: string
    duration: string
    size: string
    opacity: string 
  }>>([])

  useEffect(() => {
    // Generate hearts with soft, romantic appearance
    const hearts = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${10 + Math.random() * 15}s`,
      size: `${12 + Math.random() * 16}px`, // Range: 12-28px
      opacity: `${0.15 + Math.random() * 0.25}` // Soft transparent range: 0.15-0.4
    }))
    setParticles(hearts)
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
            fill="#ff6b9d" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>
      ))}
    </div>
  )
}
