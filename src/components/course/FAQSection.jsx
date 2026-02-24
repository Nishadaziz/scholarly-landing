import { useMemo, useState } from "react";

function PlusIcon({ open }) {
  return (
    <span
      className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white transition-all duration-300 ${
        open ? "scale-105" : ""
      }`}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        className={`transition-transform duration-300 ${open ? "rotate-45" : "rotate-0"}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 5V19"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M5 12H19"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

function FAQItem({ item, open, onToggle }) {
  return (
    <div
      className={`group rounded-2xl border bg-white transition-all duration-300 ease-out ${
        open
          ? "border-red-200 bg-red-50 shadow-lg"
          : "border-gray-200 hover:shadow-md hover:-translate-y-0.5"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        className="w-full text-left p-5 md:p-6"
        aria-expanded={open}
      >
        <div className="flex items-start gap-4">
          {/* left accent bar */}
          <div
            className={`mt-1 h-10 w-1 rounded-full transition-all duration-300 ${
              open ? "bg-red-500" : "bg-gray-200 group-hover:bg-gray-300"
            }`}
          />

          <div className="flex-1">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-base md:text-lg font-extrabold text-black leading-snug">
                {item.q}
              </h3>

              <div className="shrink-0">
                <PlusIcon open={open} />
              </div>
            </div>

            {/* Animated answer */}
            <div
              className={`grid transition-all duration-300 ease-out ${
                open ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0 mt-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="text-sm md:text-base text-black leading-relaxed">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}

export default function FAQSection({ title, subtitle, items = [] }) {
  const safeItems = useMemo(() => (Array.isArray(items) ? items : []), [items]);

  // open first item by default (feel free to set to null if you want all closed)
  const [openIndex, setOpenIndex] = useState(safeItems.length ? 0 : null);

  return (
    <section className="mt-12">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-xl md:text-3xl font-extrabold text-black">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-2 text-sm md:text-base text-black">
              {subtitle}
            </p>
          ) : null}
        </div>

        {/* fun little badge */}
        <div className="hidden md:flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2">
          <span className="text-sm font-bold text-black">FAQ</span>
          <span className="h-2 w-2 rounded-full bg-red-500" />
        </div>
      </div>

      <div className="mt-6 space-y-4">
        {safeItems.map((item, idx) => (
          <FAQItem
            key={idx}
            item={item}
            open={openIndex === idx}
            onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
          />
        ))}
      </div>
    </section>
  );
}