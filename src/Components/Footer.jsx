import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

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
            <a href="#" className="hover:text-[#ff8a00] transition-colors"><FaFacebookF /></a>
            <a href="#" className="hover:text-[#ff8a00] transition-colors"><FaInstagram /></a>
            <a href="#" className="hover:text-[#ff8a00] transition-colors"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-[#ff8a00] transition-colors"><FaTwitter /></a>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-2 gap-8 md:w-2/3 md:grid-cols-4">
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-[#ff8a00] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#ff8a00] transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-[#ff8a00] transition-colors">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-[#ff8a00] transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-[#ff8a00] transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-[#ff8a00] transition-colors">FAQs</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-[#ff8a00] transition-colors">Flight Booking</a></li>
              <li><a href="#" className="hover:text-[#ff8a00] transition-colors">AI Recommendations</a></li>
              <li><a href="#" className="hover:text-[#ff8a00] transition-colors">Manage Trips</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-[#ff8a00] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-[#ff8a00] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#ff8a00] transition-colors">Cookies</a></li>
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