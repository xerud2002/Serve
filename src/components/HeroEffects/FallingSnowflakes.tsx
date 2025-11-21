'use client'

import { useEffect, useState } from 'react'

export default function FallingSnowflakes() {
  const [particles, setParticles] = useState<Array<{ 
    id: number
    left: string
    delay: string
    duration: string
    size: string
    opacity: string
    windIntensity: number
  }>>([])

  useEffect(() => {
    // Generate 6-pointed stars with soft, transparent appearance and varying wind patterns
    const stars = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${8 + Math.random() * 12}s`,
      size: `${12 + Math.random() * 16}px`, // Range: 12-28px
      opacity: `${0.3 + Math.random() * 0.4}`, // Soft transparent range: 0.3-0.7
      windIntensity: Math.random() // 0-1 for different wind patterns
    }))
    setParticles(stars)
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute animate-snowfall"
          style={{
            left: particle.left,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
            opacity: particle.opacity,
            // Add CSS custom property for wind variation
            // @ts-ignore
            '--wind-offset': `${particle.windIntensity * 30 - 15}px`
          }}
        >
          <svg 
            width={particle.size} 
            height={particle.size} 
            viewBox="0 0 24 24" 
            fill="white" 
            xmlns="http://www.w3.org/2000/svg"
            style={{ 
              filter: 'drop-shadow(0 0 2px rgba(255, 255, 255, 0.8))',
              transform: `rotate(${particle.windIntensity * 360}deg)`
            }}
          >
            {/* 6-pointed star (Star of David / hexagram shape) */}
            <path d="M12 2 L14.5 7.5 L20.5 7.5 L16 11.5 L18 17 L12 13.5 L6 17 L8 11.5 L3.5 7.5 L9.5 7.5 Z" />
            <path d="M12 22 L14.5 16.5 L20.5 16.5 L16 12.5 L18 7 L12 10.5 L6 7 L8 12.5 L3.5 16.5 L9.5 16.5 Z" />
          </svg>
        </div>
      ))}
    </div>
  )
}
