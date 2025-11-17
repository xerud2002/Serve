'use client'

import { useEffect, useState } from 'react'

export default function AutumnLeaves() {
  const [particles, setParticles] = useState<Array<{ 
    id: number
    left: string
    delay: string
    duration: string
    size: string
    opacity: string
    rotation: string
    color: string
  }>>([])

  useEffect(() => {
    const colors = ['#d97706', '#ea580c', '#dc2626', '#b45309', '#92400e'] // Autumn colors
    
    // Generate autumn leaves
    const leaves = Array.from({ length: 35 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${12 + Math.random() * 18}s`,
      size: `${14 + Math.random() * 18}px`, // Range: 14-32px
      opacity: `${0.25 + Math.random() * 0.35}`, // Range: 0.25-0.6
      rotation: `${Math.random() * 360}deg`,
      color: colors[Math.floor(Math.random() * colors.length)]
    }))
    setParticles(leaves)
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
            transform: `rotate(${particle.rotation})`,
          }}
        >
          <svg 
            width={particle.size} 
            height={particle.size} 
            viewBox="0 0 24 24" 
            fill={particle.color} 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.67-2.08C6.38 20.3 7 20.5 7.5 20.5c1.93 0 3.5-1.57 3.5-3.5 0-.58-.16-1.12-.42-1.6l1.42-1.42c.48.26 1.02.42 1.6.42 1.93 0 3.5-1.57 3.5-3.5S15.43 7.4 13.5 7.4c-.58 0-1.12.16-1.6.42L10.48 6.4C10.74 5.92 10.9 5.38 10.9 4.8c0-1.93-1.57-3.5-3.5-3.5S3.9 2.87 3.9 4.8c0 .58.16 1.12.42 1.6L3 7.82l2.08.67C5.5 8.7 5.7 9.32 5.7 10c0 1.93 1.57 3.5 3.5 3.5.58 0 1.12-.16 1.6-.42l1.42 1.42c-.26.48-.42 1.02-.42 1.6 0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5c0-1.93-1.57-3.5-3.5-3.5-.58 0-1.12.16-1.6.42l-1.42-1.42c.26-.48.42-1.02.42-1.6 0-.58-.16-1.12-.42-1.6l1.42-1.42c.48.26 1.02.42 1.6.42 1.93 0 3.5-1.57 3.5-3.5S18.93 1.3 17 1.3z" />
          </svg>
        </div>
      ))}
    </div>
  )
}
