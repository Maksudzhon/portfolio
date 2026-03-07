import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import translations from "./data/translations";
import "./styles/global.css";

function App() {
  const [lang, setLang] = useState("en");
  const [active, setActive] = useState("about");

  const t = translations[lang];

  // Track active section on scroll
  useEffect(() => {
    const sections = ["about", "skills", "projects", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar t={t} lang={lang} setLang={setLang} active={active} />
      <Hero t={t} />
      <About t={t} />
      <Skills t={t} />
      <Projects t={t} lang={lang} />
      <Contact t={t} />
      <Footer />
    </>
  );
}

export default App;
