/* Design: Apple.com — grey section, white card table, clean tabs */
import { useState } from "react";

const regulations = [
  {
    level: "EU Directive",
    accentColor: "#ff3b30",
    items: [
      { name: "EU Working Time Directive", status: "In Force", deadline: "Ongoing", impact: "Foundation for ATW — max 48h/week, min rest periods" },
      { name: "GDPR (General Data Protection Regulation)", status: "In Force", deadline: "Ongoing", impact: "All employee scheduling data is personal data. AP actively enforces." },
      { name: "EU AI Act — High-Risk Systems", status: "Incoming", deadline: "Aug 2, 2026", impact: "Scheduling AI classified as high-risk. Conformity assessment mandatory." },
      { name: "Pay Transparency Directive", status: "Incoming", deadline: "Jan 2027 (NL)", impact: "Gender pay gap reporting mandatory. Data model changes required." },
      { name: "Platform Work Directive", status: "Incoming", deadline: "2026–2027", impact: "Algorithmic management transparency obligations." },
    ],
  },
  {
    level: "Dutch National Law",
    accentColor: "#ff9500",
    items: [
      { name: "Arbeidstijdenwet (ATW)", status: "In Force", deadline: "Ongoing", impact: "Max 12h/shift, 60h/week, 11h rest. €200/employee/day fine." },
      { name: "WTTA — Wet toelating uitzendbureau", status: "Incoming", deadline: "Jan 1, 2027", impact: "All temp agencies must be certified. Hirers fined for using uncertified agencies." },
      { name: "Wet meer zekerheid flexwerkers", status: "Incoming", deadline: "Jan 1, 2027", impact: "Zero-hour contracts abolished. New 'basic contract' with min hours required." },
      { name: "Wet bescherming klokkenluiders", status: "In Force", deadline: "Ongoing", impact: "Whistleblower protection — affects HR incident reporting design." },
    ],
  },
  {
    level: "Sector / Company Level",
    accentColor: "#0071e3",
    items: [
      { name: "CAO Supermarkt (2024–2026)", status: "Active", deadline: "Renewal 2026", impact: "Pay scales, shift premiums (Sunday +50%, night +35%), holiday accrual." },
      { name: "CAO Uitzendkrachten (ABU/NBBU)", status: "Active", deadline: "Ongoing", impact: "Phase A/B/C contract progression rules. Automatic conversion triggers." },
      { name: "AH Company CAO", status: "Active", deadline: "Ongoing", impact: "AH-specific supplements above sector CAO minimums." },
      { name: "Works Council (OR) Agreements", status: "Active", deadline: "Ongoing", impact: "Co-determination rights over monitoring systems and AI deployment." },
    ],
  },
];

export default function RegulatorySection() {
  const [activeLevel, setActiveLevel] = useState(0);
  const active = regulations[activeLevel];

  return (
    <section id="regulatory" className="section-grey" style={{ padding: "100px 0" }}>
      <div className="container">
        {/* Header */}
        <div style={{ maxWidth: "680px", marginBottom: "64px" }}>
          <div className="section-eyebrow">Chapter 04 — Regulatory Landscape</div>
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
            A cascading three-level compliance stack
          </h2>
          <p style={{ fontSize: "1.05rem", color: "#6e6e73", lineHeight: 1.7, letterSpacing: "-0.01em" }}>
            EU directives set the floor, Dutch law implements them, and sector agreements add further obligations. Non-compliance at any level creates liability.
          </p>
        </div>

        {/* Level tabs */}
        <div style={{ display: "flex", gap: "8px", marginBottom: "24px", flexWrap: "wrap" }}>
          {regulations.map((r, i) => (
            <button
              key={i}
              onClick={() => setActiveLevel(i)}
              style={{
                padding: "8px 20px",
                borderRadius: "980px",
                fontSize: "0.875rem",
                fontWeight: 500,
                cursor: "pointer",
                transition: "all 0.15s ease",
                background: activeLevel === i ? r.accentColor : "#ffffff",
                color: activeLevel === i ? "#ffffff" : "#6e6e73",
                border: `1px solid ${activeLevel === i ? r.accentColor : "#e5e5ea"}`,
              }}
            >
              {r.level}
            </button>
          ))}
        </div>

        {/* Regulation table */}
        <div className="apple-card" style={{ overflow: "hidden", marginBottom: "56px" }}>
          <table className="apple-table">
            <thead>
              <tr>
                <th>Regulation</th>
                <th>Status</th>
                <th>Key Date</th>
                <th>Software Impact</th>
              </tr>
            </thead>
            <tbody>
              {active.items.map((row, i) => (
                <tr key={i}>
                  <td style={{ fontWeight: 500, color: "#1d1d1f" }}>{row.name}</td>
                  <td>
                    {row.status === "In Force" || row.status === "Active" ? (
                      <span className="badge-covered">{row.status}</span>
                    ) : (
                      <span className="badge-warning">{row.status}</span>
                    )}
                  </td>
                  <td
                    style={{
                      fontFamily: "monospace",
                      fontSize: "0.8rem",
                      color: (row.deadline.includes("2026") || row.deadline.includes("2027")) ? "#b8690a" : "#6e6e73",
                      fontWeight: (row.deadline.includes("2026") || row.deadline.includes("2027")) ? 600 : 400,
                    }}
                  >
                    {row.deadline}
                  </td>
                  <td style={{ color: "#6e6e73", fontSize: "0.825rem" }}>{row.impact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Industry standards */}
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
            Required Industry Standards
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "16px" }}>
            {[
              { std: "ISO/IEC 27001 + 27701", purpose: "GDPR compliance & ISMS", urgency: "Immediate", badge: "badge-critical" },
              { std: "ISO/IEC 42001", purpose: "EU AI Act — AI Management System", urgency: "Aug 2026", badge: "badge-warning" },
              { std: "SOC 2 Type II", purpose: "Enterprise client procurement gate", urgency: "2026", badge: "badge-warning" },
              { std: "NIST CSF 2.0", purpose: "Overarching cybersecurity framework", urgency: "Ongoing", badge: "badge-info" },
            ].map((s, i) => (
              <div key={i} className="apple-card" style={{ padding: "24px" }}>
                <div style={{ fontWeight: 700, fontSize: "0.875rem", color: "#0071e3", marginBottom: "6px", fontFamily: "monospace" }}>{s.std}</div>
                <div style={{ fontSize: "0.825rem", color: "#6e6e73", marginBottom: "14px", lineHeight: 1.5 }}>{s.purpose}</div>
                <span className={s.badge}>{s.urgency}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
