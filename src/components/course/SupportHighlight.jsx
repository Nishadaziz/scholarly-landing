export default function SupportHighlight({ lang = "bn" }) {
  const copy =
    lang === "bn"
      ? {
          badge: "With Support",
          title: "প্রিমিয়াম সাপোর্ট সহ কোর্স",
          points: [
            "প্র্যাকটিস চেক + টার্গেটেড ফিডব্যাক",
            "কোর্স গাইডলাইন ও প্রশ্নোত্তর সাপোর্ট",
            "মক টেস্ট রিভিউ + উন্নতির পরিকল্পনা",
          ],
          note: "এই সাপোর্ট সিস্টেমটি আপনাকে দ্রুত উন্নতি করতে সাহায্য করবে।",
        }
      : {
          badge: "With Support",
          title: "Premium Course Support Included",
          points: [
            "Practice checking + targeted feedback",
            "Guideline + Q&A support",
            "Mock test review + improvement plan",
          ],
          note: "This support system helps you improve faster with clear direction.",
        };

  return (
    <div className="mt-12 rounded-3xl border border-brand-red/25 bg-brand-red/5 p-6 md:p-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <span className="inline-flex items-center rounded-full bg-brand-red text-white text-xs font-semibold px-3 py-1">
            {copy.badge}
          </span>

          <h3 className="mt-4 text-lg md:text-xl font-bold text-gray-900">
            {copy.title}
          </h3>

          <ul className="mt-4 space-y-2">
            {copy.points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm text-gray-800">
                <span className="mt-[7px] h-2 w-2 rounded-full bg-brand-red" />
                <span>{p}</span>
              </li>
            ))}
          </ul>

          <p className="mt-4 text-sm text-gray-700">{copy.note}</p>
        </div>

        <div className="rounded-2xl bg-white border border-gray-200 p-4 md:p-5 w-full md:w-[260px] shadow-sm">
          <div className="text-sm font-semibold text-gray-900">
            {lang === "bn" ? "সাপোর্ট সুবিধা" : "Support Benefits"}
          </div>
          <div className="mt-2 text-sm text-gray-700 leading-relaxed">
            {lang === "bn"
              ? "ফিডব্যাক + গাইডলাইন + মক রিভিউ—সব একসাথে।"
              : "Feedback + guidance + mock review — all included."}
          </div>
        </div>
      </div>
    </div>
  );
}