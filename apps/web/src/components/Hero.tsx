import Button from "./Button";

export default function Hero() {
  return (
    <main className="flex flex-col items-center justify-center px-6 py-20 text-white">
      <h1 className="text-center text-5xl font-bold">
        AI Content Automation SaaS
      </h1>

      <p className="mt-4 text-center text-slate-400">
        Build, automate, and publish content with AI.
      </p>

      <div className="mt-8">
        <Button text="Get Started" />
      </div>
    </main>
  );
}