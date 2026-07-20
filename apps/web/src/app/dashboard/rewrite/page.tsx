'use client';

import { useState } from 'react';

export default function RewritePage() {
  const [content, setContent] = useState('');
  const [action, setAction] = useState('Rewrite');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleRewrite() {
    if (!content.trim()) {
      alert('Please enter content to rewrite.');
      return;
    }

    setLoading(true);
    setResult('');

    try {
      const response = await fetch('/api/rewrite', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content, action }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Rewrite failed');
      setResult(data.text);
    } catch (error: any) {
      alert(error.message || 'Rewrite failed');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm uppercase tracking-[0.35em] text-blue-400">Rewrite</p>
        <h1 className="mt-2 text-3xl font-semibold text-white">Polish your content</h1>
        <p className="mt-2 text-slate-400">Transform your drafts with AI-powered rewrite actions.</p>
      </div>

      <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/80 p-6">
        <label className="block text-sm font-medium text-slate-200">Rewrite action</label>
        <select value={action} onChange={(event) => setAction(event.target.value)} className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-white">
          <option>Rewrite</option>
          <option>Improve</option>
          <option>Shorten</option>
          <option>Expand</option>
          <option>Make Friendly</option>
          <option>Make Professional</option>
          <option>Make Funny</option>
          <option>Make Persuasive</option>
        </select>

        <label className="block text-sm font-medium text-slate-200">Content</label>
        <textarea value={content} onChange={(event) => setContent(event.target.value)} rows={10} className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-white" placeholder="Paste your draft here..." />

        <button onClick={handleRewrite} disabled={loading} className="rounded-2xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700 disabled:opacity-50">
          {loading ? 'Rewriting...' : 'Rewrite with AI'}
        </button>
      </div>

      {result ? (
        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6">
          <h2 className="text-xl font-semibold text-white">Result</h2>
          <p className="mt-4 whitespace-pre-wrap text-slate-300">{result}</p>
        </div>
      ) : null}
    </div>
  );
}
