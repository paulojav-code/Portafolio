import "./ClientStrip.css";
import { siteData } from "../data/portfolio";

export default function ClientStrip() {
  const { clients } = siteData;

  return (
    <div className="strip">
      <div className="strip__inner">
        {clients.map((client) => (
          <span key={client} className="strip__name">
            {client}
          </span>
        ))}
      </div>
    </div>
  );
}
