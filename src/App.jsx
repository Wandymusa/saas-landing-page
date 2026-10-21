import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import ProductPreview from './components/ProductPreview.jsx';
import Features from './components/Features.jsx';
import Pricing from './components/Pricing.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <ProductPreview />
        <Features />
        <Pricing />
      </main>
      <footer className="border-t border-slate-800/80 py-8 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} NexusAI Technologies Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}