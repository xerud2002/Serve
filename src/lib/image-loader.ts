/**
 * Custom image loader configuration for Next.js Image optimization
 * Provides fine-grained control over image quality based on device and format
 */

export interface ImageLoaderProps {
  src: string
  width: number
  quality?: number
}

/**
 * Custom image loader with optimized quality settings
 * - Mobile devices: 75% quality (sufficient for smaller screens)
 * - Desktop devices: 85% quality (balance between quality and file size)
 * - High-res displays: 90% quality
 */
export function optimizedImageLoader({ src, width, quality }: ImageLoaderProps): string {
  // Don't process external URLs or data URLs
  if (src.startsWith('http') || src.startsWith('data:')) {
    return src
  }

  // Auto-adjust quality based on width if not specified
  const autoQuality = quality || getOptimalQuality(width)

  // Build the Next.js internal image optimization URL
  const params = new URLSearchParams({
    url: src,
    w: width.toString(),
    q: autoQuality.toString(),
  })

  return `/_next/image?${params.toString()}`
}

/**
 * Determine optimal quality based on image width
 * Smaller images need less quality since imperfections are less visible
 */
function getOptimalQuality(width: number): number {
  if (width <= 384) return 75  // Thumbnails and small images
  if (width <= 828) return 80  // Mobile devices
  if (width <= 1200) return 85 // Tablets and small desktops
  return 90 // Large displays
}

/**
 * Responsive sizes helper for common layouts
 */
export const responsiveSizes = {
  // Full width on mobile, 50% on desktop
  halfWidth: '(max-width: 768px) 100vw, 50vw',
  
  // Full width on mobile, 33% on desktop (3 column grid)
  thirdWidth: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw',
  
  // Always full width
  fullWidth: '100vw',
  
  // Hero image sizes
  hero: '(max-width: 640px) 256px, (max-width: 1024px) 384px, 512px',
  
  // Card image sizes
  card: '(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px',
  
  // Thumbnail sizes
  thumbnail: '(max-width: 640px) 96px, 128px',
}
