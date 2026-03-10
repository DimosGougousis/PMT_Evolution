/* Design: Dark Command Centre — cinematic hero with animated stats counter */
import { useEffect, useRef, useState } from "react";

function CountUp({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

const stats = [
  { value: 290, suffix: "M+", prefix: "€", label: "Max GDPR Fine Exposure", color: "oklch(0.60 0.22 25)" },
  { value: 15, suffix: "M", prefix: "€", label: "Max EU AI Act Penalty", color: "oklch(0.75 0.18 75)" },
  { value: 4, suffix: " Gaps", prefix: "", label: "Critical Regulatory Gaps", color: "oklch(0.60 0.22 25)" },
  { value: 7, suffix: " Clusters", prefix: "", label: "Software Modules Defined", color: "oklch(0.60 0.20 255)" },
  { value: 18, suffix: " Months", prefix: "", label: "Strategic Horizon", color: "oklch(0.65 0.18 145)" },
];

export default function HeroSection() {
  return (
    <section
      id="executive-summary"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ paddingTop: "5rem" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/112091274/JmCAtv6PPZTyefvaPPYBRx/hero_bg-hunufDUg4oCrrh7yQL3hSP.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 z-0" style={{ background: "linear-gradient(135deg, oklch(0.08 0.015 255 / 92%) 0%, oklch(0.10 0.012 255 / 85%) 100%)" }} />

      <div className="container relative z-10 py-20">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-12 bg-blue-400/60" />
          <span className="text-blue-400/80 text-xs font-medium tracking-widest uppercase" style={{ fontFamily: "Space Mono, monospace" }}>
            Board Strategy Briefing — March 2026
          </span>
        </div>

        {/* Main headline */}
        <h1
          className="font-extrabold text-white leading-none mb-6"
          style={{
            fontFamily: "Syne, sans-serif",
            fontSize: "clamp(2.8rem, 7vw, 6rem)",
            maxWidth: "900px",
          }}
        >
          Shift & Resource
          <br />
          <span style={{ color: "oklch(0.72 0.18 255)" }}>Management</span>
          <br />
          SaaS Strategy
        </h1>

        {/* Subtitle */}
        <p
          className="text-white/60 mb-10 leading-relaxed"
          style={{ fontFamily: "Manrope, sans-serif", fontSize: "1.125rem", maxWidth: "640px" }}
        >
          A comprehensive product strategy for the Dutch supermarket workforce management platform — covering software architecture, regulatory compliance, and the 18-month remediation roadmap.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4 mb-16">
          <button
            onClick={() => document.getElementById("market-context")?.scrollIntoView({ behavior: "smooth" })}
            className="px-6 py-3 rounded-lg font-semibold text-sm text-white transition-all duration-200 hover:scale-105"
            style={{
              fontFamily: "Manrope, sans-serif",
              background: "linear-gradient(135deg, oklch(0.60 0.20 255), oklch(0.50 0.22 280))",
              boxShadow: "0 0 24px oklch(0.60 0.20 255 / 30%)",
            }}
          >
            Begin Briefing →
          </button>
          <button
            onClick={() => document.getElementById("roadmap")?.scrollIntoView({ behavior: "smooth" })}
            className="px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 hover:bg-white/10"
            style={{
              fontFamily: "Manrope, sans-serif",
              color: "oklch(0.75 0.005 255)",
              border: "1px solid oklch(1 0 0 / 15%)",
            }}
          >
            Jump to Roadmap
          </button>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="glass-card p-4"
              style={{ borderTop: `2px solid ${stat.color}` }}
            >
              <div
                className="text-2xl font-bold mb-1"
                style={{ fontFamily: "Syne, sans-serif", color: stat.color }}
              >
                <CountUp target={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
              </div>
              <div className="text-xs text-white/50" style={{ fontFamily: "Manrope, sans-serif" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/30">
        <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "Space Mono, monospace", fontSize: "0.6rem" }}>Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
