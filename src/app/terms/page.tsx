import MajorTitle from '@/components/MajorTitle'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions | SERVE',
  description: 'Key terms governing use of the SERVE charity website, summary of acceptable use, limitations of liability and user rights.'
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-green-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <MajorTitle primary="Terms &" secondary="Conditions" />
        <p className="text-gray-600 mb-8">Effective Date: 1st September 2024. Adapted summary of official terms at serve.org.uk/terms-and-conditions. Full legal wording retained in master document. Using this site implies acceptance.</p>
        
        <section className="space-y-10">
          <article>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed">Use of this website constitutes agreement to these terms. If you disagree, please discontinue use.</p>
          </article>

          <article>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Copyright</h2>
            <p className="text-gray-700 leading-relaxed">© SERVE. All content reserved unless expressly licensed. No republication or commercial exploitation without prior written consent.</p>
          </article>

          <article>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Permitted Use</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>View pages in a browser and cache for normal use.</li>
              <li>Print limited pages for personal non-commercial reference.</li>
              <li>Use public interfaces only; do not attempt restricted areas.</li>
            </ul>
          </article>

          <article>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Prohibited Actions</h2>
            <p className="text-gray-700 leading-relaxed">No hacking, automated scraping, unlawful, defamatory, or disruptive activity. Do not attempt authentication circumvention or excessive resource load.</p>
          </article>

          <article>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Accounts</h2>
            <p className="text-gray-700 leading-relaxed">Account access (where provided) must be secured. Report suspected compromise immediately. No impersonation permitted.</p>
          </article>

          <article>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">6. User Content</h2>
            <p className="text-gray-700 leading-relaxed">Content you submit must respect legal rights and not contain unlawful, harmful, or infringing material. You grant SERVE a licence to store and display submitted content.</p>
          </article>

          <article>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Warranties & Liability</h2>
            <p className="text-gray-700 leading-relaxed">Site provided &quot;as is&quot; without guarantees of completeness or uninterrupted availability. Liability is limited to the extent permitted by English law.</p>
          </article>

          <article>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Variation</h2>
            <p className="text-gray-700 leading-relaxed">We may revise terms; continued use after changes constitutes acceptance. Material changes will be signposted.</p>
          </article>

          <article>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Governing Law</h2>
            <p className="text-gray-700 leading-relaxed">English law governs. Courts of England have jurisdiction over disputes.</p>
          </article>

          <article>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">10. Contact</h2>
            <p className="text-gray-700 leading-relaxed">Queries: info@serve.org.uk | 8 West Street, Rushden, NN10 0RT | Tel: 01933 315555.</p>
          </article>
        </section>

        <div className="mt-10 text-sm text-gray-500">This summary is not a substitute for the full legal terms; in any conflict the full version prevails.</div>
      </div>
    </main>
  )
}
