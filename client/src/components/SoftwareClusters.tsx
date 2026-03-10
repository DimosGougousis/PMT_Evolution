/* Design: Apple.com — grey section background, white expandable cluster cards */
import { useState } from "react";

const clusters = [
  {
    id: "C1",
    title: "Branch & Shift Management",
    icon: "🏪",
    priority: "Mission Critical",
    priorityBadge: "badge-critical",
    accentColor: "#ff3b30",
    description: "The operational core. Enables branch managers to create, publish, and manage shift schedules while enforcing ATW working-time rules in real time.",
    capabilities: [
      "Drag-and-drop shift builder with ATW constraint engine",
      "Multi-branch view for area managers",
      "Shift publication and employee notification workflow",
      "Last-minute swap and cover request management",
      "Overtime tracking and alert system",
    ],
    standards: ["ISO 9001", "ATW Art. 4-8"],
  },
  {
    id: "C2",
    title: "Compliance & Governance Hub",
    icon: "⚖️",
    priority: "Mission Critical",
    priorityBadge: "badge-critical",
    accentColor: "#ff3b30",
    description: "The regulatory engine of the platform. Houses the CAO Rule Engine, ATW Guard, WTTA certification tracker, GDPR module, and the EU AI Act conformity module.",
    capabilities: [
      "CAO Supermarkt rule engine (premiums, rest periods, age rules)",
      "ATW working-hours guard with real-time violation alerts",
      "WTTA agency certification hard-block",
      "GDPR data controller module with 72-hr breach workflow",
      "EU AI Act conformity module with human oversight audit trail",
    ],
    standards: ["ISO 27001", "ISO 42001", "ATW", "GDPR Art. 33"],
  },
  {
    id: "C3",
    title: "Resource Pool Management",
    icon: "👥",
    priority: "High Priority",
    priorityBadge: "badge-warning",
    accentColor: "#ff9500",
    description: "Manages the full lifecycle of the flex workforce — from uitzendkrachten onboarding through contract phase tracking (A/B/C) to temp-to-perm conversion.",
    capabilities: [
      "Flex pool registry with contract phase tracking (A/B/C)",
      "Agency portal with WTTA certification status display",
      "Temp-to-perm conversion workflow and alerts",
      "Basic contract min-hours guarantee engine",
      "Skills matrix and availability management",
    ],
    standards: ["CAO Uitzendkrachten", "WTTA 2027", "Wet meer zekerheid"],
  },
  {
    id: "C4",
    title: "Demand Forecasting & Labour Optimisation",
    icon: "📈",
    priority: "High Priority",
    priorityBadge: "badge-warning",
    accentColor: "#ff9500",
    description: "AI-powered demand forecasting using historical sales, footfall, and seasonal patterns to generate optimal staffing recommendations — with full EU AI Act compliance.",
    capabilities: [
      "ML-based demand forecasting (sales, footfall, events)",
      "AI schedule recommendations with human oversight UI",
      "Bias monitoring and fairness dashboard",
      "What-if scenario modelling for peak planning",
      "Labour cost optimisation with budget guardrails",
    ],
    standards: ["ISO 42001", "EU AI Act Annex III", "IEEE 7000"],
  },
  {
    id: "C5",
    title: "Employee Self-Service & Engagement",
    icon: "📱",
    priority: "Standard",
    priorityBadge: "badge-info",
    accentColor: "#0071e3",
    description: "Mobile-first employee portal for availability management, shift viewing, swap requests, and AI scheduling explanation — building trust and reducing manager workload.",
    capabilities: [
      "Mobile app (iOS/Android) for shift viewing and availability",
      "Shift swap marketplace with manager approval workflow",
      "AI schedule explanation feature (EU AI Act Art. 13)",
      "Push notifications for schedule changes",
      "Employee feedback and satisfaction tracking",
    ],
    standards: ["EU AI Act Art. 13", "Platform Work Directive"],
  },
  {
    id: "C6",
    title: "Time & Attendance",
    icon: "🕐",
    priority: "Mission Critical",
    priorityBadge: "badge-critical",
    accentColor: "#ff3b30",
    description: "Accurate time recording is the primary defence against ATW record-keeping fines (€10,000 flat). Supports multiple clock-in methods with discrepancy management.",
    capabilities: [
      "Multi-method clock-in (app, terminal, NFC badge)",
      "Real-time discrepancy detection and resolution workflow",
      "Payroll-ready export with CAO pay calculations",
      "Absence and leave management integration",
      "Immutable audit log (7-year retention, GDPR compliant)",
    ],
    standards: ["ATW Art. 4", "ISO 27001", "GDPR Art. 5(e)"],
  },
  {
    id: "C7",
    title: "Analytics, Reporting & Incident Management",
    icon: "📊",
    priority: "Standard",
    priorityBadge: "badge-info",
    accentColor: "#0071e3",
    description: "Board-level and operational dashboards, regulatory compliance reports, pay gap reporting, and the incident response module for data breaches.",
    capabilities: [
      "Labour cost and efficiency KPI dashboards",
      "Regulatory compliance scorecard (ATW, CAO, GDPR)",
      "EU Pay Transparency gender pay gap report",
      "Data breach incident response workflow",
      "Custom report builder for HR and Finance",
    ],
    standards: ["Pay Transparency Directive", "GDPR Art. 33", "ISO 27001"],
  },
];

