import Button from "../components/Button";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-white">
      <h1 className="text-5xl font-bold">
        AI Content Automation SaaS
      </h1>

      <p className="mt-4 text-slate-400">
        Bootcamp Day 1 ✅
      </p>

      <div className="mt-8">
        <Button text="Get Started" />
      </div>
    </main>
  );
}