import { Metadata } from 'next'
import Link from 'next/link'
import {
  HomeIcon,
  ClockIcon,
  UserGroupIcon,
  PhoneIcon,
  CheckIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  HeartIcon,
  TruckIcon,
  BeakerIcon,
  MusicalNoteIcon,
  PuzzlePieceIcon,
  CakeIcon,
  FaceSmileIcon
} from '@heroicons/react/24/outline'
import MajorTitle from '@/components/MajorTitle'

export const metadata: Metadata = {
  title: 'Day Care & Meals on Wheels - SERVE | Ron Manning Day Centre Northamptonshire',
  description: 'SERVE\'s Day Care centre provides social activities, nutritious meals, and professional care in a friendly community environment. Transport included.',
  keywords: 'day care, meals on wheels, day centre, social activities, community care, Northamptonshire, elderly care',
}

const activities = [
  {
    title: 'Social Activities',
    icon: UserGroupIcon,
    description: 'Group activities, games, and social interaction to combat loneliness',
    features: ['Group games and quizzes', 'Social clubs', 'Conversation groups', 'Community events']
  },
  {
    title: 'Creative Arts',
    icon: MusicalNoteIcon,
    description: 'Arts, crafts, and creative activities to stimulate mind and body',
    features: ['Arts and crafts', 'Music therapy', 'Painting and drawing', 'Creative workshops']
  },
  {
    title: 'Physical Activities',
    icon: HeartIcon,
    description: 'Gentle exercise and physical activities adapted to individual abilities',
    features: ['Chair exercises', 'Gentle movement', 'Garden activities', 'Walking groups']
  },
  {
    title: 'Mental Stimulation',
    icon: PuzzlePieceIcon,
    description: 'Cognitive activities to keep minds sharp and engaged',
    features: ['Memory games', 'Puzzles and quizzes', 'Reading groups', 'Discussion sessions']
  },
  {
    title: 'Nutritious Meals',
    icon: CakeIcon,
    description: 'Fresh, healthy meals prepared on-site with dietary requirements met',
    features: ['Hot daily meals', 'Special dietary needs', 'Fresh ingredients', 'Social dining']
  },
  {
    title: 'Health Monitoring',
    icon: BeakerIcon,
    description: 'Health checks and medication support from qualified staff',
    features: ['Health monitoring', 'Medication support', 'First aid', 'Wellbeing checks']
  }
]

const benefits = [
  'Social interaction and friendship',
  'Professional care supervision',
  'Nutritious meals and refreshments',
  'Stimulating activities and entertainment',
  'Transport to and from home',
  'Respite for family carers',
  'Health monitoring and support',
  'Safe, welcoming environment'
]

const schedule = [
  { day: 'Monday', activities: 'Arts & Crafts, Music Therapy, Games', meals: 'Traditional Monday Roast' },
  { day: 'Tuesday', activities: 'Exercise Class, Reminiscence, Bingo', meals: 'Hearty Casseroles' },
  { day: 'Wednesday', activities: 'Garden Club, Reading Group, Quizzes', meals: 'Fresh Fish & Chips' },
  { day: 'Thursday', activities: 'Creative Writing, Board Games, Singing', meals: 'Home-cooked Favourites' },
  { day: 'Friday', activities: 'Social Club, Entertainment, Celebration', meals: 'Special Friday Treats' }
]

