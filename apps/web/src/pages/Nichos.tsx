export default function Nichos() {
  return (
    <main style={{ width: "100%", margin: "0 auto" }}>
      {/* HERO — mesma lógica do Home */}
      <section
        style={{
          width: "100%",
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "120px 24px",
          color: "#ffffff",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          <h1 style={{ fontSize: "48px", marginBottom: "16px" }}>
            Cada pessoa vive um contexto diferente
          </h1>
          <p style={{ fontSize: "18px", maxWidth: "640px", lineHeight: 1.6 }}>
            O Robô Global observa padrões de vida, decisões recorrentes e
            situações reais enfrentadas por pessoas comuns. Aqui, nichos não
            são rótulos — são <strong>contextos humanos</strong>.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "32px", marginBottom: "12px" }}>
            Contextos observados
          </h2>
          <p style={{ fontSize: "16px", maxWidth: "720px", lineHeight: 1.6 }}>
            Situações recorrentes onde clareza, organização e leitura de cenário
            fazem diferença antes do próximo passo.
          </p>
        </div>
      </section>

      {/* BLOCO 1 */}
      <section style={{ padding: "60px 24px" }}>
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
            alignItems: "center",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80"
            alt="Pessoas reorganizando a própria vida"
            style={{ width: "100%", borderRadius: "12px" }}
          />
          <div>
            <h3 style={{ fontSize: "26px", marginBottom: "12px" }}>
              Pessoas reorganizando a própria vida
            </h3>
            <p style={{ lineHeight: 1.6 }}>
              Mudanças pessoais, recomeços, transições de fase e decisões que
              exigem mais clareza antes do próximo movimento.
            </p>
          </div>
        </div>
      </section>

      {/* BLOCO 2 */}
      <section style={{ padding: "60px 24px", background: "#f7f7f7" }}>
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
            alignItems: "center",
          }}
        >
          <div>
            <h3 style={{ fontSize: "26px", marginBottom: "12px" }}>
              Famílias lidando com múltiplas responsabilidades
            </h3>
            <p style={{ lineHeight: 1.6 }}>
              Organização do dia a dia, equilíbrio entre obrigações e decisões
              que impactam mais de uma pessoa ao mesmo tempo.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80"
            alt="Famílias e responsabilidades"
            style={{ width: "100%", borderRadius: "12px" }}
          />
        </div>
      </section>

      {/* BLOCO 3 */}
      <section style={{ padding: "60px 24px" }}>
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
            alignItems: "center",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80"
            alt="Ambientes profissionais"
            style={{ width: "100%", borderRadius: "12px" }}
          />
          <div>
            <h3 style={{ fontSize: "26px", marginBottom: "12px" }}>
              Pessoas em ambientes profissionais
            </h3>
            <p style={{ lineHeight: 1.6 }}>
              Pressão por desempenho, escolhas estratégicas e necessidade de
              entender o cenário antes de agir.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          padding: "48px 24px",
          textAlign: "center",
          fontSize: "14px",
          color: "#555",
          borderTop: "1px solid #e5e5e5",
          marginTop: "80px",
        }}
      >
        Robô Global™ by CREMENIO
      </footer>
    </main>
  );
}
