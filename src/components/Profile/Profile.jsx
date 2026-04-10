import { useEffect, useRef } from "react";
import SkillBar from "./SkillBar";
import "./Profile.css";

const careers = [
  {
    period: "2024.04 – 2025.07",
    role: "고객응대 , 수하물 처리 및 발권",
    company: "(주)에이티에스제주",
  },
  {
    period: "2023.01 – 2023.11",
    role: "매장 운영 및 베이커리 제조",
    company: "(주)붐컴퍼니",
  },
  {
    period: "2020.07 – 2022.03",
    role: "만 0,1세 담임교사",
    company: "시립장현행복어린이집",
  },
  {
    period: "2019.03 – 2020.03",
    role: "만 2세 담임교사",
    company: "예손어린이집",
  },
];

const skills = [
  { name: "Figma", level: 9, icon: "/images/figma.png" },
  { name: "React", level: 6, icon: "/images/react.png" },
  { name: "SCSS", level: 8, icon: "/images/scss.png" },
  { name: "JavaScript", level: 5, icon: "/images/js.png" },
  { name: "Photoshop", level: 2, icon: "/images/ps.png" },
  { name: "Git hub", level: 6, icon: "/images/github.png" },
  { name: "Claude", level: 8, icon: "/images/claude.png" },
];

export default function Profile() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("profile--visible");
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="profile" className="profile" ref={sectionRef}>
      <div className="profile__inner">
        {/* 왼쪽 */}
        <div className="profile__left">
          <div className="profile__name-block">
            <h2 className="profile__name-kr">김세빈</h2>
            <p className="profile__name-en">KIM SEBIN / 1998.09.08</p>
          </div>
          <div className="profile__photo">
            <img src="/images/profile.jpg" alt="김세빈 프로필" />
          </div>
        </div>

        {/* 오른쪽 */}
        <div className="profile__right">
          <blockquote className="profile__quote">
            "<strong>얽매이지 않은 생각</strong>으로 디자인의 새로운 궤적을
            그리는 신입 디자이너"
          </blockquote>

          <div className="profile__section">
            <h3 className="profile__section-title">Career Details</h3>
            <ul className="profile__career">
              {careers.map((c, i) => (
                <li key={i} className="profile__career-item">
                  <span className="profile__career-period">{c.period}</span>
                  <span className="profile__career-role">{c.role}</span>
                  <span className="profile__career-company">{c.company}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="profile__section">
            <h3 className="profile__section-title">Skills</h3>
            <div className="profile__skills">
              {skills.map((s) => (
                <SkillBar
                  key={s.name}
                  name={s.name}
                  level={s.level}
                  icon={s.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
