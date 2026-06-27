import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar({ activeSection, onNavClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home", icon: "🏡" },
    { id: "places", label: "Places", icon: "⛩️" },
    { id: "details", label: "Explore", icon: "🏔" },
    { id: "experience", label: "Culture", icon: "🍵" },
    { id: "passport", label: "Passport", icon: "📕" },
    { id: "contact", label: "Contact", icon: "✉️" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (id) => {
    onNavClick(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[92%] ${
        scrolled ? "max-w-5xl" : "max-w-6xl"
      }`}
    >
      <div
        className="rounded-2xl px-5 py-3 flex items-center justify-between transition-all duration-300"
        style={{
          background: "rgba(255, 255, 255, 0.75)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: "1px solid rgba(251, 180, 198, 0.3)",
          boxShadow: scrolled
            ? "0 10px 30px rgba(236, 72, 153, 0.12)"
            : "0 4px 20px rgba(0, 0, 0, 0.04)",
        }}
      >
        {/* Logo */}
        <div 
          onClick={() => handleLinkClick("home")}
          className="flex items-center gap-2 cursor-pointer select-none group"
        >
          {/* Torii Gate SVG Logo */}
          <div className="w-8 h-8 flex items-center justify-center bg-rose-50 rounded-xl group-hover:bg-rose-100 transition-colors duration-300">
            <svg
              viewBox="0 0 24 24"
              className="w-6 h-6 text-rose-500 group-hover:scale-110 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Torii structure */}
              <path d="M4 8h16" />
              <path d="M6 5h12" />
              <path d="M7 8v12" />
              <path d="M17 8v12" />
              <path d="M3 5c0 0 4-1 9-1s9 1 9 1" />
            </svg>
          </div>
          <div>
            <span className="font-gothicJp font-bold text-rose-500 text-base leading-none block tracking-wide">
              Journey
            </span>
            <span className="font-outfit font-medium text-rose-700 text-xs leading-none block uppercase tracking-widest mt-0.5">
              Through Japan
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`px-3 py-1.5 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-1.5 select-none relative group ${
                  isActive
                    ? "bg-rose-100/70 text-rose-600 shadow-sm shadow-rose-100"
                    : "text-gray-600 hover:bg-rose-50/50 hover:text-rose-500"
                }`}
                onMouseEnter={() => {
                  document.body.classList.add("hovering");
                }}
                onMouseLeave={() => {
                  document.body.classList.remove("hovering");
                }}
              >
                <span className="text-sm scale-95 group-hover:rotate-12 transition-transform duration-300">
                  {item.icon}
                </span>
                <span className="font-outfit">{item.label}</span>
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Action Menu */}
        <div className="flex items-center gap-3">
          {/* Cute Japanese Flag Indicator */}
          <div className="flex items-center gap-1.5 px-3 py-1 bg-rose-50/60 rounded-full border border-rose-100">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 border border-white" />
            <span className="text-xs font-semibold text-rose-600 select-none uppercase font-outfit">JP</span>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-gray-600 hover:bg-rose-50 hover:text-rose-500 transition-colors"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div
          className="md:hidden mt-2 rounded-2xl p-3 flex flex-col gap-1 transition-all duration-300"
          style={{
            background: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(251, 180, 198, 0.35)",
            boxShadow: "0 10px 30px rgba(236, 72, 153, 0.15)",
          }}
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium flex items-center gap-3 transition-all ${
                  isActive
                    ? "bg-rose-100 text-rose-600 font-bold"
                    : "text-gray-600 hover:bg-rose-50/60 hover:text-rose-500"
                }`}
              >
                <span className="text-base">{item.icon}</span>
                <span className="font-outfit">{item.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
}
