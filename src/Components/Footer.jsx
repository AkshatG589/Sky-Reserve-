import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link"; // ✅ for scrolling to #id

const Footer = () => {
  return (
    <footer className="bg-[#0b1d3a] text-white py-12">
      <div className="max-w-7xl mx-auto px-6 md:flex md:justify-between md:items-start">
        {/* Logo and Description */}
        <div className="mb-8 md:mb-0 md:w-1/3">
          <h2 className="text-2xl font-bold mb-4">SkyReserve</h2>
          <p className="text-gray-300">
            AI-powered flight reservation system. Discover, book, and manage your flights with ease.
          </p>
          <div className="flex gap-4 mt-4">
            <Link to="/facebook" className="hover:text-[#ff8a00] transition-colors">
              <FaFacebookF />
            </Link>
            <Link to="/instagram" className="hover:text-[#ff8a00] transition-colors">
              <FaInstagram />
            </Link>
            <Link to="/linkedin" className="hover:text-[#ff8a00] transition-colors">
              <FaLinkedinIn />
            </Link>
            <Link to="/twitter" className="hover:text-[#ff8a00] transition-colors">
              <FaTwitter />
            </Link>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-2 gap-8 md:w-2/3 md:grid-cols-4">
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/about" className="hover:text-[#ff8a00] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-[#ff8a00] transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-[#ff8a00] transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/help" className="hover:text-[#ff8a00] transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#ff8a00] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <HashLink
                  smooth
                  to="/#faq"
                  className="hover:text-[#ff8a00] transition-colors"
                >
                  FAQs
                </HashLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/flights" className="hover:text-[#ff8a00] transition-colors">
                  Flight Booking
                </Link>
              </li>
              <li>
                <Link to="/assistant" className="hover:text-[#ff8a00] transition-colors">
                  AI Recommendations
                </Link>
              </li>
              <li>
                <Link to="/manage-trips" className="hover:text-[#ff8a00] transition-colors">
                  Manage Trips
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/terms" className="hover:text-[#ff8a00] transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-[#ff8a00] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/refund-policy" className="hover:text-[#ff8a00] transition-colors">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} SkyReserve. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;