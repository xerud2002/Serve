import Link from 'next/link'
import { ArrowLeftIcon, TrophyIcon, HeartIcon, SparklesIcon, UsersIcon } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/24/solid'
import type { Metadata } from 'next'
import OptimizedImage from '@/components/OptimizedImage'

export const metadata: Metadata = {
  title: 'Great British Care Awards 2024 Winner - Best Homecare Team | SERVE',
  description: 'SERVE wins Best Homecare Team, East Midlands at Great British Care Awards 2024. Celebrating excellence in homecare and our outstanding team in Northamptonshire.',
  keywords: ['Great British Care Awards', 'Best Homecare Team 2024', 'care awards winner', 'homecare excellence', 'SERVE awards', 'East Midlands care awards', 'award-winning homecare', 'care team recognition', 'Northamptonshire care provider'],
  openGraph: {
    title: 'Great British Care Awards 2024 Winner | SERVE',
    description: 'SERVE wins Best Homecare Team, East Midlands at the prestigious Great British Care Awards 2024.',
    url: 'https://serve.org.uk/news/great-british-care-awards',
    siteName: 'SERVE - Supporting Independence',
    locale: 'en_GB',
    type: 'article',
    publishedTime: '2024-10-15T00:00:00.000Z',
    images: [{
      url: '/images/awards/Great-British-Care-Awards-East-Midlands-scaled.webp',
      width: 1200,
      height: 630,
      alt: 'SERVE team at Great British Care Awards 2024',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@serve_charity',
  },
}

export default function GreatBritishCareAwardsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/news" 
            className="inline-flex items-center gap-2 text-serve-blue-600 hover:text-serve-blue-700 font-semibold transition-all hover:gap-3"
          >
            <ArrowLeftIcon className="w-5 h-5" />
            Back to News
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative bg-linear-to-br from-serve-blue-900 via-serve-blue-800 to-serve-blue-900 text-white overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-orange-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center">
            {/* Award Badge with animation */}
            <div className="inline-flex items-center gap-2 bg-linear-to-r from-yellow-400 via-amber-400 to-yellow-500 text-yellow-900 px-8 py-4 rounded-full font-black text-base mb-8 shadow-xl shadow-yellow-500/30 transform hover:scale-105 transition-all duration-300">
              <TrophyIcon className="w-6 h-6" />
              AWARD WINNER 2024
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
              <span className="block bg-linear-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent">
                Best Homecare Team
              </span>
              <span className="block text-3xl md:text-5xl lg:text-6xl mt-4 bg-linear-to-r from-yellow-300 via-amber-300 to-yellow-300 bg-clip-text text-transparent">
                East Midlands
              </span>
            </h1>

            <p className="text-2xl md:text-3xl text-blue-100 font-semibold max-w-3xl mx-auto mb-10">
              Great British Care Awards 2024
            </p>

            {/* 5 Stars */}
            <div className="flex items-center justify-center gap-3 mb-8">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="w-10 h-10 md:w-12 md:h-12 text-yellow-400 drop-shadow-lg animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
              ))}
            </div>

            {/* Award Images */}
            <div className="flex gap-8 justify-center items-center mt-12">
              <div className="relative group">
                <div className="absolute -inset-3 bg-linear-to-r from-yellow-400 to-amber-500 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                <OptimizedImage 
                  src="/images/awards/regional-winner1.webp" 
                  alt="SERVE Regional Winner Badge 1"
                  className="relative w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-2xl"
                  width={160}
                  height={160}
                />
              </div>
              <div className="relative group">
                <div className="absolute -inset-3 bg-linear-to-r from-yellow-400 to-amber-500 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                <OptimizedImage 
                  src="/images/awards/regional-winner2.webp" 
                  alt="SERVE Regional Winner Badge 2"
                  className="relative w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-2xl"
                  width={160}
                  height={160}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Curved divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16 md:h-24 text-gray-50" preserveAspectRatio="none" viewBox="0 0 1200 120">
            <path d="M0,0 C300,100 900,100 1200,0 L1200,120 L0,120 Z" fill="currentColor" />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Publication Date */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold bg-linear-to-r from-serve-blue-100 to-cyan-100 text-serve-blue-800">
            <SparklesIcon className="w-4 h-4 mr-2" />
            November 2024
          </span>
        </div>

        {/* Introduction */}
        <div className="relative mb-20">
          <div className="absolute -inset-4 bg-linear-to-r from-yellow-100 via-amber-50 to-orange-100 rounded-3xl blur-2xl opacity-30" />
          <div className="relative bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
            <p className="text-2xl md:text-3xl text-gray-900 leading-relaxed mb-8 font-semibold">
              We are absolutely thrilled and deeply honored to announce that SERVE has been awarded{' '}
              <span className="bg-linear-to-r from-serve-blue-600 to-cyan-600 bg-clip-text text-transparent font-black">Best Homecare Team, East Midlands</span> at the prestigious{' '}
              <span className="bg-linear-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent font-black">Great British Care Awards 2024</span>.
            </p>
            
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              This incredible achievement is a testament to the dedication, compassion, and professionalism of our 
              entire team. Every day, our care workers go above and beyond to provide exceptional, person-centered 
              care to older people and adults with disabilities across Northamptonshire.
            </p>
          </div>
        </div>

        {/* What This Award Means */}
        <div className="relative mb-20 group">
          <div className="absolute -inset-0.5 bg-linear-to-r from-yellow-400 via-amber-500 to-orange-500 rounded-3xl opacity-20 group-hover:opacity-30 blur transition-opacity duration-300" />
          <div className="relative bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
            <div className="flex items-center gap-4 mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-linear-to-br from-yellow-400 to-amber-500 rounded-2xl blur-lg opacity-50" />
                <div className="relative w-16 h-16 bg-linear-to-br from-yellow-400 to-amber-500 rounded-2xl flex items-center justify-center shadow-xl">
                  <TrophyIcon className="w-9 h-9 text-white" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-black">
                <span className="bg-linear-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">What This Award Means</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                The Great British Care Awards celebrate excellence in the care sector, recognising individuals and 
                teams who make a real difference in people&apos;s lives. Winning this regional award places SERVE among 
                the very best homecare providers in the East Midlands.
              </p>
              
              <p>
                This recognition validates what we&apos;ve always known – our team is truly exceptional. From our dedicated 
                care workers who visit clients in their homes, to our support staff who ensure everything runs smoothly, 
                everyone plays a vital role in delivering outstanding care.
              </p>
            </div>
          </div>
        </div>

        {/* Photo Gallery */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-10">
            <span className="bg-linear-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">Celebrating Our Success</span>
          </h2>
          <div className="relative group">
            <div className="absolute -inset-1 bg-linear-to-r from-yellow-400 via-amber-400 to-orange-400 rounded-3xl opacity-30 group-hover:opacity-40 blur-xl transition-opacity" />
            <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
              <OptimizedImage
                src="/images/awards/regional-winner.webp"
                alt="SERVE Team - Great British Care Awards 2024 Regional Winners"
                className="w-full h-auto"
                width={1200}
                height={800}
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 via-black/50 to-transparent p-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-yellow-400/20 backdrop-blur-md flex items-center justify-center border border-yellow-400/30">
                    <TrophyIcon className="w-7 h-7 text-yellow-400" />
                  </div>
                  <span className="text-yellow-400 font-black text-lg">Award Winner 2024</span>
                </div>
                <h3 className="text-white font-black text-2xl md:text-3xl">Great British Care Awards</h3>
                <p className="text-blue-200 text-lg mt-2">Best Homecare Team, East Midlands</p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Journey */}
        <div className="relative mb-20 group">
          <div className="absolute -inset-0.5 bg-linear-to-r from-serve-blue-400 to-serve-green-400 rounded-3xl opacity-20 group-hover:opacity-30 blur transition-opacity" />
          <div className="relative bg-linear-to-br from-serve-blue-50 to-serve-green-50 rounded-3xl p-8 md:p-12 border border-serve-blue-100">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-linear-to-br from-serve-blue-600 to-serve-green-600 rounded-2xl flex items-center justify-center shadow-xl">
                <SparklesIcon className="w-9 h-9 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-black">
                <span className="bg-linear-to-r from-serve-blue-700 to-serve-green-700 bg-clip-text text-transparent">Over 40 Years of Excellence</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                Since 1983, SERVE has been providing compassionate care and support to our local community. This 
                award represents decades of commitment to person-centered care, continuous improvement, and putting 
                the needs of our clients first.
              </p>
              
              <p>
                We are proud to be a local charity, deeply rooted in Northamptonshire. Our CQC &apos;Good&apos; rating, 
                combined with this prestigious award, demonstrates our unwavering commitment to quality care.
              </p>
            </div>
          </div>
        </div>

        {/* Thank You Section */}
        <div className="relative mb-20 group">
          <div className="absolute -inset-0.5 bg-linear-to-r from-rose-400 via-red-400 to-pink-400 rounded-3xl opacity-20 group-hover:opacity-30 blur transition-opacity" />
          <div className="relative bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
            <div className="flex items-center gap-4 mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-linear-to-br from-rose-400 to-red-500 rounded-2xl blur-lg opacity-50" />
                <div className="relative w-16 h-16 bg-linear-to-br from-rose-400 to-red-500 rounded-2xl flex items-center justify-center shadow-xl">
                  <HeartIcon className="w-9 h-9 text-white" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-black">
                <span className="bg-linear-to-r from-rose-600 to-red-600 bg-clip-text text-transparent">Thank You</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p className="font-semibold text-xl text-gray-900">
                This award belongs to everyone who makes SERVE special:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 bg-serve-green-50 rounded-xl border border-serve-green-100">
                  <span className="text-serve-green-600 text-2xl">✓</span>
                  <span>Our amazing <strong className="text-serve-green-700">care team</strong> who provide compassionate, professional care every single day</span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-serve-blue-50 rounded-xl border border-serve-blue-100">
                  <span className="text-serve-blue-600 text-2xl">✓</span>
                  <span>Our dedicated <strong className="text-serve-blue-700">support staff</strong> who work behind the scenes to ensure everything runs smoothly</span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-purple-50 rounded-xl border border-purple-100">
                  <span className="text-purple-600 text-2xl">✓</span>
                  <span>Our <strong className="text-purple-700">clients and their families</strong> who trust us with their care</span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-amber-50 rounded-xl border border-amber-100">
                  <span className="text-amber-600 text-2xl">✓</span>
                  <span>Our <strong className="text-amber-700">supporters and volunteers</strong> who help us make a difference in the community</span>
                </div>
              </div>
              
              <p className="mt-8 text-2xl font-black text-center">
                <span className="bg-linear-to-r from-serve-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Together, we are making Northamptonshire a better place for everyone.
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="relative overflow-hidden">
          {/* Animated gradient orbs */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-64 h-64 bg-serve-green-400/30 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-serve-blue-400/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          
          <div className="relative bg-linear-to-br from-serve-blue-900 via-serve-blue-800 to-serve-blue-900 rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl border border-serve-blue-700">
            <div className="inline-flex items-center gap-2 bg-yellow-400/20 backdrop-blur-sm text-yellow-200 px-6 py-2 rounded-full font-bold text-sm mb-6 border border-yellow-400/30">
              <TrophyIcon className="w-5 h-5" />
              Award-Winning Care Team
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className="bg-linear-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Experience Award-Winning Care
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              If you or a loved one needs care and support, get in touch with our friendly team today.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/contact"
                className="group inline-flex items-center gap-3 bg-white text-serve-blue-600 px-10 py-5 rounded-2xl font-black text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <UsersIcon className="w-6 h-6" />
                Contact Us
                <ArrowLeftIcon className="w-5 h-5 rotate-180 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a 
                href="tel:01933315555"
                className="group inline-flex items-center gap-3 bg-linear-to-r from-serve-green-500 to-serve-green-600 hover:from-serve-green-600 hover:to-serve-green-700 text-white px-10 py-5 rounded-2xl font-black text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                Call 01933 315555
              </a>
            </div>
          </div>
        </div>
      </article>

      {/* Back to News */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="text-center">
          <Link 
            href="/news" 
            className="inline-flex items-center gap-2 text-serve-blue-600 hover:text-serve-blue-700 font-semibold text-lg transition-colors"
          >
            <ArrowLeftIcon className="w-5 h-5" />
            Read More News
          </Link>
        </div>
      </div>
    </main>
  )
}
