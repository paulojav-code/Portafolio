import "./ServicesContact.css";
import { siteData } from "../data/portfolio";

const serviceIcons = [
  <svg key="prod" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M12 2l8 4.5v9L12 20l-8-4.5v-9L12 2z" />
    <path d="M12 11l8-4.5M12 11v9M12 11L4 6.5" />
  </svg>,
  <svg key="brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M4 20l6-14 4 8 4-5 2 11" />
  </svg>,
  <svg key="dev" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <rect x="3" y="4" width="18" height="12" rx="1.5" />
    <path d="M9 20h6M12 16v4" />
  </svg>,
];

export default function ServicesContact() {
  const { contactInfo, quote, quoteDesc, stats, services } = siteData;

  return (
    <section className="services-contact" id="contacto">
      <div className="wrap">
        {/* Split superior */}
        <div className="services-contact__split">
          <div>
            <p className="eyebrow">{contactInfo.eyebrow}</p>
            <h2>{contactInfo.heading}</h2>
            <p>{contactInfo.description}</p>
            <div className="services-contact__mail">
              <a href={`mailto:${contactInfo.email}`} className="link-arrow">
                {contactInfo.email} →
              </a>
            </div>
          </div>

          <div>
            <h2>{quote}</h2>
            <p>{quoteDesc}</p>
            <div className="stat-row">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="stat-row__num">{s.num}</div>
                  <div className="stat-row__label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tarjetas de servicios */}
        <div className="services-grid" id="servicios">
          {services.map((svc, i) => (
            <div
              key={svc.label}
              className={`service-card${svc.highlighted ? " service-card--highlighted" : ""}`}
            >
              {serviceIcons[i % serviceIcons.length]}
              <h3>{svc.label}</h3>
              <div className="service-card__count">{svc.count}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
