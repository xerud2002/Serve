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

// Mobile-specific CSS classes
export const MOBILE_CLASSES = {
  // Touch-friendly sizing
  touchTarget: 'min-h-11 min-w-11', // iOS HIG recommendation
  
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