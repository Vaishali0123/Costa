"use client";

import React, { useState } from "react";
import { X, Menu } from "lucide-react";

const navLinks = [
  { href: "#", label: "Home" },
  { href: "#", label: "Pages" },
  { href: "#", label: "Services" },
  { href: "#", label: "Pricing" },
  { href: "#", label: "Case Study" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <div className=" flex justify-center relative h-[80px] w-full">
      <div className="bg-gradient-to-tl w-[80%] from-[#f8e7cd] blur-2xl h-[60px] to-[#f5b94118]"></div>
      <div className="w-full absolute mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center  justify-between h-14">
          <div className="flex-shrink-0">
            <a
              href="#"
              className="text-[1.67rem] font-normal text-[#003366]"
              style={{ fontFamily: "Marcellus, serif" }}
            >
              CostaRicaInsurance
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map(({ href, label }) => (
              <a
                key={label}
                href={href}
                className="text-gray-600 hover:text-[#003366] transition-colors duration-300"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <button className="bg-black text-white font-normal text-[1rem] px-6 py-2 rounded-tl-[200px] rounded-tr-[100px] rounded-br-[100px] rounded-bl-none hover:bg-gray-800 hover:scale-105 transition-all duration-300 shadow-md">
              GET STARTED
            </button>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200">
          <div className="flex flex-col gap-4 py-4 px-6">
            {navLinks.map(({ href, label }) => (
              <a
                key={label}
                href={href}
                className="text-gray-600 text-base sm:text-lg hover:text-[#003366] transition-colors duration-300"
              >
                {label}
              </a>
            ))}

            <button className="bg-[#1e3a8a] text-white font-semibold px-6 py-2 rounded-full hover:bg-opacity-90 hover:scale-105 transition duration-300 w-full">
              GET STARTED
            </button>
          </div>
        </nav>
      )}
    </div>
  );
}
