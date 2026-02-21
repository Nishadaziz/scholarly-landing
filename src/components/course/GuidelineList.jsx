export default function GuidelineList({ title, items = [] }) {
  return (
    <div className="mt-10">
      <h2 className="text-xl md:text-2xl font-bold text-gray-900">{title}</h2>

      <ul className="mt-5 space-y-3">
        {items.map((b) => (
          <li key={b} className="flex items-start gap-3 text-sm text-gray-800">
            <span className="mt-[7px] h-2 w-2 rounded-full bg-brand-red" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}