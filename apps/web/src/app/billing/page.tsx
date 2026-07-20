"use client";

import { useState } from "react";

const plans = [
  { name: "Free", price: "₹0", description: "Good for getting started", perks: ["10 generations", "Basic library"] },
  { name: "Pro", price: "₹1,999", description: "For growing teams", perks: ["Unlimited generations", "Advanced rewrite", "Analytics"] },
  { name: "Enterprise", price: "Custom", description: "For large organizations", perks: ["Team seats", "Priority support", "SSO"] },
];

export default function BillingPage() {
  const [selected, setSelected] = useState("Pro");

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-center text-4xl font-bold">Billing and plans</h1>
        <p className="mx-auto mt-4 max-w-2xl text-center text-slate-400">Upgrade when your content operations need more capacity, automation, and collaboration.</p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div key={plan.name} className={`rounded-2xl border p-6 ${selected === plan.name ? "border-blue-500 bg-slate-900" : "border-slate-800 bg-slate-950"}`}>
              <h2 className="text-2xl font-semibold">{plan.name}</h2>
              <p className="mt-2 text-sm text-slate-400">{plan.description}</p>
              <p className="mt-6 text-4xl font-bold">{plan.price}</p>
              <ul className="mt-6 space-y-3 text-slate-400">
                {plan.perks.map((perk) => (
                  <li key={perk}>✓ {perk}</li>
                ))}
              </ul>
              <button onClick={() => setSelected(plan.name)} className="mt-8 w-full rounded-lg bg-blue-600 px-4 py-3 font-medium text-white hover:bg-blue-700">{selected === plan.name ? "Selected" : "Choose Plan"}</button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
