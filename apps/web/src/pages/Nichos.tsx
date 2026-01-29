// src/pages/Nichos.tsx

import { Link } from "react-router-dom";
import i18n from "../i18n"; // ajuste se o caminho for diferente

export default function Nichos() {
  const t = i18n.t.bind(i18n);
  const niches = t("niches", { returnObjects: true }) as any;

  const nicheList = [
    niches.health,
    niches.food,
    niches.education,
    niches.relationships,
    niches.tech,
    niches.work,
    niches.finance,
  ];

  return (
    <div style={{ width: "100%", backgroundColor: "#fff" }}>
      {/* HEADER */}
      <header
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "24px 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <strong>Robô Global™</strong>

        <nav style={{ display: "flex", gap: "24px" }}>
          <Link to="/">{t("nav.home")}</Link>
          <Link to="/nichos">{t("nav.niches")}</Link>
          <Link to="/contextos">{t("nav.pains")}</Link>
          <Link to="/sobre">{t("nav.about")}</Link>
        </nav>

        <div style={{ display: "flex", gap: "8px", fontSize: "14px" }}>
          <span>PT</span> | <span>EN</span> | <span>ES</span>
        </div>
      </header>

      {/* HERO */}
      <section style={{ width: "100%", backgroundColor: "#f5f5f5" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "100px 16px",
          }}
        >
          <h1 style={{ fontSize: "42px", marginBottom: "16px" }}>
            {t("home.nichesTitle")}
          </h1>

          <p style={{ maxWidth: "600px", fontSize: "18px" }}>
            Nichos organizam contextos humanos observáveis. Eles não rotulam
            pessoas — apenas ajudam a reconhecer cenários recorrentes.
          </p>
        </div>
      </section>

      {/* GRID */}
      <main
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "80px 16px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "32px",
          }}
        >
          {nicheList.map((niche: any, i: number) => (
            <div
              key={i}
              style={{
                border: "1px solid #eee",
                borderRadius: "12px",
                padding: "24px",
              }}
            >
              <h3 style={{ marginBottom: "12px" }}>{niche.title}</h3>

              <ul style={{ paddingLeft: "18px", lineHeight: "1.6" }}>
                {niche.sub.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>

      {/* FOOTER */}
      <footer
        style={{
          borderTop: "1px solid #eee",
          padding: "32px 16px",
          textAlign: "center",
          fontSize: "14px",
        }}
      >
        {t("footer")}
      </footer>
    </div>
  );
}
