/* Design: Apple.com — white section, clean timeline with phase cards */
import { useState } from "react";

const phases = [
  {
    id: "P1",
    label: "Phase 1",
    title: "Foundation & GDPR",
    period: "Apr – Jul 2026",
    sprints: "Sprints 1–10",
    deadline: "Ongoing (overdue)",
    accentColor: "#ff3b30",
    statusLabel: "Start Now",
    description: "Lay the shared compliance infrastructure and close the one gap that is already in force: the GDPR 72-hour breach notification obligation.",
    deliverables: [
      { name: "Encrypted Audit Log Infrastructure", team: "Engineering", priority: "critical" },
      { name: "RBAC Hardening (principle of least privilege)", team: "Engineering / Security", priority: "critical" },
      { name: "GDPR Breach Detection Alerting", team: "Engineering", priority: "critical" },
      { name: "72-Hour AP Notification Workflow", team: "Engineering / Legal", priority: "critical" },
      { name: "Data Subject Rights Portal", team: "Engineering / UX", priority: "warning" },
    ],
    standards: ["ISO 27001 ISMS initiation", "GDPR Art. 33 & 34"],
    teams: ["Security Engineering", "Legal/DPO", "Backend"],
  },
  {
    id: "P2",
    label: "Phase 2",
    title: "EU AI Act Conformity",
    period: "Aug – Dec 2026",
    sprints: "Sprints 11–20",
    deadline: "Dec 31, 2026",
    accentColor: "#ff9500",
    statusLabel: "Hard Deadline",
    description: "Build the EU AI Act conformity module before the August 2 deadline. This is the highest-priority engineering workstream in the programme.",
    deliverables: [
      { name: "AI System Registration (EU Art. 51 database)", team: "Legal", priority: "critical" },
      { name: "Human Oversight UI (manager approval required)", team: "Engineering / UX", priority: "critical" },
      { name: "AI Decision Audit Trail (immutable log)", team: "Engineering", priority: "critical" },
      { name: "Bias Monitoring Dashboard", team: "Data Science", priority: "critical" },
      { name: "Works Council (OR) Consultation", team: "Product / HR", priority: "critical" },
      { name: "AI Transparency Disclosure (employee-facing)", team: "Engineering / UX", priority: "warning" },
    ],
    standards: ["ISO 42001", "EU AI Act Annex III", "IEEE 7000"],
    teams: ["AI/ML Engineering", "Frontend", "Legal", "Works Council"],
    criticalPath: "Works Council consultation must begin Sprint 5 (informally) to avoid blocking Sprint 13.",
  },
  {
    id: "P3",
    label: "Phase 3",
    title: "WTTA & Basic Contract",
    period: "Jan – Jun 2027",
    sprints: "Sprints 21–32",
    deadline: "Jun 30, 2027",
    accentColor: "#ff9500",
    statusLabel: "Hard Deadline",
    description: "Build the two January 2027 compliance features in parallel: WTTA agency certification hard-block and the new basic contract engine.",
    deliverables: [
      { name: "Agency Register (certified/uncertified status)", team: "Engineering", priority: "critical" },
      { name: "WTTA API Integration (NLA registry)", team: "Engineering", priority: "critical" },
      { name: "Scheduling Hard-Block Engine", team: "Engineering", priority: "critical" },
      { name: "Basic Contract Type (min hours guarantee)", team: "Engineering", priority: "critical" },
      { name: "Payroll Connector Update", team: "Engineering", priority: "warning" },
      { name: "Zero-Hour Contract Migration Tool", team: "Engineering / HR", priority: "warning" },
    ],
    standards: ["WTTA 2027", "Wet meer zekerheid flexwerkers"],
    teams: ["Backend", "HR Systems", "Payroll Integration", "Legal"],
    criticalPath: "NLA API availability uncertain — design CSV fallback from Sprint 20.",
  },
  {
    id: "P4",
    label: "Phase 4",
    title: "Pay Transparency & ISO 27001",
    period: "Jul – Dec 2027",
    sprints: "Sprints 33–48",
    deadline: "Dec 2027 (NL implementation)",
    accentColor: "#0071e3",
    statusLabel: "Planned",
    description: "Complete the Pay Transparency reporting module and achieve ISO 27001 certification — the enterprise procurement gate for major clients.",
    deliverables: [
      { name: "Gender Pay Gap Data Model", team: "Data Engineering", priority: "warning" },
      { name: "Pay Transparency Report Builder", team: "Engineering", priority: "warning" },
      { name: "ISO 27001 External Certification Audit", team: "Security / External Auditor", priority: "warning" },
      { name: "SOC 2 Type II Readiness Assessment", team: "Security", priority: "info" },
    ],
    standards: ["Pay Transparency Directive", "ISO 27001", "SOC 2 Type II"],
    teams: ["Data Engineering", "HR", "Security", "External Auditor"],
  },
];

const risks = [
  {
    risk: "Works Council consultation delayed",
    probability: "Medium",
    impact: "High",
    mitigation: "Start informal OR engagement in Sprint 3, before formal consultation begins in Sprint 7.",
  },
  {
    risk: "NLA WTTA API not available by Q3 2026",
    probability: "Medium",
    impact: "High",
    mitigation: "Design Agency Register to support manual CSV upload as fallback so Hard-Block still functions.",
  },
  {
    risk: "Engineering capacity split by commercial features",
    probability: "High",
    impact: "Critical",
    mitigation: "Formally ring-fence a dedicated compliance squad. PO must escalate any capacity conflicts immediately.",
  },
  {
    risk: "ISO 27001 Stage 2 audit failure",
    probability: "Low",
    impact: "Medium",
    mitigation: "Engage certification body for pre-assessment in Sprint 15 to identify gaps before the formal audit.",
  },
];

