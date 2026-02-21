import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Courses", to: "/" },
  { label: "Books", to: "/" },
  { label: "Live Batches", to: "/" },
  { label: "Student Feedback", to: "/" },
  { label: "About", to: "/" },
  { label: "Contact", to: "/" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const shellClass = isScrolled
    ? "bg-brand-surface/75 backdrop-blur-md border border-brand-line shadow-lg"
    : "bg-brand-surface border border-brand-line";

  const linkClass =
    "text-sm font-medium text-brand-text/90 hover:text-brand-text transition-colors";

  return (
    <header className="w-full sticky top-0 z-50">
      <div className="w-full flex justify-center pt-6">
        <div
          className={`w-[95%] max-w-7xl rounded-2xl px-6 py-4 flex items-center justify-between transition-all duration-300 ${shellClass}`}
        >
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-brand-red/15 border border-brand-red/25 flex items-center justify-center">
              <span className="text-brand-red font-bold">S</span>
            </div>
            <div className="leading-tight">
              <div className="text-lg font-semibold tracking-wide">
                Scholarly
              </div>
              <div className="text-xs text-brand-muted -mt-0.5">
                Premium learning
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <Link key={l.label} to={l.to} className={linkClass}>
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Right */}
          <div className="flex items-center gap-3">
            <button className="hidden md:inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold bg-brand-red text-white hover:bg-brand-red2 transition-colors">
              Login
            </button>

            <button
              className="md:hidden inline-flex items-center justify-center rounded-xl px-3 py-2 border border-brand-line"
              onClick={() => setIsOpen((v) => !v)}
              aria-label="Open menu"
            >
              <div className="w-6">
                <div className="h-0.5 bg-brand-text mb-1"></div>
                <div className="h-0.5 bg-brand-text mb-1"></div>
                <div className="h-0.5 bg-brand-text"></div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="w-full flex justify-center">
          <div className="w-[95%] max-w-7xl mt-3 rounded-2xl bg-brand-surface border border-brand-line px-6 py-4 md:hidden">
            <nav className="flex flex-col gap-4">
              {navLinks.map((l) => (
                <Link
                  key={l.label}
                  to={l.to}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-brand-text/90 hover:text-brand-text"
                >
                  {l.label}
                </Link>
              ))}

              <button className="mt-2 inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold bg-brand-red text-white hover:bg-brand-red2 transition-colors">
                Login
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}