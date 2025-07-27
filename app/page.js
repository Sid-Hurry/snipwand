"use client";
import Navbar from "@/components/Navbar";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [formData, setFormData] = useState({
    projectName: "",
    description: "",
    installation: "",
    usage: "",
    features: "",
    technologies: "",
  });

  const [generatedReadme, setGeneratedReadme] = useState("");

  const handleChange = (e) => {
    const updatedData = { ...formData, [e.target.name]: e.target.value };
    setFormData(updatedData);
  };

  useEffect(() => {
    const {
      projectName,
      description,
      installation,
      usage,
      features,
      technologies,
    } = formData;

    const readme = `# ${projectName || "SnipWand"}

${description}

## Installation

\`\`\`bash
${installation}
\`\`\`

## Usage

\`\`\`bash
${usage}
\`\`\`

## Features

${features
  .split(",")
  .map((f) => `- ${f.trim()}`)
  .join("\n")}

## Technologies Used

${technologies
  .split(",")
  .map((t) => `- ${t.trim()}`)
  .join("\n")}`;

    setGeneratedReadme(readme);
  }, [formData]);

  const handleDownload = () => {
    const blob = new Blob([generatedReadme], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "README.md";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const features = [
    {
      title: "Real-time Markdown Preview",
      description: "Instantly see the formatted README as you type.",
    },
    {
      title: "One-Click Download",
      description: "Export your README as a `.md` file with just one tap.",
    },
    {
      title: "Sleek & Blurry UI",
      description: "Beautiful glassy interface powered by Tailwind CSS.",
    },
    {
      title: "SnipWand Theme Support",
      description: "Built with theming in mind — icy dark vibes.",
    },
    {
      title: "Mobile Responsive",
      description: "Fully responsive design that looks great on any device.",
    },
    {
      title: "No Login Required",
      description: "Simple and free to use, no setup needed.",
    },
  ];

  return (
    <main className="relative min-h-screen text-white overflow-hidden bg-gradient-to-br from-black via-[#020617] to-[#000b3d]">
      <div className="absolute inset-0 -z-10 backdrop-blur-[40px] bg-black/40" />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 px-4 text-center">
        <div className="text-4xl font-bold mb-2">
          Create clean, professional README in seconds
        </div>
        <div className="text-white/60 text-lg">
          SnipWand helps developers generate project README files effortlessly
          with instant preview and download.
        </div>
      </section>

      {/* Generator */}
      <section className="mt-16 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 items-start justify-center">
          <div className="w-full md:w-1/2 space-y-4 p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
            {[
              ["projectName", "Project Name"],
              ["description", "Project Description"],
              ["installation", "Installation Command"],
              ["usage", "Usage Command"],
              ["features", "Features (comma separated)"],
              ["technologies", "Technologies (comma separated)"],
            ].map(([name, label]) => (
              <div key={name}>
                <label className="block font-medium mb-1 text-white">
                  {label}
                </label>
                <textarea
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  className="w-full p-3 h-20 bg-black/30 text-white font-mono rounded-xl border border-gray-500 shadow-inner resize-none"
                  placeholder={`Enter ${label.toLowerCase()}...`}
                />
              </div>
            ))}

            <div className="flex flex-wrap gap-4 mt-4">
              <button
                onClick={handleDownload}
                className="px-6 py-2 bg-blue-900 text-white rounded-full shadow hover:bg-blue-800 transition"
              >
                Download .md
              </button>
            </div>
          </div>

          {/* Live Preview */}
          <div className="w-full md:w-1/2 h-[500px] p-4 overflow-auto bg-black/30 backdrop-blur-md text-white font-mono text-sm rounded-xl border border-gray-400 shadow-lg">
            <pre>{generatedReadme}</pre>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="pt-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-4xl font-bold mb-6 text-white">About</div>
          <div className="text-lg leading-relaxed text-gray-200 mb-4">
            SnipWand is your intelligent assistant for creating structured,
            beautiful README files for your repositories. Built for speed and
            simplicity, it streamlines your documentation workflow.
          </div>
          <div className="text-lg leading-relaxed text-gray-300 mb-4">
            Designed with developers in mind, it features real-time markdown
            preview, pre-filled sections for best practices, and a clean,
            modern interface that reduces friction.
          </div>
          <div className="text-lg leading-relaxed text-gray-400">
            Whether you&#39;re building open-source projects or internal tools,
            SnipWand lets you present your codebase clearly and professionally
            — every time.
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="pt-28 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-4xl font-bold text-white mb-12">Features</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white/10 text-white rounded-2xl border border-white/20 shadow-lg backdrop-blur-xl transition-transform hover:scale-[1.02]"
              >
                <div className="text-xl font-semibold mb-2">{feature.title}</div>
                <div className="text-white/80 text-[15px]">{feature.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex flex-col sm:flex-row justify-between items-center px-6 py-6 text-sm text-white/60 border-t border-white/10">
        <div className="mb-2 sm:mb-0">Contact us at: <span className="text-white">siddharthhooda0013@gmail.com</span></div>
        <div className="flex gap-4 text-xl">
          <Link href="#"><span role="img" aria-label="Twitter"><Image src="/X_icon.svg.png" alt="Twitter" width={24} height={24} /></span></Link>
          <Link href="#"><span role="img" aria-label="Github"><Image src="/github.svg" alt="Github" width={24} height={24} /></span></Link>
          <Link href="#"><span role="img" aria-label="Linkedin"><Image src="/linkedin.svg" alt="Linkedin" width={24} height={24} /></span></Link>
        </div>
      </footer>
    </main>
  );
}
