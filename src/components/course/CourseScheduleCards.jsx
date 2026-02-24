export default function CourseScheduleCards({ items = [] }) {
  return (
    <section className="mt-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((it, idx) => (
          <div
            key={idx}
            className="
              group rounded-2xl border border-gray-200 bg-white p-8 text-center
              transition-all duration-300 ease-out
              hover:-translate-y-2 hover:shadow-xl
            "
          >
            {/* Icon */}
            <div
              className="
                mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl
                bg-gray-50 border border-gray-100
                transition-all duration-300 ease-out
                group-hover:scale-105
              "
            >
              <span className="transition-transform duration-300 group-hover:scale-110">
                <Icon idx={idx} />
              </span>
            </div>

            {/* Title */}
            <div className="text-lg md:text-2xl font-extrabold text-black">
              {it.label}
            </div>

            {/* Value */}
            <div className="mt-3 text-base md:text-lg text-black">
              <ValueWithBigNumbers text={it.value} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/**
 * Makes digits bigger (black)
 */
function ValueWithBigNumbers({ text = "" }) {
  const parts = String(text).split(/(\d+)/g);

  return (
    <span className="leading-relaxed">
      {parts.map((p, i) => {
        const isNumber = /^\d+$/.test(p);
        if (!p) return null;

        return isNumber ? (
          <span
            key={i}
            className="font-extrabold text-2xl md:text-3xl text-black"
          >
            {p}
          </span>
        ) : (
          <span key={i} className="text-black">
            {p}
          </span>
        );
      })}
    </span>
  );
}

function Icon({ idx }) {
  const common = {
    width: 56,
    height: 56,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "text-black transition-colors duration-300",
  };

  if (idx === 0) {
    return (
      <svg {...common}>
        <path
          d="M4 6.5C4 5.12 5.12 4 6.5 4H20V19.5C20 20.88 18.88 22 17.5 22H6.5C5.12 22 4 20.88 4 19.5V6.5Z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M20 4V18.5H6.5C5.12 18.5 4 19.62 4 21"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M11 9.5V13.5L14.5 11.5L11 9.5Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (idx === 1) {
    return (
      <svg {...common}>
        <path
          d="M6 4H16L20 8V20H6V4Z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path d="M16 4V8H20" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M8.5 11H17.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M8.5 14H17.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (idx === 2) {
    return (
      <svg {...common}>
        <path
          d="M7 3V6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M17 3V6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path d="M4 8H20" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M6 5H18C19.1 5 20 5.9 20 7V20H4V7C4 5.9 4.9 5 6 5Z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle cx="12" cy="13" r="2" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M12 7.8V12.2L14.8 14"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}