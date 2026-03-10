/* Design: Apple.com — clean minimal footer with Dimos Gougousis authorship */
export default function Footer() {
  return (
    <footer
      style={{
        background: "#f5f5f7",
        borderTop: "1px solid #e5e5ea",
        padding: "48px 0 32px",
      }}
    >
      <div className="container">
        {/* Top row */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "2rem",
            marginBottom: "32px",
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
              <div
                style={{
                  width: "28px",
                  height: "28px",
                  borderRadius: "7px",
                  background: "#0071e3",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <span style={{ color: "white", fontWeight: 700, fontSize: "10px" }}>PMT</span>
              </div>
              <span
                style={{
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  color: "#1d1d1f",
                  letterSpacing: "-0.01em",
                }}
              >
                PMT SaaS Strategy and Roadmap
              </span>
            </div>
            <p
              style={{
                fontSize: "0.78rem",
                color: "#8e8e93",
                maxWidth: "320px",
                lineHeight: 1.6,
              }}
            >
              Shift and Resource Management platform strategy for the Dutch supermarket sector. Prepared for board-level review.
            </p>
          </div>

          {/* Meta */}
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: "0.7rem", color: "#aeaeb2", marginBottom: "4px", letterSpacing: "0.04em", textTransform: "uppercase" }}>
              Author
            </div>
            <div style={{ fontSize: "0.875rem", fontWeight: 600, color: "#1d1d1f", marginBottom: "12px" }}>
              Dimos Gougousis
            </div>
            <div style={{ fontSize: "0.7rem", color: "#aeaeb2", marginBottom: "4px", letterSpacing: "0.04em", textTransform: "uppercase" }}>
              Classification
            </div>
            <div style={{ fontSize: "0.78rem", color: "#6e6e73" }}>
              Internal — Confidential
            </div>
            <div style={{ fontSize: "0.72rem", color: "#aeaeb2", marginTop: "8px" }}>
              Version 1.0 · March 2026
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr style={{ border: "none", borderTop: "1px solid #e5e5ea", margin: "0 0 20px" }} />

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <p style={{ fontSize: "0.72rem", color: "#aeaeb2", lineHeight: 1.6, maxWidth: "600px" }}>
            Research basis: Dutch ATW · CAO Supermarkt · GDPR · EU AI Act · WTTA · Wet meer zekerheid flexwerkers · Pay Transparency Directive
          </p>
          <p style={{ fontSize: "0.72rem", color: "#aeaeb2" }}>
            Standards: ISO 27001 · ISO 42001 · SOC 2 · NIST CSF 2.0 · TOGAF 10
          </p>
        </div>
      </div>
    </footer>
  );
}
