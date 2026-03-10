/* Design: Dark Command Centre — gap analysis with critical/partial/covered breakdown */

const criticalGaps = [
  {
    id: "GAP-1",
    title: "WTTA Agency Certification Hard-Block",
    regulation: "WTTA",
    deadline: "Jan 1, 2027",
    fineExposure: "~€10,000 per uncertified worker scheduled",
    description: "No mechanism exists to verify temp agency certification status. Managers can freely schedule workers from uncertified agencies, creating direct financial liability for the client.",
    buildRequired: "Agency Register + WTTA API Integration + Scheduling Hard-Block Engine",
    severity: "critical",
  },
  {
    id: "GAP-2",
    title: "Basic Contract (Min Hours) Enforcement",
    regulation: "Wet meer zekerheid flexwerkers",
    deadline: "Jan 1, 2027",
    fineExposure: "Back pay liability for all affected flex workers",
    description: "Zero-hour contracts are abolished from Jan 2027. The platform's contract engine does not support the new 'basic contract' type with guaranteed minimum hours.",
    buildRequired: "Contract Type Extension + Min Hours Guarantee Engine + Payroll Connector Update",
    severity: "critical",
  },
  {
    id: "GAP-3",
    title: "EU AI Act Conformity Module",
    regulation: "EU AI Act — Annex III",
    deadline: "Aug 2, 2026",
    fineExposure: "Up to €15M or 3% of global annual turnover",
    description: "The scheduling AI is classified as high-risk under the EU AI Act. No conformity assessment, human oversight UI, or bias monitoring module currently exists.",
    buildRequired: "AI Audit Log + Human Oversight UI + Bias Monitor + AI System Registration",
    severity: "critical",
  },
  {
    id: "GAP-4",
    title: "GDPR 72-Hour Breach Notification Workflow",
    regulation: "GDPR Article 33",
    deadline: "Already in force (overdue)",
    fineExposure: "Up to €10M or 2% of global annual turnover",
    description: "The platform lacks an automated workflow to guide HR through the mandatory 72-hour data breach notification to the Dutch AP. This obligation is already in force.",
    buildRequired: "Breach Detection Alerting + 72-Hour Notification Workflow + AP Template Integration",
    severity: "critical",
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
    <section id="gap-analysis" className="py-24 relative overflow-hidden" style={{ background: "oklch(0.10 0.012 255)" }}>
      <div className="absolute top-0 right-0 section-number" style={{ transform: "translate(5%, -10%)" }}>05</div>

      <div className="container relative z-10">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-blue-400/50" />
            <span className="text-blue-400/70 text-xs tracking-widest uppercase" style={{ fontFamily: "Space Mono, monospace" }}>Chapter 05</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4" style={{ fontFamily: "Syne, sans-serif" }}>
            Gap Analysis
          </h2>
          <p className="text-white/55 text-lg max-w-2xl" style={{ fontFamily: "Manrope, sans-serif" }}>
            Where the software architecture meets the regulatory obligations — and where it critically fails to. Four critical gaps represent time-bound, existential risks to the platform's legality.
          </p>
        </div>

        {/* Summary scorecard */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          <div className="glass-card p-6 text-center" style={{ borderTop: "3px solid oklch(0.60 0.22 25)" }}>
            <div className="text-4xl font-extrabold mb-2" style={{ fontFamily: "Syne, sans-serif", color: "oklch(0.70 0.20 25)" }}>4</div>
            <div className="text-xs text-white/50 uppercase tracking-wider" style={{ fontFamily: "Space Mono, monospace" }}>Critical Gaps</div>
            <div className="text-xs text-white/35 mt-1" style={{ fontFamily: "Manrope, sans-serif" }}>Immediate build required</div>
          </div>
          <div className="glass-card p-6 text-center" style={{ borderTop: "3px solid oklch(0.75 0.18 75)" }}>
            <div className="text-4xl font-extrabold mb-2" style={{ fontFamily: "Syne, sans-serif", color: "oklch(0.82 0.16 75)" }}>3</div>
            <div className="text-xs text-white/50 uppercase tracking-wider" style={{ fontFamily: "Space Mono, monospace" }}>Partial Gaps</div>
            <div className="text-xs text-white/35 mt-1" style={{ fontFamily: "Manrope, sans-serif" }}>Feature exists, incomplete</div>
          </div>
          <div className="glass-card p-6 text-center" style={{ borderTop: "3px solid oklch(0.65 0.18 145)" }}>
            <div className="text-4xl font-extrabold mb-2" style={{ fontFamily: "Syne, sans-serif", color: "oklch(0.72 0.16 145)" }}>7</div>
            <div className="text-xs text-white/50 uppercase tracking-wider" style={{ fontFamily: "Space Mono, monospace" }}>Areas Covered</div>
            <div className="text-xs text-white/35 mt-1" style={{ fontFamily: "Manrope, sans-serif" }}>Fully compliant today</div>
          </div>
        </div>

        {/* Critical gaps */}
        <h3 className="text-xl font-bold text-white mb-6" style={{ fontFamily: "Syne, sans-serif" }}>
          🔴 Critical Gaps — Immediate Action Required
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-12">
          {criticalGaps.map((gap) => (
            <div
              key={gap.id}
              className="glass-card p-6"
              style={{ borderLeft: "4px solid oklch(0.60 0.22 25)" }}
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-xs font-mono text-white/30">{gap.id}</span>
                <span className="badge-critical">Critical</span>
              </div>
              <h4 className="font-bold text-white mb-1 text-base" style={{ fontFamily: "Syne, sans-serif" }}>{gap.title}</h4>
              <div className="flex flex-wrap gap-3 mb-3">
                <span className="text-xs text-white/40" style={{ fontFamily: "Space Mono, monospace" }}>📋 {gap.regulation}</span>
                <span className="text-xs font-semibold" style={{ fontFamily: "Space Mono, monospace", color: "oklch(0.82 0.16 75)" }}>⏰ {gap.deadline}</span>
              </div>
              <p className="text-white/55 text-sm leading-relaxed mb-4" style={{ fontFamily: "Manrope, sans-serif" }}>{gap.description}</p>
              <div className="p-3 rounded-lg" style={{ background: "oklch(0.60 0.22 25 / 10%)", border: "1px solid oklch(0.60 0.22 25 / 25%)" }}>
                <div className="text-xs text-white/40 uppercase tracking-wider mb-1" style={{ fontFamily: "Space Mono, monospace" }}>Fine Exposure</div>
                <div className="text-sm font-semibold" style={{ fontFamily: "Manrope, sans-serif", color: "oklch(0.80 0.18 25)" }}>{gap.fineExposure}</div>
              </div>
              <div className="mt-3 p-3 rounded-lg" style={{ background: "oklch(1 0 0 / 4%)", border: "1px solid oklch(1 0 0 / 8%)" }}>
                <div className="text-xs text-white/40 uppercase tracking-wider mb-1" style={{ fontFamily: "Space Mono, monospace" }}>Build Required</div>
                <div className="text-xs text-white/60" style={{ fontFamily: "Manrope, sans-serif" }}>{gap.buildRequired}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Partial gaps */}
        <h3 className="text-xl font-bold text-white mb-6" style={{ fontFamily: "Syne, sans-serif" }}>
          🟡 Partial Gaps — Feature Exists, Incomplete
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {partialGaps.map((gap) => (
            <div key={gap.id} className="glass-card p-5" style={{ borderLeft: "3px solid oklch(0.75 0.18 75)" }}>
              <span className="text-xs font-mono text-white/30 block mb-2">{gap.id}</span>
              <h4 className="font-bold text-white mb-2 text-sm" style={{ fontFamily: "Syne, sans-serif" }}>{gap.title}</h4>
              <p className="text-white/50 text-xs mb-3 leading-relaxed" style={{ fontFamily: "Manrope, sans-serif" }}>{gap.issue}</p>
              <div className="text-xs text-blue-400/70" style={{ fontFamily: "Manrope, sans-serif" }}>Fix: {gap.fix}</div>
            </div>
          ))}
        </div>

        {/* Covered areas */}
        <h3 className="text-xl font-bold text-white mb-6" style={{ fontFamily: "Syne, sans-serif" }}>
          🟢 Covered — Compliant Today
        </h3>
        <div className="glass-card p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {covered.map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-white/60" style={{ fontFamily: "Manrope, sans-serif" }}>
                <span style={{ color: "oklch(0.65 0.18 145)" }}>✓</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