export default function RoadmapSection() {
  const [activePhase, setActivePhase] = useState("P1");
  const active = phases.find((p) => p.id === activePhase)!;

  return (
    <section id="roadmap" className="section-white" style={{ padding: "100px 0 120px" }}>
      <div className="container">
        {/* Header */}
        <div style={{ maxWidth: "680px", marginBottom: "64px" }}>
          <div className="section-eyebrow">Chapter 07 — 18-Month Roadmap</div>
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
            Four phases to full compliance
          </h2>
          <p style={{ fontSize: "1.05rem", color: "#6e6e73", lineHeight: 1.7, letterSpacing: "-0.01em" }}>
            The sequence is governed by three rules: nearest hard deadline first, foundation before superstructure, and the one overdue obligation (GDPR breach notification) starts immediately.
          </p>
        </div>

        {/* Timeline selector */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "4px",
            marginBottom: "32px",
          }}
        >
          {phases.map((p) => (
            <button
              key={p.id}
              onClick={() => setActivePhase(p.id)}
              style={{
                padding: "16px 20px",
                borderRadius: "14px",
                textAlign: "left",
                cursor: "pointer",
                background: activePhase === p.id ? p.accentColor : "#f5f5f7",
                border: "none",
                transition: "all 0.2s ease",
                borderTop: `3px solid ${activePhase === p.id ? "transparent" : p.accentColor}`,
              }}
            >
              <div style={{ fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: activePhase === p.id ? "rgba(255,255,255,0.7)" : "#aeaeb2", marginBottom: "4px" }}>
                {p.sprints}
              </div>
              <div style={{ fontWeight: 700, fontSize: "0.9rem", color: activePhase === p.id ? "#ffffff" : "#1d1d1f", marginBottom: "2px", letterSpacing: "-0.01em" }}>
                {p.title}
              </div>
              <div style={{ fontSize: "0.75rem", color: activePhase === p.id ? "rgba(255,255,255,0.75)" : "#8e8e93", marginBottom: "10px" }}>
                {p.period}
              </div>
              <span
                style={{
                  fontSize: "0.65rem",
                  fontWeight: 600,
                  padding: "2px 8px",
                  borderRadius: "100px",
                  background: activePhase === p.id ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.06)",
                  color: activePhase === p.id ? "#ffffff" : "#6e6e73",
                }}
              >
                {p.statusLabel}
              </span>
            </button>
          ))}
        </div>

        {/* Active phase detail */}
        <div
          className="apple-card"
          style={{ padding: "40px", marginBottom: "56px", borderTop: `3px solid ${active.accentColor}` }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "48px", alignItems: "start" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <span style={{ fontSize: "1.4rem", fontWeight: 800, color: active.accentColor, letterSpacing: "-0.04em" }}>{active.label}</span>
                <span style={{ fontSize: "1.1rem", fontWeight: 700, color: "#1d1d1f", letterSpacing: "-0.02em" }}>{active.title}</span>
              </div>
              <p style={{ fontSize: "0.95rem", color: "#6e6e73", lineHeight: 1.7, marginBottom: "28px" }}>{active.description}</p>

              <div style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "#aeaeb2", marginBottom: "12px" }}>Deliverables</div>
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
                  <div style={{ fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "#b8690a", marginBottom: "4px" }}>Critical Path Risk</div>
                  <div style={{ fontSize: "0.825rem", color: "#3a3a3c" }}>{active.criticalPath}</div>
                </div>
              )}
            </div>

            <div>
              <div style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "#aeaeb2", marginBottom: "8px" }}>Deadline</div>
              <div style={{ fontWeight: 700, fontSize: "1rem", color: active.accentColor, marginBottom: "24px", fontFamily: "monospace" }}>{active.deadline}</div>

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
                {active.teams.map((t, i) => (
                  <span key={i} style={{ fontSize: "0.72rem", padding: "4px 10px", borderRadius: "6px", background: `${active.accentColor}10`, color: active.accentColor, border: `1px solid ${active.accentColor}25`, fontWeight: 600 }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Risk register */}
        <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#1d1d1f", marginBottom: "20px", letterSpacing: "-0.02em" }}>
          Programme Risk Register
        </h3>
        <div className="apple-card" style={{ overflow: "hidden" }}>
          <table className="apple-table">
            <thead>
              <tr>
                <th>Risk</th>
                <th>Probability</th>
                <th>Impact</th>
                <th>Mitigation</th>
              </tr>
            </thead>
            <tbody>
              {risks.map((r, i) => (
                <tr key={i}>
                  <td style={{ fontWeight: 500, color: "#1d1d1f" }}>{r.risk}</td>
                  <td>
                    <span className={r.probability === "High" ? "badge-critical" : r.probability === "Medium" ? "badge-warning" : "badge-covered"}>
                      {r.probability}
                    </span>
                  </td>
                  <td>
                    <span className={r.impact === "Critical" || r.impact === "High" ? "badge-critical" : "badge-warning"}>
                      {r.impact}
                    </span>
                  </td>
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
