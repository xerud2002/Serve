import Link from 'next/link'
import { Metadata } from 'next'
import { 
  BuildingOffice2Icon, 
  HeartIcon, 
  UserGroupIcon,
  SparklesIcon,
  StarIcon,
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
  ChatBubbleLeftRightIcon,
  PhotoIcon,
  BookOpenIcon,
  TicketIcon,
  TagIcon
} from '@heroicons/react/24/outline'
import { CheckIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'Corporate Fundraising & Business Partnerships | SERVE Charity',
  description: 'Partner with SERVE for corporate fundraising. Boost brand loyalty, employee morale, and community engagement. CSR programs, sponsorship, and cause-related marketing in Northamptonshire.',
  keywords: ['corporate fundraising Northamptonshire', 'business charity partnership', 'CSR programs', 'corporate social responsibility', 'charity sponsorship', 'cause-related marketing', 'employee volunteering', 'community engagement', 'business philanthropy', 'corporate giving'],
  alternates: {
    canonical: '/corporate-fundraising/',
  },
  openGraph: {
    title: 'Corporate Fundraising & Business Partnerships | SERVE Charity',
    description: 'Partner with SERVE for corporate fundraising. Boost brand loyalty, employee morale, and community engagement.',
    url: 'https://serve.org.uk/corporate-fundraising',
    siteName: 'SERVE - Supporting Independence',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@serve_charity',
    title: 'Corporate Fundraising & Business Partnerships | SERVE Charity',
    description: 'Partner with SERVE for corporate fundraising. Boost brand loyalty, employee morale, and community engagement.',
  },
}

// Benefits of partnering with Serve - exact content from original
const partnerBenefits = [
  {
    title: 'Enhanced corporate image',
    description: 'By associating with a respected local charity, your business demonstrates social responsibility, which enhances your public image and attracts customers who value ethical practices.',
    icon: BuildingOffice2Icon
  },
  {
    title: 'Community Engagement',
    description: 'Connect directly with the local community and build meaningful relationships that go beyond traditional business transactions.',
    icon: UserGroupIcon
  },
  {
    title: 'Brand Loyalty',
    description: 'Customers are more likely to support businesses that give back. Create lasting connections with ethically-minded consumers.',
    icon: HeartIcon
  },
  {
    title: 'Positive Publicity',
    description: 'Gain media coverage and positive PR through joint initiatives, events, and community impact stories.',
    icon: MegaphoneIcon
  },
  {
    title: 'Networking Opportunities',
    description: 'Connect with other local businesses and community leaders through our network of partners and events.',
    icon: UsersIcon
  },
  {
    title: 'Employee Morale and Team Building',
    description: 'Boost staff engagement through meaningful volunteer opportunities and team fundraising activities.',
    icon: SparklesIcon
  },
  {
    title: 'Volunteer Opportunities',
    description: 'Give your team the chance to volunteer and make a tangible difference in the community.',
    icon: HandRaisedIcon
  },
  {
    title: 'Social Media Content',
    description: 'Generate engaging content for your social media channels that showcases your community involvement.',
    icon: ChatBubbleLeftRightIcon
  },
  {
    title: 'Tax Benefits',
    description: 'Charitable donations and sponsorship can offer tax advantages for your business.',
    icon: CurrencyPoundIcon
  },
  {
    title: 'Attracting the best people to work for you',
    description: 'Socially responsible companies attract and retain the best employees who want to work for ethical organisations.',
    icon: BriefcaseIcon
  },
]

