import React, { useState } from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    desc: 'For early startups and individual builders testing proof-of-concept.',
    monthlyPrice: 29,
    annualPrice: 24,
    features: ['Up to 5 data pipelines', 'Hourly sync frequency', 'Standard SQL connector', 'Community support'],
    isPopular: false,
    cta: 'Start Free Trial'
  },
  {
    name: 'Scale',
    desc: 'For growing businesses requiring real-time throughput and custom models.',
    monthlyPrice: 89,
    annualPrice: 72,
    features: ['Unlimited data pipelines', 'Sub-minute real-time sync', 'Predictive anomaly models', 'Priority Slack integration', 'Custom webhook triggers'],
    isPopular: true,
    cta: 'Claim 14-Day Pass'
  },
  {
    name: 'Enterprise',
    desc: 'For organizations with multi-tenant security and compliance requirements.',
    monthlyPrice: 249,
    annualPrice: 199,
    features: ['Dedicated VPC hosting', 'SOC2 / HIPAA compliance kit', 'Custom ETL pipelines', 'SLA guaranteed 99.99%', 'Dedicated account engineer'],
    isPopular: false,
    cta: 'Contact Sales'
  }
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto border-t border-slate-800/80">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-xs font-semibold tracking-wider text-blue-400 uppercase mb-3">
          Transparent Investment
        </h2>
        <p className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
          Predictable plans for teams at any stage
        </p>

        {/* Billing Toggle */}
        <div className="inline-flex items-center gap-3 p-1 rounded-full bg-slate-900 border border-slate-800 text-xs">
          <button
            onClick={() => setAnnual(false)}
            className={`px-4 py-1.5 rounded-full font-medium transition ${!annual ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`}
          >
            Monthly
          </button>
          <button
            onClick={() => setAnnual(true)}
            className={`px-4 py-1.5 rounded-full font-medium transition ${annual ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`}
          >
            Annual <span className="text-emerald-400 font-semibold ml-1">(Save 20%)</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative p-8 rounded-2xl flex flex-col justify-between ${
              plan.isPopular
                ? 'bg-slate-900 border-2 border-blue-500 shadow-xl shadow-blue-500/10'
                : 'bg-slate-900/50 border border-slate-800'
            }`}
          >
            {plan.isPopular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-slate-950 text-xs font-bold px-3 py-0.5 rounded-full uppercase tracking-wider">
                Most Popular
              </span>
            )}

            <div>
              <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-sm text-slate-400 mb-6 min-h-[40px]">{plan.desc}</p>
              
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-extrabold text-white">
                  ${annual ? plan.annualPrice : plan.monthlyPrice}
                </span>
                <span className="text-slate-400 text-sm">/ month</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-3 text-sm text-slate-300">
                    <Check size={16} className="text-blue-400 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              className={`w-full py-2.5 rounded-lg text-sm font-semibold transition ${
                plan.isPopular
                  ? 'bg-blue-600 hover:bg-blue-500 text-white'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
              }`}
            >
              {plan.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}