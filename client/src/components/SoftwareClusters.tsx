/* Design: Apple.com — grey section, expandable white cards */
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const icons = ["🏪", "⚖️", "👥", "📈", "📱", "🕐", "📊"];
const accentColors = ["#0071e3", "#ff3b30", "#34c759", "#ff9500", "#af52de", "#5ac8fa", "#ff2d55"];

export default function SoftwareClusters() {
  const { t } = useLanguage();
  const [active, setActive] = useState<string | null>(null);
  const items: { id: string; title: string; color: string; description: string; features: string[] }[] = t("clusters.items");

  return (
    <section id="software-clusters" className="section-grey" style={{ padding: "100px 0" }}>
      <div className="container">
        {/* Header */}
        <div style={{ maxWidth: "680px", marginBottom: "64px" }}>
          <div className="section-eyebrow">{t("clusters.eyebrow")}</div>
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
            {t("clusters.title")}
          </h2>
          <p style={{ fontSize: "1.05rem", color: "#6e6e73", lineHeight: 1.7, letterSpacing: "-0.01em" }}>
            {t("clusters.subtitle")}
          </p>
        </div>

        {/* Cluster cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "16px",
          }}
        >
          {items.map((c, idx) => {
            const accent = accentColors[idx] ?? "#0071e3";
            return (
              <div
                key={c.id}
                className="apple-card"
                style={{
                  padding: "24px",
                  cursor: "pointer",
                  borderTop: `3px solid ${accent}`,
                  transition: "box-shadow 0.2s ease",
                }}
                onClick={() => setActive(active === c.id ? null : c.id)}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ fontSize: "0.7rem", fontWeight: 600, color: "#aeaeb2", letterSpacing: "0.04em" }}>{c.id}</span>
                    <span style={{ fontSize: "1.4rem" }}>{icons[idx]}</span>
                  </div>
                </div>

                <h3
                  style={{
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    color: "#1d1d1f",
                    marginBottom: "8px",
                    letterSpacing: "-0.01em",
                    lineHeight: 1.3,
                  }}
                >
                  {c.title}
                </h3>
                <p style={{ fontSize: "0.825rem", color: "#6e6e73", lineHeight: 1.6, marginBottom: "12px" }}>{c.description}</p>

                {active === c.id && (
                  <div style={{ marginTop: "16px", paddingTop: "16px", borderTop: "1px solid #f2f2f7" }}>
                    <div style={{ fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "#aeaeb2", marginBottom: "10px" }}>
                      Features
                    </div>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "6px" }}>
                      {c.features.map((feat, i) => (
                        <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.8rem", color: "#3a3a3c" }}>
                          <span style={{ color: accent, marginTop: "1px", flexShrink: 0 }}>▸</span>
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div style={{ fontSize: "0.72rem", color: "#aeaeb2", marginTop: "10px" }}>
                  {active === c.id ? "▲ Collapse" : "▼ Expand details"}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
