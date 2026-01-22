export default function Nichos() {
  return (
    <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "64px 24px" }}>
      {/* HERO */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "48px",
          alignItems: "center",
          marginBottom: "96px",
        }}
      >
        <div>
          <h1 style={{ fontSize: "40px", marginBottom: "16px" }}>
            Cada pessoa vive um contexto diferente
          </h1>
          <p style={{ fontSize: "18px", lineHeight: 1.6 }}>
            O Robô Global observa padrões de vida, necessidades recorrentes e
            situações reais enfrentadas por pessoas comuns. Aqui, nichos não são
            rótulos — são <strong>contextos humanos</strong>.
          </p>
        </div>

        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          alt="Pessoas analisando informações juntas"
          style={{ width: "100%", borderRadius: "16px" }}
        />
      </section>

      {/* CONTEXTOS */}
      <section style={{ marginBottom: "72px" }}>
        <h2 style={{ fontSize: "32px", marginBottom: "12px" }}>
          Contextos observados
        </h2>
        <p style={{ fontSize: "17px", maxWidth: "720px" }}>
          Situações recorrentes onde clareza, organização e leitura de cenário
          fazem diferença antes do próximo passo.
        </p>
      </section>

      {/* BLOCO 1 */}
      <ContextBlock
        image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
        title="Pessoas reorganizando a própria vida"
        text="Mudanças pessoais, recomeços, transições de fase e decisões que exigem mais clareza antes do próximo passo."
      />

      {/* BLOCO 2 */}
      <ContextBlock
        reverse
        image="https://images.unsplash.com/photo-1529156069898-49953e39b3ac"
        title="Famílias lidando com múltiplas responsabilidades"
        text="Organização do dia a dia, equilíbrio entre obrigações e decisões que impactam mais de uma pessoa ao mesmo tempo."
      />

      {/* BLOCO 3 */}
      <ContextBlock
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
        title="Pessoas em ambientes profissionais"
        text="Pressão por desempenho, escolhas estratégicas e necessidade de compreender melhor o cenário antes de agir."
      />

      {/* BLOCO 4 */}
      <ContextBlock
        reverse
        image="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
        title="Pessoas em fases mais maduras da vida"
        text="Reflexão, cautela, necessidade de segurança e compreensão antes de qualquer escolha relevante."
      />

      {/* ENCERRAMENTO */}
      <section
        style={{
          marginTop: "96px",
          padding: "40px",
          background: "#f4f6f8",
          borderRadius: "16px",
          fontSize: "18px",
        }}
      >
        O Robô Global não oferece respostas prontas. Ele existe para{" "}
        <strong>ajudar a enxergar o contexto com mais clareza</strong>, reduzindo
        ruídos, pressões invisíveis e decisões precipitadas.
      </section>
    </main>
  );
}

/* COMPONENTE INTERNO */
function ContextBlock({
  image,
  title,
  text,
  reverse,
}: {
  image: string;
  title: string;
  text: string;
  reverse?: boolean;
}) {
  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "48px",
        alignItems: "center",
        marginBottom: "96px",
        flexDirection: reverse ? "row-reverse" : "row",
      }}
    >
      {!reverse && (
        <img
          src={image}
          alt={title}
          style={{ width: "100%", borderRadius: "16px" }}
        />
      )}

      <div>
        <h3 style={{ fontSize: "26px", marginBottom: "12px" }}>{title}</h3>
        <p style={{ fontSize: "17px", lineHeight: 1.6 }}>{text}</p>
      </div>

      {reverse && (
        <img
          src={image}
          alt={title}
          style={{ width: "100%", borderRadius: "16px" }}
        />
      )}
    </section>
  );
}
