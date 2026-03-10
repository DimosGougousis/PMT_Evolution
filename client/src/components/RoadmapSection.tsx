/* Design: Dark Command Centre — 18-month roadmap with phase breakdown */
import { useState } from "react";

const phases = [
  {
    id: "P0",
    label: "Foundation",
    period: "Mar – Apr 2026",
    sprints: "Sprints 1–2",
    color: "oklch(0.60 0.20 255)",
    status: "Now",
    statusBadge: "badge-critical",
    description: "Establish the shared infrastructure that all subsequent compliance work depends on. This phase is the prerequisite for everything else.",
    deliverables: [
      { name: "Encrypted Audit Log Infrastructure", team: "Engineering", priority: "critical" },
      { name: "RBAC Hardening & Security Audit", team: "Engineering / Security", priority: "critical" },
      { name: "GDPR Breach Detection Alerting", team: "Engineering", priority: "critical" },
      { name: "72-Hour Breach Notification Workflow", team: "Engineering / Legal", priority: "critical" },
    ],
    milestone: "GDPR Breach workflow live",
  },
  {
    id: "P1",
    label: "EU AI Act Compliance",
    period: "Apr – Aug 2026",
    sprints: "Sprints 3–9",
    color: "oklch(0.60 0.22 25)",
    status: "⏰ Aug 2, 2026",
    statusBadge: "badge-warning",
    description: "The most complex phase. Three parallel workstreams (Engineering, Data Science, Legal) must converge before the August 2 deadline. The Works Council consultation is the critical path risk.",
    deliverables: [
      { name: "AI Conformity Assessment Documentation", team: "Legal / Product", priority: "critical" },
      { name: "Human Oversight UI (Manager Dashboard)", team: "Engineering / UX", priority: "critical" },
      { name: "Bias Monitoring Module", team: "Data Science", priority: "critical" },
      { name: "Works Council AI Consultation", team: "Product / HR", priority: "critical" },
      { name: "AI System Registration (EU Database)", team: "Legal", priority: "critical" },
    ],
    milestone: "EU AI Act Deadline: Aug 2, 2026",
  },
  {
    id: "P2",
    label: "WTTA & Basic Contract",
    period: "Jul – Dec 2026",
    sprints: "Sprints 9–16",
    color: "oklch(0.75 0.18 75)",
    status: "⏰ Jan 1, 2027",
    statusBadge: "badge-warning",
    description: "Two parallel streams sharing the same January 1, 2027 deadline. The Scheduling Hard-Block Engine is the most critical single feature in the entire programme — it is the last line of defence against WTTA fines.",
    deliverables: [
      { name: "Agency Data Model & WTTA Register", team: "Engineering", priority: "critical" },
      { name: "WTTA Certification API Integration", team: "Engineering", priority: "critical" },
      { name: "Scheduling Hard-Block Engine", team: "Engineering", priority: "critical" },
      { name: "Basic Contract Type & Min Hours Engine", team: "Engineering", priority: "critical" },
      { name: "Payroll Export Connector Update", team: "Engineering", priority: "warning" },
      { name: "Employee ESS Contract View", team: "Engineering / UX", priority: "info" },
    ],
    milestone: "WTTA & Basic Contract Deadline: Jan 1, 2027",
  },
  {
    id: "P3",
    label: "Pay Transparency & ISO 27001",
    period: "Sep – Dec 2026",
    sprints: "Sprints 13–18",
    color: "oklch(0.65 0.18 145)",
    status: "⏰ Jan 1, 2027",
    statusBadge: "badge-covered",
    description: "The final phase runs concurrently with Phase 2. Pay Transparency reporting is built in the Analytics cluster. ISO 27001 certification is the culmination of the security programme that began in Sprint 3.",
    deliverables: [
      { name: "Pay Gap Data Model Design", team: "Data Science", priority: "warning" },
      { name: "Disaggregated Pay Reporting Module", team: "Engineering", priority: "warning" },
      { name: "ISO 27001 ISMS Documentation", team: "Security / Legal", priority: "warning" },
      { name: "External ISO 27001 Certification Audit", team: "Third Party", priority: "warning" },
    ],
    milestone: "Pay Transparency Deadline + ISO 27001 Certified",
  },
];

