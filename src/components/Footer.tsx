import { 
  TrophyIcon,
  HeartIcon,
  StarIcon,
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  BuildingOffice2Icon,
  UserGroupIcon
} from '@heroicons/react/24/outline'
import NewsletterSignup from './NewsletterSignup'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='m0 40l40-40h-40v40zm0 0l40-40h-40v40z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        {/* Awards Banner */}
        <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-2xl p-6 mb-16 text-center">
          <div className="flex items-center justify-center mb-4">
            <TrophyIcon className="w-8 h-8 text-white mr-3" />
            <h3 className="text-2xl font-bold text-white">Award Winner 2024</h3>
          </div>
          <p className="text-white/90 text-lg">
            Best Homecare Team, East Midlands - Great British Care Awards
          </p>
          <div className="flex justify-center mt-4">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} className="w-6 h-6 text-white fill-current" />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <div className="flex items-center mb-6">
                <div className="bg-serve-blue-600 rounded-xl p-3 mr-4">
                  <HeartIcon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">SERVE</h3>
                  <span className="text-serve-blue-300 font-semibold">Supporting Independence</span>
                </div>
              </div>
              <p className="text-gray-300 mb-6 max-w-lg leading-relaxed">
                For over 40 years, SERVE has been providing award-winning care services 
                to help older people and adults with disabilities maintain their independence 
                at home across Northamptonshire. We are CQC registered and locally trusted.
              </p>
              
              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-800/50 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-serve-blue-300 mb-1">40+</div>
                  <div className="text-sm text-gray-400">Years of Service</div>
                </div>
                <div className="bg-gray-800/50 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-serve-green-400 mb-1">CQC</div>
                  <div className="text-sm text-gray-400">Registered</div>
                </div>
              </div>
            </div>
            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-200">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/SERVE234/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gray-800 hover:bg-serve-blue-600 p-3 rounded-xl transition-all duration-300 transform hover:scale-110 border border-gray-700 hover:border-serve-blue-500"
                  aria-label="Facebook (opens in new window)"
                >
                  <svg className="h-6 w-6 text-serve-blue-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/serve-nvca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gray-800 hover:bg-serve-red-600 p-3 rounded-xl transition-all duration-300 transform hover:scale-110 border border-gray-700 hover:border-serve-red-500"
                  aria-label="LinkedIn (opens in new window)"
                >
                  <svg className="h-6 w-6 text-serve-red-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-200 flex items-center">
              <BuildingOffice2Icon className="w-5 h-5 mr-2" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-gray-300 hover:text-serve-blue-300 transition-colors flex items-center group">
                  <span className="w-2 h-2 bg-serve-blue-600 rounded-full mr-3 group-hover:bg-serve-blue-400 transition-colors"></span>
                  Home
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-300 hover:text-serve-blue-300 transition-colors flex items-center group">
                  <span className="w-2 h-2 bg-serve-blue-600 rounded-full mr-3 group-hover:bg-serve-blue-400 transition-colors"></span>
                  Our Services
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-serve-blue-300 transition-colors flex items-center group">
                  <span className="w-2 h-2 bg-serve-blue-600 rounded-full mr-3 group-hover:bg-serve-blue-400 transition-colors"></span>
                  About Us
                </a>
              </li>
              <li>
                <a href="/volunteer" className="text-gray-300 hover:text-serve-blue-300 transition-colors flex items-center group">
                  <span className="w-2 h-2 bg-serve-blue-600 rounded-full mr-3 group-hover:bg-serve-blue-400 transition-colors"></span>
                  Volunteer
                </a>
              </li>
              <li>
                <a href="/news" className="text-gray-300 hover:text-serve-blue-300 transition-colors flex items-center group">
                  <span className="w-2 h-2 bg-serve-blue-600 rounded-full mr-3 group-hover:bg-serve-blue-400 transition-colors"></span>
                  News & Events
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-serve-blue-300 transition-colors flex items-center group">
                  <span className="w-2 h-2 bg-serve-blue-600 rounded-full mr-3 group-hover:bg-serve-blue-400 transition-colors"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Support & Fundraising */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-200 flex items-center">
              <HeartIcon className="w-5 h-5 mr-2" />
              Support Us
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.justgiving.com/serve-jg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-serve-green-300 transition-colors flex items-center group"
                >
                  <span className="w-2 h-2 bg-serve-green-600 rounded-full mr-3 group-hover:bg-serve-green-400 transition-colors"></span>
                  JustGiving
                </a>
              </li>
              <li>
                <a
                  href="https://www.giveasyoulive.com/join/serverushden"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-serve-green-300 transition-colors flex items-center group"
                >
                  <span className="w-2 h-2 bg-serve-green-600 rounded-full mr-3 group-hover:bg-serve-green-400 transition-colors"></span>
                  Give as You Live
                </a>
              </li>
              <li>
                <a
                  href="https://www.easyfundraising.org.uk/panel/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-serve-green-300 transition-colors flex items-center group"
                >
                  <span className="w-2 h-2 bg-serve-green-600 rounded-full mr-3 group-hover:bg-serve-green-400 transition-colors"></span>
                  Easy Fundraising
                </a>
              </li>
              <li>
                <a href="/donate" className="text-gray-300 hover:text-serve-green-300 transition-colors flex items-center group">
                  <span className="w-2 h-2 bg-serve-green-600 rounded-full mr-3 group-hover:bg-serve-green-400 transition-colors"></span>
                  Corporate Partnerships
                </a>
              </li>
              <li>
                <a href="/volunteer" className="text-gray-300 hover:text-serve-green-300 transition-colors flex items-center group">
                  <span className="w-2 h-2 bg-serve-green-600 rounded-full mr-3 group-hover:bg-serve-green-400 transition-colors"></span>
                  Become a Volunteer
                </a>
              </li>
            </ul>
            
            {/* CTA Button */}
            <div className="mt-6">
              <a
                href="https://www.justgiving.com/serve-jg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-serve-green-600 hover:bg-serve-green-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <HeartIcon className="w-5 h-5 mr-2" />
                Donate Now
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter Signup Section */}
        <div className="mt-12 pt-8 border-t border-gray-700/50">
          <NewsletterSignup variant="footer" />
        </div>

        {/* Contact Information & Partners */}
        <div className="border-t border-gray-700/50 mt-12 pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="bg-gray-800/30 rounded-2xl p-8">
              <h4 className="text-xl font-semibold mb-6 text-gray-200 flex items-center">
                <MapPinIcon className="w-6 h-6 mr-3" />
                Contact Information
              </h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPinIcon className="w-5 h-5 text-serve-blue-400 mr-3 mt-1 flex-shrink-0" />
                  <div className="text-gray-300">
                    <p className="font-medium">8 West Street</p>
                    <p>Rushden, Northants NN10 0RT</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <PhoneIcon className="w-5 h-5 text-serve-blue-400 mr-3 flex-shrink-0" />
                  <div className="text-gray-300">
                    Tel: <a href="tel:01933315555" className="hover:text-white transition-colors font-medium">01933 315555</a>
                  </div>
                </div>
                <div className="flex items-center">
                  <EnvelopeIcon className="w-5 h-5 text-serve-blue-400 mr-3 flex-shrink-0" />
                  <div className="text-gray-300">
                    Email: <a href="mailto:info@serve.org.uk" className="hover:text-white transition-colors font-medium">info@serve.org.uk</a>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-700">
                  <p className="text-gray-400 text-sm">
                    <strong className="text-gray-300">Charity Number:</strong> 1043321
                  </p>
                  <p className="text-gray-400 text-sm">
                    <strong className="text-gray-300">Company Number:</strong> 2951827
                  </p>
                </div>
              </div>
            </div>

            {/* Partner Organizations */}
            <div className="bg-gray-800/30 rounded-2xl p-8">
              <h4 className="text-xl font-semibold mb-6 text-gray-200 flex items-center">
                <UserGroupIcon className="w-6 h-6 mr-3" />
                Partner Organizations
              </h4>
              <div className="grid grid-cols-1 gap-4">
                <a
                  href="https://communityactionnorthants.org.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-white transition-colors p-3 rounded-xl hover:bg-gray-700/50 group"
                >
                  <span className="w-2 h-2 bg-serve-green-500 rounded-full mr-3 group-hover:bg-serve-green-400"></span>
                  Community Action Northants
                </a>
                <a
                  href="https://www.northamptonshire-carers.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-white transition-colors p-3 rounded-xl hover:bg-gray-700/50 group"
                >
                  <span className="w-2 h-2 bg-serve-green-500 rounded-full mr-3 group-hover:bg-serve-green-400"></span>
                  Northamptonshire Carers
                </a>
                <a
                  href="https://voluntaryimpact.org.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-white transition-colors p-3 rounded-xl hover:bg-gray-700/50 group"
                >
                  <span className="w-2 h-2 bg-serve-green-500 rounded-full mr-3 group-hover:bg-serve-green-400"></span>
                  Voluntary Impact
                </a>
                <a
                  href="https://daventryvolunteers.org.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-white transition-colors p-3 rounded-xl hover:bg-gray-700/50 group"
                >
                  <span className="w-2 h-2 bg-serve-green-500 rounded-full mr-3 group-hover:bg-serve-green-400"></span>
                  Daventry Volunteers
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <div className="text-center lg:text-left">
              <p className="text-gray-400 text-sm mb-2">
                © 2025 SERVE - Supporting Independence. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs">
                Registered charity in England and Wales. Regulated by the Charity Commission.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center lg:justify-end gap-6">
              <a 
                href="/privacy" 
                className="text-gray-400 hover:text-white text-sm transition-colors hover:underline"
              >
                Privacy Policy
              </a>
              <a 
                href="/terms" 
                className="text-gray-400 hover:text-white text-sm transition-colors hover:underline"
              >
                Terms & Conditions
              </a>
              <a 
                href="/cookies" 
                className="text-gray-400 hover:text-white text-sm transition-colors hover:underline"
              >
                Cookie Policy
              </a>
              <a 
                href="/accessibility" 
                className="text-gray-400 hover:text-white text-sm transition-colors hover:underline"
              >
                Accessibility
              </a>
              <a 
                href="https://www.cqc.org.uk/location/1-2165219210" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-sm transition-colors hover:underline"
              >
                CQC Report
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}