import MajorTitle from '@/components/MajorTitle'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy | SERVE',
  description: 'Information about how SERVE uses cookies and similar technologies on our website, including cookie types, consent management and your rights.',
  alternates: {
    canonical: '/cookies/',
  },
}

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-linear-to-b from-blue-50 via-white to-green-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <MajorTitle primary="Cookie" secondary="Policy" />
        <p className="text-gray-600 mb-8 text-lg">Last updated: October 1, 2024. This Cookie Policy applies to citizens and legal permanent residents of the United Kingdom.</p>

        <section className="space-y-10">
          {/* Section 1 */}
          <article>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed">Our website, <a href="https://serve.org.uk" className="text-serve-blue-600 hover:text-serve-blue-700 underline">https://serve.org.uk</a> (hereinafter: &quot;the website&quot;) uses cookies and other related technologies (for convenience all technologies are referred to as &quot;cookies&quot;). Cookies are also placed by third parties we have engaged. In the document below we inform you about the use of cookies on our website.</p>
          </article>

          {/* Section 2 */}
          <article>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. What Are Cookies?</h2>
            <p className="text-gray-700 leading-relaxed">A cookie is a small simple file that is sent along with pages of this website and stored by your browser on the hard drive of your computer or another device. The information stored therein may be returned to our servers or to the servers of the relevant third parties during a subsequent visit.</p>
          </article>

          {/* Section 3 */}
          <article>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">3. What Are Scripts?</h2>
            <p className="text-gray-700 leading-relaxed">A script is a piece of program code that is used to make our website function properly and interactively. This code is executed on our server or on your device.</p>
          </article>

          {/* Section 4 */}
          <article>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">4. What Is a Web Beacon?</h2>
            <p className="text-gray-700 leading-relaxed">A web beacon (or a pixel tag) is a small, invisible piece of text or image on a website that is used to monitor traffic on a website. In order to do this, various data about you is stored using web beacons.</p>
          </article>

          {/* Section 5 */}
          <article>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Cookies</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">5.1 Technical or Functional Cookies</h3>
                <p>Some cookies ensure that certain parts of the website work properly and that your user preferences remain known. By placing functional cookies, we make it easier for you to visit our website. This way, you do not need to repeatedly enter the same information when visiting our website and, for example, the items remain in your shopping cart until you have paid. We may place these cookies without your consent.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">5.2 Statistics Cookies</h3>
                <p>We use statistics cookies to optimise the website experience for our users. With these statistics cookies we get insights in the usage of our website. We ask your permission to place statistics cookies.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">5.3 Marketing/Tracking Cookies</h3>
                <p>Marketing/Tracking cookies are cookies or any other form of local storage, used to create user profiles to display advertising or to track the user on this website or across several websites for similar marketing purposes.</p>
              </div>
            </div>
          </article>

          {/* Section 6 */}
          <article>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Placed Cookies</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-2">Elementor</h3>
                <p className="text-sm">Statistics (anonymous)</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-2">WordPress</h3>
                <p className="text-sm">Functional</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-2">Google reCAPTCHA</h3>
                <p className="text-sm">Security and spam prevention</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-2">Google Maps</h3>
                <p className="text-sm">Embedded maps functionality</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-2">Miscellaneous</h3>
                <p className="text-sm">Various functional purposes</p>
              </div>
            </div>
          </article>

          {/* Section 7 */}
          <article>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Consent</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>When you visit our website for the first time, we will show you a pop-up with an explanation about cookies. As soon as you click on &quot;Save preferences&quot;, you consent to us using the categories of cookies and plug-ins you selected in the pop-up, as described in this Cookie Policy. You can disable the use of cookies via your browser, but please note that our website may no longer work properly.</p>
              
              <div className="mt-4">
                <h3 className="font-semibold text-gray-800 mb-2">7.1 Manage Your Consent Settings</h3>
                <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Functional</span>
                    <span className="text-serve-green-600 font-medium">Always active</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Statistics</span>
                    <span className="text-gray-500">Configurable</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Marketing</span>
                    <span className="text-gray-500">Configurable</span>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Section 8 */}
          <article>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Enabling/Disabling and Deleting Cookies</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>You can use your internet browser to automatically or manually delete cookies. You can also specify that certain cookies may not be placed. Another option is to change the settings of your internet browser so that you receive a message each time a cookie is placed. For more information about these options, please refer to the instructions in the Help section of your browser.</p>
              <p>Please note that our website may not work properly if all cookies are disabled. If you do delete the cookies in your browser, they will be placed again after your consent when you visit our website again.</p>
            </div>
          </article>

          {/* Section 9 */}
          <article>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Your Rights With Respect to Personal Data</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>You have the following rights with respect to your personal data:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>You have the right to know why your personal data is needed, what will happen to it, and how long it will be retained for.</li>
                <li><strong>Right of access:</strong> You have the right to access your personal data that is known to us.</li>
                <li><strong>Right to rectification:</strong> You have the right to supplement, correct, have deleted or blocked your personal data whenever you wish.</li>
                <li>If you give us your consent to process your data, you have the right to revoke that consent and to have your personal data deleted.</li>
                <li><strong>Right to transfer your data:</strong> You have the right to request all your personal data from the controller and transfer it in its entirety to another controller.</li>
                <li><strong>Right to object:</strong> You may object to the processing of your data. We comply with this, unless there are justified grounds for processing.</li>
              </ul>
              <p>To exercise these rights, please contact us. Please refer to the contact details at the bottom of this Cookie Policy. If you have a complaint about how we handle your data, we would like to hear from you, but you also have the right to submit a complaint to the supervisory authority (the Information Commissioner&apos;s Office (ICO)).</p>
            </div>
          </article>

          {/* Section 10 */}
          <article>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">10. Contact Details</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>For questions and/or comments about our Cookie Policy and this statement, please contact us by using the following contact details:</p>
              <address className="not-italic">
                <strong>Serve</strong><br />
                8 West Street<br />
                Rushden<br />
                Northants<br />
                NN10 0RT<br />
                United Kingdom
              </address>
              <p>Website: <a href="https://serve.org.uk" className="text-serve-blue-600 hover:text-serve-blue-700 underline">https://serve.org.uk</a></p>
              <p>Email: <a href="mailto:info@serve.org.uk" className="text-serve-blue-600 hover:text-serve-blue-700 underline">info@serve.org.uk</a></p>
              <p>Phone number: <a href="tel:01933315555" className="text-serve-blue-600 hover:text-serve-blue-700 underline">01933 315555</a></p>
            </div>
          </article>
        </section>

        <div className="mt-12 pt-8 border-t border-gray-200 space-y-2">
          <p className="text-sm text-gray-500">
            This Cookie Policy was synchronised with <a href="https://cookiedatabase.org" target="_blank" rel="noopener noreferrer" className="text-serve-blue-600 hover:text-serve-blue-700 underline">cookiedatabase.org</a> on October 6, 2024.
          </p>
          <p className="text-sm text-gray-500">
            SERVE | Charity Number: 1043321 | Company Number: 2951827
          </p>
          <p className="text-sm text-gray-500">
            See also: <Link href="/privacy" className="text-serve-blue-600 hover:text-serve-blue-700 underline">Privacy Policy</Link> | <Link href="/terms" className="text-serve-blue-600 hover:text-serve-blue-700 underline">Terms &amp; Conditions</Link>
          </p>
        </div>
      </div>
    </main>
  )
}
