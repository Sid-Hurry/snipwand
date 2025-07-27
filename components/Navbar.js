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
          className="w-full md:w-[80%] lg:w-[50%] max-w-5xl mx-auto px-6 py-3.5 rounded-full backdrop-blur-md border border-white/10 text-white shadow-lg font-gill"
          style={{
            background: "linear-gradient(135deg, #000000, #0a0f24, #0b1e39)",
          }}
        >
          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 items-center justify-center w-full text-[16px] font-semibold">
            <li>
              <Link
                href="/"
                className="text-[22px] font-bold text-orange-600 leading-none"
              >
                SnipWand
              </Link>
            </li>
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
              <Link href="/#examples" className="hover:text-gray-300">
                Examples
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="hover:text-gray-300">
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/#project-description"
                className="bg-black text-white px-4 py-1.5 rounded-full text-[15px] font-semibold hover:bg-gray-800"
              >
                Try Now
              </Link>
            </li>
          </ul>

          {/* Mobile Logo and Menu Icon */}
          <div className="md:hidden flex items-center justify-between w-full">
            <Link
              href="/"
              className="text-[22px] font-bold text-orange-600 leading-none"
            >
              SnipWand
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

      {/* Mobile Dropdown Menu */}
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
            href="/#examples"
            className="block py-2 text-[17px] font-semibold hover:text-gray-300"
            onClick={() => setMenuOpen(false)}
          >
            Examples
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
