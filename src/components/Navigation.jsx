import { useState } from "react";
import logo from "../assets/logo.png";

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full py-4 px-4 md:px-[15rem]">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex-1">
          <img src={logo} alt="Campus Tech" className="h-8" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-8">
          <a href="#solutions">Solutions</a>
          <a href="#resources">Resources</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact Us</a>
        </div>

        {/* Desktop Login Button */}
        <div className="hidden md:flex flex-1 justify-end">
          <button className="px-6 py-2 rounded-full border border-gray-300">
            Login
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute left-0 right-0 top-[4rem] bg-white shadow-lg py-4 px-4">
          <div className="flex flex-col gap-4">
            <a href="#solutions" className="py-2">
              Solutions
            </a>
            <a href="#resources" className="py-2">
              Resources
            </a>
            <a href="#about" className="py-2">
              About Us
            </a>
            <a href="#contact" className="py-2">
              Contact Us
            </a>
            <button className="w-full px-6 py-2 rounded-full border border-gray-300">
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
