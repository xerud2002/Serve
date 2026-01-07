import MajorTitle from '@/components/MajorTitle'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | SERVE',
  description: 'How SERVE collects, uses, stores and protects personal data. GDPR and UK data protection rights for service users, supporters and volunteers.',
  alternates: {
    canonical: '/privacy/',
  },
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-linear-to-b from-blue-50 via-white to-green-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <MajorTitle primary="Privacy" secondary="Policy" />
        <p className="text-gray-600 mb-8 text-lg">Effective Date: 1st September 2024</p>

        <div className="prose prose-gray max-w-none">
          <p className="text-gray-700 leading-relaxed mb-8">
            At Serve your privacy is critically important to us. This privacy policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website <a href="https://serve.org.uk" className="text-serve-blue-600 hover:text-serve-blue-700 underline">serve.org.uk</a>. Please read this privacy policy carefully. If you do not agree with the terms of this policy, please do not access the site.
          </p>
        </div>

        <section className="space-y-10">
          {/* Section 1 */}
          <article>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Who We Are</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>Serve is a UK-based charity committed to supporting older people and adults with disabilities in Northamptonshire and beyond.</p>
              <p>Our registered address is:</p>
              <address className="not-italic pl-4">
                8 West Street<br />
                Rushden<br />
                Northants<br />
                NN10 0RT
              </address>
              <p>Our contact email is: <a href="mailto:info@serve.org.uk" className="text-serve-blue-600 hover:text-serve-blue-700 underline">info@serve.org.uk</a></p>
            </div>
          </article>

          {/* Section 2 */}
          <article>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Information We Collect</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>We may collect the following categories of personal data about you:</p>
              
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">A. Information You Provide to Us</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Contact Information:</strong> Your name, email address, phone number, and postal address, if provided when using contact forms, donations, or subscription to newsletters.</li>
                  <li><strong>Donation Information:</strong> If you donate via the website, we collect your name, address, email, and payment details (processed by a third-party payment processor).</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">B. Information Automatically Collected</h3>
                <p>When you visit our website, we automatically collect information, such as:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Device and operating system</li>
                  <li>Pages viewed and time spent on our site</li>
                  <li>Cookies and similar technologies (see Section 8 for more details)</li>
                </ul>
              </div>
            </div>
          </article>

          {/* Section 3 */}
          <article>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">3. How We Use Your Information</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>We use the information collected for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>To provide and improve our services:</strong> We use your personal data to provide you with our services, including responding to enquiries and requests.</li>
                <li><strong>To process donations:</strong> We use your information to manage donations, including any gift aid claims.</li>
                <li><strong>To communicate with you:</strong> We may send you emails about our services, events, and news if you have opted in.</li>
                <li><strong>For website analytics and improvement:</strong> We use your browsing data to analyse usage patterns to improve the performance and user experience of our Site.</li>
                <li><strong>Compliance with legal obligations:</strong> We may need to process your personal data to comply with our legal obligations under UK law and the GDPR.</li>
              </ul>
            </div>
          </article>

          {/* Section 4 */}
          <article>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Legal Basis for Processing</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>We process your personal information under the following legal bases:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Consent:</strong> For activities like sending newsletters or promotional materials, we rely on your consent.</li>
                <li><strong>Legitimate Interests:</strong> For most of our processing, including analysing website performance and responding to enquiries, we rely on legitimate interests to provide, maintain, and improve our services.</li>
                <li><strong>Legal Obligations:</strong> In some cases, we are required to process your data to comply with legal or regulatory obligations.</li>
              </ul>
            </div>
          </article>

          {/* Section 5 */}
          <article>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Sharing Your Information</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>We will not sell or rent your personal data. However, we may share your information with third parties in the following circumstances:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Service Providers:</strong> We may share your data with trusted third-party vendors (e.g. IT services, payment processors, etc.) to assist us in operating the website and providing services.</li>
                <li><strong>Legal and Regulatory Compliance:</strong> We may share your information if required by law, such as in response to a court order or regulatory demand.</li>
              </ul>
            </div>
          </article>

          {/* Section 6 */}
          <article>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">6. International Data Transfers</h2>
            <p className="text-gray-700 leading-relaxed">We store your data on servers within the UK or European Economic Area (EEA). However, if any service providers are located outside of the UK or EEA, we will ensure that adequate safeguards, such as Standard Contractual Clauses, are in place to protect your data.</p>
          </article>

          {/* Section 7 */}
          <article>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Data Retention</h2>
            <p className="text-gray-700 leading-relaxed">We will retain your personal data only for as long as necessary to fulfil the purposes for which we collected it, including to comply with any legal, accounting, or reporting requirements. When the data is no longer needed, we will securely delete or anonymize it.</p>
          </article>

          {/* Section 8 */}
          <article>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Cookies and Tracking Technologies</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>We use cookies and similar tracking technologies to enhance your browsing experience. Cookies are small text files that are stored on your device by your web browser. You can set your browser to refuse cookies or notify you when cookies are being used.</p>
              <p><strong>Types of cookies we use:</strong></p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Essential Cookies:</strong> Necessary for the operation of the Site.</li>
                <li><strong>Analytical/Performance Cookies:</strong> Help us improve the website by tracking user behaviour.</li>
                <li><strong>Functional Cookies:</strong> Used to recognise you when you return to our website, improving your user experience.</li>
              </ul>
              <p>For more details, refer to our <Link href="/cookies" className="text-serve-blue-600 hover:text-serve-blue-700 underline">Cookie Policy</Link>.</p>
            </div>
          </article>

          {/* Section 9 */}
          <article>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Your Data Protection Rights</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>Under the General Data Protection Regulation (GDPR), you have certain rights regarding your personal data, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Right of access:</strong> You have the right to request copies of your personal data that we hold about you.</li>
                <li><strong>Right to rectification:</strong> You have the right to request correction of any incomplete or inaccurate data.</li>
                <li><strong>Right to erasure:</strong> You have the right to request the deletion of your data under certain circumstances.</li>
                <li><strong>Right to restrict processing:</strong> You have the right to request that we limit the processing of your data.</li>
                <li><strong>Right to object:</strong> You may object to our processing of your data in some instances.</li>
                <li><strong>Right to data portability:</strong> You have the right to request a copy of your data in a format that can be transferred to another service provider.</li>
                <li><strong>Right to withdraw consent:</strong> If you provided consent for data processing, you may withdraw it at any time.</li>
              </ul>
              <p>To exercise any of these rights, please contact us at <a href="mailto:info@serve.org.uk" className="text-serve-blue-600 hover:text-serve-blue-700 underline">info@serve.org.uk</a>. We will respond within one month.</p>
            </div>
          </article>

          {/* Section 10 */}
          <article>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">10. Data Security</h2>
            <p className="text-gray-700 leading-relaxed">We use appropriate technical and organizational security measures to protect your personal data. These include encryption, firewalls, and secure servers. However, no method of transmission over the internet is 100% secure, and we cannot guarantee the absolute security of your data.</p>
          </article>

          {/* Section 11 */}
          <article>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">11. Third-Party Links</h2>
            <p className="text-gray-700 leading-relaxed">Our website may contain links to other websites not operated by us. If you click on a third-party link, you will be directed to that website. We are not responsible for the privacy practices of these third-party sites and encourage you to review their privacy policies.</p>
          </article>

          {/* Section 12 */}
          <article>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">12. Changes to This Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed">We may update this privacy policy from time to time to reflect changes in our practices or for legal, regulatory, or operational reasons. We will notify you of significant changes by posting an updated policy on this page and revising the effective date.</p>
          </article>

          {/* Section 13 */}
          <article>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">13. Contact Us</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>If you have any questions or concerns about this privacy policy or how we handle your personal data, please contact us at:</p>
              <p>Email: <a href="mailto:info@serve.org.uk" className="text-serve-blue-600 hover:text-serve-blue-700 underline">info@serve.org.uk</a></p>
              <p>Address: 8 West Street, Rushden, NN10 0RT</p>
            </div>
          </article>
        </section>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            SERVE | Charity Number: 1043321 | Company Number: 2951827
          </p>
        </div>
      </div>
    </main>
  )
}
