"use client";
import React from "react";

const Features = () => {
  return (
    <section
      id="features"
      className="min-h-screen px-6 py-20 md:px-12 lg:px-24 text-white bg-gradient-to-b from-black via-[#0a0f1a] to-[#010409] backdrop-blur-md"
    >
      <div className="max-w-4xl mx-auto space-y-10">
        <h2 className="text-4xl font-bold text-white">🚀 Features</h2>
        <ul className="space-y-6 text-[17px] leading-relaxed">
          <li>
            ✅ <strong>Real-time Markdown Preview:</strong> Instantly see the formatted README as you type.
          </li>
          <li>
            ✅ <strong>One-Click Download:</strong> Export your README as a `.md` file with just one tap.
          </li>
          <li>
            ✅ <strong>Sleek & Blurry UI:</strong> Beautiful glassy interface powered by Tailwind CSS.
          </li>
          <li>
            ✅ <strong>SnipWand Theme Support:</strong> Built with theming in mind — icy dark vibes.
          </li>
          <li>
            ✅ <strong>Mobile Responsive:</strong> Fully responsive design that looks great on any device.
          </li>
          <li>
            ✅ <strong>No Login Required:</strong> Simple and free to use, no setup needed.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Features;
