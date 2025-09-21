import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        
        {/* Line 1: Company Info */}
        <div className="text-left">
          <h2 className="text-2xl font-bold mb-4">Syntecxhub</h2>
          <p className="text-gray-400 leading-relaxed">
            MLIG/1347 Arra Bingawan Hanshpuram,
            <br />
            Kanpur Nagar, Uttar Pradesh, 208021
          </p>
          <p className="mt-3 text-gray-400 flex items-center gap-2 break-all">
            <HiOutlineMail className="text-blue-400 text-lg shrink-0" />
            info@syntecxhub.com
          </p>
          <p className="text-gray-400 flex items-center gap-2 mt-1">
            <HiOutlinePhone className="text-green-400 text-lg shrink-0" />
            +91 63937 80295
          </p>
        </div>

        {/* Line 2: Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/internship">Internship</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li>
                <HashLink
                  smooth
                  to="/#faq"
                  scroll={(el) => {
                    setTimeout(() => {
                      el.scrollIntoView({ behavior: "smooth", block: "start" });
                    }, 100);
                  }}
                >
                  FAQ
                </HashLink>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms & Conditions</Link></li>
              <li><Link to="/refund-policy">Refund & Cancellation</Link></li>
            </ul>
          </div>

          {/* References */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Trusted References</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="https://www.nic.in/" target="_blank" rel="noreferrer">NIC</a></li>
              <li><a href="https://digitalindia.gov.in/" target="_blank" rel="noreferrer">Digital India</a></li>
              <li><a href="https://www.meity.gov.in/" target="_blank" rel="noreferrer">MeitY</a></li>
              <li><a href="https://www.startupindia.gov.in/" target="_blank" rel="noreferrer">Startup India</a></li>
              <li><a href="https://www.nicpet.in/" target="_blank" rel="noreferrer">NICPET</a></li>
            </ul>
          </div>
        </div>

        {/* Line 3: Newsletter */}
        <div className="text-left">
          <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
          <p className="text-gray-400 mb-4 max-w-lg">
            Subscribe to get the latest updates, offers, and news from Syntecxhub.
          </p>
          <form className="flex flex-col sm:flex-row gap-2 justify-start">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-lg text-black w-full sm:w-64"
            />
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg">
              Subscribe
            </button>
          </form>

          {/* Social */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
            <div className="flex justify-start gap-5 text-2xl">
              <a href="https://www.facebook.com/share/16tJKXQbmN/" target="_blank" rel="noreferrer">
                <FaFacebook />
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/syntecxhub.com_?utm_source=qr&igsh=MWgwYTk2c3dkazgwcw=="
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Syntecxhub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;