import { 
  TrophyIcon, 
  ShieldCheckIcon, 
  StarIcon, 
  HeartIcon,
  ArrowTopRightOnSquareIcon 
} from '@heroicons/react/24/outline'
import { StarIcon as StarIconSolid, TrophyIcon as TrophyIconSolid } from '@heroicons/react/24/solid'

export default function Awards() {
  const testimonials = [
    {
      quote: "SERVE has been absolutely wonderful. The carers are so kind and professional, and they've helped mum stay in her own home with dignity.",
      author: "Sarah M.",
      relation: "Daughter of service user",
      location: "Rushden"
    },
    {
      quote: "I look forward to my carer's visits every day. They're not just professional - they're like family to me now.",
      author: "Harold T.",
      relation: "Service user",
      location: "Wellingborough"  
    },
    {
      quote: "The day centre has given my husband such joy. The staff understand his needs and the activities keep him engaged.",
      author: "Margaret K.",
      relation: "Carer",
      location: "Higham Ferrers"
    }
  ]

  const achievements = [
    {
      icon: TrophyIcon,
      title: "Award-Winning Care",
      subtitle: "Great British Care Awards 2024",
      description: "Winner: Best Homecare Team, East Midlands"
    },
    {
      icon: ShieldCheckIcon,
      title: "CQC Registered",
      subtitle: "Care Quality Commission",
      description: "Officially regulated and approved care provider"
    },
    {
      icon: StarIcon,
      title: "Excellence Rating",
      subtitle: "Continuous Improvement", 
      description: "Committed to the highest standards of care"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-serve-blue-50 via-white to-serve-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <TrophyIcon className="w-4 h-4 mr-2" />
            Award-Winning Organization
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Recognition & Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to exceptional care has earned us recognition from industry leaders 
            and, most importantly, the trust of the families we serve.
          </p>
        </div>

        {/* Main Awards Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Great British Care Awards */}
            <div className="order-2 lg:order-1">
              <div className="relative group">
                <div className="absolute -inset-6 rounded-[28px] bg-gradient-to-br from-rose-400 via-orange-400 to-amber-300 blur-2xl opacity-25 group-hover:opacity-35 transition-opacity"></div>
                <div className="relative p-[2px] rounded-3xl bg-gradient-to-br from-rose-400 via-orange-400 to-amber-300 shadow-2xl">
                  <div className="rounded-3xl bg-white p-8 sm:p-10">
                    <div className="text-center">
                      <div className="mx-auto mb-6 h-16 w-16 rounded-2xl bg-gradient-to-br from-amber-200 via-orange-300 to-rose-300 p-[2px] shadow">
                        <div className="h-full w-full rounded-2xl bg-white flex items-center justify-center">
                          <TrophyIconSolid className="h-8 w-8 text-amber-500" aria-hidden="true" />
                        </div>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold mb-2 bg-gradient-to-r from-rose-500 via-orange-500 to-amber-500 bg-clip-text text-transparent">
                        Great British Care Awards
                      </h3>
                      <div className="text-lg sm:text-2xl font-extrabold tracking-wide mb-5 uppercase bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent">
                        National Finalist
                      </div>
                      <div className="inline-flex flex-col items-center bg-gradient-to-br from-rose-50 to-amber-50 rounded-2xl px-5 py-4 ring-1 ring-rose-200/60 shadow-sm">
                        <p className="text-base sm:text-lg font-semibold text-gray-900">Best Homecare Team</p>
                        <p className="text-sm text-gray-700">2024</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CQC Registration */}
            <div className="order-1 lg:order-2">
              <div className="bg-white border-2 border-serve-blue-200 p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="text-center">
                  <ShieldCheckIcon className="w-20 h-20 text-serve-blue-600 mx-auto mb-6" />
                  <h3 className="text-3xl font-bold text-serve-blue-800 mb-4">CQC Registered</h3>
                  <p className="text-xl text-gray-600 mb-6">Care Quality Commission Approved</p>
                  
                  <div className="bg-serve-blue-50 rounded-xl p-6 mb-6">
                    <p className="text-gray-700 leading-relaxed">
                      Our Home Care team is officially registered and regulated by the Care Quality Commission, 
                      ensuring we meet the highest standards of safety, effectiveness, and quality.
                    </p>
                  </div>
                  
                  <a
                    href="https://www.cqc.org.uk/location/1-2165219210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center bg-serve-blue-600 hover:bg-serve-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                    aria-label="View SERVE's CQC inspection report"
                  >
                    View CQC Report
                    <ArrowTopRightOnSquareIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose SERVE */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose SERVE?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon
              return (
                <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-serve-blue-200 text-center">
                  <div className="bg-serve-blue-100 rounded-full p-4 w-20 h-20 mx-auto mb-6 group-hover:bg-serve-blue-200 transition-colors">
                    <IconComponent className="w-12 h-12 text-serve-blue-600 mx-auto" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h4>
                  <p className="text-serve-blue-600 font-semibold mb-3">{achievement.subtitle}</p>
                  <p className="text-gray-600">{achievement.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">What Families Say About Us</h3>
            <p className="text-xl text-gray-600">Real experiences from the people we&apos;re proud to serve</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="relative h-full">
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-serve-blue-200 transition-colors h-full flex flex-col">
                  {/* Stars */}
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <StarIconSolid key={i} className="w-5 h-5 text-yellow-400" />
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <blockquote className="text-gray-700 italic mb-6 text-center leading-relaxed flex-grow">
                    &quot;{testimonial.quote}&quot;
                  </blockquote>
                  
                  {/* Attribution */}
                  <div className="text-center mt-auto">
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.relation}</div>
                    <div className="text-sm text-serve-blue-600">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">
              Join hundreds of families who trust SERVE with their care needs.
            </p>
            <a
              href="/contact"
              className="group inline-flex items-center bg-serve-green-600 hover:bg-serve-green-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              aria-label="Contact SERVE to discuss your care needs"
            >
              <HeartIcon className="mr-3 h-5 w-5" />
              Start Your Care Journey
              <svg className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}