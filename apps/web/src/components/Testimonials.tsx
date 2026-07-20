const testimonials = [
  {
    name: 'Maya Chen',
    role: 'Growth Lead',
    quote: 'We cut our content production time in half and never looked back.',
  },
  {
    name: 'Daniel Ortiz',
    role: 'Founder',
    quote: 'The AI workflow feels like having a full content team on demand.',
  },
  {
    name: 'Ritika Shah',
    role: 'Marketing Manager',
    quote: 'The dashboard makes it easy to keep everything organized and polished.',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-900 px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-4xl font-bold">Loved by modern teams</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.name} className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6">
              <p className="text-slate-300">“{item.quote}”</p>
              <div className="mt-6">
                <p className="font-semibold text-white">{item.name}</p>
                <p className="text-sm text-slate-400">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
