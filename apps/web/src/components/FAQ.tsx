const faqs = [
  {
    question: 'Can I generate content for multiple platforms?',
    answer: 'Yes. The generator supports Instagram, LinkedIn, X, and Facebook content flows with platform-specific formatting.',
  },
  {
    question: 'Do I need technical experience?',
    answer: 'No. The platform is designed for marketers, creators, and founders who want polished output quickly.',
  },
  {
    question: 'Can I save and edit generated posts?',
    answer: 'Absolutely. Every generated post can be saved, edited, duplicated, or exported from the library.',
  },
];

export default function FAQ() {
  return (
    <section className="bg-slate-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-4xl font-bold">Frequently asked questions</h2>
        <div className="mt-10 space-y-4">
          {faqs.map((faq) => (
            <div key={faq.question} className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <p className="mt-2 text-slate-400">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
