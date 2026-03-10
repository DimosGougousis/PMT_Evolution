/* Design: Apple.com — white section, interactive phase timeline */
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function RoadmapSection() {
  const { t } = useLanguage();
  const [activeIdx, setActiveIdx] = useState(0);

  const phases: {
    id: string;
    label: string;
    title: string;
    period: string;
    sprints: string;
    deadline: string;
    accentColor: string;
    color?: string;
    statusLabel: string;
    description: string;
    deliverables: { name: string; team: string; priority: string }[];
    standards: string[];
    teams: string[];
    criticalPath?: string;
  }[] = t("roadmap.phases");

  const risks: {
    risk: string;
    probability: string;
    impact: string;
    mitigation: string;
    probBadge: string;
    impactBadge: string;
  }[] = t("roadmap.risks");

  const riskHeaders: string[] = t("roadmap.riskHeaders");

  const active = phases[activeIdx];
  // Support both accentColor (from translations) and color (legacy)
  const getColor = (p: typeof phases[0]) => p.accentColor || p.color || "#0071e3";

  return (
    <section id="roadmap" className="section-white" style={{ padding: "100px 0 120px" }}>
      <div className="container">
        {/* Header */}
        <div style={{ maxWidth: "680px", marginBottom: "64px" }}>
          <div className="section-eyebrow">{t("roadmap.eyebrow")}</div>
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
            {t("roadmap.title")}
          </h2>
          <p style={{ fontSize: "1.05rem", color: "#6e6e73", lineHeight: 1.7, letterSpacing: "-0.01em" }}>
            {t("roadmap.subtitle")}
          </p>
        </div>

        {/* Phase selector */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "4px",
            marginBottom: "32px",
          }}
        >
          {phases.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => setActiveIdx(idx)}
              style={{
                padding: "16px 20px",
                borderRadius: "14px",
                textAlign: "left",
                cursor: "pointer",
                background: activeIdx === idx ? getColor(p) : "#f5f5f7",
                border: "none",
                transition: "all 0.2s ease",
                borderTop: `3px solid ${activeIdx === idx ? "transparent" : getColor(p)}`,
              }}
            >
              <div style={{ fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: activeIdx === idx ? "rgba(255,255,255,0.7)" : "#aeaeb2", marginBottom: "4px" }}>
                {p.sprints}
              </div>
              <div style={{ fontWeight: 700, fontSize: "0.9rem", color: activeIdx === idx ? "#ffffff" : "#1d1d1f", marginBottom: "2px", letterSpacing: "-0.01em" }}>
                {p.title}
              </div>
              <div style={{ fontSize: "0.75rem", color: activeIdx === idx ? "rgba(255,255,255,0.75)" : "#8e8e93", marginBottom: "10px" }}>
                {p.period}
              </div>
              <span
                style={{
                  fontSize: "0.65rem",
                  fontWeight: 600,
                  padding: "2px 8px",
                  borderRadius: "100px",
                  background: activeIdx === idx ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.06)",
                  color: activeIdx === idx ? "#ffffff" : "#6e6e73",
                }}
              >
                {p.statusLabel}
              </span>
            </button>
          ))}
        </div>

        {/* Active phase detail */}
        {active && (
          <div
            className="apple-card"
            style={{ padding: "40px", marginBottom: "56px", borderTop: `3px solid ${getColor(active)}` }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "48px", alignItems: "start" }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                  <span style={{ fontSize: "1.4rem", fontWeight: 800, color: getColor(active), letterSpacing: "-0.04em" }}>{active.label}</span>
                  <span style={{ fontSize: "1.1rem", fontWeight: 700, color: "#1d1d1f", letterSpacing: "-0.02em" }}>{active.title}</span>
                </div>
                <p style={{ fontSize: "0.95rem", color: "#6e6e73", lineHeight: 1.7, marginBottom: "28px" }}>{active.description}</p>

                <div style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "#aeaeb2", marginBottom: "12px" }}>
                  Deliverables
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "24px" }}>
                  {active.deliverables.map((d, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "10px 14px",
                        borderRadius: "10px",
                        background: "#f5f5f7",
                        gap: "12px",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <span className={d.priority === "critical" ? "badge-critical" : d.priority === "warning" ? "badge-warning" : "badge-info"} style={{ fontSize: "0.6rem" }}>
                          {d.priority}
                        </span>
                        <span style={{ fontSize: "0.875rem", color: "#3a3a3c", fontWeight: 500 }}>{d.name}</span>
                      </div>
                      <span style={{ fontSize: "0.72rem", color: "#aeaeb2", flexShrink: 0, fontFamily: "monospace" }}>{d.team}</span>
                    </div>
                  ))}
                </div>

                {active.criticalPath && (
                  <div
                    style={{
                      background: "rgba(255,149,0,0.06)",
                      border: "1px solid rgba(255,149,0,0.2)",
                      borderRadius: "10px",
                      padding: "14px 16px",
                    }}
                  >
                    <div style={{ fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "#b8690a", marginBottom: "4px" }}>
                      Critical Path Risk
                    </div>
                    <div style={{ fontSize: "0.825rem", color: "#3a3a3c" }}>{active.criticalPath}</div>
                  </div>
                )}
              </div>

              <div>
                <div style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "#aeaeb2", marginBottom: "8px" }}>Deadline</div>
                <div style={{ fontWeight: 700, fontSize: "1rem", color: getColor(active), marginBottom: "24px", fontFamily: "monospace" }}>{active.deadline}</div>

                <div style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "#aeaeb2", marginBottom: "10px" }}>Standards</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "24px" }}>
                  {active.standards.map((s, i) => (
                    <span key={i} style={{ fontSize: "0.72rem", padding: "4px 10px", borderRadius: "6px", background: "#f5f5f7", color: "#6e6e73", border: "1px solid #e5e5ea", fontWeight: 500, fontFamily: "monospace" }}>
                      {s}
                    </span>
                  ))}
                </div>

                <div style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "#aeaeb2", marginBottom: "10px" }}>Teams</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {active.teams.map((tm, i) => (
                    <span key={i} style={{ fontSize: "0.72rem", padding: "4px 10px", borderRadius: "6px", background: `${getColor(active)}10`, color: getColor(active), border: `1px solid ${getColor(active)}25`, fontWeight: 600 }}>
                      {tm}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Risk register */}
        <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#1d1d1f", marginBottom: "20px", letterSpacing: "-0.02em" }}>
          {t("roadmap.riskTitle")}
        </h3>
        <div className="apple-card" style={{ overflow: "hidden" }}>
          <table className="apple-table">
            <thead>
              <tr>
                {riskHeaders.map((h, i) => <th key={i}>{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {risks.map((r, i) => (
                <tr key={i}>
                  <td style={{ fontWeight: 500, color: "#1d1d1f" }}>{r.risk}</td>
                  <td><span className={r.probBadge}>{r.probability}</span></td>
                  <td><span className={r.impactBadge}>{r.impact}</span></td>
                  <td style={{ color: "#6e6e73", fontSize: "0.825rem" }}>{r.mitigation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
