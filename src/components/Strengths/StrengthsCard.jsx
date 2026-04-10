import './Strengths.css'

export default function StrengthsCard({ title, description, tags, image }) {
  return (
    <div className="strengths-card">
      <div className="strengths-card__top">
        <h3 className="strengths-card__title">{title}</h3>
        <p className="strengths-card__desc">{description}</p>
      </div>
      <div className="strengths-card__tags">
        {tags.map((tag, i) => (
          <span key={i} className="strengths-card__tag">#{tag}</span>
        ))}
      </div>
      {image && (
        <div className="strengths-card__hover-img">
          <img src={image} alt={title} />
        </div>
      )}
    </div>
  )
}
