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
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
        show ? "translate-y-0" : "-translate-y-[200%]"
      }`}
    >
      <div className="w-full flex justify-center py-6">
        <div
          className="w-[90%] md:w-[80%] lg:w-[50%] max-w-5xl mx-auto px-6 py-3.5 rounded-full backdrop-blur-md border border-white/10 text-white shadow-lg flex justify-between items-center font-gill"
          style={{
            background: "linear-gradient(135deg, #000000, #0a0f24, #0b1e39)",
          }}
        >
          <div className="text-[24px] font-bold text-orange-600">
            <Link href="/">SnipWand</Link>
          </div>

          {/* Desktop Nav */}
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
            <li>
              <Link
                href="/#project-description"
                scroll={true}
                className="bg-black text-white px-4 py-1.5 rounded-full text-[15px] hover:bg-gray-800 transition-all duration-200"
              >
                Try Now
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Icon */}
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

      {/* Mobile Menu Items */}
      {menuOpen && (
        <div className="md:hidden absolute top-[92px] left-1/2 transform -translate-x-1/2 w-[90%] max-w-5xl bg-[#0a0f24] text-white rounded-2xl py-6 px-4 shadow-lg backdrop-blur-lg border border-white/10">
          <ul className="flex flex-col items-center gap-6 text-[17px] font-semibold">
            <li>
              <Link href="/#about" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link href="/#features" onClick={() => setMenuOpen(false)}>
                Features
              </Link>
            </li>
            <li>
              <Link href="/#contact" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/#project-description"
                onClick={() => setMenuOpen(false)}
                className="bg-black text-white px-4 py-1.5 rounded-full text-[15px] hover:bg-gray-800 transition-all duration-200"
              >
                Try Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
