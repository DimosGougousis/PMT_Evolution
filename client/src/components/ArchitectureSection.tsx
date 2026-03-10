/* Design: Apple.com — white section, tabbed layer explorer, mission-critical table */
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const layerIcons = ["🏢", "🖥️", "⚖️"];
const layerIds = ["L1", "L2", "L3"];

export default function ArchitectureSection() {
  const { t } = useLanguage();
  const [activeIdx, setActiveIdx] = useState(0);

  const layers: { id: string; label: string; title: string; color: string; description: string; items: string[] }[] = t("architecture.layers");
  const mcItems: { system: string; consequence: string; rto: string; badge: string }[] = t("architecture.missionCritical.items");
  const mcHeaders: string[] = t("architecture.missionCritical.headers");

  const active = layers[activeIdx];

  return (
    <section id="architecture" className="section-white" style={{ padding: "100px 0" }}>
      <div className="container">
        {/* Header */}
        <div style={{ maxWidth: "680px", marginBottom: "64px" }}>
          <div className="section-eyebrow">{t("architecture.eyebrow")}</div>
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
            {t("architecture.title")}
          </h2>
          <p style={{ fontSize: "1.05rem", color: "#6e6e73", lineHeight: 1.7, letterSpacing: "-0.01em" }}>
            {t("architecture.subtitle")}
          </p>
        </div>

        {/* Layer tabs */}
        <div style={{ display: "flex", gap: "8px", marginBottom: "24px", flexWrap: "wrap" }}>
          {layers.map((l, idx) => (
            <button
              key={l.id}
              onClick={() => setActiveIdx(idx)}
              style={{
                padding: "8px 20px",
                borderRadius: "980px",
                fontSize: "0.875rem",
                fontWeight: 500,
                cursor: "pointer",
                transition: "all 0.15s ease",
                background: activeIdx === idx ? l.color : "#f5f5f7",
                color: activeIdx === idx ? "#ffffff" : "#6e6e73",
                border: "none",
              }}
            >
              {layerIcons[idx]} {l.title}
            </button>
          ))}
        </div>

        {/* Active layer detail */}
        {active && (
          <div
            className="apple-card"
            style={{
              padding: "40px",
              marginBottom: "56px",
              borderTop: `3px solid ${active.color}`,
            }}
          >
            <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "#aeaeb2", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "8px" }}>
              {active.label}
            </div>
            <p style={{ fontSize: "1rem", color: "#3a3a3c", lineHeight: 1.7, maxWidth: "700px", marginBottom: "36px" }}>
              {active.description}
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {active.items.map((item, j) => (
                <li key={j} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.9rem", color: "#3a3a3c" }}>
                  <span style={{ color: active.color, fontSize: "0.6rem" }}>▸</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Mission-critical systems table */}
        <div>
          <h3
            style={{
              fontSize: "1.4rem",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "#1d1d1f",
              marginBottom: "8px",
            }}
          >
            {t("architecture.missionCritical.title")}
          </h3>
          <p style={{ fontSize: "0.95rem", color: "#6e6e73", marginBottom: "24px", lineHeight: 1.6 }}>
            {t("architecture.missionCritical.subtitle")}
          </p>
          <div className="apple-card" style={{ overflow: "hidden" }}>
            <table className="apple-table">
              <thead>
                <tr>
                  {mcHeaders.map((h, i) => <th key={i}>{h}</th>)}
                </tr>
              </thead>
              <tbody>
                {mcItems.map((row, i) => (
                  <tr key={i}>
                    <td style={{ fontWeight: 500, color: "#1d1d1f" }}>{row.system}</td>
                    <td style={{ color: "#6e6e73" }}>{row.consequence}</td>
                    <td style={{ color: "#6e6e73", fontSize: "0.8rem", fontFamily: "monospace" }}>{row.rto}</td>
                    <td><span className={row.badge}>●</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