export default function SoftwareClusters() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="software-clusters" className="section-grey" style={{ padding: "100px 0" }}>
      <div className="container">
        {/* Header */}
        <div style={{ maxWidth: "680px", marginBottom: "64px" }}>
          <div className="section-eyebrow">Chapter 02 — Software Clusters</div>
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
            Seven modular clusters
          </h2>
          <p style={{ fontSize: "1.05rem", color: "#6e6e73", lineHeight: 1.7, letterSpacing: "-0.01em" }}>
            Each cluster owns a specific business domain and can be deployed independently. Click any cluster to expand its capability breakdown and compliance standards.
          </p>
        </div>

        {/* Priority legend */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "40px", alignItems: "center" }}>
          <span className="badge-critical">Mission Critical</span>
          <span style={{ fontSize: "0.78rem", color: "#8e8e93" }}>Failure = immediate regulatory liability</span>
          <span style={{ color: "#e5e5ea" }}>·</span>
          <span className="badge-warning">High Priority</span>
          <span style={{ fontSize: "0.78rem", color: "#8e8e93" }}>Required for Jan 2027 deadlines</span>
          <span style={{ color: "#e5e5ea" }}>·</span>
          <span className="badge-info">Standard</span>
          <span style={{ fontSize: "0.78rem", color: "#8e8e93" }}>Commercial value driver</span>
        </div>

        {/* Cluster cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "16px",
          }}
        >
          {clusters.map((c) => (
            <div
              key={c.id}
              className="apple-card"
              style={{
                padding: "24px",
                cursor: "pointer",
                borderTop: `3px solid ${c.accentColor}`,
              }}
              onClick={() => setActive(active === c.id ? null : c.id)}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ fontSize: "0.7rem", fontWeight: 600, color: "#aeaeb2", letterSpacing: "0.04em" }}>{c.id}</span>
                  <span style={{ fontSize: "1.4rem" }}>{c.icon}</span>
                </div>
                <span className={c.priorityBadge}>{c.priority}</span>
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
                  <div style={{ fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "#aeaeb2", marginBottom: "10px" }}>Capabilities</div>
                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 16px", display: "flex", flexDirection: "column", gap: "6px" }}>
                    {c.capabilities.map((cap, i) => (
                      <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.8rem", color: "#3a3a3c" }}>
                        <span style={{ color: c.accentColor, marginTop: "1px", flexShrink: 0 }}>▸</span>
                        {cap}
                      </li>
                    ))}
                  </ul>
                  <div style={{ fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "#aeaeb2", marginBottom: "8px" }}>Standards</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {c.standards.map((s, i) => (
                      <span
                        key={i}
                        style={{
                          fontSize: "0.7rem",
                          padding: "3px 9px",
                          borderRadius: "6px",
                          background: "#f5f5f7",
                          color: "#6e6e73",
                          border: "1px solid #e5e5ea",
                          fontWeight: 500,
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div style={{ fontSize: "0.72rem", color: "#aeaeb2", marginTop: "10px" }}>
                {active === c.id ? "▲ Collapse" : "▼ Expand details"}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
