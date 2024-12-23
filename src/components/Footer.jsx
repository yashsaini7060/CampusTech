import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-white py-12 px-4 md:px-8">
      <div className="max-w-[95.2rem] mx-auto">
        <div className="mb-12">
          <img src={Logo} alt="CampusTech Logo" className="h-12" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <nav className="flex flex-col space-y-3">
              <a
                href="/resources"
                className="text-gray-700 hover:text-gray-900 text-base font-medium"
              >
                Resources
              </a>
              <a
                href="/solutions"
                className="text-gray-700 hover:text-gray-900 text-base font-medium"
              >
                Solutions
              </a>
              <a
                href="/about"
                className="text-gray-700 hover:text-gray-900 text-base font-medium"
              >
                About Us
              </a>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-base font-semibold text-gray-900 border-b border-orange-500 pb-2 inline-block">
              Contact Us
            </h3>
            <div className="space-y-2">
              <p className="text-gray-700 font-medium">
                support@campus.technology
              </p>
              <p className="text-gray-700 font-medium">+91-9980-747-722</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-base font-semibold text-gray-900 border-b border-orange-500 pb-2 inline-block">
              Chat with us
            </h3>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-[#1877F2] hover:opacity-80"
                aria-label="Facebook"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="#"
                className="text-[#E4405F] hover:opacity-80"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="#"
                className="text-[#1DA1F2] hover:opacity-80"
                aria-label="Twitter"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="#"
                className="text-[#0A66C2] hover:opacity-80"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600 font-medium">
              © 2022, Kahan Technologies Pvt. Ltd.
            </p>
            <p className="text-sm text-gray-600 font-medium mt-2 md:mt-0">
              Designed by Grapdes
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
