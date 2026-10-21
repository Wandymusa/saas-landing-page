import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="relative pt-24 pb-16 px-4 sm:px-6 max-w-5xl mx-auto text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-medium mb-6">
        <span>✨ Powered by Next-Gen Automation</span>
      </div>

      <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
        Turn complex workflows into <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
          one-click actions.
        </span>
      </h1>

      <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-8">
        Streamline your operations, sync critical data sources, and monitor performance metrics through a single, real-time command center.
      </p>

      <div className="max-w-md mx-auto mb-6">
        {submitted ? (
          <div className="flex items-center justify-center gap-2 text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 py-3 rounded-lg text-sm">
            <CheckCircle2 size={18} /> You're on the priority waitlist!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              required
              placeholder="Enter your work email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-5 py-2.5 rounded-lg text-sm flex items-center gap-1.5 transition"
            >
              Get Access <ArrowRight size={16} />
            </button>
          </form>
        )}
      </div>

      <div className="flex justify-center items-center gap-6 text-xs text-slate-500">
        <span>✓ No credit card required</span>
        <span>✓ 14-day free trial</span>
        <span>✓ Instant setup</span>
      </div>
    </section>
  );
}