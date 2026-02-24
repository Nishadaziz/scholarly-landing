export default function CourseOutcome({ title, subtitle, items = [] }) {
  return (
    <section className="mt-10">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-2 text-gray-600 text-sm md:text-base leading-relaxed">
              {subtitle}
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-6 grid gap-3 md:gap-4">
        {items.map((it, idx) => (
          <div
            key={idx}
            className="flex gap-4 rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4"
          >
            <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-brand-red text-white text-sm font-bold shrink-0">
              {idx + 1}
            </div>

            <p className="text-gray-800 text-sm md:text-base leading-relaxed">
              {it}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}