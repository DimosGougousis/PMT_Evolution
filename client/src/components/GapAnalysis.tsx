/* Design: Apple.com — white section, gap cards with red left border */
import { useLanguage } from "@/contexts/LanguageContext";

export default function GapAnalysis() {
  const { t } = useLanguage();

  const gapItems: {
    id: string;
    title: string;
    deadline: string;
    fine: string;
    status: string;
    statusLabel: string;
    color: string;
    description: string;
    buildRequirement: string;
    priority: string;
  }[] = t("gaps.items");

  const standards: {
    standard: string;
    scope: string;
    regulation: string;
    priority: string;
    priorityLabel: string;
  }[] = t("gaps.standards.items");

  const stdHeaders: string[] = t("gaps.standards.headers");

  return (
    <section id="gap-analysis" className="section-white" style={{ padding: "100px 0" }}>
      <div className="container">
        {/* Header */}
        <div style={{ maxWidth: "680px", marginBottom: "64px" }}>
          <div className="section-eyebrow">{t("gaps.eyebrow")}</div>
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
            {t("gaps.title")}
          </h2>
          <p style={{ fontSize: "1.05rem", color: "#6e6e73", lineHeight: 1.7, letterSpacing: "-0.01em" }}>
            {t("gaps.subtitle")}
          </p>
        </div>

        {/* Gap cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(460px, 1fr))", gap: "20px", marginBottom: "64px" }}>
          {gapItems.map((gap) => (
            <div
              key={gap.id}
              className="apple-card"
              style={{ padding: "28px", borderLeft: `4px solid ${gap.color}` }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                <span style={{ fontSize: "0.7rem", fontWeight: 600, color: "#aeaeb2", letterSpacing: "0.04em" }}>{gap.id}</span>
                <span className={gap.status}>{gap.statusLabel}</span>
              </div>
              <h4 style={{ fontWeight: 600, fontSize: "1rem", color: "#1d1d1f", marginBottom: "8px", letterSpacing: "-0.01em" }}>
                {gap.title}
              </h4>
              <div style={{ display: "flex", gap: "16px", marginBottom: "12px", flexWrap: "wrap" }}>
                <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "#b8690a", fontFamily: "monospace" }}>⏰ {gap.deadline}</span>
              </div>
              <p style={{ fontSize: "0.875rem", color: "#6e6e73", lineHeight: 1.65, marginBottom: "16px" }}>{gap.description}</p>
              <div
                style={{
                  background: "rgba(255,59,48,0.05)",
                  border: "1px solid rgba(255,59,48,0.15)",
                  borderRadius: "10px",
                  padding: "12px 14px",
                  marginBottom: "10px",
                }}
              >
                <div style={{ fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "#aeaeb2", marginBottom: "4px" }}>
                  Fine Exposure
                </div>
                <div style={{ fontSize: "0.875rem", fontWeight: 600, color: "#c0392b" }}>{gap.fine}</div>
              </div>
              <div style={{ background: "#f5f5f7", borderRadius: "10px", padding: "12px 14px" }}>
                <div style={{ fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "#aeaeb2", marginBottom: "4px" }}>
                  Build Required
                </div>
                <div style={{ fontSize: "0.8rem", color: "#3a3a3c" }}>{gap.buildRequirement}</div>
              </div>
              <div style={{ fontSize: "0.75rem", color: "#0071e3", marginTop: "10px", fontWeight: 500 }}>{gap.priority}</div>
            </div>
          ))}
        </div>

        {/* Standards table */}
        <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#1d1d1f", marginBottom: "8px", letterSpacing: "-0.02em" }}>
          {t("gaps.standards.title")}
        </h3>
        <p style={{ fontSize: "0.95rem", color: "#6e6e73", marginBottom: "24px", lineHeight: 1.6 }}>
          {t("gaps.standards.subtitle")}
        </p>
        <div className="apple-card" style={{ overflow: "hidden" }}>
          <table className="apple-table">
            <thead>
              <tr>
                {stdHeaders.map((h, i) => <th key={i}>{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {standards.map((s, i) => (
                <tr key={i}>
                  <td style={{ fontWeight: 600, color: "#0071e3", fontFamily: "monospace", fontSize: "0.85rem" }}>{s.standard}</td>
                  <td style={{ color: "#6e6e73" }}>{s.scope}</td>
                  <td style={{ color: "#6e6e73" }}>{s.regulation}</td>
                  <td><span className={s.priority}>{s.priorityLabel}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
