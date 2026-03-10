/* Design: Apple.com — grey section, white card table, recharts bar chart */
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";

const chartData = [
  { name: "GDPR Art.83.5", value: 20, color: "#ff3b30" },
  { name: "EU AI Act", value: 15, color: "#ff3b30" },
  { name: "GDPR Art.83.4", value: 10, color: "#ff9500" },
  { name: "Pay Transparency", value: 5, color: "#ff9500" },
  { name: "WTTA", value: 0.1, color: "#0071e3" },
  { name: "ATW (per day)", value: 0.05, color: "#0071e3" },
];

const rows = [
  {
    regulation: "GDPR — Article 83.5",
    enforcer: "Autoriteit Persoonsgegevens (AP)",
    maxFine: "€20M or 4% global turnover",
    typicalFine: "€750K – €10M",
    trigger: "Unlawful processing, breach without notification, missing legal basis",
    softwareDefence: "GDPR Module, Breach Notification Workflow, Audit Log",
    badge: "badge-critical",
    badgeLabel: "Critical",
  },
  {
    regulation: "EU AI Act — High-Risk",
    enforcer: "AP (anticipated)",
    maxFine: "€15M or 3% global turnover",
    typicalFine: "€5M – €15M",
    trigger: "High-risk AI without conformity assessment, no human oversight",
    softwareDefence: "AI Conformity Module, Human Oversight UI, Bias Monitor",
    badge: "badge-critical",
    badgeLabel: "Critical",
  },
  {
    regulation: "GDPR — Article 83.4",
    enforcer: "AP",
    maxFine: "€10M or 2% global turnover",
    typicalFine: "€475K – €5M",
    trigger: "Missed 72-hr breach notification to AP",
    softwareDefence: "72-hr Breach Notification Workflow",
    badge: "badge-warning",
    badgeLabel: "High",
  },
  {
    regulation: "ATW (Working Hours Act)",
    enforcer: "Nederlandse Arbeidsinspectie (NLA)",
    maxFine: "€10,000 (record-keeping flat)",
    typicalFine: "€200–€400 per employee/day",
    trigger: "Hours violations, missing time records, repeat offences",
    softwareDefence: "ATW Guard, Time & Attendance Audit Log",
    badge: "badge-warning",
    badgeLabel: "High",
  },
  {
    regulation: "WTTA",
    enforcer: "NLA",
    maxFine: "~€10,000 per worker scheduled",
    typicalFine: "€8,000 – €10,000",
    trigger: "Hiring from uncertified temp agency",
    softwareDefence: "WTTA Agency Register, Scheduling Hard-Block",
    badge: "badge-warning",
    badgeLabel: "High",
  },
  {
    regulation: "CAO Violations",
    enforcer: "FNV/CNV unions + courts",
    maxFine: "Unlimited back pay + damages",
    typicalFine: "€50K – €500K (class action)",
    trigger: "Incorrect premium calculations, rest period violations",
    softwareDefence: "CAO Rule Engine, Premium Calculator",
    badge: "badge-info",
    badgeLabel: "Operational",
  },
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
  return (
    <section id="compliance-cost" className="section-grey" style={{ padding: "100px 0" }}>
      <div className="container">
        {/* Header */}
        <div style={{ maxWidth: "680px", marginBottom: "64px" }}>
          <div className="section-eyebrow">Chapter 06 — Compliance Cost Analysis</div>
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
            The cost of non-compliance
          </h2>
          <p style={{ fontSize: "1.05rem", color: "#6e6e73", lineHeight: 1.7, letterSpacing: "-0.01em" }}>
            Every gap in the platform carries a quantifiable financial risk. The combined maximum exposure across all gaps exceeds €290M — dwarfing the cost of building the required features.
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
            <strong style={{ color: "#1d1d1f" }}>The cost of building the four critical gap features is estimated at 6–12 months of engineering effort.</strong> The cost of not building them is a single GDPR enforcement action that could exceed <strong style={{ color: "#c0392b" }}>€290 million</strong>, or an EU AI Act penalty of up to <strong style={{ color: "#b8690a" }}>€15 million</strong>. The business case for compliance investment is unambiguous.
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
          {[
            { value: "€290M+", label: "Combined Maximum Fine Exposure", sub: "Across all four critical gaps", color: "#ff3b30" },
            { value: "€500K+", label: "Realistic Single-Incident Exposure", sub: "WTTA: 50 workers from uncertified agency", color: "#ff9500" },
            { value: "€5M–€50M", label: "Likely GDPR Enforcement Range", sub: "Based on Dutch AP precedents", color: "#0071e3" },
          ].map((s, i) => (
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
            Maximum Fine by Regulation (€M)
          </h3>
          <p style={{ fontSize: "0.75rem", color: "#aeaeb2", marginBottom: "24px" }}>
            ATW and WTTA fines shown as indicative — actual scale differs per incident; see table below for per-incident figures.
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
                <th>Regulation</th>
                <th>Enforcer</th>
                <th>Maximum Fine</th>
                <th>Typical Fine</th>
                <th>Primary Trigger</th>
                <th>Software Defence</th>
                <th>Severity</th>
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
                  <td style={{ color: "#0071e3", fontSize: "0.775rem" }}>{row.softwareDefence}</td>
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
