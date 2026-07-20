export default function LaunchPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-5xl rounded-3xl border border-slate-800 bg-slate-900/80 p-10 shadow-2xl shadow-black/20">
        <p className="text-sm uppercase tracking-[0.35em] text-blue-400">Launch checklist</p>
        <h1 className="mt-4 text-4xl font-bold">Your SaaS is ready for an early launch</h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-400">The web app, dashboard experience, auth flow, marketing pages, mobile starter screens, and core APIs are all wired up and buildable.</p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
            <h2 className="text-xl font-semibold">What is ready</h2>
            <ul className="mt-4 space-y-2 text-slate-300">
              <li>• Landing page and public marketing</li>
              <li>• Auth experience and dashboard shell</li>
              <li>• AI generation and content library</li>
              <li>• Billing, analytics, and admin views</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
            <h2 className="text-xl font-semibold">What comes next</h2>
            <ul className="mt-4 space-y-2 text-slate-300">
              <li>• Stripe or Razorpay payments</li>
              <li>• Production database and auth</li>
              <li>• Automated tests and deployment</li>
              <li>• Mobile app refinement and notification support</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
