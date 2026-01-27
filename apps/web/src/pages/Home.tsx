export default function Home() {
  return (
    <>
      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.heroGrid}>
          <div>
            <h1 style={styles.heroTitle}>
              Um caminho claro para resolver o que hoje te incomoda.
            </h1>

            <p style={styles.heroSubtitle}>
              Aqui você encontra direcionamento. Não promessas, não atalhos —
              apenas caminhos que fazem sentido para a sua realidade.
            </p>

            <div style={styles.badges}>
              <span style={styles.badge}>Clareza</span>
              <span style={styles.badge}>Direção</span>
              <span style={styles.badge}>Confiança</span>
            </div>
          </div>

          {/* Imagem institucional abstrata */}
          <div style={styles.heroImage}>
            <img
              src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a"
              alt="Imagem institucional abstrata"
              style={styles.image}
            />
          </div>
        </div>
      </section>

      {/* BLOCO DE CONTEXTO */}
      <section style={styles.sectionAlt}>
        <h2 style={styles.sectionTitle}>
          Pessoas diferentes. Situações diferentes.
        </h2>

        <p style={styles.sectionText}>
          Cada pessoa enfrenta desafios em áreas distintas da vida. O primeiro
          passo não é comprar algo — é entender onde você está e para onde faz
          sentido seguir.
        </p>
      </section>

      {/* BLOCO DE FUNCIONAMENTO (SEM EXPLICAR SISTEMA) */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Como funciona</h2>

        <ul style={styles.list}>
          <li>Você escolhe a área que deseja melhorar</li>
          <li>Identifica a situação que mais se parece com a sua</li>
          <li>É direcionado para um conteúdo que pode ajudar</li>
        </ul>
      </section>

      {/* BLOCO DE CONFIANÇA */}
      <section style={styles.trust}>
        <h2 style={styles.trustTitle}>
          Decidir bem começa por entender o problema certo.
        </h2>

        <p style={styles.trustText}>
          Este espaço foi criado para conduzir pessoas a soluções de forma
          simples, responsável e transparente — respeitando diferentes perfis,
          níveis de conhecimento e momentos de vida.
        </p>
      </section>

      {/* CONTINUIDADE */}
      <section style={styles.section}>
        <p style={styles.sectionText}>
          Quando estiver pronto, avance e escolha a área que mais faz sentido
          para você agora.
        </p>
      </section>
    </>
  );
}

/* =========================
   ESTILOS — VERSÃO A (IMAGENS)
   ========================= */

const styles: Record<string, React.CSSProperties> = {
  hero: {
    padding: "72px 0",
    background: "#FFFFFF",
  },
  heroGrid: {
    display: "grid",
    gridTemplateColumns: "1.1fr 0.9fr",
    gap: 48,
    alignItems: "center",
  },
  heroTitle: {
    fontSize: 42,
    fontWeight: 600,
    color: "#0B2A4A",
    marginBottom: 20,
    lineHeight: 1.2,
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
    marginTop: 28,
  },
  badge: {
    border: "1px solid #D9DEE3",
    borderRadius: 20,
    padding: "6px 16px",
    fontSize: 14,
    background: "#F9FAFB",
    color: "#2E2E2E",
  },
  heroImage: {
    width: "100%",
    borderRadius: 12,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "260px",
    objectFit: "cover",
    filter: "grayscale(10%)",
  },
  section: {
    padding: "64px 0",
    background: "#FFFFFF",
  },
  sectionAlt: {
    padding: "64px 0",
    background: "#F4F6F8",
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: 600,
    color: "#0B2A4A",
    marginBottom: 16,
  },
  sectionText: {
    fontSize: 16,
    color: "#2E2E2E",
    lineHeight: 1.6,
    maxWidth: 760,
  },
  list: {
    fontSize: 16,
    color: "#2E2E2E",
    lineHeight: 2,
    paddingLeft: 20,
    maxWidth: 600,
  },
  trust: {
    padding: "72px 0",
    background: "#0B2A4A",
    color: "#FFFFFF",
    textAlign: "center",
  },
  trustTitle: {
    fontSize: 30,
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
