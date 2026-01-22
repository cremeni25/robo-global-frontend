import Header from "../components/Header";

export default function Nichos() {
  return (
    <>
      <Header />

      <main style={{ padding: "64px 0" }}>
        {/* HERO */}
        <section
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 24px",
            gap: "48px",
          }}
        >
          <div style={{ flex: 1 }}>
            <h1 style={{ fontSize: "42px", lineHeight: "1.2", marginBottom: "24px" }}>
              Cada pessoa vive um contexto diferente
            </h1>
            <p style={{ fontSize: "18px", color: "#444" }}>
              O Robô Global observa padrões de vida, necessidades recorrentes e
              situações reais enfrentadas por pessoas comuns. Aqui, nichos não
              são rótulos — são <strong>contextos humanos</strong>.
            </p>
          </div>

          <div style={{ flex: 1 }}>
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="Pessoas em conversa e tomada de decisão"
              style={{
                width: "100%",
                borderRadius: "16px",
                objectFit: "cover",
              }}
            />
          </div>
        </section>

        {/* ESPAÇO */}
        <div style={{ height: "96px" }} />

        {/* CONTEXTO 1 */}
        <section
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            gap: "48px",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
            alt="Pessoa refletindo sobre mudanças"
            style={{
              width: "45%",
              borderRadius: "16px",
            }}
          />

          <div style={{ width: "55%" }}>
            <h2>Pessoas reorganizando a própria vida</h2>
            <p>
              Mudanças pessoais, recomeços, transições de fase e decisões que
              exigem mais clareza antes do próximo passo.
            </p>
          </div>
        </section>

        <div style={{ height: "80px" }} />

        {/* CONTEXTO 2 */}
        <section
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            gap: "48px",
            flexDirection: "row-reverse",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c"
            alt="Família conversando"
            style={{
              width: "45%",
              borderRadius: "16px",
            }}
          />

          <div style={{ width: "55%" }}>
            <h2>Famílias lidando com múltiplas decisões</h2>
            <p>
              Contextos familiares envolvem responsabilidades cruzadas,
              prioridades conflitantes e escolhas que impactam mais de uma
              pessoa.
            </p>
          </div>
        </section>

        <div style={{ height: "80px" }} />

        {/* CONTEXTO 3 */}
        <section
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            gap: "48px",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
            alt="Ambiente profissional colaborativo"
            style={{
              width: "45%",
              borderRadius: "16px",
            }}
          />

          <div style={{ width: "55%" }}>
            <h2>Pessoas em ambientes profissionais</h2>
            <p>
              Pressões invisíveis, responsabilidades contínuas e decisões
              estratégicas fazem parte do cotidiano profissional moderno.
            </p>
          </div>
        </section>

        <div style={{ height: "80px" }} />

        {/* CONTEXTO 4 */}
        <section
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            gap: "48px",
            flexDirection: "row-reverse",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
            alt="Pessoa em fase madura refletindo"
            style={{
              width: "45%",
              borderRadius: "16px",
            }}
          />

          <div style={{ width: "55%" }}>
            <h2>Pessoas em fases mais maduras da vida</h2>
            <p>
              Reflexão, cautela e necessidade de segurança fazem parte desse
              contexto, onde decisões exigem mais consciência e menos impulso.
            </p>
          </div>
        </section>

        <div style={{ height: "96px" }} />

        {/* FECHAMENTO */}
        <section
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            padding: "0 24px",
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: "18px", color: "#444" }}>
            O Robô Global não entrega respostas prontas. Ele existe para{" "}
            <strong>ajudar a enxergar o contexto com mais clareza</strong>,
            reduzindo ruídos, pressões invisíveis e decisões precipitadas.
          </p>
        </section>
      </main>
    </>
  );
}
