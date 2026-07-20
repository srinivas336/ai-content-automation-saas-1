"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signUp } from "@/lib/demo-auth";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  async function handleSignUp() {
    const result = await signUp(email, password);

    if (!result.ok) {
      setMessage(result.error || "Account creation failed.");
      return;
    }

    setMessage("Account created successfully!");
    router.push("/dashboard");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
      <div className="w-full max-w-md rounded-xl border border-slate-800 bg-slate-900 p-8">
        <h1 className="text-3xl font-bold">Create Account</h1>
        <p className="mt-2 text-slate-400">Welcome! Create your account to get started.</p>

        <div className="mt-8 space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg bg-slate-800 px-4 py-3 text-white outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-lg bg-slate-800 px-4 py-3 text-white outline-none"
          />

          <button onClick={handleSignUp} className="w-full rounded-lg bg-blue-600 py-3 font-medium hover:bg-blue-700">
            Create Account
          </button>

          <p className="mt-4 text-sm text-slate-400">{message}</p>
        </div>
      </div>
    </main>
  );
}