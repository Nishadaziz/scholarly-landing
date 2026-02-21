import { Link } from "react-router-dom";

export default function CheckoutBox({ title, subtitle, lang, slug }) {
  return (
    <div className="mt-12 rounded-3xl border border-gray-200 bg-gray-50 p-6 md:p-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
        <div>
          <div className="text-lg font-bold text-gray-900">{title}</div>
          <div className="mt-1 text-sm text-gray-700">{subtitle}</div>
        </div>

        <div className="flex gap-3">
          <Link
            to={slug ? `/checkout/${slug}` : "/"}
            className="rounded-2xl bg-brand-red px-6 py-3 text-sm font-semibold text-white hover:bg-brand-red2 transition-colors"
          >
            {lang === "bn" ? "চেকআউট" : "Checkout"}
          </Link>

          <Link
            to="/"
            className="rounded-2xl border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-white transition-colors"
          >
            {lang === "bn" ? "হোম" : "Home"}
          </Link>
        </div>
      </div>
    </div>
  );
}