/* Design: Apple.com — clean white section, light grey cards, dark text */
import { useLanguage } from "@/contexts/LanguageContext";

const icons = ["⚖️", "👥", "🤖", "📊"];

export default function MarketContext() {
  const { t } = useLanguage();
  const cards: { title: string; body: string }[] = t("market.cards");
  const gapItems: { law: string; date: string; impact: string; badge: string; badgeLabel: string }[] = t("market.gaps.items");

  return (
    <section id="market-context" className="section-white" style={{ padding: "100px 0" }}>
      <div className="container">
        {/* Header */}
        <div style={{ maxWidth: "680px", marginBottom: "64px" }}>
          <div className="section-eyebrow">{t("market.eyebrow")}</div>
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
            {t("market.title")}
          </h2>
          <p style={{ fontSize: "1.05rem", color: "#6e6e73", lineHeight: 1.7, letterSpacing: "-0.01em" }}>
            {t("market.subtitle")}
          </p>
        </div>

        {/* Driver cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "16px",
            marginBottom: "64px",
          }}
        >
          {cards.map((d, i) => (
            <div key={i} className="apple-card" style={{ padding: "28px" }}>
              <span style={{ fontSize: "1.8rem", display: "block", marginBottom: "14px" }}>{icons[i]}</span>
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

        {/* Gap callout */}
        <div className="apple-card" style={{ padding: "40px", borderLeft: "4px solid #ff3b30" }}>
          <h3
            style={{
              fontSize: "1.3rem",
              fontWeight: 700,
              color: "#1d1d1f",
              letterSpacing: "-0.02em",
              marginBottom: "0.5rem",
            }}
          >
            {t("market.gaps.title")}
          </h3>
          <p style={{ fontSize: "0.95rem", color: "#6e6e73", lineHeight: 1.65, marginBottom: "1.5rem" }}>
            {t("market.gaps.subtitle")}
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {gapItems.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "16px",
                  padding: "16px",
                  background: "#f5f5f7",
                  borderRadius: "12px",
                }}
              >
                <div style={{ flexShrink: 0 }}>
                  <span className={item.badge}>{item.badgeLabel}</span>
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: "0.9rem", color: "#1d1d1f", marginBottom: "2px" }}>
                    {item.law} — {item.date}
                  </div>
                  <div style={{ fontSize: "0.83rem", color: "#6e6e73", lineHeight: 1.5 }}>{item.impact}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
