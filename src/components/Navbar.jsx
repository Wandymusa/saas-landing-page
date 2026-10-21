import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Developers & Docs', href: '#docs' },
    { label: 'Pricing', href: '#pricing' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <span className="font-bold text-lg text-white tracking-tight">NexusAI</span>
          <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
            v2.4
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-white transition cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <button className="text-xs sm:text-sm font-medium text-slate-300 hover:text-white transition px-3 py-1.5">
            Log in
          </button>
          <a
            href="#docs"
            className="text-xs sm:text-sm font-medium bg-blue-600 hover:bg-blue-500 text-white px-3.5 py-1.5 rounded-lg transition shadow-lg shadow-blue-500/20"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 transition"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-slate-950/95 px-6 py-5 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-300 hover:text-white transition"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-4 border-t border-slate-800/80 flex flex-col gap-2.5">
            <button className="w-full text-center py-2 text-sm font-medium text-slate-300 hover:text-white bg-slate-900 rounded-lg border border-slate-800">
              Log in
            </button>
            <a
              href="#docs"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2 text-sm font-medium bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition shadow-md shadow-blue-500/20"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}