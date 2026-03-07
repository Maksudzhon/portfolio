import { useState } from "react";
import AnimSection from "./AnimSection";

const contactInfo = [
  { icon: "📞", label: "Phone", val: "+998 77 157 04 70", href: "tel:+998771570470" },
  { icon: "✉️", label: "Email", val: "maksuzonmukimov@gmail.com", href: "mailto:maksuzonmukimov@gmail.com" },
  { icon: "✈️", label: "Telegram", val: "@morv1uss", href: "https://t.me/morv1uss" },
  { icon: "💻", label: "GitHub", val: "Maksudzhon", href: "https://github.com/Maksudzhon" },
];

function Contact({ t }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // null | "success" | "error"
  const [sending, setSending] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;
    setSending(true);
    setStatus(null);
    try {
      const res = await fetch("https://formspree.io/f/xbdzlgjw", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
    setSending(false);
  };

  return (
    <section id="contact" style={{ padding: "100px 24px", background: "#fff" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <AnimSection>
          <p className="section-label">{t.nav.contact}</p>
          <h2 className="section-title syne" style={{ marginBottom: 8 }}>
            {t.contact.title}
            <span className="dot-accent" />
          </h2>
          <p style={{ color: "var(--muted)", marginBottom: 52 }}>{t.contact.sub}</p>
        </AnimSection>

        <div
          className="contact-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: 40 }}
        >
          {/* Contact info card */}
          <AnimSection>
            <div className="card" style={{ height: "100%" }}>
              <h3 className="syne" style={{ fontWeight: 700, marginBottom: 20 }}>
                Contact Info
              </h3>
              {contactInfo.map((item) => (
                <div key={item.label} className="contact-info-item">
                  <span style={{ fontSize: "1.1rem" }}>{item.icon}</span>
                  <div>
                    <div
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        color: "var(--muted)",
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                      }}
                    >
                      {item.label}
                    </div>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "var(--fg)",
                        fontWeight: 500,
                        fontSize: "0.9rem",
                        textDecoration: "none",
                      }}
                    >
                      {item.val}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </AnimSection>

          {/* Form card */}
          <AnimSection>
            <div className="card">
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <input
                  className="input-field"
                  name="name"
                  placeholder={t.contact.name}
                  value={form.name}
                  onChange={handleChange}
                />
                <input
                  className="input-field"
                  name="email"
                  type="email"
                  placeholder={t.contact.email}
                  value={form.email}
                  onChange={handleChange}
                />
                <textarea
                  className="input-field"
                  name="message"
                  rows={5}
                  placeholder={t.contact.message}
                  value={form.message}
                  onChange={handleChange}
                />

                {status === "success" && (
                  <p style={{ color: "#22c55e", fontSize: "0.88rem", fontWeight: 500 }}>
                    ✓ {t.contact.success}
                  </p>
                )}
                {status === "error" && (
                  <p style={{ color: "var(--accent2)", fontSize: "0.88rem", fontWeight: 500 }}>
                    ✕ {t.contact.error}
                  </p>
                )}

                <button
                  className="btn-primary"
                  onClick={handleSubmit}
                  disabled={sending}
                >
                  {sending ? t.contact.sending : t.contact.send}
                </button>
              </div>
            </div>
          </AnimSection>
        </div>
      </div>
    </section>
  );
}

export default Contact;
