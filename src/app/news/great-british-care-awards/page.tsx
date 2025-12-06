import Link from 'next/link'
import { ArrowLeftIcon, TrophyIcon, StarIcon, HeartIcon } from '@heroicons/react/24/outline'
import type { Metadata } from 'next'
import MajorTitle from '@/components/MajorTitle'

export const metadata: Metadata = {
  title: 'Great British Care Awards 2024 - Best Homecare Team Winner | SERVE',
  description: 'SERVE wins Best Homecare Team, East Midlands at the Great British Care Awards 2024. Celebrating excellence in care and our dedicated team.',
}

export default function GreatBritishCareAwardsPage() {
  return (
    <main className="min-h-screen bg-linear-to-b from-blue-50 via-white to-green-50">
      {/* Back Button */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/news" 
            className="inline-flex items-center gap-2 text-serve-blue-600 hover:text-serve-blue-700 font-semibold transition-colors"
          >
            <ArrowLeftIcon className="w-5 h-5" />
            Back to News
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-linear-to-br from-serve-blue-700 via-serve-blue-600 to-serve-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-bold text-sm mb-8 shadow-lg">
              <TrophyIcon className="w-5 h-5" />
              AWARD WINNER 2024
            </div>
            <MajorTitle primary="Best Homecare Team," secondary="East Midlands" dark size="large" />
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              Great British Care Awards 2024
            </p>
            <div className="flex items-center justify-center gap-2 text-yellow-300">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="w-8 h-8 fill-current" />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Publication Date */}
        <div className="text-center mb-12">
          <time className="text-gray-600 font-semibold text-lg">November 2024</time>
        </div>

        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-16">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            We are absolutely thrilled and deeply honored to announce that SERVE has been awarded{' '}
            <strong className="text-serve-blue-600">Best Homecare Team, East Midlands</strong> at the prestigious{' '}
            <strong>Great British Care Awards 2024</strong>.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            This incredible achievement is a testament to the dedication, compassion, and professionalism of our 
            entire team. Every day, our care workers go above and beyond to provide exceptional, person-centered 
            care to older people and adults with disabilities across Northamptonshire.
          </p>
        </div>

        {/* What This Award Means */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16 border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-linear-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center">
              <TrophyIcon className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">What This Award Means</h2>
          </div>
          
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              The Great British Care Awards celebrate excellence in the care sector, recognizing individuals and 
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

        {/* Photo Gallery Placeholder */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Celebrating Our Success</h2>
          <div className="bg-linear-to-br from-gray-50 to-gray-100 rounded-2xl p-12 text-center border-2 border-dashed border-gray-300">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-gray-600 text-lg mb-2">
              <strong>Photos coming soon!</strong>
            </p>
            <p className="text-gray-500">
              Images from the awards ceremony will be added here
            </p>
          </div>
        </div>

        {/* Our Journey */}
        <div className="bg-linear-to-br from-serve-blue-50 to-serve-green-50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Over 40 Years of Excellence</h2>
          
          <div className="space-y-4 text-gray-700 leading-relaxed">
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

        {/* Thank You Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16 border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-linear-to-br from-red-400 to-red-500 rounded-xl flex items-center justify-center">
              <HeartIcon className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Thank You</h2>
          </div>
          
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              This award belongs to everyone who makes SERVE special:
            </p>
            
            <ul className="space-y-3 ml-6">
              <li className="flex items-start gap-3">
                <span className="text-serve-green-600 font-bold">•</span>
                <span>Our amazing <strong>care team</strong> who provide compassionate, professional care every single day</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-serve-green-600 font-bold">•</span>
                <span>Our dedicated <strong>support staff</strong> who work behind the scenes to ensure everything runs smoothly</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-serve-green-600 font-bold">•</span>
                <span>Our <strong>clients and their families</strong> who trust us with their care</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-serve-green-600 font-bold">•</span>
                <span>Our <strong>supporters and volunteers</strong> who help us make a difference in the community</span>
              </li>
            </ul>
            
            <p className="mt-6 text-xl font-semibold text-serve-blue-600">
              Together, we are making Northamptonshire a better place for everyone.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-linear-to-br from-serve-blue-700 to-serve-blue-800 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience Award-Winning Care
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            If you or a loved one needs care and support, get in touch with our friendly team today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-serve-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Contact Us
            </Link>
            <a 
              href="tel:01933315555"
              className="inline-flex items-center gap-2 bg-serve-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-serve-green-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Call 01933 315555
            </a>
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
