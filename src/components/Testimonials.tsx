"use client"

import { useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from '@heroicons/react/24/solid'
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      quote: "SERVE has been absolutely wonderful. The carers are so kind and professional, and they've helped mum stay in her own home with dignity.",
      author: "Sarah M.",
      relation: "Daughter of service user",
      location: "Rushden"
    },
    {
      quote: "I look forward to my carer's visits every day. They're not just professional - they're like family to me now.",
      author: "Harold T.",
      relation: "Service user",
      location: "Wellingborough"  
    },
    {
      quote: "The day centre has given my husband such joy. The staff understand his needs and the activities keep him engaged.",
      author: "Margaret K.",
      relation: "Carer",
      location: "Higham Ferrers"
    }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 bg-gradient-to-br from-serve-blue-50 via-white to-serve-green-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            What Our Families Say
          </h2>
          <p className="text-lg text-gray-600">
            Real experiences from the people we serve
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
            
            {/* Quote Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-serve-blue-100 to-serve-blue-200 flex items-center justify-center">
                <ChatBubbleLeftRightIcon className="w-8 h-8 text-serve-blue-600" />
              </div>
            </div>

            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="w-6 h-6 text-yellow-400" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-center">
              <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed italic">
                &ldquo;{testimonials[currentIndex].quote}&rdquo;
              </p>
              <footer className="text-center">
                <div className="font-bold text-gray-900 text-lg">{testimonials[currentIndex].author}</div>
                <div className="text-sm text-gray-600 mt-1">{testimonials[currentIndex].relation}</div>
                <div className="text-sm text-serve-blue-600 mt-1">{testimonials[currentIndex].location}</div>
              </footer>
            </blockquote>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center hover:bg-serve-blue-50 hover:border-serve-blue-300 transition-all shadow-md"
              aria-label="Previous testimonial"
            >
              <ChevronLeftIcon className="w-6 h-6 text-gray-600" />
            </button>
            
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'w-8 bg-serve-blue-600' 
                      : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center hover:bg-serve-blue-50 hover:border-serve-blue-300 transition-all shadow-md"
              aria-label="Next testimonial"
            >
              <ChevronRightIcon className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}
