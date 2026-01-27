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

          {/* IMAGEM */}
          <div style={styles.imageWrapper}>
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="Pessoa analisando caminhos e decisões"
              style={styles.image}
            />
          </div>
        </div>
      </section>

      {/* FRASE SOLTA */}
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
