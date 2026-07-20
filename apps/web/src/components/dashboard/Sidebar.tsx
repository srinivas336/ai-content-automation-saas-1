'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

type NavItem = {
  label: string;
  href: string;
  icon: string;
};

const navItems: NavItem[] = [
  { label: 'Overview', href: '/dashboard', icon: '◈' },
  { label: 'Generate', href: '/dashboard/generate', icon: '✦' },
  { label: 'Library', href: '/dashboard/library', icon: '▤' },
  { label: 'Rewrite', href: '/dashboard/rewrite', icon: '↺' },
  { label: 'Analytics', href: '/dashboard/analytics', icon: '◔' },
  { label: 'Favorites', href: '/dashboard/favorites', icon: '★' },
  { label: 'Archive', href: '/dashboard/archive', icon: '▣' },
  { label: 'Settings', href: '/dashboard/settings', icon: '⚙' },
  { label: 'Profile', href: '/dashboard/profile', icon: '☺' },
  { label: 'Admin', href: '/dashboard/admin', icon: '◫' },
];

export function Sidebar() {
  const pathname = usePathname();
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  return (
    <aside className="flex h-full w-72 flex-col justify-between rounded-3xl border border-slate-800 bg-slate-900/90 p-6 shadow-2xl shadow-black/20">
      <div>
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-500">SaaS Bootcamp</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">Creator Console</h2>
        </div>

        <nav className="space-y-2">
          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition ${
                  active
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="space-y-4">
        <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
          <p className="text-sm text-slate-400">Workspace</p>
          <p className="mt-1 font-semibold text-white">AI Content Studio</p>
          <p className="mt-2 text-sm text-slate-500">100 credits available</p>
        </div>

        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-200 transition hover:border-blue-500"
        >
          Theme: {theme === 'dark' ? 'Dark' : 'Light'}
        </button>
      </div>
    </aside>
  );
}
