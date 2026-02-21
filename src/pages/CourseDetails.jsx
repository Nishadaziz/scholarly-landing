import { useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { COURSES } from "../data/courses";

import CourseHero from "../components/course/CourseHero";
import LanguageToggle from "../components/course/LanguageToggle";
import GuidelineList from "../components/course/GuidelineList";
import OutlineGrid from "../components/course/OutlineGrid";
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

  const outlineCards = (course.outlineCards || []).map((c) => ({
  title: t(c.title),
  desc: t(c.desc),
}));

  return (
    <section className="w-full bg-[#0b1220] py-16">
      <div className="mx-auto w-[95%] max-w-7xl">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-10 shadow-sm">
          <CourseHero
            image={course.heroImage}
            title={t(course.title)}
            subtitle={t(course.subtitle)}
          />

          <LanguageToggle lang={lang} setLang={setLang} />

          <GuidelineList
            title={lang === "bn" ? "কোর্স গাইডলাইন" : "Course Guideline"}
            items={course.guideline[lang] || []}
          />
           <SupportHighlight lang={lang} />

          <OutlineGrid
            title={lang === "bn" ? "কোর্স আউটলাইন" : "Course Outline"}
            cards={outlineCards}
          />

          <FAQSection
            title={lang === "bn" ? "প্রশ্নোত্তর (FAQ)" : "FAQ"}
            subtitle={
              lang === "bn"
                ? "আরো কিছু জানতে চান? নিচের প্রশ্নগুলো দেখুন।"
                : "Want to know more? Check the questions below."
            }
            items={course.faqs[lang] || []}
          />
          <PricingSection
  lang={lang}
  price={lang === "bn" ? "৳ ৪,৯৯৯" : "৳ 4,999"}
  oldPrice={lang === "bn" ? "৳ ৬,৫০০" : "৳ 6,500"}
  duration={lang === "bn" ? "১০ সপ্তাহ" : "10 weeks"}
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