import Header from "../components/Header";

export default function Nichos() {
  return (
    <>
      <Header />

      <main style={{ padding: "4rem 2rem", maxWidth: 1200, margin: "0 auto" }}>
        {/* HERO */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3rem",
            alignItems: "center",
            marginBottom: "5rem",
          }}
        >
          <div>
            <h1 style={{ fontSize: "2.6rem", marginBottom: "1.5rem" }}>
              Cada pessoa vive um contexto diferente
            </h1>

            <p style={{ fontSize: "1.1rem", lineHeight: 1.6 }}>
              O Robô Global observa padrões de vida, necessidades recorrentes e
              situações reais enfrentadas por pessoas comuns.  
              Aqui, os nichos não são rótulos — são **contextos humanos**.
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="Pessoas em diferentes realidades do dia a dia"
            style={{
              width: "100%",
              borderRadius: 12,
              objectFit: "cover",
            }}
          />
        </section>

        {/* LISTA DE NICHOS */}
        <section>
          <h2 style={{ fontSize: "2rem", marginBottom: "3rem" }}>
            Contextos observados
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2rem",
            }}
          >
            {/* NICHO 1 */}
            <div style={cardStyle}>
              <img
                src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
                alt="Pessoa organizando a vida"
                style={imgStyle}
              />
              <h3>Pessoas reorganizando a própria vida</h3>
              <p>
                Momentos de transição, recomeços, decisões importantes ou
                necessidade de clareza antes do próximo passo.
              </p>
            </div>

            {/* NICHO 2 */}
            <div style={cardStyle}>
              <img
                src="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca"
                alt="Família em casa"
                style={imgStyle}
              />
              <h3>Famílias lidando com múltiplas responsabilidades</h3>
              <p>
                Organização do dia a dia, escolhas que afetam mais de uma pessoa
                e necessidade de equilíbrio entre demandas.
              </p>
            </div>

            {/* NICHO 3 */}
            <div style={cardStyle}>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                alt="Grupo de trabalho"
                style={imgStyle}
              />
              <h3>Pessoas em ambientes profissionais</h3>
              <p>
                Decisões estruturais, mudanças de rumo, avaliação de cenários e
                leitura de riscos invisíveis.
              </p>
            </div>

            {/* NICHO 4 */}
            <div style={cardStyle}>
              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9"
                alt="Pessoa idosa refletindo"
                style={imgStyle}
              />
              <h3>Pessoas em fases mais maduras da vida</h3>
              <p>
                Reflexão, cautela, necessidade de segurança e compreensão antes
                de qualquer escolha relevante.
              </p>
            </div>
          </div>
        </section>

        {/* FECHAMENTO */}
        <section style={{ marginTop: "5rem", maxWidth: 800 }}>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.6 }}>
            O Robô Global não oferece respostas prontas.  
            Ele existe para **ajudar a enxergar o contexto com mais clareza**,
            reduzindo ruídos, pressões invisíveis e decisões precipitadas.
          </p>
        </section>
      </main>
    </>
  );
}

/* estilos simples e humanos */
const cardStyle: React.CSSProperties = {
  border: "1px solid #eee",
  borderRadius: 12,
  padding: "1.5rem",
  background: "#fff",
};

const imgStyle: React.CSSProperties = {
  width: "100%",
  height: 180,
  objectFit: "cover",
  borderRadius: 8,
  marginBottom: "1rem",
};
