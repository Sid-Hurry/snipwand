"use client";
import React from "react";

const features = [
  {
    title: "Real-time Markdown Preview",
    description: "Instantly see the formatted README as you type.",
    emoji: "📝",
  },
  {
    title: "One-Click Download",
    description: "Export your README as a `.md` file with just one tap.",
    emoji: "⬇️",
  },
  {
    title: "Sleek & Blurry UI",
    description: "Beautiful glassy interface powered by Tailwind CSS.",
    emoji: "✨",
  },
  {
    title: "SnipWand Theme Support",
    description: "Built with theming in mind — icy dark vibes.",
    emoji: "🎨",
  },
  {
    title: "Mobile Responsive",
    description: "Fully responsive design that looks great on any device.",
    emoji: "📱",
  },
  {
    title: "No Login Required",
    description: "Simple and free to use, no setup needed.",
    emoji: "🔓",
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className="min-h-screen px-6  bg-transparent flex  justify-center"
    >
      <div className="max-w-6xl w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white/10 text-white rounded-2xl border border-white/20 shadow-lg backdrop-blur-xl transition-transform hover:scale-[1.02]"
            >
              <div className="text-3xl mb-2">{feature.emoji}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-white/80 text-[15px]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
