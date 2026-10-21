import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductPreview from './components/ProductPreview';
import InteractiveFeatures from './components/InteractiveFeatures';
import Pricing from './components/Pricing';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <ProductPreview />
        <InteractiveFeatures />
        <Pricing />
      </main>
      <footer className="border-t border-slate-800/80 py-8 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} NexusAI Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}