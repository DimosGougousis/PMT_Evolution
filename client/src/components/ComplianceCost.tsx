/* Design: Dark Command Centre — compliance cost analysis with Recharts bar chart */
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";

const fineData = [
  { name: "GDPR\n(Max)", value: 290, color: "oklch(0.60 0.22 25)", label: "€290M", type: "critical" },
  { name: "EU AI Act\n(Max)", value: 15, color: "oklch(0.75 0.18 75)", label: "€15M", type: "warning" },
  { name: "GDPR\n(Typical)", value: 10, color: "oklch(0.60 0.22 25)", label: "€10M", type: "critical" },
  { name: "WTTA\n(Per Worker)", value: 0.01, color: "oklch(0.75 0.18 75)", label: "€10K", type: "warning" },
  { name: "ATW\n(Per Day)", value: 0.0002, color: "oklch(0.60 0.20 255)", label: "€200", type: "info" },
];

const costRows = [
  {
    regulation: "GDPR / AVG",
    enforcer: "Autoriteit Persoonsgegevens (AP)",
    maxFine: "€20M or 4% global turnover",
    typicalFine: "€750K – €10M",
    trigger: "Unlawful processing, breach without notification, missing legal basis",
    softwareDefence: "GDPR Module, Breach Notification Workflow, Audit Log",
    severity: "critical",
  },
  {
    regulation: "EU AI Act",
    enforcer: "AP (anticipated)",
    maxFine: "€15M or 3% global turnover",
    typicalFine: "€5M – €15M",
    trigger: "High-risk AI without conformity assessment, no human oversight",
    softwareDefence: "AI Conformity Module, Human Oversight UI, Bias Monitor",
    severity: "critical",
  },
  {
    regulation: "ATW (Working Hours)",
    enforcer: "Nederlandse Arbeidsinspectie (NLA)",
    maxFine: "€10,000 (record-keeping)",
    typicalFine: "€200–€400 per employee/day",
    trigger: "Hours violations, missing time records, repeat offences",
    softwareDefence: "ATW Guard, Time & Attendance Audit Log",
    severity: "warning",
  },
  {
    regulation: "WTTA",
    enforcer: "NLA",
    maxFine: "~€10,000 per worker",
    typicalFine: "€8,000 – €10,000",
    trigger: "Hiring from uncertified temp agency",
    softwareDefence: "WTTA Agency Register, Scheduling Hard-Block",
    severity: "critical",
  },
  {
    regulation: "CAO Violations",
    enforcer: "FNV/CNV unions + courts",
    maxFine: "Unlimited back pay + damages",
    typicalFine: "€50K – €500K (class action)",
    trigger: "Incorrect premium calculations, rest period violations",
    softwareDefence: "CAO Rule Engine, Premium Calculator",
    severity: "warning",
  },
  {
    regulation: "Pay Transparency Directive",
    enforcer: "AP / Labour Inspectorate",
    maxFine: "TBD (NL implementation pending)",
    typicalFine: "Reputational + regulatory",
    trigger: "Failure to report gender pay gap",
    softwareDefence: "Pay Gap Reporting Module",
    severity: "info",
  },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-card p-3" style={{ minWidth: "140px" }}>
        <div className="text-xs text-white/50 mb-1" style={{ fontFamily: "Space Mono, monospace" }}>{label}</div>
        <div className="text-sm font-bold text-white" style={{ fontFamily: "Syne, sans-serif" }}>
          {payload[0].payload.label}
        </div>
      </div>
    );
  }
  return null;
};

