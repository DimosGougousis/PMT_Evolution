/* Design: Apple.com — white section, clean gap cards with left accent borders */

const criticalGaps = [
  {
    id: "GAP-1",
    title: "WTTA Agency Certification Hard-Block",
    regulation: "WTTA",
    deadline: "Jan 1, 2027",
    fineExposure: "~€10,000 per uncertified worker scheduled",
    description: "No mechanism exists to verify temp agency certification status. Managers can freely schedule workers from uncertified agencies, creating direct financial liability for the client.",
    buildRequired: "Agency Register + WTTA API Integration + Scheduling Hard-Block Engine",
  },
  {
    id: "GAP-2",
    title: "Basic Contract (Min Hours) Enforcement",
    regulation: "Wet meer zekerheid flexwerkers",
    deadline: "Jan 1, 2027",
    fineExposure: "Back pay liability for all affected flex workers",
    description: "Zero-hour contracts are abolished from Jan 2027. The platform's contract engine does not support the new 'basic contract' type with guaranteed minimum hours.",
    buildRequired: "Contract Type Extension + Min Hours Guarantee Engine + Payroll Connector Update",
  },
  {
    id: "GAP-3",
    title: "EU AI Act Conformity Module",
    regulation: "EU AI Act — Annex III",
    deadline: "Aug 2, 2026",
    fineExposure: "Up to €15M or 3% of global annual turnover",
    description: "The scheduling AI is classified as high-risk under the EU AI Act. No conformity assessment, human oversight UI, or bias monitoring module currently exists.",
    buildRequired: "AI Audit Log + Human Oversight UI + Bias Monitor + AI System Registration",
  },
  {
    id: "GAP-4",
    title: "GDPR 72-Hour Breach Notification Workflow",
    regulation: "GDPR Article 33",
    deadline: "Already in force (overdue)",
    fineExposure: "Up to €10M or 2% of global annual turnover",
    description: "The platform lacks an automated workflow to guide HR through the mandatory 72-hour data breach notification to the Dutch AP. This obligation is already in force.",
    buildRequired: "Breach Detection Alerting + 72-Hour Notification Workflow + AP Template Integration",
  },
];

const partialGaps = [
  {
    id: "PARTIAL-1",
    title: "AI Scheduling Transparency",
    issue: "AI recommendations exist but lack the human oversight audit trail required by the EU AI Act.",
    fix: "Add manager approval logging to every AI-generated schedule recommendation.",
  },
  {
    id: "PARTIAL-2",
    title: "Flex Worker Contract Phase Tracking",
    issue: "Flex pool managed but automatic A/B/C phase transitions not tracked, risking non-compliant contract extensions.",
    fix: "Automate phase transition alerts and contract upgrade notifications.",
  },
  {
    id: "PARTIAL-3",
    title: "Pay Gap Data Collection",
    issue: "Pay data exists but is not disaggregated by gender and role as required by the Pay Transparency Directive.",
    fix: "Extend data model and build disaggregated pay reporting module.",
  },
];

const covered = [
  "ATW Working Hours Guard (real-time constraint engine)",
  "CAO Supermarkt Rule Engine (premiums, rest periods, age rules)",
  "Time & Attendance with immutable audit log",
  "GDPR Data Controller Module (RBAC, data subject rights)",
  "Authentication & Role-Based Access Control",
  "Shift scheduling core (drag-and-drop, multi-branch)",
  "Employee Self-Service mobile app",
];

