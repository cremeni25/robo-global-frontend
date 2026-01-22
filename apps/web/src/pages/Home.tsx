export default function Home() {
  return (
    <main style={{ padding: "64px 24px", maxWidth: "1100px", margin: "0 auto" }}>
      
      {/* BLOCO 1 — ABERTURA HUMANA */}
      <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "center", marginBottom: "96px" }}>
        <div>
          <h1 style={{ fontSize: "40px", lineHeight: "1.2", marginBottom: "24px" }}>
            Entender o contexto muda a forma de decidir
          </h1>

          <p style={{ fontSize: "18px", lineHeight: "1.6", color: "#444" }}>
            Todos os dias lidamos com escolhas — algumas simples, outras complexas.
            O Robô Global existe para ajudar na leitura de cenários, organizando
            informações e oferecendo clareza antes do próximo passo.
          </p>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe"
            alt="Pessoa refletindo calmamente em ambiente cotidiano"
            style={{ width: "100%", borderRadius: "12px" }}
          />
        </div>
      </section>

      {/* BLOCO 2 — O QUE É */}
      <section style={{ marginBottom: "80px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>
          O que é o Robô Global
        </h2>

        <p style={{ fontSize: "17px", lineHeight: "1.6", color: "#444", maxWidth: "760px" }}>
          O Robô Global é um ambiente de leitura e organização de contextos.
          Ele ajuda a identificar padrões, esclarecer situações e apoiar
          decisões mais conscientes no dia a dia.
        </p>
      </section>

      {/* BLOCO 3 — PARA QUE SERVE */}
      <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", marginBottom: "96px", alignItems: "center" }}>
        <div>
          <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>
            Para que ele serve
          </h2>

          <ul style={{ fontSize: "17px", lineHeight: "1.8", color: "#444", paddingLeft: "18px" }}>
            <li>Ajudar a entender situações antes de decidir</li>
            <li>Organizar informações que parecem confusas</li>
            <li>Perceber pressões invisíveis que influenciam escolhas</li>
            <li>Refletir com mais calma sobre caminhos possíveis</li>
          </ul>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="Pessoas conversando de forma tranquila em ambiente cotidiano"
            style={{ width: "100%", borderRadius: "12px" }}
          />
        </div>
      </section>

      {/* BLOCO 4 — COMO UTILIZAR */}
      <section style={{ marginBottom: "96px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>
          Como utilizar a plataforma
        </h2>

        <p style={{ fontSize: "17px", lineHeight: "1.6", color: "#444", maxWidth: "760px" }}>
          Você pode explorar contextos, refletir sobre situações e avançar
          no seu próprio ritmo. Não há respostas prontas — apenas apoio
          para decisões mais conscientes.
        </p>
      </section>

      {/* BLOCO 5 — FECHAMENTO */}
      <section>
        <p style={{ fontSize: "18px", lineHeight: "1.6", color: "#333", maxWidth: "760px" }}>
          Cada pessoa vive um momento diferente.
          Entender o contexto certo pode mudar completamente o próximo passo.
        </p>
      </section>

    </main>
  );
}
