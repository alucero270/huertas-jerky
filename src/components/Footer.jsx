"use client";


export default function Footer() {
  return (
    <footer style={{ marginTop: "3rem", padding: "2rem 0", borderTop: "1px solid #e5e7eb" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 16px", color: "#4b5563" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "space-between" }}>
          <div>
            <div style={{ fontWeight: 800, color: "#111827" }}>Huerta’s Albuquerque Jerky</div>
            <div>307 A San Pedro Dr. NE, Albuquerque, NM 87108</div>
            <div>
              Call: <a href="tel:+15056775375">505-677-JERK (5375)</a>
            </div>
          </div>
          <div>
            <div style={{ fontWeight: 800, color: "#111827" }}>Social</div>
            <div>
              <a href="https://www.instagram.com/HUERTAS_ALBUQUERQUE_JERKY_" target="_blank" rel="noreferrer">
                Instagram
              </a>
            </div>
            <div>
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                Facebook
              </a>
            </div>
          </div>
        </div>
        <div style={{ marginTop: 16, fontSize: 12 }}>
          © {new Date().getFullYear()} Huerta’s Albuquerque Jerky. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
