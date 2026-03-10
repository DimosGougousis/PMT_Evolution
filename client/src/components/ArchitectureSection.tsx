/* Design: Apple.com — white section, clean tabs, light table */
import { useState } from "react";

const layers = [
  {
    id: "business",
    label: "Business Architecture",
    subtitle: "What the business must do",
    accentColor: "#34c759",
    icon: "🏢",
    description: "Defines the strategic objectives, core processes, and stakeholder map. Driven by cost optimisation, regulatory compliance, and employee experience. Mission-critical processes include workforce planning, scheduling operations, and compliance monitoring.",
    elements: [
      { name: "Strategic Objectives", items: ["Labour Cost Optimisation", "Regulatory Compliance", "Employee Experience", "Operational Resilience"] },
      { name: "Core Processes", items: ["Workforce Planning", "Scheduling Operations", "Time & Attendance", "Compliance Monitoring"] },
      { name: "Key Stakeholders", items: ["Branch Managers", "HR & Legal", "Works Council (OR)", "Unions (FNV/CNV)", "Employees"] },
    ],
  },
  {
    id: "software",
    label: "Software Architecture",
    subtitle: "How the system enables the business",
    accentColor: "#0071e3",
    icon: "🖥️",
    description: "A microservices-oriented architecture with seven domain clusters, a shared compliance engine, polyglot persistence, and a mobile-first presentation layer. The Compliance Hub is isolated for higher resilience and scrutiny.",
    elements: [
      { name: "Presentation Layer", items: ["Manager Dashboard", "Employee Mobile App", "HR Admin Console", "Analytics Portal"] },
      { name: "Core Services", items: ["CAO Rule Engine", "ATW Guard", "AI Scheduling Engine", "WTTA Certification Tracker"] },
      { name: "Data Layer", items: ["PostgreSQL (transactional)", "InfluxDB (time-series)", "Encrypted Audit Store", "GDPR Data Vault"] },
    ],
  },
  {
    id: "regulatory",
    label: "Regulatory Architecture",
    subtitle: "The rules that cannot be broken",
    accentColor: "#ff3b30",
    icon: "⚖️",
    description: "A cascading compliance stack from EU directives down to sector-level agreements. A failure at any level creates a breach. Four new laws are entering force by January 2027, requiring immediate architectural response.",
    elements: [
      { name: "EU Level", items: ["Working Time Directive", "GDPR", "EU AI Act (Aug 2026)", "Pay Transparency Directive"] },
      { name: "Dutch National Law", items: ["Arbeidstijdenwet (ATW)", "WTTA (Jan 2027)", "Wet meer zekerheid (Jan 2027)", "Wet toelating uitzendbureau"] },
      { name: "Sector Level", items: ["CAO Supermarkt", "CAO Uitzendkrachten", "AH Company CAO", "Works Council Agreements"] },
    ],
  },
];

const missionCritical = [
  { name: "ATW Working Hours Guard", rto: "< 1 hour", consequence: "NLA fines accrue immediately", status: "covered" },
  { name: "CAO Rule Engine", rto: "< 1 hour", consequence: "Every shift = potential back pay liability", status: "covered" },
  { name: "Time & Attendance Engine", rto: "< 2 hours", consequence: "€10,000 flat fine for record failure", status: "covered" },
  { name: "GDPR Data Controller Module", rto: "< 4 hours", consequence: "Unlawful data processing continues", status: "covered" },
  { name: "Auth & RBAC", rto: "< 30 min", consequence: "Unauthorised access = GDPR breach", status: "covered" },
  { name: "WTTA Hard-Block Engine", rto: "< 1 hour", consequence: "€10K per uncertified worker scheduled", status: "gap" },
  { name: "Basic Contract Engine", rto: "< 1 hour", consequence: "Back pay for all affected flex workers", status: "gap" },
  { name: "EU AI Act Conformity Module", rto: "< 2 hours", consequence: "Up to €15M fine, platform delisted", status: "gap" },
  { name: "GDPR Breach Notification Workflow", rto: "< 4 hours", consequence: "Missed 72-hr AP notification deadline", status: "gap" },
];

export default function ArchitectureSection() {
  const [activeLayer, setActiveLayer] = useState<string>("business");
  const active = layers.find((l) => l.id === activeLayer)!;

  return (
    <section id="architecture" className="section-white" style={{ padding: "100px 0" }}>
      <div className="container">
        {/* Header */}
        <div style={{ maxWidth: "680px", marginBottom: "64px" }}>
          <div className="section-eyebrow">Chapter 03 — Architecture Overview</div>
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
            Three interconnected architectures
          </h2>
          <p style={{ fontSize: "1.05rem", color: "#6e6e73", lineHeight: 1.7, letterSpacing: "-0.01em" }}>
            Understanding how Business, Software, and Regulatory architectures align — and where they diverge — is the foundation of the gap analysis.
          </p>
        </div>

        {/* Layer tabs */}
        <div
          style={{
            display: "flex",
            gap: "8px",
            marginBottom: "24px",
            flexWrap: "wrap",
          }}
        >
          {layers.map((l) => (
            <button
              key={l.id}
              onClick={() => setActiveLayer(l.id)}
              style={{
                padding: "8px 20px",
                borderRadius: "980px",
                fontSize: "0.875rem",
                fontWeight: 500,
                cursor: "pointer",
                transition: "all 0.15s ease",
                background: activeLayer === l.id ? l.accentColor : "#f5f5f7",
                color: activeLayer === l.id ? "#ffffff" : "#6e6e73",
                border: "none",
              }}
            >
              {l.icon} {l.label}
            </button>
          ))}
        </div>

        {/* Active layer detail */}
        <div
          className="apple-card"
          style={{
            padding: "40px",
            marginBottom: "56px",
            borderTop: `3px solid ${active.accentColor}`,
          }}
        >
          <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "#aeaeb2", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "8px" }}>
            {active.subtitle}
          </div>
          <p style={{ fontSize: "1rem", color: "#3a3a3c", lineHeight: 1.7, maxWidth: "700px", marginBottom: "36px" }}>{active.description}</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "32px" }}>
            {active.elements.map((el, i) => (
              <div key={i}>
                <div
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: active.accentColor,
                    marginBottom: "12px",
                  }}
                >
                  {el.name}
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                  {el.items.map((item, j) => (
                    <li key={j} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.875rem", color: "#3a3a3c" }}>
                      <span style={{ color: active.accentColor, fontSize: "0.6rem" }}>▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Mission-critical systems table */}
        <div>
          <h3
            style={{
              fontSize: "1.4rem",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "#1d1d1f",
              marginBottom: "20px",
            }}
          >
            Mission-Critical Systems Register
          </h3>
          <div className="apple-card" style={{ overflow: "hidden" }}>
            <table className="apple-table">
              <thead>
                <tr>
                  <th>System</th>
                  <th>Recovery Time Objective</th>
                  <th>Failure Consequence</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {missionCritical.map((row, i) => (
                  <tr key={i}>
                    <td style={{ fontWeight: 500, color: "#1d1d1f" }}>{row.name}</td>
                    <td style={{ color: "#6e6e73", fontSize: "0.8rem", fontFamily: "monospace" }}>{row.rto}</td>
                    <td style={{ color: "#6e6e73" }}>{row.consequence}</td>
                    <td>
                      {row.status === "covered" ? (
                        <span className="badge-covered">Covered</span>
                      ) : (
                        <span className="badge-critical">Gap</span>
                      )}
                    </td>
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
