export default function SupportHighlight({ lang = "bn" }) {
  const copy =
    lang === "bn"
      ? {
          badge: "With Support",
          title: "রিডিং রাইটিং লিসেনিং এ থাকছে আমাদের ডিরেক্ট হেল্প",
          points: [
            " গত পাঁচ বছরে সাফল্যের সাথে ৫০০০+ শিক্ষার্থীকে ডুয়োলিংগো ইংলিশ টেস্টে ১৪৫ পর্যন্ত স্কোর করতে সাহায্য করেছি।", 
            " আমাদের প্রত্যেক শিক্ষার্থীর সাকসেস্ফুল এক্সাম এর ভিডিও রয়েছে, যেখান থেকে পরবর্তী শিক্ষার্থীদের শেখানো হয় ।",
            "অল্প সময়ের প্রিপারেশনেও ভালো স্কোর করার জন্য প্রয়োজনীয় দিকনির্দেশনা দেওয়া হবে।",
          ],
          note: "",
        }
      : {
          badge: "With Support",
          title: "Direct support is provided in Reading, Writing, and Listening.",
          points: [
            "Proper guidance will be provided to help you achieve a good score even with short preparation time.",
            "Over the past five years, we have successfully helped 5,000+ students achieve scores of up to 145 in the Duolingo English Test.",
            "We have successful exam videos of each of our students, which are used to guide and train future students.",
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