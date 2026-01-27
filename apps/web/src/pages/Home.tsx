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
            <h1 style={styles.heroTitle}>
              {t("home.title")}
            </h1>

            <p style={styles.heroSubtitle}>
              {t("home.subtitle")}
            </p>

            <div style={styles.pills}>
              <span style={styles.pill}>{t("home.pillars.0")}</span>
              <span style={styles.pill}>{t("home.pillars.1")}</span>
              <span style={styles.pill}>{t("home.pillars.2")}</span>
            </div>
          </div>

          <div style={styles.imageWrapper}>
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="Pessoa analisando caminhos e decisões"
              style={styles.image}
            />
          </div>
        </div>
      </section>

      {/* FRASE */}
      <section style={styles.quoteSection}>
        <p style={styles.quote}>
          {t("home.quote")}
        </p>
      </section>

      {/* COMO FUNCIONA */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>
          {t("home.how.title")}
        </h2>

        <div style={styles.steps}>
          <div style={styles.step}>
            <span style={styles.stepNumber}>1</span>
            <p>{t("home.how.steps.0")}</p>
          </div>

          <div style={styles.step}>
            <span style={styles.stepNumber}>2</span>
            <p>{t("home.how.steps.1")}</p>
          </div>

          <div style={styles.step}>
            <span style={styles.stepNumber}>3</span>
            <p>{t("home.how.steps.2")}</p>
          </div>
        </div>
      </section>

      {/* NICHOS */}
      <section style={styles.sectionAlt}>
        <h2 style={styles.sectionTitle}>
          {t("home.niches.title")}
        </h2>

        <div style={styles.niches}>
          <div style={styles.nicheCard} onClick={() => navigate("/nichos?area=financeiro")}>
            💰 {t("home.niches.financeiro")}
          </div>

          <div style={styles.nicheCard} onClick={() => navigate("/nichos?area=saude")}>
            🧠 {t("home.niches.saude")}
          </div>

          <div style={styles.nicheCard} onClick={() => navigate("/nichos?area=desempenho")}>
            🏃 {t("home.niches.desempenho")}
          </div>

          <div style={styles.nicheCard} onClick={() => navigate("/nichos?area=organizacao")}>
            ⏱️ {t("home.niches.organizacao")}
          </div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer style={styles.footer}>
        <p style={styles.footerText}>
          {t("home.footer")}
        </p>
      </footer>
    </>
  );
}

const styles: Record<string, React.CSSProperties> = {
  hero: {
    padding: "72px 24px",
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
    marginTop: 28,
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
    padding: "40px 24px",
    textAlign: "center",
  },
  quote: {
    fontSize: 20,
    fontStyle: "italic",
    fontWeight: 600,
    color: "#0B2A4A",
  },
  section: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "72px 24px",
  },
  sectionAlt: {
    background: "#F4F6F8",
    padding: "72px 24px",
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: 700,
    color: "#0B2A4A",
    marginBottom: 32,
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
