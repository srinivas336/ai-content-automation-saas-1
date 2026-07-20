import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-slate-800 bg-slate-950/95 px-6 py-4 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/" className="text-xl font-bold text-white">
          AI Content Automation
        </Link>

        <nav className="flex items-center gap-3">
          <a href="#features" className="text-sm text-slate-300 hover:text-white">
            Features
          </a>
          <a href="#pricing" className="text-sm text-slate-300 hover:text-white">
            Pricing
          </a>
          <Link href="/signin" className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
            Sign In
          </Link>
        </nav>
      </div>
    </header>
  );
}