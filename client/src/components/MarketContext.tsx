/* Design: Dark Command Centre — market context with key insight cards */
import { useReveal } from "@/hooks/useReveal";

const drivers = [
  {
    icon: "⚖️",
    title: "Regulatory Complexity",
    body: "Dutch supermarket operators navigate a multi-layered compliance stack: EU Working Time Directive, ATW, CAO Supermarkt, GDPR, and four incoming laws by January 2027. Manual processes cannot keep pace.",
    badge: "critical",
  },
  {
    icon: "👥",
    title: "Flex Workforce Dependency",
    body: "AH and comparable chains rely on a large flex pool — uitzendkrachten, oproepkrachten, and min-max contract workers — to absorb demand volatility. Managing this pool without software leads to systematic compliance failures.",
    badge: "warning",
  },
  {
    icon: "🤖",
    title: "AI-Driven Scheduling",
    body: "AI-powered demand forecasting and auto-rostering is now table stakes. However, the EU AI Act classifies workforce scheduling AI as high-risk, creating new obligations that most vendors have not yet addressed.",
    badge: "warning",
  },
  {
    icon: "📊",
    title: "Labour Cost Pressure",
    body: "Labour is the largest controllable cost for a supermarket operator. A 1% improvement in scheduling efficiency on a €500M payroll delivers €5M in savings. The business case for optimisation software is unambiguous.",
    badge: "covered",
  },
  {
    icon: "🔒",
    title: "Data Privacy at Scale",
    body: "Scheduling data is personal data. Biometric time-tracking, health-related absence data, and behavioural patterns are all in scope for GDPR. The Dutch AP is one of Europe's most active enforcement authorities.",
    badge: "critical",
  },
  {
    icon: "🏢",
    title: "Works Council Rights",
    body: "The Dutch Works Council (OR) has formal co-determination rights over any system that monitors or evaluates employee performance. Software deployment without OR consultation is legally void.",
    badge: "warning",
  },
];

const badgeMap: Record<string, string> = {
  critical: "badge-critical",
  warning: "badge-warning",
  covered: "badge-covered",
};
const badgeLabelMap: Record<string, string> = {
  critical: "Critical",
  warning: "Monitor",
  covered: "Opportunity",
};

export default function MarketContext() {
  const { ref } = useReveal();

  return (
    <section id="market-context" className="py-24 relative overflow-hidden" style={{ background: "oklch(0.11 0.013 255)" }}>
      {/* Section number watermark */}
      <div className="absolute top-0 right-0 section-number select-none pointer-events-none" style={{ transform: "translate(5%, -10%)" }}>01</div>

      <div className="container relative z-10">
        <div ref={ref} className="reveal mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-blue-400/50" />
            <span className="text-blue-400/70 text-xs tracking-widest uppercase" style={{ fontFamily: "Space Mono, monospace" }}>Chapter 01</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4" style={{ fontFamily: "Syne, sans-serif" }}>
            Market Context
          </h2>
          <p className="text-white/55 text-lg max-w-2xl" style={{ fontFamily: "Manrope, sans-serif" }}>
            The Dutch supermarket sector operates at the intersection of high labour intensity, strict regulation, and rapid technological change. Six structural forces are reshaping the workforce management software market.
          </p>
        </div>

        {/* Key market facts bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14 p-6 rounded-xl" style={{ background: "oklch(0.14 0.015 255)", border: "1px solid oklch(1 0 0 / 8%)" }}>
          {[
            { value: "~100,000", label: "AH employees in NL" },
            { value: "€10,000+", label: "ATW fine per incident" },
            { value: "4%", label: "Max GDPR fine (global turnover)" },
            { value: "Jan 2027", label: "Next regulatory cliff-edge" },
          ].map((fact, i) => (
            <div key={i} className="text-center">
              <div className="text-xl md:text-2xl font-bold text-blue-400 mb-1" style={{ fontFamily: "Syne, sans-serif" }}>{fact.value}</div>
              <div className="text-xs text-white/45" style={{ fontFamily: "Manrope, sans-serif" }}>{fact.label}</div>
            </div>
          ))}
        </div>

        {/* Driver cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {drivers.map((d, i) => (
            <div
              key={i}
              className="glass-card p-6 hover:border-white/20 transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-2xl">{d.icon}</span>
                <span className={badgeMap[d.badge]}>{badgeLabelMap[d.badge]}</span>
              </div>
              <h3 className="font-bold text-white mb-2 text-base" style={{ fontFamily: "Syne, sans-serif" }}>{d.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed" style={{ fontFamily: "Manrope, sans-serif" }}>{d.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
