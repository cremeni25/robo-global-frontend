import { useNavigate } from "react-router-dom";
import { t } from "../i18n";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.heroContainer}>
          <div>
            <h1 style={styles.heroTitle}>{t("home.title")}</h1>

            <p style={styles.heroSubtitle}>{t("home.subtitle")}</p>

            <div style={styles.pills}>
              {t("home.pillars.0") && (
                <>
                  <span style={styles.pill}>{t("home.pillars.0")}</span>
                  <span style={styles.pill}>{t("home.pillars.1")}</span>
                  <span style={styles.pill}>{t("home.pillars.2")}</span>
                </>
              )}
            </div>
          </div>

          <div style={styles.imageWrapper}>
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="Decision moment"
              style={styles.image}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={styles.section}>
        <button style={styles.cta} onClick={() => navigate("/nichos")}>
          {t("nav.nichos")}
        </button>
      </section>
    </>
  );
}

const styles: Record<string, React.CSSProperties> = {
  hero: { padding: "72px 24px" },
  heroContainer: {
    maxWidth: 1200,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1.2fr 0.8fr",
    gap: 48,
    alignItems: "center",
  },
  heroTitle: {
    fontSize: 42,
    fontWeight: 700,
    color: "#0B2A4A",
    marginBottom: 20,
  },
  heroSubtitle: {
    fontSize: 18,
    lineHeight: 1.6,
    color: "#2E2E2E",
  },
  pills: { display: "flex", gap: 12, marginTop: 28 },
  pill: {
    background: "#E6EDF3",
    padding: "8px 18px",
    borderRadius: 24,
    fontWeight: 600,
  },
  imageWrapper: { borderRadius: 14, overflow: "hidden" },
  image: { width: "100%", height: "100%", objectFit: "cover" },
  section: { textAlign: "center", padding: 48 },
  cta: {
    padding: "14px 28px",
    borderRadius: 28,
    border: "none",
    background: "#0B2A4A",
    color: "#FFF",
    fontWeight: 600,
    cursor: "pointer",
  },
};
