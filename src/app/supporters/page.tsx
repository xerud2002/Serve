import Image from 'next/image'
import { Metadata } from 'next'
import MajorTitle from '@/components/MajorTitle'
import OptimizedImage from '@/components/OptimizedImage'

export const metadata: Metadata = {
  title: 'Our Supporters & Donors | Thank You | SERVE Charity',
  description: 'Heartfelt thanks to our supporters, donors, volunteers, and partners. See how local businesses and individuals have helped SERVE support independence in Northamptonshire.',
  keywords: ['charity supporters', 'SERVE donors', 'charity partners Northamptonshire', 'business supporters', 'community donors', 'charity fundraising supporters', 'volunteer appreciation', 'Ricoh', 'David Wilson Homes'],
  alternates: {
    canonical: '/supporters/',
  },
  openGraph: {
    title: 'Our Supporters & Donors | Thank You | SERVE Charity',
    description: 'Heartfelt thanks to our supporters who make our work possible.',
    url: 'https://serve.org.uk/supporters',
    siteName: 'SERVE - Supporting Independence',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@serve_charity',
  },
}

// Fisher-Yates shuffle algorithm
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export default function SupportersPage() {
  const supportersData = [
    // Fundraising Events
    {
      title: "Fundraising at Asda Rushden",
      image: "/images/fundraising/Fundraising-at-Asda-Rushden-scaled.webp",
      description: "Our amazing volunteers collecting donations at Asda Rushden"
    },
    {
      title: "Stroll for SERVE",
      image: "/images/fundraising/Stroll-for-Serve-scaled.webp",
      description: "Community members walking together to support SERVE"
    },
    {
      title: "Party in the Park 2023",
      image: "/images/fundraising/Party-in-the-Park-2023-scaled.webp",
      description: "Fun-filled community celebration supporting our cause"
    },
    {
      title: "Happy Mondays Rushden Fundraiser",
      image: "/images/fundraising/Happy-Mondays-Rushden-fundraiser-scaled.webp",
      description: "Local business partnership raising vital funds"
    },
    {
      title: "Higham Sparkle 2023",
      image: "/images/fundraising/Higham-Sparkle-2023-scaled.webp",
      description: "Magical Christmas event bringing our community together"
    },
    {
      title: "Fundraising from the Homemade Bread Company",
      image: "/images/fundraising/Fundraising-from-the-Homemade-Bread-Company.webp",
      description: "Delicious partnership with local bakers"
    },
    {
      title: "Community Fundraising Event",
      image: "/images/fundraising/fund-rasing2.webp",
      description: "Connecting with supporters across Northamptonshire"
    },
    {
      title: "Summer Fundraising",
      image: "/images/fundraising/WhatsApp Image 2025-07-12 at 11.27.59_e58b5092.webp",
      description: "Supporters gathering to make a difference"
    },
    {
      title: "Community Support Event",
      image: "/images/fundraising/WhatsApp Image 2025-08-03 at 08.56.35_7a0964b4.webp",
      description: "Local community rallying behind SERVE"
    },
    {
      title: "Fundraising Activities",
      image: "/images/fundraising/WhatsApp Image 2025-08-03 at 08.56.35_fcf75e69.webp",
      description: "Creative ways our community supports SERVE"
    },
    // Community Events
    {
      title: "Visit from Liz Kendall to Our Day Centre",
      image: "/images/community/Visit-from-Liz-Kendall-to-our-day-centre.webp",
      description: "Special visit highlighting our community impact"
    },
    {
      title: "Sing for SERVE 2023",
      image: "/images/community/Sing-for-Serve-2023-scaled.webp",
      description: "Musical performances raising spirits and funds"
    },
    {
      title: "SERVE Race Night",
      image: "/images/community/Serve-Race-Night.webp",
      description: "Exciting evening of entertainment and fundraising"
    },
    {
      title: "Community Newsletter Feature",
      image: "/images/community/NEwsletter.webp",
      description: "Sharing our story with the local community"
    },
    {
      title: "Community Engagement",
      image: "/images/community/WhatsApp Image 2025-05-11 at 11.47.19_fa01ef94.webp",
      description: "Building relationships across Northamptonshire"
    },
    // Donations & Support
    {
      title: "Christmas 2023 at Wellingborough Swansgate",
      image: "/images/donations/Christmas-2023-at-Wellingborough-Swansgate-scaled.webp",
      description: "Festive cheer and community spirit"
    },
    {
      title: "Christmas Gifts from Happy Mondays in Rushden",
      image: "/images/donations/Christmas-gifts-from-Happy-Mondays-in-Rushden-scaled.webp",
      description: "Wonderful holiday donations from local business"
    },
    {
      title: "Christmas Lights Rushden",
      image: "/images/donations/Christmas-Lights-Rushden-scaled.webp",
      description: "Community celebration spreading joy"
    },
    {
      title: "Community Spirit",
      image: "/images/donations/community-spirit.webp",
      description: "The heart of our supporter community"
    },
    {
      title: "Donations from Our Supporters",
      image: "/images/donations/Donations-from-our-supporters-scaled.webp",
      description: "Generous contributions making a real difference"
    },
    {
      title: "Partnership with Wellingborough Wills",
      image: "/images/donations/Partnership-with-Wellingborough-Wills-scaled.webp",
      description: "Professional partnerships supporting SERVE"
    },
    {
      title: "Ricoh Christmas Gifts",
      image: "/images/donations/Ricoh-Christmas-gifts.webp",
      description: "Corporate support bringing festive cheer"
    },
    {
      title: "Support from David Wilson Homes",
      image: "/images/donations/Support-from-David-Wilson-Homes-scaled.webp",
      description: "Building partnerships in our community"
    },
    {
      title: "Support from the Masonic Lodge",
      image: "/images/donations/Support-from-the-Masonic-Lodge.webp",
      description: "Community organisations supporting our mission"
    }
  ]

  // Shuffle the supporters array for randomized display
  const supporters = shuffleArray(supportersData)

  return (
    <main className="min-h-screen bg-linear-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-linear-to-br from-serve-blue-900 via-serve-blue-800 to-serve-blue-900 text-white overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-rose-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 -left-40 w-80 h-80 bg-serve-blue-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute -bottom-20 right-1/4 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        </div>

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold bg-linear-to-r from-rose-400 via-pink-400 to-rose-500 text-white shadow-lg shadow-rose-500/25 mb-8">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Thank You to Our Amazing Community
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-linear-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">Our</span>{' '}
            <span className="bg-linear-to-r from-rose-300 via-rose-400 to-rose-300 bg-clip-text text-transparent">Supporters</span>
          </h1>

          <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-blue-100/90 max-w-4xl mx-auto leading-relaxed">
            A heartfelt thank you to everyone who has supported SERVE over the years. Your generosity, time, and dedication make our work possible.
          </p>
        </div>
      </section>

      {/* Welcome Message */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-rose-100/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-100/50 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center bg-linear-to-r from-rose-100 to-pink-50 text-rose-800 px-5 py-2.5 rounded-full text-sm font-semibold mb-6 shadow-sm">
            💝 From Our Hearts
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="bg-linear-to-r from-rose-600 to-pink-500 bg-clip-text text-transparent">A Warm Welcome</span>
          </h2>

          <div className="bg-linear-to-br from-rose-50 via-white to-amber-50 rounded-3xl p-8 md:p-12 shadow-xl border border-rose-100">
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                For over 40 years, SERVE has been fortunate to receive incredible support from individuals,
                businesses, and organisations across Northamptonshire and beyond. Your contributions have helped
                us provide essential care services to older people, adults with disabilities and their carers.
              </p>
              <p>
                Every donation, every volunteer hour, every event attended, and every kind word shared has made
                a real difference in the lives of those we support. This page is a celebration of YOU – our
                supporters who make it all possible.
              </p>
              <p className="text-2xl font-bold pt-4">
                <span className="bg-linear-to-r from-rose-600 to-pink-500 bg-clip-text text-transparent">
                  From the bottom of our hearts, thank you.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Grant-Making Trusts Section */}
      <section className="py-20 lg:py-28 bg-linear-to-br from-purple-50 via-white to-blue-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-100/50 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-linear-to-r from-purple-100 to-blue-50 text-purple-800 px-5 py-2.5 rounded-full text-sm font-semibold mb-6 shadow-sm">
              🏛️ Our Partners in Care
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Grant-Making Trusts</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are deeply grateful to the following trusts and foundations who have supported SERVE generously over many years
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "ADDL",
              "Benham Charitable Settlement",
              "Clothworkers' Foundation",
              "Constance Travis Charitable Trust",
              "Douglas Arter Foundation",
              "Douglas Compton James Charitable Trust",
              "Eric Stanton Northampton Trust",
              "Francis Winham Foundation",
              "Frederick & Phyllis Cann Trust",
              "Garfield Weston Foundation",
              "Margaret Giffen Charitable Trust",
              "Marsh Charitable Trust",
              "Michael Guest Charitable Foundation",
              "Parochial Church Council - Parish Church of St John the Baptist Chelveston",
              "Provincial Grand Charity of Northamptonshire & Huntingdonshire",
              "Sir Derek Greenaway Foundation",
              "Strangward Trust",
              "The W O Street Charitable Foundation",
              "Wolfson Foundation"
            ].map((name, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-purple-50 flex items-center justify-center min-h-25"
              >
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-purple-600 transition-colors text-center">
                  {name}
                </h3>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-linear-to-br from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-100 max-w-3xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed">
                The generous support from these trusts has enabled us to enhance our services, invest in our facilities,
                and expand our reach across Northamptonshire. Their commitment to our mission has been instrumental in
                helping us provide high-quality care and support to those who need it most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 lg:py-28 bg-linear-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-purple-100/40 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-amber-100/40 rounded-full blur-3xl translate-x-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-linear-to-r from-purple-100 to-violet-50 text-purple-800 px-5 py-2.5 rounded-full text-sm font-semibold mb-6 shadow-sm">
              📸 Memories & Milestones
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-linear-to-r from-purple-600 to-violet-500 bg-clip-text text-transparent">Our Journey</span>{' '}
              <span className="bg-linear-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Together</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Celebrating moments of generosity, community spirit, and shared commitment to supporting independence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supporters.map((supporter, index) => {
              const gradients = [
                { border: 'border-rose-200', hoverText: 'text-rose-600' },
                { border: 'border-amber-200', hoverText: 'text-amber-600' },
                { border: 'border-purple-200', hoverText: 'text-purple-600' },
                { border: 'border-serve-blue-200', hoverText: 'text-serve-blue-600' },
                { border: 'border-serve-green-200', hoverText: 'text-serve-green-600' },
                { border: 'border-teal-200', hoverText: 'text-teal-600' },
              ]
              const colors = gradients[index % gradients.length]

              return (
                <div
                  key={index}
                  className={`group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border ${colors.border}`}
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={supporter.image}
                      alt={supporter.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className={`text-xl font-bold text-gray-900 mb-2 group-hover:${colors.hoverText} transition-colors`}>
                      {supporter.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {supporter.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 lg:py-28 bg-linear-to-br from-serve-blue-600 via-serve-blue-700 to-purple-700 text-white relative overflow-hidden">
        {/* Animated decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-rose-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-5 py-2.5 rounded-full text-sm font-semibold mb-6">
            ✨ Be Part of Something Special
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join Our Community of <span className="text-rose-200">Supporters</span>
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-2xl mx-auto">
            Whether through donations, volunteering, or attending our events, there are many ways to support SERVE
            and make a difference in your community.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/donate/"
              className="inline-flex items-center justify-center bg-white text-serve-blue-700 hover:bg-rose-50 px-8 py-4 rounded-2xl text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              <svg className="w-6 h-6 mr-3 text-rose-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg>
              Donate Now
            </a>
            <a
              href="/volunteer/"
              className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-2xl text-lg font-bold transition-all duration-300 border border-white/30"
            >
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Volunteer With Us
            </a>
          </div>
        </div>
      </section>

      {/* Note Section */}
      <section className="py-20 lg:py-28 bg-linear-to-br from-amber-50 via-white to-rose-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-100/50 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-amber-100">
            <div className="bg-linear-to-r from-amber-500 to-orange-500 rounded-2xl p-4 w-fit mx-auto mb-6 shadow-lg">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>

            <h3 className="text-2xl font-bold mb-4">
              <span className="bg-linear-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">Share Your Memories</span>
            </h3>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              This is just the beginning of our supporters gallery. We&apos;ll be adding more photos and stories
              celebrating our community&apos;s generosity and spirit. If you have photos from SERVE events or
              fundraising activities, we&apos;d love to feature them here!
            </p>

            <a
              href="mailto:info@serve.org.uk"
              className="inline-flex items-center bg-linear-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              info@serve.org.uk
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
