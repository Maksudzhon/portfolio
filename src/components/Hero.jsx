import socials from "../data/socials";

function Hero({ t }) {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: 80,
      }}
    >
      {/* Background blobs */}
      <div
        className="hero-blob"
        style={{
          width: 400,
          height: 400,
          background: "rgba(91,76,219,0.1)",
          top: -100,
          right: -100,
        }}
      />
      <div
        className="hero-blob"
        style={{
          width: 300,
          height: 300,
          background: "rgba(232,93,117,0.08)",
          bottom: 0,
          left: -80,
        }}
      />

      <div
        className="hero-section"
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "60px 24px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 40,
        }}
      >
        {/* Text */}
        <div style={{ maxWidth: 580 }}>
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "#f0eeff",
              padding: "6px 14px",
              borderRadius: 20,
              marginBottom: 24,
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#4ade80",
                display: "inline-block",
                animation: "pulse 2s infinite",
              }}
            />
            <span style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--accent)" }}>
              Available for work
            </span>
          </div>

          <p style={{ fontSize: "1.1rem", color: "var(--muted)", marginBottom: 8, fontWeight: 500 }}>
            {t.hero.greeting}
          </p>

          <h1
            className="syne"
            style={{
              fontSize: "clamp(3rem,8vw,5.5rem)",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              marginBottom: 16,
            }}
          >
            Morvi<span style={{ color: "var(--accent2)" }}>.</span>
          </h1>

          <p
            style={{
              fontSize: "clamp(1.1rem,2.5vw,1.4rem)",
              fontWeight: 600,
              color: "var(--accent)",
              marginBottom: 16,
            }}
          >
            {t.hero.role}
          </p>

          <p
            style={{
              color: "var(--muted)",
              lineHeight: 1.7,
              fontSize: "1rem",
              marginBottom: 32,
              maxWidth: 460,
            }}
          >
            {t.hero.sub}
          </p>

          <div
            className="hero-buttons"
            style={{ display: "flex", gap: 14, flexWrap: "wrap" }}
          >
            <button className="btn-primary" onClick={() => scrollTo("projects")}>
              {t.hero.cta} →
            </button>
            <button className="btn-outline" onClick={() => scrollTo("contact")}>
              {t.hero.contact}
            </button>
          </div>

          {/* Socials */}
          <div
            className="hero-socials"
            style={{ display: "flex", gap: 10, marginTop: 32 }}
          >
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Avatar blob */}
        <div className="hero-img-wrap" style={{ flexShrink: 0 }}>
          <div style={{ position: "relative", width: 260, height: 260 }}>
            <div
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "60% 40% 55% 45% / 45% 55% 40% 60%",
                background:
                  "linear-gradient(135deg, var(--accent) 0%, #9b8df7 50%, var(--accent2) 100%)",
                animation: "morphBlob 6s ease-in-out infinite",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 6,
                borderRadius: "60% 40% 55% 45% / 45% 55% 40% 60%",
                background: "var(--bg)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                animation: "morphBlob 6s ease-in-out infinite",
              }}
            >
              <span
                className="syne"
                style={{
                  fontSize: "4.5rem",
                  fontWeight: 800,
                  color: "var(--accent)",
                  lineHeight: 1,
                }}
              >
                M
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
