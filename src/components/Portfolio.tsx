import { useState } from "react";
import "./Portfolio.css";
import { siteData } from "../data/portfolio";
import ProjectModal from "./ProjectModal";

type Work = (typeof siteData.works)[number];

const placeholderIcons = [
  <svg key="a" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
    <rect x="3" y="4" width="18" height="14" rx="2" />
    <path d="M3 15l5-4 4 3 5-5 4 4" />
  </svg>,
  <svg key="b" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
    <rect x="4" y="3" width="9" height="18" rx="1.5" />
    <circle cx="8.5" cy="18" r=".6" fill="currentColor" />
  </svg>,
  <svg key="c" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
    <path d="M12 3v11M8 7l4-4 4 4" />
    <rect x="4" y="15" width="16" height="6" rx="1.5" />
  </svg>,
  <svg key="d" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
    <circle cx="12" cy="12" r="8" />
    <path d="M12 8v4l3 2" />
  </svg>,
];

export default function Portfolio() {
  const { works } = siteData;
  const [selected, setSelected] = useState<Work | null>(null);

  return (
    <>
      <section className="portfolio" id="trabajos">
        <div className="wrap">
          <div className="portfolio__head">
            <div>
              <p className="eyebrow">Portafolio</p>
              <h2>Todo mi trabajo creativo, proyectos seleccionados.</h2>
            </div>
          </div>

          <div className="portfolio__grid">
            {works.map((work, i) => (
              <button
                key={work.title}
                className="work-card"
                onClick={() => setSelected(work)}
                aria-label={`Ver galería de ${work.title}`}
              >
                <div className="work-card__thumb">
                  {work.cover
                    ? <img src={work.cover} alt={work.title} />
                    : placeholderIcons[i % placeholderIcons.length]}
                </div>
                <div className="work-card__info">
                  <h3>{work.title}</h3>
                  <span className="work-card__tag">{work.tags}</span>
                </div>
                <span className="work-card__cta">Ver proyecto →</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {selected && (
        <ProjectModal work={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}
