import Header from "../components/Header";

export default function Nichos() {
  return (
    <>
      <Header />

      <main style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 24px" }}>
        {/* HERO */}
        <section style={{ marginBottom: 80 }}>
          <h1 style={{ fontSize: 42, lineHeight: 1.2, marginBottom: 24 }}>
            Cada pessoa vive um contexto diferente.
          </h1>

          <p style={{ fontSize: 18, maxWidth: 720, marginBottom: 32 }}>
            O Robô Global observa padrões de vida, necessidades recorrentes e
            situações comuns que atravessam pessoas reais — sem rótulos,
            sem promessas e sem direcionamento.
          </p>

          <img
            src="https://images.unsplash.com/photo-1520975916090-3105956dac38"
            alt="Pessoas diferentes caminhando juntas"
            style={{
              width: "100%",
              maxHeight: 420,
              objectFit: "cover",
              borderRadius: 12,
            }}
          />
        </section>

        {/* INTRO */}
        <section style={{ marginBottom: 80 }}>
          <h2 style={{ fontSize: 28, marginBottom: 16 }}>
            O que chamamos de nichos
          </h2>

          <p style={{ fontSize: 17, maxWidth: 760 }}>
            Aqui, “nicho” não significa mercado, produto ou estratégia.
            Significa <strong>contexto de vida</strong>.
            Situações onde pessoas buscam organização, clareza, apoio e melhores
            decisões no dia a dia.
          </p>
        </section>

        {/* NICHOS */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 32,
            marginBottom: 100,
          }}
        >
          {[
            {
              titulo: "Rotina e organização",
              texto:
                "Pessoas que lidam com excesso de tarefas, decisões constantes e pouco tempo para refletir.",
              img: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe",
            },
            {
              titulo: "Mudanças de fase",
              texto:
                "Momentos de transição: aposentadoria, novos ciclos, recomeços pessoais ou familiares.",
              img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
            },
            {
              titulo: "Aprendizado e adaptação",
              texto:
                "Quem sente que o mundo muda rápido demais e busca compreender antes de agir.",
              img: "https://images.unsplash.com/photo-1519682337058-a94d519337bc",
            },
            {
              titulo: "Autonomia e escolhas",
              texto:
                "Pessoas que querem decidir com mais consciência, sem depender de opiniões externas.",
              img: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70",
            },
          ].map((item, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #eaeaea",
                borderRadius: 12,
                overflow: "hidden",
                background: "#fff",
              }}
            >
              <img
                src={item.img}
                alt={item.titulo}
                style={{ width: "100%", height: 180, objectFit: "cover" }}
              />
              <div style={{ padding: 20 }}>
                <h3 style={{ marginBottom: 12 }}>{item.titulo}</h3>
                <p style={{ fontSize: 15 }}>{item.texto}</p>
              </div>
            </div>
          ))}
        </section>

        {/* ENCERRAMENTO */}
        <section style={{ maxWidth: 720 }}>
          <h2 style={{ fontSize: 26, marginBottom: 16 }}>
            Sem promessa. Sem indução.
          </h2>

          <p style={{ fontSize: 17 }}>
            O Robô Global não indica caminhos prontos.
            Ele existe para ajudar pessoas a enxergar melhor o próprio contexto
            antes de qualquer decisão.
          </p>
        </section>
      </main>
    </>
  );
}
