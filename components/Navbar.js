"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]); // ✅ fixed useEffect dependency warning

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
        show ? "translate-y-0" : "-translate-y-[200%]"
      }`}
    >
      <div className="w-full flex justify-center py-6 px-4">
        <div
          className="w-full md:w-[80%] lg:w-[50%] max-w-5xl mx-auto px-6 py-3.5 rounded-full backdrop-blur-md border border-white/10 text-white shadow-lg flex items-center justify-between font-gill"
          style={{
            background: "linear-gradient(135deg, #000000, #0a0f24, #0b1e39)",
          }}
        >
          {/* Logo & Desktop Menu */}
          <div className="flex items-center gap-8">
            <div className="text-[24px] font-bold text-orange-600 leading-none">
              <Link href="/">SnipWand</Link>
            </div>
            <ul className="hidden md:flex gap-8 items-center text-[17px] font-semibold">
              <li className="hover:text-gray-300 transition-colors duration-200">
                <Link href="/#about">About</Link>
              </li>
              <li className="hover:text-gray-300 transition-colors duration-200">
                <Link href="/#features">Features</Link>
              </li>
              <li className="hover:text-gray-300 transition-colors duration-200">
                <Link href="/#contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Try Now Button (Desktop) */}
          <div className="hidden md:block">
            <Link
              href="/#project-description"
              scroll={true}
              className="bg-black text-white px-4 py-1.5 rounded-full text-[15px] font-semibold hover:bg-gray-800 transition-all duration-200"
            >
              Try Now
            </Link>
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
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
            className="inline-block bg-black text-white px-4 py-2 rounded-full text-[15px] font-semibold hover:bg-gray-800 transition-all duration-200"
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
