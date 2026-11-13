// Accessibility utility functions and constants

export const ARIA_LABELS = {
  // Navigation
  mainNavigation: 'Main navigation',
  openMenu: 'Open main menu',
  closeMenu: 'Close main menu',
  
  // Forms
  required: 'required',
  optional: 'optional',
  formError: 'Error in form field',
  formSuccess: 'Form submitted successfully',
  
  // Social media
  facebook: 'Visit SERVE on Facebook',
  linkedin: 'Connect with SERVE on LinkedIn',
  
  // Contact
  phoneNumber: 'Call SERVE at 01933 315555',
  emailAddress: 'Email SERVE at info@serve.org.uk',
  
  // Services
  serviceDetails: 'Learn more about this service',
  
  // Newsletter
  newsletterSignup: 'Subscribe to SERVE newsletter',
  
  // General
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
      aria-label={ariaLabel}
    >
      {children}
    </a>
  )
}

import React from 'react'

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