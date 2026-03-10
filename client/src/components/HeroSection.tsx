/* Design: Apple.com — large centred headline, light background, generous whitespace */
import { useEffect, useState } from "react";

const stats = [
  { value: "7", label: "Software Clusters" },
  { value: "4", label: "Critical Compliance Gaps" },
  { value: "€290M", label: "Max Fine Exposure" },
  { value: "Jan 2027", label: "Next Regulatory Cliff" },
];

export default function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: `url(https://d2xsxph8kpxj0f.cloudfront.net/112091274/JmCAtv6PPZTyefvaPPYBRx/apple_hero_bg-jc7NuqnZgX4oJ9MU6DXiM6.webp) center/cover no-repeat`,
        paddingTop: "52px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle white overlay for text legibility */}
      <div style={{ position: "absolute", inset: 0, background: "rgba(255,255,255,0.55)" }} />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "900px",
          margin: "0 auto",
          padding: "0 1.5rem",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(0,113,227,0.08)",
            border: "1px solid rgba(0,113,227,0.18)",
            borderRadius: "980px",
            padding: "6px 16px",
            marginBottom: "2rem",
          }}
        >
          <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#0071e3", display: "inline-block" }} />
          <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "#0071e3", letterSpacing: "0.04em" }}>
            BOARD STRATEGY BRIEFING — MARCH 2026
          </span>
        </div>

        {/* Main headline */}
        <h1
          style={{
            fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
            fontWeight: 700,
            letterSpacing: "-0.04em",
            lineHeight: 1.05,
            color: "#1d1d1f",
            marginBottom: "1.5rem",
          }}
        >
          PMT SaaS Strategy
          <br />
          <span style={{ color: "#0071e3" }}>and Roadmap</span>
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
            fontWeight: 400,
            color: "#6e6e73",
            lineHeight: 1.6,
            maxWidth: "640px",
            margin: "0 auto 2.5rem",
            letterSpacing: "-0.01em",
          }}
        >
          A comprehensive product strategy for the Dutch supermarket workforce management platform — covering software architecture, regulatory compliance, and the 18-month delivery roadmap.
        </p>

        {/* CTA buttons */}
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap", marginBottom: "5rem" }}>
          <button
            className="apple-btn"
            onClick={() => document.getElementById("market-context")?.scrollIntoView({ behavior: "smooth" })}
          >
            Explore the Strategy ↓
          </button>
          <button
            className="apple-btn-outline"
            onClick={() => document.getElementById("gap-analysis")?.scrollIntoView({ behavior: "smooth" })}
          >
            View Gap Analysis
          </button>
        </div>

        {/* Stats bar */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1px",
            background: "#e5e5ea",
            borderRadius: "18px",
            overflow: "hidden",
            border: "1px solid #e5e5ea",
            boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
          }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              style={{
                background: "rgba(255,255,255,0.92)",
                padding: "1.5rem 1rem",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "clamp(1.4rem, 3vw, 2rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.03em",
                  color: "#1d1d1f",
                  lineHeight: 1,
                  marginBottom: "0.4rem",
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  fontSize: "0.72rem",
                  color: "#8e8e93",
                  fontWeight: 500,
                  letterSpacing: "0.01em",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "6px",
          opacity: 0.4,
          animation: "bounce 2s infinite",
        }}
      >
        <div style={{ width: "1px", height: "40px", background: "#1d1d1f" }} />
        <span style={{ fontSize: "0.65rem", color: "#1d1d1f", letterSpacing: "0.1em", textTransform: "uppercase" }}>Scroll</span>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }
      `}</style>
    </section>
  );
}
