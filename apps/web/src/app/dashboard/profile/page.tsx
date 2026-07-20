export default function ProfilePage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm uppercase tracking-[0.35em] text-blue-400">Profile</p>
        <h1 className="mt-2 text-3xl font-semibold text-white">Account profile</h1>
        <p className="mt-2 text-slate-400">Manage your identity, preferences, and workspace overview.</p>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 text-2xl font-bold text-white">A</div>
          <div>
            <p className="text-xl font-semibold text-white">Alex Morgan</p>
            <p className="text-sm text-slate-400">alex@saasbootcamp.dev</p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
            <p className="text-sm text-slate-400">Plan</p>
            <p className="mt-2 text-lg font-semibold text-white">Pro</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
            <p className="text-sm text-slate-400">Role</p>
            <p className="mt-2 text-lg font-semibold text-white">Founder</p>
          </div>
        </div>
      </div>
    </div>
  );
}
