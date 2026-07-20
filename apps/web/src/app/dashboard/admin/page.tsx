export default function AdminPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm uppercase tracking-[0.35em] text-blue-400">Admin</p>
        <h1 className="mt-2 text-3xl font-semibold text-white">Operations dashboard</h1>
        <p className="mt-2 text-slate-400">Monitor growth, moderation, and platform health from a single place.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
          <p className="text-sm text-slate-400">Users</p>
          <p className="mt-3 text-3xl font-semibold text-white">1,284</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
          <p className="text-sm text-slate-400">Revenue</p>
          <p className="mt-3 text-3xl font-semibold text-white">$24.8k</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
          <p className="text-sm text-slate-400">Flagged content</p>
          <p className="mt-3 text-3xl font-semibold text-white">7</p>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6">
        <h2 className="text-xl font-semibold text-white">Operational checklist</h2>
        <ul className="mt-4 space-y-3 text-slate-300">
          <li>• Feature flags are ready for rollout planning</li>
          <li>• System monitoring hooks can be expanded later</li>
          <li>• Moderation queue and audit logging are scaffolded for future integration</li>
        </ul>
      </div>
    </div>
  );
}
