type ExportButtonsProps = {
  onExport: (format: string) => void;
};

export default function ExportButtons({ onExport }: ExportButtonsProps) {
  const formats = [
    { label: 'TXT', value: 'txt' },
    { label: 'MD', value: 'md' },
    { label: 'JSON', value: 'json' },
    { label: 'HTML', value: 'html' },
  ];

  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {formats.map((format) => (
        <button
          key={format.value}
          onClick={() => onExport(format.value)}
          className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-200 transition hover:border-blue-500"
        >
          Export {format.label}
        </button>
      ))}
    </div>
  );
}
