import Link from 'next/link'
import { 
  ArrowLeftIcon, 
  ChartBarIcon, 
  HeartIcon, 
  UserGroupIcon,
  TrophyIcon,
  CurrencyPoundIcon,
  DocumentTextIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'
import type { Metadata } from 'next'
import MajorTitle from '@/components/MajorTitle'

export const metadata: Metadata = {
  title: 'Annual Report 2023-2024 | SERVE',
  description: 'SERVE annual report and audited financial statements for the year ending March 31, 2024.',
}

export default function AnnualReport2024Page() {
  return (
    <main className="min-h-screen bg-linear-to-b from-blue-50 via-white to-green-50">
      {/* Back Button */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/about" 
            className="inline-flex items-center gap-2 text-serve-blue-600 hover:text-serve-blue-700 font-semibold transition-colors"
          >
            <ArrowLeftIcon className="w-5 h-5" />
            Back to About Us
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-linear-to-br from-serve-blue-700 via-serve-blue-600 to-serve-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
              <DocumentTextIcon className="w-5 h-5" />
              <span className="text-sm font-semibold">Financial Year 2023-2024</span>
            </div>
            <MajorTitle primary="Annual Report &" secondary="Financial Statements" dark size="large" />
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-4">
              Year Ending March 31, 2024
            </p>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto">
              SERVE - Registered Charity & Company in England and Wales
            </p>
          </div>
        </div>
      </div>

      {/* Key Highlights */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Year in Numbers
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-linear-to-br from-serve-blue-50 to-white rounded-2xl p-8 border border-serve-blue-100 text-center">
              <div className="w-16 h-16 bg-serve-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CurrencyPoundIcon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-serve-blue-600 mb-2">£1.56M</div>
              <div className="text-gray-600 font-semibold">Total Income</div>
              <div className="text-xs text-gray-500 mt-2">Up from £1.20M</div>
            </div>

            <div className="bg-linear-to-br from-serve-green-50 to-white rounded-2xl p-8 border border-serve-green-100 text-center">
              <div className="w-16 h-16 bg-serve-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <UserGroupIcon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-serve-green-600 mb-2">264</div>
              <div className="text-gray-600 font-semibold">Volunteers</div>
              <div className="text-xs text-gray-500 mt-2">29,304 hours contributed</div>
            </div>

            <div className="bg-linear-to-br from-yellow-50 to-white rounded-2xl p-8 border border-yellow-100 text-center">
              <div className="w-16 h-16 bg-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <HeartIcon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-yellow-600 mb-2">29,085</div>
              <div className="text-gray-600 font-semibold">Care Hours</div>
              <div className="text-xs text-gray-500 mt-2">40,919 care calls</div>
            </div>

            <div className="bg-linear-to-br from-purple-50 to-white rounded-2xl p-8 border border-purple-100 text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrophyIcon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-purple-600 mb-2">42,435</div>
              <div className="text-gray-600 font-semibold">Transport Journeys</div>
              <div className="text-xs text-gray-500 mt-2">Medical & shopping trips</div>
            </div>
          </div>
        </div>
      </section>

      {/* Organizational Overview */}
      <section className="py-16 bg-linear-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Our Purpose & Services
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-serve-blue-100 rounded-xl flex items-center justify-center">
                  <HeartIcon className="w-6 h-6 text-serve-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                SERVE aims to promote independence, health, and wellbeing for older adults and individuals 
                with disabilities, focusing on reducing poverty, isolation, and health inequalities.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-serve-green-100 rounded-xl flex items-center justify-center">
                  <UserGroupIcon className="w-6 h-6 text-serve-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Volunteer Impact</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-2">
                <strong>264 volunteers</strong> contributed <strong>29,304 hours</strong> of service
              </p>
              <p className="text-2xl font-bold text-serve-green-600 mt-4">
                Valued at £363,000+
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Services Delivered</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-serve-blue-100 rounded-lg flex items-center justify-center shrink-0 mt-1">
                  <span className="text-serve-blue-600 font-bold">1</span>
                </div>
                <div>
                  <div className="font-bold text-gray-900 mb-1">Homecare Services</div>
                  <div className="text-sm text-gray-600">Professional in-home care and support</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-serve-green-100 rounded-lg flex items-center justify-center shrink-0 mt-1">
                  <span className="text-serve-green-600 font-bold">2</span>
                </div>
                <div>
                  <div className="font-bold text-gray-900 mb-1">Befriending Services</div>
                  <div className="text-sm text-gray-600">Tackling social isolation</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center shrink-0 mt-1">
                  <span className="text-yellow-600 font-bold">3</span>
                </div>
                <div>
                  <div className="font-bold text-gray-900 mb-1">Wellbeing Activities</div>
                  <div className="text-sm text-gray-600">Day center programs and activities</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center shrink-0 mt-1">
                  <span className="text-purple-600 font-bold">4</span>
                </div>
                <div>
                  <div className="font-bold text-gray-900 mb-1">Community Transport</div>
                  <div className="text-sm text-gray-600">Medical and shopping journeys</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center shrink-0 mt-1">
                  <span className="text-red-600 font-bold">5</span>
                </div>
                <div>
                  <div className="font-bold text-gray-900 mb-1">Carers&apos; Respite</div>
                  <div className="text-sm text-gray-600">Support for informal carers</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center shrink-0 mt-1">
                  <span className="text-indigo-600 font-bold">6</span>
                </div>
                <div>
                  <div className="font-bold text-gray-900 mb-1">Voluntary Sector Support</div>
                  <div className="text-sm text-gray-600">Community partnerships</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Performance */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <ChartBarIcon className="w-10 h-10 text-serve-blue-600" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Financial Performance
              </h2>
            </div>
            <p className="text-lg text-gray-600">
              Strong income growth and improved financial stability
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-linear-to-br from-serve-green-50 to-white rounded-2xl p-8 border border-serve-green-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Income Sources (£1,559,078)</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 font-semibold">Care Charges</span>
                    <span className="text-serve-green-600 font-bold">£790,328</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-serve-green-600 h-3 rounded-full" style={{ width: '50.7%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 font-semibold">Donations & Legacies</span>
                    <span className="text-serve-green-600 font-bold">£391,296</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-serve-green-600 h-3 rounded-full" style={{ width: '25.1%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 font-semibold">Service Contracts</span>
                    <span className="text-serve-green-600 font-bold">£268,896</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-serve-green-600 h-3 rounded-full" style={{ width: '17.2%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-linear-to-br from-serve-blue-50 to-white rounded-2xl p-8 border border-serve-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Financial Summary</h3>
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-4 border border-gray-200">
                  <div className="text-sm text-gray-600 mb-1">Total Income</div>
                  <div className="text-3xl font-bold text-serve-green-600">£1,559,078</div>
                  <div className="text-xs text-gray-500 mt-1">↑ from £1,202,924</div>
                </div>
                <div className="bg-white rounded-xl p-4 border border-gray-200">
                  <div className="text-sm text-gray-600 mb-1">Total Expenditure</div>
                  <div className="text-3xl font-bold text-gray-900">£1,577,038</div>
                </div>
                <div className="bg-white rounded-xl p-4 border border-gray-200">
                  <div className="text-sm text-gray-600 mb-1">Net Result</div>
                  <div className="text-3xl font-bold text-orange-600">-£17,960</div>
                  <div className="text-xs text-serve-green-600 mt-1">↑ Improved from -£115,691</div>
                </div>
                <div className="bg-white rounded-xl p-4 border border-gray-200">
                  <div className="text-sm text-gray-600 mb-1">Total Reserves</div>
                  <div className="text-3xl font-bold text-serve-blue-600">£732,777</div>
                  <div className="text-xs text-gray-500 mt-1">Free reserves: £394,444</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-linear-to-br from-yellow-50 to-white rounded-2xl p-8 border border-yellow-100">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheckIcon className="w-8 h-8 text-yellow-600" />
              <h3 className="text-xl font-bold text-gray-900">Financial Strength</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              SERVE holds reserves of <strong>£732,777</strong>, including <strong>£394,444 in free reserves</strong>, 
              sufficient to cover <strong>three months of operational costs</strong>. This demonstrates strong financial 
              stewardship and sustainability.
            </p>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-16 bg-linear-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <TrophyIcon className="w-10 h-10 text-yellow-600" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Key Achievements 2023-2024
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-serve-blue-100 rounded-xl flex items-center justify-center mb-4">
                <HeartIcon className="w-6 h-6 text-serve-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Homecare Services</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• <strong>29,085 hours</strong> of care delivered</li>
                <li>• <strong>40,919 care calls</strong> completed</li>
                <li>• Income rose to <strong>£790,328</strong></li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-serve-green-100 rounded-xl flex items-center justify-center mb-4">
                <UserGroupIcon className="w-6 h-6 text-serve-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Befriending Services</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Tackled social isolation</li>
                <li>• Individual and group visits</li>
                <li>• Connected older adults with volunteers</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
                <TrophyIcon className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Wellbeing Services</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Day center activities</li>
                <li>• Social programs and events</li>
                <li>• Reduced isolation and improved quality of life</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🚐</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Community Transport</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• <strong>42,435 journeys</strong> facilitated</li>
                <li>• Medical appointments</li>
                <li>• Shopping trips in rural areas</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">💝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Carers&apos; Needs Program</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• <strong>1,000 respite places</strong> offered</li>
                <li>• Support for informal carers</li>
                <li>• Reduced stress and burnout</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                <UserGroupIcon className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Volunteer Contributions</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• <strong>£363,000+</strong> in value</li>
                <li>• <strong>264 dedicated volunteers</strong></li>
                <li>• <strong>29,304 hours</strong> contributed</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Governance & Management
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-linear-to-br from-serve-blue-50 to-white rounded-2xl p-8 border border-serve-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Board of Trustees</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The board underwent changes during the year, with new appointments and resignations to 
                strengthen governance and strategic oversight.
              </p>
              <div className="bg-white rounded-xl p-4 border border-serve-blue-200">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> Trustees receive no remuneration but may claim reasonable expenses 
                  for their service to the charity.
                </p>
              </div>
            </div>

            <div className="bg-linear-to-br from-serve-green-50 to-white rounded-2xl p-8 border border-serve-green-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Senior Management</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4 border border-serve-green-200">
                  <div className="font-bold text-gray-900 mb-1">Jessica Slater</div>
                  <div className="text-sm text-gray-600">CEO during financial year 2023-2024</div>
                </div>
                <div className="bg-white rounded-xl p-4 border border-serve-green-200">
                  <div className="font-bold text-gray-900 mb-1">Tony Gibbs</div>
                  <div className="text-sm text-gray-600">Succeeded as CEO after year-end</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-linear-to-br from-yellow-50 to-white rounded-2xl p-8 border border-yellow-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Risk Management</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Trustees regularly review risks and maintain internal controls to safeguard assets and ensure 
              compliance with all regulatory requirements.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-4 border border-yellow-200 text-center">
                <div className="font-bold text-gray-900 mb-1">Regular Reviews</div>
                <div className="text-sm text-gray-600">Ongoing risk assessment</div>
              </div>
              <div className="bg-white rounded-xl p-4 border border-yellow-200 text-center">
                <div className="font-bold text-gray-900 mb-1">Internal Controls</div>
                <div className="text-sm text-gray-600">Asset safeguarding</div>
              </div>
              <div className="bg-white rounded-xl p-4 border border-yellow-200 text-center">
                <div className="font-bold text-gray-900 mb-1">Compliance</div>
                <div className="text-sm text-gray-600">Regulatory adherence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Plans */}
      <section className="py-16 bg-linear-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Strategic Goals & Future Plans
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="w-10 h-10 bg-serve-blue-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-serve-blue-600 font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Expand Service Accessibility</h3>
              <p className="text-sm text-gray-700">Increase capacity for homecare, befriending, and transport services</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="w-10 h-10 bg-serve-green-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-serve-green-600 font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Financial Sustainability</h3>
              <p className="text-sm text-gray-700">Secure additional funding and strengthen financial stability</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-yellow-600 font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Community Integration</h3>
              <p className="text-sm text-gray-700">Strengthen partnerships and community connections</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-purple-600 font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Volunteer Engagement</h3>
              <p className="text-sm text-gray-700">Enhance recruitment, training, and retention programs</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-red-600 font-bold text-xl">5</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Technology Innovation</h3>
              <p className="text-sm text-gray-700">Leverage technology to improve service delivery</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-indigo-600 font-bold text-xl">6</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Service Growth</h3>
              <p className="text-sm text-gray-700">Meet growing community needs with expanded programs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Audit & Compliance */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-linear-to-br from-serve-blue-50 to-white rounded-2xl p-8 border border-serve-blue-100">
            <div className="flex items-center gap-3 mb-6">
              <ShieldCheckIcon className="w-10 h-10 text-serve-blue-600" />
              <h2 className="text-3xl font-bold text-gray-900">Audit & Compliance</h2>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                The financial statements were audited by <strong>Elsby & Co (Sywell) Ltd</strong>, with no 
                material misstatements or uncertainties identified.
              </p>
              <p>
                SERVE complies with the <strong>Companies Act 2006</strong> and <strong>Charities SORP (FRS 102)</strong>, 
                ensuring transparency and accountability in all financial reporting.
              </p>
              <div className="bg-white rounded-xl p-6 border border-serve-blue-200 mt-6">
                <div className="font-bold text-gray-900 mb-2">✓ Clean Audit Report</div>
                <div className="font-bold text-gray-900 mb-2">✓ Regulatory Compliance</div>
                <div className="font-bold text-gray-900">✓ Transparent Reporting</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Acknowledgements */}
      <section className="py-16 bg-linear-to-br from-serve-blue-700 to-serve-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <HeartIcon className="w-16 h-16 mx-auto mb-6 text-blue-200" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Thank You
          </h2>
          <p className="text-xl text-blue-100 leading-relaxed mb-8">
            The trustees express gratitude to our volunteers, staff, and partners for their 
            invaluable contributions to SERVE&apos;s mission of supporting vulnerable individuals 
            and strengthening our community.
          </p>
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Link 
              href="/get-involved/volunteer"
              className="bg-white text-serve-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Volunteer With Us
            </Link>
            <Link 
              href="/get-involved/donate"
              className="bg-serve-green-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-serve-green-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Donate
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-8 bg-gray-900 text-center">
        <p className="text-gray-400 text-sm">
          This summary is based on SERVE&apos;s Annual Report and Audited Financial Statements for the year ending March 31, 2024
        </p>
      </section>
    </main>
  )
}
