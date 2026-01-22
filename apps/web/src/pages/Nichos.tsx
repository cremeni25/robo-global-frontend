export default function Nichos() {
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <div style={{ maxWidth: "1200px", width: "100%", padding: "40px 24px" }}>
        
        {/* HERO */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "40px",
            alignItems: "center",
            marginBottom: "80px",
          }}
        >
          <div>
            <h1 style={{ fontSize: "40px", marginBottom: "16px" }}>
              Cada pessoa vive um contexto diferente
            </h1>
            <p style={{ fontSize: "18px", lineHeight: 1.6 }}>
              O Robô Global observa padrões de vida, necessidades recorrentes e
              situações reais enfrentadas por pessoas comuns.
              <br />
              Aqui, nichos não são rótulos — são{" "}
              <strong>contextos humanos</strong>.
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="Pessoas analisando contextos"
            style={{
              width: "100%",
              borderRadius: "12px",
              objectFit: "cover",
            }}
          />
        </section>

        {/* INTRO */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "28px", marginBottom: "8px" }}>
            Contextos observados
          </h2>
          <p style={{ fontSize: "16px", color: "#555" }}>
            Situações recorrentes onde clareza e organização fazem diferença
            antes do próximo passo.
          </p>
        </section>

        {/* CARDS */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          <div style={cardStyle}>
            <img
              src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
              alt="Reorganização pessoal"
              style={imgStyle}
            />
            <h3>Pessoas reorganizando a própria vida</h3>
            <p>
              Mudanças pessoais e decisões que exigem mais clareza antes de
              avançar.
            </p>
          </div>

          <div style={cardStyle}>
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
              alt="Família"
              style={imgStyle}
            />
            <h3>Famílias lidando com responsabilidades</h3>
            <p>
              Equilíbrio entre obrigações e decisões que impactam mais de uma
              pessoa.
            </p>
          </div>

          <div style={cardStyle}>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
              alt="Ambiente profissional"
              style={imgStyle}
            />
            <h3>Pessoas em ambientes profissionais</h3>
            <p>
              Pressões, escolhas estratégicas e necessidade de leitura de
              cenário.
            </p>
          </div>
        </section>

        {/* FECHAMENTO */}
        <section style={{ marginTop: "80px", textAlign: "center" }}>
          <p style={{ fontSize: "18px", lineHeight: 1.6 }}>
            O Robô Global não entrega respostas prontas.
            <br />
            Ele existe para <strong>reduzir ruído</strong> e apoiar decisões mais
            conscientes.
          </p>
        </section>
      </div>
    </div>
  );
}

const cardStyle: React.CSSProperties = {
  background: "#fff",
  borderRadius: "12px",
  padding: "16px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
};

const imgStyle: React.CSSProperties = {
  width: "100%",
  height: "180px",
  objectFit: "cover",
  borderRadius: "8px",
  marginBottom: "12px",
};
