import "./Hero.css";
import { siteData } from "../data/portfolio";

export default function Hero() {
  const { hero } = siteData;
  const { eyebrow, firstName, lastName, role, roleHighlight, description, ctaLabel, ctaHref, photo } = hero;

  const roleParts = role.split(roleHighlight);

  return (
    <section className="hero">
      <div className="hero__grid">
        {/* Columna izquierda */}
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1>
            {firstName}
            <br />
            {lastName}
          </h1>
          <p className="hero__role">
            {roleParts[0]}
            <strong>{roleHighlight}</strong>
            {roleParts[1]}
          </p>
          <p className="hero__desc">{description}</p>
          <a href={ctaHref} className="link-arrow">{ctaLabel}</a>

        </div>

        {/* Columna derecha — foto */}
        <div className="hero__photo">
          {photo ? (
            <img src={photo} alt={firstName} />
          ) : (
            <div className="hero__photo-hint">
              <svg viewBox="0 0 24 24" width="64" height="64" fill="none" stroke="currentColor" strokeWidth="1.4">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="9" cy="10" r="2" />
                <path d="M21 17l-6-5-4 4-3-2-5 4" />
              </svg>
              Reemplaza este bloque<br />con tu fotografía
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

