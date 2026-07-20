export default function ArchivePage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm uppercase tracking-[0.35em] text-blue-400">Archive</p>
        <h1 className="mt-2 text-3xl font-semibold text-white">Archived campaigns</h1>
        <p className="mt-2 text-slate-400">Store older ideas and campaigns you may want to revisit.</p>
      </div>

      <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-900/60 p-10 text-center text-slate-400">
        Your archive is empty. Move completed campaigns here when you are done.
      </div>
    </div>
  );
}
