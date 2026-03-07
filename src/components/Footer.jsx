function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", padding: "28px 24px", textAlign: "center" }}>
      <p style={{ color: "var(--muted)", fontSize: "0.85rem" }}>
        © {new Date().getFullYear()}{" "}
        <span style={{ fontWeight: 700, color: "var(--fg)" }}>Morvi</span>
        {" "}· All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
