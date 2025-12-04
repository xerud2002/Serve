interface Review {
  author: string
  rating: number // 1-5
  reviewBody: string
  datePublished: string // ISO 8601 format
}

interface ReviewSchemaProps {
  serviceName: string
  aggregateRating?: {
    ratingValue: number
    reviewCount: number
    bestRating?: number
    worstRating?: number
  }
  reviews?: Review[]
}

export default function ReviewSchema({ 
  serviceName, 
  aggregateRating,
  reviews = [] 
}: ReviewSchemaProps) {
  // Don't render if no reviews
  if (!aggregateRating && reviews.length === 0) {
    return null
  }

  const structuredData: any = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "provider": {
      "@type": "Organization",
      "name": "SERVE",
      "url": "https://serve.org.uk",
      "telephone": "+44-1933-315555",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "8 West Street",
        "addressLocality": "Rushden",
        "addressRegion": "Northamptonshire",
        "postalCode": "NN10 0RT",
        "addressCountry": "GB"
      }
    }
  }

  // Add aggregate rating if available
  if (aggregateRating) {
    structuredData.aggregateRating = {
      "@type": "AggregateRating",
      "ratingValue": aggregateRating.ratingValue,
      "reviewCount": aggregateRating.reviewCount,
      "bestRating": aggregateRating.bestRating || 5,
      "worstRating": aggregateRating.worstRating || 1
    }
  }

  // Add individual reviews if available
  if (reviews.length > 0) {
    structuredData.review = reviews.map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating,
        "bestRating": 5,
        "worstRating": 1
      },
      "reviewBody": review.reviewBody,
      "datePublished": review.datePublished
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

/**
 * USAGE EXAMPLE:
 * 
 * // In a service page (e.g., personal-care/page.tsx):
 * import ReviewSchema from '@/components/ReviewSchema'
 * 
 * export default function PersonalCarePage() {
 *   return (
 *     <div>
 *       <ReviewSchema 
 *         serviceName="Personal Care Services"
 *         aggregateRating={{
 *           ratingValue: 4.8,
 *           reviewCount: 47
 *         }}
 *         reviews={[
 *           {
 *             author: "Jane D.",
 *             rating: 5,
 *             reviewBody: "Excellent care service. Staff are compassionate and professional.",
 *             datePublished: "2024-11-15"
 *           },
 *           {
 *             author: "John S.",
 *             rating: 5,
 *             reviewBody: "SERVE has been fantastic for my mother. Highly recommend.",
 *             datePublished: "2024-10-22"
 *           }
 *         ]}
 *       />
 *       
 *       {/* Rest of page content *\/}
 *     </div>
 *   )
 * }
 * 
 * FUTURE INTEGRATION:
 * - Connect to Google Reviews API
 * - Pull CQC reviews
 * - Display on website with review widget
 * - Auto-update structured data from database
 */
