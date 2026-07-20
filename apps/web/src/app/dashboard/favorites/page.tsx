export default function FavoritesPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm uppercase tracking-[0.35em] text-blue-400">Favorites</p>
        <h1 className="mt-2 text-3xl font-semibold text-white">Pinned content</h1>
        <p className="mt-2 text-slate-400">Keep your best-performing posts handy for quick reuse.</p>
      </div>

      <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-900/60 p-10 text-center text-slate-400">
        No favorites yet. Mark posts as favorites from the library to see them here.
      </div>
    </div>
  );
}
