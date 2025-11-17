'use client'

import { useEffect, useState } from 'react'

export default function Confetti() {
  const [particles, setParticles] = useState<Array<{ 
    id: number
    left: string
    delay: string
    duration: string
    size: string
    opacity: string
    color: string
    shape: 'rect' | 'circle' | 'triangle'
  }>>([])

  useEffect(() => {
    const colors = ['#ef4444', '#f59e0b', '#10b981', '#3b82f6', '#8b5cf6', '#ec4899', '#f97316']
    const shapes: Array<'rect' | 'circle' | 'triangle'> = ['rect', 'circle', 'triangle']
    
    // Generate colorful confetti
    const confetti = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
      duration: `${6 + Math.random() * 10}s`,
      size: `${8 + Math.random() * 12}px`, // Range: 8-20px
      opacity: `${0.3 + Math.random() * 0.5}`, // Range: 0.3-0.8
      color: colors[Math.floor(Math.random() * colors.length)],
      shape: shapes[Math.floor(Math.random() * shapes.length)]
    }))
    setParticles(confetti)
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
          {particle.shape === 'rect' && (
            <div 
              style={{
                width: particle.size,
                height: `calc(${particle.size} * 1.5)`,
                background: particle.color,
                borderRadius: '2px',
              }}
            />
          )}
          {particle.shape === 'circle' && (
            <div 
              style={{
                width: particle.size,
                height: particle.size,
                background: particle.color,
                borderRadius: '50%',
              }}
            />
          )}
          {particle.shape === 'triangle' && (
            <svg 
              width={particle.size} 
              height={particle.size} 
              viewBox="0 0 24 24" 
              fill={particle.color}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2L22 20H2L12 2Z" />
            </svg>
          )}
        </div>
      ))}
    </div>
  )
}
