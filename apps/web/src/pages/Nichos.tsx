export default function Nichos() {
  return (
    <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 24px" }}>
      {/* HERO */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "48px",
          alignItems: "center",
          marginBottom: "80px",
        }}
      >
        <div>
          <h1 style={{ fontSize: "42px", marginBottom: "16px" }}>
            Cada pessoa vive um contexto diferente
          </h1>
          <p style={{ fontSize: "18px", lineHeight: 1.6 }}>
            O Robô Global observa padrões de vida, necessidades recorrentes e
            situações reais enfrentadas por pessoas comuns. Aqui, nichos não
            são rótulos — são <strong>contextos humanos</strong>.
          </p>
        </div>

        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          alt="Pessoas em contexto de decisão"
          style={{
            width: "100%",
            borderRadius: "16px",
            objectFit: "cover",
          }}
        />
      </section>

      {/* CONTEXTOS */}
      <section>
        <h2 style={{ fontSize: "32px", marginBottom: "32px" }}>
          Contextos observados
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "32px",
          }}
        >
          {/* CARD 1 */}
          <div
            style={{
              border: "1px solid #e5e7eb",
              borderRadius: "16px",
              overflow: "hidden",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91"
              alt="Reorganização de vida"
              style={{ width: "100%", height: "180px", objectFit: "cover" }}
            />
            <div style={{ padding: "20px" }}>
              <h3>Pessoas reorganizando a própria vida</h3>
              <p>
                Mudanças pessoais, recomeços e decisões que exigem mais clareza
                antes do próximo passo.
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div
            style={{
              border: "1px solid #e5e7eb",
              borderRadius: "16px",
              overflow: "hidden",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
              alt="Famílias"
              style={{ width: "100%", height: "180px", objectFit: "cover" }}
            />
            <div style={{ padding: "20px" }}>
              <h3>Famílias lidando com múltiplas responsabilidades</h3>
              <p>
                Organização do dia a dia e equilíbrio entre decisões que afetam
                mais de uma pessoa.
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div
            style={{
              border: "1px solid #e5e7eb",
              borderRadius: "16px",
              overflow: "hidden",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
              alt="Ambiente profissional"
              style={{ width: "100%", height: "180px", objectFit: "cover" }}
            />
            <div style={{ padding: "20px" }}>
              <h3>Pessoas em ambientes profissionais</h3>
              <p>
                Pressão por desempenho, escolhas estratégicas e necessidade de
                entender o cenário antes de agir.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
