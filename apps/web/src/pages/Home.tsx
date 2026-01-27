import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* HEADER ÚNICO */}
      <header style={styles.header}>
        <div style={styles.headerContainer}>
          <div style={styles.brand}>
            <div style={styles.rg}>RG</div>
          </div>

          <nav style={styles.nav}>
            <button style={{ ...styles.navItem, background: "#0B2A4A" }} onClick={() => navigate("/")}>
              Lar
            </button>
            <button style={{ ...styles.navItem, background: "#3A7CA5" }} onClick={() => navigate("/nichos")}>
              Nichos
            </button>
            <button style={{ ...styles.navItem, background: "#4A4A4A" }} onClick={() => navigate("/dores")}>
              Dores
            </button>
            <button style={{ ...styles.navItem, background: "#7A7A7A" }} onClick={() => navigate("/sobre")}>
              Sobre
            </button>
          </nav>

          <div style={styles.lang}>PT</div>
        </div>
      </header>

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

          <div style={styles.visual} />
        </div>
      </section>

      {/* CITAÇÃO */}
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
            <span style={styles.nicheIcon}>💰</span>
            <h3>Organização Financeira</h3>
            <p>Controle, planejamento e decisões mais seguras.</p>
          </div>

          <div style={styles.nicheCard} onClick={() => navigate("/nichos?area=saude")}>
            <span style={styles.nicheIcon}>🧠</span>
            <h3>Saúde e Bem-estar</h3>
            <p>Equilíbrio emocional, físico e mental.</p>
          </div>

          <div style={styles.nicheCard} onClick={() => navigate("/nichos?area=desempenho")}>
            <span style={styles.nicheIcon}>🏃</span>
            <h3>Corpo e Desempenho</h3>
            <p>Energia, foco e evolução pessoal.</p>
          </div>

          <div style={styles.nicheCard} onClick={() => navigate("/nichos?area=organizacao")}>
            <span style={styles.nicheIcon}>⏱️</span>
            <h3>Organização e Foco</h3>
            <p>Mais clareza, menos sobrecarga.</p>
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

/* =========================
   ESTILOS — PADRÃO MÃE
   ========================= */

const styles: Record<string, React.CSSProperties> = {
  header: {
    background: "#FFFFFF",
    borderBottom: "1px solid #E6E6E6",
  },
  headerContainer: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "16px 24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  brand: {
    display: "flex",
    alignItems: "center",
  },
  rg: {
    fontSize: 64,
    fontWeight: 800,
    color: "#0B2A4A",
    opacity: 0.15,
  },
  nav: {
    display: "flex",
    gap: 12,
  },
  navItem: {
    padding: "8px 18px",
    borderRadius: 20,
    border: "none",
    color: "#FFF",
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
  visual: {
    height: 260,
    background: "#F4F6F8",
    borderRadius: 14,
  },
  quoteSection: {
    padding: "48px 24px",
    textAlign: "center",
  },
  quote: {
    fontSize: 22,
    fontStyle: "italic",
    fontWeight: 600,
    color: "#0B2A4A",
    maxWidth: 720,
    margin: "0 auto",
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
    background: "#FFFFFF",
    borderRadius: 12,
    padding: 32,
    border: "1px solid #E0E4E8",
    textAlign: "center",
  },
  stepNumber: {
    display: "inline-block",
    width: 36,
    height: 36,
    borderRadius: "50%",
    background: "#0B2A4A",
    color: "#FFF",
    fontWeight: 700,
    lineHeight: "36px",
    marginBottom: 12,
  },
  niches: {
    maxWidth: 1200,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: 32,
  },
  nicheCard: {
    background: "#FFFFFF",
    borderRadius: 14,
    padding: 32,
    border: "1px solid #E0E4E8",
    cursor: "pointer",
  },
  nicheIcon: {
    fontSize: 28,
    marginBottom: 12,
    display: "block",
  },
  footer: {
    padding: "24px",
    textAlign: "center",
    borderTop: "1px solid #E6E6E6",
  },
  footerText: {
    fontSize: 12,
    color: "#6A6A6A",
  },
};
