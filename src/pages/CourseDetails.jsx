import { useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { COURSES } from "../data/courses";

import CourseHero from "../components/course/CourseHero";
import LanguageToggle from "../components/course/LanguageToggle";
import CourseOutcome from "../components/course/CourseOutcome";
import CourseScheduleCards from "../components/course/CourseScheduleCards";
import FAQSection from "../components/course/FAQSection";
import CheckoutBox from "../components/course/CheckoutBox";
import SupportHighlight from "../components/course/SupportHighlight";
import PricingSection from "../components/course/PricingSection";

export default function CourseDetails() {
  const { slug } = useParams();
  const [lang, setLang] = useState("bn");

  const course = useMemo(() => COURSES[slug], [slug]);

  if (!course) {
    return (
      <section className="w-full bg-[#0b1220] py-16">
        <div className="mx-auto w-[95%] max-w-4xl rounded-3xl bg-white p-10">
          <h1 className="text-2xl font-bold text-gray-900">Course not found</h1>
          <p className="mt-2 text-gray-700">Please go back and select a course.</p>
          <Link className="mt-6 inline-block text-brand-red font-semibold" to="/">
            ← Back to Home
          </Link>
        </div>
      </section>
    );
  }

  const t = (obj) => obj?.[lang] ?? "";

  return (
    <section className="w-full bg-[#0b1220] py-16">
      <div className="mx-auto w-[95%] max-w-7xl">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-10 shadow-sm space-y-12">
          <CourseHero
            image={course.heroImage}
            title={t(course.title)}
            subtitle={t(course.subtitle)}
          />

          <LanguageToggle lang={lang} setLang={setLang} />

          {/* ✅ OUTCOME (NOT OUTLINE) */}
         <CourseScheduleCards items={course.schedule?.[lang] || []} />

          <SupportHighlight lang={lang} />

          <FAQSection
            title={lang === "bn" ? "প্রশ্নোত্তর (FAQ)" : "FAQ"}
            subtitle={
              lang === "bn"
                ? "আরও কিছু জানতে চান? নিচের প্রশ্নগুলো দেখুন।"
                : "Want to know more? Check the questions below."
            }
            items={course.faqs?.[lang] || []}
          />

          <PricingSection
            lang={lang}
            price={course.payment?.price?.[lang] || (lang === "bn" ? "৳ ৭,৯৯৯" : "৳ 7,999")}
            oldPrice={course.payment?.oldPrice?.[lang] || (lang === "bn" ? "৳ ৬,৫০০" : "৳ 6,500")}
            duration={course.payment?.duration?.[lang] || (lang === "bn" ? "১ মাস" : "1 Month")}
            seats={lang === "bn" ? "সীমিত" : "Limited"}
          />

          <CheckoutBox
            lang={lang}
            slug={slug}
            title={lang === "bn" ? "এখনই এনরোল করুন" : "Enroll Now"}
            subtitle={
              lang === "bn"
                ? "চেকআউট বাটনে ক্লিক করে ব্যাচ/পেমেন্ট তথ্য দেখুন।"
                : "Click checkout to see batch/payment information."
            }
          />
        </div>
      </div>
    </section>
  );
}