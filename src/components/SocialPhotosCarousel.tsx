"use client"

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

type Photo = {
  id?: string
  src: string
  width?: number
  height?: number
  caption?: string
  link?: string
  createdAt?: string
}

const staticFallback: Photo[] = [
  { src: '/pics/regional-winner.jpg', caption: 'SERVE regional winner' },
  { src: '/images/serve.png', caption: 'SERVE logo' },
  { src: '/images/serve copy.png', caption: 'SERVE supporting independence' },
  { src: '/images/servewinner .png', caption: 'Great British Care Awards' },
]

export default function SocialPhotosCarousel() {
  const [photos, setPhotos] = useState<Photo[]>([])
  const [active, setActive] = useState(0)
  const scrollerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      try {
        const res = await fetch('/api/facebook-photos', { cache: 'no-store' })
        const data = await res.json()
        const imgs: Photo[] = Array.isArray(data?.images) ? data.images : []
        if (!cancelled) {
          setPhotos(imgs.length ? imgs : staticFallback)
        }
      } catch {
        if (!cancelled) setPhotos(staticFallback)
      }
    })()
    return () => { cancelled = true }
  }, [])

  const total = photos.length

  const scrollToIndex = (idx: number) => {
    const el = scrollerRef.current
    if (!el) return
    const child = el.children[idx] as HTMLElement | undefined
    if (child) {
      child.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' })
      setActive(idx)
    }
  }

  const next = () => scrollToIndex((active + 1) % total)
  const prev = () => scrollToIndex((active - 1 + total) % total)

  // Avoid rendering without images
  if (!total) return null

  return (
    <section aria-labelledby="facebook-photos-heading" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 id="facebook-photos-heading" className="text-3xl font-bold text-gray-900">Latest from Facebook</h2>
          <p className="text-gray-600">Recent photos from our page</p>
        </div>

        <div className="relative">
          {/* Buttons */}
          <button
            type="button"
            aria-label="Previous photo"
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white/90 hover:bg-white shadow-md border border-gray-200 flex items-center justify-center"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-gray-700"><path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <button
            type="button"
            aria-label="Next photo"
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white/90 hover:bg-white shadow-md border border-gray-200 flex items-center justify-center"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-gray-700"><path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>

          {/* Track */}
          <div
            ref={scrollerRef}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-4 pb-4"
            role="region"
            aria-roledescription="carousel"
            aria-label="Facebook photos carousel"
          >
            {photos.map((p, i) => (
              <figure
                key={p.id ?? `${p.src}-${i}`}
                className="snap-start shrink-0 w-[85%] sm:w-[60%] md:w-[45%] lg:w-[33%] xl:w-[28%] bg-white rounded-2xl overflow-hidden shadow border border-gray-100"
              >
                <div className="relative aspect-[4/3] bg-gray-100">
                  <Image src={p.src} alt={p.caption ?? 'Facebook photo'} fill className="object-cover" sizes="(max-width: 640px) 85vw, (max-width: 1024px) 60vw, 33vw" />
                </div>
                {(p.caption || p.createdAt) && (
                  <figcaption className="p-3 text-sm text-gray-700">
                    <div className="line-clamp-2">{p.caption}</div>
                    {p.createdAt && <div className="text-gray-500 text-xs mt-1">{new Date(p.createdAt).toLocaleDateString()}</div>}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4" aria-hidden>
            {photos.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIndex(i)}
                className={`h-2.5 w-2.5 rounded-full ${i === active ? 'bg-serve-blue-600' : 'bg-gray-300'}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
