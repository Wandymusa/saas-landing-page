import React, { useState } from 'react';
import { Check, Zap, Sparkles, Building2 } from 'lucide-react';

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  const tiers = [
    {
      name: 'Starter',
      description: 'Ideal for independent developers and rapid prototyping.',
      priceMonthly: 29,
      priceAnnual: 24,
      icon: Sparkles,
      highlight: false,
      cta: 'Start Free Trial',
      features: [
        'Up to 100,000 requests / month',
        '3 automated pipeline workers',
        'Standard REST API access',
        'DuckDB & SQLite local cache',
        'Community Discord support',
      ],
    },
    {
      name: 'Pro',
      description: 'Designed for production applications scaling real-time analytics.',
      priceMonthly: 99,
      priceAnnual: 79,
      icon: Zap,
      highlight: true,
      badge: 'Most Popular',
      cta: 'Get Started with Pro',
      features: [
        'Up to 2,000,000 requests / month',
        'Unlimited pipeline workers',
        'Real-time streaming inference',
        'Multi-language SDK support',
        'Dedicated rate limits (99.9% uptime SLA)',
        'Priority email & Slack support',
      ],
    },
    {
      name: 'Enterprise',
      description: 'Custom governance, private deployments, and dedicated infrastructure.',
      priceMonthly: 'Custom',
      priceAnnual: 'Custom',
      icon: Building2,
      highlight: false,
      cta: 'Contact Sales',
      features: [
        'Unlimited custom throughput',
        'Self-hosted or dedicated cloud VPC',
        'Custom Marketing & Retail Mix models',
        'SOC2 & GDPR compliance reports',
        'Dedicated solution architect',
        '24/7 phone & incident response',
      ],
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-slate-950 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Transparent pricing for teams of any size
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Start building for free, evaluate workloads on your schedule, and upgrade seamlessly as throughput expands.
          </p>

          {/* Billing Switcher Toggle */}
          <div className="pt-4 flex items-center justify-center gap-3">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-white' : 'text-slate-400'}`}>
              Monthly
            </span>

            <button
              type="button"
              onClick={() => setIsAnnual(!isAnnual)}
              aria-label="Toggle annual billing"
              className="relative inline-flex h-7 w-14 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-slate-800 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <span
                className={`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-blue-500 shadow-lg ring-0 transition duration-200 ease-in-out ${
                  isAnnual ? 'translate-x-7' : 'translate-x-0'
                }`}
              />
            </button>

            <span className={`text-sm font-medium flex items-center gap-1.5 ${isAnnual ? 'text-white' : 'text-slate-400'}`}>
              Annual
              <span className="text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier) => {
            const Icon = tier.icon;
            const price = isAnnual ? tier.priceAnnual : tier.priceMonthly;

            return (
              <div
                key={tier.name}
                className={`relative flex flex-col justify-between rounded-2xl border p-8 transition duration-200 ${
                  tier.highlight
                    ? 'border-blue-500/50 bg-slate-900/90 shadow-2xl shadow-blue-500/10 ring-1 ring-blue-500/20'
                    : 'border-slate-800/80 bg-slate-900/40 hover:border-slate-700'
                }`}
              >
                {tier.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md">
                    {tier.badge}
                  </span>
                )}

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{tier.name}</h3>
                  </div>

                  <p className="text-sm text-slate-400 mb-6 min-h-[40px] leading-relaxed">
                    {tier.description}
                  </p>

                  <div className="flex items-baseline gap-1 mb-8">
                    {typeof price === 'number' ? (
                      <>
                        <span className="text-4xl font-extrabold text-white tracking-tight">
                          ${price}
                        </span>
                        <span className="text-sm font-medium text-slate-400">/ user / mo</span>
                      </>
                    ) : (
                      <span className="text-3xl font-extrabold text-white tracking-tight">
                        {price}
                      </span>
                    )}
                  </div>

                  {/* Feature Checklist */}
                  <ul className="space-y-3.5 mb-8 text-sm">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-300">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  className={`w-full py-2.5 px-4 rounded-xl font-medium text-sm transition shadow-sm ${
                    tier.highlight
                      ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-blue-600/30'
                      : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700/80'
                  }`}
                >
                  {tier.cta}
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}