import Image, { ImageProps } from 'next/image'
import { responsiveSizes } from '@/lib/image-loader'

interface SmartImageProps extends Omit<ImageProps, 'src' | 'alt'> {
  src: string
  alt: string
  layout?: 'card' | 'hero' | 'thumbnail' | 'fullWidth' | 'halfWidth' | 'thirdWidth'
  eager?: boolean // Load immediately (for above-the-fold images)
}

/**
 * Smart Image component with optimized defaults
 * - Automatic sizes based on layout
 * - Lazy loading by default (unless eager=true)
 * - Optimized quality settings
 */
export default function SmartImage({
  src,
  alt,
  layout = 'card',
  eager = false,
  sizes,
  quality,
  ...props
}: SmartImageProps) {
  // Use predefined responsive sizes unless custom sizes provided
  const responsiveSize = sizes || responsiveSizes[layout]

  // Auto quality based on layout
  const autoQuality = quality || (layout === 'thumbnail' ? 75 : layout === 'hero' ? 90 : 85)

  return (
    <Image
      src={src}
      alt={alt}
      sizes={responsiveSize}
      quality={autoQuality}
      loading={eager ? 'eager' : 'lazy'}
      priority={eager}
      {...props}
    />
  )
}
