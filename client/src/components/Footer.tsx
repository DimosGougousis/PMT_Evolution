/* Design: Dark Command Centre — minimal footer */
export default function Footer() {
  return (
    <footer
      className="py-12 border-t"
      style={{ background: "oklch(0.09 0.012 255)", borderColor: "oklch(1 0 0 / 8%)" }}
    >
      <div className="container">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div
                className="w-7 h-7 rounded flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, oklch(0.60 0.20 255), oklch(0.50 0.22 280))" }}
              >
                <span className="text-white font-bold text-xs" style={{ fontFamily: "Syne, sans-serif" }}>PMT</span>
              </div>
              <span className="font-bold text-white/80" style={{ fontFamily: "Syne, sans-serif" }}>PMT Evolution</span>
            </div>
            <p className="text-white/35 text-xs max-w-sm leading-relaxed" style={{ fontFamily: "Manrope, sans-serif" }}>
              Shift & Resource Management SaaS Strategy. Prepared for board-level review, March 2026.
            </p>
          </div>

          <div className="text-right">
            <div className="text-white/25 text-xs mb-1" style={{ fontFamily: "Space Mono, monospace" }}>Classification</div>
            <div className="text-white/50 text-xs" style={{ fontFamily: "Space Mono, monospace" }}>INTERNAL — CONFIDENTIAL</div>
            <div className="text-white/25 text-xs mt-2" style={{ fontFamily: "Space Mono, monospace" }}>Version 1.0 · March 2026</div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t flex flex-wrap gap-4 text-xs text-white/25" style={{ borderColor: "oklch(1 0 0 / 6%)", fontFamily: "Manrope, sans-serif" }}>
          <span>Research: Dutch ATW, CAO Supermarkt, GDPR, EU AI Act, WTTA, Wet meer zekerheid flexwerkers</span>
          <span>·</span>
          <span>Standards: ISO 27001, ISO 42001, SOC 2, NIST CSF 2.0, TOGAF 10</span>
        </div>
      </div>
    </footer>
  );
}
