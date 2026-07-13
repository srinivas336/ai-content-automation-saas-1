import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <main className="flex flex-col items-center justify-center px-6 py-20 text-white">
      <h1 className="text-center text-5xl font-bold">
        AI Content Automation SaaS
      </h1>

      <p className="mt-4 max-w-2xl text-center text-slate-400">
        Build, automate, and publish content with AI.
      </p>

      <div className="mt-8">
        <Button size="lg">Get Started</Button>
      </div>
    </main>
  );
}