import CountUp from "../components/ui/CountUp";

export default function Home() {
  return (
    <div className="w-full flex justify-center bg-[#0b1220] py-16">
      <div className="w-[95%] max-w-7xl">
        <div className="rounded-3xl border border-gray-200 bg-white p-8 md:p-12 shadow-sm relative">
          
          {/* Count Badge */}
          <div className="mt-4 inline-flex items-center gap-6 rounded-2xl border-2 border-brand-red bg-white px-8 py-5 shadow-md relative">
            
            {/* EST 2021 Stamp */}
          <span className="absolute -top-3 left-8 bg-white text-gray-700 px-3 py-1 text-[10px] md:text-xs font-bold tracking-widest border border-gray-200 rounded-full shadow-sm">
  EST. 2021
</span>

            {/* Number */}
            <span className="text-brand-red text-4xl md:text-5xl font-extrabold tracking-tight">
              <CountUp to={5781} duration={2500} />+
            </span>

            {/* Text */}
            <div className="leading-tight">
              <div className="text-gray-900 text-sm md:text-base font-extrabold tracking-wide uppercase">
                Scores Generated Successfully
              </div>
              <div className="text-gray-500 text-xs md:text-sm font-medium mt-1">
                Trusted results from real learners
              </div>
            </div>
          </div>

          {/* Headline */}
          <h1 className="mt-10 text-4xl md:text-6xl font-semibold leading-tight text-gray-900">
            Learn smarter.{" "}
            <span className="text-brand-red">Score higher.</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-2xl text-gray-600 text-base md:text-lg">
            This is a placeholder hero. Next we’ll recreate your exact design:
            warning banner, headline, subtitle, video preview, pricing + CTA.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <button className="rounded-2xl bg-brand-red px-8 py-3 text-sm font-semibold text-white hover:bg-brand-red2 transition-colors">
              Get Started
            </button>

            <button className="rounded-2xl border border-gray-200 px-8 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50 transition-colors">
              View Courses
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}