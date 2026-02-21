export default function LanguageToggle({ lang, setLang }) {
  return (
    <div className="mt-8 flex items-center justify-end gap-2">
      <button
        onClick={() => setLang("bn")}
        className={[
          "rounded-xl px-4 py-2 text-sm font-semibold border",
          lang === "bn"
            ? "bg-brand-red text-white border-brand-red"
            : "bg-white text-gray-800 border-gray-200 hover:bg-gray-50",
        ].join(" ")}
      >
        বাংলা
      </button>

      <button
        onClick={() => setLang("en")}
        className={[
          "rounded-xl px-4 py-2 text-sm font-semibold border",
          lang === "en"
            ? "bg-brand-red text-white border-brand-red"
            : "bg-white text-gray-800 border-gray-200 hover:bg-gray-50",
        ].join(" ")}
      >
        English
      </button>
    </div>
  );
}