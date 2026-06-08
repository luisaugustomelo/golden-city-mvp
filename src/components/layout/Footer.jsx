import { Link } from 'react-router-dom';
import { FiPhone, FiMail, FiMapPin, FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi';
import { FaDiscord } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-secondary-900 dark:bg-gray-950 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">GoldenCity</h3>
            <p className="text-secondary-300 dark:text-gray-400 text-sm">
              Your trusted partner in finding the perfect property. We make real estate simple and accessible for everyone.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/properties" className="text-secondary-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-100 text-sm transition-colors duration-200">
                  Properties
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-secondary-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-100 text-sm transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-secondary-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-100 text-sm transition-colors duration-200">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-secondary-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-100 text-sm transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-secondary-300 dark:text-gray-400 text-sm">
                <FiPhone className="mr-2" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center text-secondary-300 dark:text-gray-400 text-sm">
                <FiMail className="mr-2" />
                <span>contact@company.com</span>
              </li>
              <li className="flex items-center text-secondary-300 dark:text-gray-400 text-sm">
                <FiMapPin className="mr-2" />
                <span>123 Property Street, Real City, RC 12345</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <Link to="#" className="text-secondary-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-100 transition-colors duration-200">
                <FiTwitter size={20} />
              </Link>
              <Link to="#" className="text-secondary-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-100 transition-colors duration-200">
                <FiLinkedin size={20} />
              </Link>
              <Link to="#" className="text-secondary-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-100 transition-colors duration-200">
                <FiGithub size={20} />
              </Link>
              <Link to="#" className="text-secondary-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-100 transition-colors duration-200">
                <FaDiscord size={20} />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-700 dark:border-gray-800 mt-8 pt-8 text-center text-secondary-300 dark:text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;