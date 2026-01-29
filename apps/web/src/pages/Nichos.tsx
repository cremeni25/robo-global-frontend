// src/pages/Nichos.tsx

import { useLanguage } from "../contexts/LanguageContext";
import pt from "../i18n/pt";
import en from "../i18n/en";
import es from "../i18n/es";

const dictionaries: any = { pt, en, es };

const colors = [
  "#5FA777",
  "#E39C4A",
  "#4C78A8",
  "#8B6FAF",
  "#6C7A89",
  "#8C6B58",
  "#3F8F6B",
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
      <section style={styles.hero}>
        <p style={styles.heroLine}>
          Nichos organizam contextos humanos observáveis.
        </p>

        <p style={styles.heroLineNoBreak}>
          Eles não rotulam pessoas — apenas ajudam a reconhecer cenários recorrentes.
        </p>

        <p style={styles.heroLine}>
          {dict.home.nichesTitle}
        </p>
      </section>

      <main style={styles.grid}>
        {nicheList.map((niche: any, i: number) => (
          <div
            key={i}
            style={{
              ...styles.balloon,
              borderColor: colors[i],
            }}
          >
            <div
              style={{
                ...styles.balloonHeader,
                background: colors[i],
              }}
            >
              {niche.title.toUpperCase()}
            </div>

            <ul style={styles.subList}>
              {niche.sub.map((item: string, idx: number) => (
                <li key={idx} style={styles.subItem}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </main>

      <footer style={styles.footer}>{dict.footer}</footer>
    </div>
  );
}

const styles: any = {
  hero: {
    maxWidth: 900,
    margin: "80px auto 40px",
    textAlign: "center",
  },

  heroLine: {
    fontFamily: "Arial Black, Arial, sans-serif",
    fontSize: 32,
    marginBottom: 10,
  },

  heroLineNoBreak: {
    fontFamily: "Arial Black, Arial, sans-serif",
    fontSize: 32,
    marginBottom: 10,
    whiteSpace: "nowrap",
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
    background: "#ffffff",
    border: "3px solid",
    overflow: "hidden",
    boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
  },

  balloonHeader: {
    padding: "18px 20px",
    color: "#fff",
    fontWeight: 800,
    fontSize: 16,
    letterSpacing: 1,
  },

  subList: {
    listStyle: "none",
    padding: "18px 22px 22px",
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },

  subItem: {
    padding: "8px 10px",
    borderRadius: 10,
    background: "#F3F4F6",
    fontSize: 15,
  },

  footer: {
    textAlign: "center",
    padding: 32,
    opacity: 0.6,
  },
};
