export default function Hero() {
  return (
    <main className="flex flex-col items-center justify-center px-6 py-24 text-white">
      <div className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm text-blue-300">
        AI content studio for modern teams
      </div>

      <h1 className="mt-6 text-center text-5xl font-bold sm:text-6xl">
        Generate, edit, and publish smarter content in minutes.
      </h1>

      <p className="mt-6 max-w-2xl text-center text-lg text-slate-400">
        Automate your social media, blog, and campaign content with a polished AI-driven workflow built for growth.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <a href="/signup" className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700">
          Start Free
        </a>
        <a href="#features" className="rounded-lg border border-slate-700 px-6 py-3 font-medium text-slate-200 hover:border-blue-500">
          Explore Features
        </a>
      </div>
    </main>
  );
}