'use client';

import { useState } from 'react';

export default function SettingsPage() {
  const [notifications, setNotifications] = useState(true);
  const [autoSave, setAutoSave] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm uppercase tracking-[0.35em] text-blue-400">Settings</p>
        <h1 className="mt-2 text-3xl font-semibold text-white">Workspace preferences</h1>
        <p className="mt-2 text-slate-400">Fine-tune how your content studio behaves.</p>
      </div>

      <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/80 p-6">
        <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950/60 px-4 py-3">
          <div>
            <p className="font-medium text-white">Email notifications</p>
            <p className="text-sm text-slate-400">Get reminders when credits are low or a post is ready.</p>
          </div>
          <button onClick={() => setNotifications((value) => !value)} className={`rounded-full px-3 py-1 text-sm ${notifications ? 'bg-green-600 text-white' : 'bg-slate-800 text-slate-300'}`}>
            {notifications ? 'Enabled' : 'Disabled'}
          </button>
        </div>

        <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950/60 px-4 py-3">
          <div>
            <p className="font-medium text-white">Auto-save drafts</p>
            <p className="text-sm text-slate-400">Automatically save unsent content while you work.</p>
          </div>
          <button onClick={() => setAutoSave((value) => !value)} className={`rounded-full px-3 py-1 text-sm ${autoSave ? 'bg-green-600 text-white' : 'bg-slate-800 text-slate-300'}`}>
            {autoSave ? 'On' : 'Off'}
          </button>
        </div>

        <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950/60 px-4 py-3">
          <div>
            <p className="font-medium text-white">Dark mode</p>
            <p className="text-sm text-slate-400">Use the premium dark theme for long sessions.</p>
          </div>
          <button onClick={() => setDarkMode((value) => !value)} className={`rounded-full px-3 py-1 text-sm ${darkMode ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-300'}`}>
            {darkMode ? 'Applied' : 'Inactive'}
          </button>
        </div>
      </div>
    </div>
  );
}
