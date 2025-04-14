import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 font-prompt bg-black/60 backdrop-blur-md py-3">
      <div className="max-w-[1400px] mx-auto px-4 py-3 rounded-full shadow-xl text-white flex items-center justify-between relative border border-white/10 transition-all duration-300 ease-in-out overflow-hidden">
        
        {/* Glow border */}
        <div className="absolute inset-0 rounded-full border border-blue-400/20 group-hover:border-blue-300 opacity-10 transition-all duration-500 pointer-events-none"></div>

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="Logo"
            className="h-8 w-auto transition-transform duration-500 hover:rotate-6"
          />
          <span className="text-sm font-light tracking-wide">Creative</span>
        </div>

        {/* Desktop Menu (Centered) */}
        <div className="hidden md:flex gap-6 text-sm font-medium uppercase absolute left-1/2 -translate-x-1/2">
          {["HOME", "ABOUTS", "SERVICE", "OUR CUSTOMER", "CONTACT"].map((item, idx) => (
            <a
              key={idx}
              href="#"
              className="relative transition-all duration-300 hover:text-blue-400"
            >
              <span>{item}</span>
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-400 transition-all duration-300 hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur px-6 py-4 space-y-3">
          {["HOME", "ABOUTS", "SERVICE", "OUR CUSTOMER", "CONTACT"].map((item, idx) => (
            <a
              key={idx}
              href="#"
              className="block text-white text-sm font-medium uppercase border-b border-white/10 py-2"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}