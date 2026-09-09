import "./BlogTestimonial.css";
import { siteData } from "../data/portfolio";

export default function BlogTestimonial() {
  const { testimonial, posts } = siteData;

  return (
    <section className="blog-section" id="blog">
      <div className="blog-section__grid">
        {/* Columna izquierda: testimonial */}
        <div>
          <p className="eyebrow">Blog</p>
          <h2>¿Qué hay de nuevo? Mi blog y noticias.</h2>

          <div className="testimonial">
            <div className="testimonial__avatar">
              {testimonial.avatar ? (
                <img src={testimonial.avatar} alt={testimonial.name} />
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="8" r="3.4" />
                  <path d="M5 20c1.2-4 4-6 7-6s5.8 2 7 6" />
                </svg>
              )}
            </div>

            <div>
              <div className="testimonial__quote-mark">"</div>
              <blockquote>{testimonial.quote}</blockquote>
              <div>
                <strong className="testimonial__name">{testimonial.name}</strong>
                <span className="testimonial__role">{testimonial.role}</span>
              </div>
            </div>
          </div>

          <div className="dots">
            {[0, 1, 2, 3].map((d) => (
              <i key={d} className={`dots__dot${d === 0 ? " dots__dot--active" : ""}`} />
            ))}
          </div>
        </div>

        {/* Columna derecha: blog */}
        <div className="blog-list">
          {posts.map((post) => (
            <a key={post.title} href={post.href} className="blog-item">
              <span className="blog-item__date">{post.date}</span>
              <h4 className="blog-item__title">{post.title}</h4>
              <span className="blog-item__arrow">→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
