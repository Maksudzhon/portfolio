import AnimSection from "./AnimSection";
import projects from "../data/projectData";

function Projects({ t, lang }) {
  return (
    <section id="projects" style={{ padding: "100px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <AnimSection>
          <p className="section-label">{t.nav.projects}</p>
          <h2 className="section-title syne" style={{ marginBottom: 8 }}>
            {t.projects.title}
            <span className="dot-accent" />
          </h2>
          <p style={{ color: "var(--muted)", marginBottom: 52 }}>{t.projects.sub}</p>
        </AnimSection>

        <div
          className="projects-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 24 }}
        >
          {projects.map((proj, i) => (
            <AnimSection key={i}>
              <div
                className="card"
                style={{ height: "100%", display: "flex", flexDirection: "column" }}
              >
                {/* Card header */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    marginBottom: 14,
                  }}
                >
                  <div
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: 12,
                      background: i % 2 === 0 ? "#f0eeff" : "#fff0f3",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.2rem",
                    }}
                  >
                    {proj.emoji}
                  </div>
                  <span style={{ fontSize: "0.75rem", color: "var(--muted)", fontWeight: 600 }}>
                    0{i + 1}
                  </span>
                </div>

                {/* Title + badge */}
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10, flexWrap: "wrap" }}>
                  <h3
                    className="syne"
                    style={{ fontWeight: 700, fontSize: "1.1rem" }}
                  >
                    {proj.title}
                  </h3>
                  {proj.badge && (
                    <span style={{
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      padding: "2px 8px",
                      borderRadius: 20,
                      background: "#fff4e6",
                      color: "#d97706",
                      border: "1px solid #fde68a",
                      letterSpacing: "0.04em",
                      whiteSpace: "nowrap",
                    }}>
                      {proj.badge}
                    </span>
                  )}
                </div>

                {/* Description — multilingual */}
                <p
                  style={{
                    color: "var(--muted)",
                    fontSize: "0.9rem",
                    lineHeight: 1.7,
                    flex: 1,
                  }}
                >
                  {proj.desc[lang]}
                </p>

                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, margin: "14px 0" }}>
                  {proj.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  {t.projects.view} →
                </a>
              </div>
            </AnimSection>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
