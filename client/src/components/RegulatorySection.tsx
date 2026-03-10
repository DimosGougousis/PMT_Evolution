/* Design: Apple.com — grey section, tabbed regulation explorer */
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function RegulatorySection() {
  const { t } = useLanguage();
  const [activeIdx, setActiveIdx] = useState(0);

  const items: {
    id: string;
    badge: string;
    badgeClass: string;
    title: string;
    effective: string;
    description: string;
    obligations: string[];
    fine: string;
  }[] = t("regulatory.items");

  const active = items[activeIdx];

  return (
    <section id="regulatory" className="section-grey" style={{ padding: "100px 0" }}>
      <div className="container">
        {/* Header */}
        <div style={{ maxWidth: "680px", marginBottom: "64px" }}>
          <div className="section-eyebrow">{t("regulatory.eyebrow")}</div>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: "#1d1d1f",
              lineHeight: 1.1,
              marginBottom: "1rem",
            }}
          >
            {t("regulatory.title")}
          </h2>
          <p style={{ fontSize: "1.05rem", color: "#6e6e73", lineHeight: 1.7, letterSpacing: "-0.01em" }}>
            {t("regulatory.subtitle")}
          </p>
        </div>

        {/* Regulation tabs */}
        <div style={{ display: "flex", gap: "8px", marginBottom: "24px", flexWrap: "wrap" }}>
          {items.map((r, i) => (
            <button
              key={r.id}
              onClick={() => setActiveIdx(i)}
              style={{
                padding: "8px 16px",
                borderRadius: "980px",
                fontSize: "0.8rem",
                fontWeight: 500,
                cursor: "pointer",
                transition: "all 0.15s ease",
                background: activeIdx === i ? "#0071e3" : "#ffffff",
                color: activeIdx === i ? "#ffffff" : "#6e6e73",
                border: `1px solid ${activeIdx === i ? "#0071e3" : "#e5e5ea"}`,
              }}
            >
              {r.title}
            </button>
          ))}
        </div>

        {/* Active regulation card */}
        {active && (
          <div
            className="apple-card"
            style={{
              padding: "40px",
              marginBottom: "56px",
              borderTop: `3px solid ${active.badgeClass === "badge-critical" ? "#ff3b30" : active.badgeClass === "badge-warning" ? "#ff9500" : "#0071e3"}`,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <span className={active.badgeClass}>{active.badge}</span>
              <span style={{ fontSize: "0.8rem", color: "#8e8e93" }}>Effective: {active.effective}</span>
              <span style={{ fontSize: "0.8rem", fontWeight: 600, color: "#ff3b30" }}>Max fine: {active.fine}</span>
            </div>
            <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#1d1d1f", letterSpacing: "-0.02em", marginBottom: "12px" }}>
              {active.title}
            </h3>
            <p style={{ fontSize: "0.95rem", color: "#6e6e73", lineHeight: 1.7, marginBottom: "24px", maxWidth: "700px" }}>
              {active.description}
            </p>
            <div style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "#aeaeb2", marginBottom: "12px" }}>
              Software Obligations
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
              {active.obligations.map((ob, i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.875rem", color: "#3a3a3c" }}>
                  <span style={{ color: "#0071e3", flexShrink: 0, marginTop: "2px" }}>▸</span>
                  {ob}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
