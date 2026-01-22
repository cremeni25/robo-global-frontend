// src/pages/Nichos.tsx

export default function Nichos() {
  return (
    <div style={styles.page}>
      {/* ================= HEADER ================= */}
      <header style={styles.header}>
        <div style={styles.headerContainer}>
          <div style={styles.logo}>Robô Global</div>

          <nav style={styles.nav}>
            <a href="/" style={styles.navLink}>Início</a>
            <a href="/nichos" style={{ ...styles.navLink, ...styles.active }}>
              Nichos
            </a>
            <a href="/contextos" style={styles.navLink}>Contextos</a>
            <a href="/sobre" style={styles.navLink}>Sobre</a>
          </nav>

          <div style={styles.lang}>
            <span style={styles.langItem}>PT</span>
            <span style={styles.langDivider}>|</span>
            <span style={styles.langItemMuted}>EN</span>
          </div>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section style={styles.hero}>
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          alt="Pessoas em diferentes contextos"
          style={styles.heroImage}
        />

        <div style={styles.heroOverlay}>
          <div style={styles.heroContent}>
            <h1 style={styles.heroTitle}>
              Cada pessoa vive um contexto diferente
            </h1>
            <p style={styles.heroText}>
              O Robô Global observa padrões de vida, decisões recorrentes e
              situações reais enfrentadas por pessoas comuns. Aqui, nichos não
              são rótulos — são <strong>contextos humanos</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONTEÚDO ================= */}
      <main style={styles.container}>
        <section>
          <h2 style={styles.sectionTitle}>Contextos observados</h2>
          <p style={styles.sectionSubtitle}>
            Situações recorrentes onde clareza, organização e leitura de cenário
            fazem diferença antes do próximo passo.
          </p>

          {/* ===== CONTEXTO 1 ===== */}
          <div style={styles.contextRow}>
            <img
              src="https://images.unsplash.com/photo-1520975922284-9a8d56f1f7b4"
              alt="Pessoa reorganizando a vida"
              style={styles.contextImage}
            />
            <div style={styles.contextText}>
              <h3 style={styles.contextTitle}>
                Pessoas reorganizando a própria vida
              </h3>
              <p style={styles.contextDescription}>
                Mudanças pessoais, recomeços, transições de fase e decisões que
                exigem mais clareza antes do próximo movimento.
              </p>
            </div>
          </div>

          {/* ===== CONTEXTO 2 ===== */}
          <div style={{ ...styles.contextRow, ...styles.reverse }}>
            <img
              src="https://images.unsplash.com/photo-1504151932400-72d4384f04b3"
              alt="Família e responsabilidades"
              style={styles.contextImage}
            />
            <div style={styles.contextText}>
              <h3 style={styles.contextTitle}>
                Famílias lidando com múltiplas responsabilidades
              </h3>
              <p style={styles.contextDescription}>
                Organização do dia a dia, equilíbrio entre obrigações e decisões
                que impactam mais de uma pessoa ao mesmo tempo.
              </p>
            </div>
          </div>

          {/* ===== CONTEXTO 3 ===== */}
          <div style={styles.contextRow}>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
              alt="Ambiente profissional"
              style={styles.contextImage}
            />
            <div style={styles.contextText}>
              <h3 style={styles.contextTitle}>
                Pessoas em ambientes profissionais
              </h3>
              <p style={styles.contextDescription}>
                Pressão por desempenho, escolhas estratégicas e necessidade de
                compreender melhor o cenário antes de agir.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

/* ================= STYLES ================= */

const styles: { [key: string]: React.CSSProperties } = {
  page: {
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
    color: "#0f172a",
    backgroundColor: "#ffffff",
  },

  /* Header */
  header: {
    borderBottom: "1px solid #e5e7eb",
    backgroundColor: "#ffffff",
  },
  headerContainer: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "16px 24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    fontWeight: 700,
    fontSize: "18px",
  },
  nav: {
    display: "flex",
    gap: "24px",
  },
  navLink: {
    textDecoration: "none",
    color: "#334155",
    fontSize: "15px",
  },
  active: {
    fontWeight: 600,
  },
  lang: {
    fontSize: "14px",
  },
  langItem: {
    fontWeight: 600,
  },
  langItemMuted: {
    color: "#94a3b8",
  },
  langDivider: {
    margin: "0 6px",
    color: "#cbd5f5",
  },

  /* Hero */
  hero: {
    position: "relative",
    width: "100%",
    height: "420px",
    overflow: "hidden",
  },
  heroImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  heroOverlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(90deg, rgba(15,23,42,0.75) 0%, rgba(15,23,42,0.25) 60%, rgba(15,23,42,0) 100%)",
    display: "flex",
    alignItems: "center",
  },
  heroContent: {
    maxWidth: "1200px",
    padding: "0 24px",
    margin: "0 auto",
    color: "#ffffff",
  },
  heroTitle: {
    fontSize: "40px",
    maxWidth: "520px",
    marginBottom: "16px",
  },
  heroText: {
    fontSize: "17px",
    maxWidth: "520px",
    lineHeight: 1.6,
  },

  /* Main */
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "64px 24px",
  },
  sectionTitle: {
    fontSize: "28px",
    marginBottom: "8px",
  },
  sectionSubtitle: {
    color: "#475569",
    marginBottom: "48px",
  },

  /* Context rows */
  contextRow: {
    display: "flex",
    alignItems: "center",
    gap: "48px",
    marginBottom: "64px",
  },
  reverse: {
    flexDirection: "row-reverse",
  },
  contextImage: {
    width: "420px",
    height: "260px",
    objectFit: "cover",
    borderRadius: "12px",
    flexShrink: 0,
  },
  contextText: {
    maxWidth: "520px",
  },
  contextTitle: {
    fontSize: "22px",
    marginBottom: "12px",
  },
  contextDescription: {
    color: "#334155",
    lineHeight: 1.6,
  },
};
