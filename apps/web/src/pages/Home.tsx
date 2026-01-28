import { useNavigate } from "react-router-dom";
import { useI18n } from "../i18n";

export default function Home() {
  const navigate = useNavigate();
  const { t } = useI18n();

  return (
    <>
      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.heroContainer}>
          <div>
            <h1 style={styles.heroTitle}>
              {t("home.hero.title")}
            </h1>

            <p style={styles.heroSubtitle}>
              {t("home.hero.subtitle")}
            </p>

            <div style={styles.pills}>
              <span style={styles.pill}>{t("home.hero.pills.0")}</span>
              <span style={styles.pill}>{t("home.hero.pills.1")}</span>
              <span style={styles.pill}>{t("home.hero.pills.2")}</span>
            </div>
          </div>

          <div style={styles.imageWrapper}>
            <img
              src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70"
              alt="Pessoa refletindo sobre escolhas e caminhos"
              style={styles.image}
            />
          </div>
        </div>
      </section>

      {/* FRASE ÂNCORA */}
      <section style={styles.quoteSection}>
        <p style={styles.quote}>
          {t("home.anchor")}
        </p>
      </section>

      {/* COMO FUNCIONA */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>
          {t("home.howItWorks.title")}
        </h2>

        <div style={styles.steps}>
          <div style={styles.step}>
            <span style={styles.stepNumber}>1</span>
            <p>{t("home.howItWorks.steps.0")}</p>
          </div>

          <div style={styles.step}>
            <span style={styles.stepNumber}>2</span>
            <p>{t("home.howItWorks.steps.1")}</p>
          </div>

          <div style={styles.step}>
            <span style={styles.stepNumber}>3</span>
            <p>{t("home.howItWorks.steps.2")}</p>
          </div>
        </div>
      </section>

      {/* DIRECIONAMENTOS – HOME */}
      <section style={styles.sectionAlt}>
        <h2 style={styles.sectionTitle}>
          {t("home.nichesTitle")}
        </h2>

        <div style={styles.niches}>
          <div
            style={styles.nicheCard}
            onClick={() => navigate("/nichos?area=saude")}
          >
            🌱 {t("home.niches.0")}
          </div>

          <div
            style={styles.nicheCard}
            onClick={() => navigate("/nichos?area=habilidades")}
          >
            🧠 {t("home.niches.1")}
          </div>

          <div
            style={styles.nicheCard}
            onClick={() => navigate("/nichos?area=digital")}
          >
            💻 {t("home.niches.2")}
          </div>

          <div
            style={styles.nicheCard}
            onClick={() => navigate("/nichos?area=vida")}
          >
            🤝 {t("home.niches.3")}
          </div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer style={styles.footer}>
        <p style={styles.footerText}>
          {t("footer")}
        </p>
      </footer>
    </>
  );
}

const styles: Record<string, React.CSSProperties> = {
  hero: {
    padding: "64px 24px",
  },
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
  pills: {
    display: "flex",
    gap: 12,
    marginTop: 24,
  },
  pill: {
    background: "#E6EDF3",
    padding: "8px 18px",
    borderRadius: 24,
    fontWeight: 600,
  },
  imageWrapper: {
    borderRadius: 14,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  quoteSection: {
    padding: "32px 24px",
    textAlign: "center",
  },
  quote: {
    fontSize: 24,
    fontStyle: "italic",
    fontWeight: 600,
    color: "#0B2A4A",
    maxWidth: 900,
    margin: "0 auto",
  },
  section: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "56px 24px",
  },
  sectionAlt: {
    background: "#F4F6F8",
    padding: "64px 24px",
  },
  sectionTitle: {
    fontSize: 26,
    fontWeight: 700,
    color: "#0B2A4A",
    marginBottom: 28,
  },
  steps: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 32,
  },
  step: {
    background: "#FFF",
    border: "1px solid #E0E4E8",
    borderRadius: 12,
    padding: 32,
    textAlign: "center",
  },
  stepNumber: {
    width: 36,
    height: 36,
    borderRadius: "50%",
    background: "#0B2A4A",
    color: "#FFF",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
    fontWeight: 700,
  },
  niches: {
    maxWidth: 1200,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: 24,
  },
  nicheCard: {
    background: "#FFF",
    border: "1px solid #E0E4E8",
    borderRadius: 14,
    padding: 28,
    cursor: "pointer",
    fontWeight: 600,
  },
  footer: {
    borderTop: "1px solid #E6E6E6",
    padding: 24,
    textAlign: "center",
  },
  footerText: {
    fontSize: 12,
    color: "#6A6A6A",
  },
};
