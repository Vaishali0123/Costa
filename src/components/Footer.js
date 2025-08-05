"use client";

import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaChevronUp,
  FaChevronDown,
} from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white font-sans">
      <div className="flex flex-col items-stretch mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Newsletter Section */}
        <div className="relative bg-[#F5B841] rounded-3xl p-8 md:p-12 my-12 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-40 h-40 bg-[#F8C86A]/50 rounded-full opacity-80"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 overflow-hidden">
            <div
              className="absolute inset-0 bg-transparent"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(-45deg, transparent, transparent 8px, rgba(255,255,255,0.15) 8px, rgba(255,255,255,0.15) 16px)',
              }}
            ></div>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-md text-gray-800">
              <h2 className="text-3xl md:text-4xl font-bold">Subscribe our newsletter</h2>
              <p className="mt-2 text-gray-700">
                Non consectetur a erat nam at. Sit amet risus nullam eget felis eget nunc lobortis.
              </p>
            </div>
            <form className="w-full max-w-sm flex items-center bg-white rounded-full shadow-inner">
              <input
                type="email"
                placeholder="Enter your email..."
                className="w-full px-5 py-3 rounded-l-full border-0 bg-transparent focus:ring-0"
              />
              <button
                type="submit"
                className="bg-[#1E3161] text-white p-2 m-1.5 rounded-full hover:bg-blue-800 transition-colors"
              >
                <FaChevronDown className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row flex-wrap gap-12 py-12">
          {/* Company Info */}
          <div className="flex-1 min-w-[300px] max-w-[600px]">
            <h3 className="text-2xl font-bold text-gray-800">CostaRicaInsurance</h3>
            <p className="mt-4 text-gray-500 max-w-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <a
              href="mailto:company@mail.com"
              className="mt-4 inline-block font-semibold text-gray-700 hover:text-amber-500"
            >
              company@mail.com
            </a>
            <div className="mt-6 flex space-x-3">
              <a
                href="#"
                className="text-gray-400 border border-gray-300 rounded-full p-2 hover:bg-amber-400 hover:text-white hover:border-amber-400 transition-colors"
              >
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 border border-gray-300 rounded-full p-2 hover:bg-amber-400 hover:text-white hover:border-amber-400 transition-colors"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 border border-gray-300 rounded-full p-2 hover:bg-amber-400 hover:text-white hover:border-amber-400 transition-colors"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 border border-gray-300 rounded-full p-2 hover:bg-amber-400 hover:text-white hover:border-amber-400 transition-colors"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          <div className="flex flex-1 flex-wrap gap-8 justify-between min-w-[300px]">
            <div>
              <h4 className="font-bold text-gray-500 tracking-wider text-sm">PAGES</h4>
              <ul className="mt-4 space-y-3">
                <li><a href="#" className="text-gray-700 hover:text-amber-500 font-medium">About</a></li>
                <li><a href="#" className="text-gray-700 hover:text-amber-500 font-medium">Team</a></li>
                <li><a href="#" className="text-gray-700 hover:text-amber-500 font-medium">Solution</a></li>
                <li><a href="#" className="text-gray-700 hover:text-amber-500 font-medium">F.A.Qs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-500 tracking-wider text-sm">SUPPORT</h4>
              <ul className="mt-4 space-y-3">
                <li><a href="#" className="text-gray-700 hover:text-amber-500 font-medium">Live chat</a></li>
                <li><a href="#" className="text-gray-700 hover:text-amber-500 font-medium">Ticket support</a></li>
                <li><a href="#" className="text-gray-700 hover:text-amber-500 font-medium">Contact us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-500 tracking-wider text-sm">PRODUCTS</h4>
              <ul className="mt-4 space-y-3">
                <li><a href="#" className="text-gray-700 hover:text-amber-500 font-medium">Life Insurance</a></li>
                <li><a href="#" className="text-gray-700 hover:text-amber-500 font-medium">Vehicle Insurance</a></li>
                <li><a href="#" className="text-gray-700 hover:text-amber-500 font-medium">Education Savings</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 py-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
          <p className="text-center sm:text-left">
            &copy; Copyright by AltDesain-Studio -- All right reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="mt-4 sm:mt-0 h-9 w-9 rounded-md bg-[#1E3161] text-white flex items-center justify-center hover:bg-blue-800 transition-colors"
            aria-label="Back to top"
          >
            <FaChevronUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
