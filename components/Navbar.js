"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 z-50">
      <div className="flex justify-center py-6 px-4">
        <div
          className="w-full md:w-[80%] lg:w-[50%] max-w-5xl mx-auto px-6 py-3.5 rounded-full backdrop-blur-md border border-white/10 text-white shadow-lg flex items-center justify-between font-gill"
          style={{
            background: "linear-gradient(135deg, #000000, #0a0f24, #0b1e39)",
          }}
        >
          {/* Left: Logo and Links */}
          <div className="flex items-center gap-8">
            <div className="text-[24px] font-bold text-orange-600 leading-none">
              <Link href="/">SnipWand</Link>
            </div>

            <ul className="hidden md:flex gap-8 items-center text-[17px] font-semibold">
              <li>
                <Link href="/#about" className="hover:text-gray-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#features" className="hover:text-gray-300">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-gray-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Right: Try Now & Mobile Menu Icon */}
          <div className="flex items-center gap-4">
            <Link
              href="/#project-description"
              className="hidden md:inline-block bg-black text-white px-4 py-1.5 rounded-full text-[15px] font-semibold hover:bg-gray-800"
            >
              Try Now
            </Link>

            <button
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a0f24] px-6 pb-6 rounded-b-3xl text-white text-center space-y-4">
          <Link
            href="/#about"
            className="block py-2 text-[17px] font-semibold hover:text-gray-300"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/#features"
            className="block py-2 text-[17px] font-semibold hover:text-gray-300"
            onClick={() => setMenuOpen(false)}
          >
            Features
          </Link>
          <Link
            href="/#contact"
            className="block py-2 text-[17px] font-semibold hover:text-gray-300"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="/#project-description"
            className="inline-block bg-black text-white px-4 py-2 rounded-full text-[15px] font-semibold hover:bg-gray-800"
            onClick={() => setMenuOpen(false)}
          >
            Try Now
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
