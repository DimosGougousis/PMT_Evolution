/* Design: Apple.com — frosted glass nav with NL/EN language toggle */
import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const sectionIds = [
  "hero",
  "market-context",
  "software-clusters",
  "architecture",
  "regulatory",
  "gap-analysis",
  "compliance-cost",
  "roadmap",
];

export default function Navigation() {
  const { language, setLanguage, t } = useLanguage();
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLabels: string[] = t("nav.links");

  const navItems = sectionIds.map((id, i) => ({ id, label: navLabels[i] ?? id }));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      for (let i = navItems.length - 1; i >= 0; i--) {
        const el = document.getElementById(navItems[i].id);
        if (el && el.getBoundingClientRect().top <= 100) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled ? "rgba(255,255,255,0.88)" : "rgba(255,255,255,0.72)",
        backdropFilter: "saturate(180%) blur(20px)",
        WebkitBackdropFilter: "saturate(180%) blur(20px)",
        borderBottom: scrolled ? "1px solid #e5e5ea" : "1px solid transparent",
        transition: "border-color 0.3s ease, background 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 1.5rem",
          height: "52px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
          <div
            style={{
              width: "28px",
              height: "28px",
              borderRadius: "7px",
              background: "#0071e3",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <span style={{ color: "white", fontWeight: 700, fontSize: "10px", letterSpacing: "-0.02em" }}>PMT</span>
          </div>
          <span
            style={{
              fontWeight: 600,
              fontSize: "0.875rem",
              color: "#1d1d1f",
              letterSpacing: "-0.01em",
              whiteSpace: "nowrap",
            }}
          >
            {t("nav.title")}
          </span>
        </div>

        {/* Desktop nav */}
        <div
          style={{ display: "flex", alignItems: "center", gap: "2px" }}
          className="hidden lg:flex"
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              style={{
                padding: "5px 10px",
                borderRadius: "980px",
                fontSize: "0.75rem",
                fontWeight: activeSection === item.id ? 600 : 400,
                color: activeSection === item.id ? "#0071e3" : "#6e6e73",
                background: activeSection === item.id ? "rgba(0,113,227,0.08)" : "transparent",
                border: "none",
                cursor: "pointer",
                transition: "all 0.15s ease",
                whiteSpace: "nowrap",
              }}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Right side: Language toggle + mobile menu */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
          {/* Language Toggle */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: "#f5f5f7",
              borderRadius: "980px",
              padding: "3px",
              gap: "2px",
            }}
          >
            {(["en", "nl"] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                style={{
                  padding: "4px 12px",
                  borderRadius: "980px",
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  letterSpacing: "0.03em",
                  textTransform: "uppercase",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  background: language === lang ? "#ffffff" : "transparent",
                  color: language === lang ? "#0071e3" : "#8e8e93",
                  boxShadow: language === lang ? "0 1px 4px rgba(0,0,0,0.12)" : "none",
                }}
              >
                {lang}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none",
              border: "none",
              color: "#1d1d1f",
              cursor: "pointer",
              padding: "4px",
              fontSize: "1.1rem",
            }}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            background: "rgba(255,255,255,0.97)",
            backdropFilter: "blur(20px)",
            borderTop: "1px solid #e5e5ea",
            padding: "0.5rem 1.5rem 1rem",
          }}
          className="lg:hidden"
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                padding: "10px 0",
                fontSize: "0.95rem",
                fontWeight: activeSection === item.id ? 600 : 400,
                color: activeSection === item.id ? "#0071e3" : "#1d1d1f",
                background: "none",
                border: "none",
                borderBottom: "1px solid #f2f2f7",
                cursor: "pointer",
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
