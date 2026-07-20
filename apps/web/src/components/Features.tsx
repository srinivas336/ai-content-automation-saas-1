export default function Features() {
  const features = [
    {
      title: "AI Content Generation",
      description: "Create polished posts tailored to Instagram, LinkedIn, X, and Facebook in seconds.",
    },
    {
      title: "Smart Rewrite Engine",
      description: "Transform drafts instantly with rewrite, shorten, expand, and tone-changing actions.",
    },
    {
      title: "Library + Analytics",
      description: "Save, search, edit, export, and track content from one central workspace.",
    },
  ];

  return (
    <section id="features" className="bg-slate-900 px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-4xl font-bold">
          Everything you need to launch faster
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