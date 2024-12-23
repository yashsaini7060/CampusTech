import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-white to-gray-50 py-16 px-4 md:px-8">
      <div className="max-w-[95.2rem] mx-auto">
        <div className="mb-12 flex justify-center md:justify-start">
          <img
            src={Logo}
            alt="CampusTech Logo"
            className="h-12 hover:opacity-90 transition-opacity"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-gray-900 border-b border-orange-500 pb-2 inline-block">
              Quick Links
            </h3>
            <nav className="flex flex-col space-y-3">
              <a
                href="/resources"
                className="text-gray-700 hover:text-orange-500 text-base font-medium transition-colors duration-200"
              >
                Resources
              </a>
              <a
                href="/solutions"
                className="text-gray-700 hover:text-orange-500 text-base font-medium transition-colors duration-200"
              >
                Solutions
              </a>
              <a
                href="/about"
                className="text-gray-700 hover:text-orange-500 text-base font-medium transition-colors duration-200"
              >
                About Us
              </a>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-base font-semibold text-gray-900 border-b border-orange-500 pb-2 inline-block">
              Contact Us
            </h3>
            <div className="space-y-3">
              <p className="text-gray-700 font-medium flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                support@campus.technology
              </p>
              <p className="text-gray-700 font-medium flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                +91-9980-747-722
              </p>
            </div>
          </div>

          <div className="space-y-4 sm:col-span-2 md:col-span-1">
            <h3 className="text-base font-semibold text-gray-900 border-b border-orange-500 pb-2 inline-block">
              Connect With Us
            </h3>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-[#1877F2] hover:scale-110 transition-transform duration-200"
                aria-label="Facebook"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="#"
                className="text-[#E4405F] hover:scale-110 transition-transform duration-200"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="#"
                className="text-[#1DA1F2] hover:scale-110 transition-transform duration-200"
                aria-label="Twitter"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="#"
                className="text-[#0A66C2] hover:scale-110 transition-transform duration-200"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-600 font-medium">
              © {new Date().getFullYear()} Kahan Technologies Pvt. Ltd. All
              rights reserved.
            </p>
            <p className="text-sm text-gray-600 font-medium">
              Designed with ❤️ by Grapdes
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
