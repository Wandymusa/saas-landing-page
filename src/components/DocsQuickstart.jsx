import React, { useState } from 'react';
import { Terminal, Copy, Check, Sparkles } from 'lucide-react';

const SNIPPETS = {
  python: {
    label: 'Python',
    filename: 'quickstart.py',
    code: `import nexusai

# Initialize the client
client = nexusai.Client(api_key="nx_live_9941a8b")

# Run real-time stream inference
response = client.insights.generate(
    dataset="retail_intelligence_v2",
    prompt="Identify discount spread anomalies in current catalog",
    stream=True
)

for chunk in response:
    print(chunk.text, end="")`
  },
  curl: {
    label: 'cURL',
    filename: 'request.sh',
    code: `curl -X POST https://api.nexusai.io/v1/insights \\
  -H "Authorization: Bearer nx_live_9941a8b" \\
  -H "Content-Type: application/json" \\
  -d '{
    "dataset": "retail_intelligence_v2",
    "prompt": "Identify discount spread anomalies in current catalog"
  }'`
  },
  javascript: {
    label: 'Node.js',
    filename: 'client.js',
    code: `import { NexusAI } from '@nexusai/sdk';

const client = new NexusAI({ apiKey: 'nx_live_9941a8b' });

const insight = await client.insights.generate({
  dataset: 'retail_intelligence_v2',
  prompt: 'Identify discount spread anomalies in current catalog',
});

console.log(insight.summary);`
  }
};

export default function DocsQuickstart() {
  const [activeTab, setActiveTab] = useState('python');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(SNIPPETS[activeTab].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="docs" className="py-24 bg-slate-950 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Context / Value prop */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Developer-First Platform</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Integrate intelligent analytics in under 5 minutes.
            </h2>

            <p className="text-slate-400 text-base leading-relaxed">
              Connect your pipelines directly into automated intelligence streams. Full SDK support for Python, JavaScript, and universal REST endpoints.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Native DuckDB & Streamlit compatibility</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Type-safe responses with zero warmup delay</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>End-to-end encrypted telemetry</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Terminal */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/90 shadow-2xl overflow-hidden backdrop-blur">
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800/80 bg-slate-950/60">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                  <span className="text-xs text-slate-400 font-mono ml-2 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-slate-500" />
                    {SNIPPETS[activeTab].filename}
                  </span>
                </div>

                {/* Language Selectors */}
                <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800">
                  {Object.keys(SNIPPETS).map((langKey) => (
                    <button
                      key={langKey}
                      onClick={() => setActiveTab(langKey)}
                      className={`text-xs px-2.5 py-1 rounded transition font-medium ${
                        activeTab === langKey
                          ? 'bg-blue-600 text-white shadow-sm'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {SNIPPETS[langKey].label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Code Snippet */}
              <div className="relative p-5">
                <button
                  onClick={handleCopy}
                  className="absolute top-4 right-4 flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition"
                  title="Copy code"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy</span>
                    </>
                  )}
                </button>

                <pre className="font-mono text-xs sm:text-sm text-slate-300 overflow-x-auto leading-relaxed pt-2">
                  <code>{SNIPPETS[activeTab].code}</code>
                </pre>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
