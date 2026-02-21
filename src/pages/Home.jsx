import { useEffect, useRef, useState } from "react";
import CountUp from "../components/ui/CountUp";
import CoursesSection from "../sections/CoursesSection"; // ✅ ADD THIS

const YT_EMBED_URL =
  "https://www.youtube.com/embed/W_mUF9k29Jc?si=D7iIUJWsJPFIIUBJ";

export default function Home() {
  const previewRef = useRef(null);

  const [showFloater, setShowFloater] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const [activeCard, setActiveCard] = useState(0);

  // Floating mini player logic
  useEffect(() => {
    const el = previewRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!isClosed) setShowFloater(!entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [isClosed]);

  useEffect(() => {
    if (isClosed) setShowFloater(false);
  }, [isClosed]);

  return (
    <section className="w-full bg-[#0b1220] py-16">
      <div className="mx-auto w-[95%] max-w-7xl">
        <div className="rounded-3xl border border-gray-200 bg-white p-8 md:p-12 shadow-sm">

          {/* HERO */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <div>
              <div className="inline-flex items-center gap-6 rounded-2xl border-2 border-brand-red bg-brand-red/5 px-6 md:px-8 py-4 md:py-5 shadow-md relative">
                <span className="absolute -top-3 left-6 md:left-8 bg-white text-gray-700 px-3 py-1 text-[10px] md:text-xs font-bold tracking-widest border border-gray-200 rounded-full shadow-sm">
                  EST. 2021
                </span>

                <span className="text-brand-red text-4xl md:text-5xl font-extrabold tracking-tight">
                  <CountUp to={5781} duration={4500} />+
                </span>

                <div className="leading-tight">
                  <div className="ty-badge-label">
                    Scores Generated Successfully
                  </div>
                  <div className="ty-badge-sub">
                    Trusted results from real learners
                  </div>
                </div>
              </div>

              <h1 className="mt-10 ty-hero">
                Learn smarter.{" "}
                <span className="ty-hero-accent block sm:inline">
                  Score higher.
                </span>
              </h1>

              <p className="ty-subtitle">
                Built for Duolingo English Test — Reading • Writing • Listening • Speaking.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <button className="rounded-2xl bg-brand-red px-8 py-3 text-sm font-semibold text-white hover:bg-brand-red2 transition-colors">
                  Get Started
                </button>

                <button className="rounded-2xl border border-gray-200 px-8 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50 transition-colors">
                  View Courses
                </button>
              </div>

              <div className="mt-6 ty-meta max-w-xl">
                Structured learning paths, quick feedback, and measurable improvement.
              </div>
            </div>

            <div ref={previewRef}>
              <div className="rounded-3xl border border-gray-200 bg-gray-50 p-4 md:p-6 shadow-sm">
                <div className="aspect-video w-full rounded-2xl overflow-hidden border border-gray-200 bg-white">
                  <iframe
                    className="h-full w-full"
                    src={YT_EMBED_URL}
                    title="YouTube video player"
                    allowFullScreen
                  />
                </div>

                <div className="mt-5 ty-card-title">
                  Scholarly Video Preview
                </div>
                <div className="ty-meta mt-1">
                  A quick walkthrough of the DET system.
                </div>
              </div>
            </div>
          </div>

          {/* ✅ COURSES SECTION (PUT HERE) */}
          <div className="mt-20">
            <CoursesSection />
          </div>

          {/* WHY SECTION */}
          <div className="mt-20 border-t border-gray-200 pt-12">
            <h2 className="ty-section">Why students choose Scholarly</h2>
            <p className="ty-section-lead">
              A clean system designed for practice, improvement, and confident exam performance.
            </p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              <InfoCard
                title="Fast practice"
                desc="Quick sets that fit your day."
                active={activeCard === 0}
                onClick={() => setActiveCard(0)}
              />
              <InfoCard
                title="Clear insights"
                desc="Understand exactly what to fix."
                active={activeCard === 1}
                onClick={() => setActiveCard(1)}
              />
              <InfoCard
                title="Better results"
                desc="Improve with guided repetition."
                active={activeCard === 2}
                onClick={() => setActiveCard(2)}
              />
            </div>
          </div>

        </div>
      </div>

      {/* FLOATING MINI PLAYER */}
      {showFloater && (
        <div className="fixed bottom-5 right-5 z-50">
          <div className="w-[320px] md:w-[360px] rounded-2xl border border-gray-200 bg-white shadow-2xl overflow-hidden">
            <div className="aspect-video w-full">
              <iframe
                className="h-full w-full"
                src={YT_EMBED_URL}
                title="YouTube mini player"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

/* Info Cards */
function InfoCard({ title, desc, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "text-left w-full rounded-3xl border bg-white p-8 transition-all duration-300",
        active
          ? "border-brand-red/40 shadow-2xl scale-[1.05]"
          : "border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2",
      ].join(" ")}
    >
      <div className="ty-card-title">{title}</div>
      <div className="ty-card-desc">{desc}</div>
    </button>
  );
}