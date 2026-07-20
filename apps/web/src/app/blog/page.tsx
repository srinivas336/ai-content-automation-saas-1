export default function BlogPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold">From ideas to production-ready content</h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-400">Learn how founders, marketers, and creators use AI content automation to move faster and stay consistent.</p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6">
            <h2 className="text-2xl font-semibold">Why AI content workflows matter</h2>
            <p className="mt-3 text-slate-400">A modern content system saves time, improves consistency, and helps teams ship more often.</p>
          </article>
          <article className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6">
            <h2 className="text-2xl font-semibold">Building a launch-ready content engine</h2>
            <p className="mt-3 text-slate-400">From generation to editing and analytics, the full cycle becomes much faster with the right workflow.</p>
          </article>
        </div>
      </div>
    </main>
  );
}
