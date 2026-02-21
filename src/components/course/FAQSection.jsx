function FAQList({ items }) {
  return (
    <div className="space-y-4">
      {items.map((item, idx) => (
        <details key={idx} className="rounded-2xl border border-gray-200 bg-white p-5">
          <summary className="cursor-pointer text-sm font-semibold text-gray-900">
            {item.q}
          </summary>
          <p className="mt-3 text-sm text-gray-700 leading-relaxed">{item.a}</p>
        </details>
      ))}
    </div>
  );
}

export default function FAQSection({ title, subtitle, items }) {
  return (
    <div className="mt-12">
      <h2 className="text-xl md:text-2xl font-bold text-gray-900">{title}</h2>
      <p className="mt-2 text-sm text-gray-700">{subtitle}</p>
      <div className="mt-6">
        <FAQList items={items} />
      </div>
    </div>
  );
}