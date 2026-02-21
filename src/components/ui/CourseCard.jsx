import { Link } from "react-router-dom";

export default function CourseCard({ title, subtitle, features, badge, slug }) {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-xl transition-shadow">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="ty-card-title">{title}</div>
          <div className="ty-meta mt-1">{subtitle}</div>
        </div>

        {badge && (
          <span className="shrink-0 rounded-full border border-brand-red/30 bg-brand-red/10 px-4 py-2 text-xs font-semibold text-brand-red">
            {badge}
          </span>
        )}
      </div>

      <ul className="mt-6 space-y-3">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm text-gray-700">
            <span className="mt-[6px] h-2 w-2 rounded-full bg-brand-red" />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      {/* ✅ Bangla CTA -> Course details page */}
      <div className="mt-8">
        <Link
          to={`/courses/${slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-red hover:text-brand-red2"
        >
          আরো কিছু জানতে চান? <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  );
}