'use client'

import { useEffect, useState } from 'react'

export default function SummerBubbles() {
  const [particles, setParticles] = useState<Array<{ 
    id: number
    left: string
    delay: string
    duration: string
    size: string
    opacity: string 
  }>>([])

  useEffect(() => {
    // Generate floating bubbles
    const bubbles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${12 + Math.random() * 18}s`,
      size: `${12 + Math.random() * 20}px`, // Range: 12-32px
      opacity: `${0.15 + Math.random() * 0.25}` // Range: 0.15-0.4
    }))
    setParticles(bubbles)
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
          <div
            style={{
              width: particle.size,
              height: particle.size,
              borderRadius: '50%',
              border: '2px solid rgba(255, 255, 255, 0.6)',
              background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.1))',
              boxShadow: 'inset -2px -2px 4px rgba(255, 255, 255, 0.5)',
            }}
          />
        </div>
      ))}
    </div>
  )
}
