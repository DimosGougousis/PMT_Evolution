/* Design: Apple.com — grey section, bar chart + fine table */
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { useLanguage } from "@/contexts/LanguageContext";

const chartData = [
  { name: "GDPR Art.83.5", value: 20, color: "#ff3b30" },
  { name: "EU AI Act", value: 15, color: "#ff3b30" },
  { name: "GDPR Art.83.4", value: 10, color: "#ff9500" },
  { name: "Pay Transparency", value: 5, color: "#ff9500" },
  { name: "WTTA", value: 0.1, color: "#0071e3" },
  { name: "ATW (per day)", value: 0.05, color: "#0071e3" },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ background: "#fff", border: "1px solid #e5e5ea", borderRadius: "10px", padding: "10px 14px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}>
        <div style={{ fontWeight: 600, fontSize: "0.875rem", color: "#1d1d1f", marginBottom: "4px" }}>{label}</div>
        <div style={{ fontSize: "0.8rem", color: "#6e6e73" }}>Max fine: <strong style={{ color: "#1d1d1f" }}>€{payload[0].value}M</strong></div>
      </div>
    );
  }
  return null;
};

export default function ComplianceCost() {
  const { t } = useLanguage();

  const rows: {
    regulation: string;
    enforcer: string;
    maxFine: string;
    typicalFine: string;
    trigger: string;
    defence: string;
    badge: string;
    badgeLabel: string;
  }[] = t("compliance.rows");

  const headers: string[] = t("compliance.headers");
  const stats: { value: string; label: string; sub: string; color: string }[] = t("compliance.stats");

  return (
    <section id="compliance-cost" className="section-grey" style={{ padding: "100px 0" }}>
      <div className="container">
        {/* Header */}
        <div style={{ maxWidth: "680px", marginBottom: "64px" }}>
          <div className="section-eyebrow">{t("compliance.eyebrow")}</div>
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
            {t("compliance.title")}
          </h2>
          <p style={{ fontSize: "1.05rem", color: "#6e6e73", lineHeight: 1.7, letterSpacing: "-0.01em" }}>
            {t("compliance.subtitle")}
          </p>
        </div>

        {/* Business case callout */}
        <div
          className="apple-card"
          style={{
            padding: "32px 40px",
            marginBottom: "48px",
            borderLeft: "4px solid #ff3b30",
            background: "rgba(255,59,48,0.03)",
          }}
        >
          <p style={{ fontSize: "1.05rem", color: "#3a3a3c", lineHeight: 1.7 }}>
            {t("compliance.callout")}
          </p>
        </div>

        {/* Summary stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1px",
            background: "#e5e5ea",
            borderRadius: "18px",
            overflow: "hidden",
            border: "1px solid #e5e5ea",
            marginBottom: "48px",
          }}
        >
          {stats.map((s, i) => (
            <div key={i} style={{ background: "#ffffff", padding: "2rem", textAlign: "center" }}>
              <div style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 700, letterSpacing: "-0.04em", color: s.color, lineHeight: 1, marginBottom: "8px" }}>{s.value}</div>
              <div style={{ fontSize: "0.875rem", fontWeight: 600, color: "#1d1d1f", marginBottom: "4px" }}>{s.label}</div>
              <div style={{ fontSize: "0.75rem", color: "#8e8e93" }}>{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="apple-card" style={{ padding: "32px", marginBottom: "48px" }}>
          <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "#1d1d1f", marginBottom: "6px", letterSpacing: "-0.01em" }}>
            {t("compliance.chartTitle")}
          </h3>
          <p style={{ fontSize: "0.75rem", color: "#aeaeb2", marginBottom: "24px" }}>
            {t("compliance.chartNote")}
          </p>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={chartData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f2f2f7" vertical={false} />
              <XAxis dataKey="name" tick={{ fontSize: 11, fill: "#8e8e93" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: "#8e8e93" }} axisLine={false} tickLine={false} unit="M" />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(0,0,0,0.03)" }} />
              <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                {chartData.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Fine table */}
        <div className="apple-card" style={{ overflow: "hidden" }}>
          <table className="apple-table">
            <thead>
              <tr>
                {headers.map((h, i) => <th key={i}>{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i}>
                  <td style={{ fontWeight: 600, color: "#1d1d1f", fontSize: "0.825rem" }}>{row.regulation}</td>
                  <td style={{ color: "#6e6e73", fontSize: "0.775rem" }}>{row.enforcer}</td>
                  <td style={{ fontWeight: 600, color: "#1d1d1f", fontSize: "0.8rem", fontFamily: "monospace" }}>{row.maxFine}</td>
                  <td style={{ color: "#6e6e73", fontSize: "0.775rem", fontFamily: "monospace" }}>{row.typicalFine}</td>
                  <td style={{ color: "#6e6e73", fontSize: "0.775rem" }}>{row.trigger}</td>
                  <td style={{ color: "#0071e3", fontSize: "0.775rem" }}>{row.defence}</td>
                  <td><span className={row.badge}>{row.badgeLabel}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