export default function ComplianceCost() {
  return (
    <section id="compliance-cost" className="py-24 relative overflow-hidden" style={{ background: "oklch(0.11 0.013 255)" }}>
      <div className="absolute top-0 left-0 section-number" style={{ transform: "translate(-5%, -10%)" }}>06</div>

      <div className="container relative z-10">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-blue-400/50" />
            <span className="text-blue-400/70 text-xs tracking-widest uppercase" style={{ fontFamily: "Space Mono, monospace" }}>Chapter 06</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4" style={{ fontFamily: "Syne, sans-serif" }}>
            Cost of Non-Compliance
          </h2>
          <p className="text-white/55 text-lg max-w-2xl" style={{ fontFamily: "Manrope, sans-serif" }}>
            Every gap in the platform carries a quantifiable financial risk. This analysis translates regulatory obligations into business case language for the board.
          </p>
        </div>

        {/* Key insight */}
        <div className="glass-card p-6 mb-12" style={{ borderLeft: "4px solid oklch(0.60 0.22 25)" }}>
          <p className="text-white/80 text-lg leading-relaxed" style={{ fontFamily: "Manrope, sans-serif" }}>
            <strong className="text-white">The cost of building the four critical gap features is estimated at 6–12 months of engineering effort.</strong> The cost of not building them is a single GDPR enforcement action that could exceed <strong className="text-red-400">€290 million</strong>, or an EU AI Act penalty of up to <strong className="text-amber-400">€15 million</strong>. The business case for compliance investment is unambiguous.
          </p>
        </div>

        {/* Chart */}
        <div className="glass-card p-6 mb-12">
          <h3 className="text-base font-bold text-white mb-1" style={{ fontFamily: "Syne, sans-serif" }}>Maximum Fine Exposure by Regulation (€M)</h3>
          <p className="text-white/40 text-xs mb-6" style={{ fontFamily: "Manrope, sans-serif" }}>Note: ATW and WTTA fines shown as indicative — actual scale differs; see table below for per-incident figures.</p>
          <div style={{ height: "260px" }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={fineData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="oklch(1 0 0 / 8%)" vertical={false} />
                <XAxis
                  dataKey="name"
                  tick={{ fill: "oklch(0.55 0.005 255)", fontSize: 11, fontFamily: "Space Mono, monospace" }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fill: "oklch(0.55 0.005 255)", fontSize: 11, fontFamily: "Space Mono, monospace" }}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(v) => `€${v}M`}
                />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: "oklch(1 0 0 / 5%)" }} />
                <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                  {fineData.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Full table */}
        <div className="overflow-x-auto rounded-xl" style={{ border: "1px solid oklch(1 0 0 / 10%)" }}>
          <table className="w-full text-sm">
            <thead>
              <tr style={{ background: "oklch(0.14 0.015 255)", borderBottom: "1px solid oklch(1 0 0 / 10%)" }}>
                {["Regulation", "Enforcer", "Max Fine", "Typical Fine", "Primary Trigger", "Software Defence"].map((h) => (
                  <th key={h} className="text-left px-4 py-3 text-white/50 font-semibold text-xs uppercase tracking-wider" style={{ fontFamily: "Space Mono, monospace" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {costRows.map((row, i) => (
                <tr
                  key={i}
                  style={{
                    background: i % 2 === 0 ? "oklch(0.12 0.013 255)" : "oklch(0.13 0.014 255)",
                    borderBottom: "1px solid oklch(1 0 0 / 6%)",
                  }}
                >
                  <td className="px-4 py-3 font-semibold text-white/85" style={{ fontFamily: "Manrope, sans-serif" }}>
                    <div className="flex items-center gap-2">
                      <span className={row.severity === "critical" ? "badge-critical" : row.severity === "warning" ? "badge-warning" : "badge-info"} style={{ fontSize: "0.55rem" }}>
                        {row.severity === "critical" ? "●" : row.severity === "warning" ? "●" : "●"}
                      </span>
                      {row.regulation}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-white/45 text-xs" style={{ fontFamily: "Manrope, sans-serif" }}>{row.enforcer}</td>
                  <td className="px-4 py-3 font-semibold text-xs" style={{ fontFamily: "Space Mono, monospace", color: row.severity === "critical" ? "oklch(0.75 0.18 25)" : row.severity === "warning" ? "oklch(0.82 0.16 75)" : "oklch(0.65 0.005 255)" }}>{row.maxFine}</td>
                  <td className="px-4 py-3 text-white/50 text-xs" style={{ fontFamily: "Space Mono, monospace" }}>{row.typicalFine}</td>
                  <td className="px-4 py-3 text-white/50 text-xs leading-relaxed" style={{ fontFamily: "Manrope, sans-serif" }}>{row.trigger}</td>
                  <td className="px-4 py-3 text-blue-400/70 text-xs" style={{ fontFamily: "Manrope, sans-serif" }}>{row.softwareDefence}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
