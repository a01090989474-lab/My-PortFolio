import "./Profile.css";

export default function SkillBar({ name, icon, level, total = 10 }) {
  return (
    <div className="skill-bar">
      <div className="skill-bar__label">
        {icon && <img src={icon} alt={name} className="skill-bar__icon" />}
        <span className="skill-bar__name">{name}</span>
      </div>
      <div className="skill-bar__dots">
        {Array.from({ length: total }).map((_, i) => (
          <span
            key={i}
            className={`skill-bar__dot ${i < level ? "skill-bar__dot--filled" : ""}`}
            style={{ "--dot-delay": `${i * 0.02}s` }}
          />
        ))}
      </div>
    </div>
  );
}
