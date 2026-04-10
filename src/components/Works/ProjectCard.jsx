import "./Works.css";

export default function ProjectCard({
  type,
  title,
  subtitle,
  titleColor,
  description,
  period,
  role,
  tools,
  figmaLink,
  siteLink,
  image,
  imageAlt,
  imageStyle,
  reverse,
}) {
  return (
    <article
      className={`project-card ${reverse ? "project-card--reverse" : ""}`}
    >
      <div className="project-card__content">
        <span className="project-card__type">{type}</span>
        <h3 className="project-card__title" style={titleColor ? { color: titleColor } : undefined}>{title}</h3>
        {subtitle && <p className="project-card__subtitle">{subtitle}</p>}
<p className="project-card__desc">{description}</p>
        <div className="project-card__meta">
          {period && (
            <p className="project-card__meta-row">
              <span className="project-card__meta-label">기간</span>
              <span>{period}</span>
            </p>
          )}
          {role && (
            <p className="project-card__meta-row">
              <span className="project-card__meta-label">기여도</span>
              <span>{role}</span>
            </p>
          )}
        </div>
        {tools && (
          <div className="project-card__tools">
            <span className="project-card__meta-label">TOOLS</span>
            <div className="project-card__tool-icons">
              {tools.map((t, i) => (
                <span
                  key={i}
                  className="project-card__tool-icon"
                  title={t.name}
                >
                  {t.icon ? (
                    <img src={t.icon} alt={t.name} />
                  ) : (
                    <span className="project-card__tool-text">{t.name}</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        )}
        <div className="project-card__links">
          {figmaLink && (
            <a
              href={figmaLink}
              target="_blank"
              rel="noreferrer"
              className="project-card__btn project-card__btn--outline"
            >
              View Figma
            </a>
          )}
          {siteLink && (
            <a
              href={siteLink}
              target="_blank"
              rel="noreferrer"
              className="project-card__btn project-card__btn--outline"
            >
              View Site
            </a>
          )}
        </div>
      </div>
      <div className="project-card__image">
        {image ? (
          <img src={image} alt={imageAlt || title} style={imageStyle} />
        ) : (
          <div className="project-card__image-placeholder" />
        )}
      </div>
    </article>
  );
}
