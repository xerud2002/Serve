import MajorTitle from '@/components/MajorTitle'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | SERVE',
  description: 'How SERVE collects, uses, stores and protects personal data. GDPR and UK data protection rights for service users, supporters and volunteers.'
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-green-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <MajorTitle primary="Privacy" secondary="Policy" />
        <p className="text-gray-600 mb-8">Effective Date: 1st September 2024. This page summarises the official policy published at serve.org.uk/privacy-policy. For full wording retain your master document. Contact info@serve.org.uk for any clarification or data requests.</p>

        <section className="space-y-10">
          <article>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Who We Are</h2>
            <p className="text-gray-700 leading-relaxed">SERVE is a UK charity supporting older people and adults with disabilities. Registered address: 8 West Street, Rushden, NN10 0RT. Charity No: 1043321. Company No: 2951827. Contact: info@serve.org.uk.</p>
          </article>

          <article>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Data We Collect</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Contact details you submit (name, email, phone, address).</li>
              <li>Donation details (processed by third-party payment processors).</li>
              <li>Volunteer / assessment enquiry details.</li>
              <li>Analytics (IP, browser, device, pages viewed, time on site).</li>
              <li>Cookies (see Cookie Policy for classifications).</li>
            </ul>
          </article>

          <article>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Data</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Provide and improve services and respond to enquiries.</li>
              <li>Process donations and associated Gift Aid where applicable.</li>
              <li>Send opted-in communications (news, events, volunteering).</li>
              <li>Security, fraud prevention and platform performance monitoring.</li>
              <li>Legal and regulatory compliance (e.g. safeguarding, finance).</li>
            </ul>
          </article>

          <article>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Legal Bases</h2>
            <p className="text-gray-700 leading-relaxed">We rely on Consent (marketing emails), Legitimate Interests (service delivery & analytics), Contract (volunteer/service agreements), and Legal Obligations (accounting, safeguarding, charity compliance).</p>
          </article>

          <article>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Sharing</h2>
            <p className="text-gray-700 leading-relaxed">We do not sell data. Limited sharing with vetted service providers (IT, payment processors, email delivery) under data processing agreements; law enforcement or regulators when legally required.</p>
          </article>

          <article>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. International Transfers</h2>
            <p className="text-gray-700 leading-relaxed">If data moves outside the UK/EEA via a processor we use Standard Contractual Clauses or equivalent safeguards.</p>
          </article>

          <article>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Retention</h2>
            <p className="text-gray-700 leading-relaxed">Data retained only as long as required for service provision, legal, accounting or reporting obligations, then securely deleted or anonymised.</p>
          </article>

          <article>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Cookies</h2>
            <p className="text-gray-700 leading-relaxed">Essential, analytical/performance, and functional cookies may be used. You can adjust browser settings to refuse cookies. See Cookie Policy for full details.</p>
          </article>

          <article>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Your Rights (GDPR)</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Access, Rectification, Erasure, Restriction, Objection, Portability.</li>
              <li>Withdraw consent at any time where processing relied on consent.</li>
              <li>Submit requests to info@serve.org.uk. We aim to respond within one month.</li>
            </ul>
          </article>

          <article>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Security</h2>
            <p className="text-gray-700 leading-relaxed">We apply proportionate technical and organisational measures (access controls, encryption in transit, monitoring). No internet transmission is 100% secure.</p>
          </article>

          <article>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Third-Party Links</h2>
            <p className="text-gray-700 leading-relaxed">Linked external sites have their own privacy policies. Review them independently.</p>
          </article>

          <article>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Changes</h2>
            <p className="text-gray-700 leading-relaxed">Policy updates posted here with a revised effective date. Historic versions available on request.</p>
          </article>

          <article>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact & Data Requests</h2>
            <p className="text-gray-700 leading-relaxed">Email info@serve.org.uk or write to 8 West Street, Rushden, NN10 0RT for privacy queries or rights requests.</p>
          </article>
        </section>

        <div className="mt-12 text-sm text-gray-500">This summary is provided for convenience; where wording differs the full official policy prevails.</div>
      </div>
    </main>
  )
}
