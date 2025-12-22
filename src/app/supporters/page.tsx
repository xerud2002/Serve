import Image from 'next/image'
import { Metadata } from 'next'
import MajorTitle from '@/components/MajorTitle'

export const metadata: Metadata = {
  title: 'Our Supporters | SERVE',
  description: 'A warm welcome and heartfelt thanks to all our supporters, donors, volunteers, and event participants who make SERVE\'s mission possible.',
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
      description: "Community organizations supporting our mission"
    }
  ]

  // Shuffle the supporters array for randomized display
  const supporters = shuffleArray(supportersData)

  return (
    <main className="min-h-screen bg-linear-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-serve-blue-700 via-serve-blue-600 to-serve-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-white/20">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            Thank You to Our Amazing Community
          </div>
          <MajorTitle primary="Our" secondary="Supporters" dark size="large" />
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            A heartfelt thank you to everyone who has supported SERVE over the years. Your generosity, time, and dedication make our work possible.
          </p>
        </div>
      </section>

      {/* Welcome Message */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            A Warm Welcome
          </h2>
          <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
            <p>
              For over 40 years, SERVE has been fortunate to receive incredible support from individuals, 
              businesses, and organizations across Northamptonshire and beyond. Your contributions have helped 
              us provide essential care services to older people, adults with disabilities and their carers.
            </p>
            <p>
              Every donation, every volunteer hour, every event attended, and every kind word shared has made 
              a real difference in the lives of those we support. This page is a celebration of YOU – our 
              supporters who make it all possible.
            </p>
            <p className="text-serve-blue-700 font-semibold text-xl">
              From the bottom of our hearts, thank you.
            </p>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey Together
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Celebrating moments of generosity, community spirit, and shared commitment to supporting independence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supporters.map((supporter, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={supporter.image}
                    alt={supporter.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-serve-blue-700 transition-colors">
                    {supporter.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {supporter.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-linear-to-br from-serve-blue-700 to-serve-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Community of Supporters
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Whether through donations, volunteering, or attending our events, there are many ways to support SERVE 
            and make a difference in your community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/donate"
              className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg>
              Donate
            </a>
            <a
              href="/volunteer"
              className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-serve-blue-700 px-8 py-4 rounded-lg text-lg font-bold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Volunteer With Us
            </a>
          </div>
        </div>
      </section>

      {/* Note Section */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-xl p-8 shadow-md">
            <svg className="w-12 h-12 mx-auto text-serve-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p className="text-lg text-gray-700 leading-relaxed">
              This is just the beginning of our supporters gallery. We&apos;ll be adding more photos and stories 
              celebrating our community&apos;s generosity and spirit. If you have photos from SERVE events or 
              fundraising activities, we&apos;d love to feature them here! info@serve.org.uk
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
