export default function Home() {
  return (
    <>
      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.heroGrid}>
          <div>
            <h1 style={styles.heroTitle}>
              Automação inteligente para decisões melhores.
            </h1>

            <p style={styles.heroSubtitle}>
              Tecnologia que organiza informações, reduz incertezas e apoia
              escolhas mais conscientes — para pessoas, profissionais e
              organizações.
            </p>

            <div style={styles.badges}>
              <span style={styles.badge}>Clareza</span>
              <span style={styles.badge}>Controle</span>
              <span style={styles.badge}>Evolução contínua</span>
            </div>
          </div>

          {/* Imagem abstrata institucional (placeholder visual) */}
          <div style={styles.heroImage}>
            <div style={styles.imagePlaceholder}>
              Visual institucional abstrato
            </div>
          </div>
        </div>
      </section>

      {/* PARA QUEM É */}
      <section style={styles.sectionAlt}>
        <h2 style={styles.sectionTitle}>
          Projetado para diferentes realidades.
        </h2>

        <p style={styles.sectionText}>
          O Robô Global foi pensado para atender pessoas comuns, profissionais
          técnicos, atletas e parceiros, respeitando diferentes níveis de
          conhecimento e objetivos.
        </p>

        <div style={styles.cards}>
          <div style={styles.card}>Pessoas físicas</div>
          <div style={styles.card}>Profissionais técnicos</div>
          <div style={styles.card}>Atletas e equipes</div>
          <div style={styles.card}>Empreendedores e parceiros</div>
        </div>
      </section>

      {/* O QUE FAZ */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>O que o Robô Global faz</h2>

        <ul style={styles.list}>
          <li>Organiza informações relevantes</li>
          <li>Analisa padrões de forma contínua</li>
          <li>Apoia decisões com base em dados</li>
          <li>Reduz dependência de tentativa e erro</li>
        </ul>
      </section>

      {/* CONFIANÇA */}
      <section style={styles.trust}>
        <h2 style={styles.trustTitle}>
          Tecnologia deve gerar segurança, não confusão.
        </h2>

        <p style={styles.trustText}>
          O Robô Global foi desenvolvido com foco em clareza, ética operacional e
          previsibilidade. Cada funcionalidade existe para simplificar processos
          e apoiar decisões responsáveis.
        </p>
      </section>

      {/* CONTINUIDADE */}
      <section style={styles.section}>
        <p style={styles.sectionText}>
          Explore as áreas de Nichos e Dores para entender como a plataforma se
          adapta a diferentes contextos e necessidades.
        </p>
      </section>
    </>
  );
}

/* =======================
   ESTILOS (FIDELITY-LIKE)
   ======================= */

const styles: Record<string, React.CSSProperties> = {
  hero: {
    padding: "64px 0",
  },
  heroGrid: {
    display: "grid",
    gridTemplateColumns: "1.2fr 0.8fr",
    gap: 48,
    alignItems: "center",
  },
  heroTitle: {
    fontSize: 40,
    fontWeight: 600,
    color: "#0B2A4A",
    marginBottom: 16,
  },
  heroSubtitle: {
    fontSize: 18,
    color: "#2E2E2E",
    lineHeight: 1.6,
    maxWidth: 560,
  },
  badges: {
    display: "flex",
    gap: 12,
    marginTop: 24,
  },
  badge: {
    border: "1px solid #E0E4E8",
    borderRadius: 20,
    padding: "6px 14px",
    fontSize: 14,
    color: "#2E2E2E",
    background: "#FFFFFF",
  },
  heroImage: {
    display: "flex",
    justifyContent: "center",
  },
  imagePlaceholder: {
    width: "100%",
    height: 220,
    borderRadius: 8,
    background: "#F4F6F8",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#8A8A8A",
    fontSize: 14,
  },
  section: {
    padding: "64px 0",
  },
  sectionAlt: {
    padding: "64px 0",
    background: "#F4F6F8",
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: 600,
    color: "#0B2A4A",
    marginBottom: 16,
  },
  sectionText: {
    fontSize: 16,
    color: "#2E2E2E",
    maxWidth: 720,
    lineHeight: 1.6,
    marginBottom: 32,
  },
  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 24,
  },
  card: {
    background: "#FFFFFF",
    border: "1px solid #E0E4E8",
    borderRadius: 8,
    padding: 24,
    textAlign: "center",
    fontSize: 15,
    color: "#2E2E2E",
  },
  list: {
    fontSize: 16,
    color: "#2E2E2E",
    lineHeight: 2,
    maxWidth: 600,
    paddingLeft: 20,
  },
  trust: {
    padding: "64px 0",
    background: "#0B2A4A",
    color: "#FFFFFF",
    textAlign: "center",
  },
  trustTitle: {
    fontSize: 28,
    fontWeight: 600,
    marginBottom: 16,
  },
  trustText: {
    fontSize: 16,
    lineHeight: 1.6,
    maxWidth: 720,
    margin: "0 auto",
    color: "#E6EDF3",
  },
};
