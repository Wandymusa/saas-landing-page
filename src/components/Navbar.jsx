import React from 'react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-bold text-lg text-white tracking-tight">NexusAI</span>
        </div>

        <nav className="flex items-center gap-6">
          <a
            href="#features"
            className="text-sm font-medium text-slate-300 hover:text-white transition cursor-pointer"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="text-sm font-medium text-slate-300 hover:text-white transition cursor-pointer"
          >
            Pricing
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="text-xs sm:text-sm font-medium text-slate-300 hover:text-white transition px-3 py-1.5">
            Log in
          </button>
          <a
            href="#features"
            className="text-xs sm:text-sm font-medium bg-blue-600 hover:bg-blue-500 text-white px-3.5 py-1.5 rounded-lg transition"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}