"use client";
import About from "@/components/about";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import Features from "@/components/feature";
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
  const [showPreview, setShowPreview] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGenerate = () => {
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
    setShowPreview(false);
  };

  const handlePreview = () => {
    if (generatedReadme) setShowPreview(true);
  };

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

  return (
    <main className="relative min-h-screen text-white overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 -z-10">
        <div
          className="h-full w-full"
          style={{
            background:
              "linear-gradient(135deg, #000000, #0c1f3f, #011a2d)",
          }}
        />
        {/* Heavy Blur Overlay */}
        <div className="absolute inset-0 backdrop-blur-[30px] bg-black/30" />
      </div>

      <Navbar />

      {/* Hero Section */}
      <section className="pt-34 px-4 text-center">
        <div className="text-4xl font-bold mb-2">
          Create clean, professional README in seconds
        </div>
        <div className="text-white/60 text-lg">
          SnipWand helps developers generate project README files effortlessly with instant preview and download.
        </div>
      </section>

      {/* README Generator Section */}
      <section className="mt-16 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 items-start justify-center">
          {/* Form Input */}
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
                <label className="block font-medium mb-1 text-white">{label}</label>
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
                onClick={handleGenerate}
                className="px-6 py-2 bg-blue-700 text-white rounded-full shadow hover:bg-blue-600 transition"
              >
                Generate README
              </button>

              <button
                onClick={handlePreview}
                className="px-6 py-2 bg-white/20 border border-white text-white rounded-full shadow hover:bg-white/30 transition"
              >
                Preview
              </button>

              {generatedReadme && (
                <button
                  onClick={handleDownload}
                  className="px-6 py-2 bg-blue-900 text-white rounded-full shadow hover:bg-blue-800 transition"
                >
                  Download .md
                </button>
              )}
            </div>
          </div>

          {/* Output Display */}
          {showPreview && (
            <div className="w-full md:w-1/2 h-[500px] p-4 overflow-auto bg-black/30 backdrop-blur-md text-white font-mono text-sm rounded-xl border border-gray-400 shadow-lg">
              <pre>{generatedReadme}</pre>
            </div>
          )}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 text-center">
        <div className="text-3xl font-bold ">About</div>
       <About />
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 text-center">
        <Features />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 text-center">
        <div className="text-3xl font-bold mb-4">Contact</div>
        <div className="text-white/70">
          Reach out at <span className="underline">hello@snipwand.dev</span>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-white/60">
        <div>© 2025 SnipWand. All rights reserved.</div>
      </footer>
    </main>
  );
}
