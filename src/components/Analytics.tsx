import Script from 'next/script'

interface GoogleAnalyticsProps {
  gaId: string
}

export default function GoogleAnalytics({ gaId }: GoogleAnalyticsProps) {
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
      </Script>
    </>
  )
}

// Optional: Cookie consent component for GDPR compliance
export function CookieConsent() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50" id="cookie-consent">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm">
          <p>
            We use cookies to improve your experience on our site. By continuing to browse, 
            you agree to our use of cookies.{' '}
            <a href="/privacy" className="underline hover:text-gray-300">
              Learn more
            </a>
          </p>
        </div>
        <div className="flex gap-3">
          <button
            className="bg-serve-green-600 hover:bg-serve-green-700 text-white px-4 py-2 rounded-lg text-sm transition-colors"
            onClick={() => {
              document.getElementById('cookie-consent')?.remove()
              localStorage.setItem('cookieConsent', 'accepted')
            }}
          >
            Accept All
          </button>
          <button
            className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm transition-colors"
            onClick={() => {
              document.getElementById('cookie-consent')?.remove()
              localStorage.setItem('cookieConsent', 'rejected')
            }}
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  )
}