export default function DayCarePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-serve-blue-600">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-serve-blue-600">Services</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Day Care & Meals on Wheels</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-serve-green-900 via-serve-green-800 to-serve-green-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-bold mb-8">
                <HomeIcon className="w-5 h-5 mr-2" />
                Ron Manning Day and Activity Centre
              </div>

              <MajorTitle primary="Day Care &" secondary="Meals on Wheels" dark accentClass="text-serve-green-200" />
              
              <p className="text-xl lg:text-2xl opacity-90 mb-8 leading-relaxed">
                A welcoming community hub offering social activities, nutritious meals, 
                and professional care in a friendly, stimulating environment.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:01933315555"
                  className="inline-flex items-center bg-serve-blue-600 hover:bg-serve-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105"
                >
                  <PhoneIcon className="w-6 h-6 mr-3" />
                  Call: 01933 315555
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center bg-white/10 backdrop-blur-sm hover:bg-white hover:text-serve-green-900 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 border border-white/20"
                >
                  Visit Our Centre
                  <ArrowRightIcon className="ml-3 h-5 w-5" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <ClockIcon className="w-12 h-12 mx-auto mb-4 text-serve-green-200" />
                  <div className="font-bold text-lg mb-2">Mon - Fri</div>
                  <div className="text-sm opacity-80">9:00 AM - 4:00 PM</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <TruckIcon className="w-12 h-12 mx-auto mb-4 text-serve-green-200" />
                  <div className="font-bold text-lg mb-2">Transport</div>
                  <div className="text-sm opacity-80">Door-to-door service</div>
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <CakeIcon className="w-12 h-12 mx-auto mb-4 text-serve-green-200" />
                  <div className="font-bold text-lg mb-2">Fresh Meals</div>
                  <div className="text-sm opacity-80">Prepared daily on-site</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <FaceSmileIcon className="w-12 h-12 mx-auto mb-4 text-serve-green-200" />
                  <div className="font-bold text-lg mb-2">Social Hub</div>
                  <div className="text-sm opacity-80">Make lasting friendships</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Daily Activities & Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our day care centre offers a wide range of activities designed to keep you 
              active, engaged, and socially connected in a supportive community environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {activities.map((activity, index) => {
              const IconComponent = activity.icon
              return (
                <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="bg-serve-green-100 rounded-xl p-4 w-fit mb-6">
                    <IconComponent className="w-8 h-8 text-serve-green-600" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{activity.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{activity.description}</p>
                  
                  <ul className="space-y-2">
                    {activity.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-gray-700">
                        <CheckIcon className="w-4 h-4 text-serve-green-600 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>

          {/* Benefits */}
          <div className="bg-gradient-to-r from-serve-green-50 to-serve-blue-50 rounded-3xl p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Benefits of Our Day Care Service
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center bg-white rounded-xl p-4 shadow-sm">
                  <CheckIcon className="w-5 h-5 text-serve-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-800 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Schedule */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Weekly Schedule
            </h2>
            <p className="text-xl text-gray-600">
              Each day brings new activities, entertainment, and delicious meals
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {schedule.map((day, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-serve-green-700 mb-4 text-center">
                  {day.day}
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <MusicalNoteIcon className="w-4 h-4 mr-2 text-serve-green-600" />
                      Activities
                    </h4>
                    <p className="text-sm text-gray-700 leading-relaxed">{day.activities}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <CakeIcon className="w-4 h-4 mr-2 text-serve-green-600" />
                      Today&apos;s Menu
                    </h4>
                    <p className="text-sm text-gray-700 leading-relaxed">{day.meals}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            How to Join Our Day Care
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="bg-serve-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-serve-green-700">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Contact Us</h3>
              <p className="text-gray-600">Call us to discuss your needs and arrange a visit to our centre.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="bg-serve-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-serve-green-700">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Visit & Assess</h3>
              <p className="text-gray-600">Come for a trial day to experience our activities and meet our team.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="bg-serve-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-serve-green-700">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Join Community</h3>
              <p className="text-gray-600">Start your regular attendance and become part of our caring community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-serve-green-600 to-serve-green-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Join Our Caring Community Today
          </h2>
          <p className="text-xl opacity-90 mb-10 leading-relaxed">
            Experience the warmth and friendship of our day care centre. Contact us today 
            to arrange a visit and see how we can enrich your daily life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="tel:01933315555"
              className="inline-flex items-center bg-serve-blue-600 hover:bg-serve-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105"
            >
              <PhoneIcon className="w-6 h-6 mr-3" />
              Call Now: 01933 315555
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center bg-white/10 backdrop-blur-sm hover:bg-white hover:text-serve-green-900 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 border border-white/20"
            >
              Arrange a Visit
              <ArrowRightIcon className="ml-3 h-5 w-5" />
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20">
            <Link
              href="/services"
              className="inline-flex items-center text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeftIcon className="w-5 h-5 mr-2" />
              Back to All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}