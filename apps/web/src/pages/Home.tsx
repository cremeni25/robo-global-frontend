import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.heroContainer}>
          <div>
            <h1 style={styles.heroTitle}>
              Um caminho claro para resolver o que hoje te incomoda.
            </h1>

            <p style={styles.heroSubtitle}>
              Aqui você não encontra promessas nem atalhos.
              Encontra orientação para reconhecer sua situação e seguir por
              caminhos que façam sentido para a sua realidade.
            </p>

            <div style={styles.pills}>
              <span style={styles.pill}>Clareza</span>
              <span style={styles.pill}>Direção</span>
              <span style={styles.pill}>Confiança</span>
            </div>
          </div>

          {/* IMAGEM RELACIONADA AO TEXTO */}
          <div style={styles.imageWrapper}>
            <img
              src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70"
              alt="Pessoa refletindo sobre escolhas e caminhos"
              style={styles.image}
            />
          </div>
        </div>
      </section>

      {/* FRASE SOLTA */}
      <section style={styles.quoteSection}>
        <p style={styles.quote}>
          “Decidir bem começa por reconhecer o que realmente está te afetando agora.”
        </p>
      </section>

      {/* COMO FUNCIONA */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Como funciona</h2>

        <div style={styles.steps}>
          <div style={styles.step}>
            <span style={styles.stepNumber}>1</span>
            <p>Escolha a área da sua vida que deseja melhorar</p>
          </div>

          <div style={styles.step}>
            <span style={styles.stepNumber}>2</span>
            <p>Identifique a situação que mais se parece com a sua</p>
          </div>

          <div style={styles.step}>
            <span style={styles.stepNumber}>3</span>
            <p>Siga um caminho possível e coerente com sua realidade</p>
          </div>
        </div>
      </section>

      {/* NICHOS – CONVERSÃO */}
      <section style={styles.sectionAlt}>
        <h2 style={styles.sectionTitle}>
          Escolha a área que mais faz sentido para você agora
        </h2>

        <div style={styles.niches}>
          <div
            style={styles.nicheCard}
            onClick={() => navigate("/nichos?area=financeiro")}
          >
            💰 Organização Financeira
          </div>

          <div
            style={styles.nicheCard}
            onClick={() => navigate("/nichos?area=saude")}
          >
            🧠 Saúde e Bem-estar
          </div>

          <div
            style={styles.nicheCard}
            onClick={() => navigate("/nichos?area=desempenho")}
          >
            🏃 Corpo e Desempenho
          </div>

          <div
            style={styles.nicheCard}
            onClick={() => navigate("/nichos?area=organizacao")}
          >
            ⏱️ Organização e Foco
          </div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer style={styles.footer}>
        <p style={styles.footerText}>
          Este produto foi desenvolvido por RoboGlobal™ by CREMENI.
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
