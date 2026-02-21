function OutlineCard({ title, desc }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="text-base font-semibold text-gray-900">{title}</div>
      <div className="mt-2 text-sm text-gray-700 leading-relaxed">{desc}</div>
    </div>
  );
}

export default function OutlineGrid({ title, cards = [] }) {
  return (
    <div className="mt-12">
      <h2 className="text-xl md:text-2xl font-bold text-gray-900">{title}</h2>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {cards.map((c, i) => (
          <OutlineCard key={i} title={c.title} desc={c.desc} />
        ))}
      </div>
    </div>
  );
}