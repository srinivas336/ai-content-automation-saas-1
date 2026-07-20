"use client";

import Link from "next/link";

const cards = [
  {
    title: "Content Library",
    description: "View and manage your AI content",
    href: "/dashboard/library",
  },
  {
    title: "Favorites",
    description: "Saved favorite content",
    href: "/dashboard/favorites",
  },
  {
    title: "Archive",
    description: "Archived content",
    href: "/dashboard/archive",
  },
  {
    title: "Analytics",
    description: "Track your AI usage",
    href: "/dashboard/analytics",
  },
  {
    title: "Profile",
    description: "Manage your account",
    href: "/dashboard/profile",
  },
  {
    title: "Settings",
    description: "Customize your workspace",
    href: "/dashboard/settings",
  },
];

export default function DashboardCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {cards.map((card) => (
        <Link
          key={card.title}
          href={card.href}
          className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-blue-500 hover:bg-slate-800"
        >
          <h2 className="text-2xl font-bold">{card.title}</h2>

          <p className="mt-2 text-slate-400">
            {card.description}
          </p>
        </Link>
      ))}
    </div>
  );
}