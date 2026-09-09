import { useEffect, useState } from "react";
import "./ProjectModal.css";

interface Work {
  title: string;
  tags: string;
  cover: string;
  images: string[];
  description: string;
}

interface Props {
  work: Work;
  onClose: () => void;
}

// Íconos SVG placeholder para cuando no hay imagen
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

export default function ProjectModal({ work, onClose }: Props) {
  // lightbox: índice de la imagen actualmente ampliada (-1 = cerrado)
  const [lightboxIndex, setLightboxIndex] = useState<number>(-1);

  // Cerrar con Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        if (lightboxIndex >= 0) setLightboxIndex(-1);
        else onClose();
      }
      if (e.key === "ArrowRight" && lightboxIndex >= 0) {
        setLightboxIndex((i) => (i + 1) % allImages.length);
      }
      if (e.key === "ArrowLeft" && lightboxIndex >= 0) {
        setLightboxIndex((i) => (i - 1 + allImages.length) % allImages.length);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  // Bloquear scroll del body mientras el modal está abierto
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  // Lista final de imágenes: cover primero si existe, luego las demás
  const allImages: string[] = [];
  if (work.cover) allImages.push(work.cover);
  work.images.forEach((img) => { if (img && img !== work.cover) allImages.push(img); });

  const hasImages = allImages.length > 0;

  return (
    <>
      {/* Backdrop */}
      <div className="pm-backdrop" onClick={onClose} />

      {/* Panel */}
      <div className="pm-panel" role="dialog" aria-modal="true" aria-label={work.title}>
        {/* Cabecera */}
        <div className="pm-header">
          <div>
            <h2 className="pm-title">{work.title}</h2>
            <span className="pm-tags">{work.tags}</span>
          </div>
          <button className="pm-close" onClick={onClose} aria-label="Cerrar">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {work.description && <p className="pm-desc">{work.description}</p>}

        {/* Grilla de imágenes */}
        <div className={`pm-grid ${hasImages ? "" : "pm-grid--placeholder"}`}>
          {hasImages
            ? allImages.map((src, idx) => (
                <button
                  key={src + idx}
                  className="pm-thumb"
                  onClick={() => setLightboxIndex(idx)}
                  aria-label={`Ver imagen ${idx + 1}`}
                >
                  <img src={src} alt={`${work.title} ${idx + 1}`} loading="lazy" />
                  <span className="pm-thumb-overlay">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
                      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                    </svg>
                  </span>
                </button>
              ))
            : Array.from({ length: 4 }).map((_, idx) => (
                <div key={idx} className="pm-thumb pm-thumb--empty">
                  {placeholderIcons[idx % placeholderIcons.length]}
                  <span>Sin imagen</span>
                </div>
              ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex >= 0 && (
        <div className="pm-lightbox" onClick={() => setLightboxIndex(-1)}>
          <button
            className="pm-lb-arrow pm-lb-arrow--prev"
            onClick={(e) => { e.stopPropagation(); setLightboxIndex((i) => (i - 1 + allImages.length) % allImages.length); }}
            aria-label="Anterior"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
          </button>

          <img
            src={allImages[lightboxIndex]}
            alt={`${work.title} ${lightboxIndex + 1}`}
            className="pm-lb-img"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="pm-lb-arrow pm-lb-arrow--next"
            onClick={(e) => { e.stopPropagation(); setLightboxIndex((i) => (i + 1) % allImages.length); }}
            aria-label="Siguiente"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
          </button>

          <span className="pm-lb-counter">{lightboxIndex + 1} / {allImages.length}</span>
        </div>
      )}
    </>
  );
}
