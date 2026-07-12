export default function Features() {
  const features = [
    {
      title: "AI Script Writing",
      description: "Generate high-quality scripts for YouTube and Instagram using AI.",
    },
    {
      title: "Auto Publishing",
      description: "Schedule and publish content to multiple social platforms.",
    },
    {
      title: "Analytics Dashboard",
      description: "Track views, engagement, and growth from one place.",
    },
  ];

  return (
    <section className="bg-slate-900 px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-4xl font-bold">
          Features
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-slate-700 bg-slate-950 p-6"
            >
              <h3 className="text-xl font-semibold">
                {feature.title}
              </h3>

              <p className="mt-3 text-slate-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}