// There's so much more - exact items from original
const moreBenefits = [
  { title: 'Loyalty Programmes', description: "We'll show you how you can offer loyalty points or discounts for customers who donate to Serve, and encourage repeat business at the same time.", icon: GiftIcon },
  { title: 'Cause Related Marketing Campaigns', description: 'Create campaigns that link your products or services to supporting our charity.', icon: MegaphoneIcon },
  { title: 'Sponsorship Opportunities', description: 'Sponsor our events, services, or initiatives for maximum brand visibility.', icon: TrophyIcon },
  { title: 'Product Sales', description: 'Partner with us on product sales initiatives that benefit both parties.', icon: ShoppingBagIcon },
  { title: 'Press Releases', description: 'Benefit from joint press releases and media coverage.', icon: NewspaperIcon },
  { title: 'Community Grants', description: 'Access community grant opportunities through partnership.', icon: CurrencyPoundIcon },
  { title: 'Collaborative Events', description: 'Host joint events that benefit both your business and our community.', icon: CalendarDaysIcon },
  { title: 'Branded Merchandise', description: 'Co-branded products and merchandise that showcase your partnership.', icon: TagIcon },
  { title: 'Educational Workshops', description: 'Access workshops and training sessions for your team.', icon: BookOpenIcon },
  { title: 'Client Gifts', description: 'Make charitable donations as client gifts - a meaningful way to say thank you.', icon: GiftIcon },
]

