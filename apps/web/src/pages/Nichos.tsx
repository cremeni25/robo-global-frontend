// src/pages/Nichos.tsx

import { useEffect, useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import pt from "../i18n/pt";
import en from "../i18n/en";
import es from "../i18n/es";

import { useNavigate } from "react-router-dom";
import { navigateToDores } from "../navigation/goToDores";

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

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

export default function Nichos() {
  const { lang } = useLanguage();
  const dict = dictionaries[lang];
  const navigate = useNavigate();

  const [nichos, setNichos] = useState<any[]>([]);

  useEffect(() => {
    async function carregarNichos() {
      try {
        const res = await fetch(
          `${SUPABASE_URL}/robo_global.nichos?select=*`,
          {
            headers: {
              apikey: SUPABASE_ANON_KEY,
              Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
            },
          }
        );

        const json = await res.json();

        if (Array.isArray(json)) {
          setNichos(json);
        }
      } catch (e) {
        console.error("Erro ao carregar nichos do Supabase", e);
      }
    }

    carregarNichos();
  }, []);

  return (
    <div style={{ width: "100%", backgroundColor: "#F9FAFB" }}>
      <section style={styles.hero}>
        <p style={styles.heroCall}>
          {dict.home.nichesTitle.replace(" agora", "") + ":"}
        </p>
      </section>

      <div style={styles.grid}>
        {nichos.map((niche: any, i: number) => (
          <EditorialCard
            key={niche.id}
            niche={niche}
            color={colors[i % colors.length]}
            navigate={navigate}
          />
        ))}
      </div>

      <footer style={styles.footer}>{dict.footer}</footer>
    </div>
  );
}

function EditorialCard({ niche, color, navigate }: any) {
  const imageUrl = "https://placehold.co/600x400";

  return (
    <div style={styles.card}>
      <div style={styles.imageWrap}>
        <img src={imageUrl} style={styles.image} />
      </div>

      <div style={{ ...styles.cardBody, borderColor: color }}>
        <div style={{ ...styles.cardHeader, background: color }}>
          {String(niche.title).toUpperCase()}
        </div>

        <ul style={styles.subList}>
          <li style={styles.subItem}>
            <button
              style={styles.button}
              onClick={() =>
                navigateToDores(navigate, {
                  niche: niche.slug,
                  index: 0,
                })
              }
            >
              {niche.description}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

const styles: any = {
  hero: {
    maxWidth: 1200,
    margin: "30px auto 20px",
    textAlign: "center",
  },

  heroCall: {
    fontFamily: "Arial Black, Arial, sans-serif",
    fontSize: 40,
    fontWeight: 900,
  },

  grid: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "0 16px 80px",
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: 40,
  },

  card: {
    borderRadius: 26,
    overflow: "hidden",
    background: "#fff",
    boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
  },

  imageWrap: {
    width: "100%",
    height: 260,
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  cardBody: {
    borderTop: "3px solid",
  },

  cardHeader: {
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
    borderRadius: 10,
    background: "#F3F4F6",
  },

  button: {
    width: "100%",
    padding: "10px 12px",
    border: "none",
    background: "transparent",
    fontSize: 15,
    textAlign: "left",
    cursor: "pointer",
  },

  footer: {
    textAlign: "center",
    padding: 32,
    opacity: 0.6,
  },
};
