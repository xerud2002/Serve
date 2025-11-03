'use client'

import { useState } from 'react'
import { 
  CheckCircleIcon, 
  ClockIcon, 
  PlayCircleIcon,
  XMarkIcon,
  ListBulletIcon
} from '@heroicons/react/24/outline'
import { 
  CheckCircleIcon as CheckCircleIconSolid,
  ClockIcon as ClockIconSolid,
  PlayCircleIcon as PlayCircleIconSolid
} from '@heroicons/react/24/solid'

interface TodoItem {
  id: number
  title: string
  description: string
  status: 'completed' | 'in-progress' | 'not-started'
}

const initialTodos: TodoItem[] = [
  {
    id: 1,
    title: 'Complete Homepage Components',
    description: 'Enhanced Hero, Services, About, Awards, News, Contact, and Footer components with modern design, proper SEO, and accessibility features',
    status: 'completed'
  },
  {
    id: 2,
    title: 'Create Dedicated Service Pages',
    description: 'Built services overview page (/services) and individual service pages for Personal Care, Day Care, and Community Transport with detailed information, testimonials, and CTAs',
    status: 'completed'
  },
  {
    id: 3,
    title: 'Build Core Website Pages',
    description: 'Created comprehensive About, Volunteer, and News pages with proper content structure, SEO metadata, and engaging design elements',
    status: 'completed'
  },
  {
    id: 4,
    title: 'Add Contact Form Functionality',
    description: 'Implemented functional contact forms with validation, error handling, success states, and Formspree integration. Created useContactForm hook, validation utilities, and enhanced Contact component with full form functionality.',
    status: 'completed'
  },
  {
    id: 5,
    title: 'Update Volunteer Form',
    description: 'Enhance the volunteer application form with the new validation system and form handling functionality',
    status: 'in-progress'
  },
  {
    id: 6,
    title: 'Add Newsletter Signups',
    description: 'Implement newsletter signup forms across various pages using the form handling system',
    status: 'not-started'
  },
  {
    id: 7,
    title: 'SEO Optimization',
    description: 'Enhance meta tags, structured data, and search optimization across all pages',
    status: 'not-started'
  },
  {
    id: 8,
    title: 'Accessibility Enhancements',
    description: 'Improve WCAG 2.1 AA compliance with better focus management, screen reader support, and keyboard navigation',
    status: 'not-started'
  },
  {
    id: 9,
    title: 'Interactive Features',
    description: 'Add smooth scrolling, animations, and interactive elements for enhanced user experience',
    status: 'not-started'
  },
  {
    id: 10,
    title: 'Mobile Optimization',
    description: 'Fine-tune responsive design and mobile-specific optimizations',
    status: 'not-started'
  },
  {
    id: 11,
    title: 'Testing & Deployment',
    description: 'Comprehensive testing, performance optimization, and deployment preparation',
    status: 'not-started'
  }
]

export default function TodoList() {
  const [todos, setTodos] = useState<TodoItem[]>(initialTodos)
  const [isOpen, setIsOpen] = useState(false)

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircleIconSolid className="h-5 w-5 text-green-600" />
      case 'in-progress':
        return <PlayCircleIconSolid className="h-5 w-5 text-blue-600" />
      case 'not-started':
        return <ClockIconSolid className="h-5 w-5 text-gray-400" />
      default:
        return <ClockIconSolid className="h-5 w-5 text-gray-400" />
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Completed'
      case 'in-progress':
        return 'In Progress'
      case 'not-started':
        return 'Not Started'
      default:
        return 'Unknown'
    }
  }

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800'
      case 'in-progress':
        return 'bg-blue-100 text-blue-800'
      case 'not-started':
        return 'bg-gray-100 text-gray-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const completedCount = todos.filter(todo => todo.status === 'completed').length
  const inProgressCount = todos.filter(todo => todo.status === 'in-progress').length
  const totalCount = todos.length

  if (!isOpen) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-serve-blue-600 hover:bg-serve-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
          title="View Project Progress"
        >
          <ListBulletIcon className="h-6 w-6" />
        </button>
      </div>
    )
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 w-96 max-h-96 bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="bg-serve-blue-600 text-white p-4 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">Project Progress</h3>
          <p className="text-sm opacity-90">
            {completedCount}/{totalCount} completed • {inProgressCount} in progress
          </p>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="text-white hover:text-gray-200 p-1"
        >
          <XMarkIcon className="h-5 w-5" />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
          <span>Overall Progress</span>
          <span>{Math.round((completedCount / totalCount) * 100)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-green-600 h-2 rounded-full transition-all duration-500"
            style={{ width: `${(completedCount / totalCount) * 100}%` }}
          />
        </div>
      </div>

      {/* Todo List */}
      <div className="max-h-60 overflow-y-auto">
        {todos.map((todo) => (
          <div key={todo.id} className="p-3 border-b border-gray-100 hover:bg-gray-50">
            <div className="flex items-start space-x-3">
              <div className="mt-0.5">
                {getStatusIcon(todo.status)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium text-gray-900 truncate">
                    {todo.title}
                  </h4>
                  <span className={`ml-2 px-2 py-1 text-xs font-medium rounded-full ${getStatusBadgeColor(todo.status)}`}>
                    {getStatusText(todo.status)}
                  </span>
                </div>
                <p className="mt-1 text-xs text-gray-500 line-clamp-2">
                  {todo.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}