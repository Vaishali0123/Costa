"use client";

import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaChevronUp,
  FaChevronDown,
} from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white w-full">
      <div className="flex flex-col items-stretch mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <section className="bg-[#fca311] rounded-[20px] px-6 py-10 sm:px-10 md:px-14 lg:px-20 my-10 w-full relative overflow-hidden min-h-[200px]">
          {/* Decorative gradients */}
          <div className="absolute top-[-30px] left-[-30px] w-[clamp(60px,15vw,120px)] h-[clamp(60px,15vw,120px)] bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.2),rgba(255,255,255,0.2)_2px,transparent_2px,transparent_4px)] rounded-full z-0" />
          <div className="absolute bottom-[-30px] right-[-30px] w-[clamp(60px,15vw,120px)] h-[clamp(60px,15vw,120px)] bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.2),rgba(255,255,255,0.2)_2px,transparent_2px,transparent_4px)] rounded-full z-0" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 w-full">
            <div className="text-white flex-1 min-w-0 text-center md:text-left">
              <h2 className="text-[clamp(1.25rem,4vw,2rem)] font-[Marcellus] font-bold leading-tight mb-2">
                Subscribe our newsletter
              </h2>
              <p className="text-[clamp(0.85rem,2.5vw,0.95rem)] opacity-90 leading-relaxed">
                Non consectetur a erat nam at. Sit amet risus nullam eget felis
                eget nunc lobortis.
              </p>
            </div>

            <form className="flex items-center bg-white rounded-full shadow-md min-w-[280px] max-w-[400px] w-full h-[clamp(42px,6vw,50px)] overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email ..."
                required
                className="flex-1 bg-transparent outline-none border-none px-4 text-[clamp(0.85rem,2vw,0.95rem)] h-full"
              />
              <button
                type="submit"
                className="bg-[#14213d] text-white h-full w-[clamp(45px,8vw,60px)] text-[clamp(1.5rem,3vw,2rem)] flex items-center justify-center rounded-bl-full transition-transform duration-300 hover:bg-[#0f172a] hover:scale-105 active:scale-95"
              >
                ✓
              </button>
            </form>
          </div>
        </section>

        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row flex-wrap ">
          {/* Company Info */}
          <div className="flex-1 min-w-[300px] border-r border-gray-300 p-2 max-w-[600px]">
            <h3 className="text-2xl font-bold font-[Marcellus] text-gray-800">
              CostaRicaInsurance
            </h3>
            <p className="mt-4 text-gray-500 max-w-sm">
              We make protecting what matters simple, clear, and accessible,
              whether you’re a local resident, expat, student, or traveler in
              Costa Rica.
            </p>
            <a
              href="mailto:info@costaricaninsurance.com"
              className="mt-4 inline-block font-semibold text-gray-700 hover:text-amber-500"
            >
              info@costaricaninsurance.com
            </a>
            <div className="mt-6 flex space-x-3">
              <a
                href="#"
                className="text-[#B79C75] border-2 border-[#B79C75] rounded-full p-2 hover:bg-[#B79c75] hover:text-white hover:border-[#B79c75] transition-colors"
              >
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-[#B79C75] border-2 border-[#B79C75] rounded-full p-2 hover:bg-[#B79c75] hover:text-white hover:border-[#B79c75] transition-colors"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-[#B79C75] border-2 border-[#B79C75] rounded-full p-2 hover:bg-[#B79c75] hover:text-white hover:border-[#B79c75] transition-colors"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-[#B79C75] border-2 border-[#B79C75] rounded-full p-2 hover:bg-[#B79c75] hover:text-white hover:border-[#B79c75] transition-colors"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          <div className="justify-between w-auto flex-1 min-w-[300px] max-w-[600px]">
            <div className="h-[100px] border-b border-gray-300  "></div>
            <div className="flex flex-1 flex-wrap gap-8 p-4 justify-between min-w-[300px]">
              <div>
                <h4 className="font-bold text-gray-900 font-[Marcellus] border-b border-[#B79C75] tracking-wider text-sm">
                  Quick Links
                </h4>
                <ul className="mt-4 space-y-3">
                  <li>
                    <a
                      href="/aboutUs"
                      className="text-gray-700 hover:text-amber-500 font-medium"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 hover:text-amber-500 font-medium"
                    >
                      Insurance
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 hover:text-amber-500 font-medium"
                    >
                      Pages
                    </a>
                  </li>

                  {/* <li>
                    <a
                      href="#"
                      className="text-gray-700 hover:text-amber-500 font-medium"
                    >
                      F.A.Qs
                    </a>
                  </li> */}
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 font-[Marcellus]  border-b border-[#B79C75] tracking-wider text-sm">
                  Important links
                </h4>
                <ul className="mt-4 space-y-3">
                  <li>
                    <a
                      href="/contactUs"
                      className="text-gray-700 hover:text-amber-500 font-medium"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 hover:text-amber-500 font-medium"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-gray-700 hover:text-amber-500 font-medium"
                    >
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900  font-[Marcellus]  border-b border-[#B79C75]  tracking-wider text-sm">
                  Top Categories
                </h4>
                <ul className="mt-4 space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 hover:text-amber-500 font-medium"
                    >
                      Life Insurance
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 hover:text-amber-500 font-medium"
                    >
                      Vehicle Insurance
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 hover:text-amber-500 font-medium"
                    >
                      Health Insurance
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 py-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
          <p className="text-center sm:text-left">
            Copyright &copy; 2025 CostaRican Insurance -- All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="mt-4 sm:mt-0 h-9 w-9 rounded-3xl bg-[#1E3161] text-white flex items-center justify-center hover:bg-blue-800 transition-colors"
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
