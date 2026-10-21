import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import ProductPreview from './components/ProductPreview.jsx';
import Features from './components/Features.jsx';
import Pricing from './components/Pricing.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-500 selection:text-white">
      <Navbar /><a 
  href="#features" 
  className="text-gray-300 hover:text-white transition cursor-pointer"
>
  Features
</a>
      <main>
        <Hero />
        <ProductPreview />
        <Features /><section id="features" className="py-20 bg-slate-950 text-white">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-center">Powerful Features</h2>
    {/* your feature cards go here */}
  </div>
</section>

        <Pricing />
      </main>
      <footer className="border-t border-slate-800/80 py-8 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} NexusAI Technologies Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}