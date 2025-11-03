"use client"

import { Component, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error('BookingManager Error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-6 bg-gray-50 min-h-screen flex items-center justify-center">
          <div className="text-center max-w-md">
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              <strong className="font-bold">Something went wrong!</strong>
              <span className="block sm:inline"> Unable to load the booking manager.</span>
            </div>
            <button
              onClick={() => this.setState({ hasError: false })}
              className="bg-serve-blue-600 hover:bg-serve-blue-700 text-white font-semibold py-2 px-4 rounded"
            >
              Try Again
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}