const supporters = [
  { name: 'Ricoh', url: 'https://www.ricoh.co.uk/' },
  { name: 'Happy Mondays Coffee', url: 'https://www.happymondayscoffee.co.uk/' },
  { name: 'Wellingborough Wills', url: 'https://wellingboroughwills.com/' },
  { name: 'York Ward & Rowlatt', url: 'https://www.yorkwardandrowlatt.co.uk/' },
  { name: 'CSR Digital', url: 'https://csrdigital.uk/' },
  { name: 'WhiteStar', url: 'https://whitestar-dm.co.uk/' },
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
        </div>

        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }} 
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold bg-linear-to-r from-amber-400 via-yellow-400 to-amber-500 text-amber-900 shadow-lg shadow-amber-500/25 mb-8">
              <BuildingOffice2Icon className="w-5 h-5 mr-2" />
              SERVE WORKING WITH BUSINESSES
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-8 leading-tight">
              <span className="block bg-linear-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">Discover how working</span>
              <span className="block bg-linear-to-r from-yellow-300 via-amber-400 to-orange-300 bg-clip-text text-transparent mt-2">with a charity is good for business</span>
            </h1>
            

            <div className="text-lg lg:text-xl opacity-90 mb-8 leading-relaxed space-y-4 text-left max-w-3xl mx-auto">
              <p>
                In today&apos;s competitive business world, SME&apos;s and owner run businesses in Northamptonshire face significant challenges from online giants like Amazon and out-of-town shopping centres such as Rushden Lakes. To survive and thrive, it is essential to adopt innovative strategies that differentiate your business and build strong community links.
              </p>
              <p>
                As we know, &apos;if you always do what you&apos;ve always done, you&apos;ll always get what you&apos;ve always got&apos;. If your sales messages aren&apos;t working as well as you&apos;d like, let&apos;s remind ourselves that customers these days don&apos;t want to be sold to, they want to make a decision to buy.
              </p>
              <p>
                And that&apos;s the difference, which is why, more than ever before, we have to think and act differently to achieve success in business.
              </p>
            </div>

            <Link
              href="https://bit.ly/4eD5Y3B"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-linear-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-amber-900 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-amber-500/25"
            >
              <DocumentTextIcon className="w-6 h-6 mr-3" />
              Read our eBook
            </Link>
          </div>
        </div>
      </section>

      {/* Downloads / eBook Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-linear-to-br from-serve-blue-50 to-cyan-50 rounded-3xl p-8 md:p-12 border border-serve-blue-100 text-center">
            <h2 className="text-3xl font-bold text-serve-blue-900 mb-4">
              Read our Corporate Sponsorship eBook
            </h2>
            <p className="text-xl text-serve-blue-700 font-semibold mb-6">
              6 Reasons Why Working With a Charity is Good for Your Business
            </p>
            <p className="text-gray-600 mb-8">
              Click the button to open our eBook as a flipbook, or to download it as a pdf.
            </p>
            <Link
              href="https://bit.ly/4eD5Y3B"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-serve-blue-600 hover:bg-serve-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg"
            >
              <DocumentTextIcon className="w-6 h-6 mr-3" />
              Get eBook
            </Link>
          </div>
        </div>
      </section>

      {/* When is a charity your marketing partner? */}
      <section className="py-20 lg:py-28 bg-linear-to-br from-white via-gray-50 to-serve-blue-50/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-serve-blue-100/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-100/50 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-linear-to-r from-serve-blue-600 to-cyan-500 bg-clip-text text-transparent">When is a charity your marketing partner?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Partnering with Serve, a local charity dedicated to supporting elderly and disabled people, offers a unique opportunity to enhance your business&apos; reputation, attract loyal customers, and have a positive impact on the community.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-center text-gray-900 mb-10">
            Benefits of partnering with Serve
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerBenefits.map((benefit, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-serve-blue-200 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 bg-serve-blue-100 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-7 h-7 text-serve-blue-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-serve-blue-700 transition-colors">
                  {benefit.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center bg-serve-blue-600 hover:bg-serve-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg"
            >
              Talk to us about sponsorship
              <ArrowRightIcon className="w-5 h-5 ml-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* Working with Serve is good for business */}
      <section className="py-20 lg:py-28 bg-linear-to-br from-gray-900 via-slate-900 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-serve-blue-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Working with Serve is good for business
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              There are lots of groundbreaking ways your business can benefit from being a Serve Business Partner:
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Happy to Serve Programme */}
            <div className="group relative bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2">
              <div className="h-2 bg-linear-to-r from-amber-500 to-yellow-500" />
              <div className="p-8">
                <div className="text-3xl mb-4">⭐️</div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Make 2025 the year your business is &apos;Happy to Serve&apos;
                </h3>
                <p className="text-white/70 mb-6 leading-relaxed">
                  Isn&apos;t top quality customer service what will bring you new customers and help you keep them? Sign up for the &apos;Happy to Serve&apos; ambassador programme that will enable you to have the use of eye catching and appealing promotions, backed up by training workshops delivered by sales and marketing professionals + events to draw in your customers.
                </p>
                <p className="text-white/70 leading-relaxed">
                  Are you ready for weekly themed promotional ideas and ready to use materials to support your marketing plans
                </p>
              </div>
            </div>

            {/* Tailor-made marketing and PR */}
            <div className="group relative bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2">
              <div className="h-2 bg-linear-to-r from-serve-blue-500 to-cyan-500" />
              <div className="p-8">
                <div className="text-3xl mb-4">⭐️</div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Tailor-made marketing and PR plans
                </h3>
                <p className="text-white/70 leading-relaxed">
                  As a headline business sponsor, you will discover how Serve will create a buzz around your business throughout the year. Events, co-branded marketing materials and promotions, it&apos;s all about win/win – including the entire &apos;Happy to Serve&apos; sales programme.
                </p>
              </div>
            </div>

            {/* Fundraising skills */}
            <div className="group relative bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2">
              <div className="h-2 bg-linear-to-r from-serve-green-500 to-emerald-500" />
              <div className="p-8">
                <div className="text-3xl mb-4">⭐️</div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Fundraising skills are transferable sales and marketing skills
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Create a Here to Serve Fundraising Team and we&apos;ll deliver a comprehensive workshop and training for your team to raise funds for Serve – or any other charity of your choice – that will create team building opportunities as well as develop transferable skills that will benefit the business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Some of Our Valued Supporters */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            SOME OF OUR VALUED SUPPORTERS:
          </h2>

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
                <span className="text-sm font-semibold text-gray-600 hover:text-serve-blue-600 transition-colors text-center">{supporter.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* There's so much more */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            <span className="bg-linear-to-r from-serve-green-600 to-emerald-500 bg-clip-text text-transparent">There&apos;s so much more...</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mt-12">
            {moreBenefits.map((item, index) => (
              <div 
                key={index}
                className="group p-5 bg-gray-50 rounded-xl hover:bg-serve-green-50 transition-all duration-300 text-center hover:-translate-y-1 hover:shadow-lg border border-transparent hover:border-serve-green-200"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-3 shadow-sm group-hover:bg-serve-green-100 transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-serve-green-600" />
                </div>
                <h4 className="font-bold text-gray-900 text-sm group-hover:text-serve-green-700 transition-colors">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Partnership Works */}
      <section className="py-20 lg:py-28 bg-linear-to-br from-serve-blue-600 via-serve-blue-700 to-serve-blue-800 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why This Partnership Works</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              By working with Serve, your business not only contributes to a meaningful cause but also reaps substantial benefits to help you compete with larger retailers. This partnership:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <StarIcon className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Differentiates Your Business</h3>
              <p className="text-white/80 leading-relaxed">
                Showcases your unique commitment to social responsibility, setting you apart from competitors.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <HeartIcon className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Builds Community Trust</h3>
              <p className="text-white/80 leading-relaxed">
                Strengthens your reputation as a business that cares about its community.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <ChartBarIcon className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Drives Sales</h3>
              <p className="text-white/80 leading-relaxed">
                Attracts and retains customers who value ethical practices and are more likely to support businesses that give back.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/about"
              className="inline-flex items-center bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 border border-white/20"
            >
              More About Us
              <ArrowRightIcon className="w-5 h-5 ml-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* Your Invitation to an Exclusive Event */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/50 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-serve-blue-100/50 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Invitation to an Exclusive Event
            </h2>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600 mb-12 space-y-6">
            <p>
              Partnering with Serve is not just a charitable act – it is a strategic business decision that will enhance your corporate image, build customer loyalty, and provide numerous opportunities for sales growth and business development. We invite you to join us in this innovative collaboration to create a win-win situation for your business and the community.
            </p>
            <p>
              Together, we can make a significant impact. Let&apos;s work together to support the elderly and disabled in our community, while driving your business to new heights.
            </p>
          </div>

          <div className="bg-linear-to-br from-serve-blue-50 to-cyan-50 rounded-3xl p-8 md:p-12 border border-serve-blue-100 mb-12">
            <h3 className="text-2xl font-bold text-serve-blue-900 mb-6">Next Steps</h3>
            <div className="text-gray-700 space-y-4">
              <p>
                To find out more and reserve your place, email <a href="mailto:tony.gibbs@serve.org.uk" className="text-serve-blue-600 font-semibold hover:underline">tony.gibbs@serve.org.uk</a>
              </p>
              <p>
                The Serve management team includes award winning marketing and public relations professionals with years of experience of establishing win/win relationships between businesses and charities.
              </p>
              <p className="text-serve-blue-700 font-semibold text-lg">
                Join us in making a positive impact in the community – and you&apos;ll benefit too!
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              href="mailto:tony.gibbs@serve.org.uk"
              className="inline-flex items-center justify-center gap-3 bg-serve-blue-600 hover:bg-serve-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg"
            >
              <EnvelopeIcon className="w-6 h-6" />
              Email Tony Gibbs
            </Link>
            <Link 
              href="tel:01933315555"
              className="inline-flex items-center justify-center gap-3 bg-serve-green-600 hover:bg-serve-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg"
            >
              <PhoneIcon className="w-6 h-6" />
              Call 01933 315555
            </Link>
          </div>

          {/* Contact Info */}
          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <h4 className="font-bold text-gray-900 text-lg mb-4">Contact</h4>
            <div className="text-gray-600 space-y-1">
              <p>8 West Street,</p>
              <p>Rushden,</p>
              <p>Northants</p>
              <p>NN10 0RT</p>
              <p className="mt-4">Charity Number: 1043321</p>
              <p>Company Number: 2951827</p>
              <p className="mt-4">
                Telephone: <a href="tel:01933315555" className="text-serve-blue-600 hover:underline">01933 315555</a>
              </p>
              <p>
                Email: <a href="mailto:info@serve.org.uk" className="text-serve-blue-600 hover:underline">info@serve.org.uk</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
