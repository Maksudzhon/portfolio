import { useState } from "react";

function Navbar({ t, lang, setLang, active }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 24px",
          height: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <span
          className="syne"
          style={{ fontWeight: 800, fontSize: "1.15rem", letterSpacing: "-0.02em", cursor: "pointer" }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          morvi<span style={{ color: "var(--accent2)" }}>.</span>
        </span>

        {/* Desktop Nav Links */}
        <div
          className="nav-links-desktop"
          style={{ display: "flex", alignItems: "center", gap: 32 }}
        >
          {["about", "skills", "projects", "contact"].map((id) => (
            <span
              key={id}
              className={`nav-link ${active === id ? "active" : ""}`}
              onClick={() => scrollTo(id)}
            >
              {t.nav[id]}
            </span>
          ))}
          <a
            href="https://morvi-projects.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-see-projects-btn"
          >
            {t.nav.seeProjects} ↗
          </a>
        </div>

        {/* Right side: lang + hamburger */}
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          {["en", "uz", "ru"].map((l) => (
            <button
              key={l}
              className={`lang-btn ${lang === l ? "active" : ""}`}
              onClick={() => setLang(l)}
            >
              {l.toUpperCase()}
            </button>
          ))}
          <div
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ marginLeft: 8 }}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          {["about", "skills", "projects", "contact"].map((id) => (
            <span
              key={id}
              className="nav-link"
              style={{ fontSize: "1rem" }}
              onClick={() => scrollTo(id)}
            >
              {t.nav[id]}
            </span>
          ))}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-see-projects-btn"
            style={{ alignSelf: "flex-start" }}
            onClick={() => setMenuOpen(false)}
          >
            {t.nav.seeProjects} ↗
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;