'use client'

import { useEffect, useState } from 'react'

export default function SpringFlowers() {
  const [particles, setParticles] = useState<Array<{ 
    id: number
    left: string
    delay: string
    duration: string
    size: string
    opacity: string
    color: string
  }>>([])

  useEffect(() => {
    const colors = ['#fbbf24', '#f472b6', '#a78bfa', '#60a5fa', '#34d399'] // Spring flower colors
    
    // Generate spring flowers/petals
    const flowers = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${10 + Math.random() * 15}s`,
      size: `${10 + Math.random() * 12}px`, // Range: 10-22px
      opacity: `${0.2 + Math.random() * 0.3}`, // Range: 0.2-0.5
      color: colors[Math.floor(Math.random() * colors.length)]
    }))
    setParticles(flowers)
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
            fill={particle.color} 
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* 5-petal flower */}
            <path d="M12 2c-.5 0-1 .5-1 1.5 0 .8.4 1.5 1 1.8.6-.3 1-1 1-1.8 0-1-.5-1.5-1-1.5zM7.5 5.5c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4.6.6 1.3.7 1.8.4-.1-.6-.2-1.3-.4-1.8zM16.5 5.5c-.2.5-.3 1.2-.4 1.8.5.3 1.2.2 1.8-.4.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0zM12 7c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm-6.5 4c-.5.2-1.2.3-1.8.4.3.5.2 1.2-.4 1.8-.4.4-.4 1 0 1.4.4.4 1 .4 1.4 0 .6-.6.7-1.3.4-1.8.8 0 1.5-.4 1.8-1-.3-.6-1-1-1.4-1.8zM18.5 11c-.4.8-1.1 1.2-1.4 1.8.3.6 1 1 1.8 1-.3.5-.2 1.2.4 1.8.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4-.6-.6-.7-1.3-.4-1.8-.6-.1-1.3-.2-1.8-.4zM12 18c-.6.3-1 1-1 1.8 0 1 .5 1.5 1 1.5s1-.5 1-1.5c0-.8-.4-1.5-1-1.8z" />
          </svg>
        </div>
      ))}
    </div>
  )
}
