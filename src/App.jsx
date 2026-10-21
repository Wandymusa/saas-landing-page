import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductPreview from './components/ProductPreview';
import InteractiveFeatures from './components/InteractiveFeatures';
import DocsQuickstart from './components/DocsQuickstart';
import Pricing from './components/Pricing';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-500 selection:text-white scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <ProductPreview />
        <InteractiveFeatures />
        <DocsQuickstart />
        <Pricing />
      </main>
      <footer className="border-t border-slate-800/80 py-10 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} NexusAI Inc. Built for high-velocity intelligence teams.</p>
      </footer>
    </div>
  );
}