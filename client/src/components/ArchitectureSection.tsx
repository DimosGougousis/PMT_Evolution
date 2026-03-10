/* Design: Dark Command Centre — three-layer architecture with visual breakdown */
import { useState } from "react";

const layers = [
  {
    id: "business",
    label: "Business Architecture",
    subtitle: "What the business must do",
    color: "oklch(0.65 0.18 145)",
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
    color: "oklch(0.60 0.20 255)",
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
    color: "oklch(0.60 0.22 25)",
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
    <section
      id="architecture"
      className="py-24 relative overflow-hidden"
      style={{
        backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/112091274/JmCAtv6PPZTyefvaPPYBRx/arch_bg-RZYYV5DVsA297JXdG54vjx.webp)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0" style={{ background: "oklch(0.09 0.014 255 / 93%)" }} />
      <div className="absolute top-0 right-0 section-number" style={{ transform: "translate(5%, -10%)" }}>03</div>

      <div className="container relative z-10">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-blue-400/50" />
            <span className="text-blue-400/70 text-xs tracking-widest uppercase" style={{ fontFamily: "Space Mono, monospace" }}>Chapter 03</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4" style={{ fontFamily: "Syne, sans-serif" }}>
            Architecture Overview
          </h2>
          <p className="text-white/55 text-lg max-w-2xl" style={{ fontFamily: "Manrope, sans-serif" }}>
            Three distinct but interconnected architectures. Understanding how they align — and where they diverge — is the foundation of the gap analysis.
          </p>
        </div>

        {/* Layer tabs */}
        <div className="flex flex-wrap gap-3 mb-8">
          {layers.map((l) => (
            <button
              key={l.id}
              onClick={() => setActiveLayer(l.id)}
              className="px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200"
              style={{
                fontFamily: "Manrope, sans-serif",
                background: activeLayer === l.id ? `${l.color}` : "oklch(1 0 0 / 5%)",
                color: activeLayer === l.id ? "white" : "oklch(0.65 0.005 255)",
                border: `1px solid ${activeLayer === l.id ? l.color : "oklch(1 0 0 / 10%)"}`,
              }}
            >
              {l.icon} {l.label}
            </button>
          ))}
        </div>

        {/* Active layer detail */}
        <div className="glass-card p-8 mb-12" style={{ borderTop: `3px solid ${active.color}` }}>
          <div className="mb-2">
            <span className="text-xs text-white/40 uppercase tracking-wider" style={{ fontFamily: "Space Mono, monospace" }}>{active.subtitle}</span>
          </div>
          <p className="text-white/70 mb-8 leading-relaxed max-w-3xl" style={{ fontFamily: "Manrope, sans-serif" }}>{active.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {active.elements.map((el, i) => (
              <div key={i}>
                <div className="text-xs uppercase tracking-wider mb-3 font-semibold" style={{ fontFamily: "Space Mono, monospace", color: active.color }}>{el.name}</div>
                <ul className="space-y-2">
                  {el.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-white/60" style={{ fontFamily: "Manrope, sans-serif" }}>
                      <span style={{ color: active.color }}>▸</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Mission-critical systems table */}
        <div>
          <h3 className="text-xl font-bold text-white mb-6" style={{ fontFamily: "Syne, sans-serif" }}>
            Mission-Critical Systems Register
          </h3>
          <div className="overflow-x-auto rounded-xl" style={{ border: "1px solid oklch(1 0 0 / 10%)" }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: "oklch(0.14 0.015 255)", borderBottom: "1px solid oklch(1 0 0 / 10%)" }}>
                  <th className="text-left px-5 py-3 text-white/50 font-semibold text-xs uppercase tracking-wider" style={{ fontFamily: "Space Mono, monospace" }}>System</th>
                  <th className="text-left px-5 py-3 text-white/50 font-semibold text-xs uppercase tracking-wider" style={{ fontFamily: "Space Mono, monospace" }}>RTO</th>
                  <th className="text-left px-5 py-3 text-white/50 font-semibold text-xs uppercase tracking-wider" style={{ fontFamily: "Space Mono, monospace" }}>Failure Consequence</th>
                  <th className="text-left px-5 py-3 text-white/50 font-semibold text-xs uppercase tracking-wider" style={{ fontFamily: "Space Mono, monospace" }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {missionCritical.map((row, i) => (
                  <tr
                    key={i}
                    style={{
                      background: i % 2 === 0 ? "oklch(0.12 0.013 255)" : "oklch(0.13 0.014 255)",
                      borderBottom: "1px solid oklch(1 0 0 / 6%)",
                    }}
                  >
                    <td className="px-5 py-3 text-white/80 font-medium" style={{ fontFamily: "Manrope, sans-serif" }}>{row.name}</td>
                    <td className="px-5 py-3 text-white/50" style={{ fontFamily: "Space Mono, monospace", fontSize: "0.75rem" }}>{row.rto}</td>
                    <td className="px-5 py-3 text-white/55" style={{ fontFamily: "Manrope, sans-serif" }}>{row.consequence}</td>
                    <td className="px-5 py-3">
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
