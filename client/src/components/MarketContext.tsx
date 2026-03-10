/* Design: Apple.com — clean white section, light grey cards, dark text */
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
  return (
    <section id="market-context" className="section-white" style={{ padding: "100px 0" }}>
      <div className="container">
        {/* Header */}
        <div style={{ maxWidth: "680px", marginBottom: "64px" }}>
          <div className="section-eyebrow">Chapter 01 — Market Context</div>
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
            Six forces reshaping the market
          </h2>
          <p style={{ fontSize: "1.05rem", color: "#6e6e73", lineHeight: 1.7, letterSpacing: "-0.01em" }}>
            The Dutch supermarket sector operates at the intersection of high labour intensity, strict regulation, and rapid technological change. Understanding these drivers is the foundation of the product strategy.
          </p>
        </div>

        {/* Key facts bar */}
        <div
          className="apple-card"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            marginBottom: "56px",
            overflow: "hidden",
            borderRadius: "18px",
          }}
        >
          {[
            { value: "~100,000", label: "AH employees in NL" },
            { value: "€10,000+", label: "ATW fine per incident" },
            { value: "4%", label: "Max GDPR fine (global turnover)" },
            { value: "Jan 2027", label: "Next regulatory cliff-edge" },
          ].map((fact, i) => (
            <div
              key={i}
              style={{
                padding: "2rem 1.5rem",
                textAlign: "center",
                borderRight: i < 3 ? "1px solid #e5e5ea" : "none",
              }}
            >
              <div
                style={{
                  fontSize: "1.75rem",
                  fontWeight: 700,
                  letterSpacing: "-0.03em",
                  color: "#0071e3",
                  marginBottom: "0.4rem",
                }}
              >
                {fact.value}
              </div>
              <div style={{ fontSize: "0.78rem", color: "#8e8e93", fontWeight: 500 }}>{fact.label}</div>
            </div>
          ))}
        </div>

        {/* Driver cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "16px",
          }}
        >
          {drivers.map((d, i) => (
            <div key={i} className="apple-card" style={{ padding: "28px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  marginBottom: "14px",
                }}
              >
                <span style={{ fontSize: "1.8rem" }}>{d.icon}</span>
                <span className={badgeMap[d.badge]}>{badgeLabelMap[d.badge]}</span>
              </div>
              <h3
                style={{
                  fontWeight: 600,
                  fontSize: "1rem",
                  color: "#1d1d1f",
                  marginBottom: "8px",
                  letterSpacing: "-0.01em",
                }}
              >
                {d.title}
              </h3>
              <p style={{ fontSize: "0.875rem", color: "#6e6e73", lineHeight: 1.65 }}>{d.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
