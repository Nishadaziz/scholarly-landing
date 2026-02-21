import { useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { COURSES } from "../data/courses";
import LanguageToggle from "../components/course/LanguageToggle";

export default function Checkout() {
  const { slug } = useParams();
  const [lang, setLang] = useState("bn"); // Bangla first

  // ✅ success state
  const [submitted, setSubmitted] = useState(false);

  const course = useMemo(() => COURSES[slug], [slug]);

  const copy = {
    bn: {
      title: "চেকআউট",
      subtitle: "আপনার তথ্য দিন এবং bKash এর মাধ্যমে পেমেন্ট সম্পন্ন করুন।",
      formTitle: "শিক্ষার্থীর তথ্য",
      name: "নাম",
      phone: "ফোন নাম্বার",
      email: "ইমেইল (ঐচ্ছিক)",
      batch: "ব্যাচ নির্বাচন",
      batch1: "ব্যাচ-১ (শুরু: শিগগিরই)",
      batch2: "ব্যাচ-২ (শুরু: পরবর্তী সপ্তাহ)",
      payTitle: "পেমেন্ট (bKash Send Money)",
      trx: "bKash Transaction ID (TrxID)",
      sender: "যে নাম্বার থেকে পাঠিয়েছেন (ঐচ্ছিক)",
      note: "আমরা TrxID যাচাই করে আপনার এনরোলমেন্ট কনফার্ম করবো। (পেমেন্ট গেটওয়ে পরে যুক্ত হবে)",
      confirm: "এনরোল রিকুয়েস্ট সাবমিট করুন",
      back: "← কোর্সে ফিরুন",
      home: "হোম",
      summary: "অর্ডার সামারি",
      course: "কোর্স",
      total: "মোট",
      duration: "কোর্স ডিউরেশন",
      copyNumber: "নাম্বার কপি করুন",
      sendMoneyTo: "এই নাম্বারে Send Money করুন:",
      amount: "Amount",
      reference: "Reference",
      referenceText: "আপনার নাম + DET (যেমন: Rahim DET)",
      successTitle: "✅ আপনার এনরোল রিকুয়েস্ট গ্রহণ করা হয়েছে",
      s1: "আপনার দেওয়া TrxID যাচাই করা হবে",
      s2: "যাচাই সম্পন্ন হলে আপনাকে কনফার্মেশন জানানো হবে",
      s3: "প্রয়োজনে আমাদের সাথে যোগাযোগ করুন",
      backCourse: "কোর্সে ফিরুন",
    },
    en: {
      title: "Checkout",
      subtitle: "Enter your details and complete payment via bKash Send Money.",
      formTitle: "Student Info",
      name: "Name",
      phone: "Phone Number",
      email: "Email (optional)",
      batch: "Select Batch",
      batch1: "Batch 1 (Starts: soon)",
      batch2: "Batch 2 (Starts: next week)",
      payTitle: "Payment (bKash Send Money)",
      trx: "bKash Transaction ID (TrxID)",
      sender: "Sender number (optional)",
      note: "We’ll verify the TrxID and confirm your enrollment. (Payment gateway will be added later)",
      confirm: "Submit Enrollment Request",
      back: "← Back to Course",
      home: "Home",
      summary: "Order Summary",
      course: "Course",
      total: "Total",
      duration: "Course Duration",
      copyNumber: "Copy Number",
      sendMoneyTo: "Send Money to this number:",
      amount: "Amount",
      reference: "Reference",
      referenceText: "Your name + DET (e.g., Rahim DET)",
      successTitle: "✅ Enrollment Request Received",
      s1: "Your provided TrxID will be verified",
      s2: "After verification, you will receive confirmation",
      s3: "Contact us if needed",
      backCourse: "Back to Course",
    },
  };

  const t = copy[lang];

  if (!course) {
    return (
      <section className="w-full bg-[#0b1220] py-16">
        <div className="mx-auto w-[95%] max-w-4xl rounded-3xl bg-white p-10">
          <h1 className="text-2xl font-bold text-gray-900">Checkout not found</h1>
          <p className="mt-2 text-gray-700">Invalid course selection.</p>
          <Link className="mt-6 inline-block text-brand-red font-semibold" to="/">
            ← Back to Home
          </Link>
        </div>
      </section>
    );
  }

  const bkashNumber = course.payment?.bkash?.number || "01623978532";
  const bkashType = course.payment?.bkash?.type || "personal";
  const price =
    lang === "bn" ? course.payment?.price?.bn || "৳ ৭,৯৯৯" : course.payment?.price?.en || "৳ 7,999";
  const duration =
    lang === "bn" ? course.payment?.duration?.bn || "১ মাস" : course.payment?.duration?.en || "1 Month";

  return (
    <section className="w-full bg-[#0b1220] py-16">
      <div className="mx-auto w-[95%] max-w-7xl">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-10 shadow-sm">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">
                {t.title}
              </h1>
              <p className="mt-2 text-sm md:text-base text-gray-700">{t.subtitle}</p>
            </div>

            <LanguageToggle lang={lang} setLang={setLang} />
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* LEFT: Form / Success */}
            {submitted ? (
              // ✅ SUCCESS PANEL
              <div className="lg:col-span-2 rounded-3xl border border-green-200 bg-green-50 p-8 text-center">
                <div className="text-lg font-bold text-green-700">{t.successTitle}</div>

                <div className="mt-6 space-y-3 text-sm text-gray-800">
                  <p>{t.s1}</p>
                  <p>{t.s2}</p>
                  <p>{t.s3}</p>
                </div>

                <div className="mt-8 flex justify-center gap-4">
                  <Link
                    to={`/courses/${slug}`}
                    className="rounded-2xl bg-brand-red px-6 py-3 text-sm font-semibold text-white hover:bg-brand-red2 transition-colors"
                  >
                    {t.backCourse}
                  </Link>

                  <Link
                    to="/"
                    className="rounded-2xl border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-white transition-colors"
                  >
                    {t.home}
                  </Link>
                </div>
              </div>
            ) : (
              // ✅ FORM
              <div className="lg:col-span-2 rounded-3xl border border-gray-200 p-6 md:p-8">
                <div className="text-lg font-bold text-gray-900">{t.formTitle}</div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className="text-sm text-gray-700">
                    {t.name}
                    <input
                      className="mt-2 w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-brand-red"
                      placeholder={t.name}
                    />
                  </label>

                  <label className="text-sm text-gray-700">
                    {t.phone}
                    <input
                      className="mt-2 w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-brand-red"
                      placeholder={t.phone}
                    />
                  </label>

                  <label className="text-sm text-gray-700 md:col-span-2">
                    {t.email}
                    <input
                      className="mt-2 w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-brand-red"
                      placeholder={t.email}
                    />
                  </label>

                  <label className="text-sm text-gray-700 md:col-span-2">
                    {t.batch}
                    <select className="mt-2 w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-brand-red bg-white">
                      <option>{t.batch1}</option>
                      <option>{t.batch2}</option>
                    </select>
                  </label>
                </div>

                {/* Payment */}
                <div className="mt-10">
                  <div className="text-lg font-bold text-gray-900">{t.payTitle}</div>

                  <div className="mt-4 rounded-3xl border border-gray-200 bg-gray-50 p-5 md:p-6">
                    <div className="text-sm text-gray-700">{t.sendMoneyTo}</div>

                    <div className="mt-3 flex items-center gap-3 flex-wrap">
                      <div className="inline-flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-4 py-3">
                        <span className="text-sm font-semibold text-gray-900">
                          {bkashNumber}
                        </span>
                        <span className="text-xs text-gray-600">({bkashType})</span>
                      </div>

                      <button
                        type="button"
                        onClick={() => navigator.clipboard.writeText(bkashNumber)}
                        className="text-xs font-semibold text-brand-red hover:underline"
                      >
                        {t.copyNumber}
                      </button>
                    </div>

                    <ul className="mt-5 space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-3">
                        <span className="mt-[7px] h-2 w-2 rounded-full bg-brand-red" />
                        <span>
                          {t.amount}: <span className="font-semibold">{price}</span>
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-[7px] h-2 w-2 rounded-full bg-brand-red" />
                        <span>
                          {t.reference}:{" "}
                          <span className="font-semibold">{t.referenceText}</span>
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-[7px] h-2 w-2 rounded-full bg-brand-red" />
                        <span>{t.note}</span>
                      </li>
                    </ul>

                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                      <label className="text-sm text-gray-700">
                        {t.trx}
                        <input
                          className="mt-2 w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-brand-red bg-white"
                          placeholder={lang === "bn" ? "যেমন: 8A7B6C5D4E" : "e.g., 8A7B6C5D4E"}
                        />
                      </label>

                      <label className="text-sm text-gray-700">
                        {t.sender}
                        <input
                          className="mt-2 w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-brand-red bg-white"
                          placeholder="01XXXXXXXXX"
                        />
                      </label>
                    </div>
                  </div>
                </div>

                {/* Confirm */}
                <button
                  type="button"
                  onClick={() => setSubmitted(true)}
                  className="mt-10 w-full rounded-2xl bg-brand-red px-6 py-3 text-sm font-semibold text-white hover:bg-brand-red2 transition-colors"
                >
                  {t.confirm}
                </button>

                <div className="mt-6 flex gap-4">
                  <Link
                    to={`/courses/${slug}`}
                    className="text-sm font-semibold text-brand-red hover:text-brand-red2"
                  >
                    {t.back}
                  </Link>
                  <Link
                    to="/"
                    className="text-sm font-semibold text-gray-700 hover:text-gray-900"
                  >
                    {t.home}
                  </Link>
                </div>
              </div>
            )}

            {/* RIGHT: Summary */}
            <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6 md:p-8">
              <div className="text-lg font-bold text-gray-900">{t.summary}</div>

              <div className="mt-5 rounded-2xl border border-gray-200 bg-white p-5">
                <div className="text-sm text-gray-700">{t.course}</div>
                <div className="mt-1 text-base font-semibold text-gray-900">
                  {course.title?.[lang] || course.title?.bn || "Course"}
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between text-sm text-gray-700">
                <span>{t.total}</span>
                <span className="font-bold text-gray-900">{price}</span>
              </div>

              <div className="mt-2 text-sm text-gray-600">
                {t.duration}:{" "}
                <span className="font-semibold text-gray-900">{duration}</span>
              </div>

              <div className="mt-6 text-xs text-gray-600 leading-relaxed">
                {lang === "bn"
                  ? "এনরোল রিকুয়েস্ট সাবমিট করলে আমরা আপনার TrxID যাচাই করে কনফার্ম করবো।"
                  : "After you submit, we’ll verify your TrxID and confirm enrollment."}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}