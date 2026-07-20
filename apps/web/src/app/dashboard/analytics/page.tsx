import { StatCard } from '@/components/dashboard/StatCard';

const platformData = [
  { label: 'Instagram', value: '38%' },
  { label: 'LinkedIn', value: '24%' },
  { label: 'X', value: '18%' },
  { label: 'Facebook', value: '20%' },
];

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm uppercase tracking-[0.35em] text-blue-400">Analytics</p>
        <h1 className="mt-2 text-3xl font-semibold text-white">Performance overview</h1>
        <p className="mt-2 text-slate-400">Track content output, distribution, and growth momentum over time.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <StatCard title="Total content" value="248" description="Generated this month" />
        <StatCard title="Avg. engagement" value="8.2%" description="Across all platforms" />
        <StatCard title="Active campaigns" value="14" description="Live and scheduled" />
      </div>

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-xl font-semibold text-white">Weekly publishing trend</h2>
              <p className="mt-1 text-sm text-slate-400">A steady increase over the last 7 days</p>
            </div>
            <div className="rounded-full bg-green-600/20 px-3 py-1 text-sm text-green-400">+18%</div>
          </div>

          <div className="mt-8 flex h-48 items-end gap-3">
            {[20, 44, 36, 58, 62, 74, 92].map((height, index) => (
              <div key={index} className="flex-1 rounded-t-2xl bg-gradient-to-t from-blue-600 to-cyan-400" style={{ height: `${height}%` }} />
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6">
          <h2 className="text-xl font-semibold text-white">Distribution</h2>
          <div className="mt-6 space-y-4">
            {platformData.map((item) => (
              <div key={item.label}>
                <div className="mb-1 flex items-center justify-between text-sm text-slate-400">
                  <span>{item.label}</span>
                  <span>{item.value}</span>
                </div>
                <div className="h-2 rounded-full bg-slate-800">
                  <div className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" style={{ width: item.value }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
