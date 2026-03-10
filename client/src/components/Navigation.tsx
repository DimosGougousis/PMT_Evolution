/* Design: Dark Command Centre — sticky top navigation with progress bar and section anchors */
import { useEffect, useState } from "react";

const navItems = [
  { id: "executive-summary", label: "Executive Brief" },
  { id: "market-context", label: "Market Context" },
  { id: "software-clusters", label: "Software Clusters" },
  { id: "architecture", label: "Architecture" },
  { id: "regulatory", label: "Regulatory" },
  { id: "gap-analysis", label: "Gap Analysis" },
  { id: "compliance-cost", label: "Compliance Cost" },
  { id: "roadmap", label: "Roadmap" },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("executive-summary");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);

      // Determine active section
      for (let i = navItems.length - 1; i >= 0; i--) {
        const el = document.getElementById(navItems[i].id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      {/* Progress bar */}
      <div
        id="progress-bar"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Nav bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/8"
        style={{ background: "oklch(0.10 0.012 255 / 90%)", backdropFilter: "blur(16px)" }}>
        <div className="container">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <div className="flex items-center gap-3 shrink-0">
              <div className="w-7 h-7 rounded flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, oklch(0.60 0.20 255), oklch(0.50 0.22 280))" }}>
                <span className="text-white font-bold text-xs" style={{ fontFamily: "Syne, sans-serif" }}>PMT</span>
              </div>
              <span className="font-bold text-sm text-white/90 hidden sm:block" style={{ fontFamily: "Syne, sans-serif" }}>
                PMT Evolution
              </span>
              <span className="text-white/30 text-xs hidden md:block" style={{ fontFamily: "Space Mono, monospace" }}>
                SaaS Strategy 2026
              </span>
            </div>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="px-3 py-1.5 rounded text-xs font-medium transition-all duration-200"
                  style={{
                    fontFamily: "Manrope, sans-serif",
                    color: activeSection === item.id ? "oklch(0.72 0.18 255)" : "oklch(0.60 0.005 255)",
                    background: activeSection === item.id ? "oklch(0.60 0.20 255 / 12%)" : "transparent",
                    borderBottom: activeSection === item.id ? "1px solid oklch(0.60 0.20 255 / 50%)" : "1px solid transparent",
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-white/60 hover:text-white"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <div className="w-5 h-0.5 bg-current mb-1" />
              <div className="w-5 h-0.5 bg-current mb-1" />
              <div className="w-5 h-0.5 bg-current" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden border-t border-white/8 py-2"
            style={{ background: "oklch(0.12 0.014 255)" }}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="w-full text-left px-6 py-2.5 text-sm transition-colors"
                style={{
                  fontFamily: "Manrope, sans-serif",
                  color: activeSection === item.id ? "oklch(0.72 0.18 255)" : "oklch(0.65 0.005 255)",
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}
