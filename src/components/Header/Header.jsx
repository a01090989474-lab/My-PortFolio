import { useEffect, useState } from "react";
import "./Header.css";

const SECTION_LABELS = {
  hero: "PORTFOLIO",
  profile: "PROFILE",
  strengths: "STRENGTHS",
  works: "WORKS",
  process: "WORKS",
};

export default function Header() {
  const [label, setLabel] = useState("PORTFOLIO");

  useEffect(() => {
    const sections = Object.keys(SECTION_LABELS)
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setLabel(SECTION_LABELS[entry.target.id]);
          }
        });
      },
      { threshold: 0.4 },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="header">
      <div className="header__inner">
        <a href="#hero" className="header__logo">
          {label}
        </a>
      </div>
    </header>
  );
}
