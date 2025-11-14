import MajorTitle from '@/components/MajorTitle'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Accessibility Statement | SERVE',
  description: 'Accessibility commitment for SERVE charity website: standards, testing methods, known limitations, and feedback channels.'
}

export default function AccessibilityStatementPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-green-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <MajorTitle primary="Accessibility" secondary="Statement" />
        <p className="text-gray-600 mb-8">We are committed to meeting WCAG 2.1 AA guidelines ensuring inclusive access for older people and adults with disabilities. This statement outlines our approach and how you can report issues.</p>
        
        <section className="space-y-10">
          <article>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Our Commitment</h2>
            <p className="text-gray-700 leading-relaxed">Design is mobile-first with semantic HTML, ARIA support, sufficient color contrast, scalable text, keyboard navigable components, and reduced motion options where feasible.</p>
          </article>

          <article>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Standards & Methods</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>WCAG 2.1 Level AA target.</li>
              <li>Automated audits (axe, Lighthouse) during development.</li>
              <li>Manual keyboard-only navigation checks.</li>
              <li>Screen reader spot tests (NVDA / VoiceOver) for core user journeys.</li>
            </ul>
          </article>

          <article>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Accessible Features</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Consistent heading hierarchy with descriptive page titles.</li>
              <li>Focus styles visible and high contrast.</li>
              <li>Form fields use associated labels and error messaging.</li>
              <li>Responsive layout supporting zoom up to 200% without loss of content.</li>
              <li>Images have alt text or decorative role.</li>
            </ul>
          </article>

          <article>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Known Limitations</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Third-party embedded content may not fully meet standards.</li>
              <li>Legacy images from historical archives may lack detailed alt text pending review.</li>
              <li>Dynamic social media feeds rely on external APIs influencing structure.</li>
            </ul>
          </article>

          <article>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Feedback & Reporting Issues</h2>
            <p className="text-gray-700 leading-relaxed">If you encounter accessibility barriers email <a href="mailto:info@serve.org.uk" className="text-serve-blue-600 underline">info@serve.org.uk</a>. We aim to respond within 5 working days and provide an initial remediation plan within 20 working days.</p>
          </article>

          <article>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Formal Complaints</h2>
            <p className="text-gray-700 leading-relaxed">Unresolved issues can be escalated to the Charity leadership team or relevant UK regulatory bodies for digital accessibility oversight.</p>
          </article>

          <article>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Statement Review</h2>
            <p className="text-gray-700 leading-relaxed">Reviewed at least annually or after significant redesigns. Last review: November 2025.</p>
          </article>
        </section>

        <div className="mt-10 text-sm text-gray-500">We welcome suggestions to improve accessibility and user comfort.</div>
      </div>
    </main>
  )
}
