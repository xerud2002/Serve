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
      "logo": "https://serve.org.uk/pics/logo.png",
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
      "nonprofitStatus": "Nonprofit501c3Equivalent",
      "taxID": "1043321",
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
              "description": "Medical appointments and family visits transport service",
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
        "@type": ["Organization", "LocalBusiness"],
        "priceRange": "Contact for pricing",
        "paymentAccepted": "Cash, Check, Direct Debit",
        "currenciesAccepted": "GBP",
        "openingHours": "Mo-Fr 09:00-17:00",
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 52.2928,
          "longitude": -0.6024
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Northamptonshire"
        }
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