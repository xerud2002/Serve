import { Metadata } from 'next'
import Link from 'next/link'
import MajorTitle from '@/components/MajorTitle'
import { 
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
  SparklesIcon,
  HandThumbUpIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Compliments & Complaints | Feedback | SERVE Charity',
  description: 'SERVE\'s compliments and complaints procedure: 3-stage process, response timeframes, and how to provide feedback. We take all comments seriously.',
  keywords: ['complaints procedure', 'SERVE complaints', 'compliments', 'care service feedback', 'charity complaints', 'Care Ombudsman', 'raise a concern'],
  alternates: {
    canonical: '/complaints/',
  },
  openGraph: {
    title: 'Compliments & Complaints | SERVE Charity',
    description: 'How to provide feedback, compliments or raise concerns about SERVE services',
    url: 'https://serve.org.uk/complaints',
    siteName: 'SERVE - Supporting Independence',
    locale: 'en_GB',
    type: 'website',
  },
}

export default function ComplaintsPage() {
  return (
    <main className="min-h-screen bg-linear-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-linear-to-br from-serve-blue-900 via-serve-blue-800 to-serve-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }} 
          />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold bg-linear-to-r from-blue-400 to-cyan-400 text-white shadow-lg mb-6">
            Get In Touch
          </div>
          <MajorTitle 
            primary="Compliments &" 
            secondary="Complaints" 
            size="large"
            dark
          />
          <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
            Your feedback helps us recognise what we're doing well and improve where needed.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 lg:py-28 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Our Commitment */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-serve-blue-100 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-linear-to-br from-serve-blue-100 to-serve-blue-200 rounded-xl flex items-center justify-center">
              <ShieldCheckIcon className="w-6 h-6 text-serve-blue-700" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Our Commitment</h2>
          </div>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              At SERVE, we are committed to providing high-quality, person-centred services for older people 
              and adults with disabilities. Your feedback helps us recognise what we're doing well and improve 
              where needed.
            </p>
            <p className="mb-0">
              If something hasn't gone as expected, we encourage you to let us know. We take all concerns 
              seriously and aim to resolve issues quickly, fairly and confidentially.
            </p>
          </div>
        </div>

        {/* Complaints Process */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-linear-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center">
              <ClockIcon className="w-6 h-6 text-purple-700" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">How the Complaints Process Works</h2>
          </div>

          <div className="space-y-8">
            {/* Stage 1 */}
            <div className="relative">
              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="w-16 h-16 bg-linear-to-br from-serve-blue-600 to-serve-blue-700 text-white rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg">
                    1
                  </div>
                </div>
                <div className="flex-1 bg-linear-to-br from-blue-50 to-white rounded-2xl p-6 border border-blue-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Stage 1 – Speak to the Department Manager</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Most issues can be resolved informally by contacting the relevant manager. They will look into 
                    the matter and aim to respond within <strong className="text-serve-blue-700">21 working days</strong>.
                  </p>
                  <div className="bg-white rounded-xl p-4 border border-blue-200">
                    <p className="text-sm text-gray-600">
                      <strong className="text-gray-900">Note:</strong> If the complaint concerns the Department Manager, 
                      the CEO will handle the complaint at this stage.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stage 2 */}
            <div className="relative">
              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="w-16 h-16 bg-linear-to-br from-serve-green-600 to-serve-green-700 text-white rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg">
                    2
                  </div>
                </div>
                <div className="flex-1 bg-linear-to-br from-green-50 to-white rounded-2xl p-6 border border-green-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Stage 2 – Review by the CEO</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    If you're not satisfied with the outcome, you can escalate your complaint to our Chief Executive 
                    Officer. You will receive an acknowledgement within <strong className="text-serve-green-700">7 working days</strong> and 
                    a further response within <strong className="text-serve-green-700">21 working days</strong>.
                  </p>
                  <div className="bg-white rounded-xl p-4 border border-amber-200 mb-3">
                    <p className="text-sm text-gray-700 mb-2">
                      <strong className="text-amber-700">For domiciliary (personal) care complaints:</strong>
                    </p>
                    <p className="text-sm text-gray-600">
                      The CEO's decision is final. If you remain dissatisfied, you can contact the <strong>Care Ombudsman</strong> on{' '}
                      <a href="tel:03300611614" className="text-serve-blue-600 hover:text-serve-blue-700 font-semibold">0330 061 1614</a>.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stage 3 */}
            <div className="relative">
              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="w-16 h-16 bg-linear-to-br from-purple-600 to-purple-700 text-white rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg">
                    3
                  </div>
                </div>
                <div className="flex-1 bg-linear-to-br from-purple-50 to-white rounded-2xl p-6 border border-purple-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Stage 3 – Review by the Chair of the Board</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    For all other services (non-domiciliary care), you may escalate the complaint to the Chair of the 
                    Board of Trustees if you are still unhappy after Stage 2. The Chair will respond within{' '}
                    <strong className="text-purple-700">21 working days</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Commitments */}
        <div className="bg-linear-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <CheckCircleIcon className="w-7 h-7 text-serve-blue-600" />
            Our Commitment to You
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 bg-white rounded-xl p-4 border border-blue-100">
              <CheckCircleIcon className="w-6 h-6 text-serve-blue-600 shrink-0 mt-0.5" />
              <span className="text-gray-700">Your complaint will be treated with <strong>respect and confidentiality</strong></span>
            </div>
            <div className="flex items-start gap-3 bg-white rounded-xl p-4 border border-blue-100">
              <CheckCircleIcon className="w-6 h-6 text-serve-blue-600 shrink-0 mt-0.5" />
              <span className="text-gray-700">We will respond as <strong>promptly as possible</strong></span>
            </div>
            <div className="flex items-start gap-3 bg-white rounded-xl p-4 border border-blue-100">
              <CheckCircleIcon className="w-6 h-6 text-serve-blue-600 shrink-0 mt-0.5" />
              <span className="text-gray-700">We will <strong>learn from feedback</strong> to improve our services</span>
            </div>
            <div className="flex items-start gap-3 bg-white rounded-xl p-4 border border-blue-100">
              <CheckCircleIcon className="w-6 h-6 text-serve-blue-600 shrink-0 mt-0.5" />
              <span className="text-gray-700">You will <strong>not be disadvantaged</strong> for raising a concern</span>
            </div>
          </div>
        </div>

        {/* Compliments Section */}
        <div className="bg-linear-to-br from-amber-50 via-yellow-50 to-orange-50 rounded-2xl p-8 border border-amber-200 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-linear-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
              <SparklesIcon className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Compliments</h2>
          </div>
          <div className="bg-white rounded-xl p-6 border border-amber-200">
            <div className="flex items-start gap-4 mb-4">
              <HandThumbUpIcon className="w-8 h-8 text-amber-600 shrink-0 mt-1" />
              <p className="text-gray-700 leading-relaxed text-lg">
                If you've had a positive experience with a member of our team or one of our services, we'd love to 
                hear from you. Compliments help us celebrate our staff and volunteers and share good practice across 
                the organisation.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Methods */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-linear-to-br from-serve-green-100 to-serve-green-200 rounded-xl flex items-center justify-center">
              <ChatBubbleLeftRightIcon className="w-6 h-6 text-serve-green-700" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">To Make a Compliment or Complaint</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Phone */}
            <div className="bg-linear-to-br from-blue-50 to-white rounded-xl p-6 border border-blue-100 text-center">
              <div className="w-14 h-14 bg-serve-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <PhoneIcon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Phone</h3>
              <a 
                href="tel:01933315555" 
                className="text-2xl font-bold text-serve-blue-600 hover:text-serve-blue-700 transition-colors"
              >
                01933 315555
              </a>
            </div>

            {/* Email */}
            <div className="bg-linear-to-br from-purple-50 to-white rounded-xl p-6 border border-purple-100 text-center">
              <div className="w-14 h-14 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <EnvelopeIcon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
              <a 
                href="mailto:info@serve.org.uk" 
                className="text-lg font-bold text-purple-600 hover:text-purple-700 transition-colors break-all"
              >
                info@serve.org.uk
              </a>
            </div>

            {/* Post */}
            <div className="bg-linear-to-br from-green-50 to-white rounded-xl p-6 border border-green-100 text-center">
              <div className="w-14 h-14 bg-serve-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <BuildingOfficeIcon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Post</h3>
              <address className="not-italic text-gray-700 text-sm">
                SERVE<br />
                8 West Street<br />
                Rushden<br />
                NN10 0RT
              </address>
            </div>
          </div>
        </div>

        {/* Accessibility & Policy */}
        <div className="bg-linear-to-br from-slate-50 to-white rounded-2xl p-8 border border-gray-200 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Accessibility & Support</h2>
          <div className="space-y-4 text-gray-700">
            <p className="leading-relaxed">
              If you need this information in another format or require support to make a complaint, please contact 
              us and we will be happy to help.
            </p>
            <p className="leading-relaxed">
              You can also request a full copy of our <strong>Compliments and Complaints Policy</strong> at any time.
            </p>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-linear-to-br from-serve-blue-600 to-purple-700 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">We're Here to Listen</h2>
          <p className="text-blue-100 mb-6 text-lg max-w-2xl mx-auto">
            Whether you want to share a compliment or raise a concern, our team is ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:01933315555"
              className="inline-flex items-center justify-center bg-white text-serve-blue-700 hover:bg-blue-50 px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 shadow-lg min-h-11 min-w-11"
            >
              <PhoneIcon className="w-6 h-6 mr-2" />
              Call 01933 315555
            </a>
            <a
              href="mailto:info@serve.org.uk"
              className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 border border-white/30 min-h-11 min-w-11"
            >
              <EnvelopeIcon className="w-6 h-6 mr-2" />
              Email Us
            </a>
          </div>
        </div>

        {/* Related Pages */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Information</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link 
              href="/privacy/" 
              className="text-serve-blue-600 hover:text-serve-blue-700 hover:underline"
            >
              Privacy Policy →
            </Link>
            <Link 
              href="/accessibility/" 
              className="text-serve-blue-600 hover:text-serve-blue-700 hover:underline"
            >
              Accessibility →
            </Link>
            <Link 
              href="/contact/" 
              className="text-serve-blue-600 hover:text-serve-blue-700 hover:underline"
            >
              Contact Us →
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}