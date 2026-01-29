// src/pages/Nichos.tsx

import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import pt from "../i18n/pt";
import en from "../i18n/en";
import es from "../i18n/es";

const dictionaries: any = { pt, en, es };

const colors = [
  "#5FA777", // saúde
  "#E39C4A", // alimentação
  "#4C78A8", // educação
  "#8B6FAF", // relações
  "#6C7A89", // tecnologia
  "#8C6B58", // trabalho
  "#3F8F6B", // finanças
];

export default function Nichos() {
  const { lang } = useLanguage();
  const dict = dictionaries[lang];

  const nicheList = [
    dict.niches.health,
    dict.niches.food,
    dict.niches.education,
    dict.niches.relationships,
    dict.niches.tech,
    dict.niches.work,
    dict.niches.finance,
  ];

  return (
    <div style={{ width: "100%", backgroundColor: "#F9FAFB" }}>
      {/* HEADER */}
      <header style={styles.header}>
        <strong>Robô Global™</strong>

        <nav style={styles.nav}>
          <Link to="/">{dict.nav.home}</Link>
          <Link to="/nichos">{dict.nav.niches}</Link>
          <Link to="/contextos">{dict.nav.pains}</Link>
          <Link to="/sobre">{dict.nav.about}</Link>
        </nav>
      </header>

      {/* HERO */}
      <section style={styles.hero}>
        <h1 style={styles.title}>{dict.home.nichesTitle}</h1>
        <p style={styles.subtitle}>
          Nichos organizam contextos humanos observáveis. Eles não rotulam
          pessoas — apenas ajudam a reconhecer cenários recorrentes.
        </p>
      </section>

      {/* BALÕES */}
      <main style={styles.grid}>
        {nicheList.map((niche: any, i: number) => (
          <div
            key={i}
            style={{
              ...styles.balloon,
              background: colors[i],
            }}
          >
            <h3 style={styles.balloonTitle}>{niche.title}</h3>

            <ul style={styles.balloonList}>
              {niche.sub.map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </main>

      {/* FOOTER */}
      <footer style={styles.footer}>{dict.footer}</footer>
    </div>
  );
}

const styles: any = {
  header: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "24px 16px",
    display: "flex",
    justifyContent: "space-between",
  },

  nav: {
    display: "flex",
    gap: 24,
  },

  hero: {
    maxWidth: 900,
    margin: "80px auto 40px",
    textAlign: "center",
  },

  title: {
    fontSize: 42,
    fontWeight: 700,
    marginBottom: 16,
  },

  subtitle: {
    fontSize: 18,
    opacity: 0.8,
  },

  grid: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "40px 16px 80px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: 28,
  },

  balloon: {
    borderRadius: 28,
    padding: 28,
    color: "#fff",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
  },

  balloonTitle: {
    fontSize: 20,
    fontWeight: 700,
    marginBottom: 12,
  },

  balloonList: {
    paddingLeft: 18,
    lineHeight: 1.6,
  },

  footer: {
    textAlign: "center",
    padding: 32,
    opacity: 0.6,
  },
};
