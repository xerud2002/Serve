"use client"

// Mobile optimization utilities and hooks

import { useState, useEffect } from 'react'

// Hook to detect mobile device and screen size
export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)
  const [screenSize, setScreenSize] = useState({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    const checkIsMobile = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      
      setScreenSize({ width, height })
      setIsMobile(width < 768)
    }

    // Check on mount
    checkIsMobile()

    // Listen for resize events
    window.addEventListener('resize', checkIsMobile)
    
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  return {
    isMobile,
    screenSize,
    isSmall: screenSize.width < 640,
    isMedium: screenSize.width >= 640 && screenSize.width < 1024,
    isLarge: screenSize.width >= 1024,
  }
}

// Hook for mobile-friendly touch interactions
export function useTouchInteractions() {
  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(null)
  const [touchEnd, setTouchEnd] = useState<{ x: number; y: number } | null>(null)

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart({
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY,
    })
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd({
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY,
    })
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distanceX = touchStart.x - touchEnd.x
    const distanceY = touchStart.y - touchEnd.y
    const isLeftSwipe = distanceX > 50
    const isRightSwipe = distanceX < -50
    const isUpSwipe = distanceY > 50
    const isDownSwipe = distanceY < -50

    return {
      isLeftSwipe,
      isRightSwipe,
      isUpSwipe,
      isDownSwipe,
      distanceX,
      distanceY,
    }
  }

  return {
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    touchStart,
    touchEnd,
  }
}

// Mobile-optimized button component
export function MobileButton({
  children,
  onClick,
  variant = 'primary',
  size = 'default',
  fullWidth = false,
  className = '',
  disabled = false,
  ...props
}: {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'small' | 'default' | 'large'
  fullWidth?: boolean
  className?: string
  disabled?: boolean
  [key: string]: any
}) {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 touch-manipulation select-none'
  
  const sizeClasses = {
    small: 'px-4 py-2 text-sm min-h-[40px]',
    default: 'px-6 py-3 text-base min-h-[48px]',
    large: 'px-8 py-4 text-lg min-h-[56px]',
  }
  
  const variantClasses = {
    primary: 'bg-serve-blue-600 hover:bg-serve-blue-700 active:bg-serve-blue-800 text-white shadow-lg hover:shadow-xl',
    secondary: 'bg-serve-green-600 hover:bg-serve-green-700 active:bg-serve-green-800 text-white shadow-lg hover:shadow-xl',
    outline: 'border-2 border-serve-blue-600 text-serve-blue-600 hover:bg-serve-blue-50 active:bg-serve-blue-100',
    ghost: 'text-serve-blue-600 hover:bg-serve-blue-50 active:bg-serve-blue-100',
  }
  
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : 'active:scale-95'
  const widthClasses = fullWidth ? 'w-full' : ''
  
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseClasses}
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${disabledClasses}
        ${widthClasses}
        ${className}
      `.trim()}
      {...props}
    >
      {children}
    </button>
  )
}

// Mobile-optimized card component
export function MobileCard({
  children,
  className = '',
  padding = 'default',
  clickable = false,
  onClick,
}: {
  children: React.ReactNode
  className?: string
  padding?: 'small' | 'default' | 'large'
  clickable?: boolean
  onClick?: () => void
}) {
  const paddingClasses = {
    small: 'p-4',
    default: 'p-6',
    large: 'p-8',
  }
  
  const baseClasses = 'bg-white rounded-2xl shadow-lg border border-gray-100'
  const clickableClasses = clickable 
    ? 'cursor-pointer hover:shadow-xl transition-all duration-200 active:scale-98 touch-manipulation' 
    : ''
  
  const Component = clickable ? 'button' : 'div'
  
  return (
    <Component
      className={`
        ${baseClasses}
        ${paddingClasses[padding]}
        ${clickableClasses}
        ${className}
      `.trim()}
      onClick={onClick}
      type={clickable ? 'button' : undefined}
    >
      {children}
    </Component>
  )
}

// Mobile navigation helper
export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  
  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)
  
  return {
    isOpen,
    toggleMenu,
    closeMenu,
  }
}

// Mobile-specific CSS classes
export const MOBILE_CLASSES = {
  // Touch-friendly sizing
  touchTarget: 'min-h-[44px] min-w-[44px]', // iOS HIG recommendation
  
  // Safe areas for notched devices
  safeAreaTop: 'pt-safe-top',
  safeAreaBottom: 'pb-safe-bottom',
  safeAreaLeft: 'pl-safe-left',
  safeAreaRight: 'pr-safe-right',
  
  // Mobile-optimized spacing
  mobilePadding: 'px-4 sm:px-6 lg:px-8',
  mobileMargin: 'mx-4 sm:mx-6 lg:mx-8',
  
  // Mobile typography
  mobileHeading: 'text-2xl sm:text-3xl lg:text-4xl',
  mobileSubheading: 'text-lg sm:text-xl lg:text-2xl',
  mobileBody: 'text-base sm:text-lg',
  
  // Mobile containers
  mobileContainer: 'max-w-sm sm:max-w-md lg:max-w-4xl xl:max-w-7xl mx-auto',
  
  // Mobile interactions
  mobileHover: 'hover:bg-gray-50 active:bg-gray-100 sm:hover:bg-gray-100',
  mobileFocus: 'focus:ring-2 focus:ring-serve-blue-500 focus:ring-offset-2',
}

// Detect if device supports hover (desktop) or not (mobile/touch)
export function supportsHover(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(hover: hover)').matches
}

// Mobile viewport helper
export function getMobileViewport() {
  if (typeof window === 'undefined') return { width: 0, height: 0 }
  
  return {
    width: window.innerWidth,
    height: window.innerHeight,
    // Account for mobile browser UI
    availableHeight: window.innerHeight - 60, // Rough estimate for browser UI
  }
}