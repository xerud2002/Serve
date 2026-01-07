import MajorTitle from '@/components/MajorTitle'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions | SERVE',
  description: 'Terms and conditions of use for the SERVE charity website, including acceptable use, copyright, liability limitations and user rights.',
  alternates: {
    canonical: '/terms/',
  },
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-linear-to-b from-blue-50 via-white to-green-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <MajorTitle primary="Terms & Conditions" secondary="of Use" />
        <p className="text-gray-600 mb-8 text-lg">Effective Date: 1st September 2024</p>
        
        <section className="space-y-10">
          {/* Section 1 */}
          <article>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Introduction</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>1.1 These terms and conditions shall govern your use of our website.</p>
              <p>1.2 By using our website, you accept these terms and conditions in full; accordingly, if you disagree with these terms and conditions or any part of these terms and conditions, you must not use our website.</p>
              <p>1.3 If you register with our website, submit any material to our website or use any of our website services, we will ask you to expressly agree to these terms and conditions.</p>
              <p>1.4 You must be at least 18 years of age to use our website; by using our website or agreeing to these terms and conditions, you warrant and represent to us that you are at least 18 years of age.</p>
            </div>
          </article>

          {/* Section 2 */}
          <article>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Credit</h2>
            <p className="text-gray-700 leading-relaxed">2.1 This document was created using a template from Docular.</p>
          </article>

          {/* Section 3 */}
          <article>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Copyright Notice</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>3.1 Copyright © 2024 SERVE</p>
              <p>3.2 Subject to the express provisions of these terms and conditions:</p>
              <ul className="list-[lower-alpha] pl-6 space-y-2">
                <li>we, together with our licensors, own and control all the copyright and other intellectual property rights in our website and the material on our website; and</li>
                <li>all the copyright and other intellectual property rights in our website and the material on our website are reserved.</li>
              </ul>
            </div>
          </article>

          {/* Section 4 */}
          <article>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Permission to Use Website</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>4.1 You may:</p>
              <ul className="list-[lower-alpha] pl-6 space-y-2">
                <li>view pages from our website in a web browser;</li>
                <li>download pages from our website for caching in a web browser;</li>
                <li>print pages from our website for your own personal and non-commercial use, providing that such printing is not systematic or excessive;</li>
                <li>stream audio and video files from our website; and</li>
                <li>use our website services by means of a web browser,</li>
              </ul>
              <p>subject to the other provisions of these terms and conditions.</p>
              <p>4.2 Except as expressly permitted by Section 4.1 or the other provisions of these terms and conditions, you must not download any material from our website or save any such material to your computer.</p>
              <p>4.3 You may only use our website for your own personal and business purposes; you must not use our website for any other purposes.</p>
              <p>4.4 Except as expressly permitted by these terms and conditions, you must not edit or otherwise modify any material on our website.</p>
              <p>4.5 Unless you own or control the relevant rights in the material, you must not:</p>
              <ul className="list-[lower-alpha] pl-6 space-y-2">
                <li>republish material from our website (including republication on another website);</li>
                <li>sell, rent or sub-license material from our website;</li>
                <li>show any material from our website in public;</li>
                <li>exploit material from our website for a commercial purpose; or</li>
                <li>redistribute material from our website.</li>
              </ul>
              <p>4.6 Notwithstanding Section 4.5, you may redistribute our newsletter in print and electronic form.</p>
              <p>4.7 We reserve the right to suspend or restrict access to our website, to areas of our website and/or to functionality upon our website. We may, for example, suspend access to the website during server maintenance or when we update the website. You must not circumvent or bypass, or attempt to circumvent or bypass, any access restriction measures on the website.</p>
            </div>
          </article>

          {/* Section 5 */}
          <article>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Misuse of Website</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>5.1 You must not:</p>
              <ul className="list-[lower-alpha] pl-6 space-y-2">
                <li>use our website in any way or take any action that causes, or may cause, damage to the website or impairment of the performance, availability, accessibility, integrity or security of the website;</li>
                <li>use our website in any way that is unlawful, illegal, fraudulent or harmful, or in connection with any unlawful, illegal, fraudulent or harmful purpose or activity;</li>
                <li>hack or otherwise tamper with our website;</li>
                <li>probe, scan or test the vulnerability of our website without our permission;</li>
                <li>circumvent any authentication or security systems or processes on or relating to our website;</li>
                <li>use our website to copy, store, host, transmit, send, use, publish or distribute any material which consists of (or is linked to) any spyware, computer virus, Trojan horse, worm, keystroke logger, rootkit or other malicious computer software;</li>
                <li>impose an unreasonably large load on our website resources (including bandwidth, storage capacity and processing capacity);</li>
                <li>decrypt or decipher any communications sent by or to our website without our permission;</li>
                <li>conduct any systematic or automated data collection activities (including without limitation scraping, data mining, data extraction and data harvesting) on or in relation to our website without our express written consent;</li>
                <li>access or otherwise interact with our website using any robot, spider or other automated means, except for the purpose of search engine indexing;</li>
                <li>use our website except by means of our public interfaces;</li>
                <li>violate the directives set out in the robots.txt file for our website;</li>
                <li>use data collected from our website for any direct marketing activity (including without limitation email marketing, SMS marketing, telemarketing and direct mailing); or</li>
                <li>do anything that interferes with the normal use of our website.</li>
              </ul>
              <p>5.2 You must not use data collected from our website to contact individuals, companies or other persons or entities.</p>
              <p>5.3 You must ensure that all the information you supply to us through our website, or in relation to our website, is true, accurate, current, complete and non-misleading.</p>
            </div>
          </article>

          {/* Section 6 */}
          <article>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Registration and Accounts</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>6.1 To be eligible for an account on our website under this Section 6, you must be resident or situated in the United Kingdom.</p>
              <p>6.2 You may register for an account with our website by contacting us directly.</p>
              <p>6.3 You must not allow any other person to use your account to access the website.</p>
              <p>6.4 You must notify us in writing immediately if you become aware of any unauthorised use of your account.</p>
              <p>6.5 You must not use any other person&apos;s account to access the website, unless you have that person&apos;s express permission to do so.</p>
            </div>
          </article>

          {/* Section 7 */}
          <article>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">7. User Login Details</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>7.1 If you register for an account with our website, we will provide you with or you will be asked to choose a user ID and password.</p>
              <p>7.2 Your user ID must not be liable to mislead and must comply with the content rules set out in Section 10; you must not use your account or user ID for or in connection with the impersonation of any person.</p>
              <p>7.3 You must keep your password confidential.</p>
              <p>7.4 You must notify us in writing immediately if you become aware of any disclosure of your password.</p>
              <p>7.5 You are responsible for any activity on our website arising out of any failure to keep your password confidential, and may be held liable for any losses arising out of such a failure.</p>
            </div>
          </article>

          {/* Section 8 */}
          <article>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Cancellation and Suspension of Account</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>8.1 We may:</p>
              <ul className="list-[lower-alpha] pl-6 space-y-2">
                <li>suspend your account;</li>
                <li>cancel your account; and/or</li>
                <li>edit your account details,</li>
              </ul>
              <p>at any time in our sole discretion with or without notice to you.</p>
              <p>8.2 We will usually cancel an account if it remains unused for a continuous period of 18 months.</p>
              <p>8.3 You may cancel your account on our website using your account control panel on the website.</p>
            </div>
          </article>

          {/* Section 9 */}
          <article>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Our Rights to Use Your Content</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>9.1 In these terms and conditions, &quot;your content&quot; means all works and materials (including without limitation text, graphics, images, audio material, video material, audio-visual material, scripts, software and files) that you submit to us or our website for storage or publication on, processing by, or transmission via, our website.</p>
              <p>9.2 You grant to us a worldwide, irrevocable, non-exclusive, royalty-free licence to use, reproduce, store, adapt, publish, translate and distribute your content in any existing or future media, or reproduce, store and publish your content on and in relation to this website and any successor website.</p>
              <p>9.3 You grant to us the right to sub-license the rights licensed under Section 9.2.</p>
              <p>9.4 You grant to us the right to bring an action for infringement of the rights licensed under Section 9.2.</p>
              <p>9.5 You hereby waive all your moral rights in your content to the maximum extent permitted by applicable law; and you warrant and represent that all other moral rights in your content have been waived to the maximum extent permitted by applicable law.</p>
              <p>9.6 You may edit your content to the extent permitted using the editing functionality made available on our website.</p>
              <p>9.7 Without prejudice to our other rights under these terms and conditions, if you breach any provision of these terms and conditions in any way, or if we reasonably suspect that you have breached these terms and conditions in any way, we may delete, unpublish or edit any or all of your content.</p>
            </div>
          </article>

          {/* Section 10 */}
          <article>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">10. Rules About Your Content</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>10.1 You warrant and represent that your content will comply with these terms and conditions.</p>
              <p>10.2 Your content must not be illegal or unlawful, must not infringe any person&apos;s legal rights, and must not be capable of giving rise to legal action against any person (in each case in any jurisdiction and under any applicable law).</p>
              <p>10.3 Your content, and the use of your content by us in accordance with these terms and conditions, must not:</p>
              <ul className="list-[lower-alpha] pl-6 space-y-2">
                <li>be libellous or maliciously false;</li>
                <li>be obscene or indecent;</li>
                <li>infringe any copyright, moral right, database right, trade mark right, design right, right in passing off or other intellectual property right;</li>
                <li>infringe any right of confidence, right of privacy or right under data protection legislation;</li>
                <li>constitute negligent advice or contain any negligent statement;</li>
                <li>constitute an incitement to commit a crime, instructions for the commission of a crime or the promotion of criminal activity;</li>
                <li>be in contempt of any court or in breach of any court order;</li>
                <li>be in breach of racial or religious hatred or discrimination legislation;</li>
                <li>be blasphemous;</li>
                <li>be in breach of official secrets legislation;</li>
                <li>be in breach of any contractual obligation owed to any person;</li>
                <li>depict violence in an explicit, graphic or gratuitous manner;</li>
                <li>be pornographic, lewd, suggestive or sexually explicit;</li>
                <li>be untrue, false, inaccurate or misleading;</li>
                <li>consist of or contain any instructions, advice or other information which may be acted upon and could, if acted upon, cause illness, injury or death, or any other loss or damage;</li>
                <li>constitute spam;</li>
                <li>be offensive, deceptive, fraudulent, threatening, abusive, harassing, anti-social, menacing, hateful, discriminatory or inflammatory; or</li>
                <li>cause annoyance, inconvenience or needless anxiety to any person.</li>
              </ul>
            </div>
          </article>

          {/* Section 11 */}
          <article>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">11. Limited Warranties</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>11.1 We do not warrant or represent:</p>
              <ul className="list-[lower-alpha] pl-6 space-y-2">
                <li>the completeness or accuracy of the information published on our website;</li>
                <li>that the material on the website is up to date;</li>
                <li>that the website will operate without fault; or</li>
                <li>that the website or any service on the website will remain available.</li>
              </ul>
              <p>11.2 We reserve the right to discontinue or alter any or all of our website services, and to stop publishing our website, at any time in our sole discretion without notice or explanation; and save to the extent expressly provided otherwise in these terms and conditions, you will not be entitled to any compensation or other payment upon the discontinuance or alteration of any website services, or if we stop publishing the website.</p>
              <p>11.3 To the maximum extent permitted by applicable law and subject to Section 12.1, we exclude all representations and warranties relating to the subject matter of these terms and conditions, our website and the use of our website.</p>
            </div>
          </article>

          {/* Section 12 */}
          <article>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">12. Limitations and Exclusions of Liability</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>12.1 Nothing in these terms and conditions will:</p>
              <ul className="list-[lower-alpha] pl-6 space-y-2">
                <li>limit or exclude any liability for death or personal injury resulting from negligence;</li>
                <li>limit or exclude any liability for fraud or fraudulent misrepresentation;</li>
                <li>limit any liabilities in any way that is not permitted under applicable law; or</li>
                <li>exclude any liabilities that may not be excluded under applicable law.</li>
              </ul>
              <p>12.2 The limitations and exclusions of liability set out in this Section 12 and elsewhere in these terms and conditions:</p>
              <ul className="list-[lower-alpha] pl-6 space-y-2">
                <li>are subject to Section 12.1; and</li>
                <li>govern all liabilities arising under these terms and conditions or relating to the subject matter of these terms and conditions, including liabilities arising in contract, in tort (including negligence) and for breach of statutory duty, except to the extent expressly provided otherwise in these terms and conditions.</li>
              </ul>
              <p>12.3 To the extent that our website and the information and services on our website are provided free of charge, we will not be liable for any loss or damage of any nature.</p>
              <p>12.4 We will not be liable to you in respect of any losses arising out of any event or events beyond our reasonable control.</p>
              <p>12.5 We will not be liable to you in respect of any business losses, including (without limitation) loss of or damage to profits, income, revenue, use, production, anticipated savings, business, contracts, commercial opportunities or goodwill.</p>
              <p>12.6 We will not be liable to you in respect of any loss or corruption of any data, database or software.</p>
              <p>12.7 We will not be liable to you in respect of any special, indirect or consequential loss or damage.</p>
              <p>12.8 You accept that we have an interest in limiting the personal liability of our officers and employees and, having regard to that interest, you acknowledge that we are a limited liability entity; you agree that you will not bring any claim personally against our officers or employees in respect of any losses you suffer in connection with the website or these terms and conditions (this will not, of course, limit or exclude the liability of the limited liability entity itself for the acts and omissions of our officers and employees).</p>
            </div>
          </article>

          {/* Section 13 */}
          <article>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">13. Breaches of These Terms and Conditions</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>13.1 Without prejudice to our other rights under these terms and conditions, if you breach these terms and conditions in any way, or if we reasonably suspect that you have breached these terms and conditions in any way, we may:</p>
              <ul className="list-[lower-alpha] pl-6 space-y-2">
                <li>send you one or more formal warnings;</li>
                <li>temporarily suspend your access to our website;</li>
                <li>permanently prohibit you from accessing our website;</li>
                <li>block computers using your IP address from accessing our website;</li>
                <li>contact any or all of your internet service providers and request that they block your access to our website;</li>
                <li>commence legal action against you, whether for breach of contract or otherwise; and/or</li>
                <li>suspend or delete your account on our website.</li>
              </ul>
              <p>13.2 Where we suspend or prohibit or block your access to our website or a part of our website, you must not take any action to circumvent such suspension or prohibition or blocking (including without limitation creating and/or using a different account).</p>
            </div>
          </article>

          {/* Section 14 */}
          <article>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">14. Variation</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>14.1 We may revise these terms and conditions from time to time.</p>
              <p>14.2 The revised terms and conditions shall apply to the use of our website from the date of publication of the revised terms and conditions on the website, and you hereby waive any right you may otherwise have to be notified of, or to consent to, revisions of these terms and conditions.</p>
              <p>14.3 If you have given your express agreement to these terms and conditions, we will ask for your express agreement to any revision of these terms and conditions; and if you do not give your express agreement to the revised terms and conditions within such period as we may specify, we will disable or delete your account on the website, and you must stop using the website.</p>
            </div>
          </article>

          {/* Section 15 */}
          <article>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">15. Assignment</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>15.1 You hereby agree that we may assign, transfer, sub-contract or otherwise deal with our rights and/or obligations under these terms and conditions.</p>
              <p>15.2 You may not without our prior written consent assign, transfer, sub-contract or otherwise deal with any of your rights and/or obligations under these terms and conditions.</p>
            </div>
          </article>

          {/* Section 16 */}
          <article>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">16. Severability</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>16.1 If a provision of these terms and conditions is determined by any court or other competent authority to be unlawful and/or unenforceable, the other provisions will continue in effect.</p>
              <p>16.2 If any unlawful and/or unenforceable provision of these terms and conditions would be lawful or enforceable if part of it were deleted, that part will be deemed to be deleted, and the rest of the provision will continue in effect.</p>
            </div>
          </article>

          {/* Section 17 */}
          <article>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">17. Third Party Rights</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>17.1 A contract under these terms and conditions is for our benefit and your benefit, and is not intended to benefit or be enforceable by any third party.</p>
              <p>17.2 The exercise of the parties&apos; rights under a contract under these terms and conditions is not subject to the consent of any third party.</p>
            </div>
          </article>

          {/* Section 18 */}
          <article>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">18. Entire Agreement</h2>
            <p className="text-gray-700 leading-relaxed">18.1 Subject to Section 12.1, these terms and conditions, together with our <Link href="/privacy" className="text-serve-blue-600 hover:text-serve-blue-700 underline">privacy policy</Link>, shall constitute the entire agreement between you and us in relation to your use of our website and shall supersede all previous agreements between you and us in relation to your use of our website.</p>
          </article>

          {/* Section 19 */}
          <article>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">19. Law and Jurisdiction</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>19.1 These terms and conditions shall be governed by and construed in accordance with English law.</p>
              <p>19.2 Any disputes relating to these terms and conditions shall be subject to the exclusive jurisdiction of the courts of England.</p>
            </div>
          </article>

          {/* Section 20 */}
          <article>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">20. Our Details</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>20.1 This website is owned and operated by SERVE.</p>
              <p>20.2 We are registered in England and Wales under registration number 1043321 and our registered office is at 8 West Street, Rushden, NN10 0RT.</p>
              <p>20.3 Our principal place of business is at 8 West Street, Rushden, NN10 0RT.</p>
              <p>20.4 You can contact us:</p>
              <ul className="list-[lower-alpha] pl-6 space-y-2">
                <li>by post, to the postal address given above;</li>
                <li>using our <Link href="/contact" className="text-serve-blue-600 hover:text-serve-blue-700 underline">website contact form</Link>;</li>
                <li>by telephone, on <a href="tel:01933315555" className="text-serve-blue-600 hover:text-serve-blue-700 underline">01933 315555</a>; or</li>
                <li>by email, at <a href="mailto:info@serve.org.uk" className="text-serve-blue-600 hover:text-serve-blue-700 underline">info@serve.org.uk</a>.</li>
              </ul>
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