export default function GapAnalysis() {
  return (
    <section id="gap-analysis" className="section-white" style={{ padding: "100px 0" }}>
      <div className="container">
        {/* Header */}
        <div style={{ maxWidth: "680px", marginBottom: "64px" }}>
          <div className="section-eyebrow">Chapter 05 — Gap Analysis</div>
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
            Where the platform falls short
          </h2>
          <p style={{ fontSize: "1.05rem", color: "#6e6e73", lineHeight: 1.7, letterSpacing: "-0.01em" }}>
            Four critical gaps represent time-bound, existential risks to the platform's legality. Each has a quantifiable fine exposure and a defined build requirement.
          </p>
        </div>

        {/* Summary scorecard */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1px",
            background: "#e5e5ea",
            borderRadius: "18px",
            overflow: "hidden",
            border: "1px solid #e5e5ea",
            marginBottom: "56px",
          }}
        >
          {[
            { value: "4", label: "Critical Gaps", sub: "Immediate build required", color: "#ff3b30" },
            { value: "3", label: "Partial Gaps", sub: "Feature exists, incomplete", color: "#ff9500" },
            { value: "7", label: "Areas Covered", sub: "Fully compliant today", color: "#34c759" },
          ].map((s, i) => (
            <div key={i} style={{ background: "#ffffff", padding: "2rem", textAlign: "center" }}>
              <div style={{ fontSize: "2.5rem", fontWeight: 700, letterSpacing: "-0.04em", color: s.color, lineHeight: 1, marginBottom: "6px" }}>{s.value}</div>
              <div style={{ fontSize: "0.875rem", fontWeight: 600, color: "#1d1d1f", marginBottom: "4px" }}>{s.label}</div>
              <div style={{ fontSize: "0.75rem", color: "#8e8e93" }}>{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Critical gaps */}
        <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#1d1d1f", marginBottom: "20px", letterSpacing: "-0.02em" }}>
          Critical Gaps — Immediate Action Required
        </h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(480px, 1fr))", gap: "16px", marginBottom: "56px" }}>
          {criticalGaps.map((gap) => (
            <div
              key={gap.id}
              className="apple-card"
              style={{ padding: "28px", borderLeft: "4px solid #ff3b30" }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                <span style={{ fontSize: "0.7rem", fontWeight: 600, color: "#aeaeb2", letterSpacing: "0.04em" }}>{gap.id}</span>
                <span className="badge-critical">Critical</span>
              </div>
              <h4 style={{ fontWeight: 600, fontSize: "1rem", color: "#1d1d1f", marginBottom: "8px", letterSpacing: "-0.01em" }}>{gap.title}</h4>
              <div style={{ display: "flex", gap: "16px", marginBottom: "12px", flexWrap: "wrap" }}>
                <span style={{ fontSize: "0.75rem", color: "#6e6e73", fontFamily: "monospace" }}>📋 {gap.regulation}</span>
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
                <div style={{ fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "#aeaeb2", marginBottom: "4px" }}>Fine Exposure</div>
                <div style={{ fontSize: "0.875rem", fontWeight: 600, color: "#c0392b" }}>{gap.fineExposure}</div>
              </div>
              <div
                style={{
                  background: "#f5f5f7",
                  borderRadius: "10px",
                  padding: "12px 14px",
                }}
              >
                <div style={{ fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "#aeaeb2", marginBottom: "4px" }}>Build Required</div>
                <div style={{ fontSize: "0.8rem", color: "#3a3a3c" }}>{gap.buildRequired}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Partial gaps */}
        <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#1d1d1f", marginBottom: "20px", letterSpacing: "-0.02em" }}>
          Partial Gaps — Feature Exists, Incomplete
        </h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "16px", marginBottom: "56px" }}>
          {partialGaps.map((gap) => (
            <div key={gap.id} className="apple-card" style={{ padding: "24px", borderLeft: "3px solid #ff9500" }}>
              <span style={{ fontSize: "0.7rem", fontWeight: 600, color: "#aeaeb2", letterSpacing: "0.04em", display: "block", marginBottom: "8px" }}>{gap.id}</span>
              <h4 style={{ fontWeight: 600, fontSize: "0.95rem", color: "#1d1d1f", marginBottom: "8px", letterSpacing: "-0.01em" }}>{gap.title}</h4>
              <p style={{ fontSize: "0.825rem", color: "#6e6e73", lineHeight: 1.6, marginBottom: "12px" }}>{gap.issue}</p>
              <p style={{ fontSize: "0.8rem", color: "#0071e3" }}><strong style={{ color: "#3a3a3c" }}>Fix:</strong> {gap.fix}</p>
            </div>
          ))}
        </div>

        {/* Covered */}
        <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#1d1d1f", marginBottom: "20px", letterSpacing: "-0.02em" }}>
          Covered — Compliant Today
        </h3>
        <div className="apple-card" style={{ padding: "28px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "12px" }}>
            {covered.map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.875rem", color: "#3a3a3c" }}>
                <span style={{ color: "#34c759", fontSize: "1rem", flexShrink: 0 }}>✓</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
