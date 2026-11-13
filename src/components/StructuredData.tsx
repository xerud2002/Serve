import { allServices } from '@/lib/relatedServicesData'

const SITE_URL = 'https://serve.org.uk'
const ORGANISATION_ID = `${SITE_URL}/#organization`

/**
 * Site-wide JSON-LD describing SERVE as an organisation.
 * Search engines and AI assistants quote this as fact, so every value must
 * also be published in the visible content of the site.
 */
export default function StructuredData() {
  const organisation = {
    "@type": ["NGO", "LocalBusiness"],
    "@id": ORGANISATION_ID,
    "name": "SERVE",
    "alternateName": "SERVE Charity",
    "legalName": "SERVE",
    "url": SITE_URL,
    "logo": `${SITE_URL}/images/serve.webp`,
    "image": `${SITE_URL}/images/serve.webp`,
    "description": "SERVE is an award-winning registered charity providing care services to older people and adults with disabilities in Northamptonshire. Winner of Best Homecare Team, East Midlands 2024.",
    "foundingDate": "1980",
    "telephone": "+44-1933-315555",
    "email": "info@serve.org.uk",
    "identifier": [
      {
        "@type": "PropertyValue",
        "propertyID": "Charity Commission for England and Wales registered charity number",
        "value": "1043321"
      },
      {
        "@type": "PropertyValue",
        "propertyID": "Companies House company number",
        "value": "2951827"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "8 West Street",
      "addressLocality": "Rushden",
      "addressRegion": "Northamptonshire",
      "postalCode": "NN10 0RT",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 52.2928,
      "longitude": -0.6024
    },
    "hasMap": "https://maps.google.com/?q=8+West+Street,+Rushden,+NN10+0RT",
    "location": {
      "@type": "Place",
      "name": "The Ron Manning Day and Activity Centre",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "76 Upper Kings Avenue",
        "addressLocality": "Higham Ferrers",
        "addressRegion": "Northamptonshire",
        "postalCode": "NN10 8JZ",
        "addressCountry": "GB"
      }
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+44-1933-315555",
      "contactType": "customer service",
      "email": "info@serve.org.uk",
      "areaServed": "GB",
      "availableLanguage": "English"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "17:00"
    },
    "priceRange": "££",
    "paymentAccepted": "Cash, Cheque, Direct Debit",
    "currenciesAccepted": "GBP",
    "sameAs": [
      "https://www.facebook.com/SERVE234/",
      "https://www.linkedin.com/company/serve-nvca/",
      "https://www.cqc.org.uk/location/1-2165219210",
      "https://www.justgiving.com/charity/serve-jg"
    ],
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Northamptonshire"
    },
    "award": "Best Homecare Team, East Midlands - Great British Care Awards 2024",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Care and community services",
      "itemListElement": allServices.map(service => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.description,
          "url": `${SITE_URL}${service.href}`,
          "provider": { "@id": ORGANISATION_ID },
          "areaServed": {
            "@type": "AdministrativeArea",
            "name": "Northamptonshire"
          }
        }
      }))
    }
  }

  const website = {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    "url": SITE_URL,
    "name": "SERVE",
    "alternateName": "SERVE Charity",
    "inLanguage": "en-GB",
    "publisher": { "@id": ORGANISATION_ID }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [organisation, website]
        }),
      }}
    />
  )
}
