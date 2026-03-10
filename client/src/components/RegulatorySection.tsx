/* Design: Dark Command Centre — regulatory landscape with cascading stack */
import { useState } from "react";

const regulations = [
  {
    level: "EU Directive",
    color: "oklch(0.60 0.22 25)",
    items: [
      { name: "EU Working Time Directive", status: "In Force", deadline: "Ongoing", impact: "Foundation for ATW — max 48h/week, min rest periods" },
      { name: "GDPR (General Data Protection Regulation)", status: "In Force", deadline: "Ongoing", impact: "All employee scheduling data is personal data. AP actively enforces." },
      { name: "EU AI Act — High-Risk Systems", status: "Incoming", deadline: "Aug 2, 2026", impact: "Scheduling AI classified as high-risk. Conformity assessment mandatory." },
      { name: "Pay Transparency Directive", status: "Incoming", deadline: "Jan 2027 (NL)", impact: "Gender pay gap reporting mandatory. Data model changes required." },
      { name: "Platform Work Directive", status: "Incoming", deadline: "2026-2027", impact: "Algorithmic management transparency obligations." },
    ],
  },
  {
    level: "Dutch National Law",
    color: "oklch(0.75 0.18 75)",
    items: [
      { name: "Arbeidstijdenwet (ATW)", status: "In Force", deadline: "Ongoing", impact: "Max 12h/shift, 60h/week, 11h rest. €200/employee/day fine." },
      { name: "WTTA — Wet toelating uitzendbureau", status: "Incoming", deadline: "Jan 1, 2027", impact: "All temp agencies must be certified. Hirers fined for using uncertified agencies." },
      { name: "Wet meer zekerheid flexwerkers", status: "Incoming", deadline: "Jan 1, 2027", impact: "Zero-hour contracts abolished. New 'basic contract' with min hours required." },
      { name: "Wet bescherming klokkenluiders", status: "In Force", deadline: "Ongoing", impact: "Whistleblower protection — affects HR incident reporting design." },
    ],
  },
  {
    level: "Sector / Company Level",
    color: "oklch(0.60 0.20 255)",
    items: [
      { name: "CAO Supermarkt (2024-2026)", status: "Active", deadline: "Renewal 2026", impact: "Pay scales, shift premiums (Sunday +50%, night +35%), holiday accrual." },
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
    <section id="regulatory" className="py-24 relative overflow-hidden" style={{ background: "oklch(0.11 0.013 255)" }}>
      <div className="absolute top-0 left-0 section-number" style={{ transform: "translate(-5%, -10%)" }}>04</div>

      <div className="container relative z-10">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-blue-400/50" />
            <span className="text-blue-400/70 text-xs tracking-widest uppercase" style={{ fontFamily: "Space Mono, monospace" }}>Chapter 04</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4" style={{ fontFamily: "Syne, sans-serif" }}>
            Regulatory Landscape
          </h2>
          <p className="text-white/55 text-lg max-w-2xl" style={{ fontFamily: "Manrope, sans-serif" }}>
            A cascading three-level compliance stack. EU directives set the floor, Dutch law implements them, and sector agreements add further obligations. Non-compliance at any level creates liability.
          </p>
        </div>

        {/* Level selector */}
        <div className="flex flex-wrap gap-3 mb-8">
          {regulations.map((r, i) => (
            <button
              key={i}
              onClick={() => setActiveLevel(i)}
              className="px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200"
              style={{
                fontFamily: "Manrope, sans-serif",
                background: activeLevel === i ? r.color : "oklch(1 0 0 / 5%)",
                color: activeLevel === i ? "white" : "oklch(0.65 0.005 255)",
                border: `1px solid ${activeLevel === i ? r.color : "oklch(1 0 0 / 10%)"}`,
              }}
            >
              {r.level}
            </button>
          ))}
        </div>

        {/* Regulation table */}
        <div className="overflow-x-auto rounded-xl" style={{ border: "1px solid oklch(1 0 0 / 10%)" }}>
          <table className="w-full text-sm">
            <thead>
              <tr style={{ background: "oklch(0.14 0.015 255)", borderBottom: "1px solid oklch(1 0 0 / 10%)" }}>
                <th className="text-left px-5 py-3 text-white/50 font-semibold text-xs uppercase tracking-wider" style={{ fontFamily: "Space Mono, monospace" }}>Regulation</th>
                <th className="text-left px-5 py-3 text-white/50 font-semibold text-xs uppercase tracking-wider" style={{ fontFamily: "Space Mono, monospace" }}>Status</th>
                <th className="text-left px-5 py-3 text-white/50 font-semibold text-xs uppercase tracking-wider" style={{ fontFamily: "Space Mono, monospace" }}>Key Date</th>
                <th className="text-left px-5 py-3 text-white/50 font-semibold text-xs uppercase tracking-wider" style={{ fontFamily: "Space Mono, monospace" }}>Software Impact</th>
              </tr>
            </thead>
            <tbody>
              {active.items.map((row, i) => (
                <tr
                  key={i}
                  style={{
                    background: i % 2 === 0 ? "oklch(0.12 0.013 255)" : "oklch(0.13 0.014 255)",
                    borderBottom: "1px solid oklch(1 0 0 / 6%)",
                  }}
                >
                  <td className="px-5 py-4 font-medium" style={{ fontFamily: "Manrope, sans-serif", color: "oklch(0.88 0.005 255)" }}>{row.name}</td>
                  <td className="px-5 py-4">
                    {row.status === "In Force" || row.status === "Active" ? (
                      <span className="badge-covered">{row.status}</span>
                    ) : (
                      <span className="badge-warning">{row.status}</span>
                    )}
                  </td>
                  <td className="px-5 py-4 text-white/50" style={{ fontFamily: "Space Mono, monospace", fontSize: "0.75rem" }}>
                    {row.deadline.includes("2026") || row.deadline.includes("2027") ? (
                      <span style={{ color: "oklch(0.75 0.18 75)" }}>{row.deadline}</span>
                    ) : row.deadline}
                  </td>
                  <td className="px-5 py-4 text-white/55 text-xs leading-relaxed" style={{ fontFamily: "Manrope, sans-serif" }}>{row.impact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Industry standards */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-white mb-6" style={{ fontFamily: "Syne, sans-serif" }}>Required Industry Standards</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { std: "ISO/IEC 27001 + 27701", purpose: "GDPR compliance & ISMS", urgency: "Immediate" },
              { std: "ISO/IEC 42001", purpose: "EU AI Act — AI Management System", urgency: "Aug 2026" },
              { std: "SOC 2 Type II", purpose: "Enterprise client procurement gate", urgency: "2026" },
              { std: "NIST CSF 2.0", purpose: "Overarching cybersecurity framework", urgency: "Ongoing" },
            ].map((s, i) => (
              <div key={i} className="glass-card p-5">
                <div className="font-bold text-blue-400 text-sm mb-1" style={{ fontFamily: "Space Mono, monospace" }}>{s.std}</div>
                <div className="text-white/60 text-xs mb-3" style={{ fontFamily: "Manrope, sans-serif" }}>{s.purpose}</div>
                <span className={s.urgency === "Immediate" ? "badge-critical" : s.urgency === "Aug 2026" ? "badge-warning" : "badge-info"}>
                  {s.urgency}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
