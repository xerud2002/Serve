interface StructuredDataProps {
  type?: 'organization' | 'local-business' | 'service'
}

export default function StructuredData({ type = 'organization' }: StructuredDataProps) {
  const getStructuredData = () => {
    const baseData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "SERVE",
      "legalName": "SERVE",
      "url": "https://serve.org.uk",
      "logo": "https://serve.org.uk/images/serve.webp",
      "image": "https://serve.org.uk/images/serve.webp",
      "description": "SERVE is an award-winning registered charity providing care services to older people and adults with disabilities in Northamptonshire. Winner of Best Homecare Team, East Midlands 2024.",
      "foundingDate": "1980",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "8 West Street",
        "addressLocality": "Rushden",
        "addressRegion": "Northamptonshire",
        "postalCode": "NN10 0RT",
        "addressCountry": "GB"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+44-1933-315555",
        "contactType": "customer service",
        "email": "info@serve.org.uk",
        "availableLanguage": "English"
      },
      "sameAs": [
        "https://www.facebook.com/SERVE234/",
        "https://www.linkedin.com/company/serve-nvca/",
        "https://www.cqc.org.uk/location/1-2165219210"
      ],
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": "Northamptonshire"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": "127",
        "reviewCount": "48"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Margaret T."
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "datePublished": "2024-11-15",
          "reviewBody": "SERVE has been absolutely wonderful for my mother. The carers are compassionate, professional, and always go the extra mile. We couldn't ask for better care."
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "David R."
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "datePublished": "2024-10-22",
          "reviewBody": "Excellent day care service at the Ron Manning Centre. Dad loves going there and has made so many friends. Staff are brilliant."
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Susan H."
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "datePublished": "2024-09-18",
          "reviewBody": "The transport service has been a lifesaver for getting my husband to his hospital appointments. Drivers are so kind and patient."
        }
      ],
      "award": [
        {
          "@type": "Award",
          "name": "Best Homecare Team, East Midlands",
          "awarder": "Great British Care Awards",
          "dateReceived": "2024"
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Care Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Personal & Domestic Care",
              "description": "CQC registered homecare services helping people maintain independence at home",
              "provider": {
                "@type": "Organization",
                "name": "SERVE"
              }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Day Care Services",
              "description": "Ron Manning Day and Activity Centre providing social activities and meals",
              "provider": {
                "@type": "Organization",
                "name": "SERVE"
              }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Community Transport",
              "description": "Medical appointments transport service",
              "provider": {
                "@type": "Organization",
                "name": "SERVE"
              }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Befriending Service",
              "description": "Countywide befriending support for vulnerable adults",
              "provider": {
                "@type": "Organization",
                "name": "SERVE"
              }
            }
          }
        ]
      }
    }

    if (type === 'local-business') {
      return {
        ...baseData,
        "@type": "LocalBusiness",
        "@id": "https://serve.org.uk/#organization",
        "priceRange": "££",
        "paymentAccepted": "Cash, Check, Direct Debit",
        "currenciesAccepted": "GBP",
        "openingHours": "Mo-Fr 09:00-17:00",
        "telephone": "+44-1933-315555",
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 52.2928,
          "longitude": -0.6024
        },
        "hasMap": "https://maps.google.com/?q=8+West+Street,+Rushden,+NN10+0RT"
      }
    }

    return baseData
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData()),
      }}
    />
  )
}