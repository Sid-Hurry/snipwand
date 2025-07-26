"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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
      className={`fixed top-8 left-0 right-0 z-50 flex justify-center transition-transform duration-300 ease-in-out ${
        show ? "translate-y-0" : "-translate-y-[200%]"
      }`}
    >
      <div
        className="w-[90%] md:w-[80%] lg:w-[50%] max-w-5xl mx-auto px-6 py-3.5 rounded-full backdrop-blur-md border border-white/10 text-white shadow-lg flex justify-center font-gill"
        style={{
          background: "linear-gradient(135deg, #050f1b, #141e2d)", // even closer to black with subtle blue tones
        }}
      >
        <ul className="flex gap-8 items-center text-[17px] font-semibold">
          <li className="text-[22px] font-bold hover:text-gray-300 transition-colors duration-200">
            <Link href="/">SnipWand</Link>
          </li>
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
      </div>
    </nav>
  );
};

export default Navbar;
