"use client";
import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-16 bg-transparent">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left - Text */}
        <div className="text-white space-y-6">
          <h2 className="text-4xl font-bold mb-4">About SnipWand</h2>
          <p className="text-lg leading-relaxed text-gray-200">
            SnipWand is a sleek, developer-friendly tool crafted to simplify your workflow. 
            Whether you want to generate professional README files in seconds or create stylish code images for presentations, 
            SnipWand blends functionality with beautiful UI to make it effortless.
          </p>
          <p className="text-lg leading-relaxed text-gray-300">
            Inspired by modern design and developer needs, it’s your handy utility box for daily coding tasks.
          </p>
        </div>

        {/* Right - Image */}
        <div className="relative w-full h-96 rounded-xl overflow-hidden">
          <Image
            src="/imaggee.png"
            alt="About SnipWand"
            fill
            className="object-cover rounded-xl"
          />
        </div>
        
      </div>
    </section>
  );
};

export default About;
