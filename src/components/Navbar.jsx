import React from 'react';
import { Layers } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-white tracking-wide">
          <div className="p-1.5 rounded-lg bg-blue-600 text-white">
            <Layers size={18} />
          </div>
          <span>NexusAI</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-400">
          <a 
  href="#features" 
  className="text-slate-300 hover:text-white transition cursor-pointer text-sm font-medium"
>
  Features
</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#docs" className="hover:text-white transition">Documentation</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="text-sm font-medium text-slate-300 hover:text-white transition px-3 py-1.5">
            Log in
          </button>
          <a
            href="#waitlist"
            className="text-sm font-medium bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}