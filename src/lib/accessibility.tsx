// Accessibility utility functions and constants

export const ARIA_LABELS = {
  // Navigation
  mainNavigation: 'Main navigation',
  skipToContent: 'Skip to main content',
  openMenu: 'Open main menu',
  closeMenu: 'Close main menu',
  
  // Forms
  required: 'required',
  optional: 'optional',
  formError: 'Error in form field',
  formSuccess: 'Form submitted successfully',
  
  // Social media
  facebook: 'Visit SERVE Facebook page (opens in new window)',
  linkedin: 'Visit SERVE LinkedIn page (opens in new window)',
  
  // Contact
  phoneNumber: 'Call SERVE at 01933 315555',
  emailAddress: 'Email SERVE at info@serve.org.uk',
  
  // Services
  serviceDetails: 'Learn more about this service',
  
  // Newsletter
  newsletterSignup: 'Subscribe to SERVE newsletter',
  
  // General
  externalLink: 'Opens in new window',
  loading: 'Loading...',
  close: 'Close',
  search: 'Search',
}

export const FOCUS_STYLES = {
  default: 'focus:outline-none focus:ring-2 focus:ring-serve-blue-500 focus:ring-offset-2',
  button: 'focus:outline-none focus:ring-2 focus:ring-serve-blue-500 focus:ring-offset-2 focus:ring-offset-white',
  link: 'focus:outline-none focus:ring-2 focus:ring-serve-blue-500 focus:ring-offset-2 focus:underline',
  input: 'focus:outline-none focus:ring-2 focus:ring-serve-blue-500 focus:border-serve-blue-500',
}

// Skip to content component for keyboard navigation
export function SkipToContent() {
  return (
    <a
      href="#main-content"
      className={`sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-serve-blue-600 text-white px-4 py-2 rounded-md z-50 ${FOCUS_STYLES.link}`}
    >
      {ARIA_LABELS.skipToContent}
    </a>
  )
}

// Screen reader only text component
export function ScreenReaderOnly({ children }: { children: React.ReactNode }) {
  return <span className="sr-only">{children}</span>
}

// Accessible external link component
export function ExternalLink({ 
  href, 
  children, 
  className = '',
  ariaLabel 
}: { 
  href: string
  children: React.ReactNode
  className?: string
  ariaLabel?: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${className} ${FOCUS_STYLES.link}`}
      aria-label={ariaLabel || `${children} ${ARIA_LABELS.externalLink}`}
    >
      {children}
      <ScreenReaderOnly> (opens in new window)</ScreenReaderOnly>
    </a>
  )
}

import React from 'react'

// Accessible button component
export const AccessibleButton = React.forwardRef<
  HTMLButtonElement,
  {
    children: React.ReactNode
    onClick?: () => void
    className?: string
    ariaLabel?: string
    ariaExpanded?: boolean
    ariaControls?: string
    disabled?: boolean
    type?: 'button' | 'submit' | 'reset'
  }
>(({
  children,
  onClick,
  className = '',
  ariaLabel,
  ariaExpanded,
  ariaControls,
  disabled = false,
  type = 'button'
}, ref) => {
  return (
    <button
      ref={ref}
      type={type}
      onClick={onClick}
      className={`${className} ${FOCUS_STYLES.button} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      aria-label={ariaLabel}
      aria-expanded={ariaExpanded}
      aria-controls={ariaControls}
      disabled={disabled}
    >
      {children}
    </button>
  )
})

AccessibleButton.displayName = 'AccessibleButton'

// Color contrast checker (for development)
export function getContrastRatio(color1: string, color2: string): number {
  // This is a simplified version - in production, you'd use a proper color contrast library
  // Returns a ratio that should be >= 4.5 for AA compliance, >= 7 for AAA
  return 4.5 // Placeholder - implement proper calculation if needed
}

// Keyboard navigation helpers
export const KEYBOARD_KEYS = {
  ENTER: 'Enter',
  SPACE: ' ',
  ESCAPE: 'Escape',
  ARROW_UP: 'ArrowUp',
  ARROW_DOWN: 'ArrowDown',
  ARROW_LEFT: 'ArrowLeft',
  ARROW_RIGHT: 'ArrowRight',
  TAB: 'Tab',
  HOME: 'Home',
  END: 'End',
}

export function handleKeyboardNavigation(
  event: React.KeyboardEvent,
  onEnter?: () => void,
  onSpace?: () => void,
  onEscape?: () => void
) {
  switch (event.key) {
    case KEYBOARD_KEYS.ENTER:
      if (onEnter) {
        event.preventDefault()
        onEnter()
      }
      break
    case KEYBOARD_KEYS.SPACE:
      if (onSpace) {
        event.preventDefault()
        onSpace()
      }
      break
    case KEYBOARD_KEYS.ESCAPE:
      if (onEscape) {
        event.preventDefault()
        onEscape()
      }
      break
  }
}