const risks = [
  {
    risk: "Works Council consultation delay",
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
  const [activePhase, setActivePhase] = useState("P0");
  const active = phases.find((p) => p.id === activePhase)!;

  return (
    <section id="roadmap" className="py-24 relative overflow-hidden" style={{ background: "oklch(0.10 0.012 255)" }}>
      <div className="absolute top-0 right-0 section-number" style={{ transform: "translate(5%, -10%)" }}>07</div>

      <div className="container relative z-10">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-blue-400/50" />
            <span className="text-blue-400/70 text-xs tracking-widest uppercase" style={{ fontFamily: "Space Mono, monospace" }}>Chapter 07</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4" style={{ fontFamily: "Syne, sans-serif" }}>
            18-Month Roadmap
          </h2>
          <p className="text-white/55 text-lg max-w-2xl" style={{ fontFamily: "Manrope, sans-serif" }}>
            Four sequenced phases governed by a single principle: prioritise by nearest regulatory deadline. Click each phase to see the full sprint breakdown.
          </p>
        </div>

        {/* Timeline bar */}
        <div className="relative mb-10">
          <div className="flex items-stretch gap-0 rounded-xl overflow-hidden" style={{ border: "1px solid oklch(1 0 0 / 10%)" }}>
            {phases.map((p) => (
              <button
                key={p.id}
                onClick={() => setActivePhase(p.id)}
                className="flex-1 p-4 text-left transition-all duration-200"
                style={{
                  background: activePhase === p.id ? `${p.color}20` : "oklch(0.13 0.014 255)",
                  borderRight: "1px solid oklch(1 0 0 / 8%)",
                  borderBottom: activePhase === p.id ? `3px solid ${p.color}` : "3px solid transparent",
                }}
              >
                <div className="text-xs font-mono mb-1" style={{ color: p.color, fontFamily: "Space Mono, monospace" }}>{p.id}</div>
                <div className="font-bold text-white text-xs mb-1 leading-snug" style={{ fontFamily: "Syne, sans-serif" }}>{p.label}</div>
                <div className="text-white/40 text-xs" style={{ fontFamily: "Manrope, sans-serif" }}>{p.period}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Active phase detail */}
        <div className="glass-card p-8 mb-12" style={{ borderTop: `3px solid ${active.color}` }}>
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl font-extrabold" style={{ fontFamily: "Syne, sans-serif", color: active.color }}>{active.id}</span>
                <h3 className="text-xl font-bold text-white" style={{ fontFamily: "Syne, sans-serif" }}>{active.label}</h3>
              </div>
              <div className="flex flex-wrap gap-4 text-xs text-white/40" style={{ fontFamily: "Space Mono, monospace" }}>
                <span>📅 {active.period}</span>
                <span>🔄 {active.sprints}</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs text-white/40 mb-1" style={{ fontFamily: "Space Mono, monospace" }}>Deadline</div>
              <span className={active.statusBadge} style={{ fontSize: "0.7rem" }}>{active.status}</span>
            </div>
          </div>

          <p className="text-white/60 mb-8 leading-relaxed" style={{ fontFamily: "Manrope, sans-serif" }}>{active.description}</p>

          <div>
            <div className="text-xs uppercase tracking-wider text-white/40 mb-4" style={{ fontFamily: "Space Mono, monospace" }}>Deliverables</div>
            <div className="space-y-3">
              {active.deliverables.map((d, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg" style={{ background: "oklch(1 0 0 / 4%)", border: "1px solid oklch(1 0 0 / 8%)" }}>
                  <div className="flex items-center gap-3">
                    <span className={d.priority === "critical" ? "badge-critical" : d.priority === "warning" ? "badge-warning" : "badge-info"} style={{ fontSize: "0.55rem" }}>
                      {d.priority}
                    </span>
                    <span className="text-white/80 text-sm font-medium" style={{ fontFamily: "Manrope, sans-serif" }}>{d.name}</span>
                  </div>
                  <span className="text-white/35 text-xs shrink-0 ml-4" style={{ fontFamily: "Space Mono, monospace" }}>{d.team}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 p-4 rounded-lg" style={{ background: `${active.color}15`, border: `1px solid ${active.color}30` }}>
            <div className="text-xs uppercase tracking-wider mb-1" style={{ fontFamily: "Space Mono, monospace", color: active.color }}>Phase Milestone</div>
            <div className="font-semibold text-white text-sm" style={{ fontFamily: "Manrope, sans-serif" }}>⚡ {active.milestone}</div>
          </div>
        </div>

        {/* Risk register */}
        <h3 className="text-xl font-bold text-white mb-6" style={{ fontFamily: "Syne, sans-serif" }}>
          Programme Risk Register
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {risks.map((r, i) => (
            <div key={i} className="glass-card p-5">
              <div className="flex items-start justify-between mb-3">
                <h4 className="font-bold text-white text-sm pr-4" style={{ fontFamily: "Syne, sans-serif" }}>{r.risk}</h4>
                <div className="flex gap-2 shrink-0">
                  <span className={r.probability === "High" ? "badge-critical" : r.probability === "Medium" ? "badge-warning" : "badge-covered"} style={{ fontSize: "0.55rem" }}>P: {r.probability}</span>
                  <span className={r.impact === "Critical" || r.impact === "High" ? "badge-critical" : "badge-warning"} style={{ fontSize: "0.55rem" }}>I: {r.impact}</span>
                </div>
              </div>
              <p className="text-blue-400/70 text-xs leading-relaxed" style={{ fontFamily: "Manrope, sans-serif" }}>
                <strong className="text-white/60">Mitigation:</strong> {r.mitigation}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
