import "./Navbar.css";
import { siteData } from "../data/portfolio";

export default function Navbar() {
  const { nav } = siteData;

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <nav className="navbar__links">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#contacto" className="navbar__cta">
          Contáctame
        </a>
      </div>
    </header>
  );
}
