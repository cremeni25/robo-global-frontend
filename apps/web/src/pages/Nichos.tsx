// src/pages/Nichos.tsx

import { useLanguage } from "../contexts/LanguageContext";
import pt from "../i18n/pt";
import en from "../i18n/en";
import es from "../i18n/es";

import healthImg from "../assets/Nichos/health.jpg";

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

const images = [healthImg, null, null, null, null, null, null];

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
        <p style={styles.heroCall}>
          {dict.home.nichesTitle.replace(" agora", "") + ":"}
        </p>
      </section>

      <div style={styles.flow}>
        {nicheList.map((niche: any, i: number) => (
          <NarrativeBlock
            key={i}
            niche={niche}
            color={colors[i]}
            image={images[i]}
            reverse={i % 2 !== 0}
          />
        ))}
      </div>

      <footer style={styles.footer}>{dict.footer}</footer>
    </div>
  );
}

function NarrativeBlock({ niche, color, image, reverse }: any) {
  return (
    <div
      style={{
        ...styles.block,
        flexDirection: reverse ? "row-reverse" : "row",
      }}
    >
      {image && <img src={image} style={styles.image} />}

      <div style={{ ...styles.balloon, borderColor: color }}>
        <div style={{ ...styles.balloonHeader, background: color }}>
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
    </div>
  );
}

const styles: any = {
  hero: {
    maxWidth: 1200,
    margin: "80px auto 40px",
    textAlign: "center",
  },

  heroCall: {
    fontFamily: "Arial Black, Arial, sans-serif",
    fontSize: 40,
    fontWeight: 900,
  },

  flow: {
    display: "flex",
    flexDirection: "column",
    gap: 60,
    padding: "0 16px 80px",
  },

  block: {
    maxWidth: 1200,
    margin: "0 auto",
    display: "flex",
    gap: 30,
    alignItems: "stretch",
  },

  image: {
    width: 280,
    height: 220,
    objectFit: "cover",
    borderRadius: 20,
  },

  balloon: {
    flex: 1,
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
