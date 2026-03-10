/* Design: Dark Command Centre — 7 software clusters with capability breakdown */
import { useState } from "react";

const clusters = [
  {
    id: "C1",
    title: "Branch & Shift Management",
    icon: "🏪",
    priority: "Mission Critical",
    priorityBadge: "badge-critical",
    color: "oklch(0.60 0.22 25)",
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
    color: "oklch(0.60 0.22 25)",
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
    color: "oklch(0.75 0.18 75)",
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
    color: "oklch(0.75 0.18 75)",
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
    color: "oklch(0.60 0.20 255)",
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
    color: "oklch(0.60 0.22 25)",
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
    color: "oklch(0.60 0.20 255)",
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
    <section id="software-clusters" className="py-24 relative overflow-hidden" style={{ background: "oklch(0.10 0.012 255)" }}>
      <div className="absolute top-0 left-0 section-number" style={{ transform: "translate(-5%, -10%)" }}>02</div>

      <div className="container relative z-10">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-blue-400/50" />
            <span className="text-blue-400/70 text-xs tracking-widest uppercase" style={{ fontFamily: "Space Mono, monospace" }}>Chapter 02</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4" style={{ fontFamily: "Syne, sans-serif" }}>
            Software Clusters
          </h2>
          <p className="text-white/55 text-lg max-w-2xl" style={{ fontFamily: "Manrope, sans-serif" }}>
            Seven independently deployable modules, each owning a specific business domain. Click any cluster to expand its capability breakdown and compliance standards.
          </p>
        </div>

        {/* Priority legend */}
        <div className="flex flex-wrap gap-4 mb-10">
          <div className="flex items-center gap-2"><span className="badge-critical">Mission Critical</span><span className="text-white/40 text-xs" style={{ fontFamily: "Manrope, sans-serif" }}>Failure = immediate regulatory liability</span></div>
          <div className="flex items-center gap-2"><span className="badge-warning">High Priority</span><span className="text-white/40 text-xs" style={{ fontFamily: "Manrope, sans-serif" }}>Required for Jan 2027 deadlines</span></div>
          <div className="flex items-center gap-2"><span className="badge-info">Standard</span><span className="text-white/40 text-xs" style={{ fontFamily: "Manrope, sans-serif" }}>Commercial value driver</span></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {clusters.map((c) => (
            <div
              key={c.id}
              className="glass-card p-5 cursor-pointer transition-all duration-300 hover:-translate-y-0.5"
              style={{
                borderLeft: `3px solid ${c.color}`,
                background: active === c.id ? "oklch(1 0 0 / 8%)" : undefined,
              }}
              onClick={() => setActive(active === c.id ? null : c.id)}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <span className="text-white/30 text-xs font-mono mr-2">{c.id}</span>
                  <span className="text-xl">{c.icon}</span>
                </div>
                <span className={c.priorityBadge}>{c.priority}</span>
              </div>
              <h3 className="font-bold text-white mb-2 text-sm leading-snug" style={{ fontFamily: "Syne, sans-serif" }}>{c.title}</h3>
              <p className="text-white/50 text-xs leading-relaxed mb-3" style={{ fontFamily: "Manrope, sans-serif" }}>{c.description}</p>

              {active === c.id && (
                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="mb-3">
                    <div className="text-xs text-white/40 uppercase tracking-wider mb-2" style={{ fontFamily: "Space Mono, monospace" }}>Capabilities</div>
                    <ul className="space-y-1.5">
                      {c.capabilities.map((cap, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-white/60" style={{ fontFamily: "Manrope, sans-serif" }}>
                          <span style={{ color: c.color, marginTop: "2px" }}>▸</span>
                          {cap}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-xs text-white/40 uppercase tracking-wider mb-2" style={{ fontFamily: "Space Mono, monospace" }}>Standards</div>
                    <div className="flex flex-wrap gap-1.5">
                      {c.standards.map((s, i) => (
                        <span key={i} className="text-xs px-2 py-0.5 rounded" style={{ fontFamily: "Space Mono, monospace", background: "oklch(1 0 0 / 6%)", color: "oklch(0.65 0.005 255)", border: "1px solid oklch(1 0 0 / 10%)" }}>{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              <div className="text-xs text-white/30 mt-2" style={{ fontFamily: "Space Mono, monospace" }}>
                {active === c.id ? "▲ Collapse" : "▼ Expand"}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
