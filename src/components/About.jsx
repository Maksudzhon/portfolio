import AnimSection from "./AnimSection";

function About({ t }) {
  const stats = [
    { label: t.about.age, val: t.about.ageVal, icon: "🎂" },
    { label: t.about.location, val: t.about.locationVal, icon: "📍" },
    { label: t.about.focus, val: t.about.focusVal, icon: "⚡" },
    { label: t.about.interest, val: t.about.interestVal, icon: "🔐" },
  ];

  return (
    <section id="about" style={{ padding: "100px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <AnimSection>
          <p className="section-label">{t.nav.about}</p>
          <h2 className="section-title syne" style={{ marginBottom: 48 }}>
            {t.about.title}
            <span className="dot-accent" />
          </h2>
        </AnimSection>

        <div
          className="about-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "start" }}
        >
          {/* Text */}
          <AnimSection>
            <p style={{ color: "#444", lineHeight: 1.8, marginBottom: 16 }}>{t.about.p1}</p>
            <p style={{ color: "#444", lineHeight: 1.8, marginBottom: 16 }}>{t.about.p2}</p>
            <p style={{ color: "#444", lineHeight: 1.8 }}>{t.about.p3}</p>
          </AnimSection>

          {/* Stats */}
          <AnimSection>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              {stats.map((item) => (
                <div key={item.label} className="stat-card">
                  <div style={{ fontSize: "1.4rem", marginBottom: 6 }}>{item.icon}</div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--muted)",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      marginBottom: 4,
                    }}
                  >
                    {item.label}
                  </div>
                  <div style={{ fontWeight: 700, fontSize: "1rem" }}>{item.val}</div>
                </div>
              ))}
            </div>

            {/* Quick contact highlight */}
            <div
              style={{
                marginTop: 20,
                padding: "16px 20px",
                background: "#f0eeff",
                borderRadius: 14,
                borderLeft: "3px solid var(--accent)",
              }}
            >
              <p style={{ fontSize: "0.88rem", color: "var(--accent)", lineHeight: 1.6, fontWeight: 500 }}>
                📬 <strong>+998 77 157 04 70</strong> · maksuzonmukimov@gmail.com
              </p>
            </div>
          </AnimSection>
        </div>
      </div>
    </section>
  );
}

export default About;
