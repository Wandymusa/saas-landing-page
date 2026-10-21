import React from 'react';
import { Activity, Database, ArrowUpRight, CheckCircle } from 'lucide-react';

export default function ProductPreview() {
  return (
    <section className="relative px-4 sm:px-6 max-w-5xl mx-auto -mt-4 mb-24">
      {/* Radial glow */}
      <div className="absolute inset-0 bg-blue-500/20 blur-3xl -z-10 rounded-3xl" />

      {/* Mock Interface Container */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/90 shadow-2xl overflow-hidden backdrop-blur-sm">
        {/* Chrome header bar */}
        <div className="h-10 bg-slate-950/80 border-b border-slate-800 px-4 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            <span className="ml-3 font-mono text-[11px] text-slate-500">app.nexusai.internal/overview</span>
          </div>
          <span className="inline-flex items-center gap-1.5 text-emerald-400 font-medium">
            <CheckCircle size={13} /> Live Cluster Connected
          </span>
        </div>

        {/* Dashboard Metrics */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
              <div className="flex items-center justify-between text-slate-400 text-xs mb-2">
                <span>Active Sync Pipelines</span>
                <Database size={16} className="text-blue-400" />
              </div>
              <div className="text-2xl font-bold text-white">42 / 45</div>
              <div className="flex items-center gap-1 text-[11px] text-emerald-400 mt-1">
                <ArrowUpRight size={13} /> +18.4% throughput this week
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
              <div className="flex items-center justify-between text-slate-400 text-xs mb-2">
                <span>Latency P99</span>
                <Activity size={16} className="text-indigo-400" />
              </div>
              <div className="text-2xl font-bold text-white">4.2 ms</div>
              <div className="text-[11px] text-slate-400 mt-1">Optimized across 3 regions</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
              <div className="flex items-center justify-between text-slate-400 text-xs mb-2">
                <span>Total Ingested Volume</span>
                <span className="text-xs font-mono text-purple-400">GB/hr</span>
              </div>
              <div className="text-2xl font-bold text-white">1.84 TB</div>
              <div className="text-[11px] text-emerald-400 mt-1">Zero dropped packets</div>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-slate-950/40 border border-slate-800/80 space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-300">
              <span className="font-semibold">Recent Event Ingestion Stream</span>
              <span className="text-slate-500 font-mono text-[11px]">Auto-refresh: 1s</span>
            </div>
            <div className="space-y-2 text-xs font-mono">
              <div className="flex justify-between p-2.5 rounded bg-slate-900/80 border border-slate-800/60 text-slate-300">
                <span className="text-blue-400">[POST] /api/v2/stream/orders</span>
                <span className="text-emerald-400">200 OK • 1.2ms</span>
              </div>
              <div className="flex justify-between p-2.5 rounded bg-slate-900/80 border border-slate-800/60 text-slate-300">
                <span className="text-indigo-400">[EXEC] model_price_inference.py</span>
                <span className="text-emerald-400">Completed • 8.4ms</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}