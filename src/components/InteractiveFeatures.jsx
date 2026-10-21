import React, { useState } from 'react';

const features = [
  {
    id: 'pipeline',
    name: 'Multi-Step Pipelines',
    desc: 'Chain disparate APIs and data transforms into a single automated trigger with zero latency overhead.',
    metricLabel: 'Execution Speed',
    metricValue: '4.2 ms',
    subtext: '99.4% faster than standard cron runners',
    status: 'Operational',
    logs: [
      'POST /v1/workflow/trigger [200 OK]',
      'Transforming schema payload...',
      'Dispatched to edge cluster (eu-west-1)'
    ]
  },
  {
    id: 'telemetry',
    name: 'Real-Time Telemetry',
    desc: 'Inspect live throughput, worker allocations, and incident budgets directly as requests stream through.',
    metricLabel: 'Processed Throughput',
    metricValue: '1.84 TB/s',
    subtext: 'Zero dropped events across 12 zones',
    status: 'Streaming',
    logs: [
      'Active connections: 42,108',
      'Event buffer: 0.02% utilized',
      'Telemetry sync completed'
    ]
  },
  {
    id: 'resilience',
    name: 'Autonomous Failover',
    desc: 'Self-healing worker nodes immediately reroute downstream exceptions without manual intervention.',
    metricLabel: 'Uptime Guarantee',
    metricValue: '99.99%',
    subtext: 'Automated health checks every 500ms',
    status: 'Protected',
    logs: [
      'Node us-east-1 heartbeat healthy',
      'Dynamic fallback route armed',
      'Failover simulation passed'
    ]
  }
];

export default function InteractiveFeatures() {
  const [active, setActive] = useState(features[0]);

  return (
    <section id="features" className="py-24 px-6 max-w-6xl mx-auto scroll-mt-20">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-blue-500 font-mono text-xs uppercase tracking-widest font-semibold">
          Platform Architecture
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 mb-4 tracking-tight">
          Engineered for One-Click Reliability
        </h2>
        <p className="text-slate-400 text-base">
          Click below to explore how our unified command center manages workloads at scale.
        </p>
      </div>

      <div className="grid md:grid-cols-12 gap-8 items-center">
        {/* Left Column: Interactive Selector Cards */}
        <div className="md:col-span-5 space-y-3">
          {features.map((f) => {
            const isSelected = active.id === f.id;
            return (
              <div
                key={f.id}
                onClick={() => setActive(f)}
                className={`p-5 rounded-2xl cursor-pointer border transition-all duration-200 text-left ${
                  isSelected
                    ? 'border-blue-500/80 bg-blue-950/20 shadow-lg shadow-blue-500/10'
                    : 'border-slate-800/80 bg-slate-900/30 hover:border-slate-700 hover:bg-slate-900/60'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <h3 className={`font-semibold text-base ${isSelected ? 'text-blue-400' : 'text-slate-200'}`}>
                    {f.name}
                  </h3>
                  {isSelected && (
                    <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                      Active
                    </span>
                  )}
                </div>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Right Column: Live Simulated Dashboard View */}
        <div className="md:col-span-7 rounded-2xl border border-slate-800 bg-slate-950/90 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          <div className="flex justify-between items-center pb-5 border-b border-slate-800/80">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-slate-700"></span>
              <span className="h-2.5 w-2.5 rounded-full bg-slate-700"></span>
              <span className="h-2.5 w-2.5 rounded-full bg-slate-700"></span>
              <span className="ml-2 text-xs font-mono text-slate-400 uppercase tracking-wide">
                Live Inspector
              </span>
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2.5 py-1 rounded-full">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              {active.status}
            </span>
          </div>

          <div className="my-8 text-center space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
              {active.metricLabel}
            </span>
            <div className="text-4xl sm:text-5xl font-mono font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-blue-400">
              {active.metricValue}
            </div>
            <p className="text-xs text-slate-400">
              {active.subtext}
            </p>
          </div>

          {/* Console Output Block */}
          <div className="rounded-xl bg-slate-900/90 border border-slate-800 p-4 font-mono text-[11px] space-y-1.5 text-slate-400">
            <div className="text-slate-400 mb-2">// System output stream</div>
            {active.logs.map((log, i) => (
              <div key={i} className="flex gap-2">
                <span className="text-blue-500">→</span>
                <span className="text-slate-300">{log}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
