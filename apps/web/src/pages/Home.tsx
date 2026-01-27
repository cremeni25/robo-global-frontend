export default function Home() {
  return (
    <>
      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.heroContainer}>
          <header style={styles.topBar}>
            <div style={styles.brand}>
              <span style={styles.brandMark}>RG</span>
              <span style={styles.brandText}>RoboGlobal™ by CREMENI</span>
            </div>

            <nav style={styles.nav}>
              <span style={{ ...styles.navItem, background: "#0B2A4A" }}>Home</span>
              <span style={{ ...styles.navItem, background: "#3A7CA5" }}>Nichos</span>
              <span style={{ ...styles.navItem, background: "#4A4A4A" }}>Dores</span>
              <span style={{ ...styles.navItem, background: "#7A7A7A" }}>Sobre</span>
            </nav>

            <div style={styles.lang}>PT</div>
          </header>

          <div style={styles.heroGrid}>
            <div>
              <h1 style={styles.heroTitle}>
                Um caminho claro para resolver o que hoje te incomoda.
              </h1>

              <p style={styles.heroSubtitle}>
                Aqui você não encontra promessas nem atalhos.  
                Encontra orientação para reconhecer sua situação e seguir por
                caminhos que façam sentido para a sua realidade.
              </p>

              <div style={styles.pillGroup}>
                <span style={{ ...styles.pill, background: "#E6EDF3" }}>Clareza</span>
                <span style={{ ...styles.pill, background: "#D6E4EF" }}>Direção</span>
                <span style={{ ...styles.pill, background: "#C6DBEB" }}>Confiança</span>
              </div>
            </div>

            <div style={styles.heroVisual}>
              <div style={styles.watermark}>RG</div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCO DE RECONHECIMENTO */}
      <section style={styles.sectionAlt}>
        <div style={styles.sectionGrid}>
          <div>
            <h2 style={styles.sectionTitle}>
              Pessoas diferentes vivem desafios diferentes.
            </h2>

            <p style={styles.sectionText}>
              Antes de qualquer escolha, o passo mais importante é reconhecer
              onde você está agora. A partir disso, fica mais simples seguir um
              caminho coerente e responsável.
            </p>
          </div>

          <div style={styles.symbolGrid}>
            <div style={styles.symbolCard}>Equilíbrio</div>
            <div style={styles.symbolCard}>Organização</div>
            <div style={styles.symbolCard}>Direcionamento</div>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Como funciona</h2>

        <div style={styles.steps}>
          <div style={styles.step}>
            <span style={styles.stepNumber}>1</span>
            <p>Você escolhe a área da sua vida que deseja melhorar</p>
          </div>

          <div style={styles.step}>
            <span style={styles.stepNumber}>2</span>
            <p>Identifica a situação que mais se parece com a sua</p>
          </div>

          <div style={styles.step}>
            <span style={styles.stepNumber}>3</span>
            <p>É conduzido a um conteúdo que pode ajudar</p>
          </div>
        </div>
      </section>

      {/* TRANSIÇÃO */}
      <section style={styles.transition}>
        <p style={styles.transitionText}>
          O primeiro passo não é resolver tudo.  
          É escolher por onde começar.
        </p>
      </section>

      {/* NICHOS – CONVERSÃO DO HOME */}
      <section style={styles.sectionAlt}>
        <h2 style={styles.sectionTitle}>
          Escolha a área que mais faz sentido para você agora
        </h2>

        <div style={styles.niches}>
          <div style={styles.nicheCard}>
            <span style={styles.nicheIcon}>💰</span>
            <h3>Organização Financeira</h3>
            <p>Lidar melhor com dinheiro, gastos e planejamento.</p>
          </div>

          <div style={styles.nicheCard}>
            <span style={styles.nicheIcon}>🧠</span>
            <h3>Saúde e bem-estar</h3>
            <p>Buscar equilíbrio, disposição e qualidade de vida.</p>
          </div>

          <div style={styles.nicheCard}>
            <span style={styles.nicheIcon}>🏃</span>
            <h3>Corpo e desempenho</h3>
            <p>Cuidar do corpo, energia e capacidade física.</p>
          </div>

          <div style={styles.nicheCard}>
            <span style={styles.nicheIcon}>⏱️</span>
            <h3>Organização e foco</h3>
            <p>Ter mais clareza, controle e produtividade.</p>
          </div>
        </div>
      </section>
    </>
  );
}

/* =========================
   ESTILOS — PADRÃO MÃE
   ========================= */

const styles: Record<string, React.CSSProperties> = {
  hero: {
    background: "#FFFFFF",
    padding: "48px 0 72px",
  },
  heroContainer: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "0 24px",
  },
  topBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 48,
  },
  brand: {
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
  brandMark: {
    width: 36,
    height: 36,
    borderRadius: "50%",
    background: "#0B2A4A",
    color: "#FFF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
  },
  brandText: {
    fontSize: 14,
    color: "#2E2E2E",
  },
  nav: {
    display: "flex",
    gap: 10,
  },
  navItem: {
    padding: "6px 14px",
    borderRadius: 20,
    color: "#FFF",
    fontWeight: 700,
    fontSize: 14,
    cursor: "pointer",
  },
  lang: {
    border: "1px solid #CCC",
    borderRadius: 6,
    padding: "4px 8px",
    fontSize: 13,
  },
  heroGrid: {
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
    color: "#2E2E2E",
    lineHeight: 1.6,
    maxWidth: 560,
  },
  pillGroup: {
    display: "flex",
    gap: 12,
    marginTop: 28,
  },
  pill: {
    padding: "8px 18px",
    borderRadius: 24,
    fontSize: 14,
    fontWeight: 600,
  },
  heroVisual: {
    position: "relative",
    height: 260,
    background: "#F4F6F8",
    borderRadius: 12,
  },
  watermark: {
    position: "absolute",
    right: 24,
    bottom: 24,
    fontSize: 96,
    fontWeight: 700,
    color: "rgba(11,42,74,0.08)",
  },
  section: {
    padding: "72px 24px",
    maxWidth: 1200,
    margin: "0 auto",
  },
  sectionAlt: {
    padding: "72px 24px",
    background: "#F4F6F8",
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: 700,
    color: "#0B2A4A",
    marginBottom: 24,
  },
  sectionText: {
    fontSize: 16,
    lineHeight: 1.6,
    maxWidth: 640,
    color: "#2E2E2E",
  },
  sectionGrid: {
    maxWidth: 1200,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 48,
  },
  symbolGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 16,
  },
  symbolCard: {
    background: "#FFF",
    borderRadius: 12,
    padding: 24,
    textAlign: "center",
    fontWeight: 600,
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
    display: "inline-block",
    width: 36,
    height: 36,
    borderRadius: "50%",
    background: "#0B2A4A",
    color: "#FFF",
    fontWeight: 700,
    marginBottom: 12,
    lineHeight: "36px",
  },
  transition: {
    background: "#0B2A4A",
    padding: "56px 24px",
    textAlign: "center",
  },
  transitionText: {
    color: "#FFF",
    fontSize: 20,
    maxWidth: 720,
    margin: "0 auto",
    lineHeight: 1.5,
  },
  niches: {
    maxWidth: 1200,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: 32,
  },
  nicheCard: {
    background: "#FFF",
    borderRadius: 14,
    padding: 32,
    border: "1px solid #E0E4E8",
  },
  nicheIcon: {
    fontSize: 28,
    display: "block",
    marginBottom: 12,
  },
};
