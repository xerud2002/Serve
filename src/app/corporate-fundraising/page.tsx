import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import MajorTitle from '@/components/MajorTitle'
import { 
  BuildingOffice2Icon, 
  HeartIcon, 
  UserGroupIcon,
  SparklesIcon,
  StarIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ChartBarIcon,
  MegaphoneIcon,
  AcademicCapIcon,
  GiftIcon,
  DocumentTextIcon,
  CalendarDaysIcon,
  HandRaisedIcon,
  PhoneIcon,
  EnvelopeIcon,
  TrophyIcon,
  CurrencyPoundIcon,
  ShoppingBagIcon,
  NewspaperIcon,
  UsersIcon,
  BriefcaseIcon,
  LightBulbIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline'
import { CheckIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'Corporate Fundraising | Partner with SERVE',
  description: 'Discover how partnering with SERVE charity benefits your business. Corporate sponsorship, cause-related marketing, team building, and community engagement opportunities in Northamptonshire.',
  keywords: ['corporate fundraising', 'business partnership', 'charity sponsorship', 'CSR', 'corporate social responsibility', 'Northamptonshire', 'business community', 'cause marketing'],
}

const partnerBenefits = [
  {
    icon: BuildingOffice2Icon,
    title: 'Enhanced Corporate Image',
    description: 'By associating with a respected local charity, your business demonstrates social responsibility, which enhances your public image and attracts customers who value ethical practices.',
    color: 'blue'
  },
  {
    icon: UserGroupIcon,
    title: 'Community Engagement',
    description: 'Connect directly with the local community and build meaningful relationships that go beyond traditional business transactions.',
    color: 'green'
  },
  {
    icon: HeartIcon,
    title: 'Brand Loyalty',
    description: 'Customers are more likely to support businesses that give back. Create lasting connections with ethically-minded consumers.',
    color: 'red'
  },
  {
    icon: MegaphoneIcon,
    title: 'Positive Publicity',
    description: 'Gain media coverage and positive PR through joint initiatives, events, and community impact stories.',
    color: 'purple'
  },
  {
    icon: UsersIcon,
    title: 'Networking Opportunities',
    description: 'Connect with other local businesses and community leaders through our network of partners and events.',
    color: 'teal'
  },
  {
    icon: SparklesIcon,
    title: 'Employee Morale & Team Building',
    description: 'Boost staff engagement through meaningful volunteer opportunities and team fundraising activities.',
    color: 'amber'
  },
  {
    icon: HandRaisedIcon,
    title: 'Volunteer Opportunities',
    description: 'Give your team the chance to volunteer and make a tangible difference in the community.',
    color: 'cyan'
  },
  {
    icon: CurrencyPoundIcon,
    title: 'Tax Benefits',
    description: 'Charitable donations and sponsorship can offer tax advantages for your business.',
    color: 'emerald'
  },
  {
    icon: BriefcaseIcon,
    title: 'Attract Top Talent',
    description: 'Socially responsible companies attract and retain the best employees who want to work for ethical organisations.',
    color: 'indigo'
  },
]

const partnershipProgrammes = [
  {
    icon: TrophyIcon,
    title: 'Happy to Serve Programme',
    badge: '⭐️ Featured',
    description: 'Make 2025 the year your business is "Happy to Serve". Isn\'t top quality customer service what will bring you new customers and help you keep them?',
    features: [
      'Eye-catching and appealing promotions',
      'Training workshops delivered by sales and marketing professionals',
      'Events to draw in your customers',
      'Weekly themed promotional ideas',
      'Ready-to-use marketing materials'
    ],
    cta: 'Join the Ambassador Programme',
    color: 'from-amber-500 to-yellow-500'
  },
  {
    icon: RocketLaunchIcon,
    title: 'Tailor-made Marketing & PR',
    badge: 'Headline Sponsor',
    description: 'As a headline business sponsor, you will discover how SERVE will create a buzz around your business throughout the year.',
    features: [
      'Events and co-branded marketing materials',
      'Tailored promotional campaigns',
      'Press releases and media coverage',
      'Social media content creation',
      'Complete "Happy to Serve" sales programme'
    ],
    cta: 'Become a Headline Sponsor',
    color: 'from-serve-blue-500 to-cyan-500'
  },
  {
    icon: AcademicCapIcon,
    title: 'Fundraising Skills Training',
    badge: 'Team Building',
    description: 'Create a "Here to Serve" Fundraising Team and we\'ll deliver a comprehensive workshop and training that will develop transferable sales and marketing skills.',
    features: [
      'Professional workshop delivery',
      'Team building opportunities',
      'Transferable business skills',
      'Raise funds for SERVE or any charity',
      'Benefit the business long-term'
    ],
    cta: 'Book Training Workshop',
    color: 'from-serve-green-500 to-emerald-500'
  },
]

const additionalOpportunities = [
  {
    icon: GiftIcon,
    title: 'Loyalty Programmes',
    description: 'We\'ll show you how you can offer loyalty points or discounts for customers who donate to SERVE, encouraging repeat business at the same time.'
  },
  {
    icon: ShoppingBagIcon,
    title: 'Cause Related Marketing',
    description: 'Create campaigns that link your products or services to supporting our charity and attract ethically-minded customers.'
  },
  {
    icon: CalendarDaysIcon,
    title: 'Sponsorship Opportunities',
    description: 'Sponsor our events, services, or initiatives for maximum brand visibility across Northamptonshire.'
  },
  {
    icon: NewspaperIcon,
    title: 'Press Releases',
    description: 'Benefit from joint press releases and media coverage that highlights your community involvement.'
  },
  {
    icon: UsersIcon,
    title: 'Collaborative Events',
    description: 'Host joint events that benefit both your business and our community while raising awareness.'
  },
  {
    icon: GiftIcon,
    title: 'Branded Merchandise',
    description: 'Co-branded products and merchandise that showcase your partnership with SERVE.'
  },
  {
    icon: AcademicCapIcon,
    title: 'Educational Workshops',
    description: 'Access workshops and training sessions that benefit your team and support our cause.'
  },
  {
    icon: HeartIcon,
    title: 'Client Gifts',
    description: 'Make charitable donations as client gifts - a meaningful way to say thank you while doing good.'
  },
]

const supporters = [
  { name: 'Ricoh', url: 'https://www.ricoh.co.uk/' },
  { name: 'Happy Mondays Coffee', url: 'https://www.happymondayscoffee.co.uk/' },
  { name: 'Wellingborough Wills', url: 'https://wellingboroughwills.com/' },
  { name: 'York Ward & Rowlatt', url: 'https://www.yorkwardandrowlatt.co.uk/' },
  { name: 'CSR Digital', url: 'https://csrdigital.uk/' },
  { name: 'WhiteStar', url: 'https://whitestar-dm.co.uk/' },
]

const whyPartnership = [
  {
    icon: StarIcon,
    title: 'Differentiates Your Business',
    description: 'Showcases your unique commitment to social responsibility, setting you apart from competitors and online giants.'
  },
  {
    icon: HeartIcon,
    title: 'Builds Community Trust',
    description: 'Strengthens your reputation as a business that genuinely cares about its community and local people.'
  },
  {
    icon: ChartBarIcon,
    title: 'Drives Sales Growth',
    description: 'Attracts and retains customers who value ethical practices and are more likely to support businesses that give back.'
  },
]

export default function CorporateFundraisingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-linear-to-br from-serve-blue-900 via-serve-blue-800 to-serve-blue-900 text-white overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 -left-40 w-80 h-80 bg-serve-green-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute -bottom-20 right-1/4 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-rose-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold bg-linear-to-r from-amber-400 via-yellow-400 to-amber-500 text-amber-900 shadow-lg shadow-amber-500/25 mb-8">
                <BuildingOffice2Icon className="w-5 h-5 mr-2" />
                SERVE Working With Businesses
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-linear-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">Corporate</span>{' '}
                <span className="bg-linear-to-r from-amber-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent">Fundraising</span>
              </h1>
              
              <p className="text-xl lg:text-2xl opacity-90 mb-4 leading-relaxed">
                Discover how working with a charity is good for business
              </p>

              <p className="text-lg opacity-80 mb-8 leading-relaxed">
                In today&apos;s competitive business world, SMEs and owner-run businesses face significant challenges. 
                To survive and thrive, it&apos;s essential to adopt innovative strategies that differentiate your business and build strong community links.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://bit.ly/4eD5Y3B"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-linear-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-amber-900 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-amber-500/25"
                >
                  <DocumentTextIcon className="w-6 h-6 mr-3" />
                  Read Our eBook
                </Link>
                <Link
                  href="#contact-section"
                  className="inline-flex items-center bg-white/10 backdrop-blur-sm hover:bg-white hover:text-serve-blue-900 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 border border-white/20"
                >
                  Talk to Us
                  <ArrowRightIcon className="ml-3 h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:bg-white/15 transition-all duration-300">
                  <TrophyIcon className="w-12 h-12 mx-auto mb-4 text-amber-400" />
                  <div className="font-bold text-lg mb-2">Award-Winning</div>
                  <div className="text-sm opacity-80">Marketing Team</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:bg-white/15 transition-all duration-300">
                  <ChartBarIcon className="w-12 h-12 mx-auto mb-4 text-serve-green-400" />
                  <div className="font-bold text-lg mb-2">Proven ROI</div>
                  <div className="text-sm opacity-80">Marketing Partnership</div>
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:bg-white/15 transition-all duration-300">
                  <UserGroupIcon className="w-12 h-12 mx-auto mb-4 text-cyan-400" />
                  <div className="font-bold text-lg mb-2">40+ Years</div>
                  <div className="text-sm opacity-80">Community Trust</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:bg-white/15 transition-all duration-300">
                  <HeartIcon className="w-12 h-12 mx-auto mb-4 text-rose-400" />
                  <div className="font-bold text-lg mb-2">Win-Win</div>
                  <div className="text-sm opacity-80">Mutual Benefits</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="bg-linear-to-r from-amber-500 via-yellow-500 to-amber-500 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl md:text-2xl font-bold text-amber-900 italic">
            &ldquo;If you always do what you&apos;ve always done, you&apos;ll always get what you&apos;ve always got&rdquo;
          </p>
          <p className="text-amber-800 mt-2">
            Customers don&apos;t want to be sold to – they want to make a decision to buy. Let us help you think differently.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-28 bg-linear-to-br from-white via-gray-50 to-serve-blue-50/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-serve-blue-100/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-100/50 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-linear-to-r from-serve-blue-100 to-cyan-50 text-serve-blue-800 px-5 py-2.5 rounded-full text-sm font-semibold mb-6 shadow-sm">
              <HeartIcon className="w-4 h-4 mr-2" />
              When is a charity your marketing partner?
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-linear-to-r from-serve-blue-600 to-cyan-500 bg-clip-text text-transparent">Benefits of Partnering</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Partnering with SERVE, a local charity dedicated to supporting elderly and disabled people, 
              offers a unique opportunity to enhance your business&apos; reputation and attract loyal customers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerBenefits.map((benefit, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-serve-blue-200 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 bg-serve-blue-100 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-7 h-7 text-serve-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-serve-blue-700 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Programmes Section */}
      <section className="py-20 lg:py-28 bg-linear-to-br from-gray-900 via-slate-900 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-serve-blue-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-serve-green-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-5 py-2.5 rounded-full text-sm font-semibold mb-6">
              <SparklesIcon className="w-4 h-4 mr-2 text-amber-400" />
              Groundbreaking Opportunities
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-linear-to-r from-white via-amber-200 to-white bg-clip-text text-transparent">Working with SERVE</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              There are lots of groundbreaking ways your business can benefit from being a SERVE Business Partner
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {partnershipProgrammes.map((programme, index) => (
              <div 
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2"
              >
                {/* Gradient Top Bar */}
                <div className={`h-2 bg-linear-to-r ${programme.color}`} />
                
                <div className="p-8">
                  {/* Badge */}
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-linear-to-r ${programme.color} text-white mb-6`}>
                    {programme.badge}
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-linear-to-br ${programme.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <programme.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">{programme.title}</h3>
                  <p className="text-white/70 mb-6 leading-relaxed">{programme.description}</p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {programme.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3 text-white/80">
                        <CheckIcon className="w-5 h-5 text-serve-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="#contact-section"
                    className={`inline-flex items-center justify-center w-full px-6 py-3 rounded-xl font-semibold bg-linear-to-r ${programme.color} text-white hover:opacity-90 transition-all duration-300`}
                  >
                    {programme.cta}
                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Opportunities */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-linear-to-r from-serve-green-100 to-emerald-50 text-serve-green-800 px-5 py-2.5 rounded-full text-sm font-semibold mb-6 shadow-sm">
              <LightBulbIcon className="w-4 h-4 mr-2" />
              There&apos;s So Much More
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-linear-to-r from-serve-green-600 to-emerald-500 bg-clip-text text-transparent">Additional Opportunities</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore even more ways to partner with SERVE and grow your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalOpportunities.map((item, index) => (
              <div 
                key={index}
                className="group p-6 bg-gray-50 rounded-2xl hover:bg-serve-green-50 transition-all duration-300 text-center hover:-translate-y-1 hover:shadow-lg border border-transparent hover:border-serve-green-200"
              >
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:bg-serve-green-100 transition-colors duration-300">
                  <item.icon className="w-7 h-7 text-serve-green-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2 group-hover:text-serve-green-700 transition-colors">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Partnership Works */}
      <section className="py-20 lg:py-28 bg-linear-to-br from-serve-blue-600 via-serve-blue-700 to-serve-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }} 
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why This Partnership Works</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              By working with SERVE, your business not only contributes to a meaningful cause but also reaps substantial benefits to help you compete with larger retailers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyPartnership.map((item, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="w-8 h-8 text-amber-400" />
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-white/80 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valued Supporters */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-linear-to-r from-amber-100 to-yellow-50 text-amber-800 px-5 py-2.5 rounded-full text-sm font-semibold mb-6 shadow-sm">
              <StarIcon className="w-4 h-4 mr-2" />
              Our Business Partners
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-linear-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent">Some of Our Valued Supporters</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join these forward-thinking businesses who have already discovered the benefits of partnering with SERVE.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            {supporters.map((supporter, index) => (
              <a
                key={index}
                href={supporter.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-serve-blue-200 grayscale hover:grayscale-0 hover:-translate-y-1"
                aria-label={`Visit ${supporter.name}`}
              >
                <div className="text-center">
                  <div className="w-full h-12 flex items-center justify-center">
                    <span className="text-sm font-semibold text-gray-600 hover:text-serve-blue-600 transition-colors">{supporter.name}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-500">
              Want to see your business here?{' '}
              <Link href="#contact-section" className="text-serve-blue-600 font-semibold hover:underline">
                Get in touch today
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact-section" className="py-20 lg:py-28 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/50 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-serve-blue-100/50 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <div className="inline-flex items-center bg-linear-to-r from-serve-blue-100 to-cyan-50 text-serve-blue-800 px-5 py-2.5 rounded-full text-sm font-semibold mb-6 shadow-sm">
            <RocketLaunchIcon className="w-4 h-4 mr-2" />
            Your Invitation
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Make a <span className="bg-linear-to-r from-serve-blue-600 to-cyan-500 bg-clip-text text-transparent">Positive Impact?</span>
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Partnering with SERVE is not just a charitable act – it&apos;s a strategic business decision that will enhance your corporate image, build customer loyalty, and provide numerous opportunities for sales growth and business development.
          </p>

          <div className="bg-linear-to-br from-serve-blue-50 to-cyan-50 rounded-3xl p-8 mb-10 border border-serve-blue-100">
            <h3 className="text-2xl font-bold text-serve-blue-900 mb-4">Our Team is Ready to Help</h3>
            <p className="text-gray-700 mb-6">
              The SERVE management team includes award-winning marketing and public relations professionals with years of experience establishing win/win relationships between businesses and charities.
            </p>
            <p className="text-serve-blue-700 font-semibold text-lg">
              Join us in making a positive impact in the community – and you&apos;ll benefit too!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link 
              href="mailto:tony.gibbs@serve.org.uk"
              className="inline-flex items-center justify-center gap-3 bg-linear-to-r from-serve-blue-600 to-serve-blue-700 hover:from-serve-blue-700 hover:to-serve-blue-800 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg shadow-serve-blue-500/25 hover:shadow-xl"
            >
              <EnvelopeIcon className="w-6 h-6" />
              Contact Tony Gibbs
            </Link>
            <Link 
              href="tel:01933315555"
              className="inline-flex items-center justify-center gap-3 bg-linear-to-r from-serve-green-600 to-serve-green-700 hover:from-serve-green-700 hover:to-serve-green-800 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg shadow-serve-green-500/25 hover:shadow-xl"
            >
              <PhoneIcon className="w-6 h-6" />
              Call 01933 315555
            </Link>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 inline-block">
            <p className="font-bold text-gray-900 mb-2">SERVE</p>
            <p className="text-gray-600">8 West Street, Rushden, Northants NN10 0RT</p>
            <p className="text-gray-600">Charity Number: 1043321 | Company Number: 2951827</p>
          </div>
        </div>
      </section>
    </div>
  )
}
