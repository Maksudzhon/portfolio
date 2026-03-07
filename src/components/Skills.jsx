import AnimSection from "./AnimSection";
import useInView from "../hooks/useInView";
import skillData from "../data/skillData";

function SkillRow({ skill }) {
  const [ref, inView] = useInView(0.1);

  return (
    <div ref={ref}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
        <span style={{ fontSize: "0.88rem", fontWeight: 500 }}>{skill.name}</span>
        <span style={{ fontSize: "0.78rem", color: "var(--muted)", fontWeight: 600 }}>
          {skill.level}%
        </span>
      </div>
      <div className="skill-bar">
        <div
          className="skill-fill"
          style={{ width: inView ? `${skill.level}%` : "0%" }}
        />
      </div>
    </div>
  );
}

function Skills({ t }) {
  const categories = [
    { key: "frontend", label: t.skills.frontend, emoji: "🎨" },
    { key: "backend", label: t.skills.backend, emoji: "⚙️" },
    { key: "tools", label: t.skills.tools, emoji: "🛠️" },
  ];

  return (
    <section id="skills" style={{ padding: "100px 24px", background: "#fff" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <AnimSection>
          <p className="section-label">{t.nav.skills}</p>
          <h2 className="section-title syne" style={{ marginBottom: 8 }}>
            {t.skills.title}
            <span className="dot-accent" />
          </h2>
          <p style={{ color: "var(--muted)", marginBottom: 52 }}>{t.skills.sub}</p>
        </AnimSection>

        <div
          className="skills-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}
        >
          {categories.map((cat) => (
            <AnimSection key={cat.key}>
              <div className="card" style={{ height: "100%" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 22 }}>
                  <span style={{ fontSize: "1.3rem" }}>{cat.emoji}</span>
                  <span className="syne" style={{ fontWeight: 700, fontSize: "1rem" }}>
                    {cat.label}
                  </span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {skillData[cat.key].map((skill) => (
                    <SkillRow key={skill.name} skill={skill} />
                  ))}
                </div>
              </div>
            </AnimSection>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
