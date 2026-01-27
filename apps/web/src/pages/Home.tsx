import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* HEADER ÚNICO */}
      <header style={styles.header}>
        <div style={styles.headerContainer}>
          <nav style={styles.nav}>
            <button style={styles.navItem} onClick={() => navigate("/")}>Lar</button>
            <button style={styles.navItem} onClick={() => navigate("/nichos")}>Nichos</button>
            <button style={styles.navItem} onClick={() => navigate("/dores")}>Dores</button>
            <button style={styles.navItem} onClick={() => navigate("/sobre")}>Sobre</button>
          </nav>

          <div style={styles.lang}>PT</div>
        </div>
      </header>

      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.heroContainer}>
          {/* RG – BALÃO AZUL */}
          <div style={styles.rgBubble}>
            <span style={styles.rgText}>RG</span>
          </div>

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
        </div>
      </section>

      {/* FRASE-EIXO */}
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
          <div style={styles.nicheCard} onClick={() => navigate("/nichos?area=financeiro")}>
            💰 Organização Financeira
          </div>

          <div style={styles.nicheCard} onClick={() => navigate("/nichos?area=saude")}>
            🧠 Saúde e Bem-estar
          </div>

          <div style={styles.nicheCard} onClick={() => navigate("/nichos?area=desempenho")}>
            🏃 Corpo e Desempenho
          </div>

          <div style={styles.nicheCard} onClick={() => navigate("/nichos?area=organizacao")}>
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
  header: {
    borderBottom: "1px solid #E6E6E6",
    background: "#FFF",
  },
  headerContainer: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "16px 24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  nav: {
    display: "flex",
    gap: 16,
  },
  navItem: {
    background: "#0B2A4A",
    color: "#FFF",
    border: "none",
    borderRadius: 20,
    padding: "8px 18px",
    fontWeight: 700,
    cursor: "pointer",
  },
  lang: {
    fontSize: 13,
    border: "1px solid #CCC",
    padding: "4px 8px",
    borderRadius: 6,
  },
  hero: {
    padding: "72px 24px",
  },
  heroContainer: {
    maxWidth: 1200,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "0.8fr 1.2fr",
    gap: 48,
    alignItems: "center",
  },
  rgBubble: {
    width: 280,
    height: 280,
    borderRadius: "50%",
    background: "#0B2A4A",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  rgText: {
    fontSize: 96,
    fontWeight: 800,
    color: "#FFF",
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
