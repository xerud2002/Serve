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
  }>>([])

  useEffect(() => {
    // Generate snowflakes with soft, transparent appearance
    const snowflakes = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${8 + Math.random() * 12}s`,
      size: `${10 + Math.random() * 14}px`, // Range: 10-24px
      opacity: `${0.2 + Math.random() * 0.3}` // Soft transparent range: 0.2-0.5
    }))
    setParticles(snowflakes)
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
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M12 2L12 22M12 2L9 5M12 2L15 5M12 22L9 19M12 22L15 19M2 12L22 12M2 12L5 9M2 12L5 15M22 12L19 9M22 12L19 15M5.64 5.64L18.36 18.36M5.64 5.64L7.05 9.17M5.64 5.64L9.17 7.05M18.36 18.36L16.95 14.83M18.36 18.36L14.83 16.95M18.36 5.64L5.64 18.36M18.36 5.64L14.83 7.05M18.36 5.64L16.95 9.17M5.64 18.36L9.17 16.95M5.64 18.36L7.05 14.83" 
              stroke="white" 
              strokeWidth="1.5" 
              strokeLinecap="round"
            />
          </svg>
        </div>
      ))}
    </div>
  )
}
