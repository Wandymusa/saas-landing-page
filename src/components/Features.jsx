import React from 'react';
import { Zap, ShieldCheck, BarChart3, Layers, RefreshCw, Cpu } from 'lucide-react';

const features = [
  {
    icon: <Zap className="text-blue-400" size={24} />,
    title: 'Lightning Pipeline Sync',
    description: 'Ingest and harmonize disparate data streams in milliseconds without writing boilerplate ETL scripts.'
  },
  {
    icon: <BarChart3 className="text-indigo-400" size={24} />,
    title: 'Predictive Analytics',
    description: 'Embedded statistical models continuously surface margin leaks, anomalies, and demand spikes.'
  },
  {
    icon: <ShieldCheck className="text-emerald-400" size={24} />,
    title: 'Enterprise Encryption',
    description: 'SOC2-compliant architecture ensuring all client records and API keys remain encrypted at rest and in transit.'
  },
  {
    icon: <Layers className="text-purple-400" size={24} />,
    title: 'Multi-Tenant Architecture',
    description: 'Partition organizational workspaces, roles, and granular data access rights seamlessly.'
  },
  {
    icon: <RefreshCw className="text-sky-400" size={24} />,
    title: 'Automated Reporting',
    description: 'Schedule automated stakeholder briefs and push real-time alerts directly into Slack or email.'
  },
  {
    icon: <Cpu className="text-rose-400" size={24} />,
    title: 'Custom Integrations',
    description: 'Out-of-the-box connectors for modern warehouses, SQL endpoints, and commercial APIs.'
  }
];

export default function Features() {
  return (
    <section className="py-20 px-4 sm:px-6 max-w-6xl mx-auto border-t border-slate-800/80">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-xs font-semibold tracking-wider text-blue-400 uppercase mb-3">
          Engineered for Scale
        </h2>
        <p className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Everything required to operate with precision
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((item, index) => (
          <div
            key={index}
            className="p-6 rounded-xl border border-slate-800 bg-slate-900/50 hover:bg-slate-900 hover:border-slate-700 transition duration-200"
          >
            <div className="p-3 w-fit rounded-lg bg-slate-800/60 border border-slate-700/50 mb-4">
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
            <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}