export default function PricingSection({
  lang = "bn",
  price,
  oldPrice,
  duration,
  seats,
}) {
  const label = (bn, en) => (lang === "bn" ? bn : en);

  return (
    <div className="mt-12">
      <h2 className="text-xl md:text-2xl font-bold text-gray-900">
        {label("প্রাইসিং", "Pricing")}
      </h2>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Main price card */}
        <div className="lg:col-span-2 rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="text-sm font-semibold text-gray-700">
                {label("কোর্স ফি", "Course Fee")}
              </div>

              <div className="mt-2 flex items-end gap-3">
                <div className="text-3xl md:text-4xl font-extrabold text-gray-900">
                  {price}
                </div>

                {oldPrice && (
                  <div className="text-sm text-gray-500 line-through mb-1">
                    {oldPrice}
                  </div>
                )}
              </div>

              <div className="mt-2 text-sm text-gray-700">
                {label("পেমেন্ট পদ্ধতি চেকআউটে দেখানো হবে।", "Payment options shown in checkout.")}
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4 w-full sm:w-[260px]">
              <div className="text-sm font-semibold text-gray-900">
                {label("ইনফো", "Info")}
              </div>
              <div className="mt-2 text-sm text-gray-700">
                {label("ডিউরেশন:", "Duration:")}{" "}
                <span className="font-semibold text-gray-900">{duration}</span>
              </div>
              <div className="mt-1 text-sm text-gray-700">
                {label("সিট:", "Seats:")}{" "}
                <span className="font-semibold text-gray-900">{seats}</span>
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="rounded-2xl border border-gray-200 p-4">
              <div className="text-sm font-semibold text-gray-900">
                {label("সাপোর্ট", "Support")}
              </div>
              <div className="mt-1 text-sm text-gray-700">
                {label("ফিডব্যাক সহ", "With feedback")}
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 p-4">
              <div className="text-sm font-semibold text-gray-900">
                {label("মক", "Mocks")}
              </div>
              <div className="mt-1 text-sm text-gray-700">
                {label("ফুল মক + রিভিউ", "Full mock + review")}
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 p-4">
              <div className="text-sm font-semibold text-gray-900">
                {label("রোডম্যাপ", "Roadmap")}
              </div>
              <div className="mt-1 text-sm text-gray-700">
                {label("সাপ্তাহিক প্ল্যান", "Weekly plan")}
              </div>
            </div>
          </div>
        </div>

        {/* Secondary card */}
        <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6 md:p-8">
          <div className="text-sm font-semibold text-gray-900">
            {label("যা যা পাবেন", "What you get")}
          </div>

          <ul className="mt-4 space-y-2">
            {[
              label("৪টি স্কিল কভার", "All 4 skills covered"),
              label("প্র্যাকটিস সেট + ফিডব্যাক", "Practice sets + feedback"),
              label("মক টেস্ট রিভিউ", "Mock test review"),
              label("গাইডলাইন + FAQ", "Guideline + FAQ"),
            ].map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm text-gray-800">
                <span className="mt-[7px] h-2 w-2 rounded-full bg-brand-red" />
                <span>{p}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 text-sm text-gray-700">
            {label(
              "চেকআউটের আগে FAQ দেখে নিন।",
              "Review the FAQ before checkout."
            )}
          </div>
        </div>
      </div>
    </div>
  );
}